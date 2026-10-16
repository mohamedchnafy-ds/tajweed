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
