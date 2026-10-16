import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { Play, RotateCcw, ArrowRight, ArrowLeft, Sparkles, Volume2, Info } from 'lucide-react';

interface AnimatedProfessorProps {
  chapter: Chapter;
}

export const AnimatedProfessor: React.FC<AnimatedProfessorProps> = ({ chapter }) => {
  const [screenIndex, setScreenIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0); // Used to trigger replay

  const restartAnimation = () => {
    setAnimKey(prev => prev + 1);
  };

  // Screens for Chapter 8 (Nun Sakinah)
  const nunScreens = [
    {
      title: 'Qu\'est-ce que la Ghunnah (الْغُنَّةُ) ?',
      badge: 'Phonétique fondamentale',
      concept: 'Une résonance nasale mélodieuse produite dans le nez (Al-Khayshūm)',
      renderVisual: () => (
        <div key={animKey} className="py-8 px-4 text-center select-none">
          <div className="text-xs uppercase tracking-wider font-bold text-muted mb-3">
            Mesure du temps de maintien (2 Harakāt)
          </div>

          {/* Animated Ghunnah Wave */}
          <div className="relative max-w-sm mx-auto h-28 flex items-center justify-center">
            {/* Concentric pulsing rings */}
            <div className="absolute w-24 h-24 rounded-full border-2 border-idgham/40 animate-ping opacity-60" />
            <div className="absolute w-20 h-20 rounded-full bg-idgham-bg border border-idgham/50 flex items-center justify-center animate-ghunnah-pulse">
              <span className="font-ar font-bold text-2xl text-idgham">غُنَّة</span>
            </div>
          </div>

          {/* Harakat Beats Meter */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-card border border-line flex items-center justify-center font-bold text-sm text-idgham shadow-xs animate-pop" style={{ animationDelay: '0.2s' }}>
                1
              </div>
              <span className="text-[10px] text-muted font-mono">1er temps</span>
            </div>
            <span className="text-line font-bold text-xl">+</span>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-card border border-line flex items-center justify-center font-bold text-sm text-idgham shadow-xs animate-pop" style={{ animationDelay: '0.6s' }}>
                2
              </div>
              <span className="text-[10px] text-muted font-mono">2e temps</span>
            </div>
          </div>

          <p className="text-xs text-muted mt-5 max-w-md mx-auto">
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
          <div className="text-xs uppercase tracking-wider font-bold text-muted mb-4">
            Démonstration sur « Man ya\'mal » (مَن يَعۡمَلۡ)
          </div>

          {/* Merging Words Animation */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 my-6" dir="rtl">
            {/* Word 1 */}
            <div className="p-3 sm:p-4 rounded-2xl bg-card border border-line shadow-xs animate-drop" style={{ '--i': 0 } as any}>
              <span className="font-ar text-3xl sm:text-4xl text-ink block mb-1">مَنۡ</span>
              <span className="text-[11px] text-muted font-sans font-medium">Nūn Sākinah</span>
            </div>

            {/* Fusion arrow symbol */}
            <div className="w-8 h-8 rounded-full bg-idgham text-white flex items-center justify-center font-bold text-sm shadow-xs animate-pop" style={{ animationDelay: '0.8s' }}>
              +
            </div>

            {/* Word 2 */}
            <div className="p-3 sm:p-4 rounded-2xl bg-card border border-line shadow-xs animate-drop" style={{ '--i': 1 } as any}>
              <span className="font-ar text-3xl sm:text-4xl text-ink block mb-1">يَعۡمَلۡ</span>
              <span className="text-[11px] text-muted font-sans font-medium">Lettre Yā' (ينمو)</span>
            </div>
          </div>

          {/* Result of Fusion */}
          <div className="p-4 rounded-2xl bg-idgham-bg border-2 border-idgham max-w-sm mx-auto shadow-sm animate-pop" style={{ animationDelay: '1.2s' }}>
            <span className="text-[10px] uppercase font-bold text-idgham block mb-1">Résultat prononcé à l'oral :</span>
            <span className="font-ar text-3xl sm:text-4xl text-idgham font-bold block" dir="rtl">
              مَيَّعۡمَلۡ
            </span>
            <span className="text-xs text-idgham font-medium mt-1 block">
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
            
            {/* Wrong way */}
            <div className="p-3.5 rounded-xl border border-bad/30 bg-bad-bg/40 text-xs">
              <span className="font-bold text-bad block mb-1">❌ À NE PAS FAIRE (Izhār dur)</span>
              <p className="text-muted leading-relaxed">
                Coller la langue aux gencives supérieures en faisant un son "N" claqué et dur.
              </p>
            </div>

            {/* Right way */}
            <div className="p-3.5 rounded-xl border border-idgham/30 bg-idgham-bg/40 text-xs">
              <span className="font-bold text-idgham block mb-1">✓ RÈGLE EXACTE DU LIVRE</span>
              <p className="text-muted leading-relaxed">
                La langue reste <strong>suspendue dans la bouche</strong>, prête à prononcer la lettre suivante, pendant que l'air résonne dans le nez.
              </p>
            </div>

          </div>

          {/* Heavy vs Light Ghunnah Comparison */}
          <div className="p-4 rounded-2xl bg-card border border-line max-w-md mx-auto mt-4 text-center">
            <span className="text-xs font-bold text-ink block mb-2">La couleur de la Ghunnah s'adapte :</span>
            <div className="flex items-center justify-center gap-3">
              <div className="p-2.5 rounded-xl bg-ikhfa-bg border border-ikhfa text-ikhfa flex-1">
                <span className="font-ar text-xl block" dir="rtl">مِن قَبۡلِكَ</span>
                <span className="text-[10px] font-bold">Ghunnah Emphatique (Tafkhīm)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-izhar-bg border border-izhar text-izhar flex-1">
                <span className="font-ar text-xl block" dir="rtl">مِن تَحۡتِهَا</span>
                <span className="text-[10px] font-bold">Ghunnah Légère (Tarqīq)</span>
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
          <div className="text-xs uppercase tracking-wider font-bold text-muted mb-4">
            Simulation du choc et du rebond acoustique
          </div>

          {/* Interactive Bouncing Sound Node */}
          <div className="relative max-w-xs mx-auto h-32 flex items-center justify-center">
            {/* Impact floor line */}
            <div className="absolute bottom-4 left-6 right-6 h-1 bg-ink/20 rounded-full" />
            
            {/* Bouncing ball */}
            <div className="absolute w-14 h-14 rounded-full bg-qalqalah text-white flex items-center justify-center font-ar font-bold text-2xl shadow-lg animate-qalqalah-bounce">
              ق
            </div>

            {/* Echo waves */}
            <div className="absolute bottom-4 w-20 h-6 border-b-2 border-qalqalah/60 rounded-full animate-ping opacity-75" />
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {['ق', 'ط', 'ب', 'ج', 'د'].map((l, i) => (
              <span key={i} className="chip chip-qalqalah font-ar text-xl px-3 py-1 shadow-xs animate-pop" style={{ animationDelay: `${i * 0.15}s` }}>
                {l}
              </span>
            ))}
          </div>

          <p className="text-xs text-muted mt-4 max-w-sm mx-auto">
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
            
            {/* Degree 1 */}
            <div className="p-3.5 rounded-xl bg-card border-2 border-qalqalah flex items-center justify-between gap-3 shadow-xs animate-drop" style={{ '--i': 0 } as any}>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-qalqalah">1. Degré Kubrā (Majeur)</span>
                <div className="text-xs font-semibold text-ink">Arrêt sur une Shaddah</div>
                <div className="text-[11px] text-muted">Ex: وَتَبَّ · بِٱلۡحَقِّ</div>
              </div>
              <div className="px-3 py-1 rounded-full bg-qalqalah text-white text-xs font-bold font-mono">
                Force Max 💥
              </div>
            </div>

            {/* Degree 2 */}
            <div className="p-3.5 rounded-xl bg-card border border-gold flex items-center justify-between gap-3 shadow-xs animate-drop" style={{ '--i': 1 } as any}>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold">2. Degré Wustā (Moyen)</span>
                <div className="text-xs font-semibold text-ink">Arrêt sur une lettre simple</div>
                <div className="text-[11px] text-muted">Ex: قُلۡ هُوَ ٱللَّهُ أَحَدٌ</div>
              </div>
              <div className="px-3 py-1 rounded-full bg-gold text-white text-xs font-bold font-mono">
                Moyen ⭐
              </div>
            </div>

            {/* Degree 3 */}
            <div className="p-3.5 rounded-xl bg-card border border-line flex items-center justify-between gap-3 shadow-xs animate-drop" style={{ '--i': 2 } as any}>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted">3. Degré Sughrā (Mineur)</span>
                <div className="text-xs font-semibold text-ink">Au milieu d'un mot en continu</div>
                <div className="text-[11px] text-muted">Ex: يَقۡطَعُونَ · خَلَقۡنَا</div>
              </div>
              <div className="px-3 py-1 rounded-full bg-soft text-ink text-xs font-bold font-mono">
                Léger & Vif ⚡
              </div>
            </div>

          </div>
        </div>
      ),
      explanation: 'Plus la lettre est isolée à la fin d\'un verset avec une Shaddah, plus le rebond est spectaculaire. En milieu de mot, il doit rester agile pour ne pas couper la phrase.'
    }
  ];

  const screens = chapter.number === 8 ? nunScreens : qalqalahScreens;
  const current = screens[screenIndex];

  return (
    <div className="animate-enter space-y-6">
      
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider font-bold text-muted mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Étape 2 · Le Professeur Animé</span>
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-normal text-ink">
            {current.title}
          </h1>
        </div>

        {/* Replay Button */}
        <button
          onClick={restartAnimation}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-card hover:bg-soft text-xs font-medium text-ink transition-colors shadow-xs"
          title="Rejouer l'animation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Rejouer</span>
        </button>
      </div>

      {/* Main Professor Stage Card */}
      <div className="prof-card bg-card border border-line shadow-xs rounded-2xl overflow-hidden">
        
        {/* Stage Badge & Concept */}
        <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-line/60">
          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-soft text-ink">
            {current.badge}
          </span>
          <span className="text-xs text-muted font-medium">
            Écran {screenIndex + 1} sur {screens.length}
          </span>
        </div>

        <p className="font-display text-base sm:text-lg text-ink font-semibold mt-2 mb-4">
          {current.concept}
        </p>

        {/* Visual Animation Interactive Area */}
        <div className="bg-paper/70 rounded-2xl border border-line/70 my-2 overflow-hidden">
          {current.renderVisual()}
        </div>

        {/* Pedagogical Commentary */}
        <div className="mt-4 p-3.5 rounded-xl bg-soft/70 border border-line/60 text-xs sm:text-sm text-ink leading-relaxed flex items-start gap-2.5">
          <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <div>{current.explanation}</div>
        </div>

        {/* Stepper Navigation Buttons */}
        <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-line/70">
          <button
            onClick={() => {
              if (screenIndex > 0) {
                setScreenIndex(prev => prev - 1);
                restartAnimation();
              }
            }}
            disabled={screenIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-line text-xs font-medium text-muted hover:text-ink disabled:opacity-30 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Précédent</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {screens.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setScreenIndex(idx);
                  restartAnimation();
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === screenIndex ? 'w-6 bg-ink' : 'bg-line hover:bg-muted'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              if (screenIndex + 1 < screens.length) {
                setScreenIndex(prev => prev + 1);
                restartAnimation();
              }
            }}
            disabled={screenIndex + 1 >= screens.length}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-ink text-paper text-xs font-medium hover:opacity-90 disabled:opacity-30 transition-all shadow-xs"
          >
            <span>Suivant</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
