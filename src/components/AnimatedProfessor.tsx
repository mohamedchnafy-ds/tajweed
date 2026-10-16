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
      title: 'Qu\'est-ce que la Qalqalah (الْقَلْقَلَةُ) ?',
      badge: 'Le rebond acoustique',
      concept: 'Une libération vive du souffle sans aucun mouvement de voyelle',
      renderVisual: () => (
        <div key={animKey} className="py-8 px-4 text-center select-none">
          <div className="label mb-6">
            Simulation du choc et du rebond acoustique
          </div>

          <div className="relative max-w-xs mx-auto h-32 flex items-center justify-center">
            <div className="absolute bottom-4 left-6 right-6 h-px bg-line" />
            <div className="absolute w-14 h-14 rounded-full bg-qalqalah text-card flex items-center justify-center font-ar text-3xl animate-qalqalah-bounce">
              ق
            </div>
            <div className="absolute bottom-4 w-20 h-6 border-b-2 border-qalqalah/60 rounded-full animate-ping opacity-75" />
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {['ق', 'ط', 'ب', 'ج', 'د'].map((l, i) => (
              <span key={i} className="chip chip-qalqalah font-ar text-2xl px-3.5 py-1 animate-pop" style={{ animationDelay: `${i * 0.15}s` }}>
                {l}
              </span>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-muted mt-6 max-w-sm mx-auto">
            Formule mnémotechnique : <strong>قُطْبُ جَدٍّ (Qutb Jadd)</strong>. Dès qu'une de ces 5 lettres a un soukoûn, elle rebondit !
          </p>
        </div>
      ),
      explanation: 'À cause du blocage total du son et de l\'air (Shiddah + Jahr), la lettre sākinah ne peut être entendue clairement sans ce rebond rapide.'
    },
    {
      title: 'Les 3 Degrés de Force de la Qalqalah',
      badge: 'Maîtrise des nuances',
      concept: 'Comment doser la puissance du rebond selon la position dans le mot',
      renderVisual: () => (
        <div key={animKey} className="py-6 px-4 select-none">
          <div className="space-y-3 max-w-md mx-auto">
            <div className="p-3.5 rounded-2xl bg-card flex items-center justify-between gap-3 shadow-xs animate-drop" style={{ '--i': 0 } as any}>
              <div className="text-left">
                <span className="text-xs font-semibold text-qalqalah">1. Kubrā, degré majeur</span>
                <div className="text-[15px] font-semibold text-ink">Arrêt sur une Shaddah</div>
                <div className="text-sm text-muted mt-1">Ex : <span className="font-ui-ar text-xl text-ink" dir="rtl">وَتَبَّ · بِٱلۡحَقِّ</span></div>
              </div>
              <div className="chip chip-qalqalah shrink-0">
                Fort
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-card flex items-center justify-between gap-3 shadow-xs animate-drop" style={{ '--i': 1 } as any}>
              <div className="text-left">
                <span className="text-xs font-semibold text-gold">2. Wustā, degré moyen</span>
                <div className="text-[15px] font-semibold text-ink">Arrêt sur une lettre simple</div>
                <div className="text-sm text-muted mt-1">Ex : <span className="font-ui-ar text-xl text-ink" dir="rtl">قُلۡ هُوَ ٱللَّهُ أَحَدٌ</span></div>
              </div>
              <div className="chip chip-gold shrink-0">
                Moyen
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-card flex items-center justify-between gap-3 animate-drop" style={{ '--i': 2 } as any}>
              <div className="text-left">
                <span className="text-xs font-semibold text-izhar">3. Sughrā, degré mineur</span>
                <div className="text-[15px] font-semibold text-ink">Au milieu d'un mot en continu</div>
                <div className="text-sm text-muted mt-1">Ex : <span className="font-ui-ar text-xl text-ink" dir="rtl">يَقۡطَعُونَ · خَلَقۡنَا</span></div>
              </div>
              <div className="chip chip-izhar shrink-0">
                Léger
              </div>
            </div>
          </div>
        </div>
      ),
      explanation: 'Plus la lettre est isolée à la fin d\'un verset avec une Shaddah, plus le rebond est spectaculaire. En milieu de mot, il doit rester agile pour ne pas couper la phrase.'
    }
  ];

  const screens =
    chapter.number === 1
      ? chapter1Screens
      : chapter.number === 2
      ? chapter2Screens
      : chapter.number === 8
      ? nunScreens
      : qalqalahScreens;
  const current = screens[screenIndex] || screens[0];

  const goTo = (idx: number) => {
    setScreenIndex(idx);
    restartAnimation();
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
