import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { FlaskConical, Sparkles, CheckCircle2, AlertCircle, Volume2 } from 'lucide-react';

interface TajweedLabProps {
  chapter: Chapter;
}

export const TajweedLab: React.FC<TajweedLabProps> = ({ chapter }) => {
  // Arabic alphabet
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

  // Default selected letter
  const [selectedLetter, setSelectedLetter] = useState(
    chapter.number === 8 ? 'ي' : 'ق'
  );

  // Analysis for Chapter 8 (Nun Sakinah)
  const getNunAnalysis = (l: string) => {
    // 1. Izhar (Throat letters)
    if (['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'].includes(l)) {
      return {
        rule: 'Izhār Halqī (الإِظْهَارُ الحَلْقِيُّ)',
        type: 'izhar',
        badge: 'Clarté absolue',
        colorClass: 'chip-izhar',
        ghunnahDuration: 0,
        explanation: `La lettre ${l} est une lettre de la gorge. Le Nūn est prononcé de manière claire et nette sans prolonger la résonance nasale.`,
        mouthMechanism: 'La langue touche fermement les gencives pour former le son N, puis la gorge émet immédiatement la lettre.',
        example: l === 'ع' ? 'أَنۡعَمۡتَ' : l === 'ء' ? 'مَنۡ ءَامَنَ' : 'عَلِيمٌ حَكِيمٞ',
      };
    }

    // 2. Idgham (Yarmalun)
    if (['ي', 'ن', 'م', 'و'].includes(l)) {
      return {
        rule: 'Idghām bi-Ghunnah (إِدْغَامٌ بِغُنَّةٍ)',
        type: 'idgham',
        badge: 'Fusion avec 2 temps de résonance',
        colorClass: 'chip-idgham',
        ghunnahDuration: 2,
        explanation: `La lettre ${l} fait partie des 4 lettres (يَنْمُو). Le Nūn s'efface et fusionne dans le ${l} avec une Ghunnah obligatoire de 2 temps.`,
        mouthMechanism: 'La pointe de la langue ne touche pas les gencives. Le son vibre dans le nez pendant 2 pulsations.',
        example: l === 'ي' ? 'فَمَن يَعۡمَلۡ' : l === 'م' ? 'مِن مَّالٍ' : 'مَن يَقُولُ',
      };
    }

    if (['ل', 'ر'].includes(l)) {
      return {
        rule: 'Idghām bi-ghayri Ghunnah (إِدْغَامٌ بِغَيْرِ غُنَّةٍ)',
        type: 'idgham-pure',
        badge: 'Fusion totale sans nasalité',
        colorClass: 'chip-idgham',
        ghunnahDuration: 0,
        explanation: `La lettre ${l} entraîne une fusion totale et sèche. Le Nūn disparaît complètement et aucun son ne doit passer par le nez.`,
        mouthMechanism: 'La lettre suivante prend une Shaddah complète sans résonance nasale.',
        example: l === 'ر' ? 'مِن رَّبِّهِمۡ' : 'هُدٗى لِّلۡمُتَّقِينَ',
      };
    }

    // 3. Iqlab (Ba)
    if (l === 'ب') {
      return {
        rule: 'Iqlāb (الإِقْلَابُ)',
        type: 'iqlab',
        badge: 'Transformation en Mīm léger',
        colorClass: 'chip-iqlab',
        ghunnahDuration: 2,
        explanation: `Devant le Bā' (ب), le Nūn se transforme en un son Mīm (م) caché avec une Ghunnah de 2 temps.`,
        mouthMechanism: 'Les lèvres se rapprochent avec douceur sans pression excessive.',
        example: 'مِنۢ بَعۡدِ',
      };
    }

    // 4. Ikhfa (15 remaining)
    const isHeavy = ['ص', 'ض', 'ط', 'ظ', 'ق'].includes(l);
    return {
      rule: `Ikhfā' Haqīqī (الإِخْفَاءُ الحَقِيقِيُّ) — Ghunnah ${isHeavy ? 'Lourde (Tafkhīm)' : 'Légère (Tarqīq)'}`,
      type: 'ikhfa',
      badge: isHeavy ? 'Emphase (Ghunnah Tafkhīm)' : 'Légèreté (Ghunnah Tarqīq)',
      colorClass: 'chip-ikhfa',
      ghunnahDuration: 2,
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
        isQal: true,
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
        isQal: false,
        badge: 'Pas de rebond !',
        colorClass: 'chip-izhar',
        explanation: `ATTENTION PIÈGE DU LIVRE : La lettre ${l} ne fait PAS partie de la Qalqalah. Elle a la caractéristique de Hams (écoulement de souffle). Ne JAMAIS la faire rebondir !`,
        mouthMechanism: 'Laissez simplement glisser un souffle d\'air à l\'arrêt, sans secouer la lettre.',
        example: l === 'ك' ? 'أَلَمۡ نَشۡرَحۡ لَكَ' : 'فَتَحۡنَا',
      };
    }

    return {
      rule: `Lettre ordinaire : ${l}`,
      isQal: false,
      badge: 'Pas de Qalqalah',
      colorClass: 'chip-gold',
      explanation: `Cette lettre ne fait pas partie de Qutb Jadd. Elle se prononce avec son soukoûn naturel sans vibration ajoutée.`,
      mouthMechanism: 'Prononciation fluide selon son point d\'articulation.',
      example: 'ٱلۡحَمۡدُ',
    };
  };

  const currentAnalysis =
    chapter.number === 8
      ? getNunAnalysis(selectedLetter)
      : getQalqalahAnalysis(selectedLetter);

  return (
    <div className="animate-enter space-y-6">
      
      {/* Header */}
      <div>
        <p className="text-[11px] uppercase tracking-wider font-bold text-muted mb-1 flex items-center gap-1.5">
          <FlaskConical className="w-3.5 h-3.5 text-idgham" />
          <span>Étape 3 · Le Laboratoire Interactif</span>
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-normal text-ink mb-1">
          Banc d'Essai des 28 Lettres Arabes
        </h1>
        <p className="text-xs sm:text-sm text-muted">
          Touchez n'importe quelle lettre du clavier ci-dessous pour déclencher la règle en direct et observer son comportement phonétique.
        </p>
      </div>

      {/* Interactive Letter Keyboard Grid */}
      <div className="p-4 sm:p-5 rounded-2xl bg-card border border-line shadow-xs">
        <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-3">
          Sélectionnez une lettre à tester :
        </span>
        <div className="grid grid-cols-7 sm:grid-cols-10 gap-1.5 sm:gap-2" dir="rtl">
          {ARABIC_ALPHABET.map((item) => {
            const isSelected = selectedLetter === item.letter;
            return (
              <button
                key={item.letter}
                onClick={() => setSelectedLetter(item.letter)}
                className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center transition-all select-none ${
                  isSelected
                    ? 'bg-ink text-paper font-bold shadow-md scale-105 ring-2 ring-gold'
                    : 'bg-soft/70 hover:bg-soft text-ink border border-line/60 hover:scale-102'
                }`}
              >
                <span className="font-ar text-2xl sm:text-3xl leading-none">{item.letter}</span>
                <span className="text-[9px] font-sans opacity-70 mt-1 hidden sm:block">
                  {item.nameFr}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Laboratory Result Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-card border-2 border-line shadow-sm animate-pop">
        
        {/* Top Result Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-line">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-soft border border-line flex items-center justify-center font-ar font-bold text-3xl text-ink">
              {chapter.number === 8 ? `نْ + ${selectedLetter}` : selectedLetter}
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Résultat du test</span>
              <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                {currentAnalysis.rule}
              </h3>
            </div>
          </div>

          <span className={`chip ${currentAnalysis.colorClass} self-start sm:self-auto`}>
            {currentAnalysis.badge}
          </span>
        </div>

        {/* Explanation & Articulation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5 text-xs sm:text-sm">
          
          <div className="p-4 rounded-xl bg-soft/60 border border-line/80 space-y-1.5">
            <span className="font-bold text-ink block text-xs uppercase tracking-wider">
              Diagnostic de la règle :
            </span>
            <p className="text-muted leading-relaxed">
              {currentAnalysis.explanation}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-soft/60 border border-line/80 space-y-1.5">
            <span className="font-bold text-ink block text-xs uppercase tracking-wider">
              Positionnement buccal :
            </span>
            <p className="text-muted leading-relaxed">
              {currentAnalysis.mouthMechanism}
            </p>
          </div>

        </div>

        {/* Example in Quran */}
        <div className="p-4 rounded-xl bg-paper border border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-0.5">
              Exemple Coranique type :
            </span>
            <span className="text-xs text-muted">Observez la combinaison dans le Mushaf</span>
          </div>

          <div className="px-5 py-2 rounded-xl bg-card border border-line font-ar font-bold text-2xl sm:text-3xl text-ink shadow-xs" dir="rtl">
            {currentAnalysis.example}
          </div>
        </div>

      </div>

    </div>
  );
};
