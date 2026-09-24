# -*- coding: utf-8 -*-
"""
Master Dataset Aggregator for Tingkatan 4 Bab 5: Gelombang (Waves)
Total: 148 Soalan (K1=8, K2=103, K3=30, K4=7)
"""

from scripts.b5_k1_data import get_k1_questions
from scripts.b5_k2_data import get_k2_questions
from scripts.b5_k3_data import get_k3_questions
from scripts.b5_k4_data import get_k4_questions

def get_all_b5_questions():
    k1 = get_k1_questions()
    k2 = get_k2_questions()
    k3 = get_k3_questions()
    k4 = get_k4_questions()
    return k1 + k2 + k3 + k4

if __name__ == '__main__':
    all_qs = get_all_b5_questions()
    print(f'Total Bab 5 Questions: {len(all_qs)}')
    k_counts = {}
    for q in all_qs:
        k = q['konstruk']
        k_counts[k] = k_counts.get(k, 0) + 1
    for k, v in k_counts.items():
        print(f'  {k}: {v}')
