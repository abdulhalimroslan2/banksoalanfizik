import json
from scripts.k1_questions import get_k1_questions
from scripts.k2_questions_part1 import get_k2_part1_questions
from scripts.k2_questions_part2 import get_k2_part2_questions
from scripts.k3_questions import get_k3_questions
from scripts.k4_questions import get_k4_questions

def assemble_all():
    k1 = get_k1_questions()
    k2_1 = get_k2_part1_questions()
    k2_2 = get_k2_part2_questions()
    k3 = get_k3_questions()
    k4 = get_k4_questions()
    
    all_qs = k1 + k2_1 + k2_2 + k3 + k4
    print(f"Total questions assembled: {len(all_qs)}")
    print(f"  K1: {len(k1)}")
    print(f"  K2: {len(k2_1) + len(k2_2)} ({len(k2_1)} + {len(k2_2)})")
    print(f"  K3: {len(k3)}")
    print(f"  K4: {len(k4)}")
    
    # Verify unique IDs
    ids = [q['id'] for q in all_qs]
    assert len(ids) == len(set(ids)), f"Duplicate IDs detected! Total: {len(ids)}, Unique: {len(set(ids))}"
    assert len(all_qs) == 93, f"Expected 93 questions, got {len(all_qs)}"
    
    # Save to scratch/t4_b3_full_questions.json
    out_path = 'scratch/t4_b3_full_questions.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(all_qs, f, indent=2, ensure_ascii=False)
    print(f"Successfully saved {len(all_qs)} questions to {out_path}.")
    
    return all_qs

if __name__ == '__main__':
    assemble_all()
