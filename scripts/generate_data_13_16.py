# -*- coding: utf-8 -*-
"""
Generator for data_chapters_13_16.py containing:
- Chapter 13: Rencontre de Deux Soukoûns (Iltiqā' As-Sākinayn)
- Chapter 14: Les Lettres Isolées & Débuts de Sourates (Fawātih As-Suwar)
- Chapter 15: Distinctions Subtiles : Tā'āt & Ahkām Al-Waqf
- Chapter 16: Cas Particuliers & Récitation de Hafs 'An 'Āsim
"""

import sys

content = '''# -*- coding: utf-8 -*-
"""
Enriched Chapters 13 to 16:
- Chapter 13: Rencontre de Deux Soukoûns (Iltiqā' As-Sākinayn)
- Chapter 14: Les Lettres Isolées & Débuts de Sourates (Fawātih As-Suwar)
- Chapter 15: Distinctions Subtiles : Tā'āt & Ahkām Al-Waqf
- Chapter 16: Cas Particuliers & Récitation de Hafs 'An 'Āsim
"""

def get_chapters_13_16():
    return [
        # ==========================================
        # CHAPITRE 13 : RENCONTRE DE DEUX SOUKOÛNS
        # ==========================================
        {
            "id": "chap-13",
            "number": 13,
            "slug": "iltiqa-sakinayn",
            "titleFr": "Rencontre de Deux Soukoûns (Iltiqā' As-Sākinayn)",
            "titleAr": "اِلْتِقَاءُ السَّاكِنَيْنِ",
            "category": "advanced",
            "estimatedMinutes": 20,
            "isPilotChapter": True,
            "summaryFr": "Comprendre l'interdiction phonologique fondamentale en arabe d'enchaîner deux consonnes soukounées entre deux mots en continu. Découvrir les solutions sacrées : vocalisation de secours en Kasrah (le fameux Nūn Qutnī après Tanwīn), Dammah ou Fathah, ou l'élision complète de la lettre de prolongation (Madd).",
            "infographicPoints": [
                "Dans un même mot : La rencontre de 2 soukoûns est autorisée et naturelle à l'arrêt (ex: Al-'Asr, Quraysh) et compensée par 6 temps dans le Madd Lāzim (Al-Jāāānn).",
                "Entre deux mots : En continu (Wasl), l'arabe interdit catégoriquement la succession de deux soukoûns. Le conflit doit obligatoirement être résolu.",
                "Cas 1 (Tanwīn + Wasl) : Le Tanwīn cache un Nūn sākinah. Devant Hamzat Al-Wasl, il prend une KASRAH de secours (Nūhun ibnahū -> Nūhuni-bnahū) : c'est le Nūn Qutnī !",
                "Cas 2 (Madd + Wasl) : La lettre de prolongation s'efface complètement à l'oral lors de la liaison (Wa qālā-l-hamdu au lieu de Wa qālāā al-hamdu).",
                "Règle d'or : L'élision du Madd n'a lieu qu'en liaison continue (Wasl). Si l'on s'arrête sur le premier mot (Waqf), le Madd naturel de 2 temps est intégralement rétabli !",
                "Les 4 modes de résolution : 1. Kasrah de secours (majorité), 2. Dammah (Mīm du pluriel & Wāw de communauté), 3. Fathah (Min, duel Tā', Alif-Lām-Mīm Allāh), 4. Hadhf (élision du Madd)."
            ],
            "subrules": [
                {
                    "id": "iltiqa-general-rules",
                    "nameFr": "1. Règle Générale : Dans un Mot vs Entre Deux Mots",
                    "nameAr": "حُكْمُ الْتِقَاءِ السَّاكِنَيْنِ فِي كَلِمَةٍ وَكَلِمَتَيْنِ",
                    "mnemonic": "Même mot = Toléré à l'arrêt | Deux mots = Résolution obligatoire en continu",
                    "letters": [],
                    "definitionFr": "Un sākin (consonne soukounée) est une lettre dépourvue de voyelle. En phonologie coranique, deux sākins peuvent coexister à la pause dans un mot (ex: Al-'Asr), mais ne peuvent jamais être enchaînés à la suite entre deux mots consécutifs en récitation liée.",
                    "definitionLughatan": {
                        "ar": "الِالْتِقَاءُ: الِاجْتِمَاعُ وَالمُلَاقَاةُ. وَالسَّاكِنَانِ: كُلُّ حَرْفَيْنِ لَا حَرَكَةَ لَهُمَا.",
                        "fr": "La rencontre, la jonction de deux consonnes ou sons privés de voyelles dynamiques."
                    },
                    "definitionIstilahan": {
                        "ar": "أَنْ يَتَتَابَعَ حَرْفَانِ سَاكِنَانِ فِي كَلِمَةٍ وَاحِدَةٍ (جَائِزٌ وَقْفاً وَفِي المَدِّ اللَّازِمِ) أَوْ فِي كَلِمَتَيْنِ (مَمْنُوعٌ عِنْدَ الوَصْلِ فَيَجِبُ التَّخَلُّصُ مِنْهُ).",
                        "fr": "La succession consécutive de deux soukoûns : permise dans un même mot lors de la pause ou compensée par un Madd Lāzim de 6 temps, mais formellement prohibée en liaison continue entre deux mots distincts."
                    },
                    "mechanismFr": "À l'arrêt, l'appareil phonatoire produit un appui expiratoire stable sur la consonne avant l'extinction de la voix. Entre deux mots, la continuité du flux aérien ne tolère pas deux inerties successives : le lecteur doit soit mouvoir le premier soukoûn par une voyelle de dépannage, soit effacer la voyelle longue précédente.",
                    "physiologicalDetails": {
                        "tongue": "Repositionnée instantanément pour vocaliser le premier son immobile ou enchaîner sans heurt.",
                        "lips": "S'adaptent à la voyelle de secours appliquée ou restent neutres en cas d'élision.",
                        "vocalCords": "Vibration continue pour assurer la liaison mélodique sans coupure glottique artificielle.",
                        "airflow": "Flux continu sans à-coups ni blocage thoracique."
                    },
                    "phoneticReasonFr": "L'articulation arabe repose sur l'alternance consonne-voyelle (CV-CV). Deux consonnes consécutives sans voyelle en plein débit créent une impossibilité motrice ou une saccade disgracieuse (Lahn Jalī).",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَإِنْ تَلاَقَى سَاكِنَانِ فَاكْسِرِ * مَا كَانَ مِنْ تَأْنِيثٍ أَو مِثْلِ اصْبِرِ\\nوَاحْذِفْ حُرُوفَ المَدِّ إِنْ سَاكِنٌ أَتَى * مِنْ بَعْدِهَا وَالضَّمُّ لِلْوَاوِ انْتَقَى",
                        "transliteration": "Wa in talāqā sākināni faksiri * Mā kāna min ta'nīthin aw mithli-sbiri / Wahdhif hurūfa-l-maddi in sākinun atā * Min ba'dihā wad-dammu lil-wāwi-ntaqā",
                        "translationFr": "« Si deux soukoûns se rencontrent, résous par la Kasrah sur le Tā' de féminin ou l'impératif ; et supprime la lettre de prolongation si un soukoûn lui succède, tandis que le Wāw du pluriel se résout par la Dammah. »",
                        "reference": "Matn Al-Jazariyyah (Bāb Iltiqā' As-Sākinayn)"
                    },
                    "examples": [
                        {
                            "id": "ex-c13-1",
                            "arabicText": "وَٱلۡعَصۡرِ إِنَّ ٱلۡإِنسَٰنَ لَفِى خُسۡرٍ",
                            "surahAyahRef": "103:1-2",
                            "surahNameFr": "Al-'Asr",
                            "highlightSegment": "وَٱلۡعَصۡرِ",
                            "highlightLetter": "صۡ + رۡ",
                            "ruleApplied": "Deux soukoûns tolérés à l'arrêt dans un même mot",
                            "ruleTag": "silent",
                            "explanationFr": "Lors de l'arrêt sur « Al-'Asr », le Sād porte son soukoûn originel et le Râ prend un soukoûn accidentel (Sukoûn 'Ārid). Cette succession est parfaitement naturelle et autorisée à la pause.",
                            "transliteration": "Wa-l-'asri (à l'arrêt : Wa-l-'asr)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/103001.mp3"
                        },
                        {
                            "id": "ex-c13-2",
                            "arabicText": "فَيَوۡمَئِذٖ لَّا يُسۡـَٔلُ عَن ذَنۢبِهِۦٓ إِنسٞ وَلَا جَآنّٞ",
                            "surahAyahRef": "55:39",
                            "surahNameFr": "Ar-Rahmān",
                            "highlightSegment": "جَآنّٞ",
                            "highlightLetter": "Madd + Shaddah",
                            "ruleApplied": "Trois soukoûns consécutifs à l'arrêt",
                            "ruleTag": "madd",
                            "explanationFr": "L'Alif de Madd est toujours sākin, et le Nūn avec Shaddah contient deux Nūn (l'un sākin, l'autre prenant un soukoûn temporaire à l'arrêt). L'élongation de 6 temps (Madd Lāzim) compense cette rencontre.",
                            "transliteration": "Wa lā jāāāāāānn",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/055039.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Croire qu'il est interdit de s'arrêter sur un mot contenant deux soukoûns consécutifs (ex: Al-'Asr).",
                            "correctionFr": "C'est au contraire la norme à la pause pour les mots comme « Al-'Asr », « Quraysh », ou « Nasta'īn »."
                        },
                        {
                            "trapFr": "Insérer une voyelle parasite à l'arrêt (dire « Al-'asré » au lieu de « Al-'asr »).",
                            "correctionFr": "Maintenir les deux consonnes immobiles sans faire rebondir le Râ."
                        }
                    ]
                },
                {
                    "id": "iltiqa-tanween-wasl",
                    "nameFr": "2. Tanwīn suivi de Hamzat Al-Wasl (Le Nūn Qutnī)",
                    "nameAr": "الْتِقَاءُ السَّاكِنَيْنِ عِنْدَ التَّنْوِينِ (نُونُ الوِقَايَةِ / نُونُ قُطْنِي)",
                    "mnemonic": "Tanwīn + Wasl = Nūn vocalisé avec KASRAH de secours (Ni)",
                    "letters": ["ن"],
                    "definitionFr": "Le Tanwīn est phonétiquement un Nūn sākinah sous-jacent. Lorsqu'il est immédiatement suivi d'un mot débutant par Hamzat Al-Wasl (qui s'élide en liaison continue), ce Nūn caché rencontre la consonne suivante qui est soukounée. Pour briser ce blocage sans déformer le texte, le Nūn prend obligatoirement une Kasrah de secours.",
                    "definitionLughatan": {
                        "ar": "نُونُ الوِقَايَةِ أَوِ التَّنْوِينِ المَكْسُورِ لِلتَّخَلُّصِ مِنَ السَّاكِنَيْنِ.",
                        "fr": "Nūn de préservation vocalisé par Kasrah pour débloquer la rencontre de deux consonnes immobiles."
                    },
                    "definitionIstilahan": {
                        "ar": "تَحْرِيكُ نُونِ التَّنْوِينِ السَّاكِنَةِ لَفْظاً بِالكَسْرِ عِنْدَ وَصْلِ المُنَوَّنِ بِحَرْفٍ سَاكِنٍ بَعْدَ هَمْزَةِ الوَصْلِ السَّاقِطَةِ.",
                        "fr": "L'activation phonétique du Nūn caché du Tanwīn en le dotant d'une Kasrah de liaison lors du passage vers un mot commençant par une Hamzat Al-Wasl caduque."
                    },
                    "mechanismFr": "Ne marquez aucune coupure entre les deux mots. Décomposez le mot initial en sa voyelle simple, puis attachez le son [ni] directement à la consonne suivante sans prononcer de Hamzah.",
                    "physiologicalDetails": {
                        "tongue": "Pointe de la langue frappant les alvéoles supérieures pour émettre le son [N], immédiatement suivie de l'abaissement pour la Kasrah [i].",
                        "lips": "Étirement horizontal léger propre à la Kasrah.",
                        "vocalCords": "Vibration continue sans à-coup glottique.",
                        "airflow": "Transition fluide de la voie nasale du Nūn vers la cavité buccale."
                    },
                    "phoneticReasonFr": "Puisque la Hamzat Al-Wasl disparaît en continu, le Nūn sākinah du Tanwīn entrerait en collision frontale avec la consonne soukounée suivante : la Kasrah brise cette inertie.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَإِنْ يَكُنْ تَنْوِينُ لَفْظٍ قَدْ وَصَلْ * بِسَاكِنٍ فَاحْكُمْ بِكَسْرٍ قَدْ حَصَلْ\\nمِثْلُ ابْنِ نُوحٍ قُلْ بِهِ نُوحُنِ ابْنَهُ * وَاحْذَرْ مِنَ الوَقْفِ كَمَنْ قَدْ أَمَّنَهْ",
                        "transliteration": "Wa in yakun tanwīnu lafzin qad wasal * Bi-sākinin fahkum bi-kasrin qad hasal / Mithlu-bni Nūhin qul bihī Nūhuni-bnahū * Wahdhar mina-l-waqfi kaman qad ammanah",
                        "translationFr": "« Et si le Tanwīn phonétique rejoint une lettre immobile, applique la Kasrah sans hésiter, comme pour le fils de Noé : prononce 'Nūhu-ni-bnahū'. »",
                        "reference": "Matn Al-Muqaddimah Al-Jazariyyah (Ahkām at-Tanwīn wal-Wasl)"
                    },
                    "examples": [
                        {
                            "id": "ex-c13-3",
                            "arabicText": "وَنَادَىٰ نُوحٌ ٱبۡنَهُۥ وَكَانَ فِى مَعۡزِلٖ",
                            "surahAyahRef": "11:42",
                            "surahNameFr": "Hūd",
                            "highlightSegment": "نُوحٌ ٱبۡنَهُۥ",
                            "highlightLetter": "ٌ + ٱبۡ",
                            "ruleApplied": "Nūn Qutnī : Vocalisation en Kasrah",
                            "ruleTag": "izhar",
                            "explanationFr": "S'écrit « Nūhun ibnahū ». En liaison continue, se prononce obligatoirement : « Nūhu-ni-bnahū » (نُوحُنِ بۡنَهُ).",
                            "transliteration": "Nūhu-ni-bnahū",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/011042.mp3"
                        },
                        {
                            "id": "ex-c13-4",
                            "arabicText": "قُلۡ هُوَ ٱللَّهُ أَحَدٌ ١ ٱللَّهُ ٱلصَّمَدُ",
                            "surahAyahRef": "112:1-2",
                            "surahNameFr": "Al-Ikhlās",
                            "highlightSegment": "أَحَدٌ ٱللَّهُ",
                            "highlightLetter": "ٌ + ٱللَّ",
                            "ruleApplied": "Nūn Qutnī en reliant les deux versets",
                            "ruleTag": "tarqiq",
                            "explanationFr": "Si l'on relie le verset 1 au verset 2, le Tanwīn de « Ahadun » rencontre le Lām de « Allāh ». Le Nūn prend une Kasrah et le Lām d'Allāh devient aigu (Muraqqaq) : « Ahadu-ni-llāh-us-Samad ».",
                            "transliteration": "Qul huwa-llāhu ahadu-ni-llāhu-s-Samad",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/112001.mp3"
                        },
                        {
                            "id": "ex-c13-5",
                            "arabicText": "كُتِبَ عَلَيْكُمُ الْقِتَالُ وَهُوَ كُرْهٌ لَّكُمْ وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ ... خَيْرًا ٱلۡوَصِيَّةُ",
                            "surahAyahRef": "2:180",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "خَيۡرًا ٱلۡوَصِيَّةُ",
                            "highlightLetter": "ًا + ٱلۡ",
                            "ruleApplied": "Nūn Qutnī après Tanwīn Fathah",
                            "ruleTag": "izhar",
                            "explanationFr": "S'écrit « Khayran al-wasiyyatu ». En liaison continue, le Tanwīn se prononce « Khayra-ni-l-wasiyyah ».",
                            "transliteration": "Khayrani-l-wasiyyatu",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002180.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Prononcer une Hamzah de rupture entre les deux mots (dire « Nūhun... Ibnahū »).",
                            "correctionFr": "Lier de façon ininterrompue en prononçant « Nūhu-ni-bnahū »."
                        },
                        {
                            "trapFr": "Prononcer le Lām de Majesté lourd après « Ahaduni-llāh ».",
                            "correctionFr": "Le Lām de Majesté devient impérativement aminci (Tarqīq) car la Kasrah du Nūn Qutnī le précède immédiatement !"
                        }
                    ]
                },
                {
                    "id": "iltiqa-madd-elision",
                    "nameFr": "3. Élision de la Lettre de Prolongation (Hadhf Harf Al-Madd)",
                    "nameAr": "حَذْفُ حَرْفِ المَدِّ لَفْظاً عِنْدَ الْتِقَاءِ السَّاكِنَيْنِ",
                    "mnemonic": "Lettre de Madd + Hamzat Wasl = Le Madd disparaît en liaison continue",
                    "letters": ["ا", "و", "ي"],
                    "definitionFr": "Les lettres d'allongement (Alif, Wāw, Yā') sont par nature des consonnes soukounées (Sākinah). Si elles se trouvent à la fin d'un mot et sont suivies par un mot débutant par une consonne soukounée (après élision de Hamzat Al-Wasl), la lettre de Madd s'efface totalement à l'oral en liaison, mais est maintenue si l'on s'arrête sur le mot.",
                    "definitionLughatan": {
                        "ar": "الحَذْفُ: الإِسْقَاطُ وَالإِزَالَةُ.",
                        "fr": "La suppression phonétique, l'élision orale de la consonne allongeante."
                    },
                    "definitionIstilahan": {
                        "ar": "إِسْقَاطُ حَرْفِ المَدِّ وَاللِّينِ لَفْظاً لَا خَطّاً فِي الوَصْلِ خَشْيَةَ اجْتِمَاعِ سَاكِنَيْنِ، مَعَ ثُبُوتِهِ فِي الوَقْفِ.",
                        "fr": "L'élision orale (et non orthographique) de la voyelle longue lors de la récitation continue pour éviter l'affrontement de deux soukoûns, tout en la restituant pleinement à la pause."
                    },
                    "mechanismFr": "En liaison, réduisez la voyelle longue à une voyelle simple d'un temps (Fathah, Kasrah, Dammah) et basculez instantanément sur la consonne suivante. À l'arrêt en revanche, restaurez les deux temps du Madd naturel.",
                    "physiologicalDetails": {
                        "tongue": "Ne s'attarde pas sur la résonance du Madd ; bascule immédiatement vers le makhraj de la consonne suivante.",
                        "lips": "Se contractent pour la consonne d'arrivée sans prolonger l'ouverture.",
                        "vocalCords": "Vibration écourtée à 1 harakah.",
                        "airflow": "Flux continu sans suspension vocale."
                    },
                    "phoneticReasonFr": "La prolongation équivaut phonétiquement à une voyelle brève suivie d'une consonne muette immobile. Pour préserver la dynamique du verset, l'arabe sacrifie la seconde moitié immobile pour ne garder que la brève.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَاحْذِفْ حُرُوفَ المَدِّ إِنْ سَاكِنٌ أَتَى * مِنْ بَعْدِهَا فِي الوَصْلِ خُذْهُ مُثْبَتَا\\nوَثَبِّتِ المَدَّ إِذَا مَا تَقِفُ * وَلَا تَزِدْ عَنْ حَدِّهِ فَتُسْرِفُ",
                        "transliteration": "Wahdhif hurūfa-l-maddi in sākinun atā * Min ba'dihā fī-l-wasli khudh-hu muthbatā / Wa thabbiti-l-madda idhā mā taqifu * Wa lā tazid 'an haddihī fatusrifu",
                        "translationFr": "« Supprime les lettres de prolongation si un soukoûn survient après elles en liaison continue ; mais rétablis le Madd dès que tu marques l'arrêt sans outrepasser sa mesure. »",
                        "reference": "Matn Al-Jazariyyah (Hadhf Hurūf al-Madd)"
                    },
                    "examples": [
                        {
                            "id": "ex-c13-6",
                            "arabicText": "وَقَالَا ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِى فَضَّلَنَا",
                            "surahAyahRef": "27:15",
                            "surahNameFr": "An-Naml",
                            "highlightSegment": "وَقَالَا ٱلۡحَمۡدُ",
                            "highlightLetter": "Alif + Lām",
                            "ruleApplied": "Élision de l'Alif de prolongation en liaison",
                            "ruleTag": "silent",
                            "explanationFr": "S'écrit « Wa qālā al-hamdu ». À l'arrêt sur le premier mot, on prononce « Wa qālāā » (2 temps). En liaison continue, l'Alif s'efface totalement : « Wa qāla-l-hamdu ».",
                            "transliteration": "Wa qāla-l-hamdu lillāh",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/027015.mp3"
                        },
                        {
                            "id": "ex-c13-7",
                            "arabicText": "وَإِذَا قِيلَ لَهُمۡ ءَامِنُواْ كَمَآ ءَامَنَ ٱلنَّاسُ",
                            "surahAyahRef": "2:13",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "ءَامَنَ ٱلنَّاسُ",
                            "highlightLetter": "Wasl + Nūn",
                            "ruleApplied": "Élision de Wasl et passage direct au Nūn",
                            "ruleTag": "idgham",
                            "explanationFr": "Dans « fī-s-samāwāt » (فِي السَّمَاوَاتِ), le Yā' de « fī » disparaît en liaison continue : on prononce « Fis-samāwāt ».",
                            "transliteration": "Fī-s-samāwāt (oral : Fis-samāwāt)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002013.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Maintenir l'allongement de 2 temps en liaison (dire « Wa qālāāl-hamdu » ou « Fīī-s-samāwāt »).",
                            "correctionFr": "Élider impérativement la voyelle longue : « Wa qāla-l-hamdu » et « Fis-samāwāt »."
                        },
                        {
                            "trapFr": "Oublier de rétablir les 2 temps du Madd si l'on s'arrête sur le premier mot pour reprendre son souffle.",
                            "correctionFr": "À la pause sur « وَقَالَا », la consonne suivante disparaissant, le Madd naturel de 2 temps redevient obligatoire !"
                        }
                    ]
                },
                {
                    "id": "iltiqa-special-resolutions",
                    "nameFr": "4. Les 4 Modes Canoniques de Résolution (Tableau du Livre Arabe)",
                    "nameAr": "كَيْفِيَّاتُ التَّخَلُّصِ الأَرْبَعُ مِنَ الْتِقَاءِ السَّاكِنَيْنِ",
                    "mnemonic": "1. Kasrah (Défaut) | 2. Dammah (Pluriel) | 3. Fathah (Min & Duel) | 4. Hadhf (Madd)",
                    "letters": [],
                    "definitionFr": "Le livre « التجويد المبسط للمبتدئين » synthétise avec une rigueur magistrale les 4 manières dont la langue arabe résout le conflit de deux soukoûns consécutifs : 1. Par la Kasrah (règle par défaut pour Tanwīn, Wāw de Līn singulier, et verbes), 2. Par la Dammah (pour le Mīm du pluriel et le Wāw de la communauté), 3. Par la Fathah (pour la préposition Min, le Tā' duel féminin, et Alif-Lām-Mīm Allāh), 4. Par l'élision orale (Hadhf) des lettres de prolongation.",
                    "definitionLughatan": {
                        "ar": "كَيْفِيَّاتُ التَّخَلُّصِ: الطُّرُقُ الصَّوْتِيَّةُ لِفَضِّ اجْتِمَاعِ السَّاكِنَيْنِ.",
                        "fr": "Les procédés phonologiques d'arbitrage et de déblocage articulatoire."
                    },
                    "definitionIstilahan": {
                        "ar": "الأَوْجُهُ الأَرْبَعَةُ المُعْتَمَدَةُ عِنْدَ القُرَّاءِ: التَّحْرِيكُ بِالكَسْرِ، أَوِ الضَّمِّ، أَوِ الفَتْحِ، أَوْ حَذْفُ حَرْفِ المَدِّ لَفْظاً.",
                        "fr": "Les quatre modalités d'ajustement agréées par les maîtres de récitation : vocalisation par Kasrah, Dammah, Fathah, ou élision phonique de l'allongement."
                    },
                    "mechanismFr": "Observer la nature grammaticale de la première lettre immobile. Si c'est un Mīm de pluriel (hum) ou Wāw de pluriel (ishtaraw), elle s'élève en Dammah. Si c'est « Min », elle s'ouvre en Fathah par légèreté phonique. Si c'est un Tanwīn ou une consonne ordinaire, elle descend en Kasrah.",
                    "physiologicalDetails": {
                        "tongue": "Adopte la hauteur adéquate selon la voyelle : basse pour Fathah, intermédiaire pour Kasrah, rétractée pour Dammah.",
                        "lips": "Circulaires pour Dammah, étirées pour Kasrah, relâchées pour Fathah.",
                        "vocalCords": "Vibration continue.",
                        "airflow": "Flux continu sans à-coups."
                    },
                    "phoneticReasonFr": "La Fathah sur « Min » évite la succession lourde de deux Kasrahs consécutives (Min-il). La Dammah sur le pluriel préserve la marque morphologique originale du pluriel (Humu).",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَضُمَّ لِلْجَمْعِ كَمِثْلِ عَصَوُا ادْعُوا * وَاكْسِرْ لِغَيْرِهِ وَبِالفَتْحِ اسْمَعُوا\\nفِي مِنْ وَفِي مِيمِ الَّتِي فِي آلِ عِمْرَانَ * تَفُزْ بِالضَّبْطِ وَالإِتْقَانِ",
                        "transliteration": "Wa dumma lil-jam'i kamithli 'asawu-d'ū * Waksir li-ghayrihī wa bil-fathi-sma'ū / Fī Min wa fī Mīmi-llatī fī Āli 'Imrān * Tafuz bid-dabti wal-itqān",
                        "translationFr": "« Vocalise par la Dammah pour le pluriel, applique la Kasrah pour les autres, et applique la Fathah dans la préposition 'Min' ainsi que sur le Mīm d'ouverture d'Al-Imran pour atteindre la perfection. »",
                        "reference": "Matn Al-Muqaddimah Al-Jazariyyah"
                    },
                    "examples": [
                        {
                            "id": "ex-c13-8",
                            "arabicText": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱسۡتَجِيبُواْ لِلَّهِ",
                            "surahAyahRef": "8:24",
                            "surahNameFr": "Al-Anfāl",
                            "highlightSegment": "ءَامَنُواْ ٱسۡتَجِيبُواْ",
                            "highlightLetter": "Wāw de Madd",
                            "ruleApplied": "Élision du Wāw de Madd : 'Āmanu-stajībū",
                            "ruleTag": "silent",
                            "explanationFr": "Le Wāw de « Āmanū » est une consonne de Madd : devant Hamzat Al-Wasl, il s'élide totalement en liaison continue.",
                            "transliteration": "'Āmanu-stajībū lillāh",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/008024.mp3"
                        },
                        {
                            "id": "ex-c13-9",
                            "arabicText": "فَتَمَنَّوُاْ ٱلۡمَوۡتَ إِن كُنتُمۡ صَٰدِقِينَ",
                            "surahAyahRef": "2:94",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "فَتَمَنَّوُاْ ٱلۡمَوۡتَ",
                            "highlightLetter": "Wāw du pluriel + Dammah",
                            "ruleApplied": "Dammah de secours sur le Wāw de communauté",
                            "ruleTag": "tafkhim",
                            "explanationFr": "Ici, le Wāw n'est pas un Madd mais une consonne de Līn marquant le pluriel : il prend une Dammah de secours (Fataman-nawu-l-mawt).",
                            "transliteration": "Fataman-nawu-l-mawt",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002094.mp3"
                        },
                        {
                            "id": "ex-c13-10",
                            "arabicText": "الم ١ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَىُّ ٱلۡقَيُّومُ",
                            "surahAyahRef": "3:1-2",
                            "surahNameFr": "Āl 'Imrān",
                            "highlightSegment": "الم ١ ٱللَّهُ",
                            "highlightLetter": "Mīm avec Fathah",
                            "ruleApplied": "Fathah de secours sur le Mīm pour magnifier le Nom d'Allāh",
                            "ruleTag": "tafkhim",
                            "explanationFr": "En reliant le verset 1 au verset 2, le Mīm final prend une FATHAH de secours : « Alif-Lāāām-Mīīīma-llāhu ». Le Lām de Majesté reste lourd (Mufakhkham) par vénération.",
                            "transliteration": "Alif-Lāāām-Mīīīma-llāh",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/003001.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Donner une Kasrah au Mīm dans « Alif-Lām-Mīm Allāh » d'Al-Imran.",
                            "correctionFr": "La règle sacrée chez Hafs est la FATHAH sur le Mīm pour conserver l'emphase majestueuse du Nom d'Allāh."
                        },
                        {
                            "trapFr": "Confondre le Wāw de Madd (qui s'élide : Āmanū -> Āmanu-stajībū) et le Wāw de Līn du pluriel (qui prend une Dammah : Ishtarawu-d-dalālah).",
                            "correctionFr": "Identifier si le Wāw est précédé d'une Dammah (Madd -> élision) ou d'une Fathah (Līn pluriel -> Dammah de secours)."
                        }
                    ]
                }
            ],
            "quizzes": [
                {
                    "id": "q-c13-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe (Page 64) : Quelles sont les quatre manières canoniques de résoudre la rencontre de deux consonnes soukounées (Iltiqā' As-Sākinayn) entre deux mots ?",
                    "options": [
                        "1. La Kasrah de secours, 2. La Dammah de secours, 3. La Fathah de secours, 4. L'élision (Hadhf) de la lettre de Madd",
                        "1. La Shaddah, 2. La Ghunnah, 3. Le Soukoûn, 4. La Qalqalah",
                        "1. Le silence, 2. La prolongation de 6 temps, 3. L'Ikhfā', 4. L'Iqlāb",
                        "La rencontre de deux soukoûns est impossible et n'a aucune solution"
                    ],
                    "correctAnswer": "1. La Kasrah de secours, 2. La Dammah de secours, 3. La Fathah de secours, 4. L'élision (Hadhf) de la lettre de Madd",
                    "explanationFr": "Le tableau de la page 64 du livre « التجويد المبسط » détaille exhaustivement ces 4 méthodes : Kasrah (majorité), Dammah (Mīm du pluriel, Wāw de communauté), Fathah (préposition Min, duel, Mīm d'Al-Imran), et Hadhf (lettres de Madd).",
                    "ruleId": "iltiqa-special-resolutions"
                },
                {
                    "id": "q-c13-2",
                    "type": "error_detect",
                    "promptFr": "Dans le verset « وَقَالَا ٱلۡحَمۡدُ لِلَّهِ » (An-Naml 15), un élève allonge le Alif de « Wa qālā » sur 2 temps en faisant la liaison vers « Al-Hamd ». Quel est le jugement ?",
                    "verseArabic": "وَقَالَا ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِى فَضَّلَنَا",
                    "targetWord": "وَقَالَا ٱلۡحَمۡدُ",
                    "surahAyahRef": "27:15",
                    "options": [
                        "Lahn Khafī : L'Alif de prolongation doit s'élider totalement à l'oral en liaison (Wa qāla-l-hamdu) car deux soukoûns se rencontrent !",
                        "Récitation recommandée car l'Alif est écrit dans le texte",
                        "Lahn Jalī modifiant le sens en singulier",
                        "Obligation de s'arrêter entre les deux mots"
                    ],
                    "correctAnswer": "Lahn Khafī : L'Alif de prolongation doit s'élider totalement à l'oral en liaison (Wa qāla-l-hamdu) car deux soukoûns se rencontrent !",
                    "explanationFr": "La lettre de prolongation (Alif Sākin) rencontre le Lām Sākin d'Al-Hamd : la règle universelle impose l'élision phonétique de la prolongation lors de la liaison continue.",
                    "ruleId": "iltiqa-madd-elision"
                },
                {
                    "id": "q-c13-3",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe (Page 64) : Dans « قُلْ هُوَ اللَّهُ أَحَدٌ ١ اللَّهُ الصَّمَدُ », comment se prononce la liaison entre les versets 1 et 2 ?",
                    "verseArabic": "قُلۡ هُوَ ٱللَّهُ أَحَدٌ ١ ٱللَّهُ ٱلصَّمَدُ",
                    "options": [
                        "Ahadu-ni-llāh-us-Samad (avec Nūn Qutnī vocalisé en Kasrah et Lām d'Allāh aminci)",
                        "Ahadu Allāh (sans Nūn)",
                        "Ahadun Allāh (avec arrêt sec)",
                        "Ahadu-nu-llāh (avec Dammah de secours)"
                    ],
                    "correctAnswer": "Ahadu-ni-llāh-us-Samad (avec Nūn Qutnī vocalisé en Kasrah et Lām d'Allāh aminci)",
                    "explanationFr": "Le Tanwīn de « Ahadun » cache un Nūn sākin. Pour éviter la collision avec le Lām d'Allāh, il prend une Kasrah (Nūn Qutnī), ce qui affine le nom d'Allāh par Tarqīq.",
                    "ruleId": "iltiqa-tanween-wasl"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 14 : LES LETTRES ISOLÉES (FAWĀTIH)
        # ==========================================
        {
            "id": "chap-14",
            "number": 14,
            "slug": "fawatih-as-suwar",
            "titleFr": "Les Lettres Isolées & Débuts de Sourates (Fawātih As-Suwar)",
            "titleAr": "فَوَاتِحُ السُّوَرِ وَالحُرُوفُ المُقَطَّعَةُ",
            "category": "advanced",
            "estimatedMinutes": 20,
            "isPilotChapter": True,
            "summaryFr": "Déchiffrer les combinaisons mystérieuses ouvrant 29 sourates du Coran. Maîtriser les 3 groupes de durée (0 temps pour Alif, 2 temps pour Hayyun Tahur, 6 temps pour Kam 'Asala Naqas), appliquer le Tajwīd interne entre les noms des lettres (Idghām, Ikhfā') et maîtriser les règles de liaison singulières.",
            "infographicPoints": [
                "29 sourates débutent par des lettres disjointes (Hurūf Muqatta'ah) composées de 14 lettres uniques regroupées dans la formule : « صِلْهُ سُحَيْرًا مَنْ قَطَعْكَ ».",
                "Groupe 1 (0 temps) : La lettre « ALIF » (أَلِفْ) ne contient aucune voyelle longue : aucune prolongation permise !",
                "Groupe 2 (2 temps) : Les 5 lettres de « حَيٌّ طَهُرَ » (Hā, Yā, Tā, Hā, Rā) s'épellent en 2 lettres (terminées par un Alif) : Madd Tabī'ī Harfī de 2 temps constants.",
                "Groupe 3 (6 temps) : Les 8 lettres de « كَمْ عَسَلَ نَقَصَ » s'épellent en 3 lettres avec voyelle longue au milieu : Madd Lāzim Harfī obligatoire de 6 temps pleins !",
                "Cas unique de 'Ayn (ع) : Son milieu est une consonne de Līn (Yā' précédé de Fathah) : il admet 4 ou 6 temps (6 étant prioritaire).",
                "Tajwīd interne : Les règles s'appliquent entre les lettres découpées ! Dans Tā-Sīn-Mīm, le Nūn de Sīn s'assimile dans le Mīm avec 2 temps de Ghunnah (Idghām).",
                "Exceptions de Hafs : Yā-Sīn et Nūn se lisent en Izhār Mutlaq (sans assimilation dans le Wāw suivant) en liaison continue !"
            ],
            "subrules": [
                {
                    "id": "fawatih-classification",
                    "nameFr": "1. Les 3 Familles de Lettres Isolées (0, 2 et 6 temps)",
                    "nameAr": "أَقْسَامُ الحُرُوفِ المُقَطَّعَةِ مِنْ حَيْثُ المَدُّ",
                    "mnemonic": "Alif = 0 | Hayyun Tahur = 2 temps | Kam 'Asala Naqas = 6 temps",
                    "letters": ["أ", "ح", "ي", "ط", "ه", "ر", "ك", "م", "ع", "س", "ل", "ن", "ق", "ص"],
                    "definitionFr": "Les 14 lettres de début de sourates se répartissent rigoureusement en 3 catégories selon leur morphologie phonétique : celles dont le nom ne contient pas de Madd (Alif), celles dont le nom se compose de deux lettres se terminant par un Alif (2 temps), et celles dont le nom se compose de trois lettres avec une voyelle longue centrale suivie d'un soukoûn originel (6 temps de Madd Lāzim).",
                    "definitionLughatan": {
                        "ar": "المُقَطَّعَةُ: المَفْصُولَةُ الَّتِي يُنْطَقُ بِأَسْمَائِهَا لَا بِمُسَمَّيَاتِهَا.",
                        "fr": "Les lettres disjointes récitées selon l'énoncé complet de leurs noms alphabétiques sacrés."
                    },
                    "definitionIstilahan": {
                        "ar": "حُرُوفُ الهِجَاءِ فِي فَوَاتِحِ السُّوَرِ الَّتِي تُقْرَأُ مُقَطَّعَةً بِأَسْمَائِهَا مُوَزَّعَةً بَيْنَ: عَدِيمِ المَدِّ، وَالمَدِّ الطَّبِيعِيِّ حَرْفِيّاً، وَالمَدِّ اللَّازِمِ الحَرْفِيِّ.",
                        "fr": "L'énonciation des consonnes liminaires du Coran selon les 3 échelles temporelles consacrées : absence d'allongement, allongement naturel de 2 temps, et allongement contraignant obligatoire de 6 temps."
                    },
                    "mechanismFr": "Pour Alif, articulez fermement les 3 consonnes [A-l-i-f] sans étirer. Pour Hayyun Tahur, ouvrez la voyelle sur 2 battements métronomiques calmes. Pour Kam 'Asala Naqas, déployez l'allongement sur 6 battements complets avant de fermer la consonne finale avec son soukoûn.",
                    "physiologicalDetails": {
                        "tongue": "Repose souplement au fond de la bouche pour Alif ; soutient la résonance du Madd pendant les 6 temps requis.",
                        "lips": "Ouverture verticale pour les voyelles ouvertes [ā], projection pour [ū], étirement pour [ī].",
                        "vocalCords": "Vibration continue et stable sans à-coups ni essoufflement prématuré.",
                        "airflow": "Débit d'air constant et maîtrisé pendant toute la durée des 6 temps."
                    },
                    "phoneticReasonFr": "Puisque le nom complet de la lettre s'achève par une consonne soukounée originelle (ex: N-ū-n, S-ī-n, Q-ā-f), la rencontre de cette consonne avec la voyelle longue précédente engendre mécaniquement un Madd Lāzim Harfī.",
                    "durationHarakat": 6,
                    "matnJazariyyah": {
                        "verseAr": "وَاللَّازِمُ الحَرْفِيُّ فِي الفَوَاتِحِ * وُجُودُهُ وَفِي ثَمَانٍ رَاجِحِ\\nيَجْمَعُهَا كَمْ عَسَلَ نَقَصْ وَعَيْنُ * ذُو وَجْهَيْنِ وَالطُّولُ أَبْيَنُ\\nوَمَا سِوَاهَا فِي حَيٍّ طَهُرْ * فَمَدُّهُ طَبِيعِيٌّ كَمَا شُهِرْ",
                        "transliteration": "Wal-lāzimu-l-harfiyyu fī-l-fawātihi * Wujūduhū wa fī thamānin rājihi / Yajma'uhā kam 'asala naqas wa 'aynu * Dhū wajhayni wat-tūlu abyānu / Wa mā siwāhā fī hayyin tahur * Famadduhū tabī'iyyun kamā shuhir",
                        "translationFr": "« Le Madd Lāzim Harfī s'incarne dans les ouvertures de sourates au sein de 8 lettres résumées par 'Kam 'Asala Naqas'. La lettre 'Ayn possède deux options, mais la durée longue (6 temps) est plus évidente. Quant aux autres dans 'Hayyun Tahur', leur allongement est naturel de deux temps. »",
                        "reference": "Matn Tuhfat Al-Atfāl & Al-Jazariyyah (Fawātih As-Suwar)"
                    },
                    "examples": [
                        {
                            "id": "ex-c14-1",
                            "arabicText": "الم ١ ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ",
                            "surahAyahRef": "2:1-2",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "الم",
                            "highlightLetter": "Alif (0) + Lām (6) + Mīm (6)",
                            "ruleApplied": "Alif (0 temps) + Madd Lāzim Harfī (6 temps)",
                            "ruleTag": "madd",
                            "explanationFr": "Se décompose en : Alif (0 temps) + Lāāām (6 temps avec Idghām) + Mīīīm (6 temps). Total de la récitation : 14 temps avec la Ghunnah intermédiaire.",
                            "transliteration": "Alif-Lāāām-Mīīīm",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002001.mp3"
                        },
                        {
                            "id": "ex-c14-2",
                            "arabicText": "طه ١ مَآ أَنزَلۡنَا عَلَيۡكَ ٱلۡقُرۡءَانَ لِتَشۡقَىٰٓ",
                            "surahAyahRef": "20:1-2",
                            "surahNameFr": "Tā-Hā",
                            "highlightSegment": "طه",
                            "highlightLetter": "Tā (2) + Hā (2)",
                            "ruleApplied": "Madd Tabī'ī Harfī de 2 temps chacun",
                            "ruleTag": "madd",
                            "explanationFr": "Les lettres Tā' et Hā' font partie de « حَيٌّ طَهُرَ » : chacune se prolonge exactement de 2 temps naturels sans Hamzah finale.",
                            "transliteration": "Tā-Hā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/020001.mp3"
                        },
                        {
                            "id": "ex-c14-3",
                            "arabicText": "قٓۚ وَٱلۡقُرۡءَانِ ٱلۡمَجِيدِ",
                            "surahAyahRef": "50:1",
                            "surahNameFr": "Qāf",
                            "highlightSegment": "قٓۚ",
                            "highlightLetter": "Qāf (6 temps)",
                            "ruleApplied": "Madd Lāzim Harfī Mukhaffaf",
                            "ruleTag": "madd",
                            "explanationFr": "La lettre unique Qāf s'épelle « Q-ā-f » : 6 temps d'allongement obligatoire avec soukoûn sans Shaddah.",
                            "transliteration": "Qāāāāāāf",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/050001.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Allonger la lettre ALIF (dire « Ālif » au lieu de « Alif » bref).",
                            "correctionFr": "L'Alif ne comporte aucune voyelle longue : il se prononce en 0 temps d'allongement, sec et précis."
                        },
                        {
                            "trapFr": "Rajouter une Hamzah à la fin des lettres de Hayyun Tahur (dire « Tā' » ou « Hā' » avec coup de glotte).",
                            "correctionFr": "Elles se terminent par un Alif ouvert et fluide sans aucun arrêt glottique : « Tā », « Hā », « Yā », « Rā »."
                        }
                    ]
                },
                {
                    "id": "fawatih-internal-tajweed",
                    "nameFr": "2. Le Tajwīd Interne entre les Noms des Lettres",
                    "nameAr": "أَحْكَامُ التَّجْوِيدِ البَيْنِيَّةِ فِي هِجَاءِ الفَوَاتِحِ",
                    "mnemonic": "Épeler phonétiquement les lettres et appliquer Idghām, Ikhfā' et Ghunnah",
                    "letters": [],
                    "definitionFr": "Lorsque plusieurs lettres disjointes se succèdent, la fin du nom de la première consonne rencontre le début du nom de la suivante. Toutes les règles de Tajwīd canoniques (Idghām Shafawī, Idghām avec Ghunnah, Ikhfā' Haqīqī avec Ghunnah) s'appliquent rigoureusement entre les noms des lettres comme dans un texte suivi.",
                    "definitionLughatan": {
                        "ar": "التَّجْوِيدُ البَيْنِيُّ: إِعْمَالُ قَوَاعِدِ النُّونِ وَالمِيمِ بَيْنَ أَسْمَاءِ الحُرُوفِ.",
                        "fr": "L'application des règles phonétiques de transition entre les noms des lettres consécutives."
                    },
                    "definitionIstilahan": {
                        "ar": "تَطْبِيقُ أَحْكَامِ الإِدْغَامِ وَالإِخْفَاءِ وَالقَلْقَلَةِ النَّاشِئَةِ عَنِ الْتِقَاءِ حُرُوفِ الهِجَاءِ فِي الفَوَاتِحِ عِنْدَ وَصْلِهَا صَوْتِيّاً.",
                        "fr": "La mise en œuvre des assimilations et dissimulations résultant de la rencontre des consonnes terminales et initiales des noms de lettres découpées."
                    },
                    "mechanismFr": "Écrivez mentalement les noms : dans Tā-Sīn-Mīm, la fin de « Sīn » est un Nūn Sākinah, et le début de « Mīm » est un Mīm. Nūn + Mīm déclenche obligatoirement un Idghām avec Ghunnah de 2 temps pleins. Dans Kāf-Hā-Yā-'Ayn-Sād, le Nūn de « 'Ayn » devant le Sād déclenche un Ikhfā' avec Ghunnah emphatique.",
                    "physiologicalDetails": {
                        "tongue": "Se prépare au Makhraj de la lettre suivante pendant la Ghunnah d'Ikhfā' (ex: près du Sād pour 'Ayn-Sād).",
                        "lips": "Se ferment complètement pour l'Idghām du Mīm dans Lām-Mīm et Sīn-Mīm.",
                        "vocalCords": "Vibration continue pour la Ghunnah.",
                        "airflow": "Flux d'air passant à 100% par le nez (Khayshūm) pendant 2 temps de Ghunnah."
                    },
                    "phoneticReasonFr": "Les noms des lettres sont des mots arabes à part entière régis par les lois phonotactiques immuables de la langue sacrée.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَأَدْغِمَنَّ سِينَ فِي المِيمِ تَفُزْ * كَذَاكَ لَامٌ بَعْدَهَا مِيمٌ تُعَزْ\\nوَأَخْفِ نُونَ العَيْنِ عِنْدَ الصَّادِ * بِغُنَّةٍ تُعْزَى لِأَهْلِ الضَّادِ",
                        "transliteration": "Wa adghimanna Sīna fī-l-Mīmi tafuz * Kadhāka Lāmun ba'dahā Mīmun tu'az / Wa akhfi Nūna-l-'Ayni 'inda-s-Sādi * Bi-ghunnatin tu'zā li-ahli-d-Dād",
                        "translationFr": "« Assimile le Sīn dans le Mīm pour triompher, de même que le Lām suivi du Mīm avec noblesse ; et dissimule le Nūn de 'Ayn devant le Sād avec une Ghunnah attribuée aux maîtres de la langue. »",
                        "reference": "Matn Al-Jazariyyah & Chāṭibiyyah (Ahkām al-Hurūf al-Muqatta'ah)"
                    },
                    "examples": [
                        {
                            "id": "ex-c14-4",
                            "arabicText": "طسٓمٓ ١ تِلۡكَ ءَايَٰتُ ٱلۡكِتَٰبِ ٱلۡمُبِينِ",
                            "surahAyahRef": "26:1-2",
                            "surahNameFr": "Ash-Shu'arā",
                            "highlightSegment": "طسٓمٓ",
                            "highlightLetter": "Sīn + Mīm (Idghām avec Ghunnah)",
                            "ruleApplied": "Madd Lāzim Harfī Muthaqqal (Idghām interne)",
                            "ruleTag": "idgham",
                            "explanationFr": "S'épelle : « Tā » (2 temps) + « Sīīī[n » + « M]īīīm » (6 temps). Le Nūn s'assimile totalement dans le Mīm avec 2 temps de Ghunnah obligatoire.",
                            "transliteration": "Tā-Sīīīm-Mīīīm",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/026001.mp3"
                        },
                        {
                            "id": "ex-c14-5",
                            "arabicText": "كٓهيعٓصٓ ١ ذِكۡرُ رَحۡمَتِ رَبِّكَ عَبۡدَهُۥ زَكَرِيَّآ",
                            "surahAyahRef": "19:1-2",
                            "surahNameFr": "Maryam",
                            "highlightSegment": "كٓهيعٓصٓ",
                            "highlightLetter": "'Ayn + Sād (Ikhfā' avec Ghunnah lourde)",
                            "ruleApplied": "Ikhfā' Haqīqī interne avec Ghunnah Mufakhkhamah",
                            "ruleTag": "ikhfa",
                            "explanationFr": "Le nom de la lettre « 'Ayn » se termine par un Nūn sākinah. Devant le « Sād », ce Nūn subit un Ikhfā' avec une Ghunnah lourde et grave de 2 temps.",
                            "transliteration": "Kāāāf-Hā-Yā-'Ayynnn-Sāāād",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/019001.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Oublier l'Idghām dans « Tā-Sīn-Mīm » et prononcer un Nūn sec (dire « Tā-Sīn... Mīm » séparés).",
                            "correctionFr": "Fusionner impérativement le Nūn dans le Mīm avec 2 temps de Ghunnah continue : « Tā-Sīīīm-Mīīīm »."
                        },
                        {
                            "trapFr": "Faire une Ghunnah aiguë (mince) entre 'Ayn et Sād dans Maryam.",
                            "correctionFr": "Le Sād étant une lettre lourde et emphatique d'Isti'lā', la Ghunnah d'Ikhfā' doit être puissante et sombre."
                        }
                    ]
                },
                {
                    "id": "fawatih-liaison-ayah",
                    "nameFr": "3. Règles de Liaison avec le Verset Suivant & Exceptions de Hafs",
                    "nameAr": "وَصْلُ الفَوَاتِحِ بِمَا بَعْدَهَا وَاسْتِثْنَاءَاتُ حَفْصٍ",
                    "mnemonic": "Yā-Sīn & Nūn = Izhār Mutlaq | Alif-Lām-Mīm Allāh = Fathah sur Mīm",
                    "letters": [],
                    "definitionFr": "Lorsque l'on relie les lettres disjointes au verset suivant sans marquer d'arrêt, des règles particulières de lecture s'imposent : dans « Yā-Sīn wal-Qur'ān » et « Nūn wal-Qalam », l'Imam Hafs pratique obligatoirement l'Izhār Mutlaq (aucun Idghām dans le Wāw). Dans « Alif-Lām-Mīm Allāh » (Āl 'Imrān), le Mīm prend une Fathah pour magnifier le Nom d'Allāh.",
                    "definitionLughatan": {
                        "ar": "الوَصْلُ: الِاتِّصَالُ دُونَ سَكْتٍ أَوْ قَطْعٍ.",
                        "fr": "L'enchaînement mélodique continu sans rupture respiratoire."
                    },
                    "definitionIstilahan": {
                        "ar": "أَحْكَامُ الرَّبْطِ بَيْنَ فَاتِحَةِ السُّورَةِ وَمَبْدَإِ الآيَةِ التَّالِيَةِ مَعَ مُرَاعَاةِ انْفِرَادَاتِ حَفْصٍ مِنْ طَرِيقِ الشَّاطِبِيَّةِ.",
                        "fr": "Les règles spécifiques reliant le sigle liminaire au premier verset selon la voie canonique de la Chāṭibiyyah pour l'Imam Hafs."
                    },
                    "mechanismFr": "Pour « Yā-Sīn wal-Qur'ān », prononcez le Nūn de « Sīn » avec une clarté totale (Izhār) sans faire d'Idghām avec le Wāw. Pour « Alif-Lām-Mīm Allāh », donnez une Fathah au Mīm et récitez soit avec 2 temps de Madd, soit avec 6 temps de Madd sur le Mīm.",
                    "physiologicalDetails": {
                        "tongue": "Pointe de la langue claquant franchement sur les alvéoles supérieures pour le Nūn d'Izhār.",
                        "lips": "Ouverture horizontale pour la Fathah du Mīm.",
                        "vocalCords": "Continuité vibratoire sans pause glottique.",
                        "airflow": "Flux oral continu."
                    },
                    "phoneticReasonFr": "L'Izhār dans Yā-Sīn et Nūn préserve l'intégrité de la lettre d'ouverture en tant qu'entité révélée indépendante.",
                    "durationHarakat": 6,
                    "matnJazariyyah": {
                        "verseAr": "وَيَاسِينُ أَظْهِرْ عِنْدَ وَاوٍ تَلَتْ كَذَا * بِنُونَ وَلَا تُدْغِمْ لِحَفْصٍ كَمَا خَذَا\\nوَفِي آلِ عِمْرَانَ افْتَحِ المِيمَ وَاصِلَا * بِتَقْصِيرِ أَوْ مَدٍّ كَمَا قَدْ تَأَصَّلَا",
                        "transliteration": "Wa Yāsīnu azhir 'inda wāwin talat kadhā * Bi-Nūnin wa lā tudghim li-Hafsin kamā khadhā / Wa fī Āli 'Imrāna-ftahi-l-Mīma wāsilā * Bi-taqsīrin aw maddin kamā qad ta'assalā",
                        "translationFr": "« Fais l'Izhār pour Yā-Sīn devant le Wāw qui suit, ainsi que pour Nūn, et n'assimile pas pour Hafs. Et dans Āl 'Imrān, donne la Fathah au Mīm en liaison, avec option courte (2 temps) ou longue (6 temps) selon la règle établie. »",
                        "reference": "Matn Al-Chāṭibiyyah & Al-Jazariyyah (Fawātih & Idghām)"
                    },
                    "examples": [
                        {
                            "id": "ex-c14-6",
                            "arabicText": "يسٓ ١ وَٱلۡقُرۡءَانِ ٱلۡحَكِيمِ",
                            "surahAyahRef": "36:1-2",
                            "surahNameFr": "Yā-Sīn",
                            "highlightSegment": "يسٓ ١ وَٱلۡقُرۡءَانِ",
                            "highlightLetter": "Sīn + Wāw (Izhār Mutlaq)",
                            "ruleApplied": "Izhār Mutlaq en liaison continue (Hafs)",
                            "ruleTag": "izhar",
                            "explanationFr": "Si l'on relie sans s'arrêter, Hafs prononce obligatoirement « Yā-Sīīn wal-Qur'ān » en faisant entendre clairement le Nūn sans fusion ni Ghunnah dans le Wāw.",
                            "transliteration": "Yā-Sīīīn wal-Qur'āni-l-Hakīm",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/036001.mp3"
                        },
                        {
                            "id": "ex-c14-7",
                            "arabicText": "نٓۚ وَٱلۡقَلَمِ وَمَا يَسۡطُرُونَ",
                            "surahAyahRef": "68:1",
                            "surahNameFr": "Al-Qalam",
                            "highlightSegment": "نٓۚ وَٱلۡقَلَمِ",
                            "highlightLetter": "Nūn + Wāw (Izhār Mutlaq)",
                            "ruleApplied": "Izhār Mutlaq de Hafs",
                            "ruleTag": "izhar",
                            "explanationFr": "Même exception : le Nūn d'ouverture se lie au Wāw avec un Izhār absolu : « Nūūūn wal-Qalami wa mā yasturūn ».",
                            "transliteration": "Nūūūn wal-qalami wa mā yasturūn",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/068001.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Assimiler le Nūn dans le Wāw (dire « Yā-Sīw-wal-Qur'ān » avec Ghunnah).",
                            "correctionFr": "L'Idghām est formellement interdit chez Hafs par la voie de la Chāṭibiyyah : l'Izhār Mutlaq est obligatoire."
                        }
                    ]
                }
            ],
            "quizzes": [
                {
                    "id": "q-c14-1",
                    "type": "mcq",
                    "promptFr": "Quelle est la durée d'allongement de la lettre ALIF (أَلِفْ) en ouverture de sourate ?",
                    "options": [
                        "0 temps (aucun allongement)",
                        "2 temps (Madd Tabī'ī)",
                        "4 temps",
                        "6 temps (Madd Lāzim)"
                    ],
                    "correctAnswer": "0 temps (aucun allongement)",
                    "explanationFr": "Le nom de la lettre Alif s'épelle [A-l-i-f] : il ne contient aucune voyelle longue au milieu ni à la fin. Elle se prononce donc en 0 temps d'allongement.",
                    "ruleId": "fawatih-classification"
                },
                {
                    "id": "q-c14-2",
                    "type": "error_detect",
                    "promptFr": "Dans « يسٓ وَٱلۡقُرۡءَانِ ٱلۡحَكِيمِ », un récitateur applique un Idghām avec Ghunnah entre le Nūn de Yā-Sīn et le Wāw suivant. Quelle est la nature de l'erreur selon Hafs 'an 'Āsim ?",
                    "verseArabic": "يسٓ ١ وَٱلۡقُرۡءَانِ ٱلۡحَكِيمِ",
                    "targetWord": "يسٓ ١ وَٱلۡقُرۡءَانِ",
                    "surahAyahRef": "36:1-2",
                    "options": [
                        "Lahn Khafī : Hafs récite obligatoirement avec un Izhār Mutlaq (clarté du Nūn sans Idghām)",
                        "Récitation recommandée",
                        "Erreur sur la lettre Yā'",
                        "Obligation de supprimer le Wāw"
                    ],
                    "correctAnswer": "Lahn Khafī : Hafs récite obligatoirement avec un Izhār Mutlaq (clarté du Nūn sans Idghām)",
                    "explanationFr": "Par la voie de la Chāṭibiyyah, Hafs fait exception à la règle générale de l'Idghām dans « Yā-Sīn wal-Qur'ān » et « Nūn wal-Qalam » en appliquant un Izhār rigoureux.",
                    "ruleId": "fawatih-liaison-ayah"
                },
                {
                    "id": "q-c14-3",
                    "type": "mcq",
                    "promptFr": "Combien de temps dure l'allongement de la lettre 'Ayn (عٓ) dans « كٓهيعٓصٓ » et « عٓسٓقٓ » selon les règles canoniques ?",
                    "options": [
                        "4 ou 6 temps au choix (avec préférence pour 6 temps)",
                        "Exactement 2 temps",
                        "0 temps",
                        "Toujours 8 temps"
                    ],
                    "correctAnswer": "4 ou 6 temps au choix (avec préférence pour 6 temps)",
                    "explanationFr": "La lettre 'Ayn contient une consonne de Līn au milieu (Yā' précédé d'une Fathah) : elle admet donc le Tawassut (4 temps) ou le Tūl (6 temps), la durée de 6 temps étant prioritaire et recommandée.",
                    "ruleId": "fawatih-classification"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 15 : DISTINCTIONS SUBTILES (TĀ'ĀT & WAQF)
        # ==========================================
        {
            "id": "chap-15",
            "number": 15,
            "slug": "distinctions-subtiles",
            "titleFr": "Distinctions Subtiles : Tā'āt & Ahkām Al-Waqf",
            "titleAr": "بَابُ التَّاءَاتِ وَأَحْكَامُ الوَقْفِ عَلَيْهَا",
            "category": "advanced",
            "estimatedMinutes": 20,
            "isPilotChapter": True,
            "summaryFr": "Distinguer la Tā' Marbūṭah (ة qui devient [h] à l'arrêt) de la Tā' Maftūḥah (ت qui reste [t] avec souffle de Hams). Mémoriser les 13 mots sacrés tracés avec une Tā' ouverte dans le Mushaf selon le Matn Al-Jazariyyah, et maîtriser les règles de pause sur Hā' Al-Kināyah et Alif Maqsūrah.",
            "infographicPoints": [
                "Règle d'or du Tā' à la pause : La Tā' Marbūṭah (ة) se transforme obligatoirement en Hā' soukouné [h] (ex: Rahmah -> Rahmah). La Tā' Maftūḥah (ت) reste un Tā' soukouné [t] avec Hams.",
                "En récitation liée (Wasl) : Les deux types de Tā' se prononcent rigoureusement comme un son [t] avec leur voyelle.",
                "Les 13 mots exceptionnels : 13 termes féminins sont tracés dans le Mushaf avec une Tā' ouverte (ت) dans des contextes précis (ex: Rahmat, Ni'mat, Imra'at, Sunnat).",
                "Arrêt d'épreuve (Waqf Idtirārī) : Si le récitateur s'arrête sur ces 13 mots tracés avec (ت), il DOIT s'arrêter sur un [t] et non sur un [h] !",
                "Matn d'Ibn Al-Jazarī : Il consacre tout un chapitre poétique (« بَابُ التَّاءِ ») pour énumérer méthodiquement chacun des 13 termes et leurs sourates respectives.",
                "Hā' Al-Kināyah : Le pronom possessif singulier masculin (ـهُ / ـهِ) fait l'objet de règles de prolongation précises (Silah Sughrā et Kubrā) avec des exceptions clés chez Hafs."
            ],
            "subrules": [
                {
                    "id": "taa-marbuta-vs-maftuha",
                    "nameFr": "1. Tā' Marbūṭah (ة) vs Tā' Maftūḥah (ت) à l'Arrêt",
                    "nameAr": "الفَرْقُ بَيْنَ التَّاءِ المَرْبُوطَةِ وَالمَفْتُوحَةِ عِنْدَ الوَقْفِ",
                    "mnemonic": "Marbūṭah (ة) = Arrêt en [h] | Maftūḥah (ت) = Arrêt en [t] avec Hams",
                    "letters": ["ة", "ت"],
                    "definitionFr": "En langue arabe et dans le Rasm coranique, le Tā' de féminité peut s'écrire fermé (Tā' Marbūṭah ة) ou ouvert (Tā' Maftūḥah / Mabsūtah ت). En liaison, les deux se prononcent [t]. Mais lors de la pause (Waqf), la Tā' Marbūṭah se métamorphose impérativement en Hā' soukouné [h], tandis que la Tā' Maftūḥah conserve son identité consonantique de Tā' [t] avec le souffle de Hams.",
                    "definitionLughatan": {
                        "ar": "المَرْبُوطَةُ: المَعْقُودَةُ الَّتِي تُشْبِهُ الهَاءَ. وَالمَفْتُوحَةُ: المَبْسُوطَةُ.",
                        "fr": "La liée/fermée ressemblant au Hā', et l'ouverte/étalée conservant sa structure de Tā'."
                    },
                    "definitionIstilahan": {
                        "ar": "التَّاءُ المَرْبُوطَةُ يُوقَفُ عَلَيْهَا بِالهَاءِ السَّاكِنَةِ إِجْمَاعاً، وَالمَفْتُوحَةُ يُوقَفُ عَلَيْهَا بِالتَّاءِ مَعَ جَرَيَانِ النَّفَسِ (الهَمْسِ).",
                        "fr": "La Tā' liée sur laquelle l'arrêt s'effectue unanimement par un Hā' immobile, et la Tā' ouverte sur laquelle l'arrêt s'effectue par un Tā' immobile doté de son chuchotement (Hams)."
                    },
                    "mechanismFr": "Pour la Tā' Marbūṭah à l'arrêt, relâchez la langue de l'arcade dentaire et laissez expirer un souffle doux depuis le fond de la gorge (Aqsal-Halq). Pour la Tā' Maftūḥah, appliquez fermement la pointe de la langue sur les gencives supérieures pour le blocage Shiddah, puis libérez un léger filet d'air (Hams).",
                    "physiologicalDetails": {
                        "tongue": "Pour [ة -> h] : langue au repos complet. Pour [ت -> t] : appui net de la pointe sur les gencives des incisives supérieures.",
                        "lips": "Neutres et immobiles.",
                        "vocalCords": "Ouvertes pour le Hams du Tā' ou pour le souffle glottique du Hā'.",
                        "airflow": "Flux doux expiratoire sans forcer."
                    },
                    "phoneticReasonFr": "La fermeture graphique de la boucle de la Tā' Marbūṭah symbolise sa transition historique vers le phonème glottique doux [h] à l'arrêt pour alléger la fin des mots féminins.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَقِفْ بِهَاءٍ عَلَى تَاءِ التَّأْنِيثِ إِنْ كُتِبَتْ * مَرْبُوطَةً وَبِتَاءٍ إِنْ هِيَ ارْتَسَمَتْ\\nمَبْسُوطَةً فِي مُصْحَفِ الإِمَامِ ضَبْطَا * وَاتَّبِعِ الأَثَرَ لَا تَحِدْ عَنْهُ قَطَّا",
                        "transliteration": "Waqif bi-hā'in 'alā tā'i-t-ta'nīthi in kutibat * Marbūtatan wa bi-tā'in in hiya-rtasamat / Mabsūtatan fī mushafi-l-imāmi dabtā * Wattabi'i-l-athara lā tahid 'anhu qattā",
                        "translationFr": "« Arrête-toi avec un Hā' sur le Tā' de féminin s'il est écrit fermé, et avec un Tā' s'il est tracé ouvert dans le Mushaf de référence, et suis fidèlement la tradition sans jamais t'en écarter. »",
                        "reference": "Matn Al-Jazariyyah (Bāb at-Tā'āt)"
                    },
                    "examples": [
                        {
                            "id": "ex-c15-1",
                            "arabicText": "فِيهَا عَيۡنٞ جَارِيَةٞ",
                            "surahAyahRef": "88:12",
                            "surahNameFr": "Al-Ghāshiyah",
                            "highlightSegment": "جَارِيَةٞ",
                            "highlightLetter": "Tā' Marbūṭah (ة)",
                            "ruleApplied": "Arrêt en Hā' soukouné doux [h]",
                            "ruleTag": "silent",
                            "explanationFr": "S'écrit avec une Tā' Marbūṭah (ة). En liaison : « Jāriyatun ». Lors de l'arrêt (Waqf) : se prononce obligatoirement « Jāriyah » avec un souffle de Hā'.",
                            "transliteration": "Jāriyah (liaison : Jāriyatun)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/088012.mp3"
                        },
                        {
                            "id": "ex-c15-2",
                            "arabicText": "فَأَمَّا مَن ثَقُلَتۡ مَوَٰزِينُهُۥ",
                            "surahAyahRef": "101:6",
                            "surahNameFr": "Al-Qāri'ah",
                            "highlightSegment": "ثَقُلَتۡ",
                            "highlightLetter": "Tā' Maftūḥah (ت)",
                            "ruleApplied": "Arrêt sur Tā' soukouné avec Hams",
                            "ruleTag": "hams",
                            "explanationFr": "Tā' de féminité du verbe, écrit ouvert (ت). À l'arrêt, conserve son son [t] avec un souffle net de Hams : « Thaqulat ».",
                            "transliteration": "Thaqulat",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/101006.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Prononcer un Tā' à la pause sur une Tā' Marbūṭah (dire « Al-Qāri'at » au lieu de « Al-Qāri'ah »).",
                            "correctionFr": "C'est une faute grave (Lahn Jalī) : la Tā' Marbūṭah se transmute intégralement en [h] à l'arrêt."
                        },
                        {
                            "trapFr": "Oublier le souffle de Hams sur le Tā' ouvert à l'arrêt, rendant la consonne étouffée ou inaudible.",
                            "correctionFr": "Libérer immédiatement après le blocage lingual un filet d'air audible sans forcer."
                        }
                    ]
                },
                {
                    "id": "taa-thirteen-words",
                    "nameFr": "2. Les 13 Mots Sacrés Tracés avec Tā' Ouverte (ت) dans le Mushaf",
                    "nameAr": "الكَلِمَاتُ الثَّلَاثَ عَشْرَةَ المَكْتُوبَةُ بِالتَّاءِ المَفْتُوحَةِ",
                    "mnemonic": "13 mots exceptionnels qui s'arrêtent en [t] dans le Mushaf (Tableau page 68)",
                    "letters": ["ت"],
                    "definitionFr": "Le livre « التجويد المبسط للمبتدئين » (Page 68) et le Matn Al-Jazariyyah recensent 13 vocables féminins qui, contre toute attente graphique, ont été tracés dans certains versets avec une Tā' ouverte (ت) au lieu de fermée (ة). Si un récitateur est contraint de s'arrêter sur ces occurrences précises (pour cause d'essoufflement ou d'examen), il DOIT s'arrêter en prononçant un [t] avec Hams.",
                    "definitionLughatan": {
                        "ar": "المَقْطُوعُ وَالمَوْصُولُ وَالتَّاءَاتُ المَرْسُومَةُ فِي المَصَاحِفِ العُثْمَانِيَّةِ.",
                        "fr": "Les particularités orthographiques du tracé 'Othmānī officiel."
                    },
                    "definitionIstilahan": {
                        "ar": "ثَلَاثَ عَشْرَةَ كَلِمَةً أُنِّثَتْ بِتَاءٍ مَبْسُوطَةٍ فِي مَوَاضِعَ مَخْصُوصَةٍ فَيُوقَفُ عَلَيْهَا اتِّبَاعاً لِلرَّسْمِ بِالتَّاءِ لَا بِالهَاءِ.",
                        "fr": "Treize termes coraniques féminins dotés d'une Tā' ouverte dans des emplacements consacrés, imposant à la pause un arrêt sur la consonne [t] par conformité stricte au tracé sacré."
                    },
                    "mechanismFr": "Repérez les 13 vocables : 1. Rahmat (رَحْمَتَ), 2. Ni'mat (نِعْمَتَ), 3. Imra'at (امْرَأَتَ), 4. Sunnat (سُنَّتَ), 5. La'nat (لَعْنَتَ), 6. Ma'siyat (مَعْصِيَتِ), 7. Kalimat (كَلِمَتُ), 8. Baqiyyat (بَقِيَّتُ), 9. Qurrat (قُرَّتُ), 10. Fitrat (فِطْرَتَ), 11. Shajarat (شَجَرَتَ), 12. Jannat (جَنَّتُ), 13. Ibnat (ابْنَتَ). À la pause sur ces versets identifiés, bloquez la langue sur les gencives et lâchez le souffle de Hams.",
                    "physiologicalDetails": {
                        "tongue": "Pointe fermement appliquée contre l'arcade dentaire supérieure, prête au relâchement de Hams.",
                        "lips": "Neutres.",
                        "vocalCords": "Ouvertes pour laisser passer l'expiration.",
                        "airflow": "Flux continu sans interruption brusque."
                    },
                    "phoneticReasonFr": "Le principe absolu de la récitation coranique est la conformité indéfectible au tracé de la 'Uthmāniyyah : « Al-Waqfu 'alā Hasabi ar-Rasm » (On s'arrête selon le tracé de la plume).",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَرَحْمَتُ الزُّخْرُفِ بِالتَّا زَبَرَهْ * لَعْنَتْ بِهَا وَالنُّورِ وَامْرَأَتْ بَقَرْ\\nنِعْمَتُهَا ثَلَاثُ نَحْلٍ إِبْرَهَمْ * مَعًا أَخِيرَاتٌ عُقُودُ الثَّانِ هَمْ\\nلُقْمَانُ ثُمَّ فَاطِرٌ كَالطُّورِ * عِمْرَانَ لَعْنَتَ بِهَا وَالنُّورِ",
                        "transliteration": "Wa rahmatu-z-Zukhrufi bit-tā zabarah * La'nat bihā wan-Nūri wamra'at baqar / Ni'matuhā thalāthu Nahlin Ibraham * Ma'an akhīrātun 'Uqūdu-th-thāni ham / Luqmānu thumma Fātirun kat-Tūri * 'Imrāna la'nata bihā wan-Nūri",
                        "translationFr": "« Rahmat dans Az-Zukhruf est écrite avec un Tā', de même que La'nat dans celle-ci et dans An-Nūr, et Imra'at dans Al-Baqarah. Ni'mat dans trois passages d'An-Nahl, deux dans Ibrāhīm, dans Al-'Uqūd (Al-Mā'idah), Luqmān, Fātir, At-Tūr, et Āl 'Imrān... »",
                        "reference": "Matn Al-Jazariyyah (Versets 71-74)"
                    },
                    "examples": [
                        {
                            "id": "ex-c15-3",
                            "arabicText": "إِنَّ رَحۡمَتَ ٱللَّهِ قَرِيبٞ مِّنَ ٱلۡمُحۡسِنِينَ",
                            "surahAyahRef": "7:56",
                            "surahNameFr": "Al-A'rāf",
                            "highlightSegment": "رَحۡمَتَ ٱللَّهِ",
                            "highlightLetter": "ت ouverte dans Rahmat",
                            "ruleApplied": "Arrêt exceptionnel en [t] avec Hams selon le Rasm",
                            "ruleTag": "hams",
                            "explanationFr": "Dans ce verset, « Rahmat » est tracé avec une Tā' ouverte (رَحْمَتَ). Si l'on s'arrête en cas d'urgence, on prononce obligatoirement « Rahmat » avec son [t] et non « Rahmah ».",
                            "transliteration": "Rahmat (à la pause)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/007056.mp3"
                        },
                        {
                            "id": "ex-c15-4",
                            "arabicText": "امۡرَأَتَ نُوحٖ وَٱمۡرَأَتَ لُوطٖ",
                            "surahAyahRef": "66:10",
                            "surahNameFr": "At-Tahrīm",
                            "highlightSegment": "امۡرَأَتَ",
                            "highlightLetter": "ت ouverte dans Imra'at",
                            "ruleApplied": "Arrêt sur [t] pour l'épouse associée à son époux",
                            "ruleTag": "hams",
                            "explanationFr": "Chaque fois que le mot « Imra'ah » est annexé à son mari dans le Coran, il s'écrit avec une Tā' ouverte (امْرَأَتَ) et se termine par un [t] à l'arrêt : « Imra'at ».",
                            "transliteration": "Imra'at",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/066010.mp3"
                        },
                        {
                            "id": "ex-c15-5",
                            "arabicText": "فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ",
                            "surahAyahRef": "56:89",
                            "surahNameFr": "Al-Wāqi'ah",
                            "highlightSegment": "وَجَنَّتُ نَعِيمٍ",
                            "highlightLetter": "ت ouverte dans Jannat",
                            "ruleApplied": "Arrêt sur [t] dans Jannat Na'īm",
                            "ruleTag": "hams",
                            "explanationFr": "Écrit « وَجَنَّتُ نَعِيمٍ » avec une Tā' ouverte. À l'arrêt, se prononce « Jannat » avec un Tā' soukouné et son souffle de Hams.",
                            "transliteration": "Jannat",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/056089.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "S'arrêter en disant « Rahmah » sur le verset 7:56 tracé « رَحْمَتَ ».",
                            "correctionFr": "C'est une contradiction directe avec le tracé officiel : on doit s'arrêter sur « Rahmat » avec le son [t] et son souffle de Hams."
                        },
                        {
                            "trapFr": "Croire que tous les mots « Ni'mah » ou « Rahmah » s'écrivent avec Tā' ouverte.",
                            "correctionFr": "La grande majorité s'écrit avec une Tā' Marbūṭah classique (ة) qui s'arrête en [h] ; seuls les emplacements recensés par Ibn Al-Jazarī portent la Tā' ouverte (ت)."
                        }
                    ]
                },
                {
                    "id": "alif-maqsurah-vs-yaa",
                    "nameFr": "3. Alif Maqsūrah (ى) vs Yā' (ي) et Hā' Al-Kināyah",
                    "nameAr": "الأَلِفُ المَقْصُورَةُ وَاليَاءُ وَأَحْكَامُ هَاءِ الكِنَايَةِ",
                    "mnemonic": "Yā' = 2 points en dessous ou voyelle longue [ī] | Maqsūrah = Son [ā] | Hā' Kināyah = Règles de Silah",
                    "letters": ["ى", "ي", "ه"],
                    "definitionFr": "Dans le Mushaf, l'Alif Maqsūrah (ى) s'écrit sans les deux points souscrits et représente la voyelle longue [ā] de 2 temps (ex: Hudā هُدَى, Ramā رَمَى). Le Yā' authentique représente la consonne ou voyelle [ī] (fī فِي). Par ailleurs, le pronom singulier masculin Hā' Al-Kināyah (ـهُ / ـهِ) s'allonge de 2 temps (Silah Sughrā) s'il se trouve entre deux lettres vocalisées, sauf exceptions répertoriées chez Hafs.",
                    "definitionLughatan": {
                        "ar": "المَقْصُورَةُ: المَحْبُوسَةُ. وَالكِنَايَةُ: الضَّمِيرُ الدَّالُّ عَلَى المُفْرَدِ الغَائِبِ.",
                        "fr": "L'Alif raccourci et le pronom de troisième personne du singulier."
                    },
                    "definitionIstilahan": {
                        "ar": "الأَلِفُ المَرْسُومَةُ يَاءً تُنْطَقُ أَلِفاً مَدِّيَّةً، وَهَاءُ الضَّمِيرِ تُمَدُّ بِمِقْدَارِ حَرَكَتَيْنِ (صِلَةٌ صُغْرَى) إِذَا وَقَعَتْ بَيْنَ مُتَحَرِّكَيْنِ.",
                        "fr": "L'Alif figuré sous forme de Yā' qui conserve acoustiquement sa phonie d'Alif pur, et le Hā' pronominal allongé de 2 temps par liaison entre deux consonnes animées de voyelles."
                    },
                    "mechanismFr": "Pour l'Alif Maqsūrah, ouvrez la bouche verticalement sur le son [ā] sans fléchir vers le [ē]. Pour le Hā' Al-Kināyah, allongez le souffle de 2 temps si la lettre précédente et la suivante sont vocalisées (ex: « Innahū kāna »). Si une des deux lettres est immobile, ne faites aucun allongement (ex: « Fīhi hudan »).",
                    "physiologicalDetails": {
                        "tongue": "Au repos pour l'Alif Maqsūrah ; au fond pour le Hā' glottique.",
                        "lips": "Ouverture verticale détendue.",
                        "vocalCords": "Vibration pour le son vocalique [ā].",
                        "airflow": "Flux continu sans obstruction."
                    },
                    "phoneticReasonFr": "La prolongation du pronom (Silah) rétablit la voyelle longue originelle de la langue sémitique lorsque la cadence métrique entre consonnes mobiles le permet.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَصِلْ بِضَمٍّ هَاءَ كُلِّ مُضْمَرِ * إِذَا تَحَرَّكَ مَا قَبْلَهُ يَرِدْ\\nوَبَيْنَ سَاكِنَيْنِ فَاخْتَصِرْ سِوَى * فِيهِ مُهَانًا مَعَ فُرْقَانٍ رَوَى",
                        "transliteration": "Wa sil bi-dammin hā'a kulli mudmari * Idhā taharraka mā qablahū yarid / Wa bayna sākinayni fakhtasir siwā * Fīhi muhānan ma'a Furqānin rawā",
                        "translationFr": "« Allonge par une liaison de Dammah le Hā' de chaque pronom s'il se trouve entouré de voyelles ; mais écourte sans prolongation s'il est voisin d'un soukoûn, à l'exception unique de 'Fīhi muhānā' dans la sourate Al-Furqān selon la transmission sacrée. »",
                        "reference": "Matn Al-Chāṭibiyyah & Al-Jazariyyah (Hā' al-Kināyah)"
                    },
                    "examples": [
                        {
                            "id": "ex-c15-6",
                            "arabicText": "ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ",
                            "surahAyahRef": "2:2",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "فِيهِۛ هُدٗى",
                            "highlightLetter": "Hā' sans Silah car précédé d'un Yā' sākin",
                            "ruleApplied": "Absence de Silah (Pas de prolongation du Hā')",
                            "ruleTag": "silent",
                            "explanationFr": "Puisque le Hā' de « fīhi » est précédé d'un Yā' immobile (Sākin), il ne s'allonge pas : on prononce « Fīhi hudā » d'un temps bref.",
                            "transliteration": "Fīhi hudan",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002002.mp3"
                        },
                        {
                            "id": "ex-c15-7",
                            "arabicText": "وَيَخۡلُدۡ فِيهِۦ مُهَانًا",
                            "surahAyahRef": "25:69",
                            "surahNameFr": "Al-Furqān",
                            "highlightSegment": "فِيهِۦ مُهَانًا",
                            "highlightLetter": "Hā' avec Silah exceptionnelle",
                            "ruleApplied": "Silah Sughrā exceptionnelle chez Hafs",
                            "ruleTag": "madd",
                            "explanationFr": "Bien qu'il soit précédé d'un Yā' sākin, Hafs fait une exception unique dans tout le Coran en allongeant ce Hā' de 2 temps par Silah : « Fīhīī muhānā » pour souligner la gravité du châtiment.",
                            "transliteration": "Wa yakh-lud fīhīī muhānā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/025069.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Confondre l'Alif Maqsūrah (هُدَى) avec la lettre Yā' et prononcer un son [i] à la pause.",
                            "correctionFr": "L'Alif Maqsūrah est un Alif pur de 2 temps : on prononce « Hudā » avec la bouche ouverte."
                        },
                        {
                            "trapFr": "Oublier l'allongement de Silah exceptionnelle dans « Fīhī muhānā » (Sourate Al-Furqān).",
                            "correctionFr": "Cette exception majeure de Hafs est expressément signalée dans le Mushaf par un petit Yā' souscrit (ۦ) après le Hā'."
                        }
                    ]
                }
            ],
            "quizzes": [
                {
                    "id": "q-c15-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe (Page 68) : Comment s'arrête-t-on sur la Tā' Marbūṭah (ة) par opposition à la Tā' Maftūḥah (ت) ?",
                    "options": [
                        "La Tā' Marbūṭah (ة) devient obligatoirement un Hā' [h] à l'arrêt, tandis que la Tā' Maftūḥah (ت) reste un Tā' [t] avec son souffle de Hams",
                        "Les deux s'arrêtent toujours avec le son [t]",
                        "Les deux s'arrêtent toujours avec le son [h]",
                        "On ne peut jamais s'arrêter sur une Tā' de féminin"
                    ],
                    "correctAnswer": "La Tā' Marbūṭah (ة) devient obligatoirement un Hā' [h] à l'arrêt, tandis que la Tā' Maftūḥah (ت) reste un Tā' [t] avec son souffle de Hams",
                    "explanationFr": "C'est la règle canonique absolue d'Ahkām al-Waqf : le Tā' fermé se métamorphose en Hā' soukouné [h], tandis que le Tā' ouvert conserve sa consonne [t] avec le souffle de Hams.",
                    "ruleId": "taa-marbuta-vs-maftuha"
                },
                {
                    "id": "q-c15-2",
                    "type": "error_detect",
                    "promptFr": "Dans « إِنَّ رَحۡمَتَ ٱللَّهِ قَرِيبٞ مِّنَ ٱلۡمُحۡسِنِينَ » (Al-A'rāf 56), le mot est tracé « رَحْمَتَ ». Un lecteur s'arrête en prononçant « Rahmah » avec un son [h]. Quel est le jugement ?",
                    "verseArabic": "إِنَّ رَحۡمَتَ ٱللَّهِ قَرِيبٞ مِّنَ ٱلۡمُحۡسِنِينَ",
                    "targetWord": "رَحۡمَتَ",
                    "surahAyahRef": "7:56",
                    "options": [
                        "Lahn Khafī : Il doit obligatoirement s'arrêter avec un Tā' [t] (Rahmat) car le mot est écrit avec une Tā' Maftūḥah dans le Mushaf !",
                        "Récitation permise car le mot est féminin",
                        "Obligation de prolonger de 6 temps",
                        "Lahn Jalī annulant la prière"
                    ],
                    "correctAnswer": "Lahn Khafī : Il doit obligatoirement s'arrêter avec un Tā' [t] (Rahmat) car le mot est écrit avec une Tā' Maftūḥah dans le Mushaf !",
                    "explanationFr": "Selon la règle « On s'arrête selon le tracé de la lettre », les 13 mots recensés avec une Tā' ouverte dans le Rasm 'Othmānī imposent un arrêt sur le son [t] avec son Hams.",
                    "ruleId": "taa-thirteen-words"
                },
                {
                    "id": "q-c15-3",
                    "type": "mcq",
                    "promptFr": "Dans quel verset unique de Hafs le pronom Hā' Al-Kināyah fait-il l'objet d'un allongement de Silah Sughrā (2 temps) bien qu'il soit précédé d'une consonne soukounée ?",
                    "verseArabic": "وَيَخۡلُدۡ فِيهِۦ مُهَانًا",
                    "options": [
                        "« Fīhi muhānā » dans la sourate Al-Furqān (verset 69)",
                        "« Fīhi hudan » dans la sourate Al-Baqarah (verset 2)",
                        "« 'Alayhu-llāh » dans Al-Fath (verset 10)",
                        "« Yar-dahu lakum » dans Az-Zumar (verset 7)"
                    ],
                    "correctAnswer": "« Fīhi muhānā » dans la sourate Al-Furqān (verset 69)",
                    "explanationFr": "C'est une exception majeure transmise de Hafs : par dérogation à la règle qui interdit la Silah après un soukoûn, le mot « fīhī » est allongé de 2 temps dans la sourate Al-Furqān pour marquer l'opprobre du châtiment.",
                    "ruleId": "alif-maqsurah-vs-yaa"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 16 : CAS PARTICULIERS DE HAFS
        # ==========================================
        {
            "id": "chap-16",
            "number": 16,
            "slug": "cas-particuliers-hafs",
            "titleFr": "Cas Particuliers & Récitation de Hafs 'An 'Āsim",
            "titleAr": "خُصُوصِيَّاتُ رِوَايَةِ حَفْصٍ عَنْ عَاصِمٍ",
            "category": "mastery",
            "estimatedMinutes": 25,
            "isPilotChapter": True,
            "summaryFr": "Couronner son apprentissage du Tajwīd en maîtrisant les trésors phonétiques uniques transmis par l'Imam Hafs d'après 'Āsim : l'Imālah unique de Majrāhā, le Tashīl canonique de A'a'jamiyyun, l'Ishmām & le Rawm de Lā Ta'mannā, les 4 Saktāt obligatoires sans reprise de souffle, et les 7 Alifs d'arrêt.",
            "infographicPoints": [
                "L'Imālah unique (مَجْرَاهَا) : La seule et unique Imālah majeure chez Hafs dans tout le Coran (Sourate Hūd 41) : inclinaison à 50% entre le [a] et le [i].",
                "Le Tashīl obligatoire (ءَاعْجَمِيٌّ) : Adoucissement de la 2e Hamzah sans coup de glotte dans Fussilat 44, et 3 mots à double visage (Ā-dhakarayni, Āl-āna, Āllāhu).",
                "Ishmām & Rawm (لَا تَأْمَنَّا) : Deux manières sacrées de lire dans Yūsuf 11 : l'Ishmām (arrondir muettement les lèvres) ou le Rawm (chuchoter 1/3 de Dammah).",
                "Les 4 Saktāt canoniques : Arrêt de voix précis d'environ 2 secondes SANS reprendre de souffle (Al-Kahf 1, Yāsīn 52, Al-Qiyāmah 27, Al-Mutaffifīn 14).",
                "Les 7 Alifs (الألفات السبع) : Sept mots se terminant par un Alif qui se prolongent de 2 temps à l'arrêt, mais s'élident totalement en continu (ex: Anā, Lākinnā, Ad-Dunūnā).",
                "Singularités lexicales : Basaṭta (Idghām incomplet préservant l'Itbāq), Yabsuṭ & Basṭatan (avec la lettre Sīn), et Bi'sa-l-ismu (liaison en Al-Ism)."
            ],
            "subrules": [
                {
                    "id": "hafs-imalah-tashil",
                    "nameFr": "1. L'Imālah Unique (مَجْرَاهَا) & Le Tashīl Canonique (ءَاعْجَمِيٌّ)",
                    "nameAr": "الإِمَالَةُ الكُبْرَى (مَجْرَاهَا) وَالتَّسْهِيلُ (ءَاعْجَمِيٌّ)",
                    "mnemonic": "Majrāhā = Son [ē] incliné à 50% | A'a'jamiyyun = 2e Hamzah adoucie sans à-coup",
                    "letters": ["ر", "ء"],
                    "definitionFr": "L'Imālah majeure (Kubrā) consiste à orienter la Fathah vers la Kasrah et l'Alif vers le Yā' (prononciation à mi-chemin entre [a] et [e]). Dans la lecture de Hafs, elle ne s'applique qu'à un SEUL mot dans tout le Coran : « Majrāhā » (مَجْرَاهَا, Sourate Hūd 41), ce qui amincit automatiquement le Râ (Tarqīq). Le Tashīl consiste à adoucir l'articulation de la seconde Hamzah consécutive entre la Hamzah et la voyelle longue sans coup de glotte sec (obligatoire dans « A'a'jamiyyun » ءَا۬عۡجَمِىّٞ, Fussilat 44).",
                    "definitionLughatan": {
                        "ar": "الإِمَالَةُ: التَّعْوِيجُ وَالمَيْلُ. وَالتَّسْهِيلُ: التَّيْسِيرُ وَالتَّلْيِينُ.",
                        "fr": "L'inclinaison/le fléchissement mélodique, et l'adoucissement/l'assouplissement articulatoire."
                    },
                    "definitionIstilahan": {
                        "ar": "الإِمَالَةُ: أَنْ تَنْحُوَ بِالفَتْحَةِ نَحْوَ الكَسْرَةِ، وَبِالأَلِفِ نَحْوَ اليَاءِ مِنْ غَيْرِ قَلْبٍ خَالِصٍ. وَالتَّسْهِيلُ: النُّطْقُ بِالهَمْزَةِ بَيْنَ بَيْنَ، أَيْ بَيْنَ الهَمْزَةِ المُحَقَّقَةِ وَحَرْفِ المَدِّ المُجَانِسِ لِحَرَكَتِهَا.",
                        "fr": "L'Imālah est l'inclinaison de l'ouverture Fathah vers la Kasrah sans basculer dans un Yā' pur. Le Tashīl est l'émission de la Hamzah intermédiaire entre l'arrêt glottique franc et la consonne de prolongement de sa voyelle."
                    },
                    "mechanismFr": "Pour « Majrāhā », ne dites ni « Majrāhā » pur, ni « Majrīhā », mais « Majrēhā » avec la commissure des lèvres légèrement étirée. Pour « A'a'jamiyyun », attaquez la première Hamzah avec fermeté [ʔa], puis laissez glisser la deuxième sans fermeture glottique [ʔa-ha-jamiyyun].",
                    "physiologicalDetails": {
                        "tongue": "Milieu de la langue s'élevant légèrement vers le palais pour l'Imālah sans toucher le palais.",
                        "lips": "Étirement horizontal souple (comme une esquisse de sourire).",
                        "vocalCords": "Vibration continue pour la voyelle inclinée ; passage sans choc brutal pour la Hamzah facilitée.",
                        "airflow": "Débit d'air continu et régulier."
                    },
                    "phoneticReasonFr": "Allègement phonique majeur évitant la succession de deux occlusives glottiques dures (Hamzatayn) ou facilitant l'évocation métaphorique du flot de l'Arche de Noé sur les vagues.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَهَمْزُ أَعْجَمِيٍّ التَّسْهِيلُ حُتِمْ * وَفِي مَجْرَاهَا الإِمَالَةُ عَلَمْ\\nوَأَبْدِلِ الهَمْزَ إِذَا مَا يَرِدُ * فِي آلْآنَ مَعْ ذَكَرَيْنِ قَدْ رَفَدُوا",
                        "transliteration": "Wa hamzu a'jamiyyin at-tashīlu hutim * Wa fī Majrāhā al-imālatu 'alam / Wa abdili-l-hamza idhā mā yaridu * Fī Āl-āna ma' dhakarayni qad rafadū",
                        "translationFr": "« La Hamzah de A'a'jamiyyun exige le Tashīl de manière impérative, et dans Majrāhā l'Imālah est un repère incontournable. De même, convertis la Hamzah par Ibdāl ou Tashīl dans Āl-āna et Ā-dhakarayni selon les transmissions reçues. »",
                        "reference": "Matn Al-Chāṭibiyyah & Al-Jazariyyah (Bāb al-Hamzatayn)"
                    },
                    "examples": [
                        {
                            "id": "ex-c16-1",
                            "arabicText": "وَقَالَ ٱرۡكَبُواْ فِيهَا بِسۡمِ ٱللَّهِ مَجۡرٜىٰهَا وَمُرۡسَىٰهَآ",
                            "surahAyahRef": "11:41",
                            "surahNameFr": "Hūd",
                            "highlightSegment": "مَجۡرٜىٰهَا",
                            "highlightLetter": "Rā avec Imālah majeure (losange souscrit)",
                            "ruleApplied": "Imālah majeure unique de Hafs",
                            "ruleTag": "tarqiq",
                            "explanationFr": "Repérée dans le Mushaf par un losange (◊) sous le Râ. Se prononce « Majrēhā » avec une Râ amincie (Tarqīq) obligatoire.",
                            "transliteration": "Bismi-llāhi majrēhā wa mursāhā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/011041.mp3"
                        },
                        {
                            "id": "ex-c16-2",
                            "arabicText": "وَلَوۡ جَعَلۡنَٰهُ قُرۡءَانًا أَعۡجَمِيّٗا لَّقَالُواْ لَوۡلَا فُصِّلَتۡ ءَايَٰتُهُۥٓۖ ءَ۬عۡجَمِىّٞ وَعَرَبِىّٞ",
                            "surahAyahRef": "41:44",
                            "surahNameFr": "Fussilat",
                            "highlightSegment": "ءَ۬عۡجَمِىّٞ",
                            "highlightLetter": "Deuxième Hamzah (point noir / cercle plein)",
                            "ruleApplied": "Tashīl obligatoire de la seconde Hamzah",
                            "ruleTag": "silent",
                            "explanationFr": "Repérée par un point plein (•) sur la 2e Hamzah. On réalise la 1re Hamzah avec fermeté et on adoucit la seconde sans choc glottique : « 'A-a-jamiyyun ».",
                            "transliteration": "'A-a-jamiyyun wa 'arabiyy",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/041044.mp3"
                        },
                        {
                            "id": "ex-c16-3",
                            "arabicText": "قُلۡ ءَآلذَّكَرَيۡنِ حَرَّمَ أَمِ ٱلۡأُنثَيَيۡنِ",
                            "surahAyahRef": "6:143",
                            "surahNameFr": "Al-An'ām",
                            "highlightSegment": "ءَآلذَّكَرَيۡنِ",
                            "highlightLetter": "Deux voies canoniques : Ibdāl ou Tashīl",
                            "ruleApplied": "Madd Al-Farq : Ibdāl 6 temps ou Tashīl",
                            "ruleTag": "madd",
                            "explanationFr": "Deux visages sont permis chez Hafs : 1. L'Ibdāl (transformer la 2e Hamzah en Alif allongé de 6 temps pleins : « Āāāāāā-dhakarayn », voie prioritaire), 2. Le Tashīl sans prolongation.",
                            "transliteration": "Āāāāāā-dhakarayni (ou Tashīl)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/006143.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Prononcer « Majrāhā » avec une Fathah pure et un Râ lourd (Tafkhīm).",
                            "correctionFr": "L'Imālah est obligatoire chez Hafs dans ce mot : le son doit être incliné en [ē] et le Râ aminci."
                        },
                        {
                            "trapFr": "Prononcer deux Hamzahs dures et percutantes dans « ءَاعْجَمِيٌّ » (dire « 'A-'a-jamiyyun » en saccade).",
                            "correctionFr": "La seconde Hamzah doit impérativement être adoucie (Tashīl) avec une émission fluide."
                        }
                    ]
                },
                {
                    "id": "hafs-ishmam-rawm",
                    "nameFr": "2. L'Ishmām & Le Rawm dans « Lā Ta'mannā » (Sourate Yūsuf 11)",
                    "nameAr": "الإِشْمَامُ وَالرَّوْمُ فِي كَلِمَةِ (لَا تَأْمَنَّا)",
                    "mnemonic": "Ishmām = Fusion du Nūn + Arrondir les lèvres sans son | Rawm = 1/3 de Dammah à voix basse",
                    "letters": ["ن"],
                    "definitionFr": "Dans la sourate Yūsuf (verset 11), les frères de Joseph disent : « مَا لَكَ لَا تَأْمَنَّا عَلَىٰ يُوسُفَ ». L'origine morphologique du verbe est « Lā Ta'manunā » (لَا تَأْمَنُنَا) avec deux Nūn, le premier étant porteur d'une Dammah. Pour concilier la fusion phonétique et la trace grammaticale de la Dammah, l'Imam Hafs autorise deux voies de récitation magistrales : l'Ishmām (la voie la plus connue et prioritaire) et le Rawm (Al-Ikhtilās).",
                    "definitionLughatan": {
                        "ar": "الإِشْمَامُ: إِشْمَامُ الشَّفَتَيْنِ رَائِحَةَ الحَرَكَةِ. وَالرَّوْمُ: الطَّلَبُ وَالقَصْدُ.",
                        "fr": "L'Ishmām est l'action de faire humer aux lèvres le parfum de la voyelle. Le Rawm est la quête ou l'ébauche de la voyelle."
                    },
                    "definitionIstilahan": {
                        "ar": "الإِشْمَامُ: ضَمُّ الشَّفَتَيْنِ بُعَيْدَ إِسْكَانِ النُّونِ الأُولَى وَإِدْغَامِهَا إِشَارَةً إِلَى الضَّمِّ دُونَ صَوْتٍ، يَرَاهُ المُبْصِرُ لَا الكَفِيفُ. وَالرَّوْمُ: النُّطْقُ بِبَعْضِ الضَّمَّةِ (ثُلُثِهَا) بِصَوْتٍ خَفِيٍّ يَسْمَعُهُ القَرِيبُ.",
                        "fr": "L'Ishmām consiste à projeter les deux lèvres en rond juste après le soukoûn du premier Nūn assimilé pour signaler visuellement la Dammah sans émettre aucun son audible. Le Rawm consiste à prononcer un tiers de la Dammah à voix basse audible seulement par un auditeur proche."
                    },
                    "mechanismFr": "Pour l'Ishmām : prononcez « Lā ta'man-nā » avec une Shaddah et une Ghunnah de 2 temps sur le Nūn ; pendant la tenue de la Ghunnah, projetez immédiatement vos lèvres vers l'avant en cercle comme pour faire un bisou ou prononcer [w], puis relâchez-les avant d'ouvrir la Fathah. Pour le Rawm : prononcez « Lā ta'man-u-nā » sans fusionner, en réduisant la durée de la Dammah et son intensité sonore au tiers.",
                    "physiologicalDetails": {
                        "tongue": "Plaquée contre les alvéoles supérieures pour le Nūn avec Ghunnah nasale.",
                        "lips": "Arrondissement immédiat et projection en cercle pendant la résonance du Nūn pour l'Ishmām.",
                        "vocalCords": "Vibration pour la Ghunnah ; absence de son vocalique pendant la projection des lèvres.",
                        "airflow": "S'échappe exclusivement par le nez (Khayshūm) pendant l'Ishmām."
                    },
                    "phoneticReasonFr": "L'Ishmām et le Rawm préservent la conscience auditive ou visuelle de la forme grammaticale d'origine (Ta'manunā) tout en préservant la cadence de l'Idghām.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَأَشْمِمِ الشِّفَاهَ فِي لَا تَأْمَنَّا * وَرُمْ بِصَوْتٍ خَافِتٍ لِتُعْنَى\\nفَالرَّوْمُ إِتْيَانٌ بِبَعْضِ الحَرَكَهْ * وَكُلُّ ذِي بَصِيرَةٍ قَدْ أَدْرَكَهُ",
                        "transliteration": "Wa ashmimi-sh-shifāha fī Lā Ta'mannā * Wa rum bi-sawtin khāfitin litu'nā / Far-rawmu ityānun bi-ba'di-l-harakah * Wa kullu dhī basīratin qad adrakahu",
                        "translationFr": "« Arrondis les lèvres par Ishmām dans 'Lā Ta'mannā', ou applique le Rawm à voix tamisée avec application. Car le Rawm consiste à apporter une fraction de la voyelle, que tout connaisseur averti sait identifier. »",
                        "reference": "Matn Al-Chāṭibiyyah (Bāb al-Idghām al-Kabīr)"
                    },
                    "examples": [
                        {
                            "id": "ex-c16-4",
                            "arabicText": "قَالُواْ يَٰٓأَبَانَا مَا لَكَ لَا تَأۡمَ۫نَّا عَلَىٰ يُوسُفَ",
                            "surahAyahRef": "12:11",
                            "surahNameFr": "Yūsuf",
                            "highlightSegment": "لَا تَأۡمَ۫نَّا",
                            "highlightLetter": "Nūn Mushaddadah avec symbole losange/cercle",
                            "ruleApplied": "Ishmām labial (ou Rawm partiel)",
                            "ruleTag": "ghunnah",
                            "explanationFr": "Signalé dans le Mushaf par un losange au-dessus du Nūn. On prononce le Nūn avec sa Ghunnah de 2 temps tout en avançant les lèvres en cercle muet pour signaler la Dammah d'origine.",
                            "transliteration": "Qālū yā abānā mā laka lā ta'man-nā (avec Ishmām)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/012011.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Prononcer un son [ou] audible pendant l'Ishmām (dire « Lā ta'man-nou-nā » à voix haute).",
                            "correctionFr": "L'Ishmām est un geste purement VISUEL des lèvres sans aucune émission sonore ! Seul le Rawm comporte un son vocalique atténué."
                        },
                        {
                            "trapFr": "Oublier d'arrondir les lèvres et prononcer un Nūn simple sans particularité.",
                            "correctionFr": "L'une des deux voies (Ishmām ou Rawm) est impérativement requise chez Hafs."
                        }
                    ]
                },
                {
                    "id": "hafs-saktat-arba",
                    "nameFr": "3. Les 4 Saktāt Canoniques Obligatoires (Pauses Sans Respiration)",
                    "nameAr": "السَّكْتَاتُ الأَرْبَعُ الوَاجِبَةُ عِنْدَ حَفْصٍ",
                    "mnemonic": "4 arrêts nets de 2 secondes SANS reprendre de souffle : Kahf, Yāsīn, Qiyāmah, Mutaffifīn",
                    "letters": ["س"],
                    "definitionFr": "Le Sakt (السَّكْتُ) est une suspension délibérée du son vocalique d'environ 2 battements (le temps de deux harakahs) SANS reprendre de respiration, suivie de la poursuite immédiate de la lecture. L'Imam Hafs prescrit obligatoirement 4 Saktāt dans le Coran pour dissiper toute ambiguïté de sens théologique ou grammaticale.",
                    "definitionLughatan": {
                        "ar": "السَّكْتُ: المَنْعُ وَالقَطْعُ وَالصَّمْتُ.",
                        "fr": "L'interruption, le silence temporaire, la rétention du souffle."
                    },
                    "definitionIstilahan": {
                        "ar": "قَطْعُ الصَّوْتِ زَمَناً دُونَ زَمَنِ الوَقْفِ عَادَةً مِنْ غَيْرِ تَنَفُّسٍ مَعَ قَصْدِ مُتَابَعَةِ القِرَاءَةِ فِي الحَالِ.",
                        "fr": "La coupure nette de la phonation pour une durée mesurée inférieure au Waqf ordinaire, sans inspiration pulmonaire, avec l'intention ferme de poursuivre immédiatement la récitation."
                    },
                    "mechanismFr": "Lorsque vous arrivez sur la lettre portant le petit Sīn supérieur (س) : immobilisez instantanément la voix sur la consonne ou la voyelle d'arrêt, retenez votre souffle pendant 2 secondes sans inspirer ni expirer, puis repartez aussitôt sur le mot suivant.",
                    "physiologicalDetails": {
                        "tongue": "Reste figée sur place ou au repos.",
                        "lips": "Immobiles.",
                        "vocalCords": "Se ferment doucement pour suspendre la vibration sans heurt glottique violent.",
                        "airflow": "Bloqué au niveau laryngé sans appel d'air pulmonaire."
                    },
                    "phoneticReasonFr": "Empêcher que le sens ne soit corrompu : dans Al-Kahf, pour ne pas croire que « Qayyiman » qualifie « 'Iwajā » ; dans Yāsīn, pour séparer la parole des incrédules de la réponse des anges ; dans Al-Qiyāmah et Al-Mutaffifīn, pour empêcher l'Idghām phonétique (Man-Rāq -> Mar-rāq) qui altérerait le sens.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَسَكْتَةُ حَفْصٍ عَنْهُ فِي أَرْبَعٍ جَرَتْ * عِوَجًا بَلْ رَانَ مَعْ مَنْ رَاقَ انْبَرَتْ\\nوَمَرْقَدِنَا كَذَاكَ ثَبِّتْ لَفْظَهَا * بِلَا تَنَفُّسٍ تُحِزْ مُعْتَمَدَهَا",
                        "transliteration": "Wa saktatu Hafsin 'anhu fī arba'in jarat * 'Iwajan bal rāna ma' man rāqa-nbarat / Wa marqadinā kadhāka thabbit lafzahā * Bilā tanaffusin tuhiz mu'tamadahā",
                        "translationFr": "« Le Sakt de Hafs s'applique à quatre passages établis : 'Iwajā, Bal Rāna, Man Rāq, et Marqadinā. Maintiens leur énonciation sans reprendre ton souffle pour saisir la norme authentique. »",
                        "reference": "Matn Al-Chāṭibiyyah & Al-Muqaddimah Al-Jazariyyah"
                    },
                    "examples": [
                        {
                            "id": "ex-c16-5",
                            "arabicText": "وَلَمۡ يَجۡعَل لَّهُۥ عِوَجَاۜ ١ قَيِّمٗا لِّيُنذِرَ",
                            "surahAyahRef": "18:1-2",
                            "surahNameFr": "Al-Kahf",
                            "highlightSegment": "عِوَجَاۜ ١ قَيِّمٗا",
                            "highlightLetter": "Sakt sur l'Alif de 'Iwajā (س)",
                            "ruleApplied": "Saktah obligatoire de 2 temps sans souffle",
                            "ruleTag": "silent",
                            "explanationFr": "On prononce « 'Iwajā » avec 2 temps de Madd d'arrêt, on suspend la voix 2 secondes sans respirer, puis on enchaîne : « Qayyiman ».",
                            "transliteration": "'Iwajā [silence sans souffle] Qayyiman",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/018001.mp3"
                        },
                        {
                            "id": "ex-c16-6",
                            "arabicText": "مَنۢ بَعَثَنَا مِن مَّرۡقَدِنَاۜۗ هَٰذَا مَا وَعَدَ ٱلرَّحۡمَٰنُ",
                            "surahAyahRef": "36:52",
                            "surahNameFr": "Yā-Sīn",
                            "highlightSegment": "مَّرۡقَدِنَاۜۗ هَٰذَا",
                            "highlightLetter": "Sakt sur Marqadinā",
                            "ruleApplied": "Saktah séparant deux déclarations théologiques",
                            "ruleTag": "silent",
                            "explanationFr": "Silence sans souffle sur « Marqadinā » avant de proclamer « Hādhā mā wa'ada-r-Rahmān ».",
                            "transliteration": "Min marqadinā [silence sans souffle] hādhā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/036052.mp3"
                        },
                        {
                            "id": "ex-c16-7",
                            "arabicText": "وَقِيلَ مَنۡۜ رَاقٖ",
                            "surahAyahRef": "75:27",
                            "surahNameFr": "Al-Qiyāmah",
                            "highlightSegment": "مَنۡۜ رَاقٖ",
                            "highlightLetter": "Sakt empêchant l'Idghām du Nūn dans le Râ",
                            "ruleApplied": "Saktah avec Izhār obligatoire du Nūn",
                            "ruleTag": "izhar",
                            "explanationFr": "Le silence sans souffle bloque l'assimilation normale du Nūn dans le Râ : on prononce « Man » nettement, pause de 2 secondes sans souffle, puis « Rāq ».",
                            "transliteration": "Wa qīla Man [silence] Rāq",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/075027.mp3"
                        },
                        {
                            "id": "ex-c16-8",
                            "arabicText": "كَلَّاۖ بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُواْ يَكۡسِبُونَ",
                            "surahAyahRef": "83:14",
                            "surahNameFr": "Al-Mutaffifīn",
                            "highlightSegment": "بَلۡۜ رَانَ",
                            "highlightLetter": "Sakt empêchant l'Idghām du Lām dans le Râ",
                            "ruleApplied": "Saktah avec Izhār obligatoire du Lām",
                            "ruleTag": "izhar",
                            "explanationFr": "Le silence bloque l'assimilation du Lām de « Bal » dans le Râ de « Rāna » : on prononce « Bal » (sans souffle), puis « Rāna ».",
                            "transliteration": "Kallā bal [silence] rāna 'alā qulūbihim",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/083014.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Reprendre sa respiration pendant le Sakt (respirer entre « Man » et « Rāq »).",
                            "correctionFr": "Le Sakt se fait obligatoirement SANS reprise de souffle. Si vous respirez, cela devient un Waqf (pause complète)."
                        },
                        {
                            "trapFr": "Faire l'Idghām dans « Man Rāq » (dire « Mar-rāq ») ou dans « Bal Rāna » (dire « Bar-rāna »).",
                            "correctionFr": "Le Sakt brise l'assimilation et impose la clarté (Izhār) absolue de la consonne."
                        }
                    ]
                },
                {
                    "id": "hafs-alfat-saba",
                    "nameFr": "4. Les 7 Alifs (الألفات السبع) & Singularités Lexicales",
                    "nameAr": "الأَلِفَاتُ السَّبْعُ وَالكَلِمَاتُ المَخْصُوصَةُ عِنْدَ حَفْصٍ",
                    "mnemonic": "7 Alifs = 2 temps à l'arrêt, 0 temps en continu (symbole rond allongé)",
                    "letters": ["ا"],
                    "definitionFr": "Les 7 Alifs sont sept mots coraniques précis dotés d'un Alif final portant un zéro rectangulaire allongé (Sifr Mustatīl ْ). En récitation liée (Wasl), cet Alif s'efface totalement de la phonation. Mais si le lecteur marque l'arrêt (Waqf) sur le mot, l'Alif doit être obligatoirement prolongé de 2 temps pleins. De plus, Hafs possède des règles singulières pour des mots célèbres comme « Bi'sa-l-ismu », « Yabsuṭ », et « Basṭatan ».",
                    "definitionLughatan": {
                        "ar": "الأَلِفَاتُ السَّبْعُ: كَلِمَاتٌ مَخْصُوصَةٌ فِيهَا أَلِفَاتٌ ثَابِتَةٌ وَقْفاً سَاقِطَةٌ وَصْلاً.",
                        "fr": "Sept vocables spécifiques dont l'Alif subsiste à la pause et tombe en liaison continue."
                    },
                    "definitionIstilahan": {
                        "ar": "سَبْعَةُ أَلِفَاتٍ فِي القُرْآنِ تُثْبَتُ مَدّاً بِمِقْدَارِ حَرَكَتَيْنِ عِنْدَ الوَقْفِ، وَتُحْذَفُ لَفْظاً عِنْدَ الوَصْلِ، وَعَلَامَتُهَا الصِّفْرُ المُسْتَطِيلُ القَائِمُ.",
                        "fr": "Sept Alifs coraniques maintenus sur une durée de 2 temps à la pause et effacés à l'oral en liaison, repérés par le petit ovale vertical suscrite."
                    },
                    "mechanismFr": "Pour les 7 Alifs : en liaison continue, prononcez la voyelle simple Fathah sans vous attarder et enchaînez. À l'arrêt, immobilisez le souffle et déployez les 2 temps métronomiques complets de l'allongement. Pour « Bi'sa-l-ismu » (الحجرات 11), commencez directement par « Al-Ismu » ou « Li-smu ».",
                    "physiologicalDetails": {
                        "tongue": "Au repos pour l'Alif à la pause ; transition rapide vers la consonne suivante en liaison.",
                        "lips": "Ouverture verticale pour les 2 temps du Madd à l'arrêt.",
                        "vocalCords": "Vibration continue.",
                        "airflow": "Flux continu sans heurts."
                    },
                    "phoneticReasonFr": "Particularité de la graphie et de la cadence poético-liturgique arabe archaïque préservée inviolablement dans le codex universel.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَأَثْبِتِ الأَلِفَ فِي أَنَا وَقَفْ * كَذَاكَ لَكِنَّا وَظُنُونَا اعْتَرَفْ\\nوَالرَّسُولَا وَالسَّبِيلَا سَلَاسِلَا * قَوَارِيرَا مَعَ الأُولَى كَمَا انْجَلَى",
                        "transliteration": "Wa athbiti-l-alifa fī Anā waqaf * Kadhāka Lākinnā wa zunūnā-'taraf / War-rasūlā was-sabīlā salāsilā * Qawārīrā ma'al-ūlā kamā-njalā",
                        "translationFr": "« Maintiens l'Alif à la pause dans 'Anā', de même que 'Lākinnā', 'Ad-Dunūnā', 'Ar-Rasūlā', 'As-Sabīlā', 'Salāsilā', et le premier 'Qawārīrā' comme cela a été clarifié. »",
                        "reference": "Matn Al-Chāṭibiyyah & Al-Jazariyyah (Al-Alifāt As-Sab')"
                    },
                    "examples": [
                        {
                            "id": "ex-c16-9",
                            "arabicText": "قَالَ أَنَا۠ خَيۡرٞ مِّنۡهُ خَلَقۡتَنِى مِن نَّارٖ",
                            "surahAyahRef": "7:12",
                            "surahNameFr": "Al-A'rāf",
                            "highlightSegment": "أَنَا۠ خَيۡرٞ",
                            "highlightLetter": "Alif dans Anā (أَنَا۠)",
                            "ruleApplied": "Premier des 7 Alifs : 2 temps à l'arrêt, 0 en continu",
                            "ruleTag": "madd",
                            "explanationFr": "En liaison continue : on prononce « Ana khayrun » sans allongement (0 temps). Si l'on s'arrête sur le mot, on prononce obligatoirement « Anāā » (2 temps complets).",
                            "transliteration": "Ana khayrun (arrêt : Anāā)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/007012.mp3"
                        },
                        {
                            "id": "ex-c16-10",
                            "arabicText": "لَّٰكِنَّا۠ هُوَ ٱللَّهُ رَبِّى",
                            "surahAyahRef": "18:38",
                            "surahNameFr": "Al-Kahf",
                            "highlightSegment": "لَّٰكِنَّا۠",
                            "highlightLetter": "Alif dans Lākinnā",
                            "ruleApplied": "Deuxième des 7 Alifs",
                            "ruleTag": "madd",
                            "explanationFr": "En continu : « Lākinna huwa-llāh ». À l'arrêt : « Lākinnāā » avec 2 temps.",
                            "transliteration": "Lākinna huwa-llāh (arrêt : Lākinnā)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/018038.mp3"
                        },
                        {
                            "id": "ex-c16-11",
                            "arabicText": "بِئۡسَ ٱلِٱسۡمُ ٱلۡفُسُوقُ بَعۡدَ ٱلۡإِيمَٰنِ",
                            "surahAyahRef": "49:11",
                            "surahNameFr": "Al-Hujurāt",
                            "highlightSegment": "بِئۡسَ ٱلِٱسۡمُ",
                            "highlightLetter": "Liaison singulière dans Al-Ism",
                            "ruleApplied": "Début par « Al-Ism » ou « Lism »",
                            "ruleTag": "silent",
                            "explanationFr": "En liaison : « Bi'sa-l-ismu ». Si l'on débute par le mot « Al-Ism », deux voies sont permises : 1. « Al-Ismu », 2. « Li-smu ».",
                            "transliteration": "Bi'sa-l-ismu (début : Al-ismu ou Lismu)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/049011.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Allonger l'Alif de « Anā » (أَنَا) en récitation continue (dire « Anāā khayrun »).",
                            "correctionFr": "L'Alif des 7 mots s'élide impérativement en liaison continue : on prononce « Ana khayrun »."
                        },
                        {
                            "trapFr": "Oublier de prolonger de 2 temps l'Alif si l'on s'arrête sur « Lākinnā » ou « Anā ».",
                            "correctionFr": "À la pause (Waqf), l'allongement de 2 temps est obligatoire."
                        }
                    ]
                }
            ],
            "quizzes": [
                {
                    "id": "q-c16-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe (Pages 74-82) : Dans quel mot unique du Coran l'Imam Hafs applique-t-il l'Imālah majeure (inclinaison vers le son [ē]) ?",
                    "verseArabic": "وَقَالَ ٱرۡكَبُواْ فِيهَا بِسۡمِ ٱللَّهِ مَجۡرٜىٰهَا وَمُرۡسَىٰهَآ",
                    "options": [
                        "مَجْرَاهَا (Sourate Hūd 41)",
                        "الضُّحَىٰ",
                        "ءَاعْجَمِيٌّ",
                        "مُوسَىٰ"
                    ],
                    "correctAnswer": "مَجْرَاهَا (Sourate Hūd 41)",
                    "explanationFr": "« Majrāhā » dans la sourate Hūd (verset 41) est l'unique occurrence d'Imālah majeure chez Hafs par la voie de la Chāṭibiyyah dans tout le Noble Coran. Le Râ y est amincit par Tarqīq.",
                    "ruleId": "hafs-imalah-tashil"
                },
                {
                    "id": "q-c16-2",
                    "type": "error_detect",
                    "promptFr": "Dans « كَلَّا بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم » (Al-Mutaffifīn 14), un lecteur effectue l'Idghām du Lām dans le Râ en disant « Bar-rāna ». Quelle règle de Hafs a-t-il enfreinte ?",
                    "verseArabic": "كَلَّاۖ بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُواْ يَكۡسِبُونَ",
                    "targetWord": "بَلۡۜ رَانَ",
                    "surahAyahRef": "83:14",
                    "options": [
                        "Lahn Khafī : Il a omis la Saktah obligatoire (pause de 2 temps sans reprise de souffle) qui interdit l'Idghām !",
                        "Récitation autorisée",
                        "Madd Lāzim négligé",
                        "Erreur sur le mot Kallā"
                    ],
                    "correctAnswer": "Lahn Khafī : Il a omis la Saktah obligatoire (pause de 2 temps sans reprise de souffle) qui interdit l'Idghām !",
                    "explanationFr": "Hafs applique une Saktah obligatoire sur « Bal », ce qui suspend la phonation et empêche formellement l'assimilation normale dans le Râ : on doit prononcer « Bal » distinctement, marquer le silence sans souffle, puis dire « Rāna ».",
                    "ruleId": "hafs-saktat-arba"
                },
                {
                    "id": "q-c16-3",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe : En quoi consiste l'Ishmām dans le mot « لَا تَأْمَنَّا » (Yūsuf 11) ?",
                    "verseArabic": "قَالُواْ يَٰٓأَبَانَا مَا لَكَ لَا تَأۡمَ۫نَّا عَلَىٰ يُوسُفَ",
                    "options": [
                        "Arrondir et projeter les lèvres vers l'avant en cercle muet juste après l'impact du premier Nūn pour signaler la Dammah, sans émettre de son",
                        "Prononcer le mot avec un sifflement",
                        "Changer le Nūn en Mīm",
                        "Prolonger le mot de 6 temps"
                    ],
                    "correctAnswer": "Arrondir et projeter les lèvres vers l'avant en cercle muet juste après l'impact du premier Nūn pour signaler la Dammah, sans émettre de son",
                    "explanationFr": "L'Ishmām est un geste purement visuel des lèvres projetées en avant pour indiquer la Dammah originelle (Ta'manunā) pendant la Ghunnah du Nūn, sans bruit vocalique.",
                    "ruleId": "hafs-ishmam-rawm"
                }
            ]
        }
    ]
'''

with open("scripts/data_chapters_13_16.py", "w", encoding="utf-8") as f:
    f.write(content)

print("data_chapters_13_16.py successfully created!")
