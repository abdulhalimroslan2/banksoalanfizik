import json
import re

with open('scratch/t4_b3_answers_verified.json', 'r', encoding='utf-8') as f:
    ANSWERS = json.load(f)

with open('scratch/t4_b3_diagram_urls.json', 'r', encoding='utf-8') as f:
    DIAGRAM_URLS = json.load(f)

from scripts.build_b3_dataset import classify_dskp

def make_q(qid, no, aras, konstruk, soalan, pilihan, rajah_key="", sumber="Percubaan SPM 2023", tahun=2023):
    ans_data = ANSWERS.get(qid, {})
    jawapan = ans_data.get('jawapan', 'A')
    penerangan = ans_data.get('penerangan', f'Jawapan yang tepat ialah {jawapan}.')
    
    dskp = classify_dskp(soalan, int(qid.split('_')[3][1]))
    
    rajah_url = DIAGRAM_URLS.get(rajah_key, "") if rajah_key else ""
    
    # Format options
    formatted_opts = []
    for opt in pilihan:
        opt_id = opt['id']
        opt_teks = opt['teks']
        formatted_opts.append({
            "id": opt_id,
            "teks": opt_teks
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
        "babNo": 3,
        "babNama": "Kegravitian",
        "bidang": "Mekanik Newton",
        "topik": dskp["topik"],
        "aras": aras,
        "konstruk": konstruk,
        "soalan": soalan,
        "rajahUrl": rajah_url,
        "pilihan": formatted_opts,
        "jawapanBetul": jawapan,
        "penerangan": penerangan,
        "markah": 1,
        "statusSemakan": "Disemak (Modul K1)",
        "jawapan": jawapan
    }

print("make_q helper defined.")
