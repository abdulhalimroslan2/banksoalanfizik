# -*- coding: utf-8 -*-
"""
Dataset Konstruk 2: Memahami (103 Soalan)
Tingkatan 4 Bab 5: Gelombang (Waves)
"""

from scripts.b5_k2_part1_data import get_k2_part1_questions
from scripts.b5_k2_part2_data import get_k2_part2_questions

def get_k2_questions():
    return get_k2_part1_questions() + get_k2_part2_questions()
