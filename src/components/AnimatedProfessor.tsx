import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';
import { StepHeader } from './ui';

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
          <div className="label mb-6">
            Mesure du temps de maintien (2 Harakāt)
          </div>

          {/* Animated Ghunnah Wave */}
          <div className="relative max-w-sm mx-auto h-28 flex items-center justify-center">
            {/* Concentric pulsing rings */}
            <div className="absolute w-24 h-24 rounded-full border-2 border-idgham/40 animate-ping opacity-60" />
            <div className="absolute w-20 h-20 rounded-full bg-idgham-bg border border-idgham/50 flex items-center justify-center animate-ghunnah-pulse">
              <span className="font-ar text-3xl text-idgham">غُنَّة</span>
            </div>
          </div>

          {/* Harakat Beats Meter */}
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

          {/* Merging Words Animation */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 my-6" dir="rtl">
            {/* Word 1 */}
            <div className="p-3 sm:p-4 rounded-2xl bg-card animate-drop" style={{ '--i': 0 } as any}>
              <span className="font-ar text-4xl sm:text-5xl leading-[1.6] text-ink block">مَنۡ</span>
              <span className="text-xs text-muted">Nūn Sākinah</span>
            </div>

            {/* Fusion arrow symbol */}
            <div className="w-9 h-9 rounded-full bg-idgham text-card flex items-center justify-center text-lg animate-pop" style={{ animationDelay: '0.8s' }}>
              +
            </div>

            {/* Word 2 */}
            <div className="p-3 sm:p-4 rounded-2xl bg-card animate-drop" style={{ '--i': 1 } as any}>
              <span className="font-ar text-4xl sm:text-5xl leading-[1.6] text-ink block">يَعۡمَلۡ</span>
              <span className="text-xs text-muted">Lettre Yā' (ينمو)</span>
            </div>
          </div>

          {/* Result of Fusion */}
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
            
            {/* Wrong way */}
            <div className="p-4 rounded-2xl bg-bad-bg text-sm">
              <span className="font-semibold text-bad block mb-1">À éviter : un N appuyé</span>
              <p className="text-muted leading-relaxed">
                Coller la langue aux gencives supérieures en faisant un son "N" claqué et dur.
              </p>
            </div>

            {/* Right way */}
            <div className="p-4 rounded-2xl bg-idgham-bg text-sm">
              <span className="font-semibold text-idgham block mb-1">La bonne position</span>
              <p className="text-muted leading-relaxed">
                La langue reste <strong>suspendue dans la bouche</strong>, prête à prononcer la lettre suivante, pendant que l'air résonne dans le nez.
              </p>
            </div>

          </div>

          {/* Heavy vs Light Ghunnah Comparison */}
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

          {/* Interactive Bouncing Sound Node */}
          <div className="relative max-w-xs mx-auto h-32 flex items-center justify-center">
            {/* Impact floor line */}
            <div className="absolute bottom-4 left-6 right-6 h-px bg-line" />
            
            {/* Bouncing ball */}
            <div className="absolute w-14 h-14 rounded-full bg-qalqalah text-card flex items-center justify-center font-ar text-3xl animate-qalqalah-bounce">
              ق
            </div>

            {/* Echo waves */}
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
            
            {/* Degree 1 */}
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

            {/* Degree 2 */}
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

            {/* Degree 3 */}
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

  const screens = chapter.number === 8 ? nunScreens : qalqalahScreens;
  const current = screens[screenIndex];

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
