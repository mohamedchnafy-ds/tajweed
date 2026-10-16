import React, { useState, useEffect } from 'react';
import { Chapter } from '../types/tajweed';
import { RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';
import { StepHeader } from './ui';

interface AnimatedProfessorProps {
  chapter: Chapter;
}

/* =========================================================================
   CHAPITRE 1 : Mini-composants interactifs et didactiques
   ========================================================================= */

/** Écran 1 : Démonstrateur de Lahn Jalī (Inversion théologique du sens) */
const LahnJaliVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeVariant, setActiveVariant] = useState<'an-amta' | 'an-amtu' | 'an-amti'>('an-amta');

  const variants = {
    'an-amta': {
      harakah: 'َ (Fathah sur le Tā\')',
      badge: 'Récitation Conforme',
      badgeClass: 'chip-idgham',
      meaning: '« Ceux que Tu (Allah) as comblés de bienfaits »',
      author: 'Allah (Créateur Tout-Puissant, 2e personne singulier)',
      theology: 'Attribution exclusive et véridique de la grâce à Allah.',
      fiqh: 'Prière valide et récitation agréée selon le Prophète ﷺ.',
      highlightColor: 'text-good',
      bgColor: 'bg-good-bg',
      borderColor: 'border-good/40',
      isError: false,
    },
    'an-amtu': {
      harakah: 'ُ (Dammah sur le Tā\')',
      badge: 'Lahn Jalī Majeur (Harām)',
      badgeClass: 'chip-qalqalah',
      meaning: '« Ceux que J\'AI comblés de bienfaits »',
      author: 'L\'humain qui récite (1re personne singulier)',
      theology: 'L\'humain s\'attribue le don divin (inversion sacrilège du sens) !',
      fiqh: 'Prière invalidée si commis sciemment ou par négligence grave.',
      highlightColor: 'text-bad',
      bgColor: 'bg-bad-bg',
      borderColor: 'border-bad/40',
      isError: true,
    },
    'an-amti': {
      harakah: 'ِ (Kasrah sous le Tā\')',
      badge: 'Lahn Jalī Majeur (Harām)',
      badgeClass: 'chip-qalqalah',
      meaning: '« Ceux que Toi (féminin) as comblés de bienfaits »',
      author: 'Attribution au genre féminin',
      theology: 'Attribue un pronom féminin à Allah (altération textuelle).',
      fiqh: 'Prière invalidée ! Déformation inacceptable de la Fātihah.',
      highlightColor: 'text-bad',
      bgColor: 'bg-bad-bg',
      borderColor: 'border-bad/40',
      isError: true,
    },
  };

  const curr = variants[activeVariant];

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="segmented">
          <button
            onClick={() => setActiveVariant('an-amta')}
            aria-pressed={activeVariant === 'an-amta'}
          >
            أَنۡعَمۡتَ (Correct)
          </button>
          <button
            onClick={() => setActiveVariant('an-amtu')}
            aria-pressed={activeVariant === 'an-amtu'}
          >
            أَنۡعَمۡتُ (Erreur Jalī)
          </button>
          <button
            onClick={() => setActiveVariant('an-amti')}
            aria-pressed={activeVariant === 'an-amti'}
          >
            أَنۡعَمۡتِ (Erreur Jalī)
          </button>
        </div>
      </div>

      <div className={`p-6 rounded-2xl ${curr.bgColor} border ${curr.borderColor} text-center transition-all animate-pop`}>
        <div className="label mb-2">Observation mot à mot (Al-Fātihah 1:7)</div>
        <div className="text-5xl sm:text-6xl font-ar leading-[1.8] my-3" dir="rtl">
          <span>أَنۡعَمۡ</span>
          <span className={`font-bold transition-all ${curr.highlightColor} ${curr.isError ? 'underline decoration-wavy animate-pulse' : ''}`}>
            {activeVariant === 'an-amta' ? 'تَ' : activeVariant === 'an-amtu' ? 'تُ' : 'تِ'}
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-2">
          <span className={`chip ${curr.badgeClass}`}>{curr.badge}</span>
          <span className="text-xs text-muted">Voyelle : {curr.harakah}</span>
        </div>

        <div className="mt-5 pt-4 border-t border-line/40 text-left space-y-2.5 text-sm">
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted shrink-0 w-28">Sens résultant :</span>
            <span className="font-medium text-ink">{curr.meaning}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted shrink-0 w-28">Auteur du don :</span>
            <span className="text-ink">{curr.author}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-semibold text-muted shrink-0 w-28">Statut prière :</span>
            <span className={`font-semibold ${curr.isError ? 'text-bad' : 'text-good'}`}>{curr.fiqh}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : Démonstrateur de Lahn Khafī (Mesure du Madd) */
const LahnKhafiVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [maddDuration, setMaddDuration] = useState<2 | 4 | 5>(4);

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto text-center">
      <div className="label mb-4">Mesure du Madd Wājib Muttasil sur « As-Samā' » (ٱلسَّمَآءَ)</div>

      <div className="p-6 rounded-2xl bg-card border border-line shadow-xs">
        <div className="font-ar text-5xl sm:text-6xl text-ink leading-[1.8]" dir="rtl">
          <span>ٱلسَّمَ</span>
          <span className="text-gold font-bold underline decoration-gold/60">آ</span>
          <span>ءَ</span>
        </div>
        <p className="text-xs text-muted mt-1">Présence de la vague de prolongation (~) devant la Hamzah dans le même mot</p>

        {/* Stepper selector */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {[2, 4, 5].map((d) => (
            <button
              key={d}
              onClick={() => setMaddDuration(d as 2 | 4 | 5)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                maddDuration === d
                  ? 'bg-lapis text-lapis-ink shadow-xs'
                  : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              {d} temps {d === 2 ? '(Lahn Khafī)' : '(Hafs)'}
            </button>
          ))}
        </div>

        {/* Beats Visualizer */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6">
          {[1, 2, 3, 4, 5].map((beat) => {
            const isActive = beat <= maddDuration;
            return (
              <div key={beat} className="flex flex-col items-center gap-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-base transition-all ${
                    isActive
                      ? maddDuration === 2
                        ? 'bg-bad-bg text-bad border border-bad/30 font-bold'
                        : 'bg-gold-bg text-gold border border-gold/40 font-bold animate-pop'
                      : 'bg-soft text-muted/40 border border-line/40'
                  }`}
                  style={{ animationDelay: `${beat * 0.1}s` }}
                >
                  {beat}
                </div>
                <span className="text-[11px] text-muted">{beat}t</span>
              </div>
            );
          })}
        </div>

        {/* Diagnosis box */}
        <div className={`mt-6 p-4 rounded-xl text-sm text-left ${
          maddDuration === 2 ? 'bg-bad-bg border border-bad/20' : 'bg-good-bg border border-good/20'
        }`}>
          {maddDuration === 2 ? (
            <div>
              <span className="font-semibold text-bad block mb-1">Diagnostic : Al-Lahn Al-Khafī (Erreur Subtile)</span>
              <p className="text-muted leading-relaxed">
                Le mot signifie toujours « le ciel » (le sens n'est pas altéré, la prière reste valide), mais vous ampute la plénitude acoustique exigée par la chaîne de transmission authentique de Hafs.
              </p>
            </div>
          ) : (
            <div>
              <span className="font-semibold text-good block mb-1">Diagnostic : Récitation Parfaite (Tartīl Conforme)</span>
              <p className="text-muted leading-relaxed">
                Prolongation complète de {maddDuration} temps. Vous honorez le Madd Wājib Muttasil tel qu'il a été transmis par l'Ange Jibrīl au Prophète ﷺ.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/** Écran 3 : Démonstrateur du Rasm 'Uthmānī */
const RasmUthmaniVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWord, setSelectedWord] = useState<'salah' | 'zakah' | 'riba'>('salah');

  const examples = {
    salah: {
      modern: 'الصَّلَاة',
      uthmani: 'ٱلصَّلَوٰةَ',
      name: 'La Prière (As-Salāh)',
      explanation: 'Écrit avec la consonne Wāw (و), mais surmonté d\'un petit Alif vertical (Alif Khanjariyyah). On prononce "as-Salāh" et JAMAIS "as-Salawāh" !',
      secret: 'Cette graphie unifie la racine linguistique (صلو) et rappelle que le Coran s\'apprend exclusivement par transmission orale (Talāqqī).',
    },
    zakah: {
      modern: 'الزَّكَاة',
      uthmani: 'ٱلزَّكَوٰةَ',
      name: 'L\'Aumône (Az-Zakāh)',
      explanation: 'Tout comme la prière, le Wāw sacré porte le petit Alif suscrit. La prononciation reste "az-Zakāh".',
      secret: 'Le Rasm \'Uthmānī a été figé à l\'unanimité par les Compagnons du Prophète ﷺ (Ijmā\'). Il est formellement interdit de le moderniser.',
    },
    riba: {
      modern: 'الرِّبَا',
      uthmani: 'ٱلرِّبَوٰاْ',
      name: 'L\'Usure (Ar-Ribā)',
      explanation: 'Présente à la fois un Wāw surmonté d\'un Alif suscrit ET un Alif final portant un petit cercle zéro (d\'annulation phonétique).',
      secret: 'Le cercle rond (Al-Alif As-Sākinah) indique que la lettre finale est purement calligraphique et ne se prononce pas.',
    },
  };

  const curr = examples[selectedWord];

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="segmented">
          <button
            onClick={() => setSelectedWord('salah')}
            aria-pressed={selectedWord === 'salah'}
          >
            الصلاة
          </button>
          <button
            onClick={() => setSelectedWord('zakah')}
            aria-pressed={selectedWord === 'zakah'}
          >
            الزكاة
          </button>
          <button
            onClick={() => setSelectedWord('riba')}
            aria-pressed={selectedWord === 'riba'}
          >
            الربا
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Modern orthography */}
        <div className="p-5 rounded-2xl bg-card border border-line text-center">
          <span className="label block mb-2">Orthographe Arabe Moderne</span>
          <div className="font-ui-ar text-4xl text-muted my-3" dir="rtl">
            {curr.modern}
          </div>
          <span className="text-xs text-muted block">Écriture standard de dictée</span>
        </div>

        {/* Rasm Uthmani */}
        <div className="p-5 rounded-2xl bg-lapis-bg border border-lapis/30 text-center animate-pop">
          <span className="text-xs font-semibold text-lapis block mb-2">Rasm \'Uthmānī du Mushaf</span>
          <div className="font-ar text-4xl text-lapis my-3 font-bold" dir="rtl">
            {curr.uthmani}
          </div>
          <span className="text-xs text-lapis font-medium block">Graphie révélée & sacrée</span>
        </div>
      </div>

      <div className="mt-4 p-5 rounded-2xl bg-soft text-sm space-y-3">
        <div>
          <span className="font-semibold text-ink block mb-1">Règle de prononciation :</span>
          <p className="text-muted leading-relaxed">{curr.explanation}</p>
        </div>
        <div className="pt-2 border-t border-line/60">
          <span className="font-semibold text-gilt block mb-1">Le secret du Rasm \'Uthmānī :</span>
          <p className="text-muted leading-relaxed">{curr.secret}</p>
        </div>
      </div>
    </div>
  );
};

/** Écran 4 : Mnémonique 6236 et les 3 Vitesses */
const MnemonicVersesVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeSpeed, setActiveSpeed] = useState<'tahqiq' | 'tadwir' | 'hadr'>('tadwir');

  const speeds = {
    tahqiq: {
      name: 'At-Tahqīq (التَّحْقِيق)',
      badge: 'Rythme Lent & Pédagogique',
      desc: 'Donne à chaque lettre sa pleine résonance sans hâte. Utilisé par les débutants et lors de l\'apprentissage minutieux.',
      tempo: '60 bpm',
    },
    tadwir: {
      name: 'At-Tadwīr (التَّدْوِير)',
      badge: 'Rythme Médian Recommandé',
      desc: 'Le tempo équilibré qui allie aisance, beauté et respect strict du Tajwīd. Le rythme le plus fréquent chez les Imams en prière.',
      tempo: '90 bpm',
    },
    hadr: {
      name: 'Al-Hadr (الحَدْر)',
      badge: 'Rythme Rapide pour la Révision',
      desc: 'Lecture alerte et cadencée pour réviser de grandes portions du Coran, sans jamais supprimer un Madd ou une Ghunnah.',
      tempo: '120 bpm',
    },
  };

  const currSpeed = speeds[activeSpeed];

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-6">
      {/* Mnemonic 6236 Box */}
      <div className="p-5 rounded-2xl bg-card border border-line text-center shadow-xs">
        <div className="label mb-2">Astuce mnémotechnique du Dr. Islām Fekry</div>
        <h4 className="font-display text-lg text-ink font-semibold mb-4">Combien de versets compte le Coran ?</h4>

        <div className="flex items-center justify-center gap-2 sm:gap-3 my-3">
          <div className="p-3 sm:p-4 rounded-xl bg-gilt-soft border border-gilt/40 text-gilt font-display text-2xl sm:text-3xl font-bold animate-pop" style={{ animationDelay: '0.1s' }}>
            6
          </div>
          <span className="text-muted text-xl">+</span>
          <div className="p-3 sm:p-4 rounded-xl bg-lapis-bg border border-lapis/40 text-lapis font-display text-2xl sm:text-3xl font-bold animate-pop" style={{ animationDelay: '0.3s' }}>
            23
          </div>
          <span className="text-muted text-xl">+</span>
          <div className="p-3 sm:p-4 rounded-xl bg-gilt-soft border border-gilt/40 text-gilt font-display text-2xl sm:text-3xl font-bold animate-pop" style={{ animationDelay: '0.5s' }}>
            6
          </div>
          <span className="text-muted text-xl">=</span>
          <div className="p-3 sm:p-4 rounded-xl bg-good-bg border border-good/40 text-good font-display text-2xl sm:text-3xl font-bold animate-pop" style={{ animationDelay: '0.7s' }}>
            6236
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted mt-3 max-w-md mx-auto">
          <strong>23 ans</strong> de révélation prophétique, encadrés par un <strong>6</strong> au début et un <strong>6</strong> à la fin. Vous ne l'oublierez plus jamais !
        </p>
      </div>

      {/* 3 Speeds */}
      <div className="p-5 rounded-2xl bg-soft text-left">
        <div className="label mb-3 text-center sm:text-left">Les 3 vitesses autorisées de Tartīl</div>

        <div className="flex justify-center sm:justify-start mb-4">
          <div className="segmented">
            <button
              onClick={() => setActiveSpeed('tahqiq')}
              aria-pressed={activeSpeed === 'tahqiq'}
            >
              Tahqīq
            </button>
            <button
              onClick={() => setActiveSpeed('tadwir')}
              aria-pressed={activeSpeed === 'tadwir'}
            >
              Tadwīr
            </button>
            <button
              onClick={() => setActiveSpeed('hadr')}
              aria-pressed={activeSpeed === 'hadr'}
            >
              Hadr
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-line">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h5 className="font-display font-semibold text-ink text-base">{currSpeed.name}</h5>
            <span className="chip chip-gold text-xs">{currSpeed.badge}</span>
          </div>
          <p className="text-sm text-muted leading-relaxed">{currSpeed.desc}</p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   CHAPITRE 2 : Mini-composants interactifs pour les Symboles Coraniques
   ========================================================================= */

/** Écran 1 : Waqf Lāzim (مـ) vs Interdiction de couper (لا) */
const WaqfLazimVsLaVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedCase, setSelectedCase] = useState<'lazim' | 'la'>('lazim');
  const [actionTested, setActionTested] = useState<'stop' | 'continue'>('stop');

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-5">
      <div className="flex justify-center mb-4">
        <div className="segmented">
          <button
            onClick={() => { setSelectedCase('lazim'); setActionTested('stop'); }}
            aria-pressed={selectedCase === 'lazim'}
          >
            مـ (Waqf Lāzim - Yā-Sīn)
          </button>
          <button
            onClick={() => { setSelectedCase('la'); setActionTested('continue'); }}
            aria-pressed={selectedCase === 'la'}
          >
            لا (Interdiction - Al-Mā'ūn)
          </button>
        </div>
      </div>

      {selectedCase === 'lazim' ? (
        <div className="p-6 rounded-2xl bg-card border border-line space-y-4">
          <div className="label text-center">Yā-Sīn 36:76 — Le symbole (مـ) au-dessus de قَوۡلُهُمۡ</div>
          <div className="font-ar text-2xl sm:text-3xl text-center leading-[2] text-ink" dir="rtl">
            <span>فَلَا يَحۡزُنكَ </span>
            <span className="p-1 px-2 rounded-lg bg-bad-bg text-bad font-bold border border-bad/30">
              قَوۡلُهُمۡۘ
            </span>
            <span> إِنَّا نَعۡلَمُ مَا يُسِرُّونَ وَمَا يُعۡلِنُونَ</span>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => setActionTested('stop')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                actionTested === 'stop' ? 'bg-good text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              Option 1 : S'arrêter (Waqf Lāzim)
            </button>
            <button
              onClick={() => setActionTested('continue')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                actionTested === 'continue' ? 'bg-bad text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              Option 2 : Lier sans s'arrêter
            </button>
          </div>

          <div className={`p-4 rounded-xl text-sm ${actionTested === 'stop' ? 'bg-good-bg border border-good/30' : 'bg-bad-bg border border-bad/30'}`}>
            {actionTested === 'stop' ? (
              <div>
                <span className="font-semibold text-good block mb-1">Récitation Conforme (Arrêt Obligatoire) :</span>
                <p className="text-muted leading-relaxed">
                  « Que leurs paroles ne t'affligent donc pas. [Pause] Certes, Nous savons ce qu'ils cachent et ce qu'ils divulguent. »
                  <br />
                  <span className="text-good font-medium">Les propos des mécréants sont nettement coupés de la parole majestueuse d'Allah.</span>
                </p>
              </div>
            ) : (
              <div>
                <span className="font-semibold text-bad block mb-1">Grave Altération du Sens (Lahn Jalī) :</span>
                <p className="text-muted leading-relaxed">
                  Lier sans arrêt fait comprendre : « Que leurs paroles [disant que] Nous savons ce qu'ils cachent ne t'affligent pas ! »
                  <br />
                  <span className="text-bad font-medium">Vous attribuez sacrilègement la parole d'Allah aux mécréants !</span>
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-card border border-line space-y-4">
          <div className="label text-center">Al-Mā'ūn 107:4-5 — Le symbole (لا) à la fin du verset 4</div>
          <div className="font-ar text-2xl sm:text-3xl text-center leading-[2] text-ink" dir="rtl">
            <span className="p-1 px-2 rounded-lg bg-bad-bg text-bad font-bold border border-bad/30">
              فَوَيۡلٞ لِّلۡمُصَلِّينَ ٤
            </span>
            <span> ٱلَّذِينَ هُمۡ عَن صَلَاتِهِمۡ سَاهُونَ ٥</span>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => setActionTested('continue')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                actionTested === 'continue' ? 'bg-good text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              Option 1 : Enchaîner avec le verset 5
            </button>
            <button
              onClick={() => setActionTested('stop')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                actionTested === 'stop' ? 'bg-bad text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              Option 2 : Couper et aller au Rukūʿ
            </button>
          </div>

          <div className={`p-4 rounded-xl text-sm ${actionTested === 'continue' ? 'bg-good-bg border border-good/30' : 'bg-bad-bg border border-bad/30'}`}>
            {actionTested === 'continue' ? (
              <div>
                <span className="font-semibold text-good block mb-1">Sens Parfait & Complet :</span>
                <p className="text-muted leading-relaxed">
                  « Malheur aux prieurs... [qui ?] ceux qui sont insouciants de leur prière. »
                  <br />
                  <span className="text-good font-medium">La menace divine ne vise que les négligents, la phrase est complète.</span>
                </p>
              </div>
            ) : (
              <div>
                <span className="font-semibold text-bad block mb-1">Interdit Absolu (Waqf Qabīh) :</span>
                <p className="text-muted leading-relaxed">
                  Clore votre récitation sur « Malheur aux prieurs » sans lire la suite maudit tous les croyants qui accomplissent la prière !
                  <br />
                  <span className="text-bad font-medium">Le symbole (لا) vous défend formellement de terminer votre prière ici.</span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

/** Écran 2 : Arrêt d'Étreinte (Al-Waqf Al-Muta'āniq ۛ ... ۛ) */
const MutaaniqVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeStop, setActiveStop] = useState<'first' | 'second' | 'both'>('first');

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="label text-center">Al-Baqarah 2:2 — La double triade d'arrêts (ۛ ... ۛ)</div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center">
        <div className="font-ar text-2xl sm:text-3xl leading-[2.2] text-ink mb-4" dir="rtl">
          <span>ذَٰلِكَ ٱلۡكِتَٰبُ </span>
          <span className={`px-2 py-1 rounded-xl transition-all ${
            activeStop === 'first' || activeStop === 'both' ? 'bg-lapis text-lapis-ink font-bold shadow-xs' : 'bg-soft text-ink'
          }`}>
            لَا رَيۡبَۛ
          </span>
          <span> </span>
          <span className={`px-2 py-1 rounded-xl transition-all ${
            activeStop === 'second' || activeStop === 'both' ? 'bg-lapis text-lapis-ink font-bold shadow-xs' : 'bg-soft text-ink'
          }`}>
            فِيهِۛ
          </span>
          <span> هُدٗى لِّلۡمُتَّقِينَ</span>
        </div>

        <div className="flex flex-wrap justify-center gap-2 my-4">
          <button
            onClick={() => setActiveStop('first')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeStop === 'first' ? 'bg-good text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            Option A : Arrêt sur « Lā rayb »
          </button>
          <button
            onClick={() => setActiveStop('second')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeStop === 'second' ? 'bg-good text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            Option B : Arrêt sur « Fīh »
          </button>
          <button
            onClick={() => setActiveStop('both')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeStop === 'both' ? 'bg-bad text-card shadow-xs' : 'bg-soft text-bad/80 hover:text-bad'
            }`}
          >
            Arrêt aux deux (Erreur)
          </button>
        </div>

        <div className={`p-4 rounded-xl text-sm text-left ${
          activeStop === 'both' ? 'bg-bad-bg border border-bad/30' : 'bg-good-bg border border-good/30'
        }`}>
          {activeStop === 'first' && (
            <div>
              <span className="font-semibold text-good block mb-1">Nuance A (Arrêt sur Lā rayb) :</span>
              <p className="text-muted leading-relaxed">
                « Ce Livre, nul doute ! [Puis enchaîner] En lui réside une guidée pour ceux qui ont la piété. »
              </p>
            </div>
          )}
          {activeStop === 'second' && (
            <div>
              <span className="font-semibold text-good block mb-1">Nuance B (Arrêt sur Fīh) :</span>
              <p className="text-muted leading-relaxed">
                « Ce Livre, aucun doute n'est en lui. [Puis enchaîner] C'est une guidée pour ceux qui ont la piété. »
              </p>
            </div>
          )}
          {activeStop === 'both' && (
            <div>
              <span className="font-semibold text-bad block mb-1">Erreur Formelle (Waqf Qabīh) :</span>
              <p className="text-muted leading-relaxed">
                S'arrêter à la fois sur « Lā rayb » ET sur « Fīh » laisse le mot « Fīh » isolé au milieu de nulle part, sans verbe ni sujet ! C'est strictement interdit.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/** Écran 3 : Les Deux Zéros (Rond vs Ovale) */
const TwoSifrVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [sifrType, setSifrType] = useState<'oval' | 'round'>('oval');
  const [ovalMode, setOvalMode] = useState<'continue' | 'stop'>('continue');

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-5">
      <div className="flex justify-center mb-4">
        <div className="segmented">
          <button
            onClick={() => setSifrType('oval')}
            aria-pressed={sifrType === 'oval'}
          >
            Ovale Allongé (۠ - Les 7 Alifs)
          </button>
          <button
            onClick={() => setSifrType('round')}
            aria-pressed={sifrType === 'round'}
          >
            Cercle Rond (ْ - 100% Muet)
          </button>
        </div>
      </div>

      {sifrType === 'oval' ? (
        <div className="p-6 rounded-2xl bg-card border border-line space-y-4">
          <div className="label text-center">As-Sifr Al-Mustatīl (الصِّفْرُ المُسْتَطِيلُ ۠) — Les 7 Alifs</div>

          <div className="font-ar text-4xl sm:text-5xl text-center text-ink my-2 leading-[1.8]" dir="rtl">
            <span>قَالَ </span>
            <span className="text-gold font-bold underline decoration-gold/60">أَنَا۠</span>
            <span> خَيۡرٞ مِّنۡهُ</span>
          </div>

          <div className="flex justify-center gap-2 pt-1">
            <button
              onClick={() => setOvalMode('continue')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                ovalMode === 'continue' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              1. Récitation en continu (Wasl)
            </button>
            <button
              onClick={() => setOvalMode('stop')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                ovalMode === 'stop' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              2. Arrêt sur le mot (Waqf)
            </button>
          </div>

          <div className="p-4 rounded-xl bg-soft text-sm">
            {ovalMode === 'continue' ? (
              <div>
                <span className="font-semibold text-ink block mb-1">En continu : L'Alif est ANNULÉ</span>
                <p className="text-muted leading-relaxed">
                  On prononce uniquement la voyelle courte : <strong className="text-ink">« Qāla Ana Khayr »</strong> (sans allonger le son "na").
                </p>
              </div>
            ) : (
              <div>
                <span className="font-semibold text-good block mb-1">À l'arrêt : L'Alif REPREND VIE (2 temps)</span>
                <p className="text-muted leading-relaxed">
                  Si le souffle manque et qu'on s'arrête sur le mot, on prononce un Alif long complet : <strong className="text-good">« Qāla Anā »</strong> (2 temps de Madd).
                </p>
              </div>
            )}
          </div>

          <div className="p-3 rounded-xl bg-gilt-soft/60 border border-gilt/20 text-xs text-ink">
            <strong>Les 7 Alifs célèbres :</strong> أَنَا۠, لَّٰكِنَّا۠, ٱلظُّنُونَا۠, ٱلرَّسُولَا۠, ٱلسَّبِيلَا۠, قَوَارِيرَا۠, سَلَٰسِلَا۠.
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-card border border-line space-y-4">
          <div className="label text-center">As-Sifr Al-Mustadīr (الصِّفْرُ المُسْتَدِيرُ ْ) — Annulation Totale</div>

          <div className="font-ar text-4xl sm:text-5xl text-center text-ink my-2 leading-[1.8]" dir="rtl">
            <span>يَفۡرَحُو</span>
            <span className="text-bad font-bold line-through decoration-bad">اْ</span>
          </div>

          <div className="p-4 rounded-xl bg-bad-bg border border-bad/20 text-sm">
            <span className="font-semibold text-bad block mb-1">Règle d'or : 100% Inexistant à l'oral</span>
            <p className="text-muted leading-relaxed">
              Le cercle rond parfait indique que la lettre est purement orthographique. On lit <strong className="text-ink">« Yafrahū »</strong> sans jamais prononcer le Alif, que l'on continue ou que l'on s'arrête !
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-soft">
              <span className="font-ar text-xl block text-ink" dir="rtl">مِاْئَةَ</span>
              <span className="text-muted">Se lit « Mi'ah »</span>
            </div>
            <div className="p-2.5 rounded-xl bg-soft">
              <span className="font-ar text-xl block text-ink" dir="rtl">لَأَاْذۡبَحَنَّهُۥ</span>
              <span className="text-muted">Se lit « La'adh-bahannahū »</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/** Écran 4 : La Saktah (Pause de 2 temps sans souffle) */
const SaktahVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 2400);
  };

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-5 text-center">
      <div className="label">Al-Kahf 18:1-2 — La Saktah (س) entre عِوَجَا et قَيِّمٗا</div>

      <div className="p-6 rounded-2xl bg-card border border-line shadow-xs space-y-4">
        <div className="font-ar text-3xl sm:text-4xl text-ink leading-[2]" dir="rtl">
          <span>وَلَمۡ يَجۡعَل لَّهُۥ </span>
          <span className="p-1 px-2.5 rounded-xl bg-izhar-bg text-izhar font-bold border border-izhar/40">
            عِوَجَاۜ ١
          </span>
          <span> </span>
          <span className="p-1 px-2.5 rounded-xl bg-soft text-ink font-bold">
            قَيِّمٗا
          </span>
        </div>

        <div className="relative max-w-xs mx-auto h-16 flex items-center justify-center">
          {isSimulating ? (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-izhar text-card flex items-center justify-center font-bold text-sm animate-ping">
                2t
              </div>
              <span className="text-xs text-izhar font-semibold animate-pulse">Silence sans respirer...</span>
            </div>
          ) : (
            <button onClick={runSimulation} className="btn btn-secondary text-xs">
              Simuler la pause silencieuse (2 temps)
            </button>
          )}
        </div>

        <div className="p-4 rounded-xl bg-good-bg border border-good/20 text-sm text-left">
          <span className="font-semibold text-good block mb-1">Pourquoi la Saktah est-elle obligatoire ici ?</span>
          <p className="text-muted leading-relaxed">
            « \'Iwajā » signifie « déviance » et « Qayyimā » signifie « d\'une droiture absolue ». Si l\'on liait sans silence, l\'auditeur pourrait croire que la déviance elle-même est qualifiée de droite ! La Saktah coupe la liaison sans couper la récitation.
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   CHAPITRE 3 : Mini-composants interactifs et didactiques (Waqf & Ibtidā')
   ========================================================================= */

/** Écran 1 : La règle universelle de l'arrêt sur Soukoûn */
const SukunTransformationVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWord, setSelectedWord] = useState<'alamin' | 'nastain' | 'khabir' | 'adhab'>('alamin');
  const [isStopping, setIsStopping] = useState(false);

  const wordsData = {
    alamin: {
      label: 'Fathah (ـَ)',
      waslText: 'ٱلۡعَٰلَمِينَ',
      waqfText: 'ٱلۡعَٰلَمِينْ',
      waslPhonetic: 'Al-\'Ālamīna (Fathah sur le Nūn)',
      waqfPhonetic: 'Al-\'Ālamīn (Soukoûn pur sur le Nūn)',
      surahRef: 'Al-Fātihah 1:2',
      ruleNotice: 'La Fathah disparaît totalement au profit d\'un Soukoûn pur.',
    },
    nastain: {
      label: 'Dammah (ـُ)',
      waslText: 'نَسۡتَعِينُ',
      waqfText: 'نَسۡتَعِينْ',
      waslPhonetic: 'Nasta\'īnu (Dammah sur le Nūn)',
      waqfPhonetic: 'Nasta\'īn (Soukoûn pur sur le Nūn)',
      surahRef: 'Al-Fātihah 1:5',
      ruleNotice: 'La Dammah s\'annule : interdiction de laisser traîner un son "ou".',
    },
    khabir: {
      label: 'Tanwīn Damm (ـٌ)',
      waslText: 'خَبِيرٞ',
      waqfText: 'خَبِيرْ',
      waslPhonetic: 'Khabīrun (Nunation avec Dammah)',
      waqfPhonetic: 'Khabīr (Soukoûn pur avec Râ\' amincie)',
      surahRef: 'Āl \'Imrān 3:153',
      ruleNotice: 'Le Tanwīn Damm perd son son "N" : AUCUN Madd \'Iwad ici !',
    },
    adhab: {
      label: 'Tanwīn Kasr (ـٍ)',
      waslText: 'عَذَابٍ',
      waqfText: 'عَذَابْ',
      waslPhonetic: '‘Adhābin (Nunation avec Kasrah)',
      waqfPhonetic: '‘Adhāb (Soukoûn pur + Qalqalah sur Bā\')',
      surahRef: 'Al-Baqarah 2:7',
      ruleNotice: 'Le Tanwīn Kasr disparaît et libère le rebond de Qalqalah sur le Bā\'.',
    },
  };

  const curr = wordsData[selectedWord];

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
        <button
          onClick={() => setSelectedWord('alamin')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'alamin' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ٱلۡعَٰلَمِينَ (Fathah)
        </button>
        <button
          onClick={() => setSelectedWord('nastain')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'nastain' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          نَسۡتَعِينُ (Dammah)
        </button>
        <button
          onClick={() => setSelectedWord('khabir')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'khabir' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          خَبِيرٞ (Tanwīn Damm)
        </button>
        <button
          onClick={() => setSelectedWord('adhab')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'adhab' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          عَذَابٍ (Tanwīn Kasr)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
        <div className="label">Simulation d'Arrêt (Waqf vs Wasl) — {curr.surahRef}</div>

        <div className="font-ar text-5xl sm:text-6xl text-ink my-3 leading-[1.8] transition-all" dir="rtl">
          {isStopping ? (
            <span className="text-good font-bold animate-pop">{curr.waqfText}</span>
          ) : (
            <span className="text-ink">{curr.waslText}</span>
          )}
        </div>

        <div className="flex justify-center">
          <div className="segmented">
            <button
              onClick={() => setIsStopping(false)}
              aria-pressed={!isStopping}
            >
              En continu (Wasl)
            </button>
            <button
              onClick={() => setIsStopping(true)}
              aria-pressed={isStopping}
            >
              À l'arrêt (Waqf)
            </button>
          </div>
        </div>

        <div className={`p-4 rounded-xl text-sm text-left transition-all ${
          isStopping ? 'bg-good-bg border border-good/30' : 'bg-soft border border-line'
        }`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-ink">
              {isStopping ? 'État acoustique à l\'arrêt (Waqf) :' : 'État acoustique en liaison (Wasl) :'}
            </span>
            <span className={`chip ${isStopping ? 'chip-idgham' : 'chip-gold'}`}>
              {isStopping ? 'Soukoûn Pur' : curr.label}
            </span>
          </div>
          <p className="text-muted leading-relaxed font-mono text-xs sm:text-sm">
            {isStopping ? curr.waqfPhonetic : curr.waslPhonetic}
          </p>
          <p className="text-xs text-muted mt-2 pt-2 border-t border-line/40">
            {curr.ruleNotice}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : Madd 'Iwad (Tanwīn Fath ➔ Alif de 2 temps) */
const MaddIwadVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWord, setSelectedWord] = useState<'qarara' | 'binaa' | 'maa'>('qarara');
  const [isWaqf, setIsWaqf] = useState(true);

  const wordMap = {
    qarara: {
      wasl: 'قَرَارٗا',
      waqf: 'قَرَارَا',
      surah: 'Ghāfir 40:64',
      withAlif: true,
      desc: 'Le Tanwīn Fath est écrit avec un Alif de soutien. À l\'arrêt, le son "an" s\'efface et devient un Alif naturel de 2 temps.',
    },
    binaa: {
      wasl: 'بِنَآءٗ',
      waqf: 'بِنَآءَا',
      surah: 'Ghāfir 40:64',
      withAlif: false,
      desc: 'Aucun Alif n\'est tracé après la Hamzah en calligraphie arabe ! Pourtant, à l\'oral, l\'arrêt exige obligatoirement 2 temps de Madd \'Iwad.',
    },
    maa: {
      wasl: 'مَآءً',
      waqf: 'مَآءَا',
      surah: 'An-Naba 78:14',
      withAlif: false,
      desc: 'Même règle universelle : « Mā\'an » devient à l\'arrêt « Mā\'ā » avec 2 temps de prolongation.',
    },
  };

  const curr = wordMap[selectedWord];

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedWord('qarara')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'qarara' ? 'bg-gold text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          قَرَارٗا (Avec Alif écrit)
        </button>
        <button
          onClick={() => setSelectedWord('binaa')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'binaa' ? 'bg-gold text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          بِنَآءٗ (Sans Alif écrit)
        </button>
        <button
          onClick={() => setSelectedWord('maa')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'maa' ? 'bg-gold text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          مَآءً (Hamzah)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
        <div className="label">Madd \'Iwad (مد العوض) — {curr.surah}</div>

        <div className="font-ar text-5xl sm:text-6xl text-ink my-2 leading-[1.8]" dir="rtl">
          {isWaqf ? (
            <span className="text-gold font-bold animate-pop">{curr.waqf}</span>
          ) : (
            <span className="text-ink">{curr.wasl}</span>
          )}
        </div>

        <div className="flex justify-center">
          <div className="segmented">
            <button onClick={() => setIsWaqf(false)} aria-pressed={!isWaqf}>
              En continu (Wasl)
            </button>
            <button onClick={() => setIsWaqf(true)} aria-pressed={isWaqf}>
              À l'arrêt (Waqf)
            </button>
          </div>
        </div>

        {isWaqf && (
          <div className="p-4 rounded-xl bg-gold-bg border border-gold/30 text-center animate-fade">
            <span className="text-xs uppercase tracking-wider font-semibold text-gold block mb-2">
              Chronomètre de prolongation (2 Harakāt)
            </span>
            <div className="flex justify-center items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-gold text-card font-bold flex items-center justify-center text-sm shadow-xs animate-bounce" style={{ animationDuration: '1s' }}>
                1
              </span>
              <span className="w-9 h-9 rounded-full bg-gold text-card font-bold flex items-center justify-center text-sm shadow-xs animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.2s' }}>
                2
              </span>
              <span className="text-xs text-muted font-medium ml-2">2 temps de voyelle complète [ā]</span>
            </div>
          </div>
        )}

        <div className="p-4 rounded-xl bg-soft border border-line text-sm text-left">
          <span className="font-semibold text-ink block mb-1">
            {isWaqf ? 'Prononciation à l\'arrêt (Madd \'Iwad) :' : 'Prononciation en continu (Wasl) :'}
          </span>
          <p className="text-muted leading-relaxed text-xs sm:text-sm">
            {curr.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 3 : La Tā' Marbūtah (ة ➔ هـ) */
const TaMarbutahVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWord, setSelectedWord] = useState<'rahmah' | 'salah' | 'jannat'>('rahmah');
  const [isWaqf, setIsWaqf] = useState(true);

  const wordData = {
    rahmah: {
      type: 'marbutah',
      title: 'Tā\' Marbūtah avec Tanwīn Fath (وَرَحۡمَةٗ)',
      waslText: 'وَرَحۡمَةٗ',
      waqfText: 'وَرَحۡمَهْ',
      waslPronunciation: 'Wa rahmatan (Tanwīn en continu)',
      waqfPronunciation: 'Wa rahmah (Hā\' avec Soukoûn)',
      trapAlert: 'PIÈGE MAJEUR : Malgré le Tanwīn Fath, il n\'y a AUCUN Madd \'Iwad ! Ne dites jamais "Rahmatā".',
      isTrap: true,
    },
    salah: {
      type: 'marbutah',
      title: 'Tā\' Marbūtah avec Fathah (ٱلصَّلَوٰةَ)',
      waslText: 'ٱلصَّلَوٰةَ',
      waqfText: 'ٱلصَّلَاهْ',
      waslPronunciation: 'As-Salāta (Fathah en continu)',
      waqfPronunciation: 'As-Salāh (Hā\' avec Soukoûn)',
      trapAlert: 'La Tā\' devient un souffle doux de Hā\' venant du bas de la gorge.',
      isTrap: false,
    },
    jannat: {
      type: 'maftuhah',
      title: 'Tā\' Maftūhah / Ouverte (جَنَّٰتٍ)',
      waslText: 'جَنَّٰتٍ',
      waqfText: 'جَنَّٰتْ',
      waslPronunciation: 'Jannātin (Tanwīn Kasr en continu)',
      waqfPronunciation: 'Jannāt (Tā\' Sākinah avec Hams)',
      trapAlert: 'DISTINCTION : La Tā\' ouverte (ت) NE DEVIENT PAS un Hā\' ! Elle reste un Tā\' avec un léger souffle (Hams).',
      isTrap: false,
    },
  };

  const curr = wordData[selectedWord];

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSelectedWord('rahmah')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'rahmah' ? 'bg-bad text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          وَرَحۡمَةٗ (Piège Tanwīn)
        </button>
        <button
          onClick={() => setSelectedWord('salah')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'salah' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ٱلصَّلَوٰةَ (Tā\' Marbūtah)
        </button>
        <button
          onClick={() => setSelectedWord('jannat')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'jannat' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          جَنَّٰتٍ (Tā\' Maftūhah)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
        <div className="label">{curr.title}</div>

        <div className="font-ar text-5xl sm:text-6xl text-ink my-2 leading-[1.8]" dir="rtl">
          {isWaqf ? (
            <span className={`${curr.isTrap ? 'text-bad' : 'text-good'} font-bold animate-pop`}>
              {curr.waqfText}
            </span>
          ) : (
            <span className="text-ink">{curr.waslText}</span>
          )}
        </div>

        <div className="flex justify-center">
          <div className="segmented">
            <button onClick={() => setIsWaqf(false)} aria-pressed={!isWaqf}>
              En continu (Wasl)
            </button>
            <button onClick={() => setIsWaqf(true)} aria-pressed={isWaqf}>
              À l'arrêt (Waqf)
            </button>
          </div>
        </div>

        <div className={`p-4 rounded-xl text-sm text-left ${
          curr.isTrap && isWaqf ? 'bg-bad-bg border border-bad/30' : 'bg-soft border border-line'
        }`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-ink">
              {isWaqf ? 'Résultat sonore à l\'arrêt :' : 'Résultat sonore en continu :'}
            </span>
            <span className={`chip ${isWaqf ? (curr.type === 'marbutah' ? 'chip-iqlab' : 'chip-izhar') : 'chip-gold'}`}>
              {isWaqf ? (curr.type === 'marbutah' ? 'Devient Hā\' (هْ)' : 'Reste Tā\' (تْ)') : 'Sonorité Tā\''}
            </span>
          </div>
          <p className="text-muted leading-relaxed font-mono text-xs sm:text-sm">
            {isWaqf ? curr.waqfPronunciation : curr.waslPronunciation}
          </p>
          <p className={`text-xs mt-2 pt-2 border-t border-line/40 font-medium ${
            curr.isTrap ? 'text-bad' : 'text-muted'
          }`}>
            {curr.trapAlert}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 4 : Reprise "Stop & Repeat" et le piège des citations (Āl 'Imrān 3:181) */
const StopAndRepeatVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeScenario, setActiveScenario] = useState<'danger' | 'safe' | 'ideal'>('danger');

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="label text-center">Āl \'Imrān 3:181 — Le piège fatal des citations tronquées</div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
        <div className="font-ar text-2xl sm:text-3xl text-ink leading-[2.2]" dir="rtl">
          <span>لَّقَدۡ سَمِعَ ٱللَّهُ </span>
          <span className={`px-2 py-0.5 rounded-lg transition-all ${
            activeScenario === 'ideal' ? 'bg-gold/30 text-gold font-bold underline' : ''
          }`}>
            قَوۡلَ ٱلَّذِينَ
          </span>
          <span> </span>
          <span className={`px-2 py-0.5 rounded-lg transition-all ${
            activeScenario === 'safe' || activeScenario === 'ideal' ? 'bg-good-bg text-good font-bold underline' : 'bg-bad-bg text-bad line-through'
          }`}>
            قَالُوٓاْ
          </span>
          <span> </span>
          <span className={`px-2 py-0.5 rounded-lg transition-all ${
            activeScenario === 'danger' ? 'bg-bad text-card font-bold' : 'text-muted'
          }`}>
            إِنَّ ٱللَّهَ فَقِيرٞ
          </span>
          <span> وَنَحۡنُ أَغۡنِيَآءُ</span>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setActiveScenario('danger')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeScenario === 'danger' ? 'bg-bad text-card shadow-xs' : 'bg-soft text-bad hover:bg-bad-bg'
            }`}
          >
            Reprise sur « Inna Allāh » (Interdit)
          </button>
          <button
            onClick={() => setActiveScenario('safe')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeScenario === 'safe' ? 'bg-good text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            Recul sur « Qālū » (Valide)
          </button>
          <button
            onClick={() => setActiveScenario('ideal')}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeScenario === 'ideal' ? 'bg-gold text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            Recul sur « Qawla » (Idéal)
          </button>
        </div>

        <div className={`p-4 rounded-xl text-sm text-left ${
          activeScenario === 'danger'
            ? 'bg-bad-bg border border-bad/30'
            : activeScenario === 'safe'
            ? 'bg-good-bg border border-good/30'
            : 'bg-gold-bg border border-gold/30'
        }`}>
          {activeScenario === 'danger' && (
            <div>
              <span className="font-semibold text-bad block mb-1">Péril Théologique Majeur (Ibtidā\' Qabīh) :</span>
              <p className="text-muted leading-relaxed text-xs sm:text-sm">
                Si vous reprenez par <strong className="text-bad">« Inna Allāha faqīr »</strong> (Certes Allah est pauvre), vous proférez une parole de mécréance pure en affirmant que Dieu est indigent !
                <br />
                <span className="text-bad font-medium">Cette phrase n\'est vraie que parce qu\'elle est précédée du verbe « Qālū » (ils ont dit). Ne commencez JAMAIS ici !</span>
              </p>
            </div>
          )}
          {activeScenario === 'safe' && (
            <div>
              <span className="font-semibold text-good block mb-1">Règle « Stop & Repeat » Respectée :</span>
              <p className="text-muted leading-relaxed text-xs sm:text-sm">
                En reculant pour reprendre : <strong className="text-good">« Qālū inna Allāha faqīr... »</strong>, vous précisez immédiatement à l\'auditeur qu\'il s\'agit d\'une citation des négateurs et non de votre propre foi.
              </p>
            </div>
          )}
          {activeScenario === 'ideal' && (
            <div>
              <span className="font-semibold text-gold block mb-1">Reprise Parfaite & Maîtrise Ultime :</span>
              <p className="text-muted leading-relaxed text-xs sm:text-sm">
                Reprendre depuis <strong className="text-gold">« Qawla-lladhīna qālū... »</strong> (les propos de ceux qui ont dit) offre une phrase syntaxiquement et théologiquement parfaite avec le verbe initial.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   CHAPITRE 4 : Mini-composants interactifs et didactiques (Madd I)
   ========================================================================= */

/** Écran 1 : Le décortiqueur de la formule sacrée « Nūhīhā » (نُوحِيهَا) */
const NuhihaBreakdownVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activePart, setActivePart] = useState<'all' | 'nu' | 'hi' | 'ha'>('all');

  const partDetails = {
    all: {
      label: 'La Clé Universelle des 3 Madds (Hūd 11:49)',
      badge: 'Formule Complète',
      badgeClass: 'chip-idgham',
      arabic: 'نُوحِيهَآ',
      phonetic: 'Nū - hī - hā',
      desc: 'Ce mot coranique unique réunit les 3 lettres de Madd avec leurs 3 voyelles homogènes obligatoires dans l\'ordre.',
    },
    nu: {
      label: '1ère lettre : Le Wāw Sākin précédé de Dammah',
      badge: 'ـُ + و (Dammah + Wāw)',
      badgeClass: 'chip-gold',
      arabic: 'نُو',
      phonetic: 'Nūn + Dammah + Wāw ➔ [nū] (2 temps)',
      desc: 'Le Wāw ne porte aucun signe. La Dammah sur le Nūn prépare les lèvres arrondies pour prolonger le son [ū] sur 2 temps.',
    },
    hi: {
      label: '2ème lettre : Le Yā\' Sākin précédé de Kasrah',
      badge: 'ـِ + ي (Kasrah + Yā\')',
      badgeClass: 'chip-izhar',
      arabic: 'حِي',
      phonetic: 'Hā\' + Kasrah + Yā\' ➔ [hī] (2 temps)',
      desc: 'Le Yā\' est sans voyelle. La Kasrah sous le Hā\' abaisse la mâchoire pour prolonger le son [ī] sur 2 temps.',
    },
    ha: {
      label: '3ème lettre : Le Alif Sākin précédé de Fathah',
      badge: 'ـَ + ا (Fathah + Alif)',
      badgeClass: 'chip-iqlab',
      arabic: 'هَا',
      phonetic: 'Hā\' + Fathah + Alif ➔ [hā] (2 temps)',
      desc: 'L\'Alif est TOUJOURS précédé d\'une Fathah. La bouche s\'ouvre verticalement pour un son [ā] pur de 2 temps.',
    },
  };

  const curr = partDetails[activePart];

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
        <button
          onClick={() => setActivePart('all')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activePart === 'all' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          نُوحِيهَآ (Tout)
        </button>
        <button
          onClick={() => setActivePart('nu')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activePart === 'nu' ? 'bg-gold text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          نُو (Wāw)
        </button>
        <button
          onClick={() => setActivePart('hi')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activePart === 'hi' ? 'bg-izhar text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          حِي (Yā\')
        </button>
        <button
          onClick={() => setActivePart('ha')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activePart === 'ha' ? 'bg-iqlab text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          هَا (Alif)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
        <div className="label">{curr.label}</div>

        <div className="font-ar text-5xl sm:text-6xl text-ink my-2 leading-[1.8] transition-all" dir="rtl">
          {activePart === 'all' ? (
            <span>
              <span className="text-gold font-bold">نُو</span>
              <span className="text-izhar font-bold">حِي</span>
              <span className="text-iqlab font-bold">هَا</span>
            </span>
          ) : (
            <span className="text-lapis font-bold animate-pop">{curr.arabic}</span>
          )}
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className={`chip ${curr.badgeClass}`}>{curr.badge}</span>
          <span className="text-xs font-mono text-muted">{curr.phonetic}</span>
        </div>

        <div className="p-4 rounded-xl bg-soft border border-line text-xs sm:text-sm text-left">
          <p className="text-muted leading-relaxed">{curr.desc}</p>
        </div>

        {/* Miniature Rasm Uthmani symbols */}
        <div className="pt-3 border-t border-line/60">
          <span className="text-xs uppercase tracking-wider font-semibold text-muted block mb-2">
            Équivalents miniatures en Rasm 'Uthmānī
          </span>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded-xl bg-card border border-line">
              <span className="font-ar text-2xl text-ink block" dir="rtl">مَٰلِكِ</span>
              <span className="text-muted font-medium">Alif Khanjariyyah (ٰ)</span>
            </div>
            <div className="p-2 rounded-xl bg-card border border-line">
              <span className="font-ar text-2xl text-ink block" dir="rtl">يَلۡوُۥنَ</span>
              <span className="text-muted font-medium">Petit Wāw (ۥ)</span>
            </div>
            <div className="p-2 rounded-xl bg-card border border-line">
              <span className="font-ar text-2xl text-ink block" dir="rtl">إِۦلَٰفِهِمۡ</span>
              <span className="text-muted font-medium">Petit Yā' (ۦ)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : Le Chronomètre des 2 Harakāt & Le Péril du Lahn Jalī */
const MaddTabiiDurationVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeTab, setActiveTab] = useState<'chrono' | 'lahn'>('lahn');

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="flex justify-center">
        <div className="segmented">
          <button
            onClick={() => setActiveTab('lahn')}
            aria-pressed={activeTab === 'lahn'}
          >
            Le Péril du Lahn Jalī (أَخَذۡنَا)
          </button>
          <button
            onClick={() => setActiveTab('chrono')}
            aria-pressed={activeTab === 'chrono'}
          >
            Mesure des 2 Harakāt (بَا)
          </button>
        </div>
      </div>

      {activeTab === 'lahn' ? (
        <div className="p-6 rounded-2xl bg-card border border-line space-y-4">
          <div className="label text-center">At-Tawbah 9:50 — Comment une voyelle tronquée inverse le sens</div>

          <div className="grid sm:grid-cols-2 gap-3 text-center">
            {/* Correct */}
            <div className="p-4 rounded-xl bg-good-bg border border-good/40 space-y-2">
              <span className="chip chip-idgham text-xs">2 Temps : Conforme (Sunnah)</span>
              <div className="font-ar text-3xl sm:text-4xl text-good font-bold my-1" dir="rtl">
                أَخَذۡنَآ أَمۡرَنَا
              </div>
              <p className="text-xs text-ink font-semibold">« Nous avons pris notre affaire »</p>
              <p className="text-[11px] text-muted">
                Pronom pluriel <strong className="text-good">نَا (Nā)</strong> : 2 temps de Madd obligatoires.
              </p>
            </div>

            {/* Error */}
            <div className="p-4 rounded-xl bg-bad-bg border border-bad/40 space-y-2">
              <span className="chip chip-qalqalah text-xs">1 Temps : Lahn Jalī (Harām)</span>
              <div className="font-ar text-3xl sm:text-4xl text-bad font-bold my-1 line-through" dir="rtl">
                أَخَذۡنَ أَمۡرَنَا
              </div>
              <p className="text-xs text-bad font-semibold">« Les femmes ont pris notre affaire »</p>
              <p className="text-[11px] text-muted">
                Tronquer l'Alif crée le <strong className="text-bad">Nūn an-Niswah</strong> : grave contresens !
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-soft border border-line text-xs sm:text-sm text-left">
            <span className="font-semibold text-ink block mb-1">Règle d'or de l'Imām :</span>
            <p className="text-muted leading-relaxed">
              Le Madd Naturel ne doit jamais descendre en dessous de 2 temps sous prétexte de vitesse, ni être sur-étiré à 4 ou 6 temps sans cause de Hamzah ou de Soukoûn.
            </p>
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
          <div className="label">Étalonnage du temps de maintien sonore</div>

          <div className="font-ar text-6xl text-ink my-2 leading-[1.8]" dir="rtl">
            بَا <span className="text-muted text-3xl font-sans">=</span> بَ + بَ
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-gold text-card font-display text-xl flex items-center justify-center font-bold shadow-xs animate-bounce" style={{ animationDuration: '1s' }}>
                1
              </div>
              <span className="text-xs font-mono text-muted">1ère Harakah (0.5s)</span>
            </div>
            <span className="text-muted text-2xl font-bold">+</span>
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-gold text-card font-display text-xl flex items-center justify-center font-bold shadow-xs animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.2s' }}>
                2
              </div>
              <span className="text-xs font-mono text-muted">2ème Harakah (0.5s)</span>
            </div>
          </div>

          <p className="text-xs text-muted max-w-sm mx-auto leading-relaxed mt-2">
            1 Harakah = temps de prononciation d'une lettre courte (ex: « Ba »).<br />
            2 Harakāt = temps de prononciation de « Bā » (environ 1 seconde à tempo modéré).
          </p>
        </div>
      )}
    </div>
  );
};

/** Écran 3 : Comparateur Madd vs Līn (حَرْفَا اللِّينِ) */
const MaddVsLeenVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeCategory, setActiveCategory] = useState<'madd' | 'leen'>('leen');

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="flex justify-center">
        <div className="segmented">
          <button
            onClick={() => setActiveCategory('leen')}
            aria-pressed={activeCategory === 'leen'}
          >
            Lettres de Līn (حَرْفَا اللِّينِ)
          </button>
          <button
            onClick={() => setActiveCategory('madd')}
            aria-pressed={activeCategory === 'madd'}
          >
            Lettres de Madd (حُرُوفُ المَدِّ)
          </button>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line space-y-4 text-center">
        {activeCategory === 'leen' ? (
          <div className="space-y-4 animate-fade">
            <div className="label">Wāw (و) & Yā' (ي) Sākinah précédés d'une FATHAH (ـَ)</div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-soft border border-line">
                <span className="font-ar text-4xl text-ink block mb-1" dir="rtl">قُرَيۡشٍ</span>
                <span className="text-xs font-semibold text-iqlab">Yā' précédé de Fathah</span>
                <span className="text-[11px] text-muted block mt-1">« Quraysh » : glissement doux sans Madd en continu</span>
              </div>
              <div className="p-4 rounded-xl bg-soft border border-line">
                <span className="font-ar text-4xl text-ink block mb-1" dir="rtl">خَوۡفٖ</span>
                <span className="text-xs font-semibold text-iqlab">Wāw précédé de Fathah</span>
                <span className="text-[11px] text-muted block mt-1">« Khawf » : prononciation souple sans allongement</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-iqlab-bg border border-iqlab/30 text-xs text-left">
              <span className="font-semibold text-iqlab block mb-1">Règle absolue du Līn :</span>
              <p className="text-muted leading-relaxed">
                En lecture continue (Wasl), les lettres de Līn ne reçoivent <strong>AUCUN MADD</strong> ! L'Alif ne peut JAMAIS être une lettre de Līn car il est toujours précédé de sa propre voyelle (Fathah).
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 animate-fade">
            <div className="label">Les 3 Voyelles Longues Homogènes (نُوحِيهَا)</div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-xl bg-soft border border-line">
                <span className="font-ar text-3xl text-ink block" dir="rtl">قَالُواْ</span>
                <span className="text-[11px] text-gold font-medium">Alif + Wāw (2 temps)</span>
              </div>
              <div className="p-3 rounded-xl bg-soft border border-line">
                <span className="font-ar text-3xl text-ink block" dir="rtl">قِيلَ</span>
                <span className="text-[11px] text-izhar font-medium">Yā' (2 temps)</span>
              </div>
              <div className="p-3 rounded-xl bg-soft border border-line">
                <span className="font-ar text-3xl text-ink block" dir="rtl">يَقُولُ</span>
                <span className="text-[11px] text-idgham font-medium">Wāw (2 temps)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-soft border border-line text-xs text-left">
              <span className="font-semibold text-ink block mb-1">Règle du Madd Naturel :</span>
              <p className="text-muted leading-relaxed">
                Chaque lettre de Madd est précédée de sa voyelle sœur (ـُ avant و, ـِ avant ي, ـَ avant ا) et exige exactement 2 temps réguliers.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/** Écran 4 : Les mots caméléons هُوَ et هِيَ à l'arrêt */
const HuwaHiyaWaqfVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWord, setSelectedWord] = useState<'huwa' | 'hiya' | 'maiya'>('huwa');
  const [isWaqf, setIsWaqf] = useState(false);

  const wordData = {
    huwa: {
      title: 'Le mot « Huwa » (هُوَ) — Sūrah At-Tawbah 9:31',
      waslText: 'لَّآ إِلَٰهَ إِلَّا هُوَۚ سُبۡحَٰنَهُۥ',
      waqfText: 'لَّآ إِلَٰهَ إِلَّا هُو',
      waslPronunciation: 'Illā Huwa (Wāw consonne avec Fathah ➔ Pas de Madd)',
      waqfPronunciation: 'Illā Hū (Le Wāw devient Soukoûn précédé de Dammah ➔ Madd 2 temps !)',
      notice: 'À l\'arrêt d\'urgence, la Fathah devient Soukoûn : le Wāw devient alors une lettre de Madd à part entière !',
    },
    hiya: {
      title: 'Le mot « Hiya » (هِيَ) — Sūrah Al-Qāri\'ah 101:10',
      waslText: 'وَمَآ أَدۡرَىٰكَ مَا هِيَهۡ',
      waqfText: 'مَا هِي',
      waslPronunciation: 'Mā Hiya (Yā\' consonne avec Fathah)',
      waqfPronunciation: 'Mā Hī (Le Yā\' devient Soukoûn précédé de Kasrah ➔ Madd 2 temps !)',
      notice: 'Même métamorphose : le Yā\' s\'allonge de 2 temps complets à l\'arrêt.',
    },
    maiya: {
      title: 'Le mot « Ma\'iya » (مَعِيَ) — Sūrah At-Tawbah 9:83',
      waslText: 'لَّن تَخۡرُجُواْ مَعِىَ أَبَدٗا',
      waqfText: 'لَّن تَخۡرُجُواْ مَعِي',
      waslPronunciation: 'Ma\'iya abadā (Yā\' avec Fathah)',
      waqfPronunciation: 'Ma\'ī (Yā\' avec Soukoûn ➔ Madd de 2 temps)',
      notice: 'Le pronom possessif retrouve sa pleine prolongation de 2 temps.',
    },
  };

  const curr = wordData[selectedWord];

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedWord('huwa')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'huwa' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          هُوَ (Huwa ➔ Hū)
        </button>
        <button
          onClick={() => setSelectedWord('hiya')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'hiya' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          هِيَ (Hiya ➔ Hī)
        </button>
        <button
          onClick={() => setSelectedWord('maiya')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'maiya' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          مَعِيَ (Ma\'iya ➔ Ma\'ī)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
        <div className="label">{curr.title}</div>

        <div className="font-ar text-4xl sm:text-5xl text-ink my-2 leading-[1.8]" dir="rtl">
          {isWaqf ? (
            <span className="text-good font-bold animate-pop">{curr.waqfText}</span>
          ) : (
            <span className="text-ink">{curr.waslText}</span>
          )}
        </div>

        <div className="flex justify-center">
          <div className="segmented">
            <button onClick={() => setIsWaqf(false)} aria-pressed={!isWaqf}>
              En continu (Wasl)
            </button>
            <button onClick={() => setIsWaqf(true)} aria-pressed={isWaqf}>
              À l'arrêt (Waqf)
            </button>
          </div>
        </div>

        <div className={`p-4 rounded-xl text-xs sm:text-sm text-left ${
          isWaqf ? 'bg-good-bg border border-good/30' : 'bg-soft border border-line'
        }`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-ink">
              {isWaqf ? 'Prononciation à l\'arrêt (Waqf) :' : 'Prononciation en liaison (Wasl) :'}
            </span>
            <span className={`chip ${isWaqf ? 'chip-idgham' : 'chip-gold'}`}>
              {isWaqf ? 'Madd Naturel (2 temps)' : 'Consonne vocalisée'}
            </span>
          </div>
          <p className="text-muted leading-relaxed font-mono text-xs">
            {isWaqf ? curr.waqfPronunciation : curr.waslPronunciation}
          </p>
          <p className="text-xs text-muted mt-2 pt-2 border-t border-line/40">
            {curr.notice}
          </p>
        </div>
      </div>
    </div>
  );
};

/** =========================================================================
 * CHAPITRE 5 : LES PROLONGATIONS II (MADD SECONDAIRE / FAR'Ī)
 * ========================================================================= */

/** Écran 1 : Muttasil (Même mot) vs Munfasil (Mots séparés) */
const MuttasilMunfasilVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedType, setSelectedType] = useState<'muttasil' | 'munfasil'>('muttasil');
  const [isWaqf, setIsWaqf] = useState(false);

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      {/* Category selector */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => { setSelectedType('muttasil'); setIsWaqf(false); }}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedType === 'muttasil' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          Madd Muttasil (المتصل - Même Mot)
        </button>
        <button
          onClick={() => { setSelectedType('munfasil'); setIsWaqf(false); }}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedType === 'munfasil' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          Madd Munfasil (المنفصل - Deux Mots)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
        {selectedType === 'muttasil' ? (
          <div className="space-y-4 animate-fade">
            <div className="label">Madd Wājib Muttasil (المَدُّ الوَاجِبُ المُتَّصِلُ)</div>

            <div className="font-ar text-4xl sm:text-5xl text-ink my-2 leading-[1.8]" dir="rtl">
              <span className="text-gold font-bold">ٱلسَّمَآءَ</span>
            </div>

            <div className="flex justify-center">
              <div className="segmented">
                <button onClick={() => setIsWaqf(false)} aria-pressed={!isWaqf}>
                  En continu (Wasl)
                </button>
                <button onClick={() => setIsWaqf(true)} aria-pressed={isWaqf}>
                  À l'arrêt (Waqf sur Hamzah)
                </button>
              </div>
            </div>

            {/* Counts visualization */}
            <div className="p-4 rounded-xl bg-gold-bg border border-gold/30 text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ink">
                  {isWaqf ? 'Durée à l\'arrêt sur « As-Samā\' » :' : 'Durée en liaison continue :'}
                </span>
                <span className="chip chip-gold font-bold">
                  {isWaqf ? '4, 5 ou 6 Temps' : '4 ou 5 Temps Obligatoires'}
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {isWaqf
                  ? 'La Hamzah et le Alif restent scellés dans le même mot. À l\'arrêt sur la Hamzah terminale, vous pouvez maintenir 4 ou 5 temps, ou monter jusqu\'à 6 temps en raison du Soukoûn incident.'
                  : 'Statut Wājib (Obligatoire) : tous les maîtres du Tajwīd s\'accordent sur l\'obligation d\'allonger à 4 ou 5 pulsations. Le réduire à 2 temps est un Lahn Khafī !'}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 animate-fade">
            <div className="label">Madd Jā'iz Munfasil (المَدُّ الجَائِزُ المُنْفَصِلُ)</div>

            <div className="font-ar text-3xl sm:text-4xl text-ink my-2 leading-[1.8]" dir="rtl">
              {isWaqf ? (
                <span>
                  <span className="text-idgham font-bold">بِمَا</span>{' '}
                  <span className="text-muted/40 line-through">أُنزِلَ</span>
                </span>
              ) : (
                <span>
                  <span className="text-idgham font-bold">بِمَآ</span>{' '}
                  <span className="text-ink">أُنزِلَ</span>
                </span>
              )}
            </div>

            <div className="flex justify-center">
              <div className="segmented">
                <button onClick={() => setIsWaqf(false)} aria-pressed={!isWaqf}>
                  En continu (Wasl)
                </button>
                <button onClick={() => setIsWaqf(true)} aria-pressed={isWaqf}>
                  Arrêt d'urgence sur « Bimā »
                </button>
              </div>
            </div>

            {/* Counts visualization */}
            <div className={`p-4 rounded-xl border text-left space-y-2 ${
              isWaqf ? 'bg-soft border-line' : 'bg-idgham-bg border-idgham/30'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ink">
                  {isWaqf ? 'Durée à l\'arrêt sur « Bimā » :' : 'Durée en liaison continue :'}
                </span>
                <span className={`chip ${isWaqf ? 'chip-izhar' : 'chip-idgham'} font-bold`}>
                  {isWaqf ? '2 Temps Seulement (Madd Naturel)' : '4 ou 5 Temps Permis (Hafs)'}
                </span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {isWaqf
                  ? 'RÈGLE CRUCIALE : En coupant sur « Bimā », la Hamzah du mot suivant disparaît de la récitation ! La cause du Madd s\'évanouissant, le mot redevient un Madd Naturel strict de 2 temps.'
                  : 'En liaison continue, la lettre de Madd rencontre la Hamzah du mot suivant : selon la voie d\'Ash-Shātibiyyah (Hafs), vous devez prolonger de 4 ou 5 temps.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/** Écran 2 : Métronome des 6 temps du Madd Lāzim (ٱلضَّآلِّينَ) */
const MaddLazimMetronomeVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeWord, setActiveWord] = useState<'dallin' | 'alan'>('dallin');
  const [beatCount, setBeatCount] = useState(6);

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      {/* Word toggle */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setActiveWord('dallin')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeWord === 'dallin' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ٱلضَّآلِّينَ (Lāzim Muthaqqal / Lourd)
        </button>
        <button
          onClick={() => setActiveWord('alan')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeWord === 'alan' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ءَآلۡـَٰٔنَ (Lāzim Mukhaffaf / Léger)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-5">
        <div className="label">
          {activeWord === 'dallin'
            ? 'Al-Fātihah 1:7 — Madd Lāzim Kalimī Muthaqqal'
            : 'Yūnus 10:51, 91 — Madd Lāzim Kalimī Mukhaffaf'}
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink my-1 leading-[1.8]" dir="rtl">
          {activeWord === 'dallin' ? (
            <span>
              وَلَا <span className="text-bad font-bold">ٱلضَّآلِّينَ</span>
            </span>
          ) : (
            <span>
              <span className="text-bad font-bold">ءَآلۡـَٰٔنَ</span> وَقَدۡ كُنتُم
            </span>
          )}
        </div>

        {/* 6 Beats Visual Track */}
        <div className="p-4 rounded-xl bg-soft border border-line space-y-3">
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="font-medium text-ink">Métronome des 6 Harakāt incompressibles</span>
            <span className="font-mono font-bold text-bad">6 Temps Obligatoires</span>
          </div>

          <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
            {[1, 2, 3, 4, 5, 6].map((beat) => (
              <button
                key={beat}
                onClick={() => setBeatCount(beat)}
                className={`py-2 rounded-xl text-center font-display text-sm font-bold transition-all ${
                  beat <= beatCount
                    ? 'bg-bad text-white shadow-xs scale-105'
                    : 'bg-card text-muted border border-line'
                }`}
              >
                {beat}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-muted text-center">
            {activeWord === 'dallin'
              ? 'Temps 1 à 6 : étirement régulier du Alif ➔ Au 6e temps : Ancrage ferme sur le Lām avec Shaddah (Nabrah) !'
              : 'Temps 1 à 6 : étirement sur le Alif ➔ Fin sur un simple Soukoûn sans Shaddah (Mukhaffaf).'}
          </div>
        </div>

        {/* Breakdown box */}
        <div className="p-4 rounded-xl bg-bad-bg/60 border border-bad/30 text-left space-y-2 text-xs">
          <span className="font-semibold text-bad block">
            {activeWord === 'dallin'
              ? 'Le Nabrah (النبرة) sur la Shaddah :'
              : 'Unicité coranique de « Āl-āna » :'}
          </span>
          <p className="text-muted leading-relaxed">
            {activeWord === 'dallin'
              ? 'Le piège fatal dans la Fātihah est d\'amortir les 6 temps en laissant s\'éteindre la voix sans appuyer sur le Lām. Vous devez exercer une pression musculaire de la langue (Nabrah) à la fin des 6 battements pour faire claquer le double Lām !'
              : 'C\'est le SEUL et unique mot de tout le Saint Coran contenant un Madd Lāzim Kalimī Mukhaffaf (suivi d\'une Lām Sākinah sans Shaddah).'}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 3 : La Règle d'Or de la Cohérence (Al-Mīzān) sur le Madd 'Ārid li-s-Sukūn */
const MaddAridConsistencyVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedPace, setSelectedPace] = useState<2 | 4 | 6>(4);

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="label text-center">Choisissez votre cadence pour la Sourate Al-Fātihah</div>

      {/* Pace buttons */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedPace(2)}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedPace === 2 ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          2 Temps (Al-Qasr / Rapide)
        </button>
        <button
          onClick={() => setSelectedPace(4)}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedPace === 4 ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          4 Temps (At-Tawassut / Recommandé)
        </button>
        <button
          onClick={() => setSelectedPace(6)}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedPace === 6 ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          6 Temps (At-Tūl / Méditatif)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line space-y-4">
        <div className="label text-center">Synchronisation des Fins de Versets (Al-Mīzān)</div>

        {/* 3 Synchronized Verses */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-soft border border-line flex items-center justify-between gap-3">
            <span className="ref-tag text-xs">Verset 2</span>
            <div className="font-ar text-2xl sm:text-3xl text-ink" dir="rtl">
              رَبِّ <span className="text-good font-bold">ٱلۡعَٰلَمِينَ</span>
            </div>
            <span className="chip chip-gold text-xs font-mono font-bold">{selectedPace} Temps</span>
          </div>

          <div className="p-3.5 rounded-xl bg-soft border border-line flex items-center justify-between gap-3">
            <span className="ref-tag text-xs">Verset 3</span>
            <div className="font-ar text-2xl sm:text-3xl text-ink" dir="rtl">
              ٱلرَّحۡمَٰنِ <span className="text-good font-bold">ٱلرَّحِيمِ</span>
            </div>
            <span className="chip chip-gold text-xs font-mono font-bold">{selectedPace} Temps</span>
          </div>

          <div className="p-3.5 rounded-xl bg-soft border border-line flex items-center justify-between gap-3">
            <span className="ref-tag text-xs">Verset 4</span>
            <div className="font-ar text-2xl sm:text-3xl text-ink" dir="rtl">
              مَٰلِكِ يَوۡمِ <span className="text-good font-bold">ٱلدِّينِ</span>
            </div>
            <span className="chip chip-gold text-xs font-mono font-bold">{selectedPace} Temps</span>
          </div>
        </div>

        {/* Golden rule alert */}
        <div className="p-4 rounded-xl bg-good-bg border border-good/30 text-left space-y-1.5 text-xs">
          <span className="font-semibold text-good block">Principe de la Balance (مِيزَانُ التِّلَاوَةِ) :</span>
          <p className="text-muted leading-relaxed">
            « Le semblable en sa matière doit être égal à son semblable » (وَاللَّفْظُ فِي نَظِيرِهِ كَمِثْلِهِ).
            Si vous commencez votre prière avec 4 temps sur « Al-'Ālamīn », vous DEVEZ clore tous vos versets suivants sur 4 temps ! Varier anarchiquement est un défaut d'esthétique (Lahn Khafī).
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 4 : Le Laboratoire du Madd Līn (Wasl vs Waqf) */
const MaddLeenWaqfVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWord, setSelectedWord] = useState<'quraysh' | 'khawf'>('quraysh');
  const [isWaqf, setIsWaqf] = useState(false);

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      {/* Toggle word */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedWord('quraysh')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'quraysh' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          قُرَيۡشٍ (Yā' de Līn)
        </button>
        <button
          onClick={() => setSelectedWord('khawf')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'khawf' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          خَوۡفِۭ (Wāw de Līn)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
        <div className="label">
          {selectedWord === 'quraysh'
            ? 'Sūrah Quraysh 106:1 — Yā\' Sākin précédé de Fathah'
            : 'Sūrah Quraysh 106:4 — Wāw Sākin précédé de Fathah'}
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink my-2 leading-[1.8]" dir="rtl">
          {isWaqf ? (
            <span className="text-good font-bold animate-pop">
              {selectedWord === 'quraysh' ? 'قُرَيۡشْ' : 'خَوۡفْ'}
            </span>
          ) : (
            <span className="text-ink">
              {selectedWord === 'quraysh' ? 'لِإِيلَٰفِ قُرَيۡشٍ ١' : 'مِّنۡ خَوۡفِۭ ٤'}
            </span>
          )}
        </div>

        <div className="flex justify-center">
          <div className="segmented">
            <button onClick={() => setIsWaqf(false)} aria-pressed={!isWaqf}>
              En liaison (Wasl)
            </button>
            <button onClick={() => setIsWaqf(true)} aria-pressed={isWaqf}>
              À l'arrêt (Waqf)
            </button>
          </div>
        </div>

        {/* Dynamic analysis */}
        <div className={`p-4 rounded-xl border text-left space-y-2 ${
          isWaqf ? 'bg-good-bg border-good/30' : 'bg-soft border-line'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink">
              {isWaqf ? 'Statut du Madd à l\'arrêt :' : 'Statut en liaison continue :'}
            </span>
            <span className={`chip ${isWaqf ? 'chip-gold' : 'chip-izhar'} font-bold`}>
              {isWaqf ? 'Madd Līn (2, 4 ou 6 Temps)' : '0 Temps de Madd (Consonne douce)'}
            </span>
          </div>

          <p className="text-xs text-muted leading-relaxed">
            {isWaqf
              ? 'L\'arrêt immobilise la consonne finale avec un Soukoûn incident. La lettre de Līn se détend et s\'allonge librement de 2, 4 ou 6 temps au choix !'
              : 'En continuant la lecture, il est FORMELLEMENT INTERDIT d\'allonger la lettre de Līn ! La voyelle coule rapidement et sans heurt (« Li-īlāfi Qurayshin ilāfihim »).'}
          </p>

          <p className="text-[11px] text-muted pt-2 border-t border-line/40">
            ⚠️ Règle de proportionnalité : La durée du Madd Līn peut être égale ou inférieure au Madd 'Ārid, mais JAMAIS supérieure (si votre 'Ārid fait 4 temps, votre Līn fera 2 ou 4 temps, jamais 6).
          </p>
        </div>
      </div>
    </div>
  );
};

/** =========================================================================
 * CHAPITRE 6 : LES HAMZAHS (HAMZAT AL-WASL & AL-QAT')
 * ========================================================================= */

/** Écran 1 : Chute de Hamzat Al-Wasl en Wasl vs Maintien à l'Attaque */
const HamzatDropInWaslVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [isWasl, setIsWasl] = useState(true);

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="label text-center">Basculez entre Liaison continue et Attaque du mot</div>

      <div className="flex justify-center">
        <div className="segmented">
          <button onClick={() => setIsWasl(true)} aria-pressed={isWasl}>
            En liaison continue (Wasl)
          </button>
          <button onClick={() => setIsWasl(false)} aria-pressed={!isWasl}>
            Attaque sur le mot (Ibtidā')
          </button>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-5">
        <div className="label">
          {isWasl ? 'Al-Baqarah 2:158 — فَمَنۡ حَجَّ ٱلۡبَيۡتَ' : 'Attaque sur l\'article défini : ٱلۡبَيۡتُ'}
        </div>

        {/* Big Arabic display */}
        <div className="font-ar text-4xl sm:text-5xl text-ink my-2 leading-[1.8]" dir="rtl">
          {isWasl ? (
            <span>
              فَمَنۡ حَجَّ <span className="opacity-30 line-through text-muted">ٱ</span>
              <span className="text-good font-bold">لۡبَيۡتَ</span>
            </span>
          ) : (
            <span>
              <span className="text-good font-bold">اَلۡبَيۡتُ</span>
            </span>
          )}
        </div>

        {/* Phonetic transcription box */}
        <div className="p-3.5 rounded-xl bg-soft border border-line font-mono text-xs sm:text-sm text-center">
          {isWasl ? (
            <span>
              Prononciation : <strong className="text-ink">[ Faman hajja-l-bayta ]</strong> (Hamzat Wasl totalement élidée !)
            </span>
          ) : (
            <span>
              Prononciation : <strong className="text-ink">[ Al-Baytu ]</strong> (Hamzat Wasl prend une Fathah ouverte « A »)
            </span>
          )}
        </div>

        {/* Qat' vs Wasl contrast */}
        <div className="grid sm:grid-cols-2 gap-3 text-left text-xs">
          <div className="p-3.5 rounded-xl bg-good-bg border border-good/30">
            <span className="font-semibold text-good block mb-1">Hamzat Al-Wasl (ٱ) :</span>
            <p className="text-muted leading-relaxed">
              Surmontée d'un petit Sād (صـ). Elle n'existe que pour franchir le Soukoûn initial. Dès qu'un mot précède, elle s'efface totalement sans aucun coup de glotte.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-gold-bg border border-gold/30">
            <span className="font-semibold text-gold block mb-1">Hamzat Al-Qat' (ء) :</span>
            <p className="text-muted leading-relaxed">
              Toujours écrite (أَ, إِ, أُ). Elle est INVARIABLE et ne s'efface JAMAIS, ni en continu ni à l'arrêt (ex: « Innā », « Asābathum »).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : Le Scanner de la 3e Lettre des Verbes */
const VerbThirdLetterScannerVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedVerb, setSelectedVerb] = useState<'ud-u' | 'ihdina' | 'idh-hab'>('ud-u');

  const verbData = {
    'ud-u': {
      text: 'ٱدۡعُ',
      transcription: 'Ud\'u (اُدۡعُ)',
      surahRef: 'An-Nahl 16:125',
      letter1: { char: 'ٱ', label: '1: Wasl' },
      letter2: { char: 'دۡ', label: '2: Soukoûn' },
      letter3: { char: 'عُ', label: '3: Dammah !' },
      vowelOn3rd: 'Dammah (ـُ)',
      resultTashkeel: 'Dammah (اُ)',
      colorClass: 'chip-bad',
      ruleExplanation: 'La 3e lettre porte une Dammah originelle : Hamzat Al-Wasl reçoit impérativement une Dammah (« Ud\'u ») !',
    },
    'ihdina': {
      text: 'ٱهۡدِنَا',
      transcription: 'Ihdinā (اِهۡدِنَا)',
      surahRef: 'Al-Fātihah 1:6',
      letter1: { char: 'ٱ', label: '1: Wasl' },
      letter2: { char: 'هـۡ', label: '2: Soukoûn' },
      letter3: { char: 'دِ', label: '3: Kasrah !' },
      vowelOn3rd: 'Kasrah (ـِ)',
      resultTashkeel: 'Kasrah (اِ)',
      colorClass: 'chip-izhar',
      ruleExplanation: 'La 3e lettre porte une Kasrah : Hamzat Al-Wasl reçoit impérativement une Kasrah (« Ihdinā ») !',
    },
    'idh-hab': {
      text: 'ٱذۡهَبۡ',
      transcription: 'Idh-hab (اِذۡهَبۡ)',
      surahRef: 'Tā-Hā 20:24',
      letter1: { char: 'ٱ', label: '1: Wasl' },
      letter2: { char: 'ذۡ', label: '2: Soukoûn' },
      letter3: { char: 'هَ', label: '3: Fathah !' },
      vowelOn3rd: 'Fathah (ـَ)',
      resultTashkeel: 'Kasrah (اِ)',
      colorClass: 'chip-idgham',
      ruleExplanation: 'RÈGLE D\'OR : Un verbe ne commence JAMAIS par une Fathah ! Si la 3e lettre a une Fathah, l\'attaque prend une Kasrah (« Idh-hab »).',
    },
  };

  const curr = verbData[selectedVerb];

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedVerb('ud-u')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedVerb === 'ud-u' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ٱدۡعُ (3e lettre Dammah)
        </button>
        <button
          onClick={() => setSelectedVerb('ihdina')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedVerb === 'ihdina' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ٱهۡدِنَا (3e lettre Kasrah)
        </button>
        <button
          onClick={() => setSelectedVerb('idh-hab')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedVerb === 'idh-hab' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ٱذۡهَبۡ (3e lettre Fathah)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-5">
        <div className="flex items-center justify-between text-xs">
          <span className="ref-tag">{curr.surahRef}</span>
          <span className={`chip ${curr.colorClass} font-bold`}>Attaque : {curr.resultTashkeel}</span>
        </div>

        {/* 3 Letters Anatomy Display */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-sm mx-auto" dir="rtl">
          <div className="p-3.5 rounded-2xl bg-soft border border-line">
            <span className="font-ar text-4xl text-ink block">{curr.letter1.char}</span>
            <span className="text-[11px] text-muted">{curr.letter1.label}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-soft border border-line">
            <span className="font-ar text-4xl text-ink block">{curr.letter2.char}</span>
            <span className="text-[11px] text-muted">{curr.letter2.label}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-gold-bg border-2 border-gold shadow-xs animate-pop">
            <span className="font-ar text-4xl text-gold font-bold block">{curr.letter3.char}</span>
            <span className="text-[11px] text-gold font-semibold">{curr.letter3.label}</span>
          </div>
        </div>

        {/* Final attack pronunciation */}
        <div className="p-4 rounded-xl bg-card border border-line shadow-xs">
          <span className="text-xs text-muted block mb-1">Prononciation exacte à l'attaque :</span>
          <span className="font-ar text-4xl text-ink font-bold block mb-1" dir="rtl">
            {curr.transcription.split('(')[1]?.replace(')', '') || curr.text}
          </span>
          <span className="font-mono text-sm text-good font-semibold">
            [ {curr.transcription.split('(')[0].trim()} ]
          </span>
        </div>

        <p className="text-xs text-muted text-left leading-relaxed p-3 rounded-xl bg-soft">
          {curr.ruleExplanation}
        </p>
      </div>
    </div>
  );
};

/** Écran 3 : Les 5 Verbes Pièges aux Fausses Dammahs */
const FiveExceptionVerbsVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedVerb, setSelectedVerb] = useState<'ibnu' | 'imshu' | 'iqdu'>('ibnu');

  const exceptions = {
    ibnu: {
      written: 'ٱبۡنُواْ',
      origin: 'اِبْنِيُوا (Kasrah sur Nūn)',
      pronounced: 'اِبۡنُواْ (Ibnū)',
      trap: 'Ubnū ❌',
      verse: 'As-Sāffāt 37:97 — قَالُواْ ٱبۡنُواْ لَهُۥ بُنۡيَٰنٗا',
      explanation: 'Le verbe vient de la racine (بني). La Dammah sur le Nūn est accidentelle : elle a été adoptée pour convenir au Wāw du pluriel. À l\'attaque, on prononce KASRAH : « Ibnū » !',
    },
    imshu: {
      written: 'ٱمۡشُواْ',
      origin: 'اِمْشِيُوا (Kasrah sur Shīn)',
      pronounced: 'اِمۡشُواْ (Imshū)',
      trap: 'Umshū ❌',
      verse: 'Sād 38:6 — وَٱنطَلَقَ ٱلۡمَلَأُ مِنۡهُمۡ أَنِ ٱمۡشُواْ',
      explanation: 'Même règle pour la racine (مشي). La Dammah est une modification d\'aisance phonétique. L\'attaque se fait STRICTEMENT en Kasrah : « Imshū » !',
    },
    iqdu: {
      written: 'ٱقۡضُوٓاْ',
      origin: 'اِقْضِيُوا (Kasrah sur Dād)',
      pronounced: 'اِقۡضُوٓاْ (Iqdū)',
      trap: 'Uqdū ❌',
      verse: 'Yūnus 10:71 — ثُمَّ ٱقۡضُوٓاْ إِلَىَّ وَلَا تُنظِرُونِ',
      explanation: 'Issu de la racine (قضي). Prononcez toujours avec Kasrah : « Iqdū » !',
    },
  };

  const curr = exceptions[selectedVerb];

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedVerb('ibnu')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedVerb === 'ibnu' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ٱبۡنُواْ (Ibnū)
        </button>
        <button
          onClick={() => setSelectedVerb('imshu')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedVerb === 'imshu' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ٱمۡشُواْ (Imshū)
        </button>
        <button
          onClick={() => setSelectedVerb('iqdu')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedVerb === 'iqdu' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ٱقۡضُوٓاْ (Iqdū)
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
        <div className="label">Le Piège de la Dammah Accidentelle</div>

        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <div className="p-4 rounded-2xl bg-bad-bg border border-bad/30">
            <span className="text-xs font-semibold text-bad block mb-1">Graphie Trompeuse</span>
            <span className="font-ar text-4xl text-ink block" dir="rtl">{curr.written}</span>
            <span className="text-xs text-bad block mt-1">Dammah apparente ➔ Piège : {curr.trap}</span>
          </div>

          <div className="p-4 rounded-2xl bg-good-bg border border-good/30 animate-pop">
            <span className="text-xs font-semibold text-good block mb-1">Attaque Authentique</span>
            <span className="font-ar text-4xl text-good font-bold block" dir="rtl">{curr.pronounced}</span>
            <span className="text-xs text-good font-semibold block mt-1">Kasrah Obligatoire !</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-soft border border-line text-xs font-mono text-muted text-left">
          Racine étymologique : <strong>{curr.origin}</strong>
        </div>

        <div className="p-3.5 rounded-xl bg-soft text-xs text-muted text-left leading-relaxed">
          <span className="font-semibold text-ink block mb-1">Explication :</span>
          {curr.explanation}
        </div>
      </div>
    </div>
  );
};

/** Écran 4 : La Rencontre des Deux Hamzahs (ٱئۡتُونِي ➔ إِيتُونِي) */
const TwoHamzahsTransformationVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [isIbtida, setIsIbtida] = useState(false);

  return (
    <div key={animKey} className="py-6 px-4 select-none max-w-xl mx-auto space-y-4">
      <div className="label text-center">Sūrah Al-Ahqāf (46:4) — La transmutation de « I'tūnī »</div>

      <div className="flex justify-center">
        <div className="segmented">
          <button onClick={() => setIsIbtida(false)} aria-pressed={!isIbtida}>
            En continu (Wasl)
          </button>
          <button onClick={() => setIsIbtida(true)} aria-pressed={isIbtida}>
            À l'attaque (Ibtidā')
          </button>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-card border border-line text-center space-y-4">
        <div className="label">
          {isIbtida ? 'Transmutation phonétique : Madd Badal' : 'Élision normale en liaison'}
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink my-3 leading-[1.8]" dir="rtl">
          {isIbtida ? (
            <span>
              <span className="text-good font-bold animate-pop">إِيتُونِى</span> بِكِتَٰبٖ
            </span>
          ) : (
            <span>
              فِى ٱلسَّمَٰوَٰتِۖ <span className="text-gold font-bold">ٱئۡتُونِى</span>
            </span>
          )}
        </div>

        {/* Breakdown box */}
        <div className={`p-4 rounded-xl border text-left space-y-2 text-xs ${
          isIbtida ? 'bg-good-bg border-good/30' : 'bg-soft border-line'
        }`}>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-ink">
              {isIbtida ? 'Prononciation à l\'attaque :' : 'Prononciation en liaison :'}
            </span>
            <span className={`chip ${isIbtida ? 'chip-gold' : 'chip-idgham'} font-bold`}>
              {isIbtida ? '« ĪTŪNĪ » (Madd Badal 2 temps)' : '« samāwāti\'-tūnī »'}
            </span>
          </div>

          <p className="text-muted leading-relaxed">
            {isIbtida
              ? 'Deux Hamzahs ne peuvent se choquer à l\'attaque (إِ + ئْ). Selon la règle universelle de Badal, la Hamzah Sākinah se transforme en voyelle longue Yā\' homogène : on dit « ĪTŪNĪ » !'
              : 'En continuant la lecture depuis « As-Samāwāt », Hamzat Al-Wasl s\'efface et la Hamzah Sākinah se prononce avec un coup de glotte sec.'}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   CHAPITRE 7 : Mini-composants interactifs et didactiques (Lām Sākinah)
   ========================================================================= */

/** Écran 1 : Métaphore Cosmique Lune vs Soleil (Izhār Qamarī vs Idghām Shamsī) */
const MoonVsSunLamVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeType, setActiveType] = useState<'qamar' | 'shams'>('qamar');

  const moonLetters = ['ء', 'ب', 'غ', 'ح', 'ج', 'ك', 'و', 'خ', 'ف', 'ع', 'ق', 'ي', 'م', 'هـ'];
  const sunLetters = ['ط', 'ث', 'ص', 'ر', 'ت', 'ض', 'ذ', 'ن', 'د', 'س', 'ظ', 'ز', 'ش', 'ل'];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Basculez entre la Lām Lunaire (Izhār) et la Lām Solaire (Idghām)
      </div>

      <div className="flex justify-center">
        <div className="segmented">
          <button
            onClick={() => setActiveType('qamar')}
            aria-pressed={activeType === 'qamar'}
            className="flex items-center gap-1.5"
          >
            <span>🌙</span>
            <span>Lām Qamariyyah (14)</span>
          </button>
          <button
            onClick={() => setActiveType('shams')}
            aria-pressed={activeType === 'shams'}
            className="flex items-center gap-1.5"
          >
            <span>☀️</span>
            <span>Lām Shamsiyyah (14)</span>
          </button>
        </div>
      </div>

      {activeType === 'qamar' ? (
        <div className="p-5 rounded-2xl bg-card border border-izhar/40 shadow-sm space-y-4 max-w-xl mx-auto animate-fade">
          <div className="flex items-center justify-between">
            <span className="chip chip-izhar text-xs font-bold">
              🌙 Izhār Qamarī (Clarté limpide)
            </span>
            <span className="text-xs text-muted">Signe : Soukoûn visible (لۡ)</span>
          </div>

          <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
            <span className="text-muted">ٱ</span>
            <span className="text-good font-bold underline decoration-izhar decoration-2 underline-offset-8">لۡ</span>
            <span>قَمَرُ</span>
          </div>

          <p className="text-xs sm:text-sm text-ink leading-relaxed">
            Comme la lune permet d’admirer les étoiles sans les éclipser, la Lām reste <strong className="text-good">clairement audible</strong> avec son Soukoûn (لۡ) devant ces 14 lettres.
          </p>

          <div className="pt-2 border-t border-line">
            <span className="text-[11px] font-semibold text-muted block mb-1.5">
              Formule mnémonique sacrée des 14 lettres lunaires :
            </span>
            <div className="p-2 rounded-xl bg-soft font-ar text-lg text-ink font-semibold tracking-wide" dir="rtl">
              إِبۡغِ حَجَّكَ وَخَفۡ عَقِيمَهُ
            </div>
            <div className="flex flex-wrap justify-center gap-1 mt-2">
              {moonLetters.map((l, i) => (
                <span key={i} className="w-6 h-6 rounded-md bg-izhar-bg text-izhar text-xs font-bold flex items-center justify-center font-ar">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-card border border-idgham/40 shadow-sm space-y-4 max-w-xl mx-auto animate-fade">
          <div className="flex items-center justify-between">
            <span className="chip chip-idgham text-xs font-bold">
              ☀️ Idghām Shamsī (Fusion totale)
            </span>
            <span className="text-xs text-muted">Signe : Lām nue + Shaddah (ّ)</span>
          </div>

          <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
            <span className="text-muted">ٱ</span>
            <span className="text-bad opacity-35 line-through">ل</span>
            <span className="text-idgham font-bold">شَّ</span>
            <span>مۡسُ</span>
          </div>

          <p className="text-xs sm:text-sm text-ink leading-relaxed">
            Comme le soleil éblouit et fait disparaître les étoiles, la Lām est <strong className="text-bad">totalement silencieuse</strong> et fond dans la consonne suivante qui prend une Shaddah (ّ).
          </p>

          <div className="pt-2 border-t border-line">
            <span className="text-[11px] font-semibold text-muted block mb-1.5">
              Les 14 lettres solaires (début de chaque mot du poème) :
            </span>
            <div className="p-2 rounded-xl bg-soft font-ar text-sm sm:text-base text-ink" dir="rtl">
              طِبۡ ثُمَّ صِلۡ رَحِمًا تَفُزۡ ضِفۡ ذَا نِعَمۡ · دَعۡ سُوءَ ظَنٍّ زُرۡ شَرِيفًا لِلۡكَرَمۡ
            </div>
            <div className="flex flex-wrap justify-center gap-1 mt-2">
              {sunLetters.map((l, i) => (
                <span key={i} className="w-6 h-6 rounded-md bg-idgham-bg text-idgham text-xs font-bold flex items-center justify-center font-ar">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/** Écran 2 : Le Double Effacement en Liaison Continue (Wasl sur وَٱلشَّمۡسِ) */
const DoubleDropWaslVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [isWasl, setIsWasl] = useState(true);

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Le piège classique : Comment lire « Wash-Shams » dans la Sourate 91
      </div>

      <div className="flex justify-center">
        <div className="segmented">
          <button onClick={() => setIsWasl(true)} aria-pressed={isWasl}>
            En Liaison Continue (Wasl)
          </button>
          <button onClick={() => setIsWasl(false)} aria-pressed={!isWasl}>
            À l'Attaque Isolée (Ibtidā')
          </button>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 max-w-xl mx-auto">
        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {isWasl ? (
            <span>
              <span className="text-good font-bold">وَ</span>
              <span className="text-bad opacity-30 line-through">ٱ</span>
              <span className="text-bad opacity-30 line-through">ل</span>
              <span className="text-idgham font-bold">شَّ</span>
              <span>مۡسِ</span>
            </span>
          ) : (
            <span>
              <span className="text-good font-bold">اَ</span>
              <span className="text-bad opacity-30 line-through">ل</span>
              <span className="text-idgham font-bold">شَّ</span>
              <span>مۡسِ</span>
            </span>
          )}
        </div>

        {/* Phonetic jump track */}
        <div className="p-3 rounded-xl bg-soft flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-ink">
          {isWasl ? (
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-good-bg text-good font-bold">WA</span>
              <span className="text-muted">➔</span>
              <span className="px-1.5 py-0.5 rounded bg-bad-bg text-bad text-[11px] line-through">ٱ Wasl muet</span>
              <span className="text-muted">➔</span>
              <span className="px-1.5 py-0.5 rounded bg-bad-bg text-bad text-[11px] line-through">ل Shams muet</span>
              <span className="text-muted">➔</span>
              <span className="px-2 py-1 rounded bg-idgham-bg text-idgham font-bold">SH-SHAMS</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-good-bg text-good font-bold">ASH</span>
              <span className="text-muted">➔</span>
              <span className="px-2 py-1 rounded bg-idgham-bg text-idgham font-bold">SHAMS</span>
            </div>
          )}
        </div>

        <div className={`p-4 rounded-xl border text-left text-xs space-y-2 ${
          isWasl ? 'bg-amber-500/10 border-amber-500/30' : 'bg-soft border-line'
        }`}>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-ink">
              {isWasl ? '⚠️ Le piège du Double Effacement :' : 'Attaque du mot :'}
            </span>
            <span className={`chip ${isWasl ? 'chip-gold' : 'chip-izhar'} text-xs font-bold`}>
              {isWasl ? '2 lettres muettes simultanées' : 'Hamzat Wasl ressuscite (اَ)'}
            </span>
          </div>
          <p className="text-muted leading-relaxed">
            {isWasl
              ? 'En lisant en continu, Hamzat Al-Wasl s\'élide ET la Lām Shamsiyyah disparaît ! La voix saute d\'une traite du Wāw vers le Shīn avec Shaddah : « WASH-SHAMS ». Aucun coup de gorge ni son Lām ne doit subsister.'
              : 'En démarrant directement sur le mot, Hamzat Wasl prend obligatoirement une Fathah (اَلـ) car c\'est l\'article défini. La Lām reste silencieuse : on prononce « ASH-SHAMS ».'}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 3 : La Balance Sacrée du Nom d'Allah (Tafkhīm vs Tarqīq) */
const LafzAlJalalahBalanceVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedCase, setSelectedCase] = useState<'fathah' | 'dammah' | 'kasrah' | 'tanwin'>('fathah');

  const cases = {
    fathah: {
      title: 'Précédé d\'une Fathah (ـَ)',
      verse: 'قَالَ ٱللَّهُ',
      translit: 'Qāla-llāhu',
      status: 'Tafkhīm (Lourd & Majestueux)',
      badgeClass: 'chip-qalqalah',
      tongueShape: 'Arrière de la langue élevé vers le palais mou (Isti\'lā\')',
      boxColor: 'border-gold/40 bg-card',
      advice: 'Remplissez la cavité buccale de résonance majestueuse sans arrondir ni projeter les lèvres en O !'
    },
    dammah: {
      title: 'Précédé d\'une Dammah (ـُ)',
      verse: 'عَبۡدُ ٱللَّهِ',
      translit: '\'Abdu-llāhi',
      status: 'Tafkhīm (Lourd & Majestueux)',
      badgeClass: 'chip-qalqalah',
      tongueShape: 'Arrière de la langue surélevé pour donner du corps et de la gravité',
      boxColor: 'border-gold/40 bg-card',
      advice: 'La Dammah précédente prépare naturellement l\'emphase majestueuse du Nom divin.'
    },
    kasrah: {
      title: 'Précédé d\'une Kasrah (ـِ)',
      verse: 'بِسۡمِ ٱللَّهِ',
      translit: 'Bismi-llāhi',
      status: 'Tarqīq (Fin & Doux)',
      badgeClass: 'chip-izhar',
      tongueShape: 'Langue aplatie au fond du palais, mâchoire détendue',
      boxColor: 'border-izhar/40 bg-card',
      advice: 'Adoucissez le Lām comme pour un léger sourire intérieur : ne dites jamais « Bismi-llōh » !'
    },
    tanwin: {
      title: 'Tanwīn en Wasl (Al-Ikhlās 112:1-2)',
      verse: 'أَحَدٌ ٱللَّهُ ➔ أَحَدُنِ ٱللَّهُ',
      translit: 'Ahaduni-llāhus-Samad',
      status: 'Tarqīq Exceptionnel (Brisure de Soukoûn)',
      badgeClass: 'chip-izhar',
      tongueShape: 'Kasrah accidentelle brisant le double soukoûn ➔ Tarqīq automatique',
      boxColor: 'border-izhar/40 bg-card',
      advice: 'Le Nūn du Tanwīn prend une Kasrah de liaison (نِ) : le Nom d\'Allah devient doux et mince !'
    }
  };

  const curr = cases[selectedCase];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Choisissez la voyelle qui précède le Nom Majestueux (ٱللَّه)
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        <button
          onClick={() => setSelectedCase('fathah')}
          aria-pressed={selectedCase === 'fathah'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            selectedCase === 'fathah' ? 'chip-gold font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          Fathah (قَالَ ٱللَّهُ)
        </button>
        <button
          onClick={() => setSelectedCase('dammah')}
          aria-pressed={selectedCase === 'dammah'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            selectedCase === 'dammah' ? 'chip-gold font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          Dammah (عَبۡدُ ٱللَّهِ)
        </button>
        <button
          onClick={() => setSelectedCase('kasrah')}
          aria-pressed={selectedCase === 'kasrah'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            selectedCase === 'kasrah' ? 'chip-izhar font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          Kasrah (بِسۡمِ ٱللَّهِ)
        </button>
        <button
          onClick={() => setSelectedCase('tanwin')}
          aria-pressed={selectedCase === 'tanwin'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            selectedCase === 'tanwin' ? 'chip-izhar font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          Tanwīn Wasl (أَحَدٌ ٱللَّهُ)
        </button>
      </div>

      <div className={`p-5 rounded-2xl border shadow-sm space-y-4 max-w-xl mx-auto transition-all ${curr.boxColor}`}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-muted">{curr.title}</span>
          <span className={`chip ${curr.badgeClass} text-xs font-bold`}>
            {curr.status}
          </span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.verse}
        </div>

        <div className="p-2.5 rounded-xl bg-soft text-xs sm:text-sm font-mono text-ink">
          Prononciation : <strong className="text-lapis">{curr.translit}</strong>
        </div>

        <div className="text-left text-xs space-y-2 border-t border-line/60 pt-3">
          <p className="text-ink">
            <strong>Position linguale :</strong> {curr.tongueShape}
          </p>
          <p className="text-muted">
            <strong>Conseil de récitation :</strong> {curr.advice}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 4 : Scanner de Lām Al-Fi'l (Verbe قُلۡ) et Lām Al-Harf (Particule بَلۡ) */
const LamFilHarfScannerVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedItem, setSelectedItem] = useState<'qul-naam' | 'qul-lakum' | 'qul-rabbi' | 'bal-rafaahu'>('qul-naam');

  const items = {
    'qul-naam': {
      word: 'قُلۡ نَعَمۡ',
      type: 'Lām Al-Fi\'l (Verbe impératif)',
      rule: 'Izhār Obligatoire (Clarté)',
      badgeClass: 'chip-izhar',
      translit: 'Qul na\'am',
      trap: 'Attention au piège : Ne faites JAMAIS de Qalqalah (« Qula-na\'am ») et ne fusionnez pas dans le Nūn (« Qun-na\'am »). Maintenez la Lām avec Tawassut.',
      explanation: 'Devant 26 lettres de l\'alphabet (toutes sauf Lām et Râ\'), la Lām du verbe doit obligatoirement retentir avec clarté sans aucune assimilation.'
    },
    'qul-lakum': {
      word: 'قُل لَّكُمۡ',
      type: 'Lām Al-Fi\'l + Lām',
      rule: 'Idghām Mutamāthilayn (Identité)',
      badgeClass: 'chip-idgham',
      translit: 'Qul-lakum',
      trap: 'Les deux Lāms fusionnent en une seule consonne doublée portant une Shaddah.',
      explanation: 'Lorsque la Lām Sākinah rencontre une autre Lām voyellée, la fusion est absolue et naturelle par parfaite similitude de lettre.'
    },
    'qul-rabbi': {
      word: 'وَقُل رَّبِّ',
      type: 'Lām Al-Fi\'l + Râ\'',
      rule: 'Idghām Mutaqāribayn (Proximité)',
      badgeClass: 'chip-idgham',
      translit: 'Wa Qur-rabbi',
      trap: 'La Lām disparaît complètement : la voix saute directement sur le Râ\' avec Shaddah.',
      explanation: 'Les points d\'articulation de la Lām et du Râ\' sont très proches sur le bord de la langue : la Lām s\'assimile entièrement dans le Râ\'.'
    },
    'bal-rafaahu': {
      word: 'بَل رَّفَعَهُ ٱللَّهُ',
      type: 'Lām Al-Harf (Particule بَلۡ) + Râ\'',
      rule: 'Idghām Mutaqāribayn',
      badgeClass: 'chip-idgham',
      translit: 'Bar-rafa\'ahu-llāh',
      trap: 'Exception unique : Dans « Bal... Rāna » (83:14), la Saktah (pause silencieuse sans souffle) interdit l\'Idghām selon Hafs !',
      explanation: 'La particule « Bal » fusionne dans le Râ\'. Mais si une Saktah intervient, l\'Izhār reprend ses droits.'
    }
  };

  const curr = items[selectedItem];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Analysez les cas de Lām du verbe et de la particule
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        <button
          onClick={() => setSelectedItem('qul-naam')}
          aria-pressed={selectedItem === 'qul-naam'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            selectedItem === 'qul-naam' ? 'chip-izhar font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          قُلۡ نَعَمۡ (Izhār)
        </button>
        <button
          onClick={() => setSelectedItem('qul-lakum')}
          aria-pressed={selectedItem === 'qul-lakum'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            selectedItem === 'qul-lakum' ? 'chip-idgham font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          قُل لَّكُمۡ (Idghām L-L)
        </button>
        <button
          onClick={() => setSelectedItem('qul-rabbi')}
          aria-pressed={selectedItem === 'qul-rabbi'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            selectedItem === 'qul-rabbi' ? 'chip-idgham font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          قُل رَّبِّ (Idghām L-R)
        </button>
        <button
          onClick={() => setSelectedItem('bal-rafaahu')}
          aria-pressed={selectedItem === 'bal-rafaahu'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            selectedItem === 'bal-rafaahu' ? 'chip-idgham font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          بَل رَّفَعَهُ (Particule)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 max-w-xl mx-auto">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted font-semibold">{curr.type}</span>
          <span className={`chip ${curr.badgeClass} text-xs font-bold`}>
            {curr.rule}
          </span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.word}
        </div>

        <div className="p-2.5 rounded-xl bg-soft text-xs sm:text-sm font-mono text-ink">
          Prononciation : <strong className="text-lapis">{curr.translit}</strong>
        </div>

        <div className="text-left text-xs space-y-2 border-t border-line/60 pt-3">
          <p className="text-ink leading-relaxed">
            {curr.explanation}
          </p>
          <p className="p-2.5 rounded-lg bg-bad-bg/60 border border-bad/20 text-ink">
            {curr.trap}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   CHAPITRE 9 : Mini-composants interactifs et didactiques (Mīm Sākinah)
   ========================================================================= */

/** Écran 1 : La Position des Lèvres pour l'Ikhfā' Shafawī (Le Débat de la Furjah) */
const IkhfaShafawiLipsVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [lipMode, setLipMode] = useState<'adequate' | 'gap' | 'tight'>('adequate');

  const modes = {
    adequate: {
      badge: 'Conforme & Pure Sunnah (Recommandé)',
      badgeClass: 'chip-idgham',
      arabicWord: 'تَرۡمِيهِم بِحِجَارَةٖ',
      translit: 'Tarmīhim bi-hijārah',
      lipState: 'Contact doux & naturel des deux lèvres (Itbāq Latīf)',
      boxClass: 'bg-good-bg border-good/40',
      textColor: 'text-good',
      mechanism: 'Les lèvres se posent l\'une contre l\'autre avec délicatesse, sans les écraser et SANS laisser d\'ouverture artificielle (pas de Furjah). La Ghunnah résonne 2 temps pleins dans la cavité nasale avant de relâcher le Bā\'.',
      scholars: 'Avis prépondérant des plus grands maîtres du Tajwīd (Ibn Al-Jazarī, Dr. Ayman Swayd, Dr. Islām Fekry).'
    },
    gap: {
      badge: 'Déconseillé (Furjah artificielle)',
      badgeClass: 'chip-qalqalah',
      arabicWord: 'تَرۡمِيهِم ␣ بِحِجَارَةٖ',
      translit: 'Tarmīhi... bi-hijārah',
      lipState: 'Fente ou trou visible entre les lèvres',
      boxClass: 'bg-bad-bg border-bad/40',
      textColor: 'text-bad',
      mechanism: 'Laisser un espace ouvert entre les lèvres produit un son flottant qui dénature le Mīm en un hybride de Nūn étranger au Makhraj labial authentique.',
      scholars: 'Pratique récente sans fondement textuel dans les poèmes classiques (Manzūmāt).'
    },
    tight: {
      badge: 'Pression Excessive (Kazz \'alā ash-shafatayh)',
      badgeClass: 'chip-qalqalah',
      arabicWord: 'تَرۡمِيهِمْ بِحِجَارَةٖ',
      translit: 'Tarmī-MMM-bi-hijārah',
      lipState: 'Lèvres comprimées avec force et tension',
      boxClass: 'bg-bad-bg border-bad/40',
      textColor: 'text-bad',
      mechanism: 'Presser trop fort étouffe la résonance du Khayshūm et durcit brutalement la transition vers le Bā\'.',
      scholars: 'À corriger : détendez la mâchoire et laissez les lèvres simplement effleurer.'
    }
  };

  const curr = modes[lipMode];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Comment prononcer le Mīm avant le Bā' : Testez les 3 positions des lèvres
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        <button
          onClick={() => setLipMode('adequate')}
          aria-pressed={lipMode === 'adequate'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            lipMode === 'adequate' ? 'chip-idgham font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          Contact Doux (Sans Furjah)
        </button>
        <button
          onClick={() => setLipMode('gap')}
          aria-pressed={lipMode === 'gap'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            lipMode === 'gap' ? 'chip-qalqalah font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          Écartement Artificiel (Furjah)
        </button>
        <button
          onClick={() => setLipMode('tight')}
          aria-pressed={lipMode === 'tight'}
          className={`chip text-xs px-3 py-1.5 transition-all ${
            lipMode === 'tight' ? 'chip-qalqalah font-bold scale-105' : 'bg-soft text-muted hover:bg-line'
          }`}
        >
          Pression Excessive
        </button>
      </div>

      <div className={`p-5 rounded-2xl border shadow-sm space-y-4 max-w-xl mx-auto transition-all ${curr.boxClass}`}>
        <div className="flex items-center justify-between">
          <span className={`chip ${curr.badgeClass} text-xs font-bold`}>
            {curr.badge}
          </span>
          <span className="text-xs text-muted">Durée : 2 temps de Ghunnah</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.arabicWord}
        </div>

        <div className="p-2.5 rounded-xl bg-card text-xs sm:text-sm font-mono text-ink">
          Phonétique : <strong className={curr.textColor}>{curr.translit}</strong>
        </div>

        <div className="text-left text-xs space-y-2 border-t border-line/60 pt-3">
          <p className="text-ink">
            <strong>État des lèvres :</strong> {curr.lipState}
          </p>
          <p className="text-ink leading-relaxed">
            <strong>Explication :</strong> {curr.mechanism}
          </p>
          <p className="text-muted text-[11px]">
            <strong>Référence :</strong> {curr.scholars}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : L'Idghām Shafawī (Fusion des deux Mīms en un Mīm Mushaddadah) */
const IdghamShafawiTwinVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeCase, setActiveCase] = useState<'wasl' | 'waqf'>('wasl');

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        La fusion totale dans le Mīm suivant & la Ghunnah à l'arrêt
      </div>

      <div className="flex justify-center">
        <div className="segmented">
          <button onClick={() => setActiveCase('wasl')} aria-pressed={activeCase === 'wasl'}>
            Idghām entre 2 Mots (فِى قُلُوبِهِم مَّرَضٞ)
          </button>
          <button onClick={() => setActiveCase('waqf')} aria-pressed={activeCase === 'waqf'}>
            Mīm Mushaddadah à l'Arrêt (ٱلۡيَمِّ)
          </button>
        </div>
      </div>

      {activeCase === 'wasl' ? (
        <div className="p-5 rounded-2xl bg-card border border-idgham/40 shadow-sm space-y-4 max-w-xl mx-auto animate-fade">
          <div className="flex items-center justify-between">
            <span className="chip chip-idgham text-xs font-bold">
              Idghām Mithlayn Saghīr (Ghunnah 2 temps)
            </span>
            <span className="text-xs text-muted">Al-Baqarah 2:10</span>
          </div>

          <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
            <span className="text-ink">فِى قُلُوبِهِ</span>
            <span className="text-bad opacity-40 line-through">مۡ</span>
            <span className="text-good font-bold"> مَّ</span>
            <span className="text-ink">رَضٞ</span>
          </div>

          <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-ink">
            Formule mathématique : [ مْ sans voyelle ] + [ مَ voyellé ] = <strong className="text-good">[ مّ de 2 temps ]</strong>
          </div>

          <p className="text-xs sm:text-sm text-ink leading-relaxed">
            Le premier Mīm est absorbé à 100% dans le second. Vos lèvres restent jointes pendant <strong className="text-good">2 pulsations complètes</strong> de résonance nasale (Ghunnah) avant d'ouvrir sur la Fathah de « Marad ».
          </p>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-card border border-gold/40 shadow-sm space-y-4 max-w-xl mx-auto animate-fade">
          <div className="flex items-center justify-between">
            <span className="chip chip-gold text-xs font-bold">
              Ghunnah Maximale à l'Arrêt (Akmal mā takūn)
            </span>
            <span className="text-xs text-muted">Tāhā 20:39</span>
          </div>

          <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
            <span>فَٱقۡذِفِيهِ فِى </span>
            <span className="text-good font-bold underline decoration-gold decoration-2 underline-offset-8">ٱلۡيَمِّ</span>
          </div>

          <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-ink">
            À l'arrêt (Waqf) : <strong className="text-good">« Fil-yamm... (maintenir 2 temps !) »</strong>
          </div>

          <p className="text-xs sm:text-sm text-ink leading-relaxed">
            ⚠️ <strong>Règle d'or du Dr. Islām Fekry :</strong> Même si vous vous arrêtez sur un mot qui se termine par un Mīm Mushaddadah (مّ) ou un Nūn Mushaddadah (نّ), vous DEVEZ obligatoirement maintenir la Ghunnah pendant 2 temps avant de couper la voix ! Ne coupez jamais à sec.
          </p>
        </div>
      )}
    </div>
  );
};

/** Écran 3 : L'Alerte Maximale d'Izhār devant Wāw (و) et Fā' (ف) */
const AshaddIzharWarningVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [dangerLetter, setDangerLetter] = useState<'waw' | 'fa'>('waw');

  const warnings = {
    waw: {
      letter: 'و (Wāw)',
      verseArabic: 'عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ',
      segment: 'عَلَيۡهِمۡ وَلَا',
      surahRef: 'Al-Fātihah 1:7',
      dangerTrap: 'Dire « \'Alayhiw-walā » en dissimulant le Mīm dans le Wāw',
      whyTrapHappens: 'Identité totale du Makhraj (Ittihād) : le Mīm et le Wāw naissent tous deux du mouvement des deux lèvres !',
      cure: 'Fermez fermement les deux lèvres sur le Mīm avec Tawassut, puis ouvrez-les en arrondissant la bouche pour le Wāw.'
    },
    fa: {
      letter: 'ف (Fā\')',
      verseArabic: 'أُولَٰٓئِكَ أَصۡحَٰبُ ٱلۡجَنَّةِۖ هُمۡ فِيهَا خَٰلِدُونَ',
      segment: 'هُمۡ فِيهَا',
      surahRef: 'Al-Baqarah 2:82',
      dangerTrap: 'Dire « Huf-fīhā » en avalant le Mīm au profit du Fā\'',
      whyTrapHappens: 'Proximité immédiate (Taqārub) : le Fā\' naît de la lèvre inférieure touchant les incisives supérieures, juste à côté du Mīm !',
      cure: 'Marquez la fermeture complète des lèvres sur « Hum » avant de toucher la lèvre inférieure avec les dents pour « Fīhā ».'
    }
  };

  const curr = warnings[dangerLetter];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        L'avertissement solennel d'Ibn Al-Jazarī : « وَاحْذَرْ لَدَى وَاوٍ وَفَا أَنْ تَخْتَفِي »
      </div>

      <div className="flex justify-center">
        <div className="segmented">
          <button onClick={() => setDangerLetter('waw')} aria-pressed={dangerLetter === 'waw'}>
            Danger 1 : Devant Wāw (عَلَيۡهِمۡ وَلَا)
          </button>
          <button onClick={() => setDangerLetter('fa')} aria-pressed={dangerLetter === 'fa'}>
            Danger 2 : Devant Fā' (هُمۡ فِيهَا)
          </button>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-bad/40 shadow-sm space-y-4 max-w-xl mx-auto">
        <div className="flex items-center justify-between">
          <span className="chip chip-qalqalah text-xs font-bold">
            ⚠️ Ashadd Izhār (Clarté Vigilante Impérative)
          </span>
          <span className="text-xs text-muted">{curr.surahRef}</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.verseArabic}
        </div>

        <div className="p-2.5 rounded-xl bg-bad-bg/60 border border-bad/30 text-xs sm:text-sm text-ink">
          <strong className="text-bad">Faute critique fréquente :</strong> {curr.dangerTrap}
        </div>

        <div className="text-left text-xs space-y-2 border-t border-line/60 pt-3">
          <p className="text-ink">
            <strong>Pourquoi ce piège ?</strong> {curr.whyTrapHappens}
          </p>
          <p className="text-good font-semibold">
            <strong>Remède infaillible :</strong> {curr.cure}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 4 : Nūn Sākinah vs Mīm Sākinah (Le Grand Tableau Comparatif) */
const MimVsNunComparisonVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Comparaison Didactique : Pourquoi le Mīm Sākinah est-il beaucoup plus simple ?
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left text-xs">
        {/* Nūn Sākinah card */}
        <div className="p-4 rounded-2xl bg-card border border-line space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-ink text-sm">Nūn Sākinah (نْ)</span>
            <span className="chip chip-idgham text-[11px]">4 Règles</span>
          </div>
          <ul className="space-y-1.5 text-muted">
            <li>• <strong>Izhār Halqī :</strong> 6 lettres de gorge (ء هـ ع ح غ خ)</li>
            <li>• <strong>Idghām :</strong> 6 lettres (يَرۡمَلُونَ) avec/sans Ghunnah</li>
            <li>• <strong>Iqlāb :</strong> 1 lettre (ب) ➔ converti en Mīm</li>
            <li>• <strong>Ikhfā' Haqīqī :</strong> 15 lettres avec anticipation du Makhraj</li>
          </ul>
        </div>

        {/* Mīm Sākinah card */}
        <div className="p-4 rounded-2xl bg-card border border-lapis/40 shadow-sm space-y-3 ring-2 ring-lapis/20">
          <div className="flex items-center justify-between">
            <span className="font-bold text-ink text-sm">Mīm Sākinah (مْ)</span>
            <span className="chip chip-izhar text-[11px] font-bold">3 Règles Seulement</span>
          </div>
          <ul className="space-y-1.5 text-ink">
            <li>• <strong>Ikhfā' Shafawī :</strong> 1 seule lettre : Bā' (ب) avec 2t Ghunnah</li>
            <li>• <strong>Idghām Shafawī :</strong> 1 seule lettre : Mīm (م) avec 2t Ghunnah</li>
            <li>• <strong>Izhār Shafawī :</strong> Les 26 autres lettres (Soukoûn visible مۡ)</li>
            <li className="text-good font-semibold">• <strong>Zéro Iqlāb :</strong> Le Mīm est déjà un Mīm !</li>
          </ul>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-soft text-xs text-muted max-w-2xl mx-auto leading-relaxed">
        💡 <strong>Astuce mnémonique pour retenir le Mīm en 5 secondes :</strong> Devant le <strong>Bā'</strong>, je dissimule (Ikhfā'). Devant le <strong>Mīm</strong>, je fusionne (Idghām). Devant <strong>tout le reste</strong>, je prononce clairement (Izhār), en ouvrant l'œil devant <strong>Wāw et Fā'</strong> !
      </div>
    </div>
  );
};

/** =========================================================================
 * CHAPITRE 10 : LA QALQALAH & SES DEGRÉS DE REBOND
 * ========================================================================= */

/** Écran 1 : La Nature Phonétique de la Qalqalah (Entre Soukoûn et Voyelle) */
const QalqalahPhoneticNatureVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [mode, setMode] = useState<'vowel' | 'sukun' | 'qalqalah'>('qalqalah');
  const [selectedLetter, setSelectedLetter] = useState<'ق' | 'ط' | 'ب' | 'ج' | 'د'>('ق');

  const modeData = {
    vowel: {
      title: 'Lettre avec Voyelle (مُتَحَرِّك)',
      arabicDisplay: `${selectedLetter}َ`,
      articulators: 'Séparation des articulateurs (Infifāt)',
      jawMovement: 'Mouvement actif de la mâchoire (Fathah = ouverture, Dammah = lèvres rondes, Kasrah = mâchoire basse)',
      badge: 'Voyelle Pleine',
      badgeClass: 'chip-gold',
      description: 'Le son est soutenu par une voyelle qui ouvre la cavité buccale.',
    },
    sukun: {
      title: 'Lettre Sākinah ordinaire (سَاكِن)',
      arabicDisplay: `${selectedLetter}ْ`,
      articulators: 'Choc et collision des articulateurs (Istidām)',
      jawMovement: 'AUCUN mouvement de mâchoire (les articulateurs restent fermés/collés)',
      badge: 'Fermeture / Collision',
      badgeClass: 'chip-izhar',
      description: 'L\'air et la voix sont bloqués sans aucun rebond.',
    },
    qalqalah: {
      title: 'La Qalqalah (بَيْنَ السُّكُونِ وَالحَرَكَةِ)',
      arabicDisplay: `${selectedLetter}ۡ 💥`,
      articulators: 'Séparation instantanée (Rebond) des articulateurs',
      jawMovement: 'AUCUN mouvement de mâchoire ni de lèvres ! (Immobilité stricte)',
      badge: 'Rebond Pur sans Voyelle',
      badgeClass: 'chip-qalqalah',
      description: 'Règle d\'or du Dr. Islām Fekry : La Qalqalah partage avec la voyelle l\'écartement des articulateurs, et partage avec le soukoûn l\'absence totale de mouvement de mâchoire !',
    },
  };

  const curr = modeData[mode];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Comment la Qalqalah se situe exactement entre le Soukoûn et la Voyelle
      </div>

      {/* Mode selector */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
        <button
          onClick={() => setMode('vowel')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            mode === 'vowel' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          1. Voyelle (مُتَحَرِّك)
        </button>
        <button
          onClick={() => setMode('sukun')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            mode === 'sukun' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          2. Soukoûn pur (سَاكِن)
        </button>
        <button
          onClick={() => setMode('qalqalah')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            mode === 'qalqalah' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          3. Qalqalah (قَلْقَلَة)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 max-w-xl mx-auto">
        <div className="flex items-center justify-between">
          <span className={`chip ${curr.badgeClass} text-xs font-bold`}>
            {curr.badge}
          </span>
          <div className="flex items-center gap-1" dir="rtl">
            {(['ق', 'ط', 'ب', 'ج', 'د'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setSelectedLetter(l)}
                className={`w-7 h-7 rounded-lg text-xs font-bold font-ar flex items-center justify-center transition-colors ${
                  selectedLetter === l ? 'bg-qalqalah text-white' : 'bg-soft text-ink hover:bg-line'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="font-ar text-5xl sm:text-6xl text-ink leading-tight py-2" dir="rtl">
          {curr.arabicDisplay}
        </div>

        <div className="grid sm:grid-cols-2 gap-2 text-left text-xs">
          <div className="p-3 rounded-xl bg-soft border border-line">
            <span className="font-semibold text-muted block mb-1">Mouvement des articulateurs :</span>
            <span className="text-ink font-medium">{curr.articulators}</span>
          </div>
          <div className="p-3 rounded-xl bg-soft border border-line">
            <span className="font-semibold text-muted block mb-1">Mouvement de la mâchoire :</span>
            <span className="text-ink font-medium">{curr.jawMovement}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-ink leading-relaxed bg-soft/60 p-3 rounded-xl border border-line/60">
          {curr.description}
        </p>
      </div>
    </div>
  );
};

/** Écran 2 : Soukoûn Originel vs Soukoûn Accidentel (Aslī vs 'Ārid) */
const OriginalVsTemporarySukunVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWord, setSelectedWord] = useState<'falaq' | 'khalaqna'>('falaq');
  const [isWaqf, setIsWaqf] = useState<boolean>(true);

  const wordData = {
    falaq: {
      title: '« Al-Falaq » (ٱلۡفَلَقِ) — Soukoûn Accidentel (السُّكُونُ العَارِضُ)',
      surahRef: 'Al-Falaq 113:1',
      waslArabic: 'بِرَبِّ ٱلۡفَلَقِ مِن شَرِّ',
      waqfArabic: 'بِرَبِّ ٱلۡفَلَقۡ',
      waslPronunciation: 'bi-rabbil-falaqi min... (Qāf avec Kasrah ordinaire)',
      waqfPronunciation: 'bi-rabbil-Falaq! (Qalqalah Wustā sonore)',
      hasQalqalahInWasl: false,
      hasQalqalahInWaqf: true,
      explanation: 'À l\'arrêt (Waqf), la Kasrah finale disparaît et engendre un Soukoûn accidentel : la Qalqalah JAILLIT obligatoirement ! Mais si vous lisez en continu (Wasl), le Qāf conserve sa Kasrah et il n\'y a AUCUNE Qalqalah.',
    },
    khalaqna: {
      title: '« Khalaqnā » (خَلَقۡنَا) — Soukoûn Originel (السُّكُونُ الأَصْلِيُّ)',
      surahRef: 'At-Tīn 95:4',
      waslArabic: 'لَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ',
      waqfArabic: 'خَلَقۡ',
      waslPronunciation: 'Khalaqnā (Rebond de Qalqalah Sughrā en continu)',
      waqfPronunciation: 'Khalaq! (Rebond de Qalqalah Wustā à l\'arrêt)',
      hasQalqalahInWasl: true,
      hasQalqalahInWaqf: true,
      explanation: 'Le Soukoûn du Qāf est originel : il est gravé dans la structure même du verbe. Par conséquent, la Qalqalah est obligatoire DANS TOUS LES CAS, que vous coupiez ou que vous poursuiviez votre lecture !',
    },
  };

  const curr = wordData[selectedWord];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        La Qalqalah dépend de la nature du Soukoûn : Originel vs Accidentel
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedWord('falaq')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'falaq' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          ٱلۡفَلَقِ (Soukoûn Accidentel)
        </button>
        <button
          onClick={() => setSelectedWord('khalaqna')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'khalaqna' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          خَلَقۡنَا (Soukoûn Originel)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 max-w-xl mx-auto">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-ink">{curr.title}</span>
          <span className="text-xs text-muted">{curr.surahRef}</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {isWaqf ? (
            <span className="text-good font-bold">{curr.waqfArabic}</span>
          ) : (
            <span>{curr.waslArabic}</span>
          )}
        </div>

        <div className="flex justify-center">
          <div className="segmented">
            <button onClick={() => setIsWaqf(false)} aria-pressed={!isWaqf}>
              En Continu (Wasl)
            </button>
            <button onClick={() => setIsWaqf(true)} aria-pressed={isWaqf}>
              À l'Arrêt (Waqf)
            </button>
          </div>
        </div>

        <div className={`p-4 rounded-xl text-xs sm:text-sm text-left ${
          (isWaqf ? curr.hasQalqalahInWaqf : curr.hasQalqalahInWasl)
            ? 'bg-good-bg border border-good/30'
            : 'bg-soft border border-line'
        }`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-ink">
              Statut de la Qalqalah :
            </span>
            <span className={`chip ${(isWaqf ? curr.hasQalqalahInWaqf : curr.hasQalqalahInWasl) ? 'chip-qalqalah' : 'chip-izhar'}`}>
              {(isWaqf ? curr.hasQalqalahInWaqf : curr.hasQalqalahInWasl) ? '💥 Qalqalah Active' : '❌ Aucune Qalqalah'}
            </span>
          </div>
          <p className="text-muted leading-relaxed font-mono text-xs">
            {isWaqf ? curr.waqfPronunciation : curr.waslPronunciation}
          </p>
          <p className="text-xs text-muted mt-2 pt-2 border-t border-line/40">
            {curr.explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 3 : Les 3 Degrés de Force de la Qalqalah (Kubrā, Wustā, Sughrā) */
const ThreeDegreesInteractiveVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedDegree, setSelectedDegree] = useState<'kubra' | 'wusta' | 'sughra'>('kubra');

  const degreeData = {
    kubra: {
      nameFr: 'Degré 1 : Qalqalah Kubrā (Majeure)',
      nameAr: 'المَرْتَبَةُ الكُبْرَى',
      intensity: 'Puissance Maximale (💥💥💥)',
      chipClass: 'chip-qalqalah',
      examples: [
        { word: 'وَتَبَّ', ref: 'Al-Masad 111:1', desc: 'Arrêt sur Bā\' avec Shaddah' },
        { word: 'بِٱلۡحَقِّ', ref: 'Al-Baqarah 2:189', desc: 'Arrêt sur Qāf avec Shaddah' },
        { word: 'وَٱلۡحَجِّ', ref: 'Al-Baqarah 2:189', desc: 'Arrêt sur Jīm avec Shaddah' },
      ],
      mechanism: 'La lettre porte une Shaddah (ّ) et se trouve à la fin du mot lors d\'un arrêt (Waqf). Maintenez la pression sur la 1ère lettre (Nabrah), puis libérez le rebond le plus puissant et percutant du Tajwīd !',
    },
    wusta: {
      nameFr: 'Degré 2 : Qalqalah Wustā (Moyenne)',
      nameAr: 'المَرْتَبَةُ الوُسْطَى',
      intensity: 'Puissance Moyenne (💥💥)',
      chipClass: 'chip-gold',
      examples: [
        { word: 'قُلۡ هُوَ ٱللَّهُ أَحَدٌ', ref: 'Al-Ikhlās 112:1', desc: 'Arrêt sur Dāl simple' },
        { word: 'بِرَبِّ ٱلۡفَلَقِ', ref: 'Al-Falaq 113:1', desc: 'Arrêt sur Qāf simple' },
        { word: 'وَهُوَ ٱلۡغَفُورُ ٱلۡوَدُودُ', ref: 'Al-Burūj 85:14', desc: 'Arrêt sur Dāl simple' },
      ],
      mechanism: 'Arrêt (Waqf) sur une lettre de Qalqalah simple NON doublée d\'une Shaddah. Le rebond est franc, clair et bien audible, libéré à la fin du souffle de la phrase.',
    },
    sughra: {
      nameFr: 'Degré 3 : Qalqalah Sughrā (Mineure)',
      nameAr: 'المَرْتَبَةُ الصُّغْرَى',
      intensity: 'Rebond Léger & Rapide (💥)',
      chipClass: 'chip-izhar',
      examples: [
        { word: 'خَلَقۡنَا', ref: 'At-Tīn 95:4', desc: 'Qāf au milieu du mot' },
        { word: 'يَقۡطَعُونَ', ref: 'Al-Baqarah 2:27', desc: 'Qāf au milieu du mot' },
        { word: 'لَقَدۡ خَلَقۡنَا', ref: 'At-Tīn 95:4', desc: 'Dāl en liaison continue' },
      ],
      mechanism: 'La lettre de Qalqalah a un Soukoûn au milieu d\'un mot ou à la fin d\'un mot en liaison continue (Wasl). Le rebond doit être agile, instantané et fluide, pour ne jamais casser le rythme de la lecture.',
    },
  };

  const curr = degreeData[selectedDegree];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Doser l'intensité du rebond selon la position et la présence d'une Shaddah
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedDegree('kubra')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedDegree === 'kubra' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          1. Kubrā (Shaddah)
        </button>
        <button
          onClick={() => setSelectedDegree('wusta')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedDegree === 'wusta' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          2. Wustā (Arrêt simple)
        </button>
        <button
          onClick={() => setSelectedDegree('sughra')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedDegree === 'sughra' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          3. Sughrā (En continu)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 max-w-xl mx-auto">
        <div className="flex items-center justify-between">
          <span className={`chip ${curr.chipClass} text-xs font-bold`}>
            {curr.intensity}
          </span>
          <span className="font-ui-ar text-base text-ink" dir="rtl">
            {curr.nameAr}
          </span>
        </div>

        <h4 className="font-display font-semibold text-lg text-ink">
          {curr.nameFr}
        </h4>

        {/* Examples row */}
        <div className="grid grid-cols-3 gap-2">
          {curr.examples.map((ex, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-soft border border-line flex flex-col justify-between">
              <span className="font-ar text-2xl text-ink leading-relaxed" dir="rtl">
                {ex.word}
              </span>
              <span className="text-[10px] text-muted block mt-1">
                {ex.desc}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-ink leading-relaxed bg-soft/60 p-3 rounded-xl border border-line/60 text-left">
          {curr.mechanism}
        </p>
      </div>
    </div>
  );
};

/** Écran 4 : Les Pièges Classiques & Lettres Intruse (Hams vs Qalqalah) */
const QalqalahTrapsAndHamsVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeTrap, setActiveTrap] = useState<'vowel' | 'hams'>('vowel');

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Les 2 erreurs de récitation dénoncées dans le manuel du Dr. Islām Fekry (p. 132)
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setActiveTrap('vowel')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTrap === 'vowel' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          Piège 1 : La Voyelle Parasite
        </button>
        <button
          onClick={() => setActiveTrap('hams')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTrap === 'hams' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          Piège 2 : Fausses Qalqalah (Kāf & Tā')
        </button>
      </div>

      {activeTrap === 'vowel' ? (
        <div className="p-5 rounded-2xl bg-card border border-bad/40 shadow-sm space-y-4 max-w-xl mx-auto animate-fade">
          <div className="flex items-center justify-between">
            <span className="chip chip-qalqalah text-xs font-bold">
              ⚠️ Infiltration de Voyelle Parasite
            </span>
            <span className="text-xs text-muted">Livre p. 132</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3.5 rounded-xl bg-good-bg border border-good/40">
              <span className="text-xs font-bold text-good block mb-1">✅ Conforme (Soukoûn pur)</span>
              <span className="font-ar text-3xl text-ink block" dir="rtl">خَلَقۡنَا</span>
              <span className="font-mono text-xs text-muted mt-1 block">Khalaq-nā</span>
            </div>
            <div className="p-3.5 rounded-xl bg-bad-bg border border-bad/40">
              <span className="text-xs font-bold text-bad block mb-1">❌ Erreur (Fathah ajoutée)</span>
              <span className="font-ar text-3xl text-bad line-through block" dir="rtl">خَلَقَنَا</span>
              <span className="font-mono text-xs text-bad mt-1 block">Khalaqa-nā ❌</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3.5 rounded-xl bg-good-bg border border-good/40">
              <span className="text-xs font-bold text-good block mb-1">✅ Conforme</span>
              <span className="font-ar text-3xl text-ink block" dir="rtl">عَبۡدِهِۦ</span>
              <span className="font-mono text-xs text-muted mt-1 block">\'Ab-dihī</span>
            </div>
            <div className="p-3.5 rounded-xl bg-bad-bg border border-bad/40">
              <span className="text-xs font-bold text-bad block mb-1">❌ Erreur (Kasrah ajoutée)</span>
              <span className="font-ar text-3xl text-bad line-through block" dir="rtl">عَبِدِهِۦ</span>
              <span className="font-mono text-xs text-bad mt-1 block">\'Abi-dihī ❌</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-ink leading-relaxed text-left bg-soft p-3 rounded-xl border border-line">
            ⚠️ <strong>Règle d'or :</strong> Ne bougez JAMAIS la mâchoire ou les lèvres lors du rebond ! Si vous ouvrez la bouche, le rebond devient une Fathah parasite (Lahn Khafī).
          </p>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-card border border-gold/40 shadow-sm space-y-4 max-w-xl mx-auto animate-fade">
          <div className="flex items-center justify-between">
            <span className="chip chip-gold text-xs font-bold">
              Lettres Intruse : Hams vs Qalqalah
            </span>
            <span className="text-xs text-muted">Livre p. 132</span>
          </div>

          <div className="space-y-2 text-left text-xs">
            <div className="p-3 rounded-xl bg-soft border border-line flex items-center justify-between gap-3">
              <div>
                <span className="font-bold text-ink">1. La lettre Kāf (ك) : « Wastakbara » (وَٱسۡتَكۡبَرَ)</span>
                <p className="text-muted text-[11px] mt-0.5">Le Kāf a du souffle (Hams), JAMAIS de Qalqalah ! Ne dites pas « Wastakabara ».</p>
              </div>
              <span className="chip chip-izhar shrink-0">Hams pur</span>
            </div>

            <div className="p-3 rounded-xl bg-soft border border-line flex items-center justify-between gap-3">
              <div>
                <span className="font-bold text-ink">2. La lettre Tā' (ت) : « Al-Atqā » (ٱلۡأَتۡقَىٰ)</span>
                <p className="text-muted text-[11px] mt-0.5">Le Tā' a un léger filet d'air libéré, JAMAIS de rebond ! Ne dites pas « Al-Ataqā ».</p>
              </div>
              <span className="chip chip-izhar shrink-0">Hams pur</span>
            </div>

            <div className="p-3 rounded-xl bg-soft border border-line flex items-center justify-between gap-3">
              <div>
                <span className="font-bold text-ink">3. La lettre 'Ayn (ع) : « Na'budu » (نَعۡبُدُ)</span>
                <p className="text-muted text-[11px] mt-0.5">Le 'Ayn est une consonne intermédiaire (Tawassut) : ne secouez pas la gorge ! Ne dites pas « Na'abudu ».</p>
              </div>
              <span className="chip chip-gold shrink-0">Tawassut</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-ink leading-relaxed text-left bg-soft p-3 rounded-xl border border-line">
            💡 <strong>Seules les 5 lettres de « Qutb Jadd » (قُطْبُ جَدٍّ) ont droit à la Qalqalah !</strong> Faire rebondir toute autre consonne est une altération phonétique prohibée.
          </p>
        </div>
      )}
    </div>
  );
};

/** =========================================================================
 * CHAPITRE 11 : L'ASSIMILATION (IDGHĀM MUTAMĀTHILAYN, ETC.)
 * ========================================================================= */

/** Écran 1 : Idghām Al-Mutamāthilayn (Lettres Identiques) */
const MutamathilaynFusionVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedCase, setSelectedCase] = useState<'words' | 'single' | 'vowelTrap'>('words');

  const caseData = {
    words: {
      title: 'Entre deux mots séparés : « Wa-qad dakhalū » (وَقَد دَّخَلُواْ)',
      surahRef: 'Al-Mā\'idah 5:61',
      arabicDisplay: 'وَقَد دَّخَلُواْ',
      formula: '[ دْ sans voyelle ] + [ دَ voyellé ] = [ دَّ doublé avec Shaddah ]',
      pronunciation: 'Wa-qad-dakhalū (Le 1er Dāl fond sans aucune Qalqalah !)',
      badge: 'Fusion Totale (Idghām Kāmil)',
      badgeClass: 'chip-idgham',
      explanation: 'Le Dāl de « Qad » est nu dans le Muṣ-ḥaf (aucun signe de soukoûn). Il disparaît à 100% dans le Dāl suivant qui prend une Shaddah. Il est formellement interdit de faire une Qalqalah sur le premier Dāl !',
    },
    single: {
      title: 'Dans un seul et même mot : « Yudrikkumu » (يُدۡرِككُّمُ)',
      surahRef: 'An-Nisā\' 4:78',
      arabicDisplay: 'يُدۡرِككُّمُ ٱلۡمَوۡتُ',
      formula: '[ كْ sans voyelle ] + [ كُ voyellé ] = [ كُّ doublé avec Shaddah ]',
      pronunciation: 'Yudrik-kumu-l-mawt (Kāf Mushaddadah)',
      badge: 'Fusion Intramot',
      badgeClass: 'chip-idgham',
      explanation: 'L\'assimilation d\'identiques peut avoir lieu à l\'intérieur d\'un même mot. Le premier Kāf est nu et s\'absorbe directement dans le second qui porte une Shaddah.',
    },
    vowelTrap: {
      title: 'Le piège : 1ère lettre voyellée ➔ PAS d\'Idghām ! (نُؤۡمِنُ بِبَعۡضٖ)',
      surahRef: 'An-Nisā\' 4:150',
      arabicDisplay: 'نُؤۡمِنُ بِبَعۡضٖ وَنَكۡفُرُ بِبَعۡضٖ',
      formula: '[ بِ voyellé avec Kasrah ] + [ بَ voyellé ] ➔ IZHĀR OBLIGATOIRE !',
      pronunciation: 'Bi-ba\'d (Deux Bā\' distincts prononcés clairement)',
      badge: '⚠️ Izhār Obligatoire (Pas de Soukoûn)',
      badgeClass: 'chip-qalqalah',
      explanation: 'Condition sine qua non : La première lettre DOIT porter un soukoûn ! Si la première lettre porte une voyelle (comme la Kasrah dans « Bi-ba\'d »), l\'assimilation est strictement interdite en lecture de Hafs : vous devez prononcer chaque lettre avec clarté.',
    },
  };

  const curr = caseData[selectedCase];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        L'assimilation parfaite de deux consonnes strictement identiques
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
        <button
          onClick={() => setSelectedCase('words')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedCase === 'words' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          Entre 2 Mots (وَقَد دَّخَلُواْ)
        </button>
        <button
          onClick={() => setSelectedCase('single')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedCase === 'single' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          Même Mot (يُدۡرِككُّمُ)
        </button>
        <button
          onClick={() => setSelectedCase('vowelTrap')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedCase === 'vowelTrap' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          Piège : Voyelle (نُؤۡمِنُ بِبَعۡضٖ)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 max-w-xl mx-auto">
        <div className="flex items-center justify-between">
          <span className={`chip ${curr.badgeClass} text-xs font-bold`}>
            {curr.badge}
          </span>
          <span className="text-xs text-muted">{curr.surahRef}</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.arabicDisplay}
        </div>

        <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-ink">
          {curr.formula}
        </div>

        <div className="p-3 rounded-xl bg-card border border-line text-xs sm:text-sm text-left">
          <span className="font-semibold text-muted block mb-1">Prononciation exacte :</span>
          <span className="text-good font-bold font-mono text-sm block">{curr.pronunciation}</span>
          <p className="text-xs text-muted mt-2 pt-2 border-t border-line/60">
            {curr.explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : L'Exception Sacrée des Lettres de Madd (فِى يُوسُفَ & ءَامَنُواْ وَعَمِلُواْ) */
const MaddExceptionsVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedLetter, setSelectedLetter] = useState<'ya' | 'waw'>('ya');

  const exceptionData = {
    ya: {
      title: 'Le Yā\' de Madd : « Fī Yūsufa » (فِى يُوسُفَ)',
      surahRef: 'Yūsuf 12:7',
      verseArabic: 'لَّقَدۡ كَانَ فِى يُوسُفَ وَإِخۡوَتِهِۦٓ ءَايَٰتٞ',
      segment: 'فِى يُوسُفَ',
      maddLetterInfo: '1. Yā\' de « Fī » = Voyelle longue née d\'Al-Jawf (le vide de la bouche/gorge)',
      consonantInfo: '2. Yā\' de « Yūsuf » = Consonne articulée au milieu de la langue (Al-Lisān)',
      correctSound: '« Fī » (2 temps de Madd complets) ➔ puis « Yūsuf » distinct',
      trapSound: '❌ « Fiy-yūsuf » (Assimiler et supprimer la voyelle longue)',
      reason: 'Comme les deux lettres ne partagent PAS le même point d\'articulation, elles ne sont PAS identiques phonétiquement ! Les assimiler anéantirait la voyelle longue.',
    },
    waw: {
      title: 'Le Wāw de Madd : « Āmanū wa \'amilū » (ءَامَنُواْ وَعَمِلُواْ)',
      surahRef: 'Hūd 11:23',
      verseArabic: 'إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ',
      segment: 'ءَامَنُواْ وَعَمِلُواْ',
      maddLetterInfo: '1. Wāw de « Āmanū » = Voyelle longue issue d\'Al-Jawf (2 temps)',
      consonantInfo: '2. Wāw de « wa » = Consonne articulée au niveau des deux lèvres',
      correctSound: '« Āmanū » (2 temps de Madd complets) ➔ puis « Wa » distinct',
      trapSound: '❌ « Āmanuw-wa » (Former une Shaddah sur le Wāw en escamotant le Madd)',
      reason: 'Le Coran interdit d\'assimiler une lettre de Madd dans une consonne. L\'Izhār avec 2 temps de Madd est une obligation absolue pour respecter la parole divine !',
    },
  };

  const curr = exceptionData[selectedLetter];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        L'interdiction absolue de fusionner les lettres de prolongation (Madd)
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedLetter('ya')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedLetter === 'ya' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          Yā\' de Madd (فِى يُوسُفَ)
        </button>
        <button
          onClick={() => setSelectedLetter('waw')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedLetter === 'waw' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          Wāw de Madd (ءَامَنُواْ وَعَمِلُواْ)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-gold/40 shadow-sm space-y-4 max-w-xl mx-auto">
        <div className="flex items-center justify-between">
          <span className="chip chip-gold text-xs font-bold">
            Izhār Obligatoire (2 Temps de Madd)
          </span>
          <span className="text-xs text-muted">{curr.surahRef}</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.verseArabic}
        </div>

        <div className="grid sm:grid-cols-2 gap-2 text-left text-xs">
          <div className="p-3 rounded-xl bg-good-bg border border-good/40">
            <span className="font-bold text-good block mb-1">✅ Prononciation Conforme</span>
            <span className="font-mono text-xs text-ink block">{curr.correctSound}</span>
          </div>
          <div className="p-3 rounded-xl bg-bad-bg border border-bad/40">
            <span className="font-bold text-bad block mb-1">❌ Piège Sacrilège (Idghām Faux)</span>
            <span className="font-mono text-xs text-bad line-through block">{curr.trapSound}</span>
          </div>
        </div>

        <div className="space-y-1.5 text-xs text-left bg-soft p-3 rounded-xl border border-line">
          <p className="text-ink">• {curr.maddLetterInfo}</p>
          <p className="text-ink">• {curr.consonantInfo}</p>
          <p className="text-muted pt-2 border-t border-line/60 font-semibold">{curr.reason}</p>
        </div>
      </div>
    </div>
  );
};

/** Écran 3 : Les 8 Cas d'Assimilation Totale (Kāmil) */
const EightSimilarCasesScannerVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const cases = [
    {
      pair: 'ب ➔ م',
      arabicText: 'يَٰبُنَىَّ ٱرۡكَب مَّعَنَا',
      readAs: 'Irkam-ma\'anā',
      surahRef: 'Hūd 11:42',
      badge: 'Ghunnah 2 Temps !',
      badgeColor: 'chip-idgham',
      desc: 'Cas unique dans tout le Coran : le Bā\' sans voyelle fond entièrement dans le Mīm avec 2 pulsations de résonance nasale.',
    },
    {
      pair: 'ق ➔ ك',
      arabicText: 'أَلَمۡ نَخۡلُقكُّم مِّن مَّآءٖ',
      readAs: 'Nakhlukkum',
      surahRef: 'Al-Mursalāt 77:20',
      badge: 'Kāf Mushaddadah',
      badgeColor: 'chip-izhar',
      desc: 'Selon la voie d\'Ash-Shātibiyyah, le Qāf fond totalement dans le Kāf : récitez un pur Kāf avec Shaddah.',
    },
    {
      pair: 'د ➔ ت',
      arabicText: 'قَد تَّبَيَّنَ ٱلرُّشۡدُ',
      readAs: 'Qat-tabayyana',
      surahRef: 'Al-Baqarah 2:256',
      badge: 'Mutajānisayn',
      badgeColor: 'chip-izhar',
      desc: 'Le Dāl et le Tā\' partagent le même point d\'articulation. Le Dāl disparaît dans le Tā\' doublé.',
    },
    {
      pair: 'ت ➔ د',
      arabicText: 'فَلَمَّآ أَثۡقَلَت دَّعَوَا ٱللَّهَ',
      readAs: 'Athqalad-da\'awallāh',
      surahRef: 'Al-A\'rāf 7:189',
      badge: 'Mutajānisayn',
      badgeColor: 'chip-izhar',
      desc: 'Le Tā\' féminin sans voyelle fond totalement dans le Dāl avec Shaddah.',
    },
    {
      pair: 'ل ➔ ر',
      arabicText: 'بَل رَّفَعَهُ ٱللَّهُ إِلَيۡهِ',
      readAs: 'Bar-rafa\'ahu',
      surahRef: 'An-Nisā\' 4:158',
      badge: 'Mutaqāribayn',
      badgeColor: 'chip-izhar',
      desc: 'La Lām de la particule « Bal » ou du verbe « Qul rabbi » fond entièrement dans le Râ\'.',
    },
    {
      pair: 'ت ➔ ط',
      arabicText: 'وَقَالَت طَّآئِفَةٞ مِّنۡ',
      readAs: 'Wa-qālat-tā\'ifah',
      surahRef: 'Āl \'Imrān 3:72',
      badge: 'Mutajānisayn',
      badgeColor: 'chip-izhar',
      desc: 'Le Tā\' léger est complètement absorbé par le Tā\' emphatique avec Shaddah.',
    },
    {
      pair: 'ذ ➔ ظ',
      arabicText: 'إِذ ظَّلَمۡتُمۡ أَنَّكُمۡ',
      readAs: 'Idh-zhalamtum',
      surahRef: 'Az-Zukhruf 43:39',
      badge: 'Mutaqāribayn',
      badgeColor: 'chip-izhar',
      desc: 'Le Dhāl disparaît dans le Zā\' lourd qui prend une Shaddah.',
    },
    {
      pair: 'ث ➔ ذ',
      arabicText: 'يَلۡهَثۚ ذَّٰلِكَ مَثَلُ',
      readAs: 'Yalhadh-dhālik',
      surahRef: 'Al-A\'rāf 7:176',
      badge: 'Cas Unique',
      badgeColor: 'chip-izhar',
      desc: 'En liaison continue, le Thā\' s\'efface complètement dans le Dhāl : « Yalhadh-dhālik ».',
    },
  ];

  const curr = cases[activeIdx];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Les 8 couples précis de lettres d'Idghām Kāmil répertoriés dans le Coran
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-1 max-w-xl mx-auto">
        {cases.map((c, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`p-1.5 rounded-xl text-xs font-bold font-ar transition-all ${
              activeIdx === i ? 'bg-lapis text-lapis-ink shadow-xs scale-105' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            {c.pair}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 max-w-xl mx-auto animate-fade">
        <div className="flex items-center justify-between">
          <span className={`chip ${curr.badgeColor} text-xs font-bold`}>
            {curr.badge}
          </span>
          <span className="text-xs text-muted">{curr.surahRef}</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.arabicText}
        </div>

        <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-ink">
          Prononciation en liaison : <strong className="text-good">{curr.readAs}</strong>
        </div>

        <p className="text-xs sm:text-sm text-ink leading-relaxed bg-soft/60 p-3 rounded-xl border border-line/60 text-left">
          {curr.desc}
        </p>
      </div>
    </div>
  );
};

/** Écran 4 : L'Assimilation Partielle (Idghām Nāqis : ط dans ت) */
const IdghamNaqisHeavyToLightVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedWord, setSelectedWord] = useState<'basatta' | 'ahattu'>('basatta');

  const words = {
    basatta: {
      wordArabic: 'بَسَطتَ',
      verseArabic: 'لَئِنۢ بَسَطتَ إِلَىَّ يَدَكَ لِتَقۡتُلَنِى',
      surahRef: 'Al-Mā\'idah 5:28',
      step1: '1. Scellez le Tā\' lourd (ط) : Plaquez fermement la langue contre le palais avec emphase (Tafkhīm) et écrasement (Itbāq), SANS faire de Qalqalah !',
      step2: '2. Libérez sur le Tā\' fin (ت) : Décollez la langue en prononçant un Tā\' doux avec Fathah (« Basat-ta »).',
    },
    ahattu: {
      wordArabic: 'أَحَطتُ',
      verseArabic: 'فَقَالَ أَحَطتُ بِمَا لَمۡ تُحِطۡ بِهِۦ',
      surahRef: 'An-Naml 27:22',
      step1: '1. Scellez le Tā\' lourd (ط) : La lourdeur du Tā\' est bloquée au palais sans aucun rebond acoustique.',
      step2: '2. Libérez sur le Tā\' fin (ت) : Ouvrez sur la Dammah du Tā\' (« Ahat-tu »).',
    },
  };

  const curr = words[selectedWord];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Le mystère de l'Idghām Nāqis : Pourquoi la lettre forte ne peut disparaître
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setSelectedWord('basatta')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'basatta' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          بَسَطتَ (Al-Mā\'idah 5:28)
        </button>
        <button
          onClick={() => setSelectedWord('ahattu')}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedWord === 'ahattu' ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          أَحَطتُ (An-Naml 27:22)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-qalqalah/40 shadow-sm space-y-4 max-w-xl mx-auto">
        <div className="flex items-center justify-between">
          <span className="chip chip-qalqalah text-xs font-bold">
            Idghām Nāqis (Assimilation Partielle)
          </span>
          <span className="text-xs text-muted">{curr.surahRef}</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.verseArabic}
        </div>

        {/* 2-Step Decomposition */}
        <div className="space-y-2 text-left text-xs">
          <div className="p-3 rounded-xl bg-good-bg border border-good/40">
            <span className="font-bold text-good block mb-0.5">Étape 1 : Le Tā\' lourd bloqué</span>
            <p className="text-ink leading-relaxed">{curr.step1}</p>
          </div>
          <div className="p-3 rounded-xl bg-soft border border-line">
            <span className="font-bold text-ink block mb-0.5">Étape 2 : Le Tā\' fin libéré</span>
            <p className="text-muted leading-relaxed">{curr.step2}</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-soft text-xs text-ink leading-relaxed text-left border border-line">
          ⚠️ <strong>Règle d'or du Dr. Islām Fekry :</strong> Le Tā\' (ط) possède des attributs de force absolue (Isti\'lā\' et Itbāq). Comme une lettre faible (ت) ne peut pas anéantir une lettre forte, l\'emphase survit obligatoirement mais la Qalqalah est éteinte !
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   CHAPITRE 12 : Mini-composants interactifs et didactiques (Tafkhīm & Tarqīq)
   ========================================================================= */

/** Écran 1 : Les 7 Lettres d'Isti'lā' & Les 5 Degrés de Tafkhīm */
const HeavyLettersMouthShapeVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedDegree, setSelectedDegree] = useState<1 | 2 | 3 | 4 | 5>(1);

  const degrees = {
    1: {
      name: '1er Degré (Sommet)',
      condition: 'Lettre lourde + Fathah + ALIF',
      arabicExample: 'ٱلصَّٰبِرِينَ',
      verseRef: 'Āl \'Imrān 3:17',
      mechanics: 'La voyelle longue Alif prolonge l\'écho caverneux créé par l\'arrière de la langue élevée au voile du palais.',
      lipsStatus: 'Lèvres neutres et immobiles (PAS de moue !)',
      badgeClass: 'chip-bad',
    },
    2: {
      name: '2e Degré (Plein)',
      condition: 'Lettre lourde + FATHAH (sans Alif)',
      arabicExample: 'خَلَقَ ٱلۡإِنسَٰنَ',
      verseRef: 'Al-\'Alaq 96:2',
      mechanics: 'La Fathah ouvre la mâchoire verticalement pendant que la racine de la langue remplit le pharynx.',
      lipsStatus: 'Lèvres détendues sans projection vers l\'avant.',
      badgeClass: 'chip-bad',
    },
    3: {
      name: '3e Degré (Intermédiaire)',
      condition: 'Lettre lourde + DAMMAH',
      arabicExample: 'يَقُولُ ٱلَّذِينَ',
      verseRef: 'Al-Baqarah 2:113',
      mechanics: 'Seul cas où les lèvres s\'arrondissent légitimement, car la voyelle Dammah exige le travail des lèvres !',
      lipsStatus: 'Arrondissement permis pour la voyelle « Ou », pas pour l\'emphase !',
      badgeClass: 'chip-gold',
    },
    4: {
      name: '4e Degré (Stable)',
      condition: 'Lettre lourde + SOUKOÛN',
      arabicExample: 'يَخۡشَى ٱللَّهَ',
      verseRef: 'Fāṭir 35:28',
      mechanics: 'Le son de la lettre lourde est figé sans voyelle : la cavité pharyngienne conserve sa forme haute.',
      lipsStatus: 'Lèvres parfaitement immobiles.',
      badgeClass: 'chip-izhar',
    },
    5: {
      name: '5e Degré (Adouci mais Présent)',
      condition: 'Lettre lourde + KASRAH',
      arabicExample: 'صِرَٰطَ ٱلَّذِينَ',
      verseRef: 'Al-Fātihah 1:7',
      mechanics: 'La Kasrah tire la langue vers le bas, mais l\'arrière de la langue résiste et reste relevé. Ne dites JAMAIS « Sirate » avec un Sīn fin !',
      lipsStatus: 'Légère ouverture souriante sans trahir l\'Isti\'lā\'.',
      badgeClass: 'chip-qalqalah',
    },
  };

  const curr = degrees[selectedDegree];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Les 7 Lettres خُصَّ ضَغۡطٍ قِظۡ & la Hiérarchie d'Ibn Al-Jazarī
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 max-w-lg mx-auto">
        {([1, 2, 3, 4, 5] as const).map(deg => (
          <button
            key={deg}
            onClick={() => setSelectedDegree(deg)}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedDegree === deg
                ? 'bg-lapis text-lapis-ink shadow-xs scale-105'
                : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            Degré {deg}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 max-w-xl mx-auto animate-fade">
        <div className="flex items-center justify-between">
          <span className={`chip ${curr.badgeClass} text-xs font-bold`}>
            {curr.name}
          </span>
          <span className="text-xs text-muted font-mono">{curr.condition}</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.arabicExample}
        </div>
        <div className="text-xs text-muted">{curr.verseRef}</div>

        <div className="grid sm:grid-cols-2 gap-2 text-left text-xs">
          <div className="p-3 rounded-xl bg-good-bg border border-good/40">
            <span className="font-bold text-good block mb-0.5">Mécanique Linguale</span>
            <p className="text-ink leading-relaxed">{curr.mechanics}</p>
          </div>
          <div className="p-3 rounded-xl bg-soft border border-line">
            <span className="font-bold text-ink block mb-0.5">Position des Lèvres</span>
            <p className="text-muted leading-relaxed">{curr.lipsStatus}</p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-bad-bg/60 border border-bad/30 text-xs text-left text-ink leading-relaxed">
          🚫 <strong>Le Piège Fatal des Lèvres Rondes :</strong> Arrondir les lèvres sur une lettre lourde sans Dammah (ex: faire la moue sur « Khā ») est une erreur courante. L\'emphase naît <em>au fond de la gorge</em>, jamais avec les lèvres !
        </div>
      </div>
    </div>
  );
};

/** Écran 2 : Les Lettres Hybrides I (Alif Caméléon & Le Nom d'Allah) */
const ChameleonAlifAndLamVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [activeTab, setActiveTab] = useState<'alif' | 'lam'>('alif');
  const [alifType, setAlifType] = useState<'heavy' | 'light'>('heavy');
  const [lamType, setLamType] = useState<'fathah' | 'dammah' | 'kasrah'>('fathah');

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        Les 2 Caméléons : L'Alif dépendant & La Lām du Nom Divin
      </div>

      <div className="segmented max-w-xs mx-auto">
        <button
          onClick={() => setActiveTab('alif')}
          aria-pressed={activeTab === 'alif'}
        >
          L'Alif Caméléon (ا)
        </button>
        <button
          onClick={() => setActiveTab('lam')}
          aria-pressed={activeTab === 'lam'}
        >
          La Lām d'Allah (ٱللَّه)
        </button>
      </div>

      {activeTab === 'alif' ? (
        <div className="space-y-4 max-w-xl mx-auto animate-fade">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setAlifType('heavy')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                alifType === 'heavy' ? 'bg-bad text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              Alif Lourd (après خُصَّ ضَغۡطٍ قِظۡ)
            </button>
            <button
              onClick={() => setAlifType('light')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                alifType === 'light' ? 'bg-good text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              Alif Fin (après lettres légères)
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-3">
            <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
              {alifType === 'heavy' ? 'خَٰلِدِينَ فِيهَا' : 'إِيَّاكَ نَعۡبُدُ'}
            </div>
            <div className="text-xs text-muted">
              {alifType === 'heavy' ? 'Al-Baqarah 2:82' : 'Al-Fātihah 1:5'}
            </div>

            <div className={`p-3.5 rounded-xl text-xs sm:text-sm text-left leading-relaxed ${
              alifType === 'heavy' ? 'bg-bad-bg border border-bad/30 text-ink' : 'bg-good-bg border border-good/30 text-ink'
            }`}>
              {alifType === 'heavy' ? (
                <>
                  🔥 <strong>Alif Emphatique :</strong> L'Alif succède à la consonne lourde Khā (خ). Il s'imprègne de son écho et remplit la bouche d'une ampleur caverneuse (« Khāālidīn »).
                </>
              ) : (
                <>
                  ✨ <strong>Alif Aminci (Tarqīq) :</strong> L'Alif succède au Yā' (ي), consonne légère d'Istifāl. Le son est fin, ouvert, lumineux et souriant (« Iyyāāka »).
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4 max-w-xl mx-auto animate-fade">
          <div className="flex justify-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setLamType('fathah')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                lamType === 'fathah' ? 'bg-bad text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              Après Fathah (ـَ)
            </button>
            <button
              onClick={() => setLamType('dammah')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                lamType === 'dammah' ? 'bg-bad text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              Après Dammah (ـُ)
            </button>
            <button
              onClick={() => setLamType('kasrah')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                lamType === 'kasrah' ? 'bg-good text-card shadow-xs' : 'bg-soft text-muted hover:text-ink'
              }`}
            >
              Après Kasrah (ـِ)
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-3">
            <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
              {lamType === 'fathah' && 'شَهِدَ ٱللَّهُ'}
              {lamType === 'dammah' && 'نَصۡرُ ٱللَّهِ'}
              {lamType === 'kasrah' && 'بِسۡمِ ٱللَّهِ'}
            </div>
            <div className="text-xs text-muted">
              {lamType === 'fathah' && 'Āl \'Imrān 3:18'}
              {lamType === 'dammah' && 'An-Nasr 110:1'}
              {lamType === 'kasrah' && 'Al-Fātihah 1:1'}
            </div>

            <div className={`p-3.5 rounded-xl text-xs sm:text-sm text-left leading-relaxed ${
              lamType === 'kasrah' ? 'bg-good-bg border border-good/30 text-ink' : 'bg-bad-bg border border-bad/30 text-ink'
            }`}>
              {lamType === 'kasrah' ? (
                <>
                  🌿 <strong>Tarqīq (Lām Mince) :</strong> La Kasrah sous le Mīm (« Bismi ») impose la finesse. Le Nom Sacré est prononcé avec humilité et douceur : « Bismi-Llāh ».
                </>
              ) : (
                <>
                  👑 <strong>Tafkhīm (Lām Majestueux) :</strong> La {lamType === 'fathah' ? 'Fathah' : 'Dammah'} précédente commande la force et la grandeur. La Lām résonne avec plénitude : « {lamType === 'fathah' ? 'Shahida-Llāh' : 'Nasru-Llāh'} ».
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/** Écran 3 : La Râ' (ر) & Ses 4 Règles de Tarqīq */
const RaaRulesMatrixVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const cases = [
    {
      title: 'Cas 1 : Kasrah Directe',
      badge: 'Tarqīq Immédiat',
      badgeColor: 'chip-izhar',
      arabicText: 'فَرِحِينَ بِمَآ ءَاتَىٰهُمُ',
      readAs: 'Farihīna',
      surahRef: 'Āl \'Imrān 3:170',
      ruleDesc: 'La Râ\' porte elle-même une voyelle Kasrah (ـِ) : elle s\'amincit instantanément sans hésitation.',
    },
    {
      title: 'Cas 2 : Soukoûn après Kasrah originelle',
      badge: 'Tarqīq Conditionnel',
      badgeColor: 'chip-izhar',
      arabicText: 'وَإِذۡ نَجَّيۡنَٰكُم مِّنۡ ءَالِ فِرۡعَوۡنَ',
      readAs: 'Fir\'awna',
      surahRef: 'Al-Baqarah 2:49',
      ruleDesc: 'Râ\' sākinah précédée d\'une Kasrah originelle dans le même mot, et NON suivie d\'une lettre lourde.',
    },
    {
      title: 'Cas 3 : Waqf après Soukoûn après Kasrah',
      badge: 'Tarqīq à l\'Arrêt',
      badgeColor: 'chip-izhar',
      arabicText: 'هَلۡ فِى ذَٰلِكَ قَسَمٞ لِّذِى حِجۡرٍ',
      readAs: 'Li-dhī Hijr',
      surahRef: 'Al-Fajr 89:5',
      ruleDesc: 'À l\'arrêt sur « Hijr », la Kasrah du Hā\' traverse le Jīm soukouné pour adoucir la Râ\' finale.',
    },
    {
      title: 'Cas 4 : Waqf après Yā\' Sākinah',
      badge: 'Tarqīq Soyeux',
      badgeColor: 'chip-izhar',
      arabicText: 'إِنَّ ٱللَّهَ بِمَا تَعۡمَلُونَ خَبِيرٌ',
      readAs: 'Khabīr',
      surahRef: 'Al-Baqarah 2:234',
      ruleDesc: 'À l\'arrêt après un Yā\' de prolongation ou de Līn (Khayr, Bashīr), la Râ\' est obligatoirement fine.',
    },
    {
      title: 'Exception : Suivie d\'une lettre lourde !',
      badge: 'Tafkhīm Malgré Kasrah !',
      badgeColor: 'chip-bad',
      arabicText: 'كِتَٰبٗا فِى قِرۡطَاسٖ فَلَمَسُوهُ',
      readAs: 'Qirṭās (Tā\' lourd)',
      surahRef: 'Al-An\'ām 6:7',
      ruleDesc: 'Même précédée d\'une Kasrah, la Râ\' reste LOURDE car le Tā\' (ط) emphatique avec Fathah suit dans le même mot !',
    },
  ];

  const curr = cases[selectedCase];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        La Râ' est lourde par défaut ! Voici ses 4 portes d'amincissement (Tarqīq)
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 max-w-xl mx-auto">
        {cases.map((c, i) => (
          <button
            key={i}
            onClick={() => setSelectedCase(i)}
            className={`p-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCase === i ? 'bg-lapis text-lapis-ink shadow-xs scale-105' : 'bg-soft text-muted hover:text-ink'
            }`}
          >
            {c.title.split(':')[0]}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 max-w-xl mx-auto animate-fade">
        <div className="flex items-center justify-between">
          <span className={`chip ${curr.badgeColor} text-xs font-bold`}>
            {curr.badge}
          </span>
          <span className="text-xs text-muted">{curr.surahRef}</span>
        </div>

        <div className="font-ar text-4xl sm:text-5xl text-ink leading-tight py-2" dir="rtl">
          {curr.arabicText}
        </div>

        <div className="p-3 rounded-xl bg-soft text-xs sm:text-sm font-mono text-ink">
          Phonétique : <strong className="text-good">{curr.readAs}</strong>
        </div>

        <p className="text-xs sm:text-sm text-ink leading-relaxed bg-soft/60 p-3 rounded-xl border border-line/60 text-left">
          {curr.ruleDesc}
        </p>
      </div>
    </div>
  );
};

/** Écran 4 : Takhlees Al-Hurūf (Le Laboratoire de Décontamination) */
const TakhleesLetterDecontaminationVisual: React.FC<{ animKey: number }> = ({ animKey }) => {
  const [wordIdx, setWordIdx] = useState<0 | 1>(0);

  const words = [
    {
      word: 'خَلَقَ',
      title: 'Khalaqa (Al-\'Alaq 96:2)',
      segments: [
        { letter: 'خَ', type: 'heavy', label: 'Khā (Lourd)', desc: 'Isti\'lā\' : Arrière de la langue relevé, son caverneux' },
        { letter: 'لَ', type: 'light', label: 'Lām (Fin !)', desc: 'Istifāl : Abaissement instantané de la langue, son mince et souriant' },
        { letter: 'قَ', type: 'heavy', label: 'Qāf (Lourd)', desc: 'Isti\'lā\' : Remontée ferme de la racine linguale' },
      ],
      danger: 'Ne prononcez JAMAIS « Kha-LÂ-qa » ! Le Lām doit rester pur et cristallin entre les deux géants.',
    },
    {
      word: 'وَٱلۡمُطَلَّقَٰتُ',
      title: 'Al-Muṭallaqāt (Al-Baqarah 2:228)',
      segments: [
        { letter: 'مُ', type: 'light', label: 'Mīm (Fin)', desc: 'Léger avec Dammah' },
        { letter: 'طَ', type: 'heavy', label: 'Tā\' (Lourd)', desc: 'Itbāq et Isti\'lā\' puissants' },
        { letter: 'لَّ', type: 'light', label: 'Lām (Fin !)', desc: 'Le double Lām reste mince !' },
        { letter: 'قَٰ', type: 'heavy', label: 'Qāf + Alif (Lourd)', desc: 'Degré 1 maximal de Tafkhīm' },
        { letter: 'تُ', type: 'light', label: 'Tā\' (Fin)', desc: 'Relâchement complet' },
      ],
      danger: 'Alternance virtuose Fin ➔ Lourd ➔ Fin ➔ Lourd ➔ Fin !',
    },
  ];

  const curr = words[wordIdx];

  return (
    <div key={animKey} className="py-6 px-4 text-center select-none space-y-5">
      <div className="label">
        L'Art Suprême du Tajwīd : Alterner les calibres sans contamination
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setWordIdx(0)}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            wordIdx === 0 ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          خَلَقَ (3 Lettres)
        </button>
        <button
          onClick={() => setWordIdx(1)}
          className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            wordIdx === 1 ? 'bg-lapis text-lapis-ink shadow-xs' : 'bg-soft text-muted hover:text-ink'
          }`}
        >
          وَٱلۡمُطَلَّقَٰتُ (Chirurgie 5 Lettres)
        </button>
      </div>

      <div className="p-5 rounded-2xl bg-card border border-line shadow-sm space-y-4 max-w-xl mx-auto animate-fade">
        <div className="text-xs text-muted font-bold">{curr.title}</div>

        {/* Word Display with color-coded letters */}
        <div className="flex items-center justify-center gap-3 py-3" dir="rtl">
          {curr.segments.map((seg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-2xl border text-center transition-all ${
                seg.type === 'heavy'
                  ? 'bg-bad-bg border-bad/40 text-bad'
                  : 'bg-good-bg border-good/40 text-good'
              }`}
            >
              <span className="font-ar text-4xl block font-bold">{seg.letter}</span>
              <span className="text-[10px] uppercase font-bold tracking-wider block mt-1">
                {seg.type === 'heavy' ? 'Lourd' : 'Fin'}
              </span>
            </div>
          ))}
        </div>

        {/* Breakdown of each segment */}
        <div className="space-y-1.5 text-xs text-left">
          {curr.segments.map((seg, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-soft border border-line flex items-start gap-2">
              <span className={`w-2 h-2 rounded-full mt-1 shrink-0 ${seg.type === 'heavy' ? 'bg-bad' : 'bg-good'}`} />
              <div>
                <strong className={seg.type === 'heavy' ? 'text-bad' : 'text-good'}>{seg.label} : </strong>
                <span className="text-ink">{seg.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-soft text-xs text-ink leading-relaxed text-left border border-line">
          ⚠️ <strong>Avertissement pédagogique :</strong> {curr.danger}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   COMPOSANT PRINCIPAL
   ========================================================================= */

export const AnimatedProfessor: React.FC<AnimatedProfessorProps> = ({ chapter }) => {
  const [screenIndex, setScreenIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  // Reset to first screen when chapter changes
  useEffect(() => {
    setScreenIndex(0);
    setAnimKey(0);
  }, [chapter.number]);

  const restartAnimation = () => {
    setAnimKey(prev => prev + 1);
  };

  // Screens for Chapter 1 (Basic Concepts & Lahn)
  const chapter1Screens = [
    {
      title: 'Al-Lahn Al-Jalī (اللَّحْنُ الجَلِيُّ) : L\'erreur majeure',
      badge: 'Erreur Majeure (Harām)',
      concept: 'Une seule voyelle déplacée peut inverser le Créateur et la créature',
      renderVisual: () => <LahnJaliVisual animKey={animKey} />,
      explanation: 'Le Lahn Jalī altère le sens du texte ou les règles fondamentales de la grammaire. Dans Al-Fātihah, dire « An\'amtu » (J\'ai comblé) au lieu de « An\'amta » (Tu as comblé) constitue une déformation grave qui peut invalider votre prière.'
    },
    {
      title: 'Al-Lahn Al-Khafī (اللَّحْنُ الخَفِيُّ) : L\'erreur subtile',
      badge: 'Erreur Subtile (Makrūh)',
      concept: 'Quand le sens reste intact mais que l\'ornement du Tajwīd est tronqué',
      renderVisual: () => <LahnKhafiVisual animKey={animKey} />,
      explanation: 'Le Lahn Khafī ne modifie pas le sens du mot, mais prive la récitation de sa perfection transmise : raccourcir un Madd obligatoire de 4 temps à 2 temps, oublier une Ghunnah de 2 temps, ou escamoter une Qalqalah.'
    },
    {
      title: 'Le Rasm \'Uthmānī (الرَّسْمُ العُثْمَانِيُّ)',
      badge: 'L\'Orthographe Sacrée',
      concept: 'Le Coran ne s\'écrit pas selon l\'orthographe profane moderne',
      renderVisual: () => <RasmUthmaniVisual animKey={animKey} />,
      explanation: 'Les Compagnons ont transcrit le Coran sous le Calife \'Uthmān avec une graphie sacrée intouchable. Des mots comme As-Salāh (ٱلصَّلَوٰةَ) s\'écrivent avec un Wāw surmonté d\'un petit Alif vertical : seule la tradition orale enseigne comment le lire !'
    },
    {
      title: 'Mnémonique des 6236 Versets & Les 3 Vitesses',
      badge: 'Mnémonique & Rythmes',
      concept: 'Retenir le nombre de versets en 3 secondes et adapter sa vitesse de lecture',
      renderVisual: () => <MnemonicVersesVisual animKey={animKey} />,
      explanation: '23 ans de prophétie entourés de 6 au début et 6 à la fin donnent 6236 versets. Vous pouvez les réciter selon 3 rythmes légitimes : At-Tahqīq (lent), At-Tadwīr (modéré) ou Al-Hadr (rapide), sans jamais sacrifier le Tajwīd.'
    }
  ];

  // Screens for Chapter 2 (Quranic Symbols)
  const chapter2Screens = [
    {
      title: 'Waqf Lāzim (مـ) vs Le Danger de Lā (لا)',
      badge: 'Sens & Interdictions',
      concept: 'Où respirer pour ne pas inverser ou tronquer la parole d\'Allah',
      renderVisual: () => <WaqfLazimVsLaVisual animKey={animKey} />,
      explanation: 'Le signe (مـ) impose un arrêt absolu car lier dénature le sens théologique (ex: Yā-Sīn 36:76). À l\'inverse, le signe (لا) interdit formellement de couper la récitation ou d\'aller au Rukūʿ car la phrase resterait incomplète (ex: Al-Mā\'ūn 107:4).'
    },
    {
      title: 'Al-Waqf Al-Muta\'āniq (ۛ ... ۛ) : L\'Arrêt d\'Étreinte',
      badge: 'Règle d\'Exclusivité',
      concept: 'Deux arrêts jumeaux : choisissez-en un seul, jamais les deux !',
      renderVisual: () => <MutaaniqVisual animKey={animKey} />,
      explanation: 'Dans Al-Baqarah 2:2, la double triade (ۛ ... ۛ) offre deux lectures sublimes : s\'arrêter sur « Lā rayb » OU sur « Fīh ». Mais la règle est intransigeante : vous devez choisir un seul arrêt et lier l\'autre.'
    },
    {
      title: 'Cercle Rond (ْ) vs Ovale Allongé (۠)',
      badge: 'Calligraphie & 7 Alifs',
      concept: 'Comment un simple changement de forme dicte si la lettre est prononcée',
      renderVisual: () => <TwoSifrVisual animKey={animKey} />,
      explanation: 'Le cercle parfait (ْ) annule définitivement la lettre (ex: يَفۡرَحُواْ). L\'ovale vertical (۠) signale les 7 Alifs : l\'Alif est muet en liaison rapide, mais reprend vie et se prolonge de 2 temps pleins si vous vous arrêtez dessus.'
    },
    {
      title: 'As-Saktah Al-Latīfah (السَّكْتَةُ اللَّطِيفَةُ)',
      badge: 'Silence de 2 temps',
      concept: 'Interrompre la voix sans respirer pour séparer deux vérités opposées',
      renderVisual: () => <SaktahVisual animKey={animKey} />,
      explanation: 'La Saktah (س) est un arrêt silencieux d\'environ deux battements sans reprendre de souffle. Dans la sourate Al-Kahf, elle évite de lier « \'Iwajā » (déviance) avec « Qayyimā » (droiture), préservant la clarté immaculée du Coran.'
    }
  ];

  // Screens for Chapter 8 (Nun Sakinah)
  const nunScreens = [
    {
      title: 'Qu\'est-ce que la Ghunnah (الْغُنَّةُ) ?',
      badge: 'Phonétique fondamentale',
      concept: 'Une résonance nasale mélodieuse produite dans le nez (Al-Khayshūm)',
      renderVisual: () => (
        <div key={animKey} className="py-8 px-4 text-center select-none">
          <div className="label mb-6">
            Mesure du temps de maintien (2 Harakāt)
          </div>

          <div className="relative max-w-sm mx-auto h-28 flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full border-2 border-idgham/40 animate-ping opacity-60" />
            <div className="absolute w-20 h-20 rounded-full bg-idgham-bg border border-idgham/50 flex items-center justify-center animate-ghunnah-pulse">
              <span className="font-ar text-3xl text-idgham">غُنَّة</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-11 h-11 rounded-full bg-idgham-bg flex items-center justify-center font-display text-lg text-idgham animate-pop" style={{ animationDelay: '0.2s' }}>
                1
              </div>
              <span className="text-xs text-muted">1er temps</span>
            </div>
            <span className="text-muted text-xl">+</span>
            <div className="flex flex-col items-center gap-1">
              <div className="w-11 h-11 rounded-full bg-idgham-bg flex items-center justify-center font-display text-lg text-idgham animate-pop" style={{ animationDelay: '0.6s' }}>
                2
              </div>
              <span className="text-xs text-muted">2e temps</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted mt-8 max-w-md mx-auto">
            Pendant la Ghunnah, si vous vous bouchez le nez avec vos doigts, le son s'interrompt net. C'est la preuve que 100% de la résonance passe par la cavité nasale.
          </p>
        </div>
      ),
      explanation: 'La Ghunnah est le souffle nasal qui embellit le Tajwīd. Elle est obligatoire et dure exactement 2 temps sur l\'Idghām avec Ghunnah, l\'Iqlāb et l\'Ikhfā\'.'
    },
    {
      title: 'L\'Idghām : La Fusion Magnétique',
      badge: 'Mécanisme de fusion',
      concept: 'Comment le Nūn disparaît au profit de la lettre suivante',
      renderVisual: () => (
        <div key={animKey} className="py-6 px-4 text-center select-none">
          <div className="label mb-6">
            Démonstration sur « Man ya\'mal » (مَن يَعۡمَلۡ)
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-6 my-6" dir="rtl">
            <div className="p-3 sm:p-4 rounded-2xl bg-card animate-drop" style={{ '--i': 0 } as any}>
              <span className="font-ar text-4xl sm:text-5xl leading-[1.6] text-ink block">مَنۡ</span>
              <span className="text-xs text-muted">Nūn Sākinah</span>
            </div>

            <div className="w-9 h-9 rounded-full bg-idgham text-card flex items-center justify-center text-lg animate-pop" style={{ animationDelay: '0.8s' }}>
              +
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-card animate-drop" style={{ '--i': 1 } as any}>
              <span className="font-ar text-4xl sm:text-5xl leading-[1.6] text-ink block">يَعۡمَلۡ</span>
              <span className="text-xs text-muted">Lettre Yā' (ينمو)</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-idgham-bg max-w-sm mx-auto animate-pop" style={{ animationDelay: '1.2s' }}>
            <span className="text-xs font-semibold text-idgham block">Ce que l'on prononce</span>
            <span className="font-ar text-4xl sm:text-5xl leading-[1.6] text-idgham block" dir="rtl">
              مَيَّعۡمَلۡ
            </span>
            <span className="text-sm text-idgham block">
              [ May-ya'mal ] avec Ghunnah nasale continue de 2 temps
            </span>
          </div>
        </div>
      ),
      explanation: 'Le Nūn perd sa consonne et fond entièrement dans le Yā\'. On ne prononce plus "man", mais "may-" en faisant résonner le nez.'
    },
    {
      title: 'L\'Ikhfā\' : La Langue Suspendue',
      badge: 'Le secret du zéro erreur',
      concept: 'Ne jamais coller la pointe de la langue au palais',
      renderVisual: () => (
        <div key={animKey} className="py-6 px-4 text-center select-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto my-4 text-left">
            <div className="p-4 rounded-2xl bg-bad-bg text-sm">
              <span className="font-semibold text-bad block mb-1">À éviter : un N appuyé</span>
              <p className="text-muted leading-relaxed">
                Coller la langue aux gencives supérieures en faisant un son "N" claqué et dur.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-idgham-bg text-sm">
              <span className="font-semibold text-idgham block mb-1">La bonne position</span>
              <p className="text-muted leading-relaxed">
                La langue reste <strong>suspendue dans la bouche</strong>, prête à prononcer la lettre suivante, pendant que l'air résonne dans le nez.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card max-w-md mx-auto mt-4 text-center">
            <span className="text-sm font-semibold text-ink block mb-3">La couleur de la Ghunnah s'adapte</span>
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 rounded-xl bg-ikhfa-bg text-ikhfa flex-1">
                <span className="font-ar text-2xl leading-[1.7] block" dir="rtl">مِن قَبۡلِكَ</span>
                <span className="text-xs font-semibold">Ghunnah emphatique (Tafkhīm)</span>
              </div>
              <div className="p-3 rounded-xl bg-izhar-bg text-izhar flex-1">
                <span className="font-ar text-2xl leading-[1.7] block" dir="rtl">مِن تَحۡتِهَا</span>
                <span className="text-xs font-semibold">Ghunnah légère (Tarqīq)</span>
              </div>
            </div>
          </div>
        </div>
      ),
      explanation: 'Devant les lettres lourdes (ص, ض, ط, ظ, ق), la Ghunnah prend une résonance ample et profonde. Devant les 10 autres lettres fines, elle reste claire et légère.'
    }
  ];

  // Screens for Chapter 10 (Qalqalah)
  const qalqalahScreens = [
    {
      title: 'La Nature Phonétique de la Qalqalah',
      badge: 'Entre Soukoûn & Voyelle',
      concept: 'Écartement des articulateurs SANS aucun mouvement de mâchoire',
      renderVisual: () => <QalqalahPhoneticNatureVisual animKey={animKey} />,
      explanation: 'La Qalqalah est un état intermédiaire fascinant : comme la voyelle, elle sépare les deux articulateurs sous la pression de l\'air emprisonné ; mais comme le soukoûn, elle interdit strictement tout mouvement de mâchoire ou de lèvres. Ne laissez jamais une Fathah ou une Kasrah s\'infiltrer !'
    },
    {
      title: 'Soukoûn Originel (الأَصْلِيُّ) vs Accidentel (العَارِضُ)',
      badge: 'Wasl vs Waqf',
      concept: 'Pourquoi la Qalqalah disparaît en continu sur Al-Falaq mais reste sur Khalaqnā',
      renderVisual: () => <OriginalVsTemporarySukunVisual animKey={animKey} />,
      explanation: 'Sur un soukoûn accidentel né de l\'arrêt (ex: Al-Falaqi ➔ Al-Falaq), la Qalqalah n\'existe QU\'À L\'ARRÊT. Si vous lisez en continu, vous devez prononcer la Kasrah sans aucun rebond ! En revanche, sur un soukoûn originel (ex: Khalaqnā), le rebond retentit en continu comme à l\'arrêt.'
    },
    {
      title: 'Les 3 Degrés de Puissance : Kubrā, Wustā, Sughrā',
      badge: 'Hiérarchie du Rebond',
      concept: 'Shaddah à l\'arrêt > Lettre simple à l\'arrêt > En milieu de mot',
      renderVisual: () => <ThreeDegreesInteractiveVisual animKey={animKey} />,
      explanation: 'Degré 1 Kubrā : à l\'arrêt sur Shaddah (وَتَبَّ, بِٱلۡحَقِّ), la compression puis la libération offrent le rebond le plus puissant. Degré 2 Wustā : à l\'arrêt sans Shaddah (أَحَدٌ, ٱلۡفَلَقِ). Degré 3 Sughrā : en cours de phrase (خَلَقۡنَا, يَقۡطَعُونَ), le rebond reste agile et discret.'
    },
    {
      title: 'Les Pièges Démasqués : Hams (Kāf/Tā\') & Voyelle Parasite',
      badge: 'Alertes du Dr. Fekry',
      concept: 'Éradiquer les rebonds illégitimes sur Kāf, Tā\' et \'Ayn',
      renderVisual: () => <QalqalahTrapsAndHamsVisual animKey={animKey} />,
      explanation: 'Attention aux deux fautes majeures du livre (p. 132) : 1. Ne dites jamais « Khalaqa-nā » pour خَلَقۡنَا (voyelle parasite). 2. Ne faites JAMAIS rebondir le Kāf (وَٱسۡتَكۡبَرَ), le Tā\' (ٱلۡأَتۡقَىٰ) ou le \'Ayn (نَعۡبُدُ) : le Kāf et le Tā\' ont du souffle (Hams), pas de rebond !'
    }
  ];

  // Screens for Chapter 3 (Stopping & Resuming / Waqf & Ibtidā')
  const chapter3Screens = [
    {
      title: 'La Règle d\'Or de l\'Arrêt : Le Soukoûn Universel',
      badge: 'Règle Fondamentale',
      concept: 'En arabe, on ne s\'arrête JAMAIS sur une voyelle !',
      renderVisual: () => <SukunTransformationVisual animKey={animKey} />,
      explanation: 'La règle universelle du Coran et de la langue arabe est stricte : « Lā yubtada\'u bi-sākin wa lā yūqafu \'alā mutaharrik ». Toute voyelle courte (Fathah, Dammah, Kasrah) et tout Tanwīn Damm ou Kasr se dissolvent instantanément en Soukoûn à l\'arrêt.'
    },
    {
      title: 'Exception 1 : Madd \'Iwad (مد العوض)',
      badge: 'Tanwīn Fath ➔ 2 Temps',
      concept: 'Le Tanwīn Fath se transforme toujours en Alif de 2 temps à l\'arrêt',
      renderVisual: () => <MaddIwadVisual animKey={animKey} />,
      explanation: 'Lorsque vous vous arrêtez sur un mot portant un Tanwīn Fath (ـً / ـٗا), la nunation s\'efface et laisse place à un Alif naturel mesuré sur exactement 2 temps. Cette règle s\'applique même si l\'orthographe n\'écrit pas d\'Alif après une Hamzah (ex: بِنَاءً ➔ Binā\'ā) !'
    },
    {
      title: 'Exception 2 : La Métamorphose de la Tā\' Marbūtah',
      badge: 'Tā\' ➔ Hā\' Sākinah',
      concept: 'Toute Tā\' ronde (ة) devient un Hā\' (هْ), même avec Tanwīn Fath !',
      renderVisual: () => <TaMarbutahVisual animKey={animKey} />,
      explanation: 'À l\'arrêt, la Tā\' Marbūtah (ة) se mue obligatoirement en une lettre Hā\' douce avec Soukoûn. Piège fatal : même avec un Tanwīn Fath (ex: وَرَحۡمَةٗ), elle NE REÇOIT PAS de Madd \'Iwad et se lit « Rahmah » avec un souffle de gorge !'
    },
    {
      title: 'L\'Art du « Stop & Repeat » & Le Piège des Citations',
      badge: 'Sécurité Théologique',
      concept: 'Comment reprendre sans proférer de paroles blasphématoires',
      renderVisual: () => <StopAndRepeatVisual animKey={animKey} />,
      explanation: 'Si votre souffle s\'épuise en cours de verset, reculez de 2 à 3 mots pour reprendre une phrase complète. Ne reprenez JAMAIS sur une parole de mécréants isolée comme « Inna Allāha faqīr » (Āl \'Imrān 3:181) sous peine de commettre un Ibtidā\' Qabīh sacrilège !'
    }
  ];

  // Screens for Chapter 4 (Madd I - Natural Madd & Leen)
  const chapter4Screens = [
    {
      title: 'La Formule Sacrée « Nūhīhā » (نُوحِيهَا)',
      badge: 'Les 3 Lettres de Madd',
      concept: 'Les 3 voyelles longues et leurs voyelles homogènes obligatoires',
      renderVisual: () => <NuhihaBreakdownVisual animKey={animKey} />,
      explanation: '« Nūhīhā » dans Sūrah Hūd (11:49) est la formule maîtresse du Coran : elle contient Wāw précédé de Dammah (نُو), Yā\' précédé de Kasrah (حِي) et Alif précédé de Fathah (هَا). Sans voyelle sur la lettre elle-même !'
    },
    {
      title: 'Le Chronomètre des 2 Harakāt & Le Péril du Lahn Jalī',
      badge: 'Mesure & Fiqh',
      concept: 'Pourquoi raccourcir un Madd Naturel est un péché (Harām)',
      renderVisual: () => <MaddTabiiDurationVisual animKey={animKey} />,
      explanation: '1 Harakah = durée de « Ba ». 2 Harakāt = durée de « Bā ». Raccourcir « Akhadhnā » (Nous avons pris) en « Akhadhna » (Les femmes ont pris) corrompt le sens théologique : c\'est un Lahn Jalī majeur formellement interdit.'
    },
    {
      title: 'Lettres de Madd vs Lettres de Līn (حَرْفَا اللِّينِ)',
      badge: 'Distinction Cruciale',
      concept: 'Wāw et Yā\' portant Soukoûn précédés d\'une FATHAH',
      renderVisual: () => <MaddVsLeenVisual animKey={animKey} />,
      explanation: 'Lorsque Wāw ou Yā\' sont précédés d\'une Fathah (comme dans Quraysh ou Khawf), ce sont des lettres de Līn : elles ne reçoivent AUCUN Madd en lecture continue (Wasl) ! L\'Alif ne peut jamais être une lettre de Līn.'
    },
    {
      title: 'Les Mots Caméléons : هُوَ, هِيَ, مَعِيَ à l\'Arrêt',
      badge: 'Wasl vs Waqf',
      concept: 'Comment une consonne vocalisée se transmute en Madd de 2 temps à l\'arrêt',
      renderVisual: () => <HuwaHiyaWaqfVisual animKey={animKey} />,
      explanation: 'En continu, le mot « Huwa » a un Wāw vocalisé (pas de Madd). Mais si vous vous arrêtez d\'urgence dessus, la Fathah devient Soukoûn : le Wāw Sākin précédé de Dammah devient alors un pur Madd Naturel de 2 temps (« Hū ») !'
    }
  ];

  // Screens for Chapter 5 (Madd II - Secondary Madd / Far'ī)
  const chapter5Screens = [
    {
      title: 'Madd Muttasil (Lié) vs Madd Munfasil (Séparé)',
      badge: 'Hamzah : 4-5 Temps',
      concept: 'Même mot (Wājib obligatoire) ou deux mots séparés (Jā\'iz permis)',
      renderVisual: () => <MuttasilMunfasilVisual animKey={animKey} />,
      explanation: 'Dans le Muttasil (ex: ٱلسَّمَآءَ), le Madd et la Hamzah sont soudés dans le même mot : 4 à 5 temps obligatoires en continu comme à l\'arrêt. Dans le Munfasil (ex: بِمَآ أُنزِلَ), la Hamzah est au début du second mot : 4 à 5 temps en continu, mais si vous coupez sur « Bimā », la Hamzah disparaît et la prolongation redescend à 2 temps !'
    },
    {
      title: 'Le Métronome des 6 Temps du Madd Lāzim (ٱلضَّآلِّينَ)',
      badge: '6 Temps Incompressibles',
      concept: 'Le Madd le plus puissant du Coran et le claquement du Nabrah sur la Shaddah',
      renderVisual: () => <MaddLazimMetronomeVisual animKey={animKey} />,
      explanation: 'Madd Lāzim : lorsqu\'une voyelle longue est suivie d\'un Soukoûn originel ou d\'une Shaddah, vous DEVEZ tenir 6 pulsations métronomiques complètes sans relâcher. À la fin des 6 temps sur « Ad-Dāllīn », appliquez une pression ferme de la langue (Nabrah) pour faire résonner le double Lām !'
    },
    {
      title: 'La Règle d\'Or de la Balance (Al-Mīzān) sur le Madd \'Ārid',
      badge: 'Harmonie & Fiqh',
      concept: 'L\'interdiction de varier anarchiquement la durée des fins de versets',
      renderVisual: () => <MaddAridConsistencyVisual animKey={animKey} />,
      explanation: 'À l\'arrêt sur la fin d\'un verset, le Madd \'Ārid li-s-Sukūn (ex: Al-\'Ālamīn) vous donne le choix entre 2, 4 ou 6 temps. Mais la règle de la Balance (Al-Mīzān) exige l\'uniformité : la durée choisie sur le premier verset doit être strictement conservée sur tous les versets suivants de votre récitation.'
    },
    {
      title: 'Le Laboratoire du Madd Līn : Wasl vs Waqf',
      badge: '0 Temps ➔ 2, 4, 6 Temps',
      concept: 'Pourquoi une lettre de Līn ne prend aucun Madd en continu mais s\'allonge à l\'arrêt',
      renderVisual: () => <MaddLeenWaqfVisual animKey={animKey} />,
      explanation: 'Les lettres de Līn (Wāw ou Yā\' précédés d\'une Fathah comme dans Quraysh ou Khawf) ne reçoivent AUCUN Madd en lecture continue. Mais lorsque vous vous arrêtez dessus, le Soukoûn incident libère une prolongation permise de 2, 4 ou 6 temps. Sa durée ne peut jamais dépasser celle de votre Madd \'Ārid !'
    }
  ];

  // Screens for Chapter 6 (Hamzah - Wasl & Qat')
  const chapter6Screens = [
    {
      title: 'Hamzat Al-Wasl : Chute en Continu vs Maintien à l\'Attaque',
      badge: 'Liaison vs Attaque',
      concept: 'Comment la Hamzah s\'évanouit en Wasl et renaît à l\'Ibtidā\'',
      renderVisual: () => <HamzatDropInWaslVisual animKey={animKey} />,
      explanation: 'Hamzat Al-Wasl (ٱ) n\'est qu\'une béquille phonétique pour débuter un mot. En liaison continue (Wasl), elle est TOTALEMENT ANNULÉE : on dit « Faman hajja-l-bayta » d\'un seul trait sans heurt ! En revanche, Hamzat Al-Qat\' (ء) dans « Innā » ou « Asābathum » ne s\'efface JAMAIS.'
    },
    {
      title: 'La Règle de la 3e Lettre pour les Verbes',
      badge: 'Scanner de Tashkīl',
      concept: 'Dammah originelle ➔ اُ | Fathah ou Kasrah ➔ اِ (Jamais de Fathah !)',
      renderVisual: () => <VerbThirdLetterScannerVisual animKey={animKey} />,
      explanation: 'Dans le Coran, Hamzat Al-Wasl est écrite nue sans voyelle. Pour savoir comment attaquer un verbe, comptez jusqu\'à la 3e lettre : 3e lettre Dammah ➔ dites « U » (اُدۡعُ) ; 3e lettre Kasrah ➔ dites « I » (اِهۡدِنَا) ; 3e lettre Fathah ➔ dites « I » (اِذۡهَبۡ). Un verbe ne commence JAMAIS par une Fathah !'
    },
    {
      title: 'Les 5 Verbes Pièges aux Fausses Dammahs',
      badge: 'Exceptions Subtiles',
      concept: 'Pourquoi « Ibnū » et « Imshū » s\'attaquent avec KASRAH',
      renderVisual: () => <FiveExceptionVerbsVisual animKey={animKey} />,
      explanation: 'Dans « ٱبۡنُواْ », « ٱمۡشُواْ », « ٱقۡضُوٓاْ », la Dammah de la 3e lettre est trompeuse : elle n\'est pas originelle mais a été introduite pour le Wāw du pluriel (origine : « Ibniyū », « Imshiyū »). À l\'attaque, vous DEVEZ impérativement prononcer une Kasrah : « Ibnū », « Imshū » !'
    },
    {
      title: 'La Rencontre des Deux Hamzahs (ٱئۡتُونِي ➔ ĪTŪNĪ)',
      badge: 'Madd Badal Spécial',
      concept: 'La métamorphose phonétique sublime dans la Sourate Al-Ahqāf (46:4)',
      renderVisual: () => <TwoHamzahsTransformationVisual animKey={animKey} />,
      explanation: 'En liaison continue, Hamzat Wasl tombe : « fīs-samāwāti\'-tūnī ». Mais si vous commencez par ce mot, deux Hamzahs se heurtent (إِ + ئْ). La règle de Badal transmute la seconde en un Yā\' de prolongation : on prononce « ĪTŪNĪ » (إِيتُونِي) avec 2 temps de Madd !'
    }
  ];

  // Screens for Chapter 7 (Lam Sakinah)
  const chapter7Screens = [
    {
      title: 'Lām Qamariyyah (Lune) vs Lām Shamsiyyah (Soleil)',
      badge: 'Izhār vs Idghām',
      concept: 'Pourquoi la Lām reste visible ou s\'efface devant les étoiles',
      renderVisual: () => <MoonVsSunLamVisual animKey={animKey} />,
      explanation: 'Devant les 14 lettres de « إِبۡغِ حَجَّكَ وَخَفۡ عَقِيمَهُ », la Lām reste allumée avec son Soukoûn visible (لۡ) : c\'est l\'Izhār Qamarī (ٱلۡقَمَرِ). Devant les 14 lettres solaires, la Lām s\'efface complètement dans la consonne suivante qui prend une Shaddah : c\'est l\'Idghām Shamsī (ٱلشَّمۡسِ).'
    },
    {
      title: 'Le Piège du Double Effacement en Liaison Continue (Wasl)',
      badge: 'Wasl vs Ibtidā\'',
      concept: 'Hamzat Wasl et Lām Shamsiyyah disparaissent toutes les deux simultanément',
      renderVisual: () => <DoubleDropWaslVisual animKey={animKey} />,
      explanation: 'En lisant en continu dans « Wash-Shams » (وَٱلشَّمۡسِ), Hamzat Al-Wasl s\'élide ET la Lām Shamsiyyah est muette ! On saute d\'un seul trait du Wāw au Shīn doublé : « Wash-shams ». À l\'attaque isolée en revanche, Hamzat Wasl renaît avec une Fathah : « Ash-shams ».'
    },
    {
      title: 'La Balance Sacrée du Nom d\'Allah (Lafz Al-Jalālah)',
      badge: 'Tafkhīm vs Tarqīq',
      concept: 'Fathah/Dammah ➔ Lourd & Majestueux | Kasrah ➔ Fin & Doux',
      renderVisual: () => <LafzAlJalalahBalanceVisual animKey={animKey} />,
      explanation: 'La Lām est à l\'origine fine en arabe, sauf dans le Nom Majestueux d\'Allah (ٱللَّه) : elle devient lourde et majestueuse (Tafkhīm) si la voyelle précédente est une Fathah ou une Dammah. Elle redevient douce et mince (Tarqīq) après toute Kasrah, y compris le Tanwīn en continu dans Al-Ikhlās (« Ahaduni-llāh ») !'
    },
    {
      title: 'Lām du Verbe (قُلۡ) & de la Particule (بَلۡ, هَلۡ)',
      badge: 'Izhār vs Idghām',
      concept: 'Clarté absolue partout, sauf devant Lām et Râ\'',
      renderVisual: () => <LamFilHarfScannerVisual animKey={animKey} />,
      explanation: 'La Lām du verbe (قُلۡ نَعَمۡ) ou de la particule (هَلۡ تَرَىٰ) doit toujours être prononcée avec clarté sans rebond de Qalqalah. Elle ne fusionne que devant deux lettres : Lām (قُل لَّكُمۡ) par similitude et Râ\' (وَقُل رَّبِّ, بَل رَّفَعَهُ) par proximité !'
    }
  ];

  // Screens for Chapter 9 (Mim Sakinah)
  const chapter9Screens = [
    {
      title: 'L\'Ikhfā\' Shafawī & Le Débat de la Furjah',
      badge: 'Dissimulation Labiale (ب)',
      concept: 'Contact doux des lèvres sans pression et sans ouverture artificielle',
      renderVisual: () => <IkhfaShafawiLipsVisual animKey={animKey} />,
      explanation: 'Lorsque le Mīm Sākinah rencontre la lettre Bā\' (ب) entre 2 mots (تَرۡمِيهِم بِحِجَارَةٖ), les lèvres se posent l\'une contre l\'autre avec délicatesse sans forcer et sans laisser d\'ouverture (Furjah). Maintenez 2 temps pleins de Ghunnah nasale !'
    },
    {
      title: 'L\'Idghām Shafawī (Fusion des deux Mīms)',
      badge: 'Fusion Totale (م)',
      concept: 'Deux Mīms qui deviennent un Mīm Mushaddadah avec 2 temps de Ghunnah',
      renderVisual: () => <IdghamShafawiTwinVisual animKey={animKey} />,
      explanation: 'Le Mīm sans voyelle fusionne à 100% dans le Mīm suivant : « Fī qulūbihim maradun ». Et attention : tout Mīm avec Shaddah (مّ) conserve obligatoirement ses 2 temps de Ghunnah même à l\'arrêt (Waqf sur « Al-Yamm ») !'
    },
    {
      title: 'L\'Alerte Maximale d\'Izhār devant Wāw (و) et Fā\' (ف)',
      badge: 'Ashadd Izhār',
      concept: 'Ne jamais avaler le Mīm par facilité articulaire labiale',
      renderVisual: () => <AshaddIzharWarningVisual animKey={animKey} />,
      explanation: 'L\'imam Ibn Al-Jazarī avertit : « Prends garde à ce que le Mīm ne disparaisse devant le Wāw et le Fā\' ! ». Dans « \'Alayhim wa lā » et « Hum fīhā », fermez complètement les lèvres sur le Mīm avant d\'articuler la lettre suivante pour éradiquer tout Ikhfā\' inconscient.'
    },
    {
      title: 'Le Grand Face-à-Face : Nūn vs Mīm Sākinah',
      badge: 'Comparaison Didactique',
      concept: 'Pourquoi le Mīm Sākinah est beaucoup plus simple et sans Iqlāb',
      renderVisual: () => <MimVsNunComparisonVisual animKey={animKey} />,
      explanation: 'Le Mīm Sākinah n\'a que 3 règles : Bā\' ➔ Ikhfā\', Mīm ➔ Idghām, et tout le reste ➔ Izhār ! Il n\'a pas d\'Iqlāb car l\'Iqlāb consiste précisément à transformer une lettre en Mīm.'
    }
  ];

  // Screens for Chapter 11 (Assimilation / Idghām)
  const chapter11Screens = [
    {
      title: 'L\'Assimilation des Lettres Identiques (Mutamāthilayn)',
      badge: 'Fusion Totale (ّ)',
      concept: 'La première consonne sans voyelle s\'efface complètement dans la seconde',
      renderVisual: () => <MutamathilaynFusionVisual animKey={animKey} />,
      explanation: 'Lorsque deux lettres 100% identiques se suivent (ex: فَلَا يُسۡرِف فِّى ou وَقَد دَّخَلُواْ), la première est nue dans le Muṣ-ḥaf et fond dans la seconde qui prend une Shaddah. Attention : cette règle exige impérativement un soukoûn sur la 1ère lettre ; si elle est voyellée (نُؤۡمِنُ بِبَعۡضٖ), l\'Izhār est obligatoire !'
    },
    {
      title: 'L\'Exception Sacrée des Lettres de Madd (فِى يُوسُفَ & ءَامَنُواْ)',
      badge: 'Izhār Obligatoire',
      concept: 'Pourquoi le Wāw et le Yā\' de prolongation ne fusionnent JAMAIS',
      renderVisual: () => <MaddExceptionsVisual animKey={animKey} />,
      explanation: 'Une lettre de Madd naît du vide de la bouche (Al-Jawf), tandis qu\'une consonne naît de la langue ou des lèvres. Bien qu\'écrites pareil, elles n\'ont PAS le même point d\'articulation ! Dans « Fī Yūsuf » et « Āmanū wa-\'amilū », donnez toujours 2 temps de Madd et ne fusionnez jamais en Shaddah !'
    },
    {
      title: 'Les 8 Fusions Historiques (Mutajānisayn & Mutaqāribayn)',
      badge: '8 Cas Récensés',
      concept: 'Les seuls couples de consonnes distinctes qui fusionnent entièrement dans le Coran',
      renderVisual: () => <EightSimilarCasesScannerVisual animKey={animKey} />,
      explanation: 'Le Coran recense 8 couples de fusions totales : ت➔ط, ذ➔ظ, ب➔م (Irkam-ma\'anā avec 2 temps de Ghunnah !), ق➔ك (Nakhlukkum), د➔ت, ت➔د, ل➔ر, et ث➔ذ. Mémorisez ces perles de récitation transmises par les maîtres du Tajwīd.'
    },
    {
      title: 'L\'Assimilation Partielle (Idghām Nāqis dans بَسَطتَ)',
      badge: 'ط lourd ➔ ت fin',
      concept: 'Conserver la force et l\'écrasement du Tā\' sans émettre de Qalqalah',
      renderVisual: () => <IdghamNaqisHeavyToLightVisual animKey={animKey} />,
      explanation: 'Dans « Basatta » (بَسَطتَ) et « Ahattu » (أَحَطتُ), le Tā\' possède des caractéristiques de puissance suprême (emphase et Itbāq). La lettre faible (ت) ne peut pas l\'anéantir : plaquez fermement la langue pour sceller l\'emphase SANS faire de Qalqalah, puis libérez la consonne sur le Tā\' fin !'
    }
  ];

  // Screens for Chapter 12 (Heavy & Light / Tafkhīm & Tarqīq)
  const chapter12Screens = [
    {
      title: 'Les 7 Lettres d\'Isti\'lā\' (خُصَّ ضَغۡطٍ قِظۡ) & Leurs 5 Degrés',
      badge: 'Tafkhīm Absolu',
      concept: 'L\'arrière de la langue s\'élève pour former une résonance caverneuse',
      renderVisual: () => <HeavyLettersMouthShapeVisual animKey={animKey} />,
      explanation: 'Les 7 consonnes de « Khuṣṣa Ḍaghṭin Qiz » sont TOUJOURS lourdes (Tafkhīm). Selon Ibn Al-Jazarī, leur puissance s\'échelonne en 5 degrés : 1. Fathah + Alif > 2. Fathah seule > 3. Dammah > 4. Soukoûn > 5. Kasrah. Piège critique : ne projetez JAMAIS les lèvres en avant pour faire une lettre lourde sans Dammah !'
    },
    {
      title: 'Les Lettres Hybrides I : L\'Alif Miroir & Le Nom d\'Allah',
      badge: 'Caméléons du Coran',
      concept: 'L\'Alif mime son voisin, la Lām d\'Allah obéit à la voyelle précédente',
      renderVisual: () => <ChameleonAlifAndLamVisual animKey={animKey} />,
      explanation: 'L\'Alif n\'a aucun timbre propre : il copie la lettre qui le précède (lourd après Khā dans « Khālidīn », léger après Yā\' dans « Iyyāka »). Quant à la Lām, elle est toujours fine dans tout le Coran, sauf dans le Nom Sacré d\'Allah : lourde après Fathah/Dammah (« Shahida-Llāhu »), et fine après Kasrah (« Bismi-Llāhi ») !'
    },
    {
      title: 'Les Lettres Hybrides II : La Râ\' & Ses 4 Portes de Finesse',
      badge: 'Tarqīq de la Râ\'',
      concept: 'La Râ\' est lourde par défaut : découvrez ses 4 exceptions codifiées',
      renderVisual: () => <RaaRulesMatrixVisual animKey={animKey} />,
      explanation: 'La Râ\' (ر) est originellement lourde ! Elle ne s\'amincit (Tarqīq) que dans 4 cas : 1. Avec Kasrah directe (رِزۡقٗا). 2. Avec Soukoûn après Kasrah originelle dans le mot (فِرۡعَوۡنَ). 3. À l\'arrêt après Soukoûn précédé de Kasrah (حِجۡرٍ). 4. À l\'arrêt après un Yā\' soukouné (خَبِيرٌ, خَيۡرٌ). Attention à l\'exception de « Qirṭās » qui reste lourde !'
    },
    {
      title: 'Takhlees Al-Hurūf : L\'Art de la Décontamination',
      badge: 'Chirurgie Phonétique',
      concept: 'Isoler chaque consonne pour que le lourd n\'écrase pas le fin',
      renderVisual: () => <TakhleesLetterDecontaminationVisual animKey={animKey} />,
      explanation: 'Takhlees Al-Hurūf est la marque des grands récitateurs : dans « خَلَقَ », le Khā lourd est immédiatement suivi d\'un Lām fin avant de remonter sur un Qāf lourd. Votre langue doit s\'abaisser en une fraction de seconde pour préserver la clarté du Lām sans jamais dire « Kha-lâ-qa » !'
    }
  ];

  const screens =
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
      : chapter12Screens;
  const current = screens[screenIndex] || screens[0];

  const goTo = (idx: number) => {
    setScreenIndex(idx);
    restartAnimation();
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <StepHeader
        step={2}
        title={current.title}
        description={current.concept}
        aside={
          <button onClick={restartAnimation} className="btn btn-secondary" title="Rejouer l'animation">
            <RotateCcw className="w-4 h-4" />
            Rejouer
          </button>
        }
      />

      <div className="surface overflow-hidden">
        <div className="bg-soft">
          {current.renderVisual()}
        </div>

        <div className="p-6 sm:p-8">
          <p className="font-display text-[19px] sm:text-xl leading-relaxed text-ink max-w-2xl">
            {current.explanation}
          </p>

          <div className="flex items-center justify-between gap-3 mt-8">
            <button
              onClick={() => screenIndex > 0 && goTo(screenIndex - 1)}
              disabled={screenIndex === 0}
              className="btn btn-ghost"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Précédent</span>
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Écrans">
              {screens.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  role="tab"
                  aria-selected={idx === screenIndex}
                  aria-label={s.badge}
                  className={`h-2 rounded-full transition-all ${
                    idx === screenIndex ? 'w-7 bg-lapis' : 'w-2 bg-line hover:bg-muted'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-muted">{screenIndex + 1} / {screens.length}</span>
            </div>

            <button
              onClick={() => screenIndex + 1 < screens.length && goTo(screenIndex + 1)}
              disabled={screenIndex + 1 >= screens.length}
              className="btn btn-secondary"
            >
              <span className="hidden sm:inline">Suivant</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
