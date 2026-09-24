import os
import json
import re
from scripts.build_b5_dataset import classify_dskp_b5, clean_ocr_typos_b5

ANSWERS = {}
ans_path = 'scratch/t4_b5_answers_verified.json'
if os.path.exists(ans_path):
    with open(ans_path, 'r', encoding='utf-8') as f:
        ANSWERS = json.load(f)

DIAGRAM_URLS = {}
diag_path = 'scratch/t4_b5_diagram_urls.json'
if os.path.exists(diag_path):
    with open(diag_path, 'r', encoding='utf-8') as f:
        DIAGRAM_URLS = json.load(f)

def make_b5_q(qid, no, aras, konstruk, soalan, pilihan, rajah_key="", sumber="Percubaan SPM 2023", tahun=2023):
    ans_data = ANSWERS.get(qid, {})
    jawapan = ans_data.get('jawapan', 'A')
    penerangan = ans_data.get('penerangan', f'Jawapan yang tepat ialah {jawapan}.')
    
    k_num = int(qid.split('_')[3][1])
    dskp = classify_dskp_b5(soalan, k_num)
    
    rajah_url = DIAGRAM_URLS.get(rajah_key, "") if rajah_key else ""
    
    # Format options
    formatted_opts = []
    for opt in pilihan:
        formatted_opts.append({
            "id": opt['id'],
            "teks": clean_ocr_typos_b5(opt['teks'])
        })
        
    return {
        "id": qid,
        "sumber": sumber,
        "tahun": tahun,
        "noSoalanAsal": no,
        "sk": dskp["sk"],
        "sp": dskp["sp"],
        "spKod": dskp["spKod"],
        "rujukanDskp": dskp["rujukanDskp"],
        "rujukanBukuTeks": dskp["rujukanBukuTeks"],
        "rujukanCheatnote": dskp["rujukanCheatnote"],
        "kertas": 1,
        "tingkatan": 4,
        "babNo": 5,
        "babNama": "Gelombang",
        "bidang": "Gelombang, Cahaya dan Optik",
        "topik": dskp["topik"],
        "aras": aras,
        "konstruk": konstruk,
        "soalan": clean_ocr_typos_b5(soalan),
        "rajahUrl": rajah_url,
        "pilihan": formatted_opts,
        "jawapanBetul": jawapan,
        "penerangan": penerangan,
        "markah": 1,
        "statusSemakan": "Disemak (Modul K1)",
        "jawapan": jawapan
    }
