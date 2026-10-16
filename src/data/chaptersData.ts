import { Chapter } from '../types/tajweed';

export const ALL_BOOK_CHAPTERS: { number: number; slug: string; titleFr: string; titleAr: string; category: 'beginner' | 'intermediate' | 'advanced'; isPilot: boolean }[] = [
  { number: 1, slug: 'basic-concepts', titleFr: 'Concepts Fondamentaux & Erreurs (Lahn)', titleAr: 'المفاهيم الأساسية واللحن', category: 'beginner', isPilot: false },
  { number: 2, slug: 'quranic-symbols', titleFr: 'Symboles Coraniques & Ponctuation', titleAr: 'علامات المصحف وضبطه', category: 'beginner', isPilot: false },
  { number: 3, slug: 'stopping-resuming', titleFr: 'Arrêt & Reprise (Waqf & Ibtidā\')', titleAr: 'الوقف والابتداء', category: 'intermediate', isPilot: false },
  { number: 4, slug: 'madd-1', titleFr: 'Les Prolongations I (Madd Naturel & Dérivés)', titleAr: 'المد الأصلي وملحقاته', category: 'beginner', isPilot: false },
  { number: 5, slug: 'madd-2', titleFr: 'Les Prolongations II (Madd Secondaire / Far\'ī)', titleAr: 'المد الفرعي وأقسامه', category: 'intermediate', isPilot: false },
  { number: 6, slug: 'hamzah', titleFr: 'Les Hamzahs (Hamzat Al-Wasl & Al-Qat\')', titleAr: 'همزتا الوصل والقطع', category: 'intermediate', isPilot: false },
  { number: 7, slug: 'lam-sakinah', titleFr: 'Les Règles de la Lām Sākinah', titleAr: 'أحكام اللام الساكنة', category: 'intermediate', isPilot: false },
  { number: 8, slug: 'nun-sakinah', titleFr: 'Nūn Sākinah & Tanwīn (4 Règles)', titleAr: 'أحكام النون الساكنة والتنوين', category: 'intermediate', isPilot: true },
  { number: 9, slug: 'mim-sakinah', titleFr: 'Les Règles de la Mīm Sākinah', titleAr: 'أحكام الميم الساكنة', category: 'intermediate', isPilot: false },
  { number: 10, slug: 'qalqalah', titleFr: 'La Qalqalah & Ses Degrés de Rebond', titleAr: 'أحكام القلقلة ومراتبها', category: 'intermediate', isPilot: true },
  { number: 11, slug: 'assimilation', titleFr: 'L\'Assimilation (Idghām Mutamāthilayn, etc.)', titleAr: 'إدغام المتماثلين والمتقاربين والمتجانسين', category: 'advanced', isPilot: false },
  { number: 12, slug: 'heavy-light', titleFr: 'Emphase & Amincissement (Tafkhīm & Tarqīq)', titleAr: 'التفخيم والترقيق', category: 'advanced', isPilot: false },
  { number: 13, slug: 'iltiqa-sakīnayn', titleFr: 'Rencontre de Deux Soukoûns (Iltiqā\' As-Sākinayn)', titleAr: 'التقاء الساكنين', category: 'advanced', isPilot: false },
  { number: 14, slug: 'disjointed-letters', titleFr: 'Les Lettres Isolées (Al-Hurūf Al-Muqatta\'ah)', titleAr: 'الحروف المقطعة', category: 'advanced', isPilot: false },
  { number: 15, slug: 'important-comparisons', titleFr: 'Comparaisons & Distinctions Subtiles', titleAr: 'مقارنات وفروق هامة', category: 'advanced', isPilot: false },
  { number: 16, slug: 'special-cases', titleFr: 'Cas Particuliers (Saktah, Tashīl, Imālah)', titleAr: 'الكلمات المخصوصة والرواية', category: 'advanced', isPilot: false },
];

export const PILOT_CHAPTERS: Chapter[] = [
  // ==========================================
  // CHAPITRE 8 : NŪN SĀKINAH & TANWĪN
  // ==========================================
  {
    id: 'chap-8',
    number: 8,
    slug: 'nun-sakinah',
    titleFr: 'Nūn Sākinah & Tanwīn',
    titleAr: 'أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ',
    category: 'intermediate',
    estimatedMinutes: 25,
    isPilotChapter: true,
    summaryFr: 'Les 4 règles fondamentales déclenchées par la rencontre d\'un Nūn sans voyelle ou d\'un Tanwīn avec la lettre suivante : Izhār, Idghām, Iqlāb et Ikhfā\'.',
    infographicPoints: [
      'Ghunnah : Résonance nasale obligatoire de 2 temps (harakat) pour Idghām bi-ghunnah, Iqlāb et Ikhfā\'.',
      'Izhār Halqī (6 lettres de gorge) : Prononciation nette et limpide, sans coupure ni prolongation.',
      'Idghām (6 lettres يَرْمَلُونَ) : Fusion totale ou partielle. Attention à l\'Izhār Mutlaq sur 4 mots du Coran (دُنۡيَا, بُنۡيَٰن, قِنۡوَان, صِنۡوَان).',
      'Iqlāb (lettre ب) : Transformation en Mīm léger sans écraser les lèvres, avec résonance de 2 temps.',
      'Ikhfā\' (15 lettres) : Dissimulation avec anticipation du point d\'articulation. Ghunnah emphatique (Tafkhīm) avant les lettres lourdes (ص, ض, ط, ظ, ق) !'
    ],
    subrules: [
      {
        id: 'izhar',
        nameFr: '1. Al-Izhār Al-Halqī (L\'Élucidation / Clarté)',
        nameAr: 'الإِظْهَارُ الحَلْقِيُّ',
        mnemonic: 'ء - هـ - ع - ح - غ - خ (6 lettres de la gorge)',
        letters: ['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'],
        definitionFr: 'Prononciation claire et distincte du son « N » sans ajouter de résonance nasale (Ghunnah) excessive, ni couper la récitation brutalement.',
        mechanismFr: 'La pointe de la langue touche fermement les gencives supérieures pour former le son N, puis la lettre de la gorge est émise immédiatement sans pause artificielle.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-izh-1',
            arabicText: 'مَنۡ ءَامَنَ',
            surahAyahRef: '2:62',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'مَنۡ ءَ',
            highlightLetter: 'ن + ء',
            ruleApplied: 'Izhār Halqī',
            ruleTag: 'izhar',
            explanationFr: 'Le Nūn Sākinah est suivi d\'une Hamzah (ء), lettre de la gorge. Le Nūn est prononcé nettement sans bourdonnement prolongé.',
            transliteration: 'Man \'āmana',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002062.mp3'
          },
          {
            id: 'ex-izh-2',
            arabicText: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ',
            surahAyahRef: '1:7',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'أَنۡعَمۡتَ',
            highlightLetter: 'ن + ع',
            ruleApplied: 'Izhār Halqī dans un seul mot',
            ruleTag: 'izhar',
            explanationFr: 'Izhār au sein du mot « An\'amta » : le Nūn Sākin est suivi du \'Ayn (ع). Prononcez le Nūn clairement avant d\'émettre le \'Ayn.',
            transliteration: 'An\'amta \'alayhim',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3'
          },
          {
            id: 'ex-izh-3',
            arabicText: 'عَلِيمٌ حَكِيمٞ',
            surahAyahRef: '4:26',
            surahNameFr: 'An-Nisā\'',
            highlightSegment: 'عَلِيمٌ حَ',
            highlightLetter: 'Tanwīn + ح',
            ruleApplied: 'Izhār Halqī avec Tanwīn',
            ruleTag: 'izhar',
            explanationFr: 'Le Tanwīn de « \'Alīmun » est suivi de la lettre Hā\' (ح). Les deux voyelles du Tanwīn sont dessinées alignées dans le Coran.',
            transliteration: '\'Alīmun Hakīm',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/004026.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Ajouter une pause (Saktah) artificielle entre le Nūn et la lettre de gorge.',
            correctionFr: 'Enchaînez naturellement sans bloquer votre souffle : prononcez « man » puis immédiatement « \'āmana ».'
          },
          {
            trapFr: 'Prolonger une Ghunnah nasale sur le Nūn comme si c\'était un Ikhfā\'.',
            correctionFr: 'Le Nūn en Izhār ne dure qu\'un temps de lettre normale (soukoûn sec et fluide).'
          }
        ]
      },
      {
        id: 'idgham',
        nameFr: '2. Al-Idghām (La Fusion / Assimilation)',
        nameAr: 'الإِدْغَامُ',
        mnemonic: 'يَرْمَلُونَ (YARMALŪN) — Divisé en ينمو (avec Ghunnah) et ل/ر (sans Ghunnah)',
        letters: ['ي', 'ر', 'م', 'ل', 'و', 'ن'],
        definitionFr: 'Fusion complète ou partielle du Nūn Sākinah ou du Tanwīn dans la lettre suivante, de sorte qu\'elle se prononce comme une lettre doublée (Mushaddadah).',
        mechanismFr: 'Le son du Nūn disparaît au profit de la lettre suivante. Si la lettre fait partie de (ي-ن-م-و), la fusion s\'accompagne d\'une Ghunnah de 2 temps.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-idg-1',
            arabicText: 'فَمَن يَعۡمَلۡ مِثۡقَالَ ذَرَّةٍ خَيۡرٗا يَرَهُۥ',
            surahAyahRef: '99:7',
            surahNameFr: 'Az-Zalzalah',
            highlightSegment: 'فَمَن يَعۡمَلۡ',
            highlightLetter: 'ن + ي',
            ruleApplied: 'Idghām bi-Ghunnah (avec résonance nasale)',
            ruleTag: 'ghunnah',
            explanationFr: 'Le Nūn de « man » fusionne dans le Yā\' : on prononce « fa-may-ya\'mal » en maintenant le son nasal dans le nez pendant 2 temps.',
            transliteration: 'Fa-may-ya\'mal',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/099007.mp3'
          },
          {
            id: 'ex-idg-2',
            arabicText: 'مِن رَّبِّهِمۡ',
            surahAyahRef: '2:5',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'مِن رَّبِّهِمۡ',
            highlightLetter: 'ن + ر',
            ruleApplied: 'Idghām bi-Ghayri Ghunnah (fusion complète sans nasalité)',
            ruleTag: 'silent',
            explanationFr: 'Le Nūn disparaît totalement dans le Râ\' avec Shaddah : on prononce directement « Mir-rabbihim » sans aucune nasalité.',
            transliteration: 'Mir-rabbihim',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002005.mp3'
          },
          {
            id: 'ex-idg-exception',
            arabicText: 'فِى ٱلۡحَيَوٰةِ ٱلدُّنۡيَا',
            surahAyahRef: '2:85',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'ٱلدُّنۡيَا',
            highlightLetter: 'ن + ي (dans le même mot)',
            ruleApplied: 'Exception : Izhār Mutlaq (الإظهار المطلق)',
            ruleTag: 'izhar',
            explanationFr: 'ATTENTION PIÈGE DU LIVRE : Si le Nūn et la lettre d\'Idghām se rencontrent au sein du MÊME mot, l\'Idghām est interdit ! Seuls 4 mots existent dans le Coran : Dunyā (دُنۡيَا), Bunyān (بُنۡيَٰن), Qinwān (قِنۡوَان), Sinwān (صِنۡوَان).',
            transliteration: 'Ad-Dunyā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002085.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Appliquer l\'Idghām à l\'intérieur d\'un même mot comme « Dunyā » en disant « Duyyā ».',
            correctionFr: 'Conservez toujours le Nūn clair dans les 4 mots exceptions du Coran (Izhār Mutlaq).'
          },
          {
            trapFr: 'Laisser une résonance nasale sur les lettres Lâm (ل) et Râ\' (ر).',
            correctionFr: 'Avec Lâm et Râ\', l\'Idghām est pur et sec : aucun souffle ne doit sortir par le nez.'
          }
        ]
      },
      {
        id: 'iqlab',
        nameFr: '3. Al-Iqlāb (La Conversion en Mīm)',
        nameAr: 'الإِقْلَابُ',
        mnemonic: 'Lettre unique : ب (Bā\') — marquée par un petit mīm (مـ ou ۢ) dans le Mushaf',
        letters: ['ب'],
        definitionFr: 'Transformation du son du Nūn Sākinah ou du Tanwīn en un son Mīm (م) caché, accompagné d\'une Ghunnah de 2 temps, lors de la rencontre avec la lettre Bā\' (ب).',
        mechanismFr: 'Les lèvres se ferment très légèrement et délicatement sans pression excessive, pendant que le son nasal résonne dans la cavité nasale pendant 2 temps.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-iql-1',
            arabicText: 'مِنۢ بَعۡدِ مَا جَآءَتۡهُمُ ٱلۡبَيِّنَٰتُ',
            surahAyahRef: '2:213',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'مِنۢ بَعۡدِ',
            highlightLetter: 'ن + ب',
            ruleApplied: 'Iqlāb',
            ruleTag: 'ghunnah',
            explanationFr: 'Le Nūn de « min » suivi de « ba\'d » se transforme en un Mīm doux avec Ghunnah de 2 temps : « Mim-ba\'d ».',
            transliteration: 'Mim-ba\'di',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002213.mp3'
          },
          {
            id: 'ex-iql-2',
            arabicText: 'وَٱللَّهُ سَمِيعُۢ بَصِيرٌ',
            surahAyahRef: '2:224',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'سَمِيعُۢ بَصِيرٌ',
            highlightLetter: 'Tanwīn + ب',
            ruleApplied: 'Iqlāb avec Tanwīn',
            ruleTag: 'ghunnah',
            explanationFr: 'Le Tanwīn de « Samī\'un » est suivi du Bā\'. On entend « Samī\'um-Basīr » avec Ghunnah.',
            transliteration: 'Samī\'um-Basīr',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002224.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Serrer et presser les lèvres très fort sur le Mīm.',
            correctionFr: 'Le contact des lèvres doit être doux et naturel (Mulāmasah latīfah), sans laisser un écart visible ni contracter la mâchoire.'
          },
          {
            trapFr: 'Oublier la Ghunnah et prononcer un Mīm ultra-rapide sans temps de maintien.',
            correctionFr: 'Maintenez la Ghunnah pendant 2 temps complets avant d\'exploser sur le son Bā\'.'
          }
        ]
      },
      {
        id: 'ikhfa',
        nameFr: '4. Al-Ikhfā\' Al-Haqīqī (La Dissimulation)',
        nameAr: 'الإِخْفَاءُ الحَقِيقِيُّ',
        mnemonic: 'Les 15 lettres restantes : ص ذ ث ك ج ش ق س د ط ز ف ت ض ظ',
        letters: ['ص', 'ذ', 'ث', 'ك', 'ج', 'ش', 'ق', 'س', 'د', 'ط', 'ز', 'ف', 'ت', 'ض', 'ظ'],
        definitionFr: 'Dissimulation partielle de la consonne Nūn entre l\'Izhār et l\'Idghām, sans Shaddah, tout en conservant une Ghunnah complète de 2 temps.',
        mechanismFr: 'La langue NE DOIT PAS toucher les gencives supérieures ! Elle se prépare immédiatement à l\'endroit exact de la lettre suivante tandis que le son résonne dans le nez.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-ikh-1',
            arabicText: 'مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ',
            surahAyahRef: '2:25',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'مِن تَحۡتِهَا',
            highlightLetter: 'ن + ت (Ghunnah légère)',
            ruleApplied: 'Ikhfā\' avec Ghunnah légère (Tarqīq)',
            ruleTag: 'ghunnah',
            explanationFr: 'Le Tā\' (ت) est une lettre fine (Murāqqaqah). La Ghunnah qui précède doit obligatoirement être légère et claire.',
            transliteration: 'Min-tahtihā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002025.mp3'
          },
          {
            id: 'ex-ikh-2',
            arabicText: 'مِن قَبۡلِكَ وَمِن قَبۡلِهِمۡ',
            surahAyahRef: '2:4',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'مِن قَبۡلِكَ',
            highlightLetter: 'ن + ق (Ghunnah lourde)',
            ruleApplied: 'Ikhfā\' avec Ghunnah emphatique (Tafkhīm)',
            ruleTag: 'heavy',
            explanationFr: 'RÈGLE D\'OR DU LIVRE : Le Qāf (ق) est lourd. La Ghunnah d\'Ikhfā\' prend la couleur de la lettre suivante et devient emphatique et profonde.',
            transliteration: 'Min-qablika',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002004.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Coller la langue au palais comme pour un Izhār : cela produit un son N dur.',
            correctionFr: 'Gardez la langue suspendue près des dents ou du point d\'articulation de la lettre suivante sans verrouiller.'
          },
          {
            trapFr: 'Faire une Ghunnah fine devant des lettres lourdes comme ص, ض, ط, ظ, ق.',
            correctionFr: 'Donnez du volume à la Ghunnah en reculant légèrement l\'arrière de la langue devant les 5 lettres de Tafkhīm.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'exo-nun-1',
        title: 'Analyse guidée : Sūrah Al-Baqarah (2:8)',
        verseArabic: 'وَمِنَ ٱلنَّاسِ مَن يَقُولُ ءَامَنَّا بِٱللَّهِ',
        surahAyahRef: '2:8',
        targetSegment: 'مَن يَقُولُ',
        promptFr: 'Identifiez la règle de Tajwīd qui s\'applique entre « man » et « yaqūlu ».',
        hintFr: 'Observez la lettre qui suit le Nūn sans soukoûn visible.',
        solutionFr: 'Idghām bi-Ghunnah (إدغام بغنة)',
        breakdownSteps: [
          'Étape 1 : Le mot « man » se termine par un Nūn Sākinah.',
          'Étape 2 : Le mot suivant débute par la lettre Yā\' (ي).',
          'Étape 3 : Le Yā\' fait partie des 4 lettres du mot YANMŪ (ينمو).',
          'Conclusion : Le Nūn fusionne dans le Yā\' avec une Ghunnah de 2 temps : on récite « may-yaqūlu ».'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/002008.mp3'
      },
      {
        id: 'exo-nun-2',
        title: 'Piège d\'Izhār Mutlaq : Sūrah Ar-Ra\'d (13:4)',
        verseArabic: 'صِنۡوَانٞ وَغَيۡرُ صِنۡوَانٖ يُسۡقَىٰ بِمَآءٖ وَٰحِدٖ',
        surahAyahRef: '13:4',
        targetSegment: 'صِنۡوَانٞ',
        promptFr: 'Pourquoi ne fait-on pas d\'Idghām sur « Sinwān » alors qu\'un Nūn est suivi d\'un Wāw ?',
        hintFr: 'Regardez si le Nūn et le Wāw sont dans le même mot ou séparés.',
        solutionFr: 'Izhār Mutlaq (Exception absolue)',
        breakdownSteps: [
          'Le Nūn et le Wāw se trouvent à l\'intérieur du MÊME mot (« Sin-wān »).',
          'Si on appliquait l\'Idghām, le mot deviendrait « Siwwān », altérant le sens originel.',
          'La règle exige donc un Izhār clair et net. C\'est l\'un des 4 cas uniques du Coran entier.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/013004.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-nun-1',
        type: 'mcq',
        promptFr: 'Quelle règle de Nūn Sākinah s\'applique dans le segment surligné ci-dessous ?',
        verseArabic: 'تَرۡمِيهِم بِحِجَارَةٖ مِّن سِجِّيلٖ',
        targetWord: 'مِّن سِجِّيلٖ',
        surahAyahRef: '105:4',
        options: [
          'Izhār Halqī (Clarté)',
          'Idghām bi-Ghunnah (Fusion)',
          'Ikhfā\' Haqīqī (Dissimulation)',
          'Iqlāb (Conversion)'
        ],
        correctAnswer: 'Ikhfā\' Haqīqī (Dissimulation)',
        explanationFr: 'Le Nūn Sākinah de « min » est suivi du Sīn (س), qui fait partie des 15 lettres de l\'Ikhfā\'. La récitation dissimule le Nūn avec une Ghunnah fine de 2 temps.',
        ruleId: 'ikhfa'
      },
      {
        id: 'q-nun-2',
        type: 'mcq',
        promptFr: 'Dans le verset suivant, quelle règle s\'applique sur « \'Anhum » ?',
        verseArabic: 'رَّضِىَ ٱللَّهُ عَنۡهُمۡ وَرَضُواْ عَنۡهُۚ',
        targetWord: 'عَنۡهُمۡ',
        surahAyahRef: '98:8',
        options: [
          'Izhār Halqī',
          'Ikhfā\'',
          'Idghām',
          'Iqlāb'
        ],
        correctAnswer: 'Izhār Halqī',
        explanationFr: 'Le Nūn Sākinah est suivi de la lettre Hā\' (هـ), qui est l\'une des 6 lettres de la gorge (Halq). Le son N doit être prononcé clairement sans allongement nasal.',
        ruleId: 'izhar'
      },
      {
        id: 'q-nun-3',
        type: 'error_detect',
        promptFr: 'Détection d\'erreur : Quelle faute de récitation (Lahn) est commise si un récitateur prononce « Min-qablika » avec une Ghunnah très aiguë et fine (Tarqīq) ?',
        verseArabic: 'وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ',
        targetWord: 'مِن قَبۡلِكَ',
        surahAyahRef: '2:4',
        options: [
          'C\'est correct, la Ghunnah est toujours légère.',
          'Erreur de Lahn Khafī : Le Qāf (ق) est une lettre lourde, la Ghunnah DOIT être emphatique (Tafkhīm).',
          'Erreur de Lahn Jalī : Il fallait prononcer un Izhār sec.',
          'Erreur : Le Qāf est une lettre de gorge.'
        ],
        correctAnswer: 'Erreur de Lahn Khafī : Le Qāf (ق) est une lettre lourde, la Ghunnah DOIT être emphatique (Tafkhīm).',
        explanationFr: 'La règle d\'or stipule que la Ghunnah d\'Ikhfā\' adopte la nature de la lettre qui suit. Devant les 5 lettres lourdes (ص, ض, ط, ظ, ق), la Ghunnah doit résonner avec plénitude et gravité.',
        ruleId: 'ikhfa'
      },
      {
        id: 'q-nun-4',
        type: 'click_word',
        promptFr: 'Repérage visuel : Cliquez sur le mot précis contenant une règle d\'IQLĀB dans ce verset.',
        verseArabic: 'كَلَّا لَئِن لَّمۡ يَنتَهِ لَنَسۡفَعَۢا بِٱلنَّاصِيَةِ',
        clickableSegments: ['كَلَّا', 'لَئِن', 'لَّمۡ', 'يَنتَهِ', 'لَنَسۡفَعَۢا', 'بِٱلنَّاصِيَةِ'],
        correctAnswer: 'لَنَسۡفَعَۢا',
        explanationFr: '« Lanasfa\'an » se termine par un Tanwīn suivi de la lettre Bā\' dans le mot suivant. Le petit mīm (ۢ) indique la conversion en son Mīm avec Ghunnah de 2 temps.',
        ruleId: 'iqlab'
      }
    ]
  },

  // ==========================================
  // CHAPITRE 10 : LA QALQALAH
  // ==========================================
  {
    id: 'chap-10',
    number: 10,
    slug: 'qalqalah',
    titleFr: 'La Qalqalah & Ses Degrés',
    titleAr: 'أَحْكَامُ القَلْقَلَةِ وَمَرَاتِبُهَا',
    category: 'intermediate',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Le rebond ou écho acoustique produit lors de l\'émission d\'une des 5 lettres de « Qutb Jadd » à l\'état de soukoûn, et la distinction essentielle entre ses 3 degrés de force.',
    infographicPoints: [
      'Les 5 lettres de la Qalqalah sont regroupées dans la formule mnémotechnique : قُطْبُ جَدٍّ (Qāf, Tā\', Bā\', Jīm, Dāl).',
      'Condition sine qua non : La lettre DOIT porter un Soukoûn (qu\'il soit originel ou temporaire suite à l\'arrêt / Waqf).',
      'Degré 1 - Qalqalah Kubrā (Majeure) : À l\'arrêt sur une lettre portant une Shaddah (ex: وَتَبَّ, بِٱلۡحَقِّ).',
      'Degré 2 - Qalqalah Wustā (Moyenne) : À l\'arrêt sur une lettre simple sans Shaddah (ex: قُلۡ هُوَ ٱللَّهُ أَحَدٌ).',
      'Degré 3 - Qalqalah Sughrā (Mineure) : Au milieu d\'un mot ou d\'une phrase en continuant la lecture (ex: يَقۡطَعُونَ, خَلَقۡنَا).',
      'Piège absolu à bannir : Ne jamais ajouter de voyelle (ni Fathah, ni Kasrah, ni Dammah) lors du rebond !'
    ],
    subrules: [
      {
        id: 'qalqalah-definition',
        nameFr: '1. Mécanisme Phonétique & Les 5 Lettres',
        nameAr: 'حَقِيقَةُ القَلْقَلَةِ وَحُرُوفُهَا',
        mnemonic: 'قُطْبُ جَدٍّ (Q-T-B-J-D)',
        letters: ['ق', 'ط', 'ب', 'ج', 'د'],
        definitionFr: 'La Qalqalah est une vibration ou rebond audible qui se produit lors du relâchement immédiat des deux articulateurs après un blocage total de l\'air et de la voix (caractéristiques de Jahr et Shiddah).',
        mechanismFr: 'Lorsqu\'on prononce une lettre sākinah, les articulateurs entrent en collision sans voyelle. Comme ces 5 lettres ont une fermeture totale, un rebond vif sans mouvement de mâchoire libère l\'air emprisonné.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-qal-letters-1',
            arabicText: 'قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ',
            surahAyahRef: '113:1',
            surahNameFr: 'Al-Falaq',
            highlightSegment: 'ٱلۡفَلَقِ',
            highlightLetter: 'ق (à l\'arrêt)',
            ruleApplied: 'Qalqalah sur la lettre Qāf',
            ruleTag: 'qalqalah',
            explanationFr: 'En s\'arrêtant sur « Al-Falaq », la Kasrah finale devient un soukoûn temporaire. Le Qāf rebondit avec force tout en conservant son emphase (Tafkhīm).',
            transliteration: 'Al-Falaq',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/113001.mp3'
          },
          {
            id: 'ex-qal-letters-2',
            arabicText: 'قُلۡ هُوَ ٱللَّهُ أَحَدٌ',
            surahAyahRef: '112:1',
            surahNameFr: 'Al-Ikhlās',
            highlightSegment: 'أَحَدٌ',
            highlightLetter: 'د (à l\'arrêt)',
            ruleApplied: 'Qalqalah sur le Dāl',
            ruleTag: 'qalqalah',
            explanationFr: 'Arrêt sur « Ahad » : le Dāl reçoit un soukoûn temporaire et produit un claquement net et sec, sans voyelle parasite.',
            transliteration: 'Ahad',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/112001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Incliner le son vers une Fathah (ex: dire "Ahad-a") ou vers une Hamzah bloquée.',
            correctionFr: 'Le rebond doit être neutre : la mâchoire et les lèvres restent parfaitement immobiles.'
          },
          {
            trapFr: 'Faire rebondir des lettres qui ne font pas partie de Qutb Jadd (comme le Kāf ك ou le Tā\' ت).',
            correctionFr: 'Le Kāf et le Tā\' ont du souffle (Hams), jamais de rebond de Qalqalah !'
          }
        ]
      },
      {
        id: 'qalqalah-degrees',
        nameFr: '2. Les 3 Degrés de Force (Kubrā, Wustā, Sughrā)',
        nameAr: 'مَرَاتِبُ القَلْقَلَةِ الثَّلَاثُ',
        mnemonic: 'Majeure (Shaddah arrêt) > Moyenne (Arrêt simple) > Mineure (En cours de verset)',
        letters: ['ق', 'ط', 'ب', 'ج', 'د'],
        definitionFr: 'L\'intensité du rebond varie selon la position de la lettre et la présence d\'une Shaddah.',
        mechanismFr: '1. Kubrā : Pression maintenue sur la première lettre puis libération explosive sur la seconde. 2. Wustā : Rebond clair à la fin du souffle. 3. Sughrā : Rebond agile et rapide pour ne pas briser le rythme du mot.',
        examples: [
          {
            id: 'ex-deg-kubra',
            arabicText: 'تَبَّتۡ يَدَآ أَبِى لَهَبٖ وَتَبَّ',
            surahAyahRef: '111:1',
            surahNameFr: 'Al-Masad',
            highlightSegment: 'وَتَبَّ',
            highlightLetter: 'بّ (Shaddah à l\'arrêt)',
            ruleApplied: 'Degré 1 : Qalqalah Kubrā (Majeure)',
            ruleTag: 'qalqalah',
            explanationFr: 'La lettre Bā\' porte une Shaddah et se trouve à la fin du verset. On maintient la première consonne puis on fait jaillir le rebond le plus puissant.',
            transliteration: 'Wa-tabb',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/111001.mp3'
          },
          {
            id: 'ex-deg-wusta',
            arabicText: 'مَا كَسَبَ',
            surahAyahRef: '111:2',
            surahNameFr: 'Al-Masad',
            highlightSegment: 'كَسَبَ',
            highlightLetter: 'ب (sans Shaddah à l\'arrêt)',
            ruleApplied: 'Degré 2 : Qalqalah Wustā (Moyenne)',
            ruleTag: 'qalqalah',
            explanationFr: 'Arrêt sur une lettre de Qalqalah non doublée. Le rebond est franc, sonore et bien audible.',
            transliteration: 'Kasab',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/111002.mp3'
          },
          {
            id: 'ex-deg-sughra',
            arabicText: 'ٱلَّذِينَ يَقۡطَعُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ',
            surahAyahRef: '2:27',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'يَقۡطَعُونَ',
            highlightLetter: 'ق (au milieu du mot)',
            ruleApplied: 'Degré 3 : Qalqalah Sughrā (Mineure)',
            ruleTag: 'qalqalah',
            explanationFr: 'Le Qāf est sākin à l\'intérieur du mot « yaq-ta\'ūna ». Le rebond est rapide et fluide pour enchaîner sans interruption de la récitation.',
            transliteration: 'Yaqta\'ūn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002027.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Interrompre la récitation sur une Qalqalah Sughrā en plein milieu d\'un mot.',
            correctionFr: 'Le rebond en Sughrā doit être léger et instantané, sans marquer de temps d\'arrêt.'
          },
          {
            trapFr: 'Affaiblir la Qalqalah Kubrā comme si la lettre n\'avait pas de Shaddah.',
            correctionFr: 'Marquez bien le poids de la Shaddah avant l\'explosion du son.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'exo-qal-1',
        title: 'Classement des degrés : Sūrah Al-Falaq (113:1-3)',
        verseArabic: 'قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        surahAyahRef: '113:1-3',
        targetSegment: 'ٱلۡفَلَقِ, خَلَقَ, وَقَبَ',
        promptFr: 'Quel degré de Qalqalah produit-on lors de l\'arrêt sur les rimes de ces versets ?',
        hintFr: 'Ces lettres portent-elles une Shaddah ? Sont-elles situées à la fin du mot lors de l\'arrêt ?',
        solutionFr: 'Qalqalah Wustā (Degré moyen)',
        breakdownSteps: [
          'Les lettres finales sont Qāf (ق) et Bā\' (ب).',
          'Ces lettres ne comportent pas de Shaddah.',
          'Comme le lecteur s\'arrête dessus (Waqf), elles prennent un soukoûn temporaire.',
          'Il s\'agit donc du deuxième degré (Wustā / Moyenne).'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/113001.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-qal-1',
        type: 'mcq',
        promptFr: 'Parmi ces combinaisons, quelle est la formule exacte regroupant toutes les lettres de la Qalqalah ?',
        verseArabic: 'قُطۡبُ جَدٍّ',
        options: [
          'قُطۡبُ جَدٍّ (Qāf, Tā\', Bā\', Jīm, Dāl)',
          'يَرۡمَلُونَ (Yā\', Râ\', Mīm, Lâm, Wāw, Nūn)',
          'حُرُوفُ الحَلۡقِ (Les 6 lettres de gorge)',
          'حُرُوفُ المَدِّ (Alif, Wāw, Yā\')'
        ],
        correctAnswer: 'قُطۡبُ جَدٍّ (Qāf, Tā\', Bā\', Jīm, Dāl)',
        explanationFr: 'La formule mnémotechnique universelle enseignée dans le livre est « Qutb Jadd » (قُطْبُ جَدٍّ).',
        ruleId: 'qalqalah-definition'
      },
      {
        id: 'q-qal-2',
        type: 'mcq',
        promptFr: 'Quel est le degré le plus fort de Qalqalah (Kubrā) ?',
        verseArabic: 'تَبَّتۡ يَدَآ أَبِى لَهَبٖ وَتَبَّ',
        targetWord: 'وَتَبَّ',
        surahAyahRef: '111:1',
        options: [
          'À l\'arrêt sur une lettre de Qalqalah avec Shaddah en fin de verset',
          'Au milieu d\'un mot avec soukoûn simple',
          'À l\'arrêt sur une lettre sans Shaddah',
          'Lorsque la lettre est vocalisée avec une Fathah'
        ],
        correctAnswer: 'À l\'arrêt sur une lettre de Qalqalah avec Shaddah en fin de verset',
        explanationFr: 'Le degré le plus puissant (Kubrā) survient lors d\'un arrêt (Waqf) sur une lettre doublée d\'une Shaddah comme « Wa-tabb » ou « Al-Haqq ».',
        ruleId: 'qalqalah-degrees'
      },
      {
        id: 'q-qal-3',
        type: 'click_word',
        promptFr: 'Repérage visuel : Cliquez sur le mot contenant une Qalqalah Sughrā (au milieu d\'un mot) dans ce verset.',
        verseArabic: 'إِنَّا خَلَقۡنَا ٱلۡإِنسَٰنَ مِن نُّطۡفَةٍ',
        clickableSegments: ['إِنَّا', 'خَلَقۡنَا', 'ٱلۡإِنسَٰنَ', 'مِن', 'نُّطۡفَةٍ'],
        correctAnswer: 'خَلَقۡنَا',
        explanationFr: 'Dans le mot « Khalaqnā », le Qāf (ق) porte un soukoûn au milieu du mot. C\'est une Qalqalah Sughrā (rebond léger et vif).',
        ruleId: 'qalqalah-degrees'
      },
      {
        id: 'q-qal-4',
        type: 'error_detect',
        promptFr: 'Un étudiant récite « Ahad » en ajoutant une voyelle à la fin : "Ahada". Quelle est l\'erreur ?',
        verseArabic: 'قُلۡ هُوَ ٱللَّهُ أَحَدٌ',
        targetWord: 'أَحَدٌ',
        options: [
          'Erreur classique : Ne jamais transformer le rebond en voyelle (Fathah). Le rebond doit rester un soukoûn pur.',
          'C\'est la bonne prononciation.',
          'Il devait faire une prolongation de 4 temps.',
          'Il devait nasaliser le Dāl.'
        ],
        correctAnswer: 'Erreur classique : Ne jamais transformer le rebond en voyelle (Fathah). Le rebond doit rester un soukoûn pur.',
        explanationFr: 'Le livre insiste fermement : le piège le plus fréquent en Qalqalah est d\'ouvrir la bouche et de glisser vers une Fathah. Le rebond ne doit comporter aucun mouvement de lèvres ou de mâchoire.',
        ruleId: 'qalqalah-definition'
      }
    ]
  }
];
