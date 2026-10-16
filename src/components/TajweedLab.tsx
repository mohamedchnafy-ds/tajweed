import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { StepHeader } from './ui';
import { AlertCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface TajweedLabProps {
  chapter: Chapter;
}

interface LahnTestCase {
  id: string;
  title: string;
  category: 'jali' | 'khafi' | 'correct';
  arabicWord: string;
  recitedAs: string;
  surahRef: string;
  surahName: string;
  diagnosticTitle: string;
  badge: string;
  colorClass: string;
  fiqhStatus: string;
  fiqhSeverity: 'danger' | 'warning' | 'success';
  phoneticAnalysis: string;
  meaningImpact: string;
  correctionTip: string;
}

const LAHN_TEST_CASES: LahnTestCase[] = [
  {
    id: 'jali-1',
    title: 'Al-Fātihah 1:7 — Inversion de voyelle',
    category: 'jali',
    arabicWord: 'أَنۡعَمۡتَ',
    recitedAs: 'أَنۡعَمۡتُ (avec Dammah)',
    surahRef: '1:7',
    surahName: 'Al-Fātihah',
    diagnosticTitle: 'Al-Lahn Al-Jalī (اللَّحْنُ الجَلِيُّ)',
    badge: 'Erreur Majeure Critique',
    colorClass: 'chip-qalqalah',
    fiqhStatus: 'Péché (Harām) si négligence — Invalide la prière !',
    fiqhSeverity: 'danger',
    phoneticAnalysis: 'Remplacement de la Fathah (ـَ) par une Dammah (ـُ) sur le pronom suffixe Tā\'.',
    meaningImpact: 'Fait basculer le sens de « Ceux que Tu (Allah) as comblés » à « Ceux que J\'ai comblés ». L\'orateur s\'attribue le bienfait divin !',
    correctionTip: 'Gardez la mâchoire légèrement ouverte et prononcez fermement le son "ta" avec la pointe de la langue.',
  },
  {
    id: 'jali-2',
    title: 'Al-Fātihah 1:6 — Confusion de consonne',
    category: 'jali',
    arabicWord: 'صِرَٰطَ',
    recitedAs: 'سِرَاتَ (avec Sīn et Tā\')',
    surahRef: '1:6',
    surahName: 'Al-Fātihah',
    diagnosticTitle: 'Al-Lahn Al-Jalī (اللَّحْنُ الجَلِيُّ)',
    badge: 'Substitution de Consonnes',
    colorClass: 'chip-qalqalah',
    fiqhStatus: 'Harām — Invalide la prière si commis sans chercher à apprendre',
    fiqhSeverity: 'danger',
    phoneticAnalysis: 'Perte de l\'emphase (Isti\'lā\' et Itbāq) : le Sād (ص) devient un Sīn (س) et le Tā\' (ط) devient un Tā\' (ت).',
    meaningImpact: 'Transforme des lettres fondamentales du Coran en lettres distinctes, dénaturant la parole révélée.',
    correctionTip: 'Pour le Sād et le Tā\', soulevez l\'arrière et le milieu de la langue vers le palais supérieur pour gonfler le volume sonore.',
  },
  {
    id: 'jali-3',
    title: 'Al-Fātihah 1:5 — Omission de Shaddah',
    category: 'jali',
    arabicWord: 'إِيَّاكَ نَعۡبُدُ',
    recitedAs: 'إِيَاكَ نَعۡبُدُ (sans Shaddah)',
    surahRef: '1:5',
    surahName: 'Al-Fātihah',
    diagnosticTitle: 'Al-Lahn Al-Jalī (اللَّحْنُ الجَلِيُّ)',
    badge: 'Suppression de Dédoublement',
    colorClass: 'chip-qalqalah',
    fiqhStatus: 'Harām — Invalide la prière !',
    fiqhSeverity: 'danger',
    phoneticAnalysis: 'Suppression de la Shaddah sur le Yā\', ce qui élimine une lettre entière du mot dans le décompte coranique.',
    meaningImpact: '« Iyyāka » signifie « C\'est Toi seul que nous adorons ». Mais « Iyāka » (sans Shaddah) signifie en arabe classique « la lueur du soleil » ! Le sens devient inacceptable.',
    correctionTip: 'Appuyez fermement sur le Yā\' avec une tension nette pour marquer le dédoublement de la lettre.',
  },
  {
    id: 'jali-4',
    title: 'Al-Baqarah 2:43 — Mauvaise lecture du Rasm',
    category: 'jali',
    arabicWord: 'ٱلصَّلَوٰةَ',
    recitedAs: 'الصَّلَوَاة (prononcer le Wāw)',
    surahRef: '2:43',
    surahName: 'Al-Baqarah',
    diagnosticTitle: 'Al-Lahn Al-Jalī (اللَّحْنُ الجَلِيُّ)',
    badge: 'Lecture Littérale Erronée',
    colorClass: 'chip-qalqalah',
    fiqhStatus: 'Péché si volontaire — Déformation de mot',
    fiqhSeverity: 'danger',
    phoneticAnalysis: 'Lecture du Wāw comme une consonne alors qu\'il ne sert que de support calligraphique à l\'Alif vertical (Alif Khanjariyyah).',
    meaningImpact: 'Ajoute une consonne "w" inexistante phonétiquement dans la transmission prophétique.',
    correctionTip: 'Repérez le petit trait vertical (ٰ) au-dessus du Wāw : il ordonne de lire un Alif prolongé pur : "As-Salāh".',
  },
  {
    id: 'khafi-1',
    title: 'Al-Mulk 67:5 — Madd Wājib tronqué',
    category: 'khafi',
    arabicWord: 'ٱلسَّمَآءَ',
    recitedAs: 'ٱلسَّمَاءَ (2 temps seulement)',
    surahRef: '67:5',
    surahName: 'Al-Mulk',
    diagnosticTitle: 'Al-Lahn Al-Khafī (اللَّحْنُ الخَفِيُّ)',
    badge: 'Prolongation Amputée',
    colorClass: 'chip-gold',
    fiqhStatus: 'Déconseillé (Makrūh) — La prière reste valide',
    fiqhSeverity: 'warning',
    phoneticAnalysis: 'La prolongation obligatoire liée (Madd Wājib Muttasil) doit durer 4 ou 5 temps. Le lecteur ne fait que 2 temps.',
    meaningImpact: 'Le mot signifie toujours « le ciel » (le sens n\'est pas dénaturé), mais l\'ornement du Tartīl et la conformité à Hafs sont rompus.',
    correctionTip: 'Comptez 4 battements réguliers dès que vous apercevez le signe de la vague (~) au-dessus d\'une voyelle.',
  },
  {
    id: 'khafi-2',
    title: 'Az-Zalzalah 99:7 — Omission de Ghunnah',
    category: 'khafi',
    arabicWord: 'فَمَن يَعۡمَلۡ',
    recitedAs: 'Faman ya\'mal (sec sans nasalité)',
    surahRef: '99:7',
    surahName: 'Az-Zalzalah',
    diagnosticTitle: 'Al-Lahn Al-Khafī (اللَّحْنُ الخَفِيُّ)',
    badge: 'Omission de Résonance Nasale',
    colorClass: 'chip-gold',
    fiqhStatus: 'Déconseillé (Makrūh) — Prière valide mais imparfaite',
    fiqhSeverity: 'warning',
    phoneticAnalysis: 'Absence de résonance dans la cavité nasale pendant 2 temps lors de l\'Idghām.',
    meaningImpact: 'Le lecteur prononce une fusion sèche ou un Nūn saccadé, perdant la douceur mélodique requise.',
    correctionTip: 'Faites résonner le souffle dans le nez pendant 2 temps pleins avant de passer au Yā\'.',
  },
  {
    id: 'khafi-3',
    title: 'Al-Ikhlās 112:1 — Omission de Qalqalah',
    category: 'khafi',
    arabicWord: 'أَحَدٌ (à l\'arrêt)',
    recitedAs: 'Ahad (arrêt sec sans rebond)',
    surahRef: '112:1',
    surahName: 'Al-Ikhlās',
    diagnosticTitle: 'Al-Lahn Al-Khafī (اللَّحْنُ الخَفِيُّ)',
    badge: 'Absence de Rebond Acoustique',
    colorClass: 'chip-gold',
    fiqhStatus: 'Déconseillé (Makrūh) — Récitation étouffée',
    fiqhSeverity: 'warning',
    phoneticAnalysis: 'Le Dāl fait partie des 5 lettres de Qutb Jadd. Sans rebond, la lettre devient difficilement perceptible.',
    meaningImpact: 'Le sens général est compris, mais la fin du verset manque de relief et de clarté auditive.',
    correctionTip: 'Relâchez vivement la pointe de la langue à l\'arrêt pour faire jaillir un rebond sonore franc sans ajouter de voyelle.',
  },
  {
    id: 'correct-1',
    title: 'Al-Fātihah 1:7 — Tartīl Conforme Exemplaire',
    category: 'correct',
    arabicWord: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ',
    recitedAs: 'Récitation posée avec Fathah nette sur le Tā\'',
    surahRef: '1:7',
    surahName: 'Al-Fātihah',
    diagnosticTitle: 'Tartīl Conforme (تَرْتِيلٌ مُوَافِقٌ لِلسُّنَّةِ)',
    badge: 'Zéro Défaut — Prière Agréée',
    colorClass: 'chip-idgham',
    fiqhStatus: 'Mustahabb / Wājib — Prière récompensée au plus haut degré',
    fiqhSeverity: 'success',
    phoneticAnalysis: 'Respect scrupuleux du point d\'articulation de chaque lettre, intégrité des voyelles courtes et longues, Tartīl fluide.',
    meaningImpact: 'La parole divine est transmise avec la pureté absolue révélée par Allah au Prophète ﷺ.',
    correctionTip: 'Conservez ce calme et cette concentration intérieure (Khushū\') pour chaque verset de vos prières.',
  },
];

interface QuranSymbolInfo {
  id: string;
  symbol: string;
  nameAr: string;
  nameFr: string;
  category: 'waqf' | 'pronounce' | 'structure';
  actionFr: string;
  colorClass: string;
  badge: string;
  explanation: string;
  theologicalImpact: string;
  exampleAr: string;
  exampleRef: string;
  trapToAvoid: string;
}

const QURAN_SYMBOLS: QuranSymbolInfo[] = [
  {
    id: 'm-lazim',
    symbol: 'مـ',
    nameAr: 'الوَقْفُ اللَّازِمُ',
    nameFr: 'Waqf Lāzim (Arrêt Obligatoire)',
    category: 'waqf',
    actionFr: 'Arrêt obligatoire avec reprise de souffle. Ne jamais lier avec la suite.',
    colorClass: 'chip-qalqalah',
    badge: 'Arrêt Impératif',
    explanation: 'Le symbole (مـ) horizontal indique que la phrase est achevée. Lier avec ce qui suit crée une confusion grave ou un faux sens théologique.',
    theologicalImpact: 'Préserve la frontière sacrée entre les propos rapportés (mécréants) et la parole divine qui répond.',
    exampleAr: 'فَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ إِنَّا نَعۡلَمُ مَا يُسِرُّونَ',
    exampleRef: 'Yā-Sīn 36:76',
    trapToAvoid: 'Ne pas confondre avec le petit Mīm vertical (ۢ) qui indique un Iqlāb de Nūn/Tanwīn.',
  },
  {
    id: 'la-taqif',
    symbol: 'لا',
    nameAr: 'لَا تَقِفْ (الوّقْفُ المَمْنُوعُ)',
    nameFr: 'Lā Taqif (Interdiction d\'arrêter)',
    category: 'waqf',
    actionFr: 'Ne coupez jamais votre récitation ici et n\'allez jamais au Rukūʿ.',
    colorClass: 'chip-qalqalah',
    badge: 'Interdiction de Couper',
    explanation: 'La phrase est grammaticalement suspendue. S\'arrêter à cet endroit délivre un message incomplet ou contradictoire.',
    theologicalImpact: 'Dans Al-Mā\'ūn 107:4 (« Malheur aux prieurs »), couper la lecture maudit les croyants ! Il faut impérativement lier avec le verset 5.',
    exampleAr: 'فَوَيۡلٞ لِّلۡمُصَلِّينَ ٤ ٱلَّذِينَ هُمۡ عَن صَلَاتِهِمۡ سَاهُونَ ٥',
    exampleRef: 'Al-Mā\'ūn 107:4',
    trapToAvoid: 'Si le souffle vous manque, reprenez votre respiration puis reprenez la lecture avant ce mot pour compléter la phrase.',
  },
  {
    id: 'jeem-jaiz',
    symbol: 'ج',
    nameAr: 'الوَقْفُ الجَائِزُ',
    nameFr: 'Waqf Jā\'iz (Arrêt Permis Équilibré)',
    category: 'waqf',
    actionFr: 'Choix entièrement libre : vous pouvez vous arrêter ou lier de manière égale.',
    colorClass: 'chip-izhar',
    badge: 'Choix Égal',
    explanation: 'Les deux options (s\'arrêter ou continuer) sont linguistiquement et théologiquement équivalentes sans préférence marquée.',
    theologicalImpact: 'Aucun risque d\'altération du sens, que vous preniez votre respiration ou que vous poursuiviez d\'un trait.',
    exampleAr: 'نَحۡنُ نَقُصُّ عَلَيۡكَ نَبَأَهُم بِٱلۡحَقِّۚ إِنَّهُمۡ فِتۡيَةٌ',
    exampleRef: 'Al-Kahf 18:13',
    trapToAvoid: 'Inutile d\'hésiter : choisissez selon votre capacité de souffle.',
  },
  {
    id: 'qala-awla',
    symbol: 'قلى',
    nameAr: 'الوَقْفُ أَوْلَى',
    nameFr: 'Al-Waqfu Awlā (Arrêt Préférable)',
    category: 'waqf',
    actionFr: 'Il est préférable de s\'arrêter pour respirer, bien que la liaison soit permise.',
    colorClass: 'chip-gold',
    badge: 'Arrêt Préférable',
    explanation: 'L\'arrêt marque la fin d\'un développement sémantique, semblable à un point final dans nos langues modernes.',
    theologicalImpact: 'Permet à l\'auditeur de méditer la sentence avant d\'entamer le point suivant.',
    exampleAr: 'قُل رَّبِّيٓ أَعۡلَمُ بِعِدَّتِهِم مَّا يَعۡلَمُهُمۡ إِلَّا قَلِيلٞۗ',
    exampleRef: 'Al-Kahf 18:22',
    trapToAvoid: 'Ne forcez pas la liaison au détriment de votre souffle sur un (قلى).',
  },
  {
    id: 'sala-awla',
    symbol: 'صلى',
    nameAr: 'الوَصْلُ أَوْلَى',
    nameFr: 'Al-Waslu Awlā (Liaison Préférable)',
    category: 'waqf',
    actionFr: 'Il est préférable de lier en continu, même si l\'arrêt reste toléré.',
    colorClass: 'chip-idgham',
    badge: 'Liaison Préférable',
    explanation: 'La suite de la phrase est intimement liée à ce qui précède. Lier offre une fluidité narrative supérieure.',
    theologicalImpact: 'Maintient la cohésion d\'une condition ou d\'un attribut sans fragmentation.',
    exampleAr: 'وَإِن يَمۡسَسۡكَ ٱللَّهُ بِضُرّٖ فَلَا كَاشِفَ لَهُۥٓ إِلَّا هُوَۖ',
    exampleRef: 'Al-An\'ām 6:17',
    trapToAvoid: 'Si vous vous arrêtez par essoufflement, il n\'y a aucun péché.',
  },
  {
    id: 'mutaaniq-triad',
    symbol: 'ۛ ... ۛ',
    nameAr: 'وَقْفُ المُعَانَقَةِ (المُتَعَانِقُ)',
    nameFr: 'Al-Waqf Al-Muta\'āniq (Arrêt d\'Étreinte)',
    category: 'waqf',
    actionFr: 'Arrêtez-vous à l\'un OU à l\'autre, mais JAMAIS aux deux à la fois !',
    colorClass: 'chip-iqlab',
    badge: 'Arrêt Alternatif Exclusif',
    explanation: 'Deux groupes de trois points disposés en triangle. Ils représentent deux facettes complémentaires d\'un même verset.',
    theologicalImpact: 'S\'arrêter au premier illumine un sens ; s\'arrêter au second révèle une autre nuance. Cumuler les deux brise la grammaire.',
    exampleAr: 'ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ',
    exampleRef: 'Al-Baqarah 2:2',
    trapToAvoid: 'Ne jamais faire de pause aux deux endroits lors de la même récitation.',
  },
  {
    id: 'saktah-silence',
    symbol: 'س',
    nameAr: 'السَّكْتَةُ اللَّطِيفَةُ',
    nameFr: 'As-Saktah (Silence sans souffle)',
    category: 'waqf',
    actionFr: 'Arrêt bref de 2 temps sans respirer, puis reprise immédiate de la récitation.',
    colorClass: 'chip-izhar',
    badge: 'Silence de 2 Temps',
    explanation: 'Suspension de la voix sans reprendre d\'air dans les poumons pour interdire la liaison entre deux mots.',
    theologicalImpact: 'Empêche d\'associer deux mots contradictoires, comme « déviance » (عِوَجًا) et « droit » (قَيِّمًا) dans Al-Kahf.',
    exampleAr: 'وَلَمۡ يَجۡعَل لَّهُۥ عِوَجَاۜ ١ قَيِّمٗا لِّيُنذِرَ',
    exampleRef: 'Al-Kahf 18:1-2',
    trapToAvoid: 'Ne prenez surtout pas d\'air pendant la Saktah ; le souffle doit rester suspendu.',
  },
  {
    id: 'alif-khanjariyyah',
    symbol: 'ٰ',
    nameAr: 'الأَلِفُ الخِنْجَرِيَّةُ',
    nameFr: 'Alif Khanjariyyah (Dagger Alif)',
    category: 'pronounce',
    actionFr: 'Prononcez obligatoirement un Alif long de 2 temps.',
    colorClass: 'chip-gold',
    badge: 'Alif Miniature Obligatoire',
    explanation: 'Un petit Alif vertical qui ressemble à un poignard arabe. Il remplace l\'Alif plein dans le Rasm ʿUthmānī.',
    theologicalImpact: 'L\'omettre constitue un Lahn Jalī car cela supprime une lettre sacrée du Coran.',
    exampleAr: 'ذَٰلِكَ ٱلۡكِتَٰبُ · ٱلصَّلَوٰةَ · ٱلرَّحۡمَٰنِ',
    exampleRef: 'Al-Fātihah & Al-Baqarah',
    trapToAvoid: 'Ne pas lire rapidement comme une voyelle courte d\'un seul temps.',
  },
  {
    id: 'waw-silah',
    symbol: 'ۥ',
    nameAr: 'صِلَةُ الوَاوِ الصَّغِيرَةِ',
    nameFr: 'Petit Wāw de Silah (ۥ)',
    category: 'pronounce',
    actionFr: 'Prononcez un Wāw long (ū) de 2 temps en liaison continue.',
    colorClass: 'chip-idgham',
    badge: 'Wāw en Liaison',
    explanation: 'Placé après le pronom Hā\' (ـهُ). Il ne se prononce que si vous continuez la lecture sans vous arrêter sur le mot.',
    theologicalImpact: 'Prolonge harmonieusement le pronom de majesté ou de possession.',
    exampleAr: 'فَلَمَّآ أَضَآءَتۡ مَا حَوۡلَهُۥ ذَهَبَ ٱللَّهُ',
    exampleRef: 'Al-Baqarah 2:17',
    trapToAvoid: 'Si vous vous arrêtez sur le mot, dites « Hawlah » avec Soukoûn sur le Hā\' : le Wāw disparaît.',
  },
  {
    id: 'yaa-silah',
    symbol: 'ۦ',
    nameAr: 'صِلَةُ اليَاءِ الصَّغِيرَةِ',
    nameFr: 'Petit Yā\' de Silah (ۦ)',
    category: 'pronounce',
    actionFr: 'Prononcez un Yā\' long (ī) de 2 temps en liaison continue.',
    colorClass: 'chip-idgham',
    badge: 'Yā\' en Liaison',
    explanation: 'Petit Yā\' inversé sous le pronom Hā\' portant une Kasrah (ـهِ). Se prolonge en continu.',
    theologicalImpact: 'Confère la plénitude acoustique révélée au texte coranique.',
    exampleAr: 'إِۦلَٰفِهِمۡ رِحۡلَةَ ٱلشِّتَآءِ وَٱلصَّيۡفِ',
    exampleRef: 'Quraysh 106:2',
    trapToAvoid: 'Disparaît à l\'arrêt comme le petit Wāw.',
  },
  {
    id: 'madd-wave',
    symbol: 'ٓ',
    nameAr: 'عَلَامَةُ المَدِّ',
    nameFr: 'Signe de Madd (Vague)',
    category: 'pronounce',
    actionFr: 'Allongez la voyelle de 4 à 6 temps selon la règle applicable.',
    colorClass: 'chip-gold',
    badge: 'Prolongation 4 à 6t',
    explanation: 'La vague calligraphique au-dessus d\'une voyelle longue signale la présence d\'une Hamzah ou d\'une Shaddah consécutive.',
    theologicalImpact: 'Son omission ou son raccourcissement constitue un Lahn Khafī à proscrire.',
    exampleAr: 'ٱلضَّآلِّينَ (6 temps) · جَآءَ (4-5 temps)',
    exampleRef: 'Al-Fātihah 1:7',
    trapToAvoid: 'Ne jamais lire comme un simple Madd naturel de 2 temps.',
  },
  {
    id: 'sukun-qurani',
    symbol: 'ﹾ',
    nameAr: 'السُّكُونُ القُرْآنِيُّ',
    nameFr: 'Soukoûn Coranique (Tête de Khā\')',
    category: 'pronounce',
    actionFr: 'Consonne sans voyelle prononcée avec clarté absolue (Izhār).',
    colorClass: 'chip-izhar',
    badge: 'Clarté / Izhār',
    explanation: 'Dans le Mushaf, le Soukoûn ressemble à un demi-cercle ouvert (tête de la lettre Khā\' خ sans point). Il ordonne la clarté.',
    theologicalImpact: 'Garantit que la consonne n\'est ni assimilée ni escamotée.',
    exampleAr: 'أَنۡعَمۡتَ · مَنۡ ءَامَنَ',
    exampleRef: 'Al-Fātihah 1:7',
    trapToAvoid: 'Ne confondez pas avec le rond fermé d\'annulation (ْ).',
  },
  {
    id: 'sifr-mustadir',
    symbol: 'ْ',
    nameAr: 'الصِّفْرُ المُسْتَدِيرُ (المُلْغَى)',
    nameFr: 'Cercle Rond (100% muet)',
    category: 'pronounce',
    actionFr: 'Ignorez totalement cette lettre : elle est 100% muette toujours.',
    colorClass: 'chip-qalqalah',
    badge: 'Lettre 100% Muette',
    explanation: 'Un cercle rond parfait au-dessus d\'un Alif, Wāw ou Yā\'. Indique que la lettre n\'a qu\'une valeur orthographique.',
    theologicalImpact: 'Prononcer cette lettre ajoute un son inexistant à la récitation prophétique.',
    exampleAr: 'يَفۡرَحُواْ · مِاْئَةَ · أُوْلَٰٓئِكَ',
    exampleRef: 'Al-Baqarah 2:5',
    trapToAvoid: 'Ne prononcez jamais le Alif final de « Yafrahū » ou de « Qālū ».',
  },
  {
    id: 'sifr-mustatil',
    symbol: '۠',
    nameAr: 'الصِّفْرُ المُسْتَطِيلُ (الأَلِفَاتُ السَّبْعُ)',
    nameFr: 'Ovale Allongé (Les 7 Alifs)',
    category: 'pronounce',
    actionFr: 'Muet en liaison continue, mais prononcé avec 2 temps complets à l\'arrêt.',
    colorClass: 'chip-gold',
    badge: 'Les 7 Alifs Célèbres',
    explanation: 'Un ovale allongé verticalement sur 7 Alifs précis du Coran (ex: أَنَا۠, لَّٰكِنَّا۠).',
    theologicalImpact: 'Respecte scrupuleusement la transmission orale : "ana khayr" en continu, "anā" à l\'arrêt.',
    exampleAr: 'قَالَ أَنَا۠ خَيۡرٞ مِّنۡهُ',
    exampleRef: 'Al-A\'rāf 7:12',
    trapToAvoid: 'Ne prolongez pas l\'Alif si vous liez avec le mot suivant.',
  },
  {
    id: 'mim-iqlab',
    symbol: 'ۢ',
    nameAr: 'مِيمُ الإِقْلَابِ الصَّغِيرَةُ',
    nameFr: 'Petit Mīm d\'Iqlāb (ۢ)',
    category: 'pronounce',
    actionFr: 'Transformez le son N en Mīm avec Ghunnah de 2 temps devant un Bā\'.',
    colorClass: 'chip-iqlab',
    badge: 'Iqlāb en Mīm Doux',
    explanation: 'Petit Mīm vertical placé au-dessus d\'un Nūn ou d\'un Tanwīn suivi de la lettre Bā\' (ب).',
    theologicalImpact: 'Facilite la transition phonétique entre le nez et les lèvres.',
    exampleAr: 'مِنۢ بَعۡدِ · أَنۢبِيَآءَ · عَلِيمُۢ بِذَاتِ',
    exampleRef: 'Al-Baqarah 2:27',
    trapToAvoid: 'Ne serrez pas les lèvres avec force : laissez un contact doux.',
  },
  {
    id: 'sujud-mark',
    symbol: '۩',
    nameAr: 'عَلَامَةُ السَّجْدَةِ',
    nameFr: 'Signe de Sujūd (۩)',
    category: 'structure',
    actionFr: 'Prosternez-vous (Sujūd at-Tilāwah) après avoir lu le verset.',
    colorClass: 'chip-idgham',
    badge: 'Prosternation Sacrée',
    explanation: 'Le trait au-dessus du mot indique la cause de la prosternation, et l\'arche (۩) en fin de verset marque le moment du Sujūd.',
    theologicalImpact: 'Sunnah Mu\'akkadah démontrant l\'humilité et l\'obéissance immédiate à Allah.',
    exampleAr: 'وَلَهُۥ يَسۡجُدُونَۤ۩',
    exampleRef: 'Al-A\'rāf 7:206',
    trapToAvoid: 'Pas besoin de Tashahhud ni de Salām pour le Sujūd at-Tilāwah.',
  },
];

interface StoppingBenchCase {
  id: string;
  title: string;
  category: 'sukun' | 'iwad' | 'marbutah' | 'resume';
  arabicWord: string;
  waqfArabicText: string;
  waslPronunciation: string;
  waqfPronunciation: string;
  surahRef: string;
  ruleBadge: string;
  colorClass: string;
  ruleCategory: string;
  explanation: string;
  fiqhImpact: string;
  commonTrap: string;
}

const STOPPING_TEST_BENCH_CASES: StoppingBenchCase[] = [
  {
    id: 'case-sukun-1',
    title: 'Al-Fātihah 1:2 — Fathah finale (ـَ)',
    category: 'sukun',
    arabicWord: 'ٱلۡعَٰلَمِينَ',
    waqfArabicText: 'ٱلۡعَٰلَمِينْ',
    waslPronunciation: 'Al-\'Ālamīna (Fathah sur le Nūn)',
    waqfPronunciation: 'Al-\'Ālamīn (Soukoûn pur sur Nūn)',
    surahRef: 'Al-Fātihah 1:2',
    ruleBadge: 'Soukoûn Pur Obligatoire',
    colorClass: 'chip-izhar',
    ruleCategory: 'Règle Générale de l\'Arrêt',
    explanation: 'En arabe, on ne s\'arrête JAMAIS sur une voyelle ! La Fathah finale s\'éteint et la consonne Nūn prend un Soukoûn franc.',
    fiqhImpact: 'Valide et obligatoire : laisser une voyelle est une faute de lecture.',
    commonTrap: 'Laisser résonner un petit "na" en fin de mot par hésitation.',
  },
  {
    id: 'case-sukun-2',
    title: 'Al-Fātihah 1:5 — Dammah finale (ـُ)',
    category: 'sukun',
    arabicWord: 'نَسۡتَعِينُ',
    waqfArabicText: 'نَسۡتَعِينْ',
    waslPronunciation: 'Nasta\'īnu (Dammah sur le Nūn)',
    waqfPronunciation: 'Nasta\'īn (Soukoûn pur sur Nūn)',
    surahRef: 'Al-Fātihah 1:5',
    ruleBadge: 'Soukoûn Pur',
    colorClass: 'chip-izhar',
    ruleCategory: 'Règle Générale de l\'Arrêt',
    explanation: 'La Dammah s\'annule entièrement. Le Yā\' précédent peut être prolongé de 2, 4 ou 6 temps (Madd \'Ārid li-s-Sukūn).',
    fiqhImpact: 'Conforme à la Sunnah prophétique.',
    commonTrap: 'Arrondir les lèvres sur le Nūn final en pensant maintenir la Dammah.',
  },
  {
    id: 'case-sukun-3',
    title: 'Āl \'Imrān 3:153 — Tanwīn Damm (ـٌ)',
    category: 'sukun',
    arabicWord: 'خَبِيرٞ',
    waqfArabicText: 'خَبِيرْ',
    waslPronunciation: 'Khabīrun (Nunation avec Dammah)',
    waqfPronunciation: 'Khabīr (Soukoûn pur avec Râ\' fine)',
    surahRef: 'Āl \'Imrān 3:153',
    ruleBadge: 'Annulation du Tanwīn',
    colorClass: 'chip-izhar',
    ruleCategory: 'Règle Générale de l\'Arrêt',
    explanation: 'Le Tanwīn Damm perd son son "N" : AUCUN Madd \'Iwad ici ! Le mot se termine par un simple Soukoûn avec amincissement du Râ\'.',
    fiqhImpact: 'Conforme. Ne jamais ajouter d\'allongement artificiel.',
    commonTrap: 'Croire à tort que tout Tanwīn fait un Madd \'Iwad : seuls les Tanwīns Fath s\'allongent !',
  },
  {
    id: 'case-iwad-1',
    title: 'Ghāfir 40:64 — Tanwīn Fath avec Alif écrit (ـٗا)',
    category: 'iwad',
    arabicWord: 'قَرَارٗا',
    waqfArabicText: 'قَرَارَا (2 temps)',
    waslPronunciation: 'Qarāraw-was-Samā\' (Idghām avec Wāw)',
    waqfPronunciation: 'Qarārā (Prolongation de 2 temps)',
    surahRef: 'Ghāfir 40:64',
    ruleBadge: 'Madd \'Iwad (2 temps)',
    colorClass: 'chip-gold',
    ruleCategory: 'Exception 1 : Madd \'Iwad',
    explanation: 'Le son "N" de la nunation est remplacé par une voyelle longue Alif de 2 temps réguliers. En continu, le Tanwīn fusionne dans le Wāw suivant.',
    fiqhImpact: 'Madd obligatoire à l\'arrêt : couper à sec en disant "Qarār" est une erreur.',
    commonTrap: 'Prononcer "Qarār" avec un simple Soukoûn en ignorant le Tanwīn Fath.',
  },
  {
    id: 'case-iwad-2',
    title: 'Ghāfir 40:64 — Tanwīn Fath sans Alif tracé (ءً)',
    category: 'iwad',
    arabicWord: 'بِنَآءٗ',
    waqfArabicText: 'بِنَآءَا (2 temps)',
    waslPronunciation: 'Binā\'an (Tanwīn Fath en liaison)',
    waqfPronunciation: 'Binā\'ā (Prolongation de 2 temps)',
    surahRef: 'Ghāfir 40:64',
    ruleBadge: 'Madd \'Iwad Phonétique Pur',
    colorClass: 'chip-gold',
    ruleCategory: 'Exception 1 : Madd \'Iwad',
    explanation: 'L\'orthographe arabe interdit d\'écrire un Alif après une Hamzah déjà précédée d\'un Alif. Mais à l\'oral, l\'obligation de prolonger de 2 temps reste absolue !',
    fiqhImpact: 'Conforme. La règle s\'applique à l\'écoute et à la voix, pas aux yeux.',
    commonTrap: 'Oublier d\'allonger la Hamzah sous prétexte qu\'aucun Alif n\'est visible.',
  },
  {
    id: 'case-ta-1',
    title: 'Yūnus 10:57 — Tā\' Marbūtah avec Tanwīn Fath (ةٗ)',
    category: 'marbutah',
    arabicWord: 'وَرَحۡمَةٗ',
    waqfArabicText: 'وَرَحۡمَهْ',
    waslPronunciation: 'Wa rahmatan (Tanwīn Fath en liaison)',
    waqfPronunciation: 'Wa rahmah (Hā\' Sākinah doux)',
    surahRef: 'Yūnus 10:57',
    ruleBadge: 'Métamorphose en Hā\' Sākinah',
    colorClass: 'chip-qalqalah',
    ruleCategory: 'Exception 2 : Tā\' Marbūtah',
    explanation: 'PIÈGE MAJEUR DU LIVRE : La Tā\' Marbūtah (ة) devient TOUJOURS un Hā\' avec Soukoûn à l\'arrêt, MÊME avec Tanwīn Fath ! Elle ne prend JAMAIS de Madd \'Iwad.',
    fiqhImpact: 'Dire "Rahmatā" est une faute grave de Lahn. Dire "Rahmah" est la Sunnah.',
    commonTrap: 'Appliquer un Madd \'Iwad à cause des deux traits de Fathah.',
  },
  {
    id: 'case-ta-2',
    title: 'Al-Baqarah 2:43 — Tā\' Marbūtah avec Fathah (ةَ)',
    category: 'marbutah',
    arabicWord: 'ٱلصَّلَوٰةَ',
    waqfArabicText: 'ٱلصَّلَاهْ',
    waslPronunciation: 'As-Salāta (Fathah en liaison continue)',
    waqfPronunciation: 'As-Salāh (Souffle de gorge Hā\')',
    surahRef: 'Al-Baqarah 2:43',
    ruleBadge: 'Hā\' avec Soukoûn & Hams',
    colorClass: 'chip-iqlab',
    ruleCategory: 'Exception 2 : Tā\' Marbūtah',
    explanation: 'La Tā\' ronde se métamorphose en Hā\' de gorge avec un léger souffle (Hams). Écrit avec un Wāw dans le Rasm, elle se prononce As-Salāh.',
    fiqhImpact: 'Conforme.',
    commonTrap: 'Garder un bruit de Tā\' dur "As-Salāt" à l\'arrêt.',
  },
  {
    id: 'case-resume-1',
    title: 'Āl \'Imrān 3:181 — La citation blasphematoire (قَالُوٓاْ)',
    category: 'resume',
    arabicWord: 'قَالُوٓاْ إِنَّ ٱللَّهَ فَقِيرٞ',
    waqfArabicText: 'Reprise : قَالُوٓاْ إِنَّ ٱللَّهَ فَقِيرٞ',
    waslPronunciation: 'Qawla-lladhīna qālū inna Allāha faqīr',
    waqfPronunciation: 'Stop & Repeat : Reculer sur « Qālū »',
    surahRef: 'Āl \'Imrān 3:181',
    ruleBadge: 'Waqf & Ibtidā\' Qabīh Évité',
    colorClass: 'chip-bad',
    ruleCategory: 'L\'Art de la Reprise (Al-Isti\'nāf)',
    explanation: 'Si le souffle coupe sur « Qālū », reprendre directement par « Inna Allāha faqīr » isole le blasphème et en fait votre propre parole ! Reculer sur « Qālū » est un impératif de foi.',
    fiqhImpact: 'Ibtidā\' Qabīh gravissime si non corrigé par le recul.',
    commonTrap: 'Reprendre bêtement là où le souffle s\'est arrêté sans analyser le sujet du verbe.',
  },
];

interface MaddBenchCase {
  id: string;
  title: string;
  category: 'tabii' | 'leen' | 'cameleon';
  arabicWord: string;
  waqfArabicText: string;
  waslPronunciation: string;
  waqfPronunciation: string;
  surahRef: string;
  ruleBadge: string;
  colorClass: string;
  ruleCategory: string;
  explanation: string;
  fiqhImpact: string;
  commonTrap: string;
}

const MADD_TEST_BENCH_CASES: MaddBenchCase[] = [
  {
    id: 'madd-case-1',
    title: 'Sūrah Hūd 11:49 — La Clé « Nūhīhā » (نُوحِيهَآ)',
    category: 'tabii',
    arabicWord: 'نُوحِيهَآ',
    waqfArabicText: 'نُوحِيهَا (2 temps)',
    waslPronunciation: 'Nū - hī - hā (3 Madds de 2 temps)',
    waqfPronunciation: 'Nū - hī - hā (Alif final de 2 temps)',
    surahRef: 'Hūd 11:49',
    ruleBadge: 'Les 3 Madds Réunis',
    colorClass: 'chip-gold',
    ruleCategory: 'Madd Naturel Fondamental',
    explanation: 'Le mot maître du Tajwīd : il réunit Wāw précédé de Dammah (نُو), Yā\' précédé de Kasrah (حِي) et Alif précédé de Fathah (هَا). Sans voyelle sur les consonnes de Madd !',
    fiqhImpact: 'Modèle de récitation prophétique.',
    commonTrap: 'Tronquer une des trois voyelles lors d\'un débit rapide.',
  },
  {
    id: 'madd-case-2',
    title: 'Al-Fātihah 1:4 — Alif Khanjariyyah (مَٰلِكِ)',
    category: 'tabii',
    arabicWord: 'مَٰلِكِ',
    waqfArabicText: 'مَٰلِكْ (2 temps)',
    waslPronunciation: 'Māliki (2 temps de Madd sur le Mīm)',
    waqfPronunciation: 'Mālik (2 temps + Soukoûn sur Kāf)',
    surahRef: 'Al-Fātihah 1:4',
    ruleBadge: 'Alif Miniature (ٰ)',
    colorClass: 'chip-gold',
    ruleCategory: 'Rasm \'Uthmānī',
    explanation: 'Le petit trait vertical (ٰ) est un Alif à part entière en Rasm \'Uthmānī qui requiert exactement 2 temps.',
    fiqhImpact: 'Conforme à la lecture Hafs \'an \'Āsim.',
    commonTrap: 'Lire "Maliki" sans prolonger le Mīm.',
  },
  {
    id: 'madd-case-3',
    title: 'At-Tawbah 9:50 — Péril du Lahn Jalī (أَخَذۡنَآ)',
    category: 'tabii',
    arabicWord: 'أَخَذۡنَآ أَمۡرَنَا',
    waqfArabicText: 'أَخَذۡنَا (2 temps)',
    waslPronunciation: 'Akhadhnā amranā (Madd 2 temps)',
    waqfPronunciation: 'Akhadhnā (2 temps à l\'arrêt)',
    surahRef: 'At-Tawbah 9:50',
    ruleBadge: 'Péril de Lahn Jalī',
    colorClass: 'chip-bad',
    ruleCategory: 'Préservation du Sens',
    explanation: 'Raccourcir en « Akhadhna » supprime le pronom pluriel "Nous" et crée le féminin "Elles ont pris" : Harām !',
    fiqhImpact: 'Lahn Jalī majeur : altère le sens du texte sacré.',
    commonTrap: 'Avaler la fin du mot lors d\'une récitation rapide.',
  },
  {
    id: 'madd-case-4',
    title: 'Al-Fātihah 1:7 — Calibrage Précis (صِرَٰطَ)',
    category: 'tabii',
    arabicWord: 'صِرَٰطَ',
    waqfArabicText: 'صِرَاطْ (2 temps)',
    waslPronunciation: 'Sirāta (2 temps exacts)',
    waqfPronunciation: 'Sirāt (2 temps + Tā\' emphatique)',
    surahRef: 'Al-Fātihah 1:7',
    ruleBadge: 'Ni trop court, ni trop long',
    colorClass: 'chip-izhar',
    ruleCategory: 'Madd Naturel Calibré',
    explanation: 'Le Madd Naturel se limite strictement à 2 Harakāt : l\'étirer à 4 ou 6 temps est une faute fréquente.',
    fiqhImpact: 'Défaut de finition (Lahn Khafī) si sur-allongé.',
    commonTrap: 'Étirer excessivement le Alif dans la Fātihah.',
  },
  {
    id: 'madd-case-5',
    title: 'Sūrah Quraysh 106:1 — Lettre de Līn Yā\' (قُرَيۡشٍ)',
    category: 'leen',
    arabicWord: 'لِإِيلَٰفِ قُرَيۡشٍ',
    waqfArabicText: 'قُرَيۡشْ (2, 4 ou 6 temps)',
    waslPronunciation: 'Qurayshin (Glissement souple, PAS de Madd)',
    waqfPronunciation: 'Quraysh (Madd Līn permis à 2, 4 ou 6 temps)',
    surahRef: 'Quraysh 106:1',
    ruleBadge: 'Lettre de Līn (ـَ + يْ)',
    colorClass: 'chip-iqlab',
    ruleCategory: 'Lettres de Līn',
    explanation: 'Le Yā\' porte un Soukoûn et est précédé d\'une FATHAH : en continu (Wasl), AUCUN Madd n\'est permis !',
    fiqhImpact: 'Allonger en continu est une erreur de Tajwīd.',
    commonTrap: 'Traiter une lettre de Līn comme un Madd en lecture continue.',
  },
  {
    id: 'madd-case-6',
    title: 'Sūrah Quraysh 106:4 — Lettre de Līn Wāw (خَوۡفِۭ)',
    category: 'leen',
    arabicWord: 'مِّنۡ خَوۡفِۭ',
    waqfArabicText: 'خَوۡفْ (2, 4 ou 6 temps)',
    waslPronunciation: 'Min khawfin (Souplesse sans Madd)',
    waqfPronunciation: 'Khawf (Madd Līn permis à 2, 4 ou 6 temps)',
    surahRef: 'Quraysh 106:4',
    ruleBadge: 'Lettre de Līn (ـَ + وْ)',
    colorClass: 'chip-iqlab',
    ruleCategory: 'Lettres de Līn',
    explanation: 'Le Wāw porte un Soukoûn et est précédé d\'un Khā\' avec FATHAH. L\'Alif ne peut JAMAIS être une lettre de Līn.',
    fiqhImpact: 'Conforme.',
    commonTrap: 'Confondre Wāw de Madd (précédé de Dammah) et Wāw de Līn (précédé de Fathah).',
  },
  {
    id: 'madd-case-7',
    title: 'At-Tawbah 9:31 — Mot Caméléon (هُوَ)',
    category: 'cameleon',
    arabicWord: 'إِلَّا هُوَۚ',
    waqfArabicText: 'إِلَّا هُو (2 temps)',
    waslPronunciation: 'Illā Huwa (Consonne vocalisée, pas de Madd)',
    waqfPronunciation: 'Illā Hū (Madd Naturel de 2 temps à l\'arrêt)',
    surahRef: 'At-Tawbah 9:31',
    ruleBadge: 'Wasl Huwa ➔ Waqf Hū',
    colorClass: 'chip-idgham',
    ruleCategory: 'Cas Particulier à l\'Arrêt',
    explanation: 'À l\'arrêt, la Fathah devient Soukoûn : le Wāw précédé de Dammah devient un Madd Naturel de 2 temps (« Hū ») !',
    fiqhImpact: 'Obligation d\'allonger de 2 temps si l\'on s\'arrête.',
    commonTrap: 'Dire "Huw" sec à l\'arrêt sans allonger le Wāw.',
  },
  {
    id: 'madd-case-8',
    title: 'At-Tawbah 9:83 — Mot Caméléon (مَعِىَ)',
    category: 'cameleon',
    arabicWord: 'مَعِىَ أَبَدٗا',
    waqfArabicText: 'مَعِي (2 temps)',
    waslPronunciation: 'Ma\'iya abadā (Yā\' vocalisé)',
    waqfPronunciation: 'Ma\'ī (Madd Naturel de 2 temps à l\'arrêt)',
    surahRef: 'At-Tawbah 9:83',
    ruleBadge: 'Wasl Ma\'iya ➔ Waqf Ma\'ī',
    colorClass: 'chip-idgham',
    ruleCategory: 'Cas Particulier à l\'Arrêt',
    explanation: 'À l\'arrêt, le Yā\' prend un Soukoûn précédé de Kasrah et devient un Madd de 2 temps complets (« Ma\'ī »).',
    fiqhImpact: 'Conforme.',
    commonTrap: 'Couper le Yā\' sans lui donner ses 2 temps.',
  },
];

interface MaddFariBenchCase {
  id: string;
  title: string;
  category: 'muttasil' | 'munfasil' | 'lazim' | 'arid' | 'leen';
  arabicWord: string;
  waqfArabicText: string;
  waslPronunciation: string;
  waqfPronunciation: string;
  surahRef: string;
  ruleBadge: string;
  colorClass: string;
  ruleCategory: string;
  durationHarakatWasl: number;
  durationHarakatWaqf: string;
  explanation: string;
  fiqhImpact: string;
  commonTrap: string;
}

const MADD_FARI_TEST_BENCH_CASES: MaddFariBenchCase[] = [
  {
    id: 'fari-case-1',
    title: 'Ash-Shams 91:5 — Madd Wājib Muttasil (وَٱلسَّمَآءِ)',
    category: 'muttasil',
    arabicWord: 'وَٱلسَّمَآءِ وَمَا بَنَىٰهَا',
    waqfArabicText: 'وَٱلسَّمَآءْ (4, 5 ou 6 temps)',
    waslPronunciation: 'Was-samā\'i (4 ou 5 temps obligatoires)',
    waqfPronunciation: 'Was-samā\' (4, 5 ou 6 temps à l\'arrêt)',
    surahRef: 'Ash-Shams 91:5',
    ruleBadge: 'Madd Muttasil (Wājib)',
    colorClass: 'chip-gold',
    ruleCategory: 'Hamzah dans le même mot',
    durationHarakatWasl: 4,
    durationHarakatWaqf: '4, 5 ou 6 temps',
    explanation: 'Le Alif de Madd et la Hamzah sont réunis dans le même mot indivisible. Statut : Wājib (Obligatoire). Il dure 4 à 5 temps en continu. À l\'arrêt sur la Hamzah finale, 6 temps sont également autorisés.',
    fiqhImpact: 'Obligation unanime. Raccourcir à 2 temps est un Lahn Khafī blâmable.',
    commonTrap: 'Raccourcir la prolongation à 2 temps comme un Madd Naturel.',
  },
  {
    id: 'fari-case-2',
    title: 'An-Nasr 110:1 — Verbe court avec Madd Muttasil (جَآءَ)',
    category: 'muttasil',
    arabicWord: 'إِذَا جَآءَ نَصۡرُ ٱللَّهِ',
    waqfArabicText: 'جَآءْ (4 ou 5 temps)',
    waslPronunciation: 'Idhā jā\'a (4-5 temps obligatoires)',
    waqfPronunciation: 'Jā\' (4-5 temps avec Hamzah nette)',
    surahRef: 'An-Nasr 110:1',
    ruleBadge: 'Madd Muttasil (4-5 temps)',
    colorClass: 'chip-gold',
    ruleCategory: 'Hamzah dans le même mot',
    durationHarakatWasl: 4,
    durationHarakatWaqf: '4 ou 5 temps',
    explanation: 'Même dans un mot très court de 3 lettres, la rencontre de l\'Alif et de la Hamzah dans le même mot impose impérativement 4 ou 5 temps.',
    fiqhImpact: 'Obligatoire (Wājib).',
    commonTrap: 'Passer trop vite et traiter « Jā\'a » comme un mot de 2 temps.',
  },
  {
    id: 'fari-case-3',
    title: 'Al-Baqarah 2:153 — Madd Munfasil lié graphiquement (يَٰٓأَيُّهَا)',
    category: 'munfasil',
    arabicWord: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ',
    waqfArabicText: 'يَا (2 temps)',
    waslPronunciation: 'Yā-ayyuhā (4 ou 5 temps en liaison)',
    waqfPronunciation: 'Yā (2 temps si arrêt exceptionnel)',
    surahRef: 'Al-Baqarah 2:153',
    ruleBadge: 'Madd Munfasil (Jā\'iz)',
    colorClass: 'chip-idgham',
    ruleCategory: 'Hamzah au début du mot suivant',
    durationHarakatWasl: 4,
    durationHarakatWaqf: '2 temps (Alif seul)',
    explanation: '« Yā » est la particule d\'appel et « Ayyuhā » est le mot suivant, bien que liés graphiquement. En continu : 4 à 5 temps. À l\'arrêt sur « Yā » : 2 temps seulement (la Hamzah ayant disparu).',
    fiqhImpact: 'Permis (Jā\'iz 4-5 temps dans Hafs via Shātibiyyah).',
    commonTrap: 'Conserver 4 temps à l\'arrêt sur la particule d\'appel « Yā ».',
  },
  {
    id: 'fari-case-4',
    title: 'Al-Baqarah 2:4 — Madd Munfasil séparé (بِمَآ أُنزِلَ)',
    category: 'munfasil',
    arabicWord: 'بِمَآ أُنزِلَ إِلَيۡكَ',
    waqfArabicText: 'بِمَا (2 temps)',
    waslPronunciation: 'Bimā unzila (4 ou 5 temps en liaison)',
    waqfPronunciation: 'Bimā (2 temps : Madd Naturel rétabli)',
    surahRef: 'Al-Baqarah 2:4',
    ruleBadge: 'Madd Munfasil Séparé',
    colorClass: 'chip-idgham',
    ruleCategory: 'Hamzah au début du mot suivant',
    durationHarakatWasl: 4,
    durationHarakatWaqf: '2 temps',
    explanation: 'Deux mots graphiquement distincts. À l\'arrêt sur « Bimā », la Hamzah n\'est plus prononcée : la voyelle longue redevient instantanément un Madd Naturel de 2 temps.',
    fiqhImpact: 'Conforme. Revenir à 2 temps à l\'arrêt est une règle absolue.',
    commonTrap: 'Penser que le signe de la vague (~) oblige à faire 4 temps même à l\'arrêt sur le premier mot.',
  },
  {
    id: 'fari-case-5',
    title: 'Al-Humazah 104:3 — Madd Silah Kubrā (مَالَهُۥٓ أَخۡلَدَهُۥ)',
    category: 'munfasil',
    arabicWord: 'يَحۡسَبُ أَنَّ مَالَهُۥٓ أَخۡلَدَهُۥ',
    waqfArabicText: 'مَالَهْ (Soukoûn pur sans Madd)',
    waslPronunciation: 'Mālahū akhladah (4-5 temps sur le petit Wāw)',
    waqfPronunciation: 'Mālah (Hā\' avec Soukoûn pur, 0 temps)',
    surahRef: 'Al-Humazah 104:3',
    ruleBadge: 'Silah Kubrā (4-5 temps)',
    colorClass: 'chip-idgham',
    ruleCategory: 'Pronom Hā\' suivi d\'une Hamzah',
    durationHarakatWasl: 4,
    durationHarakatWaqf: '0 temps (Soukoûn)',
    explanation: 'Le pronom possessif Hā\' suivi d\'une Hamzah suit la règle du Madd Munfasil : 4 à 5 temps en liaison. À l\'arrêt, le petit Wāw s\'annule totalement et la consonne Hā\' prend un Soukoûn pur.',
    fiqhImpact: 'Conforme à Hafs \'an \'Āsim.',
    commonTrap: 'Conserver la Silah à l\'arrêt en disant "Mālahū".',
  },
  {
    id: 'fari-case-6',
    title: 'Al-Fātihah 1:7 — Madd Lāzim Kalimī Muthaqqal (ٱلضَّآلِّينَ)',
    category: 'lazim',
    arabicWord: 'غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ',
    waqfArabicText: 'ٱلضَّآلِّينْ (6 temps + Nabrah)',
    waslPronunciation: 'Wa lad-dāāāāāāllīna (6 temps incompressibles)',
    waqfPronunciation: 'Wa lad-dāāāāāāllīn (6 temps + Nabrah)',
    surahRef: 'Al-Fātihah 1:7',
    ruleBadge: 'Lāzim Muthaqqal (6 Temps)',
    colorClass: 'chip-bad',
    ruleCategory: 'Madd + Shaddah dans un mot',
    durationHarakatWasl: 6,
    durationHarakatWaqf: '6 temps stricts',
    explanation: 'Alif suivi d\'un Lām avec Shaddah. Obligation absolue et unanime de tenir 6 battements complets, suivi d\'un claquement ferme de la langue sur le double Lām (Nabrah).',
    fiqhImpact: 'Obligation stricte (Lāzim). Raccourcir est un Lahn Khafī blâmable dans la prière.',
    commonTrap: 'Raccourcir à 2 ou 4 temps par fatigue ou négligence.',
  },
  {
    id: 'fari-case-7',
    title: 'Yūnus 10:51 — Madd Lāzim Kalimī Mukhaffaf (ءَآلۡـَٰٔنَ)',
    category: 'lazim',
    arabicWord: 'ءَآلۡـَٰٔنَ وَقَدۡ كُنتُم بِهِۦ تَسۡتَعۡجِلُونَ',
    waqfArabicText: 'ءَآلۡـَٰٔنْ (6 temps)',
    waslPronunciation: 'Āāāāāāl-\'āna (6 temps sur Alif + Lām claire)',
    waqfPronunciation: 'Āāāāāāl-\'ān (6 temps)',
    surahRef: 'Yūnus 10:51',
    ruleBadge: 'Lāzim Mukhaffaf (6 Temps)',
    colorClass: 'chip-bad',
    ruleCategory: 'Madd + Soukoûn pur dans un mot',
    durationHarakatWasl: 6,
    durationHarakatWaqf: '6 temps stricts',
    explanation: 'L\'unique exemple de Madd Lāzim Kalimī Mukhaffaf dans tout le Coran : le Alif est suivi d\'un Lām Sākin originel SANS Shaddah.',
    fiqhImpact: 'Obligatoire (6 temps stricts).',
    commonTrap: 'Croire qu\'il y a une Shaddah sur le Lām : le Lām est prononcé légèrement avec Soukoûn pur.',
  },
  {
    id: 'fari-case-8',
    title: 'Al-Fātihah 1:2 — Madd \'Ārid li-s-Sukūn (ٱلۡعَٰلَمِينَ)',
    category: 'arid',
    arabicWord: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
    waqfArabicText: 'ٱلۡعَٰلَمِينْ (2, 4 ou 6 temps)',
    waslPronunciation: 'Rabbil-\'Ālamīna (2 temps simples)',
    waqfPronunciation: 'Rabbil-\'Ālamīn (2, 4 ou 6 temps au choix)',
    surahRef: 'Al-Fātihah 1:2',
    ruleBadge: 'Madd \'Ārid (2, 4 ou 6 temps)',
    colorClass: 'chip-izhar',
    ruleCategory: 'Arrêt avec Soukoûn incident',
    durationHarakatWasl: 2,
    durationHarakatWaqf: '2, 4 ou 6 temps',
    explanation: 'En liaison : Madd Naturel de 2 temps (« Al-\'Ālamīna »). À l\'arrêt : Soukoûn incident sur le Nūn, permettant 2, 4 ou 6 temps. La durée choisie doit être maintenue sur toute la récitation (Al-Mīzān).',
    fiqhImpact: 'Permis (Jā\'iz). Règle de cohérence obligatoire.',
    commonTrap: 'Changer de durée au hasard d\'un verset à l\'autre.',
  },
];

interface HamzahBenchCase {
  id: string;
  title: string;
  category: 'wasl-verb' | 'wasl-noun' | 'exception-verb' | 'two-hamzahs';
  arabicWord: string;
  waslArabicText: string;
  ibtidaArabicText: string;
  waslPronunciation: string;
  ibtidaPronunciation: string;
  surahRef: string;
  ruleBadge: string;
  colorClass: string;
  ruleCategory: string;
  determinedTashkeel: string;
  explanation: string;
  fiqhImpact: string;
  commonTrap: string;
}

const HAMZAH_TEST_BENCH_CASES: HamzahBenchCase[] = [
  {
    id: 'hamzah-case-1',
    title: 'Al-Fātihah 1:2 — Article Défini ٱلـ (ٱلۡحَمۡدُ)',
    category: 'wasl-noun',
    arabicWord: 'ٱلۡحَمۡدُ لِلَّهِ',
    waslArabicText: 'رَبِّ ٱلۡحَمۡدُ',
    ibtidaArabicText: 'اَلۡحَمۡدُ',
    waslPronunciation: 'Rabbi-l-hamdu (Chute totale de Hamzat Wasl)',
    ibtidaPronunciation: 'Al-hamdu (Attaque avec FATHAH obligatoire)',
    surahRef: 'Al-Fātihah 1:2',
    ruleBadge: 'Article Défini (Fathah)',
    colorClass: 'chip-izhar',
    ruleCategory: 'Noms avec ٱلـ',
    determinedTashkeel: 'Fathah (اَلـ)',
    explanation: 'Tout nom précédé de l\'article ٱلـ prend obligatoirement une Fathah à l\'attaque (« Al-hamdu »). En liaison, Hamzat Wasl tombe complètement sans rupture.',
    fiqhImpact: 'Unanime. Ne jamais commencer un nom défini par une Kasrah.',
    commonTrap: 'Prononcer "Il-hamdu" par mauvaise habitude dialectale.',
  },
  {
    id: 'hamzah-case-2',
    title: 'An-Nahl 16:125 — Verbe avec 3e lettre Dammah (ٱدۡعُ)',
    category: 'wasl-verb',
    arabicWord: 'ٱدۡعُ إِلَىٰ سَبِيلِ رَبِّكَ',
    waslArabicText: 'قُلِ ٱدۡعُ',
    ibtidaArabicText: 'اُدۡعُ',
    waslPronunciation: 'Quli-d\'u (Wasl : consonne directe)',
    ibtidaPronunciation: 'Ud\'u (Attaque avec DAMMAH)',
    surahRef: 'An-Nahl 16:125',
    ruleBadge: '3e lettre Dammah (اُ)',
    colorClass: 'chip-bad',
    ruleCategory: 'Verbes à l\'impératif',
    determinedTashkeel: 'Dammah (اُ)',
    explanation: 'La 3e lettre (\'Ayn) porte une Dammah originelle (عُ) : Hamzat Al-Wasl prend donc obligatoirement une Dammah (« Ud\'u ») !',
    fiqhImpact: 'Obligatoire. Dire "Id\'u" ou "Ad\'u" est une faute de Lahn.',
    commonTrap: 'Commencer par une Kasrah "Id\'u".',
  },
  {
    id: 'hamzah-case-3',
    title: 'Al-Fātihah 1:6 — Verbe avec 3e lettre Kasrah (ٱهۡدِنَا)',
    category: 'wasl-verb',
    arabicWord: 'ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ',
    waslArabicText: 'نَسۡتَعِينُ ٱهۡدِنَا',
    ibtidaArabicText: 'اِهۡدِنَا',
    waslPronunciation: 'Nasta\'īnu-hdinā (Wasl)',
    ibtidaPronunciation: 'Ihdinā (Attaque avec KASRAH)',
    surahRef: 'Al-Fātihah 1:6',
    ruleBadge: '3e lettre Kasrah (اِ)',
    colorClass: 'chip-gold',
    ruleCategory: 'Verbes à l\'impératif',
    determinedTashkeel: 'Kasrah (اِ)',
    explanation: 'La 3e lettre (Dāl) porte une Kasrah (دِ) : Hamzat Al-Wasl prend obligatoirement une Kasrah (« Ihdinā »).',
    fiqhImpact: 'Obligatoire dans la Fātihah.',
    commonTrap: 'Mettre une Fathah en disant "Ahdinā" (Lahn Jalī majeur altérant le sens) !',
  },
  {
    id: 'hamzah-case-4',
    title: 'Tā-Hā 20:24 — Verbe avec 3e lettre Fathah (ٱذۡهَبۡ)',
    category: 'wasl-verb',
    arabicWord: 'ٱذۡهَبۡ إِلَىٰ فِرۡعَوۡنَ',
    waslArabicText: 'قَالَ ٱذۡهَبۡ',
    ibtidaArabicText: 'اِذۡهَبۡ',
    waslPronunciation: 'Qāla-dh-hab (Wasl)',
    ibtidaPronunciation: 'Idh-hab (Attaque avec KASRAH)',
    surahRef: 'Tā-Hā 20:24',
    ruleBadge: '3e lettre Fathah (اِ)',
    colorClass: 'chip-idgham',
    ruleCategory: 'Verbes à l\'impératif',
    determinedTashkeel: 'Kasrah (اِ)',
    explanation: 'Règle absolue : si la 3e lettre a une Fathah (هَ), Hamzat Al-Wasl prend TOUJOURS une Kasrah (« Idh-hab »). Aucun verbe ne commence par Fathah !',
    fiqhImpact: 'Conforme. Dire "Adh-hab" change le verbe en 1re personne ("Je pars").',
    commonTrap: 'Attaquer par Fathah "Adh-hab".',
  },
  {
    id: 'hamzah-case-5',
    title: 'As-Sāffāt 37:97 — Verbe d\'exception aux fausses Dammahs (ٱبۡنُواْ)',
    category: 'exception-verb',
    arabicWord: 'قَالُواْ ٱبۡنُواْ لَهُۥ بُنۡيَٰنٗا',
    waslArabicText: 'قَالُواْ ٱبۡنُواْ',
    ibtidaArabicText: 'اِبۡنُواْ',
    waslPronunciation: 'Qālu-b-nū (Wasl)',
    ibtidaPronunciation: 'Ibnū (Attaque avec KASRAH obligatoire)',
    surahRef: 'As-Sāffāt 37:97',
    ruleBadge: 'Exception : Kasrah (اِ)',
    colorClass: 'chip-qalqalah',
    ruleCategory: 'Les 5 verbes d\'exception',
    determinedTashkeel: 'Kasrah (اِ)',
    explanation: 'Bien que le Nūn porte une Dammah apparente, l\'origine du mot est « Ibniyū » (Kasrah). L\'attaque se fait STRICTEMENT en Kasrah : « Ibnū » !',
    fiqhImpact: 'Faute de récitation très répandue chez les débutants.',
    commonTrap: 'Dire "Ubnū" en regardant la Dammah du Nūn.',
  },
  {
    id: 'hamzah-case-6',
    title: 'Sād 38:6 — Verbe d\'exception (ٱمۡشُواْ)',
    category: 'exception-verb',
    arabicWord: 'وَٱنطَلَقَ ٱلۡمَلَأُ مِنۡهُمۡ أَنِ ٱمۡشُواْ',
    waslArabicText: 'أَنِ ٱمۡشُواْ',
    ibtidaArabicText: 'اِمۡشُواْ',
    waslPronunciation: 'Ani-m-shū (Wasl avec Kasrah de liaison)',
    ibtidaPronunciation: 'Imshū (Attaque avec KASRAH)',
    surahRef: 'Sād 38:6',
    ruleBadge: 'Exception : Kasrah (اِ)',
    colorClass: 'chip-qalqalah',
    ruleCategory: 'Les 5 verbes d\'exception',
    determinedTashkeel: 'Kasrah (اِ)',
    explanation: 'Même exception : racine « Imshiyū ». La Dammah est incidentelle au Wāw du pluriel. Prononcez « Imshū ».',
    fiqhImpact: 'Obligatoire.',
    commonTrap: 'Prononcer "Umshū".',
  },
  {
    id: 'hamzah-case-7',
    title: 'Maryam 19:7 — Nom indéfini spécifique (ٱسۡمُهُۥٓ)',
    category: 'wasl-noun',
    arabicWord: 'بِغُلَٰمٍ ٱسۡمُهُۥ يَحۡيَىٰ',
    waslArabicText: 'غُلَٰمٍ ٱسۡمُهُۥ',
    ibtidaArabicText: 'اِسۡمُهُۥ',
    waslPronunciation: 'Ghulāmini-s-muhū (Kasrah de liaison)',
    ibtidaPronunciation: 'Ismuhū (Attaque avec KASRAH)',
    surahRef: 'Maryam 19:7',
    ruleBadge: 'Nom Indéfini (Kasrah)',
    colorClass: 'chip-izhar',
    ruleCategory: 'Noms sans ٱلـ',
    determinedTashkeel: 'Kasrah (اِ)',
    explanation: 'Le mot « Ism » fait partie des 4 noms indéfinis spécifiques du Coran (avec Ibn, Imra\'ah, Ithnān) qui reçoivent TOUJOURS une Kasrah à l\'attaque (« Ismuhū »).',
    fiqhImpact: 'Conforme.',
    commonTrap: 'Mettre une Dammah à cause de la Dammah sur le Mīm ("Usmuhū").',
  },
  {
    id: 'hamzah-case-8',
    title: 'Al-Ahqāf 46:4 — Rencontre de Deux Hamzahs (ٱئۡتُونِى)',
    category: 'two-hamzahs',
    arabicWord: 'فِى ٱلسَّمَٰوَٰتِۖ ٱئۡتُونِى بِكِتَٰبٖ',
    waslArabicText: 'فِى ٱلسَّمَٰوَٰتِۖ ٱئۡتُونِى',
    ibtidaArabicText: 'إِيتُونِى',
    waslPronunciation: 'fīs-samāwāti\'-tūnī (Wasl : chute de Wasl)',
    ibtidaPronunciation: 'ĪTŪNĪ (Madd Badal : transformation en Yā\')',
    surahRef: 'Al-Ahqāf 46:4',
    ruleBadge: 'Madd Badal (ĪTŪNĪ)',
    colorClass: 'chip-bad',
    ruleCategory: 'Rencontre de deux Hamzahs',
    determinedTashkeel: 'Kasrah + Yā\' (إِيتُونِي)',
    explanation: 'À l\'attaque, Hamzat Wasl prend Kasrah (إِ) et la Hamzat Qat\' Sākinah (ئْ) se transmute en une voyelle longue Yā\' pour adoucir la voix ➔ « ĪTŪNĪ » !',
    fiqhImpact: 'Règle phonétique majeure du Coran.',
    commonTrap: 'Prononcer "I\'tūnī" avec une rupture glottale brutale.',
  },
];

interface LamSakinahBenchCase {
  id: string;
  title: string;
  category: 'qamariyyah' | 'shamsiyyah' | 'jalalah' | 'fil-harf';
  arabicWord: string;
  highlightedSegment: string;
  ruleBadge: string;
  colorClass: string;
  ruleCategory: string;
  followingLetter: string;
  mushafSign: string;
  pronunciation: string;
  surahRef: string;
  explanation: string;
  fiqhImpact: string;
  commonTrap: string;
}

const LAM_SAKINAH_TEST_BENCH_CASES: LamSakinahBenchCase[] = [
  {
    id: 'lam-case-1',
    title: 'Al-Qamar 54:1 — Lām Qamariyyah (ٱلۡقَمَرُ)',
    category: 'qamariyyah',
    arabicWord: 'وَٱنشَقَّ ٱلۡقَمَرُ',
    highlightedSegment: 'ٱلۡقَمَرُ',
    ruleBadge: 'Izhār Qamarī (لۡ visible)',
    colorClass: 'chip-izhar',
    ruleCategory: 'Lām At-Ta\'rīf Lunaire',
    followingLetter: 'ق (Qāf - Lettre lunaire)',
    mushafSign: 'Petit Soukoûn en forme de tête de Khā\' (لۡ)',
    pronunciation: 'Al-Qamar (Lām claire avec durée de Tawassut)',
    surahRef: 'Al-Qamar 54:1',
    explanation: 'Le Qāf fait partie de la formule « إِبۡغِ حَجَّكَ وَخَفۡ عَقِيمَهُ ». La Lām est clairement prononcée en stabilisant la langue contre le palais sans rebond.',
    fiqhImpact: 'Obligatoire. Ne jamais assimiler la Lām dans une lettre lunaire.',
    commonTrap: 'Faire une Qalqalah parasite en relâchant la langue trop brusquement (« Ala-qamar »).',
  },
  {
    id: 'lam-case-2',
    title: 'Al-Baqarah 2:125 — Lām Qamariyyah en Liaison (ٱلۡبَيۡتَ)',
    category: 'qamariyyah',
    arabicWord: 'وَإِذۡ جَعَلۡنَا ٱلۡبَيۡتَ مَثَابَةٗ',
    highlightedSegment: 'جَعَلۡنَا ٱلۡبَيۡتَ',
    ruleBadge: 'Izhār Qamarī en Wasl',
    colorClass: 'chip-izhar',
    ruleCategory: 'Lām At-Ta\'rīf Lunaire',
    followingLetter: 'ب (Bā\' - Lettre lunaire)',
    mushafSign: 'Soukoûn visible sur la Lām (لۡ)',
    pronunciation: 'Ja\'alna-l-bayta (Hamzat Wasl s\'élide, Lām claire)',
    surahRef: 'Al-Baqarah 2:125',
    explanation: 'En liaison continue, Hamzat Wasl tombe mais la Lām lunaire demeure parfaitement audible et limpide.',
    fiqhImpact: 'Conforme à la Sunnah.',
    commonTrap: 'Couper la voix ou marquer un arrêt artificiel devant la Lām.',
  },
  {
    id: 'lam-case-3',
    title: 'Al-Fātihah 1:4 — Lām Shamsiyyah (ٱلدِّينِ)',
    category: 'shamsiyyah',
    arabicWord: 'مَٰلِكِ يَوۡمِ ٱلدِّينِ',
    highlightedSegment: 'يَوۡمِ ٱلدِّينِ',
    ruleBadge: 'Idghām Shamsī (Lām nue + Shaddah)',
    colorClass: 'chip-idgham',
    ruleCategory: 'Lām At-Ta\'rīf Solaire',
    followingLetter: 'د (Dāl avec Shaddah دّ)',
    mushafSign: 'Lām nue sans voyelle + Shaddah sur le Dāl',
    pronunciation: 'Yawmi-d-Dīn (Lām totalement muette)',
    surahRef: 'Al-Fātihah 1:4',
    explanation: 'Le Dāl est solaire : la Lām est silencieuse et fusionne intégralement dans le Dāl dédoublé avec Shaddah.',
    fiqhImpact: 'Lahn Jalī si la Lām est prononcée. Elle doit s\'annuler complètement.',
    commonTrap: 'Prononcer "Yawm-il-Dīn" par négligence dialectale.',
  },
  {
    id: 'lam-case-4',
    title: 'Ash-Shams 91:1 — Double Chute en Wasl (وَٱلشَّمۡسِ)',
    category: 'shamsiyyah',
    arabicWord: 'وَٱلشَّمۡسِ وَضُحَىٰهَا',
    highlightedSegment: 'وَٱلشَّمۡسِ',
    ruleBadge: 'Double Effacement (Wasl + Shams)',
    colorClass: 'chip-idgham',
    ruleCategory: 'Lām At-Ta\'rīf Solaire',
    followingLetter: 'ش (Shīn avec Shaddah شّ)',
    mushafSign: 'Hamzat Wasl + Lām nue',
    pronunciation: 'Wash-shams (De "Wa" direct vers "Sh")',
    surahRef: 'Ash-Shams 91:1',
    explanation: 'En continu depuis le Wāw, Hamzat Wasl s\'élide ET la Lām Shamsiyyah disparaît : les deux consonnes sont muettes ! On enchaîne directement « Wash-shams » sans heurt.',
    fiqhImpact: 'Récitation fluide sans saccade.',
    commonTrap: 'Hésiter et insérer un son parasite "Wa-al-shams".',
  },
  {
    id: 'lam-case-5',
    title: 'An-Nās 114:1 — Lām Shamsiyyah avec Ghunnah (ٱلنَّاسِ)',
    category: 'shamsiyyah',
    arabicWord: 'قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ',
    highlightedSegment: 'بِرَبِّ ٱلنَّاسِ',
    ruleBadge: 'Idghām Shamsī + Ghunnah 2t',
    colorClass: 'chip-qalqalah',
    ruleCategory: 'Lām Solaire Spéciale Nūn',
    followingLetter: 'ن (Nūn avec Shaddah نّ)',
    mushafSign: 'Lām nue + Nūn Mushaddadah',
    pronunciation: 'Bi-rabbi-n-nās (Ghunnah nasale de 2 temps)',
    surahRef: 'An-Nās 114:1',
    explanation: 'L\'assimilation dans le Nūn solaire crée un Nūn dédoublé (نّ) : une résonance nasale (Ghunnah) de 2 temps pleins devient obligatoire !',
    fiqhImpact: 'Lahn Khafī si la Ghunnah de 2 temps est omise.',
    commonTrap: 'Traiter le Nūn comme une consonne ordinaire sans marquer les 2 temps nasaux.',
  },
  {
    id: 'lam-case-6',
    title: 'Al-Mā\'idah 5:115 — Lafz Al-Jalālah Tafkhīm (قَالَ ٱللَّهُ)',
    category: 'jalalah',
    arabicWord: 'قَالَ ٱللَّهُ إِنِّى مُنَزِّلُهَا',
    highlightedSegment: 'قَالَ ٱللَّهُ',
    ruleBadge: 'Tafkhīm (Lourd après Fathah)',
    colorClass: 'chip-gold',
    ruleCategory: 'Lafz Al-Jalālah ٱللَّه',
    followingLetter: 'Nom d\'Allah précédé de Fathah',
    mushafSign: 'Lām avec Shaddah dans ٱللَّه',
    pronunciation: 'Qāla-llāhu (Arrière de langue élevé, son majestueux)',
    surahRef: 'Al-Mā\'idah 5:115',
    explanation: 'La Fathah sur le Lām de « Qāla » impose le Tafkhīm : la bouche s\'emplit de résonance majestueuse sans arrondir les lèvres en cul-de-poule.',
    fiqhImpact: 'Emphase obligatoire du Nom divin.',
    commonTrap: 'Projeter les lèvres en O pour imiter le son lourd (dire "Ollāh").',
  },
  {
    id: 'lam-case-7',
    title: 'Al-Fātihah 1:1 — Lafz Al-Jalālah Tarqīq (بِسۡمِ ٱللَّهِ)',
    category: 'jalalah',
    arabicWord: 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ',
    highlightedSegment: 'بِسۡمِ ٱللَّهِ',
    ruleBadge: 'Tarqīq (Fin après Kasrah)',
    colorClass: 'chip-izhar',
    ruleCategory: 'Lafz Al-Jalālah ٱللَّه',
    followingLetter: 'Nom d\'Allah précédé de Kasrah',
    mushafSign: 'Kasrah sous le Mīm de Bismi',
    pronunciation: 'Bismi-llāhi (Langue basse, sourire intérieur)',
    surahRef: 'Al-Fātihah 1:1',
    explanation: 'Toute Kasrah précédente rend le Nom d\'Allah doux et mince (Tarqīq). La langue reste plate.',
    fiqhImpact: 'Ne jamais prononcer « Bismi-llōh ».',
    commonTrap: 'Garder un Lām lourd par mimétisme.',
  },
  {
    id: 'lam-case-8',
    title: '17:80 & 37:18 — Lām Al-Fi\'l (قُلۡ نَعَمۡ vs قُل رَّبِّ)',
    category: 'fil-harf',
    arabicWord: 'قُلۡ نَعَمۡ ۝ وَقُل رَّبِّ',
    highlightedSegment: 'قُلۡ نَعَمۡ · وَقُل رَّبِّ',
    ruleBadge: 'Izhār (ن) vs Idghām (ر)',
    colorClass: 'chip-iqlab',
    ruleCategory: 'Lām du Verbe (Lām Al-Fi\'l)',
    followingLetter: 'Nūn (Izhār) vs Râ\' (Idghām)',
    mushafSign: 'Soukoûn visible sur قُلۡ نَعَمۡ / Lām nue sur وَقُل رَّبِّ',
    pronunciation: 'Qul na\'am (Clarté) vs Qur-rabbi (Fusion totale)',
    surahRef: 'Al-Isrā\' 17:80 & As-Sāffāt 37:18',
    explanation: 'Devant le Nūn : Izhār obligatoire avec Tawassut sans rebond. Devant le Râ\' : Idghām complet, la Lām fond entièrement dans le Râ\'.',
    fiqhImpact: 'Deux règles opposées selon la consonne suivante.',
    commonTrap: 'Fusionner par erreur dans le Nūn (« Qun-na\'am ») ou faire une Qalqalah (« Qula-na\'am »).',
  },
];

interface MimSakinahBenchCase {
  id: string;
  title: string;
  category: 'ikhfa' | 'idgham' | 'izhar' | 'warning';
  arabicWord: string;
  highlightedSegment: string;
  ruleBadge: string;
  colorClass: string;
  ruleCategory: string;
  followingLetter: string;
  mushafSign: string;
  pronunciation: string;
  surahRef: string;
  explanation: string;
  fiqhImpact: string;
  commonTrap: string;
}

const MIM_SAKINAH_TEST_BENCH_CASES: MimSakinahBenchCase[] = [
  {
    id: 'mim-case-1',
    title: 'Al-Fīl 105:4 — Ikhfā\' Shafawī (تَرۡمِيهِم بِحِجَارَةٖ)',
    category: 'ikhfa',
    arabicWord: 'تَرۡمِيهِم بِحِجَارَةٖ مِّن سِجِّيلٖ',
    highlightedSegment: 'تَرۡمِيهِم بِحِجَارَةٖ',
    ruleBadge: 'Ikhfā\' Shafawī (2 temps)',
    colorClass: 'chip-idgham',
    ruleCategory: 'Dissimulation devant Bā\' (ب)',
    followingLetter: 'ب (Bā\' - Deux lèvres)',
    mushafSign: 'Mīm nu (sans voyelle) + Bā\' sans Shaddah',
    pronunciation: 'Tarmīhim bi-hijārah (Ghunnah douce sans Furjah)',
    surahRef: 'Al-Fīl 105:4',
    explanation: 'Mīm Sākinah suivi du Bā\'. Les lèvres se posent l\'une contre l\'autre délicatement avec 2 temps de Ghunnah nasale.',
    fiqhImpact: 'Obligatoire. Omettre la Ghunnah est un Lahn Khafī.',
    commonTrap: 'Laisser un espace ouvert (Furjah) ou écraser les lèvres excessivement.',
  },
  {
    id: 'mim-case-2',
    title: 'Al-\'Ādiyāt 100:11 — Ikhfā\' Shafawī (رَبَّهُم بِهِم)',
    category: 'ikhfa',
    arabicWord: 'إِنَّ رَبَّهُم بِهِمۡ يَوۡمَئِذٖ لَّخَبِيرُۢ',
    highlightedSegment: 'رَبَّهُم بِهِمۡ',
    ruleBadge: 'Ikhfā\' Shafawī (Ghunnah 2t)',
    colorClass: 'chip-idgham',
    ruleCategory: 'Dissimulation devant Bā\' (ب)',
    followingLetter: 'ب (Bā\')',
    mushafSign: 'Mīm nu',
    pronunciation: 'Rabbahum bihim (2 temps de résonance)',
    surahRef: 'Al-\'Ādiyāt 100:11',
    explanation: 'Se produit toujours entre deux mots distincts, jamais au sein d\'un seul mot.',
    fiqhImpact: 'Conforme à la Sunnah.',
    commonTrap: 'Prononcer un Mīm sec sans aucune Ghunnah.',
  },
  {
    id: 'mim-case-3',
    title: 'Al-Baqarah 2:10 — Idghām Shafawī (قُلُوبِهِم مَّرَضٞ)',
    category: 'idgham',
    arabicWord: 'فِى قُلُوبِهِم مَّرَضٞ فَزَادَهُمُ ٱللَّهُ مَرَضٗا',
    highlightedSegment: 'قُلُوبِهِم مَّرَضٞ',
    ruleBadge: 'Idghām Mithlayn Saghīr',
    colorClass: 'chip-idgham',
    ruleCategory: 'Fusion dans un autre Mīm',
    followingLetter: 'م (Mīm avec Shaddah مّ)',
    mushafSign: 'Premier Mīm nu + Second Mīm avec Shaddah',
    pronunciation: 'Qulūbihim-marad (Ghunnah 2 temps fermée)',
    surahRef: 'Al-Baqarah 2:10',
    explanation: 'Le premier Mīm sans voyelle fond entièrement dans le second Mīm pourvu de voyelle. Les deux deviennent un seul Mīm Mushaddadah.',
    fiqhImpact: 'Fusion absolue obligatoire.',
    commonTrap: 'Séparer les deux Mīms par une hésitation artificielle.',
  },
  {
    id: 'mim-case-4',
    title: 'Tāhā 20:39 — Mīm Mushaddadah à l\'Arrêt (ٱلۡيَمِّ)',
    category: 'idgham',
    arabicWord: 'فَٱقۡذِفِيهِ فِى ٱلۡيَمِّ فَلۡيُلۡقِهِ ٱلۡيَمُّ بِٱلسَّاحِلِ',
    highlightedSegment: 'فِى ٱلۡيَمِّ',
    ruleBadge: 'Ghunnah à l\'Arrêt (Akmal)',
    colorClass: 'chip-gold',
    ruleCategory: 'Mīm Mushaddadah (مّ)',
    followingLetter: 'Arrêt (Waqf) sur Mīm Mushaddadah',
    mushafSign: 'Shaddah et Kasrah (مِّ)',
    pronunciation: 'Fil-yamm... (2 temps de Ghunnah à l\'arrêt)',
    surahRef: 'Tāhā 20:39',
    explanation: 'En cas d\'arrêt sur un Mīm portant une Shaddah, la Ghunnah maximale de 2 temps doit impérativement être maintenue avant de couper le son !',
    fiqhImpact: 'Règle d\'or du Dr. Islām Fekry : ne jamais couper à sec.',
    commonTrap: 'Couper la voix net sur "Al-Yam" sans prolonger la Ghunnah.',
  },
  {
    id: 'mim-case-5',
    title: 'Al-Fātihah 1:2 — Izhār Shafawī Standard (ٱلۡحَمۡدُ)',
    category: 'izhar',
    arabicWord: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
    highlightedSegment: 'ٱلۡحَمۡدُ',
    ruleBadge: 'Izhār Shafawī (Dans un mot)',
    colorClass: 'chip-izhar',
    ruleCategory: 'Izhār devant les 26 lettres',
    followingLetter: 'د (Dāl - Langue)',
    mushafSign: 'Petit Soukoûn visible sur le Mīm (مۡ)',
    pronunciation: 'Al-Hamdu (Clarté naturelle sans prolongation)',
    surahRef: 'Al-Fātihah 1:2',
    explanation: 'Dans un seul mot, le Mīm rencontre le Dāl : clarté nette avec Tawassut sans allongement nasal.',
    fiqhImpact: 'Prononciation standard sans déviation.',
    commonTrap: 'Faire une Qalqalah parasite en relâchant brutalement les lèvres (« Al-Hamadu »).',
  },
  {
    id: 'mim-case-6',
    title: 'Al-Fātihah 1:7 — Izhār Shafawī entre Mots (عَلَيۡهِمۡ غَيۡرِ)',
    category: 'izhar',
    arabicWord: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ',
    highlightedSegment: 'عَلَيۡهِمۡ غَيۡرِ',
    ruleBadge: 'Izhār Shafawī (Entre 2 mots)',
    colorClass: 'chip-izhar',
    ruleCategory: 'Izhār devant les 26 lettres',
    followingLetter: 'غ (Ghayn - Gorge)',
    mushafSign: 'Soukoûn visible (مۡ)',
    pronunciation: '\'Alayhim ghayril (Mīm net puis Ghayn)',
    surahRef: 'Al-Fātihah 1:7',
    explanation: 'Mīm Sākinah suivi du Ghayn (lettre de gorge) : Izhār Shafawī limpide sans pause.',
    fiqhImpact: 'Conforme.',
    commonTrap: 'Ajouter un temps de Ghunnah superflu.',
  },
  {
    id: 'mim-case-7',
    title: 'Al-Fātihah 1:7 — Ashadd Izhār devant Wāw (عَلَيۡهِمۡ وَلَا)',
    category: 'warning',
    arabicWord: 'غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ',
    highlightedSegment: 'عَلَيۡهِمۡ وَلَا',
    ruleBadge: '⚠️ Ashadd Izhār (Alerte Wāw)',
    colorClass: 'chip-qalqalah',
    ruleCategory: 'Alerte Maximale (Wāw)',
    followingLetter: 'و (Wāw - Partage les deux lèvres !)',
    mushafSign: 'Soukoûn visible (مۡ) + Wāw (وَ)',
    pronunciation: '\'Alayhim wa lā (Fermeture complète avant ouverture)',
    surahRef: 'Al-Fātihah 1:7',
    explanation: 'PIÈGE CRITIQUE : Le Mīm et le Wāw partagent exactement le même Makhraj (les deux lèvres). L\'appareil buccal a tendance à assimiler le Mīm. Fermez franchement les lèvres !',
    fiqhImpact: 'Lahn Khafī si le Mīm est avalé ou dissimulé.',
    commonTrap: 'Dire « \'Alayhiw-walā » en faisant glisser le Mīm dans le Wāw.',
  },
  {
    id: 'mim-case-8',
    title: 'Al-Baqarah 2:82 — Ashadd Izhār devant Fā\' (هُمۡ فِيهَا)',
    category: 'warning',
    arabicWord: 'أُولَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَنَّةِۖ هُمۡ فِيهَا خَٰلِدُونَ',
    highlightedSegment: 'هُمۡ فِيهَا',
    ruleBadge: '⚠️ Ashadd Izhār (Alerte Fā\')',
    colorClass: 'chip-qalqalah',
    ruleCategory: 'Alerte Maximale (Fā\')',
    followingLetter: 'ف (Fā\' - Lèvre inférieure et incisives)',
    mushafSign: 'Soukoûn visible (مۡ) + Fā\' (فِ)',
    pronunciation: 'Hum fīhā (Clarté rigoureuse du Mīm)',
    surahRef: 'Al-Baqarah 2:82',
    explanation: 'Le Fā\' naît au contact direct des incisives sur la lèvre inférieure. Ne dissimulez jamais le Mīm dans le Fā\'.',
    fiqhImpact: 'Clarté obligatoire exigée par Ibn Al-Jazarī.',
    commonTrap: 'Dire « Huf-fīhā » en anticipant le Fā\' trop tôt.',
  },
];

interface AssimilationBenchCase {
  id: string;
  title: string;
  category: 'mutamathilayn' | 'madd' | 'kamil' | 'naqis';
  arabicWord: string;
  highlightedSegment: string;
  ruleBadge: string;
  colorClass: string;
  ruleCategory: string;
  involvedLetters: string;
  mushafSign: string;
  pronunciation: string;
  surahRef: string;
  explanation: string;
  fiqhImpact: string;
  commonTrap: string;
}

const ASSIMILATION_TEST_BENCH_CASES: AssimilationBenchCase[] = [
  {
    id: 'assim-1',
    title: 'Al-Mā\'idah 5:61 — Mutamāthilayn entre deux mots (وَقَد دَّخَلُواْ)',
    category: 'mutamathilayn',
    arabicWord: 'وَإِذَا جَآءُوكُمۡ قَالُوٓاْ ءَامَنَّا وَقَد دَّخَلُواْ بِٱلۡكُفۡرِ',
    highlightedSegment: 'وَقَد دَّخَلُواْ',
    ruleBadge: 'Mutamāthilayn (د dans د)',
    colorClass: 'chip-idgham',
    ruleCategory: 'Lettres Identiques (د + د)',
    involvedLetters: 'دْ + دَ ➔ دَّ',
    mushafSign: 'Premier Dāl nu (sans soukoûn) + second Dāl avec Shaddah (دَّ)',
    pronunciation: 'Wa-qad-dakhalū (Dāl doublé sans Qalqalah)',
    surahRef: 'Al-Mā\'idah 5:61',
    explanation: 'Le premier Dāl s\'efface à 100% dans le second. Vos articulateurs se ferment directement sur le Dāl avec Shaddah sans aucune Qalqalah intermédiaire.',
    fiqhImpact: 'Obligation de fusionner en continu.',
    commonTrap: 'Faire une Qalqalah sur le premier Dāl (« Wa-qad-a-dakhalū »).',
  },
  {
    id: 'assim-2',
    title: 'An-Nisā\' 4:78 — Mutamāthilayn dans le même mot (يُدۡرِككُّمُ)',
    category: 'mutamathilayn',
    arabicWord: 'أَيۡنَمَا تَكُونُواْ يُدۡرِككُّمُ ٱلۡمَوۡتُ',
    highlightedSegment: 'يُدۡرِككُّمُ',
    ruleBadge: 'Mutamāthilayn Intramot (ك dans ك)',
    colorClass: 'chip-idgham',
    ruleCategory: 'Lettres Identiques (ك + ك)',
    involvedLetters: 'كْ + كُ ➔ كُّ',
    mushafSign: 'Premier Kāf sans voyelle + second Kāf avec Shaddah (كُّ)',
    pronunciation: 'Yudrik-kumu-l-mawt (Kāf Mushaddadah)',
    surahRef: 'An-Nisā\' 4:78',
    explanation: 'L\'assimilation d\'identiques a lieu au sein d\'un seul mot : le premier Kāf fond entièrement dans le second.',
    fiqhImpact: 'Conforme et obligatoire.',
    commonTrap: 'Séparer les deux Kāf avec une micro-pause saccadée.',
  },
  {
    id: 'assim-3',
    title: 'Yūsuf 12:7 — Exception Sacrée : Yā\' de Madd (فِى يُوسُفَ)',
    category: 'madd',
    arabicWord: 'لَّقَدۡ كَانَ فِى يُوسُفَ وَإِخۡوَتِهِۦٓ ءَايَٰتٞ',
    highlightedSegment: 'فِى يُوسُفَ',
    ruleBadge: '⚠️ Izhār Obligatoire (Lettre de Madd)',
    colorClass: 'chip-gold',
    ruleCategory: 'Exception Sacrée (Madd)',
    involvedLetters: 'ي (Madd d\'Al-Jawf) + يُ (Consonne de la langue)',
    mushafSign: 'Yā\' sans voyelle (Madd Naturel) suivi de Yā\' avec Dammah sans Shaddah',
    pronunciation: 'Fī Yūsufa (Madd 2 temps puis consonne distincte)',
    surahRef: 'Yūsuf 12:7',
    explanation: 'INTERDICTION FORMELLE D\'ASSIMILATION : Le Yā\' de « Fī » est une voyelle longue d\'Al-Jawf. On prononce « Fī » avec 2 temps de Madd puis « Yūsuf » clairement.',
    fiqhImpact: 'Lahn prohibé si l\'on fusionne (« Fiy-yūsuf » ❌).',
    commonTrap: 'Tronquer le Madd de « Fī » pour enchaîner directement sur une Shaddah.',
  },
  {
    id: 'assim-4',
    title: 'Hūd 11:23 — Exception Sacrée : Wāw de Madd (ءَامَنُواْ وَعَمِلُواْ)',
    category: 'madd',
    arabicWord: 'إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ',
    highlightedSegment: 'ءَامَنُواْ وَعَمِلُواْ',
    ruleBadge: '⚠️ Izhār Obligatoire (Lettre de Madd)',
    colorClass: 'chip-gold',
    ruleCategory: 'Exception Sacrée (Madd)',
    involvedLetters: 'و (Madd d\'Al-Jawf) + وَ (Consonne des lèvres)',
    mushafSign: 'Wāw de Madd + Alif muet orthographique + Wāw consonne sans Shaddah',
    pronunciation: 'Āmanū wa-\'amilū (Madd 2 temps respecté)',
    surahRef: 'Hūd 11:23',
    explanation: 'Le Wāw de « Āmanū » est un Madd. On donne ses 2 temps complets avant d\'attaquer le Wāw consonne « wa-\'amilū ».',
    fiqhImpact: 'Lahn prohibé en cas d\'assimilation (« Āmanuw-wa » ❌).',
    commonTrap: 'Accélérer et écraser le Madd sur le second Wāw.',
  },
  {
    id: 'assim-5',
    title: 'Hūd 11:42 — Cas Unique : Bā\' dans Mīm (ٱرۡكَب مَّعَنَا)',
    category: 'kamil',
    arabicWord: 'يَٰبُنَىَّ ٱرۡكَب مَّعَنَا وَلَا تَكُن مَّعَ ٱلۡكَٰفِرِينَ',
    highlightedSegment: 'ٱرۡكَب مَّعَنَا',
    ruleBadge: 'Idghām Kāmil avec Ghunnah 2 temps',
    colorClass: 'chip-idgham',
    ruleCategory: 'Fusions Rares (ب dans م)',
    involvedLetters: 'بْ + مَ ➔ مَّ (avec 2t Ghunnah)',
    mushafSign: 'Bā\' nu sans soukoûn + Mīm avec Shaddah (مَّ)',
    pronunciation: 'Yā bunayya-rkam-ma\'anā (Mīm doublé avec 2t Ghunnah)',
    surahRef: 'Hūd 11:42',
    explanation: 'Cas unique dans tout le Coran : le Bā\' sans voyelle fusionne dans le Mīm avec 2 temps complets de Ghunnah nasale ! À l\'arrêt d\'urgence sur « Irkab », l\'Idghām s\'annule et le Bā\' rebondit en Qalqalah : « Irkab ! ».',
    fiqhImpact: 'Obligatoire en Wasl selon Hafs.',
    commonTrap: 'Oublier la Ghunnah ou faire une Qalqalah sur le Bā\' en continu.',
  },
  {
    id: 'assim-6',
    title: 'Al-Mursalāt 77:20 — Qāf dans Kāf (أَلَمۡ نَخۡلُقكُّم)',
    category: 'kamil',
    arabicWord: 'أَلَمۡ نَخۡلُقكُّم مِّن مَّآءٖ مَّهِينٖ',
    highlightedSegment: 'نَخۡلُقكُّم',
    ruleBadge: 'Idghām Mutaqāribayn Kāmil',
    colorClass: 'chip-idgham',
    ruleCategory: 'Fusions Rares (ق dans ك)',
    involvedLetters: 'قْ + كُ ➔ كُّ',
    mushafSign: 'Qāf nu sans soukoûn + Kāf avec Shaddah (كُّ)',
    pronunciation: 'Alam nakhluk-kum (Kāf Mushaddadah pur)',
    surahRef: 'Al-Mursalāt 77:20',
    explanation: 'Dans la récitation de Hafs via Ash-Shātibiyyah, le Qāf s\'efface totalement dans le Kāf doublé.',
    fiqhImpact: 'Lecture officielle dominante de Hafs.',
    commonTrap: 'Laisser subsister un son Qāf ou une Qalqalah.',
  },
  {
    id: 'assim-7',
    title: 'Al-Baqarah 2:256 — Dāl dans Tā\' (قَد تَّبَيَّنَ)',
    category: 'kamil',
    arabicWord: 'قَد تَّبَيَّنَ ٱلرُّشۡدُ مِنَ ٱلۡغَيِّۚ',
    highlightedSegment: 'قَد تَّبَيَّنَ',
    ruleBadge: 'Idghām Mutajānisayn Kāmil',
    colorClass: 'chip-idgham',
    ruleCategory: 'Fusions Rares (د dans ت)',
    involvedLetters: 'دْ + تَ ➔ تَّ',
    mushafSign: 'Dāl nu sans soukoûn + Tā\' avec Shaddah (تَّ)',
    pronunciation: 'Qat-tabayyana (Tā\' doublé sec)',
    surahRef: 'Al-Baqarah 2:256',
    explanation: 'Le Dāl et le Tā\' sont homogènes (Mutajānisayn). Le Dāl disparaît totalement au profit du Tā\' avec Shaddah.',
    fiqhImpact: 'Obligatoire.',
    commonTrap: 'Faire rebondir le Dāl en Qalqalah (« Qada-tabayyana »).',
  },
  {
    id: 'assim-8',
    title: 'Al-Mā\'idah 5:28 — Idghām Nāqis : Tā\' dans Tā\' (بَسَطتَ)',
    category: 'naqis',
    arabicWord: 'لَئِنۢ بَسَطتَ إِلَىَّ يَدَكَ لِتَقۡتُلَنِى',
    highlightedSegment: 'بَسَطتَ',
    ruleBadge: 'Idghām Nāqis (ط dans ت)',
    colorClass: 'chip-qalqalah',
    ruleCategory: 'Assimilation Partielle (ط ➔ ت)',
    involvedLetters: 'طْ (lourd Itbāq) + تَ (fin)',
    mushafSign: 'Tā\' nu (ط) suivi de Tā\' sans Shaddah (تَ)',
    pronunciation: 'Basat-ta (Tafkhīm scellé sans Qalqalah, puis Tā\' fin)',
    surahRef: 'Al-Mā\'idah 5:28',
    explanation: 'L\'assimilation est partielle : le Tā\' garde son emphase et son écrasement (Itbāq) au palais SANS Qalqalah, puis la langue libère le son fin du Tā\'.',
    fiqhImpact: 'Règle technique indispensable de perfectionnement.',
    commonTrap: 'Faire une Qalqalah parasite sur le Tā\' ou au contraire amincir le mot entier dès le départ.',
  },
];

export const TajweedLab: React.FC<TajweedLabProps> = ({ chapter }) => {
  // Arabic alphabet for Chapters 8 & 10
  const ARABIC_ALPHABET = [
    { letter: 'ء', nameFr: 'Hamzah', category: 'throat' },
    { letter: 'ب', nameFr: 'Bā\'', category: 'lips' },
    { letter: 'ت', nameFr: 'Tā\'', category: 'tongue' },
    { letter: 'ث', nameFr: 'Thā\'', category: 'tongue' },
    { letter: 'ج', nameFr: 'Jīm', category: 'tongue' },
    { letter: 'ح', nameFr: 'Hā\'', category: 'throat' },
    { letter: 'خ', nameFr: 'Khā\'', category: 'throat' },
    { letter: 'د', nameFr: 'Dāl', category: 'tongue' },
    { letter: 'ذ', nameFr: 'Dhāl', category: 'tongue' },
    { letter: 'ر', nameFr: 'Rā\'', category: 'tongue' },
    { letter: 'ز', nameFr: 'Zāy', category: 'tongue' },
    { letter: 'س', nameFr: 'Sīn', category: 'tongue' },
    { letter: 'ش', nameFr: 'Shīn', category: 'tongue' },
    { letter: 'ص', nameFr: 'Sād', category: 'tongue' },
    { letter: 'ض', nameFr: 'Dād', category: 'tongue' },
    { letter: 'ط', nameFr: 'Tā\'', category: 'tongue' },
    { letter: 'ظ', nameFr: 'Zā\'', category: 'tongue' },
    { letter: 'ع', nameFr: '\'Ayn', category: 'throat' },
    { letter: 'غ', nameFr: 'Ghayn', category: 'throat' },
    { letter: 'ف', nameFr: 'Fā\'', category: 'lips' },
    { letter: 'ق', nameFr: 'Qāf', category: 'tongue' },
    { letter: 'ك', nameFr: 'Kāf', category: 'tongue' },
    { letter: 'ل', nameFr: 'Lām', category: 'tongue' },
    { letter: 'م', nameFr: 'Mīm', category: 'lips' },
    { letter: 'ن', nameFr: 'Nūn', category: 'tongue' },
    { letter: 'هـ', nameFr: 'Hā\'', category: 'throat' },
    { letter: 'و', nameFr: 'Wāw', category: 'lips' },
    { letter: 'ي', nameFr: 'Yā\'', category: 'tongue' },
  ];

  // State for Chapter 1
  const [selectedCaseId, setSelectedCaseId] = useState<string>('jali-1');
  const [filterCategory, setFilterCategory] = useState<'all' | 'jali' | 'khafi' | 'correct'>('all');

  // State for Chapter 2
  const [selectedSymbolId, setSelectedSymbolId] = useState<string>('m-lazim');
  const [symbolCategory, setSymbolCategory] = useState<'all' | 'waqf' | 'pronounce' | 'structure'>('all');

  // State for Chapter 3
  const [stoppingCaseId, setStoppingCaseId] = useState<string>('case-sukun-1');
  const [stoppingFilter, setStoppingFilter] = useState<'all' | 'sukun' | 'iwad' | 'marbutah' | 'resume'>('all');
  const [isWaqfMode, setIsWaqfMode] = useState<boolean>(true);

  // State for Chapter 4
  const [maddCaseId, setMaddCaseId] = useState<string>('madd-case-1');
  const [maddFilter, setMaddFilter] = useState<'all' | 'tabii' | 'leen' | 'cameleon'>('all');
  const [isMaddWaqfMode, setIsMaddWaqfMode] = useState<boolean>(false);

  // State for Chapter 5
  const [fariCaseId, setFariCaseId] = useState<string>('fari-case-1');
  const [fariFilter, setFariFilter] = useState<'all' | 'muttasil' | 'munfasil' | 'lazim' | 'arid'>('all');
  const [isFariWaqfMode, setIsFariWaqfMode] = useState<boolean>(false);

  // State for Chapter 6
  const [hamzahCaseId, setHamzahCaseId] = useState<string>('hamzah-case-1');
  const [hamzahFilter, setHamzahFilter] = useState<'all' | 'wasl-verb' | 'wasl-noun' | 'exception-verb' | 'two-hamzahs'>('all');
  const [isHamzahIbtidaMode, setIsHamzahIbtidaMode] = useState<boolean>(true);

  // State for Chapter 7
  const [lamCaseId, setLamCaseId] = useState<string>('lam-case-1');
  const [lamFilter, setLamFilter] = useState<'all' | 'qamariyyah' | 'shamsiyyah' | 'jalalah' | 'fil-harf'>('all');

  // State for Chapter 9
  const [mimCaseId, setMimCaseId] = useState<string>('mim-case-1');
  const [mimFilter, setMimFilter] = useState<'all' | 'ikhfa' | 'idgham' | 'izhar' | 'warning'>('all');

  // State for Chapter 11
  const [assimilationCaseId, setAssimilationCaseId] = useState<string>('assim-1');
  const [assimilationFilter, setAssimilationFilter] = useState<'all' | 'mutamathilayn' | 'madd' | 'kamil' | 'naqis'>('all');

  // State for Chapters 8 & 10
  const [selectedLetter, setSelectedLetter] = useState(
    chapter.number === 8 ? 'ي' : 'ق'
  );

  // Analysis for Chapter 8 (Nun Sakinah)
  const getNunAnalysis = (l: string) => {
    if (['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'].includes(l)) {
      return {
        rule: 'Izhār Halqī (الإِظْهَارُ الحَلْقِيُّ)',
        badge: 'Clarté absolue',
        colorClass: 'chip-izhar',
        explanation: `La lettre ${l} est une lettre de la gorge. Le Nūn est prononcé de manière claire et nette sans prolonger la résonance nasale.`,
        mouthMechanism: 'La langue touche fermement les gencives pour former le son N, puis la gorge émet immédiatement la lettre.',
        example: l === 'ع' ? 'أَنۡعَمۡتَ' : l === 'ء' ? 'مَنۡ ءَامَنَ' : 'عَلِيمٌ حَكِيمٞ',
      };
    }

    if (['ي', 'ن', 'م', 'و'].includes(l)) {
      return {
        rule: 'Idghām bi-Ghunnah (إِدْغَامٌ بِغُنَّةٍ)',
        badge: 'Fusion avec 2 temps de résonance',
        colorClass: 'chip-idgham',
        explanation: `La lettre ${l} fait partie des 4 lettres (يَنْمُو). Le Nūn s'efface et fusionne dans le ${l} avec une Ghunnah obligatoire de 2 temps.`,
        mouthMechanism: 'La pointe de la langue ne touche pas les gencives. Le son vibre dans le nez pendant 2 pulsations.',
        example: l === 'ي' ? 'فَمَن يَعۡمَلۡ' : l === 'م' ? 'مِن مَّالٍ' : 'مَن يَقُولُ',
      };
    }

    if (['ل', 'ر'].includes(l)) {
      return {
        rule: 'Idghām bi-ghayri Ghunnah (إِدْغَامٌ بِغَيْرِ غُنَّةٍ)',
        badge: 'Fusion totale sans nasalité',
        colorClass: 'chip-idgham',
        explanation: `La lettre ${l} entraîne une fusion totale et sèche. Le Nūn disparaît complètement et aucun son ne doit passer par le nez.`,
        mouthMechanism: 'La lettre suivante prend une Shaddah complète sans résonance nasale.',
        example: l === 'ر' ? 'مِن رَّبِّهِمۡ' : 'هُدٗى لِّلۡمُتَّقِينَ',
      };
    }

    if (l === 'ب') {
      return {
        rule: 'Iqlāb (الإِقْلَابُ)',
        badge: 'Transformation en Mīm léger',
        colorClass: 'chip-iqlab',
        explanation: `Devant le Bā' (ب), le Nūn se transforme en un son Mīm (م) caché avec une Ghunnah de 2 temps.`,
        mouthMechanism: 'Les lèvres se rapprochent avec douceur sans pression excessive.',
        example: 'مِنۢ بَعۡدِ',
      };
    }

    const isHeavy = ['ص', 'ض', 'ط', 'ظ', 'ق'].includes(l);
    return {
      rule: `Ikhfā' Haqīqī (الإِخْفَاءُ الحَقِيقِيُّ) — Ghunnah ${isHeavy ? 'Lourde (Tafkhīm)' : 'Légère (Tarqīq)'}`,
      badge: isHeavy ? 'Emphase (Ghunnah Tafkhīm)' : 'Légèreté (Ghunnah Tarqīq)',
      colorClass: 'chip-ikhfa',
      explanation: isHeavy
        ? `La lettre ${l} est lourde (Isti'lā'). La Ghunnah d'Ikhfā' doit impérativement devenir grave et volumineuse !`
        : `La lettre ${l} est fine (Istifāl). La Ghunnah d'Ikhfā' doit rester claire, fine et douce.`,
      mouthMechanism: 'La langue reste suspendue à proximité du point d\'articulation de la lettre sans toucher le palais.',
      example: isHeavy ? 'مِن قَبۡلِكَ' : 'مِن تَحۡتِهَا',
    };
  };

  // Analysis for Chapter 10 (Qalqalah)
  const getQalqalahAnalysis = (l: string) => {
    const isQalqalahLetter = ['ق', 'ط', 'ب', 'ج', 'د'].includes(l);
    if (isQalqalahLetter) {
      return {
        rule: `Lettre de Qalqalah : ${l} (حَرْفُ قَلْقَلَةٍ)`,
        badge: 'Rebond obligatoire au Soukoûn',
        colorClass: 'chip-qalqalah',
        explanation: `Fait partie de la formule قُطْبُ جَدٍّ. Dès que cette lettre porte un soukoûn (originel ou par arrêt), un rebond net et franc est obligatoire.`,
        mouthMechanism: 'Les articulateurs se séparent instantanément sous la pression de l\'air emprisonné, sans aucun mouvement de voyelle.',
        example: l === 'ق' ? 'ٱلۡفَلَقِ' : l === 'د' ? 'أَحَدٌ' : 'وَتَبَّ',
      };
    }

    const isHams = ['ف', 'ح', 'ث', 'هـ', 'ش', 'خ', 'ص', 'س', 'ك', 'ت'].includes(l);
    if (isHams) {
      return {
        rule: `Lettre de Souffle (Hams) : ${l}`,
        badge: 'Pas de rebond !',
        colorClass: 'chip-izhar',
        explanation: `Piège fréquent : la lettre ${l} ne fait pas partie de la Qalqalah. Elle a la caractéristique de Hams (écoulement de souffle) : ne la faites jamais rebondir.`,
        mouthMechanism: 'Laissez simplement glisser un souffle d\'air à l\'arrêt, sans secouer la lettre.',
        example: l === 'ك' ? 'أَلَمۡ نَشۡرَحۡ لَكَ' : 'فَتَحۡنَا',
      };
    }

    return {
      rule: `Lettre ordinaire : ${l}`,
      badge: 'Pas de Qalqalah',
      colorClass: 'chip-gold',
      explanation: `Cette lettre ne fait pas partie de Qutb Jadd. Elle se prononce avec son soukoûn naturel sans vibration ajoutée.`,
      mouthMechanism: 'Prononciation fluide selon son point d\'articulation.',
      example: 'ٱلۡحَمۡدُ',
    };
  };

  /* =========================================================================
     RENDU CHAPITRE 1 : BANC D'ESSAI DU LAHN
     ========================================================================= */
  if (chapter.number === 1) {
    const filteredCases = LAHN_TEST_CASES.filter(
      (c) => filterCategory === 'all' || c.category === filterCategory
    );
    const selectedCase =
      LAHN_TEST_CASES.find((c) => c.id === selectedCaseId) || LAHN_TEST_CASES[0];

    const severityConfig = {
      danger: {
        border: 'border-bad/40',
        bg: 'bg-bad-bg',
        text: 'text-bad',
        icon: AlertCircle,
      },
      warning: {
        border: 'border-gold/40',
        bg: 'bg-gold-bg',
        text: 'text-gold',
        icon: AlertTriangle,
      },
      success: {
        border: 'border-good/40',
        bg: 'bg-good-bg',
        text: 'text-good',
        icon: CheckCircle2,
      },
    };

    const sev = severityConfig[selectedCase.fiqhSeverity];
    const SeverityIcon = sev.icon;

    return (
      <>
        <StepHeader
          step={3}
          title="Le Banc d'Essai du Lahn"
          description="Sélectionnez un cas de récitation pour diagnostiquer son statut théologique, son impact sur la prière et la technique pour le corriger."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 my-4">
          <div className="segmented">
            <button
              onClick={() => setFilterCategory('all')}
              aria-pressed={filterCategory === 'all'}
            >
              Tous ({LAHN_TEST_CASES.length})
            </button>
            <button
              onClick={() => setFilterCategory('jali')}
              aria-pressed={filterCategory === 'jali'}
            >
              Lahn Jalī (4)
            </button>
            <button
              onClick={() => setFilterCategory('khafi')}
              aria-pressed={filterCategory === 'khafi'}
            >
              Lahn Khafī (3)
            </button>
            <button
              onClick={() => setFilterCategory('correct')}
              aria-pressed={filterCategory === 'correct'}
            >
              Conforme (1)
            </button>
          </div>
          <span className="text-xs text-muted">
            Cas analysés selon le manuel du Dr. Islām Fekry
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 items-start">
          {/* Left list of test cases */}
          <div className="space-y-3">
            {filteredCases.map((tc) => {
              const isSelected = tc.id === selectedCase.id;
              return (
                <button
                  key={tc.id}
                  onClick={() => setSelectedCaseId(tc.id)}
                  aria-pressed={isSelected}
                  className={`w-full p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-card border-lapis shadow-md ring-2 ring-lapis/20'
                      : 'bg-card/70 border-line hover:border-muted/50 hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="ref-tag text-xs">{tc.surahRef} · {tc.surahName}</span>
                    <span className={`chip ${tc.colorClass} text-xs py-0.5 px-2.5`}>
                      {tc.badge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <h4 className="font-display font-semibold text-[15px] text-ink leading-snug truncate">
                        {tc.title}
                      </h4>
                      <p className="text-xs text-muted mt-1 truncate">
                        Prononcé : <span className="font-ui-ar text-sm text-ink">{tc.recitedAs}</span>
                      </p>
                    </div>

                    <span className="font-ar text-2xl text-ink shrink-0 font-bold" dir="rtl">
                      {tc.arabicWord}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right diagnostic workbench */}
          <section
            key={selectedCase.id}
            className="surface overflow-hidden lg:sticky lg:top-36 animate-fade"
            aria-live="polite"
          >
            {/* Top banner */}
            <div className={`p-6 border-b ${sev.border} ${sev.bg}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Diagnostic officiel
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mt-1">
                    {selectedCase.diagnosticTitle}
                  </h3>
                </div>
                <SeverityIcon className={`w-7 h-7 ${sev.text} shrink-0`} />
              </div>

              {/* Fiqh status pill */}
              <div className="mt-4 p-3 rounded-xl bg-card/80 border border-line flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${sev.text} bg-current animate-ping`} />
                <span className="text-xs sm:text-sm font-semibold text-ink">
                  {selectedCase.fiqhStatus}
                </span>
              </div>
            </div>

            {/* Compared words */}
            <div className="p-6 bg-soft border-b border-line">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-xl bg-card border border-line">
                  <span className="label block mb-1">Texte coranique</span>
                  <span className="font-ar text-2xl sm:text-3xl font-bold text-ink block" dir="rtl">
                    {selectedCase.arabicWord}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-card border border-line">
                  <span className="label block mb-1">Récitation testée</span>
                  <span className={`font-ui-ar text-lg sm:text-xl font-bold ${sev.text} block`} dir="rtl">
                    {selectedCase.recitedAs}
                  </span>
                </div>
              </div>
            </div>

            {/* Analysis details */}
            <div className="p-6 space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="label mb-1">Mécanisme phonétique</dt>
                <dd className="text-ink">{selectedCase.phoneticAnalysis}</dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1">Impact sur le sens sacré</dt>
                <dd className="text-ink font-medium">{selectedCase.meaningImpact}</dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1 text-gilt">Conseil de correction du professeur</dt>
                <dd className="text-ink bg-gilt-soft/40 p-3 rounded-xl border border-gilt/20">
                  {selectedCase.correctionTip}
                </dd>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  /* =========================================================================
     RENDU CHAPITRE 2 : DÉCODEUR DES SYMBOLES DU MUSHAF
     ========================================================================= */
  if (chapter.number === 2) {
    const filteredSymbols = QURAN_SYMBOLS.filter(
      (s) => symbolCategory === 'all' || s.category === symbolCategory
    );
    const selectedSymbol =
      QURAN_SYMBOLS.find((s) => s.id === selectedSymbolId) || QURAN_SYMBOLS[0];

    const accentMap: Record<string, string> = {
      'chip-izhar': 'var(--izhar)',
      'chip-idgham': 'var(--idgham)',
      'chip-iqlab': 'var(--iqlab)',
      'chip-ikhfa': 'var(--ikhfa)',
      'chip-qalqalah': 'var(--qalqalah)',
      'chip-gold': 'var(--gold)',
    };
    const accentBorder = accentMap[selectedSymbol.colorClass] || 'var(--ink)';

    return (
      <>
        <StepHeader
          step={3}
          title="Le Décodeur des Symboles du Mushaf"
          description="Sélectionnez un symbole calligraphique du Coran pour comprendre immédiatement ce que vous devez faire, son impact théologique et le piège à éviter."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 my-4">
          <div className="segmented">
            <button
              onClick={() => setSymbolCategory('all')}
              aria-pressed={symbolCategory === 'all'}
            >
              Tous ({QURAN_SYMBOLS.length})
            </button>
            <button
              onClick={() => setSymbolCategory('waqf')}
              aria-pressed={symbolCategory === 'waqf'}
            >
              Arrêts & Pauses (7)
            </button>
            <button
              onClick={() => setSymbolCategory('pronounce')}
              aria-pressed={symbolCategory === 'pronounce'}
            >
              Rasm & Prononciation (8)
            </button>
            <button
              onClick={() => setSymbolCategory('structure')}
              aria-pressed={symbolCategory === 'structure'}
            >
              Spéciaux (1)
            </button>
          </div>
          <span className="text-xs text-muted">
            Symboles officiels du Mushaf de Médine
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 items-start">
          {/* Left grid of symbols */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {filteredSymbols.map((s) => {
              const isSelected = s.id === selectedSymbol.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSymbolId(s.id)}
                  aria-pressed={isSelected}
                  className={`p-3.5 rounded-2xl flex flex-col items-center justify-between text-center transition-all border ${
                    isSelected
                      ? 'bg-card border-lapis shadow-md ring-2 ring-lapis/20 scale-[1.02]'
                      : 'bg-card/75 border-line hover:border-muted/50 hover:bg-card'
                  }`}
                >
                  <span className="font-ar text-4xl text-ink font-bold my-1" dir="rtl">
                    {s.symbol}
                  </span>
                  <div className="min-w-0 w-full mt-2">
                    <span className="text-xs font-semibold text-ink block truncate">
                      {s.nameFr.split('(')[0].trim()}
                    </span>
                    <span className={`chip ${s.colorClass} text-[11px] py-0 px-2 mt-1 truncate`}>
                      {s.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right diagnostic card */}
          <section
            key={selectedSymbol.id}
            className="surface overflow-hidden lg:sticky lg:top-36 animate-fade"
            aria-live="polite"
          >
            {/* Header */}
            <div
              className="p-6 bg-soft border-b border-line flex items-center justify-between gap-4"
              style={{ boxShadow: `inset 4px 0 0 ${accentBorder}` }}
            >
              <div>
                <span className="label block mb-1">{selectedSymbol.nameAr}</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {selectedSymbol.nameFr}
                </h3>
                <span className={`chip ${selectedSymbol.colorClass} mt-2`}>
                  {selectedSymbol.badge}
                </span>
              </div>
              <span className="font-ar text-5xl sm:text-6xl text-ink font-bold shrink-0" dir="rtl">
                {selectedSymbol.symbol}
              </span>
            </div>

            {/* Action required box */}
            <div className="p-5 bg-card border-b border-line">
              <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-1">
                Action immédiate exigée
              </span>
              <p className="text-base font-semibold text-ink leading-snug">
                {selectedSymbol.actionFr}
              </p>
            </div>

            {/* Detailed analysis */}
            <div className="p-6 space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="label mb-1">Règle de Tajwīd</dt>
                <dd className="text-ink">{selectedSymbol.explanation}</dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1">Impact sur le sens sacré</dt>
                <dd className="text-ink font-medium">{selectedSymbol.theologicalImpact}</dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <div className="flex items-center justify-between mb-1">
                  <span className="label">Exemple dans le Coran</span>
                  <span className="ref-tag text-xs">{selectedSymbol.exampleRef}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-soft text-center">
                  <span className="font-ar text-2xl sm:text-3xl text-ink block leading-[1.8]" dir="rtl">
                    {selectedSymbol.exampleAr}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1 text-gilt">Piège fréquent à éviter</dt>
                <dd className="text-ink bg-gilt-soft/40 p-3 rounded-xl border border-gilt/20">
                  {selectedSymbol.trapToAvoid}
                </dd>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  /* =========================================================================
     RENDU CHAPITRE 3 : LE BANC D'ARRÊT & REPRISE (WAQF & IBTIDĀ')
     ========================================================================= */
  if (chapter.number === 3) {
    const filteredStoppingCases = STOPPING_TEST_BENCH_CASES.filter(
      (c) => stoppingFilter === 'all' || c.category === stoppingFilter
    );
    const selectedStoppingCase =
      STOPPING_TEST_BENCH_CASES.find((c) => c.id === stoppingCaseId) || STOPPING_TEST_BENCH_CASES[0];

    const accentMap: Record<string, string> = {
      'chip-izhar': 'var(--izhar)',
      'chip-idgham': 'var(--idgham)',
      'chip-iqlab': 'var(--iqlab)',
      'chip-ikhfa': 'var(--ikhfa)',
      'chip-qalqalah': 'var(--qalqalah)',
      'chip-gold': 'var(--gold)',
      'chip-bad': 'var(--bad)',
    };
    const accentBorder = accentMap[selectedStoppingCase.colorClass] || 'var(--ink)';

    return (
      <>
        <StepHeader
          step={3}
          title="Le Banc d'Arrêt & Reprise (Waqf & Ibtidā')"
          description="Basculez entre lecture continue (Wasl) et arrêt (Waqf) pour observer en temps réel la transformation phonétique et la sécurité théologique."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="segmented">
            <button
              onClick={() => setStoppingFilter('all')}
              aria-pressed={stoppingFilter === 'all'}
            >
              Tous (8)
            </button>
            <button
              onClick={() => setStoppingFilter('sukun')}
              aria-pressed={stoppingFilter === 'sukun'}
            >
              Soukoûn (3)
            </button>
            <button
              onClick={() => setStoppingFilter('iwad')}
              aria-pressed={stoppingFilter === 'iwad'}
            >
              Madd 'Iwad (2)
            </button>
            <button
              onClick={() => setStoppingFilter('marbutah')}
              aria-pressed={stoppingFilter === 'marbutah'}
            >
              Tā' Marbūtah (2)
            </button>
            <button
              onClick={() => setStoppingFilter('resume')}
              aria-pressed={stoppingFilter === 'resume'}
            >
              Reprise (1)
            </button>
          </div>
          <span className="text-xs text-muted">
            Cas tirés du manuel du Dr. Islām Fekry (Arabic101)
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 items-start">
          {/* Left: list of test cases */}
          <div className="space-y-3">
            {filteredStoppingCases.map((tc) => {
              const isSelected = tc.id === selectedStoppingCase.id;
              return (
                <button
                  key={tc.id}
                  onClick={() => setStoppingCaseId(tc.id)}
                  aria-pressed={isSelected}
                  className={`w-full p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-card border-lapis shadow-md ring-2 ring-lapis/20'
                      : 'bg-card/70 border-line hover:border-muted/50 hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="ref-tag text-xs">{tc.surahRef}</span>
                    <span className={`chip ${tc.colorClass} text-xs py-0.5 px-2.5`}>
                      {tc.ruleBadge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="font-ar text-2xl sm:text-3xl text-ink leading-tight" dir="rtl">
                      {tc.arabicWord}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-ink block">{tc.title}</span>
                      <span className="text-[11px] text-muted">{tc.ruleCategory}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: interactive test bench */}
          <section
            key={selectedStoppingCase.id}
            className="surface overflow-hidden lg:sticky lg:top-36 animate-fade shadow-sm"
            style={{ boxShadow: `inset 4px 0 0 ${accentBorder}` }}
            aria-live="polite"
          >
            {/* Header banner */}
            <div className="p-6 border-b border-line bg-soft/50">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="ref-tag">{selectedStoppingCase.surahRef}</span>
                <span className={`chip ${selectedStoppingCase.colorClass}`}>
                  {selectedStoppingCase.ruleBadge}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-ink leading-snug">
                {selectedStoppingCase.title}
              </h3>
            </div>

            {/* Interactive Wasl vs Waqf Toggle & Big Arabic Display */}
            <div className="p-6 bg-card text-center border-b border-line space-y-4">
              <div className="label">Basculez entre Liaison et Arrêt</div>

              <div className="font-ar text-4xl sm:text-5xl text-ink my-3 leading-[1.8] min-h-[4rem] flex items-center justify-center transition-all" dir="rtl">
                {isWaqfMode ? (
                  <span className="text-good font-bold animate-pop">
                    {selectedStoppingCase.waqfArabicText}
                  </span>
                ) : (
                  <span className="text-ink">
                    {selectedStoppingCase.arabicWord}
                  </span>
                )}
              </div>

              <div className="flex justify-center">
                <div className="segmented">
                  <button
                    onClick={() => setIsWaqfMode(false)}
                    aria-pressed={!isWaqfMode}
                  >
                    Lecture Continue (Wasl)
                  </button>
                  <button
                    onClick={() => setIsWaqfMode(true)}
                    aria-pressed={isWaqfMode}
                  >
                    À l'Arrêt (Waqf)
                  </button>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-muted">
                {isWaqfMode
                  ? selectedStoppingCase.waqfPronunciation
                  : selectedStoppingCase.waslPronunciation}
              </div>
            </div>

            {/* Analysis details */}
            <div className="p-6 space-y-4 text-sm">
              <div>
                <dt className="label mb-1">Mécanisme phonétique & Explication</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedStoppingCase.explanation}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1">Statut théologique & Fiqh</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedStoppingCase.fiqhImpact}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1 text-bad font-semibold">Piège fréquent à éviter</dt>
                <dd className="text-ink bg-bad-bg/60 p-3 rounded-xl border border-bad/20">
                  {selectedStoppingCase.commonTrap}
                </dd>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  /* =========================================================================
     RENDU CHAPITRE 4 : LE LABORATOIRE DU MADD NATUREL & LĪN
     ========================================================================= */
  if (chapter.number === 4) {
    const filteredMaddCases = MADD_TEST_BENCH_CASES.filter(
      (c) => maddFilter === 'all' || c.category === maddFilter
    );
    const selectedMaddCase =
      MADD_TEST_BENCH_CASES.find((c) => c.id === maddCaseId) || MADD_TEST_BENCH_CASES[0];

    const accentMap: Record<string, string> = {
      'chip-izhar': 'var(--izhar)',
      'chip-idgham': 'var(--idgham)',
      'chip-iqlab': 'var(--iqlab)',
      'chip-ikhfa': 'var(--ikhfa)',
      'chip-qalqalah': 'var(--qalqalah)',
      'chip-gold': 'var(--gold)',
      'chip-bad': 'var(--bad)',
    };
    const accentBorder = accentMap[selectedMaddCase.colorClass] || 'var(--ink)';

    return (
      <>
        <StepHeader
          step={3}
          title="Le Laboratoire du Madd Naturel & des Lettres de Līn"
          description="Analysez les conditions d'éligibilité du Madd (2 Harakāt), distinguez les lettres de Līn et observez la métamorphose des mots à l'arrêt."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="segmented">
            <button
              onClick={() => setMaddFilter('all')}
              aria-pressed={maddFilter === 'all'}
            >
              Tous ({MADD_TEST_BENCH_CASES.length})
            </button>
            <button
              onClick={() => setMaddFilter('tabii')}
              aria-pressed={maddFilter === 'tabii'}
            >
              Madd Naturel (4)
            </button>
            <button
              onClick={() => setMaddFilter('leen')}
              aria-pressed={maddFilter === 'leen'}
            >
              Lettres de Līn (2)
            </button>
            <button
              onClick={() => setMaddFilter('cameleon')}
              aria-pressed={maddFilter === 'cameleon'}
            >
              Mots Caméléons (2)
            </button>
          </div>
          <span className="text-xs text-muted">
            Cas tirés du manuel du Dr. Islām Fekry (Arabic101)
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 items-start">
          {/* Left: list of test cases */}
          <div className="space-y-3">
            {filteredMaddCases.map((tc) => {
              const isSelected = tc.id === selectedMaddCase.id;
              return (
                <button
                  key={tc.id}
                  onClick={() => setMaddCaseId(tc.id)}
                  aria-pressed={isSelected}
                  className={`w-full p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-card border-lapis shadow-md ring-2 ring-lapis/20'
                      : 'bg-card/70 border-line hover:border-muted/50 hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="ref-tag text-xs">{tc.surahRef}</span>
                    <span className={`chip ${tc.colorClass} text-xs py-0.5 px-2.5`}>
                      {tc.ruleBadge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="font-ar text-2xl sm:text-3xl text-ink leading-tight" dir="rtl">
                      {tc.arabicWord}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-ink block">{tc.title.split('—')[0].trim()}</span>
                      <span className="text-[11px] text-muted">{tc.ruleCategory}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: interactive test bench */}
          <section
            key={selectedMaddCase.id}
            className="surface overflow-hidden lg:sticky lg:top-36 animate-fade shadow-sm"
            style={{ boxShadow: `inset 4px 0 0 ${accentBorder}` }}
            aria-live="polite"
          >
            {/* Header banner */}
            <div className="p-6 border-b border-line bg-soft/50">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="ref-tag">{selectedMaddCase.surahRef}</span>
                <span className={`chip ${selectedMaddCase.colorClass}`}>
                  {selectedMaddCase.ruleBadge}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-ink leading-snug">
                {selectedMaddCase.title}
              </h3>
            </div>

            {/* Interactive Wasl vs Waqf Toggle & Big Arabic Display */}
            <div className="p-6 bg-card text-center border-b border-line space-y-4">
              <div className="label">Basculez entre Liaison et Arrêt</div>

              <div className="font-ar text-4xl sm:text-5xl text-ink my-3 leading-[1.8] min-h-[4rem] flex items-center justify-center transition-all" dir="rtl">
                {isMaddWaqfMode ? (
                  <span className="text-good font-bold animate-pop">
                    {selectedMaddCase.waqfArabicText}
                  </span>
                ) : (
                  <span className="text-ink">
                    {selectedMaddCase.arabicWord}
                  </span>
                )}
              </div>

              <div className="flex justify-center">
                <div className="segmented">
                  <button
                    onClick={() => setIsMaddWaqfMode(false)}
                    aria-pressed={!isMaddWaqfMode}
                  >
                    En Continu (Wasl)
                  </button>
                  <button
                    onClick={() => setIsMaddWaqfMode(true)}
                    aria-pressed={isMaddWaqfMode}
                  >
                    À l'Arrêt (Waqf)
                  </button>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-muted">
                {isMaddWaqfMode
                  ? selectedMaddCase.waqfPronunciation
                  : selectedMaddCase.waslPronunciation}
              </div>
            </div>

            {/* Analysis details */}
            <div className="p-6 space-y-4 text-sm">
              <div>
                <dt className="label mb-1">Mécanisme phonétique & Explication</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedMaddCase.explanation}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1">Statut théologique & Fiqh</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedMaddCase.fiqhImpact}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1 text-bad font-semibold">Piège fréquent à éviter</dt>
                <dd className="text-ink bg-bad-bg/60 p-3 rounded-xl border border-bad/20">
                  {selectedMaddCase.commonTrap}
                </dd>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  /* =========================================================================
     RENDU CHAPITRE 5 : LE LABORATOIRE DU MADD FAR'Ī (SECONDAIRE)
     ========================================================================= */
  if (chapter.number === 5) {
    const filteredFariCases = MADD_FARI_TEST_BENCH_CASES.filter(
      (c) => fariFilter === 'all' || c.category === fariFilter
    );
    const selectedFariCase =
      MADD_FARI_TEST_BENCH_CASES.find((c) => c.id === fariCaseId) || MADD_FARI_TEST_BENCH_CASES[0];

    const accentMap: Record<string, string> = {
      'chip-izhar': 'var(--izhar)',
      'chip-idgham': 'var(--idgham)',
      'chip-iqlab': 'var(--iqlab)',
      'chip-ikhfa': 'var(--ikhfa)',
      'chip-qalqalah': 'var(--qalqalah)',
      'chip-gold': 'var(--gold)',
      'chip-bad': 'var(--bad)',
    };
    const accentBorder = accentMap[selectedFariCase.colorClass] || 'var(--ink)';

    return (
      <>
        <StepHeader
          step={3}
          title="Le Laboratoire du Madd Far'ī (Secondaire)"
          description="Expérimentez l'impact de la Hamzah et du Soukoûn sur la voix : basculez entre liaison continue (Wasl) et arrêt (Waqf) pour observer l'évanouissement ou le surgissement de la prolongation."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="segmented">
            <button
              onClick={() => setFariFilter('all')}
              aria-pressed={fariFilter === 'all'}
            >
              Tous ({MADD_FARI_TEST_BENCH_CASES.length})
            </button>
            <button
              onClick={() => setFariFilter('muttasil')}
              aria-pressed={fariFilter === 'muttasil'}
            >
              Muttasil (2)
            </button>
            <button
              onClick={() => setFariFilter('munfasil')}
              aria-pressed={fariFilter === 'munfasil'}
            >
              Munfasil & Silah (3)
            </button>
            <button
              onClick={() => setFariFilter('lazim')}
              aria-pressed={fariFilter === 'lazim'}
            >
              Lāzim 6 Temps (2)
            </button>
            <button
              onClick={() => setFariFilter('arid')}
              aria-pressed={fariFilter === 'arid'}
            >
              'Ārid li-s-Sukūn (1)
            </button>
          </div>
          <span className="text-xs text-muted">
            Cas pratiques du manuel du Dr. Islām Fekry (Arabic101)
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 items-start">
          {/* Left: list of test cases */}
          <div className="space-y-3">
            {filteredFariCases.map((tc) => {
              const isSelected = tc.id === selectedFariCase.id;
              return (
                <button
                  key={tc.id}
                  onClick={() => setFariCaseId(tc.id)}
                  aria-pressed={isSelected}
                  className={`w-full p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-card border-lapis shadow-md ring-2 ring-lapis/20'
                      : 'bg-card/70 border-line hover:border-muted/50 hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="ref-tag text-xs">{tc.surahRef}</span>
                    <span className={`chip ${tc.colorClass} text-xs py-0.5 px-2.5`}>
                      {tc.ruleBadge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="font-ar text-2xl sm:text-3xl text-ink leading-tight" dir="rtl">
                      {tc.arabicWord}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-ink block">{tc.title.split('—')[0].trim()}</span>
                      <span className="text-[11px] text-muted">{tc.ruleCategory}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: interactive test bench */}
          <section
            key={selectedFariCase.id}
            className="surface overflow-hidden lg:sticky lg:top-36 animate-fade shadow-sm"
            style={{ boxShadow: `inset 4px 0 0 ${accentBorder}` }}
            aria-live="polite"
          >
            {/* Header banner */}
            <div className="p-6 border-b border-line bg-soft/50">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="ref-tag">{selectedFariCase.surahRef}</span>
                <span className={`chip ${selectedFariCase.colorClass}`}>
                  {selectedFariCase.ruleBadge}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-ink leading-snug">
                {selectedFariCase.title}
              </h3>
            </div>

            {/* Interactive Wasl vs Waqf Toggle & Big Arabic Display */}
            <div className="p-6 bg-card text-center border-b border-line space-y-4">
              <div className="label">Basculez entre Liaison continue et Arrêt</div>

              <div className="font-ar text-4xl sm:text-5xl text-ink my-3 leading-[1.8] min-h-[4rem] flex items-center justify-center transition-all" dir="rtl">
                {isFariWaqfMode ? (
                  <span className="text-good font-bold animate-pop">
                    {selectedFariCase.waqfArabicText}
                  </span>
                ) : (
                  <span className="text-ink">
                    {selectedFariCase.arabicWord}
                  </span>
                )}
              </div>

              <div className="flex justify-center">
                <div className="segmented">
                  <button
                    onClick={() => setIsFariWaqfMode(false)}
                    aria-pressed={!isFariWaqfMode}
                  >
                    En Continu (Wasl)
                  </button>
                  <button
                    onClick={() => setIsFariWaqfMode(true)}
                    aria-pressed={isFariWaqfMode}
                  >
                    À l'Arrêt (Waqf)
                  </button>
                </div>
              </div>

              {/* Counts Badge */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-muted">Durée mesurée :</span>
                <span className={`chip ${isFariWaqfMode ? 'chip-gold' : 'chip-idgham'} font-bold text-xs`}>
                  {isFariWaqfMode
                    ? selectedFariCase.durationHarakatWaqf
                    : `${selectedFariCase.durationHarakatWasl} Temps (Harakāt)`}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-muted">
                {isFariWaqfMode
                  ? selectedFariCase.waqfPronunciation
                  : selectedFariCase.waslPronunciation}
              </div>
            </div>

            {/* Analysis details */}
            <div className="p-6 space-y-4 text-sm">
              <div>
                <dt className="label mb-1">Mécanisme phonétique & Explication</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedFariCase.explanation}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1">Statut théologique & Fiqh</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedFariCase.fiqhImpact}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1 text-bad font-semibold">Piège fréquent à éviter</dt>
                <dd className="text-ink bg-bad-bg/60 p-3 rounded-xl border border-bad/20">
                  {selectedFariCase.commonTrap}
                </dd>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  /* =========================================================================
     RENDU CHAPITRE 6 : LE LABORATOIRE DES HAMZAHS (WASL & QAT')
     ========================================================================= */
  if (chapter.number === 6) {
    const filteredHamzahCases = HAMZAH_TEST_BENCH_CASES.filter(
      (c) => hamzahFilter === 'all' || c.category === hamzahFilter
    );
    const selectedHamzahCase =
      HAMZAH_TEST_BENCH_CASES.find((c) => c.id === hamzahCaseId) || HAMZAH_TEST_BENCH_CASES[0];

    const accentMap: Record<string, string> = {
      'chip-izhar': 'var(--izhar)',
      'chip-idgham': 'var(--idgham)',
      'chip-iqlab': 'var(--iqlab)',
      'chip-ikhfa': 'var(--ikhfa)',
      'chip-qalqalah': 'var(--qalqalah)',
      'chip-gold': 'var(--gold)',
      'chip-bad': 'var(--bad)',
    };
    const accentBorder = accentMap[selectedHamzahCase.colorClass] || 'var(--ink)';

    return (
      <>
        <StepHeader
          step={3}
          title="Le Laboratoire des Hamzahs (Wasl & Qat')"
          description="Testez la chute de Hamzat Al-Wasl en liaison continue (Wasl) et découvrez sa voyelle d'attaque exacte (Tashkīl) à l'attaque (Ibtidā')."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="segmented">
            <button
              onClick={() => setHamzahFilter('all')}
              aria-pressed={hamzahFilter === 'all'}
            >
              Tous ({HAMZAH_TEST_BENCH_CASES.length})
            </button>
            <button
              onClick={() => setHamzahFilter('wasl-verb')}
              aria-pressed={hamzahFilter === 'wasl-verb'}
            >
              Verbes réguliers (3)
            </button>
            <button
              onClick={() => setHamzahFilter('wasl-noun')}
              aria-pressed={hamzahFilter === 'wasl-noun'}
            >
              Noms (2)
            </button>
            <button
              onClick={() => setHamzahFilter('exception-verb')}
              aria-pressed={hamzahFilter === 'exception-verb'}
            >
              5 Verbes d'exception (2)
            </button>
            <button
              onClick={() => setHamzahFilter('two-hamzahs')}
              aria-pressed={hamzahFilter === 'two-hamzahs'}
            >
              Deux Hamzahs (1)
            </button>
          </div>
          <span className="text-xs text-muted">
            Cas tirés du manuel du Dr. Islām Fekry (Arabic101)
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 items-start">
          {/* Left: list of test cases */}
          <div className="space-y-3">
            {filteredHamzahCases.map((tc) => {
              const isSelected = tc.id === selectedHamzahCase.id;
              return (
                <button
                  key={tc.id}
                  onClick={() => setHamzahCaseId(tc.id)}
                  aria-pressed={isSelected}
                  className={`w-full p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-card border-lapis shadow-md ring-2 ring-lapis/20'
                      : 'bg-card/70 border-line hover:border-muted/50 hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="ref-tag text-xs">{tc.surahRef}</span>
                    <span className={`chip ${tc.colorClass} text-xs py-0.5 px-2.5`}>
                      {tc.ruleBadge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="font-ar text-2xl sm:text-3xl text-ink leading-tight" dir="rtl">
                      {tc.arabicWord}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-ink block">{tc.title.split('—')[0].trim()}</span>
                      <span className="text-[11px] text-muted">{tc.ruleCategory}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: interactive test bench */}
          <section
            key={selectedHamzahCase.id}
            className="surface overflow-hidden lg:sticky lg:top-36 animate-fade shadow-sm"
            style={{ boxShadow: `inset 4px 0 0 ${accentBorder}` }}
            aria-live="polite"
          >
            {/* Header banner */}
            <div className="p-6 border-b border-line bg-soft/50">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="ref-tag">{selectedHamzahCase.surahRef}</span>
                <span className={`chip ${selectedHamzahCase.colorClass}`}>
                  {selectedHamzahCase.ruleBadge}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-ink leading-snug">
                {selectedHamzahCase.title}
              </h3>
            </div>

            {/* Interactive Wasl vs Ibtida Toggle & Big Arabic Display */}
            <div className="p-6 bg-card text-center border-b border-line space-y-4">
              <div className="label">Basculez entre Liaison continue et Attaque du mot</div>

              <div className="font-ar text-4xl sm:text-5xl text-ink my-3 leading-[1.8] min-h-[4rem] flex items-center justify-center transition-all" dir="rtl">
                {isHamzahIbtidaMode ? (
                  <span className="text-good font-bold animate-pop">
                    {selectedHamzahCase.ibtidaArabicText}
                  </span>
                ) : (
                  <span className="text-ink">
                    {selectedHamzahCase.waslArabicText}
                  </span>
                )}
              </div>

              <div className="flex justify-center">
                <div className="segmented">
                  <button
                    onClick={() => setIsHamzahIbtidaMode(false)}
                    aria-pressed={!isHamzahIbtidaMode}
                  >
                    En Continu (Wasl)
                  </button>
                  <button
                    onClick={() => setIsHamzahIbtidaMode(true)}
                    aria-pressed={isHamzahIbtidaMode}
                  >
                    À l'Attaque (Ibtidā')
                  </button>
                </div>
              </div>

              {/* Determined Tashkeel Badge */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-muted">Statut phonétique :</span>
                <span className={`chip ${isHamzahIbtidaMode ? 'chip-gold' : 'chip-idgham'} font-bold text-xs`}>
                  {isHamzahIbtidaMode
                    ? `Attaque : ${selectedHamzahCase.determinedTashkeel}`
                    : 'Hamzat Wasl totalement élidée'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-muted">
                {isHamzahIbtidaMode
                  ? selectedHamzahCase.ibtidaPronunciation
                  : selectedHamzahCase.waslPronunciation}
              </div>
            </div>

            {/* Analysis details */}
            <div className="p-6 space-y-4 text-sm">
              <div>
                <dt className="label mb-1">Mécanisme phonétique & Explication</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedHamzahCase.explanation}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1">Statut théologique & Fiqh</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedHamzahCase.fiqhImpact}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1 text-bad font-semibold">Piège fréquent à éviter</dt>
                <dd className="text-ink bg-bad-bg/60 p-3 rounded-xl border border-bad/20">
                  {selectedHamzahCase.commonTrap}
                </dd>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  /* =========================================================================
     RENDU CHAPITRE 7 : LE LABORATOIRE DE LA LĀM SĀKINAH
     ========================================================================= */
  if (chapter.number === 7) {
    const filteredLamCases = LAM_SAKINAH_TEST_BENCH_CASES.filter(
      (c) => lamFilter === 'all' || c.category === lamFilter
    );

    const selectedLamCase =
      LAM_SAKINAH_TEST_BENCH_CASES.find((c) => c.id === lamCaseId) ||
      LAM_SAKINAH_TEST_BENCH_CASES[0];

    const accentMap: Record<string, string> = {
      'chip-izhar': 'var(--izhar)',
      'chip-idgham': 'var(--idgham)',
      'chip-gold': 'var(--gold)',
      'chip-qalqalah': 'var(--qalqalah)',
      'chip-iqlab': 'var(--iqlab)',
    };
    const accentBorder = accentMap[selectedLamCase.colorClass] || 'var(--ink)';

    return (
      <>
        <StepHeader
          step={3}
          title="Le Laboratoire de la Lām Sākinah"
          description="Testez la clarté lunaire (Izhār Qamarī), la fusion solaire (Idghām Shamsī), l'emphase sacrée du Nom d'Allah et les fusions de verbe et de particule."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="segmented">
            <button
              onClick={() => setLamFilter('all')}
              aria-pressed={lamFilter === 'all'}
            >
              Tous ({LAM_SAKINAH_TEST_BENCH_CASES.length})
            </button>
            <button
              onClick={() => setLamFilter('qamariyyah')}
              aria-pressed={lamFilter === 'qamariyyah'}
            >
              Lune (2)
            </button>
            <button
              onClick={() => setLamFilter('shamsiyyah')}
              aria-pressed={lamFilter === 'shamsiyyah'}
            >
              Soleil (3)
            </button>
            <button
              onClick={() => setLamFilter('jalalah')}
              aria-pressed={lamFilter === 'jalalah'}
            >
              Nom d'Allah (2)
            </button>
            <button
              onClick={() => setLamFilter('fil-harf')}
              aria-pressed={lamFilter === 'fil-harf'}
            >
              Verbe & Particule (1)
            </button>
          </div>
          <span className="text-xs text-muted">
            Cas extraits du manuel du Dr. Islām Fekry (Arabic101)
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 items-start">
          {/* Left: list of test cases */}
          <div className="space-y-3">
            {filteredLamCases.map((tc) => {
              const isSelected = tc.id === selectedLamCase.id;
              return (
                <button
                  key={tc.id}
                  onClick={() => setLamCaseId(tc.id)}
                  aria-pressed={isSelected}
                  className={`w-full p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-card border-lapis shadow-md ring-2 ring-lapis/20'
                      : 'bg-card/70 border-line hover:border-muted/50 hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="ref-tag text-xs">{tc.surahRef}</span>
                    <span className={`chip ${tc.colorClass} text-xs py-0.5 px-2.5`}>
                      {tc.ruleBadge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="font-ar text-2xl sm:text-3xl text-ink leading-tight" dir="rtl">
                      {tc.arabicWord}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-ink block">{tc.title.split('—')[0].trim()}</span>
                      <span className="text-[11px] text-muted">{tc.ruleCategory}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: interactive test bench */}
          <section
            key={selectedLamCase.id}
            className="surface overflow-hidden lg:sticky lg:top-36 animate-fade shadow-sm"
            style={{ boxShadow: `inset 4px 0 0 ${accentBorder}` }}
            aria-live="polite"
          >
            {/* Header banner */}
            <div className="p-6 border-b border-line bg-soft/50">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="ref-tag">{selectedLamCase.surahRef}</span>
                <span className={`chip ${selectedLamCase.colorClass}`}>
                  {selectedLamCase.ruleBadge}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-ink leading-snug">
                {selectedLamCase.title}
              </h3>
            </div>

            {/* Big Arabic Display */}
            <div className="p-6 bg-card text-center border-b border-line space-y-4">
              <div className="label">Observation du segment et graphie du Mushaf</div>

              <div className="font-ar text-4xl sm:text-5xl text-ink my-3 leading-[1.8] min-h-[4rem] flex items-center justify-center transition-all" dir="rtl">
                <span className="text-ink font-bold">
                  {selectedLamCase.highlightedSegment}
                </span>
              </div>

              {/* Status pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs text-muted">Lettre suivante :</span>
                <span className="chip chip-gold font-bold text-xs">
                  {selectedLamCase.followingLetter}
                </span>
                <span className="text-xs text-muted">Signe Mushaf :</span>
                <span className="chip chip-izhar font-mono text-xs">
                  {selectedLamCase.mushafSign}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-muted">
                Prononciation exacte : <strong className="text-ink">{selectedLamCase.pronunciation}</strong>
              </div>
            </div>

            {/* Analysis details */}
            <div className="p-6 space-y-4 text-sm">
              <div>
                <dt className="label mb-1">Mécanisme phonétique & Explication</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedLamCase.explanation}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1">Statut théologique & Règle de récitation</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedLamCase.fiqhImpact}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1 text-bad font-semibold">Piège fréquent à éviter</dt>
                <dd className="text-ink bg-bad-bg/60 p-3 rounded-xl border border-bad/20">
                  {selectedLamCase.commonTrap}
                </dd>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  /* =========================================================================
     RENDU CHAPITRE 9 : LE LABORATOIRE DE LA MĪM SĀKINAH
     ========================================================================= */
  if (chapter.number === 9) {
    const filteredMimCases = MIM_SAKINAH_TEST_BENCH_CASES.filter(
      (c) => mimFilter === 'all' || c.category === mimFilter
    );

    const selectedMimCase =
      MIM_SAKINAH_TEST_BENCH_CASES.find((c) => c.id === mimCaseId) ||
      MIM_SAKINAH_TEST_BENCH_CASES[0];

    const accentMap: Record<string, string> = {
      'chip-izhar': 'var(--izhar)',
      'chip-idgham': 'var(--idgham)',
      'chip-gold': 'var(--gold)',
      'chip-qalqalah': 'var(--qalqalah)',
      'chip-iqlab': 'var(--iqlab)',
    };
    const accentBorder = accentMap[selectedMimCase.colorClass] || 'var(--ink)';

    return (
      <>
        <StepHeader
          step={3}
          title="Le Laboratoire de la Mīm Sākinah"
          description="Testez l'Ikhfā' Shafawī (dissimulation devant Bā'), l'Idghām Shafawī (fusion des 2 Mīms) et l'Izhār Shafawī avec l'alerte maximale devant Wāw et Fā'."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="segmented">
            <button
              onClick={() => setMimFilter('all')}
              aria-pressed={mimFilter === 'all'}
            >
              Tous ({MIM_SAKINAH_TEST_BENCH_CASES.length})
            </button>
            <button
              onClick={() => setMimFilter('ikhfa')}
              aria-pressed={mimFilter === 'ikhfa'}
            >
              Ikhfā' Bā' (2)
            </button>
            <button
              onClick={() => setMimFilter('idgham')}
              aria-pressed={mimFilter === 'idgham'}
            >
              Idghām Mīm (2)
            </button>
            <button
              onClick={() => setMimFilter('izhar')}
              aria-pressed={mimFilter === 'izhar'}
            >
              Izhār 26 lettres (2)
            </button>
            <button
              onClick={() => setMimFilter('warning')}
              aria-pressed={mimFilter === 'warning'}
            >
              ⚠️ Alerte Wāw/Fā' (2)
            </button>
          </div>
          <span className="text-xs text-muted">
            Cas extraits du manuel du Dr. Islām Fekry (Arabic101)
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 items-start">
          {/* Left: list of test cases */}
          <div className="space-y-3">
            {filteredMimCases.map((tc) => {
              const isSelected = tc.id === selectedMimCase.id;
              return (
                <button
                  key={tc.id}
                  onClick={() => setMimCaseId(tc.id)}
                  aria-pressed={isSelected}
                  className={`w-full p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-card border-lapis shadow-md ring-2 ring-lapis/20'
                      : 'bg-card/70 border-line hover:border-muted/50 hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="ref-tag text-xs">{tc.surahRef}</span>
                    <span className={`chip ${tc.colorClass} text-xs py-0.5 px-2.5`}>
                      {tc.ruleBadge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="font-ar text-2xl sm:text-3xl text-ink leading-tight" dir="rtl">
                      {tc.arabicWord}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-ink block">{tc.title.split('—')[0].trim()}</span>
                      <span className="text-[11px] text-muted">{tc.ruleCategory}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: interactive test bench */}
          <section
            key={selectedMimCase.id}
            className="surface overflow-hidden lg:sticky lg:top-36 animate-fade shadow-sm"
            style={{ boxShadow: `inset 4px 0 0 ${accentBorder}` }}
            aria-live="polite"
          >
            {/* Header banner */}
            <div className="p-6 border-b border-line bg-soft/50">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="ref-tag">{selectedMimCase.surahRef}</span>
                <span className={`chip ${selectedMimCase.colorClass}`}>
                  {selectedMimCase.ruleBadge}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-ink leading-snug">
                {selectedMimCase.title}
              </h3>
            </div>

            {/* Big Arabic Display */}
            <div className="p-6 bg-card text-center border-b border-line space-y-4">
              <div className="label">Observation du segment et position des lèvres</div>

              <div className="font-ar text-4xl sm:text-5xl text-ink my-3 leading-[1.8] min-h-[4rem] flex items-center justify-center transition-all" dir="rtl">
                <span className="text-ink font-bold">
                  {selectedMimCase.highlightedSegment}
                </span>
              </div>

              {/* Status pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs text-muted">Lettre suivante :</span>
                <span className="chip chip-gold font-bold text-xs">
                  {selectedMimCase.followingLetter}
                </span>
                <span className="text-xs text-muted">Signe Mushaf :</span>
                <span className="chip chip-izhar font-mono text-xs">
                  {selectedMimCase.mushafSign}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-muted">
                Prononciation exacte : <strong className="text-ink">{selectedMimCase.pronunciation}</strong>
              </div>
            </div>

            {/* Analysis details */}
            <div className="p-6 space-y-4 text-sm">
              <div>
                <dt className="label mb-1">Mécanisme phonétique & Explication</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedMimCase.explanation}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1">Statut théologique & Règle de récitation</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedMimCase.fiqhImpact}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1 text-bad font-semibold">Piège fréquent à éviter</dt>
                <dd className="text-ink bg-bad-bg/60 p-3 rounded-xl border border-bad/20">
                  {selectedMimCase.commonTrap}
                </dd>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  /* =========================================================================
     RENDU CHAPITRE 11 : BANC D'ESSAI DE L'ASSIMILATION (IDGHĀM)
     ========================================================================= */
  if (chapter.number === 11) {
    const filteredCases = ASSIMILATION_TEST_BENCH_CASES.filter((c) => {
      if (assimilationFilter === 'all') return true;
      return c.category === assimilationFilter;
    });

    const selectedCase =
      ASSIMILATION_TEST_BENCH_CASES.find((c) => c.id === assimilationCaseId) ||
      ASSIMILATION_TEST_BENCH_CASES[0];

    return (
      <>
        <StepHeader
          step={3}
          title="Le Banc d'Essai de l'Assimilation (Idghām)"
          description="Explorez les fusions totales et partielles, ainsi que les exceptions sacrées où l'assimilation est strictement prohibée."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 my-4">
          <div className="segmented">
            <button
              onClick={() => setAssimilationFilter('all')}
              aria-pressed={assimilationFilter === 'all'}
            >
              Tous ({ASSIMILATION_TEST_BENCH_CASES.length})
            </button>
            <button
              onClick={() => setAssimilationFilter('mutamathilayn')}
              aria-pressed={assimilationFilter === 'mutamathilayn'}
            >
              Identiques (2)
            </button>
            <button
              onClick={() => setAssimilationFilter('madd')}
              aria-pressed={assimilationFilter === 'madd'}
            >
              Exceptions Madd (2)
            </button>
            <button
              onClick={() => setAssimilationFilter('kamil')}
              aria-pressed={assimilationFilter === 'kamil'}
            >
              Fusions Totales (3)
            </button>
            <button
              onClick={() => setAssimilationFilter('naqis')}
              aria-pressed={assimilationFilter === 'naqis'}
            >
              Idghām Nāqis (1)
            </button>
          </div>
          <span className="text-xs text-muted">
            Cas de Hafs 'an 'Āsim via Ash-Shātibiyyah
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 items-start">
          {/* List of cases */}
          <div className="space-y-3">
            {filteredCases.map((tc) => {
              const isSelected = tc.id === selectedCase.id;
              return (
                <button
                  key={tc.id}
                  onClick={() => setAssimilationCaseId(tc.id)}
                  aria-pressed={isSelected}
                  className={`w-full p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-card border-lapis shadow-md ring-2 ring-lapis/20'
                      : 'bg-card/70 border-line hover:border-muted/50 hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="ref-tag text-xs">{tc.surahRef}</span>
                    <span className={`chip ${tc.colorClass} text-xs py-0.5 px-2.5`}>
                      {tc.ruleBadge}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <h4 className="font-display font-semibold text-[15px] text-ink leading-snug truncate">
                        {tc.title}
                      </h4>
                      <p className="text-xs text-muted mt-1 truncate">
                        Lettres : <strong className="text-ink">{tc.involvedLetters}</strong>
                      </p>
                    </div>

                    <span className="font-ar text-2xl text-ink shrink-0 font-bold" dir="rtl">
                      {tc.highlightedSegment}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Diagnostic details */}
          <section key={selectedCase.id} className="surface overflow-hidden lg:sticky lg:top-36 animate-fade shadow-sm">
            <div className="p-6 border-b border-line bg-soft/50 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="ref-tag text-xs">{selectedCase.surahRef}</span>
                <span className={`chip ${selectedCase.colorClass} text-xs font-bold`}>
                  {selectedCase.ruleCategory}
                </span>
              </div>

              <div className="font-ar text-3xl sm:text-4xl text-ink leading-relaxed text-right py-1" dir="rtl">
                {selectedCase.arabicWord}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-muted">Lettres concernées :</span>
                <span className="chip chip-gold font-bold text-xs">
                  {selectedCase.involvedLetters}
                </span>
                <span className="text-xs text-muted">Rasm Muṣ-ḥaf :</span>
                <span className="chip chip-izhar font-mono text-xs">
                  {selectedCase.mushafSign}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-card border border-line text-xs sm:text-sm font-mono text-muted">
                Prononciation exacte : <strong className="text-ink">{selectedCase.pronunciation}</strong>
              </div>
            </div>

            <div className="p-6 space-y-4 text-sm">
              <div>
                <dt className="label mb-1">Mécanisme phonétique & Justification</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedCase.explanation}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1">Statut théologique & Règle de transmission</dt>
                <dd className="text-ink leading-relaxed">
                  {selectedCase.fiqhImpact}
                </dd>
              </div>

              <div className="pt-2 border-t border-line/60">
                <dt className="label mb-1 text-bad font-semibold">Piège fréquent à éviter</dt>
                <dd className="text-ink bg-bad-bg/60 p-3 rounded-xl border border-bad/20">
                  {selectedCase.commonTrap}
                </dd>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  /* =========================================================================
     RENDU CHAPITRES 8 & 10 : LABORATOIRE DE L'ALPHABET
     ========================================================================= */
  const currentAnalysis =
    chapter.number === 8
      ? getNunAnalysis(selectedLetter)
      : getQalqalahAnalysis(selectedLetter);

  const accent: Record<string, string> = {
    'chip-izhar': 'var(--izhar)',
    'chip-idgham': 'var(--idgham)',
    'chip-iqlab': 'var(--iqlab)',
    'chip-ikhfa': 'var(--ikhfa)',
    'chip-qalqalah': 'var(--qalqalah)',
    'chip-gold': 'var(--gold)',
  };
  const accentColor = accent[currentAnalysis.colorClass] || 'var(--ink)';

  return (
    <>
      <StepHeader
        step={3}
        title="Le laboratoire des lettres"
        description={
          chapter.number === 8
            ? 'Choisissez la lettre qui suit le Nūn sākin : la règle qui s\'applique s\'affiche aussitôt.'
            : 'Choisissez une lettre pour savoir si elle rebondit lorsqu\'elle porte un soukoûn.'
        }
      />

      <div className="grid lg:grid-cols-[minmax(0,1fr)_400px] gap-6 items-start">
        <div className="surface p-4 sm:p-5">
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2" dir="rtl">
            {ARABIC_ALPHABET.map((item) => {
              const isSelected = selectedLetter === item.letter;
              return (
                <button
                  key={item.letter}
                  onClick={() => setSelectedLetter(item.letter)}
                  aria-pressed={isSelected}
                  aria-label={item.nameFr}
                  className={`aspect-square sm:aspect-[4/5] rounded-2xl flex flex-col items-center justify-center sm:justify-between sm:pt-1 sm:pb-2 transition-colors select-none ${
                    isSelected
                      ? 'bg-lapis text-lapis-ink'
                      : 'bg-soft text-ink hover:bg-line'
                  }`}
                >
                  <span className="font-ui-ar text-[26px] sm:text-[30px] leading-[1.3]">{item.letter}</span>
                  <span className={`text-[11px] leading-none hidden sm:block ${isSelected ? 'opacity-80' : 'text-muted'}`}>
                    {item.nameFr}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <section key={selectedLetter} className="surface overflow-hidden lg:sticky lg:top-36 animate-fade" aria-live="polite">
          <div className="p-6 flex items-center gap-5" style={{ boxShadow: `inset 4px 0 0 ${accentColor}` }}>
            <span className="font-ui-ar text-[44px] leading-[1.5] text-ink shrink-0" dir="rtl">
              {chapter.number === 8 ? `نْ ${selectedLetter}` : selectedLetter}
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-xl leading-snug text-ink">{currentAnalysis.rule}</h3>
              <span className={`chip ${currentAnalysis.colorClass} mt-2`}>{currentAnalysis.badge}</span>
            </div>
          </div>

          <dl className="px-6 pb-6 space-y-5 text-[15px] leading-relaxed">
            <div>
              <dt className="label mb-1">Pourquoi</dt>
              <dd className="text-ink">{currentAnalysis.explanation}</dd>
            </div>
            <div>
              <dt className="label mb-1">Position de la bouche</dt>
              <dd className="text-ink">{currentAnalysis.mouthMechanism}</dd>
            </div>
          </dl>

          <div className="px-6 py-4 bg-soft flex items-center justify-between gap-4">
            <span className="label">Exemple dans le Coran</span>
            <span className="font-ar text-[28px] leading-[1.7] text-ink" dir="rtl">{currentAnalysis.example}</span>
          </div>
        </section>
      </div>
    </>
  );
};
