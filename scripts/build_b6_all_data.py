#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Master aggregator for Tingkatan 4 Bab 6: Cahaya dan Optik (132 Soalan).
"""
import sys
sys.path.insert(0, ".")
from scripts.b6_k1_data import get_k1_questions
from scripts.b6_k2_part1_data import get_k2_part1_questions
from scripts.b6_k2_part2_data import get_k2_part2_questions
from scripts.b6_k3_part1_data import get_k3_part1_questions
from scripts.b6_k3_part2_data import get_k3_part2_questions
from scripts.b6_k4_data import get_k4_questions

def get_all_b6_questions():
    all_q = []
    all_q.extend(get_k1_questions())
    all_q.extend(get_k2_part1_questions())
    all_q.extend(get_k2_part2_questions())
    all_q.extend(get_k3_part1_questions())
    all_q.extend(get_k3_part2_questions())
    all_q.extend(get_k4_questions())
    return all_q

if __name__ == "__main__":
    qs = get_all_b6_questions()
    print(f'Total Bab 6 questions loaded: {len(qs)}')
    print('K1:', len(get_k1_questions()))
    print('K2:', len(get_k2_part1_questions()) + len(get_k2_part2_questions()))
    print('K3:', len(get_k3_part1_questions()) + len(get_k3_part2_questions()))
    print('K4:', len(get_k4_questions()))
