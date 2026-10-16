import { Chapter } from '../types/tajweed';

export const ALL_BOOK_CHAPTERS: { number: number; slug: string; titleFr: string; titleAr: string; category: 'beginner' | 'intermediate' | 'advanced'; isPilot: boolean }[] = [
  { number: 1, slug: 'basic-concepts', titleFr: 'Concepts Fondamentaux & Le Lahn (Erreurs)', titleAr: 'المَفَاهِيمُ الأَسَاسِيَّةُ وَأَنْوَاعُ اللَّحْنِ', category: 'beginner', isPilot: true },
  { number: 2, slug: 'quranic-symbols', titleFr: 'Symboles Coraniques & Ponctuation', titleAr: 'علامات المصحف وضبطه', category: 'beginner', isPilot: true },
  { number: 3, slug: 'stopping-resuming', titleFr: 'Arrêt & Reprise (Waqf & Ibtidā\')', titleAr: 'الوقف والابتداء', category: 'intermediate', isPilot: true },
  { number: 4, slug: 'madd-1', titleFr: 'Les Prolongations I (Madd Naturel & Dérivés)', titleAr: 'المد الأصلي وملحقاته', category: 'beginner', isPilot: true },
  { number: 5, slug: 'madd-2', titleFr: 'Les Prolongations II (Madd Secondaire / Far\'ī)', titleAr: 'المد الفرعي وأقسامه', category: 'intermediate', isPilot: true },
  { number: 6, slug: 'hamzah', titleFr: 'Les Hamzahs (Hamzat Al-Wasl & Al-Qat\')', titleAr: 'همزتا الوصل والقطع', category: 'intermediate', isPilot: true },
  { number: 7, slug: 'lam-sakinah', titleFr: 'Les Règles de la Lām Sākinah', titleAr: 'أحكام اللام الساكنة', category: 'intermediate', isPilot: true },
  { number: 8, slug: 'nun-sakinah', titleFr: 'Nūn Sākinah & Tanwīn (4 Règles)', titleAr: 'أحكام النون الساكنة والتنوين', category: 'intermediate', isPilot: true },
  { number: 9, slug: 'mim-sakinah', titleFr: 'Les Règles de la Mīm Sākinah', titleAr: 'أحكام الميم الساكنة', category: 'intermediate', isPilot: true },
  { number: 10, slug: 'qalqalah', titleFr: 'La Qalqalah & Ses Degrés de Rebond', titleAr: 'أحكام القلقلة ومراتبها', category: 'intermediate', isPilot: true },
  { number: 11, slug: 'assimilation', titleFr: 'L\'Assimilation (Idghām Mutamāthilayn, etc.)', titleAr: 'إدغام المتماثلين والمتقاربين والمتجانسين', category: 'advanced', isPilot: true },
  { number: 12, slug: 'heavy-light', titleFr: 'Emphase & Amincissement (Tafkhīm & Tarqīq)', titleAr: 'التفخيم والترقيق', category: 'advanced', isPilot: true },
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
  // CHAPITRE 3 : ARRÊT & REPRISE (WAQF & IBTIDĀ')
  // ==========================================
  {
    id: 'chap-3',
    number: 3,
    slug: 'stopping-resuming',
    titleFr: 'Arrêt & Reprise (Waqf & Ibtidā\')',
    titleAr: 'عِلْمُ الوَقْفِ وَالابْتِدَاءِ فِي التِّلَاوَةِ',
    category: 'intermediate',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Comprendre et maîtriser les 4 actions du lecteur (Al-Ibtidā\', Al-Waqf, Al-Isti\'nāf, Al-Qat\'), la règle fondamentale d\'arrêt sur Soukoûn, les deux exceptions majeures (Madd \'Iwad et métamorphose de la Tā\' Marbūtah), la technique universelle du « Stop & Repeat » et l\'évitement absolu du Waqf Qabīh sur les citations de mécréance.',
    infographicPoints: [
      'Les 4 actions du lecteur : 1. Al-Ibtidā\' (Commencer la lecture) 2. Al-Waqf (Interrompre sa voix avec respiration pour continuer) 3. Al-Isti\'nāf (Reprendre sa lecture) 4. Al-Qat\' (Clore définitivement la récitation).',
      'Règle d\'or de l\'arrêt : En arabe, on ne s\'arrête JAMAIS sur une lettre vocalisée ! Fathah, Dammah, Kasrah, Tanwīn Damm et Tanwīn Kasr deviennent TOUS un Soukoûn pur (ex : Al-\'Ālamīn, Nasta\'īn).',
      'Exception 1 — Madd \'Iwad (مد العوض) : Le Tanwīn Fath (ـً / ـٗا) se transmute TOUJOURS en un Alif de 2 temps à l\'arrêt (ex : Qarārā, Binā\'ā), même lorsqu\'aucun Alif n\'est écrit après la Hamzah !',
      'Exception 2 — Tā\' Marbūtah (ة) : Elle se métamorphose TOUJOURS en Hā\' avec Soukoûn (هْ) à l\'arrêt, MÊME si elle porte un Tanwīn Fath (ex : Rahmah, As-Salāh) ! Jamais de Madd \'Iwad sur la Tā\' Marbūtah.',
      'Reprise sécurisée (Stop & Repeat) : Si le souffle vous manque en plein milieu d\'un verset, reculez systématiquement de 2 ou 3 mots pour reprendre avec une phrase grammaticalement et théologiquement complète.',
      'Le piège fatal des citations : Ne reprenez JAMAIS sur une parole de négateurs isolée comme « Inna Allāha faqīr » (Āl \'Imrān 3:181) ! Reculez obligatoirement sur « Qālū » ou « Qawla » pour attribuer le propos à ses auteurs.'
    ],
    subrules: [
      {
        id: 'stopping-sukun',
        nameFr: '1. Règle Générale : L\'Arrêt sur Soukoûn (السكون عند الوقف)',
        nameAr: 'تَحْوِيلُ الحَرَكَاتِ إِلَى سُكُونٍ',
        mnemonic: 'Voyelle courte & Tanwīn Damm/Kasr ➔ Soukoûn Pur',
        letters: [],
        definitionFr: 'La règle universelle de la langue arabe et du Coran : on ne commence jamais par une lettre portant un Soukoûn, et on ne s\'arrête JAMAIS sur une lettre vocalisée (لا يبتدأ بساكن ولا يوقف على متحرك).',
        mechanismFr: 'Sur la consonne finale, immobilisez les cordes vocales et relâchez l\'appareil phonatoire sans émettre la moindre voyelle. Les Tanwīns Damm (ـٌ) et Kasr (ـٍ) perdent totalement leur son "N" pour devenir un Soukoûn pur.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c3-1',
            arabicText: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
            surahAyahRef: '1:2',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'ٱلۡعَٰلَمِينَ',
            highlightLetter: 'نَ ➔ نْ',
            ruleApplied: 'Fathah devient Soukoûn pur',
            ruleTag: 'izhar',
            explanationFr: 'En continuant : « Al-\'Ālamīna Ar-Rahmān ». À l\'arrêt sur le verset : la Fathah disparaît et l\'on prononce « Al-\'Ālamīn » avec un Soukoûn sur le Nūn.',
            transliteration: 'Al-hamdu lillāhi rabbi-l-\'ālamīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001002.mp3'
          },
          {
            id: 'ex-c3-2',
            arabicText: 'إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ',
            surahAyahRef: '1:5',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'نَسۡتَعِينُ',
            highlightLetter: 'نُ ➔ نْ',
            ruleApplied: 'Dammah devient Soukoûn pur',
            ruleTag: 'izhar',
            explanationFr: 'La Dammah finale sur le Nūn s\'efface à l\'arrêt pour donner « Nasta\'īn » avec un arrêt franc sur le Soukoûn.',
            transliteration: 'Iyyāka na\'budu wa iyyāka nasta\'īn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001005.mp3'
          },
          {
            id: 'ex-c3-3',
            arabicText: 'وَٱللَّهُ بِمَا تَعۡمَلُونَ خَبِيرٞ',
            surahAyahRef: '3:153',
            surahNameFr: 'Āl \'Imrān',
            highlightSegment: 'خَبِيرٞ',
            highlightLetter: 'ـٌ ➔ ْ',
            ruleApplied: 'Tanwīn Damm devient Soukoûn pur',
            ruleTag: 'izhar',
            explanationFr: 'Le Tanwīn Damm s\'annule complètement à l\'arrêt : on prononce « Khabīr » avec Râ\' amincie (Tarqīq), SANS aucun Madd \'Iwad.',
            transliteration: 'Wallāhu bimā ta\'malūna khabīr',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/003153.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Laisser entendre un résidu de voyelle à la fin du mot lors de l\'arrêt.',
            correctionFr: 'Bloquez l\'air net sur la dernière consonne : l\'arrêt en arabe requiert un Soukoûn parfait et franc.'
          },
          {
            trapFr: 'Croire que le Tanwīn Damm (ـٌ) ou Kasr (ـٍ) se transforme en prolongation comme le Tanwīn Fath.',
            correctionFr: 'Non ! Seul le Tanwīn Fath donne une prolongation. Le Tanwīn Damm et le Tanwīn Kasr s\'évanouissent complètement en Soukoûn.'
          }
        ]
      },
      {
        id: 'madd-iwad',
        nameFr: '2. Exception 1 : Madd \'Iwad sur Tanwīn Fath (مد العوض)',
        nameAr: 'مَدُّ العِوَضِ عَنِ التَّنْوِينِ المَفْتُوحِ',
        mnemonic: 'Tanwīn Fath (ـً / ـٗا) ➔ Alif de 2 temps à l\'arrêt',
        letters: ['ـً', 'ـٗا'],
        definitionFr: 'Le Madd \'Iwad (prolongation de compensation) : lorsque l\'on s\'arrête sur un mot terminé par un Tanwīn Fath, le son de la nunation s\'efface et est remplacé par une voyelle longue Alif de 2 temps.',
        mechanismFr: 'Ouvrez délicatement la bouche et prolongez le son [ā] sur 2 temps réguliers. Même s\'il n\'y a pas d\'Alif tracé après une Hamzah (ex: بِنَاءً), la phonétique exige un Alif de 2 temps.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c3-4',
            arabicText: 'ٱللَّهُ ٱلَّذِى جَعَلَ لَكُمُ ٱلۡأَرۡضَ قَرَارٗا',
            surahAyahRef: '40:64',
            surahNameFr: 'Ghāfir',
            highlightSegment: 'قَرَارٗا',
            highlightLetter: 'ـٗا ➔ ا',
            ruleApplied: 'Madd \'Iwad classique (2 temps)',
            ruleTag: 'madd',
            explanationFr: 'En continu : « Qarāraw-was-Samā\' » (Idghām avec Wāw). À l\'arrêt : on prononce « Qarārā » avec une prolongation exacte de 2 temps.',
            transliteration: 'Ja\'ala lakumu-l-arda qarārā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/040064.mp3'
          },
          {
            id: 'ex-c3-5',
            arabicText: 'وَٱلسَّمَآءَ بِنَآءٗ',
            surahAyahRef: '40:64',
            surahNameFr: 'Ghāfir',
            highlightSegment: 'بِنَآءٗ',
            highlightLetter: 'ءً ➔ ءَا',
            ruleApplied: 'Madd \'Iwad sans Alif écrit (2 temps)',
            ruleTag: 'madd',
            explanationFr: 'En orthographe arabe, on n\'écrit pas d\'Alif après une Hamzah précédée d\'un Alif. Mais à l\'arrêt, on prononce obligatoirement « Binā\'ā » avec 2 temps de Madd !',
            transliteration: 'Was-samā\'a binā\'ā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/040064.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Supprimer la voyelle et prononcer un Soukoûn sec sur le Tanwīn Fath (ex: dire "Qarār" au lieu de "Qarārā").',
            correctionFr: 'Le Tanwīn Fath exige impérativement une prolongation Alif de 2 temps à l\'arrêt.'
          },
          {
            trapFr: 'Oublier d\'allonger la Hamzah dans « Binā\'an » sous prétexte qu\'aucun Alif n\'est calligraphié.',
            correctionFr: 'La règle s\'applique à l\'oreille, pas aux yeux : « Binā\'ā » s\'allonge de 2 temps comme n\'importe quel Tanwīn Fath.'
          }
        ]
      },
      {
        id: 'ta-marbutah',
        nameFr: '3. Exception 2 : Métamorphose de la Tā\' Marbūtah (التاء المربوطة)',
        nameAr: 'انْقِلابُ التَّاءِ المَرْبُوطَةِ هَاءً سَاكِنَةً',
        mnemonic: 'Tā\' Marbūtah (ة / ـة) ➔ Hā\' Soukoûn (هْ) | JAMAIS de Madd \'Iwad !',
        letters: ['ة', 'ـة'],
        definitionFr: 'Toute Tā\' Marbūtah (ة / ـة) se métamorphose obligatoirement en une lettre Hā\' avec Soukoûn (هْ) lors d\'un arrêt, quelle que soit sa voyelle (Fathah, Dammah, Kasrah ou Tanwīn Fath).',
        mechanismFr: 'Relâchez le bout de la langue et expirez un souffle doux depuis le bas de la gorge (Makhraj du Hā\') pour faire entendre la consonne Hā\' sans forcer.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c3-6',
            arabicText: 'يَٰٓأَيُّهَا ٱلنَّاسُ قَدۡ جَآءَتۡكُم مَّوۡعِظَةٞ مِّن رَّبِّكُمۡ وَشِفَآءٞ لِّمَا فِى ٱلصُّدُورِ وَهُدٗى وَرَحۡمَةٗ لِّلۡمُؤۡمِنِينَ',
            surahAyahRef: '10:57',
            surahNameFr: 'Yūnus',
            highlightSegment: 'وَرَحۡمَةٗ',
            highlightLetter: 'ةٗ ➔ هْ',
            ruleApplied: 'Tā\' Marbūtah devient Hā\' Sākinah',
            ruleTag: 'silent',
            explanationFr: 'Attention piège ! Même avec un Tanwīn Fath (ـَةٗ), la Tā\' Marbūtah NE PREND PAS de Madd \'Iwad ! Elle devient « Rahmah » avec un Hā\' doux final.',
            transliteration: 'Wa hudan wa rahmah',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/010057.mp3'
          },
          {
            id: 'ex-c3-7',
            arabicText: 'وَأَقِيمُواْ ٱلصَّلَوٰةَ وَءَاتُواْ ٱلزَّكَوٰةَ',
            surahAyahRef: '2:43',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'ٱلصَّلَوٰةَ',
            highlightLetter: 'ةَ ➔ هْ',
            ruleApplied: 'Tā\' Marbūtah avec Fathah ➔ Hā\' Sākinah',
            ruleTag: 'silent',
            explanationFr: 'En continu : « As-Salāta wa ātū ». À l\'arrêt : « As-Salāh » avec un souffle franc sur le Hā\' final.',
            transliteration: 'Wa aqīmu-s-salāh',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002043.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Appliquer un Madd \'Iwad sur une Tā\' Marbūtah portant Tanwīn Fath (ex: dire "Rahmatā").',
            correctionFr: 'Interdiction absolue ! La Tā\' Marbūtah se transmute TOUJOURS en Hā\' Sākinah (« Rahmah »).'
          },
          {
            trapFr: 'Confondre Tā\' Marbūtah (ة) et Tā\' Maftūhah (ت comme dans جَنَّٰتٍ).',
            correctionFr: 'La Tā\' Maftūhah (ت) reste un Tā\' avec Soukoûn et souffle (Hams) : « Jannāt ». Seule la Tā\' ronde (ة) devient un Hā\'.'
          }
        ]
      },
      {
        id: 'resuming-safety',
        nameFr: '4. Reprise (Al-Isti\'nāf) & Le Piège des Citations',
        nameAr: 'الاسْتِئْنَافُ الحَسَنُ وَتَجَنُّبُ القَبِيحِ',
        mnemonic: 'Souffle court ➔ Reculer de 2-3 mots ("Stop & Repeat") | Jamais de citation isolée',
        letters: [],
        definitionFr: 'L\'Isti\'nāf régit la reprise de la lecture après une pause respiratoire. Si l\'arrêt a eu lieu au milieu d\'une proposition liée, il est indispensable de reculer de quelques mots pour reprendre une unité de sens autonome.',
        mechanismFr: 'Identifiez le verbe ou le sujet principal précédent pour relancer la phrase. Ne repartez jamais d\'une particule subordonnée ou d\'une citation sans son locuteur.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c3-8',
            arabicText: 'لَّقَدۡ سَمِعَ ٱللَّهُ قَوۡلَ ٱلَّذِينَ قَالُوٓاْ إِنَّ ٱللَّهَ فَقِيرٞ وَنَحۡنُ أَغۡنِيَآءُ',
            surahAyahRef: '3:181',
            surahNameFr: 'Āl \'Imrān',
            highlightSegment: 'قَالُوٓاْ إِنَّ ٱللَّهَ فَقِيرٞ',
            highlightLetter: 'Stop & Repeat',
            ruleApplied: 'Reprise sécurisée obligatoire',
            ruleTag: 'izhar',
            explanationFr: 'Si votre souffle s\'interrompt sur « Qālū », vous devez obligatoirement reculer et reprendre depuis « Qawla-lladhīna qālū » ou au moins « Qālū » ! Reprendre par « Inna Allāha faqīr » seul constitue une parole de mécréance.',
            transliteration: 'Qawla-lladhīna qālū inna Allāha faqīr',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/003181.mp3'
          },
          {
            id: 'ex-c3-9',
            arabicText: 'إِلَىٰ صِرَٰطِ ٱلۡعَزِيزِ ٱلۡحَمِيدِ ١ ٱللَّهِ ٱلَّذِى لَهُۥ مَا فِى ٱلسَّمَٰوَٰتِ',
            surahAyahRef: '14:1-2',
            surahNameFr: 'Ibrāhīm',
            highlightSegment: 'ٱللَّهِ',
            highlightLetter: 'Kasrah initiale interdite',
            ruleApplied: 'Liaison Wasl obligatoire',
            ruleTag: 'heavy',
            explanationFr: 'En lecture Hafs, le mot « Allāhi » au verset 2 porte une Kasrah grammaticale liée au mot précédent. Si vous commencez au verset 2, liez-le au verset 1 (« Al-Hamīdi-llāh ») pour ne jamais débuter sur une Kasrah subordonnée isolée.',
            transliteration: 'Al-hamīdi-llāhi-lladhī',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/014001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Reprendre sur le mot qui suit immédiatement l\'endroit où l\'on a manqué d\'air sans regarder le sens.',
            correctionFr: 'Appliquez la règle de précaution : reculez systématiquement de 2 ou 3 mots pour reconstituer un membre de phrase cohérent.'
          },
          {
            trapFr: 'Débuter une récitation sur une parole négative ou blasphématoire rapportée dans le Coran.',
            correctionFr: 'Englobez toujours le verbe d\'énonciation (ex: « Wa qālū... » ou « Qāla... ») pour que l\'affirmation ne vous soit pas attribuée.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'exo-c3-1',
        title: 'Le Piège de la Citation Blasphématoire : Sūrah Āl \'Imrān (3:181)',
        verseArabic: 'لَّقَدۡ سَمِعَ ٱللَّهُ قَوۡلَ ٱلَّذِينَ قَالُوٓاْ إِنَّ ٱللَّهَ فَقِيرٞ وَنَحۡنُ أَغۡنِيَآءُ',
        surahAyahRef: '3:181',
        targetSegment: 'قَالُوٓاْ إِنَّ ٱللَّهَ فَقِيرٞ',
        promptFr: 'Votre souffle s\'épuise sur le mot « قَالُوٓاْ » (Qālū). Comment devez-vous reprendre votre récitation pour éviter un contresens théologique ?',
        hintFr: 'Réfléchissez à qui prononce les paroles « Allah est pauvre ». Est-ce le croyant ou les négateurs ?',
        solutionFr: 'Reculer d\'au moins un mot pour ré-énoncer « Qālū » ou « Qawla-lladhīna qālū »',
        breakdownSteps: [
          'Étape 1 : Si vous reprenez directement par « Inna Allāha faqīr » (إِنَّ ٱللَّهَ فَقِيرٞ), vous énoncez la phrase comme si c\'était votre propre affirmation, ce qui est une parole sacrilège inacceptable (Ibtidā\' Qabīh).',
          'Étape 2 : Le mot « Qālū » (ils ont dit) est le marqueur de citation indispensable qui attribue ce propos ignoble à ses véritables auteurs.',
          'Étape 3 : Règle « Stop & Repeat » : reprenez depuis « Qawla-lladhīna qālū » (قَوۡلَ ٱلَّذِينَ قَالُوٓاْ) ou au minimum « Qālū » (قَالُوٓاْ).',
          'Étape 4 : Vous préservez ainsi parfaitement la majesté divine et le sens de la révélation.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/003181.mp3'
      },
      {
        id: 'exo-c3-2',
        title: 'Maîtrise du Madd \'Iwad : Sūrah Ghāfir (40:64)',
        verseArabic: 'ٱللَّهُ ٱلَّذِى جَعَلَ لَكُمُ ٱلۡأَرۡضَ قَرَارٗا وَٱلسَّمَآءَ بِنَآءٗ',
        surahAyahRef: '40:64',
        targetSegment: 'قَرَارٗا وَٱلسَّمَآءَ بِنَآءٗ',
        promptFr: 'Comparez la prononciation du mot « قَرَارٗا » et du mot « بِنَآءٗ » si le lecteur s\'arrête sur chacun d\'eux.',
        hintFr: 'Examinez la présence d\'un Alif écrit sur le premier mot et son absence sur le second après la Hamzah.',
        solutionFr: 'Les deux mots reçoivent exactement le même Madd \'Iwad de 2 temps (« Qarārā » et « Binā\'ā »)',
        breakdownSteps: [
          'Sur « Qarārā » (قَرَارٗا) : Le Tanwīn Fath est calligraphié avec un Alif. À l\'arrêt, le Tanwīn devient un Alif de 2 temps : « Qarārā ».',
          'Sur « Binā\'ā » (بِنَآءٗ) : En calligraphie coranique, on n\'écrit pas d\'Alif après une Hamzah précédée d\'un Alif. Mais phonétiquement, la règle de Tajwīd reste stricte !',
          'À l\'arrêt, « Binā\'an » devient obligatoirement « Binā\'ā » avec une prolongation de 2 temps complets.',
          'En continu (Wasl), le Madd disparaît et vous appliquez la règle de Tanwīn appropriée (Idghām avec Wāw sur « Qarāraw-was-Samā\' »).'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/040064.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c3-1',
        type: 'mcq',
        promptFr: 'Quelle est la règle générale en Tajwīd lorsqu\'on marque un arrêt (Waqf) sur un mot qui se termine par une voyelle courte (Fathah, Dammah ou Kasrah) ?',
        verseArabic: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
        targetWord: 'ٱلۡعَٰلَمِينَ',
        surahAyahRef: '1:2',
        options: [
          'La voyelle s\'efface totalement et la dernière lettre se prononce avec un Soukoûn pur (Al-\'Ālamīn)',
          'La voyelle est allongée de 2 temps',
          'On doit obligatoirement chuchoter la voyelle',
          'On prononce la voyelle normalement comme en lecture continue'
        ],
        correctAnswer: 'La voyelle s\'efface totalement et la dernière lettre se prononce avec un Soukoûn pur (Al-\'Ālamīn)',
        explanationFr: 'Règle absolue : En arabe, on ne s\'arrête jamais sur une voyelle (لا يوقف على متحرك). Fathah, Dammah et Kasrah se transforment immédiatement en Soukoûn pur.',
        ruleId: 'stopping-sukun'
      },
      {
        id: 'q-c3-2',
        type: 'mcq',
        promptFr: 'Comment devez-vous prononcer le mot « قَرَارٗا » (terminé par Tanwīn Fath) si vous marquez un arrêt sur celui-ci ?',
        verseArabic: 'جَعَلَ لَكُمُ ٱلۡأَرۡضَ قَرَارٗا',
        targetWord: 'قَرَارٗا',
        surahAyahRef: '40:64',
        options: [
          '« Qarārā » : Le Tanwīn est remplacé par une prolongation Alif de 2 temps (Madd \'Iwad)',
          '« Qarār » : On met un simple Soukoûn sans aucun allongement',
          '« Qarāran » : On prononce le son Nūn du Tanwīn',
          '« Qarāri » : On transforme en Kasrah'
        ],
        correctAnswer: '« Qarārā » : Le Tanwīn est remplacé par une prolongation Alif de 2 temps (Madd \'Iwad)',
        explanationFr: 'C\'est la règle du Madd \'Iwad (مد العوض) : tout Tanwīn Fath (ـً / ـٗا) se transforme à l\'arrêt en une prolongation Alif de 2 temps complets.',
        ruleId: 'madd-iwad'
      },
      {
        id: 'q-c3-3',
        type: 'mcq',
        promptFr: 'Que devient une Tā\' Marbūtah portant un Tanwīn Fath (comme dans « رَحۡمَةٗ ») lors d\'un arrêt ?',
        verseArabic: 'وَرَحۡمَةٗ لِّلۡمُؤۡمِنِينَ',
        targetWord: 'وَرَحۡمَةٗ',
        surahAyahRef: '10:57',
        options: [
          'Elle se transforme obligatoirement en une lettre Hā\' avec Soukoûn (« Rahmah ») sans aucun Madd',
          'Elle fait un Madd \'Iwad et se prononce « Rahmatā »',
          'Elle se prononce « Rahmat » avec un Tā\' net',
          'Elle se prononce « Rahmahn » avec un Tanwīn'
        ],
        correctAnswer: 'Elle se transforme obligatoirement en une lettre Hā\' avec Soukoûn (« Rahmah ») sans aucun Madd',
        explanationFr: 'C\'est l\'exception capitale : la Tā\' Marbūtah (ة) se transforme TOUJOURS en Hā\' Sākinah (هْ) à l\'arrêt, même si elle porte un Tanwīn Fath. Elle ne prend JAMAIS de Madd \'Iwad !',
        ruleId: 'ta-marbutah'
      },
      {
        id: 'q-c3-4',
        type: 'mcq',
        promptFr: 'Si votre souffle s\'interrompt sur « قَالُوٓاْ » dans Āl \'Imrān 3:181, pourquoi est-il formellement interdit de reprendre directement par « إِنَّ ٱللَّهَ فَقِيرٞ » ?',
        verseArabic: 'لَّقَدۡ سَمِعَ ٱللَّهُ قَوۡلَ ٱلَّذِينَ قَالُوٓاْ إِنَّ ٱللَّهَ فَقِيرٞ',
        targetWord: 'إِنَّ ٱللَّهَ فَقِيرٞ',
        surahAyahRef: '3:181',
        options: [
          'Parce qu\'isoler cette phrase attribue ce blasphème au lecteur ou à la vérité, au lieu de citer les négateurs (Ibtidā\' Qabīh)',
          'Parce que la lettre Hamzah ne peut pas être prononcée en début de souffle',
          'Parce qu\'il faut faire une Ghunnah de 6 temps',
          'Parce que le mot Allāh doit toujours être précédé d\'un verbe'
        ],
        correctAnswer: 'Parce qu\'isoler cette phrase attribue ce blasphème au lecteur ou à la vérité, au lieu de citer les négateurs (Ibtidā\' Qabīh)',
        explanationFr: 'C\'est une faute théologique majeure (Ibtidā\' Qabīh). Le lecteur doit appliquer la technique « Stop & Repeat » et reculer au moins sur « Qālū » ou « Qawla-lladhīna qālū ».',
        ruleId: 'resuming-safety'
      },
      {
        id: 'q-c3-5',
        type: 'mcq',
        promptFr: 'Que devient le Tanwīn Damm (ـٌ) ou Kasr (ـٍ) à l\'arrêt sur un mot comme « عَظِيمٌ » ou « خَبِيرٍ » ?',
        verseArabic: 'وَٱللَّهُ بِمَا تَعۡمَلُونَ خَبِيرٞ',
        targetWord: 'خَبِيرٞ',
        surahAyahRef: '3:153',
        options: [
          'Le Tanwīn disparaît et la lettre prend un simple Soukoûn (« Khabīr »), SANS prolongation \'Iwad',
          'Le Tanwīn se transforme en un Wāw prolongé de 2 temps',
          'Le Tanwīn se transforme en un Yā\' prolongé de 2 temps',
          'Le Tanwīn continue de sonner avec une Ghunnah'
        ],
        correctAnswer: 'Le Tanwīn disparaît et la lettre prend un simple Soukoûn (« Khabīr »), SANS prolongation \'Iwad',
        explanationFr: 'Le Madd \'Iwad est réservé exclusivement au Tanwīn Fath (ـً / ـٗا). Les Tanwīns Damm et Kasr perdent totalement leur nunation et deviennent un Soukoûn pur.',
        ruleId: 'stopping-sukun'
      }
    ]
  },
  // ==========================================
  // CHAPITRE 4 : LES PROLONGATIONS I (MADD NATUREL & DÉRIVÉS)
  // ==========================================
  {
    id: 'chap-4',
    number: 4,
    slug: 'madd-1',
    titleFr: 'Les Prolongations I (Madd Naturel & Dérivés)',
    titleAr: 'المَدُّ الأَصْلِيُّ (الطَّبِيعِيُّ) وَحُرُوفُ اللِّينِ',
    category: 'beginner',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Comprendre la nature sacrée du Madd (seule règle de Tajwīd citée nominativement dans le Hadīth prophétique d\'Anas), maîtriser les 3 lettres de Madd et leur formule maîtresse « Nūhīhā » (نُوحِيهَا), calibrer exactement la durée de 2 Harakāt du Madd Naturel pour éradiquer le Lahn Jalī (altération du sens), distinguer lettres de Madd et lettres de Līn (حَرْفَا اللِّينِ), et maîtriser l\'arrêt d\'urgence sur les mots caméléons comme « Huwa » (هُوَ) et « Hiya » (هِيَ).',
    infographicPoints: [
      'Fondement Prophétique : Le Madd est la seule règle de Tajwīd citée explicitement dans le Sahīh Al-Bukhārī : « Le Prophète ﷺ étirait nettement les mots lors de sa récitation » (Hadīth d\'Anas ibn Mālik).',
      'La Clé Sacrée « Nūhīhā » (نُوحِيهَا) : Réunit les 3 lettres de Madd avec leurs voyelles homogènes obligatoires : Wāw précédé de Dammah (نُو), Yā\' précédé de Kasrah (حِي), Alif précédé de Fathah (هَا).',
      'Mesure des 2 Harakāt : 1 Harakah = durée d\'une voyelle courte (ex: Ba). 2 Harakāt = durée d\'une voyelle longue (ex: Bā = Ba + Ba, environ 1 seconde selon le tempo).',
      'Le Péril du Lahn Jalī : Tronquer un Madd Naturel en voyelle courte change le sens et constitue un péché (Harām) ! Ex: Dire « Akhadhna » (les femmes ont pris) au lieu de « Akhadhnā » (Nous avons pris).',
      'Madd vs Līn (حرفا اللين) : Lorsque Wāw ou Yā\' portent un Soukoûn et sont précédés d\'une FATHAH (ex: Bayt, Khawf, Quraysh), ce sont des lettres de Līn, qui ne reçoivent aucun Madd en lecture continue !',
      'Le Cas Particulier de « Huwa » (هُوَ) & « Hiya » (هِيَ) : En liaison continue, le Wāw porte une Fathah (pas de Madd). Mais si vous vous arrêtez d\'urgence, la voyelle devient Soukoûn et le Wāw se mue en un Madd Naturel de 2 temps (« Hū ») !'
    ],
    subrules: [
      {
        id: 'madd-definition-nuhiha',
        nameFr: '1. Les 3 Lettres de Madd & La Formule « Nūhīhā »',
        nameAr: 'حُرُوفُ المَدِّ الثَّلَاثَةُ وَكَلِمَةُ (نُوحِيهَا)',
        mnemonic: 'نُوحِيهَا ➔ Dammah + و | Kasrah + ي | Fathah + ا',
        letters: ['ا', 'و', 'ي'],
        definitionFr: 'Le mot Madd (مَدّ) signifie linguistiquement l\'étirement. En Tajwīd, il désigne l\'allongement de la voix sur les 3 voyelles longues arabes lorsqu\'elles sont sans voyelle (Sākinah) et précédées de leur voyelle courte correspondante.',
        mechanismFr: 'La voyelle s\'écoule librement à travers la cavité buccale et la gorge (Al-Jawf) sans aucun blocage consonantique.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c4-1',
            arabicText: 'تِلۡكَ مِنۡ أَنۢبَآءِ ٱلۡغَيۡبِ نُوحِيهَآ إِلَيۡكَ',
            surahAyahRef: '11:49',
            surahNameFr: 'Hūd',
            highlightSegment: 'نُوحِيهَآ',
            highlightLetter: 'و + ي + ا',
            ruleApplied: 'Les 3 lettres de Madd réunies',
            ruleTag: 'madd',
            explanationFr: 'Ce mot contient les 3 lettres de Madd avec leurs voyelles homogènes obligatoires : Wāw précédé de Dammah (Nū), Yā\' précédé de Kasrah (hī) et Alif précédé de Fathah (hā).',
            transliteration: 'Tilka min ambā\'i-l-ghaybi nūhīhā ilayk',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/011049.mp3'
          },
          {
            id: 'ex-c4-2',
            arabicText: 'مَٰلِكِ يَوۡمِ ٱلدِّينِ',
            surahAyahRef: '1:4',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'مَٰلِكِ',
            highlightLetter: 'ٰ (Alif Khanjariyyah)',
            ruleApplied: 'Alif Khanjariyyah = Madd Naturel 2 temps',
            ruleTag: 'madd',
            explanationFr: 'Le petit Alif vertical miniature (ٰ) est un Alif à part entière en Rasm \'Uthmānī : il exige exactement 2 temps de Madd.',
            transliteration: 'Māliki yawmi-d-dīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001004.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Tenter de commencer un mot par une lettre de Madd.',
            correctionFr: 'Impossible en arabe ! Une lettre de Madd est par définition sans voyelle (Sākinah), et la langue arabe interdit d\'attaquer une phrase par un Soukoûn.'
          },
          {
            trapFr: 'Croire que l\'Alif peut porter une voyelle.',
            correctionFr: 'L\'Alif est TOUJOURS une lettre de Madd précédée d\'une Fathah. La lettre qui porte une voyelle (Fathah, Dammah, Kasrah) est la Hamzah (ء).'
          }
        ]
      },
      {
        id: 'madd-tabii-duration',
        nameFr: '2. Le Madd Naturel (2 Temps) & L\'Éradication du Lahn Jalī',
        nameAr: 'المَدُّ الطَّبِيعِيُّ (حَرَكَتَانِ) وَتَجَنُّبُ اللَّحْنِ الجَلِيِّ',
        mnemonic: '2 Harakāt obligatoires (بَا = بَ + بَ) | Ni trop court (Harām), ni trop long',
        letters: ['ا', 'و', 'ي'],
        definitionFr: 'Le Madd Naturel (Al-Madd At-Tabī\'ī ou Al-Aslī) est la prolongation intrinsèque sans laquelle la lettre ne peut exister. Il n\'est suivi ni d\'une Hamzah, ni d\'un Soukoûn.',
        mechanismFr: 'Maintenez le son pendant exactement 2 battements réguliers (environ 1 seconde à tempo modéré). Ne jamais le tronquer en voyelle courte ni l\'étirer au-delà de 2 temps.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c4-3',
            arabicText: 'يَقُولُواْ قَدۡ أَخَذۡنَآ أَمۡرَنَا مِن قَبۡلُ',
            surahAyahRef: '9:50',
            surahNameFr: 'At-Tawbah',
            highlightSegment: 'أَخَذۡنَآ',
            highlightLetter: 'نَا (2 temps)',
            ruleApplied: 'Madd 2 temps obligatoire (Préservation du pronom "Nous")',
            ruleTag: 'madd',
            explanationFr: 'Raccourcir « Akhadhnā » en « Akhadhna » supprime l\'Alif et transforme « Nous avons pris » en « Les femmes ont pris », un contresens théologique majeur (Lahn Jalī Harām) !',
            transliteration: 'Yaqūlū qad akhadhnā amranā min qabl',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/009050.mp3'
          },
          {
            id: 'ex-c4-4',
            arabicText: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ',
            surahAyahRef: '1:7',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'صِرَٰطَ',
            highlightLetter: 'ٰ (2 temps seulement)',
            ruleApplied: 'Calibrage exact à 2 temps (Pas de sur-étirement)',
            ruleTag: 'madd',
            explanationFr: 'Le petit Alif vertical sur « Sirāt » ne doit durer que 2 temps : l\'étirer à 4 ou 6 temps est une faute fréquente dans la Fātihah.',
            transliteration: 'Sirāta-lladhīna an\'amta \'alayhim',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Aller trop vite et tronquer la voyelle longue en voyelle courte (ex: dire "Qala" au lieu de "Qāla").',
            correctionFr: 'C\'est un Lahn Jalī majeur (Harām) qui détruit la grammaire du Coran. Accordez toujours 2 temps pleins.'
          },
          {
            trapFr: 'Sur-allonger le Madd Naturel jusqu\'à 4 ou 5 temps sans aucune justification.',
            correctionFr: 'Le Madd Naturel ne dure strictement que 2 Harakāt : seul le Madd Far\'ī (avec Hamzah ou Soukoûn) autorise un allongement supérieur.'
          }
        ]
      },
      {
        id: 'madd-vs-leen',
        nameFr: '3. Lettres de Madd vs Lettres de Līn (حَرْفَا اللِّينِ)',
        nameAr: 'الفَرْقُ بَيْنَ حُرُوفِ المَدِّ وَحَرْفَيِ اللِّينِ',
        mnemonic: 'Madd = Voyelle homogène | Līn = Wāw/Yā\' précédés d\'une Fathah (ـَ + وْ / يْ)',
        letters: ['و', 'ي'],
        definitionFr: 'Lorsque les lettres Wāw (و) ou Yā\' (ي) portent un Soukoûn mais sont précédées d\'une FATHAH (ـَ), elles perdent leur statut de Madd pour devenir des « lettres de Līn » (douceur).',
        mechanismFr: 'La langue ou les lèvres glissent avec souplesse sur la consonne. En lecture continue (Wasl), les lettres de Līn ne reçoivent AUCUNE prolongation supplémentaire !',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c4-5',
            arabicText: 'لِإِيلَٰفِ قُرَيۡشٍ',
            surahAyahRef: '106:1',
            surahNameFr: 'Quraysh',
            highlightSegment: 'قُرَيۡشٍ',
            highlightLetter: 'يْ précédé de Fathah',
            ruleApplied: 'Lettre de Līn (Yā\' précédé de Fathah)',
            ruleTag: 'izhar',
            explanationFr: 'Le Yā\' de Quraysh est précédé d\'un Râ\' avec Fathah : en continu, on prononce « Qurayshin » sans allonger le Yā\'.',
            transliteration: 'Li-īlāfi quraysh',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/106001.mp3'
          },
          {
            id: 'ex-c4-6',
            arabicText: 'وَءَامَنَهُم مِّنۡ خَوۡفِۭ',
            surahAyahRef: '106:4',
            surahNameFr: 'Quraysh',
            highlightSegment: 'خَوۡفِۭ',
            highlightLetter: 'وْ précédé de Fathah',
            ruleApplied: 'Lettre de Līn (Wāw précédé de Fathah)',
            ruleTag: 'izhar',
            explanationFr: 'Le Wāw porte un Soukoûn et est précédé d\'un Khā\' avec Fathah : c\'est un Līn pur. L\'Alif ne peut JAMAIS être une lettre de Līn.',
            transliteration: 'Wa āmanahum min khawf',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/106004.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Allonger une lettre de Līn en pleine lecture continue (ex: dire "Qurayyyy-shin").',
            correctionFr: 'En lecture continue (Wasl), la lettre de Līn ne s\'allonge pas ! Elle ne peut être prolongée qu\'à l\'arrêt (Madd Līn à 2, 4 ou 6 temps).'
          },
          {
            trapFr: 'Penser que l\'Alif peut être une lettre de Līn.',
            correctionFr: 'L\'Alif est exclusivement une lettre de Madd car il est TOUJOURS précédé d\'une Fathah homogène.'
          }
        ]
      },
      {
        id: 'waqf-huwa-hiya',
        nameFr: '4. Les Mots Caméléons : هُوَ, هِيَ, مَعِيَ (Wasl vs Waqf)',
        nameAr: 'حُكْمُ الوَقْفِ عَلَى الكَلِمَاتِ المَفْتُوحَةِ (هُوَ - هِيَ)',
        mnemonic: 'En continu = Consonne avec Fathah | À l\'arrêt d\'urgence = Madd Naturel 2 temps (Hū, Hī)',
        letters: ['و', 'ي'],
        definitionFr: 'Des mots comme « Huwa » (هُوَ), « Hiya » (هِيَ) ou « Ma\'iya » (مَعِيَ) se terminent par un Wāw ou un Yā\' portant une Fathah : ce ne sont donc pas des lettres de Madd en lecture continue.',
        mechanismFr: 'Cependant, si le lecteur est contraint de s\'arrêter (panne de souffle), la Fathah devient Soukoûn, réunissant aussitôt les conditions du Madd Naturel : la lettre doit alors être prolongée de 2 temps !',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c4-7',
            arabicText: 'لَّآ إِلَٰهَ إِلَّا هُوَۚ سُبۡحَٰنَهُۥ عَمَّا يُشۡرِكُونَ',
            surahAyahRef: '9:31',
            surahNameFr: 'At-Tawbah',
            highlightSegment: 'إِلَّا هُوَۚ',
            highlightLetter: 'هُوَ ➔ هُو (2 temps)',
            ruleApplied: 'Huwa en continu ➔ Hū à l\'arrêt',
            ruleTag: 'madd',
            explanationFr: 'En continu : « Illā Huwa Subhānah » (consonne w). À l\'arrêt d\'urgence : la Fathah devient Soukoûn sur le Wāw précédé de Dammah, donnant un Madd pur de 2 temps : « Illā Hū ».',
            transliteration: 'Lā ilāha illā hū',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/009031.mp3'
          },
          {
            id: 'ex-c4-8',
            arabicText: 'فَقُل لَّن تَخۡرُجُواْ مَعِىَ أَبَدٗا',
            surahAyahRef: '9:83',
            surahNameFr: 'At-Tawbah',
            highlightSegment: 'مَعِىَ',
            highlightLetter: 'مَعِيَ ➔ مَعِي (2 temps)',
            ruleApplied: 'Ma\'iya en continu ➔ Ma\'ī à l\'arrêt',
            ruleTag: 'madd',
            explanationFr: 'À l\'arrêt, le Yā\' prend un Soukoûn précédé d\'une Kasrah et devient un Madd de 2 temps : « Ma\'ī ».',
            transliteration: 'Fa-qul lan takhrujū ma\'ī',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/009083.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'S\'arrêter sur « Huwa » en disant "Huw" avec une consonne sèche sans prolonger.',
            correctionFr: 'Le Wāw Sākin précédé de Dammah devient un Madd Naturel : vous devez impérativement prolonger de 2 temps (« Hū »).'
          },
          {
            trapFr: 'Allonger « Huwa » en pleine lecture continue.',
            correctionFr: 'En continu, le Wāw porte une Fathah : on dit rapidement « Huwa » sans aucun Madd.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'exo-c4-1',
        title: 'Le Raccourcissement Sacrilège : Sūrah At-Tawbah (9:50)',
        verseArabic: 'يَقُولُواْ قَدۡ أَخَذۡنَآ أَمۡرَنَا مِن قَبۡلُ',
        surahAyahRef: '9:50',
        targetSegment: 'أَخَذۡنَآ أَمۡرَنَا',
        promptFr: 'Quelle est la conséquence dramatique si un lecteur raccourcit le Alif final de « أَخَذۡنَا » à moins de 2 temps ?',
        hintFr: 'Comparez la signification du verbe avec Alif long (pronom pluriel \'Nā\') et sans Alif (Nūn an-Niswah).',
        solutionFr: 'Le mot devient « Akhadhna » (les femmes ont pris) au lieu de « Akhadhnā » (Nous avons pris) : Lahn Jalī majeur !',
        breakdownSteps: [
          '« Akhadhnā » (أَخَذۡنَا) avec 2 temps de Madd signifie « Nous avons pris » (1re personne pluriel).',
          'Si vous récitez trop vite et avalez le Alif, le mot s\'entend « Akhadhna » (أَخَذۡنَ) avec une simple Fathah sur le Nūn.',
          'En grammaire arabe, cela devient le Nūn du féminin pluriel (Nūn an-Niswah) : « Elles (les femmes) ont pris notre affaire en main » !',
          'Le sens du verset est corrompu : c\'est un Lahn Jalī caractérisé, formellement interdit (Harām).'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/009050.mp3'
      },
      {
        id: 'exo-c4-2',
        title: 'Distinction Pratique Madd vs Līn : Sūrah Quraysh (106:1-4)',
        verseArabic: 'لِإِيلَٰفِ قُرَيۡشٍ ١ إِۦلَٰفِهِمۡ رِحۡلَةَ ٱلشِّتَآءِ وَٱلصَّيۡفِ ٢ فَلۡيَعۡبُدُواْ رَبَّ هَٰذَا ٱلۡبَيۡتِ ٣ ٱلَّذِىٓ أَطۡعَمَهُم مِّن جُوعٖ وَءَامَنَهُم مِّنۡ خَوۡفِۭ ٤',
        surahAyahRef: '106:1-4',
        targetSegment: 'قُرَيۡشٍ · ٱلصَّيۡفِ · ٱلۡبَيۡتِ · جُوعٖ · خَوۡفِۭ',
        promptFr: 'Parmi les mots surlignés, identifiez lequel contient une lettre de Madd naturel et lesquels contiennent des lettres de Līn en lecture continue.',
        hintFr: 'Regardez attentivement la voyelle qui précède le Wāw ou le Yā\' : est-elle une Fathah ou une voyelle homogène ?',
        solutionFr: '« Jū\' » contient un Madd Wāw (précédé de Dammah). « Quraysh », « As-Sayf », « Al-Bayt » et « Khawf » contiennent des lettres de Līn (précédées de Fathah).',
        breakdownSteps: [
          'Dans « Jū\' » (جُوعٖ) : Le Wāw porte un Soukoûn et est précédé d\'un Jīm avec Dammah (ـُ + و). C\'est une voyelle homogène : Madd Naturel de 2 temps !',
          'Dans « Quraysh », « As-Sayf », « Al-Bayt » : Le Yā\' porte un Soukoûn et est précédé d\'une FATHAH (ـَ + ي). Ce sont des lettres de Līn, sans aucun Madd en continu.',
          'Dans « Khawf » : Le Wāw porte un Soukoûn et est précédé d\'un Khā\' avec FATHAH (ـَ + و). C\'est également une lettre de Līn.',
          'Règle d\'or : La lettre de Līn n\'a jamais de voyelle homogène avant elle, elle est toujours précédée d\'une Fathah.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/106001.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c4-1',
        type: 'mcq',
        promptFr: 'Quel mot coranique célèbre réunit à lui seul les 3 lettres de Madd avec leurs 3 voyelles homogènes obligatoires ?',
        verseArabic: 'تِلۡكَ مِنۡ أَنۢبَآءِ ٱلۡغَيۡبِ نُوحِيهَآ إِلَيۡكَ',
        targetWord: 'نُوحِيهَآ',
        surahAyahRef: '11:49',
        options: [
          'نُوحِيهَا (Nū-hī-hā) : Dammah avant Wāw, Kasrah avant Yā\', Fathah avant Alif',
          'ٱلصَّلَوٰةَ',
          'إِيَّاكَ',
          'يَرۡمَلُونَ'
        ],
        correctAnswer: 'نُوحِيهَا (Nū-hī-hā) : Dammah avant Wāw, Kasrah avant Yā\', Fathah avant Alif',
        explanationFr: 'Le mot « Nūhīhā » dans la sourate Hūd (11:49) est la formule universelle du Tajwīd résumant les 3 lettres de Madd et leurs conditions strictes de voyelles homogènes.',
        ruleId: 'madd-definition-nuhiha'
      },
      {
        id: 'q-c4-2',
        type: 'mcq',
        promptFr: 'Quelle est la durée exacte obligatoire du Madd Naturel (Al-Madd At-Tabī\'ī) lors de la récitation ?',
        verseArabic: 'قَالَ رَبُّنَا ٱلَّذِىٓ أَعۡطَىٰ كُلَّ شَىۡءٍ خَلۡقَهُۥ',
        targetWord: 'قَالَ',
        surahAyahRef: '20:50',
        options: [
          'Exactement 2 Harakāt (temps / pulsations) : la durée de deux voyelles courtes (بَ + بَ)',
          '4 ou 5 Harakāt',
          '6 Harakāt obligatoires',
          '1 seule Harakah'
        ],
        correctAnswer: 'Exactement 2 Harakāt (temps / pulsations) : la durée de deux voyelles courtes (بَ + بَ)',
        explanationFr: 'Le Madd Naturel se mesure rigoureusement à 2 Harakāt (environ 1 seconde à tempo normal). Ni plus (pour ne pas déformer la mélodie), ni moins (pour ne pas avaler la lettre).',
        ruleId: 'madd-tabii-duration'
      },
      {
        id: 'q-c4-3',
        type: 'mcq',
        promptFr: 'Pourquoi raccourcir le mot « أَخَذۡنَا » en « أَخَذۡنَ » est-il considéré comme un péché (Lahn Jalī Harām) ?',
        verseArabic: 'يَقُولُواْ قَدۡ أَخَذۡنَآ أَمۡرَنَا مِن قَبۡلُ',
        targetWord: 'أَخَذۡنَآ',
        surahAyahRef: '9:50',
        options: [
          'Parce que cela change le sujet grammatical de « Nous avons pris » à « Les femmes ont pris », dénaturant gravement le verset',
          'Parce que le Alif doit toujours être prononcé avec une Ghunnah',
          'Parce que cela brise la rime poétique du verset',
          'Parce que le mot devient un mot étranger'
        ],
        correctAnswer: 'Parce que cela change le sujet grammatical de « Nous avons pris » à « Les femmes ont pris », dénaturant gravement le verset',
        explanationFr: 'Raccourcir une voyelle longue en voyelle courte qui inverse ou altère le sens du texte sacré constitue un Lahn Jalī caractérisé, interdit par le consensus des savants.',
        ruleId: 'madd-tabii-duration'
      },
      {
        id: 'q-c4-4',
        type: 'mcq',
        promptFr: 'Quelle est la condition indispensable pour que la lettre Wāw (و) ou Yā\' (ي) soit qualifiée de « lettre de Līn » (حَرْفُ لِين) et non de Madd ?',
        verseArabic: 'لِإِيلَٰفِ قُرَيۡشٍ ١ إِۦلَٰفِهِمۡ رِحۡلَةَ ٱلشِّتَآءِ وَٱلصَّيۡفِ',
        targetWord: 'قُرَيۡشٍ',
        surahAyahRef: '106:1',
        options: [
          'La lettre porte un Soukoûn et est obligatoirement précédée d\'une FATHAH (ـَ)',
          'La lettre est suivie d\'une Hamzah',
          'La lettre est précédée d\'une Dammah',
          'La lettre est écrite en rouge dans le Coran'
        ],
        correctAnswer: 'La lettre porte un Soukoûn et est obligatoirement précédée d\'une FATHAH (ـَ)',
        explanationFr: 'Les deux lettres de Līn sont Wāw et Yā\' portant un Soukoûn précédées d\'une Fathah (comme dans Khawf et Quraysh). L\'Alif ne peut JAMAIS être une lettre de Līn.',
        ruleId: 'madd-vs-leen'
      },
      {
        id: 'q-c4-5',
        type: 'mcq',
        promptFr: 'Que devient le mot « هُوَ » (Huwa) si le lecteur s\'arrête dessus en cas de panne de souffle impérieuse ?',
        verseArabic: 'لَّآ إِلَٰهَ إِلَّا هُوَۚ سُبۡحَٰنَهُۥ عَمَّا يُشۡرِكُونَ',
        targetWord: 'إِلَّا هُوَۚ',
        surahAyahRef: '9:31',
        options: [
          'La Fathah devient un Soukoûn et le Wāw devient un Madd Naturel de 2 temps : on prononce « Hū »',
          'On prononce « Huw » avec une consonne sèche',
          'On prononce « Huwa » comme en continu',
          'Le mot est annulé et on ne prononce rien'
        ],
        correctAnswer: 'La Fathah devient un Soukoûn et le Wāw devient un Madd Naturel de 2 temps : on prononce « Hū »',
        explanationFr: 'À l\'arrêt, la Fathah sur le Wāw se transforme en Soukoûn. Précédé d\'une Dammah (ـُ + وْ), il remplit alors parfaitement les conditions du Madd Naturel et s\'allonge de 2 temps (« Hū ») !',
        ruleId: 'waqf-huwa-hiya'
      }
    ]
  },
  // ==========================================
  // CHAPITRE 5 : LES PROLONGATIONS II (MADD SECONDAIRE / FAR'Ī)
  // ==========================================
  {
    id: 'chap-5',
    number: 5,
    slug: 'madd-2',
    titleFr: 'Les Prolongations II (Madd Secondaire / Far\'ī)',
    titleAr: 'المَدُّ الفَرْعِيُّ (بِسَبَبِ الهَمْزِ وَالسُّكُونِ)',
    category: 'intermediate',
    estimatedMinutes: 25,
    isPilotChapter: true,
    summaryFr: 'Comprendre et maîtriser le Madd Far\'ī (Secondaire), prolongé au-delà des 2 temps du Madd naturel en raison d\'une Hamzah (همزة) ou d\'un Soukoûn (سكون). Maîtriser le Madd Wājib Muttasil (4-5 temps obligatoire), le Madd Jā\'iz Munfasil (4-5 temps en liaison, 2 temps à l\'arrêt), le Madd Badal (2 temps dans Hafs), le Madd Silah Kubrā (4-5 temps), le Madd Lāzim (6 temps stricts obligatoires incompressibles avec Shaddah ou Soukoûn permanent), et le Madd \'Ārid li-s-Sukūn (2, 4 ou 6 temps) avec la règle d\'or de la cohérence de récitation (Al-Mīzān).',
    infographicPoints: [
      'Les deux causes du Madd Far\'ī : 1. La Hamzah (همزة) qui exige 4 à 5 Harakāt (ou 2 pour le Badal). 2. Le Soukoûn (سكون) qui exige 6 Harakāt (Lāzim) ou 2, 4, 6 Harakāt (\'Ārid).',
      'Madd Muttasil (المتصل) : Lettre de Madd et Hamzah réunies dans le MÊME mot (ex: As-Samā\', Jā\'a). Statut : Wājib (Obligatoire 4-5 temps).',
      'Madd Munfasil (المنفصل) : Madd en fin de mot + Hamzah au début du suivant (ex: Yā-Ayyuhā). En liaison (Wasl) = 4-5 temps ; à l\'arrêt sur le premier mot = 2 temps !',
      'Madd Badal (البدل) : La Hamzah PRÉCÈDE la lettre de Madd (ex: Āmanū, Īmānan). Dans la lecture de Hafs \'an \'Āsim, il dure STRICTEMENT 2 temps.',
      'Madd Lāzim (اللازم) : Madd suivi d\'un Soukoûn originel ou d\'une Shaddah (ex: Ad-Dāllīn, Al-Hāqqah, Alif-Lām-Mīm). Strictement 6 TEMPS OBLIGATOIRES !',
      'Règle d\'or de l\'Équilibre (Al-Mīzān) : Si vous choisissez 4 temps pour le Madd \'Ārid à la première fin de verset, vous DEVEZ conserver 4 temps sur toutes les fins de versets suivantes !'
    ],
    subrules: [
      {
        id: 'madd-muttasil-munfasil',
        nameFr: '1. Madd Muttasil vs Madd Munfasil (Causes par la Hamzah)',
        nameAr: 'المَدُّ المُتَّصِلُ وَالمُنْفَصِلُ بِسَبَبِ الهَمْزَةِ',
        mnemonic: 'Muttasil = Même mot (4-5 t. Wājib) | Munfasil = 2 mots distincts (4-5 t. Jā\'iz en Wasl, 2 t. en Waqf)',
        letters: ['ا', 'و', 'ي', 'ء'],
        definitionFr: 'Toute lettre de Madd suivie d\'une Hamzah voit sa prolongation accrue à 4 ou 5 Harakāt. Si la Hamzah est dans le même mot, le Madd est Muttasil (Obligatoire). Si la Hamzah est dans le mot suivant, le Madd est Munfasil (Permis).',
        mechanismFr: 'Poussez le souffle depuis Al-Jawf pendant 4 à 5 pulsations régulières, puis attaquez la Hamzah avec fermeté et netteté.',
        durationHarakat: 4,
        examples: [
          {
            id: 'ex-c5-1',
            arabicText: 'وَٱلسَّمَآءِ وَمَا بَنَىٰهَا',
            surahAyahRef: '91:5',
            surahNameFr: 'Ash-Shams',
            highlightSegment: 'وَٱلسَّمَآءِ',
            highlightLetter: 'آء (Même mot)',
            ruleApplied: 'Madd Wājib Muttasil (4-5 temps obligatoires)',
            ruleTag: 'madd',
            explanationFr: 'La lettre de Madd (Alif) et la Hamzah sont dans le même mot « As-Samā\' » : prolongation obligatoire de 4 à 5 temps en continu comme à l\'arrêt.',
            transliteration: 'Was-samā\'i wa mā banāhā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/091005.mp3'
          },
          {
            id: 'ex-c5-2',
            arabicText: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱسۡتَعِينُواْ',
            surahAyahRef: '2:153',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'يَٰٓأَيُّهَا',
            highlightLetter: 'يَا + أَيُّهَا (2 mots)',
            ruleApplied: 'Madd Jā\'iz Munfasil (4-5 temps en liaison)',
            ruleTag: 'madd',
            explanationFr: '« Yā » est la particule d\'appel et « Ayyuhā » est le mot suivant. En liaison continue (Wasl), 4 à 5 temps sont exigés selon Hafs via Ash-Shātibiyyah.',
            transliteration: 'Yā-ayyuhal-ladhīna āmanūs-ta\'īnū',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002153.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Raccourcir le Madd Muttasil à 2 temps par empressement.',
            correctionFr: 'C\'est un Lahn Khafī : le Madd Muttasil est unanime (Wājib), aucun lecteur coranique ne l\'autorise à 2 temps.'
          },
          {
            trapFr: 'Conserver 4 temps sur un Madd Munfasil si l\'on s\'arrête sur le premier mot.',
            correctionFr: 'Si vous vous arrêtez sur « Inna » dans « Innā anzalnāh », la Hamzah disparaît : vous devez impérativement revenir à un Madd Naturel de 2 temps !'
          }
        ]
      },
      {
        id: 'madd-badal-silah-kubra',
        nameFr: '2. Madd Badal & Madd Silah Kubrā',
        nameAr: 'مَدُّ البَدَلِ وَمَدُّ الصِّلَةِ الكُبْرَى',
        mnemonic: 'Badal = Hamzah AVANT le Madd (2 t. dans Hafs) | Silah Kubrā = Pronom ـهُۥٓ / ـهِۦٓ + Hamzah (4-5 t.)',
        letters: ['ء', 'ا', 'و', 'ي'],
        definitionFr: 'Dans le Madd Badal, la Hamzah précède la lettre de Madd au lieu de la suivre (ex: Āmanū). Dans le Madd Silah Kubrā, le pronom possessif Hā\' (ـهُۥٓ / ـهِۦٓ) est suivi d\'une Hamzah au mot suivant.',
        mechanismFr: 'Pour le Badal, prononcez 2 temps simples sans forcer. Pour la Silah Kubrā, étirez le pronom pendant 4 à 5 temps en continu uniquement.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c5-3',
            arabicText: 'ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ',
            surahAyahRef: '2:285',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'ءَامَنَ',
            highlightLetter: 'ءَا (Hamzah avant Alif)',
            ruleApplied: 'Madd Badal (2 temps dans Hafs)',
            ruleTag: 'madd',
            explanationFr: 'La Hamzah précède le Alif. À l\'origine « \'A\'mana », la deuxième Hamzah est devenue un Alif. Il dure exactement 2 temps dans la lecture de Hafs.',
            transliteration: '\'Āmana-r-rasūlu bimā unzila ilayh',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002285.mp3'
          },
          {
            id: 'ex-c5-4',
            arabicText: 'يَحۡسَبُ أَنَّ مَالَهُۥٓ أَخۡلَدَهُۥ',
            surahAyahRef: '104:3',
            surahNameFr: 'Al-Humazah',
            highlightSegment: 'مَالَهُۥٓ أَخۡلَدَهُۥ',
            highlightLetter: 'ـهُۥٓ + أَ (Petit Wāw avec vague)',
            ruleApplied: 'Madd Silah Kubrā (4-5 temps en liaison)',
            ruleTag: 'madd',
            explanationFr: 'Le pronom Hā\' est suivi d\'une Hamzah au début du mot suivant : en liaison, le petit Wāw avec la vague (~) reçoit 4 à 5 temps. À l\'arrêt sur « Mālah », il devient un simple Soukoûn pur.',
            transliteration: 'Yahsabu anna mālahū akhladah',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/104003.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Confondre Madd Badal et Madd Muttasil.',
            correctionFr: 'Dans Badal, la Hamzah est AVANT la voyelle longue (ءَا = 2 temps). Dans Muttasil, elle est APRÈS (آء = 4-5 temps).'
          },
          {
            trapFr: 'Appliquer la Silah Kubrā à l\'arrêt sur le mot.',
            correctionFr: 'À l\'arrêt, le petit Wāw ou Yā\' s\'annule entièrement et la consonne Hā\' prend un Soukoûn franc sans aucun allongement (« Mālah »).'
          }
        ]
      },
      {
        id: 'madd-lazim-6-counts',
        nameFr: '3. Le Madd Lāzim (6 Temps Stricts Incompressibles)',
        nameAr: 'المَدُّ اللَّازِمُ (كَلِمِيٌّ وَحَرْفِيٌّ - ٦ حَرَكَاتٍ)',
        mnemonic: 'Madd + Soukoûn originel ou Shaddah ➔ 6 Temps OBLIGATOIRES !',
        letters: ['ا', 'و', 'ي'],
        definitionFr: 'Le Madd Lāzim survient lorsqu\'une lettre de Madd est suivie d\'un Soukoûn originel permanent (présent en continu comme à l\'arrêt), matérialisé par une Shaddah (Muthaqqal) ou un Soukoûn pur (Mukhaffaf). Il impose STRICTEMENT 6 temps complets de prolongation sans dérogation.',
        mechanismFr: 'Maintenez la note vocale sur 6 pulsations métronomiques complètes, puis faites claquer la Shaddah ou le Soukoûn avec fermeté (Nabrah).',
        durationHarakat: 6,
        examples: [
          {
            id: 'ex-c5-5',
            arabicText: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ',
            surahAyahRef: '1:7',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'ٱلضَّآلِّينَ',
            highlightLetter: 'آ + لّ (Shaddah sur Lām)',
            ruleApplied: 'Madd Lāzim Kalimī Muthaqqal (6 temps incompressibles)',
            ruleTag: 'madd',
            explanationFr: 'L\'Alif est suivi d\'un Lām portant une Shaddah (donc un Lām Sākin originel). Obligation absolue d\'étirer sur 6 temps complets puis de compresser sur le Lām.',
            transliteration: 'Wa lad-dāāāāāāllīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3'
          },
          {
            id: 'ex-c5-6',
            arabicText: 'الٓمٓ ١ ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ',
            surahAyahRef: '2:1',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'الٓمٓ',
            highlightLetter: 'Lām (6t) + Mīm (6t)',
            ruleApplied: 'Madd Lāzim Harfī (Muthaqqal + Mukhaffaf)',
            ruleTag: 'madd',
            explanationFr: 'Dans les lettres isolées au début des sourates : le Lām dure 6 temps et fusionne avec Ghunnah dans le Mīm qui dure lui aussi 6 temps complets.',
            transliteration: 'Alif-Lāāāāāāmm-Mīīīīīīm',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Raccourcir « Ad-Dāllīn » à 2 ou 4 temps dans la prière par précipitation.',
            correctionFr: 'C\'est une faute de récitation majeure (Lahn Khafī impardonnable dans la Fātihah). Comptez mentalement 6 battements complets.'
          },
          {
            trapFr: 'Oublier d\'appuyer sur la Shaddah à la fin des 6 temps (omission du Nabrah).',
            correctionFr: 'Si vous n\'appuyez pas fermement sur le double Lām, le mot sonne comme « Dālīn » sans Shaddah, altérant le mot coranique.'
          }
        ]
      },
      {
        id: 'madd-arid-leen-waqf',
        nameFr: '4. Madd \'Ārid li-s-Sukūn & Madd Līn à l\'Arrêt',
        nameAr: 'المَدُّ العَارِضُ لِلسُّكُونِ وَمَدُّ اللِّينِ عِنْدَ الوَقْفِ',
        mnemonic: 'Arrêt sur fin de verset ➔ Choix libre : 2, 4 ou 6 temps (Garder la même durée !)',
        letters: ['ا', 'و', 'ي'],
        definitionFr: 'Sur la dernière consonne d\'un verset, l\'arrêt impose un Soukoûn incident. La voyelle longue précédente devient alors un Madd \'Ārid li-s-Sukūn, et les lettres de Līn (ـَ + وْ / يْ) deviennent un Madd Līn. Le lecteur a le choix libre de prolonger à 2, 4 ou 6 temps.',
        mechanismFr: 'Choisissez une cadence (ex: 4 temps) et maintenez exactement cette même durée sur toutes les fins de versets de votre lecture.',
        durationHarakat: 4,
        examples: [
          {
            id: 'ex-c5-7',
            arabicText: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
            surahAyahRef: '1:2',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'ٱلۡعَٰلَمِينَ',
            highlightLetter: 'ـِينْ (Arrêt sur Soukoûn)',
            ruleApplied: 'Madd \'Ārid li-s-Sukūn (2, 4 ou 6 temps au choix)',
            ruleTag: 'madd',
            explanationFr: 'En continuant : « Al-\'Ālamīna » (2 temps simples). À l\'arrêt : le Nūn prend un Soukoûn incident et le Yā\' peut s\'allonger de 2, 4 ou 6 temps.',
            transliteration: 'Al-hamdu lillāhi rabbil-\'ālamīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001002.mp3'
          },
          {
            id: 'ex-c5-8',
            arabicText: 'فَلۡيَعۡبُدُواْ رَبَّ هَٰذَا ٱلۡبَيۡتِ',
            surahAyahRef: '106:3',
            surahNameFr: 'Quraysh',
            highlightSegment: 'ٱلۡبَيۡتِ',
            highlightLetter: 'ـَيۡتْ (Līn à l\'arrêt)',
            ruleApplied: 'Madd Līn à l\'arrêt (2, 4 ou 6 temps)',
            ruleTag: 'madd',
            explanationFr: 'Le Yā\' est précédé d\'une Fathah : en continu, aucun Madd n\'est permis (« Al-Bayti »). Mais à l\'arrêt, il devient un Madd Līn de 2, 4 ou 6 temps !',
            transliteration: 'Fal-ya\'budū rabba hādhal-bayt',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/106003.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Changer anarchiquement de durée entre chaque verset (ex: 2 temps sur Al-\'Ālamīn, puis 6 sur Ar-Rahīm, puis 4 sur Ad-Dīn).',
            correctionFr: 'La règle fondamentale de la récitation (Al-Mīzān) impose l\'uniformité : la durée choisie au départ doit être conservée du début à la fin de la récitation.'
          },
          {
            trapFr: 'Donner au Madd Līn une durée supérieure à celle du Madd \'Ārid.',
            correctionFr: 'La lettre de Līn est phonétiquement plus faible que la lettre de Madd : elle peut être égale ou plus courte, mais JAMAIS plus longue que le Madd \'Ārid !'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'exo-c5-1',
        title: 'Le Madd Lāzim de la Fātihah : « Ad-Dāllīn » (1:7)',
        verseArabic: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ',
        surahAyahRef: '1:7',
        targetSegment: 'وَلَا ٱلضَّآلِّينَ',
        promptFr: 'Pourquoi le mot « ٱلضَّآلِّينَ » impose-t-il obligatoirement 6 temps complets de prolongation et comment gérer la transition vers le Lām ?',
        hintFr: 'Observez le symbole au-dessus du Alif et la lettre qui suit immédiatement : porte-t-elle une Shaddah ?',
        solutionFr: 'C\'est un Madd Lāzim Kalimī Muthaqqal (Madd suivi d\'une Shaddah). Il exige 6 temps incompressibles avec une pression ferme (Nabrah) sur le double Lām.',
        breakdownSteps: [
          'Identification de la lettre de Madd : Le Alif après le Dād emphatique.',
          'Identification de la cause : Le Lām qui suit porte une Shaddah (لّ), ce qui équivaut à un premier Lām avec Soukoûn originel permanent (لْ) suivi d\'un Lām avec Kasrah (لِ).',
          'Application de la règle : C\'est un Madd Lāzim Kalimī Muthaqqal. Il est strictement obligatoire (Lāzim) de maintenir la voix pendant 6 pulsations complètes.',
          'Le Nabrah (pression) sur la Shaddah : À la 6e pulsation, compressez la voix avec fermeté sur la langue pour faire claquer le double Lām sans interrompre le souffle.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3'
      },
      {
        id: 'exo-c5-2',
        title: 'Muttasil vs Munfasil : Sourate Al-Baqarah (2:5)',
        verseArabic: 'أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ',
        surahAyahRef: '2:5',
        targetSegment: 'أُوْلَٰٓئِكَ',
        promptFr: 'Analysez la prolongation dans « أُوْلَٰٓئِكَ » : est-elle liée (Muttasil) ou séparée (Munfasil), et que se passe-t-il si vous vous arrêtez dessus ?',
        hintFr: 'L\'Alif Khanjariyyah et la Hamzah sont-ils dans un seul et même mot indivisible ou répartis sur deux mots ?',
        solutionFr: '« Ulā\'ika » est un mot unique : c\'est un Madd Wājib Muttasil (4-5 temps obligatoires en continu comme à l\'arrêt).',
        breakdownSteps: [
          '« Ulā\'ika » est un mot unique : l\'Alif Khanjariyyah (ٰ) et la Hamzah (ئِ) sont logés dans le même mot.',
          'Règle : Madd Wājib Muttasil (prolongation obligatoire liée).',
          'Durée : 4 à 5 Harakāt obligatoires en Wasl comme en Waqf.',
          'Comparaison avec Munfasil : Même si l\'on s\'arrête sur « Ulā\'ika », la prolongation reste de 4 ou 5 temps, car la Hamzah fait partie intrinsèque du mot (contrairement à « Bimā unzila » où l\'arrêt sur « Bimā » ramène la prolongation à 2 temps).'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/002005.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c5-1',
        type: 'mcq',
        promptFr: 'Quelle est la différence fondamentale entre le Madd Muttasil (المتصل) et le Madd Munfasil (المنفصل) ?',
        verseArabic: 'ٱلسَّمَآءَ | يَٰٓأَيُّهَا',
        targetWord: 'ٱلسَّمَآءَ',
        surahAyahRef: '2:22',
        options: [
          'Dans le Muttasil, la lettre de Madd et la Hamzah sont dans le même mot (4-5 t. obligatoires) ; dans le Munfasil, elles sont dans deux mots séparés',
          'Le Muttasil ne dure que 2 temps et le Munfasil dure 6 temps',
          'Le Muttasil concerne uniquement le Wāw et le Munfasil uniquement l\'Alif',
          'Le Muttasil est interdit le vendredi'
        ],
        correctAnswer: 'Dans le Muttasil, la lettre de Madd et la Hamzah sont dans le même mot (4-5 t. obligatoires) ; dans le Munfasil, elles sont dans deux mots séparés',
        explanationFr: 'Le Madd Muttasil réunit le Madd et la Hamzah dans le même mot indivisible (Wājib 4-5 temps). Le Madd Munfasil les sépare entre deux mots (Jā\'iz 4-5 temps en liaison, et 2 temps si l\'on s\'arrête sur le premier mot).',
        ruleId: 'madd-muttasil-munfasil'
      },
      {
        id: 'q-c5-2',
        type: 'mcq',
        promptFr: 'Combien de temps (Harakāt) doit impérativement durer un Madd Lāzim (comme dans « ٱلضَّآلِّينَ » ou « الٓمٓ ») ?',
        verseArabic: 'غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ',
        targetWord: 'ٱلضَّآلِّينَ',
        surahAyahRef: '1:7',
        options: [
          'Strictement 6 temps (Harakāt) incompressibles, obligatoires pour tous les lecteurs',
          '2 temps suffisent en cas de fatigue',
          '4 temps au choix du lecteur',
          'Entre 2 et 8 temps selon le rythme'
        ],
        correctAnswer: 'Strictement 6 temps (Harakāt) incompressibles, obligatoires pour tous les lecteurs',
        explanationFr: 'Le Madd Lāzim (suivi d\'un Soukoûn originel ou d\'une Shaddah) exige obligatoirement 6 temps complets selon le consensus unanime de tous les maîtres du Tajwīd.',
        ruleId: 'madd-lazim-6-counts'
      },
      {
        id: 'q-c5-3',
        type: 'mcq',
        promptFr: 'Dans le mot « ءَامَنُواْ », quelle est la nature de la prolongation sur la Hamzah initiale et combien de temps dure-t-elle selon la lecture de Hafs ?',
        verseArabic: 'ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ',
        targetWord: 'ءَامَنَ',
        surahAyahRef: '2:285',
        options: [
          'C\'est un Madd Badal (la Hamzah précède le Madd), allongé de 2 temps seulement (comme un Madd Naturel)',
          'C\'est un Madd Lāzim de 6 temps',
          'C\'est un Madd Muttasil de 5 temps',
          'Il n\'y a aucun Madd, c\'est une consonne sèche'
        ],
        correctAnswer: 'C\'est un Madd Badal (la Hamzah précède le Madd), allongé de 2 temps seulement (comme un Madd Naturel)',
        explanationFr: 'Dans le Madd Badal, la Hamzah se trouve AVANT la voyelle longue. Dans la lecture de Hafs \'an \'Āsim, il se récite avec exactement 2 Harakāt.',
        ruleId: 'madd-badal-silah-kubra'
      },
      {
        id: 'q-c5-4',
        type: 'mcq',
        promptFr: 'Lorsque vous récitez la sourate Al-Fātihah et que vous choisissez de prolonger la fin du verset 2 (« Al-\'Ālamīn ») de 4 temps, quelle est la règle pour les versets suivants ?',
        verseArabic: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ٢ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ٣',
        targetWord: 'ٱلۡعَٰلَمِينَ',
        surahAyahRef: '1:2',
        options: [
          'Règle de cohérence (Al-Mīzān) : vous devez maintenir la même durée (4 temps) sur toutes les fins de versets de votre récitation',
          'Vous devez obligatoirement alterner : 2 temps puis 6 temps puis 4 temps',
          'Vous devez réciter les versets suivants sans aucun Madd',
          'Le choix est totalement aléatoire à chaque verset'
        ],
        correctAnswer: 'Règle de cohérence (Al-Mīzān) : vous devez maintenir la même durée (4 temps) sur toutes les fins de versets de votre récitation',
        explanationFr: 'Le Madd \'Ārid li-s-Sukūn offre le choix entre 2, 4 ou 6 temps, mais la règle fondamentale de la balance (Al-Mīzān) impose de conserver rigoureusement la même mesure pendant toute votre session de récitation.',
        ruleId: 'madd-arid-leen-waqf'
      },
      {
        id: 'q-c5-5',
        type: 'mcq',
        promptFr: 'Quelle est la règle pour le mot « قُرَيۡشٍ » (Quraysh 106:1) entre la lecture continue (Wasl) et l\'arrêt (Waqf) ?',
        verseArabic: 'لِإِيلَٰفِ قُرَيۡشٍ ١ إِۦلَٰفِهِمۡ',
        targetWord: 'قُرَيۡشٍ',
        surahAyahRef: '106:1',
        options: [
          'En continu (Wasl), 0 temps de Madd (simple consonne de Līn douce) ; à l\'arrêt (Waqf), il devient un Madd Līn permis de 2, 4 ou 6 temps',
          'Il dure 6 temps en continu et 2 temps à l\'arrêt',
          'Il est interdit de s\'arrêter dessus',
          'Il prend toujours 4 temps, qu\'on s\'arrête ou qu\'on continue'
        ],
        correctAnswer: 'En continu (Wasl), 0 temps de Madd (simple consonne de Līn douce) ; à l\'arrêt (Waqf), il devient un Madd Līn permis de 2, 4 ou 6 temps',
        explanationFr: 'Les lettres de Līn (Wāw ou Yā\' précédés d\'une Fathah) ne reçoivent AUCUN Madd en continu. Ce n\'est qu\'à l\'arrêt, en raison du Soukoûn incident, qu\'elles peuvent s\'étirer de 2, 4 ou 6 temps.',
        ruleId: 'madd-arid-leen-waqf'
      }
    ]
  },
  // ==========================================
  // CHAPITRE 6 : LES HAMZAHS (HAMZAT AL-WASL & AL-QAT')
  // ==========================================
  {
    id: 'chap-6',
    number: 6,
    slug: 'hamzah',
    titleFr: 'Les Hamzahs (Hamzat Al-Wasl & Al-Qat\')',
    titleAr: 'هَمْزَتَا الوَصْلِ وَالقَطْعِ',
    category: 'intermediate',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Comprendre et maîtriser la distinction absolue entre Hamzat Al-Qat\' (ء - toujours prononcée en toutes circonstances) et Hamzat Al-Wasl (ٱ - qui disparaît entièrement en liaison continue et ne renaît qu\'à l\'attaque du mot). Déterminer avec exactitude la voyelle d\'attaque (Tashkīl) selon la règle de la 3e lettre pour les verbes (Dammah ➔ اُ, Fathah/Kasrah ➔ اِ), la Fathah systématique sur l\'article défini (ٱلـ ➔ اَلـ), la Kasrah des noms singuliers coraniques, et déjouer le piège fatal des 5 verbes d\'exception (ٱبۡنُواْ, ٱمۡشُواْ, ٱقۡضُوٓاْ...) ainsi que la transmutation de « I\'tūnī » en « Ītūnī ».',
    infographicPoints: [
      'Hamzat Al-Qat\' (ء) : Porte toujours sa propre voyelle (أَ, إِ, أُ). Elle est TOUJOURS prononcée avec netteté, au début, au milieu ou à la fin d\'un mot, en continu comme à l\'arrêt !',
      'Hamzat Al-Wasl (ٱ) : Surmontée du petit Sād (صـ pour Silah/connexion). Elle ne se trouve QU\'AU DÉBUT d\'un mot. En liaison continue (Wasl), elle est TOTALEMENT ANNULÉE et escamotée phonétiquement !',
      'Tashkīl de l\'Article Défini (ٱلـ) : Tout nom commençant par l\'article défini ٱلـ commence TOUJOURS par une FATHAH à l\'attaque (« Al-hamdu », « Al-bayt ») !',
      'Règle de la 3e lettre pour les Verbes : Comptez jusqu\'à la 3e lettre du verbe : si elle porte une Dammah ➔ attaquez avec Dammah (اُدۡعُ) ; si elle porte une Fathah ou Kasrah ➔ attaquez avec Kasrah (اِذۡهَبۡ, اِهۡدِنَا) !',
      'Le piège des 5 Verbes d\'Exception : « Ibnū », « Iqdū », « Imshū », « I\'tū », « I\'tūnī » ont une Dammah apparente sur la 3e lettre mais s\'attaquent TOUS avec une KASRAH (اِبۡنُواْ) car la Dammah est accidentelle (due au pluriel).',
      'La Rencontre des Deux Hamzahs (Al-Ahqāf 46:4) : En continu = « fīs-samāwāti\'-tūnī ». À l\'attaque = la 2e Hamzah se transmute en Yā\' de Madd et l\'on prononce « ĪTŪNĪ » (إِيتُونِي) !'
    ],
    subrules: [
      {
        id: 'hamzat-qat-vs-wasl',
        nameFr: '1. Hamzat Al-Qat\' (ء) vs Hamzat Al-Wasl (ٱ)',
        nameAr: 'الفَرْقُ بَيْنَ هَمْزَةِ القَطْعِ وَهَمْزَةِ الوَصْلِ',
        mnemonic: 'Qat\' (ء) = Fixe & Invariable | Wasl (ٱ avec صـ) = Chute en continu, renaît à l\'attaque',
        letters: ['ء', 'ٱ'],
        definitionFr: 'Hamzat Al-Qat\' (ء) est une consonne authentique qui se prononce obligatoirement en toutes circonstances. Hamzat Al-Wasl (ٱ) est une béquille phonétique créée pour éviter de débuter un mot par un Soukoûn : elle disparaît complètement dès qu\'un mot la précède.',
        mechanismFr: 'En lecture continue, passez directement de la dernière voyelle du mot précédent à la consonne qui suit Hamzat Al-Wasl sans aucune rupture ni hésitation glottale.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c6-1',
            arabicText: 'ٱلَّذِينَ إِذَآ أَصَٰبَتۡهُم مُّصِيبَةٞ قَالُوٓاْ إِنَّا لِلَّهِ',
            surahAyahRef: '2:156',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'أَصَٰبَتۡهُم · إِنَّا',
            highlightLetter: 'أَ · إِ (Hamzat Al-Qat\')',
            ruleApplied: 'Hamzat Al-Qat\' (Prononciation obligatoire)',
            ruleTag: 'izhar',
            explanationFr: 'Les Hamzahs de « Asābathum » et « Innā » sont des Hamzat Qat\' : elles se détachent nettement des cordes vocales sans jamais pouvoir être élidées.',
            transliteration: 'Alladhīna idhā asābathum musībah',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002156.mp3'
          },
          {
            id: 'ex-c6-2',
            arabicText: 'فَمَنۡ حَجَّ ٱلۡبَيۡتَ أَوِ ٱعۡتَمَرَ',
            surahAyahRef: '2:158',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'حَجَّ ٱلۡبَيۡتَ أَوِ ٱعۡتَمَرَ',
            highlightLetter: 'ٱ (Chute en liaison continue)',
            ruleApplied: 'Hamzat Al-Wasl (Élision complète en Wasl)',
            ruleTag: 'silent',
            explanationFr: 'En lisant en continu, les deux Hamzats Wasl s\'évanouissent totalement : on prononce « Hajja-l-bayta awi-\'tamara », la voix enchaînant directement sur le Lām puis sur le \'Ayn.',
            transliteration: 'Faman hajja-l-bayta awi-\'tamara',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002158.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Marquer un coup de glotte sec sur Hamzat Al-Wasl en plein milieu d\'une phrase (ex: dire "Hajja ... Al-bayt").',
            correctionFr: 'C\'est une faute majeure de liaison : Hamzat Al-Wasl doit être totalement imperceptible en Wasl.'
          },
          {
            trapFr: 'Confondre le petit Sād (صـ) de Wasl avec un Soukoûn pur.',
            correctionFr: 'Le petit Sād est le signe de « Silah » (connexion) : il rappelle que la lettre ne sert qu\'à relier et disparaît en continu.'
          }
        ]
      },
      {
        id: 'verbs-third-letter-rule',
        nameFr: '2. La Règle de la 3e Lettre pour les Verbes',
        nameAr: 'حُكْمُ حَرَكَةِ هَمْزَةِ الوَصْلِ فِي الأَفْعَالِ (قَاعِدَةُ الحَرْفِ الثَّالِثِ)',
        mnemonic: '3e lettre Dammah ➔ اُ | 3e lettre Fathah ou Kasrah ➔ اِ (Jamais de Fathah sur un verbe !)',
        letters: ['ٱ'],
        definitionFr: 'Dans le Coran, Hamzat Al-Wasl ne porte aucun Tashkīl. Pour savoir quelle voyelle lui donner lorsque l\'on débute par un verbe, on regarde la voyelle de sa 3e lettre (en comptant Hamzat Al-Wasl comme lettre n°1).',
        mechanismFr: '1 = Hamzat Wasl, 2 = Lettre avec Soukoûn, 3 = Troisième lettre. Si 3 = Dammah originelle (ـُ), prononcez « U » (اُ). Si 3 = Fathah (ـَ) ou Kasrah (ـِ), prononcez « I » (اِ). Un verbe ne commence JAMAIS par une Fathah !',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c6-3',
            arabicText: 'ٱدۡعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلۡحِكۡمَةِ',
            surahAyahRef: '16:125',
            surahNameFr: 'An-Nahl',
            highlightSegment: 'ٱدۡعُ',
            highlightLetter: '1:ٱ, 2:د, 3:عُ ➔ اُدۡعُ',
            ruleApplied: '3e lettre avec Dammah ➔ Attaque en Dammah (Ud\'u)',
            ruleTag: 'izhar',
            explanationFr: 'La 3e lettre (\'Ayn) porte une Dammah originelle. À l\'attaque, Hamzat Al-Wasl prend donc obligatoirement une Dammah : « Ud\'u ».',
            transliteration: 'Ud\'u ilā sabīli rabbika bil-hikmah',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/016125.mp3'
          },
          {
            id: 'ex-c6-4',
            arabicText: 'ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ',
            surahAyahRef: '1:6',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'ٱهۡدِنَا',
            highlightLetter: '1:ٱ, 2:هـ, 3:دِ ➔ اِهۡدِنَا',
            ruleApplied: '3e lettre avec Kasrah ➔ Attaque en Kasrah (Ihdinā)',
            ruleTag: 'izhar',
            explanationFr: 'La 3e lettre (Dāl) porte une Kasrah. À l\'attaque, Hamzat Al-Wasl prend obligatoirement une Kasrah : « Ihdinā ».',
            transliteration: 'Ihdinā-s-sirātal-mustaqīm',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001006.mp3'
          },
          {
            id: 'ex-c6-5',
            arabicText: 'ٱذۡهَبۡ إِلَىٰ فِرۡعَوۡنَ إِنَّهُۥ طَغَىٰ',
            surahAyahRef: '20:24',
            surahNameFr: 'Tā-Hā',
            highlightSegment: 'ٱذۡهَبۡ',
            highlightLetter: '1:ٱ, 2:ذ, 3:هَ ➔ اِذۡهَبۡ',
            ruleApplied: '3e lettre avec Fathah ➔ Attaque en Kasrah (Idh-hab)',
            ruleTag: 'izhar',
            explanationFr: 'La 3e lettre (Hā\') porte une Fathah. Règle absolue : Fathah sur la 3e lettre donne TOUJOURS une Kasrah sur Hamzat Al-Wasl : on prononce « Idh-hab » et JAMAIS « Adh-hab » !',
            transliteration: 'Idh-hab ilā fir\'awna innahū taghā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/020024.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Attaquer un verbe par une Fathah (ex: dire "Adh-hab" au lieu de "Idh-hab").',
            correctionFr: 'C\'est un contresens grammatical majeur : les verbes à l\'impératif ne reçoivent JAMAIS de Fathah sur Hamzat Al-Wasl.'
          },
          {
            trapFr: 'Regarder la 2e lettre au lieu de la 3e lettre.',
            correctionFr: 'La 2e lettre porte obligatoirement un Soukoûn : elle ne vous apprend rien ! C\'est la 3e lettre qui commande toute la règle.'
          }
        ]
      },
      {
        id: 'nouns-definite-indefinite',
        nameFr: '3. Les Noms Définis (ٱلـ) & Indéfinis (ٱسۡمُ, ٱبۡنُ...)',
        nameAr: 'حُكْمُ هَمْزَةِ الوَصْلِ فِي الأَسْمَاءِ المُعَرَّفَةِ وَالمُنَكَّرَةِ',
        mnemonic: 'Article ٱلـ = TOUJOURS FATHAH (اَلـ) | 4 Noms singuliers = TOUJOURS KASRAH (اِ)',
        letters: ['ٱ'],
        definitionFr: 'Pour les noms, la règle est fixe et indépendante de la 3e lettre : tout nom avec l\'article défini ٱلـ s\'attaque avec Fathah. Les noms indéfinis spécifiques du Coran s\'attaquent tous avec Kasrah.',
        mechanismFr: 'Noms définis : « Al-... ». Noms indéfinis : « Ibn », « Imra\'ah », « Ism », « Ithnān » prennent tous une Kasrah pure (« I »).',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c6-6',
            arabicText: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
            surahAyahRef: '1:2',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'ٱلۡحَمۡدُ',
            highlightLetter: 'ٱلـ ➔ اَلۡحَمۡدُ',
            ruleApplied: 'Article défini ➔ Fathah obligatoire (Al-hamdu)',
            ruleTag: 'izhar',
            explanationFr: 'Tout mot débutant par l\'article défini ٱلـ reçoit obligatoirement une Fathah à l\'attaque (« Al-Hamdu »).',
            transliteration: 'Al-hamdu lillāhi rabbil-\'ālamīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001002.mp3'
          },
          {
            id: 'ex-c6-7',
            arabicText: 'مَّسِيحُ عِيسَى ٱبۡنُ مَرۡيَمَ',
            surahAyahRef: '4:171',
            surahNameFr: 'An-Nisā\'',
            highlightSegment: 'ٱبۡنُ',
            highlightLetter: 'ٱبۡنُ ➔ اِبۡنُ (Kasrah)',
            ruleApplied: 'Nom singulier coranique ➔ Kasrah obligatoire (Ibnu)',
            ruleTag: 'izhar',
            explanationFr: 'En continu : « \'Īsa-bnu Maryam ». Mais si l\'on débute sur le mot « Ibn », Hamzat Al-Wasl prend obligatoirement une Kasrah : « Ibnu Maryam ».',
            transliteration: 'Masīhu \'Īsab-nu maryam',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/004171.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Attaquer « ٱسۡمُ رَبِّكَ » avec une Dammah sous prétexte que le Mīm porte une Dammah.',
            correctionFr: '« Ism » est un nom indéfini, pas un verbe ! Il prend impérativement une Kasrah (« Ismu Rabbika »).'
          }
        ]
      },
      {
        id: 'five-verbs-and-two-hamzahs',
        nameFr: '4. Les 5 Verbes d\'Exception & La Rencontre des Deux Hamzahs',
        nameAr: 'الأَفْعَالُ الخَمْسَةُ المُسْتَثْنَاةُ وَاجْتِمَاعُ الهَمْزَتَيْنِ',
        mnemonic: '5 verbes (Ibnū, Iqdū, Imshū, I\'tū, I\'tūnī) = KASRAH ! | ٱئۡتُونِي à l\'attaque = ĪTŪNĪ',
        letters: ['ٱ'],
        definitionFr: 'Cinq verbes coraniques ont une Dammah apparente sur leur 3e lettre mais s\'attaquent TOUS avec une Kasrah car cette Dammah est accidentelle (due au Wāw du pluriel). De plus, lorsque Hamzat Al-Wasl rencontre une Hamzat Qat\' sans voyelle (comme dans « I\'tūnī »), la 2e Hamzah se transforme en Madd à l\'attaque (« Ītūnī »).',
        mechanismFr: '1. « Ibnū », « Imshū », « Iqdū » ➔ prononcez « Ibnū », « Imshū », « Iqdū » avec Kasrah. 2. « ٱئۡتُونِي » ➔ en Wasl : « ...s-samāwāti\'-tūnī » ; à l\'attaque : appliquez le Madd Badal et dites « Ītūnī » (إِيتُونِي) !',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c6-8',
            arabicText: 'قَالُواْ ٱبۡنُواْ لَهُۥ بُنۡيَٰنٗا',
            surahAyahRef: '37:97',
            surahNameFr: 'As-Sāffāt',
            highlightSegment: 'ٱبۡنُواْ',
            highlightLetter: 'نُ = Dammah accidentelle ➔ اِبۡنُواْ',
            ruleApplied: 'Verbe d\'exception (Attaque en Kasrah obligatoire)',
            ruleTag: 'izhar',
            explanationFr: 'Bien que le Nūn porte une Dammah, l\'origine du verbe est « Ibniyū » : la Dammah a été introduite pour le Wāw du pluriel. À l\'attaque, on dit impérativement « Ibnū » avec Kasrah, et JAMAIS « Ubnū » !',
            transliteration: 'Qālūb-nū lahū bunyānā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/037097.mp3'
          },
          {
            id: 'ex-c6-9',
            arabicText: 'أَمۡ لَهُمۡ شِرۡكٞ فِى ٱلسَّمَٰوَٰتِۖ ٱئۡتُونِى بِكِتَٰبٖ',
            surahAyahRef: '46:4',
            surahNameFr: 'Al-Ahqāf',
            highlightSegment: 'ٱئۡتُونِى',
            highlightLetter: 'Wasl: samāwāti\'-tūnī | Ibtidā\': ĪTŪNĪ (إِيتُونِي)',
            ruleApplied: 'Rencontre de deux Hamzahs (Madd Badal à l\'attaque)',
            ruleTag: 'madd',
            explanationFr: 'En continu : Hamzat Wasl saute ➔ « fīs-samāwāti\'-tūnī ». À l\'attaque : Hamzat Wasl prend une Kasrah, et la 2e Hamzah se transforme en voyelle longue Yā\' ➔ « Ītūnī » (إِيتُونِي) !',
            transliteration: 'Am lahum shirkun fīs-samāwāt, Ītūnī bi-kitāb',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/046004.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Attaquer « ٱمۡشُواْ » par « Umshū » en regardant la Dammah du Shīn.',
            correctionFr: 'C\'est une faute de Tajwīd impardonnable : l\'origine est « Imshiyū ». On attaque STRICTEMENT par « Imshū ».'
          },
          {
            trapFr: 'Attaquer « ٱئۡتُونِي » en prononçant une Hamzah saccadée "I\'-tūnī".',
            correctionFr: 'Deux Hamzahs ne peuvent se suivre ainsi à l\'attaque : la seconde se transforme obligatoirement en Madd ➔ « Ītūnī ».'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'exo-c6-1',
        title: 'Verbe vs Nom Défini : Sourate Al-Fātihah (1:2 & 1:6)',
        verseArabic: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ... ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ',
        surahAyahRef: '1:2, 1:6',
        targetSegment: 'ٱلۡحَمۡدُ · ٱهۡدِنَا',
        promptFr: 'Pourquoi « ٱلۡحَمۡدُ » s\'attaque-t-il avec une Fathah (« Al-hamdu ») alors que le verbe « ٱهۡدِنَا » s\'attaque avec une Kasrah (« Ihdinā ») ?',
        hintFr: 'Distinguez la nature grammaticale des deux mots : l\'un possède l\'article de définition, l\'autre est un verbe à l\'impératif.',
        solutionFr: '« Al-Hamdu » est un nom avec l\'article défini ٱلـ (toujours Fathah). « Ihdinā » est un verbe dont la 3e lettre (Dāl) porte une Kasrah (donc Kasrah d\'attaque).',
        breakdownSteps: [
          'Dans « ٱلۡحَمۡدُ » : Le mot commence par l\'article de définition ٱلـ (Lām Ta\'rīf). La règle coranique unanime impose une FATHAH sur Hamzat Al-Wasl ➔ « Al-hamdu ».',
          'Dans « ٱهۡدِنَا » : C\'est un verbe d\'action. On applique la règle de comptage de la 3e lettre.',
          '1 = Hamzat Wasl (ٱ), 2 = Lettre Hā\' sans voyelle (هـۡ), 3 = Lettre Dāl avec Kasrah (دِ).',
          'La 3e lettre portant une Kasrah, Hamzat Al-Wasl prend obligatoirement une KASRAH ➔ « Ihdinā ».'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/001006.mp3'
      },
      {
        id: 'exo-c6-2',
        title: 'Le Chef-d\'Œuvre Phonétique : « Ītūnī » dans Sūrah Al-Ahqāf (46:4)',
        verseArabic: 'أَمۡ لَهُمۡ شِرۡكٞ فِى ٱلسَّمَٰوَٰتِۖ ٱئۡتُونِى بِكِتَٰبٖ مِّن قَبۡلِ هَٰذَآ',
        surahAyahRef: '46:4',
        targetSegment: 'فِى ٱلسَّمَٰوَٰتِۖ ٱئۡتُونِى',
        promptFr: 'Comment récitez-vous « ٱئۡتُونِى » en liaison continue après « As-Samāwāt », et comment le récitez-vous si vous reprenez votre souffle sur ce mot ?',
        hintFr: 'En continu, Hamzat Al-Wasl s\'élide. À l\'attaque, deux Hamzahs se rencontrent : appliquez la règle de substitution (Badal).',
        solutionFr: 'En continu : « fīs-samāwāti\'-tūnī ». À l\'attaque : « Ītūnī » (إِيتُونِي) avec prolongation Yā\' de 2 temps.',
        breakdownSteps: [
          'En lecture continue (Wasl) : Hamzat Al-Wasl tombe totalement. La Kasrah du Tā\' précédent s\'enchaîne directement sur la Hamzah Sākinah ➔ « fīs-samāwāti\'-tūnī ».',
          'À l\'arrêt et reprise sur « ٱئۡتُونِى » : C\'est l\'un des 5 verbes d\'exception. Hamzat Al-Wasl prend une KASRAH (« I »).',
          'Deux Hamzahs se retrouvent côte à côte au début du mot : la première avec Kasrah (إِ) et la seconde avec Soukoûn (ئْ).',
          'La phonétique arabe interdit cette lourdeur : la 2e Hamzah se transmute en une lettre de Madd homogène (Yā\') ➔ on prononce « ĪTŪNĪ » (إِيتُونِي) !'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/046004.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c6-1',
        type: 'mcq',
        promptFr: 'Quelle est la différence essentielle entre Hamzat Al-Qat\' (ء) et Hamzat Al-Wasl (ٱ) lors de la lecture continue (Wasl) ?',
        verseArabic: 'فَمَنۡ حَجَّ ٱلۡبَيۡتَ أَوِ ٱعۡتَمَرَ',
        targetWord: 'ٱلۡبَيۡتَ',
        surahAyahRef: '2:158',
        options: [
          'Hamzat Al-Qat\' est toujours prononcée, tandis que Hamzat Al-Wasl s\'efface et disparaît totalement en continu',
          'Hamzat Al-Wasl dure 6 temps et Hamzat Al-Qat\' dure 2 temps',
          'Hamzat Al-Wasl ne se prononce que le vendredi',
          'Il n\'y a aucune différence, elles se lisent exactement pareil'
        ],
        correctAnswer: 'Hamzat Al-Qat\' est toujours prononcée, tandis que Hamzat Al-Wasl s\'efface et disparaît totalement en continu',
        explanationFr: 'Hamzat Al-Qat\' est une consonne fondamentale toujours prononcée. Hamzat Al-Wasl n\'est qu\'un pont phonétique : dès qu\'on lit en continu depuis un mot précédent, elle s\'annule complètement.',
        ruleId: 'hamzat-qat-vs-wasl'
      },
      {
        id: 'q-c6-2',
        type: 'mcq',
        promptFr: 'Si vous devez commencer votre récitation par le verbe « ٱدۡعُ » (16:125), quelle voyelle devez-vous donner à Hamzat Al-Wasl et pourquoi ?',
        verseArabic: 'ٱدۡعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلۡحِكۡمَةِ',
        targetWord: 'ٱدۡعُ',
        surahAyahRef: '16:125',
        options: [
          'Une Dammah (« Ud\'u ») car la 3e lettre (\'Ayn) porte une Dammah originelle',
          'Une Fathah (« Ad\'u ») comme tous les mots arabes',
          'Une Kasrah (« Id\'u ») obligatoirement',
          'Aucune voyelle, on commence par un Soukoûn'
        ],
        correctAnswer: 'Une Dammah (« Ud\'u ») car la 3e lettre (\'Ayn) porte une Dammah originelle',
        explanationFr: 'Dans les verbes, on regarde la 3e lettre : le \'Ayn portant une Dammah originelle (عُ), Hamzat Al-Wasl prend obligatoirement une Dammah ➔ « Ud\'u ».',
        ruleId: 'verbs-third-letter-rule'
      },
      {
        id: 'q-c6-3',
        type: 'mcq',
        promptFr: 'Quelle voyelle reçoit Hamzat Al-Wasl au début du verbe « ٱذۡهَبۡ » (20:24) dont la 3e lettre porte une FATHAH ?',
        verseArabic: 'ٱذۡهَبۡ إِلَىٰ فِرۡعَوۡنَ إِنَّهُۥ طَغَىٰ',
        targetWord: 'ٱذۡهَبۡ',
        surahAyahRef: '20:24',
        options: [
          'Une Kasrah (« Idh-hab ») : les verbes dont la 3e lettre a une Fathah ou une Kasrah s\'attaquent toujours en Kasrah',
          'Une Fathah (« Adh-hab »)',
          'Une Dammah (« Udh-hab »)',
          'On ne peut jamais commencer par ce mot'
        ],
        correctAnswer: 'Une Kasrah (« Idh-hab ») : les verbes dont la 3e lettre a une Fathah ou une Kasrah s\'attaquent toujours en Kasrah',
        explanationFr: 'Un verbe à l\'impératif ne commence JAMAIS par une Fathah en arabe ! Si la 3e lettre a une Fathah (هَ), Hamzat Al-Wasl reçoit impérativement une Kasrah ➔ « Idh-hab ».',
        ruleId: 'verbs-third-letter-rule'
      },
      {
        id: 'q-c6-4',
        type: 'mcq',
        promptFr: 'Pourquoi les verbes comme « ٱبۡنُواْ » et « ٱمۡشُواْ » s\'attaquent-ils avec une KASRAH (« Ibnū », « Imshū ») malgré la Dammah visible sur leur 3e lettre ?',
        verseArabic: 'قَالُواْ ٱبۡنُواْ لَهُۥ بُنۡيَٰنٗا',
        targetWord: 'ٱبۡنُواْ',
        surahAyahRef: '37:97',
        options: [
          'Parce que cette Dammah est accidentelle (due au Wāw du pluriel) et que la voyelle originelle de la racine est une Kasrah',
          'Parce que ce sont des noms propres',
          'Parce que le scribe du Coran a fait une erreur',
          'Parce qu\'ils sont situés à la fin de la sourate'
        ],
        correctAnswer: 'Parce que cette Dammah est accidentelle (due au Wāw du pluriel) et que la voyelle originelle de la racine est une Kasrah',
        explanationFr: 'Ces 5 verbes ont pour origine « Ibniyū » et « Imshiyū ». La Dammah n\'est pas originelle, elle a été adoptée pour faciliter la prononciation du Wāw pluriel. L\'attaque se fait donc en Kasrah.',
        ruleId: 'five-verbs-and-two-hamzahs'
      },
      {
        id: 'q-c6-5',
        type: 'mcq',
        promptFr: 'Dans la sourate Al-Ahqāf (46:4), comment doit-on prononcer le mot « ٱئۡتُونِى » si l\'on s\'arrête sur le verset précédent et que l\'on commence par ce mot ?',
        verseArabic: 'أَمۡ لَهُمۡ شِرۡكٞ فِى ٱلسَّمَٰوَٰتِۖ ٱئۡتُونِى بِكِتَٰبٖ',
        targetWord: 'ٱئۡتُونِى',
        surahAyahRef: '46:4',
        options: [
          'On prononce « ĪTŪNĪ » (إِيتُونِي) : la 2e Hamzah se transmute en lettre de Madd Yā\' de 2 temps',
          'On prononce « I\'-tūnī » avec un arrêt de gorge saccadé',
          'On prononce « U\'tūnī » avec une Dammah',
          'Il est strictement interdit de commencer par ce mot'
        ],
        correctAnswer: 'On prononce « ĪTŪNĪ » (إِيتُونِي) : la 2e Hamzah se transmute en lettre de Madd Yā\' de 2 temps',
        explanationFr: 'À l\'attaque, deux Hamzahs se rencontrent (I + \'). La règle phonétique universelle de substitution (Badal) transforme la Hamzah Sākinah en voyelle longue homogène ➔ « Ītūnī » !',
        ruleId: 'five-verbs-and-two-hamzahs'
      }
    ]
  },
  // ==========================================
  // CHAPITRE 7 : LES RÈGLES DE LA LĀM SĀKINAH
  // ==========================================
  {
    id: 'chap-7',
    number: 7,
    slug: 'lam-sakinah',
    titleFr: 'Les Règles de la Lām Sākinah',
    titleAr: 'أَحْكَامُ اللَّامِ السَّاكِنَةِ',
    category: 'intermediate',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Maîtriser la prononciation du Lām sans voyelle (لْ) dans le Coran : la Lām Qamariyyah (claire avec Soukoûn), la Lām Shamsiyyah (fondue dans la consonne suivante avec Shaddah), l\'emphase et l\'amincissement sacrés du Nom d\'Allah (Lafz Al-Jalālah), ainsi que la Lām du verbe et de la particule.',
    infographicPoints: [
      'Lām Qamariyyah (14 lettres) : Mnémonique « إِبۡغِ حَجَّكَ وَخَفۡ عَقِيمَهُ » (Izhār Qamarī). La Lām porte un Soukoûn visible (لۡ) et se prononce distinctement avec Tawassut (ٱلۡقَمَرِ, ٱلۡبَيۡتِ, ٱلۡحَمۡدُ).',
      'Lām Shamsiyyah (14 lettres) : Mnémonique « طِبۡ ثُمَّ صِلۡ... ». La Lām est nue (sans voyelle) et s\'assimile totalement (Idghām Shamsī) dans la lettre suivante qui porte une Shaddah (ٱلشَّمۡسِ ➔ Ash-shams).',
      'Le Double Effacement en Wasl (وَٱلشَّمۡسِ) : En continu, Hamzat Al-Wasl s\'élide ET la Lām Shamsiyyah disparaît ! On passe directement du Wāw au Shīn avec Shaddah : « Wash-shams ».',
      'Lām de Lafz Al-Jalālah (ٱللَّه) : Emphatique/Lourde (Tafkhīm) après Fathah (قَالَ ٱللَّهُ), Dammah (عَبۡدُ ٱللَّهِ) ou à l\'attaque. Amincie/Légère (Tarqīq) après Kasrah (بِسۡمِ ٱللَّهِ, لِلَّهِ) ou Tanwīn en Wasl (أَحَدٌ ٱللَّهُ ➔ Ahaduni-llāh).',
      'Lām du Verbe (Lām Al-Fi\'l) & Particule (Harf) : Toujours prononcée avec clarté (Izhār) comme dans « Qul na\'am » et « Anzalnā », SAUF si elle rencontre un Lām (Qul-lakum) ou un Râ\' (Qur-rabbi, Bal-rafa\'ahu) où elle fusionne totalement !'
    ],
    subrules: [
      {
        id: 'lam-qamariyyah',
        nameFr: '1. Lām Qamariyyah (اللَّامُ القَمَرِيَّةُ) — Izhār Qamarī',
        nameAr: 'اللَّامُ القَمَرِيَّةُ وَالإِظْهَارُ القَمَرِيُّ',
        mnemonic: 'إِبۡغِ حَجَّكَ وَخَفۡ عَقِيمَهُ (14 lettres de la Lune)',
        letters: ['ء', 'ب', 'غ', 'ح', 'ج', 'ك', 'و', 'خ', 'ف', 'ع', 'ق', 'ي', 'م', 'هـ'],
        definitionFr: 'Lorsque l\'article défini (ٱلـ) précède l\'une des 14 lettres lunaires, la lettre Lām est prononcée de manière claire et limpide (Izhār Qamarī). Dans le Mushaf, elle est surmontée du symbole classique du Soukoûn (لۡ).',
        mechanismFr: 'Appuyez la pointe de la langue contre les gencives supérieures et maintenez le son Lām pendant la durée de Tawassut (modérée, sans coupure sèche ni prolongation excessive), puis enchaînez naturellement sur la lettre lunaire.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c7-qam-1',
            arabicText: 'ٱقۡتَرَبَتِ ٱلسَّاعَةُ وَٱنشَقَّ ٱلۡقَمَرُ',
            surahAyahRef: '54:1',
            surahNameFr: 'Al-Qamar',
            highlightSegment: 'ٱلۡقَمَرُ',
            highlightLetter: 'لۡ + ق',
            ruleApplied: 'Lām Qamariyyah (Izhār Qamarī)',
            ruleTag: 'izhar',
            explanationFr: 'La Lām porte un Soukoûn visible et précède la lettre Qāf (lettre lunaire). Elle est prononcée nettement sans vibration parasite ni pause.',
            transliteration: 'Al-Qamar',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/054001.mp3'
          },
          {
            id: 'ex-c7-qam-2',
            arabicText: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
            surahAyahRef: '1:2',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'ٱلۡحَمۡدُ · ٱلۡعَٰلَمِينَ',
            highlightLetter: 'لۡ + ح · لۡ + ع',
            ruleApplied: 'Lām Qamariyyah (Izhār Qamarī)',
            ruleTag: 'izhar',
            explanationFr: 'Dans « Al-Hamd » et « Al-\'Ālamīn », la Lām précède le Hā\' et le \'Ayn (deux lettres lunaires de la gorge) : elle est clairement vocalisée.',
            transliteration: 'Al-hamdu lillāhi rabbi-l-\'ālamīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001002.mp3'
          },
          {
            id: 'ex-c7-qam-3',
            arabicText: 'وَإِذۡ جَعَلۡنَا ٱلۡبَيۡتَ مَثَابَةٗ لِّلنَّاسِ',
            surahAyahRef: '2:125',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'ٱلۡبَيۡتَ',
            highlightLetter: 'لۡ + ب',
            ruleApplied: 'Lām Qamariyyah (Izhār Qamarī)',
            ruleTag: 'izhar',
            explanationFr: 'La lettre Bā\' fait partie de la formule mnémonique lunaire (إِبۡغِ...). La Lām conserve son Soukoûn et se prononce distinctement en liaison : « Ja\'alna-l-bayta ».',
            transliteration: 'Al-Bayt',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002125.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Faire une Qalqalah (rebond) sur la Lām en disant « Ala-qamar » ou « Ala-hamdu ».',
            correctionFr: 'La Lām n\'est pas une lettre de Qalqalah : stabilisez la pointe de la langue contre le palais sans la détacher brusquement.'
          },
          {
            trapFr: 'Associer la Lām au son Jīm en l\'assimilant à tort (dire "Aj-jannah" au lieu de "Al-Jannah").',
            correctionFr: 'Le Jīm (ج) est une lettre lunaire (dans حَجَّكَ) : la Lām doit obligatoirement être audible et séparée (« Al-Jannah »).'
          }
        ]
      },
      {
        id: 'lam-shamsiyyah',
        nameFr: '2. Lām Shamsiyyah (اللَّامُ الشَّمْسِيَّةُ) — Idghām Shamsī',
        nameAr: 'اللَّامُ الشَّمْسِيَّةُ وَالإِدْغَامُ الشَّمْسِيُّ',
        mnemonic: 'طِبۡ ثُمَّ صِلۡ رَحِمًا تَفُزۡ ضِفۡ ذَا نِعَمۡ * دَعۡ سُوءَ ظَنٍّ زُرۡ شَرِيفًا لِلۡكَرَمۡ',
        letters: ['ط', 'ث', 'ص', 'ر', 'ت', 'ض', 'ذ', 'ن', 'د', 'س', 'ظ', 'ز', 'ش', 'ل'],
        definitionFr: 'Lorsque l\'article défini (ٱلـ) précède l\'une des 14 lettres solaires, la Lām s\'assimile complètement dans la consonne suivante. Dans le Mushaf, la Lām est dépourvue de tout signe (nue) et la lettre suivante porte une Shaddah (ّ).',
        mechanismFr: 'La langue ne touche pas le point d\'articulation du Lām : la voix se projette directement sur la lettre solaire avec une tension musculaire marquant le dédoublement de la Shaddah.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c7-sham-1',
            arabicText: 'وَٱلشَّمۡسِ وَضُحَىٰهَا',
            surahAyahRef: '91:1',
            surahNameFr: 'Ash-Shams',
            highlightSegment: 'وَٱلشَّمۡسِ',
            highlightLetter: 'ل + شّ',
            ruleApplied: 'Lām Shamsiyyah (Idghām Shamsī en liaison)',
            ruleTag: 'silent',
            explanationFr: 'En lecture continue, Hamzat Wasl ET la Lām Shamsiyyah sont muettes ! On prononce « Wash-shams », la voix enchaînant directement du Wāw au Shīn doublé.',
            transliteration: 'Wash-shamsi wa duhāhā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/091001.mp3'
          },
          {
            id: 'ex-c7-sham-2',
            arabicText: 'مَٰلِكِ يَوۡمِ ٱلدِّينِ',
            surahAyahRef: '1:4',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'ٱلدِّينِ',
            highlightLetter: 'ل + دّ',
            ruleApplied: 'Lām Shamsiyyah (Idghām Shamsī)',
            ruleTag: 'silent',
            explanationFr: 'La lettre Dāl est solaire : la Lām est silencieuse et fond dans le Dāl avec Shaddah. On prononce « Yawmi-d-Dīn ».',
            transliteration: 'Māliki yawmi-d-dīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001004.mp3'
          },
          {
            id: 'ex-c7-sham-3',
            arabicText: 'قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ',
            surahAyahRef: '114:1',
            surahNameFr: 'An-Nās',
            highlightSegment: 'ٱلنَّاسِ',
            highlightLetter: 'ل + نّ',
            ruleApplied: 'Lām Shamsiyyah avec Ghunnah 2 temps',
            ruleTag: 'ghunnah',
            explanationFr: 'Cas particulier : la fusion de la Lām dans le Nūn solaire crée un Nūn Mushaddadah (نّ), imposant une Ghunnah nasale obligatoire de 2 temps pleins !',
            transliteration: 'Bi-rabbi-n-nās',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/114001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Prononcer la Lām solaire en disant « Al-Shams » ou « Al-Dīn ».',
            correctionFr: 'C\'est un Lahn Jalī : la Lām solaire s\'annule entièrement au profit de la consonne doublée (« Ash-Shams », « Ad-Dīn »).'
          },
          {
            trapFr: 'Oublier les 2 temps de Ghunnah sur « An-Nās » (ٱلنَّاسِ) après l\'assimilation.',
            correctionFr: 'Tout Nūn portant une Shaddah exige 2 temps de résonance nasale incompressibles dans la cavité nasale.'
          }
        ]
      },
      {
        id: 'lam-lafz-al-jalalah',
        nameFr: '3. Lām de Lafz Al-Jalālah (لَامُ لَفْظِ الجَلَالَةِ ٱللَّه)',
        nameAr: 'أَحْكَامُ لَامِ لَفْظِ الجَلَالَةِ (تَفْخِيمٌ وَتَرْقِيقٌ)',
        mnemonic: 'Fathah (ـَ) / Dammah (ـُ) = Emphase LOURDE (Tafkhīm) | Kasrah (ـِ) = Minceur LÉGÈRE (Tarqīq)',
        letters: ['ل'],
        definitionFr: 'La lettre Lām est à l\'origine toujours mince (Tarqīq) en langue arabe. La seule exception réside dans le Nom Majestueux d\'Allah (ٱللَّه) et Allahumma (ٱللَّهُمَّ) : elle devient lourde et majestueuse (Tafkhīm) si elle est précédée d\'une Fathah ou d\'une Dammah, ou lorsqu\'on débute la lecture par ce Nom. Elle redevient fine et douce (Tarqīq) si elle est précédée d\'une Kasrah.',
        mechanismFr: 'Pour le Tafkhīm : élevez l\'arrière de la langue vers le voile du palais et remplissez la cavité buccale de résonance (sans projeter ni arrondir les lèvres en O !). Pour le Tarqīq : aplatissez la langue au fond de la bouche comme pour un léger sourire intérieur.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c7-jal-1',
            arabicText: 'قَالَ ٱللَّهُ إِنِّى مُنَزِّلُهَا عَلَيۡكُمۡ',
            surahAyahRef: '5:115',
            surahNameFr: 'Al-Mā\'idah',
            highlightSegment: 'قَالَ ٱللَّهُ',
            highlightLetter: 'ـَ + ٱللَّهُ',
            ruleApplied: 'Tafkhīm de Lafz Al-Jalālah (Précédé de Fathah)',
            ruleTag: 'heavy',
            explanationFr: 'Le Lām de « Qāla » porte une Fathah : le Nom d\'Allah résonne avec une emphase puissante et majestueuse (« Qāla-llāhu »).',
            transliteration: 'Qāla-llāhu',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/005115.mp3'
          },
          {
            id: 'ex-c7-jal-2',
            arabicText: 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ',
            surahAyahRef: '1:1',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'بِسۡمِ ٱللَّهِ',
            highlightLetter: 'ـِ + ٱللَّهِ',
            ruleApplied: 'Tarqīq de Lafz Al-Jalālah (Précédé de Kasrah)',
            ruleTag: 'izhar',
            explanationFr: 'Le Mīm de « Bismi » porte une Kasrah : le Lām d\'Allah est prononcé avec une finesse et une douceur absolues (« Bismi-llāhi »).',
            transliteration: 'Bismi-llāhir-Rahmānir-Rahīm',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001001.mp3'
          },
          {
            id: 'ex-c7-jal-3',
            arabicText: 'قُلۡ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ',
            surahAyahRef: '112:1-2',
            surahNameFr: 'Al-Ikhlās',
            highlightSegment: 'أَحَدٌ ٱللَّهُ',
            highlightLetter: 'ـٌ + ٱللَّهُ',
            ruleApplied: 'Tarqīq exceptionnel par rupture de double soukoûn',
            ruleTag: 'izhar',
            explanationFr: 'En reliant les versets 1 et 2 en continu : le Tanwīn (Nūn sākin) rencontre Hamzat Wasl. Pour briser la rencontre de deux Soukoûns, le Tanwīn prend une Kasrah accidentelle ➔ on récite « Ahaduni-llāhus-Samad » avec un Lām aminci (Tarqīq) !',
            transliteration: 'Qul huwa-llāhu ahad. Allāhus-Samad',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/112001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Arrondir les lèvres en avant pour rendre le Nom d\'Allah lourd (dire "Ollāh").',
            correctionFr: 'L\'emphase (Tafkhīm) provient uniquement de l\'élévation de l\'arrière de la langue : les lèvres restent totalement neutres.'
          },
          {
            trapFr: 'Garder le Lām lourd dans « Bismi-llāh » par habitude.',
            correctionFr: 'Toute Kasrah précédente impose impérativement un Lām mince (Tarqīq) : dites « Bismi-llāh » avec douceur.'
          }
        ]
      },
      {
        id: 'lam-al-fil-wal-harf',
        nameFr: '4. Lām du Verbe, de la Particule & du Nom (Fi\'l, Harf, Ism, Amr)',
        nameAr: 'لَامُ الفِعْلِ وَالحَرْفِ وَالاسْمِ وَالأَمْرِ',
        mnemonic: 'Devant Lām (ل) ou Râ\' (ر) = IDGHĀM (Fusion) | Devant les 26 autres lettres = IZHĀR (Clarté)',
        letters: ['ل', 'ر'],
        definitionFr: 'La Lām Sākinah présente dans un verbe (Lām Al-Fi\'l : قُلۡ, أَنزَلۡنَا) ou dans une particule (Lām Al-Harf : بَلۡ, هَلۡ) doit obligatoirement être prononcée avec clarté (Izhār) devant 26 lettres de l\'alphabet. Elle ne fusionne (Idghām) que devant deux lettres spécifiques : le Lām (par identité - Tamāthul) et le Râ\' (par proximité - Taqārub). La Lām interne d\'un nom (Lām Al-Ism) ou de l\'ordre (Lām Al-Amr) est toujours prononcée avec clarté (Izhār).',
        mechanismFr: 'Pour l\'Izhār sur « Qul na\'am » : marquez le contact de la langue pour la Lām sans la faire rebondir, puis passez au Nūn. Pour l\'Idghām sur « Qur-rabbi » : sautez la Lām et prononcez directement un Râ\' fort doublé d\'une Shaddah.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c7-fil-1',
            arabicText: 'قُلۡ نَعَمۡ وَأَنتُمۡ دَاخِرُونَ',
            surahAyahRef: '37:18',
            surahNameFr: 'As-Sāffāt',
            highlightSegment: 'قُلۡ نَعَمۡ',
            highlightLetter: 'لۡ + ن',
            ruleApplied: 'Izhār obligatoire de Lām Al-Fi\'l',
            ruleTag: 'izhar',
            explanationFr: 'La Lām du verbe impératif « Qul » rencontre un Nūn : elle doit être prononcée avec une parfaite netteté sans rebond parasite ni assimilation.',
            transliteration: 'Qul na\'am wa antum dākhirūn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/037018.mp3'
          },
          {
            id: 'ex-c7-fil-2',
            arabicText: 'وَقُل رَّبِّ أَدۡخِلۡنِى مُدۡخَلَ صِدۡقٖ',
            surahAyahRef: '17:80',
            surahNameFr: 'Al-Isrā\'',
            highlightSegment: 'وَقُل رَّبِّ',
            highlightLetter: 'ل + رّ',
            ruleApplied: 'Idghām complet de Lām dans le Râ\'',
            ruleTag: 'silent',
            explanationFr: 'La Lām du verbe rencontre la lettre Râ\' (proximité de point d\'articulation) : la Lām est totalement engloutie et l\'on prononce « Wa Qur-rabbi » avec un Râ\' doublé.',
            transliteration: 'Wa qur-rabbi adkhilnī',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/017080.mp3'
          },
          {
            id: 'ex-c7-fil-3',
            arabicText: 'بَل رَّفَعَهُ ٱللَّهُ إِلَيۡهِ',
            surahAyahRef: '4:158',
            surahNameFr: 'An-Nisā\'',
            highlightSegment: 'بَل رَّفَعَهُ',
            highlightLetter: 'ل + رّ',
            ruleApplied: 'Idghām de Lām Al-Harf',
            ruleTag: 'silent',
            explanationFr: 'La Lām de la particule « Bal » fusionne dans le Râ\' qui la suit : on prononce « Bar-rafa\'ahu-llāhu » sans aucune trace de Lām.',
            transliteration: 'Bar-rafa\'ahu-llāhu ilayh',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/004158.mp3'
          },
          {
            id: 'ex-c7-fil-4',
            arabicText: 'إِنَّآ أَنزَلۡنَٰهُ فِى لَيۡلَةِ ٱلۡقَدۡرِ',
            surahAyahRef: '97:1',
            surahNameFr: 'Al-Qadr',
            highlightSegment: 'أَنزَلۡنَٰهُ',
            highlightLetter: 'لۡ + ن',
            ruleApplied: 'Izhār de Lām Al-Fi\'l au milieu d\'un verbe',
            ruleTag: 'izhar',
            explanationFr: 'Lām médiane dans le verbe « Anzalnā » suivie de Nūn : clarté absolue requise. Ne jamais fusionner en disant « Anzannā » !',
            transliteration: 'Innā anzalnāhu fī laylati-l-qadr',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/097001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Fusionner par erreur la Lām dans le Nūn dans « Anzalnā » en disant "Anzannā".',
            correctionFr: 'C\'est une faute de prononciation majeure : seule la rencontre Lām-Lām ou Lām-Râ\' autorise l\'Idghām. Devant le Nūn, la Lām doit rester 100% audible.'
          },
          {
            trapFr: 'Faire une Qalqalah sur « Qul » en détachant brutalement la langue (dire "Qula-na\'am").',
            correctionFr: 'Maintenez la langue fermement plaquée le temps de Tawassut (durée intermédiaire) sans relâcher brusquement le souffle.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'ex-c7-g1',
        title: 'Distinguer Lām Shamsiyyah et Qamariyyah dans Sourate Ash-Shams (91:1-2)',
        verseArabic: 'وَٱلشَّمۡسِ وَضُحَىٰهَا ۝ وَٱلۡقَمَرِ إِذَا تَلَىٰهَا',
        surahAyahRef: '91:1-2',
        targetSegment: 'وَٱلشَّمۡسِ · وَٱلۡقَمَرِ',
        promptFr: 'Analysez le comportement de la lettre Lām dans « Wash-Shams » par rapport à « Wal-Qamar » lors d\'une récitation fluide.',
        hintFr: 'Observez la présence ou l\'absence du signe de Soukoûn au-dessus de la Lām et la présence d\'une Shaddah sur la consonne suivante.',
        solutionFr: 'Dans « Wash-Shams », la Lām est solaire (Shamsiyyah) : en continu, Hamzat Wasl et la Lām disparaissent toutes les deux, on saute directement du Wāw au Shīn avec Shaddah (« Wash-shams »). Dans « Wal-Qamar », la Lām est lunaire (Qamariyyah) : Hamzat Wasl s\'élide mais la Lām porte un Soukoûn visible et se prononce distinctement (« Wal-qamar ») !',
        breakdownSteps: [
          'Étape 1 : Observez le mot « وَٱلشَّمۡسِ » — la Lām n\'a aucun signe et le Shīn porte une Shaddah (ّ). C\'est une Lām Shamsiyyah.',
          'Étape 2 : En continu depuis « Wa », Hamzat Wasl tombe ET la Lām Shamsiyyah s\'efface ➔ prononciation « Wash-shams ».',
          'Étape 3 : Observez le mot « وَٱلۡقَمَرِ » — la Lām porte la tête de Khā\' miniature (Soukoûn لۡ) et le Qāf n\'a pas de Shaddah. C\'est une Lām Qamariyyah.',
          'Étape 4 : En continu, seule Hamzat Wasl tombe : le Lām résonne clairement avec Tawassut ➔ « Wal-qamar ».'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/091001.mp3'
      },
      {
        id: 'ex-c7-g2',
        title: 'Le mystère de Lafz Al-Jalālah dans la Sourate Al-Ikhlās (112:1-2)',
        verseArabic: 'قُلۡ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ',
        surahAyahRef: '112:1-2',
        targetSegment: 'هُوَ ٱللَّهُ · أَحَدٌ ٱللَّهُ',
        promptFr: 'Pourquoi le Lām du Nom d\'Allah est-il lourd (Tafkhīm) dans « Huwa-llāh », mais devient-il léger (Tarqīq) si l\'on enchaîne le verset 1 avec le verset 2 ?',
        hintFr: 'Rappelez-vous quelle voyelle précède immédiatement le Nom d\'Allah dans chaque situation, en appliquant la règle de rupture du double Soukoûn sur le Tanwīn.',
        solutionFr: 'Dans « Huwa-llāh », le Nom d\'Allah est précédé par la Fathah du Wāw : la Lām est donc lourde et majestueuse (Tafkhīm). En revanche, lorsqu\'on lie « Ahadun » avec « Allāh », le Tanwīn (Nūn sākin) rencontre Hamzat Wasl (Soukoûn) : pour éviter l\'affrontement de deux Soukoûns, la règle grammaticale impose d\'attribuer une Kasrah accidentelle au Tanwīn (Ahaduni). Cette Kasrah contraint le Lām d\'Allah à devenir doux et aminci (Tarqīq) : on prononce « Ahaduni-llāhus-Samad » !',
        breakdownSteps: [
          'Étape 1 : Dans « Huwa-llāh », la voyelle précédente est une Fathah (ـَ) ➔ Tafkhīm lourd obligatoire.',
          'Étape 2 : À la fin du verset 1, « Ahadun » (أَحَدٌ) se termine par un Tanwīn, soit phonétiquement le son « N » sans voyelle (نْ).',
          'Étape 3 : Le début du verset 2 commence par Hamzat Wasl suivie d\'un Soukoûn sur la Lām. Deux Soukoûns consécutifs sont interdits en phonétique arabe.',
          'Étape 4 : La règle d\'Iltiqā\' As-Sākinayn brise cette collision en vocalisant le Nūn avec une Kasrah (نِ).',
          'Étape 5 : Comme le Nom d\'Allah est désormais précédé d\'une Kasrah, sa Lām s\'amincit obligatoirement (Tarqīq) ➔ « Ahaduni-llāh » !'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/112001.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c7-1',
        type: 'mcq',
        promptFr: 'Quelle phrase mnémotechnique réunit la totalité des 14 lettres lunaires (Lām Qamariyyah) ?',
        verseArabic: 'إِبۡغِ حَجَّكَ وَخَفۡ عَقِيمَهُ',
        options: [
          '« إِبۡغِ حَجَّكَ وَخَفۡ عَقِيمَهُ » (ء, ب, غ, ح, ج, ك, و, خ, ف, ع, ق, ي, م, هـ)',
          '« يَرۡمَلُونَ » (ي, ر, م, ل, و, ن)',
          '« قُطۡبُ جَدٍّ » (ق, ط, ب, ج, د)',
          '« طِبۡ ثُمَّ صِلۡ رَحِمًا تَفُزۡ »'
        ],
        correctAnswer: '« إِبۡغِ حَجَّكَ وَخَفۡ عَقِيمَهُ » (ء, ب, غ, ح, ج, ك, و, خ, ف, ع, ق, ي, م, هـ)',
        explanationFr: 'Ces 14 lettres rassemblées dans cette célèbre formule provoquent l\'Izhār Qamarī : la Lām reste audible avec son Soukoûn.',
        ruleId: 'lam-qamariyyah'
      },
      {
        id: 'q-c7-2',
        type: 'mcq',
        promptFr: 'Comment reconnaître immédiatement dans la graphie du Mushaf une Lām Shamsiyyah (solaire) ?',
        verseArabic: 'ٱلشَّمۡسُ وَٱلۡقَمَرُ',
        options: [
          'La Lām est nue (sans aucun signe au-dessus) et la lettre suivante porte une Shaddah (ّ)',
          'La Lām porte un petit Soukoûn en forme de tête de Khā\' (لۡ)',
          'La Lām porte une petite vaguelette de prolongation (~)',
          'La Lām est écrite en rouge avec un petit point vert en dessous'
        ],
        correctAnswer: 'La Lām est nue (sans aucun signe au-dessus) et la lettre suivante porte une Shaddah (ّ)',
        explanationFr: 'Dans le Rasm \'Uthmānī, une consonne assimilée est toujours dépouillée de tout signe (nue), et la consonne qui l\'absorbe reçoit une Shaddah pour indiquer le dédoublement.',
        ruleId: 'lam-shamsiyyah'
      },
      {
        id: 'q-c7-3',
        type: 'mcq',
        promptFr: 'En lisant en continu le début de la Sourate Ash-Shams « وَٱلشَّمۡسِ » (91:1), comment s\'effectue la prononciation exacte ?',
        verseArabic: 'وَٱلشَّمۡسِ وَضُحَىٰهَا',
        surahAyahRef: '91:1',
        options: [
          '« Wash-shams » : Hamzat Wasl ET la Lām Shamsiyyah sont toutes deux totalement muettes',
          '« Wal-shams » : on prononce la Lām clairement',
          '« Wa-al-shams » : on marque un coup de glotte sur la Hamzah',
          '« Wa-ish-shams » : on ajoute une Kasrah sous la Hamzah'
        ],
        correctAnswer: '« Wash-shams » : Hamzat Wasl ET la Lām Shamsiyyah sont toutes deux totalement muettes',
        explanationFr: 'C\'est le piège classique du double effacement : Hamzat Wasl tombe en liaison continue, et la Lām solaire disparaît par Idghām. On passe directement de la voyelle du Wāw au Shīn avec Shaddah.',
        ruleId: 'lam-shamsiyyah'
      },
      {
        id: 'q-c7-4',
        type: 'mcq',
        promptFr: 'Dans « بِسۡمِ ٱللَّهِ », pourquoi la Lām du Nom d\'Allah est-elle prononcée avec finesse et amincissement (Tarqīq) ?',
        verseArabic: 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ',
        surahAyahRef: '1:1',
        options: [
          'Parce qu\'elle est précédée d\'une Kasrah (ـِ) sous le Mīm de « Bismi »',
          'Parce que le Nom d\'Allah est toujours mince en toutes circonstances',
          'Parce que le Nom d\'Allah est suivi du mot Ar-Rahmān',
          'Parce qu\'il y a une règle de Waqf obligatoire'
        ],
        correctAnswer: 'Parce qu\'elle est précédée d\'une Kasrah (ـِ) sous le Mīm de « Bismi »',
        explanationFr: 'La règle de Lafz Al-Jalālah est stricte : si la consonne précédente porte une Kasrah (originale ou accidentelle), la Lām devient obligatoirement Muraqqaqah (fine/mince).',
        ruleId: 'lam-lafz-al-jalalah'
      },
      {
        id: 'q-c7-5',
        type: 'mcq',
        promptFr: 'Dans le verset « وَقُل رَّبِّ » (17:80), quel phénomène subit la Lām du verbe « Qul » ?',
        verseArabic: 'وَقُل رَّبِّ أَدۡخِلۡنِى مُدۡخَلَ صِدۡقٖ',
        surahAyahRef: '17:80',
        options: [
          'Elle s\'assimile totalement dans le Râ\' (Idghām par proximité - Taqārub) ➔ on prononce « Qur-rabbi »',
          'Elle se prononce clairement avec un rebond de Qalqalah ➔ « Qula-rabbi »',
          'Elle se transforme en Nūn avec Ghunnah de 2 temps ➔ « Qun-rabbi »',
          'Elle est prolongée de 6 temps de Madd Lāzim'
        ],
        correctAnswer: 'Elle s\'assimile totalement dans le Râ\' (Idghām par proximité - Taqārub) ➔ on prononce « Qur-rabbi »',
        explanationFr: 'La Lām de verbe (Lām Al-Fi\'l) ou de particule ne fusionne que devant deux lettres : Lām (par identité) et Râ\' (par proximité de Makhraj). Le Lām disparaît complètement dans le Râ\' qui prend une Shaddah.',
        ruleId: 'lam-al-fil-wal-harf'
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
  // CHAPITRE 9 : LES RÈGLES DE LA MĪM SĀKINAH
  // ==========================================
  {
    id: 'chap-9',
    number: 9,
    slug: 'mim-sakinah',
    titleFr: 'Les Règles de la Mīm Sākinah',
    titleAr: 'أَحْكَامُ المِيمِ السَّاكِنَةِ',
    category: 'intermediate',
    estimatedMinutes: 15,
    isPilotChapter: true,
    summaryFr: 'Maîtriser les 3 règles de la Mīm sans voyelle (مْ) : l\'Ikhfā\' Shafawī (dissimulation devant Bā\'), l\'Idghām Shafawī (fusion dans un autre Mīm avec Ghunnah 2 temps), et l\'Izhār Shafawī (clarté absolue devant les 26 autres lettres, avec vigilance extrême devant Wāw et Fā\').',
    infographicPoints: [
      '3 Règles Uniquement : Contrairement au Nūn Sākinah qui en a 4, le Mīm Sākinah n\'obéit qu\'à 3 règles : Ikhfā\' Shafawī (ب), Idghām Shafawī (م) et Izhār Shafawī (les 26 autres lettres).',
      'Ikhfā\' Shafawī (Lettre ب) : Se produit UNIQUEMENT entre deux mots distincts (تَرۡمِيهِم بِحِجَارَةٖ). Les lèvres se touchent doucement sans forcer (sans laisser d\'espace / sans furjah), avec une Ghunnah de 2 temps.',
      'Idghām Shafawī (Lettre م) : Le premier Mīm sans voyelle fond dans le Mīm suivant qui prend une Shaddah (فِى قُلُوبِهِم مَّرَضٞ). Ghunnah de 2 temps obligatoire.',
      'Mīm Mushaddadah (مّ) Partout : Tout Mīm avec Shaddah (ex: عَمَّا, ٱلۡيَمِّ) porte le plus haut degré de Ghunnah (2 temps), même si l\'on s\'arrête sur le mot !',
      'Alerte Maximale sur Wāw (و) et Fā\' (ف) : Devant ces deux lettres labiales, l\'Izhār doit être particulièrement vigilant (Ashadd Izhār) pour ne pas avaler ou dissimuler le Mīm par facilité articulaire (عَلَيۡهِمۡ وَلَا, هُمۡ فِيهَا) !'
    ],
    subrules: [
      {
        id: 'ikhfa-shafawi',
        nameFr: '1. Al-Ikhfā\' Al-Shafawī (La Dissimulation Labiale)',
        nameAr: 'الإِخْفَاءُ الشَّفَوِيُّ',
        mnemonic: 'Lettre unique : Bā\' (ب) — Entre deux mots obligatoirement',
        letters: ['ب'],
        definitionFr: 'Lorsque le Mīm Sākinah est suivi de la lettre Bā\' (ب), le son Mīm est dissimulé avec une résonance nasale (Ghunnah) de 2 temps pleins. Cette règle a toujours lieu entre deux mots séparés.',
        mechanismFr: 'Appliquez les deux lèvres l\'une contre l\'autre avec une douceur naturelle (sans serrer excessivement et sans laisser d\'ouverture / pas de furjah), maintenez la résonance dans le nez pendant 2 battements, puis ouvrez les lèvres en libérant le son Bā\'.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c9-ikh-1',
            arabicText: 'تَرۡمِيهِم بِحِجَارَةٖ مِّن سِجِّيلٖ',
            surahAyahRef: '105:4',
            surahNameFr: 'Al-Fīl',
            highlightSegment: 'تَرۡمِيهِم بِ',
            highlightLetter: 'م + ب',
            ruleApplied: 'Ikhfā\' Shafawī (Ghunnah 2 temps)',
            ruleTag: 'ghunnah',
            explanationFr: 'Le Mīm sans voyelle de « Tarmīhim » rencontre le Bā\' de « bi-hijārah ». La voix maintient une Ghunnah douce de 2 temps sur les lèvres avant d\'émettre le Bā\'.',
            transliteration: 'Tarmīhim bi-hijārah',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/105004.mp3'
          },
          {
            id: 'ex-c9-ikh-2',
            arabicText: 'إِنَّ رَبَّهُم بِهِمۡ يَوۡمَئِذٖ لَّخَبِيرُۢ',
            surahAyahRef: '100:11',
            surahNameFr: 'Al-\'Ādiyāt',
            highlightSegment: 'رَبَّهُم بِهِمۡ',
            highlightLetter: 'م + ب',
            ruleApplied: 'Ikhfā\' Shafawī',
            ruleTag: 'ghunnah',
            explanationFr: 'Mīm Sākinah suivi du Bā\' : dissimulation labiale avec 2 temps de résonance nasale.',
            transliteration: 'Inna rabbahum bihim',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/100011.mp3'
          },
          {
            id: 'ex-c9-ikh-3',
            arabicText: 'خُذُواْ مَآ ءَاتَيۡنَٰكُم بِقُوَّةٖ',
            surahAyahRef: '2:93',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'ءَاتَيۡنَٰكُم بِ',
            highlightLetter: 'م + ب',
            ruleApplied: 'Ikhfā\' Shafawī',
            ruleTag: 'ghunnah',
            explanationFr: 'Même règle entre « Ātaynākum » et « bi-quwwah ». Le Mīm est nu (sans Soukoûn tracé dans le Mushaf).',
            transliteration: 'Ātaynākum bi-quwwah',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002093.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Laisser un espace béant entre les lèvres (Furjah artificielle) en produisant un son flottant.',
            correctionFr: 'Selon la transmission authentique préférée des grands savants dont Ibn Al-Jazarī, les lèvres doivent simplement être en contact léger sans pression excessive.'
          },
          {
            trapFr: 'Écraser les lèvres très fort en forçant le son.',
            correctionFr: 'Le contact doit être souple et sans tension musculaire brutale.'
          }
        ]
      },
      {
        id: 'idgham-shafawi',
        nameFr: '2. Al-Idghām Al-Shafawī / Mithlayn Saghīr (La Fusion Labiale)',
        nameAr: 'الإِدْغَامُ الشَّفَوِيُّ (إِدْغَامُ المِثْلَيْنِ الصَّغِيرُ)',
        mnemonic: 'Lettre unique : Mīm (م) ➔ Devient Mīm Mushaddadah (مّ) avec Ghunnah 2 temps',
        letters: ['م'],
        definitionFr: 'Lorsque le Mīm Sākinah rencontre un autre Mīm pourvu d\'une voyelle, le premier s\'annule et fusionne entièrement dans le second. Les deux deviennent un seul Mīm avec Shaddah (مّ) portant une Ghunnah obligatoire de 2 temps.',
        mechanismFr: 'Fermez les lèvres pour le premier Mīm et prolongez la résonance nasale pendant 2 pulsations complètes avant d\'ouvrir sur la voyelle du second Mīm.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c9-idg-1',
            arabicText: 'فِى قُلُوبِهِم مَّرَضٞ فَزَادَهُمُ ٱللَّهُ مَرَضٗا',
            surahAyahRef: '2:10',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'قُلُوبِهِم مَّرَضٞ',
            highlightLetter: 'م + مّ',
            ruleApplied: 'Idghām Shafawī (Fusion avec Ghunnah 2 temps)',
            ruleTag: 'ghunnah',
            explanationFr: 'Le Mīm de « Qulūbihim » fusionne dans le Mīm de « Marad ». Dans le Mushaf, le premier Mīm est nu et le second porte une Shaddah.',
            transliteration: 'Fī qulūbihim marad',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002010.mp3'
          },
          {
            id: 'ex-c9-idg-2',
            arabicText: 'كُلَّمَآ أَضَآءَ لَهُم مَّشَوۡاْ فِيهِ',
            surahAyahRef: '2:20',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'لَهُم مَّشَوۡاْ',
            highlightLetter: 'م + مّ',
            ruleApplied: 'Idghām Shafawī',
            ruleTag: 'ghunnah',
            explanationFr: 'Fusion complète de « Lahum » dans « Mashaw ». Ghunnah obligatoire de 2 temps.',
            transliteration: 'Lahum-mashaw fīh',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002020.mp3'
          },
          {
            id: 'ex-c9-idg-3',
            arabicText: 'فَٱقۡذِفِيهِ فِى ٱلۡيَمِّ فَلۡيُلۡقِهِ ٱلۡيَمُّ بِٱلسَّاحِلِ',
            surahAyahRef: '20:39',
            surahNameFr: 'Tāhā',
            highlightSegment: 'ٱلۡيَمِّ',
            highlightLetter: 'مّ (Mīm Mushaddadah)',
            ruleApplied: 'Ghunnah maximale sur Mīm Mushaddadah (même à l\'arrêt)',
            ruleTag: 'ghunnah',
            explanationFr: 'Même si le récitateur s\'arrête sur « Al-Yamm », la Ghunnah de 2 temps sur le Mīm avec Shaddah doit être parfaitement maintenue !',
            transliteration: 'Fil-yamm',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/020039.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Passer trop vite sans marquer les 2 temps de Ghunnah sur le Mīm doublé.',
            correctionFr: 'Le Mīm avec Shaddah exige impérativement 2 pulsations complètes de résonance nasale.'
          }
        ]
      },
      {
        id: 'izhar-shafawi',
        nameFr: '3. Al-Izhār Al-Shafawī (L\'Élucidation / Clarté Labiale)',
        nameAr: 'الإِظْهَارُ الشَّفَوِيُّ',
        mnemonic: 'Les 26 autres lettres (tout sauf ب et م) — Vigilance extrême devant Wāw (و) et Fā\' (ف)',
        letters: ['ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'ن', 'هـ', 'و', 'ي', 'ء'],
        definitionFr: 'Lorsque le Mīm Sākinah est suivi de n\'importe quelle lettre hormis Bā\' et Mīm, il doit être prononcé clairement sans allonger la Ghunnah au-delà de sa durée naturelle, et sans coupure brusque. Dans le Mushaf, le Mīm porte un Soukoûn visible (مۡ). L\'Izhār est particulièrement strict et vigilant devant Wāw (و) et Fā\' (ف) !',
        mechanismFr: 'Fermez les lèvres pour former le son M avec Tawassut (durée intermédiaire), puis ouvrez immédiatement sur la consonne suivante sans temps de nasalité supplémentaire et sans rebond de Qalqalah.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c9-izh-1',
            arabicText: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
            surahAyahRef: '1:2',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'ٱلۡحَمۡدُ',
            highlightLetter: 'مۡ + د',
            ruleApplied: 'Izhār Shafawī (Clarté dans un même mot)',
            ruleTag: 'izhar',
            explanationFr: 'Le Mīm porte un Soukoûn et est suivi du Dāl : prononciation limpide et naturelle sans Ghunnah prolongée.',
            transliteration: 'Al-Hamdu',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001002.mp3'
          },
          {
            id: 'ex-c9-izh-2',
            arabicText: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ',
            surahAyahRef: '1:7',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'عَلَيۡهِمۡ غَيۡرِ · عَلَيۡهِمۡ وَلَا',
            highlightLetter: 'مۡ + غ · مۡ + و (Alerte Wāw)',
            ruleApplied: 'Izhār Shafawī avec alerte maximale devant Wāw',
            ruleTag: 'izhar',
            explanationFr: 'Devant le Wāw de « Wa lā », l\'Izhār doit être extrêmement clair : comme le Mīm et le Wāw partagent les lèvres, le réflexe fautif est de dissimuler le Mīm. Il faut le prononcer fermement !',
            transliteration: '\'Alayhim ghayril... \'Alayhim wa lā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3'
          },
          {
            id: 'ex-c9-izh-3',
            arabicText: 'وَٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ أُولَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَنَّةِۖ هُمۡ فِيهَا خَٰلِدُونَ',
            surahAyahRef: '2:82',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'هُمۡ فِيهَا',
            highlightLetter: 'مۡ + ف (Alerte Fā\')',
            ruleApplied: 'Izhār Shafawī avec alerte maximale devant Fā\'',
            ruleTag: 'izhar',
            explanationFr: 'Deuxième alerte majeure : le Fā\' provient du bord des dents sur la lèvre inférieure. Ne dissimulez jamais le Mīm dans « Hum fīhā » !',
            transliteration: 'Hum fīhā khālidūn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002082.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Avaler ou dissimuler le Mīm devant Wāw (« \'Alayhiw-walā ») ou Fā\' (« Huf-fīhā »).',
            correctionFr: 'C\'est le piège numéro un du Tajwīd : les savants l\'appellent Ashadd Izhār (la clarté la plus impérative) pour résister à la tentation de fusionner ces lettres labiales.'
          },
          {
            trapFr: 'Faire une Qalqalah sur le Mīm en détachant les lèvres avec force (« Al-Hamadu »).',
            correctionFr: 'Le Mīm n\'a pas de Qalqalah : maintenez les lèvres doucement jointes.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'ex-c9-g1',
        title: 'L\'Alerte Maximale d\'Izhār Shafawī dans Al-Fātihah 1:7',
        verseArabic: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ',
        surahAyahRef: '1:7',
        targetSegment: 'عَلَيۡهِمۡ وَلَا',
        promptFr: 'Pourquoi la rencontre entre le Mīm de « \'Alayhim » et le Wāw de « Wa lā » fait-elle l\'objet d\'une mise en garde solennelle des maîtres du Tajwīd ?',
        hintFr: 'Observez où se forment le Mīm et le Wāw au niveau de la bouche (Makhraj commun).',
        solutionFr: 'Le Mīm et le Wāw proviennent tous les deux exactement des deux lèvres (Ash-Shafatayn). En raison de cette proximité immédiate (Ittihād Al-Makhraj), l\'appareil vocal a naturellement tendance à dissimuler ou assimiler le Mīm dans le Wāw (en disant à tort « \'Alayhiw-walā »). L\'imam Ibn Al-Jazarī a expressément ordonné de redoubler de vigilance (Ashadd Izhār) pour bien fermer les lèvres sur le Mīm avant d\'ouvrir sur le Wāw !',
        breakdownSteps: [
          'Étape 1 : Identifiez le mot « عَلَيۡهِمۡ » se terminant par un Mīm Sākin (مۡ).',
          'Étape 2 : Identifiez la lettre suivante « وَلَا » commençant par un Wāw (و).',
          'Étape 3 : Notez que le Mīm et le Wāw partagent le même point d\'articulation (les deux lèvres).',
          'Étape 4 : Pour éviter l\'erreur d\'Ikhfā\' inconscient, fermez complètement les lèvres sur le Mīm avec Tawassut, puis projetez le Wāw distinctement.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3'
      },
      {
        id: 'ex-c9-g2',
        title: 'Ikhfā\' Shafawī vs Izhār Shafawī dans Sourate Al-Fīl (105:4-5)',
        verseArabic: 'تَرۡمِيهِم بِحِجَارَةٖ مِّن سِجِّيلٖ ۝ فَجَعَلَهُمۡ كَعَصۡفٖ مَّأۡكُولِۭ',
        surahAyahRef: '105:4-5',
        targetSegment: 'تَرۡمِيهِم بِحِجَارَةٖ · فَجَعَلَهُمۡ كَعَصۡفٖ',
        promptFr: 'Comparez le comportement du Mīm Sākinah dans « Tarmīhim bi-hijārah » et dans « Fa-ja\'alahum ka-\'asf ».',
        hintFr: 'Quelle est la lettre qui suit le Mīm dans chaque cas ? Quel impact sur la durée de Ghunnah ?',
        solutionFr: 'Dans « Tarmīhim bi-hijārah », le Mīm est suivi du Bā\' : c\'est un Ikhfā\' Shafawī, les lèvres se joignent doucement avec une Ghunnah de 2 temps pleins. Dans « Fa-ja\'alahum ka-\'asf », le Mīm est suivi du Kāf (lettre ordinaire) : c\'est un Izhār Shafawī, la prononciation est nette et immédiate sans allongement de Ghunnah !',
        breakdownSteps: [
          'Étape 1 : Dans « تَرۡمِيهِم بِ », le Mīm rencontre la lettre unique d\'Ikhfā\' Shafawī (ب) ➔ Maintenez 2 temps de résonance nasale.',
          'Étape 2 : Les lèvres se touchent avec délicatesse sans forcer ni laisser d\'ouverture.',
          'Étape 3 : Dans « فَجَعَلَهُمۡ كَ », le Mīm porte un Soukoûn visible et précède le Kāf (ك) ➔ Izhār pur sans délai.',
          'Étape 4 : Ne prolongez pas la Ghunnah sur le Kāf et ne laissez pas la langue rebondir en Qalqalah.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/105004.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c9-1',
        type: 'mcq',
        promptFr: 'À combien de règles fondamentales la Mīm Sākinah obéit-elle dans le Coran ?',
        verseArabic: 'أَحْكَامُ المِيمِ السَّاكِنَةِ',
        options: [
          '3 règles : Ikhfā\' Shafawī (ب), Idghām Shafawī (م), et Izhār Shafawī (26 lettres)',
          '4 règles comme la Nūn Sākinah',
          '2 règles seulement : Izhār et Idghām',
          '5 règles incluant la Qalqalah'
        ],
        correctAnswer: '3 règles : Ikhfā\' Shafawī (ب), Idghām Shafawī (م), et Izhār Shafawī (26 lettres)',
        explanationFr: 'Contrairement au Nūn Sākinah qui compte 4 règles, le Mīm Sākinah n\'a ni Iqlāb ni Ikhfā\' à 15 lettres : seulement Ikhfā\' (ب), Idghām (م) et Izhār (le reste).',
        ruleId: 'ikhfa-shafawi'
      },
      {
        id: 'q-c9-2',
        type: 'mcq',
        promptFr: 'Quelle est l\'unique lettre qui déclenche la règle de l\'Ikhfā\' Shafawī sur le Mīm Sākinah ?',
        verseArabic: 'تَرۡمِيهِم بِحِجَارَةٖ',
        surahAyahRef: '105:4',
        options: [
          'La lettre Bā\' (ب)',
          'La lettre Mīm (م)',
          'La lettre Wāw (و)',
          'La lettre Nūn (ن)'
        ],
        correctAnswer: 'La lettre Bā\' (ب)',
        explanationFr: 'Le Bā\' est l\'unique lettre d\'Ikhfā\' Shafawī. Elle exige une fermeture douce des lèvres avec une Ghunnah de 2 temps.',
        ruleId: 'ikhfa-shafawi'
      },
      {
        id: 'q-c9-3',
        type: 'mcq',
        promptFr: 'Pourquoi les imams du Tajwīd insistent-ils tant sur l\'Izhār devant Wāw (و) et Fā\' (ف) ?',
        verseArabic: 'عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ ۝ هُمۡ فِيهَا خَٰلِدُونَ',
        options: [
          'Car elles partagent les lèvres avec le Mīm, ce qui pousse par facilité à assimiler ou dissimuler le Mīm',
          'Car le Wāw et le Fā\' sont des lettres de gorge',
          'Car il faut marquer une pause obligatoire (Saktah) entre eux',
          'Car le Mīm doit être prolongé de 6 temps de Madd Lāzim'
        ],
        correctAnswer: 'Car elles partagent les lèvres avec le Mīm, ce qui pousse par facilité à assimiler ou dissimuler le Mīm',
        explanationFr: 'L\'identité de point d\'articulation (Wāw) ou sa proximité immédiate (Fā\') incite le récitateur à dissimuler par inadvertance le Mīm. Les savants imposent une clarté vigilante (Ashadd Izhār).',
        ruleId: 'izhar-shafawi'
      },
      {
        id: 'q-c9-4',
        type: 'mcq',
        promptFr: 'Comment positionner correctement les lèvres lors de l\'Ikhfā\' Shafawī sur « Tarmīhim bi-hijārah » ?',
        verseArabic: 'تَرۡمِيهِم بِحِجَارَةٖ مِّن سِجِّيلٖ',
        surahAyahRef: '105:4',
        options: [
          'Les lèvres se touchent avec douceur sans pression excessive et sans laisser d\'ouverture (pas de Furjah)',
          'Il faut laisser un large trou de 5 millimètres entre les lèvres',
          'Il faut serrer les dents et mordre la lèvre inférieure',
          'Il faut ouvrir grand la bouche en disant un son A prolongé'
        ],
        correctAnswer: 'Les lèvres se touchent avec douceur sans pression excessive et sans laisser d\'ouverture (pas de Furjah)',
        explanationFr: 'La position authentique transmise consiste en un contact doux et naturel des lèvres sans écrasement ni écartement artificiel.',
        ruleId: 'ikhfa-shafawi'
      },
      {
        id: 'q-c9-5',
        type: 'mcq',
        promptFr: 'Dans « Fī qulūbihim maradun » (2:10), que se passe-t-il entre les deux Mīms ?',
        verseArabic: 'فِى قُلُوبِهِم مَّرَضٞ',
        surahAyahRef: '2:10',
        options: [
          'Le premier Mīm fusionne totalement dans le second (Idghām Shafawī) avec 2 temps de Ghunnah',
          'Le premier Mīm est prononcé avec un arrêt sec de Qalqalah',
          'Le premier Mīm disparaît sans aucune résonance nasale',
          'Les deux Mīms sont séparés par un arrêt obligatoire'
        ],
        correctAnswer: 'Le premier Mīm fusionne totalement dans le second (Idghām Shafawī) avec 2 temps de Ghunnah',
        explanationFr: 'La rencontre de deux Mīms entraîne un Idghām Mutamāthilayn Saghīr : ils forment un seul Mīm portant une Shaddah avec une Ghunnah de 2 temps.',
        ruleId: 'idgham-shafawi'
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
  },

  // ==========================================
  // CHAPITRE 11 : L'ASSIMILATION (IDGHĀM)
  // ==========================================
  {
    id: 'chap-11',
    number: 11,
    slug: 'assimilation',
    titleFr: 'L\'Assimilation (Idghām Mutamāthilayn, etc.)',
    titleAr: 'إِدْغَامُ المُتَمَاثِلَيْنِ وَالمُتَقَارِبَيْنِ وَالمُتَجَانِسَيْنِ',
    category: 'advanced',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Comprendre la fusion des lettres selon leurs points d\'articulation et leurs attributs : les lettres identiques (Mutamāthilayn), l\'interdiction formelle de fusionner les lettres de Madd (فِى يُوسُفَ, ءَامَنُواْ وَعَمِلُواْ), les 8 fusions totales historiques (Irkam-ma\'anā, Nakhlukkum), et l\'assimilation partielle (Idghām Nāqis dans Basatta).',
    infographicPoints: [
      'Règle de Base : L\'Izhār (clarté) est la norme fondamentale de récitation dans le Coran. L\'assimilation (Idghām) est une exception phonétique n\'intervenant que pour faciliter la diction lorsque la première consonne est dépourvue de voyelle (sākinah).',
      'Mutamāthilayn (Identiques) : Deux consonnes strictement identiques se suivent et la première est sākinah ➔ fusion totale avec Shaddah (ex: فَلَا يُسۡرِف فِّى, وَقَد دَّخَلُواْ, يُدۡرِككُّمُ).',
      'Interdiction Absolue sur les Lettres de Madd : Les lettres de prolongation (Wāw et Yā\') NE FUSIONNENT JAMAIS avec une consonne identique (فِى يُوسُفَ, ءَامَنُواْ وَعَمِلُواْ) car leur Makhraj est différent (Al-Jawf vs langue/lèvres) !',
      '8 Cas d\'Assimilation Totale (Kāmil) : Des couples spécifiques de lettres proches ou homogènes fusionnent entièrement : ت➔ط (وَقَالَت طَّآئِفَةٞ), ذ➔ظ (إِذ ظَّلَمۡتُمۡ), ب➔م (ٱرۡكَب مَّعَنَا), ق➔ك (أَلَمۡ نَخۡلُقكُّم), د➔ت (قَد تَّبَيَّنَ, عَبَدتُّمۡ), ت➔د (أَثۡقَلَت دَّعَوَا), ل➔ر (بَل رَّفَعَهُ, وَقُل رَّبِّ), ث➔ذ (يَلۡهَثۚ ذَّٰلِكَ).',
      'Idghām Nāqis Unique (ط dans ت) : Dans « Basatta » (بَسَطتَ), « Farrattum » (فَرَّطتُمۡ) et « Ahattu » (أَحَطتُ), la lourdeur et l\'élévation du Tā\' (ط) subsistent sans Qalqalah avant de relâcher sur le Tā\' (ت) !',
      'Règle du Waqf : L\'assimilation entre deux mots n\'existe qu\'en liaison continue (Wasl). À l\'arrêt d\'urgence sur « Irkab » (ٱرۡكَبۡ), vous prononcez le Bā\' avec sa Qalqalah Wustā pure !'
    ],
    subrules: [
      {
        id: 'idgham-mutamathilayn',
        nameFr: '1. Idghām Al-Mutamāthilayn (Lettres Identiques)',
        nameAr: 'إِدْغَامُ المُتَمَاثِلَيْنِ الصَّغِيرُ',
        mnemonic: 'Deux lettres 100% identiques : la 1ère sans voyelle fond dans la 2nde avec Shaddah (ّ)',
        letters: ['ف', 'د', 'ب', 'ك', 'هـ'],
        definitionFr: 'Lorsque deux lettres exactement identiques se suivent et que la première est privée de voyelle (sākinah), la première fusionne entièrement dans la seconde qui reçoit une Shaddah.',
        mechanismFr: 'Prononcez la seconde consonne comme une lettre doublée avec Shaddah. Cela s\'applique entre deux mots séparés ou à l\'intérieur du même mot.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c11-1',
            arabicText: 'فَلَا يُسۡرِف فِّى ٱلۡقَتۡلِۖ إِنَّهُۥ كَانَ مَنصُورٗا',
            surahAyahRef: '17:33',
            surahNameFr: 'Al-Isrā\'',
            highlightSegment: 'يُسۡرِف فِّى',
            highlightLetter: 'ف + فّ (Idghām Mutamāthilayn)',
            ruleApplied: 'Idghām Mutamāthilayn entre deux mots (Yusrif-fī)',
            ruleTag: 'silent',
            explanationFr: 'Le Fā\' de « Yusrif » n\'a aucun signe de soukoûn et fusionne à 100% dans le Fā\' de « fī » qui prend une Shaddah : on prononce « Yusrif-fī ».',
            transliteration: 'Falā yusrif-fīl-qatl',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/017033.mp3'
          },
          {
            id: 'ex-c11-2',
            arabicText: 'وَإِذَا جَآءُوكُمۡ قَالُوٓاْ ءَامَنَّا وَقَد دَّخَلُواْ بِٱلۡكُفۡرِ',
            surahAyahRef: '5:61',
            surahNameFr: 'Al-Mā\'idah',
            highlightSegment: 'وَقَد دَّخَلُواْ',
            highlightLetter: 'د + دّ',
            ruleApplied: 'Idghām Mutamāthilayn (Wa-qad-dakhalū)',
            ruleTag: 'silent',
            explanationFr: 'Le premier Dāl disparaît totalement au profit du second : on prononce directement « Wa-qad-dakhalū » sans Qalqalah sur le premier Dāl !',
            transliteration: 'Wa-qad-dakhalū bil-kufr',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/005061.mp3'
          },
          {
            id: 'ex-c11-3',
            arabicText: 'أَيۡنَمَا تَكُونُواْ يُدۡرِككُّمُ ٱلۡمَوۡتُ',
            surahAyahRef: '4:78',
            surahNameFr: 'An-Nisā\'',
            highlightSegment: 'يُدۡرِككُّمُ',
            highlightLetter: 'ك + كّ dans le même mot',
            ruleApplied: 'Idghām Mutamāthilayn dans un mot (Yudrik-kum)',
            ruleTag: 'silent',
            explanationFr: 'L\'assimilation d\'identiques peut avoir lieu dans un même mot : le premier Kāf est nu et fond dans le second qui porte une Shaddah (« Yudrik-kumu-l-mawt »).',
            transliteration: 'Aynamā takūnū yudrik-kumu-l-mawt',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/004078.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Faire une Qalqalah sur le premier Dāl dans « Qad dakhalū ».',
            correctionFr: 'Le premier Dāl a totalement fusionné : il n\'a ni soukoûn ni rebond. On passe directement au Dāl doublé avec Shaddah.'
          }
        ]
      },
      {
        id: 'mutamathilayn-madd-exceptions',
        nameFr: '2. L\'Exception Sacrée des Lettres de Madd (فِى يُوسُفَ & ءَامَنُواْ وَعَمِلُواْ)',
        nameAr: 'اسْتِثْنَاءُ حُرُوفِ المَدِّ مِنَ الإِدْغَامِ (حُكْمُ الإِظْهَارِ)',
        mnemonic: 'Lettre de Madd + Consonne identique ➔ TOUJOURS Izhār avec 2 temps de Madd !',
        letters: ['و', 'ي'],
        definitionFr: 'Bien que le Yā\' et le Wāw de prolongation soient suivis d\'une consonne de même graphie, IL EST STRICTEMENT INTERDIT de les assimiler ! Le point d\'articulation d\'une voyelle longue est la cavité buccale (Al-Jawf), tandis que la consonne naît de la langue ou des lèvres.',
        mechanismFr: 'Maintenez les 2 temps complets de Madd Naturel sur « Fī » et « Āmanū » avant d\'articuler distinctement la consonne qui suit, sans Shaddah.',
        durationHarakat: 2,
        examples: [
          {
            id: 'ex-c11-4',
            arabicText: 'لَّقَدۡ كَانَ فِى يُوسُفَ وَإِخۡوَتِهِۦٓ ءَايَٰتٞ',
            surahAyahRef: '12:7',
            surahNameFr: 'Yūsuf',
            highlightSegment: 'فِى يُوسُفَ',
            highlightLetter: 'ي de Madd + يُ consonne ➔ Pas d\'Idghām !',
            ruleApplied: 'Izhār obligatoire avec Madd Naturel 2 temps (Fī Yūsuf)',
            ruleTag: 'madd',
            explanationFr: 'Le Yā\' de « Fī » est une voyelle longue d\'Al-Jawf. On prononce « Fī » avec 2 temps pleins puis « Yūsufa » clairement. Assimiler en « Fiy-yūsuf » est un Lahn interdit !',
            transliteration: 'Laqad kāna fī yūsufa wa-ikhwatihī āyāt',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/012007.mp3'
          },
          {
            id: 'ex-c11-5',
            arabicText: 'إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ',
            surahAyahRef: '11:23',
            surahNameFr: 'Hūd',
            highlightSegment: 'ءَامَنُواْ وَعَمِلُواْ',
            highlightLetter: 'و de Madd + وَ consonne ➔ Pas d\'Idghām !',
            ruleApplied: 'Izhār obligatoire avec Madd Naturel 2 temps (Āmanū wa-\'amilū)',
            ruleTag: 'madd',
            explanationFr: 'Le Wāw de « Āmanū » est une voyelle longue. On prolonge 2 temps « Āmanū » puis on attaque le Wāw consonne « wa-\'amilū ». Interdiction absolue de fusionner en « Āmanuw-wa-\'amilū » !',
            transliteration: 'Innal-ladhīna āmanū wa-\'amilūs-sālihāt',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/011023.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Avaler le Madd de « Fī » ou « Āmanū » pour enchaîner directement sur une Shaddah (« Fiy-yūsuf » ou « Āmanuw-wa »).',
            correctionFr: 'C\'est l\'un des pièges les plus dénoncés par les imams du Tajwīd : le Madd doit être pleinement déployé pendant 2 temps avant d\'émettre la consonne suivante.'
          }
        ]
      },
      {
        id: 'idgham-kamil-similar',
        nameFr: '3. Les 8 Cas d\'Assimilation Totale (Mutajānisayn & Mutaqāribayn)',
        nameAr: 'حَالَاتُ الإِدْغَامِ الكَامِلِ الثَّمَانِي (المُتَجَانِسَيْنِ وَالمُتَقَارِبَيْنِ)',
        mnemonic: '8 couples précis : ت➔ط, ذ➔ظ, ب➔م, ق➔ك, د➔ت, ت➔د, ل➔ر, ث➔ذ',
        letters: ['ت', 'ط', 'ذ', 'ظ', 'ب', 'م', 'ق', 'ك', 'د', 'ل', 'ر', 'ث'],
        definitionFr: 'Lorsque deux lettres proches (Mutaqāribayn) ou de même point d\'articulation (Mutajānisayn) se rencontrent et que la première est sākinah, la première disparaît totalement au profit de la seconde qui prend une Shaddah.',
        mechanismFr: 'La première consonne s\'efface à 100%. Cas unique exceptionnel : dans « Irkam-ma\'anā » (ب dans م), la fusion produit un Mīm Mushaddadah avec une Ghunnah de 2 temps obligatoires !',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c11-6',
            arabicText: 'يَٰبُنَىَّ ٱرۡكَب مَّعَنَا وَلَا تَكُن مَّعَ ٱلۡكَٰفِرِينَ',
            surahAyahRef: '11:42',
            surahNameFr: 'Hūd',
            highlightSegment: 'ٱرۡكَب مَّعَنَا',
            highlightLetter: 'ب + م ➔ مّ avec Ghunnah 2 temps',
            ruleApplied: 'Idghām Mutajānisayn Kāmil avec Ghunnah (Irkam-ma\'anā)',
            ruleTag: 'ghunnah',
            explanationFr: 'Cas unique dans tout le Coran : le Bā\' sans voyelle de « Irkab » fusionne dans le Mīm de « ma\'anā » : on prononce « Irkam-ma\'anā » avec 2 temps de Ghunnah nasale !',
            transliteration: 'Yā bunayya-rkam-ma\'anā',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/011042.mp3'
          },
          {
            id: 'ex-c11-7',
            arabicText: 'أَلَمۡ نَخۡلُقكُّم مِّن مَّآءٖ مَّهِينٖ',
            surahAyahRef: '77:20',
            surahNameFr: 'Al-Mursalāt',
            highlightSegment: 'نَخۡلُقكُّم',
            highlightLetter: 'ق + ك ➔ كّ',
            ruleApplied: 'Idghām Mutaqāribayn Kāmil (Nakhlukkum)',
            ruleTag: 'silent',
            explanationFr: 'Dans la lecture de Hafs via Ash-Shātibiyyah, le Qāf sans voyelle fusionne totalement dans le Kāf : on prononce « Nakhlukkum » avec un pur Kāf Mushaddadah !',
            transliteration: 'Alam nakhluk-kum mim-mā\'im-mahīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/077020.mp3'
          },
          {
            id: 'ex-c11-8',
            arabicText: 'قَد تَّبَيَّنَ ٱلرُّشۡدُ مِنَ ٱلۡغَيِّۚ',
            surahAyahRef: '2:256',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'قَد تَّبَيَّنَ',
            highlightLetter: 'د + ت ➔ تّ',
            ruleApplied: 'Idghām Mutajānisayn Kāmil (Qat-tabayyana)',
            ruleTag: 'silent',
            explanationFr: 'Le Dāl et le Tā\' partagent exactement le même point d\'articulation. Le Dāl fond dans le Tā\' qui prend une Shaddah : « Qat-tabayyana ».',
            transliteration: 'Qat-tabayyanar-rushdu minal-ghayy',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002256.mp3'
          },
          {
            id: 'ex-c11-9',
            arabicText: 'بَل رَّفَعَهُ ٱللَّهُ إِلَيۡهِۚ',
            surahAyahRef: '4:158',
            surahNameFr: 'An-Nisā\'',
            highlightSegment: 'بَل رَّفَعَهُ',
            highlightLetter: 'ل + ر ➔ رّ',
            ruleApplied: 'Idghām Mutaqāribayn Kāmil (Bar-rafa\'ahu)',
            ruleTag: 'silent',
            explanationFr: 'Le Lām de la particule « Bal » fusionne totalement dans le Râ\' qui prend une Shaddah : « Bar-rafa\'ahu-llāh ».',
            transliteration: 'Bar-rafa\'ahul-lāhu ilayh',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/004158.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Oublier la Ghunnah de 2 temps sur « Irkam-ma\'anā » en passant trop vite.',
            correctionFr: 'Le Bā\' transformé en Mīm avec Shaddah exige impérativement 2 pulsations complètes de résonance nasale.'
          },
          {
            trapFr: 'Faire une Qalqalah sur le Bā\' de « Irkab » en lisant en continu.',
            correctionFr: 'En lecture continue, le Bā\' n\'existe plus ! La Qalqalah ne réapparaît que si vous vous arrêtez d\'urgence sur « Irkab ».'
          }
        ]
      },
      {
        id: 'idgham-naqis-ta-ta',
        nameFr: '4. L\'Assimilation Partielle (Idghām Nāqis : ط dans ت)',
        nameAr: 'الإِدْغَامُ النَّاقِصُ (إِدْغَامُ الطَّاءِ فِي التَّاءِ)',
        mnemonic: 'Formule unique : ط + ت (Basatta, Farrattum, Ahattu) — Emphase conservée SANS Qalqalah',
        letters: ['ط', 'ت'],
        definitionFr: 'Le Tā\' (ط) est doté des attributs les plus puissants du Tajwīd (emphase Isti\'lā\' et compression Itbāq), alors que le Tā\' (ت) est faible et mince. Il est donc impossible de dissoudre entièrement le Tā\' dans le Tā\' : l\'assimilation reste partielle (Nāqis).',
        mechanismFr: 'Collez la langue contre le palais supérieur avec l\'emphase et la fermeture du Tā\' (SANS relâcher en Qalqalah), puis décollez la langue en prononçant le son fin du Tā\' (ت) !',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c11-10',
            arabicText: 'لَئِنۢ بَسَطتَ إِلَىَّ يَدَكَ لِتَقۡتُلَنِى',
            surahAyahRef: '5:28',
            surahNameFr: 'Al-Mā\'idah',
            highlightSegment: 'بَسَطتَ',
            highlightLetter: 'ط + ت (Idghām Nāqis)',
            ruleApplied: 'Idghām Mutajānisayn Nāqis (Basatta)',
            ruleTag: 'heavy',
            explanationFr: 'La langue se plaque contre le palais pour bloquer le Tā\' lourd (Itbāq) sans émettre de rebond de Qalqalah, puis la voix libère un Tā\' fin et doux.',
            transliteration: 'La\'im-basatta ilayya yadaka',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/005028.mp3'
          },
          {
            id: 'ex-c11-11',
            arabicText: 'فَقَالَ أَحَطتُ بِمَا لَمۡ تُحِطۡ بِهِۦ',
            surahAyahRef: '27:22',
            surahNameFr: 'An-Naml',
            highlightSegment: 'أَحَطتُ',
            highlightLetter: 'ط + ت (Idghām Nāqis)',
            ruleApplied: 'Idghām Mutajānisayn Nāqis (Ahattu)',
            ruleTag: 'heavy',
            explanationFr: 'Même mécanisme dans « Ahat-tu » : la lourdeur du Tā\' est scellée sans Qalqalah, puis relâchée sur le Tā\' avec Dammah.',
            transliteration: 'Faqāla ahattu bimā lam tuhit bih',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/027022.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Faire une Qalqalah sur le Tā\' dans « Basat-ta » en disant « Basata-ta ».',
            correctionFr: 'Il n\'y a AUCUNE Qalqalah dans l\'Idghām Nāqis : la fermeture du Tā\' doit être silencieuse et retenue jusqu\'à l\'émission du Tā\'.'
          },
          {
            trapFr: 'Amincir le mot entier en disant « Basatta » avec un Tā\' ordinaire dès le début.',
            correctionFr: 'L\'emphase (Tafkhīm) du Tā\' doit être nettement entendue avant la libération du Tā\'.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'exo-c11-1',
        title: 'Analyse guidée : Sūrah Hūd (11:42) — « Yā bunayya-rkam ma\'anā »',
        verseArabic: 'وَهِيَ تَجۡرِي بِهِمۡ فِي مَوۡجٖ كَٱلۡجِبَالِ وَنَادَىٰ نُوحٌ ٱبۡنَهُۥ وَكَانَ فِي مَعۡزِلٖ يَٰبُنَيَّ ٱرۡكَب مَّعَنَا وَلَا تَكُن مَّعَ ٱلۡكَٰفِرِينَ',
        surahAyahRef: '11:42',
        targetSegment: 'يَٰبُنَيَّ ٱرۡكَب مَّعَنَا',
        promptFr: 'Comment se récite la rencontre entre le Bā\' de « Irkab » et le Mīm de « ma\'anā » en continu, et que se passe-t-il si le récitateur s\'arrête sur « Irkab » ?',
        hintFr: 'Distinguez le comportement en liaison continue (Wasl) de l\'arrêt d\'urgence (Waqf).',
        solutionFr: 'En lecture continue (Wasl) : le Bā\' fusionne entièrement dans le Mīm (Idghām Mutajānisayn Kāmil) avec une Ghunnah obligatoire de 2 temps ➔ « Irkam-ma\'anā ». À l\'arrêt d\'urgence (Waqf sur « Irkab ») : l\'assimilation est annulée, le Bā\' retrouve son Soukoûn et produit un rebond sonore de Qalqalah Wustā ➔ « Irkab ! ».',
        breakdownSteps: [
          'Étape 1 : Le mot « ٱرۡكَب » se termine par un Bā\' sākin sans voyelle dans le Rasm coranique.',
          'Étape 2 : Le mot suivant « مَّعَنَا » commence par un Mīm, lettre voisine articulée aux lèvres.',
          'Étape 3 : En continu, le Bā\' s\'efface complètement dans le Mīm qui prend une Shaddah avec 2 temps de résonance nasale.',
          'Étape 4 : Si le souffle s\'interrompt sur « Irkab », l\'Idghām disparaît et le Bā\' claque en Qalqalah Wustā.'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/011042.mp3'
      },
      {
        id: 'exo-c11-2',
        title: 'L\'Assimilation Partielle (Idghām Nāqis) dans Al-Mā\'idah (5:28)',
        verseArabic: 'لَئِنۢ بَسَطتَ إِلَيَّ يَدَكَ لِتَقۡتُلَنِي مَآ أَنَا۠ بِبَاسِطٖ يَدِيَ إِلَيۡكَ لِأَقۡتُلَكَ',
        surahAyahRef: '5:28',
        targetSegment: 'بَسَطتَ',
        promptFr: 'Pourquoi qualifie-t-on la fusion de « Basatta » d\'Idghām Nāqis (partiel), et quelle est la technique pour le réussir ?',
        hintFr: 'Le Tā\' (ط) est-il plus lourd ou plus léger que le Tā\' (ت) ? Fait-on une Qalqalah ?',
        solutionFr: 'Le Tā\' (ط) est plus fort que le Tā\' (ت) car il possède l\'élévation (Isti\'lā\') et l\'écrasement lingual (Itbāq). Comme la lettre faible ne peut pas engloutir la lettre forte, le Tā\' conserve ses qualités lourdes mais perd son explosion (pas de Qalqalah). La langue se plaque avec fermeté pour sceller le son lourd, puis se détache sur le son doux du Tā\'.',
        breakdownSteps: [
          'Étape 1 : Observez la rencontre du Tā\' sākin (ط) suivi du Tā\' (ت) dans le même mot.',
          'Étape 2 : Bloquez l\'air au point d\'articulation en élevant l\'arrière de la langue (Itbāq lourd).',
          'Étape 3 : Gardez la langue scellée SANS rebond de Qalqalah (erreur fréquente).',
          'Étape 4 : Relâchez l\'air avec la sonorité fine du Tā\' : « Basat-ta ».'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/005028.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c11-1',
        type: 'mcq',
        promptFr: 'Pourquoi les lettres identiques dans « Fī Yūsuf » (فِى يُوسُفَ) et « Āmanū wa \'amilū » (ءَامَنُواْ وَعَمِلُواْ) ne doivent-elles JAMAIS fusionner ?',
        verseArabic: 'لَّقَدۡ كَانَ فِى يُوسُفَ ۝ ءَامَنُواْ وَعَمِلُواْ',
        surahAyahRef: '12:7',
        options: [
          'Car la première lettre est une lettre de prolongation (Madd) issue du vide de la bouche (Al-Jawf), ayant un point d\'articulation différent de la consonne',
          'Car il faut marquer une pause obligatoire (Saktah) entre les deux mots',
          'Car le Coran interdit toute assimilation entre deux mots distincts',
          'Car la deuxième lettre porte un soukoûn'
        ],
        correctAnswer: 'Car la première lettre est une lettre de prolongation (Madd) issue du vide de la bouche (Al-Jawf), ayant un point d\'articulation différent de la consonne',
        explanationFr: 'Bien qu\'ayant la même graphie, une lettre de Madd n\'a pas le même Makhraj qu\'une consonne. Les fusionner détruirait la voyelle longue : l\'Izhār avec 2 temps de Madd est obligatoire.',
        ruleId: 'mutamathilayn-madd-exceptions'
      },
      {
        id: 'q-c11-2',
        type: 'mcq',
        promptFr: 'Dans Sūrah Hūd (11:42), comment se prononce « Irkab ma\'anā » en liaison continue (Wasl) ?',
        verseArabic: 'يَٰبُنَىَّ ٱرۡكَب مَّعَنَا',
        surahAyahRef: '11:42',
        options: [
          'Le Bā\' fusionne entièrement dans le Mīm avec 2 temps de Ghunnah nasale : « Irkam-ma\'anā »',
          'Le Bā\' est prononcé avec une Qalqalah vive : « Irkab-ma\'anā »',
          'Le Bā\' devient un Nūn avec Idghām : « Irkan-ma\'anā »',
          'On marque un arrêt complet de 2 secondes entre les deux mots'
        ],
        correctAnswer: 'Le Bā\' fusionne entièrement dans le Mīm avec 2 temps de Ghunnah nasale : « Irkam-ma\'anā »',
        explanationFr: 'C\'est l\'unique cas d\'Idghām Mutajānisayn de Bā\' dans Mīm du Coran : le son B disparaît totalement et forme un Mīm doublé avec 2 temps de résonance nasale.',
        ruleId: 'idgham-kamil-similar'
      },
      {
        id: 'q-c11-3',
        type: 'mcq',
        promptFr: 'Dans « Basatta » (بَسَطتَ), pourquoi l\'assimilation du Tā\' (ط) dans le Tā\' (ت) est-elle dite « partielle » (Idghām Nāqis) ?',
        verseArabic: 'لَئِنۢ بَسَطتَ إِلَىَّ يَدَكَ',
        surahAyahRef: '5:28',
        options: [
          'Car les caractéristiques lourdes du Tā\' (emphase et Itbāq) sont préservées, sans Qalqalah, avant de relâcher sur le Tā\' fin',
          'Car on récite le mot en coupant le souffle au milieu',
          'Car la lettre Tā\' disparaît à 100% sans laisser aucune trace',
          'Car le Tā\' prend un soukoûn avec sifflement'
        ],
        correctAnswer: 'Car les caractéristiques lourdes du Tā\' (emphase et Itbāq) sont préservées, sans Qalqalah, avant de relâcher sur le Tā\' fin',
        explanationFr: 'Une lettre forte (Tā\') ne peut être entièrement absorbée par une lettre faible (Tā\'). L\'emphase et le placage lingual subsistent, mais la Qalqalah est supprimée.',
        ruleId: 'idgham-naqis-ta-ta'
      },
      {
        id: 'q-c11-4',
        type: 'error_detect',
        promptFr: 'Un récitateur s\'arrête par manque de souffle sur le mot « ٱرۡكَبۡ » dans 11:42 en disant « Irkam ! ». Quelle est l\'erreur ?',
        verseArabic: 'يَٰبُنَىَّ ٱرۡكَب مَّعَنَا',
        targetWord: 'ٱرۡكَب',
        surahAyahRef: '11:42',
        options: [
          'Erreur majeure : L\'assimilation n\'existe qu\'en reliant les mots ! À l\'arrêt, le Bā\' retrouve sa prononciation originelle avec un rebond net de Qalqalah : « Irkab ! ».',
          'Aucune erreur, l\'assimilation est permanente même à l\'arrêt.',
          'Il fallait prononcer un son Wāw.',
          'Il fallait prolonger le mot de 6 temps.'
        ],
        correctAnswer: 'Erreur majeure : L\'assimilation n\'existe qu\'en reliant les mots ! À l\'arrêt, le Bā\' retrouve sa prononciation originelle avec un rebond net de Qalqalah : « Irkab ! ».',
        explanationFr: 'L\'assimilation entre deux mots dépend entièrement de la liaison continue (Wasl). Si l\'on s\'arrête sur le premier mot, la consonne finale est prononcée avec clarté (Izhār) et rebond de Qalqalah.',
        ruleId: 'idgham-kamil-similar'
      },
      {
        id: 'q-c11-5',
        type: 'click_word',
        promptFr: 'Repérage visuel : Cliquez sur le mot contenant une assimilation d\'identiques (Mutamāthilayn) dans le MÊME mot.',
        verseArabic: 'أَيۡنَمَا تَكُونُواْ يُدۡرِككُّمُ ٱلۡمَوۡتُ وَلَوۡ كُنتُمۡ فِى بُرُوجٖ مُّشَيَّدَةٖ',
        clickableSegments: ['أَيۡنَمَا', 'تَكُونُواْ', 'يُدۡرِككُّمُ', 'ٱلۡمَوۡتُ', 'بُرُوجٖ', 'مُّشَيَّدَةٖ'],
        correctAnswer: 'يُدۡرِككُّمُ',
        explanationFr: 'Dans « Yudrik-kum », deux Kāf se rencontrent dans le même mot. Le premier est nu et fond entièrement dans le second qui porte une Shaddah (« Yudrikkumu »).',
        ruleId: 'idgham-mutamathilayn'
      }
    ]
  },
  // ==========================================
  // CHAPITRE 12 : TAFKHĪM & TARQĪQ (EMPHASE & AMINCISSEMENT)
  // ==========================================
  {
    id: 'chap-12',
    number: 12,
    slug: 'heavy-light',
    titleFr: 'Emphase & Amincissement (Tafkhīm & Tarqīq)',
    titleAr: 'التَّفْخِيمُ وَالتَّرْقِيقُ',
    category: 'advanced',
    estimatedMinutes: 20,
    isPilotChapter: true,
    summaryFr: 'Comprendre et maîtriser la résonance des lettres arabes : les 7 lettres d\'emphase absolue (خُصَّ ضَغۡطٍ قِظۡ) et leurs 5 degrés, le piège fatal de l\'arrondissement des lèvres, les 3 lettres hybrides caméléons (Alif, Lām du Nom d\'Allah, et la Râ\' avec ses 4 cas de finesse), et l\'art suprême de la décontamination des lettres adjacentes (Takhlees Al-Hurūf).',
    infographicPoints: [
      'Tafkhīm (Élévation / Isti\'lā\') : La résonance caverneuse est créée en élevant l\'arrière de la langue vers le voile du palais. Les lèvres NE DOIVENT JAMAIS s\'arrondir (sauf si la lettre porte une Dammah) !',
      'Les 7 Lettres Toujours Lourdes : Mnémonique « خُصَّ ضَغۡطٍ قِظۡ » (Khuṣṣa Ḍaghṭin Qiz). Les 4 lettres d\'Itbāq (ص, ض, ط, ظ) ont une emphase encore plus puissante et compacte.',
      'Les 5 Degrés d\'Emphase (Ibn Al-Jazarī) : 1. Fathah + Alif (صَابِرِينَ) > 2. Fathah seule (خَلَقَ) > 3. Dammah (يَقُولُ) > 4. Soukoûn (يَخۡشَىٰ) > 5. Kasrah (صِرَاطَ - degré minimal, mais toujours lourd !).',
      'L\'Alif Caméléon : L\'Alif ne possède aucun son propre, il mime la lettre précédente ! Lourd après lettre lourde (خَالِدِينَ), fin après lettre légère (إِيَّاكَ).',
      'La Lām du Nom Majestueux : La Lām est TOUJOURS fine dans tout le Coran, sauf dans le mot « Allāh / Allāhumma » s\'il est précédé d\'une Fathah ou Dammah (شَهِدَ ٱللَّهُ). S\'il est précédé d\'une Kasrah, il redevient fin (بِسۡمِ ٱللَّهِ).',
      'La Râ\' (ر) : Lourde par défaut ! Elle n\'est amincie (Tarqīq) que dans 4 cas précis : avec Kasrah directe (رِجَالٌ), avec Soukoûn après Kasrah sans consonne lourde (فِرۡعَوۡنَ), à l\'arrêt après soukoûn précédé de kasrah (حِجۡرٍ), ou à l\'arrêt après un Yā\' soukouné (خَبِيرٌ, خَيۡرٌ).',
      'Takhlees Al-Hurūf (Décontamination) : L\'épreuve de virtuosité du lecteur ! Dans « خَلَقَ », isoler le Lām fin au milieu de deux lettres lourdes (Khā et Qāf) sans le contaminer.'
    ],
    subrules: [
      {
        id: 'heavy-letters-degrees',
        nameFr: '1. Les 7 Lettres d\'Emphase Permanente & Leurs 5 Degrés',
        nameAr: 'حُرُوفُ الِاسْتِعْلَاءِ السَّبْعَةُ وَمَرَاتِبُ التَّفْخِيمِ',
        mnemonic: 'خُصَّ ضَغۡطٍ قِظۡ (Khuṣṣa Ḍaghṭin Qiz) | 5 Degrés du plus sonore au plus adouci',
        letters: ['خ', 'ص', 'ض', 'غ', 'ط', 'ق', 'ظ'],
        definitionFr: 'Les 7 lettres d\'Isti\'lā\' (élévation de la racine de la langue) sont TOUJOURS emphatiques (Tafkhīm), quelle que soit leur voyelle ou leur position. Les 4 lettres d\'Itbāq (ص, ض, ط, ظ) possèdent la plus forte intensité en écrasant le corps de la langue contre le palais.',
        mechanismFr: 'L\'emphase résulte de l\'élévation du fond de la langue et de l\'abaissement de sa partie centrale, créant une chambre acoustique caverneuse dans la cavité buccale. L\'intensité varie en 5 degrés hiérarchiques selon la voyelle associée.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c12-1',
            arabicText: 'ٱلصَّٰبِرِينَ وَٱلصَّٰدِقِينَ وَٱلۡقَٰنِتِينَ',
            surahAyahRef: '3:17',
            surahNameFr: 'Āl \'Imrān',
            highlightSegment: 'ٱلصَّٰبِرِينَ',
            highlightLetter: 'صَّٰ (Degré 1 : Fathah + Alif)',
            ruleApplied: 'Tafkhīm de 1er degré (Maximum)',
            ruleTag: 'heavy',
            explanationFr: 'La lettre Sād est suivie d\'un Alif : c\'est le sommet du Tafkhīm. L\'écho acoustique remplit toute la bouche.',
            transliteration: 'As-Sābirīna',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/003017.mp3'
          },
          {
            id: 'ex-c12-2',
            arabicText: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ',
            surahAyahRef: '1:7',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'صِرَٰطَ',
            highlightLetter: 'صِ (Degré 5 : Kasrah)',
            ruleApplied: 'Tafkhīm de 5e degré (Adouci)',
            ruleTag: 'heavy',
            explanationFr: 'Sous Kasrah, l\'emphase du Sād est au degré le plus bas, mais la lettre RESTE lourde ! Il est formellement interdit de la prononcer comme un Sīn fin.',
            transliteration: 'Sirāta',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3'
          },
          {
            id: 'ex-c12-3',
            arabicText: 'وَلَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ مِن سُلَٰلَةٖ مِّن طِينٖ',
            surahAyahRef: '23:12',
            surahNameFr: 'Al-Mu\'minūn',
            highlightSegment: 'طِينٖ',
            highlightLetter: 'طِ (Itbāq avec Kasrah)',
            ruleApplied: 'Itbāq résistant à la Kasrah',
            ruleTag: 'heavy',
            explanationFr: 'Le Tā\' (ط) fait partie des 4 lettres d\'Itbāq : même avec une Kasrah, sa lourdeur reste très perceptible et ne doit jamais sonner comme un Tā\' (ت).',
            transliteration: 'Min tīn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/023012.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Arrondir les lèvres vers l\'avant en récitant une lettre lourde sans Dammah (ex: faire la moue sur « Khā »).',
            correctionFr: 'Le Tafkhīm se fait exclusivement à l\'arrière du pharynx avec la langue ! Les lèvres doivent rester neutres et détendues.'
          },
          {
            trapFr: 'Amincir les lettres lourdes lorsqu\'elles portent une Kasrah (ex: prononcer « Sirāt » comme « Sirate » avec un Sīn).',
            correctionFr: 'Maintenez l\'élévation de l\'arrière de la langue même sous Kasrah pour préserver l\'identité de la lettre.'
          }
        ]
      },
      {
        id: 'hybrid-alif-lam',
        nameFr: '2. Les Lettres Hybrides I : L\'Alif Caméléon & Le Nom d\'Allah',
        nameAr: 'الأَلِفُ التَّابِعَةُ وَلَامُ لَفْظِ الجَلَالَةِ',
        mnemonic: 'Alif = Miroir de son prédécesseur | Lām d\'Allah = Lourd après Fathah/Dammah, Léger après Kasrah',
        letters: ['ا', 'ل'],
        definitionFr: 'L\'Alif de prolongation n\'a pas de timbre propre : il est emphatique s\'il succède à une lettre d\'Isti\'lā\', et mince s\'il succède à une lettre d\'Istifāl. La Lām est toujours mince dans tout le Coran, sauf dans le Nom Sacré d\'Allah et Allāhumma.',
        mechanismFr: 'Pour le Nom Majestueux « Allāh » : après une voyelle Fathah (ـَ) ou Dammah (ـُ), la Lām devient lourde et ample. Après une Kasrah (ـِ), elle retrouve sa finesse originelle.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c12-4',
            arabicText: 'وَٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَنَّةِۖ هُمۡ فِيهَا خَٰلِدُونَ',
            surahAyahRef: '2:82',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'خَٰلِدُونَ',
            highlightLetter: 'Alif après Khā (Lourd)',
            ruleApplied: 'Alif Emphatique',
            ruleTag: 'heavy',
            explanationFr: 'Le Khā (خ) étant une consonne d\'Isti\'lā\', l\'Alif qui le prolonge absorbe son emphase et résonne lourdement.',
            transliteration: 'Khālidūn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002082.mp3'
          },
          {
            id: 'ex-c12-5',
            arabicText: 'إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ',
            surahAyahRef: '1:5',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'إِيَّاكَ',
            highlightLetter: 'Alif après Yā (Léger)',
            ruleApplied: 'Alif Aminci (Tarqīq)',
            ruleTag: 'madd',
            explanationFr: 'Le Yā\' (ي) étant une lettre légère, l\'Alif est prononcé avec une clarté fine et lumineuse sans aucun gonflement buccal.',
            transliteration: 'Iyyāka',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001005.mp3'
          },
          {
            id: 'ex-c12-6',
            arabicText: 'شَهِدَ ٱللَّهُ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا هُوَ',
            surahAyahRef: '3:18',
            surahNameFr: 'Āl \'Imrān',
            highlightSegment: 'شَهِدَ ٱللَّهُ',
            highlightLetter: 'Lām d\'Allah après Fathah',
            ruleApplied: 'Tafkhīm de la Lām d\'Allah',
            ruleTag: 'heavy',
            explanationFr: 'Le Nom d\'Allah est précédé par la Fathah du Dāl (« Shahida-Llāhu ») : les deux Lām s\'épaississent avec majesté.',
            transliteration: 'Shahida-Llāh',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/003018.mp3'
          },
          {
            id: 'ex-c12-7',
            arabicText: 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ',
            surahAyahRef: '1:1',
            surahNameFr: 'Al-Fātihah',
            highlightSegment: 'بِسۡمِ ٱللَّهِ',
            highlightLetter: 'Lām d\'Allah après Kasrah',
            ruleApplied: 'Tarqīq de la Lām d\'Allah',
            ruleTag: 'izhar',
            explanationFr: 'Le Nom d\'Allah est précédé par la Kasrah du Mīm (« Bismi-Llāhi ») : la Lām est amincie avec douceur.',
            transliteration: 'Bismi-Llāh',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/001001.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Rendre la Lām lourde dans des mots ordinaires comme « Al-Hamd » (ٱلۡحَمۡدُ) ou « Salāt » (ٱلصَّلَوٰةَ).',
            correctionFr: 'La Lām n\'est JAMAIS lourde dans les mots ordinaires en lecture Hafs : seule celle du Nom Divin peut l\'être.'
          },
          {
            trapFr: 'Amincir le Nom d\'Allah quand il est précédé d\'une voyelle longue tombée par rencontre de soukoûns (ex: « Qālu-Llāhumma »).',
            correctionFr: 'On regarde la voyelle prononcée juste avant la Lām : ici la Dammah du Lām dans « Qālu », donc la Lām d\'Allah est lourde !'
          }
        ]
      },
      {
        id: 'hybrid-raa-rules',
        nameFr: '3. Les Lettres Hybrides II : La Râ\' (ر) & Ses 4 Cas d\'Amincissement',
        nameAr: 'أَحْكَامُ الرَّاءِ : التَّفْخِيمُ الأَصْلِيُّ وَحَالَاتُ التَّرْقِيقِ الأَرْبَعُ',
        mnemonic: 'Râ\' = Lourde par défaut ! 4 Cas de finesse : Kasrah directe, Soukoûn après Kasrah originelle, Arrêt après Soukoûn après Kasrah, Arrêt après Yā\'',
        letters: ['ر'],
        definitionFr: 'La lettre Râ\' (ر) est fondamentale en Tajwīd : sa nature première est d\'être EMPHATIQUE (Tafkhīm). Elle ne s\'amincit (Tarqīq) que sous l\'influence directe de la Kasrah ou du Yā\' à travers 4 cas codifiés.',
        mechanismFr: '1. Râ\' avec Kasrah directe (رِزۡقٗا). 2. Râ\' soukounée précédée d\'une Kasrah originelle dans le même mot sans lettre lourde après elle (فِرۡعَوۡنَ). 3. Râ\' à l\'arrêt précédée d\'une consonne soukounée elle-même précédée d\'une Kasrah (حِجۡرٍ). 4. Râ\' à l\'arrêt précédée d\'un Yā\' soukouné (خَبِيرٌ, خَيۡرٌ). Partout ailleurs, elle est LOURDE.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c12-8',
            arabicText: 'وَإِذۡ نَجَّيۡنَٰكُم مِّنۡ ءَالِ فِرۡعَوۡنَ يَسُومُونَكُمۡ سُوٓءَ ٱلۡعَذَابِ',
            surahAyahRef: '2:49',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'فِرۡعَوۡنَ',
            highlightLetter: 'Râ\' soukounée après Fā\' Kasrah',
            ruleApplied: 'Tarqīq Cas 2 (Kasrah originelle)',
            ruleTag: 'izhar',
            explanationFr: 'La Râ\' porte un Soukoûn, est précédée d\'une Kasrah originelle dans le mot, et la lettre suivante (\'Ayn) est légère : Tarqīq absolu (« Fir\'awn »).',
            transliteration: 'Fir\'awn',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002049.mp3'
          },
          {
            id: 'ex-c12-9',
            arabicText: 'كِتَٰبٌ أُحۡكِمَتۡ ءَايَٰتُهُۥ ثُمَّ فُصِّلَتۡ مِن لَّدُنۡ حَكِيمٍ خَبِيرٍ',
            surahAyahRef: '11:1',
            surahNameFr: 'Hūd',
            highlightSegment: 'خَبِيرٍ',
            highlightLetter: 'Râ\' à l\'arrêt après Yā\'',
            ruleApplied: 'Tarqīq Cas 4 (Waqf après Yā\')',
            ruleTag: 'izhar',
            explanationFr: 'À l\'arrêt sur « Khabīr », la Râ\' prend un soukoûn temporaire après un Yā\' : elle doit être prononcée très fine et souple (« Khabeer »).',
            transliteration: 'Khabīr',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/011001.mp3'
          },
          {
            id: 'ex-c12-10',
            arabicText: 'وَلَوۡ نَزَّلۡنَا عَلَيۡكَ كِتَٰبٗا فِى قِرۡطَاسٖ فَلَمَسُوهُ بِأَيۡدِيهِمۡ',
            surahAyahRef: '6:7',
            surahNameFr: 'Al-An\'ām',
            highlightSegment: 'قِرۡطَاسٖ',
            highlightLetter: 'Râ\' suivie d\'un Tā\' lourd',
            ruleApplied: 'Exception : Tafkhīm malgré la Kasrah !',
            ruleTag: 'heavy',
            explanationFr: 'Bien que précédée d\'une Kasrah, la Râ\' est immédiatement suivie dans le même mot d\'une lettre lourde avec Fathah (Tā\' ط). La force du Tā\' impose le Tafkhīm de la Râ\' !',
            transliteration: 'Qirṭās',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/006007.mp3'
          },
          {
            id: 'ex-c12-11',
            arabicText: 'هَلۡ فِى ذَٰلِكَ قَسَمٞ لِّذِى حِجۡرٍ',
            surahAyahRef: '89:5',
            surahNameFr: 'Al-Fajr',
            highlightSegment: 'حِجۡرٍ',
            highlightLetter: 'Râ\' à l\'arrêt : Kasrah + Jīm soukoûn + Râ\'',
            ruleApplied: 'Tarqīq Cas 3 (Waqf après soukoûn)',
            ruleTag: 'izhar',
            explanationFr: 'À l\'arrêt sur « Hijr », la Râ\' devient soukounée, précédée d\'un Jīm soukouné, lui-même précédé d\'un Hā\' avec Kasrah : la Kasrah traverse le soukoûn et amincit la Râ\'.',
            transliteration: 'Hijr',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/089005.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Faire le Tafkhīm sur la Râ\' à l\'arrêt sur des mots se terminant par « -īr » ou « -ayr » (ex: « Bashīr », « Khayr »).',
            correctionFr: 'Le Yā\' attire irrémédiablement la langue vers l\'avant et le bas : la Râ\' à l\'arrêt après tout Yā\' est toujours fine.'
          },
          {
            trapFr: 'Amincir la Râ\' dans « Irji\'ī » (ٱرۡجِعِيٓ) en croyant que la Kasrah sous le Hamzat Wasl est d\'origine.',
            correctionFr: 'La voyelle de Hamzat Wasl est accidentelle et temporaire : la Râ\' reste obligatoirement lourde (Tafkhīm).'
          }
        ]
      },
      {
        id: 'takhlees-al-huroof',
        nameFr: '4. Takhlees Al-Hurūf : L\'Art Suprême de la Décontamination',
        nameAr: 'تَخْلِيصُ الحُرُوفِ : فَنُّ عَدَمِ سِرَايَةِ التَّفْخِيمِ لِلْمُرَقَّقِ',
        mnemonic: 'Chaque lettre est une île indépendante : ne laissez jamais le lourd déborder sur le fin !',
        letters: [],
        definitionFr: '« Takhlees Al-Hurūf » désigne l\'art d\'extraire et de purifier la prononciation de chaque consonne lorsqu\'une lettre fine (Tarqīq) est coincée à côté ou entre deux lettres lourdes (Tafkhīm). C\'est la signature des maîtres de récitation.',
        mechanismFr: 'L\'appareil phonatoire doit modifier instantanément la position de l\'arrière de la langue entre deux consonnes consécutives sans altérer la continuité du souffle ni saccader la récitation.',
        durationHarakat: 0,
        examples: [
          {
            id: 'ex-c12-12',
            arabicText: 'خَلَقَ ٱلۡإِنسَٰنَ مِنۡ عَلَقٍ',
            surahAyahRef: '96:2',
            surahNameFr: 'Al-\'Alaq',
            highlightSegment: 'خَلَقَ',
            highlightLetter: 'Khā (Lourd) -> Lām (Fin !) -> Qāf (Lourd)',
            ruleApplied: 'Chirurgie de Takhlees',
            ruleTag: 'heavy',
            explanationFr: 'Le Khā (خ) est lourd, puis la langue doit redescendre immédiatement pour un Lām (ل) limpide et fin, avant de remonter vivement pour le Qāf (ق) lourd. Ne dites jamais « Kha-lâ-qa » !',
            transliteration: 'Khalaqa',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/096002.mp3'
          },
          {
            id: 'ex-c12-13',
            arabicText: 'وَٱلۡمُطَلَّقَٰتُ يَتَرَبَّصۡنَ بِأَنفُسِهِنَّ ثَلَٰثَةَ قُرُوٓءٖ',
            surahAyahRef: '2:228',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'ٱلۡمُطَلَّقَٰتُ',
            highlightLetter: 'Mīm (Fin) -> Tā (Lourd) -> Lām (Fin) -> Qāf (Lourd) -> Tā (Fin)',
            ruleApplied: 'Alternance complexe de résonance',
            ruleTag: 'heavy',
            explanationFr: 'Ce mot contient une alternance virtuose : Fin (Mīm) -> Lourd (Tā\') -> Fin (Lām doublé) -> Lourd (Qāf) -> Fin (Tā\'). Chaque son garde sa pureté.',
            transliteration: 'Al-mutallaqāt',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002228.mp3'
          },
          {
            id: 'ex-c12-14',
            arabicText: 'وَمَا لَكَ مِنَ ٱللَّهِ مِن وَلِيّٖ وَلَا نَصِيرٍ',
            surahAyahRef: '2:120',
            surahNameFr: 'Al-Baqarah',
            highlightSegment: 'نَصِيرٍ',
            highlightLetter: 'Nūn (Fin !) -> Sād (Lourd) -> Yā/Rā (Fin)',
            ruleApplied: 'Protection du Nūn fin',
            ruleTag: 'heavy',
            explanationFr: 'L\'erreur fréquente est d\'anticiper l\'emphase du Sād et de dire « Nâ-ṣīr ». Le Nūn initial doit rester parfaitement fin : « Na-ṣīr ».',
            transliteration: 'Nasīr',
            audioUrl: 'https://everyayah.com/data/Husary_128kbps/002120.mp3'
          }
        ],
        commonMistakes: [
          {
            trapFr: 'Laisser l\'emphase d\'une consonne contaminer la voyelle ou la consonne légère voisine (ex: dire « Twa-baba\'a » au lieu de « Taba\'a »).',
            correctionFr: 'Entraînez-vous à prononcer le mot au ralenti, syllabe par syllabe, en vérifiant la position de la langue sur chaque lettre.'
          },
          {
            trapFr: 'Faire des pauses hachées artificielles entre les lettres pour éviter la contamination.',
            correctionFr: 'La transition doit être fluide et liée sans interruption de son ni saccade.'
          }
        ]
      }
    ],
    guidedExercises: [
      {
        id: 'exo-c12-1',
        title: 'Chirurgie Phonétique : Takhlees dans « Khalaqa » (96:2)',
        verseArabic: 'خَلَقَ ٱلۡإِنسَٰنَ مِنۡ عَلَقٍ',
        surahAyahRef: '96:2',
        targetSegment: 'خَلَقَ',
        promptFr: 'Dans le mot « خَلَقَ », comment articulerez-vous précisément le Lām central entre les deux géants d\'emphase que sont le Khā et le Qāf ?',
        hintFr: 'Visualisez la descente de la racine de la langue dès la fin du Khā.',
        solutionFr: 'Takhlees Al-Hurūf : Khā lourd (Isti\'lā\') -> Abaissement instantané pour Lām fin (Istifāl) -> Réélévation vive pour Qāf lourd',
        breakdownSteps: [
          'Étape 1 : Articulez le « Khā » (خَ) avec l\'arrière de la langue relevé, lèvres neutres : écho caverneux sans faire la moue.',
          'Étape 2 : Relâchez instantanément l\'arrière de la langue vers le bas lors de l\'attaque du « Lām » (لَ) : le son doit être mince et souriant.',
          'Étape 3 : Remontez immédiatement et fermement l\'arrière de la langue pour frapper le « Qāf » (قَ) lourd.',
          'Piège classique éliminé : Ne prononcez jamais « Kha-LÂ-qa » avec un Lām épais !'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/096002.mp3'
      },
      {
        id: 'exo-c12-2',
        title: 'Le Duel de la Râ\' : « Khabīr » (11:1) vs « Qirṭās » (6:7)',
        verseArabic: 'كِتَٰبٌ أُحۡكِمَتۡ ءَايَٰتُهُۥ ثُمَّ فُصِّلَتۡ مِن لَّدُنۡ حَكِيمٍ خَبِيرٍ',
        surahAyahRef: '11:1',
        targetSegment: 'خَبِيرٍ',
        promptFr: 'Pourquoi la Râ\' de « خَبِيرٍ » s\'amincit-elle à l\'arrêt, tandis que celle de « قِرۡطَاسٖ » reste obligatoirement lourde malgré sa Kasrah précédente ?',
        hintFr: 'Observez la lettre qui suit directement la Râ\' dans chaque mot.',
        solutionFr: '« Khabīr » = Tarqīq (arrêt après Yā\') | « Qirṭās » = Tafkhīm (suivi d\'une lettre lourde avec Fathah dans le même mot)',
        breakdownSteps: [
          'Pour « خَبِيرٍ » à l\'arrêt : la Râ\' prend un soukoûn consécutif à l\'arrêt, précédé par un Yā\' de prolongation. La règle n°4 impose un Tarqīq absolu et soyeux.',
          'Pour « قِرۡطَاسٖ » : bien que précédée d\'un Qāf avec Kasrah, la Râ\' est suivie dans le MÊME mot par le Tā\' (ط), lettre d\'Isti\'lā\' et d\'Itbāq avec Fathah.',
          'La force d\'attraction du Tā\' neutralise l\'effet amincissant de la Kasrah antérieure.',
          'Conclusion : La Râ\' de « Qirṭās » est lue avec une emphase pleine (Tafkhīm).'
        ],
        audioUrl: 'https://everyayah.com/data/Husary_128kbps/011001.mp3'
      }
    ],
    quizzes: [
      {
        id: 'q-c12-1',
        type: 'mcq',
        promptFr: 'Quelle formule mnémotechnique rassemble les 7 lettres qui sont TOUJOURS prononcées avec emphase (Tafkhīm) ?',
        verseArabic: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ',
        surahAyahRef: '1:7',
        options: [
          'خُصَّ ضَغۡطٍ قِظۡ (Khuṣṣa Ḍaghṭin Qiz)',
          'قُطۡبُ جَدٍّ (Qutbu Jaddin)',
          'يَرۡمَلُونَ (Yarmalūn)',
          'أَخِي هَاكَ عِلۡمًا (Akhī Hāka \'Ilman)'
        ],
        correctAnswer: 'خُصَّ ضَغۡطٍ قِظۡ (Khuṣṣa Ḍaghṭin Qiz)',
        explanationFr: 'Les 7 lettres d\'Isti\'lā\' sont : Khā (خ), Sād (ص), Dād (ض), Ghayn (غ), Tā (ط), Qāf (ق), Zā (ظ). Elles ne sont jamais amincies !',
        ruleId: 'heavy-letters-degrees'
      },
      {
        id: 'q-c12-2',
        type: 'mcq',
        promptFr: 'Pourquoi l\'Alif de prolongation est-il lourd dans « خَالِدِينَ » mais fin dans « إِيَّاكَ » ?',
        verseArabic: 'وَٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَنَّةِۖ هُمۡ فِيهَا خَٰلِدُونَ',
        surahAyahRef: '2:82',
        options: [
          'Car l\'Alif est un caméléon sans timbre propre : il copie l\'emphase ou la finesse de la lettre qui le précède directement',
          'Car l\'Alif dépend de la lettre qui le suit',
          'Car l\'Alif est toujours lourd au début des mots et fin à la fin',
          'Car cela dépend du choix arbitraire du récitateur'
        ],
        correctAnswer: 'Car l\'Alif est un caméléon sans timbre propre : il copie l\'emphase ou la finesse de la lettre qui le précède directement',
        explanationFr: 'L\'Alif est la seule lettre qui suit aveuglément son prédécesseur : précédé du Khā lourd -> Alif lourd ; précédé du Yā\' fin -> Alif fin.',
        ruleId: 'hybrid-alif-lam'
      },
      {
        id: 'q-c12-3',
        type: 'mcq',
        promptFr: 'Dans « Qirṭās » (قِرۡطَاسٖ), pourquoi la Râ\' reste-t-elle EMPHATIQUE bien qu\'elle soit précédée d\'une Kasrah ?',
        verseArabic: 'وَلَوۡ نَزَّلۡنَا عَلَيۡكَ كِتَٰبٗا فِى قِرۡطَاسٖ',
        surahAyahRef: '6:7',
        options: [
          'Car elle est immédiatement suivie dans le même mot par une lettre lourde avec Fathah (le Tā\' ط)',
          'Car le mot contient 5 lettres',
          'Car c\'est un nom propre étranger',
          'Car le Qāf initial a une Shaddah'
        ],
        correctAnswer: 'Car elle est immédiatement suivie dans le même mot par une lettre lourde avec Fathah (le Tā\' ط)',
        explanationFr: 'Pour que la Râ\' soukounée s\'amincisse après une Kasrah, la lettre suivante ne doit pas être une consonne lourde dans le même mot. Ici le Tā\' impose l\'emphase.',
        ruleId: 'hybrid-raa-rules'
      },
      {
        id: 'q-c12-4',
        type: 'error_detect',
        promptFr: 'Un étudiant prononce le Khā dans « خَلَقَ » en projetant et en arrondissant les lèvres comme pour siffler. Quelle est l\'erreur ?',
        verseArabic: 'خَلَقَ ٱلۡإِنسَٰنَ مِنۡ عَلَقٍ',
        targetWord: 'خَلَقَ',
        surahAyahRef: '96:2',
        options: [
          'Erreur d\'arrondissement des lèvres : l\'emphase (Tafkhīm) provient uniquement de l\'élévation du fond de la langue (Isti\'lā\') dans la bouche. Les lèvres ne doivent jamais s\'arrondir sans Dammah !',
          'Aucune erreur, arrondir les lèvres est la seule façon de faire du Tafkhīm.',
          'Il fallait faire une prolongation de 4 temps.',
          'Le Khā doit être prononcé comme un Hā.'
        ],
        correctAnswer: 'Erreur d\'arrondissement des lèvres : l\'emphase (Tafkhīm) provient uniquement de l\'élévation du fond de la langue (Isti\'lā\') dans la bouche. Les lèvres ne doivent jamais s\'arrondir sans Dammah !',
        explanationFr: 'C\'est l\'un des pièges les plus fréquents dénoncés par les maîtres de Tajwīd : projeter les lèvres déforme le timbre de la Fathah en un son « O » hybride défectueux.',
        ruleId: 'heavy-letters-degrees'
      },
      {
        id: 'q-c12-5',
        type: 'click_word',
        promptFr: 'Repérage auditif : Cliquez sur le mot où la lettre Râ\' (ر) doit être prononcée FINE (Tarqīq) lors d\'un arrêt de pause (Waqf).',
        verseArabic: 'كِتَٰبٌ أُحۡكِمَتۡ ءَايَٰتُهُۥ ثُمَّ فُصِّلَتۡ مِن لَّدُنۡ حَكِيمٍ خَبِيرٍ',
        clickableSegments: ['كِتَٰبٌ', 'أُحۡكِمَتۡ', 'ءَايَٰتُهُۥ', 'فُصِّلَتۡ', 'حَكِيمٍ', 'خَبِيرٍ'],
        correctAnswer: 'خَبِيرٍ',
        explanationFr: 'À l\'arrêt sur « خَبِيرٍ », la Râ\' prend un soukoûn précédé par un Yā\' sākinah : elle s\'amincit obligatoirement (Tarqīq) avec élégance et finesse.',
        ruleId: 'hybrid-raa-rules'
      }
    ]
  }
];

