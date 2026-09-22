#!/usr/bin/env python3
import os
import sys
import json
import re
import argparse
import docx_engine

def load_bank_questions():
    with open("dskp-data.js", "r", encoding="utf-8") as f:
        content = f.read()
    match = re.search(r'const\s+QUESTION_BANK\s*=\s*(\[[\s\S]*?\]);', content)
    if not match:
        raise ValueError("Could not extract QUESTION_BANK from dskp-data.js")
    # Clean up JS object to JSON if needed or eval via node
    import subprocess
    node_cmd = ["node", "-e", "const fs=require('fs'); const c=fs.readFileSync('dskp-data.js','utf8'); const m=c.match(/const QUESTION_BANK = (\\[[\\s\\S]*?\\]);/); console.log(JSON.stringify(eval(m[1])));"]
    res = subprocess.run(node_cmd, capture_output=True, text=True, check=True)
    return json.loads(res.stdout)

def main():
    parser = argparse.ArgumentParser(description="Generate SPM Physics Exam & Skema DOCX files based on official templates.")
    parser.add_argument("--paper", choices=["1", "2", "all"], default="all", help="Kertas 1 or Kertas 2")
    parser.add_argument("--type", choices=["exam", "skema", "all"], default="all", help="Exam paper or Skema")
    parser.add_argument("--output-dir", default="output_docx", help="Output directory")
    args = parser.parse_args()

    os.makedirs(args.output_dir, exist_ok=True)
    all_qs = load_bank_questions()
    
    k1_qs = [q for q in all_qs if q.get("kertas") == 1]
    # take first 40 for standard set
    k1_set = k1_qs[:40] if len(k1_qs) >= 40 else k1_qs
    
    k2_qs = [q for q in all_qs if q.get("kertas") == 2]
    k2_set = k2_qs[:11] if len(k2_qs) >= 11 else k2_qs

    papers = ["1", "2"] if args.paper == "all" else [args.paper]
    types = ["exam", "skema"] if args.type == "all" else [args.type]

    for p in papers:
        for t in types:
            if p == "1":
                if t == "exam":
                    out_path = os.path.join(args.output_dir, "KERTAS_1_FIZIK_SPM_2026.docx")
                    print(f"Generating Kertas 1 Exam ({len(k1_set)} soalan) -> {out_path}...")
                    docx_engine.build_k1_exam_docx(k1_set, out_path, 4, 2026)
                    print(f"✓ Berjaya: {out_path}")
                elif t == "skema":
                    out_path = os.path.join(args.output_dir, "SKEMA_KERTAS_1_FIZIK_SPM_2026.docx")
                    print(f"Generating Kertas 1 Skema -> {out_path}...")
                    docx_engine.build_k1_skema_docx(k1_set, out_path, 4, 2026)
                    print(f"✓ Berjaya: {out_path}")
            elif p == "2":
                if t == "exam":
                    out_path = os.path.join(args.output_dir, "KERTAS_2_FIZIK_SPM_2026.docx")
                    print(f"Generating Kertas 2 Exam ({len(k2_set)} soalan) -> {out_path}...")
                    docx_engine.build_k2_exam_docx(k2_set, out_path, 4, 2026)
                    print(f"✓ Berjaya: {out_path}")
                elif t == "skema":
                    out_path = os.path.join(args.output_dir, "SKEMA_KERTAS_2_FIZIK_SPM_2026.docx")
                    print(f"Generating Kertas 2 Skema -> {out_path}...")
                    docx_engine.build_k2_skema_docx(k2_set, out_path, 4, 2026)
                    print(f"✓ Berjaya: {out_path}")

if __name__ == "__main__":
    main()
