import re
import json

with open('scratch/t4_b3_stream_lines.txt') as f:
    raw_lines = [l.strip() for l in f]

# Remove Px_Cy prefix for clean text stream
clean_lines = []
for l in raw_lines:
    if ': ' in l:
        clean_lines.append(l.split(': ', 1)[1])
    else:
        clean_lines.append(l)

full_stream = '\n'.join(clean_lines)

# Split into 4 parts
# Part 1: K1 (starts at KONSTRUK 1: MENGINGAT)
# Part 2: K2 (starts at KONSTRUK 2: MEMAHAMI)
# Part 3: K3 (starts at KONSTRUK 3: MENGAPLIKASI)
# Part 4: K4 (starts at KONSTRUK 4:)

idx_k1 = full_stream.find("KONSTRUK 1: MENGINGAT")
idx_k2 = full_stream.find("KONSTRUK 2: MEMAHAMI")
idx_k3 = full_stream.find("KONSTRUK 3: MENGAPLIKASI")
idx_k4 = full_stream.find("KONSTRUK 4:")

k1_text = full_stream[idx_k1:idx_k2]
k2_text = full_stream[idx_k2:idx_k3]
k3_text = full_stream[idx_k3:idx_k4]
k4_text = full_stream[idx_k4:]

print(f"K1 text: {len(k1_text)} chars")
print(f"K2 text: {len(k2_text)} chars")
print(f"K3 text: {len(k3_text)} chars")
print(f"K4 text: {len(k4_text)} chars")
