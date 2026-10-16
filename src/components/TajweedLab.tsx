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
