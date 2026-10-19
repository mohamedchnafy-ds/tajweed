# -*- coding: utf-8 -*-
"""
Enriched Chapters 9 to 12:
- Chapter 9: Les Règles de la Mīm Sākinah
- Chapter 10: La Qalqalah & Ses Degrés de Rebond
- Chapter 11: L'Assimilation (Idghām Mutamāthilayn, Mutajānisayn, Mutaqāribayn)
- Chapter 12: Emphase & Amincissement (Tafkhīm & Tarqīq)
"""

def get_chapters_9_12():
    return [
        # ==========================================
        # CHAPITRE 9 : LES RÈGLES DE LA MĪM SĀKINAH
        # ==========================================
        {
            "id": "chap-9",
            "number": 9,
            "slug": "mim-sakinah",
            "titleFr": "Les Règles de la Mīm Sākinah",
            "titleAr": "أَحْكَامُ المِيمِ السَّاكِنَةِ",
            "category": "intermediate",
            "estimatedMinutes": 20,
            "isPilotChapter": True,
            "summaryFr": "Maîtriser les 3 règles de la consonne Mīm sans voyelle : 1. L'Ikhfā' Shafawī (dissimulation labiale devant Bā' avec 2 temps de Ghunnah), 2. L'Idghām Shafawī (fusion totale avec le Mīm suivant), et 3. L'Izhār Shafawī (clarté absolue devant les 26 autres lettres avec alerte maximale devant Wāw et Fā').",
            "infographicPoints": [
                "Seulement 3 règles pour le Mīm (beaucoup plus simple que le Nūn !) : Bā' -> Ikhfā', Mīm -> Idghām, Tout le reste -> Izhār.",
                "Pas d'Iqlāb pour le Mīm : Car l'Iqlāb consiste précisément à transformer une lettre en Mīm !",
                "Ikhfā' Shafawī (إخفاء شفوي) : Mīm sākinah + Bā' (ب) -> Contact délicat des lèvres sans forcer avec 2 temps de Ghunnah (ex: Tar-mīhim bi-hijārah).",
                "Idghām Shafawī / Mithlayn Saghīr (إدغام شفوي) : Mīm + Mīm -> Un seul Mīm Mushaddadah avec 2 temps de Ghunnah (ex: Fī qulūbihim maradun).",
                "Ashadd Izhār (Alerte Maximale) : Devant Wāw (و) et Fā' (ف), fermez rigoureusement les lèvres pour ne pas avaler le Mīm par facilité articulaire !"
            ],
            "subrules": [
                {
                    "id": "mim-ikhfa-shafawi",
                    "nameFr": "1. Al-Ikhfā' Al-Shafawī (La Dissimulation Labiale devant Bā')",
                    "nameAr": "الإِخْفَاءُ الشَّفَوِيُّ عِنْدَ البَاءِ",
                    "mnemonic": "Mīm + Bā' (ب) = Lèvres douces sans pression + 2 temps de Ghunnah",
                    "letters": ["ب"],
                    "definitionFr": "L'Ikhfā' Shafawī survient lorsque le Mīm Sākinah (à la fin d'un mot) est immédiatement suivi de la lettre Bā' (ب) au début du mot suivant. Il consiste à fermer doucement les lèvres l'une contre l'autre sans pression excessive tout en maintenant une résonance nasale (Ghunnah) de 2 temps pleins.",
                    "definitionLughatan": {
                        "ar": "الشَّفَوِيُّ: المَنْسُوبُ إِلَى الشَّفَتَيْنِ لِأَنَّ المِيمَ وَالبَاءَ يَخْرُجَانِ مِنْهُمَا.",
                        "fr": "Labial, relatif aux deux lèvres qui constituent le point d'articulation commun du Mīm et du Bā'."
                    },
                    "definitionIstilahan": {
                        "ar": "أَنْ يَقَعَ بَعْدَ المِيمِ السَّاكِنَةِ حَرْفُ البَاءِ فَتُنْطَقُ المِيمُ مَخْفِيَّةً مَعَ غُنَّةٍ بِمِقْدَارِ حَرَكَتَيْنِ.",
                        "fr": "L'apparition de la lettre Bā' après le Mīm sans voyelle : le Mīm est dissimulé avec une Ghunnah complète de deux temps."
                    },
                    "mechanismFr": "Déposez la lèvre supérieure sur la lèvre inférieure avec une délicatesse totale (Talāmus latīf sans écrasement Kazz), sans laisser d'interstice ouvert artificiel (Furjah), et faites résonner le son dans la cavité nasale pendant 2 battements.",
                    "physiologicalDetails": {
                        "tongue": "Au repos total.",
                        "lips": "Contact souple et étanche sans crispation musculaire.",
                        "vocalCords": "Vibration continue.",
                        "airflow": "Flux d'air s'échappant exclusivement par le nez (Khayshūm)."
                    },
                    "phoneticReasonFr": "Le Mīm et le Bā' partagent exactement le même lieu d'articulation (les deux lèvres) et des caractéristiques proches : la voix réalise une transition soyeuse par la Ghunnah plutôt qu'une double percussion labiale sèche.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَالمِيمُ إِنْ تَسْكُنْ تَجِي قَبْلَ الهِجَا * لَا أَلِفٍ لَيِّنَةٍ لِذِي الحِجَا\nأَحْكَامُهَا ثَلَاثَةٌ لِمَنْ ضَبَطْ * إِخْفَاءٌ ادْغَامٌ وَإِظْهَارٌ فَقَطْ\nفَالأَوَّلُ الإِخْفَاءُ عِنْدَ البَاءِ * وَسَمِّهِ الشَّفْوِيَّ لِلقُرَّاءِ",
                        "transliteration": "Wal-mīmu in taskun tajī qabla-l-hijā * Lā alifin layyinatin li-dhī-l-hijā / Ahkāmuhā thalāthatun liman dabat * Ikhfā'un idghāmun wa izhārun faqat / Fal-awwalu-l-ikhfā'u 'inda-l-bā'i * Wa sammihi-sh-shafwiyya lil-qurrā'i",
                        "translationFr": "« Le Mīm sans voyelle précède toutes les lettres de l'alphabet sauf l'Alif malléable. Ses règles sont au nombre de trois pour qui maîtrise : Ikhfā', Idghām et Izhār seulement. Le premier est l'Ikhfā' devant le Bā', que les récitateurs nomment 'Labial'. » (Versets 43-45)",
                        "chapterNameAr": "بَابُ أَحْكَامِ المِيمِ السَّاكِنَةِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c9-1",
                            "arabicText": "تَرۡمِيهِم بِحِجَارَةٖ مِّن سِجِّيلٖ",
                            "surahAyahRef": "105:4",
                            "surahNameFr": "Al-Fīl",
                            "highlightSegment": "تَرۡمِيهِم بِحِجَارَةٖ",
                            "highlightLetter": "ـم بِـ (Ikhfā' Shafawī)",
                            "ruleApplied": "Ikhfā' Shafawī (2 Temps de Ghunnah)",
                            "ruleTag": "ikhfa",
                            "explanationFr": "Le Mīm sākinah rencontre le Bā' : maintenez les lèvres jointes doucement avec 2 temps de nasillement avant d'ouvrir la bouche sur « Bi-hijārah ».",
                            "transliteration": "Tarmīhim bi-hijārah",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/105004.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : presser violemment les lèvres comme pour bloquer l'air, produisant un claquement dur.",
                            "correctionFr": "Le contact doit être léger comme une caresse : ne serrez pas les mâchoires."
                        }
                    ]
                },
                {
                    "id": "mim-idgham-shafawi",
                    "nameFr": "2. Al-Idghām Al-Shafawī (La Fusion des deux Mīms)",
                    "nameAr": "الإِدْغَامُ الشَّفَوِيُّ / إِدْغَامُ المِثْلَيْنِ الصَّغِيرُ",
                    "mnemonic": "Mīm + Mīm = Mīm avec Shaddah (مّ) + 2 temps de Ghunnah",
                    "letters": ["م"],
                    "definitionFr": "L'Idghām Shafawī (ou Idghām Mithlayn Saghīr) se produit lorsqu'un Mīm sans voyelle rencontre un second Mīm pourvu d'une voyelle : les deux fusionnent en un seul Mīm Mushaddadah accompagné de 2 temps incompressibles de Ghunnah.",
                    "definitionLughatan": {
                        "ar": "المِثْلَانِ: الحَرْفَانِ اللَّذَانِ اتَّحَدَا مَخْرَجاً وَصِفَةً كَالمِيمَيْنِ.",
                        "fr": "Les deux lettres parfaitement identiques en point d'articulation et en caractéristiques."
                    },
                    "definitionIstilahan": {
                        "ar": "إِدْخَالُ المِيمِ السَّاكِنَةِ فِي المِيمِ المُتَحَرِّكَةِ بِحَيْثُ يُنْطَقُ بِمِيمٍ وَاحِدَةٍ مُشَدَّدَةٍ مَعَ غُنَّةٍ حَرَكَتَيْنِ.",
                        "fr": "Insérer le Mīm sans voyelle dans le Mīm voyellé pour n'émettre qu'un seul Mīm doublé avec deux temps de résonance nasale."
                    },
                    "mechanismFr": "Fermez les lèvres une seule fois, maintenez la résonance dans le nez pendant 2 battements métronomiques, puis relâchez les lèvres en prononçant la voyelle du second Mīm.",
                    "physiologicalDetails": {
                        "tongue": "Au repos.",
                        "lips": "Occlusion labiale complète durant les 2 temps.",
                        "vocalCords": "Vibration sonore régulière.",
                        "airflow": "Canalisation nasale intégrale (Khayshūm)."
                    },
                    "phoneticReasonFr": "Puisque les deux consonnes sont rigoureusement identiques, prononcer deux Mīms séparés nécessiterait d'ouvrir et de refermer les lèvres deux fois de suite : la fusion réduit l'effort musculaire à une seule fermeture prolongée.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَالثَّانِ إِدْغَامٌ بِمِثْلِهَا أَتَى * وَسَمِّ إِدْغَاماً صَغِيراً يَا فَتَى",
                        "transliteration": "Wath-thāni idghāmun bi-mithlihā atā * Wa sammi idghāman saghīran yā fatā",
                        "translationFr": "« La seconde règle est la fusion dans une lettre identique, que tu nommeras 'Idghām Saghīr' (petite assimilation), ô noble étudiant. » (Verset 46)",
                        "chapterNameAr": "بَابُ إِدْغَامِ المِيمِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c9-2",
                            "arabicText": "فِى قُلُوبِهِم مَّرَضٞ فَزَادَهُمُ ٱللَّهُ مَرَضٗا",
                            "surahAyahRef": "2:10",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "قُلُوبِهِم مَّرَضٞ",
                            "highlightLetter": "ـم مَّـ (Idghām)",
                            "ruleApplied": "Idghām Shafawī (2 Temps)",
                            "ruleTag": "idgham",
                            "explanationFr": "Le premier Mīm est nu dans le Mushaf et le second porte une Shaddah : fondez les deux Mīms en maintenant 2 temps de résonance nasale : « Fī qulūbihim-marad ». ",
                            "transliteration": "Fī qulūbihim-marad",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002010.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Écouter ou prononcer le Mīm doublé sans lui donner ses 2 temps pleins de Ghunnah.",
                            "correctionFr": "Tout Mīm portant une Shaddah (ّ) exige obligatoirement deux temps de nasillement."
                        }
                    ]
                },
                {
                    "id": "mim-izhar-shafawi",
                    "nameFr": "3. Al-Izhār Al-Shafawī & L'Alerte devant Wāw et Fā'",
                    "nameAr": "الإِظْهَارُ الشَّفَوِيُّ وَالتَّحْذِيرُ عِنْدَ الوَاوِ وَالفَاءِ",
                    "mnemonic": "26 lettres = Izhār pur sans traîner | Alerte Rouge devant Wāw (و) et Fā' (ف) !",
                    "letters": [],
                    "definitionFr": "L'Izhār Shafawī s'applique devant toutes les 26 autres lettres de l'alphabet : le Mīm doit être prononcé clairement sans allonger sa Ghunnah. L'imam Ibn Al-Jazarī adresse une mise en garde solennelle devant le Wāw (و) et le Fā' (ف) : en raison de leur voisinage labial immédiat, la bouche risque d'avaler le Mīm par erreur !",
                    "definitionLughatan": {
                        "ar": "الأَشَدُّ إِظْهَاراً: الآكَدُ بَيَاناً لِقُوَّةِ الدَّاعِي إِلَى الإِخْفَاءِ.",
                        "fr": "La clarté renforcée en raison du risque accru d'assimilation involontaire."
                    },
                    "definitionIstilahan": {
                        "ar": "إِظْهَارُ المِيمِ السَّاكِنَةِ عِنْدَ 26 حَرْفاً، مَعَ شِدَّةِ الحَذَرِ مِنْ إِخْفَائِهَا عِنْدَ الوَاوِ لِاتِّحَادِ المَخْرَجِ، وَعِنْدَ الفَاءِ لِقُرْبِهِ.",
                        "fr": "Prononciation nette du Mīm devant 26 lettres, avec une vigilance absolue devant le Wāw (même point d'articulation labial) et le Fā' (point très proche) pour éviter qu'il ne disparaisse."
                    },
                    "mechanismFr": "Fermez franchement les lèvres sur le Mīm, arrêtez le son instantanément, puis sautez sur le Wāw ou le Fā' sans faire d'Ikhfā' involontaire.",
                    "physiologicalDetails": {
                        "tongue": "Se prépare à la consonne suivante.",
                        "lips": "Fermeture nette et rapide sur le Mīm, puis passage instantané aux dents supérieures pour le Fā' ou à l'arrondissement pour le Wāw.",
                        "vocalCords": "Vibration normale sans étirement.",
                        "airflow": "Flux naturel sans rétention."
                    },
                    "phoneticReasonFr": "Le Wāw sort des deux lèvres (comme le Mīm) et le Fā' sort de la lèvre inférieure : la paresse articulatoire inciterait le récitateur à fusionner le Mīm dans le Fā' ou le Wāw.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَالثَّالِثُ الإِظْهَارُ فِي البَقِيَّهْ * مِنْ أَحْرُفٍ وَسَمِّهَا شَفْوِيَّهْ\nوَاحْذَرْ لَدَى وَاوٍ وَفَا أَنْ تَخْتَفِي * لِقُرْبِهَا وَلاِتِّحَادِ فَاعْرِفِ",
                        "transliteration": "Wath-thālithu-l-izhāru fil-baqiyyah * Min ahrufin wa sammihā shafwiyyah / Wahdhar ladā wāwin wa fā an takhtafī * Li-qurbihā walit-tihādi fa'rifi",
                        "translationFr": "« Et la troisième règle est l'Izhār devant les lettres restantes, que tu qualifieras de 'Labial'. Et prends bien garde à ce que le Mīm ne disparaisse (Ikhfā') devant le Wāw et le Fā', en raison de leur proximité et de leur communauté de point d'émission ; sache-le bien ! » (Versets 47-48)",
                        "chapterNameAr": "بَابُ إِظْهَارِ المِيمِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c9-3",
                            "arabicText": "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ",
                            "surahAyahRef": "1:7",
                            "surahNameFr": "Al-Fātihah",
                            "highlightSegment": "عَلَيۡهِمۡ غَيۡرِ ... عَلَيۡهِمۡ وَلَا",
                            "highlightLetter": "ـمۡ غَـ & ـمۡ وَ (Izhār Shafawī)",
                            "ruleApplied": "Izhār Shafawī & Alerte devant Wāw",
                            "ruleTag": "izhar",
                            "explanationFr": "Dans « 'Alayhim ghayr », le Mīm est parfaitement clair. Dans « 'Alayhim wa lā », fermez fermement les lèvres sur le Mīm avant d'articuler le Wāw pour ne pas l'avaler par inadvertance.",
                            "transliteration": "'Alayhim ghayri ... 'alayhim wa-lā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/001007.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Faire un Ikhfā' inconscient dans « 'Alayhim wa lā » en laissant traîner les lèvres.",
                            "correctionFr": "Marquez une frontière nette entre la fermeture du Mīm et l'ouverture du Wāw."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c9-1",
                    "title": "Alerte phonétique : « هُمۡ فِيهَا خَٰلِدُونَ »",
                    "verseArabic": "أُو۟لَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ",
                    "surahAyahRef": "2:39",
                    "targetSegment": "هُمۡ فِيهَا",
                    "promptFr": "Pourquoi Ibn Al-Jazarī met-il en garde contre la prononciation du Mīm dans « Hum fīhā » ?",
                    "hintFr": "Où s'articule le Mīm et où s'articule le Fā' ?",
                    "solutionFr": "Alerte d'Izhār : éviter d'avaler le Mīm dans le Fā' par proximité labiale",
                    "breakdownSteps": [
                        "Le Mīm sākinah rencontre le Fā'.",
                        "Le Mīm naît des deux lèvres et le Fā' de la lèvre inférieure contre les incisives.",
                        "Cette proximité physique risque de provoquer un Ikhfā' fautif.",
                        "On doit fermer les lèvres sur le Mīm avant d'engager le Fā'."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/002039.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c9-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe : Pourquoi la Mīm Sākinah n'a-t-elle pas de règle d'Iqlāb ?",
                    "verseArabic": "تَرۡمِيهِم بِحِجَارَةٖ",
                    "options": [
                        "Parce que l'Iqlāb consiste précisément à transformer une lettre en Mīm, or la lettre est déjà un Mīm !",
                        "Parce que le Mīm ne se prononce pas avec les lèvres",
                        "Parce que l'Iqlāb est réservé aux lettres de la gorge",
                        "C'est une omission des grammairiens"
                    ],
                    "correctAnswer": "Parce que l'Iqlāb consiste précisément à transformer une lettre en Mīm, or la lettre est déjà un Mīm !",
                    "explanationFr": "L'Iqlāb consiste à transformer le Nūn en Mīm devant le Bā'. Le Mīm étant déjà un Mīm, il n'a besoin d'aucune transformation : il applique directement l'Ikhfā' Shafawī.",
                    "ruleId": "mim-ikhfa-shafawi"
                },
                {
                    "id": "q-c9-2",
                    "type": "error_detect",
                    "promptFr": "Dans « صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ », un récitateur applique une Ghunnah de 2 temps sur « عَلَيْهِمْ وَلَا ». Quelle est l'erreur ?",
                    "verseArabic": "عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ",
                    "targetWord": "عَلَيۡهِمۡ وَلَا",
                    "surahAyahRef": "1:7",
                    "options": [
                        "Lahn Khafī : Ikhfā' illicite devant le Wāw. Le Mīm devant Wāw doit impérativement être prononcé avec Izhār sans allonger la Ghunnah !",
                        "Récitation recommandée",
                        "Erreur sur la lettre Dād",
                        "Madd Munfasil obligatoire"
                    ],
                    "correctAnswer": "Lahn Khafī : Ikhfā' illicite devant le Wāw. Le Mīm devant Wāw doit impérativement être prononcé avec Izhār sans allonger la Ghunnah !",
                    "explanationFr": "Ibn Al-Jazarī avertit formellement : « Prends garde à ce que le Mīm ne disparaisse devant le Wāw et le Fā' ». C'est un Izhār strict.",
                    "ruleId": "mim-izhar-shafawi"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 10 : LA QALQALAH & SES DEGRÉS
        # ==========================================
        {
            "id": "chap-10",
            "number": 10,
            "slug": "qalqalah",
            "titleFr": "La Qalqalah & Ses Degrés de Rebond",
            "titleAr": "أَحْكَامُ القَلْقَلَةِ وَمَرَاتِبُهَا",
            "category": "intermediate",
            "estimatedMinutes": 20,
            "isPilotChapter": True,
            "summaryFr": "Comprendre le phénomène d'écho ou de rebond phonétique des 5 lettres de « Qutb Jadd » (قُطْبُ جَدٍّ) lorsqu'elles sont soukounées. Découvrir ses 3 degrés de puissance (Kubrā à l'arrêt avec Shaddah, Wustā à l'arrêt sans Shaddah, Sughrā au milieu d'un mot) et éviter les dérives d'adjonction de voyelle parasite.",
            "infographicPoints": [
                "Les 5 Lettres de Qalqalah : ق - ط - ب - ج - د regroupées dans la formule « قُطْبُ جَدٍّ » (Quṭbu Jaddin).",
                "Condition d'activation : La lettre DOIT être porteuse d'un Soukoûn (originel ou temporaire à l'arrêt). Les lettres voyellées n'ont pas de Qalqalah !",
                "Degré 1 - Sughrā (Mineure) : Au milieu d'un mot ou en liaison continue (ex: Khalaqnā, Yaṭma'u).",
                "Degré 2 - Wustā (Moyenne) : À l'arrêt sur une lettre sans Shaddah (ex: Al-Falaqْ, Ahadْ).",
                "Degré 3 - Kubrā / Akbar (Majeure) : À l'arrêt sur une lettre portant une Shaddah (ex: Wa tabbّ, Al-Haqqّ).",
                "Règle d'or : La Qalqalah est un rebond sec, JAMAIS une voyelle (Fathah, Dammah ou Kasrah) !"
            ],
            "subrules": [
                {
                    "id": "qalqalah-mechanism-letters",
                    "nameFr": "1. Mécanisme Phonétique & Les 5 Lettres (قُطْبُ جَدٍّ)",
                    "nameAr": "مَفْهُومُ القَلْقَلَةِ وَحُرُوفُهَا الخَمْسَةُ (قُطْبُ جَدٍّ)",
                    "mnemonic": "Lettres « قُطْبُ جَدٍّ » soukounées = Rebond acoustique pur sans voyelle",
                    "letters": ["ق", "ط", "ب", "ج", "د"],
                    "definitionFr": "La Qalqalah est un ébranlement ou sursaut mécanique qui se produit dans le point d'articulation de la consonne lorsqu'elle est dépourvue de voyelle, permettant de libérer avec force la pression de l'air emprisonnée par l'occlusion complète.",
                    "definitionLughatan": {
                        "ar": "القَلْقَلَةُ: التَّحْرِيكُ وَالاضْطِرَابُ، يُقَالُ: تَقَلْقَلَ القِدْرُ إِذَا غَلَى وَاضْطَرَبَ عَلَى النَّارِ.",
                        "fr": "L'ébranlement, l'agitation et la secousse."
                    },
                    "definitionIstilahan": {
                        "ar": "اضْطِرَابُ المَخْرَجِ عِنْدَ النُّطْقِ بِالحَرْفِ سَاكِناً حَتَّى يُسْمَعَ لَهُ نَبْرَةٌ قَوِيَّةٌ.",
                        "fr": "L'ébranlement du point d'articulation lors de la prononciation de la lettre sans voyelle, jusqu'à faire entendre une forte résonance de déclic sans la teinter d'aucune voyelle."
                    },
                    "mechanismFr": "Bloquez l'air hermétiquement au point de contact, puis ouvrez brusquement les deux organes articulatoires par un relâchement élastique spontané sans bouger les lèvres ni la mâchoire.",
                    "physiologicalDetails": {
                        "tongue": "Verrouillage occlusif total (Shiddah), puis séparation instantanée et franche sans frottement.",
                        "lips": "Fermeture totale pour le Bā', puis décollement élastique sec sans arrondissement.",
                        "vocalCords": "Vibration sonore puissante (Jahr).",
                        "airflow": "Pression pneumatique accumulée derrière le barrage, relâchée d'un coup sec."
                    },
                    "phoneticReasonFr": "Ces 5 consonnes combinent deux caractéristiques extrêmes : l'occlusion totale (Chiddah / impossibilité au son de couler) et la résonance sonore (Jahr / impossibilité à l'air de fuiter). Si on ne déclenche pas le rebond de Qalqalah, la lettre s'étouffe et devient inaudible !",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "قَلْقَلَةٌ قُطْبُ جَدٍّ وَاللِّينُ * وَاوٌ وَيَاءٌ سَكَنَا وَانْفَتَحَا\nقَبْلَهُمَا وَبَيِّنَنْ مُقَلْقَلَا * إِنْ سَكَنَا وَإِنْ يَكُنْ فِي الوَقْفِ كَانَ أَبْيَنَا",
                        "transliteration": "Qalqalātun Qutbu Jaddin wal-līnu * Wāwun wa Yā'un sakanā wan-fatahā / Qablahumā wa bayyinam-muqalqalā * In sakanā wa in yakun fil-waqfi kāna abyanā",
                        "translationFr": "« Les lettres de Qalqalah sont Quṭbu Jaddin... Rends la Qalqalah bien apparente lorsqu'elle est sans voyelle, et si elle survient lors de l'arrêt, qu'elle soit plus éclatante encore ! » (Versets 15 & 58)",
                        "chapterNameAr": "بَابُ القَلْقَلَةِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c10-1",
                            "arabicText": "لَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ فِىٓ أَحۡسَنِ تَقۡوِيمٖ",
                            "surahAyahRef": "95:4",
                            "surahNameFr": "At-Tīn",
                            "highlightSegment": "خَلَقۡنَا ... تَقۡوِيمٖ",
                            "highlightLetter": "قۡ (Qalqalah Sughrā)",
                            "ruleApplied": "Qalqalah Sughrā (au milieu d'un mot)",
                            "ruleTag": "qalqalah",
                            "explanationFr": "Le Qāf porte un soukoûn au milieu du mot : déclenchez un rebond sec et rapide sans traîner sur le son (« Khalaq-nā »).",
                            "transliteration": "Khalaqnā ... taqwīm",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/095004.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : rajouter une petite voyelle Fathah ou 'e' après la lettre (ex: dire 'Khalaqana' ou 'Ahada').",
                            "correctionFr": "Le rebond doit être 100% neutre et sans voyelle. C'est un décollement physique sec, pas une Fathah."
                        }
                    ]
                },
                {
                    "id": "qalqalah-degrees",
                    "nameFr": "2. Les 3 Degrés de Force (Kubrā, Wustā, Sughrā)",
                    "nameAr": "مَرَاتِبُ القَلْقَلَةِ (كُبْرَى، وُسْطَى، صُغْرَى)",
                    "mnemonic": "Kubrā = À l'arrêt avec Shaddah (وَتَبَّ) | Wustā = À l'arrêt sans Shaddah (الفَلَقْ) | Sughrā = En cours de mot (خَلَقْنَا)",
                    "letters": [],
                    "definitionFr": "La force acoustique de la Qalqalah varie selon la position de la lettre : elle atteint son paroxysme (Kubrā) lors de l'arrêt sur une lettre doublée par une Shaddah, son niveau intermédiaire (Wustā) à l'arrêt sur une consonne simple, et son niveau minimal (Sughrā) au cœur du mot ou en liaison.",
                    "definitionLughatan": {
                        "ar": "المَرْتَبَةُ: المَنْزِلَةُ وَالدَّرَجَةُ فِي الشِّدَّةِ وَالوُضُوحِ.",
                        "fr": "Le degré et le rang d'intensité sonore."
                    },
                    "definitionIstilahan": {
                        "ar": "تَفَاوُتُ وُضُوحِ صَوْتِ القَلْقَلَةِ بِحَسَبِ مَوْضِعِ الحَرْفِ: فِي المَوْقُوفِ عَلَيْهِ المُشَدَّدِ، ثُمَّ المُخَفَّفِ، ثُمَّ السَّاكِنِ وَصْلاً.",
                        "fr": "La gradation de la netteté du rebond selon la position de la lettre : maximale sur la lettre arrêtée avec Shaddah, médiane sur la lettre arrêtée sans Shaddah, mineure en cours de mot."
                    },
                    "mechanismFr": "Sur la Kubrā : appuyez fermement sur la première consonne de la Shaddah, marquez un temps de pression, puis faites exploser le rebond sur la seconde consonne libérée.",
                    "physiologicalDetails": {
                        "tongue": "Pression accrue pour la Kubrā, relâchée avec netteté.",
                        "lips": "Pression ferme pour le Bā' de « Wa tabb ».",
                        "vocalCords": "Vibration dense.",
                        "airflow": "Déflagration acoustique brève."
                    },
                    "phoneticReasonFr": "La lettre à l'arrêt bénéficie de tout le repos articulatoire de la pause, tandis que la Shaddah double la masse musculaire mobilisée.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَإِنْ يَكُنْ فِي الوَقْفِ كَانَ أَبْيَنَا * لِأَنَّهُ اسْتَقَرَّ فِي المَكَانَا\nوَأَكْبَرُهَا حَيْثُ يُشَدَّدُ الحَرَمْ * كَـ الحَقِّ مَعْ تَبَّ بِلَا خَفَا لَزِمْ",
                        "transliteration": "Wa in yakun fil-waqfi kāna abyanā * Li'annahus-taqarra fil-makānā / Wa akbaruhā haythu yushaddadu-l-haram * Kal-Haqqi ma' Tabba bi-lā khafā lazim",
                        "translationFr": "« Et si la lettre se trouve à l'arrêt, qu'elle soit plus éclatante encore car elle est stabilisée ; et son degré suprême intervient là où elle porte une Shaddah, comme dans 'Al-Haqq' et 'Tabb' sans aucune équivoque. »",
                        "chapterNameAr": "بَابُ مَرَاتِبِ القَلْقَلَةِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c10-2",
                            "arabicText": "تَبَّتۡ يَدَآ أَبِى لَهَبٖ وَتَبَّ",
                            "surahAyahRef": "111:1",
                            "surahNameFr": "Al-Masad",
                            "highlightSegment": "وَتَبَّ",
                            "highlightLetter": "بَّ (Qalqalah Kubrā)",
                            "ruleApplied": "Qalqalah Kubrā à l'Arrêt avec Shaddah",
                            "ruleTag": "qalqalah",
                            "explanationFr": "À l'arrêt sur « Wa tabb », le Bā' porte une Shaddah : maintenez l'occlusion un court instant pour marquer la gémination avant de libérer le rebond le plus puissant : « Wa tabb ! ».",
                            "transliteration": "Wa tabb",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/111001.mp3"
                        },
                        {
                            "id": "ex-c10-3",
                            "arabicText": "قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ",
                            "surahAyahRef": "113:1",
                            "surahNameFr": "Al-Falaq",
                            "highlightSegment": "ٱلۡفَلَقِ",
                            "highlightLetter": "قِ ➔ قۡ (Wustā)",
                            "ruleApplied": "Qalqalah Wustā à l'Arrêt",
                            "ruleTag": "qalqalah",
                            "explanationFr": "À l'arrêt sur « Al-Falaq », le Qāf devient sākin sans Shaddah : le rebond est franc, clair et vigoureux.",
                            "transliteration": "Qul a'ūdhu bi-rabbi-l-Falaq",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/113001.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Avaler la Shaddah sur « Wa tabb » et faire un rebond immédiat sans marquer la consonne double.",
                            "correctionFr": "Marquez une infime rétention sur les lèvres avant de relâcher le claquement."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c10-1",
                    "title": "Comparaison de Qalqalah : « خَلَقْنَا » vs « الفَلَقْ »",
                    "verseArabic": "خَلَقَ ٱلۡإِنسَٰنَ مِنۡ عَلَقٍ ١ ٱقۡرَأۡ",
                    "surahAyahRef": "96:2-3",
                    "targetSegment": "عَلَقٍ",
                    "promptFr": "Quel degré de Qalqalah appliquez-vous en vous arrêtant sur le mot « 'Alaq » ?",
                    "hintFr": "La lettre Qāf est-elle à l'arrêt ou en cours de mot ? Porte-t-elle une Shaddah ?",
                    "solutionFr": "Qalqalah Wustā (Moyenne à l'arrêt sur consonne sans Shaddah)",
                    "breakdownSteps": [
                        "Le mot se termine par un Qāf.",
                        "Lors de l'arrêt, le Tanwīn devient un soukoûn temporaire.",
                        "La lettre ne porte pas de Shaddah : c'est le degré Wustā."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/096002.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c10-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe : Quelles sont les 5 lettres de la Qalqalah et quelle est leur condition obligatoire pour rebondir ?",
                    "verseArabic": "قُلۡ هُوَ ٱللَّهُ أَحَدٌ",
                    "options": [
                        "ق، ط، ب، ج، د (قُطْبُ جَدٍّ) à condition qu'elles soient porteuses d'un Soukoûn",
                        "ي، ر، م، ل، و، ن avec Fathah",
                        "ء، هـ، ع، ح، غ، خ avec Kasrah",
                        "ص، ض، ط، ظ avec Shaddah"
                    ],
                    "correctAnswer": "ق، ط، ب، ج، د (قُطْبُ جَدٍّ) à condition qu'elles soient porteuses d'un Soukoûn",
                    "explanationFr": "Les 5 lettres de « Qutb Jadd » ne manifestent leur Qalqalah que lorsqu'elles sont immobiles (soukounées). Si elles portent une voyelle, la voyelle ouvre naturellement le point d'émission.",
                    "ruleId": "qalqalah-mechanism-letters"
                },
                {
                    "id": "q-c10-2",
                    "type": "error_detect",
                    "promptFr": "Dans « لَمْ يَلِدْ وَلَمْ يُولَدْ », un lecteur prononce le Dāl avec une Kasrah glissée : « Lam yalidi wa lam yūlad ». De quel type d'erreur s'agit-il ?",
                    "verseArabic": "لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ",
                    "targetWord": "يَلِدۡ",
                    "surahAyahRef": "112:3",
                    "options": [
                        "Lahn Jalī : Remplacement d'un soukoûn par une voyelle, déformant la structure grammaticale du verbe",
                        "Lahn Khafī d'embellissement",
                        "Qalqalah Kubrā conforme",
                        "Arrêt Tāmm"
                    ],
                    "correctAnswer": "Lahn Jalī : Remplacement d'un soukoûn par une voyelle, déformant la structure grammaticale du verbe",
                    "explanationFr": "Le livre « التجويد المبسط » avertit : changer un soukoûn en voyelle (تحريك الساكن) est un Lahn Jalī formellement interdit. La Qalqalah doit rester un rebond neutre sans voyelle.",
                    "ruleId": "qalqalah-mechanism-letters"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 11 : L'ASSIMILATION (IDGHĀM)
        # ==========================================
        {
            "id": "chap-11",
            "number": 11,
            "slug": "assimilation",
            "titleFr": "L'Assimilation (Idghām Mutamāthilayn, etc.)",
            "titleAr": "إِدْغَامُ المُتَمَاثِلَيْنِ وَالمُتَقَارِبَيْنِ وَالمُتَجَانِسَيْنِ",
            "category": "advanced",
            "estimatedMinutes": 25,
            "isPilotChapter": True,
            "summaryFr": "Comprendre les lois universelles de fusion entre consonnes : 1. Les Mutamāthilayn (lettres identiques en makhraj et sifāt), 2. Les Mutajānisayn (même point d'articulation mais caractéristiques différentes), 3. Les Mutaqāribayn (points d'articulation voisins). Découvrir l'exception sacrée des lettres de Madd et l'Idghām Nāqis dans « Basatta ».",
            "infographicPoints": [
                "Mutamāthilān (مُتَمَاثِلَانِ) : Deux lettres 100% identiques qui se suivent (ex: Bā' + Bā' dans Idrib bi-'asāka). La 1ère nue fond dans la 2e avec Shaddah.",
                "Exception sacrée du Madd : Le Wāw et le Yā' de prolongation ne fusionnent JAMAIS dans une consonne identique (ex: Fī Yūsufa, Āmanū wa 'amilū) -> Izhār obligatoire !",
                "Mutajānisān (مُتَجَانِسَانِ) : Même makhraj, attributs différents (ex: ت avec ط dans Āmanat-tā'ifah).",
                "Idghām Nāqis (إدغام ناقص) : Dans « Basatta » (بَسَطتَ) et « Ahattu » (أَحَطتُ), le Tā' lourd garde son emphase et son écrasement (Itbāq) sans Qalqalah, puis libère la consonne sur le Tā' fin !",
                "Les 8 couples de fusions codifiés par les maîtres du Coran (ت->ط, ذ->ظ, ب->م dans Irkam ma'anā, etc.)."
            ],
            "subrules": [
                {
                    "id": "mutamathilayn-fusion",
                    "nameFr": "1. Idghām Al-Mutamāthilayn (Lettres Identiques)",
                    "nameAr": "إِدْغَامُ المُتَمَاثِلَيْنِ الصَّغِيرِ",
                    "mnemonic": "Deux lettres identiques : 1ère sans voyelle + 2e avec voyelle = Shaddah immédiate (ّ)",
                    "letters": [],
                    "definitionFr": "Les Mutamāthilayn sont deux consonnes rigoureusement identiques partageant le même point d'articulation et les mêmes caractéristiques (ex: deux Bā', deux Dāl, deux Kâf). Lorsque la première est soukounée et la seconde voyellée, la première fond intégralement dans la seconde qui prend une Shaddah.",
                    "definitionLughatan": {
                        "ar": "المُتَمَاثِلَانِ: الشَّيْئَانِ المُتَشَابِهَانِ فِي كُلِّ شَيْءٍ حَتَّى كَأَنَّهُمَا شَيْءٌ وَاحِدٌ.",
                        "fr": "Deux entités parfaitement jumelles et similaires en tous points."
                    },
                    "definitionIstilahan": {
                        "ar": "حَرْفَانِ اتَّفَقَا مَخْرَجاً وَصِفَةً، كَالبَاءَيْنِ وَالدَّالَيْنِ، سَكَنَ أَوَّلُهُمَا وَتَحَرَّكَ ثَانِيهِمَا فَيَجِبُ إِدْغَامُهُ إِدْغَاماً كَامِلاً.",
                        "fr": "Deux lettres concordant en point d'émission et en caractéristiques, la première étant sans voyelle et la seconde voyellée : l'assimilation complète est obligatoire."
                    },
                    "mechanismFr": "Ne détachez pas la langue entre les deux lettres. Pressez une seule fois sur le point d'articulation en doublant la consonne par une Shaddah.",
                    "physiologicalDetails": {
                        "tongue": "Une seule percussion ferme au lieu de deux contacts successifs.",
                        "lips": "Occlusion unique si lettres labiales.",
                        "vocalCords": "Vibration continue.",
                        "airflow": "Flux continu sans interruption."
                    },
                    "phoneticReasonFr": "Prononcer deux lettres identiques immobiles consécutives briserait la fluidité phonatoire. L'arabe privilégie l'économie d'effort musculaire par la gémination.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "إِنْ فِي الصِّفَاتِ وَالمَخَارِجِ اتَّفَقْ * حَرْفَانِ فَالْمِثْلَانِ فِيهِمَا أَحَقْ\nوَإِنْ يَكُونَا مَخْرَجاً تَقَارَبَا * وَفِي الصِّفَاتِ اخْتَلَفَا يُلَقَّبَا\nمُتَقَارِبَيْنِ أَوْ يَكُونَا اتَّفَقَا * فِي مَخْرَجٍ دُونَ الصِّفَاتِ حُقِّقَا\nبِالْمُتَجَانِسَيْنِ",
                        "transliteration": "In fis-sifāti wal-makhāriji-ttafaq * Harfāni fal-mithlāni fīhimā ahaq / Wa in yakūnā makhrajan taqārabā * Wa fis-sifātikhtalafā yulaqqabā / Mutaqāribayni aw yakūnā-ttafaqā * Fī makhrajin dūna-s-sifāti huqqiqā / Bil-mutajānisayni",
                        "translationFr": "« Si deux lettres s'accordent en caractéristiques et en point d'articulation, le titre de 'Mithlayn' (identiques) leur revient de droit. Si elles sont proches en articulation et diffèrent en caractéristiques, on les nomme 'Mutaqāribayn'. Et si elles partagent le même point d'émission mais diffèrent en caractéristiques, on les nomme 'Mutajānisayn'. » (Versets 52-54)",
                        "chapterNameAr": "بَابُ التَّمَاثُلِ وَالتَّقَارُبِ وَالتَّجَانُسِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c11-1",
                            "arabicText": "وَقَد دَّخَلُواْ بِٱلۡكُفۡرِ وَهُمۡ قَدۡ خَرَجُواْ بِهِۦ",
                            "surahAyahRef": "5:61",
                            "surahNameFr": "Al-Mā'idah",
                            "highlightSegment": "وَقَد دَّخَلُواْ",
                            "highlightLetter": "دۡ + دَ ➔ دَّ",
                            "ruleApplied": "Idghām Mutamāthilayn (Fusion totale)",
                            "ruleTag": "idgham",
                            "explanationFr": "Le Dāl de « Qad » rencontre le Dāl de « Dakhalū » : le premier est nu et fond totalement dans le second. On prononce : « Wa qad-dakhalū » (sans Qalqalah sur le 1er Dāl).",
                            "transliteration": "Wa qad-dakhalū",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/005061.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Faire une Qalqalah sur la première lettre soukounée avant d'enchaîner sur la seconde (ex: dire 'Qad-e-dakhalū').",
                            "correctionFr": "La Qalqalah est strictement interdite en cas d'Idghām : fondez directement les deux sons en une seule Shaddah."
                        }
                    ]
                },
                {
                    "id": "madd-letters-no-idgham",
                    "nameFr": "2. L'Exception Sacrée des Lettres de Madd (فِى يُوسُفَ & ءَامَنُواْ)",
                    "nameAr": "اسْتِثْنَاءُ حُرُوفِ المَدِّ مِنَ الإِدْغَامِ (وُجُوبُ الإِظْهَارِ)",
                    "mnemonic": "Lettre de Madd + Lettre identique = Izhār OBLIGATOIRE (2 temps de Madd)",
                    "letters": [],
                    "definitionFr": "Bien qu'un Wāw de Madd ressemble à une consonne Wāw et qu'un Yā' de Madd ressemble à une consonne Yā', les lettres de prolongation ne naissent PAS du même point d'articulation (elles naissent du vide buccal Al-Jawf, alors que les consonnes naissent des lèvres ou du milieu de la langue). Elles ne fusionnent JAMAIS !",
                    "definitionLughatan": {
                        "ar": "المَانِعُ: الحَائِلُ الَّذِي يَمْنَعُ وُقُوعَ الإِدْغَامِ حِفْظاً لِلْمَدِّ.",
                        "fr": "L'obstacle physiologique qui empêche la fusion pour préserver la prolongation."
                    },
                    "definitionIstilahan": {
                        "ar": "امْتِنَاعُ إِدْغَامِ حَرْفِ المَدِّ فِي مِثْلِهِ خَوْفَ زَوَالِ المَدِّ بِالإِدْغَامِ، فَيَجِبُ الإِظْهَارُ فِي نَحْوِ: ﴿فِي يُوسُفَ﴾ وَ﴿آمَنُوا وَعَمِلُوا﴾.",
                        "fr": "L'interdiction absolue de fusionner une lettre de Madd dans son homologue afin de ne pas détruire la durée de la prolongation : l'Izhār est obligatoire."
                    },
                    "mechanismFr": "Donnez 2 temps pleins de prolongation naturelle sur le mot, puis articulez la consonne suivante de manière indépendante sans créer de Shaddah.",
                    "physiologicalDetails": {
                        "tongue": "Reste au fond pour laisser résonner la voyelle longue, puis se mobilise pour la consonne.",
                        "lips": "S'arrondissent pour le Madd, puis ré-engagent le Wāw consonne.",
                        "vocalCords": "Vibration continue sur 2 temps.",
                        "airflow": "Flux continu sans interruption."
                    },
                    "phoneticReasonFr": "Si vous fusionniez le Wāw de prolongation de « Āmanū » dans le Wāw suivant de « Wa 'amilū », la prolongation disparaîtrait, transformant le pluriel en singulier et déformant la grammaire coranique.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَأَظْهِرَنَّ فِي يَقُولُ مَعْ فِعَالْ * وَفِي اتَّقَوْا وَآمَنُوا لَا فِي ادْغَالْ\nوَأَبِنِ المَدَّ فِي نَحْوِ: فِى يُوسُفَ حَتْمَا * وَاصْبِرْ عَلَى وَاوِ: عَصَوْا وَكَانُوا لُزْمَا",
                        "transliteration": "Wa azhiranna fī yaqūlu ma' fi'āl * Wa fitta-qaw wa āmanū lā fīd-dighāl / Wa abini-l-madda fī nahwi Fī Yūsufa hatmā * Wasbir 'alā wāwi 'Asaw wa kānū luzmā",
                        "translationFr": "« Rends manifeste la récitation et préserve la prolongation dans 'Fī Yūsuf' de manière impérative, et maintiens le Wāw dans 'Āmanū wa 'amilū' sans jamais fusionner. »",
                        "chapterNameAr": "بَابُ المَانِعِ مِنَ الإِدْغَامِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c11-2",
                            "arabicText": "ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ",
                            "surahAyahRef": "2:25",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "ءَامَنُواْ وَعَمِلُواْ",
                            "highlightLetter": "ـُواْ وَ (Izhār Obligatoire)",
                            "ruleApplied": "Madd Naturel préservé sans fusion",
                            "ruleTag": "madd",
                            "explanationFr": "Le Wāw de « Āmanū » est une lettre de prolongation de 2 temps. Il est strictement interdit de le fusionner dans le Wāw suivant : dites « Āmanū » (2 temps) puis « Wa 'amilū ».",
                            "transliteration": "Āmanū wa 'amilū",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002025.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Fusionner en disant « Āmanuwwa 'amilū » en écrasant la voyelle longue du pluriel.",
                            "correctionFr": "Marquez toujours 2 temps calmes sur le Madd avant d'articuler le mot suivant."
                        }
                    ]
                },
                {
                    "id": "idgham-naqis-basatta",
                    "nameFr": "3. L'Assimilation Partielle (Idghām Nāqis dans بَسَطتَ & أَحَطتُ)",
                    "nameAr": "الإِدْغَامُ النَّاقِصُ (بَسَطتَ، أَحَطتُ، فَرَّطتُمْ)",
                    "mnemonic": "ط lourd + ت fin = Conserver l'emphase (Isti'lā') et l'écrasement (Itbāq) du Tā' SANS Qalqalah, puis relâcher en Tā'",
                    "letters": ["ط", "ت"],
                    "definitionFr": "L'Idghām Nāqis est une merveille de précision phonétique : lorsque la lettre forte et lourde Tā' (ط) sans voyelle rencontre la lettre fine et faible Tā' (ت), le Tā' ne peut pas être totalement anéanti. On absorbe son point d'articulation dans le Tā' tout en conservant son emphase et son écrasement palatin (Itbāq), sans émettre de Qalqalah.",
                    "definitionLughatan": {
                        "ar": "النَّاقِصُ: الَّذِي لَمْ يَكْتَمِلْ ذَهَابُ أَثَرِهِ بَلْ بَقِيَتْ مِنْهُ صِفَةٌ قَوِيَّةٌ.",
                        "fr": "Incomplet, partiel : dont la disparition n'est pas totale car un attribut de force subsiste."
                    },
                    "definitionIstilahan": {
                        "ar": "إِدْغَامُ حَرْفٍ قَوِيٍّ (الطَّاءِ) فِي حَرْفٍ ضَعِيفٍ (التَّاءِ) بِحَيْثُ يَسْقُطُ مَخْرَجُهُ وَتَبْقَى صِفَتَا الاسْتِعْلَاءِ وَالإِطْبَاقِ بِلَا قَلْقَلَةٍ.",
                        "fr": "Assimiler une lettre forte dans une lettre faible de telle sorte que son point d'articulation disparaisse tout en maintenant ses qualités d'Isti'lā' et d'Itbāq sans Qalqalah."
                    },
                    "mechanismFr": "Plaquez fermement et largement la langue contre la voûte du palais pour sceller l'emphase du Tā' lourd SANS ouvrir la bouche (interdiction absolue de faire une Qalqalah !), puis décollez la langue en expirant le souffle léger du Tā' fin.",
                    "physiologicalDetails": {
                        "tongue": "Écrasement large de la langue contre le palais dur (Itbāq), retenue sans relâchement, puis libération ciblée sur l'apex pour le Tā'.",
                        "lips": "Neutres.",
                        "vocalCords": "Vibration bloquée sur l'occlusion, puis relâchement d'air soufflé (Hams) sur le Tā'.",
                        "airflow": "Pression étanche bloquée sous la langue puis libérée en souffle fin."
                    },
                    "phoneticReasonFr": "En phonétique sacrée, une consonne puissante et majestueuse ne peut pas être dissoute par une consonne faible. Conserver l'Itbāq préserve la noblesse de la lettre divine.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَبَيِّنِ الإِطْبَاقَ مِنْ أَحَطتُ مَعْ * بَسَطتَ وَالخُلْفُ بِنَخْلُقكُّمْ وَقَعْ",
                        "transliteration": "Wa bayyini-l-itbāqa min Ahattu ma' * Basatta wal-khulfu bi-Nakhluqkum waqa'",
                        "translationFr": "« Et rends bien évident l'écrasement palatin (Itbāq) dans 'Ahattu' ainsi que dans 'Basatta' ; et une divergence existe dans 'Nakhluqkum' quant à la plénitude de la fusion. » (Verset 54)",
                        "chapterNameAr": "بَابُ الإِدْغَامِ النَّاقِصِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c11-3",
                            "arabicText": "لَئِنۢ بَسَطتَ إِلَىَّ يَدَكَ لِتَقۡتُلَنِى",
                            "surahAyahRef": "5:28",
                            "surahNameFr": "Al-Mā'idah",
                            "highlightSegment": "بَسَطتَ",
                            "highlightLetter": "ـطتَ (Idghām Nāqis)",
                            "ruleApplied": "Itbāq du Tā' sans Qalqalah",
                            "ruleTag": "heavy",
                            "explanationFr": "Plaquez la langue en écrasement lourd sur le Tā', ne faites aucun rebond de Qalqalah, puis détachez la langue sur le son 'ta' fin : « Basat-ta ».",
                            "transliteration": "La'im basatta",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/005028.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Faire une Qalqalah sur le Tā' en disant « Basat-e-ta » ou « Ahat-e-tu ».",
                            "correctionFr": "Ne décollez jamais la langue entre les deux sons ! Gardez l'adhérence palatine jusqu'à la libération sur le Tā'."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c11-1",
                    "title": "Chirurgie phonétique : « فَقَالَ أَحَطتُ بِمَا لَمۡ تُحِطۡ بِهِۦ »",
                    "verseArabic": "فَمَكَثَ غَيۡرَ بَعِيدٖ فَقَالَ أَحَطتُ بِمَا لَمۡ تُحِطۡ بِهِۦ",
                    "surahAyahRef": "27:22",
                    "targetSegment": "أَحَطتُ",
                    "promptFr": "Comment devez-vous articuler la rencontre entre le Tā' (ط) et le Tā' (ت) dans « Ahattu » ?",
                    "hintFr": "Rappelez-vous du verset d'Al-Jazariyyah : « وَبَيِّنِ الإِطْبَاقَ مِنْ أَحَطتُ ».",
                    "solutionFr": "Conserver l'Itbāq (lourdeur) du Tā' sans Qalqalah, puis libérer sur le Tā' fin",
                    "breakdownSteps": [
                        "Le Tā' (ط) est soukouné et le Tā' (ت) est voyellé.",
                        "Le Tā' ne fusionne pas entièrement car il est plus fort que le Tā'.",
                        "On maintient la langue collée au palais pour produire l'emphase, puis on ouvre sur le son 'tu' fin."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/027022.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c11-1",
                    "type": "error_detect",
                    "promptFr": "Dans « وَقَالُوا اتَّقَوْا وَآمَنُوا ثُمَّ اتَّقَوْا وَّآمَنُوا », un lecteur fusionne le Wāw de prolongation de « Āmanū » dans le Wāw suivant en disant « Āmanuwwa ». Quel est le jugement ?",
                    "verseArabic": "ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ",
                    "targetWord": "ءَامَنُواْ وَعَمِلُواْ",
                    "surahAyahRef": "2:25",
                    "options": [
                        "Lahn Jalī : Fusion interdite ! Les lettres de prolongation ne fusionnent JAMAIS sous peine de détruire le Madd du pluriel",
                        "Idghām recommandé",
                        "Règle optionnelle",
                        "Qalqalah obligatoire"
                    ],
                    "correctAnswer": "Lahn Jalī : Fusion interdite ! Les lettres de prolongation ne fusionnent JAMAIS sous peine de détruire le Madd du pluriel",
                    "explanationFr": "L'exception sacrée protège les lettres de Madd : elles naissent d'Al-Jawf et doivent conserver leurs 2 temps pleins sans jamais être absorbées dans une Shaddah.",
                    "ruleId": "madd-letters-no-idgham"
                },
                {
                    "id": "q-c11-2",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe : Dans « بَسَطْتَ », pourquoi l'assimilation du Tā' dans le Tā' est-elle qualifiée d'incomplète (Nāqis) ?",
                    "verseArabic": "لَئِنۢ بَسَطتَ إِلَىَّ يَدَكَ",
                    "options": [
                        "Parce que la caractéristique d'écrasement palatin (Itbāq) du Tā' est conservée et ne disparaît pas",
                        "Parce qu'on ne prononce que le Tā'",
                        "Parce qu'il y a une Ghunnah",
                        "Parce qu'on doit respirer au milieu"
                    ],
                    "correctAnswer": "Parce que la caractéristique d'écrasement palatin (Itbāq) du Tā' est conservée et ne disparaît pas",
                    "explanationFr": "L'Idghām est complet (Kāmil) quand la première lettre s'efface corps et âme. Ici, le corps du Tā' disparaît mais son âme (son emphase et son Itbāq) reste vivante : c'est un Idghām Nāqis.",
                    "ruleId": "idgham-naqis-basatta"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 12 : EMPHASE & AMINCISSEMENT (TAFKHĪM & TARQĪQ)
        # ==========================================
        {
            "id": "chap-12",
            "number": 12,
            "slug": "heavy-light",
            "titleFr": "Emphase & Amincissement (Tafkhīm & Tarqīq)",
            "titleAr": "التَّفْخِيمُ وَالتَّرْقِيقُ وَأَحْكَامُ الرَّاءِ",
            "category": "advanced",
            "estimatedMinutes": 25,
            "isPilotChapter": True,
            "summaryFr": "Explorer la physique acoustique du Coran : les 7 consonnes d'Isti'lā' toujours lourdes (خُصَّ ضَغْطٍ قِظْ) et leurs 5 degrés de puissance, les lettres caméléons (Alif miroir, Lām d'Allah, et le grand simulateur de la Râ' avec ses 8 cas d'emphase, ses 4 cas d'amincissement et ses cas au choix) et la méthode chirurgicale du Takhlees Al-Hurūf.",
            "infographicPoints": [
                "Tafkhīm (التَّفْخِيم) : Épaissir la consonne pour emplir la bouche d'une résonance ample. Tarqīq (التَّرْقِيق) : Amincir le son avec douceur.",
                "Les 7 Lettres d'Isti'lā' : خ, ص, ض, غ, ط, ق, ظ condensées dans « خُصَّ ضَغْطٍ قِظْ ». Elles sont TOUJOURS lourdes !",
                "Les 4 Lettres d'Itbāq (Écrasement suprême) : ص, ض, ط, ظ sont les reines absolues de l'emphase.",
                "Les 5 Degrés de Tafkhīm (selon Ibn Al-Jazarī) : 1. Fathah + Alif > 2. Fathah seule > 3. Dammah > 4. Soukoûn > 5. Kasrah.",
                "La Râ' (ر) : 8 cas d'emphase par défaut, 4 cas d'amincissement (Kasrah directe, après Kasrah originelle, après Yā' à l'arrêt, etc.), et 3 cas au choix (Firq, Misr, Al-Qitr).",
                "Takhlees Al-Hurūf (تخليص الحروف) : Isoler chaque consonne pour que le lourd ne contamine pas le léger dans « خَلَقَ » !"
            ],
            "subrules": [
                {
                    "id": "istila-7-degrees",
                    "nameFr": "1. Les 7 Lettres d'Isti'lā' (خُصَّ ضَغۡطٍ قِظۡ) & Leurs 5 Degrés",
                    "nameAr": "حُرُوفُ الاسْتِعْلَاءِ السَّبْعَةِ وَمَرَاتِبُ التَّفْخِيمِ الخَمْسُ",
                    "mnemonic": "Formule « خُصَّ ضَغْطٍ قِظْ » | Les 4 souveraines d'Itbāq : ص, ض, ط, ظ | 5 Degrés d'intensité",
                    "letters": ["خ", "ص", "ض", "غ", "ط", "ق", "ظ"],
                    "definitionFr": "L'Isti'lā' (élévation) est la montée de la racine et du dos de la langue vers le voile du palais lors de l'émission sonore, provoquant une résonance ample et grave appelée Tafkhīm. Les 7 lettres de « Khuṣṣa Ḍaghṭin Qiz » sont constamment lourdes, avec une hiérarchie de 5 degrés de puissance.",
                    "definitionLughatan": {
                        "ar": "الاسْتِعْلَاءُ: العُلُوُّ وَالارْتِفَاعُ. التَّفْخِيمُ: التَّسْمِينُ وَالتَّعْظِيمُ.",
                        "fr": "Isti'lā' : l'élévation et la hauteur. Tafkhīm : l'engraissement et la magnification."
                    },
                    "definitionIstilahan": {
                        "ar": "تَصَاعُدُ صَوْتِ الحَرْفِ عِنْدَ النُّطْقِ بِهِ إِلَى الحَنَكِ الأَعْلَى. وَالتَّفْخِيمُ: رَبْوٌ يَدْخُلُ عَلَى صَوْتِ الحَرْفِ فَيَمْتَلِئُ الفَمُ بِصَدَاهُ.",
                        "fr": "L'ascension du son de la consonne vers le palais supérieur. Le Tafkhīm est l'épaississement qui emplit toute la cavité buccale de son écho majestueux."
                    },
                    "mechanismFr": "Élevez la base postérieure de la langue vers le palais mou tout en creusant légèrement le centre de la langue. Ne projetez JAMAIS les lèvres en rond (interdiction absolue d'ajouter un 'O' artificiel).",
                    "physiologicalDetails": {
                        "tongue": "Élévation marquée de la racine de la langue (Isti'lā') ; écrasement plaqué contre la voûte pour les 4 lettres d'Itbāq (ص, ض, ط, ظ).",
                        "lips": "Parfaitement neutres ! L'arrondissement des lèvres est une erreur majeure réservée à la Dammah.",
                        "vocalCords": "Vibration pleine.",
                        "airflow": "Réverbération caverneuse dans la cavité buccale élargie."
                    },
                    "phoneticReasonFr": "L'élévation linguale réduit le volume supérieur et crée une caisse de résonance pharyngienne qui abaisse la fréquence fondamentale du son, produisant le timbre grave et noble des consonnes sémitiques.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَحَرْفَ الاسْتِعْلَاءِ فَخِّمْ وَاخْصُصَا * الاِطْبَاقَ أَقْوَى نَحْوُ قَالَ وَالعَصَا\nوَبَيِّنِ الإِطْبَاقَ مِنْ أَحَطتُ مَعْ * بَسَطتَ وَالخُلْفُ بِنَخْلُقكُّمْ وَقَعْ",
                        "transliteration": "Wa harfa-l-isti'lā'i fakhkhim wakhsusā * Al-itbāqa aqwā nahwu Qāla wal-'Asā / Wa bayyini-l-itbāqa min Ahattu ma' * Basatta wal-khulfu bi-Nakhluqkum waqa'",
                        "translationFr": "« Donne de l'emphase aux lettres d'Isti'lā', et accorde aux lettres d'Itbāq une force supérieure comme dans 'Qāla' et 'Al-'Asā' ! » (Verset 55)",
                        "chapterNameAr": "بَابُ التَّفْخِيمِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c12-1",
                            "arabicText": "قَالَ إِنَّى عَبۡدُ ٱللَّهِ",
                            "surahAyahRef": "19:30",
                            "surahNameFr": "Maryam",
                            "highlightSegment": "قَالَ",
                            "highlightLetter": "قَا (Degré 1 : Fathah + Alif)",
                            "ruleApplied": "Tafkhīm au Degré Suprême",
                            "ruleTag": "heavy",
                            "explanationFr": "Le Qāf porte une Fathah suivie d'un Alif : il atteint le degré 1, le plus haut niveau d'emphase du Coran : « Qāla ».",
                            "transliteration": "Qāla innī 'Abdu-Llāh",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/019030.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : avancer et arrondir les lèvres en forme de 'O' pour faire une lettre lourde sans Dammah (ex: dire 'Khol' au lieu de 'Qāla').",
                            "correctionFr": "L'emphase se crée exclusivement à l'arrière de la langue, jamais avec les lèvres. Gardez les lèvres immobiles."
                        }
                    ]
                },
                {
                    "id": "raa-simulator-mastery",
                    "nameFr": "2. Le Grand Simulateur de la Râ' (8 Tafkhīm, 4 Tarqīq, Cas au Choix)",
                    "nameAr": "أَحْكَامُ الرَّاءِ الكَامِلَةُ (8 تَفْخِيمٍ، 4 تَرْقِيقٍ، وَجَوَازُ الوَجْهَيْنِ)",
                    "mnemonic": "Râ' = Lourde par défaut ! | 8 Cas de Tafkhīm | 4 Portes de Finesse (Kasrah) | Jawāz (فِرْقٍ، مِصْرَ، القِطْرِ)",
                    "letters": ["ر"],
                    "definitionFr": "La consonne Râ' (ر) est la lettre la plus versatile du Tajwīd. Par essence, elle est lourde et majestueuse (Tafkhīm dans 8 situations) ; elle ne s'amincit (Tarqīq) que dans 4 portes codifiées gouvernées par la Kasrah ou le Yā' ; et elle admet les deux options au choix dans une poignée de mots exceptionnels.",
                    "definitionLughatan": {
                        "ar": "التَّرْقِيقُ: التَّنْحِيفُ وَضِدُّ التَّغْلِيظِ. التَّفْخِيمُ: التَّعْظِيمُ.",
                        "fr": "Tarqīq : l'amincissement soyeux. Tafkhīm : l'emphase majestueuse."
                    },
                    "definitionIstilahan": {
                        "ar": "أَحْكَامُ الرَّاءِ فِي حَالَتَيِ الوَصْلِ وَالوَقْفِ: فَتُفَخَّمُ فِي 8 حَالَاتٍ، وَتُرَقَّقُ فِي 4 حَالَاتٍ، وَيَجُوزُ فِيهَا الوَجْهَانِ فِي كَلِمَاتٍ مَخْصُوصَةٍ.",
                        "fr": "Les règles de la lettre Râ en liaison et à l'arrêt : emphase dans 8 cas, amincissement dans 4 cas, et double visage permis dans des contextes spécifiques."
                    },
                    "mechanismFr": "Pour la Râ' mufakhkhamah (lourde) : élevez le dos de la langue vers le palais avec un seul battement apico-alvéolaire (Takrīr masqué). Pour la Râ' muraqqaqah (fine) : abaissez la langue et souriez en prononçant la voyelle Kasrah.",
                    "physiologicalDetails": {
                        "tongue": "Élévation de la racine linguale pour le Tafkhīm ; abaissement complet pour le Tarqīq ; la pointe ne doit vibrer qu'une seule fois sans roulement continu !",
                        "lips": "Neutres.",
                        "vocalCords": "Vibration sonore régulière (Jahr).",
                        "airflow": "Déviation bilatérale de l'air."
                    },
                    "phoneticReasonFr": "La Râ' subit l'influence acoustique de son environnement vocalique : la Fathah et la Dammah orientent le son vers le haut (emphase), tandis que la Kasrah et le Yā' l'attirent vers le bas (amincissement).",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَرَقِّقِ الرَّاءَ إِذَا مَا كُسِرَتْ * كَذَاكَ بَعْدَ الكَسْرِ حَيْثُ سَكَنَتْ\nإِنْ لَمْ تَكُنْ مِنْ قَبْلِ حَرْفِ اسْتِعْلَا * أَوْ كَانَتِ الكَسْرَةُ لَيْسَتْ أَصْلَا\nوَالخُلْفُ فِي فِرْقٍ لِكَسْرٍ يُوجَدُ * وَأَخْفِ تَكْرِيراً إِذَا تُشَدَّدُ",
                        "transliteration": "Wa raqqiqi-r-rā'a idhā mā kusirat * Kadhāka ba'da-l-kasri haythu sakanat / In lam takun min qabli harfi-sti'lā * Aw kānati-l-kasratu laysat aslā / Wal-khulfu fī Firqin li-kasrin yūjadu * Wa akhfi takrīran idhā tushaddadu",
                        "translationFr": "« Et amincis la Râ' lorsqu'elle porte une Kasrah, de même après une Kasrah lorsqu'elle est sans voyelle, pourvu qu'elle ne précède pas une lettre d'Isti'lā' ou que la Kasrah ne soit pas occasionnelle. Une divergence existe dans 'Firq' en raison de la Kasrah ; et masque le roulement excessif (Takrīr) lorsqu'elle est doublée. » (Versets 59-61)",
                        "chapterNameAr": "بَابُ الرَّاءَاتِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c12-2",
                            "arabicText": "فَرِحِينَ بِمَآ ءَاتَىٰهُمُ ٱللَّهُ مِن فَضۡلِهِۦ",
                            "surahAyahRef": "3:170",
                            "surahNameFr": "Āl 'Imrān",
                            "highlightSegment": "فَرِحِينَ",
                            "highlightLetter": "رِ (Tarqīq direct)",
                            "ruleApplied": "Tarqīq par Kasrah directe",
                            "ruleTag": "izhar",
                            "explanationFr": "La Râ' porte directement une voyelle Kasrah (ـِ) : elle s'amincit instantanément avec douceur : « Farihīna ».",
                            "transliteration": "Farihīna",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/003170.mp3"
                        },
                        {
                            "id": "ex-c12-3",
                            "arabicText": "كِتَٰبٗا فِى قِرۡطَاسٖ فَلَمَسُوهُ",
                            "surahAyahRef": "6:7",
                            "surahNameFr": "Al-An'ām",
                            "highlightSegment": "قِرۡطَاسٖ",
                            "highlightLetter": "رۡطَ (Tafkhīm exceptionnel)",
                            "ruleApplied": "Tafkhīm malgré Kasrah (suivie de Tā' lourd)",
                            "ruleTag": "heavy",
                            "explanationFr": "Bien que précédée d'une Kasrah, la Râ' reste obligatoirement LOURDE car elle est immédiatement suivie de la consonne d'Itbāq Tā' (ط) avec Fathah dans le même mot.",
                            "transliteration": "Qirṭās",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/006007.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : rouler la Râ' au fond de la gorge (R uvulaire ou grasseyé français) au lieu de battre la langue sur le palais antérieur.",
                            "correctionFr": "Placez la pointe de la langue sur les gencives supérieures : la Râ' arabe est exclusivement apico-alvéolaire !"
                        },
                        {
                            "trapFr": "Faire un roulement de mitraillette en laissant trembler la langue (Takrīr excessif).",
                            "correctionFr": "Ibn Al-Jazarī ordonne : « Masque le Takrīr ». Bloquez la langue après un seul battement ferme."
                        }
                    ]
                },
                {
                    "id": "takhlees-al-huroof",
                    "nameFr": "3. Takhlees Al-Hurūf : L'Art de la Décontamination Phonétique",
                    "nameAr": "تَخْلِيصُ الحُرُوفِ المُسْتَفِلَةِ مِنَ المُسْتَعْلِيَةِ",
                    "mnemonic": "Ne jamais laisser une lettre lourde contaminer son voisin léger (خَلَقَ -> Kha-la-qa, et non Kha-lâ-qa)",
                    "letters": [],
                    "definitionFr": "Takhlees Al-Hurūf (la délivrance et la purification des lettres) est la marque suprême des récitateurs d'élite. Il consiste à isoler anatomiquement chaque consonne au sein d'un même mot, afin qu'une lettre lourde (Mufakhkhamah) ne contamine pas la lettre fine voisine (Muraqqaqah).",
                    "definitionLughatan": {
                        "ar": "التَّخْلِيصُ: التَّنْقِيَةُ وَالتَّمْيِيزُ وَفَصْلُ الشَّيْءِ عَمَّا يُخَالِطُهُ.",
                        "fr": "L'épuration, la purification et la séparation nette des mélanges."
                    },
                    "definitionIstilahan": {
                        "ar": "تَخْلِيصُ الحَرْفِ المُرَقَّقِ مِنْ مُجَاوَرَةِ الحَرْفِ المُفَخَّمِ دُونَ أَنْ يَسْرِيَ إِلَيْهِ التَّفْخِيمُ.",
                        "fr": "Préserver la consonne amincie de l'influence de la consonne emphatique contiguë, sans que l'emphase ne déteigne sur elle."
                    },
                    "mechanismFr": "Dans « Khalaqa » (خَلَقَ) : élevez la racine sur le Khā (lourd), abaissez instantanément la langue et souriez sur le Lām (fin), puis remontez avec puissance sur le Qāf (lourd).",
                    "physiologicalDetails": {
                        "tongue": "Agilité extrême : bascule verticale en une fraction de seconde de la position haute vers la position basse.",
                        "lips": "Neutres.",
                        "vocalCords": "Vibration modulée.",
                        "airflow": "Flux continu sans interruption."
                    },
                    "phoneticReasonFr": "L'inertie musculaire pousse naturellement la langue à rester haute pour les deux lettres qui entourent le Lām. Le Takhlees rétablit la justice phonétique due à chaque consonne.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "فَرَقِّقَنْ مُسْتَفِلاً مِنْ أَحْرُفِ * وَحَاذِرَنْ تَفْخِيمَ لَفْظِ الأَلِفِ\nكَهَمْزِ أَلْحَمْدُ أَعُوذُ إِهْدِنَا * أَللَّهَ ثُمَّ لَامِ لِلَّهِ لَنَا\nوَبَاءِ بُرْقٍ بَاطِلٍ بِهِمْ بِذِي * وَاحْرِصْ عَلَى الشِّدَّةِ وَالجَهْرِ الَّذِي\nفِيهَا وَفِي الجِيمِ كَـ حَبِّ الصَّبْرِ * وَرَبْوَةٍ اجْتُثَّتْ وَحَجِّ الفَجْرِ",
                        "transliteration": "Fa-raqqiqan mustafilan min ahrufi * Wa hādhiran tafkhīma lafzi-l-alifi / Ka-hamzi Al-hamdu A'ūdhu Ihdinā * Allāha thumma lāmi Lillāhi lanā / Wa bā'i burqin bātilin bihim bidhī * Wahriss 'alā-sh-shiddati wal-jahri-l-ladhī / Fīhā wa fil-jīmi ka-habbi-s-sabri * Wa rabwatin-jtuththat wa hajji-l-fajri",
                        "translationFr": "« Amincis toujours les lettres d'abaissement (Mustafilah), et prends bien garde d'épaissir le son de l'Alif, comme la Hamzah de 'Al-Hamdu', 'A'ūdhu', 'Ihdinā', ainsi que la Lām de 'Lillāh' et 'Lanā'... » (Versets 49-51)",
                        "chapterNameAr": "بَابُ التَّرْقِيقِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c12-4",
                            "arabicText": "ٱلَّذِى خَلَقَكَ فَسَوَّىٰكَ فَعَدَلَكَ",
                            "surahAyahRef": "82:7",
                            "surahNameFr": "Al-Infitār",
                            "highlightSegment": "خَلَقَكَ",
                            "highlightLetter": "خَ (lourd) + لَ (fin) + قَ (lourd)",
                            "ruleApplied": "Takhlees Al-Hurūf",
                            "ruleTag": "heavy",
                            "explanationFr": "Le Khā est lourd, le Lām est fin, le Qāf est lourd. Votre langue doit s'abaisser en une fraction de seconde pour préserver la clarté du Lām sans jamais dire « Kha-lâ-qa » !",
                            "transliteration": "Khalaqaka",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/082007.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : prononcer « Khalaqa » comme « Kha-lâ-qa » avec un Lām lourd déformé.",
                            "correctionFr": "Prononcez le mot au ralenti : « Kha » (lourd), puis souriez franchement sur « La » (fin), avant de refermer sur « Qa » (lourd)."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c12-1",
                    "title": "Chirurgie de décontamination : « سَلَقُوكُم بِأَلْسِنَةٍ »",
                    "verseArabic": "سَلَقُوكُم بِأَلۡسِنَةٍ حِدَادٍ أَشِحَّةً عَلَى ٱلۡخَيۡرِ",
                    "surahAyahRef": "33:19",
                    "targetSegment": "سَلَقُوكُم",
                    "promptFr": "Comment devez-vous prononcer le Sīn (س) et le Lām (ل) qui précèdent le Qāf (ق) lourd ?",
                    "hintFr": "Attention à ne pas transformer le Sīn en Sād sous l'influence du Qāf !",
                    "solutionFr": "En préservant l'amincissement strict du Sīn et du Lām avant d'élever la voix sur le Qāf",
                    "breakdownSteps": [
                        "Le Sīn est une lettre légère (Mustafilah).",
                        "Le Lām est également légère.",
                        "Le Qāf qui suit est une lettre lourde d'Isti'lā'.",
                        "On doit garder le sourire sur « Sala- » avant de monter sur « -qūkum »."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/033019.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c12-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe : Dans quel mot unique du Coran la Râ' sākinah admet-elle les deux visages (Tafkhīm ou Tarqīq au choix) en liaison en raison de la Kasrah sur la lettre lourde suivante ?",
                    "verseArabic": "فَانفَلَقَ فَكَانَ كُلُّ فِرۡقٖ كَٱلطَّوۡدِ ٱلۡعَظِيمِ",
                    "options": [
                        "فِرْقٍ (Sourate Ach-Chou'ara 63)",
                        "مِرْصَاداً",
                        "قِرْطَاسٍ",
                        "فِرْعَوْنَ"
                    ],
                    "correctAnswer": "فِرْقٍ (Sourate Ach-Chou'ara 63)",
                    "explanationFr": "Dans « Firq », la lettre d'Isti'lā' qui suit est le Qāf avec une Kasrah brisée : Ibn Al-Jazarī dit « وَالخُلْفُ فِي فِرْقٍ لِكَسْرٍ يُوجَدُ » (Une divergence existe dans Firq en raison de la Kasrah). Les deux voies sont permises.",
                    "ruleId": "raa-simulator-mastery"
                },
                {
                    "id": "q-c12-2",
                    "type": "error_detect",
                    "promptFr": "Dans « فِى قِرْطَاسٍ فَلَمَسُوهُ », un lecteur amincit la Râ' (Tarqīq) sous prétexte qu'elle est précédée d'une Kasrah. Quelle est l'erreur ?",
                    "verseArabic": "كِتَٰبٗا فِى قِرۡطَاسٖ فَلَمَسُوهُ",
                    "targetWord": "قِرۡطَاسٖ",
                    "surahAyahRef": "6:7",
                    "options": [
                        "Lahn Khafī : La Râ' est obligatoirement LOURDE (Tafkhīm) car elle est suivie d'une lettre d'Isti'lā' (le Tā' ط) avec Fathah dans le même mot !",
                        "Récitation autorisée",
                        "Madd Lāzim négligé",
                        "Erreur sur le Sīn"
                    ],
                    "correctAnswer": "Lahn Khafī : La Râ' est obligatoirement LOURDE (Tafkhīm) car elle est suivie d'une lettre d'Isti'lā' (le Tā' ط) avec Fathah dans le même mot !",
                    "explanationFr": "L'obstacle majeur au Tarqīq est la présence d'une lettre d'Isti'lā' non-kasrah dans le même mot (comme dans Qirṭās, Mirsād, Firqah). La Râ' redevient obligatoirement lourde.",
                    "ruleId": "raa-simulator-mastery"
                },
                {
                    "id": "q-c12-3",
                    "type": "error_detect",
                    "promptFr": "Dans « وَاللَّيْلِ إِذَا يَسْرِ » (Al-Fajr 4), comment peut-on lire la Râ' lors de l'arrêt selon le livre « التجويد المبسط » ?",
                    "verseArabic": "وَٱلَّيۡلِ إِذَا يَسۡرِ",
                    "targetWord": "يَسۡرِ",
                    "surahAyahRef": "89:4",
                    "options": [
                        "Les deux visages sont permis à l'arrêt : le Tarqīq (en considérant le Yā' supprimé dans le tracé) ou le Tafkhīm (en considérant le Sīn sākin précédé de Fathah)",
                        "Uniquement l'emphase",
                        "Uniquement l'amincissement",
                        "La Râ' devient muette"
                    ],
                    "correctAnswer": "Les deux visages sont permis à l'arrêt : le Tarqīq (en considérant le Yā' supprimé dans le tracé) ou le Tafkhīm (en considérant le Sīn sākin précédé de Fathah)",
                    "explanationFr": "Le livre arabe détaille précisément les mots comme « Yasr » et « Asr » : l'origine est « Yasrī » avec un Yā' élidé dans le Rasm, d'où la permission de conserver le Tarqīq à la pause.",
                    "ruleId": "raa-simulator-mastery"
                }
            ]
        }
    ]
