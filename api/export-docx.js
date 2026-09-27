const docx = require('docx');
const DocxGenerator = require('../docx-generator.js');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const mode = data.mode || 'kertas1';
    const docType = data.type || 'exam';
    const questions = data.questions || [];
    const meta = {
      tingkatan: data.tingkatan || 5,
      tahun: data.tahun || 2026,
      examTitle: data.nama_peperiksaan || 'PEPERIKSAAN PERCUBAAN SPM',
      panitia: data.panitia || 'Fizik',
      sekolah: data.sekolah || ''
    };

    let doc;
    let filename;
    if (docType === 'skema') {
      doc = await DocxGenerator.buildSkemaDocument(mode, questions, meta);
      filename = `Skema_Fizik_${mode === 'kertas2' ? 'Kertas2' : 'Kertas1'}_${meta.tahun}.docx`;
    } else {
      doc = await DocxGenerator.buildExamDocument(mode, questions, meta);
      filename = `${mode === 'kertas2' ? 'Kertas2' : 'Kertas1'}_Fizik_SPM_${meta.tahun}.docx`;
    }

    const buffer = await docx.Packer.toBuffer(doc);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', buffer.length);
    return res.status(200).send(buffer);
  } catch (err) {
    console.error('API export-docx error:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
};
