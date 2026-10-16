import { Chapter } from '../types/tajweed';

export const ALL_BOOK_CHAPTERS: { number: number; slug: string; titleFr: string; titleAr: string; category: 'beginner' | 'intermediate' | 'advanced'; isPilot: boolean }[] = [
  { number: 1, slug: 'basic-concepts', titleFr: 'Concepts Fondamentaux & Le Lahn (Erreurs)', titleAr: 'المَفَاهِيمُ الأَسَاسِيَّةُ وَأَنْوَاعُ اللَّحْنِ', category: 'beginner', isPilot: true },
  { number: 2, slug: 'quranic-symbols', titleFr: 'Symboles Coraniques & Ponctuation', titleAr: 'علامات المصحف وضبطه', category: 'beginner', isPilot: true },
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
  // CHAPITRE 1 : CONCEPTS FONDAMENTAUX & LAHN
  // ==========================================
  {
    id: 'chap-1',
    number: 1,
    slug: 'basic-concepts',
    titleFr: 'Concepts Fondamentaux & Le Lahn (Erreurs)',
    titleAr: 'المَفَاهِيمُ الأَسَاسِيَّةُ وَأَنْوَاعُ اللَّحْنِ',
    category: 'beginner',
    estimatedMinutes: 15,
    isPilotChapter: true,
    summaryFr: 'Comprendre ce qu\'est le Tajwīd, son obligation religieuse (Farḍ \'Ayn vs Farḍ Kifāyah), comment éradiquer le Lahn Jalī (erreur majeure altérant le sens), le graphisme sacré du Rasm \'Uthmānī et les deux conditions d\'acceptation de la récitation.',
    infographicPoints: [
      'Application du Tajwīd = Farḍ \'Ayn (obligation individuelle) pour réciter la parole divine sans la corrompre. L\'étude théorique des définitions est Farḍ Kifāyah.',
      'Al-Lahn Al-Jalī (Erreur Majeure) : Altère le sens ou la grammaire (ex: dire An\'amtu au lieu de An\'amta). C\'est un péché (Harām) si commis par négligence !',
      'Al-Lahn Al-Khafī (Erreur Subtile) : Défaut de finition sans changer le sens (ex: raccourcir un Madd de 5 temps à 2 temps). Déconseillé (Makrūh).',
      'Rasm \'Uthmānī : L\'orthographe sacrée établie par les Compagnons sous \'Uthmān ibn \'Affān (ex: ٱلصَّلَوٰةَ s\'écrit avec un Wāw).',
      'Deux conditions d\'acceptation : 1. L\'Intention pure (Ikhlās) exclusivement pour Allah. 2. La conformité à la Sunnah (Tajwīd et Tartīl).',
      'Astuce mnémotechnique : 23 ans de mission prophétique. Ajoutez un 6 avant et un 6 après -> 6236 versets dans tout le Coran !'
    ],
    subrules: [
      {
        id: 'tajweed-definition',
        nameFr: '1. Qu\'est-ce que le Tajwīd & Statut Juridique',
        nameAr: 'تَعْرِيفُ التَّجْوِيدِ وَحُكْمُهُ الشَّرْعِيُّ',
        mnemonic: 'Pratique = Farḍ \'Ayn (Chacun) | Théorie = Farḍ Kifāyah (Spécialistes)',
        letters: [],
        definitionFr: 'Linguistiquement, le Tajwīd signifie l\'embellissement et le perfectionnement. Techniquement, il consiste à donner à chaque lettre son point d\'articulation exact (Makhraj) et ses caractéristiques originelles (Sifāt).',
        mechanismFr: 'L\'obligation individuelle (Farḍ \'Ayn) exige de lire les lettres et les voyelles correctement pour préserver le sens. Connaître les définitions techniques savantes est une obligation communautaire (Farḍ Kifāyah).',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c1-1',
            arabicText: 'وَرَتِّلِ ٱلۡقُرۡءَانَ تَرۡتِيلًا',
            surahAyahRef: '73:4',
            surahNameFr: 'Al-Muzzammil',
            highlightSegment: 'وَرَتِّلِ',
            highlightLetter: 'Ordre divin',
            ruleApplied: 'Obligation du Tartīl (Récitation posée)',
            ruleTag: 'izhar',
            explanationFr: 'Allah ordonne au Prophète ﷺ et à chaque musulman de réciter le Coran avec Tartīl, c\'est-à-dire lentement, distinctement et en respectant les règles.',
            transliteration: 'Wa rattili-l-Qur\'āna tartīlā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/073004.mp3'
          },
          {
            id: 'ex-c1-2',
            arabicText: 'ٱلَّذِينَ ءَاتَيۡنَٰهُمُ ٱلۡكِتَٰبَ يَتۡلُونَهُۥ حَقَّ تِلَاوَتِهِۦٓ',
            surahAyahRef: '2:121',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'حَقَّ تِلَاوَتِهِۦٓ',
            highlightLetter: 'Droit de récitation',
            ruleApplied: 'Récitation comme révélée',
            ruleTag: 'heavy',
            explanationFr: '« Ils le récitent comme il mérite d\'être récité ». Les Compagnons ont expliqué que cela signifie appliquer ses règles et méditer son sens.',
            transliteration: 'Yatlūnahū haqqa tilāwatih',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002121.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Penser que le Tajwīd n\'est qu\'une option réservée aux imams ou aux savants.',
            correctionFr: 'Le minimum vital (ne pas déformer les lettres ni les voyelles) est une obligation pour chaque musulman dans ses prières.'
          }
        ]
      },
      {
        id: 'lahn-types',
        nameFr: '2. Les Deux Types d\'Erreurs : Lahn Jalī vs Lahn Khafī',
        nameAr: 'اللَّحْنُ الجَلِيُّ وَاللَّحْنُ الخَفِيُّ',
        mnemonic: 'Jalī = Erreur Majeure (Harām / Altère le sens) | Khafī = Erreur Subtile (Makrūh / Altère l\'embellissement)',
        letters: [],
        definitionFr: 'Le mot arabe Lahn (لَحْن) désigne une erreur commise lors de la récitation. Le livre distingue formellement l\'erreur majeure qui détruit le sens, de l\'erreur subtile qui prive la récitation de sa plénitude.',
        mechanismFr: 'Le Lahn Jalī provient du changement d\'une voyelle, de l\'échange d\'une consonne ou de la confusion entre voyelle courte et longue. Le Lahn Khafī concerne les durées de prolongations, l\'omission d\'une Ghunnah ou d\'une Qalqalah.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c1-3',
            arabicText: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ',
            surahAyahRef: '1:7',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'أَنۡعَمۡتَ',
            highlightLetter: 'تَ (Fathah)',
            ruleApplied: 'Piège critique de Lahn Jalī',
            ruleTag: 'qalqalah',
            explanationFr: '« An\'amta » avec Fathah signifie : « Ceux que Tu (Allah) as comblés ». Si un lecteur dit par erreur « An\'amtu » avec Dammah, le sens devient : « Ceux que J\'AI comblés », s\'attribuant ainsi l\'acte divin !',
            transliteration: 'An\'amta \'alayhim',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3'
          },
          {
            id: 'ex-c1-4',
            arabicText: 'وَلَقَدۡ زَيَّنَّا ٱلسَّمَآءَ ٱلدُّنۡيَا بِمَصَٰبِيحَ',
            surahAyahRef: '67:5',
            surahNameFr: 'Al-Mulk',
            highlightSegment: 'ٱلسَّمَآءَ',
            highlightLetter: 'Madd Wājib (4-5 temps)',
            ruleApplied: 'Exemple de Lahn Khafī',
            ruleTag: 'madd',
            explanationFr: 'Le mot « As-Samā\' » doit s\'allonger de 4 à 5 temps. Si le lecteur ne fait que 2 temps, le sens (« le ciel ») ne change pas, mais c\'est un Lahn Khafī (manque de rigueur esthétique).',
            transliteration: 'Zayyannā-s-samā\'a-d-dunyā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/067005.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Négliger la précision des voyelles courtes (Fathah, Dammah, Kasrah) dans la Fātihah.',
            correctionFr: 'Une seule voyelle déplacée peut inverser le sujet et le complément d\'objet, invalidant la prière.'
          },
          {
            trapFr: 'Confondre des consonnes proches comme Tā\' (ت) et Tā\' (ط), ou Sīn (س) et Sād (ص).',
            correctionFr: 'Travaillez l\'articulation distincte des lettres emphatiques et légères.'
          }
        ]
      },
      {
        id: 'quran-mushaf-rasm',
        nameFr: '3. Qur\'ān vs Muṣ-ḥaf & Le Rasm \'Uthmānī',
        nameAr: 'القُرْآنُ وَالمُصْحَفُ وَالرَّسْمُ العُثْمَانِيُّ',
        mnemonic: 'Qur\'ān = Parole Révélée | Muṣ-ḥaf = Volume Relié | Rasm = Orthographe Sacrée',
        letters: [],
        definitionFr: 'Le « Qur\'ān » est la parole incréée d\'Allah, qu\'elle soit psalmodiée ou dans les cœurs, même pour un seul verset. Le « Muṣ-ḥaf » est l\'objet physique contenant l\'intégralité des 114 sourates. Le Rasm \'Uthmānī est le système orthographique fixé par les Compagnons.',
        mechanismFr: 'L\'écriture du Coran obéit au Rasm \'Uthmānī : les mots s\'écrivent selon cette tradition immuable quel que soit le pays ou la calligraphie (ex: ٱلصَّلَوٰةَ avec Wāw).',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c1-5',
            arabicText: 'وَأَقِيمُواْ ٱلصَّلَوٰةَ وَءَاتُواْ ٱلزَّكَوٰةَ',
            surahAyahRef: '2:43',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'ٱلصَّلَوٰةَ',
            highlightLetter: 'وٰ (Wāw surmonté d\'un petit Alif)',
            ruleApplied: 'Rasm \'Uthmānī (Orthographe Sacrée)',
            ruleTag: 'silent',
            explanationFr: 'Dans le Mushaf, « As-Salāh » s\'écrit avec un Wāw surmonté d\'un Alif minuscule (خنجرية), mais se lit toujours avec le son Alif long. C\'est la marque sacrée du Rasm \'Uthmānī.',
            transliteration: 'Wa aqīmu-s-Salāta wa ātu-z-Zakāh',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002043.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Prononcer le Wāw littéralement dans « As-Salawāh ».',
            correctionFr: 'Le Wāw n\'est que le support écrit du Alif : on prononce « As-Salāh ».'
          }
        ]
      },
      {
        id: 'acceptance-conditions',
        nameFr: '4. Les 2 Conditions d\'Acceptation de la Récitation',
        nameAr: 'شَرْطَا قَبُولِ التِّلَاوَةِ (الإِخْلَاصُ وَالمُتَابَعَةُ)',
        mnemonic: '1. Intention pure (Ikhlās) + 2. Conformité Sunnah (Tartīl & Voix embellie)',
        letters: [],
        definitionFr: 'La récitation du Coran est un acte d\'adoration (عِبَادَة) récompensé par Allah. Mais pour être agréée, elle requiert deux conditions absolues : l\'intention sincère dans le cœur et la conformité à la Sunnah.',
        mechanismFr: '1. Intention : réciter uniquement pour plaire à Allah, sans ostentation (Riyā\'). 2. Sunnah : réciter avec Tajwīd, Tartīl (rythme mesuré) et embellissement naturel de la voix.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c1-6',
            arabicText: 'قُلۡ إِنَّ صَلَاتِى وَنُسُكِى وَمَحۡيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
            surahAyahRef: '6:162',
            surahNameFr: 'Al-An\'ām',
            highlightSegment: 'لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
            highlightLetter: 'Pureté exclusive',
            ruleApplied: 'L\'Intention Pure (Al-Ikhlās)',
            ruleTag: 'heavy',
            explanationFr: 'Toute l\'adoration du croyant, y compris chaque lettre récitée, doit être dédiée à Allah seul, sans chercher l\'éloge des créatures.',
            transliteration: 'Qul inna salātī wa nusukī wa mahyāya wa mamātī lillāhi rabbi-l-\'ālamīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/006162.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Réciter pour impressionner son entourage ou faire étalage de sa belle voix.',
            correctionFr: 'Renouvelez toujours votre intention intérieurement avant d\'ouvrir le Mushaf.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'exo-c1-1',
        title: 'Analyse critique : Sūrah Al-Fātihah (1:7)',
        verseArabic: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ',
        surahAyahRef: '1:7',
        targetSegment: 'أَنۡعَمۡتَ',
        promptFr: 'Pourquoi remplacer la Fathah finale par une Dammah sur « An\'amta » est-il considéré comme un péché (Lahn Jalī) ?',
        hintFr: 'Traduisez le mot avec la Fathah « -ta » puis avec la Dammah « -tu ».',
        solutionFr: 'Altération majeure du sens (Lahn Jalī)',
        breakdownSteps: [
          'Étape 1 : « An\'amta » (avec Fathah) est à la 2e personne du singulier : « Toi (Allah), Tu as comblé de bienfaits ».',
          'Étape 2 : « An\'amtu » (avec Dammah) bascule à la 1re personne du singulier : « J\'ai comblé de bienfaits ».',
          'Étape 3 : Le lecteur s\'attribue ainsi la grâce divine accordée aux prophètes et pieux prédécesseurs.',
          'Conclusion : Cette faute déforme la théologie et invalide la prière. C\'est l\'archétype du Lahn Jalī à bannir impérativement.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3'
      },
      {
        id: 'exo-c1-2',
        title: 'Décryptage du Rasm \'Uthmānī : Sūrah Al-Baqarah (2:43)',
        verseArabic: 'وَأَقِيمُواْ ٱلصَّلَوٰةَ وَءَاتُواْ ٱلزَّكَوٰةَ وَٱرۡكَعُواْ مَعَ ٱلرَّٰكِعِينَ',
        surahAyahRef: '2:43',
        targetSegment: 'ٱلصَّلَوٰةَ',
        promptFr: 'Comment prononce-t-on la lettre Wāw présente dans le mot « ٱلصَّلَوٰةَ » ?',
        hintFr: 'Observez le petit symbole au-dessus du Wāw.',
        solutionFr: 'On prononce un Alif long (As-Salāh), le Wāw n\'est que le tracé graphique',
        breakdownSteps: [
          'Le mot est écrit dans le Rasm \'Uthmānī sacré avec la lettre Wāw.',
          'Un petit Alif miniature (Alif Khanjariyyah) est posé au-dessus du Wāw.',
          'Ce signe indique que le Wāw ne se prononce pas « w », mais sert de support au son « ā ».',
          'On prononce donc « As-Salāt / As-Salāh » et jamais « As-Salawat ».'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/002043.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c1-1',
        type: 'mcq',
        promptFr: 'Quel est le statut religieux de l\'application pratique du Tajwīd lors de la lecture du Coran ?',
        verseArabic: 'وَرَتِّلِ ٱلۡقُرۡءَانَ تَرۡتِيلًا',
        surahAyahRef: '73:4',
        options: [
          'Farḍ \'Ayn (Obligation individuelle pour chaque musulman dans la mesure de ses capacités)',
          'Farḍ Kifāyah (Obligation qui ne concerne que les imams et enseignants)',
          'Sunnah purement facultative',
          'Une tradition calligraphique sans rapport avec la voix'
        ],
        correctAnswer: 'Farḍ \'Ayn (Obligation individuelle pour chaque musulman dans la mesure de ses capacités)',
        explanationFr: 'Réciter le Coran sans altérer les lettres ni les voyelles est une obligation individuelle (Farḍ \'Ayn). En revanche, apprendre par cœur les définitions et termes techniques savants est une obligation communautaire (Farḍ Kifāyah).',
        ruleId: 'tajweed-definition'
      },
      {
        id: 'q-c1-2',
        type: 'mcq',
        promptFr: 'Qu\'est-ce qui caractérise un « Lahn Jalī » (اللَّحْنُ الجَلِيُّ) ?',
        verseArabic: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ',
        targetWord: 'أَنۡعَمۡتَ',
        surahAyahRef: '1:7',
        options: [
          'Une erreur évidente qui altère la grammaire ou change le sens d\'un verset (Harām par négligence)',
          'Une prolongation raccourcie d\'un ou deux temps sans altérer le sens',
          'Une récitation un peu trop rapide',
          'L\'oubli d\'un signe d\'arrêt en fin de verset'
        ],
        correctAnswer: 'Une erreur évidente qui altère la grammaire ou change le sens d\'un verset (Harām par négligence)',
        explanationFr: 'Le Lahn Jalī est une faute claire et majeure (changer une voyelle, omettre une consonne) qui transforme la signification de la parole d\'Allah. C\'est strictement interdit si commis par négligence.',
        ruleId: 'lahn-types'
      },
      {
        id: 'q-c1-3',
        type: 'click_word',
        promptFr: 'Repérage visuel : Cliquez sur le mot de ce verset où une faute de voyelle (mettre une Dammah au lieu de la Fathah) change radicalement le sens.',
        verseArabic: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ',
        clickableSegments: ['صِرَٰطَ', 'ٱلَّذِينَ', 'أَنۡعَمۡتَ', 'عَلَيۡهِمۡ'],
        correctAnswer: 'أَنۡعَمۡتَ',
        explanationFr: '« An\'amta » avec Fathah (« Tu as comblé »). Si on met une Dammah « An\'amtu », cela signifie « J\'ai comblé », déplaçant la divinité vers la créature ! C\'est l\'exemple emblématique du livre.',
        ruleId: 'lahn-types'
      },
      {
        id: 'q-c1-4',
        type: 'error_detect',
        promptFr: 'Un lecteur prolonge le mot « As-Samā\' » pendant 2 temps au lieu des 4 à 5 temps requis. Quelle est la nature exacte de cette faute ?',
        verseArabic: 'وَلَقَدۡ زَيَّنَّا ٱلسَّمَآءَ ٱلدُّنۡيَا بِمَصَٰبِيحَ',
        targetWord: 'ٱلسَّمَآءَ',
        surahAyahRef: '67:5',
        options: [
          'Lahn Khafī : Le sens reste intact (« le ciel »), mais la récitation perd de sa splendeur et de sa perfection.',
          'Lahn Jalī : La prière est annulée car le mot est invalidé.',
          'Ce n\'est pas une erreur du tout.',
          'Une erreur d\'articulation de consonne.'
        ],
        correctAnswer: 'Lahn Khafī : Le sens reste intact (« le ciel »), mais la récitation perd de sa splendeur et de sa perfection.',
        explanationFr: 'Le livre de Drs. Islām Fekry classe explicitement le raccourcissement des prolongations secondaires comme un Lahn Khafī (erreur subtile) : elle ne change pas le sens, n\'est pas un péché, mais doit être évitée pour atteindre l\'excellence.',
        ruleId: 'lahn-types'
      },
      {
        id: 'q-c1-5',
        type: 'mcq',
        promptFr: 'Quelle est la méthode mnémotechnique donnée dans le livre pour se souvenir des 6236 versets du Coran ?',
        verseArabic: '٦٢٣٦',
        options: [
          '23 ans de mission prophétique, entourés d\'un 6 avant et d\'un 6 après : 6 - 23 - 6',
          'Multiplier le nombre de sourates par 55',
          'Ajouter le nombre de pages du Mushaf',
          'Compter 100 versets par jour pendant deux mois'
        ],
        correctAnswer: '23 ans de mission prophétique, entourés d\'un 6 avant et d\'un 6 après : 6 - 23 - 6',
        explanationFr: 'Astuce mnémotechnique du chapitre 1 : la Da\'wah prophétique a duré 23 ans. Placez un 6 devant et un 6 derrière : vous obtenez instantanément 6236 versets !',
        ruleId: 'acceptance-conditions'
      }
    ]
  },
  // ==========================================
  // CHAPITRE 2 : SYMBOLES CORANIQUES & PONCTUATION
  // ==========================================
  {
    id: 'chap-2',
    number: 2,
    slug: 'quranic-symbols',
    titleFr: 'Symboles Coraniques & Ponctuation',
    titleAr: 'عَلَامَاتُ المُصْحَفِ وَضَبْطِهِ',
    category: 'beginner',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Maîtriser tous les symboles du Mushaf selon le Rasm ʿUthmānī : les 6 signes d\'arrêt (Waqf Lāzim, Lā, Jīm, Qalā, Salā, la triade ۛ...ۛ, la Saktah), les symboles de prononciation obligatoire (Alif Khanjariyyah, petit Wāw et Yā\', Madd, Soukoûn coranique, zéros d\'annulation et les 7 Alifs).',
    infographicPoints: [
      'Signe (مـ) = Waqf Lāzim (Arrêt obligatoire) : vous DEVEZ vous arrêter car lier dénature le sens théologique.',
      'Signe (لا) = Interdiction d\'arrêter et de terminer la récitation (Waqf Qabīh) : le sens serait tronqué ou contraire au dogme.',
      'Triade (ۛ ... ۛ) = Al-Waqf Al-Mutaʿāniq : arrêt permis à l\'un des deux, mais strictement INTERDIT de s\'arrêter aux deux à la fois !',
      'Saktah (س) = Pause brève de 2 temps sans reprendre sa respiration, empêchant une fausse liaison sémantique.',
      'Cercle parfait (ْ) = Lettre 100% muette toujours (ex: يَفۡرَحُواْ). Ovale allongé (۠) = Les 7 Alifs : prononcé à l\'arrêt, annulé en continu.',
      'Alif Khanjariyyah (ٰ), petit Wāw (ۥ) et petit Yā\' (ۦ) = Lettres obligatoires à prononcer transmises par voie orale.'
    ],
    subrules: [
      {
        id: 'waqf-symbols',
        nameFr: '1. Les Signes d\'Arrêt & de Respiration (عَلَامَاتُ الوَقْفِ)',
        nameAr: 'عَلَامَاتُ الوَقْفِ فِي المُصْحَفِ',
        mnemonic: 'مـ (Arrêt Obligatoire) | لا (Interdit d\'arrêter) | ج (Permis) | قلى (Arrêt Préférable) | صلى (Liaison Préférable) | ۛ...ۛ (Arrêt d\'Étreinte)',
        letters: ['مـ', 'لا', 'ج', 'قلى', 'صلى', 'ۛ'],
        definitionFr: 'Symboles placés au-dessus des mots pour indiquer où il est permis, recommandé ou obligatoire de s\'arrêter pour respirer, et où il est strictement interdit de couper la lecture sous peine de dénaturer le sens divin.',
        mechanismFr: 'L\'arrêt (Waqf) consiste à couper le son à la fin d\'un mot avec l\'intention de reprendre sa respiration. Ne terminez JAMAIS votre récitation et n\'allez jamais au Rukūʿ sur un mot marqué par (لا).',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c2-1',
            arabicText: 'فَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ إِنَّا نَعۡلَمُ مَا يُسِرُّونَ وَمَا يُعۡلِنُونَ',
            surahAyahRef: '36:76',
            surahNameFr: 'Yā-Sīn',
            highlightSegment: 'قَوۡلُهُمۡۘ',
            highlightLetter: 'مـ (Waqf Lāzim)',
            ruleApplied: 'Waqf Lāzim (Arrêt Obligatoire)',
            ruleTag: 'izhar',
            explanationFr: 'Si vous liez sans vous arrêter, vous faites croire que la phrase « Certes Nous savons ce qu\'ils cachent » fait partie des propos des mécréants, ce qui constitue une altération grave du sens. L\'arrêt est donc obligatoire.',
            transliteration: 'Fa lā yahzunka qawluhum. Innā na\'lamu mā yusirrūna wa mā yu\'linūn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/036076.mp3'
          },
          {
            id: 'ex-c2-2',
            arabicText: 'فَوَيۡلٞ لِّلۡمُصَلِّينَ ٤ ٱلَّذِينَ هُمۡ عَن صَلَاتِهِمۡ سَاهُونَ ٥',
            surahAyahRef: '107:4-5',
            surahNameFr: 'Al-Mā\'ūn',
            highlightSegment: 'لِّلۡمُصَلِّينَ',
            highlightLetter: 'لا (Lā Taqif)',
            ruleApplied: 'Interdiction de terminer la récitation (Lā)',
            ruleTag: 'heavy',
            explanationFr: 'S\'arrêter et clore la récitation sur « Malheur aux prieurs » sans lire la suite déforme totalement le message divin. Il est impératif de poursuivre jusqu\'à la fin du verset 5.',
            transliteration: 'Fa waylul-lil-musallīn. Alladhīna hum \'an salātihim sāhūn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/107004.mp3'
          },
          {
            id: 'ex-c2-3',
            arabicText: 'ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ',
            surahAyahRef: '2:2',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'لَا رَيۡبَۛ فِيهِۛ',
            highlightLetter: 'ۛ ... ۛ (Triade)',
            ruleApplied: 'Al-Waqf Al-Muta\'āniq (Arrêt d\'Étreinte)',
            ruleTag: 'madd',
            explanationFr: 'Vous pouvez vous arrêter sur « Lā rayb » OU sur « Fīh », mais il est formellement interdit de s\'arrêter aux deux à la fois. Chaque option révèle une nuance sémantique sublime.',
            transliteration: 'Dhālika-l-kitābu lā rayba fīhi hudal-lil-muttaqīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002002.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'S\'arrêter sur le premier signe (ۛ) puis s\'arrêter à nouveau sur le deuxième signe (ۛ).',
            correctionFr: 'La règle est stricte : choisissez l\'un des deux arrêts et liez obligatoirement l\'autre.'
          },
          {
            trapFr: 'Aller au Rukūʿ ou terminer sa prière sur un mot marqué par le signe (لا).',
            correctionFr: 'Le signe (لا) interdit de clore la récitation à cet endroit car la phrase reste suspendue.'
          }
        ]
      },
      {
        id: 'saktah-pause',
        nameFr: '2. La Pause Momentanée sans Souffle (As-Saktah / السَّكْتَة)',
        nameAr: 'السَّكْتَاتُ اللَّطِيفَةُ فِي القُرْآنِ',
        mnemonic: 'س = Silence de 2 temps SANS reprendre de souffle',
        letters: ['س'],
        definitionFr: 'Une brève interruption de la voix pendant environ 2 temps, sans respirer, avant de continuer aussitôt la lecture. Il y a 4 Saktahs obligatoires selon Hafs.',
        mechanismFr: 'Bloquer le son au niveau des cordes vocales pendant deux battements sans ouvrir les poumons ni inspirer d\'air.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c2-4',
            arabicText: 'وَلَمۡ يَجۡعَل لَّهُۥ عِوَجَاۜ ١ قَيِّمٗا لِّيُنذِرَ بَأۡسٗا شَدِيدٗا',
            surahAyahRef: '18:1-2',
            surahNameFr: 'Al-Kahf',
            highlightSegment: 'عِوَجَاۜ',
            highlightLetter: 'س (Saktah)',
            ruleApplied: 'Saktah Latīfah obligatoire',
            ruleTag: 'silent',
            explanationFr: 'Si on liait « \'Iwajā » avec « Qayyimā » sans pause, on pourrait penser que le Livre est à la fois « déviant » et « droit » ! La Saktah sépare les deux qualificatifs sans couper la récitation.',
            transliteration: 'Wa lam yaj\'al lahū \'iwajā. Qayyimāl-liyundhira ba\'san shadīdā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/018001.mp3'
          },
          {
            id: 'ex-c2-5',
            arabicText: 'قَالُواْ يَٰوَيۡلَنَا مَنۢ بَعَثَنَا مِن مَّرۡقَدِنَاۜۗ هَٰذَا مَا وَعَدَ ٱلرَّحۡمَٰنُ',
            surahAyahRef: '36:52',
            surahNameFr: 'Yā-Sīn',
            highlightSegment: 'مَّرۡقَدِنَاۜۗ',
            highlightLetter: 'س (Saktah)',
            ruleApplied: 'Saktah entre les paroles des mécréants et la réponse des anges',
            ruleTag: 'silent',
            explanationFr: 'La pause silencieuse de 2 temps sur « marqadinā » sépare la plainte des ressuscités de l\'attestation de vérité des anges : « Voici ce que le Tout Miséricordieux avait promis ».',
            transliteration: 'Man ba\'athanā mim-marqadinā... hādhā mā wa\'ada-r-Rahmān',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/036052.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Reprendre son souffle pendant la Saktah.',
            correctionFr: 'Si vous respirez, cela devient un arrêt ordinaire (Waqf) et non une Saktah. Gardez le souffle suspendu.'
          }
        ]
      },
      {
        id: 'vowel-letters-symbols',
        nameFr: '3. Les Lettres Vocales Rajoutées (Alif Khanjariyyah, Wāw & Yā\')',
        nameAr: 'الأَلِفُ الخِنْجَرِيَّةُ وَصِلَةُ الوَاوِ وَاليَاءِ الصَّغِيرَتَيْنِ',
        mnemonic: 'ٰ (Alif Khanjariyyah) | ۥ (Petit Wāw de Silah) | ۦ (Petit Yā\' de Silah)',
        letters: ['ٰ', 'ۥ', 'ۦ'],
        definitionFr: 'Caractères miniatures qui indiquent des lettres longues bien réelles que l\'on doit obligatoirement prononcer en continu. Ne jamais les sauter !',
        mechanismFr: 'Prolonger la voyelle de 2 temps naturels en continu. Si l\'on s\'arrête sur le mot précédent, le petit Wāw ou Yā\' disparaît car la liaison est rompue.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c2-6',
            arabicText: 'فَلَمَّآ أَضَآءَتۡ مَا حَوۡلَهُۥ ذَهَبَ ٱللَّهُ بِنُورِهِمۡ',
            surahAyahRef: '2:17',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'حَوۡلَهُۥ',
            highlightLetter: 'ۥ (Petit Wāw)',
            ruleApplied: 'Silah Sughrā (Wāw prononcé en continu)',
            ruleTag: 'ghunnah',
            explanationFr: 'En lisant en continu, le petit Wāw se prononce comme une voyelle longue de 2 temps : « Hawlahū dhahaba ». Si vous vous arrêtez sur le mot, dites simplement « Hawlah » sans le Wāw.',
            transliteration: 'Mā hawlahū dhahaba-llāhu bi-nūrihim',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002017.mp3'
          },
          {
            id: 'ex-c2-7',
            arabicText: 'لِإِيلَٰفِ قُرَيۡشٍ ١ إِۦلَٰفِهِمۡ رِحۡلَةَ ٱلشِّتَآءِ وَٱلصَّيۡفِ ٢',
            surahAyahRef: '106:1-2',
            surahNameFr: 'Quraysh',
            highlightSegment: 'إِۦلَٰفِهِمۡ',
            highlightLetter: 'ۦ (Petit Yā\')',
            ruleApplied: 'Petit Yā\' inversé prononcé',
            ruleTag: 'madd',
            explanationFr: 'Le petit Yā\' inversé sous la Hamzah indique une voyelle longue "ī" : on prononce « Īlāfihim » avec 2 temps de Madd.',
            transliteration: 'Īlāfihim rihlata-sh-shitā\'i wa-s-sayf',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/106001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Oublier d\'allonger la voyelle sur l\'Alif Khanjariyyah (ٰ) comme dans « Dhālika » ou « Al-Kitāb ».',
            correctionFr: 'Cet Alif miniature a exactement la même valeur de prolongation qu\'un Alif ordinaire écrit en grand.'
          }
        ]
      },
      {
        id: 'silent-letters-sifr',
        nameFr: '4. Les Lettres Muettes & Les Deux Zéros (ْ vs ۠)',
        nameAr: 'الصِّفْرُ المُسْتَدِيرُ وَالصِّفْرُ المُسْتَطِيلُ (الأَلِفَاتُ السَّبْعُ)',
        mnemonic: 'Rond parfait (ْ) = 100% muet toujours | Ovale allongé (۠) = Prononcé à l\'arrêt, muet en continu',
        letters: ['ْ', '۠'],
        definitionFr: 'Distinction graphique fondamentale du Rasm ʿUthmānī : le cercle rond (As-Sifr Al-Mustadīr) annule la lettre totalement. L\'ovale allongé (As-Sifr Al-Mustatīl) signale les 7 Alifs célèbres.',
        mechanismFr: 'Devant le cercle rond (ْ), ignorez complètement la lettre. Devant l\'ovale (۠), prononcez une voyelle courte en liaison, mais un Alif long complet de 2 temps si vous vous arrêtez.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c2-8',
            arabicText: 'قَالَ أَنَا۠ خَيۡرٞ مِّنۡهُ خَلَقۡتَنِي مِن نَّارٖ',
            surahAyahRef: '7:12',
            surahNameFr: 'Al-A\'rāf',
            highlightSegment: 'أَنَا۠',
            highlightLetter: '۠ (As-Sifr Al-Mustatīl)',
            ruleApplied: 'Les 7 Alifs (Al-Alifāt As-Sab\')',
            ruleTag: 'silent',
            explanationFr: 'En continu, on lit « Ana khayrun » (sans allonger le "na"). Mais si l\'on s\'arrête sur le mot, l\'Alif reprend vie et l\'on prononce « Anā » avec 2 temps complets.',
            transliteration: 'Qāla ana khayrum-minhu khalaqtanī min nār',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/007012.mp3'
          },
          {
            id: 'ex-c2-9',
            arabicText: 'وَإِن تُصِبۡكُمۡ سَيِّئَةٞ يَفۡرَحُواْ بِهَا',
            surahAyahRef: '3:120',
            surahNameFr: 'Āl \'Imrān',
            highlightSegment: 'يَفۡرَحُواْ',
            highlightLetter: 'ْ (Cercle Rond d\'Annulation)',
            ruleApplied: 'Lettre 100% muette (As-Sifr Al-Mustadīr)',
            ruleTag: 'silent',
            explanationFr: 'Le cercle rond sur l\'Alif final de « Yafrahū » indique qu\'il ne se prononce jamais, ni en continu, ni à l\'arrêt. On lit uniquement « Yafrahū ».',
            transliteration: 'Wa in tusibkum sayyi\'atun yafrahū bihā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/003120.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Confondre le Soukoûn coranique (ﹾ tête de Khā\') avec le cercle rond (ْ zéro d\'annulation).',
            correctionFr: 'Dans le Coran, le Soukoûn ressemble à un demi-cercle ouvert. Le zéro fermé parfait signifie toujours que la lettre est muette !'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'exo-c2-1',
        title: 'Maîtrise de l\'arrêt d\'étreinte : Sūrah Al-Baqarah (2:2)',
        verseArabic: 'ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ',
        surahAyahRef: '2:2',
        targetSegment: 'لَا رَيۡبَۛ فِيهِۛ',
        promptFr: 'Peut-on s\'arrêter à la fois sur « Lā rayb » ET sur « Fīh » lors de la même récitation ? Expliquez la règle de la triade.',
        hintFr: 'Rappelez-vous du principe d\'exclusivité de la double triade de trois points.',
        solutionFr: 'Non, interdiction absolue de s\'arrêter aux deux emplacements !',
        breakdownSteps: [
          'Le signe (ۛ ... ۛ) est appelé Al-Waqf Al-Muta\'āniq (arrêt d\'étreinte).',
          'Option 1 : Si vous vous arrêtez sur « Lā rayba ۛ », vous devez obligatoirement enchaîner « fīhi hudal-lil-muttaqīn » sans pause.',
          'Option 2 : Si vous liez « Dhālika-l-kitābu lā rayba », vous pouvez alors vous arrêter sur « fīh ۛ », puis reprendre « hudal-lil-muttaqīn ».',
          'Conclusion : Cumuler les deux arrêts brise la grammaire coranique et crée un Waqf Qabīh.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/002002.mp3'
      },
      {
        id: 'exo-c2-2',
        title: 'Exécution de la Saktah : Sūrah Al-Kahf (18:1-2)',
        verseArabic: 'وَلَمۡ يَجۡعَل لَّهُۥ عِوَجَاۜ ١ قَيِّمٗا لِّيُنذِرَ بَأۡسٗا شَدِيدٗا',
        surahAyahRef: '18:1-2',
        targetSegment: 'عِوَجَاۜ ١ قَيِّمٗا',
        promptFr: 'Comment le lecteur doit-il exécuter la Saktah (س) entre les deux premiers versets de la sourate Al-Kahf ?',
        hintFr: 'Faites attention à la différence entre un Waqf (avec respiration) et une Saktah (sans respiration).',
        solutionFr: 'Interruption brève du son pendant 2 temps en bloquant le souffle dans les poumons',
        breakdownSteps: [
          'À la fin du mot « \'Iwajā », arrêtez la vibration des cordes vocales pendant environ 2 temps.',
          'Ne prenez surtout AUCUNE inspiration d\'air pendant ce silence.',
          'Reprenez immédiatement au mot « Qayyimā » avec le souffle restant.',
          'Cette pause empêche de relier le qualificatif négatif (« déviance ») au qualificatif positif (« parfaitement droit »).'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/018001.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c2-1',
        type: 'mcq',
        promptFr: 'Que devez-vous obligatoirement faire lorsque vous rencontrez le symbole (مـ) au-dessus d\'un mot dans le Coran ?',
        verseArabic: 'فَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ إِنَّا نَعۡلَمُ مَا يُسِرُّونَ وَمَا يُعۡلِنُونَ',
        targetWord: 'قَوۡلُهُمۡۘ',
        surahAyahRef: '36:76',
        options: [
          'S\'arrêter obligatoirement (Waqf Lāzim) car lier dénaturerait gravement le sens du verset',
          'Faire une Ghunnah de 2 temps sur la lettre suivante',
          'Continuer sans respirer',
          'Faire une prosternation (Sujūd)'
        ],
        correctAnswer: 'S\'arrêter obligatoirement (Waqf Lāzim) car lier dénaturerait gravement le sens du verset',
        explanationFr: 'Le symbole (مـ) horizontal indique un Waqf Lāzim (arrêt impératif). Dans Yā-Sīn 36:76, continuer sans arrêt ferait faussement attribuer la parole d\'Allah aux mécréants.',
        ruleId: 'waqf-symbols'
      },
      {
        id: 'q-c2-2',
        type: 'mcq',
        promptFr: 'Comment devez-vous vous comporter devant la double triade de points (ۛ ... ۛ) appelée Al-Waqf Al-Muta\'āniq ?',
        verseArabic: 'ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ',
        targetWord: 'لَا رَيۡبَۛ فِيهِۛ',
        surahAyahRef: '2:2',
        options: [
          'Vous devez vous arrêter à l\'un des deux emplacements, mais jamais aux deux à la fois',
          'Vous devez obligatoirement vous arrêter aux deux endroits',
          'Vous ne devez vous arrêter à aucun des deux',
          'Vous devez prolonger le mot de 6 temps'
        ],
        correctAnswer: 'Vous devez vous arrêter à l\'un des deux emplacements, mais jamais aux deux à la fois',
        explanationFr: 'L\'arrêt d\'étreinte (Al-Waqf Al-Muta\'āniq) est exclusif : si vous vous arrêtez au premier, vous devez continuer au second (ou vice versa). S\'arrêter aux deux est formellement interdit.',
        ruleId: 'waqf-symbols'
      },
      {
        id: 'q-c2-3',
        type: 'mcq',
        promptFr: 'Quelle est la différence fondamentale entre le cercle rond parfait (ْ) et l\'ovale vertical allongé (۠) au-dessus d\'une lettre ?',
        verseArabic: 'قَالَ أَنَا۠ خَيۡرٞ مِّنۡهُ | يَفۡرَحُواْ',
        targetWord: 'أَنَا۠',
        surahAyahRef: '7:12',
        options: [
          'Le cercle rond (ْ) annule la lettre en permanence, tandis que l\'ovale (۠) se prononce à l\'arrêt mais s\'annule en continu',
          'L\'ovale est une lettre de Qalqalah',
          'Le cercle rond impose un arrêt de 2 temps',
          'Il n\'y a aucune différence, c\'est juste une variante calligraphique'
        ],
        correctAnswer: 'Le cercle rond (ْ) annule la lettre en permanence, tandis que l\'ovale (۠) se prononce à l\'arrêt mais s\'annule en continu',
        explanationFr: 'Le cercle rond (ْ) indique une lettre muette en continu et à l\'arrêt. L\'ovale allongé (۠) signale les 7 Alifs : on prononce "Anā" (2 temps) à l\'arrêt, mais "Ana khayr" (sans Alif) en continu !',
        ruleId: 'silent-letters-sifr'
      },
      {
        id: 'q-c2-4',
        type: 'mcq',
        promptFr: 'Qu\'indique le symbole (س) au-dessus d\'un mot coranique (comme dans la sourate Al-Kahf) ?',
        verseArabic: 'وَلَمۡ يَجۡعَل لَّهُۥ عِوَجَاۜ ١ قَيِّمٗا',
        targetWord: 'عِوَجَاۜ',
        surahAyahRef: '18:1-2',
        options: [
          'Une Saktah : interruption brève de la voix de 2 temps sans reprendre sa respiration',
          'Prononcer la lettre Sīn avec un fort sifflement',
          'Une obligation de se prosterner',
          'Une prolongation de 6 temps'
        ],
        correctAnswer: 'Une Saktah : interruption brève de la voix de 2 temps sans reprendre sa respiration',
        explanationFr: 'La Saktah (س) est un arrêt silencieux d\'environ deux temps sans respirer, évitant une liaison qui créerait une confusion de sens théologique.',
        ruleId: 'saktah-pause'
      },
      {
        id: 'q-c2-5',
        type: 'mcq',
        promptFr: 'Que signifie le symbole (لا) placé au-dessus ou à la fin d\'un mot coranique ?',
        verseArabic: 'فَوَيۡلٞ لِّلۡمُصَلِّينَ ٤',
        targetWord: 'لِّلۡمُصَلِّينَ',
        surahAyahRef: '107:4',
        options: [
          'Interdiction de couper la récitation ou d\'aller au Rukūʿ à cet endroit car le sens est incomplet',
          'Obligation absolue de s\'arrêter pour respirer',
          'Répéter le mot trois fois',
          'Ne pas prononcer la lettre suivante'
        ],
        correctAnswer: 'Interdiction de couper la récitation ou d\'aller au Rukūʿ à cet endroit car le sens est incomplet',
        explanationFr: 'Le symbole (لا) signifie "ne coupez pas la lecture ici". Si vous manquez de souffle, vous pouvez faire une courte pause mais vous devez obligatoirement enchaîner pour compléter le sens.',
        ruleId: 'waqf-symbols'
      }
    ]
  },
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
