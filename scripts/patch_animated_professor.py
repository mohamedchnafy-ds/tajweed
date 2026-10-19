# -*- coding: utf-8 -*-
"""
Script to enrich AnimatedProfessor.tsx with:
- Extended RaaRulesMatrixVisual (8 Tafkhīm, 4 Tarqīq, 3 Jawāz)
- Chapter 13 visuals: NunQutniDemonstratorVisual, MaddElisionVisual, FourResolutionsMatrixVisual
- Chapter 14 visuals: DisjointedLettersDecomposerVisual, FawatihLiaisonHafsVisual
- Chapter 15 visuals: TaaMarbutaVsMaftuhaVisual, ThirteenTaaWordsExplorerVisual, HaaKinayahSilahVisual
- Chapter 16 visuals: HafsImalahVisual, HafsTashilVisual, HafsIshmamRawmVisual, HafsSaktatTimerVisual, HafsSevenAlifsVisual
- Screens definitions and dispatching for Chapters 12 to 16
"""

import os
import sys

TARGET_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "src", "components", "AnimatedProfessor.tsx"))

with open(TARGET_PATH, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Update imports if needed
if "Clock" not in code:
    code = code.replace(
        "import { RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';",
        "import { RotateCcw, ArrowRight, ArrowLeft, Volume2, Play, Pause, Clock, Sparkles, Eye, Check, AlertCircle } from 'lucide-react';"
    )

# 2. Replacement for RaaRulesMatrixVisual (Line ~4205)
OLD_RAA_START = "/** Écran 3 : La Râ' (ر) & Ses 4 Règles de Tarqīq */"
NEW_RAA_CODE = '''/** Écran 3 : La Râ' (ر) - Simulateur Intégral : 8 Tafkhīm, 4 Tarqīq & Cas au Choix */
const RaaRulesMatrixVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeCategory, setActiveCategory] = useState<'tafkhim' | 'tarqiq' | 'jawaz'>('tafkhim');
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const tafkhimCases = [
    { title: '1. Râ Fathah', arabic: 'رَبَّنَا تَقَبَّلۡ مِنَّآ', readAs: 'Rab-banā', ref: '2:127', desc: 'Râ porte directement une Fathah : emphase obligatoire pleine et ronde.' },
    { title: '2. Râ Dammah', arabic: 'رُزِقۡنَا مِن قَبۡلُ', readAs: 'Ruziqnā', ref: '2:25', desc: 'Râ porte une Dammah : emphase puissante avec lèvres projetées en avant.' },
    { title: '3. Râ Sākin après Fathah', arabic: 'وَٱذۡكُرۡ فِى ٱلۡكِتَٰبِ مَرۡيَمَ', readAs: 'Maryam', ref: '19:16', desc: 'Râ sans voyelle précédé d\'une Fathah : résonance lourde et sombre.' },
    { title: '4. Râ Sākin après Dammah', arabic: 'إِنَّهُۥ لَقُرۡءَانٞ كَرِيمٞ', readAs: 'Qur\'ān', ref: '56:77', desc: 'Râ sans voyelle précédé d\'une Dammah : emphase complète.' },
    { title: '5. Waqf après Fathah', arabic: 'وَٱلۡعَصۡرِ (arrêt)', readAs: 'Al-\\'Asr', ref: '103:1', desc: 'À l\'arrêt sur Al-\\'Asr : le Râ accidentel est précédé d\'un Sād sākin lui-même précédé de Fathah.' },
    { title: '6. Waqf après Dammah', arabic: 'إِنَّ ٱلۡإِنسَٰنَ لَفِى خُسۡرٍ (arrêt)', readAs: 'Khusr', ref: '103:2', desc: 'À l\'arrêt sur Khusr : Râ accidentel précédé de Sīn sākin et Dammah.' },
    { title: '7. Après Hamzat Wasl', arabic: 'ٱرۡجِعِىٓ إِلَىٰ رَبِّكِ', readAs: 'Irji\'ī / Li-mani-rtadā', ref: '89:28', desc: 'Râ sākin précédé d\'une Kasrah temporaire ou Hamzat Al-Wasl : Tafkhīm impératif !' },
    { title: '8. Suivi lettre Isti\'lā\'', arabic: 'كِتَٰبٗا فِى قِرۡطَاسٖ', readAs: 'Qirṭās / Mirsād / Firqah', ref: '6:7', desc: 'Précédé de Kasrah mais immédiatement suivi d\'une consonne lourde (ط) dans le même mot : Tafkhīm triomphe !' },
  ];

  const tarqiqCases = [
    { title: '1. Kasrah Directe', arabic: 'فَرِحِينَ بِمَآ ءَاتَىٰهُمُ', readAs: 'Farihīna / Rizqan', ref: '3:170', desc: 'La Râ porte une Kasrah (ـِ) : amincissement soyeux et immédiat (Istifāl).' },
    { title: '2. Sākin après Kasrah Originelle', arabic: 'فِى مِرۡيَةٖ مِّنۡهُ / فِرۡعَوۡنَ', readAs: 'Fir\'awna / Miryah', ref: '2:49', desc: 'Râ sākin précédé d\'une Kasrah originelle dans le même mot sans lettre lourde après.' },
    { title: '3. Waqf après Sākin après Kasrah', arabic: 'هَلۡ فِى ذَٰلِكَ قَسَمٞ لِّذِى حِجۡرٍ', readAs: 'Li-dhī Hijr / As-Sihr', ref: '89:5', desc: 'À la pause, la Kasrah traverse la consonne immobile pour amincir le Râ final.' },
    { title: '4. Waqf après Yā\' Sākinah', arabic: 'إِنَّ ٱللَّهَ بِمَا تَعۡمَلُونَ خَبِيرٌ', readAs: 'Khabīr / Khayr / Bashīr', ref: '2:234', desc: 'À l\'arrêt après un Yā\' de prolongation ou de Līn : Tarqīq absolu et mélodieux.' },
  ];

  const jawazCases = [
    { title: '1. Firq (فِرۡقٖ)', arabic: 'فَكَانَ كُلُّ فِرۡقٖ كَٱلطَّوۡدِ', readAs: 'Firq (Tafkhīm ou Tarqīq)', ref: '26:63', desc: 'Cas unique en continu : le Qāf lourd porte une Kasrah. Les deux voies sont permises par Ibn Al-Jazarī.' },
    { title: '2. Misr & Al-Qitr (مِصۡرَ / ٱلۡقِطۡرِ)', arabic: 'مِصۡرَ / وَأَسَلۡنَا لَهُۥ عَيۡنَ ٱلۡقِطۡرِ', readAs: 'Misr (Tafkhīm favorisé) | Qitr (Tarqīq favorisé)', ref: '12:21 / 34:12', desc: 'À l\'arrêt : choix selon la voyelle d\'origine (Fathah pour Misr, Kasrah pour Al-Qitr).' },
    { title: '3. Yasr & Asr (يَسۡرِ / أَسۡرِ)', arabic: 'وَٱلَّيۡلِ إِذَا يَسۡرِ', readAs: 'Yasr (Tarqīq ou Tafkhīm à l\'arrêt)', ref: '89:4', desc: 'À l\'arrêt : Tarqīq permis en mémoire du Yā\' supprimé dans le tracé sacré (Yasrī).' },
  ];

  const currentList = activeCategory === 'tafkhim' ? tafkhimCases : activeCategory === 'tarqiq' ? tarqiqCases : jawazCases;
  const curr = currentList[selectedCase] || currentList[0];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="segmented">
        <button
          onClick={() => { setActiveCategory('tafkhim'); setSelectedCase(0); }}
          aria-pressed={activeCategory === 'tafkhim'}
        >
          8 Cas Tafkhīm (Lourd)
        </button>
        <button
          onClick={() => { setActiveCategory('tarqiq'); setSelectedCase(0); }}
          aria-pressed={activeCategory === 'tarqiq'}
        >
          4 Cas Tarqīq (Fin)
        </button>
        <button
          onClick={() => { setActiveCategory('jawaz'); setSelectedCase(0); }}
          aria-pressed={activeCategory === 'jawaz'}
        >
          3 Cas au Choix
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
        {currentList.map((c, i) => (
          <button
            key={i}
            onClick={() => setSelectedCase(i)}
            className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
              selectedCase === i ? 'bg-lapis text-lapis-ink shadow-xs scale-105' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            {c.title.split('.')[0]}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-3.5 text-center animate-fade">
        <div className="flex items-center justify-between">
          <span className={`chip ${activeCategory === 'tafkhim' ? 'chip-qalqalah' : activeCategory === 'tarqiq' ? 'chip-idgham' : 'chip-madd'} text-xs font-bold`}>
            {activeCategory === 'tafkhim' ? 'Tafkhīm Obligatoire' : activeCategory === 'tarqiq' ? 'Tarqīq Obligatoire' : 'Jawāz (Deux Voies Permises)'}
          </span>
          <span className="text-xs text-muted">Verset {curr.ref}</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.arabic}
        </div>

        <div className="p-2.5 rounded-xl bg-soft text-xs sm:text-sm font-mono text-ink">
          Phonétique : <strong className={activeCategory === 'tafkhim' ? 'text-bad' : 'text-good'}>{curr.readAs}</strong>
        </div>

        <p className="text-xs sm:text-sm text-ink leading-relaxed bg-soft/60 p-3 rounded-xl border border-line/60 text-left">
          {curr.desc}
        </p>
      </div>
    </div>
  );
};'''

# Replace old RaaRulesMatrixVisual with new
old_raa_end = "/** Écran 4 : Takhlees Al-Hurūf"
idx_start = code.find(OLD_RAA_START)
idx_end = code.find(old_raa_end)

if idx_start != -1 and idx_end != -1:
    code = code[:idx_start] + NEW_RAA_CODE + "\n\n" + code[idx_end:]
    print("Replaced RaaRulesMatrixVisual successfully!")
else:
    print("Warning: could not locate old RaaRulesMatrixVisual")

# 3. Add Chapters 13, 14, 15, 16 visual components before `/* =========================================================================\n   COMPOSANT PRINCIPAL`
MAIN_COMP_MARKER = "/* =========================================================================\n   COMPOSANT PRINCIPAL"

NEW_VISUAL_MODULES = '''/* =========================================================================
   CHAPITRE 13 : Iltiqā' As-Sākinayn (Rencontre de Deux Soukoûns)
   ========================================================================= */

/** Écran 1 : Démonstrateur Interactif du Nūn Qutnī */
const NunQutniDemonstratorVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [step, setStep] = useState<number>(0);
  const [selectedEx, setSelectedEx] = useState<number>(0);

  const examples = [
    {
      mushaf: 'وَنَادَىٰ نُوحٌ ٱبۡنَهُۥ',
      translit: 'Nūhun ibnahū',
      ref: 'Hūd 11:42',
      step1: 'نُوحٌ  +  ٱبۡنَهُ',
      step2: 'نُوحُ + [نْ] + [ٱ] + [بْـ]',
      step3: 'Collision frontale : [نْ] (sākin) + [بْ] (sākin) !',
      step4: 'Kasrah de secours : [نْ] ➔ [نِ] (Nūn Qutnī)',
      resultAr: 'نُوحُنِ بۡنَهُۥ',
      resultPhonetic: 'Nūhu-ni-bnahū',
      note: 'Hamzat Al-Wasl disparaît complètement et le Nūn prend la Kasrah de liaison.'
    },
    {
      mushaf: 'قُلۡ هُوَ ٱللَّهُ أَحَدٌ ١ ٱللَّهُ ٱلصَّمَدُ',
      translit: 'Ahadun Allāhu-s-Samad',
      ref: 'Al-Ikhlās 112:1-2',
      step1: 'أَحَدٌ  +  ٱللَّهُ',
      step2: 'أَحَدُ + [نْ] + [ٱ] + [لْـ]',
      step3: 'Deux soukoûns consécutifs : [نْ] + [لْ]',
      step4: 'Kasrah de secours : [نِ] + Tarqīq d\'Allāh',
      resultAr: 'أَحَدُنِ ٱللَّهُ ٱلصَّمَدُ',
      resultPhonetic: 'Ahadu-ni-llāhu-s-Samad',
      note: 'Majesté d\'Allāh amincie (Tarqīq) à cause de la Kasrah du Nūn Qutnī !'
    },
    {
      mushaf: 'كُتِبَ عَلَيۡكُمۡ ... خَيۡرًا ٱلۡوَصِيَّةُ',
      translit: 'Khayran al-wasiyyatu',
      ref: 'Al-Baqarah 2:180',
      step1: 'خَيۡرًا  +  ٱلۡوَصِيَّةُ',
      step2: 'خَيۡرَ + [نْ] + [ٱ] + [لْـ]',
      step3: 'Deux soukoûns consécutifs : [نْ] + [لْ]',
      step4: 'Kasrah de secours sous le Nūn caché',
      resultAr: 'خَيۡرَنِ ٱلۡوَصِيَّةُ',
      resultPhonetic: 'Khayra-ni-l-wasiyyah',
      note: 'Le Tanwīn Fathah se transforme en voyelle brève suivie de [ni].'
    }
  ];

  const curr = examples[selectedEx];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Démonstrateur Pas-à-Pas du Nūn Qutnī (Vocalisation de Secours en Kasrah)
      </div>

      <div className="flex justify-center gap-2">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => { setSelectedEx(i); setStep(0); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedEx === i ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            Exemple {i + 1}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 text-center animate-fade">
        <div className="flex items-center justify-between text-xs text-muted">
          <span className="chip chip-izhar font-bold">Étape {step + 1} / 5</span>
          <span>{curr.ref}</span>
        </div>

        {step === 0 && (
          <div className="space-y-3 py-3">
            <span className="text-xs text-muted block uppercase tracking-wider">1. Tracé dans le Mushaf</span>
            <div className="font-ar text-4xl sm:text-5xl text-ink leading-relaxed" dir="rtl">{curr.mushaf}</div>
            <p className="text-xs text-muted">{curr.translit}</p>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-3 py-3">
            <span className="text-xs text-muted block uppercase tracking-wider">2. Décomposition des éléments</span>
            <div className="font-ar text-3xl sm:text-4xl text-ink leading-relaxed" dir="rtl">{curr.step2}</div>
            <p className="text-xs text-ink font-medium">Le Tanwīn cache un Nūn sākinah immobile !</p>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3 py-3 bg-bad-bg p-4 rounded-xl border border-bad/30">
            <span className="text-xs text-bad font-bold block uppercase tracking-wider">3. Conflit Phonologique Prohibé</span>
            <div className="text-xl sm:text-2xl font-bold text-bad">{curr.step3}</div>
            <p className="text-xs text-bad">L\'arabe interdit formellement d\'enchaîner deux consonnes immobiles en continu !</p>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3 py-3 bg-good-bg p-4 rounded-xl border border-good/30">
            <span className="text-xs text-good font-bold block uppercase tracking-wider">4. La Solution Sacrée : Nūn Qutnī</span>
            <div className="text-xl sm:text-2xl font-bold text-good">{curr.step4}</div>
            <p className="text-xs text-good">On insère une Kasrah de secours sous le Nūn pour fluidifier la liaison.</p>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-3 py-3 bg-soft p-4 rounded-xl border border-line">
            <span className="text-xs text-gilt font-bold block uppercase tracking-wider">5. Ce que l\'on récite réellement</span>
            <div className="font-ar text-4xl sm:text-5xl text-ink leading-relaxed text-good" dir="rtl">{curr.resultAr}</div>
            <div className="p-2 rounded-lg bg-card text-xs sm:text-sm font-mono text-ink">
              Rendu oral : <strong>{curr.resultPhonetic}</strong>
            </div>
            <p className="text-xs text-muted">{curr.note}</p>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-line">
          <button
            onClick={() => setStep(prev => Math.max(0, prev - 1))}
            disabled={step === 0}
            className="btn btn-ghost text-xs"
          >
            ← Précédent
          </button>
          <div className="flex gap-1.5">
            {[0, 1, 2, 3, 4].map(s => (
              <div key={s} className={`w-2 h-2 rounded-full ${s === step ? 'bg-lapis w-5' : 'bg-line'} transition-all`} />
            ))}
          </div>
          <button
            onClick={() => setStep(prev => Math.min(4, prev + 1))}
            disabled={step === 4}
            className="btn btn-secondary text-xs"
          >
            Étape suivante →
          </button>
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : Démonstrateur d'Élision de la Lettre de Madd */
const MaddElisionVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [isWaqf, setIsWaqf] = useState<boolean>(false);

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Élision Orale de la Lettre de Prolongation (Hadhf Harf Al-Madd)
      </div>

      <div className="segmented">
        <button onClick={() => setIsWaqf(false)} aria-pressed={!isWaqf}>
          En Liaison Continue (Wasl)
        </button>
        <button onClick={() => setIsWaqf(true)} aria-pressed={isWaqf}>
          À l\'Arrêt sur le Mot 1 (Waqf)
        </button>
      </div>

      <div className={`p-6 rounded-2xl border text-center transition-all animate-pop ${
        !isWaqf ? 'bg-bad-bg border-bad/30' : 'bg-good-bg border-good/30'
      }`}>
        <span className="text-xs uppercase font-bold tracking-wider block text-muted mb-2">
          An-Naml 27:15
        </span>

        <div className="font-ar text-4xl sm:text-5xl leading-relaxed py-2" dir="rtl">
          {!isWaqf ? (
            <span>
              <span>وَقَالَا </span>
              <span className="line-through text-bad font-bold">ا</span>
              <span className="text-good font-bold">لۡحَمۡدُ لِلَّهِ</span>
            </span>
          ) : (
            <span className="text-good font-bold">
              وَقَالَآ (2 temps pleins !)
            </span>
          )}
        </div>

        <div className="p-3 rounded-xl bg-card border border-line text-xs sm:text-sm font-mono mt-3 text-ink">
          {!isWaqf ? (
            <span>Prononciation orale : <strong className="text-bad">Wa qāla-l-hamdu</strong> (L\'Alif disparaît complètement)</span>
          ) : (
            <span>Prononciation à l\'arrêt : <strong className="text-good">Wa qālāā</strong> (Le Madd naturel de 2 temps est rétabli)</span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-left text-ink leading-relaxed mt-4 bg-soft/60 p-3 rounded-xl border border-line">
          {!isWaqf ? (
            <>⚠️ <strong>Règle de Liaison :</strong> L\'Alif de Madd rencontre le Lām soukouné d\'Al-Hamd. Deux soukoûns ne pouvant se suivre, la voyelle longue est entièrement sacrifiée dans la phonation.</>
          ) : (
            <>🌿 <strong>Règle de Pause :</strong> Si vous vous arrêtez sur « وَقَالَا » pour reprendre votre souffle, le second soukoûn n\'existe plus : vous DEVEZ rétablir les 2 temps de Madd naturel !</>
          )}
        </p>
      </div>
    </div>
  );
};

/** Écran 3 : Les 4 Modes de Résolution du Livre Arabe */
const FourResolutionsMatrixVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedMode, setSelectedMode] = useState<number>(0);

  const modes = [
    {
      name: '1. Par Kasrah (Défaut)',
      rule: 'Règle générale pour le Tanwīn, les verbes et le Wāw de Līn singulier.',
      examples: [
        { ar: 'خَيۡرًا ٱلۡوَصِيَّةُ', read: 'Khayrani-l-wasiyyah' },
        { ar: 'أَوِ ٱسۡتَقَٰمُواْ', read: 'Awi-staqāmū' },
        { ar: 'قَالَتِ ٱخۡرُجۡ', read: 'Qālati-khruj' },
      ],
      color: 'chip-izhar'
    },
    {
      name: '2. Par Dammah (Pluriel)',
      rule: 'Réservé au Mīm du pluriel et au Wāw de la communauté pour préserver la marque morphologique.',
      examples: [
        { ar: 'بِهِمُ ٱلۡأَسۡبَابُ', read: 'Bihimu-l-asbāb' },
        { ar: 'مِنۡهُمُ ٱلۡمُؤۡمِنُونَ', read: 'Minhumu-l-mu\'minūn' },
        { ar: 'ٱشۡتَرَوُاْ ٱلضَّلَٰلَةَ', read: 'Ishtarawu-d-dalālah' },
      ],
      color: 'chip-qalqalah'
    },
    {
      name: '3. Par Fathah (Min & Duel)',
      rule: 'Pour la préposition « Min » (légèreté), le Tā\' du duel, et l\'ouverture d\'Al-Imran.',
      examples: [
        { ar: 'مِنَ ٱلۡعَذَابِ / مِنَ ٱلنَّاسِ', read: 'Mina-l-\\'adhāb / Mina-n-nās' },
        { ar: 'كَانَتَا / قَالَتَا', read: 'Kānatā / Qālatā' },
        { ar: 'الم ١ ٱللَّهُ', read: 'Alif-Lāāām-Mīīīma-llāh' },
      ],
      color: 'chip-idgham'
    },
    {
      name: '4. Par Élision (Hadhf)',
      rule: 'Suppression orale totale de la voyelle longue (Alif, Wāw, Yā\') devant Hamzat Wasl.',
      examples: [
        { ar: 'فِى ٱلسَّمَٰوَٰتِ', read: 'Fis-samāwāt' },
        { ar: 'إِذَا ٱلشَّمۡسُ', read: 'Idhash-shams' },
        { ar: 'وَقَالَا ٱلۡحَمۡدُ', read: 'Wa qāla-l-hamd' },
      ],
      color: 'chip-madd'
    }
  ];

  const curr = modes[selectedMode];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Tableau Canonique : Les 4 Clés de Résolution (Livre Arabe Page 64)
      </div>

      <div className="grid grid-cols-2 gap-2">
        {modes.map((m, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedMode(idx)}
            className={`p-2.5 rounded-xl text-xs font-semibold transition-all ${
              selectedMode === idx ? 'bg-lapis text-lapis-ink shadow-xs scale-102' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-3.5 text-center animate-fade">
        <span className={`chip ${curr.color} text-xs font-bold`}>{curr.name}</span>
        <p className="text-xs sm:text-sm text-ink leading-relaxed">{curr.rule}</p>

        <div className="space-y-2 pt-2">
          {curr.examples.map((ex, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-soft border border-line flex items-center justify-between gap-2">
              <span className="font-ar text-xl text-ink" dir="rtl">{ex.ar}</span>
              <span className="text-xs font-mono text-good">{ex.read}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   CHAPITRE 14 : Fawātih As-Suwar (Lettres Isolées)
   ========================================================================= */

/** Écran 1 : Décomposeur Interactif avec Compteur de Temps */
const DisjointedLettersDecomposerVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedCombination, setSelectedCombination] = useState<number>(0);
  const [activeLetterIdx, setActiveLetterIdx] = useState<number>(0);

  const combinations = [
    {
      title: 'كٓهيعٓصٓ (Maryam 19:1)',
      letters: [
        { name: 'KĀF (كَافْ)', dur: 6, tag: 'Madd Lāzim Harfī (6 temps)', note: 'Lettre de Kam \'Asala Naqas : 6 temps d\'allongement obligatoire.' },
        { name: 'HĀ (هَا)', dur: 2, tag: 'Madd Tabī\'ī Harfī (2 temps)', note: 'Lettre de Hayyun Tahur : 2 temps naturels sans Hamzah.' },
        { name: 'YĀ (يَا)', dur: 2, tag: 'Madd Tabī\'ī Harfī (2 temps)', note: 'Lettre de Hayyun Tahur : 2 temps naturels sans Hamzah.' },
        { name: '\'AYN (عَيْنْ)', dur: 6, tag: 'Madd Līn (4 ou 6 temps)', note: 'Contient un Yā\' de Līn au milieu : 6 temps prioritaire + Ikhfā\' lourd vers Sād !' },
        { name: 'SĀD (صَادْ)', dur: 6, tag: 'Madd Lāzim Harfī (6 temps)', note: '6 temps d\'allongement avec Qalqalah terminale à l\'arrêt.' }
      ],
      totalDur: 22
    },
    {
      title: 'طسٓمٓ (Ash-Shu\'arā 26:1)',
      letters: [
        { name: 'TĀ (طَا)', dur: 2, tag: 'Madd Tabī\'ī Harfī (2 temps)', note: 'Lettre de Hayyun Tahur : 2 temps d\'allongement direct.' },
        { name: 'SĪN (سِينْ)', dur: 6, tag: 'Madd Lāzim Harfī Muthaqqal (6 temps)', note: 'Le Nūn terminal de Sīn fond dans le Mīm avec Idghām et 2 temps de Ghunnah !' },
        { name: 'MĪM (مِيمْ)', dur: 6, tag: 'Madd Lāzim Harfī Mukhaffaf (6 temps)', note: '6 temps d\'allongement avec fermeture labiale douce.' }
      ],
      totalDur: 14
    },
    {
      title: 'الم (Al-Baqarah 2:1)',
      letters: [
        { name: 'ALIF (أَلِفْ)', dur: 0, tag: 'ZÉRO Allongement (0 temps)', note: 'Aucune voyelle longue : prononciation sèche et brève [A-l-i-f].' },
        { name: 'LĀM (لَامْ)', dur: 6, tag: 'Madd Lāzim Muthaqqal (6 temps)', note: 'Le Mīm final de Lām s\'assimile dans le Mīm suivant avec Ghunnah de 2 temps.' },
        { name: 'MĪM (مِيمْ)', dur: 6, tag: 'Madd Lāzim Mukhaffaf (6 temps)', note: '6 temps de résonance avant soukoûn final.' }
      ],
      totalDur: 14
    }
  ];

  const curr = combinations[selectedCombination];
  const activeLetter = curr.letters[activeLetterIdx] || curr.letters[0];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Décomposeur Virtuel des Lettres Découpées & Compteur de Battements
      </div>

      <div className="flex justify-center gap-2">
        {combinations.map((c, i) => (
          <button
            key={i}
            onClick={() => { setSelectedCombination(i); setActiveLetterIdx(0); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedCombination === i ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            {c.title.split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 text-center animate-fade">
        <div className="text-xs text-muted font-bold">{curr.title}</div>

        <div className="flex items-center justify-center gap-2 py-2 flex-wrap">
          {curr.letters.map((letObj, idx) => (
            <button
              key={idx}
              onClick={() => setActiveLetterIdx(idx)}
              className={`p-3 rounded-2xl border text-center transition-all ${
                activeLetterIdx === idx
                  ? 'bg-lapis text-lapis-ink border-lapis scale-105 shadow-md'
                  : 'bg-soft text-ink border-line hover:border-muted'
              }`}
            >
              <span className="font-bold text-sm block">{letObj.name.split(' ')[0]}</span>
              <span className="text-xs font-mono block opacity-80 mt-1">{letObj.dur} temps</span>
            </button>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-soft border border-line text-left space-y-2">
          <div className="flex items-center justify-between">
            <span className="chip chip-gold font-bold text-xs">{activeLetter.tag}</span>
            <span className="text-xs font-bold font-mono text-muted">Durée : {activeLetter.dur} battements</span>
          </div>
          <p className="text-xs sm:text-sm text-ink leading-relaxed">{activeLetter.note}</p>

          <div className="flex items-center gap-2 pt-2">
            <span className="text-xs text-muted">Battements :</span>
            <div className="flex gap-1.5">
              {Array.from({ length: Math.max(1, activeLetter.dur) }).map((_, b) => (
                <div
                  key={b}
                  className={`w-3 h-3 rounded-full ${activeLetter.dur === 0 ? 'bg-line' : 'bg-gold animate-pulse'}`}
                  style={{ animationDelay: `${b * 200}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : Règles de Liaison des Fawātih selon Hafs */
const FawatihLiaisonHafsVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWord, setSelectedWord] = useState<0 | 1>(0);

  const words = [
    {
      surah: 'Yā-Sīn (36:1-2)',
      ar: 'يسٓ ١ وَٱلۡقُرۡءَانِ ٱلۡحَكِيمِ',
      ruleName: 'Izhār Mutlaq Canonique',
      readAs: 'Yā-Sīīn wal-Qur\'ān',
      forbidden: 'Yā-Sīw-wal-Qur\'ān (Idghām formellement interdit)',
      desc: 'Par la voie de la Chāṭibiyyah, Hafs prononce clairement le Nūn de « Sīn » devant le Wāw sans aucune assimilation ni Ghunnah.'
    },
    {
      surah: 'Al-Qalam (68:1)',
      ar: 'نٓۚ وَٱلۡقَلَمِ وَمَا يَسۡطُرُونَ',
      ruleName: 'Izhār Mutlaq Canonique',
      readAs: 'Nūūūn wal-Qalam',
      forbidden: 'Nūw-wal-Qalam (Idghām interdit)',
      desc: 'Même règle absolue : le Nūn d\'ouverture s\'achève par un son N net avant d\'attaquer le Wāw.'
    }
  ];

  const curr = words[selectedWord];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Exceptions Célèbres de Hafs : L\'Izhār Mutlaq en Liaison Continue
      </div>

      <div className="segmented">
        <button onClick={() => setSelectedWord(0)} aria-pressed={selectedWord === 0}>
          يسٓ وَٱلۡقُرۡءَانِ
        </button>
        <button onClick={() => setSelectedWord(1)} aria-pressed={selectedWord === 1}>
          نٓ وَٱلۡقَلَمِ
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 text-center animate-fade">
        <span className="chip chip-izhar font-bold text-xs">{curr.ruleName}</span>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-relaxed py-2" dir="rtl">
          {curr.ar}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-left">
          <div className="p-3 rounded-xl bg-good-bg border border-good/30">
            <span className="font-bold text-good block mb-1">✓ Récitation Authentique</span>
            <span className="font-mono text-ink">{curr.readAs}</span>
          </div>
          <div className="p-3 rounded-xl bg-bad-bg border border-bad/30">
            <span className="font-bold text-bad block mb-1">✕ Interdit (Lahn Khafī)</span>
            <span className="font-mono text-ink line-through">{curr.forbidden}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-ink leading-relaxed bg-soft/60 p-3 rounded-xl border border-line text-left">
          {curr.desc}
        </p>
      </div>
    </div>
  );
};

/* =========================================================================
   CHAPITRE 15 : Distinctions Subtiles (Tā'āt & Ahkām Al-Waqf)
   ========================================================================= */

/** Écran 1 : Testeur d'Arrêt Tā' Marbūṭah (ة ➔ h) vs Tā' Maftūḥah (ت ➔ t) */
const TaaMarbutaVsMaftuhaVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [isWaqf, setIsWaqf] = useState<boolean>(true);

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Testeur d'Arrêt : Tā' Marbūṭah (ة) vs Tā' Maftūḥah (ت)
      </div>

      <div className="segmented">
        <button onClick={() => setIsWaqf(true)} aria-pressed={isWaqf}>
          Mode Arrêt (Waqf)
        </button>
        <button onClick={() => setIsWaqf(false)} aria-pressed={!isWaqf}>
          Mode Liaison (Wasl)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        {/* Card 1: Tā' Marbūṭah */}
        <div className="p-5 rounded-2xl bg-card border border-line space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs chip chip-izhar">Tā' Marbūṭah (ة)</span>
            <span className="text-xs text-muted">Al-Ghāshiyah 88:12</span>
          </div>

          <div className="text-center py-3">
            <span className="font-ar text-4xl text-ink" dir="rtl">عَيۡنٌ جَارِيَةٌ</span>
          </div>

          <div className={`p-3 rounded-xl border text-center font-mono text-sm ${
            isWaqf ? 'bg-good-bg border-good/40 text-good' : 'bg-soft border-line text-ink'
          }`}>
            {isWaqf ? (
              <div>
                <strong>[ Jāriyah ]</strong>
                <span className="text-xs block mt-1">Devient un HĀ' soukouné doux [h]</span>
              </div>
            ) : (
              <div>
                <strong>[ Jāriyatun ]</strong>
                <span className="text-xs block mt-1">Reste un TĀ' voyellé [t]</span>
              </div>
            )}
          </div>
        </div>

        {/* Card 2: Tā' Maftūḥah */}
        <div className="p-5 rounded-2xl bg-card border border-line space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs chip chip-qalqalah">Tā' Maftūḥah (ت)</span>
            <span className="text-xs text-muted">Al-Qāri'ah 101:6</span>
          </div>

          <div className="text-center py-3">
            <span className="font-ar text-4xl text-ink" dir="rtl">ثَقُلَتۡ مَوَٰزِينُهُۥ</span>
          </div>

          <div className={`p-3 rounded-xl border text-center font-mono text-sm ${
            isWaqf ? 'bg-idgham-bg border-idgham/40 text-idgham' : 'bg-soft border-line text-ink'
          }`}>
            {isWaqf ? (
              <div>
                <strong>[ Thaqulat ]</strong>
                <span className="text-xs block mt-1">Reste un TĀ' [t] avec souffle de Hams</span>
              </div>
            ) : (
              <div>
                <strong>[ Thaqulat ]</strong>
                <span className="text-xs block mt-1">TĀ' avec liaison normale</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : Explorateur des 13 Mots Sacrés Écrits avec Tā' Ouverte */
const ThirteenTaaWordsExplorerVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWord, setSelectedWord] = useState<number>(0);

  const thirteenWords = [
    { word: 'رَحۡمَتَ', surah: 'Al-A\'rāf 7:56', text: 'إِنَّ رَحۡمَتَ ٱللَّهِ قَرِيبٞ', stopAs: 'Rahmat (avec Tā\' et Hams)', note: 'Tracé avec Tā\' ouverte : l\'arrêt se fait obligatoirement en [t] !' },
    { word: 'نِعۡمَتَ', surah: 'Al-Baqarah 2:231', text: 'وَٱذۡكُرُواْ نِعۡمَتَ ٱللَّهِ عَلَيۡكُمۡ', stopAs: 'Ni\'mat', note: 'Arrêt sur Tā\' selon le tracé de la plume.' },
    { word: 'ٱمۡرَأَتَ', surah: 'At-Tahrīm 66:10', text: 'ٱمۡرَأَتَ نُوحٖ وَٱمۡرَأَتَ لُوطٖ', stopAs: 'Imra\'at', note: 'Toute femme rattachée à son époux s\'écrit avec Tā\' ouverte dans le Coran.' },
    { word: 'سُنَّتَ', surah: 'Al-Anfāl 8:38', text: 'فَقَدۡ مَضَتۡ سُنَّتُ ٱلۡأَوَّلِينَ', stopAs: 'Sunnat', note: 'Arrêt en [t] avec son souffle de Hams.' },
    { word: 'لَعۡنَتَ', surah: 'Āl \'Imrān 3:61', text: 'فَنَجۡعَل لَّعۡنَتَ ٱللَّهِ عَلَى ٱلۡكَٰذِبِينَ', stopAs: 'La\'nat', note: 'Conformité stricte au tracé \'Uthmānī.' },
    { word: 'شَجَرَتَ', surah: 'Ad-Dukhān 44:43', text: 'إِنَّ شَجَرَتَ ٱلزَّقُّومِ', stopAs: 'Shajarat', note: 'Shajarat az-Zaqqūm porte la Tā\' ouverte.' },
    { word: 'جَنَّتُ', surah: 'Al-Wāqi\'ah 56:89', text: 'فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ', stopAs: 'Jannat', note: 'Jannat Na\'īm s\'arrête sur un Tā\'.' },
    { word: 'ٱبۡنَتَ', surah: 'At-Tahrīm 66:12', text: 'وَمَرۡيَمَ ٱبۡنَتَ عِمۡرَٰنَ', stopAs: 'Ibnat', note: 'Ibnat \'Imrān s\'écrit avec Tā\' ouverte.' },
  ];

  const curr = thirteenWords[selectedWord];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Les 13 Mots Sacrés Écrits avec Tā' Ouverte (Matn Al-Jazariyyah & Page 68)
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {thirteenWords.map((w, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedWord(idx)}
            className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
              selectedWord === idx ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            {w.word}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-3.5 text-center animate-fade">
        <div className="flex items-center justify-between text-xs text-muted">
          <span className="chip chip-qalqalah font-bold">Tā' Maftūḥah Exceptionnelle</span>
          <span>{curr.surah}</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-relaxed py-2" dir="rtl">
          {curr.text}
        </div>

        <div className="p-3 rounded-xl bg-good-bg border border-good/40 text-good font-mono text-sm">
          Arrêt d\'urgence (Waqf) : <strong>{curr.stopAs}</strong>
        </div>

        <p className="text-xs sm:text-sm text-ink leading-relaxed bg-soft/60 p-3 rounded-xl border border-line text-left">
          {curr.note}
        </p>
      </div>
    </div>
  );
};

/* =========================================================================
   CHAPITRE 16 : Cas Particuliers de Hafs 'An 'Āsim
   ========================================================================= */

/** Écran 1 : L'Imālah Unique de Hafs (Majrāhā) */
const HafsImalahVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [tiltPercent, setTiltPercent] = useState<number>(50);

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        L'Unique Imālah Majeure de Hafs : مَجۡرٜىٰهَا (Sourate Hūd 11:41)
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line shadow-sm space-y-4 text-center">
        <div className="font-ar text-5xl sm:text-6xl text-ink leading-relaxed" dir="rtl">
          بِسۡمِ ٱللَّهِ <span className="text-good font-bold underline decoration-wavy">مَجۡرٜىٰهَا</span> وَمُرۡسَىٰهَآ
        </div>

        <div className="p-3 rounded-xl bg-good-bg border border-good/40 text-sm font-mono text-good">
          Phonétique : <strong>[ Majrēhā ]</strong> (Son [ē] comme « fée »)
        </div>

        {/* Dial / Gauge */}
        <div className="space-y-2 max-w-sm mx-auto pt-2">
          <div className="flex justify-between text-xs text-muted font-bold">
            <span>0% [A] Pure (Tafkhīm)</span>
            <span className="text-good">50% Imālah (Hafs)</span>
            <span>100% [I] Pure (Kasrah)</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={tiltPercent}
            onChange={(e) => setTiltPercent(Number(e.target.value))}
            className="w-full accent-good"
          />
        </div>

        <div className="p-3.5 rounded-xl bg-soft text-xs sm:text-sm text-ink leading-relaxed text-left border border-line">
          ℹ️ <strong>Particularité Unique :</strong> Signalée dans le Mushaf par un petit losange (◊) sous le Râ. L\'Alif et la Fathah sont inclinés à 50% vers la Kasrah. Conséquence phonétique : la lettre Râ devient automatiquement fine (Tarqīq) !
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : Le Tashīl Canonique (ءَاعْجَمِيٌّ) */
const HafsTashilVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [mode, setMode] = useState<'aajamy' | 'dhakarayn'>('aajamy');

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Le Tashīl Canonique (Adoucissement de la Seconde Hamzah)
      </div>

      <div className="segmented">
        <button onClick={() => setMode('aajamy')} aria-pressed={mode === 'aajamy'}>
          Fussilat 44:44 (Obligatoire)
        </button>
        <button onClick={() => setMode('dhakarayn')} aria-pressed={mode === 'dhakarayn'}>
          Madd Al-Farq (2 Visages)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 text-center animate-fade">
        {mode === 'aajamy' ? (
          <>
            <div className="flex items-center justify-between text-xs text-muted">
              <span className="chip chip-izhar font-bold">Tashīl Obligatoire</span>
              <span>Sourate Fussilat 44</span>
            </div>

            <div className="font-ar text-5xl sm:text-6xl text-ink leading-relaxed py-2" dir="rtl">
              <span className="text-bad font-bold">ءَ</span>
              <span className="text-good font-bold">۬عۡجَمِىّٞ</span>
              <span> وَعَرَبِىّٞ</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-left">
              <div className="p-3 rounded-xl bg-good-bg border border-good/30">
                <span className="font-bold text-good block mb-1">1re Hamzah : Mohaqqaqah</span>
                <span>Attaque ferme et nette [ʔa].</span>
              </div>
              <div className="p-3 rounded-xl bg-idgham-bg border border-idgham/30">
                <span className="font-bold text-idgham block mb-1">2e Hamzah : Musahhala</span>
                <span>Adoucie sans à-coup glottique ni son [h].</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ink leading-relaxed bg-soft/60 p-3 rounded-xl border border-line text-left">
              Signalée dans le Mushaf par un point noir plein (•) sur l\'Alif. Ne prononcez jamais deux coups de glotte durs !
            </p>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between text-xs text-muted">
              <span className="chip chip-madd font-bold">Double Visage Autorisé</span>
              <span>Al-An\'ām / Yūnus / An-Naml</span>
            </div>

            <div className="font-ar text-4xl sm:text-5xl text-ink leading-relaxed py-2" dir="rtl">
              قُلۡ ءَآلذَّكَرَيۡنِ حَرَّمَ أَمِ ٱلۡأُنثَيَيۡنِ
            </div>

            <div className="space-y-2 text-xs text-left">
              <div className="p-3 rounded-xl bg-good-bg border border-good/30">
                <strong className="text-good">Voie 1 (Prioritaire) - Ibdāl :</strong> Transformer la 2e Hamzah en Alif allongé de 6 temps pleins (« Āāāāāā-dhakarayn »).
              </div>
              <div className="p-3 rounded-xl bg-soft border border-line">
                <strong className="text-ink">Voie 2 - Tashīl :</strong> Adoucir la 2e Hamzah sans allongement.
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

/** Écran 3 : L'Ishmām & Le Rawm dans « Lā Ta'mannā » (Yūsuf 11) */
const HafsIshmamRawmVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWay, setSelectedWay] = useState<'ishmam' | 'rawm'>('ishmam');

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Le Mystère de « Lā Ta'mannā » : Ishmām vs Rawm (Yūsuf 12:11)
      </div>

      <div className="segmented">
        <button onClick={() => setSelectedWay('ishmam')} aria-pressed={selectedWay === 'ishmam'}>
          Voie 1 : L'Ishmām (Prioritaire)
        </button>
        <button onClick={() => setSelectedWay('rawm')} aria-pressed={selectedWay === 'rawm'}>
          Voie 2 : Le Rawm (Al-Ikhtilās)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 text-center animate-fade">
        <div className="font-ar text-4xl sm:text-5xl text-ink leading-relaxed" dir="rtl">
          قَالُواْ يَٰٓأَبَانَا مَا لَكَ <span className="text-good font-bold underline">لَا تَأۡمَ۫نَّا</span> عَلَىٰ يُوسُفَ
        </div>

        {selectedWay === 'ishmam' ? (
          <div className="space-y-3">
            <span className="chip chip-qalqalah font-bold text-xs">Geste Visuel des Lèvres (Inaudible à l'Oreille)</span>
            <div className="p-4 rounded-xl bg-good-bg border border-good/30 text-xs sm:text-sm text-left space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-good shrink-0" />
                <span className="text-ink"><strong>Prononciation :</strong> Fusion complète des 2 Nūn avec 2 temps de Ghunnah (Lā ta\'man-nā).</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-good shrink-0" />
                <span className="text-ink"><strong>Action des Lèvres :</strong> Projeter immédiatement les lèvres en rond pendant la Ghunnah sans émettre aucun son !</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-good shrink-0" />
                <span className="text-ink"><strong>Témoin :</strong> Visible par les yeux, muet pour les oreilles.</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <span className="chip chip-idgham font-bold text-xs">Phonation Vocale Atténuée (Audible aux Proches)</span>
            <div className="p-4 rounded-xl bg-soft border border-line text-xs sm:text-sm text-left space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-lapis shrink-0" />
                <span className="text-ink"><strong>Prononciation :</strong> Prononcer « Lā ta\'man-u-nā » sans fusionner.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-lapis shrink-0" />
                <span className="text-ink"><strong>Règle de Durée :</strong> Émettre seulement 1/3 de la Dammah à voix basse et rapide.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/** Écran 4 : Le Chronomètre des 4 Saktāt Canoniques */
const HafsSaktatTimerVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedSakt, setSelectedSakt] = useState<number>(0);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(2);

  const saktat = [
    { name: '1. Al-Kahf (18:1-2)', ar: 'وَلَمۡ يَجۡعَل لَّهُۥ عِوَجَاۜ ١ قَيِّمٗا', target: 'عِوَجَاۜ  [Sakt 2 sec]  قَيِّمٗا', why: 'Empêche de croire que « Qayyimā » est le qualificatif de « \'Iwajā ».' },
    { name: '2. Yā-Sīn (36:52)', ar: 'مِن مَّرۡقَدِنَاۜۗ هَٰذَا مَا وَعَدَ ٱلرَّحۡمَٰنُ', target: 'مَرۡقَدِنَاۜ  [Sakt 2 sec]  هَٰذَا', why: 'Sépare les paroles des mécréants de la réponse des anges.' },
    { name: '3. Al-Qiyāmah (75:27)', ar: 'وَقِيلَ مَنۡۜ رَاقٖ', target: 'مَنۡۜ  [Sakt 2 sec]  رَاقٖ', why: 'Empêche l\'Idghām phonétique (Mar-rāq) qui masquerait le mot « Man » (Qui ?).' },
    { name: '4. Al-Mutaffifīn (83:14)', ar: 'كَلَّاۖ بَلۡۜ رَانَ عَلَىٰ قُلُوبِهِم', target: 'بَلۡۜ  [Sakt 2 sec]  رَانَ', why: 'Empêche l\'Idghām du Lām dans le Râ (Bar-rāna).' }
  ];

  const curr = saktat[selectedSakt];

  const handleStartTimer = () => {
    setTimerRunning(true);
    setTimeLeft(2);
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Les 4 Saktāt Canoniques : Silence de 2 Temps SANS Reprendre de Souffle
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        {saktat.map((s, idx) => (
          <button
            key={idx}
            onClick={() => { setSelectedSakt(idx); setTimerRunning(false); setTimeLeft(2); }}
            className={`p-2 rounded-xl text-xs font-semibold transition-all ${
              selectedSakt === idx ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            {s.name.split(' ')[1]}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 text-center animate-fade">
        <span className="chip chip-qalqalah font-bold text-xs">{curr.name}</span>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-relaxed py-2" dir="rtl">
          {curr.ar}
        </div>

        <div className="p-4 rounded-xl bg-soft border border-line space-y-3">
          <span className="text-xs font-bold text-muted uppercase tracking-wider block">Simulateur de Silence Respiratoire</span>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleStartTimer}
              disabled={timerRunning}
              className="btn btn-secondary text-xs"
            >
              {timerRunning ? 'Silence en cours...' : 'Tester le Sakt de 2 secondes'}
            </button>
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-lg ${
              timerRunning ? 'border-bad text-bad animate-pulse bg-bad-bg' : 'border-good text-good bg-good-bg'
            }`}>
              {timerRunning ? `${timeLeft}s` : '✓'}
            </div>
          </div>
          {timerRunning && (
            <p className="text-xs text-bad font-semibold animate-pulse">
              🤐 Retenez votre souffle ! Ne respirez pas !
            </p>
          )}
        </div>

        <p className="text-xs sm:text-sm text-ink leading-relaxed bg-soft/60 p-3 rounded-xl border border-line text-left">
          💡 <strong>Raison théologique & phonétique :</strong> {curr.why}
        </p>
      </div>
    </div>
  );
};

/** Écran 5 : Les 7 Alifs (الألفات السبع) */
const HafsSevenAlifsVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [isWaqf, setIsWaqf] = useState<boolean>(true);

  const alifs = [
    { word: 'أَنَا۠', ref: 'Al-A\'rāf 7:12', wasl: 'Ana khayrun (0 temps)', waqf: 'Anāā (2 temps)' },
    { word: 'لَّٰكِنَّا۠', ref: 'Al-Kahf 18:38', wasl: 'Lākinna huwa-llāh', waqf: 'Lākinnāā (2 temps)' },
    { word: 'ٱلظُّنُونَا۠', ref: 'Al-Ahzāb 33:10', wasl: 'Az-Zunūna hunālik', waqf: 'Az-Zunūnāā (2 temps)' },
    { word: 'ٱلرَّسُولَا۠', ref: 'Al-Ahzāb 33:66', wasl: 'Ar-Rasūla wa qālū', waqf: 'Ar-Rasūlāā (2 temps)' },
    { word: 'ٱلسَّبِيلَا۠', ref: 'Al-Ahzāb 33:67', wasl: 'As-Sabīla rabbanā', waqf: 'As-Sabīlāā (2 temps)' },
    { word: 'سَلَٰسِلَا۠', ref: 'Al-Insān 76:4', wasl: 'Salāsila wa aghlālā', waqf: 'Salāsilāā (ou soukoûn)' },
    { word: 'قَوَارِيرَا۠ (1)', ref: 'Al-Insān 76:15', wasl: 'Qawārīra qawārīrā', waqf: 'Qawārīrāā (2 temps)' },
  ];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-4 max-w-xl mx-auto">
      <div className="label">
        Les 7 Alifs du Coran : Présents à la Pause, Effacés en Continu
      </div>

      <div className="segmented">
        <button onClick={() => setIsWaqf(true)} aria-pressed={isWaqf}>
          À l'Arrêt (Waqf) ➔ 2 Temps Requis
        </button>
        <button onClick={() => setIsWaqf(false)} aria-pressed={!isWaqf}>
          En Liaison (Wasl) ➔ 0 Temps (Muet)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-3 animate-fade">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
          {alifs.map((item, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-soft border border-line flex items-center justify-between gap-2">
              <div>
                <span className="font-ar text-2xl text-ink font-bold block" dir="rtl">{item.word}</span>
                <span className="text-[10px] text-muted">{item.ref}</span>
              </div>
              <div className="text-right">
                <span className={`text-xs font-mono font-bold ${isWaqf ? 'text-good' : 'text-bad'}`}>
                  {isWaqf ? item.waqf : item.wasl}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted leading-relaxed text-left pt-2">
          Repérés dans le Mushaf par le zéro rectangulaire allongé (Sifr Mustatīl ْ).
        </p>
      </div>
    </div>
  );
};

'''

idx_main = code.find(MAIN_COMP_MARKER)
if idx_main != -1:
    code = code[:idx_main] + NEW_VISUAL_MODULES + code[idx_main:]
    print("Inserted visual modules for Chapters 13-16 successfully!")
else:
    print("Error: could not find main component marker!")

# 4. Now add screens for chapters 13 to 16 and update `const screens = ...`
NEW_SCREENS_CODE = '''  // Screens for Chapter 13 (Iltiqa As-Sakinayn)
  const chapter13Screens = [
    {
      title: 'Le Démonstrateur Interactif du Nūn Qutnī',
      badge: 'Kasrah de Secours (Ni)',
      concept: 'Comment le Tanwīn débloque la collision avec Hamzat Wasl',
      renderVisual: () => <NunQutniDemonstratorVisual animKey={animKey} />,
      explanation: 'Lorsque le Tanwīn rencontre un mot débutant par Hamzat Wasl (نُوحٌ ٱبۡنَهُ), le Nūn caché prend obligatoirement une Kasrah de secours : « Nūhu-ni-bnahū ». Et dans « Ahaduni-llāh », le Nom d\'Allah devient doux et aminci par Tarqīq !'
    },
    {
      title: 'L\'Élision Orale de la Lettre de Prolongation (Hadhf)',
      badge: 'Wasl vs Waqf',
      concept: 'Le Madd disparaît en continu mais renaît à l\'arrêt',
      renderVisual: () => <MaddElisionVisual animKey={animKey} />,
      explanation: 'Dans « وَقَالَا ٱلۡحَمۡدُ », l\'Alif s\'efface totalement en continu : on prononce « Wa qāla-l-hamd ». Mais si vous vous arrêtez sur le premier mot, rétablissez impérativement les 2 temps de Madd naturel : « Wa qālāā » !'
    },
    {
      title: 'Les 4 Clés de Résolution (Tableau Page 64)',
      badge: 'Tableau du Livre Arabe',
      concept: 'Kasrah, Dammah, Fathah et Hadhf : chaque conflit a sa solution consacrée',
      renderVisual: () => <FourResolutionsMatrixVisual animKey={animKey} />,
      explanation: 'L\'arabe utilise 4 procédés pour débloquer deux consonnes immobiles : 1. La Kasrah (par défaut pour Tanwīn et verbes), 2. La Dammah (Mīm et Wāw du pluriel), 3. La Fathah (préposition Min et Alif-Lām-Mīm Allāh), et 4. L\'élision de la voyelle longue.'
    }
  ];

  // Screens for Chapter 14 (Fawatih As-Suwar)
  const chapter14Screens = [
    {
      title: 'Le Décomposeur des 3 Familles de Lettres Isolées',
      badge: '0, 2 et 6 temps',
      concept: 'Alif (0 temps), Hayyun Tahur (2 temps), Kam \'Asala Naqas (6 temps)',
      renderVisual: () => <DisjointedLettersDecomposerVisual animKey={animKey} />,
      explanation: 'Les 14 lettres liminaires se décomposent en 3 durées strictes : Alif ne s\'allonge JAMAIS (0 temps) ; les 5 lettres de « حَيٌّ طَهُرَ » durent 2 temps sans coup de glotte ; et les 8 lettres de « كَمْ عَسَلَ نَقَصَ » résonnent sur 6 temps complets de Madd Lāzim !'
    },
    {
      title: 'Exceptions Célèbres de Liaison de Hafs',
      badge: 'Izhār Mutlaq',
      concept: 'Yā-Sīn et Nūn ne s\'assimilent JAMAIS dans le Wāw suivant',
      renderVisual: () => <FawatihLiaisonHafsVisual animKey={animKey} />,
      explanation: 'Dans « Yā-Sīn wal-Qur\'ān » et « Nūn wal-Qalam », Hafs pratique obligatoirement l\'Izhār Mutlaq : on fait entendre clairement le Nūn sans aucune fusion dans le Wāw !'
    }
  ];

  // Screens for Chapter 15 (Distinctions Subtiles)
  const chapter15Screens = [
    {
      title: 'Le Testeur d\'Arrêt Tā\' Marbūṭah (ة) vs Maftūḥah (ت)',
      badge: '[h] doux vs [t] avec Hams',
      concept: 'Comment la nature de la consonne dicte la sortie de voix à l\'arrêt',
      renderVisual: () => <TaaMarbutaVsMaftuhaVisual animKey={animKey} />,
      explanation: 'La Tā\' Marbūṭah (ة) se transforme obligatoirement en Hā\' soukouné [h] à l\'arrêt (« Jāriyah »). La Tā\' Maftūḥah (ت) conserve son identité de consonne [t] avec un souffle net de Hams (« Thaqulat »).'
    },
    {
      title: 'Les 13 Mots Sacrés Tracés avec Tā\' Ouverte',
      badge: 'Conformité au Rasm \'Uthmānī',
      concept: '13 mots féminins exceptionnels qui s\'arrêtent sur la consonne [t]',
      renderVisual: () => <ThirteenTaaWordsExplorerVisual animKey={animKey} />,
      explanation: 'Recensés par l\'Imam Ibn Al-Jazarī, ces 13 vocables (Rahmat, Ni\'mat, Imra\'at, Sunnat, etc.) sont tracés avec un Tā\' ouvert dans le Mushaf : si vous devez vous arrêter dessus, vous DEVEZ prononcer un [t] avec Hams !'
    }
  ];

  // Screens for Chapter 16 (Cas Particuliers de Hafs)
  const chapter16Screens = [
    {
      title: 'L\'Imālah Unique de Majrāhā (Sourate Hūd 41)',
      badge: '50% vers le son [ē]',
      concept: 'La seule et unique inclinaison majeure chez Hafs dans tout le Coran',
      renderVisual: () => <HafsImalahVisual animKey={animKey} />,
      explanation: 'Dans « Majrāhā » (مَجۡرٜىٰهَا), le son est incliné à mi-chemin entre [a] et [i] (Majrēhā), repéré par le losange sous le Râ. Cela amincit automatiquement le Râ par Tarqīq !'
    },
    {
      title: 'Le Tashīl Canonique (ءَاعْجَمِيٌّ)',
      badge: 'Adoucissement de la Hamzah',
      concept: 'Articuler la seconde Hamzah avec douceur sans aucun coup de glotte',
      renderVisual: () => <HafsTashilVisual animKey={animKey} />,
      explanation: 'Dans « A\'a\'jamiyyun » (ءَا۬عۡجَمِىّٞ), la première Hamzah est franche et la seconde est facilitée (Tashīl). De même, les 3 mots de Madd Al-Farq (Ā-dhakarayn, Āl-ān, Āllāh) autorisent le Tashīl ou l\'Ibdāl sur 6 temps !'
    },
    {
      title: 'L\'Ishmām & Le Rawm dans « Lā Ta\'mannā »',
      badge: 'Yūsuf 11:11',
      concept: 'Arrondir les lèvres en silence ou chuchoter 1/3 de la Dammah',
      renderVisual: () => <HafsIshmamRawmVisual animKey={animKey} />,
      explanation: 'L\'Ishmām consiste à projeter les deux lèvres en avant en silence pendant la Ghunnah du Nūn pour signaler la Dammah d\'origine aux yeux du spectateur. Le Rawm consiste à prononcer 1/3 de la Dammah à voix basse.'
    },
    {
      title: 'Les 4 Saktāt Canoniques Obligatoires',
      badge: 'Silence de 2 Temps Sans Souffle',
      concept: 'Arrêter la voix 2 secondes sans respirer pour préserver le sens divin',
      renderVisual: () => <HafsSaktatTimerVisual animKey={animKey} />,
      explanation: 'Hafs impose 4 arrêts silencieux sans reprise de souffle : Al-Kahf 1, Yāsīn 52, Al-Qiyāmah 27 (Man Rāq), et Al-Mutaffifīn 14 (Bal Rāna).'
    },
    {
      title: 'Les 7 Alifs (الألفات السبع)',
      badge: 'Waqf ➔ 2 temps | Wasl ➔ 0 temps',
      concept: 'Sept mots dont l\'Alif ne vit qu\'à la pause et disparaît en continu',
      renderVisual: () => <HafsSevenAlifsVisual animKey={animKey} />,
      explanation: 'Dans « Anā », « Lākinnā », « Az-Zunūnā », l\'Alif est muet en liaison continue mais s\'allonge de 2 temps pleins si vous marquez l\'arrêt.'
    }
  ];
'''

# Find where `const screens =` is
SCREENS_DISPATCH_OLD = '''  const screens =
    chapter.number === 1
      ? chapter1Screens
      : chapter.number === 2
      ? chapter2Screens
      : chapter.number === 3
      ? chapter3Screens
      : chapter.number === 4
      ? chapter4Screens
      : chapter.number === 5
      ? chapter5Screens
      : chapter.number === 6
      ? chapter6Screens
      : chapter.number === 7
      ? chapter7Screens
      : chapter.number === 8
      ? nunScreens
      : chapter.number === 9
      ? chapter9Screens
      : chapter.number === 10
      ? qalqalahScreens
      : chapter.number === 11
      ? chapter11Screens
      : chapter12Screens;'''

SCREENS_DISPATCH_NEW = '''  const screens =
    chapter.number === 1
      ? chapter1Screens
      : chapter.number === 2
      ? chapter2Screens
      : chapter.number === 3
      ? chapter3Screens
      : chapter.number === 4
      ? chapter4Screens
      : chapter.number === 5
      ? chapter5Screens
      : chapter.number === 6
      ? chapter6Screens
      : chapter.number === 7
      ? chapter7Screens
      : chapter.number === 8
      ? nunScreens
      : chapter.number === 9
      ? chapter9Screens
      : chapter.number === 10
      ? qalqalahScreens
      : chapter.number === 11
      ? chapter11Screens
      : chapter.number === 12
      ? chapter12Screens
      : chapter.number === 13
      ? chapter13Screens
      : chapter.number === 14
      ? chapter14Screens
      : chapter.number === 15
      ? chapter15Screens
      : chapter16Screens;'''

idx_dispatch = code.find(SCREENS_DISPATCH_OLD)
if idx_dispatch != -1:
    code = code[:idx_dispatch] + NEW_SCREENS_CODE + "\n" + SCREENS_DISPATCH_NEW + code[idx_dispatch + len(SCREENS_DISPATCH_OLD):]
    print("Updated screens definitions and dispatching successfully!")
else:
    print("Error: could not find screens dispatch section!")

with open(TARGET_PATH, "w", encoding="utf-8") as f:
    f.write(code)

print("AnimatedProfessor.tsx patched successfully!")
