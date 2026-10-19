# -*- coding: utf-8 -*-
"""
Generator for Makhārij & Sifāt data based on 'التجويد المبسط للمبتدئين' (pages 10-26).
"""
import json

GENERAL_MAKHAREJ = [
    {
        "id": "jawf",
        "titleFr": "Al-Jawf (Le Vide Buccal & Pharyngé)",
        "titleAr": "الجَوْف",
        "color": "#3b82f6",
        "specificCount": 1,
        "lettersCount": 3,
        "descriptionFr": "Le vide étendu de la gorge jusqu'aux lèvres. C'est un point d'articulation estimé (Muqaddar), sans contact physique avec un tissu précis.",
        "letters": ["ا", "و", "ي"],
        "jazariyyahVerse": "فَأَلِفُ الجَوْفِ وَأُخْتَاهَا وَهِي ... حُرُوفُ مَدٍّ لِلْهَوَاءِ تَنْتَهِي"
    },
    {
        "id": "halq",
        "titleFr": "Al-Halq (La Gorge)",
        "titleAr": "الحَلْق",
        "color": "#8b5cf6",
        "specificCount": 3,
        "lettersCount": 6,
        "descriptionFr": "La gorge est divisée en 3 zones précises : le fond (Aqsā), le milieu (Wasat) et le haut (Adnā).",
        "letters": ["ء", "هـ", "ع", "ح", "غ", "خ"],
        "jazariyyahVerse": "ثُمَّ لأَقْصَى الحَلْقِ هَمْزٌ هَاءُ ... ثُمَّ لِوَسْطِهِ فَعَيْنٌ حَاءُ ... أَدْنَاهُ غَيْنٌ خَاؤُهَا"
    },
    {
        "id": "lisan",
        "titleFr": "Al-Lisān (La Langue)",
        "titleAr": "اللِّسَان",
        "color": "#10b981",
        "specificCount": 10,
        "lettersCount": 18,
        "descriptionFr": "L'organe le plus agile et le plus riche : il contient 10 points de sortie spécifiques produisant 18 consonnes.",
        "letters": ["ق", "ك", "ج", "ش", "ي", "ض", "ل", "ن", "ر", "ط", "د", "ت", "ص", "ز", "س", "ظ", "ذ", "ث"],
        "jazariyyahVerse": "وَالقَافُ أَقْصَى اللِّسَانِ فَوْقُ ثُمَّ الكَافُ ... أَسْفَلُ وَالوَسْطُ فَجِيمُ الشِّينُ يَا"
    },
    {
        "id": "shafatan",
        "titleFr": "Ash-Shafatān (Les Lèvres)",
        "titleAr": "الشَّفَتَان",
        "color": "#f59e0b",
        "specificCount": 2,
        "lettersCount": 4,
        "descriptionFr": "La lèvre inférieure avec les incisives (pour le Fā'), et les deux lèvres réunies (pour Wāw, Bā', Mīm).",
        "letters": ["ف", "و", "ب", "م"],
        "jazariyyahVerse": "فَمِنْ بَطْنِ الشَّفَهْ ... فَالْفَا مَعَ اطْرَافِ الثَّنَايَا المُشْرِفَهْ ... لِلشَّفَتَيْنِ الوَاوُ بَاءٌ مِيمُ"
    },
    {
        "id": "khayshum",
        "titleFr": "Al-Khayshūm (La Cavité Nasale)",
        "titleAr": "الخَيْشُوم",
        "color": "#ec4899",
        "specificCount": 1,
        "lettersCount": 2,
        "descriptionFr": "Le conduit nasal au-dessus du palais, siège exclusif du bourdonnement de la Ghunnah pour le Nūn et le Mīm.",
        "letters": ["ن", "م"],
        "jazariyyahVerse": "وَغُنَّةٌ مَخْرَجُهَا الخَيْشُومُ"
    }
]

ALL_28_LETTERS = [
    {
        "letter": "ء",
        "nameFr": "Hamzah",
        "nameAr": "هَمْزَة",
        "generalMakhraj": "halq",
        "generalMakhrajFr": "Al-Halq (La Gorge)",
        "specificMakhrajFr": "Aqsā al-Halq : le fond de la gorge, au niveau des cordes vocales.",
        "specificMakhrajAr": "أَقْصَى الحَلْقِ عِنْدَ الحَنْجَرَةِ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr (Vocalité sans souffle lâche)",
            "shiddahOrRakhawah": "Shiddah (Blocage complet du son)",
            "istilaOrIstifal": "Istifāl (Finesse / Abaissement)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt (Consistance)"
        },
        "sifatWithoutOpposites": [],
        "strength": "Forte (Qawiyyah)",
        "commonMistakesFr": "Ne pas faire de rebond de Qalqalah lorsqu'elle est soukounée (ex: ne pas dire « Yu'u-minūn ») et ne pas la transformer en Hā'.",
        "audioSampleText": "أَأۡ - يُؤۡمِنُونَ",
        "jazariyyahVerse": "ثُمَّ لأَقْصَى الحَلْقِ هَمْزٌ هَاءُ"
    },
    {
        "letter": "هـ",
        "nameFr": "Hā'",
        "nameAr": "هَاء",
        "generalMakhraj": "halq",
        "generalMakhrajFr": "Al-Halq (La Gorge)",
        "specificMakhrajFr": "Aqsā al-Halq : le fond de la gorge, avec ouverture détendue des cordes vocales.",
        "specificMakhrajAr": "أَقْصَى الحَلْقِ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Hams (Souffle d'air important)",
            "shiddahOrRakhawah": "Rakhāwah (Écoulement libre du son)",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Khifā' (Lettre très discrète nécessitant un appui d'air)"],
        "strength": "Faible (Da'īfah - tous ses attributs sont faibles)",
        "commonMistakesFr": "La faire disparaître par manque de souffle, ou la rendre lourde à côté de lettres emphatiques (ex: dans « Allāh » ou « Ihdinā »).",
        "audioSampleText": "أَهۡ - ٱهۡدِنَا",
        "jazariyyahVerse": "ثُمَّ لأَقْصَى الحَلْقِ هَمْزٌ هَاءُ"
    },
    {
        "letter": "ع",
        "nameFr": "'Ayn",
        "nameAr": "عَيْن",
        "generalMakhraj": "halq",
        "generalMakhrajFr": "Al-Halq (La Gorge)",
        "specificMakhrajFr": "Wasat al-Halq : le milieu de la gorge, au niveau de l'épiglotte qui recule vers la paroi arrière.",
        "specificMakhrajAr": "وَسَطُ الحَلْقِ عِنْدَ لِسَانِ المِزْمَارِ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr (Clarté vocale)",
            "shiddahOrRakhawah": "Tawassut / Bayniyyah (Modération du son : ni bloqué ni coulant)",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": [],
        "strength": "Moyenne (Mutawassitah)",
        "commonMistakesFr": "L'étrangler de façon gutturale agressive ou la confondre avec la Hamzah (dire « A'lamu » au lieu de « Na'lamu »).",
        "audioSampleText": "أَعۡ - نَعۡبُدُ",
        "jazariyyahVerse": "ثُمَّ لِوَسْطِهِ فَعَيْنٌ حَاءُ"
    },
    {
        "letter": "ح",
        "nameFr": "Hā'",
        "nameAr": "حَاء",
        "generalMakhraj": "halq",
        "generalMakhrajFr": "Al-Halq (La Gorge)",
        "specificMakhrajFr": "Wasat al-Halq : le milieu de la gorge, avec friction douce et souffle d'air tiède.",
        "specificMakhrajAr": "وَسَطُ الحَلْقِ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Hams (Souffle)",
            "shiddahOrRakhawah": "Rakhāwah (Écoulement)",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": [],
        "strength": "Faible (Da'īfah)",
        "commonMistakesFr": "La racler comme un Khā (خ) ou l'affaiblir en Hā' doux (هـ). Elle doit être pure et limpide.",
        "audioSampleText": "أَحۡ - ٱلرَّحۡمَٰنِ",
        "jazariyyahVerse": "ثُمَّ لِوَسْطِهِ فَعَيْنٌ حَاءُ"
    },
    {
        "letter": "غ",
        "nameFr": "Ghayn",
        "nameAr": "غَيْن",
        "generalMakhraj": "halq",
        "generalMakhrajFr": "Al-Halq (La Gorge)",
        "specificMakhrajFr": "Adnā al-Halq : le haut de la gorge, au niveau de la luette.",
        "specificMakhrajAr": "أَدْنَى الحَلْقِ عِنْدَ اللَّهَاةِ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr (Son vibrant)",
            "shiddahOrRakhawah": "Rakhāwah (Son qui s'écoule)",
            "istilaOrIstifal": "Isti'lā (Élévation / Emphase)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": [],
        "strength": "Moyenne / Emphatique (Mufakhkhamah)",
        "commonMistakesFr": "La faire claquer comme un Qāf ou la prononcer comme le « r » français grasseyé.",
        "audioSampleText": "أَغۡ - غَيۡرِ ٱلۡمَغۡضُوبِ",
        "jazariyyahVerse": "أَدْنَاهُ غَيْنٌ خَاؤُهَا"
    },
    {
        "letter": "خ",
        "nameFr": "Khā'",
        "nameAr": "خَاء",
        "generalMakhraj": "halq",
        "generalMakhrajFr": "Al-Halq (La Gorge)",
        "specificMakhrajFr": "Adnā al-Halq : le haut de la gorge, avec friction sèche et souffle.",
        "specificMakhrajAr": "أَدْنَى الحَلْقِ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Hams (Souffle)",
            "shiddahOrRakhawah": "Rakhāwah (Écoulement)",
            "istilaOrIstifal": "Isti'lā (Élévation / Emphase)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": [],
        "strength": "Moyenne / Emphatique",
        "commonMistakesFr": "Arrondir les lèvres en projetant un « O » pour la rendre lourde. L'emphase vient du fond de la langue et non des lèvres !",
        "audioSampleText": "أَخۡ - خَلَقَ",
        "jazariyyahVerse": "أَدْنَاهُ غَيْنٌ خَاؤُهَا"
    },
    {
        "letter": "ق",
        "nameFr": "Qāf",
        "nameAr": "قَاف",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Aqsā al-Lisān : l'extrême arrière de la langue en contact ferme contre le palais mou.",
        "specificMakhrajAr": "أَقْصَى اللِّسَانِ مَعَ الحَنَكِ اللَّحْمِيِّ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr (Pas de souffle)",
            "shiddahOrRakhawah": "Shiddah (Blocage net)",
            "istilaOrIstifal": "Isti'lā (Emphase majeure)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Qalqalah (Rebond obligatoire à l'état soukouné)"],
        "strength": "Forte (Qawiyyah)",
        "commonMistakesFr": "La prononcer comme un Kāf français ou l'omettre au profit d'un coup de glotte (dialectal).",
        "audioSampleText": "أَقۡ - ٱقۡرَأۡ",
        "jazariyyahVerse": "وَالقَافُ أَقْصَى اللِّسَانِ فَوْقُ"
    },
    {
        "letter": "ك",
        "nameFr": "Kāf",
        "nameAr": "كَاف",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Aqsā al-Lisān asfal : juste en dessous du Qāf, contre la frontière du palais mou et osseux.",
        "specificMakhrajAr": "أَقْصَى اللِّسَانِ تَحْتَ مَخْرَجِ القَافِ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Hams (Souffle libéré après le blocage)",
            "shiddahOrRakhawah": "Shiddah (Fermeture initiale totale)",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": [],
        "strength": "Moyenne",
        "commonMistakesFr": "Exagérer le souffle jusqu'à siffler un « s » ou au contraire bloquer le son sans jamais libérer le Hams.",
        "audioSampleText": "أَكۡ - كِتَٰبٌ",
        "jazariyyahVerse": "ثُمَّ الكَافُ أَسْفَلُ"
    },
    {
        "letter": "ج",
        "nameFr": "Jīm",
        "nameAr": "جِيم",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Wasat al-Lisān : le milieu de la langue fermement plaqué contre le palais dur.",
        "specificMakhrajAr": "وَسَطُ اللِّسَانِ مَعَ الحَنَكِ الأَعْلَى",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr (Clarté)",
            "shiddahOrRakhawah": "Shiddah (Blocage total sans fuite d'air)",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Qalqalah (Rebond à l'état soukouné)"],
        "strength": "Forte (Qawiyyah)",
        "commonMistakesFr": "La prononcer comme un « j » français coulant (ex: « jour »). Le Jīm coranique est un son bloqué sec avec rebond !",
        "audioSampleText": "أَجۡ - يَجۡعَلۡ",
        "jazariyyahVerse": "وَالوَسْطُ فَجِيمُ الشِّينُ يَا"
    },
    {
        "letter": "ش",
        "nameFr": "Shīn",
        "nameAr": "شِين",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Wasat al-Lisān : le milieu de la langue s'élève sans bloquer le palais, laissant diffuser l'air.",
        "specificMakhrajAr": "وَسَطُ اللِّسَانِ دُونَ انْغِلاقٍ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Hams (Souffle)",
            "shiddahOrRakhawah": "Rakhāwah (Son long)",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Tafash-shī (Propagation et diffusion large du souffle dans la bouche)"],
        "strength": "Moyenne / Faible",
        "commonMistakesFr": "Arrondir les lèvres comme le « ch » français. La bouche reste neutre et la langue étale le souffle.",
        "audioSampleText": "أَشۡ - ٱلشَّمۡسِ",
        "jazariyyahVerse": "وَالوَسْطُ فَجِيمُ الشِّينُ يَا"
    },
    {
        "letter": "ي",
        "nameFr": "Yā' (non-maddiyyah)",
        "nameAr": "يَاء غَيْر مَدِّيَّة",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Wasat al-Lisān : le milieu de la langue s'élève modérément sans toucher le palais.",
        "specificMakhrajAr": "وَسَطُ اللِّسَانِ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr (Clarté)",
            "shiddahOrRakhawah": "Rakhāwah (Son qui s'écoule)",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh (Ouverture)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Līn (si soukounée précédée d'une Fathah)"],
        "strength": "Faible",
        "commonMistakesFr": "Appuyer trop fort en créant une friction parasite semblable à un Jīm.",
        "audioSampleText": "أَيۡ - يَوۡمِ ٱلدِّينِ",
        "jazariyyahVerse": "وَالوَسْطُ فَجِيمُ الشِّينُ يَا"
    },
    {
        "letter": "ض",
        "nameFr": "Dād",
        "nameAr": "ضَاد",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Hāfat al-Lisān : l'un des bords latéraux de la langue (ou les deux) contre les molaires supérieures.",
        "specificMakhrajAr": "إِحْدَى حَافَتَيِ اللِّسَانِ مَعَ الأَضْرَاسِ العُلْيَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr (Vocalité)",
            "shiddahOrRakhawah": "Rakhāwah (Écoulement contrôlé du son)",
            "istilaOrIstifal": "Isti'lā (Élévation)",
            "itbaqOrInfitah": "Itbāq (Plaquage complet du dos de la langue)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Istitālah (Allongement du bord de la langue de l'arrière vers l'avant)"],
        "strength": "Forte (Qawiyyah)",
        "commonMistakesFr": "La prononcer comme un Dāl emphatique claqué sans Istitālah, ou comme un Zā' / Dhā' lâche.",
        "audioSampleText": "أَضۡ - وَلَا ٱلضَّآلِّينَ",
        "jazariyyahVerse": "وَالضَّادُ مِنْ حَافَتِهِ إِذْ وَلِيَا ... الاضْرَاسَ مِنْ أَيْسَرَ أَوْ يُمْنَاهَا"
    },
    {
        "letter": "ل",
        "nameFr": "Lām",
        "nameAr": "لاَم",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Adnā hāfat al-lisān : le bord antérieur de la langue jusqu'à son bout, contre la gencive des dents du haut.",
        "specificMakhrajAr": "أَدْنَى حَافَةِ اللِّسَانِ إِلَى مُنْتَهَى طَرَفِهِ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr",
            "shiddahOrRakhawah": "Tawassut (Modération)",
            "istilaOrIstifal": "Istifāl (Finesse - sauf dans le Nom d'Allāh)",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Idhlāq (Émission fluide et facile)"
        },
        "sifatWithoutOpposites": ["Inhirāf (Déviation du son par les côtés de la langue)"],
        "strength": "Moyenne",
        "commonMistakesFr": "L'alourdir systématiquement comme en anglais (dark L) : en arabe, elle est fine et lumineuse.",
        "audioSampleText": "أَلۡ - ٱلۡحَمۡدُ",
        "jazariyyahVerse": "وَاللاَّمُ أَدْنَاهَا لِمُنْتَهَاهَا"
    },
    {
        "letter": "ن",
        "nameFr": "Nūn",
        "nameAr": "نُون",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue) + Nez",
        "specificMakhrajFr": "Taraf al-Lisān : le bout de la langue contre la gencive supérieure, complété par la cavité nasale.",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ مَعَ أُصُولِ الثَّنَايَا العُلْيَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr",
            "shiddahOrRakhawah": "Tawassut (Modération)",
            "istilaOrIstifal": "Istifāl",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Idhlāq"
        },
        "sifatWithoutOpposites": ["Ghunnah (Nasalisation indispensable)"],
        "strength": "Moyenne",
        "commonMistakesFr": "Couper la Ghunnah ou au contraire en rajouter sans règle d'Ikhfā ou d'Idghām.",
        "audioSampleText": "أَنۡ - نَعۡبُدُ",
        "jazariyyahVerse": "وَالنُّونُ مِنْ طَرَفِهِ تَحْتُ اجْعَلُوا"
    },
    {
        "letter": "ر",
        "nameFr": "Râ",
        "nameAr": "رَاء",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Taraf al-lisān légèrement orienté vers son dos contre la gencive supérieure.",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ مَعَ ظَهْرِهِ عِنْدَ لِثَةِ الثَّنَايَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr",
            "shiddahOrRakhawah": "Tawassut (Modération)",
            "istilaOrIstifal": "Istifāl (mais capable de Tafkhīm)",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Idhlāq"
        },
        "sifatWithoutOpposites": ["Inhirāf (Déviation)", "Takrīr (Vibration limitée à une seule pulsation !)"],
        "strength": "Moyenne",
        "commonMistakesFr": "Faire rouler excessivement la langue (Takrīr excessif : « rrrrr ») ou la grasseyer à la française.",
        "audioSampleText": "أَرۡ - ٱلرَّحۡمَٰنِ",
        "jazariyyahVerse": "وَالرَّا يُدَانِيهِ لِظَهْرٍ أَدْخَلُ ... وَبِتَكْرِيرٍ جُعِلْ"
    },
    {
        "letter": "ط",
        "nameFr": "Tā'",
        "nameAr": "طَاء",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Taraf al-Lisān fermement appuyé contre la racine des incisives supérieures (الحروف النطعية).",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ مَعَ أُصُولِ الثَّنَايَا العُلْيَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr (Clarté)",
            "shiddahOrRakhawah": "Shiddah (Blocage total)",
            "istilaOrIstifal": "Isti'lā (Élévation maximale)",
            "itbaqOrInfitah": "Itbāq (Adhérence maximale)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Qalqalah (Rebond puissant à l'état soukouné)"],
        "strength": "Très Forte (La lettre la plus forte de tout l'alphabet arabe)",
        "commonMistakesFr": "La prononcer comme un Tā' fin (ت) en perdant l'Itbāq et l'emphase.",
        "audioSampleText": "أَطۡ - ٱلصِّرَٰطَ",
        "jazariyyahVerse": "وَالطَّاءُ وَالدَّالُ وَتَا مِنْهُ وَمِنْ ... عُلْيَا الثَّنَايَا"
    },
    {
        "letter": "د",
        "nameFr": "Dāl",
        "nameAr": "دَال",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Taraf al-Lisān contre la racine des incisives supérieures.",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ مَعَ أُصُولِ الثَّنَايَا العُلْيَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr",
            "shiddahOrRakhawah": "Shiddah",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Qalqalah (Rebond soukouné)"],
        "strength": "Forte",
        "commonMistakesFr": "L'alourdir en un Dād à proximité de lettres emphatiques.",
        "audioSampleText": "أَدۡ - قُلۡ هُوَ ٱللَّهُ أَحَدٌ",
        "jazariyyahVerse": "وَالطَّاءُ وَالدَّالُ وَتَا مِنْهُ"
    },
    {
        "letter": "ت",
        "nameFr": "Tā'",
        "nameAr": "تَاء",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Taraf al-Lisān contre la racine des incisives supérieures, avec libération douce d'air.",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ مَعَ أُصُولِ الثَّنَايَا العُلْيَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Hams (Souffle)",
            "shiddahOrRakhawah": "Shiddah (Blocage puis déclic)",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": [],
        "strength": "Faible",
        "commonMistakesFr": "Exagérer le Hams jusqu'à faire un son « ts » ou au contraire l'alourdir en Tā' (ط).",
        "audioSampleText": "أَتۡ - نَسۡتَعِينُ",
        "jazariyyahVerse": "وَالطَّاءُ وَالدَّالُ وَتَا مِنْهُ"
    },
    {
        "letter": "ص",
        "nameFr": "Sād",
        "nameAr": "صَاد",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Taraf al-lisān pointé juste au-dessus des incisives inférieures (الحروف الأسلية).",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ فَوْقَ الثَّنَايَا السُّفْلَى",
        "sifatWithOpposites": {
            "hamsOrJahr": "Hams (Souffle)",
            "shiddahOrRakhawah": "Rakhāwah (Écoulement)",
            "istilaOrIstifal": "Isti'lā (Élévation)",
            "itbaqOrInfitah": "Itbāq (Dos de langue plaqué)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Safīr (Sifflement aigu et puissant)"],
        "strength": "Forte",
        "commonMistakesFr": "Arrondir les lèvres en projetant un « O » au lieu de lever l'arrière de la langue.",
        "audioSampleText": "أَصۡ - ٱلصِّرَٰطَ",
        "jazariyyahVerse": "وَالصَّفِيرُ مُسْتَكِنْ ... مِنْهُ وَمِنْ فَوْقِ الثَّنَايَا السُّفْلَى"
    },
    {
        "letter": "ز",
        "nameFr": "Zāy",
        "nameAr": "زَاي",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Taraf al-lisān au-dessus des incisives inférieures, avec vibration vocale nette.",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ فَوْقَ الثَّنَايَا السُّفْلَى",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr (Vibration)",
            "shiddahOrRakhawah": "Rakhāwah",
            "istilaOrIstifal": "Istifāl",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Safīr (Sifflement vibrant comme une abeille)"],
        "strength": "Moyenne",
        "commonMistakesFr": "Laisser s'échapper du souffle lâche ou la confondre avec le Dhāl (ذ).",
        "audioSampleText": "أَزۡ - أَنزَلۡنَا",
        "jazariyyahVerse": "وَالصَّفِيرُ مُسْتَكِنْ ... وَالزَّايُ وَالسِّينُ"
    },
    {
        "letter": "س",
        "nameFr": "Sīn",
        "nameAr": "سِين",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Taraf al-lisān au-dessus des incisives inférieures, avec sifflement fin et doux.",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ فَوْقَ الثَّنَايَا السُّفْلَى",
        "sifatWithOpposites": {
            "hamsOrJahr": "Hams (Souffle)",
            "shiddahOrRakhawah": "Rakhāwah",
            "istilaOrIstifal": "Istifāl (Finesse absolue)",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Safīr (Sifflement doux sans emphase)"],
        "strength": "Faible",
        "commonMistakesFr": "L'alourdir en Sād (ص) lorsqu'elle est voisine de lettres emphatiques (ex: dans « Mustaqīm »).",
        "audioSampleText": "أَسۡ - ٱلۡمُسۡتَقِيمَ",
        "jazariyyahVerse": "وَالزَّايُ وَالسِّينُ مِنْهُ"
    },
    {
        "letter": "ظ",
        "nameFr": "Dhā'",
        "nameAr": "ظَاء",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Taraf al-lisān en contact avec le bord tranchant des incisives supérieures (الحروف اللثوية).",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ مَعَ أَطْرَافِ الثَّنَايَا العُلْيَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr (Clarté)",
            "shiddahOrRakhawah": "Rakhāwah (Son qui s'écoule)",
            "istilaOrIstifal": "Isti'lā (Élévation)",
            "itbaqOrInfitah": "Itbāq (Adhérence)",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": [],
        "strength": "Forte (Qawiyyah)",
        "commonMistakesFr": "La prononcer comme un Zā' lourd ou ne pas faire dépasser légèrement la langue contre les dents.",
        "audioSampleText": "أَظۡ - ٱلظَّٰلِمِينَ",
        "jazariyyahVerse": "وَالظَّاءُ وَالذَّالُ وَثَا لِلْعُلْيَا ... مِنْ طَرَفَيْهِمَا"
    },
    {
        "letter": "ذ",
        "nameFr": "Dhāl",
        "nameAr": "ذَال",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Taraf al-lisān avec le bord des incisives supérieures (comme le « th » anglais de « this »).",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ مَعَ أَطْرَافِ الثَّنَايَا العُلْيَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr",
            "shiddahOrRakhawah": "Rakhāwah",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": [],
        "strength": "Faible",
        "commonMistakesFr": "La prononcer comme un « z » en gardant la langue à l'intérieur de la bouche.",
        "audioSampleText": "أَذۡ - ٱلَّذِينَ",
        "jazariyyahVerse": "وَالظَّاءُ وَالذَّالُ وَثَا لِلْعُلْيَا"
    },
    {
        "letter": "ث",
        "nameFr": "Thā'",
        "nameAr": "ثَاء",
        "generalMakhraj": "lisan",
        "generalMakhrajFr": "Al-Lisān (La Langue)",
        "specificMakhrajFr": "Taraf al-lisān avec le bord des incisives supérieures (comme le « th » anglais de « thank you »).",
        "specificMakhrajAr": "طَرَفُ اللِّسَانِ مَعَ أَطْرَافِ الثَّنَايَا العُلْيَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Hams (Souffle)",
            "shiddahOrRakhawah": "Rakhāwah",
            "istilaOrIstifal": "Istifāl (Finesse)",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": [],
        "strength": "Faible",
        "commonMistakesFr": "La prononcer comme un « s » ou un « t » français.",
        "audioSampleText": "أَثۡ - ثَلَٰثَةٌ",
        "jazariyyahVerse": "وَالظَّاءُ وَالذَّالُ وَثَا لِلْعُلْيَا"
    },
    {
        "letter": "ف",
        "nameFr": "Fā'",
        "nameAr": "فَاء",
        "generalMakhraj": "shafatan",
        "generalMakhrajFr": "Ash-Shafatān (Les Lèvres)",
        "specificMakhrajFr": "Batn ash-shafah as-suflā : l'intérieur doux de la lèvre inférieure avec le bord des incisives supérieures.",
        "specificMakhrajAr": "بَطْنُ الشَّفَةِ السُّفْلَى مَعَ أَطْرَافِ الثَّنَايَا العُلْيَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Hams (Souffle d'air)",
            "shiddahOrRakhawah": "Rakhāwah",
            "istilaOrIstifal": "Istifāl",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Idhlāq"
        },
        "sifatWithoutOpposites": [],
        "strength": "Faible",
        "commonMistakesFr": "Poser les deux lèvres ensemble (comme pour un B) au lieu d'utiliser l'intérieur de la lèvre inférieure.",
        "audioSampleText": "أَفۡ - فِيهِ",
        "jazariyyahVerse": "فَمِنْ بَطْنِ الشَّفَهْ ... فَالْفَا مَعَ اطْرَافِ الثَّنَايَا المُشْرِفَهْ"
    },
    {
        "letter": "و",
        "nameFr": "Wāw (non-maddiyyah)",
        "nameAr": "وَاو غَيْر مَدِّيَّة",
        "generalMakhraj": "shafatan",
        "generalMakhrajFr": "Ash-Shafatān (Les Lèvres)",
        "specificMakhrajFr": "Bayna ash-shafatayn : arrondissement prononcé des lèvres vers l'avant sans contact occlusif.",
        "specificMakhrajAr": "بَيْنَ الشَّفَتَيْنِ مَعَ انْضِمَامِهِمَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr",
            "shiddahOrRakhawah": "Rakhāwah",
            "istilaOrIstifal": "Istifāl",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Ismāt"
        },
        "sifatWithoutOpposites": ["Līn (si soukounée précédée de Fathah)"],
        "strength": "Faible",
        "commonMistakesFr": "La prononcer comme un « v » ou ne pas avancer suffisamment les lèvres en rond.",
        "audioSampleText": "أَوۡ - خَوۡفٍ",
        "jazariyyahVerse": "لِلشَّفَتَيْنِ الوَاوُ بَاءٌ مِيمُ"
    },
    {
        "letter": "ب",
        "nameFr": "Bā'",
        "nameAr": "بَاء",
        "generalMakhraj": "shafatan",
        "generalMakhrajFr": "Ash-Shafatān (Les Lèvres)",
        "specificMakhrajFr": "Bayna ash-shafatayn : fermeture hermétique et appuyée des deux lèvres.",
        "specificMakhrajAr": "بَيْنَ الشَّفَتَيْنِ بِانْطِبَاقِهِمَا",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr",
            "shiddahOrRakhawah": "Shiddah",
            "istilaOrIstifal": "Istifāl",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Idhlāq"
        },
        "sifatWithoutOpposites": ["Qalqalah (Rebond vigoureux à l'arrêt)"],
        "strength": "Forte (Qawiyyah)",
        "commonMistakesFr": "Laisser fuiter de l'air en soufflant un « p » (interdit en arabe) ou oublier la Qalqalah soukounée.",
        "audioSampleText": "أَبۡ - تَبَّتۡ يَدَآ أَبِى لَهَبٖ",
        "jazariyyahVerse": "لِلشَّفَتَيْنِ الوَاوُ بَاءٌ مِيمُ"
    },
    {
        "letter": "م",
        "nameFr": "Mīm",
        "nameAr": "مِيم",
        "generalMakhraj": "shafatan",
        "generalMakhrajFr": "Ash-Shafatān (Les Lèvres) + Nez",
        "specificMakhrajFr": "Bayna ash-shafatayn : contact doux des deux lèvres, complété par la cavité nasale.",
        "specificMakhrajAr": "بَيْنَ الشَّفَتَيْنِ مَعَ الغُنَّةِ مِنَ الخَيْشُومِ",
        "sifatWithOpposites": {
            "hamsOrJahr": "Jahr",
            "shiddahOrRakhawah": "Tawassut",
            "istilaOrIstifal": "Istifāl",
            "itbaqOrInfitah": "Infitāh",
            "idhlaqOrIsmat": "Idhlāq"
        },
        "sifatWithoutOpposites": ["Ghunnah (Nasalisation indispensable)"],
        "strength": "Moyenne",
        "commonMistakesFr": "Pincer excessivement les lèvres ou bloquer le passage de l'air par le nez.",
        "audioSampleText": "أَمۡ - ٱلۡحَمۡدُ",
        "jazariyyahVerse": "لِلشَّفَتَيْنِ الوَاوُ بَاءٌ مِيمُ"
    }
]

SIFAT_CLASSIFICATION = {
    "withOpposites": [
        {
            "id": "hams-vs-jahr",
            "titleFr": "1. Le Souffle (Hams) vs La Vocalité (Jahr)",
            "titleAr": "الهَمْسُ ضِدَّ الجَهْرِ",
            "hams": {
                "nameFr": "Al-Hams (Écoulement du souffle)",
                "mnemonic": "فَحَثَّهُ شَخْصٌ سَكَتَ (10 lettres)",
                "letters": ["ف", "ح", "ث", "هـ", "ش", "خ", "ص", "س", "ك", "ت"],
                "definitionFr": "Écoulement continu de l'air lors de l'émission de la consonne dû à l'ouverture détendue des cordes vocales."
            },
            "jahr": {
                "nameFr": "Al-Jahr (Vibration et clarté vocale)",
                "letters": "Les 18 lettres restantes de l'alphabet",
                "definitionFr": "Rétention du souffle et mise en vibration puissante des cordes vocales."
            }
        },
        {
            "id": "shiddah-vs-rakhawah",
            "titleFr": "2. La Force (Shiddah) vs La Douceur (Rakhāwah) vs La Modération (Tawassut)",
            "titleAr": "الشِّدَّةُ وَالرَّخَاوَةُ وَالتَّوَسُّطُ",
            "shiddah": {
                "nameFr": "Ash-Shiddah (Blocage total du son)",
                "mnemonic": "أَجِدُ قَطٍ بَكَتْ (8 lettres)",
                "letters": ["ء", "ج", "د", "ق", "ط", "ب", "ك", "ت"],
                "definitionFr": "Blocage hermétique de l'écoulement sonore dans le point d'articulation."
            },
            "tawassut": {
                "nameFr": "At-Tawassut / Bayniyyah (Son modéré)",
                "mnemonic": "لِنْ عُمَرْ (5 lettres)",
                "letters": ["ل", "ن", "ع", "م", "ر"],
                "definitionFr": "Le son ne s'interrompt pas brutalement comme dans la Shiddah ni ne coule librement comme dans la Rakhāwah."
            },
            "rakhawah": {
                "nameFr": "Ar-Rakhāwah (Écoulement libre du son)",
                "letters": "Les 15 lettres restantes",
                "definitionFr": "Écoulement continu et fluide de la voix pendant l'articulation de la lettre soukounée."
            }
        },
        {
            "id": "istila-vs-istifal",
            "titleFr": "3. L'Élévation (Isti'lā) vs L'Abaissement (Istifāl)",
            "titleAr": "الاِسْتِعْلاَءُ ضِدَّ الاِسْتِفَالِ",
            "istila": {
                "nameFr": "Al-Isti'lā (Élévation du fond de la langue -> Emphase)",
                "mnemonic": "خُصَّ ضَغْطٍ قِظْ (7 lettres)",
                "letters": ["خ", "ص", "ض", "غ", "ط", "ق", "ظ"],
                "definitionFr": "Élévation de l'arrière de la langue vers le palais mou : produit la sonorité lourde et noble (Tafkhīm)."
            },
            "istifal": {
                "nameFr": "Al-Istifāl (Abaissement de la langue -> Finesse)",
                "letters": "Les 21 lettres restantes",
                "definitionFr": "Maintien de la langue au repos dans le bas de la bouche : produit le timbre fin et élégant (Tarqīq)."
            }
        },
        {
            "id": "itbaq-vs-infitah",
            "titleFr": "4. L'Adhérence (Itbāq) vs L'Ouverture (Infitāh)",
            "titleAr": "الإِطْبَاقُ ضِدَّ الاِنْفِتَاحِ",
            "itbaq": {
                "nameFr": "Al-Itbāq (Dos de langue plaqué contre le palais)",
                "mnemonic": "ص, ض, ط, ظ (4 lettres reines de l'emphase)",
                "letters": ["ص", "ض", "ط", "ظ"],
                "definitionFr": "Adhérence étroite de la surface de la langue contre la voûte du palais : confère une résonance encore plus profonde que le simple Isti'lā."
            },
            "infitah": {
                "nameFr": "Al-Infitāh (Ouverture entre langue et palais)",
                "letters": "Les 24 lettres restantes",
                "definitionFr": "Séparation libre et espace d'air préservé entre la langue et le palais."
            }
        },
        {
            "id": "idhlaq-vs-ismat",
            "titleFr": "5. La Fluidité (Idhlāq) vs La Consistance (Ismāt)",
            "titleAr": "الإِذْلاَقُ ضِدَّ الإِصْمَاتِ",
            "idhlaq": {
                "nameFr": "Al-Idhlāq (Émission fluide depuis les bords/lèvres)",
                "mnemonic": "فَرَّ مِنْ لُبٍّ (6 lettres)",
                "letters": ["ف", "ر", "م", "ن", "ل", "ب"],
                "definitionFr": "Facilité et rapidité de prononciation due à l'articulation sur l'extrême bout de la langue ou des lèvres."
            },
            "ismat": {
                "nameFr": "Al-Ismāt (Lettres consistantes)",
                "letters": "Les 22 lettres restantes",
                "definitionFr": "Solidité et tenue consonantique nécessitant un appui articulatoire plus marqué."
            }
        }
    ],
    "withoutOpposites": [
        { "nameFr": "1. As-Safīr (Le Sifflement)", "nameAr": "الصَّفِير", "letters": ["ص", "ز", "س"], "definitionFr": "Sifflement aigu et net produit entre les incisives." },
        { "nameFr": "2. Al-Qalqalah (Le Rebond)", "nameAr": "القَلْقَلَة", "mnemonic": "قُطْبُ جَدٍّ", "letters": ["ق", "ط", "ب", "ج", "د"], "definitionFr": "Ébranlement puissant et rebond de la consonne soukounée." },
        { "nameFr": "3. Al-Līn (La Souplesse)", "nameAr": "اللِّين", "letters": ["و", "ي"], "definitionFr": "Émission douce et sans effort du Wāw et Yā soukounés précédés d'une Fathah." },
        { "nameFr": "4. Al-Inhirāf (La Déviation)", "nameAr": "الانْحِرَاف", "letters": ["ل", "ر"], "definitionFr": "Déviation du flux sonore vers les côtés de la langue (Lām) ou vers son dos (Râ)." },
        { "nameFr": "5. At-Takrīr (La Vibration Limitée)", "nameAr": "التَّكْرِير", "letters": ["ر"], "definitionFr": "Vibration naturelle du bout de la langue (qui doit être contenue et non exagérée !)." },
        { "nameFr": "6. At-Tafash-shī (La Propagation)", "nameAr": "التَّفَشِّي", "letters": ["ش"], "definitionFr": "Diffusion ample et volumineuse du souffle dans toute la cavité buccale." },
        { "nameFr": "7. Al-Istitālah (L'Élongation)", "nameAr": "الاِسْتِطَالَة", "letters": ["ض"], "definitionFr": "Glissement et allongement du bord de la langue de l'arrière vers l'avant contre les molaires." },
        { "nameFr": "8. Al-Ghunnah (Le Nasillement)", "nameAr": "الغُنَّة", "letters": ["ن", "م"], "definitionFr": "Son doux et mélodieux résonnant dans la cavité nasale (Khayshūm)." }
    ]
}

def main():
    target = 'src/data/makharijSifatData.ts'
    data_ts = f"""// Données complètes des Makhārij & Sifāt tirées du livre « التجويد المبسط للمبتدئين » (pages 10 à 26)

export interface GeneralMakhraj {{
  id: string;
  titleFr: string;
  titleAr: string;
  color: string;
  specificCount: number;
  lettersCount: number;
  descriptionFr: string;
  letters: string[];
  jazariyyahVerse: string;
}}

export interface LetterProfile {{
  letter: string;
  nameFr: string;
  nameAr: string;
  generalMakhraj: 'jawf' | 'halq' | 'lisan' | 'shafatan' | 'khayshum';
  generalMakhrajFr: string;
  specificMakhrajFr: string;
  specificMakhrajAr: string;
  sifatWithOpposites: {{
    hamsOrJahr: string;
    shiddahOrRakhawah: string;
    istilaOrIstifal: string;
    itbaqOrInfitah: string;
    idhlaqOrIsmat: string;
  }};
  sifatWithoutOpposites: string[];
  strength: 'Très Forte' | 'Forte (Qawiyyah)' | 'Moyenne (Mutawassitah)' | 'Faible (Da\\'īfah)' | 'Moyenne / Emphatique' | 'Moyenne' | 'Faible';
  commonMistakesFr: string;
  audioSampleText: string;
  jazariyyahVerse: string;
}}

export const GENERAL_MAKHAREJ: GeneralMakhraj[] = {json.dumps(GENERAL_MAKHAREJ, ensure_ascii=False, indent=2)};

export const ALL_28_LETTERS: LetterProfile[] = {json.dumps(ALL_28_LETTERS, ensure_ascii=False, indent=2)};

export const SIFAT_CLASSIFICATION = {json.dumps(SIFAT_CLASSIFICATION, ensure_ascii=False, indent=2)};
"""
    with open(target, 'w', encoding='utf-8') as f:
        f.write(data_ts)
    print(f'Successfully generated {target}!')

if __name__ == '__main__':
    main()
