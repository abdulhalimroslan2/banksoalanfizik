import http.server
import socketserver
import json
import os
import tempfile
import docx_engine

PORT = 8192

class DocxHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == "/api/export-docx":
            try:
                content_len = int(self.headers.get('Content-Length', 0))
                post_body = self.rfile.read(content_len)
                data = json.loads(post_body.decode('utf-8'))
                
                mode = data.get("mode", "kertas1")
                doc_type = data.get("type", "exam") # "exam" or "skema"
                questions = data.get("questions", [])
                tingkatan = data.get("tingkatan", 5)
                tahun = data.get("tahun", 2026)
                nama_peperiksaan = data.get("nama_peperiksaan", "PEPERIKSAAN PERCUBAAN SPM")
                panitia = data.get("panitia", "Fizik")
                sekolah = data.get("sekolah", "")
                
                with tempfile.NamedTemporaryFile(suffix=".docx", delete=False) as tmp:
                    tmp_path = tmp.name
                    
                if mode == "kertas1":
                    if doc_type == "skema":
                        docx_engine.build_k1_skema_docx(questions, tmp_path, tingkatan, tahun, nama_peperiksaan=nama_peperiksaan)
                        filename = f"Skema_Fizik_Kertas1_{tahun}.docx"
                    else:
                        docx_engine.build_k1_exam_docx(questions, tmp_path, tingkatan, tahun, nama_peperiksaan=nama_peperiksaan, panitia=panitia, sekolah=sekolah)
                        filename = f"Kertas1_Fizik_SPM_{tahun}.docx"
                else: # kertas2
                    if doc_type == "skema":
                        docx_engine.build_k2_skema_docx(questions, tmp_path, tingkatan, tahun, nama_peperiksaan=nama_peperiksaan)
                        filename = f"Skema_Fizik_Kertas2_{tahun}.docx"
                    else:
                        docx_engine.build_k2_exam_docx(questions, tmp_path, tingkatan, tahun, nama_peperiksaan=nama_peperiksaan, panitia=panitia, sekolah=sekolah)
                        filename = f"Kertas2_Fizik_SPM_{tahun}.docx"
                        
                with open(tmp_path, "rb") as f:
                    file_bytes = f.read()
                try:
                    os.remove(tmp_path)
                except:
                    pass
                    
                self.send_response(200)
                self.send_header("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
                self.send_header("Content-Disposition", f'attachment; filename="{filename}"')
                self.send_header("Content-Length", str(len(file_bytes)))
                self.end_headers()
                self.wfile.write(file_bytes)
                return
            except Exception as e:
                print(f"Error generating docx: {e}")
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
                return
                
        self.send_response(404)
        self.end_headers()

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), DocxHandler) as httpd:
        print(f"Serving HTTP on port {PORT} with DOCX API support...")
        httpd.serve_forever()
