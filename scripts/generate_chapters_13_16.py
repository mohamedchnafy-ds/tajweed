# -*- coding: utf-8 -*-
"""
Script to generate and append Chapters 13, 14, 15, and 16 into src/data/chaptersData.ts
faithfully based on the 1st source: tajwid.pdf (Learners' Handbook of Tajweed, Arabic101).
"""

import sys

CHAPTER_13_TS = '''  // ==========================================
  // CHAPITRE 13 : RENCONTRE DE DEUX SOUKOÛNS
  // ==========================================
  {
    id: 'chap-13',
    number: 13,
    slug: 'iltiqa-sakīnayn',
    titleFr: 'Rencontre de Deux Soukoûns (Iltiqā\' As-Sākinayn)',
    titleAr: 'اِلْتِقَاءُ السَّاكِنَيْنِ',
    category: 'advanced',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Comprendre l\\'interdiction phonologique fondamentale en arabe d\\'enchaîner deux consonnes soukounées entre deux mots. Découvrir les solutions sacrées : vocalisation de secours en Kasrah (le fameux Nūn Qutnī après Tanwīn) ou élision de la lettre de prolongation (Madd).',
    infographicPoints: [
      'Dans un même mot : La rencontre de 2 (ou même 3) soukoûns est autorisée et naturelle à l\\'arrêt (ex: وَٱلۡعَصۡرِ, قُرَيۡشٍ, et ٱلۡجَآنّ).',
      'Entre deux mots : En continu (Wasl), l\\'arabe interdit catégoriquement la succession de deux soukoûns. Le conflit doit être résolu.',
      'Cas 1 (Tanwīn + Hamzat Al-Wasl) : Le Tanwīn (qui cache un Nūn sākinah) prend une KASRAH de liaison (ex: نُوحٌ ٱبۡنَهُ -> Nūhuni-bnahu). C\\'est le Nūn Qutnī !',
      'Cas 2 (Madd + Hamzat Al-Wasl) : La lettre de prolongation s\\'efface complètement lors de la liaison (ex: وَقَالَا ٱلۡحَمۡدُ -> Wa qāla-l-hamd).',
      'Règle d\\'or : L\\'élision du Madd n\\'a lieu qu\\'en liaison (Wasl). Si l\\'on s\\'arrête sur le premier mot (Waqf), le Madd naturel de 2 temps est rétabli !',
      'Pré-ajustements du Mushaf : De nombreux cas sont déjà vocalisés pour vous dans le texte (ex: مَنِ ٱهۡتَدَىٰ avec Kasrah, ou لَكُمُ ٱلۡيَوۡمَ avec Dammah).'
    ],
    subrules: [
      {
        id: 'iltiqa-general-rules',
        nameFr: '1. Règle Générale : Dans un Mot vs Entre Deux Mots',
        nameAr: 'حُكْمُ الْتِقَاءِ السَّاكِنَيْنِ فِي كَلِمَةٍ وَكَلِمَتَيْنِ',
        mnemonic: 'Même mot = Toléré à l\\'arrêt | Deux mots = Résolution obligatoire en continu',
        letters: [],
        definitionFr: 'Un sākin (consonne soukounée) est une lettre dépourvue de voyelle (Fathah, Dammah ou Kasrah). En phonologie arabe, deux sākins peuvent se rencontrer à l\\'arrêt dans un mot, mais ne peuvent jamais être enchaînés à la suite entre deux mots en récitation continue.',
        mechanismFr: 'À l\\'arrêt, la bouche produit naturellement l\\'appui sur la consonne avant de s\\'arrêter (ex: « Al-\\'Asr »). Entre deux mots, la continuité du souffle est brisée : la langue doit soit ajouter une voyelle de secours, soit faire disparaître la lettre de prolongation.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c13-1',
            arabicText: 'وَٱلۡعَصۡرِ إِنَّ ٱلۡإِنسَٰنَ لَفِى خُسۡرٍ',
            surahAyahRef: '103:1-2',
            surahNameFr: 'Al-\\'Asr',
            highlightSegment: 'وَٱلۡعَصۡرِ',
            highlightLetter: 'صۡ + رۡ',
            ruleApplied: 'Deux soukoûns tolérés à l\\'arrêt dans un même mot',
            ruleTag: 'silent',
            explanationFr: 'Lors de l\\'arrêt sur « Al-\\'Asr », le Sād porte son soukoûn originel et le Râ prend un soukoûn temporaire (Sukoûn \'Ārid). Cette succession est parfaitement naturelle et autorisée à la pause.',
            transliteration: 'Wa-l-\\'asri (à l\\'arrêt : Wa-l-\\'asr)',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/103001.mp3'
          },
          {
            id: 'ex-c13-2',
            arabicText: 'فَيَوۡمَئِذٖ لَّا يُسۡـَٔلُ عَن ذَنۢبِهِۦٓ إِنسٞ وَلَا جَآنّٞ',
            surahAyahRef: '55:39',
            surahNameFr: 'Ar-Rahmān',
            highlightSegment: 'جَآنّٞ',
            highlightLetter: 'Madd + Shaddah',
            ruleApplied: 'Trois soukoûns consécutifs à l\\'arrêt',
            ruleTag: 'madd',
            explanationFr: 'L\\'Alif de Madd est toujours sākin, et le Nūn avec Shaddah contient deux Nūn (l\\'un sākin, l\\'autre prenant un soukoûn temporaire à l\\'arrêt). L\\'élongation de 6 temps (Madd Lāzim) compense cette rencontre.',
            transliteration: 'Wa lā jāāāāāānn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/055039.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Croire qu\\'il est interdit de s\\'arrêter sur un mot contenant deux soukoûns consécutifs.',
            correctionFr: 'C\\'est au contraire la norme à la pause pour les mots comme « Al-\\'Asr », « Quraysh », ou « Nasta\'īn ».'
          }
        ]
      },
      {
        id: 'iltiqa-tanween-wasl',
        nameFr: '2. Tanwīn suivi de Hamzat Al-Wasl (Le Nūn Qutnī)',
        nameAr: 'الْتِقَاءُ السَّاكِنَيْنِ عِنْدَ التَّنْوِينِ (نُونُ الوِقَايَةِ / نُونُ قُطْنِي)',
        mnemonic: 'Tanwīn + Wasl = Nūn vocalisé avec KASRAH de secours (Ni)',
        letters: ['ن'],
        definitionFr: 'Le Tanwīn est phonétiquement un Nūn sākinah sous-jacent. Lorsqu\\'il est immédiatement suivi d\\'un mot débutant par Hamzat Al-Wasl (qui tombe en liaison), ce Nūn caché rencontre la consonne suivante qui est soukounée. Pour briser ce blocage, le Nūn prend obligatoirement une Kasrah.',
        mechanismFr: 'Ne cherchez pas à prononcer un arrêt entre les deux mots. Prononcez le mot avec son Tanwīn en transformant le son [N] en [Ni] lié directement à la consonne suivante sans Hamzah.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c13-3',
            arabicText: 'وَنَادَىٰ نُوحٌ ٱبۡنَهُۥ وَكَانَ فِى مَعۡزِلٖ',
            surahAyahRef: '11:42',
            surahNameFr: 'Hūd',
            highlightSegment: 'نُوحٌ ٱبۡنَهُۥ',
            highlightLetter: 'ٌ + ٱبۡ',
            ruleApplied: 'Nūn Qutnī : Vocalisation en Kasrah',
            ruleTag: 'izhar',
            explanationFr: 'S\\'écrit « Nūhun ibnahū ». En liaison continue, se prononce obligatoirement : « Nūhu-ni-bnahū » (نُوحُنِ بۡنَهُ).',
            transliteration: 'Nūhu-ni-bnahū',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/011042.mp3'
          },
          {
            id: 'ex-c13-4',
            arabicText: 'قُلۡ هُوَ ٱللَّهُ أَحَدٌ ١ ٱللَّهُ ٱلصَّمَدُ',
            surahAyahRef: '112:1-2',
            surahNameFr: 'Al-Ikhlās',
            highlightSegment: 'أَحَدٌ ٱللَّهُ',
            highlightLetter: 'ٌ + ٱل',
            ruleApplied: 'Liaison continue du Tanwīn vers le Nom Majestueux',
            ruleTag: 'izhar',
            explanationFr: 'Si vous liez le verset 1 et 2 sans pause : « Ahadun » + « Allāh » se prononce « Ahadu-ni-llāhu-s-Samad » (أَحَدُنِ اللَّهُ).',
            transliteration: 'Ahadu-ni-Llāhu-s-Samad',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/112001.mp3'
          },
          {
            id: 'ex-c13-5',
            arabicText: 'مَثَلًا ٱلۡقَوۡمُ ٱلَّذِينَ كَذَّبُواْ بِـَٔايَٰتِنَا',
            surahAyahRef: '7:177',
            surahNameFr: 'Al-A\'rāf',
            highlightSegment: 'مَثَلًا ٱلۡقَوۡمُ',
            highlightLetter: 'ً + ٱل',
            ruleApplied: 'Tanwīn Fathah suivi de Hamzat Al-Wasl',
            ruleTag: 'izhar',
            explanationFr: '« Mathalan Al-Qawmu » se prononce en liaison : « Mathala-ni-l-qawmu » (مَثَلَنِ لۡقَوۡمُ).',
            transliteration: 'Mathala-ni-l-qawm',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/007177.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Prononcer un temps d\\'arrêt ou une coupure artificielle entre le mot avec Tanwīn et le mot suivant.',
            correctionFr: 'Liez avec fluidité en prononçant un Nūn avec Kasrah [ni] directement greffé sur le mot suivant.'
          }
        ]
      },
      {
        id: 'iltiqa-madd-wasl',
        nameFr: '3. Lettre de Prolongation (Madd) suivie de Hamzat Al-Wasl',
        nameAr: 'حَذْفُ حَرْفِ المَدِّ لِلتَّخَلُّصِ مِنَ الْتِقَاءِ السَّاكِنَيْنِ',
        mnemonic: 'En continu = Suppression du Madd | À l\\'arrêt = Rétablissement du Madd (2 temps)',
        letters: ['ا', 'و', 'ي'],
        definitionFr: 'Les 3 lettres de prolongation (Alif, Wāw, Yā\') sont par nature en état de soukoûn permanent. Lorsqu\\'elles sont immédiatement suivies d\\'un mot commençant par Hamzat Al-Wasl, la rencontre de deux soukoûns se produit. La langue arabe résout ce conflit en supprimant totalement la voyelle longue en récitation continue.',
        mechanismFr: 'En lecture continue (Wasl), ne prolongez pas la voyelle : passez directement de la voyelle courte initiale à la consonne suivante. En revanche, si vous marquez une pause sur le mot (Waqf), rétablissez le Madd naturel de 2 temps.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c13-6',
            arabicText: 'وَقَالَا ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِى فَضَّلَنَا',
            surahAyahRef: '27:15',
            surahNameFr: 'An-Naml',
            highlightSegment: 'وَقَالَا ٱلۡحَمۡدُ',
            highlightLetter: 'َا + ٱلۡ',
            ruleApplied: 'Élision de l\\'Alif duel en continu',
            ruleTag: 'silent',
            explanationFr: '« Wa qālā » se termine par un Alif duel. En liaison avec « Al-Hamdu », l\\'Alif saute : on prononce « Wa qāla-l-Hamdu » (comme un singulier phonétique !). À l\\'arrêt sur « Wa qālā », les 2 temps sont rétablis.',
            transliteration: 'Wa qāla-l-hamdu (à l\\'arrêt : Wa qālā)',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/027015.mp3'
          },
          {
            id: 'ex-c13-7',
            arabicText: 'يَفۡتَرِى ٱلۡكَذِبَ عَلَى ٱللَّهِ كَذِبًا',
            surahAyahRef: '6:21',
            surahNameFr: 'Al-An\'ām',
            highlightSegment: 'يَفۡتَرِى ٱلۡكَذِبَ',
            highlightLetter: 'ِى + ٱلۡ',
            ruleApplied: 'Élision du Yā\' de prolongation',
            ruleTag: 'silent',
            explanationFr: 'Le verbe « Yaftarī » perd son Yā\' en liaison continue : on prononce « Yaftari-l-kadhiba » avec une simple Kasrah courte.',
            transliteration: 'Yaftari-l-kadhib',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/006021.mp3'
          },
          {
            id: 'ex-c13-8',
            arabicText: 'وَٱللَّهُ ذُو ٱلۡفَضۡلِ ٱلۡعَظِيمِ',
            surahAyahRef: '2:105',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'ذُو ٱلۡفَضۡلِ',
            highlightLetter: 'ُو + ٱلۡ',
            ruleApplied: 'Élision du Wāw de prolongation',
            ruleTag: 'silent',
            explanationFr: '« Dhū » perd son Wāw lors de la liaison avec « Al-Fadl » : se prononce « Dhu-l-Fadl » avec une Dammah courte.',
            transliteration: 'Dhu-l-fadl',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002105.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Garder une prolongation de 2 temps sur la voyelle longue lors de la liaison avec le mot suivant (ex: dire « Waa qāālā al-hamdu »).',
            correctionFr: 'Le Madd doit disparaître immédiatement au profit de la voyelle brève pour enchaîner sur la consonne suivante.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'ex-g-c13-1',
        title: 'Application du Nūn Qutnī après Tanwīn',
        verseArabic: 'جَنَّٰتِ عَدۡنٍ ٱلَّتِى وَعَدَ ٱلرَّحۡمَٰنُ عِبَادَهُۥ بِٱلۡغَيۡبِ',
        surahAyahRef: '19:61',
        targetSegment: 'عَدۡنٍ ٱلَّتِى',
        promptFr: 'Comment devez-vous enchaîner phonétiquement le mot « \'Adnin » avec le mot suivant « Allatī » sans marquer de pause ?',
        hintFr: 'Le Tanwīn cache une consonne Nūn soukounée. Appliquez la Kasrah de secours.',
        solutionFr: 'On prononce « \'Adni-ni-llatī » (عَدۡنِنِ لَّتِي) en liant directement le Nūn vocalisé en Kasrah à la Lām avec Shaddah.',
        breakdownSteps: [
          '1. Repérez le Tanwīn Kasrah sur la lettre Dāl de « \'Adnin » (عَدۡنٍ).',
          '2. Identifiez Hamzat Al-Wasl au début de « Allatī » (ٱلَّتِي), qui disparaît en continu.',
          '3. Vocalisez le Nūn du Tanwīn avec une Kasrah [ni].',
          '4. Enchaînez sans coupure : « \'Adni-ni-llatī ».'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/019061.mp3'
      },
      {
        id: 'ex-g-c13-2',
        title: 'Gestion de l\\'Alif de prolongation en pause vs en liaison',
        verseArabic: 'إِذۡ نَادَىٰهُ رَبُّهُۥ بِٱلۡوَادِ ٱلۡمُقَدَّسِ طُوًى ١٦ ٱذۡهَبۡ إِلَىٰ فِرۡعَوۡنَ',
        surahAyahRef: '79:16-17',
        targetSegment: 'طُوًى ١٦ ٱذۡهَبۡ',
        promptFr: 'Quelle est la différence de récitation si vous vous arrêtez à la fin du verset 16 (sur « Tuwan ») vs si vous liez les versets 16 et 17 sans arrêt ?',
        hintFr: 'À l\\'arrêt, le Tanwīn Fathah se transforme en Madd \'Iwad (2 temps). En liaison, le Nūn Qutnī s\\'applique.',
        solutionFr: 'À l\\'arrêt sur le verset 16 : on prononce « Tuwā » avec 2 temps de Madd \'Iwad. En liaison directe avec le verset 17 : on prononce « Tuwa-ni-dh-hab » avec Kasrah de liaison.',
        breakdownSteps: [
          '1. À la pause (Waqf) sur le verset 16 : règle du Madd \'Iwad -> « Tuwā » (طُوَا).',
          '2. En liaison continue (Wasl) vers le verset 17 : Hamzat Al-Wasl tombe -> Nūn Qutnī avec Kasrah -> « Tuwa-ni-dh-hab » (طُوَنِ ذۡهَبۡ).'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/079016.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c13-1',
        type: 'mcq',
        promptFr: 'Pourquoi la rencontre de deux soukoûns (Iltiqā\' As-Sākinayn) est-elle interdite entre deux mots en récitation continue ?',
        verseArabic: 'مَّنِ ٱهۡتَدَىٰ فَإِنَّمَا يَهۡتَدِى لِنَفۡسِهِۦ',
        surahAyahRef: '17:15',
        options: [
          'Car les cordes vocales et la langue ne peuvent physiquement pas émettre deux consonnes immobiles sans voyelle intermédiaire en flux continu',
          'Car cela change la traduction du verset en un sens négatif',
          'Car cela annule la validité de la prière',
          'Car les lettres douces deviennent alors emphatiques'
        ],
        correctAnswer: 'Car les cordes vocales et la langue ne peuvent physiquement pas émettre deux consonnes immobiles sans voyelle intermédiaire en flux continu',
        explanationFr: 'En phonétique arabe, il est impossible d\\'enchaîner deux consonnes privées de voyelles : le blocage articulatoire oblige à une vocalisation ou à une élision.',
        ruleId: 'iltiqa-general-rules'
      },
      {
        id: 'q-c13-2',
        type: 'click_word',
        promptFr: 'Cliquez sur le segment où la règle du « Nūn Qutnī » (vocalisation du Tanwīn en Kasrah) doit obligatoirement être appliquée en liaison continue :',
        verseArabic: 'قُلۡ هُوَ ٱللَّهُ أَحَدٌ ١ ٱللَّهُ ٱلصَّمَدُ',
        clickableSegments: ['قُلۡ', 'هُوَ', 'ٱللَّهُ', 'أَحَدٌ', 'ٱلصَّمَدُ'],
        correctAnswer: 'أَحَدٌ',
        explanationFr: '« Ahadun » se termine par un Tanwīn Dammah. Relié à « Allāh », il devient « Ahadu-ni-Llāhu » pour éviter le télescopage des soukoûns.',
        ruleId: 'iltiqa-tanween-wasl'
      },
      {
        id: 'q-c13-3',
        type: 'error_detect',
        promptFr: 'Dans « وَقَالَا ٱلۡحَمۡدُ لِلَّهِ », un lecteur récite en liaison : « Wa qāālā al-hamdu » en prolongeant l\\'Alif du duel de 2 temps. Quelle est l\\'erreur ?',
        verseArabic: 'وَقَالَا ٱلۡحَمۡدُ لِلَّهِ',
        targetWord: 'وَقَالَا ٱلۡحَمۡدُ',
        surahAyahRef: '27:15',
        options: [
          'Erreur d\\'élision : en liaison continue, l\\'Alif de Madd doit être totalement effacé pour résoudre le conflit de soukoûns (on doit dire « Wa qāla-l-Hamd »)',
          'Il fallait faire une prolongation de 6 temps (Madd Lāzim)',
          'Il fallait vocaliser l\\'Alif avec une Dammah',
          'Aucune erreur, le duel doit toujours être prolongé'
        ],
        correctAnswer: 'Erreur d\\'élision : en liaison continue, l\\'Alif de Madd doit être totalement effacé pour résoudre le conflit de soukoûns (on doit dire « Wa qāla-l-Hamd »)',
        explanationFr: 'La règle est sans équivoque : toute lettre de prolongation suivie d\\'une Hamzat Al-Wasl est entièrement gommée phonétiquement en liaison.',
        ruleId: 'iltiqa-madd-wasl'
      },
      {
        id: 'q-c13-4',
        type: 'mcq',
        promptFr: 'Si vous vous arrêtez (Waqf) sur le mot « وَقَالَا » dans le verset 27:15, comment devez-vous prononcer l\\'Alif duel final ?',
        verseArabic: 'وَلَقَدۡ ءَاتَيۡنَا دَاوُۥدَ وَسُلَيۡمَٰنَ عِلۡمٗاۖ وَقَالَا ٱلۡحَمۡدُ لِلَّهِ',
        surahAyahRef: '27:15',
        options: [
          'On rétablit pleinement la prolongation naturelle de 2 temps : « Wa qālā »',
          'On prononce avec une voyelle courte : « Wa qāla »',
          'On prononce un son Hamzah : « Wa qāla\' »',
          'L\\'arrêt sur ce mot est formellement interdit'
        ],
        correctAnswer: 'On rétablit pleinement la prolongation naturelle de 2 temps : « Wa qālā »',
        explanationFr: 'La cause de l\\'élision (la rencontre avec le Lām sākin de l\\'article) disparaît dès lors que l\\'on s\\'arrête avant lui ! Le Madd naturel retrouve donc ses 2 temps.',
        ruleId: 'iltiqa-madd-wasl'
      },
      {
        id: 'q-c13-5',
        type: 'mcq',
        promptFr: 'Comment s\\'appelle le symbole spécifique inséré au-dessus du Tanwīn dans les Mushafs de style indo-pakistanais et turcs pour rappeler cette règle ?',
        verseArabic: 'وَنَادَىٰ نُوحٌ ٱبۡنَهُۥ',
        surahAyahRef: '11:42',
        options: [
          'Le petit Nūn Qutnī (un minuscule ن écrit sous ou sur le Tanwīn)',
          'Le signe de Shaddah',
          'Le cercle de Tashīl',
          'Le trait d\\'Imālah'
        ],
        correctAnswer: 'Le petit Nūn Qutnī (un minuscule ن écrit sous ou sur le Tanwīn)',
        explanationFr: 'Dans les éditions non arabes du Mushaf, les calligraphes ont ajouté un minuscule « Nūn » sous le Tanwīn pour aider les lecteurs non arabophones à ne pas oublier la Kasrah de liaison.',
        ruleId: 'iltiqa-tanween-wasl'
      }
    ]
  },
'''

CHAPTER_14_TS = '''  // ==========================================
  // CHAPITRE 14 : LES LETTRES ISOLÉES
  // ==========================================
  {
    id: 'chap-14',
    number: 14,
    slug: 'disjointed-letters',
    titleFr: 'Les Lettres Isolées (Al-Hurūf Al-Muqatta\'ah)',
    titleAr: 'الحُرُوفُ المُقَطَّعَةُ فِي فَوَاتِحِ السُّوَرِ',
    category: 'advanced',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Décrypter les 14 lettres mystérieuses qui ouvrent 29 sourates du Coran. Apprendre à les nommer par leur nom alphabétique entier et maîtriser leurs 3 groupes d\\'élongation : 0 temps (Alif), 2 temps (Hayyun Tahur), et 6 temps (Naqasa \'Asalukum) avec toutes leurs règles d\\'Idghām et d\\'Ikhfā internes.',
    infographicPoints: [
      '14 lettres mystérieuses : Présentes à l\\'ouverture de 29 sourates. Réunies dans la phrase : صِلْهُ سُحَيْرًا مَنْ قَطَعَك.',
      'Règle d\\'or : On ne lit pas le son de la lettre (ba, ta...), mais son NOM alphabétique complet (Bā, Tā, Nūn, Qāf, Lām, Mīm...).',
      'Groupe 1 (0 temps) : L\\'Alif (أَلِف) ne contient aucune voyelle longue. Il se prononce sans aucun étirement.',
      'Groupe 2 (2 temps) : Les 5 lettres de « حَيٌّ طَهُرَ » (Hā, Yā, Tā, Hā, Rā). Attention : se prononcent sans Hamzah finale !',
      'Groupe 3 (6 temps) : Les 8 lettres de « نَقَصَ عَسَلُكُمْ » (Madd Lāzim Harfī de 6 temps obligatoires). Note : le \'Ayn (ع) peut se lire en 4 ou 6 temps.',
      'Tajwīd interne : Puisque chaque lettre se prononce comme un mot, appliquez le Tajwīd entre elles (Idghām dans الم, Ikhfā dans عسق, Qalqalah dans كهيعص) !'
    ],
    subrules: [
      {
        id: 'disjointed-overview-groups',
        nameFr: '1. Les 3 Groupes d\\'Élongation des Lettres Isolées',
        nameAr: 'أَقْسَامُ الحُرُوفِ المُقَطَّعَةِ مِنْ حَيْثُ المَدّ',
        mnemonic: 'Alif = 0 temps | حَيٌّ طَهُرَ = 2 temps | نَقَصَ عَسَلُكُمْ = 6 temps',
        letters: ['ا', 'ح', 'ي', 'ط', 'ه', 'ر', 'ن', 'ق', 'ص', 'ع', 'س', 'ل', 'ك', 'م'],
        definitionFr: 'Les 14 lettres isolées réparties à l\\'ouverture de 29 sourates sont divisées selon leur durée en 3 catégories immuables : l\\'Alif (aucun Madd), les 5 lettres de « حَيٌّ طَهُرَ » (Madd naturel de 2 temps), et les 8 lettres de « نَقَصَ عَسَلُكُمْ » (Madd Lāzim de 6 temps).',
        mechanismFr: 'Chaque lettre est prononcée comme son nom propre en arabe. Pour « حَيٌّ طَهُرَ », ouvrez la bouche sans bloquer la glotte (pas de Hamzah finale : dites « Tā », pas « Tā\' »). Pour « نَقَصَ عَسَلُكُمْ », comptez fermement 6 temps de prolongation.',
        durationHarakat: 6,
        examples: [
          {
            id: 'ex-c14-1',
            arabicText: 'طٰهٰ ١ مَآ أَنزَلۡنَا عَلَيۡكَ ٱلۡقُرۡءَانَ لِتَشۡقَىٰٓ',
            surahAyahRef: '20:1',
            surahNameFr: 'Tā-Hā',
            highlightSegment: 'طٰهٰ',
            highlightLetter: 'ط + هـ (حَيٌّ طَهُرَ)',
            ruleApplied: 'Deux lettres du groupe « حَيٌّ طَهُرَ » (2 temps chacune)',
            ruleTag: 'madd',
            explanationFr: 'Composé de Tā (طَا) et de Hā (هَا). Chacune se prolonge de 2 temps naturels sans Hamzah finale. Se prononce : « Tā-Hā » (total 4 temps).',
            transliteration: 'Tā-Hā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/020001.mp3'
          },
          {
            id: 'ex-c14-2',
            arabicText: 'قٓۚ وَٱلۡقُرۡءَانِ ٱلۡمَجِيدِ',
            surahAyahRef: '50:1',
            surahNameFr: 'Qāf',
            highlightSegment: 'قٓ',
            highlightLetter: 'ق (نَقَصَ عَسَلُكُمْ)',
            ruleApplied: 'Lettre unique du groupe « نَقَصَ عَسَلُكُمْ » (6 temps)',
            ruleTag: 'madd',
            explanationFr: 'La lettre Qāf s\\'épelle « Qāāāāāāf » (قَافْ) avec un Alif suivi d\\'un Fā sākin : c\\'est un Madd Lāzim Harfī Mukhaffaf de 6 temps obligatoires.',
            transliteration: 'Qāāāāāāf',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/050001.mp3'
          },
          {
            id: 'ex-c14-3',
            arabicText: 'الٓمٓ ١ ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ',
            surahAyahRef: '2:1',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'الٓمٓ',
            highlightLetter: 'Alif (0) + Lām (6) + Mīm (6)',
            ruleApplied: 'Combinaison des 3 types d\\'élongation',
            ruleTag: 'madd',
            explanationFr: '« Alif » (0 temps) + « Lāāāām » (6 temps) + fusion dans le « Mīīīīm » (6 temps) avec 2 temps de Ghunnah entre les deux.',
            transliteration: 'Alif-Lāāāām-Mīīīīm',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Prononcer les lettres de « حَيٌّ طَهُرَ » avec une Hamzah finale comme dans l\\'alphabet classique (ex: dire « Hā\' » ou « Râ\' »).',
            correctionFr: 'Dans les lettres isolées du Coran, elles se terminent strictement par une voyelle longue ouverte : « Hā », « Yā », « Tā », « Hā », « Rā ».'
          },
          {
            trapFr: 'Prolonger l\\'Alif (dire « Ālif »).',
            correctionFr: 'Le nom « Alif » ne contient aucune lettre de Madd : il se prononce brièvement sans aucune prolongation.'
          }
        ]
      },
      {
        id: 'disjointed-internal-tajweed',
        nameFr: '2. Règles de Tajwīd Internes aux Lettres Isolées',
        nameAr: 'أَحْكَامُ التَّجْوِيدِ بَيْنَ أَسْمَاءِ الحُرُوفِ المُقَطَّعَةِ',
        mnemonic: 'Épeler chaque lettre comme un mot indépendant et appliquer Idghām, Ikhfā, Qalqalah',
        letters: [],
        definitionFr: 'Puisque chaque lettre isolée se prononce comme un mot arabe complet (ex: Sīn = سِينْ, Mīm = مِيمْ), la fin du nom d\\'une lettre rencontre le début du nom de la suivante. Toutes les règles de Tajwīd (Idghām, Ikhfā, Ghunnah, Qalqalah) s\\'y appliquent avec rigueur.',
        mechanismFr: 'Dans « طسم » : « Tā » (2t) + « Sīn » termine par un Nūn sākinah + « Mīm » commence par un M : appliquez l\\'Idghām avec Ghunnah de 2 temps entre le Sīn et le Mīm ! Dans « عسق » : Ikhfā entre \'Ayn et Sīn, puis Ikhfā avec Ghunnah emphatique entre Sīn et Qāf !',
        durationHarakat: 6,
        examples: [
          {
            id: 'ex-c14-4',
            arabicText: 'طسٓمٓ ١ تِلۡكَ ءَايَٰتُ ٱلۡكِتَٰبِ ٱلۡمُبِينِ',
            surahAyahRef: '26:1',
            surahNameFr: 'Ash-Shu\'arā\'',
            highlightSegment: 'طسٓمٓ',
            highlightLetter: 'Sīn (سِينْ) + Mīm (مِيمْ)',
            ruleApplied: 'Idghām avec Ghunnah entre Sīn et Mīm',
            ruleTag: 'ghunnah',
            explanationFr: 'S\\'épelle : « Tā-Sīm-Mīm ». Le Nūn final de Sīn fusionne totalement dans le Mīm initial du mot suivant avec une Ghunnah complète de 2 temps (Madd Lāzim Harfī Muthaqqal).',
            transliteration: 'Tā-Sīīīm-Mīīīm',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/026001.mp3'
          },
          {
            id: 'ex-c14-5',
            arabicText: 'حمٓ ١ عٓسٓقٓ ٢',
            surahAyahRef: '42:1-2',
            surahNameFr: 'Ash-Shūrā',
            highlightSegment: 'عٓسٓقٓ',
            highlightLetter: '\'Ayn (عَيْنْ) + Sīn (سِينْ) + Qāf (قَافْ)',
            ruleApplied: 'Double Ikhfā successif dans le même verset',
            ruleTag: 'ghunnah',
            explanationFr: '1. Ikhfā fine entre le Nūn de « \'Ayn » et le Sīn. 2. Ikhfā lourde (emphatique) entre le Nūn de « Sīn » et le Qāf !',
            transliteration: '\'Ayyyn-Sīīīn-Qāāāf',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/042002.mp3'
          },
          {
            id: 'ex-c14-6',
            arabicText: 'كٓهيعٓصٓ ١ ذِكۡرُ رَحۡمَتِ رَبِّكَ عَبۡدَهُۥ زَكَرِيَّآ',
            surahAyahRef: '19:1',
            surahNameFr: 'Maryam',
            highlightSegment: 'كٓهيعٓصٓ',
            highlightLetter: 'Sād (صَادْ) -> Dāl final',
            ruleApplied: 'Qalqalah à la fin de la combinaison',
            ruleTag: 'qalqalah',
            explanationFr: 'Le nom de la lettre Sād (صَادْ) se termine par un Dāl sākin : on applique obligatoirement un rebond de Qalqalah sur le Dāl avant de marquer la pause.',
            transliteration: 'Kāāāf-Hā-Yā-\'Ayyyn-Sāāād(e)',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/019001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Oublier d\\'appliquer la Ghunnah d\\'Idghām entre le Lām et le Mīm dans « Alif-Lām-Mīm » ou « Tā-Sīn-Mīm ».',
            correctionFr: 'Le Lām se termine par Mīm sākinah et Mīm commence par Mīm : c\\'est un Idghām Mutamāthilayn obligatoire avec 2 temps de nasillement.'
          }
        ]
      },
      {
        id: 'disjointed-linking-rules',
        nameFr: '3. Règles Particulières de Liaison avec le Verset Suivant',
        nameAr: 'أَحْكَامُ وَصْلِ فَوَاتِحِ السُّوَرِ بِمَا بَعْدَهَا',
        mnemonic: 'Al-Imrān = Lāāām-Mīma-Llāh | Yā-Sīn & Nūn = Izhār sans Idghām en liaison',
        letters: [],
        definitionFr: 'Bien qu\\'il soit préférable (Sunnah) de s\\'arrêter à la fin des versets de lettres isolées, si le lecteur choisit de lier le verset avec le suivant, deux cas célèbres de la lecture de Hafs s\\'appliquent.',
        mechanismFr: '1. Dans Āl-i \'Imrān (الٓمٓ ١ ٱللَّهُ) : pour éviter la rencontre de 2 soukoûns, le Mīm prend une Fathah (« Alif-Lāāām-Mīma-Llāhu ») et peut se lire en 2 temps ou 6 temps. 2. Dans Yā-Sīn (يسٓ ١ وَٱلۡقُرۡءَانِ) et Al-Qalam (نٓ ١ وَٱلۡقَلَمِ) : on applique un Izhār Mutlaq (pas d\\'Idghām du Nūn dans le Wāw).',
        durationHarakat: 6,
        examples: [
          {
            id: 'ex-c14-7',
            arabicText: 'الٓمٓ ١ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَىُّ ٱلۡقَيُّومُ',
            surahAyahRef: '3:1-2',
            surahNameFr: 'Āl-i \'Imrān',
            highlightSegment: 'الٓمٓ ١ ٱللَّهُ',
            highlightLetter: 'Mīm (مِيمْ) + Allāh (ٱللَّهُ)',
            ruleApplied: 'Liaison exceptionnelle avec Fathah sur le Mīm',
            ruleTag: 'madd',
            explanationFr: 'En cas de liaison des versets 1 et 2 : le Mīm prend une Fathah pour la liaison divine : « Alif-Lāāām-Mīma-Llāh ». Le Mīm peut alors être prolongé de 2 temps (en tenant compte de la Fathah) ou 6 temps (en tenant compte du soukoûn originel).',
            transliteration: 'Alif-Lāāām-Mīma-Llāh',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/003001.mp3'
          },
          {
            id: 'ex-c14-8',
            arabicText: 'يسٓ ١ وَٱلۡقُرۡءَانِ ٱلۡحَكِيمِ',
            surahAyahRef: '36:1-2',
            surahNameFr: 'Yā-Sīn',
            highlightSegment: 'يسٓ ١ وَٱلۡقُرۡءَانِ',
            highlightLetter: 'Sīn (سِينْ) + Wāw (وَ)',
            ruleApplied: 'Izhār obligatoire en liaison selon la voie de la Shātibiyyah',
            ruleTag: 'izhar',
            explanationFr: 'En liaison directe : le Nūn final de Sīn ne fusionne PAS dans le Wāw. On prononce un Nūn parfaitement clair : « Yā-Sīīn wa-l-Qur\'ān » (sans nasalisation Idghām).',
            transliteration: 'Yā-Sīīn wa-l-Qur\'āni-l-hakīm',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/036001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Faire un Idghām du Nūn de Yā-Sīn ou de Nūn dans le Wāw lors de la liaison (dire « Yā-Sīw-wa-l-Qur\'ān »).',
            correctionFr: 'Selon la voie de référence de la Shātibiyyah pour Hafs, l\\'Izhār est obligatoire sur ces deux ouvertures.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'ex-g-c14-1',
        title: 'Décomposition intégrale de l\\'ouverture de Sourate Maryam',
        verseArabic: 'كٓهيعٓصٓ ١ ذِكۡرُ رَحۡمَتِ رَبِّكَ عَبۡدَهُۥ زَكَرِيَّآ',
        surahAyahRef: '19:1',
        targetSegment: 'كٓهيعٓصٓ',
        promptFr: 'Analysez lettre par lettre le verset « Kāf-Hā-Yā-\'Ayn-Sād » en précisant le nom, la durée en temps (harakāt) et les règles de Tajwīd appliquées.',
        hintFr: 'Identifiez quelles lettres appartiennent à « حَيٌّ طَهُرَ » (2t) et lesquelles à « نَقَصَ عَسَلُكُمْ » (6t).',
        solutionFr: '1. Kāf (كَافْ) = 6 temps. 2. Hā (هَا) = 2 temps. 3. Yā (يَا) = 2 temps. 4. \'Ayn (عَيْنْ) = 4 ou 6 temps, suivi d\\'une Ikhfā fine sur le Sād. 5. Sād (صَادْ) = 6 temps, terminé par une Qalqalah sur le Dāl.',
        breakdownSteps: [
          '1. Kāf : groupe « نَقَصَ عَسَلُكُمْ » -> Madd Lāzim de 6 temps.',
          '2. Hā et Yā : groupe « حَيٌّ طَهُرَ » -> Madd naturel de 2 temps chacune sans Hamzah.',
          '3. \'Ayn : Madd Līn de 4 ou 6 temps, Nūn sākinah final en Ikhfā devant le Sād.',
          '4. Sād : Madd Lāzim de 6 temps, Dāl sākin final en rebond de Qalqalah.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/019001.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c14-1',
        type: 'mcq',
        promptFr: 'Combien de temps (ḥarakāt) dure l\\'élongation de la lettre Alif (أَلِف) dans les lettres isolées ?',
        verseArabic: 'الٓمٓصٓ ١ كِتَٰبٌ أُنزِلَ إِلَيۡكَ',
        surahAyahRef: '7:1',
        options: [
          '0 temps : aucune prolongation (elle se prononce immédiatement sans étirement)',
          '2 temps (Madd naturel)',
          '4 temps (Madd intermédiaire)',
          '6 temps (Madd obligatoire)'
        ],
        correctAnswer: '0 temps : aucune prolongation (elle se prononce immédiatement sans étirement)',
        explanationFr: 'Le mot « Alif » est formé de trois consonnes sans aucune lettre de prolongation : il ne comporte donc aucun Madd.',
        ruleId: 'disjointed-overview-groups'
      },
      {
        id: 'q-c14-2',
        type: 'mcq',
        promptFr: 'Quel est le moyen mnémotechnique classique regroupant les 5 lettres isolées qui ne s\\'allongent que de 2 TEMPS ?',
        verseArabic: 'الٓرۚ تِلۡكَ ءَايَٰتُ ٱلۡكِتَٰبِ ٱلۡحَكِيمِ',
        surahAyahRef: '10:1',
        options: [
          'حَيٌّ طَهُرَ (Hā, Yā, Tā, Hā, Rā)',
          'نَقَصَ عَسَلُكُمْ',
          'قُطْبُ جَدٍّ',
          'يَرْمَلُونَ'
        ],
        correctAnswer: 'حَيٌّ طَهُرَ (Hā, Yā, Tā, Hā, Rā)',
        explanationFr: 'La formule « Hayyun Tahur » regroupe les 5 lettres dont l\\'orthographe coranique se termine par un Alif de 2 temps sans Hamzah.',
        ruleId: 'disjointed-overview-groups'
      },
      {
        id: 'q-c14-3',
        type: 'error_detect',
        promptFr: 'Un étudiant récite la lettre Râ dans « الٓر » en disant « Alif-Lāāām-Rāā\' » avec un arrêt brutal de coup de glotte (Hamzah). Quelle est l\\'erreur ?',
        verseArabic: 'الٓرۚ كِتَٰبٌ أُحۡكِمَتۡ ءَايَٰتُهُۥ',
        targetWord: 'الٓر',
        surahAyahRef: '11:1',
        options: [
          'Erreur d\\'ajout de Hamzah : dans les lettres isolées du Coran, le Râ s\\'épelle « Rā » avec une prolongation naturelle ouverte de 2 temps, sans jamais de Hamzah finale !',
          'Il fallait prononcer la lettre Râ avec 6 temps de prolongation',
          'Le Râ doit être prononcé fin (Tarqīq)',
          'Aucune erreur, l\\'alphabet arabe s\\'arrête toujours par une Hamzah'
        ],
        correctAnswer: 'Erreur d\\'ajout de Hamzah : dans les lettres isolées du Coran, le Râ s\\'épelle « Rā » avec une prolongation naturelle ouverte de 2 temps, sans jamais de Hamzah finale !',
        explanationFr: 'C\\'est un piège très répandu : dans le Coran, les lettres de « حَيٌّ طَهُرَ » sont bilitères à l\\'oral (حا, يا, طا, ها, را) sans Hamzah.',
        ruleId: 'disjointed-overview-groups'
      },
      {
        id: 'q-c14-4',
        type: 'click_word',
        promptFr: 'Cliquez sur l\\'ouverture de sourate où s\\'applique une fusion d\\'Idghām avec Ghunnah de 2 temps entre le Sīn et le Mīm :',
        verseArabic: 'طسٓمٓ ١ تِلۡكَ ءَايَٰتُ ٱلۡكِتَٰبِ ٱلۡمُبِينِ',
        clickableSegments: ['طسٓمٓ', 'تِلۡكَ', 'ءَايَٰتُ', 'ٱلۡكِتَٰبِ', 'ٱلۡمُبِينِ'],
        correctAnswer: 'طسٓمٓ',
        explanationFr: '« Tā-Sīn-Mīm » se prononce « Tā-Sīm-Mīm » car le Nūn sākin de Sīn s\\'assimile totalement dans le Mīm.',
        ruleId: 'disjointed-internal-tajweed'
      },
      {
        id: 'q-c14-5',
        type: 'mcq',
        promptFr: 'Dans « حمٓ ١ عٓسٓقٓ », quelle est la particularité unique de la lettre \'Ayn (ع) comparée aux autres lettres de « نَقَصَ عَسَلُكُمْ » ?',
        verseArabic: 'عٓسٓقٓ',
        surahAyahRef: '42:2',
        options: [
          'Elle contient une voyelle de Līn (Fathah suivie de Yā sākinah) au lieu d\\'une lettre de Madd, ce qui permet de la lire soit en 4 temps soit en 6 temps (le 6 temps étant préférable)',
          'Elle ne peut pas être prolongée du tout',
          'Elle s\\'articule uniquement depuis les lèvres',
          'Elle prend obligatoirement une Qalqalah'
        ],
        correctAnswer: 'Elle contient une voyelle de Līn (Fathah suivie de Yā sākinah) au lieu d\\'une lettre de Madd, ce qui permet de la lire soit en 4 temps soit en 6 temps (le 6 temps étant préférable)',
        explanationFr: 'Le mot « \'Ayn » s\\'écrit avec une Fathah sur le \'Ayn suivie d\\'un Yā sākin : c\\'est donc un Madd Līn, autorisant 4 ou 6 temps de prolongation selon la poésie d\\'Ibn Al-Jazarī.',
        ruleId: 'disjointed-overview-groups'
      }
    ]
  },
'''

CHAPTER_15_TS = '''  // ==========================================
  // CHAPITRE 15 : COMPARAISONS & DISTINCTIONS SUBTILES
  // ==========================================
  {
    id: 'chap-15',
    number: 15,
    slug: 'important-comparisons',
    titleFr: 'Comparaisons & Distinctions Subtiles',
    titleAr: 'مُقَارَنَاتٌ وَفُرُوقٌ هَامَّةٌ فِي الرَّسْمِ وَالأَدَاءِ',
    category: 'advanced',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Résoudre définitivement les confusions graphiques et phonétiques les plus fréquentes du Rasm \\'Uthmānī : la distinction entre Tā\\' fermée (ة), Tā\\' ouverte (ت) et Hā\\' (ه), les cas uniques où la Tā\\' Marbūtah s\\'écrit avec un Tā\\' ouvert et doit s\\'arrêter en /t/, ainsi que la différence entre Alif Maqsūrah (ىٰ) et Yā\\' (ي).',
    infographicPoints: [
      'Tā\\' Ouverte (ت) : Toujours prononcée /t/ sans exception, qu\\'elle soit au début, au milieu ou à la fin d\\'un mot, en continu ou à l\\'arrêt (ex: وَقَالَتِ).',
      'Hā\\' (هـ / ـه) : Toujours prononcée /h/ (expiration douce de la gorge) avec ou sans arrêt (ex: فِيهِ, وَفَوَٰكِهَ). Ne porte jamais de points !',
      'Tā\\' Fermée (ة / ـة) : Caméléon phonétique ! À l\\'arrêt (Waqf) -> se transforme en /h/ soukouné. En liaison continue (Wasl) -> se prononce /t/ vocalisé.',
      'Les Tā\\' ouvertes exceptionnelles : Dans certains versets spécifiques, des mots féminins sont calligraphiés avec un T ouvert (ت). Exemple : ٱمۡرَأَتَ عِمۡرَٰنَ, نِعۡمَتَ ٱللَّهِ, رَحۡمَتَ ٱللَّهِ. À l\\'arrêt, on s\\'arrête en /t/ !',
      'Alif Maqsūrah (ىٰ) : Porte un petit poignard vertical au-dessus. Se prononce toujours comme un Alif avec au moins 2 temps de Madd.',
      'Yā\\' (ي) : Porte deux points en bas ou des voyelles. Si elle n\\'a aucun symbole et suit une Kasrah, c\\'est une lettre de Madd.'
    ],
    subrules: [
      {
        id: 'taa-vs-haa-comparison',
        nameFr: '1. Comparaison Fondamentale : Tā\' Ouverte (ت) vs Tā\' Fermée (ة) vs Hā\' (ه)',
        nameAr: 'المُقَارَنَةُ بَيْنَ التَّاءِ المَبْسُوطَةِ وَالتَّاءِ المَرْبُوطَةِ وَالهَاءِ',
        mnemonic: 'ت = Toujours /t/ | ه = Toujours /h/ | ة = /h/ à la pause et /t/ en continu',
        letters: ['ت', 'ة', 'ه'],
        definitionFr: 'La Tā\' ouverte (Mabsūtah ت) est une consonne pleine toujours articulée comme [t]. La Hā\' (ه) est une consonne gutturale toujours articulée comme [h]. La Tā\' fermée (Marbūtah ة) est une graphie réservée à la fin des mots, combinant visuellement la forme du Hā\' et les deux points du Tā\'.',
        mechanismFr: 'Lors de l\\'arrêt (Waqf) sur une Tā\' fermée (ة), faites vibrer les cordes vocales dans le bas de la gorge pour émettre un souffle pur de [h] soukouné avec Hams. Ne produisez aucun son dentale [t]. En liaison (Wasl), prononcez normalement le son [t] avec sa voyelle.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c15-1',
            arabicText: 'وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ',
            surahAyahRef: '2:3',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'ٱلصَّلَوٰةَ',
            highlightLetter: 'ةَ (Tā\' Marbūtah)',
            ruleApplied: 'Tā\' Marbūtah : /h/ à l\\'arrêt vs /t/ en liaison',
            ruleTag: 'silent',
            explanationFr: 'En lecture continue : « As-Salāta wa mimmā ». En cas d\\'arrêt sur le mot : la Tā\' fermée se métamorphose en Hā\' soukounée douce : « As-Salāh » (الصَّلَاةۡ).',
            transliteration: 'As-Salāta (à l\\'arrêt : As-Salāh)',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002003.mp3'
          },
          {
            id: 'ex-c15-2',
            arabicText: 'ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ',
            surahAyahRef: '2:2',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'فِيهِۛ',
            highlightLetter: 'ـهِ (Hā\')',
            ruleApplied: 'Hā\' : prononcée /h/ en toutes circonstances',
            ruleTag: 'silent',
            explanationFr: 'Le mot « Fīhi » se termine par une pure lettre Hā\' (dépourvue de points). Elle se prononce [h] en liaison (« Fīhi hudan ») comme à l\\'arrêt (« Fīh »).',
            transliteration: 'Fīhi',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002002.mp3'
          },
          {
            id: 'ex-c15-3',
            arabicText: 'وَقَالَتِ ٱلۡيَهُودُ لَيۡسَتِ ٱلنَّصَٰرَىٰ عَلَىٰ شَىۡءٖ',
            surahAyahRef: '2:113',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'وَقَالَتِ',
            highlightLetter: 'تِ (Tā\' Mabsūtah)',
            ruleApplied: 'Tā\' Mabsūtah : son /t/ permanent',
            ruleTag: 'silent',
            explanationFr: 'La Tā\' ouverte conserve son identité consonantique /t/ en toute position, avec l\\'attribut de chuchotement (Hams) lorsqu\\'elle prend un soukoûn.',
            transliteration: 'Wa qālati-l-Yahūdu (à l\\'arrêt : Wa qālat)',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002113.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'S\\'arrêter sur une Tā\' Marbūtah (ة) en prononçant un son [t] (ex: dire « As-Salāt »).',
            correctionFr: 'C\\'est une faute de prononciation majeure : à l\\'arrêt, la Tā\' fermée devient obligatoirement un son [h] doux soufflé.'
          }
        ]
      },
      {
        id: 'open-taa-exceptions',
        nameFr: '2. Les Tā\' Ouvertes Exceptionnelles du Rasm \'Uthmānī (Bāb At-Tā\'āt)',
        nameAr: 'بَابُ التَّاءَاتِ المَفْتُوحَةِ فِي الرَّسْمِ العُثْمَانِيِّ',
        mnemonic: 'Écrite ت = Arrêt obligatoire en /t/ | Écrite ة = Arrêt obligatoire en /h/',
        letters: ['ت'],
        definitionFr: 'Dans le Coran, certains mots d\\'usage féminin qui s\\'écrivent habituellement avec une Tā\' Marbūtah (ة) ont été calligraphiés avec une Tā\' ouverte (ت) sous la dictée des Compagnons du Prophète ﷺ. La règle souveraine du Tajwīd stipule que l\\'on doit s\\'arrêter strictement selon la graphie (Rasm) : si elle est écrite ouverte (ت), l\\'arrêt se fait en /t/ avec Hams !',
        mechanismFr: 'Repérez l\\'orthographe dans votre Mushaf. Si le verset comporte « ٱمۡرَأَتَ » ou « نِعۡمَتَ » écrit avec un ت étiré : en cas d\\'arrêt d\\'épreuve (Ikhtibārī) ou de souffle (Idtirārī), terminez par le son [t] soukouné avec un léger souffle de Hams.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c15-4',
            arabicText: 'إِذۡ قَالَتِ ٱمۡرَأَتُ عِمۡرَٰنَ رَبِّ إِنِّى نَذَرۡتُ لَكَ',
            surahAyahRef: '3:35',
            surahNameFr: 'Āl-i \'Imrān',
            highlightSegment: 'ٱمۡرَأَتُ عِمۡرَٰنَ',
            highlightLetter: 'تُ (Tā\' ouverte écrite)',
            ruleApplied: 'Arrêt exceptionnel en /t/ sur « Imra\'at »',
            ruleTag: 'silent',
            explanationFr: 'Dans ce verset, « Imra\'at » est calligraphié avec une Tā\' ouverte (ت). Si vous devez vous arrêter sur ce mot, vous devez prononcer « Imra\'at » avec le son [t] ! Comparez avec 4:128 (« وَإِنِ ٱمۡرَأَةٌ ») où le mot est écrit avec ة et s\\'arrête en « Imra\'ah » [h].',
            transliteration: 'Imra\'atu \'Imrān (à l\\'arrêt : Imra\'at)',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/003035.mp3'
          },
          {
            id: 'ex-c15-5',
            arabicText: 'إِنَّ رَحۡمَتَ ٱللَّهِ قَرِيبٞ مِّنَ ٱلۡمُحۡسِنِينَ',
            surahAyahRef: '7:56',
            surahNameFr: 'Al-A\'rāf',
            highlightSegment: 'رَحۡمَتَ ٱللَّهِ',
            highlightLetter: 'تَ (Tā\' ouverte)',
            ruleApplied: 'Rahmat écrite avec Tā\' ouverte',
            ruleTag: 'silent',
            explanationFr: 'Écrit avec une Tā\' ouverte (ت). En cas d\\'arrêt d\\'urgence, on prononce « Rahmat » avec le son [t], alors que dans 10:21 (« رَحۡمَةٗ »), on s\\'arrête en « Rahmah » [h].',
            transliteration: 'Rahmata-Llāh (à l\\'arrêt : Rahmat)',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/007056.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'S\\'arrêter sur « Imra\'at » (ٱمۡرَأَتَ) en disant « Imra\'ah » avec un son [h].',
            correctionFr: 'Le respect du tracé sacré (\'Uthmānī) impose de s\\'arrêter sur la lettre écrite : un [t] si elle est ouverte, un [h] si elle est fermée.'
          }
        ]
      },
      {
        id: 'alif-maqsura-vs-yaa',
        nameFr: '3. Alif Maqsūrah (ىٰ) vs Yā\' (ي) en Fin de Mot',
        nameAr: 'الفَرْقُ بَيْنَ الأَلِفِ المَقْصُورَةِ وَاليَاءِ فِي طَرَفِ الكَلِمَةِ',
        mnemonic: 'ىٰ avec poignard vertical = Madd Alif (2t) | ي sans symbole = Sākin ou Madd selon voyelle précédente',
        letters: ['ى', 'ي'],
        definitionFr: 'En fin de mot, le tracé coranique utilise la forme sans points (ى). Pour éviter toute confusion : si elle porte un petit Alif vertical (Alif Khanjariyyah / Dagger Alif), elle est traitée comme un pur Alif de Madd (2 temps). Si elle est précédée d\\'une Kasrah sans symbole, elle fonctionne comme un Yā\' de prolongation.',
        mechanismFr: 'Observez la voyelle précédente : Fathah + ىٰ = son [A] prolongé de 2 temps. Kasrah + ي = son [I] prolongé de 2 temps. Si elle est suivie d\\'une Hamzat Al-Wasl, appliquez la règle d\\'élision (Iltiqā\' As-Sākinayn) vue au chapitre 13.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c15-6',
            arabicText: 'وَتَرَى ٱلنَّاسَ سُكَٰرَىٰ وَمَا هُم بِسُكَٰرَىٰ',
            surahAyahRef: '22:2',
            surahNameFr: 'Al-Hajj',
            highlightSegment: 'سُكَٰرَىٰ',
            highlightLetter: 'ىٰ (Alif Maqsūrah)',
            ruleApplied: 'Alif Maqsūrah avec petit poignard : prolongation permanente',
            ruleTag: 'madd',
            explanationFr: 'Le mot « Sukārā » se termine par une Alif Maqsūrah surmontée du petit Alif poignard : on prolonge obligatoirement de 2 temps (Madd naturel) à l\\'arrêt comme en liaison.',
            transliteration: 'Sukārā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/022002.mp3'
          },
          {
            id: 'ex-c15-7',
            arabicText: 'قَالَ هِىَ عَصَاىَ أَتَوَكَّؤُاْ عَلَيۡهَا',
            surahAyahRef: '20:18',
            surahNameFr: 'Tā-Hā',
            highlightSegment: 'هِىَ',
            highlightLetter: 'ىَ (Yā\' consonne vocalisée)',
            ruleApplied: 'Yā\' vocalisée avec Fathah',
            ruleTag: 'izhar',
            explanationFr: 'Portant une Fathah, elle se prononce comme une consonne pleine [Hiya] et ne comporte aucun allongement de Madd.',
            transliteration: 'Hiya \'asāya',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/020018.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Confondre une Alif Maqsūrah sans points (qui donne le son A) avec une lettre Yā\' (qui donne le son I).',
            correctionFr: 'Le repère visuel infaillible dans le Mushaf est le petit Alif vertical : dès qu\\'il est présent, le son est obligatoirement un Alif [ā].'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'ex-g-c15-1',
        title: 'Discrimination d\\'arrêt entre Tā\' ouverte et Tā\' fermée',
        verseArabic: 'وَإِذۡ قَالَتِ ٱمۡرَأَتُ عِمۡرَٰنَ رَبِّ إِنِّى نَذَرۡتُ لَكَ مَا فِى بَطۡنِى مُحَرَّرٗا',
        surahAyahRef: '3:35',
        targetSegment: 'ٱمۡرَأَتُ',
        promptFr: 'Si votre professeur vous demande d\\'effectuer un arrêt de test (Waqf Ikhtibārī) sur le mot « Imra\'at », comment devez-vous prononcer la consonne finale ?',
        hintFr: 'Regardez attentivement si la lettre finale est calligraphiée ة (fermée) ou ت (ouverte).',
        solutionFr: 'La lettre est écrite ouverte (ت). On doit impérativement s\\'arrêter avec le son [t] soukouné avec un souffle d\\'air discret (Hams) : « Imra\'at » (امْرَأَتْ).',
        breakdownSteps: [
          '1. Inspectez la graphie : le mot se termine par un Tā\' ouvert étiré (ت).',
          '2. Appliquez la règle des Tā\'āt d\\'Ibn Al-Jazarī : on s\\'arrête conformément à l\\'écriture sacrée.',
          '3. Prononcez le [t] soukouné sans ajouter de voyelle : « Imra\'at ».'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/003035.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c15-1',
        type: 'mcq',
        promptFr: 'Comment prononce-t-on la Tā\' fermée (ة / ـة) lorsqu\\'on s\\'arrête (Waqf) sur le mot qui la porte ?',
        verseArabic: 'وَيُقِيمُونَ ٱلصَّلَوٰةَ',
        surahAyahRef: '2:3',
        options: [
          'Comme une lettre Hā\' (ه) soukounée douce émise depuis le bas de la gorge',
          'Comme une lettre Tā\' (ت) claquée avec Hams',
          'Comme une lettre de prolongation de 4 temps',
          'Elle devient muette sans aucune expiration'
        ],
        correctAnswer: 'Comme une lettre Hā\' (ه) soukounée douce émise depuis le bas de la gorge',
        explanationFr: 'La règle élémentaire de la Tā\' Marbūtah est sa métamorphose en Hā\' soukounée à l\\'arrêt (« As-Salāh »).',
        ruleId: 'taa-vs-haa-comparison'
      },
      {
        id: 'q-c15-2',
        type: 'click_word',
        promptFr: 'Cliquez sur le mot du verset où l\\'arrêt (Waqf) doit OBLIGATOIREMENT se faire avec le son /t/ car la lettre est calligraphiée avec une Tā\' ouverte :',
        verseArabic: 'إِذۡ قَالَتِ ٱمۡرَأَتُ عِمۡرَٰنَ رَبِّ إِنِّى نَذَرۡتُ لَكَ',
        clickableSegments: ['إِذۡ', 'قَالَتِ', 'ٱمۡرَأَتُ', 'عِمۡرَٰنَ', 'نَذَرۡتُ'],
        correctAnswer: 'ٱمۡرَأَتُ',
        explanationFr: '« Imra\'at » est ici écrit avec un Tā\' ouvert (ت), ce qui impose un arrêt en [t] contrairement à son écriture habituelle.',
        ruleId: 'open-taa-exceptions'
      },
      {
        id: 'q-c15-3',
        type: 'error_detect',
        promptFr: 'Dans le verset « رَحۡمَةٗ مِّنۢ بَعۡدِ ضَرَّآءَ », un lecteur s\\'arrête sur le premier mot en disant « Rahmat » avec un [t]. Quelle est l\\'erreur ?',
        verseArabic: 'رَحۡمَةٗ مِّنۢ بَعۡدِ ضَرَّآءَ',
        targetWord: 'رَحۡمَةٗ',
        surahAyahRef: '10:21',
        options: [
          'Erreur de prononciation à la pause : le mot est écrit avec une Tā\' Marbūtah (ة), l\\'arrêt doit donc obligatoirement se faire en « Rahmah » avec un son [h] !',
          'Il fallait faire une prolongation de 6 temps',
          'Il fallait maintenir le Tanwīn en disant « Rahmatan »',
          'Aucune erreur, l\\'arrêt en [t] est toujours autorisé'
        ],
        correctAnswer: 'Erreur de prononciation à la pause : le mot est écrit avec une Tā\' Marbūtah (ة), l\\'arrêt doit donc obligatoirement se faire en « Rahmah » avec un son [h] !',
        explanationFr: 'Puisque le mot est écrit avec ة, il se transforme impérativement en Hā\' soukounée lors d\\'une pause.',
        ruleId: 'taa-vs-haa-comparison'
      },
      {
        id: 'q-c15-4',
        type: 'mcq',
        promptFr: 'Dans le Coran, quelle indication visuelle infaillible permet de distinguer une Alif Maqsūrah (ىٰ) d\\'un Yā\' en fin de mot ?',
        verseArabic: 'وَكَفَىٰ بِنَا حَٰسِبِينَ',
        surahAyahRef: '21:47',
        options: [
          'La présence d\\'un petit Alif vertical poignard (Dagger Alif) au-dessus de la lettre',
          'La couleur rouge de la lettre',
          'La présence d\\'une Shaddah au début du mot suivant',
          'Le signe de Soukoûn au-dessus'
        ],
        correctAnswer: 'La présence d\\'un petit Alif vertical poignard (Dagger Alif) au-dessus de la lettre',
        explanationFr: 'Le petit trait vertical confirme que la lettre se prononce comme un pur Alif avec une élongation naturelle de 2 temps.',
        ruleId: 'alif-maqsura-vs-yaa'
      },
      {
        id: 'q-c15-5',
        type: 'mcq',
        promptFr: 'Que devient la Tā\' fermée (ة) lorsque l\\'on lui ajoute un suffixe possessif comme dans « نِعۡمَتَهُۥ » ou « رَحۡمَتِهِ » ?',
        verseArabic: 'وَيُتِمُّ نِعۡمَتَهُۥ عَلَيۡكَ',
        surahAyahRef: '12:6',
        options: [
          'Elle s\\'ouvre automatiquement en une véritable lettre Tā\' (ت) et s\\'articule toujours comme un [t]',
          'Elle disparaît totalement',
          'Elle se transforme en Wāw de Madd',
          'Elle reste prononcée comme un [h]'
        ],
        correctAnswer: 'Elle s\\'ouvre automatiquement en une véritable lettre Tā\' (ت) et s\\'articule toujours comme un [t]',
        explanationFr: 'Dès qu\\'un pronom suffixe est rattaché à la Tā\' Marbūtah, elle passe au milieu du mot composé et devient graphiquement et phonétiquement une Tā\' ouverte.',
        ruleId: 'taa-vs-haa-comparison'
      }
    ]
  },
'''

CHAPTER_16_TS = '''  // ==========================================
  // CHAPITRE 16 : CAS PARTICULIERS (HAFS)
  // ==========================================
  {
    id: 'chap-16',
    number: 16,
    slug: 'special-cases',
    titleFr: 'Cas Particuliers & Récitation de Hafs',
    titleAr: 'الكَلِمَاتُ المَخْصُوصَةُ وَرِوَايَةُ حَفْصٍ عَنْ عَاصِمٍ',
    category: 'advanced',
    estimatedMinutes: 25,
    isPilotChapter: true,
    summaryFr: 'Maîtriser les trésors et singularités de la lecture de Hafs d\\'après \\'Asim : l\\'Imālah unique dans Majrēhā, le Tashīl dans A\\'a\\'jamiyyun, l\\'Ishmām dans Lā Ta\\'mannā, les 4 Saktāt obligatoires, la gestion de Bi\\'sa l-ismu, les deux Hamzahs de Ītūnī, et les règles d\\'arrêt sur les doubles Yā\\'.',
    infographicPoints: [
      'Al-Imālah (الإمالة) : Un seul mot dans tout le Coran pour Hafs : مَجۡرٜىٰهَا (Hūd 41). La Fathah s\\'incline vers la Kasrah (son « è » / « é ») et la lettre Râ devient fine (Tarqīq) !',
      'At-Tashīl (التسهيل) : Un seul mot obligatoire : ءَاعۡجَمِيٌّ (Fussilat 44). La 2e Hamzah est adoucie sans coup de glotte, entre l\\'Alif et la Hamzah.',
      'Al-Ishmām (الإشمام) : Dans لَا تَأۡمَ۬نَّا (Yūsuf 11). Arrondir les lèvres en « O » sans émettre de son pendant la Ghunnah du Nūn pour signaler la Dammah d\\'origine.',
      'Les 4 Saktāt Obligatoires : Pauses silencieuses de 2 temps sans reprise de souffle dans عِوَجَاۜ قَيِّمًا, مَّرۡقَدِنَاۜ هَٰذَا, مَنۡۜ رَاقٍ, et بَلۡۜ رَانَ.',
      'Double Hamzat Wasl : Dans بِئۡسَ ٱلِٱسۡمُ (Hujurāt 11). En continu : Bi\\'sa-lismu. Si l\\'on débute sur le mot : Alismu.',
      'Hamzatān dans ٱئۡتُونِي : En continu : « ... fī-s-samāwāti-\\'tūnī ». Si l\\'on débute sur le mot : échange de la 2e Hamzah en Yā\\' de Madd -> « Ītūnī » !'
    ],
    subrules: [
      {
        id: 'special-imalah',
        nameFr: '1. L\\'Imālah Unique de Hafs : « Majrēhā » (مَجۡرٜىٰهَا)',
        nameAr: 'الإِمَالَةُ الكُبْرَى فِي كَلِمَةِ (مَجْرَاهَا)',
        mnemonic: 'Un seul mot dans tout le Coran (Hūd 41) : Fathah inclinée vers Kasrah + Râ FIN (Tarqīq)',
        letters: ['ر'],
        definitionFr: 'L\\'Imālah (إِمَالَة) signifie linguistiquement l\\'inclinaison. En Tajwīd, elle consiste à incliner la prononciation de la Fathah vers la Kasrah, et de l\\'Alif vers le Yā\', produisant un son intermédiaire proche du « è » français ouvert sans être une pure Kasrah. Pour l\\'Imām Hafs d\\'après \\'Asim, cette règle ne s\\'applique qu\\'à un UNIQUE mot dans l\\'ensemble des 6236 versets du Coran.',
        mechanismFr: 'Dans « مَجۡرٜىٰهَا » (repéré par un losange vide ◊ sous la lettre Râ) : ne prononcez ni « Majrāhā » ni « Majrīhā ». Inclinez la voyelle vers « Majrēhā ». Conséquence directe : la consonne Râ perd son emphase et devient obligatoirement fine (Tarqīq) !',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c16-1',
            arabicText: 'وَقَالَ ٱرۡكَبُواْ فِيهَا بِسۡمِ ٱللَّهِ مَجۡرٜىٰهَا وَمُرۡسَىٰهَآۚ إِنَّ رَبِّى لَغَفُورٞ رَّحِيمٞ',
            surahAyahRef: '11:41',
            surahNameFr: 'Hūd',
            highlightSegment: 'مَجۡرٜىٰهَا',
            highlightLetter: 'رٜىٰ (Râ avec losange d\\'Imālah)',
            ruleApplied: 'Imālah Kubrā unique de la lecture de Hafs',
            ruleTag: 'madd',
            explanationFr: 'La lettre Râ est amincie (Tarqīq) et sa voyelle longue est inclinée à 50% entre l\\'Alif et le Yā\'. Se prononce phonétiquement : « Bismillāhi Majrēhā wa mursāhā ».',
            transliteration: 'Bismillāhi Majrēhā wa mursāhā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/011041.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Prononcer la Râ de « Majrēhā » de façon lourde et emphatique (Tafkhīm).',
            correctionFr: 'L\\'Imālah attire irrémédiablement la consonne vers l\\'amincissement (Tarqīq complet).'
          },
          {
            trapFr: 'Prononcer une pure Kasrah française [Majrīhā].',
            correctionFr: 'L\\'Imālah n\\'est pas une Kasrah, mais un son intermédiaire équilibré à mi-chemin entre [ā] et [ī].'
          }
        ]
      },
      {
        id: 'special-tasheel',
        nameFr: '2. Le Tashīl Obligatoire : « A\'a\'jamiyyun » (ءَا۬عۡجَمِىٌّ)',
        nameAr: 'التَّسْهِيلُ فِي كَلِمَةِ (ءَاعْجَمِيٌّ)',
        mnemonic: '1re Hamzah = Nette (Muhaqqaqah) | 2e Hamzah = Adoucie sans coup de glotte (Musahhala)',
        letters: ['ء'],
        definitionFr: 'At-Tashīl (تَسْهِيل) signifie littéralement la facilitation. Cette règle phonétique vise à fluidifier la prononciation consécutive de deux Hamzahs profondes issues du bas de la gorge. Pour Hafs, le Tashīl est obligatoire sur la seconde Hamzah du mot « ءَاعۡجَمِيٌّ » (Sourate Fussilat, verset 44).',
        mechanismFr: 'Dans le Mushaf, la seconde Hamzah porte un cercle plein noir (●). Prononcez la première Hamzah nettement avec son claquement de glotte [A], puis enchaînez la seconde avec douceur et fluidité sans fermer la glotte, comme une expiration vocalisée entre la Hamzah et l\\'Alif.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c16-2',
            arabicText: 'وَلَوۡ جَعَلۡنَٰهُ قُرۡءَانًا أَعۡجَمِيّٗا لَّقَالُواْ لَوۡلَا فُصِّلَتۡ ءَايَٰتُهُۥٓۖ ءَا۬عۡجَمِىٌّ وَعَرَبِىٌّ',
            surahAyahRef: '41:44',
            surahNameFr: 'Fussilat',
            highlightSegment: 'ءَا۬عۡجَمِىٌّ',
            highlightLetter: 'ءَا۬ (Seconde Hamzah avec point plein)',
            ruleApplied: 'Tashīl de la seconde Hamzah',
            ruleTag: 'izhar',
            explanationFr: 'La première Hamzah est interrogative (« Est-ce un livre non arabe... ? ») et la seconde est radicale. On adoucit la 2e sans coupure : « A-a\'jamiyyun » (ءَا۬عْجَمِيٌّ).',
            transliteration: 'A-a\'jamiyyun wa \'arabiyy',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/041044.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Prononcer deux Hamzahs dures consécutives avec deux coups de glotte [A\' - A\'jamiyy].',
            correctionFr: 'C\\'est une erreur selon Hafs : la seconde Hamzah doit impérativement être adoucie avec fluidité.'
          },
          {
            trapFr: 'Transformer la seconde Hamzah en une lettre Hā (dire « A-hajamiyy »).',
            correctionFr: 'La Hamzah musahhala reste une Hamzah facilitée dans son point d\\'articulation, et non une lettre Hā.'
          }
        ]
      },
      {
        id: 'special-ishmam',
        nameFr: '3. L\\'Ishmām & Le Rawm dans « Lā Ta\'mannā » (لَا تَأۡمَ۬نَّا)',
        nameAr: 'الإِشْمَامُ وَالرَّوْمُ (الاِخْتِلَاسُ) فِي كَلِمَةِ (لَا تَأْمَنَّا)',
        mnemonic: 'Ishmām = Arrondir les lèvres en « O » sans son pendant la Ghunnah | Rawm = 1/3 de Dammah',
        letters: ['ن'],
        definitionFr: 'À l\\'origine grammaticale, les frères de Yūsuf dirent : « Mā laka lā ta\'manunā » (مَا لَكَ لَا تَأْمَنُنَا avec deux Nūn). Par contraction, les deux Nūn ont fusionné avec une Shaddah. Pour signaler visuellement ou auditivement la Dammah perdue du premier Nūn, Hafs autorise deux voies d\\'excellence : l\\'Ishmām (la plus célèbre) et le Rawm (Ikhtilās).',
        mechanismFr: 'Pour l\\'Ishmām : prononcez le Mīm normalement, puis enclenchez la Ghunnah de 2 temps sur le Nūn avec Shaddah. Juste après le début de la Ghunnah, projetez immédiatement vos lèvres vers l\\'avant en rond (comme pour prononcer un Wāw ou une Dammah) sans émettre aucun son buccal supplémentaire, puis relâchez pour prononcer l\\'Alif final !',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c16-3',
            arabicText: 'قَالُواْ يَٰٓأَبَانَا مَا لَكَ لَا تَأۡمَ۬نَّا عَلَىٰ يُوسُفَ وَإِنَّا لَهُۥ لَنَٰصِحُونَ',
            surahAyahRef: '12:11',
            surahNameFr: 'Yūsuf',
            highlightSegment: 'تَأۡمَ۬نَّا',
            highlightLetter: 'مَ۬نَّا (Losange / cercle au-dessus du Nūn)',
            ruleApplied: 'Ishmām avec projection muette des lèvres',
            ruleTag: 'ghunnah',
            explanationFr: 'La marque en losange au-dessus du Nūn signale l\\'Ishmām. Cette règle est visuelle : un aveugle l\\'écoute comme un Idghām ordinaire, mais un voyant voit les lèvres s\\'arrondir pour marquer la Dammah d\\'origine.',
            transliteration: 'Lā ta\'mannā (avec Ishmām des lèvres)',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/012011.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Émettre un son vocal de Dammah ou de Wāw audible pendant l\\'arrondissement des lèvres.',
            correctionFr: 'L\\'Ishmām est un geste purement visuel des lèvres : aucun son supplémentaire ne doit sortir de la bouche en dehors du bourdonnement nasal de la Ghunnah.'
          }
        ]
      },
      {
        id: 'special-saktat',
        nameFr: '4. Les 4 Saktāt Obligatoires de Hafs (Pauses Silencieuses)',
        nameAr: 'السَّكَتَاتُ الأَرْبَعُ الوَاجِبَةُ عِنْدَ حَفْصٍ مِنَ الشَّاطِبِيَّةِ',
        mnemonic: 'Silence de 2 temps sans reprendre sa respiration (repéré par la lettre سۜ)',
        letters: ['س'],
        definitionFr: 'As-Sakt (السَّكْت) est une interruption brève de la voix d\\'environ 2 temps, sans reprise de souffle (sans respirer), avec l\\'intention immédiate de poursuivre la lecture. L\\'Imām Hafs applique obligatoirement 4 Saktāt dans le Coran afin d\\'empêcher une confusion de sens majeure avec les mots suivants.',
        mechanismFr: 'Arrêtez le son sur la dernière lettre pendant la durée de 2 battements en bloquant le souffle dans vos poumons, puis repartez immédiatement sur le mot suivant sans inhaler d\\'air.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c16-4',
            arabicText: 'وَلَمۡ يَجۡعَل لَّهُۥ عِوَجَاۜ ١ قَيِّمٗا لِّيُنذِرَ بَأۡسٗا شَدِيدٗا',
            surahAyahRef: '18:1-2',
            surahNameFr: 'Al-Kahf',
            highlightSegment: 'عِوَجَاۜ قَيِّمٗا',
            highlightLetter: 'سۜ au-dessus de عِوَجَا',
            ruleApplied: 'Saktah n°1 : Dissocier « Tortueux » de « Droit »',
            ruleTag: 'silent',
            explanationFr: 'Le Coran ne comporte aucune tortuosité (\'Iwajā). Il est droit (Qayyimā). Sans la Saktah, lier les mots ferait croire que le livre est « tortueusement droit », un contresens théologique flagrant !',
            transliteration: '\'Iwajā [Sakt 2t] Qayyimā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/018001.mp3'
          },
          {
            id: 'ex-c16-5',
            arabicText: 'قَالُواْ يَٰوَيۡلَنَا مَنۢ بَعَثَنَا مِن مَّرۡقَدِنَاۜۗ هَٰذَا مَا وَعَدَ ٱلرَّحۡمَٰنُ',
            surahAyahRef: '36:52',
            surahNameFr: 'Yā-Sīn',
            highlightSegment: 'مَّرۡقَدِنَاۜ هَٰذَا',
            highlightLetter: 'سۜ sur مَّرۡقَدِنَا',
            ruleApplied: 'Saktah n°2 : Séparer la parole des mécréants de la réponse des anges',
            ruleTag: 'silent',
            explanationFr: '« Qui nous a réveillés de notre lit de mort ? » (parole des ressuscités). La Saktah marque la frontière avant la réponse solennelle : « Voici ce que le Tout Miséricordieux avait promis ! ».',
            transliteration: 'Mim-marqadinā [Sakt 2t] Hādhā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/036052.mp3'
          },
          {
            id: 'ex-c16-6',
            arabicText: 'كَلَّآ إِذَا بَلَغَتِ ٱلتَّرَاقِىَ ٢٦ وَقِيلَ مَنۡۜ رَاقٖ',
            surahAyahRef: '75:26-27',
            surahNameFr: 'Al-Qiyāmah',
            highlightSegment: 'مَنۡۜ رَاقٖ',
            highlightLetter: 'سۜ sur مَنۡ (empêche l\\'Idghām du Nūn dans le Râ)',
            ruleApplied: 'Saktah n°3 : Empêcher la fusion en « Marrāq » (marchand de bouillon)',
            ruleTag: 'silent',
            explanationFr: 'La Saktah maintient le sens : « Et l\\'on dira : qui est guérisseur / exorciste (Man... Rāq) ? ». Sans Saktah, le Nūn fusionnerait dans le Râ (« Marrāq ») qui désigne en arabe un vendeur de bouillon !',
            transliteration: 'Wa qīla man [Sakt 2t] rāq',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/075027.mp3'
          },
          {
            id: 'ex-c16-7',
            arabicText: 'كَلَّاۖ بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُواْ يَكۡسِبُونَ',
            surahAyahRef: '83:14',
            surahNameFr: 'Al-Mutaffifīn',
            highlightSegment: 'بَلۡۜ رَانَ',
            highlightLetter: 'سۜ sur بَلۡ (empêche l\\'Idghām du Lām dans le Râ)',
            ruleApplied: 'Saktah n°4 : Empêcher la fusion en « Barrāna »',
            ruleTag: 'silent',
            explanationFr: 'Préserve la particule « Bal » et le verbe « Rāna » (la rouille des péchés sur les cœurs).',
            transliteration: 'Kallā bal [Sakt 2t] rāna \'alā qulūbihim',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/083014.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Reprendre son souffle pendant la Saktah.',
            correctionFr: 'Si vous reprenez votre respiration, cela devient un arrêt (Waqf) et non une Saktah. La Saktah exige de retenir son souffle.'
          }
        ]
      },
      {
        id: 'special-hamzataan-nouns',
        nameFr: '5. Mots Particuliers : « Ītūnī » (ٱئۡتُونِى) et « Bi\'sa l-ismu » (بِئۡسَ ٱلِٱسۡمُ)',
        nameAr: 'الكَلِمَاتُ ذَاتُ الأَدَاءِ الخَاصِّ (ائْتُونِي وَبِئْسَ الِاسْمُ)',
        mnemonic: 'ٱئۡتُونِي en début = Ītūnī | بِئۡسَ ٱلِٱسۡمُ en continu = Bi\\'sa-lismu',
        letters: ['ء'],
        definitionFr: 'Ces deux mots possèdent une phonétique remarquable selon qu\\'on les récite en liaison continue (Wasl) ou qu\\'on démarre la récitation par eux (Ibtidā\').',
        mechanismFr: 'Pour « ٱئۡتُونِي » (Al-Ahqāf 4) : en liaison continue avec le mot précédent, Hamzat Al-Wasl tombe et l\\'on récite « ... fi-s-samāwāti-\\'tūnī ». Si vous débutez sur ce mot : la règle de l\\'échange des Hamzahs (Badal) transforme la 2e Hamzah en voyelle longue Yā\' -> dites « Ītūnī » (اِيتُونِي) avec 2 temps de Madd ! Pour « بِئۡسَ ٱلِٱسۡمُ » (Al-Hujurāt 11) : en continu, dites « Bi\\'sa-lismu ». En débutant dessus : dites « Alismu » ou « Lismu ».',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c16-8',
            arabicText: 'أَمۡ لَهُمۡ شِرۡكٞ فِى ٱلسَّمَٰوَٰتِۖ ٱئۡتُونِى بِكِتَٰبٖ مِّن قَبۡلِ هَٰذَآ',
            surahAyahRef: '46:4',
            surahNameFr: 'Al-Ahqāf',
            highlightSegment: 'ٱئۡتُونِى',
            highlightLetter: 'ٱئۡ (Deux Hamzahs)',
            ruleApplied: 'Transformation en Yā\' de Madd en cas de début de lecture',
            ruleTag: 'madd',
            explanationFr: 'En commençant par ce mot : la première Hamzat Wasl prend une Kasrah et la seconde devient un Yā\' de prolongation : « Ītūnī bi-kitāb » (اِيتُونِي).',
            transliteration: 'En débutant : Ītūnī | En continu : Fi-s-samāwāti-\\'tūnī',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/046004.mp3'
          },
          {
            id: 'ex-c16-9',
            arabicText: 'بِئۡسَ ٱلِٱسۡمُ ٱلۡفُسُوقُ بَعۡدَ ٱلۡإِيمَٰنِ',
            surahAyahRef: '49:11',
            surahNameFr: 'Al-Hujurāt',
            highlightSegment: 'بِئۡسَ ٱلِٱسۡمُ',
            highlightLetter: 'Lām avec Kasrah',
            ruleApplied: 'Chute des deux Hamzahs en liaison',
            ruleTag: 'silent',
            explanationFr: 'En lecture continue, les deux Hamzahs de Wasl sautent : on prononce la Lām directement avec Kasrah : « Bi\\'sa-lismu-l-fusūq » (بِئْسَ لِسْمُ).',
            transliteration: 'Bi\\'sa-lismu-l-fusūq',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/049011.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Débuter la lecture sur « ٱئۡتُونِي » en disant « I\'tūnī » avec un coup de glotte.',
            correctionFr: 'La règle arabe du Badal interdit deux Hamzahs au début d\\'un mot : la seconde devient impérativement une voyelle longue Yā\' [Ītūnī].'
          }
        ]
      },
      {
        id: 'special-double-yaa-stop',
        nameFr: '6. Arrêt sur les Racines à Double Yā\' (Yastahyī, Walīyī)',
        nameAr: 'حُكْمُ الوَقْفِ عَلَى الكَلِمَاتِ المُنْتَهِيَةِ بِيَاءَيْنِ (يَسْتَحْيِي وَوَلِيِّي)',
        mnemonic: 'Deux Yā\\' maintenus à l\\'arrêt avec Madd de 2 temps sur le second Yā\\'',
        letters: ['ي'],
        definitionFr: 'Les mots issus de la racine (ح-ي-ي) comme « يَسۡتَحۡيِۦ » ou « يُحۡيِۦ » comportent dans le tracé coranique un premier Yā\' suivi d\\'un petit symbole de Yā\' renversé (ۦ). La règle stipule qu\\'en cas d\\'arrêt sur ces mots, les deux Yā\' doivent être fidèlement prononcés.',
        mechanismFr: 'À l\\'arrêt, ne tronquez pas le mot en « Yastahy » : prononcez le premier Yā\' avec sa Kasrah, puis prolongez le second Yā\' de 2 temps de Madd naturel : « Yastahyī » (يَسْتَحْيِي).',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c16-10',
            arabicText: 'إِنَّ ٱللَّهَ لَا يَسۡتَحۡيِۦٓ أَن يَضۡرِبَ مَثَلٗا مَّا بَعُوضَةٗ',
            surahAyahRef: '2:26',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'يَسۡتَحۡيِۦٓ',
            highlightLetter: 'ِ + ۦ (Double Yā\')',
            ruleApplied: 'Maintien des deux Yā\' même à l\\'arrêt',
            ruleTag: 'madd',
            explanationFr: 'À l\\'arrêt, le second Yā\' (représenté par le signe inversé) est maintenu avec ses 2 temps de prolongation naturelle : « Yastahyī ».',
            transliteration: 'Yastahyī (à l\\'arrêt : Yastahyī)',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002026.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Supprimer le second Yā\' à l\\'arrêt et dire « Yastahyi » avec une voyelle brève.',
            correctionFr: 'Le second Yā\' est une composante intégrale de la racine : il doit être prononcé avec ses 2 temps de Madd.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'ex-g-c16-1',
        title: 'Exécution pratique de l\\'Imālah dans Sourate Hūd',
        verseArabic: 'وَقَالَ ٱرۡكَبُواْ فِيهَا بِسۡمِ ٱللَّهِ مَجۡرٜىٰهَا وَمُرۡسَىٰهَآۚ إِنَّ رَبِّى لَغَفُورٞ رَّحِيمٞ',
        surahAyahRef: '11:41',
        targetSegment: 'مَجۡرٜىٰهَا',
        promptFr: 'Décrivez précisément comment vos lèvres, votre langue et le timbre de votre voix doivent exécuter le mot « Majrēhā ».',
        hintFr: 'Faites attention à la fois à la voyelle (son intermédiaire) et à la consonne Râ (fine et non emphatique).',
        solutionFr: '1. Le Jīm prend une Qalqalah. 2. La lettre Râ est prononcée légère et amincie (Tarqīq). 3. La voyelle longue s\\'incline à mi-chemin entre le [A] et le [I] (son [è] ou [é]). 4. Prononciation finale : « Majrēhā ».',
        breakdownSteps: [
          '1. Le repère visuel dans le Mushaf est le losange (◊) gravé sous la lettre Râ.',
          '2. La consonne Râ est impérativement amincie (Tarqīq).',
          '3. La voyelle est émise à 50% entre Fathah et Kasrah, sans devenir un [i] pur.',
          '4. Le mot suivant « Mursāhā » conserve son Alif naturel normal sans Imālah.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/011041.mp3'
      },
      {
        id: 'ex-g-c16-2',
        title: 'Repérage et respect des 4 Saktāt dans la récitation',
        verseArabic: 'كَلَّاۖ بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُواْ يَكۡسِبُونَ',
        surahAyahRef: '83:14',
        targetSegment: 'بَلۡۜ رَانَ',
        promptFr: 'Pourquoi ne doit-on pas appliquer la règle classique d\\'Idghām du Lām dans le Râ entre « Bal » et « Rāna » ?',
        hintFr: 'Regardez la petite lettre Sīn (سۜ) gravée au-dessus de « Bal ».',
        solutionFr: 'La présence de la Saktah obligatoire impose une coupure du son de 2 temps sans respiration. Cette coupure sépare physiquement les deux consonnes et empêche toute fusion en « Barrāna ».',
        breakdownSteps: [
          '1. La règle générale voudrait que le Lām sākinah fusionne dans le Râ (Idghām Mutaqāribayn).',
          '2. L\\'Imām Hafs impose ici une Saktah obligatoire pour préserver le sens du verset.',
          '3. On marque un silence net de 2 temps en retenant son souffle entre « Bal » et « Rāna ».'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/083014.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c16-1',
        type: 'mcq',
        promptFr: 'Combien de mots dans TOUT le Coran comportent la règle de l\\'Imālah (inclinaison de voyelle) selon la lecture de Hafs ?',
        verseArabic: 'بِسۡمِ ٱللَّهِ مَجۡرٜىٰهَا وَمُرۡسَىٰهَآ',
        surahAyahRef: '11:41',
        options: [
          'Un seul mot unique : « Majrēhā » (مَجْرَاهَا) dans la sourate Hūd (verset 41)',
          'Quatre mots',
          'Dix mots',
          'Toutes les fins de versets de la sourate An-Najm'
        ],
        correctAnswer: 'Un seul mot unique : « Majrēhā » (مَجْرَاهَا) dans la sourate Hūd (verset 41)',
        explanationFr: 'Dans la lecture de Hafs d\\'après \\'Asim, « Majrēhā » est l\\'unique cas d\\'Imālah majeure du Livre.',
        ruleId: 'special-imalah'
      },
      {
        id: 'q-c16-2',
        type: 'click_word',
        promptFr: 'Cliquez sur le mot où la seconde Hamzah doit obligatoirement être prononcée avec TASHĪL (adoucissement sans coup de glotte) :',
        verseArabic: 'ءَا۬عۡجَمِىٌّ وَعَرَبِىٌّۗ قُلۡ هُوَ لِلَّذِينَ ءَامَنُواْ هُدٗى وَشِفَآءٞ',
        clickableSegments: ['ءَا۬عۡجَمِىٌّ', 'وَعَرَبِىٌّ', 'قُلۡ', 'هُوَ', 'وَشِفَآءٞ'],
        correctAnswer: 'ءَا۬عۡجَمِىٌّ',
        explanationFr: '« A\'a\'jamiyyun » comporte un point noir plein indiquant le Tashīl obligatoire de la 2e Hamzah.',
        ruleId: 'special-tasheel'
      },
      {
        id: 'q-c16-3',
        type: 'mcq',
        promptFr: 'En quoi consiste concrètement l\\'Ishmām dans le mot « لَا تَأۡمَ۬نَّا » (Sourate Yūsuf, 11) ?',
        verseArabic: 'قَالُواْ يَٰٓأَبَانَا مَا لَكَ لَا تَأۡمَ۬نَّا عَلَىٰ يُوسُفَ',
        surahAyahRef: '12:11',
        options: [
          'Avancer et arrondir les lèvres en forme de « O » sans émettre aucun son pendant la Ghunnah du Nūn, pour indiquer visuellement la Dammah d\\'origine',
          'Chuchoter le mot à voix très basse',
          'Raccourcir la prolongation à 1 temps',
          'Transformer le Nūn en une lettre Mīm'
        ],
        correctAnswer: 'Avancer et arrondir les lèvres en forme de « O » sans émettre aucun son pendant la Ghunnah du Nūn, pour indiquer visuellement la Dammah d\\'origine',
        explanationFr: 'L\\'Ishmām est un geste purement visuel des lèvres symbolisant la voyelle perdue sans affecter le son de la Ghunnah.',
        ruleId: 'special-ishmam'
      },
      {
        id: 'q-c16-4',
        type: 'error_detect',
        promptFr: 'Dans « كَلَّا بَلۡۜ رَانَ », un étudiant respire longuement entre « Bal » et « Rāna » comme pour reprendre son souffle. Quelle est l\\'erreur ?',
        verseArabic: 'كَلَّاۖ بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم',
        targetWord: 'بَلۡۜ رَانَ',
        surahAyahRef: '83:14',
        options: [
          'Erreur sur la Saktah : la Saktah est une interruption de voix de 2 temps SANS reprise de souffle. Respirer transforme la Saktah en arrêt ordinaire défectueux !',
          'Il fallait faire un Idghām direct sans marquer de silence',
          'Il fallait prononcer le Lām lourd (Mufakhkham)',
          'Aucune erreur, on peut respirer quand on veut'
        ],
        correctAnswer: 'Erreur sur la Saktah : la Saktah est une interruption de voix de 2 temps SANS reprise de souffle. Respirer transforme la Saktah en arrêt ordinaire défectueux !',
        explanationFr: 'Par définition, la Saktah coranique suspend la voix mais retient le souffle dans la cage thoracique.',
        ruleId: 'special-saktat'
      },
      {
        id: 'q-c16-5',
        type: 'mcq',
        promptFr: 'Si vous débutez la récitation sur le mot « ٱئۡتُونِى » (Sourate Al-Ahqāf, verset 4), comment devez-vous le prononcer ?',
        verseArabic: 'أَمۡ لَهُمۡ شِرۡكٞ فِى ٱلسَّمَٰوَٰتِۖ ٱئۡتُونِى بِكِتَٰبٖ',
        surahAyahRef: '46:4',
        options: [
          '« Ītūnī » (اِيتُونِي) avec un Yā\\' de prolongation de 2 temps (règle du Badal des Hamzahs)',
          '« I\'tūnī » en prononçant les deux Hamzahs',
          '« Aytūnī »',
          '« Otūnī »'
        ],
        correctAnswer: '« Ītūnī » (اِيتُونِي) avec un Yā\\' de prolongation de 2 temps (règle du Badal des Hamzahs)',
        explanationFr: 'En débutant sur le mot, Hamzat Wasl prend Kasrah et la 2e Hamzah se convertit obligatoirement en Yā\' de Madd : « Ītūnī ».',
        ruleId: 'special-hamzataan-nouns'
      }
    ]
  }
'''

def main():
    target_file = r'src/data/chaptersData.ts'
    with open(target_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update ALL_BOOK_CHAPTERS so chapters 13 to 16 have isPilot: true
    for ch_num in [13, 14, 15, 16]:
        old_pattern = f'number: {ch_num}, slug:'
        # replace isPilot: false with isPilot: true for these
        # Let's locate the line for each chapter
        idx = content.find(old_pattern)
        if idx != -1:
            line_end = content.find('\\n', idx)
            line = content[idx:line_end]
            if 'isPilot: false' in line:
                new_line = line.replace('isPilot: false', 'isPilot: true')
                content = content[:idx] + new_line + content[line_end:]
                print(f'Updated chapter {ch_num} to isPilot: true in ALL_BOOK_CHAPTERS')

    # 2. Append chapters 13, 14, 15, and 16 to PILOT_CHAPTERS
    # PILOT_CHAPTERS ends with ]; at the very end of file
    end_marker = '];\\n'
    last_bracket = content.rfind('];')
    if last_bracket == -1:
        print('Error: Could not find closing bracket ]; of PILOT_CHAPTERS')
        sys.exit(1)

    # Insert before the last bracket
    new_chapters_code = CHAPTER_13_TS + CHAPTER_14_TS + CHAPTER_15_TS + CHAPTER_16_TS
    
    # Check if comma needed before inserting
    prefix = content[:last_bracket].rstrip()
    if not prefix.endswith(','):
        prefix += ','
    
    new_content = prefix + '\\n' + new_chapters_code + '];\\n'

    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print('Successfully appended chapters 13, 14, 15, and 16 to src/data/chaptersData.ts!')

if __name__ == '__main__':
    main()
