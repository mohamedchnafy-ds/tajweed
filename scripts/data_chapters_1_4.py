# -*- coding: utf-8 -*-
"""
Enriched Chapters 1 to 4:
- Chapter 1: Concepts Fondamentaux & Le Lahn (Erreurs)
- Chapter 2: Symboles Coraniques & Ponctuation (Rasm & Signes)
- Chapter 3: Arrêt & Reprise (Waqf & Ibtidā')
- Chapter 4: Les Prolongations I (Madd Naturel & Dérivés)
"""

def get_chapters_1_4():
    return [
        # ==========================================
        # CHAPITRE 1 : CONCEPTS FONDAMENTAUX & LAHN
        # ==========================================
        {
            "id": "chap-1",
            "number": 1,
            "slug": "basic-concepts",
            "titleFr": "Concepts Fondamentaux & Le Lahn (Erreurs)",
            "titleAr": "المَفَاهِيمُ الأَسَاسِيَّةُ وَأَنْوَاعُ اللَّحْنِ",
            "category": "beginner",
            "estimatedMinutes": 15,
            "isPilotChapter": True,
            "summaryFr": "Comprendre ce qu'est le Tajwīd (لغةً واصطلاحاً), son obligation religieuse (Farḍ 'Ayn vs Farḍ Kifāyah), comment éradiquer le Lahn Jalī (erreur majeure altérant le sens) et le Lahn Khafī (défaut d'embellissement), le graphisme sacré du Rasm 'Uthmānī et les deux conditions d'acceptation de la récitation.",
            "infographicPoints": [
                "Définition du Tajwīd : Linguistiquement l'embellissement (التَّحْسِين). Techniquement : donner à chaque lettre son point d'articulation (Makhraj) et ses caractéristiques (Sifāt).",
                "Application pratique du Tajwīd = Farḍ 'Ayn (obligation individuelle pour chaque lecteur). L'étude théorique des définitions est Farḍ Kifāyah.",
                "Al-Lahn Al-Jalī (اللحن الجلي) : Erreur évidente altérant le mot ou le sens (ex: An'amtu au lieu de An'amta). C'est un péché (Harām) et cela peut invalider la prière !",
                "Al-Lahn Al-Khafī (اللحن الخفي) : Erreur subtile liée à la perfection esthétique (ex: raccourcir un Madd de 4 à 2 temps, oublier une Ghunnah). Déconseillé (Makrūh).",
                "Rasm 'Uthmānī : L'orthographe révélée établie sous le calife 'Uthmān (ex: ٱلصَّلَوٰةَ s'écrit avec un Wāw).",
                "Deux conditions d'acceptation : 1. L'Intention sincère (Ikhlās) exclusivement pour Allah. 2. La conformité au Tartīl prophétique."
            ],
            "subrules": [
                {
                    "id": "tajweed-definition",
                    "nameFr": "1. Qu'est-ce que le Tajwīd & Statut Juridique",
                    "nameAr": "تَعْرِيفُ التَّجْوِيدِ وَحُكْمُهُ الشَّرْعِيُّ",
                    "mnemonic": "Pratique = Farḍ 'Ayn (Individuelle) | Théorie = Farḍ Kifāyah (Communautaire)",
                    "letters": [],
                    "definitionFr": "Le mot Tajwīd vient de la racine « Jawwada » (جَوَّدَ) signifiant parfaire et embellir. Dans la tradition coranique, il désigne la science canonique qui préserve la parole divine de toute altération phonétique en attribuant à chaque consonne et voyelle son droit strict (Haqq) et son mérite (Mustahaqq).",
                    "definitionLughatan": {
                        "ar": "التَّحْسِينُ وَالتَّجْمِيلُ، يُقَالُ: جَوَّدَ الشَّيْءَ إِذَا أَتَى بِهِ جَيِّداً حَسَناً.",
                        "fr": "L'embellissement et le perfectionnement absolu d'une chose."
                    },
                    "definitionIstilahan": {
                        "ar": "إِخْرَاجُ كُلِّ حَرْفٍ مِنْ مَخْرَجِهِ الصَّحِيحِ مَعَ إِعْطَائِهِ حَقَّهُ (صِفَاتِهِ اللَّازِمَةِ) وَمُسْتَحَقَّهُ (صِفَاتِهِ العَارِضَةِ).",
                        "fr": "Extraire chaque lettre de son point d'articulation exact tout en lui octroyant ses caractéristiques intrinsèques (Haqq : sonorité, emphase, etc.) et ses caractéristiques accidentelles (Mustahaqq : Ghunnah, Idghām, etc.)."
                    },
                    "mechanismFr": "La prononciation coranique s'appuie sur une discipline physique globale : détente du larynx, mâchoire souple sans crispation, appui précis de la langue sur les zones de contact (gencives, palais, dents) et canalisation contrôlée du souffle pulmonaire soit dans la cavité buccale (Jawf), soit dans la cavité nasale (Khayshūm).",
                    "physiologicalDetails": {
                        "tongue": "Positionnée avec précision sur le point de contact palatin sans écrasement parasite ni crispation de la racine.",
                        "lips": "Mobilisées de manière ciblée : ouverture verticale pour la Fathah, arrondissement sans forcer pour la Dammah, étirement souple pour la Kasrah.",
                        "vocalCords": "Vibration sonore régulière (Jahr) pour les lettres sonores, relâchement contrôlé (Hams) pour les lettres soufflées.",
                        "airflow": "Canalisation stricte du flux d'air selon que la lettre exige une résonance buccale pure ou une résonance nasale (Ghunnah)."
                    },
                    "phoneticReasonFr": "Le Coran a été révélé dans la langue arabe la plus pure et la plus musicale. Le Tajwīd n'est pas un artifice mélodique moderne : c'est le moule phonologique précis dans lequel le Prophète ﷺ a reçu la révélation de Jibrīl. Respecter ces règles garantit la préservation intégrale du message à travers les siècles.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَالأَخْذُ بِالتَّجْوِيدِ حَتْمٌ لَازِمُ * مَنْ لَمْ يُجَوِّدِ القُرْآنَ آثِمُ\nلِأَنَّهُ بِهِ الإِلَهُ أَنْزَلَا * وَهَكَذَا مِنْهُ إِلَيْنَا وَصَلَا",
                        "transliteration": "Wal-akhdhu bit-tajwīdi hatmun lāzimu * Man lam yujawwidi-l-Qur'āna āthimu / Li'annahū bihi-l-Ilāhu anzalā * Wa hākadhā minhu ilaynā wasalā",
                        "translationFr": "« L'application du Tajwīd est une obligation absolue ; quiconque ne rectifie pas sa récitation du Coran commet un péché. Car c'est ainsi qu'Allah l'a révélé, et c'est ainsi qu'il nous est parvenu. » (Versets 27-28)",
                        "chapterNameAr": "بَابُ الأَخْذِ بِالتَّجْوِيدِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c1-1",
                            "arabicText": "وَرَتِّلِ ٱلۡقُرۡءَانَ تَرۡتِيلًا",
                            "surahAyahRef": "73:4",
                            "surahNameFr": "Al-Muzzammil",
                            "highlightSegment": "وَرَتِّلِ",
                            "highlightLetter": "Ordre divin",
                            "ruleApplied": "Obligation du Tartīl (Récitation posée)",
                            "ruleTag": "izhar",
                            "explanationFr": "Allah ordonne formellement de réciter le Coran avec Tartīl (lentement, posément et en articulant chaque lettre). 'Alī ibn Abī Tālib a défini le Tartīl ainsi : « Le perfectionnement des lettres et la connaissance des règles d'arrêt ».",
                            "transliteration": "Wa rattili-l-Qur'āna tartīlā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/073004.mp3"
                        },
                        {
                            "id": "ex-c1-2",
                            "arabicText": "ٱلَّذِينَ ءَاتَيۡنَٰهُمُ ٱلۡكِتَٰبَ يَتۡلُونَهُۥ حَقَّ تِلَاوَتِهِۦٓ",
                            "surahAyahRef": "2:121",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "حَقَّ تِلَاوَتِهِۦٓ",
                            "highlightLetter": "Droit de récitation",
                            "ruleApplied": "Récitation selon la norme divine",
                            "ruleTag": "heavy",
                            "explanationFr": "Réciter « comme il mérite d'être récité » signifie respecter les articulations sonores sans altérer les sons et méditer la signification spirituelle des versets.",
                            "transliteration": "Yatlūnahū haqqa tilāwatih",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002121.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : penser que le Tajwīd se limite à 'chanter' ou ajouter un vibrato artistique.",
                            "correctionFr": "Le Tajwīd est d'abord une science d'ingénierie phonétique et anatomique. Corrigez d'abord le placement de la langue et la clarté des voyelles avant tout embellissement vocal."
                        },
                        {
                            "trapFr": "Confondre l'obligation pratique (Farḍ 'Ayn) et le savoir théorique (Farḍ Kifāyah).",
                            "correctionFr": "Chaque musulman doit savoir prononcer les lettres et voyelles sans distorsion dans sa prière quotidienne ; la connaissance des définitions académiques incombe aux spécialistes."
                        }
                    ]
                },
                {
                    "id": "lahn-types",
                    "nameFr": "2. Les Deux Types d'Erreurs : Lahn Jalī vs Lahn Khafī",
                    "nameAr": "اللَّحْنُ الجَلِيُّ وَاللَّحْنُ الخَفِيُّ",
                    "mnemonic": "Jalī = Erreur Majeure (Harām / Altère la structure ou le sens) | Khafī = Erreur Subtile (Makrūh / Altère l'esthétique)",
                    "letters": [],
                    "definitionFr": "Le mot Lahn (لَحْن) signifie en arabe le dérapage ou l'écart par rapport à la rectitude. En Tajwīd, il se divise catégoriquement en deux ordres de gravité : le Lahn Jalī (évident, connu de tous les arabophones, formellement interdit) et le Lahn Khafī (subtil, perceptible uniquement par les maîtres du Tajwīd).",
                    "definitionLughatan": {
                        "ar": "الخَطَأُ وَالمَيْلُ عَنِ الصَّوَابِ، وَمِنْهُ قَوْلُهُمْ: لَحَنَ فِي كَلَامِهِ إِذَا خَالَفَ قَوَاعِدَ اللُّغَةِ.",
                        "fr": "L'erreur, l'écart et l'éloignement par rapport à la rectitude grammaticale ou phonétique."
                    },
                    "definitionIstilahan": {
                        "ar": "الجَلِيُّ: خَطَأٌ يَطْرَأُ عَلَى الأَلْفَاظِ فَيُخِلُّ بِعُرْفِ اللُّغَةِ مَبْنًى وَمَعْنًى (حَرَامٌ). الخَفِيُّ: خَطَأٌ يَطْرَأُ عَلَى الأَلْفَاظِ فَيُخِلُّ بِعُرْفِ الأَدَاءِ دُونَ المَعْنَى (مَكْرُوهٌ).",
                        "fr": "Lahn Jalī : erreur grossière altérant la structure du mot ou la grammaire, qu'elle change le sens ou non. Lahn Khafī : erreur d'embellissement qui ne modifie ni la grammaire ni le sens."
                    },
                    "mechanismFr": "Le Lahn Jalī se produit lorsqu'une consonne est remplacée par une autre (ex: Tā' remplacé par Tâ' ou Dâl), qu'une voyelle est changée (Fathah -> Dammah), ou qu'un soukoûn est transformé en voyelle. Le Lahn Khafī provient d'un mauvais dosage temporel (Madd écourté, Ghunnah raccourcie ou omise, abandon de la Qalqalah).",
                    "physiologicalDetails": {
                        "tongue": "Éviter la paresse linguale qui fait glisser une lettre emphatique vers une lettre légère (ex: Sād vers Sīn, ou Tā' vers Tâ').",
                        "lips": "Éviter d'arrondir les lèvres sur une consonne sans Dammah (erreur française fréquente) ou de négliger l'ouverture franche sur la Fathah.",
                        "vocalCords": "Ne pas bloquer le souffle sur les lettres soufflées (Hams : Tā', Kāf, Sīn, Thā') pour ne pas les transformer en consonnes lourdes occlusives.",
                        "airflow": "Maintenir un souffle régulier sans saccades émotionnelles qui altèrent la justesse des durées (Harakāt)."
                    },
                    "phoneticReasonFr": "En arabe, la voyelle finale porte la fonction grammaticale (sujet, complément, possession). Remplacer une voyelle inverse l'acteur et le bénéficiaire de l'action. Sur le plan théologique, une telle faute dans la Fātihah peut attribuer un attribut divin à la créature !",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَهُوَ أَيْضاً حِلْيَةُ التِّلَاوَةِ * وَزِينَةُ الأَدَاءِ وَالقِرَاءَةِ\nوَهُوَ إِعْطَاءُ الحُرُوفِ حَقَّهَا * مِنْ كُلِّ نَعْتٍ وَمُسْتَحَقَّهَا",
                        "transliteration": "Wa huwa aydan hilyatu-t-tilāwati * Wa zīnatu-l-adā'i wal-qirā'ati / Wa huwa i'tā'u-l-hurūfi haqqahā * Min kulli na'tin wa mustahaqqahā",
                        "translationFr": "« Le Tajwīd est la parure de la récitation et l'ornement de la lecture ; il consiste à rendre à chaque lettre son droit absolu parmi ses qualités inhérentes et accidentelles. » (Versets 29-30)",
                        "chapterNameAr": "بَابُ صِفَاتِ الحُرُوفِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c1-3",
                            "arabicText": "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ",
                            "surahAyahRef": "1:7",
                            "surahNameFr": "Al-Fātihah",
                            "highlightSegment": "أَنۡعَمۡتَ",
                            "highlightLetter": "تَ (Fathah)",
                            "ruleApplied": "Piège critique de Lahn Jalī",
                            "ruleTag": "qalqalah",
                            "explanationFr": "« An'amta » avec Fathah signifie : « Ceux que Tu (Allah) as comblés ». Si un lecteur dit par mégarde « An'amtu » avec Dammah, le sens devient sacrilège : « Ceux que J'AI comblés », s'attribuant ainsi l'acte divin !",
                            "transliteration": "An'amta 'alayhim",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/001007.mp3"
                        },
                        {
                            "id": "ex-c1-4",
                            "arabicText": "وَلَقَدۡ زَيَّنَّا ٱلسَّمَآءَ ٱلدُّنۡيَا بِمَصَٰبِيحَ",
                            "surahAyahRef": "67:5",
                            "surahNameFr": "Al-Mulk",
                            "highlightSegment": "ٱلسَّمَآءَ",
                            "highlightLetter": "Madd Wājib (4-5 temps)",
                            "ruleApplied": "Exemple de Lahn Khafī",
                            "ruleTag": "madd",
                            "explanationFr": "Le mot « As-Samā' » requiert une élongation obligatoire de 4 à 5 temps. Raccourcir ce Madd à 2 temps ne change pas le sens du mot (« le ciel »), mais constitue un Lahn Khafī (faute esthétique blâmable).",
                            "transliteration": "Zayyannā-s-samā'a-d-dunyā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/067005.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : prononcer les voyelles courtes [a], [i], [u] de manière étirée ou approximative comme en français familier (ex: prononcer 'an'amte' ou 'an'amti').",
                            "correctionFr": "Verrouillez la pureté de la voyelle Fathah [a] nette et franche, sans la transformer en 'é' ou en voyelle neutre française [ə]."
                        },
                        {
                            "trapFr": "Confondre des consonnes proches : prononcer un Sīn léger (س) au lieu d'un Sād lourd (ص), ou un Tā' français au lieu d'un Tā' lourd (ط) dans « يَطْبَعُ » -> « يَفْبَعُ ».",
                            "correctionFr": "Élevez l'arrière de la langue vers le voile du palais pour les lettres emphatiques afin d'éviter tout Lahn Jalī par substitution de consonne."
                        }
                    ]
                },
                {
                    "id": "quran-mushaf-rasm",
                    "nameFr": "3. Qur'ān vs Muṣ-ḥaf & Le Rasm 'Uthmānī",
                    "nameAr": "القُرْآنُ وَالمُصْحَفُ وَالرَّسْمُ العُثْمَانِيُّ",
                    "mnemonic": "Qur'ān = Parole Divine Récitée | Muṣ-ḥaf = Volume Physique Relié | Rasm = Graphisme Sacré",
                    "letters": [],
                    "definitionFr": "Le « Qur'ān » est la parole incréée d'Allah révélée au Prophète ﷺ. Le « Muṣ-ḥaf » est l'ouvrage matériel qui compile les 114 sourates entre deux couvertures. Le Rasm 'Uthmānī est le système orthographique divinement inspiré et codifié par la commission des Compagnons sous la direction de Zayd ibn Thābit.",
                    "definitionLughatan": {
                        "ar": "الرَّسْمُ: الأَثَرُ وَالكِتَابَةُ وَالخَطُّ.",
                        "fr": "L'empreinte, le tracé, l'écriture et le dessin calligraphique."
                    },
                    "definitionIstilahan": {
                        "ar": "خَطُّ الكَلِمَاتِ القُرْآنِيَّةِ وَهِجَاؤُهَا كَمَا كَتَبَهَا الصَّحَابَةُ فِي المَصَاحِفِ العُثْمَانِيَّةِ، وَهُوَ تَوْقِيفِيٌّ لَا يَجُوزُ تَغْيِيرُهُ.",
                        "fr": "L'orthographe spécifique adoptée par les Compagnons dans les exemplaires califaux. Ce tracé sacré est immuable et s'impose à tout éditeur du Coran."
                    },
                    "mechanismFr": "La lecture s'effectue selon la tradition orale transmise de bouche à oreille (Talaqqī), et non selon les règles de la grammaire ou de l'orthographe moderne. Certains mots s'écrivent avec une lettre mais se prononcent avec une autre (ex: ٱلصَّلَوٰةَ s'écrit avec un Wāw et se lit avec un Alif ; ٱلرِّبَوٰاْ s'écrit avec un Wāw).",
                    "physiologicalDetails": {
                        "tongue": "Ne pas articuler la lettre écrite lorsque le symbole suscrit indique qu'elle est muette.",
                        "lips": "Ne pas arrondir les lèvres sur le Wāw muet de ٱلصَّلَوٰةَ ou de ٱلزَّكَوٰةَ.",
                        "vocalCords": "Émettre le son pur de la voyelle longue [ā] sans aucune composante consonantique de [w].",
                        "airflow": "Flux d'air soutenu en continu sur 2 temps de Madd naturel sans interruption."
                    },
                    "phoneticReasonFr": "Le Rasm 'Uthmānī a été conçu sans points diacritiques ni voyelles à l'origine afin de pouvoir porter simultanément les différentes variantes de lectures authentiques (Qirā'āt) transmises par le Prophète ﷺ.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَاقْضِ لِرَسْمِ الخَطِّ فِي الإِمَامِ * حَسْبَمَا ثَبَتَ عَنِ الأَعْلَامِ\nوَاتَّبِعِ المَرْسُومَ فِي الإِثْبَاتِ * وَالحَذْفِ فِي الأَلْفَاظِ وَالآيَاتِ",
                        "transliteration": "Waqdi li-rasmi-l-khatti fi-l-imāmi * Hasbamā thabata 'ani-l-a'lāmi / Wattabi'i-l-marsūma fi-l-ithbāti * Wal-hadhfi fi-l-alfāzi wal-āyāti",
                        "translationFr": "« Conforme-toi au tracé calligraphique du Mushaf Imām selon ce qui a été authentifié par les illustres maîtres, et suis scrupuleusement le texte écrit quant au maintien ou à l'omission des lettres. »",
                        "chapterNameAr": "بَابُ الرَّسْمِ العُثْمَانِيِّ"
                    },
                    "examples": [
                        {
                            "id": "ex-c1-5",
                            "arabicText": "وَأَقِيمُواْ ٱلصَّلَوٰةَ وَءَاتُواْ ٱلزَّكَوٰةَ",
                            "surahAyahRef": "2:43",
                            "surahNameFr": "Al-Baqarah",
                            "highlightSegment": "ٱلصَّلَوٰةَ",
                            "highlightLetter": "وٰ (Wāw surmonté d'Alif)",
                            "ruleApplied": "Rasm 'Uthmānī (Orthographe Sacrée)",
                            "ruleTag": "silent",
                            "explanationFr": "Dans le Mushaf, « As-Salāh » s'écrit avec la consonne Wāw surmontée d'un Alif miniature (خنجرية). On prononce toujours « As-Salāh » et jamais « As-Salawāh ».",
                            "transliteration": "Wa aqīmu-s-Salāta wa ātu-z-Zakāh",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/002043.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Lire phonétiquement les lettres du support graphique : prononcer le son [w] dans « As-Salawāh » ou « Az-Zakawāh ».",
                            "correctionFr": "Repérez le petit Alif miniature posé sur le Wāw : il indique que le Wāw est une simple assise calligraphique muette."
                        }
                    ]
                },
                {
                    "id": "acceptance-conditions",
                    "nameFr": "4. Les Deux Conditions d'Acceptation & Piliers de Lecture",
                    "nameAr": "شَرْطَا قَبُولِ التِّلَاوَةِ وَأَرْكَانُ القِرَاءَةِ الصَّحِيحَةِ",
                    "mnemonic": "1. Intention pure (Ikhlās) + 2. Conformité Sunnah (Tartīl) | 3 Piliers : Sanad + Rasm + Langue Arabe",
                    "letters": [],
                    "definitionFr": "Toute récitation coranique est un acte cultuel supérieur. Pour être agréée par Allah et considérée comme une lecture canonique, elle doit remplir deux conditions spirituelles et trois piliers méthodologiques rigoureux.",
                    "definitionLughatan": {
                        "ar": "القَبُولُ: الرِّضَا بِالشَّيْءِ وَإِثَابَةُ فَاعِلِهِ عَلَيْهِ.",
                        "fr": "L'agrément d'un acte et l'octroi de sa rétribution divine."
                    },
                    "definitionIstilahan": {
                        "ar": "1. الإِخْلَاصُ للهِ تَعَالَى دُونَ رِيَاءٍ. 2. مُطَابَقَةُ السُّنَّةِ وَالتَّلَقِّي بِالمُشَافَهَةِ. وَأَرْكَانُ القِرَاءَةِ: صِحَّةُ السَّنَدِ، وَمُوَافَقَةُ الرَّسْمِ العُثْمَانِيِّ، وَمُوَافَقَةُ اللُّغَةِ العَرَبِيَّةِ.",
                        "fr": "1. L'Ikhlās exclusif pour Allah. 2. La conformité à la transmission prophétique par Mushāfahah (bouche à oreille). Les 3 piliers d'authenticité : chaîne continue (Sanad), conformité au Rasm, conformité à la grammaire arabe."
                    },
                    "mechanismFr": "La récitation coranique ne s'improvise pas seul face au livre : elle exige la transmission vivante par « Mushāfahah » (écoute directe d'un maître compétent qui rectifie les erreurs physiques imperceptibles à la simple lecture visuelle).",
                    "physiologicalDetails": {
                        "tongue": "Entraînée par la répétition orale fréquente (Riyādat al-Lisān) sous l'oreille d'un enseignant qualifié.",
                        "lips": "Postures calquées sur le modèle visuel du professeur.",
                        "vocalCords": "Posées, sans hurlement ni théâtralisation excessive.",
                        "airflow": "Maîtrise de la respiration sans couper les mots de manière saccadée."
                    },
                    "phoneticReasonFr": "Le Coran étant une révélation orale avant d'être un livre écrit, seule la chaîne orale ininterrompue protège le texte des dérives dialectales ou des interprétations subjectives.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "فَكُلُّ مَا وَافَقَ وَجْهَ نَحْوِ * وَكَانَ لِلرَّسْمِ احْتِمَالاً يَحْوِي\nوَصَحَّ إِسْنَاداً هُوَ القُرْآنُ * فَهَذِهِ الثَّلَاثَةُ الأَرْكَانُ",
                        "transliteration": "Fa kullu mā wāfaqa wajha nahwi * Wa kāna lir-rasmi-htimālan yahwī / Wa sahha isnādan huwa-l-Qur'ānu * Fahādhihi-th-thalāthatu-l-arkānu",
                        "translationFr": "« Toute lecture qui concorde avec une règle de grammaire arabe, qui s'accorde avec le tracé du Mushaf et dont la chaîne de transmission est authentique, voilà le vrai Coran ! Tels sont les trois piliers indispensables. »",
                        "chapterNameAr": "بَابُ أَرْكَانِ القِرَاءَةِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c1-6",
                            "arabicText": "قُلۡ إِنَّ صَلَاتِى وَنُسُكِى وَمَحۡيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
                            "surahAyahRef": "6:162",
                            "surahNameFr": "Al-An'ām",
                            "highlightSegment": "لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
                            "highlightLetter": "Intention exclusive",
                            "ruleApplied": "L'Intention Pure (Al-Ikhlās)",
                            "ruleTag": "heavy",
                            "explanationFr": "Toute l'action du croyant, y compris chaque son prononcé, doit être dédiée à Allah sans recherche de gloire terrestre ni d'admiration du public.",
                            "transliteration": "Qul inna salātī wa nusukī wa mahyāya wa mamātī lillāhi rabbi-l-'ālamīn",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/006162.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Se reposer uniquement sur la lecture autodidacte de translitérations phonétiques en alphabet latin.",
                            "correctionFr": "L'alphabet latin est incapable de transcrire les nuances phonétiques sémitiques (Hā' vs Khā', 'Ayn vs Hamzah). L'apprentissage auprès d'un maître ou d'un tuteur est irremplaçable."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c1-1",
                    "title": "Analyse critique : Sūrah Al-Fātihah (1:7)",
                    "verseArabic": "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ",
                    "surahAyahRef": "1:7",
                    "targetSegment": "أَنۡعَمۡتَ",
                    "promptFr": "Pourquoi remplacer la Fathah finale par une Dammah sur « An'amta » est-il considéré comme un péché majeur (Lahn Jalī) ?",
                    "hintFr": "Traduisez le mot avec la Fathah « -ta » (2e personne) puis avec la Dammah « -tu » (1re personne).",
                    "solutionFr": "Altération théologique majeure du sens (Lahn Jalī)",
                    "breakdownSteps": [
                        "« An'amta » (avec Fathah) est à la 2e personne du singulier : « Toi (Allah), Tu as comblé de bienfaits ».",
                        "« An'amtu » (avec Dammah) bascule à la 1re personne du singulier : « J'ai comblé de bienfaits ».",
                        "Le lecteur s'attribue ainsi l'acte divin d'accorder la guidance spirituelle !",
                        "Cette faute déforme le dogme ('Aqīdah) et invalide la prière selon les juristes musulmans."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/001007.mp3"
                },
                {
                    "id": "exo-c1-2",
                    "title": "Identification d'erreur : Changement de consonne dans « يَطْبَعُ »",
                    "verseArabic": "كَذَٰلِكَ يَطۡبَعُ ٱللَّهُ عَلَىٰ قُلُوبِ ٱلۡكَٰفِرِينَ",
                    "surahAyahRef": "7:101",
                    "targetSegment": "يَطۡبَعُ",
                    "promptFr": "Un lecteur prononce la lettre Tā' (ط) comme un Tā' fin (ت), disant « Yatba'u ». Quel est le diagnostic canonique de cette erreur ?",
                    "hintFr": "Remplacer une lettre par une autre lettre est-il un Lahn Jalī ou Khafī ?",
                    "solutionFr": "Lahn Jalī : substitution de consonne par abandon de l'Isti'lā' et de l'Itbāq",
                    "breakdownSteps": [
                        "Le Tā' (ط) est une consonne emphatique et écrasée (Musta'liyah / Mutbaqah).",
                        "Le Tā' (ت) est une consonne légère et ouverte (Mustafilah / Munfatihah).",
                        "Changer la consonne modifie la racine même du mot arabe.",
                        "C'est un Lahn Jalī formellement interdit."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/007101.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c1-1",
                    "type": "mcq",
                    "promptFr": "Selon le livre « التجويد المبسط », quelle est la différence juridique entre la pratique orale du Tajwīd et son apprentissage théorique ?",
                    "verseArabic": "وَرَتِّلِ ٱلۡقُرۡءَانَ تَرۡتِيلًا",
                    "surahAyahRef": "73:4",
                    "options": [
                        "La pratique orale est Farḍ 'Ayn (obligation individuelle) ; la théorie est Farḍ Kifāyah (obligation communautaire)",
                        "La pratique est facultative et la théorie est obligatoire",
                        "Les deux sont Farḍ 'Ayn pour chaque musulman",
                        "Les deux sont une recommandation (Sunnah) sans aucune obligation"
                    ],
                    "correctAnswer": "La pratique orale est Farḍ 'Ayn (obligation individuelle) ; la théorie est Farḍ Kifāyah (obligation communautaire)",
                    "explanationFr": "Tout musulman a l'obligation personnelle (Farḍ 'Ayn) de réciter sans altérer les sons ni les sens. En revanche, connaître les termes académiques et les classifications savantes relève de l'obligation collective (Farḍ Kifāyah).",
                    "ruleId": "tajweed-definition"
                },
                {
                    "id": "q-c1-2",
                    "type": "error_detect",
                    "promptFr": "Examen du livre arabe : Dans « صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ », le lecteur prononce « أَنْعَمْتُ » avec une Dammah. De quel type d'erreur s'agit-il ?",
                    "verseArabic": "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ",
                    "targetWord": "أَنۡعَمۡتَ",
                    "surahAyahRef": "1:7",
                    "options": [
                        "Lahn Jalī (اللحن الجلي) : Erreur majeure altérant le sens théologique, interdite (Harām) et invalidant la prière",
                        "Lahn Khafī (اللحن الخفي) : Simple défaut d'embellissement sans gravité",
                        "Une variante autorisée dans les dix lectures",
                        "Une pause tolérée"
                    ],
                    "correctAnswer": "Lahn Jalī (اللحن الجلي) : Erreur majeure altérant le sens théologique, interdite (Harām) et invalidant la prière",
                    "explanationFr": "Changer la voyelle de la 2e personne (Tu) à la 1re personne (Je) s'attribue l'acte divin de grâce. C'est l'exemple type du Lahn Jalī qui invalide la prière s'il est commis avec négligence.",
                    "ruleId": "lahn-types"
                },
                {
                    "id": "q-c1-3",
                    "type": "error_detect",
                    "promptFr": "Examen du livre arabe : Dans « كُفُوًا أَحَدٌ » (Al-Ikhlās 4), un lecteur prononce le Fā' avec un soukoûn : « كُفْؤًا ». Quelle est la nature de cette erreur ?",
                    "verseArabic": "وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ",
                    "targetWord": "كُفُوًا",
                    "surahAyahRef": "112:4",
                    "options": [
                        "Lahn Jalī : remplacement d'une voyelle (Dammah) par un soukoûn, modifiant la structure du mot",
                        "Lahn Khafī : absence de Ghunnah",
                        "Madd 'Iwad défectueux",
                        "Lecture recommandée"
                    ],
                    "correctAnswer": "Lahn Jalī : remplacement d'une voyelle (Dammah) par un soukoûn, modifiant la structure du mot",
                    "explanationFr": "Le livre « التجويد المبسط » classe formellement « changer une voyelle par un soukoûn » dans les catégories du Lahn Jalī (ex: تسكين الفاء في كُفُوًا). En lecture de Hafs, le Fā' porte obligatoirement une Dammah.",
                    "ruleId": "lahn-types"
                },
                {
                    "id": "q-c1-4",
                    "type": "error_detect",
                    "promptFr": "Examen du livre arabe : Dans « هَلْ أَتَى عَلَى الإِنسَانِ » (Al-Insān 1), le récitateur omet complètement la Ghunnah sur l'Ikhfā' du Nūn. Quel type d'erreur commet-il ?",
                    "verseArabic": "هَلۡ أَتَىٰ عَلَى ٱلۡإِنسَٰنِ حِينٞ مِّنَ ٱلدَّهۡرِ",
                    "targetWord": "ٱلۡإِنسَٰنِ",
                    "surahAyahRef": "76:1",
                    "options": [
                        "Lahn Khafī (اللحن الخفي) : Défaut dans les règles de perfectionnement de la récitation (omission de la Ghunnah)",
                        "Lahn Jalī : Inversion du sens du verset",
                        "Erreur sur la lettre Hā'",
                        "Arrêt interdit"
                    ],
                    "correctAnswer": "Lahn Khafī (اللحن الخفي) : Défaut dans les règles de perfectionnement de la récitation (omission de la Ghunnah)",
                    "explanationFr": "Omettre une Ghunnah, raccourcir un Madd obligatoire ou négliger une Qalqalah ne change pas le sens du mot (« l'humain »), mais prive la récitation de sa rigueur canonique : c'est un Lahn Khafī (déconseillé/makrūh).",
                    "ruleId": "lahn-types"
                },
                {
                    "id": "q-c1-5",
                    "type": "mcq",
                    "promptFr": "D'après le Matn Al-Jazariyyah, quels sont les trois piliers indispensables pour qu'une récitation soit reconnue comme Coran authentique ?",
                    "verseArabic": "فَكُلُّ مَا وَافَقَ وَجْهَ نَحْوِ * وَكَانَ لِلرَّسْمِ احْتِمَالاً يَحْوِي",
                    "options": [
                        "1. Chaîne de transmission authentique (Sanad) + 2. Conformité au Rasm 'Uthmānī + 3. Concordance avec la grammaire arabe",
                        "1. Récitation rapide + 2. Voix aiguë + 3. Mémorisation complète",
                        "1. Connaissance du persan + 2. Calligraphie moderne + 3. Accord de l'imam",
                        "1. Traduction en français + 2. Rythme musical + 3. Écriture phonétique"
                    ],
                    "correctAnswer": "1. Chaîne de transmission authentique (Sanad) + 2. Conformité au Rasm 'Uthmānī + 3. Concordance avec la grammaire arabe",
                    "explanationFr": "L'imam Ibn Al-Jazarī énonce : toute lecture valide doit impérativement reposer sur ces trois piliers : chaîne authentique ininterrompue jusqu'au Prophète ﷺ, compatibilité avec l'orthographe du Mushaf et conformité à la langue arabe.",
                    "ruleId": "acceptance-conditions"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 2 : SYMBOLES CORANIQUES & RASM
        # ==========================================
        {
            "id": "chap-2",
            "number": 2,
            "slug": "quranic-symbols",
            "titleFr": "Symboles Coraniques & Ponctuation",
            "titleAr": "عَلَامَاتُ المُصْحَفِ وَضَبْطُهُ",
            "category": "beginner",
            "estimatedMinutes": 15,
            "isPilotChapter": True,
            "summaryFr": "Maîtriser tous les repères graphiques du Muṣ-ḥaf : les signes d'arrêt (مـ, ج, قلى, صلى, لا, ∴), la Saktah (pause sans souffle), les lettres miniatures ajoutées et la différence cruciale entre le Soukoûn ordinaire (ْ) et le zéro rectangulaire d'annulation (۠).",
            "infographicPoints": [
                "« مـ » (Arrêt obligatoire) : Stopper impérativement pour ne pas corrompre le sens avec la phrase suivante.",
                "« قلى » (Arrêt préférable) : La pause est prioritaire, bien que la liaison soit autorisée.",
                "« صلى » (Liaison préférable) : Continuer la lecture est préférable, bien que l'arrêt soit permis.",
                "« ج » (Arrêt permis) : Égalité parfaite entre s'arrêter ou continuer.",
                "« لا » (Arrêt interdit) : Ne pas s'arrêter si le sens dépend étroitement de la suite du texte.",
                "« ∴ ∴ » (Arrêt d'étreinte / Mu'ānaqah) : S'arrêter sur l'un des deux repères interdit de s'arrêter sur le second !",
                "« س » ou « ص » minuscule : Indique si la lettre se lit en Sīn ou en Sād.",
                "Le zéro rond (ْ) signale une consonne muette ; le zéro rectangulaire (۠) signale une prolongation maintenue à l'arrêt mais supprimée en liaison."
            ],
            "subrules": [
                {
                    "id": "stop-signs",
                    "nameFr": "1. Les 6 Signes d'Arrêt dans le Mushaf",
                    "nameAr": "عَلَامَاتُ الوَقْفِ فِي ضَبْطِ المَصَاحِفِ",
                    "mnemonic": "مـ (Obligatoire) | قلى (Préférable) | صلى (Liaison d'abord) | ج (Libre) | لا (Ne pas couper) | ∴ (Un seul sur deux)",
                    "letters": [],
                    "definitionFr": "Les signes d'arrêt sont des lettres arabes miniatures insérées au-dessus des mots par les érudits de l'Académie de Médine pour guider le lecteur sur la complétude sémantique et syntaxique de la phrase coranique.",
                    "definitionLughatan": {
                        "ar": "العَلَامَةُ: الأَمَارَةُ الدَّالَّةُ عَلَى الشَّيْءِ لِيُهْتَدَى بِهِ.",
                        "fr": "Le repère visuel servant de balise pour guider la progression."
                    },
                    "definitionIstilahan": {
                        "ar": "رُمُوزٌ اصْطِلَاحِيَّةٌ تُوضَعُ فَوْقَ الكَلِمَاتِ القُرْآنِيَّةِ لِبَيَانِ مَرَاتِبِ الجَوَازِ وَالمَنْعِ فِي الوَقْفِ وَالوَصْلِ.",
                        "fr": "Symboles conventionnels placés au-dessus des mots coraniques indiquant les degrés d'autorisation, de préférence ou d'interdiction de la pause."
                    },
                    "mechanismFr": "À la vue d'un signe d'arrêt autorisé, le récitateur immobilise la dernière lettre sur un soukoûn et coupe la voix tout en reprenant son souffle avant de poursuivre.",
                    "physiologicalDetails": {
                        "tongue": "Vient se poser de manière stable sur le point de l'ultime consonne vocalisée transformée en soukoûn.",
                        "lips": "Rejoignent une posture neutre dès l'extinction du son.",
                        "vocalCords": "Interruption nette de la vibration pour permettre l'inhalation pulmonaire.",
                        "airflow": "Inspiration d'air frais par la bouche ou le nez pendant l'arrêt avant de reprendre."
                    },
                    "phoneticReasonFr": "La structure grammaticale du Coran contient des propositions interdépendantes. S'arrêter au mauvais endroit associe des idées contraires (ex: lier la parole des croyants à celle des mécréants), créant une altération blasphématoire du sens.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَبَعْدَ تَجْوِيدِكَ لِلْحُرُوفِ * لَابُدَّ مِنْ مَعْرِفَةِ الوُقُوفِ\nوَالِابْتِدَاءِ وَهْيَ تُقْسَمُ إِذَنْ * ثَلَاثَةً تَامٌ وَكَافٍ وَحَسَنْ",
                        "transliteration": "Wa ba'da tajwīdika lil-hurūfi * Lā budda min ma'rifati-l-wuqūfi / Wal-ibtidā'i wa hya tuqsamu idhan * Thalāthatan Tāmmun wa Kāfin wa Hasan",
                        "translationFr": "« Après avoir perfectionné les lettres, tu dois impérativement connaître les règles de l'arrêt et de la reprise, qui se divisent en trois catégories : l'arrêt Parfait (Tāmm), Suffisant (Kāf) et Bon (Hasan). »",
                        "chapterNameAr": "بَابُ الوَقْفِ وَالِابْتِدَاءِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c2-1",
                            "arabicText": "إِنَّمَا يَسۡتَجِيبُ ٱلَّذِينَ يَسۡمَعُونَۘ وَٱلۡمَوۡتَىٰ يَبۡعَثُهُمُ ٱللَّهُ",
                            "surahAyahRef": "6:36",
                            "surahNameFr": "Al-An'ām",
                            "highlightSegment": "يَسۡمَعُونَۘ",
                            "highlightLetter": "مـ (Waqf Lāzim)",
                            "ruleApplied": "Arrêt Obligatoire (Waqf Lāzim)",
                            "ruleTag": "izhar",
                            "explanationFr": "« Seuls ceux qui entendent répondent à l'appel. [Arrêt obligatoire مـ]. Quant aux morts, Allah les ressuscitera. » Lier les deux phrases donnerait le contresens absurde : « Seuls ceux qui entendent et les morts répondent à l'appel » !",
                            "transliteration": "Innamā yastajību-lladhīna yasma'ūn (Arrêt) wal-mawtā yab'athuhumu-Llāh",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/006036.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Confondre le Mīm d'arrêt obligatoire (مـ avec queue horizontale) et le Mīm d'Iqlāb (م avec queue verticale vers le bas).",
                            "correctionFr": "Le signe de ponctuation « مـ » est toujours posé en l'air au-dessus de la ligne. Le Mīm d'Iqlāb est posé directement sur la lettre Nūn ou Tanwīn."
                        }
                    ]
                },
                {
                    "id": "saktah-symbol",
                    "nameFr": "2. La Saktah : Pause Momentanée sans Souffle",
                    "nameAr": "السَّكْتَةُ اللَّطِيفَةُ فِي ضَبْطِ حَفْصٍ",
                    "mnemonic": "Saktah = Silence de 2 temps SANS reprendre d'air",
                    "letters": ["س"],
                    "definitionFr": "La Saktah est une interruption de la voix d'une durée conventionnelle de 2 temps (deux battements) sur une lettre soukounée, avec l'intention continue de reprendre la lecture immédiatement, SANS reprendre de souffle.",
                    "definitionLughatan": {
                        "ar": "المَنْعُ وَالقَطْعُ، يُقَالُ: سَكَتَ عَنِ الكَلَامِ إِذَا قَطَعَهُ.",
                        "fr": "L'interruption de la parole et le silence momentané."
                    },
                    "definitionIstilahan": {
                        "ar": "قَطْعُ الصَّوْتِ زَمَناً قَصِيراً بِمِقْدَارِ حَرَكَتَيْنِ دُونَ تَنَفُّسٍ بِنِيَّةِ اسْتِئْنَافِ القِرَاءَةِ.",
                        "fr": "Couper le son pendant la durée mesurée de deux temps sans reprendre sa respiration, avec l'intention de reprendre la lecture immédiatement."
                    },
                    "mechanismFr": "Retenez l'air dans votre cage thoracique, immobilisez la langue sur la consonne sans relâcher la pression phonatoire, marquez deux battements silencieux et redémarrez aussitôt sur le mot suivant.",
                    "physiologicalDetails": {
                        "tongue": "Reste plaquée ou stabilisée sur le point de contact de la lettre où s'est effectuée la coupure sonore.",
                        "lips": "Immobiles pendant l'intervalle de silence.",
                        "vocalCords": "Fermeture des cordes vocales qui interrompt le son tout en maintenant le souffle pulmonaire bloqué.",
                        "airflow": "Aucune inspiration ni expiration d'air pendant les 2 temps."
                    },
                    "phoneticReasonFr": "La Saktah a pour but d'éviter l'ambiguïté sémantique (séparer la parole des mécréants de la réponse divine dans Yāsīn 52) ou de préserver l'Izhār en empêchant une fusion articulatoire indésirable (dans Al-Qiyāmah 27 et Al-Mutaffifīn 14).",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَسَكْتَةٌ لِحَفْصٍ اخْتِصَاصاً وَرَدَتْ * فِي أَرْبَعٍ عَنِ الأَئِمَّةِ ثَبَتَتْ\nفِي عِوَجاً وَمَرْقَدِنَا كَذَا رَانَا * وَقِيلَ مَنْ رَاقَ احْفَظِ التِّبْيَانَا",
                        "transliteration": "Wa saktatun li-Hafsin ikhtisāsan waradat * Fī arba'in 'ani-l-a'immati thabatat / Fī 'Iwajā wa Marqadinā kadhā Rānā * Wa qīla Man Rāqa-hfazit-tibyānā",
                        "translationFr": "« La Saktah est rapportée chez Hafs dans quatre passages authentifiés : 'Iwajā, Marqadinā, Rāna, et Man Rāq ; retiens cet éclaircissement. »",
                        "chapterNameAr": "بَابُ السَّكْتَاتِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c2-2",
                            "arabicText": "كَلَّاۖ بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُواْ يَكۡسِبُونَ",
                            "surahAyahRef": "83:14",
                            "surahNameFr": "Al-Mutaffifīn",
                            "highlightSegment": "بَلۡۜ رَانَ",
                            "highlightLetter": "سۜ (Saktah obligatoire)",
                            "ruleApplied": "Saktah Obligatoire chez Hafs",
                            "ruleTag": "silent",
                            "explanationFr": "Le petit « سۜ » posé sur le Lām impose un silence de 2 temps SANS inspirer. Cela empêche le Lām de s'assimiler dans le Râ (on ne doit surtout pas dire « Barrāna »).",
                            "transliteration": "Kallā bal (silence 2t) rāna 'alā qulūbihim",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/083014.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Inspirer de l'air pendant la Saktah comme lors d'un arrêt ordinaire.",
                            "correctionFr": "Bloquez fermement la respiration : si vous prenez une bouffée d'air, votre Saktah se transforme en arrêt normal défectueux."
                        }
                    ]
                },
                {
                    "id": "subscript-letters",
                    "nameFr": "3. Lettres Vocales Rajoutées (Alif Khanjariyyah, Wāw & Yā')",
                    "nameAr": "الحُرُوفُ الصَّغِيرَةُ المُلْحَقَةُ بِالضَّبْطِ",
                    "mnemonic": "Lettre miniature = Se prononce pleinement comme une lettre normale",
                    "letters": ["ٰ", "ۥ", "ۦ"],
                    "definitionFr": "Dans le Rasm 'Uthmānī originel, certaines lettres de prolongation n'étaient pas tracées pour économiser l'espace calligraphique. Les érudits ont rajouté des lettres miniatures pour indiquer la prononciation exacte sans modifier le squelette textuel d'origine.",
                    "definitionLughatan": {
                        "ar": "المُلْحَقُ: مَا أُضِيفَ إِلَى الأَصْلِ لِبَيَانِهِ وَإِتْمَامِهِ.",
                        "fr": "L'élément adjoint au texte originel pour l'expliciter."
                    },
                    "definitionIstilahan": {
                        "ar": "أَحْرُفٌ صَغِيرَةٌ حَمْرَاءُ فِي المَخْطُوطَاتِ سَوْدَاءُ فِي المَطْبُوعِ تُثْبِتُ حَرْفَ مَدٍّ مَحْذُوفاً فِي الرَّسْمِ العُثْمَانِيِّ.",
                        "fr": "Lettres minuscules insérées au-dessus ou à côté du tracé indiquant qu'un Alif, un Wāw ou un Yā' de prolongation doit être prononcé intégralement."
                    },
                    "mechanismFr": "Traitez toute lettre miniature exactement comme si elle était écrite en grande taille dans le mot : donnez-lui ses 2 temps pleins de prolongation naturelle.",
                    "physiologicalDetails": {
                        "tongue": "Abaissée et détendue au fond de la bouche pour laisser résonner le vide buccal (Al-Jawf).",
                        "lips": "Ouverture verticale sans exagération pour l'Alif miniature ; arrondissement pour le petit Wāw ; abaissement mandibulaire pour le petit Yā'.",
                        "vocalCords": "Vibration continue et stable.",
                        "airflow": "Flux expiratoire continu sur 2 temps."
                    },
                    "phoneticReasonFr": "Les Arabes de l'époque de la révélation mémorisaient le texte par transmission orale et n'avaient pas besoin d'écrire chaque voyelle longue. Les lettres miniatures ont été introduites pour les générations suivantes.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَأَلِفَاتٌ حُذِفَتْ فِي الرَّسْمِ * ثَابِتَةٌ فِي اللَّفْظِ عِنْدَ الفَهْمِ\nكَـ مَٰلِكِ يَوْمِ الدِّينِ إِذْ تُرَتَّلُ * كَذَا السَّمَٰوَٰتِ بِمَدٍّ تُوصَلُ",
                        "transliteration": "Wa alifātun hudhifat fir-rasmi * Thābitatun fil-lafzi 'inda-l-fahmi / Ka Māliki yawmi-d-dīni idh turattalu * Kadhā-s-samāwāti bimaddin tūsalu",
                        "translationFr": "« Des Alifs supprimés dans le tracé écrit demeurent fermement établis lors de la prononciation, comme dans 'Māliki yawmid-dīn' et 'As-Samāwāt' où ils sont prolongés. »",
                        "chapterNameAr": "بَابُ المَحْذُوفِ وَالمُثْبَتِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c2-3",
                            "arabicText": "مَٰلِكِ يَوۡمِ ٱلدِّينِ",
                            "surahAyahRef": "1:4",
                            "surahNameFr": "Al-Fātihah",
                            "highlightSegment": "مَٰلِكِ",
                            "highlightLetter": "ٰ (Alif Khanjariyyah)",
                            "ruleApplied": "Madd Naturel sur Alif Miniature",
                            "ruleTag": "madd",
                            "explanationFr": "Le Mīm de « Māliki » est surmonté d'un petit Alif dague (خنجرية). Il se lit avec 2 temps complets de prolongation (« Mā-liki »), exactement comme s'il était écrit مالک.",
                            "transliteration": "Māliki yawmi-d-dīn",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/001004.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Avaler l'Alif miniature par précipitation et dire 'Maliki' au lieu de 'Māliki' dans la Fātihah selon la lecture de Hafs.",
                            "correctionFr": "Accordez toujours deux battements réguliers à l'Alif miniature pour honorer la lecture de Hafs 'an 'Āsim."
                        }
                    ]
                },
                {
                    "id": "two-zeros",
                    "nameFr": "4. Les Deux Zéros : Rond (ْ) vs Rectangulaire (۠)",
                    "nameAr": "الصِّفْرُ المُسْتَدِيرُ (ْ) وَالصِّفْرُ المُسْتَطِيلُ (۠)",
                    "mnemonic": "Zéro Rond (ْ) = Lettre 100% muette toujours | Zéro Rectangulaire (۠) = Prononcée à l'arrêt, muette en liaison",
                    "letters": ["ْ", "۠"],
                    "definitionFr": "Le Mushaf utilise deux symboles circulaires distincts qu'il ne faut jamais confondre : le zéro parfaitement rond (qui annule la lettre en toutes circonstances) et le zéro rectangulaire oblong (qui maintient la lettre à l'arrêt mais la supprime en liaison).",
                    "definitionLughatan": {
                        "ar": "الصِّفْرُ: الخَالِي، وَمِنْهُ سُمِّيَ صِفْراً لِخُلُوِّ الحَرْفِ مِنَ الحَرَكَةِ أَوْ مِنَ اللَّفْظِ.",
                        "fr": "Le vide et l'absence."
                    },
                    "definitionIstilahan": {
                        "ar": "الصِّفْرُ المُسْتَدِيرُ: حَرْفٌ زَائِدٌ رَسْماً سَاقِطٌ لَفْظاً وَصْلاً وَوَقْفاً. الصِّفْرُ المُسْتَطِيلُ: أَلِفٌ ثَابِتَةٌ وَقْفاً سَاقِطَةٌ وَصْلاً فِي سَبْعِ كَلِمَاتٍ مَخْصُوصَةٍ.",
                        "fr": "Zéro rond : lettre purement calligraphique, muette à la fois en continu et à l'arrêt. Zéro rectangulaire : Alif prononcé avec 2 temps à l'arrêt (Waqf) mais effacé en liaison (Wasl) dans les 7 mots clés du Coran (الألفات السبع)."
                    },
                    "mechanismFr": "Face au zéro rond (ْ), passez directement à la consonne suivante sans émettre le son de la lettre. Face au zéro oblong (۠) : en reliant au mot suivant, effacez l'Alif (ex: « Ana khayrun ») ; si vous stoppez sur le mot, prononcez 2 temps pleins d'Alif (ex: « Anā »).",
                    "physiologicalDetails": {
                        "tongue": "Ne prend aucun appui sur la lettre marquée d'un zéro rond.",
                        "lips": "Passives.",
                        "vocalCords": "Pas d'émission vocale sur la consonne muette.",
                        "airflow": "Traverse directement le conduit vers la lettre active suivante."
                    },
                    "phoneticReasonFr": "Ces signes ont été calibrés par les grammairiens de Bassora et de Koufa pour concilier la calligraphie historique des Compagnons avec la réalité acoustique de la récitation continue.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَالصِّفْرُ إِنْ جَاءَ كَمُسْتَطِيلِ * فَأَثْبِتِ المَدَّ بِذَا السَّبِيلِ\nفِي حَالَةِ الوَقْفِ وَأَمَّا فِي الصِّلَهْ * فَاحْذِفْهُ لَا تَثْبُتْهُ فِي المُوَاصَلَهْ",
                        "transliteration": "Was-sifru in jā'a ka-mustatīli * Fa-athbiti-l-madda bi-dhās-sabīli / Fī hālati-l-waqfi wa ammā fis-silah * Fahdhif-hu lā tathbut-hu fil-muwā Salah",
                        "translationFr": "« Si le zéro se présente sous une forme rectangulaire oblongue, maintiens la prolongation à l'arrêt ; quant à la liaison continue, efface-la complètement et ne la prolonge pas. »",
                        "chapterNameAr": "بَابُ الأَلِفَاتِ السَّبْعِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c2-4",
                            "arabicText": "قَالَ أَنَا۠ خَيۡرٞ مِّنۡهُ",
                            "surahAyahRef": "7:12",
                            "surahNameFr": "Al-A'rāf",
                            "highlightSegment": "أَنَا۠ خَيۡرٞ",
                            "highlightLetter": "ـَا۠ (Zéro rectangulaire)",
                            "ruleApplied": "Les 7 Alifs : Muet en liaison, 2 temps à l'arrêt",
                            "ruleTag": "silent",
                            "explanationFr": "Le mot « Anā » porte un zéro oblong. En liaison continue, l'Alif disparaît : on dit « Ana khayrun ». Mais si le lecteur s'arrête sur le mot, il doit obligatoirement prononcer l'Alif sur 2 temps : « Anā ».",
                            "transliteration": "Qāla ana khayrum-minh (en liaison)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/007012.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Prolonger l'Alif de « Anā » en liaison continue en disant « Anā khayrun ».",
                            "correctionFr": "En liaison avec le mot suivant, l'Alif de « Anā » s'efface totalement : dites « Ana khayrun » d'une voyelle brève."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c2-1",
                    "title": "Analyse du zéro rectangulaire dans « لَّٰكِنَّا۠ » (Al-Kahf 38)",
                    "verseArabic": "لَّٰكِنَّا۠ هُوَ ٱللَّهُ رَبِّى وَلَآ أُشۡرِكُ بِرَبِّىٓ أَحَدٗا",
                    "surahAyahRef": "18:38",
                    "targetSegment": "لَّٰكِنَّا۠",
                    "promptFr": "Comment prononce-t-on l'Alif final de « Lākinnā » en liaison continue vers « Huwa » ?",
                    "hintFr": "Observez la forme oblongue du zéro au-dessus de l'Alif.",
                    "solutionFr": "L'Alif s'efface en liaison continue : « Lākinna Huwa »",
                    "breakdownSteps": [
                        "Le mot porte un zéro rectangulaire oblong (۠).",
                        "En liaison continue (Wasl), la voyelle longue s'annule : on prononce une brève Nūn Fathah (« Lākinna Huwa »).",
                        "En cas d'arrêt accidentel (Waqf), on restitue les 2 temps de Madd (« Lākinnā »)."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/018038.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c2-1",
                    "type": "mcq",
                    "promptFr": "Que signifie le symbole « قلى » placé au-dessus d'un mot dans le texte coranique ?",
                    "verseArabic": "قُل رَّبِّىٓ أَعۡلَمُ بِعِدَّتِهِم مَّا يَعۡلَمُهُمۡ إِلَّا قَلِيلٞۗ فَلَا تُمَارِ فِيهِمۡ",
                    "surahAyahRef": "18:22",
                    "options": [
                        "L'arrêt est préférable (الوقف أولى), bien que la liaison soit permise",
                        "L'arrêt est strictement interdit",
                        "La liaison continue est préférable",
                        "Silence de 2 temps sans respirer"
                    ],
                    "correctAnswer": "L'arrêt est préférable (الوقف أولى), bien que la liaison soit permise",
                    "explanationFr": "« قلى » est l'abréviation de « الوَقْفُ أَوْلَى » (l'arrêt est prioritaire). Il indique que le sens est complet et que faire une pause est le meilleur choix esthétique et sémantique.",
                    "ruleId": "stop-signs"
                },
                {
                    "id": "q-c2-2",
                    "type": "error_detect",
                    "promptFr": "Dans « كَلَّاۖ بَلۡۜ رَانَ », un lecteur prend une inspiration profonde entre « Bal » et « Rāna ». Quelle faute commet-il ?",
                    "verseArabic": "كَلَّاۖ بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم",
                    "targetWord": "بَلۡۜ رَانَ",
                    "surahAyahRef": "83:14",
                    "options": [
                        "Erreur sur la Saktah : la Saktah impose une pause de 2 temps SANS reprendre de souffle. Respirer la transforme en arrêt ordinaire !",
                        "Il fallait faire un Idghām direct sans marquer de silence",
                        "Il fallait prononcer le Lām emphatique",
                        "Aucune erreur"
                    ],
                    "correctAnswer": "Erreur sur la Saktah : la Saktah impose une pause de 2 temps SANS reprendre de souffle. Respirer la transforme en arrêt ordinaire !",
                    "explanationFr": "Par définition canonique, la Saktah suspend la voix mais retient le souffle dans les poumons sans inspiration d'air.",
                    "ruleId": "saktah-symbol"
                },
                {
                    "id": "q-c2-3",
                    "type": "mcq",
                    "promptFr": "Quelle est la règle d'application pour les 3 points d'étreinte (∴ ∴ / Mu'ānaqah) dans « لَا رَيْبَ ۛ فِيهِ ۛ هُدًى » ?",
                    "verseArabic": "ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ",
                    "surahAyahRef": "2:2",
                    "options": [
                        "Si on s'arrête sur le premier repère, on doit continuer sans s'arrêter sur le second (et inversement)",
                        "On doit obligatoirement s'arrêter sur les deux repères",
                        "On ne peut s'arrêter sur aucun des deux",
                        "Ce symbole indique une prosternation"
                    ],
                    "correctAnswer": "Si on s'arrête sur le premier repère, on doit continuer sans s'arrêter sur le second (et inversement)",
                    "explanationFr": "L'arrêt d'étreinte (تَعَانُقُ الوَقْفِ) lie deux sens complémentaires : vous pouvez dire « Lā rayb » (arrêt) puis reprendre « Fīhi hudan », OU dire « Lā rayba fīh » (arrêt) puis reprendre « Hudan lil-muttaqīn », mais jamais couper les deux en même temps.",
                    "ruleId": "stop-signs"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 3 : ARRÊT & REPRISE (WAQF & IBTIDĀ')
        # ==========================================
        {
            "id": "chap-3",
            "number": 3,
            "slug": "stopping-resuming",
            "titleFr": "Arrêt & Reprise (Waqf & Ibtidā')",
            "titleAr": "الوَقْفُ وَالِابْتِدَاءُ",
            "category": "intermediate",
            "estimatedMinutes": 20,
            "isPilotChapter": True,
            "summaryFr": "Comprendre la règle universelle : l'arabe ne commence jamais par une consonne soukounée et ne s'arrête jamais sur une voyelle. Maîtriser le Waqf 'alā Sukūn, le Madd 'Iwad (compensation du Tanwīn Fathah), la métamorphose de la Tā' Marbūṭah en [h] et les 4 types de Waqf (Tāmm, Kāfin, Hasan, Qabīh).",
            "infographicPoints": [
                "Axiome d'or : « لَا يُبْدَأُ بِسَاكِنٍ وَلَا يُوقَفُ عَلَى مُتَحَرِّكٍ » (On ne commence jamais par un soukoûn et on ne s'arrête jamais sur une voyelle vivante).",
                "Waqf avec Soukoûn Temporaire : Toute voyelle finale (Fathah, Dammah, Kasrah) est obligatoirement gelée en soukoûn lors de l'arrêt (ex: Al-'Ālamīna -> Al-'Ālamīn).",
                "Madd 'Iwad (مد العوض) : Le Tanwīn Fathah (ـً) se métamorphose à l'arrêt en un Alif pur de 2 temps (ex: Rahīman -> Rahīmā).",
                "Tā' Marbūṭah (ة / ـة) : Se transforme obligatoirement à l'arrêt en une lettre Hā' soukounée [h] avec un souffle doux (ex: Rahmah).",
                "Les 4 Degrés de Waqf : 1. Tāmm (Parfait), 2. Kāfin (Suffisant), 3. Hasan (Bon), 4. Qabīh (Mauvais / Interdit car déformant le sens)."
            ],
            "subrules": [
                {
                    "id": "stop-on-sukoon",
                    "nameFr": "1. Règle Générale : L'Arrêt sur Soukoûn (Waqf 'alā Sukūn)",
                    "nameAr": "القَاعِدَةُ العَامَّةُ: الوَقْفُ عَلَى السُّكُونِ",
                    "mnemonic": "Toute voyelle finale meurt et devient Soukoûn à la pause",
                    "letters": [],
                    "definitionFr": "En phonétique arabe classique, il est strictement interdit de terminer un énoncé sur une voyelle brève vivante. À la moindre pause, la voyelle de la consonne finale s'éteint et se convertit instantanément en un Soukoûn temporaire (Sukūn 'Ārid).",
                    "definitionLughatan": {
                        "ar": "الوَقْفُ: الحَبْسُ وَالكَّفُّ، يُقَالُ: وَقَفْتُ الشَّيْءَ إِذَا حَبَسْتَهُ.",
                        "fr": "L'interruption, la retenue et le maintien."
                    },
                    "definitionIstilahan": {
                        "ar": "قَطْعُ الصَّوْتِ عِنْدَ آخِرِ الكَلِمَةِ زَمَناً يَتَنَفَّسُ فِيهِ القَارِئُ عَادَةً بِنِيَّةِ اسْتِئْنَافِ القِرَاءَةِ، وَالأَصْلُ فِيهِ السُّكُونُ.",
                        "fr": "Couper le son sur la dernière consonne d'un mot pendant un temps suffisant pour reprendre son souffle, avec l'intention de poursuivre la lecture. L'arrêt se fait par essence sur le soukoûn."
                    },
                    "mechanismFr": "Fermez ou posez la langue sur la consonne finale sans émettre la voyelle qui la précède dans l'écriture. Si la lettre finale est une consonne de Qalqalah (Qāf, Tā', Bā', Jīm, Dāl), déclenchez le rebond sonore caractéristique.",
                    "physiologicalDetails": {
                        "tongue": "Se stabilise sur le point d'articulation de la consonne finale pour absorber l'arrêt de la voix.",
                        "lips": "Rejoignent la position de repos neutre dès l'extinction du son.",
                        "vocalCords": "Cessent de vibrer à l'instant précis où l'air s'arrête.",
                        "airflow": "Interrompu net, suivi d'une inspiration d'air réparatrice pour la reprise."
                    },
                    "phoneticReasonFr": "La vocalisation finale sert à lier les mots syntaxiquement entre eux. Dès lors que l'orateur s'arrête, la fonction de liaison disparaît : l'effort musculaire pour maintenir la voyelle devient inutile, d'où le retour au repos du soukoûn.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَسَكِّنِ المَوْقُوفَ عَنْهُ إِنْ تَصِلْ * وَاحْذَرْ مِنَ التَّحْرِيكِ حَالَمَا تَكِلْ\nوَالأَصْلُ فِي الوَقْفِ السُّكُونُ حَتْمَا * إِلَّا مَعَ الرَّوْمِ كَمَا تَنَمَّى",
                        "transliteration": "Wa sakkinil-mawqūfa 'anhu in tasil * Wahdhar mina-t-tahrīki hālamā takil / Wal-aslu fil-waqfi-s-sukūnu hatmā * Illā ma'a-r-rawmi kamā tanammā",
                        "translationFr": "« Immobilise par un soukoûn la lettre sur laquelle tu t'arrêtes, et prends garde à ne pas la mouvoir d'une voyelle. Car la norme fondamentale de l'arrêt est obligatoirement le soukoûn, sauf en cas de Rawm. »",
                        "chapterNameAr": "بَابُ الوَقْفِ عَلَى أَوَاخِرِ الكَلِمِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c3-1",
                            "arabicText": "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
                            "surahAyahRef": "1:2",
                            "surahNameFr": "Al-Fātihah",
                            "highlightSegment": "ٱلۡعَٰلَمِينَ",
                            "highlightLetter": "نَ ➔ نۡ",
                            "ruleApplied": "Waqf sur Soukoûn Temporaire",
                            "ruleTag": "silent",
                            "explanationFr": "Le mot est écrit « Al-'Ālamīna » avec une Fathah sur le Nūn. À l'arrêt, la Fathah disparaît obligatoirement : on prononce « Al-'Ālamīn » avec un Nūn sākinah.",
                            "transliteration": "Al-hamdu lillāhi rabbi-l-'ālamīn",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/001002.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : laisser traîner un 'e' muet instable ou une demi-voyelle française à la fin du mot (ex: dire 'Al-hamdu lillahi rabbi-l-'alamine-uh').",
                            "correctionFr": "Bloquez l'émission sonore dès que la langue touche le palais sur le Nūn : pas de souffle résiduel ni de rebond intempestif."
                        }
                    ]
                },
                {
                    "id": "madd-iwad",
                    "nameFr": "2. Exception 1 : Madd 'Iwad (Le Tanwīn Fathah تبدیل en Alif)",
                    "nameAr": "مَدُّ العِوَضِ (عِنْدَ الوَقْفِ عَلَى التَّنْوِينِ المَفْتُوحِ)",
                    "mnemonic": "Tanwīn Fathah (ـً) à l'arrêt = Alif pur de 2 temps",
                    "letters": ["ً"],
                    "definitionFr": "Lorsque l'on s'arrête sur un mot se terminant par un Tanwīn Fathah (double trait au-dessus), le Tanwīn ne prend pas de soukoûn : il se compense (« 'Iwad ») en une prolongation pure d'Alif d'une durée stricte de 2 temps.",
                    "definitionLughatan": {
                        "ar": "العِوَضُ: البَدَلُ وَالخَلَفُ، يُقَالُ: عَوَّضْتُهُ إِذَا أَعْطَيْتَهُ بَدَلاً عَمَّا فَاتَهُ.",
                        "fr": "La compensation, le substitut et le remplacement."
                    },
                    "definitionIstilahan": {
                        "ar": "إِبْدَالُ التَّنْوِينِ المَفْتُوحِ أَلِفاً مَمْدُودَةً مِقْدَارَهَا حَرَكَتَانِ عِنْدَ الوَقْفِ دُونَ الوَصْلِ.",
                        "fr": "Remplacer le Tanwīn Fathah lors de l'arrêt par un Alif de prolongation de deux temps. En liaison continue, le Tanwīn retrouve sa règle ordinaire."
                    },
                    "mechanismFr": "N'articulez pas le son [n] du Tanwīn. Ouvrez verticalement la bouche et laissez résonner la voyelle longue [ā] pendant deux pulsations régulières de la main.",
                    "physiologicalDetails": {
                        "tongue": "Abaissée et complètement passive au fond de la bouche.",
                        "lips": "Ouverture verticale moyenne et détendue sans arrondir les commissures.",
                        "vocalCords": "Vibration continue sur deux battements temporels.",
                        "airflow": "Flux d'air s'échappant exclusivement par la cavité buccale (Jawf) sans aucune fuite nasale."
                    },
                    "phoneticReasonFr": "En arabe classique, le Tanwīn Fathah est historiquement accompagné d'un Alif graphique de soutien. À la pause, la voyelle longue prend naturellement la place de la nasalisation pour amortir la terminaison acoustique du mot.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَبَدِّلِ التَّنْوِينَ حَالَ الفَتْحِ * أَلِفاً عِنْدَ الوُقُوفِ الصَّحِّ\nوَمُدَّهُ حَرَكَتَيْنِ كَالطَّبِيعِي * عِوَضاً عَنِ التَّنْوِينِ لَا تُضَيِّعِ",
                        "transliteration": "Wa baddili-t-tanwīna hāla-l-fathi * Alifan 'inda-l-wuqūfi-s-sahhi / Wa muddahū harakatayni kat-tabī'ī * 'Iwadan 'ani-t-tanwīni lā tudayyi'i",
                        "translationFr": "« Remplace le Tanwīn avec Fathah par un Alif lors de l'arrêt conforme, et prolonge-le de deux temps comme le Madd naturel en compensation du Tanwīn ; ne le néglige pas. »",
                        "chapterNameAr": "بَابُ مَدِّ العِوَضِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c3-2",
                            "arabicText": "وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمٗا",
                            "surahAyahRef": "4:17",
                            "surahNameFr": "An-Nisā'",
                            "highlightSegment": "حَكِيمٗا",
                            "highlightLetter": "ـٗا (Madd 'Iwad)",
                            "ruleApplied": "Madd 'Iwad (2 Temps)",
                            "ruleTag": "madd",
                            "explanationFr": "Le mot s'écrit « Hakīman ». En s'arrêtant dessus, le son [an] se métamorphose en une prolongation [ā] de 2 temps : on prononce « Hakīmā ».",
                            "transliteration": "Wa kāna-Llāhu 'Alīman Hakīmā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/004017.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Prononcer le son [N] à l'arrêt en disant « Hakīman » ou « 'Alīman ».",
                            "correctionFr": "Le son [N] est strictement aboli à l'arrêt : transformez-le en une douce prolongation voyelle 'Hakīmā'."
                        },
                        {
                            "trapFr": "Appliquer le Madd 'Iwad sur une Tā' Marbūṭah portant un Tanwīn Fathah comme dans « رَحْمَةً ».",
                            "correctionFr": "Attention ! La Tā' Marbūṭah est une exception absolue : elle devient un Hā' soukouné [rah-mah] et ne prend jamais de Madd 'Iwad !"
                        }
                    ]
                },
                {
                    "id": "taa-marbutah-stop",
                    "nameFr": "3. Exception 2 : Métamorphose de la Tā' Marbūṭah (ة -> [h])",
                    "nameAr": "وَقْفُ التَّاءِ المَرْبُوطَةِ هَاءً سَاكِنَةً",
                    "mnemonic": "Tā' Marbūṭah (ة) à l'arrêt = Hā' soukounée claire avec souffle (Hams)",
                    "letters": ["ة", "ـة"],
                    "definitionFr": "Toute Tā' fermée (Marbūṭah ة / ـة), quelle que soit sa voyelle en liaison (Fathah, Dammah, Kasrah ou Tanwīn), se métamorphose obligatoirement à l'arrêt en une lettre Hā' soukounée (هـ) provenant du fond de la gorge avec un souffle doux de Hams.",
                    "definitionLughatan": {
                        "ar": "المَرْبُوطَةُ: المَشْدُودَةُ الَّتِي رُبِطَ طَرَفَاهَا فَالْتَقَيَا كَالدَّائِرَةِ.",
                        "fr": "La lettre attachée dont les extrémités se rejoignent en boucle circulaire."
                    },
                    "definitionIstilahan": {
                        "ar": "التَّاءُ الدَّالَّةُ عَلَى التَّأْنِيثِ الَّتِي تُلْفَظُ تَاءً فِي الوَصْلِ وَتَنْقَلِبُ هَاءً سَاكِنَةً فِي الوَقْفِ.",
                        "fr": "La désinence féminine qui se prononce Tā' [t] en liaison continue et qui se permute obligatoirement en Hā' soukounée [h] lors de l'arrêt."
                    },
                    "mechanismFr": "Relâchez la langue loin des dents incisives supérieures. Émettez un souffle expiratoire doux et limpide depuis le fond du larynx (Aqṣā al-Halq).",
                    "physiologicalDetails": {
                        "tongue": "Ne touche absolument pas les dents ni le palais antérieur (sinon vous prononceriez un Tā' fautif).",
                        "lips": "Entrouvertes de manière passive.",
                        "vocalCords": "Cordes vocales ouvertes sans vibration sonore (Hams / souffle d'air pur).",
                        "airflow": "Expiration douce et continue issue de la glotte sans râcle gutturale."
                    },
                    "phoneticReasonFr": "En arabe, la Tā' Marbūṭah est un phonème mixte qui possède deux visages : la consonne occlusive Tā' en liaison pour articuler la phrase, et le souffle apaisant Hā' à la pause pour soulager l'appareil respiratoire.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَكُلُّ مَا فِيهِ بِتَاءٍ رُبِطَا * فَقِفْ عَلَيْهِ بِالهَاءِ مُحِطَا\nإِلَّا الَّتِي كُتِبَتْ بِتَاءٍ فُتِحَتْ * فَحُكْمُهَا كَالتَّاءِ وَقْفاً رَجَحَتْ",
                        "transliteration": "Wa kullu mā fīhi bi-tā'in rubitā * Fa-qif 'alayhi bil-hā'i muhitā / Illā-l-latī kutibat bi-tā'in futihat * Fa-hukmuhā kat-tā'i waqfan rajahat",
                        "translationFr": "« Tout mot écrit avec une Tā' liée (Marbūṭah), arrête-toi dessus par une Hā' ; excepté celles tracées exceptionnellement avec une Tā' ouverte, dont l'arrêt se fait en Tā'. »",
                        "chapterNameAr": "بَابُ التَّاءِ المَرْبُوطَةِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c3-3",
                            "arabicText": "فِيهَا عَيۡنٞ جَارِيَةٞ",
                            "surahAyahRef": "88:12",
                            "surahNameFr": "Al-Ghāshiyah",
                            "highlightSegment": "جَارِيَةٞ",
                            "highlightLetter": "ـةٞ ➔ ـهۡ",
                            "ruleApplied": "Métamorphose en Hā' à l'Arrêt",
                            "ruleTag": "silent",
                            "explanationFr": "En liaison continue : « Jāriyatun ». Lors de l'arrêt, le Tā' disparaît et devient une Hā' soukounée soufflée : « Jāriyah ».",
                            "transliteration": "Fīhā 'aynun jāriyah (à l'arrêt)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/088012.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : couper le mot sur la voyelle sans faire entendre le souffle de la Hā' (ex: dire 'Jāriya' sans son final).",
                            "correctionFr": "Assurez-vous d'expirer un souffle perceptible au fond de la gorge pour marquer la Hā' : « Jāriyah »."
                        },
                        {
                            "trapFr": "S'arrêter en prononçant un [t] : dire 'Jāriyat'.",
                            "correctionFr": "C'est un Lahn Jalī si la lettre est fermée. Ne touchez pas le palais avec le bout de votre langue."
                        }
                    ]
                },
                {
                    "id": "waqf-categories",
                    "nameFr": "4. Les 4 Catégories de Waqf & La Reprise (Ibtidā')",
                    "nameAr": "أَقْسَامُ الوَقْفِ الأَرْبَعَةِ وَأَحْكَامُ الِابْتِدَاءِ",
                    "mnemonic": "1. Tāmm (Parfait) | 2. Kāfin (Suffisant) | 3. Hasan (Bon) | 4. Qabīh (Mauvais - À bannir)",
                    "letters": [],
                    "definitionFr": "L'arrêt n'est pas un simple silence physique : il structure la compréhension théologique du Coran. Les savants ont codifié 4 catégories d'arrêt selon le lien sémantique (Ma'nā) et grammatical (Lafz) avec la phrase suivante.",
                    "definitionLughatan": {
                        "ar": "الِابْتِدَاءُ: الشُّرُوعُ فِي الشَّيْءِ وَالبَدْءُ بِهِ.",
                        "fr": "L'inauguration et le début d'une action."
                    },
                    "definitionIstilahan": {
                        "ar": "التَّامُّ: لَا تَعَلُّقَ لَهُ بِمَا بَعْدَهُ لَفْظاً وَلَا مَعْنًى. الكَافِي: تَعَلَّقَ مَعْنًى لَا لَفْظاً. الحَسَنُ: تَعَلَّقَ لَفْظاً وَمَعْنًى مَعَ إِفَادَةِ مَعْنًى تَامٍّ. القَبِيحُ: مَا لَا يُفِيدُ مَعْنًى أَوْ يُوهِمُ فَسَاداً.",
                        "fr": "1. Tāmm : aucun lien grammatical ni sémantique. 2. Kāfin : lien sémantique uniquement. 3. Hasan : lien grammatical et sémantique mais sens complet. 4. Qabīh : déforme le sens ou laisse une phrase tronquée."
                    },
                    "mechanismFr": "Si vous devez vous arrêter par manque de souffle sur un arrêt Hasan ou Qabīh, ne repartez jamais directement du mot suivant : reculez de deux ou trois mots pour reconstruire la phrase grammaticalement.",
                    "physiologicalDetails": {
                        "tongue": "Prête pour la reprise du mot précédent choisi pour l'Ibtidā' correct.",
                        "lips": "Reprennent la voyelle d'attaque avec netteté.",
                        "vocalCords": "Inauguration de la vibration sur une voyelle franche.",
                        "airflow": "Gestion d'un souffle plein après une inspiration profonde."
                    },
                    "phoneticReasonFr": "Une phrase arabe incomplète suspendue sur un verbe sans son sujet ou sur une particule négative sans son affirmation détruit la logique du discours coranique.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَغَيْرُ مَا تَمَّ قَبِيحٌ وَلَهُ * الوَقْفُ مُضْطَرّاً وَيُبْدَا قَبْلَهُ\nوَلَيْسَ فِي القُرْآنِ مِنْ وَقْفٍ وَجَبْ * وَلَا حَرَامٌ غَيْرَ مَا لَهُ سَبَبْ",
                        "transliteration": "Wa ghayru mā tamma qabīhun wa lahū * Al-waqfu mudtarran wa yubdā qablahū / Wa laysa fil-Qur'āni min waqfin wajab * Wa lā harāmun ghayra mā lahū sabab",
                        "translationFr": "« Tout arrêt non abouti est qualifié de Mauvais (Qabīh) ; on ne peut s'y arrêter que sous la contrainte, et il faut alors reprendre avant lui. Il n'existe pas dans le Coran d'arrêt intrinsèquement obligatoire ni interdit, sauf s'il existe une cause qui corrompt le sens. » (Versets 85-86)",
                        "chapterNameAr": "بَابُ الوَقْفِ وَالِابْتِدَاءِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c3-4",
                            "arabicText": "فَوَيۡلٞ لِّلۡمُصَلِّينَ ١ ٱلَّذِينَ هُمۡ عَن صَلَاتِهِمۡ سَاهُونَ",
                            "surahAyahRef": "107:4-5",
                            "surahNameFr": "Al-Mā'ūn",
                            "highlightSegment": "فَوَيۡلٞ لِّلۡمُصَلِّينَ",
                            "highlightLetter": "Arrêt Mauvais si isolé",
                            "ruleApplied": "Exemple de Waqf Qabīh (Mauvais)",
                            "ruleTag": "qalqalah",
                            "explanationFr": "S'arrêter sur « Malheur aux prieurs » sans continuer détruit le sens du verset en maudissant ceux qui prient ! Il faut impérativement continuer : « ...qui sont distraits de leur prière ».",
                            "transliteration": "Fa waylul-lil-musallīn (à ne pas isoler)",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/107004.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Reprendre sa lecture exactement au mot qui suit après un arrêt forcé par essoufflement.",
                            "correctionFr": "Reculez toujours d'un ou deux mots pour assurer une reprise (Ibtidā') sémantiquement correcte."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c3-1",
                    "title": "Gestion du Waqf sur Tanwīn Fathah : « كِتَٰبٗا مَّوْقُوتٗا »",
                    "verseArabic": "إِنَّ ٱلصَّلَوٰةَ كَانَتۡ عَلَى ٱلۡمُؤۡمِنِينَ كِتَٰبٗا مَّوۡقُوتٗا",
                    "surahAyahRef": "4:103",
                    "targetSegment": "مَّوۡقُوتٗا",
                    "promptFr": "Comment devez-vous clore le verset sur le mot « Mawqūtan » en fin de souffle ?",
                    "hintFr": "Rappelez-vous de la règle du Madd 'Iwad (compensation).",
                    "solutionFr": "En transformant le Tanwīn en un Alif pur de 2 temps : « Mawqūtā »",
                    "breakdownSteps": [
                        "Le mot se termine par un Tanwīn Fathah (ـٗا).",
                        "En cas d'arrêt, le son [N] est éliminé.",
                        "On prolonge la Fathah en un Alif naturel de 2 battements : « Mawqūtā »."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/004103.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c3-1",
                    "type": "mcq",
                    "promptFr": "Quel est l'axiome fondamental de la phonétique arabe lors de l'arrêt et de la reprise ?",
                    "verseArabic": "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
                    "options": [
                        "On ne commence jamais par un Soukoûn et on ne s'arrête jamais sur une voyelle",
                        "On s'arrête toujours sur une voyelle longue",
                        "Toute consonne devient une voyelle à l'arrêt",
                        "On peut débuter par n'importe quel son"
                    ],
                    "correctAnswer": "On ne commence jamais par un Soukoûn et on ne s'arrête jamais sur une voyelle",
                    "explanationFr": "L'adage canonique énonce : « لَا يُبْدَأُ بِسَاكِنٍ وَلَا يُوقَفُ عَلَى مُتَحَرِّكٍ ». Le soukoûn est obligatoire pour sceller l'arrêt.",
                    "ruleId": "stop-on-sukoon"
                },
                {
                    "id": "q-c3-2",
                    "type": "error_detect",
                    "promptFr": "Examen du livre arabe : Lors de l'arrêt sur « فِيهَا عَيْنٌ جَارِيَةٌ », un lecteur prononce « Jāriyat » en faisant sonner le Tā'. Quel est le jugement ?",
                    "verseArabic": "فِيهَا عَيۡنٞ جَارِيَةٞ",
                    "targetWord": "جَارِيَةٞ",
                    "surahAyahRef": "88:12",
                    "options": [
                        "Erreur formelle : la Tā' Marbūṭah (ة) se convertit obligatoirement en Hā' soukounée [h] à l'arrêt : « Jāriyah »",
                        "Récitation correcte",
                        "Madd 'Iwad obligatoire",
                        "Qalqalah sur le Tā'"
                    ],
                    "correctAnswer": "Erreur formelle : la Tā' Marbūṭah (ة) se convertit obligatoirement en Hā' soukounée [h] à l'arrêt : « Jāriyah »",
                    "explanationFr": "Toute Tā' fermée se métamorphose impérativement en Hā' à la pause. S'arrêter en 't' est une erreur déformante.",
                    "ruleId": "taa-marbutah-stop"
                },
                {
                    "id": "q-c3-3",
                    "type": "mcq",
                    "promptFr": "Quelle est la durée du Madd 'Iwad lorsqu'on s'arrête sur un mot tel que « عَلِيمًا حَكِيمًا » ?",
                    "verseArabic": "وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمٗا",
                    "surahAyahRef": "4:17",
                    "options": [
                        "2 temps (durée équivalente au Madd naturel)",
                        "4 temps obligatoires",
                        "6 temps incompressibles",
                        "0 temps (aucun allongement)"
                    ],
                    "correctAnswer": "2 temps (durée équivalente au Madd naturel)",
                    "explanationFr": "Le Madd 'Iwad compense le Tanwīn Fathah par un Alif d'une durée stricte de 2 temps naturels.",
                    "ruleId": "madd-iwad"
                }
            ]
        },

        # ==========================================
        # CHAPITRE 4 : LES PROLONGATIONS I (MADD NATUREL)
        # ==========================================
        {
            "id": "chap-4",
            "number": 4,
            "slug": "madd-1",
            "titleFr": "Les Prolongations I (Madd Naturel & Dérivés)",
            "titleAr": "المَدُّ الأَصْلِيُّ وَمُلْحَقَاتُهُ",
            "category": "beginner",
            "estimatedMinutes": 20,
            "isPilotChapter": True,
            "summaryFr": "Apprendre les 3 lettres de Madd réunies dans la formule « Nūhīhā » (نُوحِيهَا), le Madd Aslī (2 temps incompressibles), le Madd Silah Sughrā (liaison du pronom Hā'), les lettres de Līn (Wāw et Yā' précédés de Fathah) et les mots caméléons.",
            "infographicPoints": [
                "Les 3 Lettres de Madd : 1. Wāw soukouné précédé de Dammah (ـُو), 2. Yā' soukouné précédé de Kasrah (ـِي), 3. Alif toujours précédé de Fathah (ـَا).",
                "Formule sacrée de synthèse : « نُوحِيهَا » (Nū-hī-hā) regroupe les 3 lettres dans un seul mot !",
                "Madd Aslī / Tabī'ī : Mesure exactement 2 temps (deux battements métronomiques). Ne pas le réduire à 1 temps ni l'étirer au-delà.",
                "Madd Silah Sughrā (صلة صغرى) : Le pronom Hā' (ـهُ) situé entre deux consonnes vocalisées se prolonge de 2 temps en liaison (ex: Innahū kāna).",
                "Lettres de Līn (حرفا اللين) : Wāw ou Yā' soukounés précédés d'une Fathah (ex: Khawf, Bayt). En liaison, ils ne prennent aucun Madd !",
                "Les Mots Caméléons : هُوَ, هِيَ, مَعِيَ conservent leurs voyelles brèves et ne se prolongent pas."
            ],
            "subrules": [
                {
                    "id": "madd-letters-nuheeha",
                    "nameFr": "1. Les 3 Lettres de Madd & La Formule « Nūhīhā »",
                    "nameAr": "حُرُوفُ المَدِّ الثَّلَاثَةِ وَشُرُوطُهَا (نُوحِيهَا)",
                    "mnemonic": "Wāw après Dammah | Yā' après Kasrah | Alif après Fathah (نُوحِيهَا)",
                    "letters": ["ا", "و", "ي"],
                    "definitionFr": "Le mot Madd (مَدّ) signifie allonger et étirer le son. Les lettres de prolongation sont au nombre de trois et naissent de la cavité vide de la bouche et de la gorge (Al-Jawf). Elles n'agissent comme Madd que si elles sont sans voyelle et précédées d'une voyelle homogène.",
                    "definitionLughatan": {
                        "ar": "المَدُّ: الزِّيَادَةُ وَالمَطْلُ، قَالَ تَعَالَى: ﴿وَيُمْدِدْكُمْ بِأَمْوَالٍ﴾ أَيْ يَزِدْكُمْ.",
                        "fr": "L'accroissement, l'étirement et l'extension dans le temps."
                    },
                    "definitionIstilahan": {
                        "ar": "إِطَالَةُ الصَّوْتِ بِحَرْفٍ مِنْ حُرُوفِ المَدِّ الثَّلَاثَةِ عِنْدَ مُلَاقَاةِ سَبَبٍ أَوْ بِدُونِهِ.",
                        "fr": "L'allongement du son d'une voyelle au moyen de l'une des trois lettres de Madd, avec ou sans cause externe."
                    },
                    "mechanismFr": "Le son ne naît d'aucun frottement musculaire dur. Il résonne librement dans le conduit vocal (Al-Jawf). L'air s'écoule avec fluidité sans à-coups laryngés.",
                    "physiologicalDetails": {
                        "tongue": "Détendue et stable au plancher de la bouche.",
                        "lips": "Projetées en avant sans crispation pour le Wāw ; abaissées pour le Yā' ; ouvertes verticalement pour l'Alif.",
                        "vocalCords": "Vibration libre et musicale sans occlusion.",
                        "airflow": "Flux continu sans aucune turbulence ni nasalité."
                    },
                    "phoneticReasonFr": "Ces voyelles longues constituent l'armature syllabique de l'arabe. Si on supprime leur allongement, le mot se contracte en voyelle brève, modifiant le temps verbal ou créant un contresens lexical.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَالمَدُّ مَكْتُوبٌ بِوَاوٍ أَلِفِ * وَيَاءٍ انْ سَكَنَّ بَعْدَ حَرَكِ\nيُجَانِسُ السَّاكِنَ فِيهَا تُحْتَسَبْ * بِمُدَّةٍ مِقْدَارُهَا طَبِيعِي وَجَبْ",
                        "transliteration": "Wal-maddu maktūbun bi-wāwin alifi * Wa yā'in in sakanna ba'da haraki / Yujānisu-s-sākina fīhā tuhtasab * Bi-muttadin miqdāruhā tabī'ī wajab",
                        "translationFr": "« Le Madd s'écrit avec un Wāw, un Alif et un Yā', lorsqu'ils sont dépourvus de voyelle après une voyelle homogène ; on leur accorde obligatoirement la durée naturelle. »",
                        "chapterNameAr": "بَابُ المَدِّ"
                    },
                    "examples": [
                        {
                            "id": "ex-c4-1",
                            "arabicText": "تِلۡكَ مِنۡ أَنۢبَآءِ ٱلۡغَيۡبِ نُوحِيهَآ إِلَيۡكَ",
                            "surahAyahRef": "11:49",
                            "surahNameFr": "Hūd",
                            "highlightSegment": "نُوحِيهَآ",
                            "highlightLetter": "نُو + حِي + هَا",
                            "ruleApplied": "Les 3 lettres réunies dans « Nūhīhā »",
                            "ruleTag": "madd",
                            "explanationFr": "Ce mot modèle contient successivement les 3 lettres de Madd avec leurs voyelles correspondantes : Nū (Wāw après Dammah) + Hī (Yā' après Kasrah) + Hā (Alif après Fathah).",
                            "transliteration": "Nūhīhā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/011049.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : injecter de l'air dans le nez pendant le Madd de l'Alif, produisant un son nasalisé 'an'.",
                            "correctionFr": "Pincez votre nez en récitant 'Nūhīhā' : le son ne doit subir absolument aucune altération. Si le son change, vous laissez fuiter l'air par le nez !"
                        }
                    ]
                },
                {
                    "id": "madd-tabiee-silah-sughra",
                    "nameFr": "2. Le Madd Naturel (2 Temps) & Madd Silah Sughrā",
                    "nameAr": "المَدُّ الطَّبِيعِيُّ (حَرَكَتَانِ) وَمَدُّ الصِّلَةِ الصُّغْرَى",
                    "mnemonic": "Naturel = 2 temps stricts | Silah Sughrā = Pronom Hā' (ـهُۥ / ـهِۦ) entre deux voyelles",
                    "letters": [],
                    "definitionFr": "Le Madd naturel (طَبِيعِيّ) est celui dont la lettre ne peut exister sans lui et qui ne dépend d'aucune cause extérieure (ni Hamzah ni Soukoûn). Le Madd Silah Sughrā est le prolongement du pronom masculin singulier de 2 temps lorsqu'il est enclavé entre deux consonnes voyellées.",
                    "definitionLughatan": {
                        "ar": "الطَّبِيعِيُّ: المَنْسُوبُ إِلَى الفِطْرَةِ السَّلِيمَةِ الَّتِي لَا تَزِيدُ وَلَا تَنْقُصُ.",
                        "fr": "Naturel et conforme à l'instinct phonétique spontané."
                    },
                    "definitionIstilahan": {
                        "ar": "مَدٌّ لَا تَقُومُ ذَاتُ الحَرْفِ إِلَّا بِهِ، وَلَا يَتَوَقَّفُ عَلَى سَبَبٍ مِنْ هَمْزٍ أَوْ سُكُونٍ، وَمِقْدَارُهُ حَرَكَتَانِ.",
                        "fr": "Prolongation intrinsèque indispensable sans laquelle la consonne disparaîtrait, qui ne requiert aucune cause de Hamzah ni de soukoûn, mesurant rigoureusement deux temps."
                    },
                    "mechanismFr": "Mesurez deux temps métronomiques (le temps d'ouvrir et de fermer un doigt d'une cadence normale). Ne brusquez pas la terminaison par un coup de glotte involontaire.",
                    "physiologicalDetails": {
                        "tongue": "Reste parfaitement immobile pendant l'intégralité des deux battements temporels.",
                        "lips": "Gardent leur posture sans se refermer prématurément.",
                        "vocalCords": "Vibration continue et régulière.",
                        "airflow": "Flux sans à-coup."
                    },
                    "phoneticReasonFr": "Le pronom Hā' est un son faible et discret. Le prolonger de 2 temps en liaison évite qu'il ne soit avalé par la consonne suivante.",
                    "durationHarakat": 2,
                    "matnJazariyyah": {
                        "verseAr": "وَالمَدُّ أَصْلِيٌّ وَفَرْعِيٌّ لَهُ * وَسَمِّ أَوَّلاً طَبِيعِيّاً وَهُوْ\nمَا لَا تَوَقُّفٌ لَهُ عَلَى سَبَبْ * وَلَا بِدُونِهِ الحُرُوفُ تُجْتَلَبْ",
                        "transliteration": "Wal-maddu aslīyyun wa far'īyyun lahū * Wa sammi awwalan tabī'iyyan wa hū / Mā lā tawaqqufun lahū 'alā sabab * Wa lā bi-dūnihi-l-hurūfu tujtalab",
                        "translationFr": "« Le Madd est soit fondamental (Aslī) soit secondaire (Far'ī). Appelle le premier 'Naturel' : c'est celui qui ne dépend d'aucune cause et sans lequel les lettres ne sauraient exister. »",
                        "chapterNameAr": "بَابُ المَدِّ الطَّبِيعِيِّ"
                    },
                    "examples": [
                        {
                            "id": "ex-c4-2",
                            "arabicText": "إِنَّهُۥ كَانَ بِعِبَادِهِۦ خَبِيرَۢا",
                            "surahAyahRef": "17:30",
                            "surahNameFr": "Al-Isrā'",
                            "highlightSegment": "إِنَّهُۥ كَانَ",
                            "highlightLetter": "ـهُۥ (Silah Sughrā)",
                            "ruleApplied": "Madd Silah Sughrā (2 Temps)",
                            "ruleTag": "madd",
                            "explanationFr": "Le Hā' de « Innahū » est voyellé par une Dammah et entouré de deux lettres pourvues de voyelles (Nūn avec Fathah et Kāf avec Fathah). Il s'allonge de 2 temps en liaison : « Innahū kāna ».",
                            "transliteration": "Innahū kāna bi-'ibādihī Khabīrā",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/017030.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Couper la fin du Madd naturel par un coup de glotte parasite [hamzah] en disant 'Qālā'' au lieu de 'Qālā'.",
                            "correctionFr": "Laissez le son s'éteindre doucement sans serrer la gorge à la fin de la prolongation."
                        }
                    ]
                },
                {
                    "id": "leen-letters",
                    "nameFr": "3. Lettres de Madd vs Lettres de Līn (حَرْفَا اللِّينِ)",
                    "nameAr": "الفَرْقُ بَيْنَ حُرُوفِ المَدِّ وَحَرْفَيْ اللِّينِ",
                    "mnemonic": "Madd = Voyelle homogène avant | Līn = Fathah avant Wāw ou Yā' soukounés (خَوْف / بَيْت)",
                    "letters": ["و", "ي"],
                    "definitionFr": "Les lettres de Līn (اللِّين = la douceur) sont le Wāw et le Yā' soukounés lorsqu'ils sont précédés d'une FATHAH (et non d'une voyelle homogène). En liaison continue, ils n'ont AUCUNE prolongation temporelle et se prononcent comme des diphtongues douces.",
                    "definitionLughatan": {
                        "ar": "اللِّينُ: السُّهُولَةُ وَاليُسْرُ، ضِدُّ الخُشُونَةِ وَالشِّدَّةِ.",
                        "fr": "La souplesse, la douceur et l'absence de rudesse."
                    },
                    "definitionIstilahan": {
                        "ar": "خُرُوجُ الحَرْفِ مِنْ مَخْرَجِهِ بِسُهُولَةٍ وَيُسْرٍ مِنْ غَيْرِ كُلْفَةٍ عَلَى اللِّسَانِ، وَهُمَا الوَاوُ وَاليَاءُ السَّاكِنَتَانِ المَفْتُوحُ مَا قَبْلَهُمَا.",
                        "fr": "L'émission fluide et aisée de la consonne sans effort sur la langue. Ce sont le Wāw et le Yā' soukounés précédés d'une voyelle Fathah."
                    },
                    "mechanismFr": "Faites glisser la voix avec souplesse sur la diphtongue sans allonger le temps en cours de phrase (ex: « Bayt », « Khawf »). Si vous vous arrêtez sur le mot, il devient un Madd Līn de 2, 4 ou 6 temps.",
                    "physiologicalDetails": {
                        "tongue": "Glisse doucement vers le palais pour le Yā' de Līn sans marquer de temps long.",
                        "lips": "S'arrondissent avec légèreté pour le Wāw de Līn.",
                        "vocalCords": "Vibration continue.",
                        "airflow": "Flux continu sans interruption."
                    },
                    "phoneticReasonFr": "La Fathah qui précède n'étant pas homogène au Wāw ni au Yā', elle ne permet pas la formation d'une voyelle longue pure en milieu d'énoncé.",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَاللِّينُ مِنْهَا اليَاءُ وَالوَاوُ انْفَتَحْ * قَبْلَهُمَا كَـ خَوْفٍ اوْ بَيْتٍ وَضَحْ\nفَلَا تَمُدَّ فِي سِيَاقِ الوَصْلِ * وَمُدَّ حَالَ الوَقْفِ مِثْلَ الفَصْلِ",
                        "transliteration": "Wal-līnu minhā-l-yā'u wal-wāwu-nfatah * Qablahumā ka-khawfin aw baytin wadah / Falā tamudda fī siyāqi-l-wasli * Wa mudda hāla-l-waqfi mithla-l-fasli",
                        "translationFr": "« Le Līn concerne le Yā' et le Wāw précédés d'une Fathah comme dans 'Khawf' ou 'Bayt' ; ne les prolonge pas en liaison continue, mais allonge-les à la pause. »",
                        "chapterNameAr": "بَابُ اللِّينِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c4-3",
                            "arabicText": "فَلۡيَعۡبُدُواْ رَبَّ هَٰذَا ٱلۡبَيۡتِ ٱلَّذِىٓ أَطۡعَمَهُم مِّن جُوعٖ وَءَامَنَهُم مِّنۡ خَوۡفِۭ",
                            "surahAyahRef": "106:3-4",
                            "surahNameFr": "Quraysh",
                            "highlightSegment": "ٱلۡبَيۡتِ ... خَوۡفِۭ",
                            "highlightLetter": "ـَيۡـ ... ـَوۡـ",
                            "ruleApplied": "Lettres de Līn en Continuité vs Arrêt",
                            "ruleTag": "madd",
                            "explanationFr": "En reliant « Al-Bayti » vers le mot suivant, le Yā' ne prend aucun Madd (durée = 0 temps additionnel). Mais si l'on s'arrête sur « Khawf », le mot prend un Madd Līn de 2, 4 ou 6 temps au choix.",
                            "transliteration": "Rabbi hādhā-l-Bayt... min khawf",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/106003.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Allonger la lettre de Līn en cours de lecture continue (ex: dire 'Rabbi hādha-l-Baaayt-il-ladhī').",
                            "correctionFr": "En liaison (Wasl), la lettre de Līn n'a AUCUN Madd : prononcez-la rapidement et sans traîner."
                        }
                    ]
                },
                {
                    "id": "chameleon-words",
                    "nameFr": "4. Les Mots Caméléons : هُوَ, هِيَ, مَعِيَ (Wasl vs Waqf)",
                    "nameAr": "كَلِمَاتٌ خَادِعَةٌ: هُوَ، هِيَ، مَعِيَ بَيْنَ الوَصْلِ وَالوَقْفِ",
                    "mnemonic": "Ce sont des voyelles courtes vivantes : ne jamais les transformer en Madd !",
                    "letters": [],
                    "definitionFr": "Certains pronoms et mots fréquents comportent un Wāw ou un Yā' pourvus d'une voyelle Fathah (هُوَ, هِيَ, مَعِيَ). Beaucoup de débutants ont le réflexe erroné de les prolonger en voyelles longues. En liaison, ce sont de pures voyelles brèves de 1 temps !",
                    "definitionLughatan": {
                        "ar": "الخَادِعُ: الَّذِي يُوهِمُ غَيْرَ حَقِيقَتِهِ لِشَبَهِهِ بِهَا.",
                        "fr": "Ce qui trompe par ressemblance apparente."
                    },
                    "definitionIstilahan": {
                        "ar": "كَلِمَاتٌ آخِرُهَا حَرْفُ عِلَّةٍ مُتَحَرِّكٌ بِالفَتْحِ لَا مَدَّ فِيهَا وَصْلاً، وَيَجِبُ الحَذَرُ مِنْ تَمْطِيطِهَا.",
                        "fr": "Mots se terminant par une semi-voyelle mobile avec Fathah qui ne comportent aucun allongement en liaison continue."
                    },
                    "mechanismFr": "Articulez la Fathah de manière incisive et rapide sur 1 temps métronomique sans traîner sur le son.",
                    "physiologicalDetails": {
                        "tongue": "Vient rapidement sur la consonne suivante sans s'attarder.",
                        "lips": "Arrondissement bref pour le Wāw de Huwa, étirement bref pour le Yā' de Hiya.",
                        "vocalCords": "Vibration courte.",
                        "airflow": "Flux d'air immédiatement canalisé vers le mot suivant."
                    },
                    "phoneticReasonFr": "L'accent tonique du français incite souvent les francophones à étirer la dernière syllabe d'un mot. En arabe coranique, étirer une voyelle courte ajoute une lettre artificielle (créant un Lahn Jalī).",
                    "durationHarakat": 0,
                    "matnJazariyyah": {
                        "verseAr": "وَاحْذَرْ تُمَطِّطْ حَرَكَاتِ الأَحْرُفِ * فَتَجْلِبَ الأَلْفَاظَ دُونَ مَعْرِفِ\nفِي هُوَ أَوْ هِيَ وَفِي مَعِيَ فَلَا * تَزِدْ حُرُوفَ المَدِّ فِيمَا فُصِّلَا",
                        "transliteration": "Wahdhar tumattit harakāti-l-ahrufi * Fa-tajliba-l-alfāza dūna ma'rifi / Fī Huwa aw Hiya wa fī Ma'iya falā * Tazid hurūfa-l-maddi fīmā fussilā",
                        "translationFr": "« Prends garde d'étirer excessivement les voyelles des lettres, car tu introduirais des lettres étrangères sans t'en rendre compte : dans 'Huwa', 'Hiya' et 'Ma'iya', n'ajoute aucune lettre de Madd ! »",
                        "chapterNameAr": "بَابُ التَّحْذِيرِ مِنَ التَّمْطِيطِ"
                    },
                    "examples": [
                        {
                            "id": "ex-c4-4",
                            "arabicText": "قُلۡ هُوَ ٱللَّهُ أَحَدٌ",
                            "surahAyahRef": "112:1",
                            "surahNameFr": "Al-Ikhlās",
                            "highlightSegment": "قُلۡ هُوَ ٱللَّهُ",
                            "highlightLetter": "هُوَ (Fathah brève)",
                            "ruleApplied": "Voyelle Brève sans Madd",
                            "ruleTag": "izhar",
                            "explanationFr": "On prononce « Qul Huwa-Llāhu » avec une Fathah brève et percutante sur le Wāw. Il est formellement interdit de dire « Qul Huwāā-Llāh ».",
                            "transliteration": "Qul Huwa-Llāhu Ahad",
                            "audioUrl": "https://everyayah.com/data/Husary_128kbps/112001.mp3"
                        }
                    ],
                    "commonMistakes": [
                        {
                            "trapFr": "Pour les francophones : étirer la fin de « Huwa » ou « Hiya » en « Huwā » ou « Hiyā » par mimétisme de l'accentuation tonique française.",
                            "correctionFr": "Donnez exactement la même durée brève à la Fathah de 'Huwa' qu'à n'importe quelle voyelle courte."
                        }
                    ]
                }
            ],
            "guidedExercises": [
                {
                    "id": "exo-c4-1",
                    "title": "Chronométrage du Madd Naturel dans « قَالُواْ »",
                    "verseArabic": "قَالُوٓاْ أَنُؤۡمِنُ كَمَآ ءَامَنَ ٱلسُّفَهَآءُ",
                    "surahAyahRef": "2:13",
                    "targetSegment": "قَالُوٓاْ",
                    "promptFr": "Combien de temps de Madd compte la première syllabe « Qā- » dans le mot « Qālū » ?",
                    "hintFr": "La syllabe « Qā- » est-elle suivie d'une Hamzah dans le même mot ?",
                    "solutionFr": "Exactement 2 temps (Madd Aslī / Tabī'ī)",
                    "breakdownSteps": [
                        "La première syllabe « Qā » contient un Alif précédé d'un Qāf avec Fathah.",
                        "Aucune Hamzah ni soukoûn ne suit immédiatement cet Alif.",
                        "C'est un Madd naturel strict de 2 battements métronomiques."
                    ],
                    "audioUrl": "https://everyayah.com/data/Husary_128kbps/002013.mp3"
                }
            ],
            "quizzes": [
                {
                    "id": "q-c4-1",
                    "type": "mcq",
                    "promptFr": "Examen du livre arabe : Pourquoi le Madd Aslī est-il qualifié de « Tabī'ī » (طبيعي / naturel) ?",
                    "verseArabic": "نُوحِيهَآ إِلَيۡكَ",
                    "options": [
                        "Parce que toute personne douée d'une nature phonétique saine lui donne spontanément 2 temps sans excès ni diminution",
                        "Parce qu'il ne se récite que dans la nature",
                        "Parce qu'il ne nécessite aucune respiration",
                        "Parce qu'il peut durer de 2 à 6 temps au choix"
                    ],
                    "correctAnswer": "Parce que toute personne douée d'une nature phonétique saine lui donne spontanément 2 temps sans excès ni diminution",
                    "explanationFr": "L'érudit Al-Jamazūrī et les maîtres de l'art expliquent que la personne dotée d'une saine constitution linguistique (« صَاحِبُ الطَّبِيعَةِ السَّلِيمَةِ ») lui accorde instinctivement 2 temps sans le tronquer ni l'exagérer.",
                    "ruleId": "madd-tabiee-silah-sughra"
                },
                {
                    "id": "q-c4-2",
                    "type": "error_detect",
                    "promptFr": "Dans « قُلْ هُوَ اللَّهُ أَحَدٌ », un récitateur étire le Wāw en disant « Qul Huwā-Allāh ». Quelle erreur commet-il ?",
                    "verseArabic": "قُلۡ هُوَ ٱللَّهُ أَحَدٌ",
                    "targetWord": "هُوَ",
                    "surahAyahRef": "112:1",
                    "options": [
                        "Lahn Jalī : Allongement fautif d'une voyelle brève (Tamṭīt), créant une lettre de prolongation inexistante",
                        "Lahn Khafī d'allègement",
                        "Madd Lāzim obligatoire",
                        "Arrêt Hasan"
                    ],
                    "correctAnswer": "Lahn Jalī : Allongement fautif d'une voyelle brève (Tamṭīt), créant une lettre de prolongation inexistante",
                    "explanationFr": "Le mot « Huwa » porte une Fathah brève d'un seul temps. L'étirer jusqu'à créer un Alif (« Huwā ») rajoute une consonne au texte coranique, ce qui constitue un Lahn Jalī.",
                    "ruleId": "chameleon-words"
                },
                {
                    "id": "q-c4-3",
                    "type": "mcq",
                    "promptFr": "Quelle est la condition indispensable pour que le pronom Hā' bénéficie d'un Madd Silah Sughrā (2 temps) ?",
                    "verseArabic": "إِنَّهُۥ كَانَ بِعِبَادِهِۦ خَبِيرَۢا",
                    "surahAyahRef": "17:30",
                    "options": [
                        "Le Hā' doit être obligatoirement situé entre deux lettres vocalisées (mutaharrik)",
                        "Le Hā' doit être précédé d'un soukoûn",
                        "Le Hā' doit être suivi d'une Hamzah",
                        "Le Hā' doit être placé au début de la phrase"
                    ],
                    "correctAnswer": "Le Hā' doit être obligatoirement situé entre deux lettres vocalisées (mutaharrik)",
                    "explanationFr": "La règle canonique du Silah Sughrā exige que le pronom masculin singulier soit enclavé entre deux consonnes pourvues de voyelles (Fathah, Dammah ou Kasrah). S'il y a un soukoûn avant ou après, le Madd est annulé.",
                    "ruleId": "madd-tabiee-silah-sughra"
                }
            ]
        }
    ]
