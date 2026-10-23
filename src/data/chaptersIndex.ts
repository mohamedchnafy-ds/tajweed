import { Chapter } from '../types/tajweed';

/**
 * Métadonnées légères des chapitres, pour l'accueil et la barre de navigation.
 * Le contenu complet (chaptersData.ts) n'est chargé qu'à l'ouverture d'un chapitre.
 * Les champs repris de chaptersData.ts doivent y rester identiques.
 */
export interface ChapterSummary extends Pick<Chapter, 'number' | 'titleFr' | 'titleAr' | 'estimatedMinutes'> {
  short: string;
  pitch: string;
}

export const CHAPTER_INDEX: ChapterSummary[] = [
  {
    number: 1,
    titleFr: "Concepts Fondamentaux & Le Lahn (Erreurs)",
    titleAr: "المَفَاهِيمُ الأَسَاسِيَّةُ وَأَنْوَاعُ اللَّحْنِ",
    estimatedMinutes: 15,
    short: 'Les bases & le Lahn',
    pitch: "Comprendre pourquoi le Tajwīd est obligatoire (Farḍ 'Ayn) et éliminer tout Lahn Jalī sacrilège.",
  },
  {
    number: 2,
    titleFr: "Symboles Coraniques & Ponctuation",
    titleAr: "عَلَامَاتُ المُصْحَفِ وَضَبْطُهُ",
    estimatedMinutes: 15,
    short: 'Symboles du Mushaf',
    pitch: "Les 5 familles de signes : stop obligatoire (مـ), interdiction (لا) et les arrêts permis.",
  },
  {
    number: 3,
    titleFr: "Arrêt & Reprise (Waqf & Ibtidā')",
    titleAr: "الوَقْفُ وَالِابْتِدَاءُ",
    estimatedMinutes: 20,
    short: 'Arrêt & reprise',
    pitch: "L'arrêt sur un Soukoûn pur, la mutation de la Tā' Marbūtah et la méthode Stop & Repeat.",
  },
  {
    number: 4,
    titleFr: "Les Prolongations I (Madd Naturel & Dérivés)",
    titleAr: "المَدُّ الأَصْلِيُّ وَمُلْحَقَاتُهُ",
    estimatedMinutes: 20,
    short: 'Madd naturel',
    pitch: "La clé نُوحِيهَا sur 2 temps incompressibles et l'interdiction d'allonger le Līn en continu.",
  },
  {
    number: 5,
    titleFr: "Les Prolongations II (Madd Secondaire / Far'ī)",
    titleAr: "المَدُّ الفَرْعِيُّ وَأَقْسَامُهُ",
    estimatedMinutes: 25,
    short: 'Madd secondaire',
    pitch: "Les 4-5 temps devant la Hamzah (Muttasil/Munfasil) et les 6 temps stricts du Madd Lāzim.",
  },
  {
    number: 6,
    titleFr: "Les Hamzahs (Hamzat Al-Wasl & Al-Qat')",
    titleAr: "هَمْزَتَا الوَصْلِ وَالقَطْعِ",
    estimatedMinutes: 20,
    short: 'Les Hamzahs',
    pitch: "Distinguer le ء fixe de l'ٱ élidé, la règle de la 3e lettre et les 5 verbes d'exception.",
  },
  {
    number: 7,
    titleFr: "Les Règles de la Lām Sākinah",
    titleAr: "أَحْكَامُ اللَّامِ السَّاكِنَةِ",
    estimatedMinutes: 20,
    short: 'Lām sākinah',
    pitch: "Lām Qamariyyah (claire) vs Shamsiyyah (solaire effacée) et les degrés du Nom divin Allah.",
  },
  {
    number: 8,
    titleFr: "Nūn Sākinah & Tanwīn (4 Règles)",
    titleAr: "أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ",
    estimatedMinutes: 25,
    short: 'Nūn sākinah & Tanwīn',
    pitch: "Izhār (gorge), Idghām (Yarmalūn), Iqlāb (Bā') et Ikhfā' (15 lettres cachées avec Ghunnah).",
  },
  {
    number: 9,
    titleFr: "Les Règles de la Mīm Sākinah",
    titleAr: "أَحْكَامُ المِيمِ السَّاكِنَةِ",
    estimatedMinutes: 20,
    short: 'Mīm sākinah',
    pitch: "Ikhfā' Shafawī (devant Bā'), Idghām Shafawī (devant Mīm) et clarté vigilante sur Wāw/Fā'.",
  },
  {
    number: 10,
    titleFr: "La Qalqalah & Ses Degrés de Rebond",
    titleAr: "أَحْكَامُ القَلْقَلَةِ وَمَرَاتِبُهَا",
    estimatedMinutes: 20,
    short: 'Qalqalah',
    pitch: "Les 5 lettres de Qutb Jadd : distinguer la Majeure (Shaddah), Moyenne (arrêt) et Mineure.",
  },
  {
    number: 11,
    titleFr: "L'Assimilation (Idghām Mutamāthilayn, etc.)",
    titleAr: "إِدْغَامُ المُتَمَاثِلَيْنِ وَالمُتَقَارِبَيْنِ وَالمُتَجَانِسَيْنِ",
    estimatedMinutes: 25,
    short: 'Assimilation (Idghām)',
    pitch: "Mutamāthilayn, Mutaqāribayn, Mutajānisayn : les 8 fusions historiques et l'Idghām Nāqis.",
  },
  {
    number: 12,
    titleFr: "Emphase & Amincissement (Tafkhīm & Tarqīq)",
    titleAr: "التَّفْخِيمُ وَالتَّرْقِيقُ وَأَحْكَامُ الرَّاءِ",
    estimatedMinutes: 25,
    short: 'Tafkhīm & Tarqīq',
    pitch: "Les 7 lettres de Khussa Daghtin Qiz, la lettre Râ' et l'art du Takhlīs pour isoler les sons.",
  },
  {
    number: 13,
    titleFr: "Rencontre de Deux Soukoûns (Iltiqā' As-Sākinayn)",
    titleAr: "اِلْتِقَاءُ السَّاكِنَيْنِ",
    estimatedMinutes: 20,
    short: 'Deux soukoûns',
    pitch: "Iltiqā' As-Sākinayn : élimination par suppression du Madd ou par Nūn Qutnī réparateur.",
  },
  {
    number: 14,
    titleFr: "Les Lettres Isolées & Débuts de Sourates (Fawātih As-Suwar)",
    titleAr: "فَوَاتِحُ السُّوَرِ وَالحُرُوفُ المُقَطَّعَةُ",
    estimatedMinutes: 20,
    short: 'Lettres isolées',
    pitch: "Alif (0t), Hayyun Tahura (2t), Naqasa 'Asalukum (6t) en tête des sourates.",
  },
  {
    number: 15,
    titleFr: "Distinctions Subtiles : Tā'āt & Ahkām Al-Waqf",
    titleAr: "بَابُ التَّاءَاتِ وَأَحْكَامُ الوَقْفِ عَلَيْهَا",
    estimatedMinutes: 20,
    short: 'Distinctions subtiles',
    pitch: "Tā' ouverte vs fermée (arrêt en T ou en H), et Alif Maqsūrah vs Yā'.",
  },
  {
    number: 16,
    titleFr: "Cas Particuliers & Récitation de Hafs 'An 'Āsim",
    titleAr: "خُصُوصِيَّاتُ رِوَايَةِ حَفْصٍ عَنْ عَاصِمٍ",
    estimatedMinutes: 25,
    short: 'Cas particuliers',
    pitch: "L'Imālah (Majrēhā), la Tashīl douce, l'Ishmām des lèvres et les 4 silences sacrés (Saktāt).",
  },
];
