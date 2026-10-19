# -*- coding: utf-8 -*-
"""
Enriched Chapters 5 to 8:
- Chapter 5: Les Prolongations II (Madd Secondaire / Far'ī)
- Chapter 6: Les Hamzahs (Hamzat Al-Wasl & Al-Qat')
- Chapter 7: Les Règles de la Lām Sākinah
- Chapter 8: Nūn Sākinah & Tanwīn (Les 4 Règles Canoniques)
"""

def get_chapters_5_8():
    return [
        # ==========================================
        # CHAPITRE 5 : LES PROLONGATIONS II (MADD FAR'Ī)
        # ==========================================
        {
            "id": "chap-5",
            "number": 5,
            "slug": "madd-2",
            "titleFr": "Les Prolongations II (Madd Secondaire / Far'ī)",
            "titleAr": "المَدُّ الفَرْعِيُّ وَأَقْسَامُهُ",
            "category": "intermediate",
            "estimatedMinutes": 25,
            "isPilotChapter": True,
            "summaryFr": "Explorer les causes de prolongation secondaire : la Hamzah (Madd Muttasil obligatoire 4-5 temps, Munfasil permis 4-5 temps, Badal 2 temps) et le Soukoûn (Madd Lāzim 6 temps incompressibles, 'Ārid li-s-Sukūn 2, 4 ou 6 temps). Comprendre la hiérarchie de force des prolongations (أقوى المدود).",
            "infographicPoints": [
                "Deux seules causes au Madd Far'ī : la Hamzah (همزة) ou le Soukoûn (سكون).",
                "Madd Wājib Muttasil (مَدّ وَاجِب مُتَّصِل) : Lettre de Madd + Hamzah dans le MÊME mot (ex: As-Samā', Jā'a) -> 4 ou 5 temps obligatoires.",
                "Madd Jā'iz Munfasil (مَدّ جَائِز مُنْفَصِل) : Lettre de Madd en fin de mot + Hamzah au début du mot suivant (ex: Fī amrikum) -> 4 ou 5 temps par la voie de la Shātibiyyah.",
                "Madd Lāzim (مَدّ لَازِم) : Suivi d'un soukoûn originel ou d'une Shaddah -> 6 temps stricts incompressibles (ex: Al-Dhāllīn, Al-Hāqqah).",
                "Madd 'Ārid li-s-Sukūn (مَدّ عَارِض لِلسُّكُون) : Arrêt temporaire créant un soukoûn -> 2, 4 ou 6 temps au choix.",
                "Échelle de puissance des Madds : Lāzim > Muttasil > 'Ārid > Munfasil > Badal (أَقْوَى المَدُودِ لَازِمٌ فَمَا اتَّصَلْ...)."
            ],
            "subrules": [
                {
                    "id": "madd-muttasil-munfasil",
                    "nameFr": "1. Madd Muttasil vs Madd Munfasil (Causes par la Hamzah)",
                    "nameAr": "المَدُّ الوَاجِبُ المُتَّصِلُ وَالمَدُّ الجَائِزُ المُنْفَصِلُ",
                    "mnemonic": "Muttasil = Même mot (Wājib 4-5t) | Munfasil = Deux mots distincts (Jā'iz 4-5t)",
                    "letters": [],
                    "definitionFr": "Le Madd Muttasil réunit la lettre de prolongation et la Hamzah au sein du même mot : son allongement est obligatoire (Wājib) à 4 ou 5 temps. Le Madd Munfasil sépare la lettre de Madd (fin du 1er mot) de la Hamzah (début du 2e mot) : il est qualifié de permis (Jā'iz) car certaines lectures le raccourcissent à 2 temps, bien qu'il vaille 4 ou 5 temps par la voie de la Shātibiyyah chez Hafs.",
                    "definitionLughatan": {
                        "ar": "المُتَّصِلُ: المَشْدُودُ المُلْتَحِمُ. المُنْفَصِلُ: المُنْقَطِعُ عَنْ غَيْرِهِ المَفْصُولُ عَنْهُ.",
                        "fr": "Muttasil : joint et continu. Munfasil : disjoint et séparé."
                    },
                    "definitionIstilahan": {
                        "ar": "المُتَّصِلُ: أَنْ يَأْتِيَ حَرْفُ المَدِّ وَبَعْدَهُ هَمْزَةٌ فِي كَلِمَةٍ وَاحِدَةٍ (وَاجِبٌ 4-5 حَرَكَاتٍ). المُنْفَصِلُ: أَنْ يَأْتِيَ حَرْفُ المَدِّ آخِرَ كَلِمَةٍ وَالهَمْزَةُ أَوَّلَ الكَلِمَةِ التَّالِيَةِ (جَائِزٌ).",
                        "fr": "Muttasil : lettre de Madd suivie d'une Hamzah dans le même mot. Munfasil : lettre de Madd en fin de mot et Hamzah au début du mot suivant."
                    },
                    "mechanismFr": "Ouvrez largement la cavité buccale pour laisser flotter la vibration sonore pendant 4 à 5 battements métronomiques stables, puis refermez nettement les cordes vocales au niveau du larynx pour faire claquer la Hamzah sans dureté.",
                    "physiologicalDetails": {
                        "tongue": "Abaissée et détendue au plancher buccal pour maximiser la résonance du son.",
                        "lips": "Ouverture conforme à la voyelle de base sans arrondissement parasite.",
                        "vocalCords": "Vibration continue sur 4 à 5 pulsations régulières, suivie d'une fermeture glottique franche pour articuler la Hamzah.",
                        "airflow": "Flux soutenu et stable à travers la bouche."
                    },
                    "phoneticReasonFr": "La Hamzah est une consonne lourde, occlusive et profonde (Aqṣā al-Halq). La précéder d'une prolongation temporelle de 4 à 5 temps offre à l'appareil phonatoire le temps physique nécessaire pour préparer le coup de glotte sans heurter la gorge.",
                    "durationHarakat": 4,
                    "matnJazariyyah": {
                        "verseAr": "وَوَاجِبٌ إِنْ جَاءَ قَبْلَ هَمْزَةِ * مُتَّصِلاً إِنْ جُمِعَا بِكِلْمَةِ\nوَجَائِزٌ إِذَا أَتَى مُنْفَصِلَا * أَوْ عَرَضَ السُّكُونُ وَقْفاً مُسْجَلَا",
                        "transliteration": "Wa wājibun in jā'a qabla hamzati * Muttasilan in jumi'ā bi-kilmati / Wa jā'izun idhā atā munfasilā * Aw 'arada-s-sukūnu waqfan musjalā",
                        "translationFr": "« La prolongation est obligatoire (Wājib) si elle précède une Hamzah réunie dans un même mot (Muttasil) ; elle est permise (Jā'iz) si elle apparaît dans deux mots séparés (Munfasil), ou si un soukoûn survient à l'arrêt. » (Versets 36-37)",
                        "chapterNameAr": "بَابُ أَقْسَامِ المَدِّ"
                    },
                    "examples": [
                        {
                            "id": "ex-c5-1",
                            "arabicText": "إِذَا جَآءَ نَصۡرُ ٱللَّهِ وَٱلۡفَتۡحُ",
                            "surahAyahRef": "110:1",
                            "surahNameFr": "An-Nasr",
                            "highlightSegment": "جَآءَ",
                            "highlightLetter": "ـآءَ (Madd Muttasil)",
                            "ruleApplied": "Madd Wājib Muttasil (4-5 Temps)",
                            "ruleTag": "madd",
                            "explanationFr": "L'Alif et la Hamzah sont réunis au cœur du mot « Jā'a ». La prolongation doit impérativement durer 4 ou 5 temps. La descendre à 2 temps est un Lahn Khafī.",
                            "transliteration": "Idhā jāāā'a nasru-Llāh",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/110001.mp3"
                        },
                        {
                            "id": "ex-c5-2",
                            "arabicText": "قُوٓاْ أَنفُسَكُمۡ وَأَهۡلِيكُمۡ نَارٗا",
                            "surahAyahRef": "66:6",
                            "surahNameFr": "At-Tahrīm",
                            "highlightSegment": "قُوٓاْ أَنفُسَكُمۡ",
                            "highlightLetter": "ـوٓاْ + أَ (Madd Munfasil)",
                            "ruleApplied": "Madd Jā'iz Munfasil (4-5 Temps)",
                            "ruleTag": "madd",
                            "explanationFr": "Le Wāw termine « Qū » et la Hamzah ouvre « Anfusakum ». Le lien entre les deux mots s'étire sur 4 à 5 temps selon la récitation standard de Hafs.",
                            "transliteration": "Qūūū anfusakum",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/066006.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : varier arbitrairement la durée des Madds au sein de la même lecture (ex: faire 2 temps sur un verset, puis 5 temps sur le suivant).",
                            "correctionFr": "Appliquez la règle de concordance d'Al-Jazariyyah : « وَاللَّفْظُ فِي نَظِيرِهِ كَمِثْلِهِ » (Deux structures semblables doivent recevoir exactement la même mesure temporelle)."
                        }
                    ]
                },
                {
                    "id": "madd-lazim-strict",
                    "nameFr": "2. Le Madd Lāzim (6 Temps Stricts Incompressibles)",
                    "nameAr": "المَدُّ اللَّازِمُ الكَلِمِيُّ وَالحَرْفِيُّ (6 حَرَكَاتٍ)",
                    "mnemonic": "Lāzim = 6 temps incompressibles | Kalimī (dans un mot) / Harfī (dans les lettres isolées)",
                    "letters": [],
                    "definitionFr": "Le Madd Lāzim est la prolongation la plus puissante du Coran. Il survient lorsqu'une lettre de prolongation est immédiatement suivie d'une lettre portant un soukoûn originel permanent ou une Shaddah (ّ), que l'on poursuive ou que l'on s'arrête. Sa durée est obligatoirement et unanimement fixée à 6 temps.",
                    "definitionLughatan": {
                        "ar": "اللَّازِمُ: الثَّابِتُ الوَاجِبُ الَّذِي لَا يَنْفَكُّ عَنْ صَاحِبِهِ.",
                        "fr": "L'inévitable, l'immuable et le constant qui ne quitte jamais son état."
                    },
                    "definitionIstilahan": {
                        "ar": "أَنْ يَأْتِيَ بَعْدَ حَرْفِ المَدِّ سَاكِنٌ أَصْلِيٌّ لَازِمٌ وَصْلاً وَوَقْفاً فِي كَلِمَةٍ أَوْ حَرْفٍ، وَمِقْدَارُهُ سِتُّ حَرَكَاتٍ لُزُوماً.",
                        "fr": "Qu'une lettre de Madd soit suivie d'un soukoûn authentique invariable à la fois en liaison et à l'arrêt, dans un mot ou une lettre. Sa mesure est strictement de 6 temps pour tous les récitateurs."
                    },
                    "mechanismFr": "Maintenez la voyelle longue pendant 6 temps pleins avec amplitude et stabilité, puis appuyez fermement sur la consonne suivante avec un Nabrah (accentuation dynamique) si elle porte une Shaddah.",
                    "physiologicalDetails": {
                        "tongue": "Immobile pendant les 6 battements temporels, puis bondit avec énergie sur la lettre géminée.",
                        "lips": "Posturées sans crispation.",
                        "vocalCords": "Vibration continue et puissante sur toute la longueur des 6 temps.",
                        "airflow": "Colonne d'air pulmonaire ample et contrôlée."
                    },
                    "phoneticReasonFr": "Une lettre avec Shaddah est formée d'une première consonne soukounée suivie d'une consonne voyellée. La lettre de Madd étant elle-même soukounée, deux soukoûns se percutent ! L'allongement majestueux de 6 temps compense ce heurt phonologique et permet à la bouche de s'engager sur la Shaddah.",
                    "durationHarakat": 6,
                    "matnJazariyyah": {
                        "verseAr": "فَلَازِمٌ إِنْ جَاءَ بَعْدَ حَرْفِ مَدْ * سَاكِنُ حَالَيْنِ وَبِالطُّولِ يُمَدْ\nكَلِمِيٌّ انْ فِي كَلِمَةٍ وَقَعْ * وَحَرْفِيٌّ فِي حُرُوفِهَا شَرَعْ",
                        "transliteration": "Fa lāzimun in jā'a ba'da harfi mad * Sākinu hālayni wa bit-tūli yumad / Kalimīyyun in fī kalimatin waqa' * Wa harfīyyun fī hurūfihā shara'",
                        "translationFr": "« Il est qualifié de Lāzim si un soukoûn permanent en liaison et à l'arrêt suit la lettre de Madd : il est alors étiré au maximum (6 temps). Il est Kalimī s'il se produit dans un mot, et Harfī s'il apparaît dans les lettres isolées. » (Verset 35)",
                        "chapterNameAr": "بَابُ المَدِّ اللَّازِمِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c5-3",
                            "arabicText": "غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ",
                            "surahAyahRef": "1:7",
                            "surahNameFr": "Al-Fātihah",
                            "highlightSegment": "ٱلضَّآلِّينَ",
                            "highlightLetter": "ـآلِّـ (Lāzim Kalimī Muthaqqal)",
                            "ruleApplied": "Madd Lāzim Kalimī Muthaqqal (6 Temps)",
                            "ruleTag": "madd",
                            "explanationFr": "L'Alif de prolongation est suivi de la Lām portant une Shaddah (ّ). L'allongement doit durer 6 temps incompressibles, suivi d'un appui net (Nabr) sur la Lām.",
                            "transliteration": "Wa la-d-dhāāāāāāllīn",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/001007.mp3"
                        },
                        {
                            "id": "ex-c5-4",
                            "arabicText": "ٱلۡحَآقَّةُ ١ مَا ٱلۡحَآقَّةُ",
                            "surahAyahRef": "69:1-2",
                            "surahNameFr": "Al-Hāqqah",
                            "highlightSegment": "ٱلۡحَآقَّةُ",
                            "highlightLetter": "ـآقَّـ (Madd 6 temps)",
                            "ruleApplied": "Madd Lāzim Kalimī Muthaqqal",
                            "ruleTag": "madd",
                            "explanationFr": "L'Alif est suivi du Qāf avec Shaddah : déployez 6 temps réguliers avant de faire claquer l'écrasement du Qāf lourd.",
                            "transliteration": "Al-Hāāāāāāqqah",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/069001.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : raccourcir le Madd Lāzim à 3 ou 4 temps par manque de souffle dans la Fātihah.",
                            "correctionFr": "Prenez une inspiration calme avant « Wa la-d-Dhāllīn » et tenez les 6 battements complets sans accélérer."
                        }
                    ]
                },
                {
                    "id": "madd-arid-badal",
                    "nameFr": "3. Madd 'Ārid li-s-Sukūn & Madd Badal",
                    "nameAr": "المَدُّ العَارِضُ لِلسُّكُونِ وَمَدُّ البَدَلِ",
                    "mnemonic": "'Ārid = 2, 4 ou 6 temps à l'arrêt | Badal = Hamzah AVANT lettre de Madd (2 temps)",
                    "letters": [],
                    "definitionFr": "Le Madd 'Ārid li-s-Sukūn apparaît lorsqu'une lettre de Madd précède la dernière consonne d'un mot et que le lecteur s'arrête dessus en gelant la voyelle finale en soukoûn temporaire : il se lit au choix à 2, 4 ou 6 temps. Le Madd Badal survient lorsque la Hamzah PRÉCÈDE la lettre de Madd dans le mot : chez Hafs, il ne vaut que 2 temps.",
                    "definitionLughatan": {
                        "ar": "العَارِضُ: الطَّارِئُ غَيْرُ الأَصْلِيِّ. البَدَلُ: العِوَضُ وَالمُغَيَّرُ عَنْ أَصْلِهِ.",
                        "fr": "'Ārid : accidentel et temporaire. Badal : permuté et substitué."
                    },
                    "definitionIstilahan": {
                        "ar": "العَارِضُ: أَنْ يَقَعَ بَعْدَ حَرْفِ المَدِّ سُكُونٌ عَارِضٌ لِأَجْلِ الوَقْفِ (جَائِزٌ 2 أَوْ 4 أَوْ 6 حَرَكَاتٍ). البَدَلُ: أَنْ تَتَقَدَّمَ الهَمْزَةُ عَلَى حَرْفِ المَدِّ فِي كَلِمَةٍ (حَرَكَتَانِ عِنْدَ حَفْصٍ).",
                        "fr": "'Ārid : lettre de Madd suivie d'un soukoûn accidentel causé exclusivement par la pause (permis à 2, 4 ou 6 temps). Badal : la Hamzah précède la lettre de Madd (2 temps chez Hafs)."
                    },
                    "mechanismFr": "Pour le 'Ārid : choisissez une mesure (2, 4 ou 6 temps) et conservez la même cadence tout au long de votre lecture. Pour le Badal : traitez-le exactement comme un Madd naturel de 2 temps sans l'étirer.",
                    "physiologicalDetails": {
                        "tongue": "Stable pendant l'élongation, puis vient sceller la consonne finale à l'arrêt.",
                        "lips": "Neutres.",
                        "vocalCords": "Vibration libre.",
                        "airflow": "Flux continu sans fuite nasale."
                    },
                    "phoneticReasonFr": "À l'origine, le mot de Badal comportait deux Hamzahs consécutives (ex: « أَاْمَنَ »). Pour adoucir la prononciation, les Arabes ont substitué la 2e Hamzah soukounée par une lettre de Madd homogène à la 1re voyelle (« ءَامَنَ »).",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "أَوْ عَـرَضَ السُّكُونُ وَقْفاً مُسْجَلَا * كَـ نَسْتَعِينُ مَعْ مَـآبٍ فُصِّلَا\nوَقَدِّمِ المَدَّ عَلَى الهَمْزِ يُرَى * بَدَلَ كَـ ءَامَنُوا هُدًى لِمَنْ قَرَا",
                        "transliteration": "Aw 'arada-s-sukūnu waqfan musjalā * Ka-Nasta'īnu ma' Ma'ābin fussilā / Wa qaddimi-l-madda 'alal-hamzi yurā * Badala ka-Āmanū hudan liman qarā",
                        "translationFr": "« Ou si un soukoûn accidentel survient lors de l'arrêt comme dans 'Nasta'īn' et 'Ma'āb'. Et si la Hamzah précède la lettre de prolongation, c'est le Badal comme dans 'Āmanū'. »",
                        "chapterNameAr": "بَابُ المَدِّ العَارِضِ وَالبَدَلِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c5-5",
                            "arabicText": "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ",
                            "surahAyahRef": "1:5",
                            "surahNameFr": "Al-Fātihah",
                            "highlightSegment": "نَسۡتَعِينُ",
                            "highlightLetter": "ـِيـ + نُ (Waqf)",
                            "ruleApplied": "Madd 'Ārid li-s-Sukūn (2, 4 ou 6 temps)",
                            "ruleTag": "madd",
                            "explanationFr": "À l'arrêt sur « Nasta'īn », le Yā' de Madd est suivi du Nūn immobilisé par le soukoûn. Vous pouvez choisir de prolonger de 2, 4 ou 6 temps selon le rythme de votre lecture.",
                            "transliteration": "Iyyāka na'budu wa iyyāka nasta'īīīn",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/001005.mp3"
                        },
                        {
                            "id": "ex-c5-6",
                            "arabicText": "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ",
                            "surahAyahRef": "2:285",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "ءَامَنَ",
                            "highlightLetter": "ءَا (Madd Badal)",
                            "ruleApplied": "Madd Badal (2 Temps chez Hafs)",
                            "ruleTag": "madd",
                            "explanationFr": "La Hamzah précède l'Alif de prolongation dans « Āmana ». Chez Hafs 'an 'Āsim, ce Madd se lit impérativement à 2 temps (ne pas l'étirer à 4 ou 6 temps comme chez Warsh).",
                            "transliteration": "Āmana-r-Rasūlu",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002285.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Allonger le Madd Badal à 4 ou 6 temps par imitation d'autres lectures sans maîtriser la transmission de Hafs.",
                            "correctionFr": "En lecture de Hafs 'an 'Āsim (la lecture enseignée dans cette application), le Madd Badal ne mesure que 2 temps stricts."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c5-1",
                    "title": "Identification de Madd Muttasil dans « ٱلسَّمَآءَ »",
                    "verseArabic": "وَٱلسَّمَآءَ بَنَيۡنَٰهَا بِأَيۡيْدٖ وَإِنَّا لَمُوسِعُونَ",
                    "surahAyahRef": "51:47",
                    "targetSegment": "وَٱلسَّمَآءَ",
                    "promptFr": "Quelle est la durée canonique de prolongation sur le mot « As-Samā' » ?",
                    "hintFr": "L'Alif et la Hamzah sont-ils dans le même mot ou deux mots distincts ?",
                    "solutionFr": "4 ou 5 temps obligatoires (Madd Wājib Muttasil)",
                    "breakdownSteps": [
                        "La lettre de Madd (Alif) est suivie d'une Hamzah dans le même mot.",
                        "C'est un Madd Wājib Muttasil.",
                        "Sa durée est fixée à 4 ou 5 temps par les chaînes de transmission de Hafs."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/051047.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c5-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe : Quelles sont les deux seules causes existantes pour déclencher un Madd Secondaire (Far'ī) ?",
                    "verseArabic": "إِذَا جَآءَ نَصۡرُ ٱللَّهِ وَٱلۡفَتۡحُ",
                    "options": [
                        "La Hamzah (همزة) ou le Soukoûn (سكون)",
                        "La Kasrah ou la Dammah",
                        "La Shaddah et la Tanwīn",
                        "La fin de sourate uniquement"
                    ],
                    "correctAnswer": "La Hamzah (همزة) ou le Soukoûn (سكون)",
                    "explanationFr": "Tout allongement au-delà des 2 temps naturels est déclenché exclusivement soit par la présence d'une Hamzah voisine, soit par un soukoûn (originel ou temporaire).",
                    "ruleId": "madd-muttasil-munfasil"
                },
                {
                    "id": "q-c5-2",
                    "type": "error_detect",
                    "promptFr": "Examen du livre arabe : Dans « ءَامَنَ الرَّسُولُ », un lecteur applique une prolongation de 6 temps sur « Āmana » en prétendant lire selon Hafs. Quel est le diagnostic ?",
                    "verseArabic": "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ",
                    "targetWord": "ءَامَنَ",
                    "surahAyahRef": "2:285",
                    "options": [
                        "Lahn Khafī : Chez Hafs par la voie de la Shātibiyyah, le Madd Badal mesure strictement 2 temps (l'étirer à 6 temps est une confusion avec la lecture de Warsh)",
                        "Récitation excellente et recommandée",
                        "Lahn Jalī modifiant le sens",
                        "Madd Lāzim obligatoire"
                    ],
                    "correctAnswer": "Lahn Khafī : Chez Hafs par la voie de la Shātibiyyah, le Madd Badal mesure strictement 2 temps (l'étirer à 6 temps est une confusion avec la lecture de Warsh)",
                    "explanationFr": "Le livre « التجويد المبسط » classe formellement l'élongation excessive du Badal chez Hafs parmi les erreurs de Lahn Khafī. Hafs lit le Badal en 2 temps réguliers.",
                    "ruleId": "madd-arid-badal"
                },
                {
                    "id": "q-c5-3",
                    "type": "error_detect",
                    "promptFr": "Dans « وَلَا الضَّالِّينَ », le lecteur ne prolonge que pendant 2 temps avant la lettre Lām. Quelle est la faute ?",
                    "verseArabic": "غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ",
                    "targetWord": "ٱلضَّآلِّينَ",
                    "surahAyahRef": "1:7",
                    "options": [
                        "Lahn Khafī majeur : Le Madd Lāzim exige obligatoirement 6 temps complets pour surmonter la Shaddah",
                        "Aucune erreur",
                        "Erreur sur la Qalqalah",
                        "Prononciation autorisée"
                    ],
                    "correctAnswer": "Lahn Khafī majeur : Le Madd Lāzim exige obligatoirement 6 temps complets pour surmonter la Shaddah",
                    "explanationFr": "Le Madd Lāzim est nommé « Lāzim » (obligatoire/inévitable) car tous les imams des dix lectures s'accordent unanimement sur son allongement à 6 temps stricts.",
                    "ruleId": "madd-lazim-strict"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 6 : LES HAMZAHS (WASL & QAT')
        # ==========================================
        {
            "id": "chap-6",
            "number": 6,
            "slug": "hamzah",
            "titleFr": "Les Hamzahs (Hamzat Al-Wasl & Al-Qat')",
            "titleAr": "هَمْزَتَا الوَصْلِ وَالقَطْعِ",
            "category": "intermediate",
            "estimatedMinutes": 20,
            "isPilotChapter": True,
            "summaryFr": "Distinguer la Hamzah stable (Qat' : toujours prononcée avec son tracé ء) de la Hamzah de liaison (Wasl : ٱ, prononcée uniquement en début de phrase et effacée en continu). Maîtriser la règle de la 3e lettre pour vocaliser les verbes à l'initiale et mémoriser les 5 verbes d'exception.",
            "infographicPoints": [
                "Hamzat Al-Qat' (همزة القطع) : Porte le petit symbole ء. Se prononce fermement partout : au début, au milieu, en liaison et à l'arrêt.",
                "Hamzat Al-Wasl (همزة الوصل) : Porte un petit Sād miniature (صـ sur ٱ). S'efface complètement en liaison continue ; ne se prononce que si l'on commence par elle !",
                "Débuter sur un verbe avec Hamzat Al-Wasl : Regardez la 3e lettre du verbe ! 3e lettre avec Dammah originelle -> débuter par Dammah (ex: ٱدۡعُ -> Ud'u). 3e lettre avec Fathah ou Kasrah -> débuter par Kasrah (ex: ٱضۡرِبۡ -> Idrib, ٱفۡتَحۡ -> Iftah).",
                "Les 7 Noms singuliers indéfinis prennent toujours une KASRAH au démarrage : ٱبۡن, ٱبۡنَة, ٱمۡرُؤ, ٱمۡرَأَة, ٱثۡنَيۡن, ٱثۡنَتَيۡن, ٱسۡم.",
                "L'article défini (ٱلْـ) prend toujours une FATHAH au démarrage : « Al-Hamd ».",
                "Les 5 Verbes d'exception à Dammah accidentelle débutent par KASRAH : ٱبۡنُواْ, ٱمۡشُواْ, ٱقۡضُوٓاْ, ٱمۡضُواْ, ٱئۡتُواْ !"
            ],
            "subrules": [
                {
                    "id": "hamza-qat-vs-wasl",
                    "nameFr": "1. Hamzat Al-Qat' vs Hamzat Al-Wasl (Nature & Rôle)",
                    "nameAr": "الفَرْقُ بَيْنَ هَمْزَةِ القَطْعِ وَهَمْزَةِ الوَصْلِ",
                    "mnemonic": "Qat' (ء) = Permanente et inébranlable | Wasl (ٱ) = Pont provisoire qui s'efface en liaison",
                    "letters": ["ء", "ٱ"],
                    "definitionFr": "Hamzat Al-Qat' est une lettre constitutive du mot qui s'articule impérativement en toute circonstance. Hamzat Al-Wasl est une Hamzah auxiliaire rajoutée au début du mot dans le seul but de permettre à la bouche d'articuler la consonne suivante qui est soukounée.",
                    "definitionLughatan": {
                        "ar": "القَطْعُ: الفَصْلُ وَالإِبَانَةُ. الوَصْلُ: الرَّبْطُ وَالجَمْعُ بَيْنَ الشَّيْئَيْنِ.",
                        "fr": "Qat' : la coupure franche et nette. Wasl : la liaison et le rattachement."
                    },
                    "definitionIstilahan": {
                        "ar": "هَمْزَةُ القَطْعِ: تَثْبُتُ ابْتِدَاءً وَوَصْلاً وَرَسْماً. هَمْزَةُ الوَصْلِ: هَمْزَةٌ زَائِدَةٌ تَثْبُتُ فِي الِابْتِدَاءِ لِلْتَمَكُّنِ مِنَ النُّطْقِ بِالسَّاكِنِ وَتَسْقُطُ فِي دَرَجِ الكَلَامِ وَصْلاً.",
                        "fr": "Hamzat Qat' : établie à l'initiale, en liaison et dans le tracé. Hamzat Wasl : Hamzah surajoutée prononcée uniquement en début d'énoncé pour permettre d'amorcer le soukoûn, et qui s'efface en cours de phrase."
                    },
                    "mechanismFr": "Pour Hamzat Al-Qat' : fermez nettement la glotte au fond de la gorge. Pour Hamzat Al-Wasl en liaison : sautez par-dessus elle comme si elle n'existait pas pour atterrir directement sur la consonne suivante.",
                    "physiologicalDetails": {
                        "tongue": "Reste au repos au fond de la bouche.",
                        "lips": "Épousent la voyelle portée par la Hamzah.",
                        "vocalCords": "Fermeture et réouverture nette de la glotte pour Hamzat Al-Qat' ; effacement passif en liaison pour Hamzat Al-Wasl.",
                        "airflow": "Arrêt instantané du flux d'air au niveau glottique pour Al-Qat'."
                    },
                    "phoneticReasonFr": "L'arabe interdit d'entamer la parole par une consonne soukounée. Les grammairiens l'appelaient « Sullam al-Lisān » (l'échelle de la langue) car elle permettait à la langue de monter sur la consonne immobile.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَابْدَأْ بِهَمْزِ الوَصْلِ مِنْ فِعْلٍ بِضَمْ * إِنْ كَانَ ثَالِثٌ مِنَ الفِعْلِ يُضَمْ\nوَاكْسِرْهُ حَالَ الكَسْرِ وَالفَتْحِ وَفِي * الاسْمَاءِ غَيْرَ اللَّامِ كَسْرُهَا وَفِي",
                        "transliteration": "Wabda' bi-hamzi-l-wasli min fi'lin bi-damm * In kāna thālithun mina-l-fi'li yudamm / Waksir-hu hāla-l-kasri wal-fathi wa fī * Al-asmā'i ghayra-l-lāmi kasruhā wa fī",
                        "translationFr": "« Débute par une Dammah sur la Hamzah de liaison d'un verbe si sa 3e lettre porte une Dammah ; et donne-lui une Kasrah si la 3e lettre porte une Kasrah ou une Fathah, ainsi que dans les noms où la Kasrah est de règle (hormis le Lām de l'article défini). » (Versets 100-101)",
                        "chapterNameAr": "بَابُ هَمْزِ الوَصْلِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c6-1",
                            "arabicText": "وَٱسۡتَغۡفِرۡ لِذَنۢبِكَ",
                            "surahAyahRef": "40:55",
                            "surahNameFr": "Ghāfir",
                            "highlightSegment": "وَٱسۡتَغۡفِرۡ",
                            "highlightLetter": "وَ + ٱسۡـ",
                            "ruleApplied": "Élision de Hamzat Al-Wasl en liaison",
                            "ruleTag": "silent",
                            "explanationFr": "En liaison continue après le Wāw, Hamzat Al-Wasl disparaît complètement : on dit « Wa-staghfir » et jamais « Wa-istaghfir ».",
                            "transliteration": "Wastaghfir li-dhambik",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/040055.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Prononcer Hamzat Al-Wasl en liaison en disant « Wa-istaghfir » ou « Bismi-Allāh ».",
                            "correctionFr": "Lie directement la consonne précédente à la suivante sans coup de gorge : dites « Wastaghfir » et « Bismillāh »."
                        }
                    ]
                },
                {
                    "id": "verbs-third-letter-rule",
                    "nameFr": "2. La Règle de la 3e Lettre pour Vocaliser les Verbes",
                    "nameAr": "حُكْمُ حَرَكَةِ هَمْزَةِ الوَصْلِ عِنْدَ الِابْتِدَاءِ بِالأَفْعَالِ",
                    "mnemonic": "3e lettre Dammah originelle = Débuter avec DAMMAH (U) | 3e lettre Fathah ou Kasrah = Débuter avec KASRAH (I)",
                    "letters": [],
                    "definitionFr": "Lorsqu'on débute sa lecture par un verbe commençant par Hamzat Al-Wasl, on examine obligatoirement la voyelle de la 3e lettre du verbe pour déterminer la voyelle d'attaque : si la 3e lettre porte une Dammah originelle, la Hamzah prend une Dammah ; si la 3e lettre porte une Fathah ou une Kasrah, la Hamzah prend une Kasrah.",
                    "definitionLughatan": {
                        "ar": "الثَّالِثُ: رُتْبَةُ الحَرْفِ فِي بِنْيَةِ الفِعْلِ بَعْدَ هَمْزَةِ الوَصْلِ وَالسَّاكِنِ.",
                        "fr": "Le troisième rang consonnantique dans la morphologie du verbe."
                    },
                    "definitionIstilahan": {
                        "ar": "قَاعِدَةٌ صَرْفِيَّةٌ تَقْتَضِي ضَمَّ هَمْزَةِ الوَصْلِ إِذَا كَانَ ثَالِثُ الفِعْلِ مَضْمُوماً ضَمّاً أَصْلِيّاً، وَكَسْرَهَا إِذَا كَانَ مَفْتُوحاً أَوْ مَكْسُوراً.",
                        "fr": "Règle morphologique imposant de débuter par Dammah si la 3e lettre du verbe porte une Dammah originelle, et par Kasrah si elle porte une Fathah ou une Kasrah."
                    },
                    "mechanismFr": "Comptez les lettres depuis le début : 1. Hamzat Wasl, 2. Consonne soukounée, 3. Troisième lettre. Observez sa voyelle : si Dammah -> « U- », si Fathah ou Kasrah -> « I- ».",
                    "physiologicalDetails": {
                        "tongue": "Positionnée pour la voyelle d'attaque choisie.",
                        "lips": "Arrondies en avant si Dammah, étirées vers le bas si Kasrah.",
                        "vocalCords": "Vibration nette dès l'amorce du verbe.",
                        "airflow": "Flux immédiat."
                    },
                    "phoneticReasonFr": "L'arabe harmonise la voyelle de départ avec la voyelle interne du verbe pour assurer l'équilibre acoustique et faciliter l'effort laryngé.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَابْدَأْ بِهَمْزِ الوَصْلِ مِنْ فِعْلٍ بِضَمْ * إِنْ كَانَ ثَالِثٌ مِنَ الفِعْلِ يُضَمْ\nوَاكْسِرْهُ حَالَ الكَسْرِ وَالفَتْحِ",
                        "transliteration": "Wabda' bi-hamzi-l-wasli min fi'lin bi-damm * In kāna thālithun mina-l-fi'li yudamm / Waksir-hu hāla-l-kasri wal-fathi",
                        "translationFr": "« Débute par Dammah si la 3e lettre du verbe est pourvue d'une Dammah, et commence par Kasrah si elle est ouverte par Fathah ou brisée par Kasrah. »",
                        "chapterNameAr": "بَابُ هَمْزِ الوَصْلِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c6-2",
                            "arabicText": "ٱدۡعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلۡحِكۡمَةِ",
                            "surahAyahRef": "16:125",
                            "surahNameFr": "An-Nahl",
                            "highlightSegment": "ٱدۡعُ",
                            "highlightLetter": "1:ٱ, 2:دۡ, 3:عُ",
                            "ruleApplied": "Débuter par Dammah (3e lettre Dammah)",
                            "ruleTag": "izhar",
                            "explanationFr": "Dans « Ud'u », la 3e lettre est le 'Ayn qui porte une Dammah (عُ). On commence donc obligatoirement par la voyelle Dammah : « Ud'u ».",
                            "transliteration": "Ud'u ilā sabīli Rabbik",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/016125.mp3"
                        },
                        {
                            "id": "ex-c6-3",
                            "arabicText": "ٱضۡرِب بِّعَصَاكَ ٱلۡحَجَرَ",
                            "surahAyahRef": "2:60",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "ٱضۡرِب",
                            "highlightLetter": "1:ٱ, 2:ضۡ, 3:رِ",
                            "ruleApplied": "Débuter par Kasrah (3e lettre Kasrah)",
                            "ruleTag": "izhar",
                            "explanationFr": "Dans « Idrib », la 3e lettre est le Râ avec une Kasrah (رِ). On commence donc par la voyelle Kasrah : « Idrib ».",
                            "transliteration": "Idrib bi-'asāka-l-hajar",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002060.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Débuter par une Fathah sur un verbe en disant 'Ad'u' ou 'Adrib'.",
                            "correctionFr": "Hamzat Al-Wasl sur un verbe ne prend JAMAIS de Fathah ! Elle ne prend que Dammah ou Kasrah."
                        }
                    ]
                },
                {
                    "id": "five-irregular-verbs",
                    "nameFr": "3. Les 5 Verbes d'Exception à Dammah Accidentelle",
                    "nameAr": "الأَفْعَالُ الخَمْسَةُ المُسْتَثْنَTemporary (ضَمَّةٌ عَارِضَةٌ)",
                    "mnemonic": "ٱبْنُواْ, ٱمْشُواْ, ٱقْضُواْ, ٱمْضُواْ, ٱئْتُواْ = Débutent avec KASRAH (I-) !",
                    "letters": [],
                    "definitionFr": "Il existe dans le Coran 5 verbes particuliers dont la 3e lettre semble porter une Dammah, mais cette Dammah est accidentelle (due à l'ajout du Wāw de pluriel). À l'origine, leur 3e lettre portait une Kasrah : on doit donc obligatoirement débuter par une KASRAH !",
                    "definitionLughatan": {
                        "ar": "العَارِضُ: الَّذِي جَاءَ لِسَبَبٍ طَارِئٍ وَأَصْلُهُ غَيْرُ ذَلِكَ.",
                        "fr": "L'accidentel résultant d'une modification morphologique secondaire."
                    },
                    "definitionIstilahan": {
                        "ar": "أَفْعَالٌ حُرِّكَ ثَالِثُهَا بِالضَّمِّ لِمُنَاسَبَةِ وَاوِ الجَمَاعَةِ، وَأَصْلُهُ كَسْرَةٌ مَحْذُوفَةٌ، فَيُبْدَأُ بِهَمْزَتِهَا مَكْسُورَةً وُجُوباً.",
                        "fr": "Verbes dont la 3e lettre a été modifiée en Dammah pour convenir au Wāw du pluriel, mais dont l'origine était une Kasrah. On débute obligatoirement par Kasrah."
                    },
                    "mechanismFr": "Mémorisez la liste des 5 verbes : « Ibnū », « Imshū », « Iqdū », « Imdū », « Ītū ». Démarrez toujours sur le son [i] et jamais sur [u].",
                    "physiologicalDetails": {
                        "tongue": "Étirée vers le bas pour amorcer la Kasrah.",
                        "lips": "Étirement souple sans arrondi initial.",
                        "vocalCords": "Vibration nette.",
                        "airflow": "Flux continu."
                    },
                    "phoneticReasonFr": "L'étymologie du singulier révèle la Kasrah originelle : « Imshi » -> pluriel archaïque « Imshiyū » -> le Yā' a disparu et la Dammah a été transférée sur la consonne.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَفِي ابْنُوا امْشُوا اقْضُوا مَعَ امْضُوا ائْتُوا * بِكَسْرِ هَمْزِ الوَصْلِ حَيْثُ جِئْتُوا\nلِأَنَّ أَصْلَ ضَمِّهَا قَدْ عَرَضَا * فَابْدَأْ بِكَسْرٍ تَتَّبِعْ مَا فُرِضَا",
                        "transliteration": "Wa fī-bnū imshū iqdū ma'a imdū ītū * Bi-kasri hamzi-l-wasli haythu ji'tū / Li'anna asla dammihā qad 'aradā * Fabda' bi-kasrin tattabi' mā furidā",
                        "translationFr": "« Et dans Ibnū, Imshū, Iqdū ainsi que Imdū et Ītū, commence par une Kasrah sur la Hamzah de liaison, car l'origine de cette Dammah est purement accidentelle ; débute donc par Kasrah pour suivre la règle. »",
                        "chapterNameAr": "بَابُ الأَفْعَالِ الخَمْسَةِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c6-4",
                            "arabicText": "أَنِ ٱمۡشُواْ وَٱصۡبِرُواْ عَلَىٰٓ ءَالِهَتِكُمۡ",
                            "surahAyahRef": "38:6",
                            "surahNameFr": "Sād",
                            "highlightSegment": "ٱمۡشُواْ",
                            "highlightLetter": "Imshū (Kasrah)",
                            "ruleApplied": "Débuter par Kasrah d'exception",
                            "ruleTag": "izhar",
                            "explanationFr": "Si vous commencez sur « Imshū », démarrez obligatoirement par une Kasrah : « Imshū » (et jamais « Umshū »), car l'origine est « Imshiyū ».",
                            "transliteration": "Imshū wasbirū",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/038006.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Débuter par 'Umshū' ou 'Ubnū' en voyant la Dammah sur la 3e lettre.",
                            "correctionFr": "Retenez les 5 verbes : la Dammah est un piège visuel temporaire ! La règle sacrée impose de commencer par Kasrah : 'Imshū', 'Ibnū'."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c6-1",
                    "title": "Vocalisation de démarrage : « ٱسۡتَغۡفِرۡ لَهُمۡ »",
                    "verseArabic": "ٱسۡتَغۡفِرۡ لَهُمۡ أَوۡ لَا تَسۡتَغۡفِرۡ لَهُمۡ",
                    "surahAyahRef": "9:80",
                    "targetSegment": "ٱسۡتَغۡفِرۡ",
                    "promptFr": "Par quelle voyelle commencez-vous la lecture sur le verbe « Istaghfir » ?",
                    "hintFr": "Comptez : 1. Hamzah, 2. Sīn soukouné, 3. Tā' portant une Fathah.",
                    "solutionFr": "Par une Kasrah : « Istaghfir »",
                    "breakdownSteps": [
                        "La 3e lettre du verbe est le Tā' qui porte une Fathah (تَ).",
                        "La règle stipule que si la 3e lettre a une Fathah ou une Kasrah, la Hamzah prend une Kasrah.",
                        "On débute donc par « Istaghfir »."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/009080.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c6-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe : Quels sont les 7 noms singuliers qui débutent TOUJOURS par une Kasrah sur Hamzat Al-Wasl ?",
                    "verseArabic": "مَّسِيحُ عِيسَى ٱبۡنُ مَرۡيَمَ",
                    "options": [
                        "ابن، ابنة، امرؤ، امرأة، اثنين، اثنتين، اسم",
                        "أحمد، إبراهيم، إسماعيل، إسحاق، يعقوب، يوسف، موسى",
                        "الصلاة، الزكاة، الصيام، الحج، العمرة، الجهاد، الصدقة",
                        "شمس، قمر، نجم، سماء، أرض، جبل، بحر"
                    ],
                    "correctAnswer": "ابن، ابنة، امرؤ، امرأة، اثنين، اثنتين، اسم",
                    "explanationFr": "L'imam Ibn Al-Jazarī liste explicitement ces sept noms dans son poème : « ابْنٍ مَعَ ابْنَةِ امْرِئٍ وَاثْنَيْنِ * وَامْرَأَةٍ وَاسْمٍ مَعَ اثْنَتَيْنِ ». Ils débutent tous par Kasrah.",
                    "ruleId": "verbs-third-letter-rule"
                },
                {
                    "id": "q-c6-2",
                    "type": "error_detect",
                    "promptFr": "En démarrant la lecture sur « ٱبْنُوا عَلَيْهِم بُنْيَانًا » (Al-Kahf 21), un étudiant prononce « Ubnū » en se fiant à la Dammah du Nūn. Quelle est l'erreur ?",
                    "verseArabic": "فَقَالُواْ ٱبۡنُواْ عَلَيۡهِم بُنۡيَٰنٗا",
                    "targetWord": "ٱبۡنُواْ",
                    "surahAyahRef": "18:21",
                    "options": [
                        "Erreur sur la Dammah accidentelle : 'Ibnū' fait partie des 5 verbes d'exception et doit obligatoirement débuter par Kasrah : « Ibnū » !",
                        "Il fallait commencer par Fathah",
                        "La récitation 'Ubnū' est la seule permise",
                        "Ce verbe n'existe pas"
                    ],
                    "correctAnswer": "Erreur sur la Dammah accidentelle : 'Ibnū' fait partie des 5 verbes d'exception et doit obligatoirement débuter par Kasrah : « Ibnū » !",
                    "explanationFr": "Dans « Ibnū », la Dammah sur le Nūn est accidentelle (due au Wāw du pluriel ; le singulier est « Ibni »). L'amorce se fait impérativement par une Kasrah.",
                    "ruleId": "five-irregular-verbs"
                },
                {
                    "id": "q-c6-3",
                    "type": "mcq",
                    "promptFr": "Que devient Hamzat Al-Wasl dans « وَٱلشَّمۡسِ » en lecture continue ?",
                    "verseArabic": "وَٱلشَّمۡسِ وَضُحَىٰهَا",
                    "surahAyahRef": "91:1",
                    "options": [
                        "Elle s'efface totalement dans la voix : la liaison se fait directement du Wāw vers le Shīn (« Wash-Shams »)",
                        "Elle se prononce avec une Fathah",
                        "Elle prend un Madd de 6 temps",
                        "Elle devient une consonne de Qalqalah"
                    ],
                    "correctAnswer": "Elle s'efface totalement dans la voix : la liaison se fait directement du Wāw vers le Shīn (« Wash-Shams »)",
                    "explanationFr": "Hamzat Al-Wasl tombe toujours en cours de liaison continue (Wasl) et n'est sollicitée que si l'on commence au début du mot.",
                    "ruleId": "hamza-qat-vs-wasl"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 7 : LES RÈGLES DE LA LĀM SĀKINAH
        # ==========================================
        {
            "id": "chap-7",
            "number": 7,
            "slug": "lam-sakinah",
            "titleFr": "Les Règles de la Lām Sākinah",
            "titleAr": "أَحْكَامُ اللَّامِ السَّاكِنَةِ",
            "category": "intermediate",
            "estimatedMinutes": 20,
            "isPilotChapter": True,
            "summaryFr": "Maîtriser les 5 catégories de Lām sans voyelle : Lām de l'article défini (Qamariyyah avec Izhār vs Shamsiyyah avec Idghām), Lām du Nom Divin (Allah mufakhkhamah après Fathah/Dammah vs Muraqqaqah après Kasrah), et Lāms du verbe, du nom et de la particule.",
            "infographicPoints": [
                "Lām Qamariyyah (لَامٌ قَمَرِيَّةٌ) : Suivie d'une des 14 lettres de « اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ » -> Izhār obligatoire (la Lām est couronnée d'un soukoûn).",
                "Lām Shamsiyyah (لَامٌ شَمْسِيَّةٌ) : Suivie d'une des 14 autres lettres -> Idghām obligatoire (la Lām est nue et la lettre suivante prend une Shaddah).",
                "Lām de Lafz Al-Jalālah (ٱللَّه) : Emphatique/lourde (Tafkhīm) après Fathah ou Dammah (ex: Qāla-Llāhu) ; fine/légère (Tarqīq) après Kasrah (ex: Bismi-Llāhi).",
                "Lām du Verbe (لَامُ الفِعْلِ) : Toujours Izhār (ex: Qul na'am), SAUF si elle rencontre un autre Lām ou un Râ (ex: Qul Rabbi) où elle fusionne !",
                "Lām de l'impératif (لَامُ الأَمْرِ) : Toujours prononcée clairement avec Izhār après Wāw, Fā' ou Thumma (ex: Wal-yattakhi)."
            ],
            "subrules": [
                {
                    "id": "lam-qamariyyah-shamsiyyah",
                    "nameFr": "1. Lām Qamariyyah vs Lām Shamsiyyah (Article Défini)",
                    "nameAr": "اللَّامُ القَمَرِيَّةُ وَاللَّامُ الشَّمْسِيَّةُ فِي أَلْ التَّعْرِيفِ",
                    "mnemonic": "Qamariyyah (اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ) = Izhār net | Shamsiyyah = Fusion totale en Shaddah",
                    "letters": [],
                    "definitionFr": "La Lām de l'article défini (الـ) possède deux états phonologiques selon la lettre qui lui succède : elle est Qamariyyah (lunaire) et clairement prononcée devant 14 lettres, ou Shamsiyyah (solaire) et totalement assimilée dans la consonne suivante qui prend une Shaddah devant les 14 autres lettres.",
                    "definitionLughatan": {
                        "ar": "القَمَرِيَّةُ: نِسْبَةٌ إِلَى القَمَرِ لِظُهُورِ اللَّامِ فِيهِ. الشَّمْسِيَّةُ: نِسْبَةٌ إِلَى الشَّمْسِ لِخَفَاءِ اللَّامِ وَإِدْغَامِهَا فِيهِ.",
                        "fr": "Qamariyyah : relative à la lune (la lām est apparente comme les étoiles autour de la lune). Shamsiyyah : relative au soleil (la lām s'efface comme les étoiles sous le soleil)."
                    },
                    "definitionIstilahan": {
                        "ar": "القَمَرِيَّةُ: إِظْهَارُ لَامِ التَّعْرِيفِ سَاكِنَةً دُونَ إِدْغَامٍ عِنْدَ 14 حَرْفاً. الشَّمْسِيَّةُ: إِدْغَامُ لَامِ التَّعْرِيفِ فِي الحَرْفِ الَّذِي يَلِيهَا إِدْغَاماً تَامّاً مَعَ تَشْدِيدِهِ عِنْدَ 14 حَرْفاً أُخْرَى.",
                        "fr": "Qamariyyah : prononciation claire de la lām devant les 14 lettres de « اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ ». Shamsiyyah : fusion complète de la lām dans la consonne suivante devant les 14 autres lettres."
                    },
                    "mechanismFr": "Pour la Qamariyyah : appliquez le bout de la langue contre les alvéoles des incisives supérieures et faites sonner la Lām avec clarté. Pour la Shamsiyyah : ne touchez pas le palais sur la Lām, glissez directement sur la consonne suivante en appuyant fermement dessus pour former la Shaddah.",
                    "physiologicalDetails": {
                        "tongue": "Appui alvéolaire net pour la Qamariyyah ; contournement direct vers le point de la consonne assimilée pour la Shamsiyyah.",
                        "lips": "Neutres.",
                        "vocalCords": "Vibration sonore régulière.",
                        "airflow": "Déviation latérale de l'air pour la Lām d'Izhār."
                    },
                    "phoneticReasonFr": "Les 14 lettres solaires partagent une grande proximité d'articulation (Taqārub) avec la Lām (dents, gencives, langue antérieure). Articuler la Lām puis immédiatement une consonne quasi-identique fatiguerait l'appareil musculaire : les Arabes ont préféré la fusion fluide.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "لِلَامِ أَلْ حَالَانِ قَبْلَ الأَحْرُفِ * أُولَاهُمَا إِظْهَارُهَا فَلْتَعْرِفِ\nقَبْلَ ارْبَعٍ مَعْ عَشْرَةٍ خُذْ عِلْمَهُ * مِنْ: اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ\nثَانِيهِمَا إِدْغَامُهَا فِي أَرْبَعِ * وَعَشْرَةٍ أَيْضاً وَرَمْزَهَا فَعِ",
                        "transliteration": "Li-lāmi al hālān qabla-l-ahrufi * Ūlāhumā izhāruhā fal-ta'rifi / Qabla-rba'in ma' 'ashratin khudh 'ilmahū * Min: Ibghi hajjaka wa khaf 'aqīmahū / Thānīhimā idghāmuhā fī arba'i * Wa 'ashratin aydan wa ramzahā fa'i",
                        "translationFr": "« La Lām de l'article possède deux états devant les lettres : le premier est son Izhār clair devant quatorze lettres condensées dans 'Ibghi hajjaka wa khaf 'aqīmah' ; le second est son Idghām assimilé devant quatorze autres lettres. »",
                        "chapterNameAr": "بَابُ لَامِ أَلْ"
                    },
                    "examples": [
                        {
                            "id": "ex-c7-1",
                            "arabicText": "ٱلۡقَمَرِ ١ وَٱلشَّمۡسِ",
                            "surahAyahRef": "54:1 / 91:1",
                            "surahNameFr": "Al-Qamar / Ash-Shams",
                            "highlightSegment": "ٱلۡقَمَرِ ... وَٱلشَّمۡسِ",
                            "highlightLetter": "لۡ (Izhār) vs لـّ (Idghām)",
                            "ruleApplied": "Qamariyyah vs Shamsiyyah",
                            "ruleTag": "izhar",
                            "explanationFr": "Dans « Al-Qamar », le Qāf fait partie de « Ibghi hajjaka... », la Lām est couronnée d'un soukoûn et s'entend distinctement. Dans « Ash-Shams », la Lām est nue et disparaît dans le Shīn qui prend une Shaddah.",
                            "transliteration": "Al-Qamar ... Wash-Shams",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/054001.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Prononcer la Lām dans une lettre solaire en disant « Al-Shams » ou « Al-Rahmān ».",
                            "correctionFr": "Ne laissez pas la langue toucher le palais : fondez directement la voix dans la consonne solaire pour dire « Ash-Shams » et « Ar-Rahmān »."
                        }
                    ]
                },
                {
                    "id": "lam-jalalah-rules",
                    "nameFr": "2. La Lām de Majesté dans le Nom d'Allah (Lafz Al-Jalālah)",
                    "nameAr": "تَفْخِيمُ وَتَرْقِيقُ لَامِ لَفْظِ الجَلَالَةِ (ٱللَّه)",
                    "mnemonic": "Fathah ou Dammah avant = LOURDE (Allāh) | Kasrah avant = FINE (Lillāh / Bismillāh)",
                    "letters": ["ل"],
                    "definitionFr": "Dans tout le Coran, la consonne Lām est TOUJOURS fine et légère (Muraqqaqah), SAUF dans le Nom Sacré d'Allah (et Allāhumma) : elle y devient majestueuse et emphatique (Mufakhkhamah) si elle est précédée d'une Fathah ou d'une Dammah, et redevient fine si elle est précédée d'une Kasrah.",
                    "definitionLughatan": {
                        "ar": "التَّفْخِيمُ: التَّسْمِينُ وَالتَّغْلِيظُ. التَّرْقِيقُ: التَّنْحِيفُ.",
                        "fr": "Tafkhīm : engraisser et donner du corps. Tarqīq : amincir et alléger."
                    },
                    "definitionIstilahan": {
                        "ar": "تَغْلِيظُ لَامِ اسْمِ الجَلَالَةِ إِذَا سُبِقَتْ بِفَتْحٍ أَوْ ضَمٍّ تَعْظِيماً للهِ، وَتَرْقِيقُهَا إِذَا سُبِقَتْ بِكَسْرٍ.",
                        "fr": "Épaissir la lām du Nom d'Allah lorsqu'elle est précédée d'une Fathah ou d'une Dammah par vénération divine, et l'amincir lorsqu'elle est précédée d'une Kasrah."
                    },
                    "mechanismFr": "Pour le Tafkhīm : élevez l'arrière de la langue vers le fond du palais et élargissez la cavité pharyngienne pour donner une résonance ample et solennelle SANS projeter les lèvres en avant. Pour le Tarqīq : abaissez la langue et souriez légèrement.",
                    "physiologicalDetails": {
                        "tongue": "Élévation de la racine et du dos de la langue pour la résonance caverneuse lors du Tafkhīm ; langue plate pour le Tarqīq.",
                        "lips": "Parfaitement neutres lors du Tafkhīm (interdiction d'arrondir les lèvres en l'absence de Dammah).",
                        "vocalCords": "Vibration pleine et noble.",
                        "airflow": "Amplification acoustique dans la cavité buccale."
                    },
                    "phoneticReasonFr": "L'emphase glorifie acoustiquement le Nom Divin, tandis que la Kasrah qui précède impose une contrainte articulatoire basse obligeant la langue à rester fine.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَفَخِّمِ اللَّامَ مِنِ اسْمِ اللَّهِ * عَنْ فَتْحٍ اوْ ضَمٍّ كَعَبْدُ اللَّهِ\nوَارْفَعْ بِلَا تَكَلُّفٍ صَوْتَ النِّدَا * وَارْقُبْ بِكَسْرٍ نَحْوَ بِسْمِ اللَّهِ غَدَا",
                        "transliteration": "Wa fakhkhimi-l-lāma min ismi-Llāhi * 'An fathi-nw dammin ka-'Abdu-Llāhi / Warfa' bi-lā takallufin sawta-n-nidā * Warqub bi-kasrin nahwa Bismi-Llāhi ghadā",
                        "translationFr": "« Donne de l'emphase (Tafkhīm) à la Lām du Nom d'Allah lorsqu'elle suit une Fathah ou une Dammah comme dans 'Abdu-Llāh ; et amincis-la après une Kasrah comme dans 'Bismi-Llāh'. » (Verset 69)",
                        "chapterNameAr": "بَابُ لَامِ لَفْظِ الجَلَالَةِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c7-2",
                            "arabicText": "شَهِدَ ٱللَّهُ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا هُوَ",
                            "surahAyahRef": "3:18",
                            "surahNameFr": "Āl 'Imrān",
                            "highlightSegment": "شَهِدَ ٱللَّهُ",
                            "highlightLetter": "ـدَ ٱللَّهُ (Tafkhīm)",
                            "ruleApplied": "Lām Majestueuse Emphatique",
                            "ruleTag": "heavy",
                            "explanationFr": "Le Dāl qui précède porte une Fathah (« Shahida ») : la Lām d'Allah est obligatoirement prononcée avec plénitude et majesté sonore : « Shahida-Llāhu ».",
                            "transliteration": "Shahida-Llāhu",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/003018.mp3"
                        },
                        {
                            "id": "ex-c7-3",
                            "arabicText": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
                            "surahAyahRef": "1:1",
                            "surahNameFr": "Al-Fātihah",
                            "highlightSegment": "بِسۡمِ ٱللَّهِ",
                            "highlightLetter": "ـمِ ٱللَّهِ (Tarqīq)",
                            "ruleApplied": "Lām Fine Amincie",
                            "ruleTag": "izhar",
                            "explanationFr": "Le Mīm qui précède porte une Kasrah (« Bismi ») : la Lām d'Allah redevient obligatoirement fine et soyeuse : « Bismi-Llāh ».",
                            "transliteration": "Bismi-Llāh",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/001001.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : arrondir les lèvres en forme de 'O' pour essayer d'épaissir la Lām d'Allah.",
                            "correctionFr": "L'emphase se fabrique exclusivement par la montée du fond de la langue, JAMAIS par les lèvres ! Laissez vos lèvres immobiles."
                        }
                    ]
                },
                {
                    "id": "lam-verb-noun-particle",
                    "nameFr": "3. Lām du Verbe, de la Particule & du Nom",
                    "nameAr": "لَامُ الفِعْلِ، لَامُ الحَرْفِ، وَلَامُ الاسْمِ",
                    "mnemonic": "Règle de base = Izhār net | Exception = Fusion devant Lām et Râ (قُل رَّبِّ)",
                    "letters": [],
                    "definitionFr": "Toute Lām sans voyelle présente dans un verbe (لام الفعل), un nom (لام الاسم) ou une particule comme 'Hal' et 'Bal' (لام الحرف) doit être prononcée avec clarté absolue (Izhār), sauf si elle rencontre une autre Lām ou un Râ où elle fusionne obligatoirement (Idghām).",
                    "definitionLughatan": {
                        "ar": "الأَصْلُ: القَاعِدَةُ المُسْتَقِرَّةُ الَّتِي يُرْجَعُ إِلَيْهَا.",
                        "fr": "La règle générale constante qui sert de référence."
                    },
                    "definitionIstilahan": {
                        "ar": "وُجُوبُ إِظْهَارِ لَامِ الفِعْلِ وَالحَرْفِ مُطْلَقاً عِنْدَ جَمِيعِ الحُرُوفِ، إِلَّا إِذَا وَقَعَ بَعْدَهَا لَامٌ أَوْ رَاءٌ فَيَجِبُ إِدْغَامُهَا.",
                        "fr": "Obligation de prononcer la lām du verbe et de la particule avec Izhār devant toutes les lettres, sauf si elle est suivie d'une Lām ou d'un Râ où l'Idghām est impératif."
                    },
                    "mechanismFr": "Posez nettement le bout de la langue sur les gencives supérieures et maintenez le son de la Lām sans la faire avaler par la consonne suivante (notamment devant Nūn et Tā').",
                    "physiologicalDetails": {
                        "tongue": "Appui alvéolaire ferme pour empêcher la fusion spontanée dans le Nūn de « Qul na'am » ou « Arsalnā ».",
                        "lips": "Neutres.",
                        "vocalCords": "Vibration continue.",
                        "airflow": "Passage latéral de l'air."
                    },
                    "phoneticReasonFr": "La langue a une tendance naturelle à fusionner la Lām dans le Nūn en raison de leur extrême proximité articulaire. La règle d'Izhār protège l'intégrité du verbe.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَأَظْهِرَنَّ لَامَ فِعْلٍ مُطْلَقَا * فِي نَحْوِ قُلْ نَعَمْ وَقُلْنَا وَالتَقَى\nوَأَدْغِمَنْ فِي اللَّامِ وَالرَّا نَحْوَ قُلْ * رَبِّ وَبَلْ رَفَعَهُ لَا تَفْتَعِلْ",
                        "transliteration": "Wa azhiranna lāma fi'lin mutlaqā * Fī nahwi Qul na'am wa Qulnā wal-taqā / Wa adghiman fil-lāmi war-rā nahwa Qul * Rabbi wa Bal rafa'ahu lā tafta'il",
                        "translationFr": "« Prononce avec un Izhār absolu la Lām du verbe dans 'Qul na'am', 'Qulnā' et 'Iltaqā' ; et fusionne-la dans la Lām et le Râ comme dans 'Qul Rabbi' et 'Bal rafa'ah'. » (Verset 70)",
                        "chapterNameAr": "بَابُ لَامِ الفِعْلِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c7-4",
                            "arabicText": "قُلۡ نَعَمۡ وَأَنتُمۡ دَٰخِرُونَ",
                            "surahAyahRef": "37:18",
                            "surahNameFr": "As-Sāffāt",
                            "highlightSegment": "قُلۡ نَعَمۡ",
                            "highlightLetter": "لۡ + نـ (Izhār)",
                            "ruleApplied": "Izhār de la Lām du Verbe",
                            "ruleTag": "izhar",
                            "explanationFr": "Dans « Qul na'am », la Lām doit être articulée avec une netteté chirurgicale sans glisser dans le Nūn (ne dites surtout pas « Qunna'am »).",
                            "transliteration": "Qul na'am",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/037018.mp3"
                        },
                        {
                            "id": "ex-c7-5",
                            "arabicText": "وَقُل رَّبِّ ٱرۡحَمۡهُمَا كَمَا رَبَّيَانِى صَغِيرٗا",
                            "surahAyahRef": "17:24",
                            "surahNameFr": "Al-Isrā'",
                            "highlightSegment": "وَقُل رَّبِّ",
                            "highlightLetter": "لۡ + رَّ (Idghām)",
                            "ruleApplied": "Idghām de la Lām dans le Râ",
                            "ruleTag": "silent",
                            "explanationFr": "La Lām de « Qul » rencontre la lettre Râ : elle s'assimile à 100% sans laisser de trace. On prononce directement : « Qur-Rabbi ».",
                            "transliteration": "Wa qur-Rabbi-rhamhumā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/017024.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Avaler la Lām dans « Ja'alnā » (جَعَلْنَا) ou « Arsalnā » (أَرْسَلْنَا) et prononcer 'Ja'annā'.",
                            "correctionFr": "Marquez fermement l'appui de la langue sur la Lām avant d'enclencher le Nūn."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c7-1",
                    "title": "Analyse de la Lām dans « وَقُل رَّبِّ زِدۡنِى عِلۡمٗا »",
                    "verseArabic": "فَتَعَٰلَى ٱللَّهُ ٱلۡمَلِكُ ٱلۡحَقُّۗ وَلَا تَعۡجَلۡ بِٱلۡقُرۡءَانِ مِن قَبۡلِ أَن يُقۡضَىٰٓ إِلَيۡكَ وَحۡيُهُۥۖ وَقُل رَّبِّ زِدۡنِى عِلۡمٗا",
                    "surahAyahRef": "20:114",
                    "targetSegment": "وَقُل رَّبِّ",
                    "promptFr": "Quel traitement sonore reçoit la lettre Lām de « Qul » devant le mot « Rabbi » ?",
                    "hintFr": "La Lām du verbe impératif rencontre la lettre Râ.",
                    "solutionFr": "Assimilation totale (Idghām) : « Qur-Rabbi »",
                    "breakdownSteps": [
                        "La Lām sans voyelle rencontre la lettre Râ.",
                        "En raison de la proximité de leurs points d'articulation (Taqārub), la Lām fusionne dans le Râ.",
                        "On prononce un Râ avec Shaddah : « Qur-Rabbi »."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/020114.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c7-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe : Dans quelle phrase poétique sont regroupées les 14 lettres de la Lām Qamariyyah ?",
                    "verseArabic": "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
                    "options": [
                        "اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ",
                        "قُطْبُ جَدٍّ",
                        "يَرْمَلُونَ",
                        "حَيٌّ طَهُرَ"
                    ],
                    "correctAnswer": "اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ",
                    "explanationFr": "La formule mnémotechnique universelle « اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ » réunit précisément les 14 lettres qui imposent la clarté d'Izhār sur la Lām de l'article.",
                    "ruleId": "lam-qamariyyah-shamsiyyah"
                },
                {
                    "id": "q-c7-2",
                    "type": "error_detect",
                    "promptFr": "Dans « أَرْسَلْنَا إِلَيْهِمْ », un lecteur avale la Lām et prononce « Arsannā ». Quelle est la nature de l'erreur ?",
                    "verseArabic": "إِذۡ أَرۡسَلۡنَآ إِلَيۡهِمُ ٱثۡنَيۡنِ",
                    "targetWord": "أَرۡسَلۡنَآ",
                    "surahAyahRef": "36:14",
                    "options": [
                        "Lahn Jalī : Idghām illicite de la Lām du verbe dans le Nūn, détruisant la racine du verbe",
                        "Lahn Khafī d'embellissement",
                        "Règle de Shātibiyyah",
                        "Lecture de Hafs"
                    ],
                    "correctAnswer": "Lahn Jalī : Idghām illicite de la Lām du verbe dans le Nūn, détruisant la racine du verbe",
                    "explanationFr": "La Lām du verbe devant le Nūn doit obligatoirement être prononcée avec clarté (Izhār). L'avaler déforme le verbe et constitue une altération phonologique majeure.",
                    "ruleId": "lam-verb-noun-particle"
                },
                {
                    "id": "q-c7-3",
                    "type": "mcq",
                    "promptFr": "Dans « وَمَا النَّصْرُ إِلَّا مِنْ عِندِ اللَّهِ », comment doit se prononcer la Lām du Nom de Majesté ?",
                    "verseArabic": "وَمَا ٱلنَّصۡرُ إِلَّا مِنۡ عِندِ ٱللَّهِ",
                    "surahAyahRef": "3:126",
                    "options": [
                        "Fine et légère (Tarqīq) car le Dāl qui précède porte une Kasrah (« 'Indi »)",
                        "Lourde et emphatique (Tafkhīm)",
                        "Prolongée de 6 temps",
                        "Muette"
                    ],
                    "correctAnswer": "Fine et légère (Tarqīq) car le Dāl qui précède porte une Kasrah (« 'Indi »)",
                    "explanationFr": "Précédée d'une voyelle Kasrah, la Lām du Nom d'Allah s'amincit obligatoirement par Tarqīq (« 'Indi-Llāh »).",
                    "ruleId": "lam-jalalah-rules"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 8 : NŪN SĀKINAH & TANWĪN
        # ==========================================
        {
            "id": "chap-8",
            "number": 8,
            "slug": "nun-sakinah",
            "titleFr": "Nūn Sākinah & Tanwīn (4 Règles)",
            "titleAr": "أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ",
            "category": "intermediate",
            "estimatedMinutes": 25,
            "isPilotChapter": True,
            "summaryFr": "Le cœur du Tajwīd traditionnel : maîtriser les 4 règles absolues du Nūn sans voyelle et du Tanwīn : 1. L'Izhār Halqī (6 lettres de gorge), 2. L'Idghām (6 lettres de Yarmalūn, avec ou sans Ghunnah, et les 4 mots d'Izhār Mutlaq), 3. L'Iqlāb (transformation en Mīm devant Bā'), et 4. L'Ikhfā' Haqīqī (dissimulation nasale devant 15 lettres).",
            "infographicPoints": [
                "L'Izhār Halqī (الإظهار الحلقي) : Clarté pure sans Ghunnah devant 6 lettres de gorge (ء, هـ, ع, ح, غ, خ).",
                "L'Idghām avec Ghunnah (إدغام بغنة) : Fusion complète avec 2 temps de nasillement devant (ي, ن, م, و / YANMŪ).",
                "L'Idghām sans Ghunnah (إدغام بغير غنة) : Fusion totale sèche sans résonance nasale devant (ل, ر).",
                "Izhār Mutlaq (إظهار مطلق) : Exception sacrée si Nūn + Wāw/Yā' sont dans le MÊME mot : interdiction de fusionner dans 4 mots uniques : دُنْيَا, بُنْيَان, قِنْوَان, صِنْوَان !",
                "L'Iqlāb (الإقلاب) : Le Nūn devient un Mīm pur avec 2 temps de Ghunnah devant la seule lettre Bā' (ب).",
                "L'Ikhfā' Haqīqī (الإخفاء الحقيقي) : Dissimulation entre clarté et fusion avec 2 temps de Ghunnah devant les 15 autres lettres."
            ],
            "subrules": [
                {
                    "id": "nun-izhar",
                    "nameFr": "1. Al-Izhār Al-Halqī (La Clarté Gutturale)",
                    "nameAr": "الإِظْهَارُ الحَلْقِيُّ (ء هـ ع ح غ خ)",
                    "mnemonic": "Lettres de gorge : Hamzah, Hā', 'Ayn, Hā', Ghayn, Khā' -> Nūn limpide sans Ghunnah étirée",
                    "letters": ["ء", "هـ", "ع", "ح", "غ", "خ"],
                    "definitionFr": "L'Izhār Halqī consiste à prononcer le son du Nūn Sākinah ou du Tanwīn depuis son point d'articulation exact avec une clarté totale, sans allonger artificiellement la Ghunnah et sans marquer de coupure saccadée (Sakt), lorsqu'il est suivi de l'une des 6 lettres de la gorge.",
                    "definitionLughatan": {
                        "ar": "الإِظْهَارُ: البَيَانُ وَالوُضُوحُ، يُقَالُ: أَظْهَرْتُ الشَّيْءَ إِذَا بَيَّنْتَهُ وَأَوْضَحْتَهُ.",
                        "fr": "La manifestation, la clarté et l'évidence sans dissimulation."
                    },
                    "definitionIstilahan": {
                        "ar": "إِخْرَاجُ النُّونِ السَّاكِنَةِ أَوْ التَّنْوِينِ مِنْ مَخْرَجِهَا مِنْ غَيْرِ غُنَّةٍ زَائِدَةٍ عِنْدَ أَحْرُفِ الحَلْقِ السِّتَّةِ.",
                        "fr": "Extraire le Nūn ou le Tanwīn de son point d'articulation d'origine sans ajouter de Ghunnah temporelle devant les 6 lettres gutturales."
                    },
                    "mechanismFr": "Plaquez fermement le bout de la langue contre les alvéoles des incisives supérieures pour émettre un [N] propre et net, puis passez immédiatement à la lettre de la gorge sans traîner.",
                    "physiologicalDetails": {
                        "tongue": "Contact alvéolaire franc et direct.",
                        "lips": "Neutres.",
                        "vocalCords": "Vibration normale de la consonne sans prolongement nasal.",
                        "airflow": "Flux d'air divisé naturellement sans rétention prolongée dans le nez."
                    },
                    "phoneticReasonFr": "Le Nūn naît du bout de la langue (Taraf al-Lisān) tandis que ces 6 lettres naissent du fond ou du milieu de la gorge (Al-Halq). La grande distance physique (Bu'd al-Makhraj) rend l'assimilation impossible et impose une séparation nette.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "فَعِنْدَ حَرْفِ الحَلْقِ أَظْهِرْ وَادَّغِمْ * فِي اللَّامِ وَالرَّا لَا بِغُنَّةٍ لَزِمْ\nوَأَدْغِمَنْ بِغُنَّةٍ فِي يُومِنُ * إِلَّا بِكِلْمَةٍ كَدُنْيَا عَنْوَنُوا",
                        "transliteration": "Fa-'inda harfi-l-halqi azhir waddaghim * Fil-lāmi war-rā lā bi-ghunnatin lazim / Wa adghiman bi-ghunnatin fī Yūminu * Illā bi-kilmatin ka-Dunyā 'anwanū",
                        "translationFr": "« Devant les lettres de la gorge, applique l'Izhār clair ; et fusionne sans Ghunnah dans le Lām et le Râ ; et fusionne avec Ghunnah dans les lettres de 'Yūminu' (Yanmū), sauf dans un mot unique comme Dunyā. » (Versets 40-41)",
                        "chapterNameAr": "بَابُ أَحْكَامِ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c8-1",
                            "arabicText": "فَصَلِّ لِرَبِّكَ وَٱنۡحَرۡ",
                            "surahAyahRef": "108:2",
                            "surahNameFr": "Al-Kawthar",
                            "highlightSegment": "وَٱنۡحَرۡ",
                            "highlightLetter": "نۡ + ح",
                            "ruleApplied": "Izhār Halqī devant Hā' (ح)",
                            "ruleTag": "izhar",
                            "explanationFr": "Le Nūn est suivi du Hā' (lettre médiane de la gorge). Le Nūn est couronné d'un soukoûn dans le texte : prononcez « Wan-har » avec clarté sans faire vibrer le nez.",
                            "transliteration": "Wan-har",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/108002.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : maintenir une Ghunnah nasale longue de 2 temps sur l'Izhār comme s'il s'agissait d'un Ikhfā'.",
                            "correctionFr": "L'Izhār ne tolère que la Ghunnah originelle instantanée de la lettre : détachez immédiatement la langue dès l'émission de la consonne."
                        }
                    ]
                },
                {
                    "id": "nun-idgham",
                    "nameFr": "2. Al-Idghām (La Fusion) & L'Exception d'Izhār Mutlaq",
                    "nameAr": "الإِدْغَامُ بِغُنَّةٍ وَبِغَيْرِ غُنَّةٍ وَالإِظْهَارُ المُطْلَقُ",
                    "mnemonic": "Lettres « يَرْمَلُونَ » | Y-N-M-W = Avec Ghunnah (2 temps) | L-R = Sans Ghunnah | Mots uniques (دنيا، بنيان، قنوان، صنوان) = Izhār Mutlaq obligatoire !",
                    "letters": ["ي", "ر", "م", "ل", "و", "ن"],
                    "definitionFr": "L'Idghām est l'insertion complète du Nūn Sākinah ou du Tanwīn dans la consonne suivante. Devant les 4 lettres de « يَنْمُو » (Yanmū), la fusion s'accompagne d'une Ghunnah de 2 temps. Devant Lām et Râ, la fusion est totale et sèche sans aucune Ghunnah. Exception majeure : si le Nūn et la lettre de fusion sont dans le MÊME mot, l'Idghām est interdit et l'Izhār Mutlaq s'impose.",
                    "definitionLughatan": {
                        "ar": "الإِدْغَامُ: الإِدْخَالُ، يُقَالُ: أَدْغَمْتُ اللِّجَامَ فِي فَمِ الفَرَسِ إِذَا أَدْخَلْتَهُ فِيهِ.",
                        "fr": "L'insertion d'une chose dans une autre jusqu'à ce qu'elle y disparaisse."
                    },
                    "definitionIstilahan": {
                        "ar": "إِلْتِقَاءُ حَرْفٍ سَاكِنٍ بِمُتَحَرِّكٍ بِحَيْثُ يَصِيرَانِ حَرْفاً وَاحِداً مُشَدَّداً كَالSECOND.",
                        "fr": "La rencontre d'une lettre sans voyelle avec une lettre voyellée, de sorte qu'elles se fondent en une seule lettre géminée (avec Shaddah) du genre de la seconde."
                    },
                    "mechanismFr": "Pour l'Idghām avec Ghunnah : la langue ne touche pas les alvéoles du Nūn ; le son se fond dans le Wāw ou le Yā' tout en maintenant le flux d'air nasal (Khayshūm) pendant 2 temps pleins.",
                    "physiologicalDetails": {
                        "tongue": "Ne touche pas le palais pour le Nūn ; s'oriente vers la posture de la consonne réceptrice.",
                        "lips": "Arrondies pour le Wāw, neutres pour les autres.",
                        "vocalCords": "Vibration continue.",
                        "airflow": "50% bouche et 50% cavité nasale (Khayshūm) pour Yanmū ; 100% bouche pour Lām et Râ."
                    },
                    "phoneticReasonFr": "Recherche suprême d'allègement (Takhfīf) et d'harmonie phonétique. En revanche, dans un mot unique comme « Dunyā », fusionner créerait « Dwayyā », rendant le mot méconnaissable et créant une confusion avec les racines redoublées (Tad'īf) !",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَأَدْغِمَنْ بِغُنَّةٍ فِي يُومِنُ * إِلَّا بِكِلْمَةٍ كَدُنْيَا عَنْوَنُوا\nوَالثَّانِ إِدْغَامٌ بِغَيْرِ غُنَّهْ * فِي اللَّامِ وَالرَّا ثُمَّ كَرِّرَنَّهْ",
                        "transliteration": "Wa adghiman bi-ghunnatin fī Yūminu * Illā bi-kilmatin ka-Dunyā 'anwanū / Wath-thāni idghāmun bi-ghayri ghunnah * Fil-lāmi war-rā thumma karrirannah",
                        "translationFr": "« Fusionne avec Ghunnah dans les lettres de 'Yūminu' (Yanmū), sauf au sein d'un mot unique comme dans Dunyā ; et le second type est la fusion sans Ghunnah dans le Lām et le Râ. »",
                        "chapterNameAr": "بَابُ الإِدْغَامِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c8-2",
                            "arabicText": "فَمَن يَعۡمَلۡ مِثۡقَالَ ذَرَّةٍ خَيۡرٗا يَرَهُۥ",
                            "surahAyahRef": "99:7",
                            "surahNameFr": "Az-Zalzalah",
                            "highlightSegment": "فَمَن يَعۡمَلۡ",
                            "highlightLetter": "نۡ + ي (Idghām avec Ghunnah)",
                            "ruleApplied": "Idghām avec Ghunnah (2 Temps)",
                            "ruleTag": "idgham",
                            "explanationFr": "Le Nūn sākinah rencontre le Yā' : il fond dans le Yā' avec 2 temps de nasillement. On prononce : « Famay-ya'mal ».",
                            "transliteration": "Famay-ya'mal",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/099007.mp3"
                        },
                        {
                            "id": "ex-c8-3",
                            "arabicText": "رَبَّنَآ إِنَّكَ جَامِعُ ٱلنَّاسِ لِيَوۡمٖ لَّا رَيۡبَ فِيهِ",
                            "surahAyahRef": "3:9",
                            "surahNameFr": "Āl 'Imrān",
                            "highlightSegment": "لِيَوۡمٖ لَّا",
                            "highlightLetter": "ٖ + ل (Idghām sans Ghunnah)",
                            "ruleApplied": "Idghām sans Ghunnah",
                            "ruleTag": "silent",
                            "explanationFr": "Le Tanwīn rencontre la Lām : le son [N] est intégralement englouti par la Lām sans aucun résidu nasal. On prononce : « Li-yawmil-lā rayba fīh ».",
                            "transliteration": "Li-yawmil-lā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/003009.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Fusionner le Nūn dans les 4 mots d'Izhār Mutlaq (dire 'Duyyā' au lieu de 'Dunyā').",
                            "correctionFr": "Dans « دُنْيَا », « بُنْيَان », « قِنْوَان », « صِنْوَان », l'Izhār est obligatoire et absolu."
                        }
                    ]
                },
                {
                    "id": "nun-iqlab",
                    "nameFr": "3. Al-Iqlāb (La Conversion en Mīm devant Bā')",
                    "nameAr": "الإِقْلَابُ عِنْدَ حَرْفِ البَاءِ (م)",
                    "mnemonic": "Nūn + Bā' (ب) = Mīm avec 2 temps de Ghunnah (م)",
                    "letters": ["ب"],
                    "definitionFr": "L'Iqlāb consiste à transformer phonétiquement le Nūn Sākinah ou le Tanwīn en une consonne Mīm (م) pure, puis à dissimuler ce Mīm au niveau des lèvres avec 2 temps complets de résonance nasale (Ghunnah), lorsqu'il est suivi de la consonne Bā' (ب).",
                    "definitionLughatan": {
                        "ar": "الإِقْلَابُ: تَحْوِيلُ الشَّيْءِ عَنْ وَجْهِهِ وَجَعْلُهُ شَيْئاً آخَرَ.",
                        "fr": "La conversion ou la mutation d'une chose en une autre."
                    },
                    "definitionIstilahan": {
                        "ar": "قَلْبُ النُّونِ السَّاكِنَةِ أَوْ التَّنْوِينِ مِيماً خَالِصَةً مَخْفِيَّةً بِغُنَّةٍ بِمِقْدَارِ حَرَكَتَيْنِ إِذَا وَقَعَ بَعْدَهَا حَرْفُ البَاءِ.",
                        "fr": "Convertir le Nūn sākinah ou le Tanwīn en un Mīm dissimulé doté d'une Ghunnah de deux temps lorsqu'il est suivi de la lettre Bā'."
                    },
                    "mechanismFr": "Rapprochez les lèvres l'une contre l'autre avec délicatesse et sans écrasement (Itbāq latīf), sans laisser d'espace ouvert artificiel (Furjah), et maintenez 2 temps pleins de son nasal.",
                    "physiologicalDetails": {
                        "tongue": "Ne touche absolument pas le palais.",
                        "lips": "Contact délicat et souple sans forcer.",
                        "vocalCords": "Vibration sonore régulière.",
                        "airflow": "Canalisé à 100% dans la cavité nasale (Khayshūm) pendant les 2 temps de Ghunnah."
                    },
                    "phoneticReasonFr": "Passer directement du Nūn (langue) au Bā' (lèvres) tout en préservant le Tanwīn est articulatoirement lourd. Le Mīm partage avec le Bā' son point d'articulation labial et partage avec le Nūn sa nature nasale (Ghunnah) : il sert de passerelle acoustique idéale.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَالقَلْبُ عِنْدَ البَا بِغُنَّةٍ كَذَا * الاِخْفَاءُ لَدَى بَاقِي الحُرُوفِ أُخِذَا",
                        "transliteration": "Wal-qalbu 'inda-l-bā bi-ghunnatin kadhā * Al-ikhfā'u ladā bāqī-l-hurūfi ukhidhā",
                        "translationFr": "« Et la conversion (Qalb / Iqlāb) s'opère devant le Bā' avec Ghunnah ; de même l'Ikhfā' est adopté devant toutes les autres lettres restantes. » (Verset 42)",
                        "chapterNameAr": "بَابُ الإِقْلَابِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c8-4",
                            "arabicText": "كَلَّا لَيُنۢبَذَنَّ فِى ٱلۡحُطَمَةِ",
                            "surahAyahRef": "104:4",
                            "surahNameFr": "Al-Humazah",
                            "highlightSegment": "لَيُنۢبَذَنَّ",
                            "highlightLetter": "ـنۢبَـ (Iqlāb)",
                            "ruleApplied": "Iqlāb (Mīm + Ghunnah 2 temps)",
                            "ruleTag": "iqlab",
                            "explanationFr": "Le Nūn est surmonté d'un petit Mīm vertical (ۢ). Il se transforme en Mīm labial avec 2 temps de Ghunnah : on prononce « Layumbadhanna ».",
                            "transliteration": "Layumbadhanna",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/104004.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Serrer violemment les lèvres comme pour bloquer une consonne dure.",
                            "correctionFr": "Posez les lèvres avec légèreté : le son doit s'échapper avec fluidité par le nez."
                        }
                    ]
                },
                {
                    "id": "nun-ikhfa",
                    "nameFr": "4. Al-Ikhfā' Al-Haqīqī (La Dissimulation aux 15 Lettres)",
                    "nameAr": "الإِخْفَاءُ الحَقِيقِيُّ عِنْدَ خَمْسَةَ عَشَرَ حَرْفاً",
                    "mnemonic": "15 Lettres restantes : ص ذ ث ك ج ش ق س د ط ز ف ت ض ظ | Ghunnah lourde devant lettres d'emphase (ق, ط, ص, ض, ظ) et légère devant les autres",
                    "letters": ["ص", "ذ", "ث", "ك", "ج", "ش", "ق", "س", "د", "ط", "ز", "ف", "ت", "ض", "ظ"],
                    "definitionFr": "L'Ikhfā' Haqīqī est un état acoustique intermédiaire entre l'Izhār (clarté) et l'Idghām (fusion sans Shaddah). Il consiste à dissimuler le Nūn en plaçant la langue à proximité immédiate du point de la lettre suivante tout en faisant résonner une Ghunnah de 2 temps pleins.",
                    "definitionLughatan": {
                        "ar": "الإِخْفَاءُ: السَّتْرُ وَالحَجْبُ، يُقَالُ: أَخْفَيْتُ الشَّيْءَ إِذَا سَتَرْتَهُ عَنِ الأَعْيُنِ.",
                        "fr": "Le voilement, la dissimulation et le masquage."
                    },
                    "definitionIstilahan": {
                        "ar": "النُّطْقُ بِالنُّونِ السَّاكِنَةِ أَوْ التَّنْوِينِ بِحَالَةٍ بَيْنَ الإِظْهَارِ وَالإِدْغَامِ عَارِيَةٍ عَنِ التَّشْدِيدِ مَعَ بَقَاءِ الغُنَّةِ بِمِقْدَارِ حَرَكَتَيْنِ.",
                        "fr": "Articuler le Nūn ou le Tanwīn dans un état intermédiaire entre l'Izhār et l'Idghām, exempt de Shaddah, tout en maintenant la Ghunnah pendant deux temps."
                    },
                    "mechanismFr": "La langue ne doit JAMAIS toucher le palais sur le Nūn. Elle se prépare directement à l'entrée de la consonne suivante. Si la lettre suivante est lourde (ex: Qāf, Sād, Tā'), la Ghunnah résonne lourde (Tafkhīm) ; si la lettre est légère, la Ghunnah résonne fine (Tarqīq).",
                    "physiologicalDetails": {
                        "tongue": "Suspendue à proximité immédiate du point de contact de la lettre suivante sans verrouillage.",
                        "lips": "Neutres, sauf si la lettre suivante commande une posture particulière.",
                        "vocalCords": "Vibration continue.",
                        "airflow": "Canalisé dans le Khayshūm pour faire résonner la Ghunnah."
                    },
                    "phoneticReasonFr": "Les 15 lettres ne sont ni assez éloignées pour exiger l'Izhār (comme les lettres de gorge), ni assez proches pour justifier l'Idghām complet (comme Yarmalūn) : la phonétique arabe a créé cette solution intermédiaire sublime.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَفِي البَوَاقِي أَخْفِ نَحْوَ: مَنْ كَانَا * صِفْ ذَا ثَنَا كَمْ جَادَ شَخْصٌ قَدْ سَمَا\nدُمْ طَيِّباً زِدْ فِي تُقَى ضَعْ ظَالِماً * خُذْ مِنْ حُرُوفِ البَدْءِ نُوراً لَازِماً",
                        "transliteration": "Wa fil-bawāqī akhfi nahwa Man Kānā * Sif dhā thanā kam jāda shakhsun qad samā / Dum tayyiban zid fī tuqā da' zālimā * Khudh min hurūfil-bad'i nūran lāzimā",
                        "translationFr": "« Et dissimule (Ikhfā') devant le reste des lettres comme dans 'Man kāna', résumées dans les initiales de ce vers : Sif dhā thanā kam jāda shakhsun qad samā, dum tayyiban zid fī tuqan da' zālimā. »",
                        "chapterNameAr": "بَابُ الإِخْفَاءِ الحَقِيقِيِّ"
                    },
                    "examples": [
                        {
                            "id": "ex-c8-5",
                            "arabicText": "مِن قَبۡلِ أَن يَأۡتِيَ يَوۡمٞ",
                            "surahAyahRef": "2:254",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "مِن قَبۡلِ",
                            "highlightLetter": "نۡ + ق (Ghunnah lourde)",
                            "ruleApplied": "Ikhfā' avec Ghunnah Lourde (Tafkhīm)",
                            "ruleTag": "heavy",
                            "explanationFr": "Le Qāf étant une lettre d'Isti'lā' (lourde), la Ghunnah d'Ikhfā' prend obligatoirement une résonance sombre et ample (Mufakhkhamah) pendant 2 temps.",
                            "transliteration": "Min qabli",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002254.mp3"
                        },
                        {
                            "id": "ex-c8-6",
                            "arabicText": "مَن كَانَ يَرۡجُواْ لِقَآءَ ٱللَّهِ",
                            "surahAyahRef": "29:5",
                            "surahNameFr": "Al-'Ankabūt",
                            "highlightSegment": "مَن كَانَ",
                            "highlightLetter": "نۡ + ك (Ghunnah fine)",
                            "ruleApplied": "Ikhfā' avec Ghunnah Fine (Tarqīq)",
                            "ruleTag": "ikhfa",
                            "explanationFr": "Le Kāf étant une lettre légère, la Ghunnah de 2 temps s'amincit avec clarté : « Man kāna ».",
                            "transliteration": "Man kāna",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/029005.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : plaquer la langue contre le palais et prononcer un 'N' ordinaire avant la lettre (ex: dire 'min-qabli' au lieu d'une dissimulation).",
                            "correctionFr": "Ne laissez JAMAIS la pointe de votre langue toucher le palais ! Laissez le son flotter dans le nez."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c8-1",
                    "title": "Identification de règle : « مِن مَّسَدِۭ »",
                    "verseArabic": "فِى جِيدِهَا حَبۡلٞ مِّن مَّسَدِۭ",
                    "surahAyahRef": "111:5",
                    "targetSegment": "مِّن مَّسَدِۭ",
                    "promptFr": "Quelle règle de Nūn Sākinah s'applique entre « Min » et « Masad » ?",
                    "hintFr": "La lettre suivante est le Mīm (lettre de Yanmū).",
                    "solutionFr": "Idghām avec Ghunnah (2 temps) : « Mim-masad »",
                    "breakdownSteps": [
                        "Le Nūn sākinah rencontre la lettre Mīm.",
                        "Le Mīm fait partie des lettres de « يَنْمُو ».",
                        "Le Nūn fusionne totalement dans le Mīm avec 2 temps de résonance nasale."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/111005.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c8-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe : Quels sont les 4 mots uniques dans tout le Coran où le Nūn rencontre Wāw ou Yā' dans le MÊME mot sans que l'on n'applique d'Idghām (Izhār Mutlaq) ?",
                    "verseArabic": "كَأَنَّهُم بُنۡيَٰنٞ مَّرۡصُوصٞ",
                    "options": [
                        "دُنْيَا (Dunyā), بُنْيَان (Bunyān), قِنْوَان (Qinwān), صِنْوَان (Sinwān)",
                        "الرَّحْمَن, الرَّحِيم, المَلِك, القُدُّوس",
                        "آمَنُوا, عَمِلُوا, قَالُوا, كَانُوا",
                        "مَرْيَم, عِيسَى, مُوسَى, هَارُون"
                    ],
                    "correctAnswer": "دُنْيَا (Dunyā), بُنْيَان (Bunyān), قِنْوَان (Qinwān), صِنْوَان (Sinwān)",
                    "explanationFr": "L'Izhār Mutlaq ne se produit que dans ces 4 mots précis. L'Idghām y est strictement interdit pour préserver l'intégrité de la racine lexicale.",
                    "ruleId": "nun-idgham"
                },
                {
                    "id": "q-c8-2",
                    "type": "error_detect",
                    "promptFr": "Examen du livre arabe : Dans « مِن مَّالِ اللَّهِ », un lecteur prononce le Nūn avec un Izhār sec sans fusionner : « Min-Māli ». Quelle est l'erreur ?",
                    "verseArabic": "وَءَاتُوهُم مِّن مَّالِ ٱللَّهِ ٱلَّذِىٓ ءَاتَىٰكُمۡ",
                    "targetWord": "مِّن مَّالِ",
                    "surahAyahRef": "24:33",
                    "options": [
                        "Lahn Khafī : Omission de l'Idghām avec Ghunnah obligatoire (le Nūn devait fusionner dans le Mīm sur 2 temps : « Mim-māl »)",
                        "Lahn Jalī modifiant la prière",
                        "Récitation recommandée",
                        "Madd 'Iwad négligé"
                    ],
                    "correctAnswer": "Lahn Khafī : Omission de l'Idghām avec Ghunnah obligatoire (le Nūn devait fusionner dans le Mīm sur 2 temps : « Mim-māl »)",
                    "explanationFr": "Ne pas fusionner le Nūn devant les lettres de Yanmū constitue un manquement formel aux règles canoniques d'assimilation.",
                    "ruleId": "nun-idgham"
                },
                {
                    "id": "q-c8-3",
                    "type": "mcq",
                    "promptFr": "Comment règle-t-on le timbre de la Ghunnah lors de l'Ikhfā' devant le Qāf (ق) dans « مِن قَبْلِكُمْ » par rapport au Kāf (ك) dans « مِن كُلِّ » ?",
                    "verseArabic": "مِن قَبۡلِكُمۡ ... مِن كُلِّ",
                    "options": [
                        "La Ghunnah est lourde (Mufakhkhamah) devant le Qāf et fine (Muraqqaqah) devant le Kāf",
                        "Elle est toujours légère dans tous les cas",
                        "Elle est toujours lourde dans tous les cas",
                        "La Ghunnah est supprimée devant le Qāf"
                    ],
                    "correctAnswer": "La Ghunnah est lourde (Mufakhkhamah) devant le Qāf et fine (Muraqqaqah) devant le Kāf",
                    "explanationFr": "La Ghunnah d'Ikhfā' est un caméléon acoustique : elle adopte la sonorité lourde ou légère de la lettre qui lui succède immédiatement.",
                    "ruleId": "nun-ikhfa"
                }
            ]
        }
    ]
