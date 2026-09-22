#!/usr/bin/env python3
"""
Cloudflare R2 Uploader & Diagram Extraction Engine
Hub Bank Soalan Fizik SPM
"""

import os
import io
import boto3
from PIL import Image, ImageOps

# Load credentials from .env
ENV_PATH = os.path.join(os.path.dirname(__file__), "..", ".env")
env = {}
if os.path.exists(ENV_PATH):
    with open(ENV_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip()

def get_s3_client():
    return boto3.client(
        "s3",
        endpoint_url=env.get("R2_ENDPOINT_URL"),
        aws_access_key_id=env.get("R2_ACCESS_KEY_ID"),
        aws_secret_access_key=env.get("R2_SECRET_ACCESS_KEY"),
        region_name="auto"
    )

def upload_bytes(data: bytes, r2_key: str, content_type: str = "image/webp") -> str:
    """Upload raw bytes to Cloudflare R2 and return the public CDN URL."""
    s3 = get_s3_client()
    bucket = env.get("R2_BUCKET_NAME", "fizik-spm-bank")
    s3.put_object(
        Bucket=bucket,
        Key=r2_key,
        Body=data,
        ContentType=content_type,
        CacheControl="public, max-age=31536000, immutable"
    )
    domain = env.get("R2_PUBLIC_DOMAIN", "").rstrip("/")
    return f"{domain}/{r2_key}"

def upload_file(local_path: str, r2_key: str = None) -> str:
    """Upload a local image/file to Cloudflare R2 and return public URL."""
    if not os.path.exists(local_path):
        raise FileNotFoundError(f"Local file not found: {local_path}")
    
    filename = os.path.basename(local_path)
    if not r2_key:
        r2_key = f"images/{filename}"
    
    ext = os.path.splitext(filename)[1].lower()
    content_types = {
        ".webp": "image/webp",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".svg": "image/svg+xml"
    }
    content_type = content_types.get(ext, "application/octet-stream")
    
    with open(local_path, "rb") as f:
        data = f.read()
    
    return upload_bytes(data, r2_key, content_type)

def trim_and_optimize_image(image: Image.Image) -> bytes:
    """Auto-trim whitespace and optimize image to WebP."""
    # Convert RGBA or RGB
    if image.mode not in ("RGB", "RGBA"):
        image = image.convert("RGB")
    
    # Auto-trim white borders if predominantly white
    bg = Image.new(image.mode, image.size, (255, 255, 255))
    diff = ImageOps.invert(image.convert("RGB"))
    bbox = diff.getbbox()
    if bbox:
        # Add small 10px padding
        w, h = image.size
        pad = 12
        crop_box = (
            max(0, bbox[0] - pad),
            max(0, bbox[1] - pad),
            min(w, bbox[2] + pad),
            min(h, bbox[3] + pad)
        )
        image = image.crop(crop_box)
    
    out_io = io.BytesIO()
    image.save(out_io, format="WEBP", quality=92, method=6)
    return out_io.getvalue()

if __name__ == "__main__":
    print("Testing R2 Uploader utility...")
    # Create a 200x100 dummy test diagram
    img = Image.new("RGB", (300, 150), color=(255, 255, 255))
    webp_data = trim_and_optimize_image(img)
    url = upload_bytes(webp_data, "test/sample_diagram.webp")
    print("R2 Uploader is READY!")
    print("Test Image URL:", url)
