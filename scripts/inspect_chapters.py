# -*- coding: utf-8 -*-
import re

with open('src/data/chaptersData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Match chapter blocks in PILOT_CHAPTERS
pilot_part = text[text.find('export const PILOT_CHAPTERS'):]
matches = re.findall(r'[\'"]?number[\'"]?\s*:\s*(\d+)', pilot_part)
print('Pilot chapter numbers:', matches)

# Find all subrule IDs per chapter
chap_splits = re.split(r'\{\s*[\'"]?id[\'"]?\s*:\s*[\'"]chap-(\d+)[\'"]', pilot_part)
print(f'Total chapter segments: {len(chap_splits) // 2}')
for i in range(1, len(chap_splits), 2):
    c_num = chap_splits[i]
    c_body = chap_splits[i+1]
    sr_names = re.findall(r'[\'"]?nameFr[\'"]?\s*:\s*[\'"]([^\'"]+)[\'"]', c_body)
    print(f"\n--- Chapter {c_num} ({len(sr_names)} subrules) ---")
    for sr in sr_names:
        print(f"  * {sr}")
