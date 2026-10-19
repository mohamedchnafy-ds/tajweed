# -*- coding: utf-8 -*-
"""
Assembler script to combine Chapters 1 to 16 and write src/data/chaptersData.ts.
"""

import sys
import os
import json

# Ensure scripts dir is in sys.path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from data_chapters_1_4 import get_chapters_1_4
from data_chapters_5_8 import get_chapters_5_8
from data_chapters_9_12 import get_chapters_9_12
from data_chapters_13_16 import get_chapters_13_16

def assemble():
    c1_4 = get_chapters_1_4()
    c5_8 = get_chapters_5_8()
    c9_12 = get_chapters_9_12()
    c13_16 = get_chapters_13_16()

    all_chapters = c1_4 + c5_8 + c9_12 + c13_16

    print(f"Total chapters loaded: {len(all_chapters)}")
    assert len(all_chapters) == 16, f"Expected 16 chapters, got {len(all_chapters)}"

    for i, ch in enumerate(all_chapters, start=1):
        assert ch["number"] == i, f"Chapter index {i} mismatch: got {ch.get('number')}"
        assert "subrules" in ch and len(ch["subrules"]) > 0, f"Chapter {i} has no subrules"
        assert "quizzes" in ch and len(ch["quizzes"]) > 0, f"Chapter {i} has no quizzes"
        print(f"Chapter {i}: {ch['titleFr']} - {len(ch['subrules'])} subrules, {len(ch['quizzes'])} quizzes")

        # Check subrules enrichments
        for sr in ch["subrules"]:
            assert "definitionLughatan" in sr, f"Missing definitionLughatan in {sr['id']}"
            assert "definitionIstilahan" in sr, f"Missing definitionIstilahan in {sr['id']}"
            assert "physiologicalDetails" in sr, f"Missing physiologicalDetails in {sr['id']}"
            assert "phoneticReasonFr" in sr, f"Missing phoneticReasonFr in {sr['id']}"
            assert "matnJazariyyah" in sr, f"Missing matnJazariyyah in {sr['id']}"

    # Serialize to TypeScript
    ts_content = "import { Chapter } from '../types/tajweed';\n\n"
    ts_content += "export const CHAPTERS_DATA: Chapter[] = "
    ts_content += json.dumps(all_chapters, ensure_ascii=False, indent=2)
    ts_content += ";\n\n"
    ts_content += "export const PILOT_CHAPTERS: Chapter[] = CHAPTERS_DATA;\n"
    ts_content += "export const ALL_BOOK_CHAPTERS: Chapter[] = CHAPTERS_DATA;\n"

    target_file = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "src", "data", "chaptersData.ts"))
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(ts_content)

    print(f"Successfully wrote {len(all_chapters)} chapters to {target_file}!")

if __name__ == "__main__":
    assemble()
