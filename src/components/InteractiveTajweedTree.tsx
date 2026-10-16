import React, { useState, useEffect } from 'react';
import { Chapter } from '../types/tajweed';
import { StepHeader, Modal } from './ui';
import { TajweedText, TajweedRuleType } from './TajweedHighlighter';

interface InteractiveTajweedTreeProps {
  chapter: Chapter;
}

interface TreeNode {
  id: string;
  shortTitleFr: string;
  labelFr: string;
  labelAr: string;
  summaryTag: string;
  visualKeyAr: string;
  tagColor: string;
  descriptionFr: string;
  letters?: string[];
  examples?: string[];
  children?: TreeNode[];
}

export const InteractiveTajweedTree: React.FC<InteractiveTajweedTreeProps> = ({ chapter }) => {
  const getTreeData = (): {
    rootTitleFr: string;
    rootTitleAr: string;
    rootSubtitleFr: string;
    branches: TreeNode[];
  } => {
    if (chapter.number === 1) {
      return {
        rootTitleFr: 'Fondements du Tajwīd & Le Lahn',
        rootTitleAr: 'المَفَاهِيمُ الأَسَاسِيَّةُ وَأَنْوَاعُ اللَّحْنِ',
        rootSubtitleFr: '5 notions clés pour comprendre le cadre de la récitation',
        branches: [
          {
            id: 'c1-1',
            shortTitleFr: '1. Statut du Tajwīd',
            labelFr: '1. Qu\'est-ce que le Tajwīd & Statut Juridique',
            labelAr: 'حُكْمُ التَّجْوِيدِ',
            summaryTag: 'Pratique obligatoire (Farḍ ʿAyn)',
            visualKeyAr: 'وَرَتِّلِ ٱلۡقُرۡءَانَ',
            tagColor: 'var(--idgham)',
            descriptionFr:
              'Réciter correctement sans déformer le sens est une obligation individuelle (Farḍ ʿAyn) pour chaque musulman. L\'étude théorique savante est collective (Farḍ Kifāyah).',
            examples: ['وَرَتِّلِ ٱلۡقُرۡءَانَ تَرۡتِيلًا', 'يَتۡلُونَهُۥ حَقَّ تِلَاوَتِهِۦٓ'],
          },
          {
            id: 'c1-2',
            shortTitleFr: '2. Lahn Jalī (Majeur)',
            labelFr: '2. Al-Lahn Al-Jalī (Erreur Majeure)',
            labelAr: 'اللَّحْنُ الجَلِيُّ',
            summaryTag: 'Change le sens · Harām',
            visualKeyAr: 'أَنۡعَمۡتَ ≠ أَنۡعَمۡتُ',
            tagColor: 'var(--bad)',
            letters: ['تَ', 'تُ'],
            descriptionFr:
              'Erreur sur une lettre ou une voyelle qui modifie le sens ou la grammaire (ex: dire « J\'ai comblé » au lieu de « Tu as comblé »). Interdit (Harām).',
            examples: ['أَنۡعَمۡتَ (Tu as comblé ✓)', 'أَنۡعَمۡتُ (J\'ai comblé ❌)'],
          },
          {
            id: 'c1-3',
            shortTitleFr: '3. Lahn Khafī (Subtil)',
            labelFr: '3. Al-Lahn Al-Khafī (Erreur Subtile)',
            labelAr: 'اللَّحْنُ الخَفِيُّ',
            summaryTag: 'Défaut de beauté · Makrūh',
            visualKeyAr: 'ٱلسَّمَآءَ (4-5t)',
            tagColor: 'var(--gold)',
            letters: ['مَآءَ', 'صَٰ'],
            descriptionFr:
              'Défaut de précision (écourter une prolongation ou omettre une Ghunnah) sans changer le sens du mot.',
            examples: ['ٱلسَّمَآءَ (Madd 4-5 temps)', 'بِمَصَٰبِيحَ'],
          },
          {
            id: 'c1-4',
            shortTitleFr: '4. Rasm ʿUthmānī',
            labelFr: '4. Rasm ʿUthmānī & Muṣ-ḥaf',
            labelAr: 'الرَّسْمُ العُثْمَانِيُّ',
            summaryTag: 'Orthographe sacrée des Compagnons',
            visualKeyAr: 'ٱلصَّلَوٰةَ',
            tagColor: 'var(--izhar)',
            letters: ['وٰ'],
            descriptionFr:
              'Le Qurʾān est la parole révélée ; le Muṣ-ḥaf est le livre relié écrit selon la graphie sacrée fixée sous ʿUthmān.',
            examples: ['ٱلصَّلَوٰةَ (écrit avec Wāw)', 'ٱلزَّكَوٰةَ'],
          },
          {
            id: 'c1-5',
            shortTitleFr: '5. Deux Conditions',
            labelFr: '5. Les 2 Conditions d\'Acceptation',
            labelAr: 'شَرْطَا القَبُولِ',
            summaryTag: 'Sincérité (Ikhlās) + Sunnah',
            visualKeyAr: 'إِخْلَاص + سُنَّة',
            tagColor: 'var(--iqlab)',
            descriptionFr:
              'Pour être agréée, la récitation réunit : 1. L\'intention pure pour Allah (Ikhlās) et 2. La conformité à la récitation du Prophète ﷺ. (Mémo : 6236 versets = 6 · 23 ans · 6).',
            examples: ['قُلۡ إِنَّ صَلَاتِى... لِلَّهِ', '6236 versets (6-23-6)'],
          },
        ],
      };
    }

    if (chapter.number === 2) {
      return {
        rootTitleFr: 'Symboles du Mushaf & Ponctuation',
        rootTitleAr: 'عَلَامَاتُ المُصْحَفِ وَضَبْطُهُ',
        rootSubtitleFr: '5 familles de signes pour savoir où s\'arrêter et quoi prononcer',
        branches: [
          {
            id: 'c2-1',
            shortTitleFr: '1. Obligatoire vs Interdit',
            labelFr: '1. Waqf Lāzim (مـ) vs Interdiction (لا)',
            labelAr: 'الوَقْفُ اللَّازِمُ وَالمَمْنُوعُ',
            summaryTag: 'مـ = Stop · لا = Ne pas couper',
            visualKeyAr: 'مـ  /  لا',
            tagColor: 'var(--bad)',
            letters: ['ۘ', 'لا'],
            descriptionFr:
              'مـ impose l\'arrêt pour éviter un contresens. لا interdit de s\'arrêter et de couper l\'idée en deux.',
            examples: ['فَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ (مـ)', 'فَوَيۡلٞ لِّلۡمُصَلِّينَ (لا)'],
          },
          {
            id: 'c2-2',
            shortTitleFr: '2. Arrêts Optionnels',
            labelFr: '2. Arrêts Permis (قلى · ج · صلى)',
            labelAr: 'الوَقْفُ الجَائِزُ',
            summaryTag: 'قلى (Stop+) · ج (=) · صلى (Lier+)',
            visualKeyAr: 'قلى · ج · صلى',
            tagColor: 'var(--gold)',
            letters: ['قلى', 'ج', 'صلى'],
            descriptionFr:
              'قلى = arrêt préférable (Waqf awlā) · ج = égalité parfaite · صلى = continuer est préférable (Wasl awlā).',
            examples: ['قلى (الوقف أولى)', 'ج (تخيير متساوٍ)', 'صلى (الوصل أولى)'],
          },
          {
            id: 'c2-3',
            shortTitleFr: '3. Double Triade',
            labelFr: '3. Arrêt d\'Étreinte (ۛ ... ۛ)',
            labelAr: 'الوَقْفُ المُتَعَانِقُ',
            summaryTag: 'S\'arrêter à 1 seul des deux',
            visualKeyAr: 'ۛ ... ۛ',
            tagColor: 'var(--iqlab)',
            letters: ['ۛ'],
            descriptionFr:
              'Deux groupes de 3 points : si vous vous arrêtez au premier, passez le second (et inversement). Jamais aux deux !',
            examples: ['لَا رَيۡبَۛ فِيهِۛ هُدٗى'],
          },
          {
            id: 'c2-4',
            shortTitleFr: '4. La Saktah (س)',
            labelFr: '4. Pause Brève sans Souffle (س)',
            labelAr: 'السَّكْتَةُ اللَّطِيفَةُ',
            summaryTag: 'Silence de 2t sans respirer',
            visualKeyAr: 'س  /  ۜ',
            tagColor: 'var(--izhar)',
            letters: ['ۜ', 'س'],
            descriptionFr:
              'Couper le son pendant 2 temps SANS reprendre sa respiration, puis continuer la lecture (4 passages dans Hafs).',
            examples: ['عِوَجَاۜ ١ قَيِّمٗا', 'مِن مَّرۡقَدِنَاۜۗ'],
          },
          {
            id: 'c2-5',
            shortTitleFr: '5. Mini-Voyelles & Zéros',
            labelFr: '5. Mini-lettres (ٰ ۥ ۦ) & Les 2 Zéros (ْ / ۠)',
            labelAr: 'الصِّفْرَانِ وَالحَرَكَاتُ',
            summaryTag: 'ْ = Muet partout · ۠ = Lu à l\'arrêt',
            visualKeyAr: 'ٰ  ۥ  ۦ  ْ  ۠',
            tagColor: 'var(--idgham)',
            letters: ['ٰ', 'ۥ', 'ۦ', 'ْ', '۠'],
            descriptionFr:
              'ٰ ۥ ۦ se prolongent 2 temps. Le zéro rond (ْ) rend la lettre muette partout. Le zéro ovale (۠) est muet en liaison mais prononcé à l\'arrêt (ex: أَنَا۠).',
            examples: ['حَوۡلَهُۥ ذَهَبَ', 'أَنَا۠ خَيۡرٞ', 'يَفۡرَحُواْ'],
          },
        ],
      };
    }

    if (chapter.number === 3) {
      return {
        rootTitleFr: 'Arrêt & Reprise (Waqf & Ibtidāʾ)',
        rootTitleAr: 'عِلْمُ الوَقْفِ وَالابْتِدَاءِ',
        rootSubtitleFr: 'Comment terminer un mot à l\'arrêt et comment reprendre son souffle',
        branches: [
          {
            id: 'c3-1',
            shortTitleFr: '1. Les 4 Actions',
            labelFr: '1. Les 4 Actions du Lecteur',
            labelAr: 'الأَفْعَالُ الأَرْبَعَةُ',
            summaryTag: 'Début · Pause · Reprise · Fin',
            visualKeyAr: 'ابْتِدَاء · وَقْف',
            tagColor: 'var(--izhar)',
            descriptionFr:
              '1. Ibtidāʾ (démarrer) · 2. Waqf (pause pour respirer) · 3. Istiʾnāf (reprendre) · 4. Qatʿ (coupure finale de la récitation).',
            examples: ['الابْتِدَاءُ', 'الوَقْفُ', 'الاسْتِئْنَافُ', 'القَطْعُ'],
          },
          {
            id: 'c3-2',
            shortTitleFr: '2. Règle Générale',
            labelFr: '2. Arrêt en Soukoûn (ْ)',
            labelAr: 'السُّكُونُ عِنْدَ الوَقْفِ',
            summaryTag: 'Voyelle finale ➔ Soukoûn pur',
            visualKeyAr: 'نَسۡتَعِينُ ➔ نَسۡتَعِينْ',
            tagColor: 'var(--idgham)',
            letters: ['ـِينْ', 'رْ', 'نْ'],
            descriptionFr:
              'On ne s\'arrête jamais sur une voyelle courte : ـَ, ـِ, ـُ, ـٌ et ـٍ tombent et deviennent un Soukoûn (ْ) à l\'arrêt.',
            examples: ['ٱلۡعَٰلَمِينَ ➔ ٱلۡعَٰلَمِينْ', 'نَسۡتَعِينُ ➔ نَسۡتَعِينْ', 'خَبِيرٞ ➔ خَبِيرْ'],
          },
          {
            id: 'c3-3',
            shortTitleFr: '3. Madd ʿIwad (ـً)',
            labelFr: '3. Exception 1 : Tanwīn Fath (ـً ➔ ـَا)',
            labelAr: 'مَدُّ العِوَضِ',
            summaryTag: 'Double Fathah (ـً) ➔ Alif 2t',
            visualKeyAr: 'قَرَارٗا ➔ قَرَارَا',
            tagColor: 'var(--gold)',
            letters: ['ٗا', 'ً', 'ءَا', 'رَا'],
            descriptionFr:
              'À l\'arrêt, le Tanwīn Fath (ـً / ـٗا) perd son « n » et se prolonge en un Alif de 2 temps (« -an » devient « -ā »).',
            examples: ['قَرَارٗا ➔ قَرَارَا (2 temps)', 'بِنَآءٗ ➔ بِنَآءَا (2 temps)', 'مَآءً ➔ مَآءَا'],
          },
          {
            id: 'c3-4',
            shortTitleFr: '4. Tāʾ Marbūtah (ة)',
            labelFr: '4. Exception 2 : Tāʾ Marbūtah (ة ➔ هْ)',
            labelAr: 'التَّاءُ المَرْبُوطَةُ',
            summaryTag: 'ة devient un souffle Hāʾ (هْ)',
            visualKeyAr: 'رَحۡمَةٗ ➔ رَحۡمَهْ',
            tagColor: 'var(--iqlab)',
            letters: ['ةٗ', 'هْ', 'ةَ', 'ةٍ'],
            descriptionFr:
              'Toute Tāʾ Marbūtah (ة) se transforme en Hāʾ sans voyelle (هْ) à l\'arrêt, même lorsqu\'elle porte un Tanwīn Fath.',
            examples: ['وَرَحۡمَةٗ ➔ وَرَحۡمَهْ', 'ٱلصَّلَوٰةَ ➔ ٱلصَّلَاهْ', 'جَنَّةٍ ➔ جَنَّهْ'],
          },
          {
            id: 'c3-5',
            shortTitleFr: '5. Reprise Sûre',
            labelFr: '5. Stop & Repeat (Reprise après souffle)',
            labelAr: 'الاسْتِئْنَافُ السَّلِيمُ',
            summaryTag: 'Reculer de 2–3 mots',
            visualKeyAr: '⏪ ٢-٣ كَلِمَات',
            tagColor: 'var(--bad)',
            letters: ['إِنَّ'],
            descriptionFr:
              'Si le souffle coupe au milieu d\'un verset, arrêtez-vous en Soukoûn puis reculez de 2 ou 3 mots pour préserver le sens.',
            examples: ['قَالُوٓاْ إِنَّ ٱللَّهَ فَقِيرٞ', 'Reculer sur : قَوۡلَ ٱلَّذِينَ قَالُوٓاْ...'],
          },
        ],
      };
    }

    if (chapter.number === 4) {
      return {
        rootTitleFr: 'Prolongations I : Madd Naturel & Līn',
        rootTitleAr: 'المَدُّ الطَّبِيعِيُّ وَحُرُوفُ اللِّينِ',
        rootSubtitleFr: 'Maîtriser la mesure de base (2 temps) et reconnaître les lettres de Līn',
        branches: [
          {
            id: 'c4-1',
            shortTitleFr: '1. Les 3 Lettres',
            labelFr: '1. Les 3 Lettres de Madd (Clé Nūhīhā)',
            labelAr: 'حُرُوفُ المَدِّ',
            summaryTag: 'ـَا · ـُو · ـِي réunies dans نُوحِيهَا',
            visualKeyAr: 'نُوحِيهَآ',
            tagColor: 'var(--izhar)',
            letters: ['نُو', 'حِي', 'هَآ', 'ٰ', 'ۥ'],
            descriptionFr:
              'Alif après Fathah (ـَا), Wāw nu après Dammah (ـُو), Yāʾ nu après Kasrah (ـِي), ainsi que leurs formes miniatures (ٰ ۥ ۦ).',
            examples: ['نُوحِيهَآ', 'مَٰلِكِ (Alif ٰ)', 'يَلۡوُۥنَ (Wāw ۥ)'],
          },
          {
            id: 'c4-2',
            shortTitleFr: '2. Madd Naturel',
            labelFr: '2. Le Madd Naturel (Ṭabīʿī)',
            labelAr: 'المَدُّ الطَّبِيعِيُّ',
            summaryTag: 'Exactement 2 temps (Harakāt)',
            visualKeyAr: 'قَالَ · يَقُولُ · قِيلَ',
            tagColor: 'var(--gold)',
            letters: ['قَا', 'قُو', 'قِي'],
            descriptionFr:
              'Lorsqu\'aucune Hamzah ni Soukoûn ne suit, la lettre de Madd s\'étire exactement de 2 temps (durée de « Ba + Ba »).',
            examples: ['قَالَ', 'يَقُولُ', 'قِيلَ'],
          },
          {
            id: 'c4-3',
            shortTitleFr: '3. Raccourcissement',
            labelFr: '3. Danger : Tronquer le Madd (Lahn Jalī)',
            labelAr: 'حَذْفُ المَدِّ (حَرَامٌ)',
            summaryTag: 'Interdit d\'écourter (< 2t)',
            visualKeyAr: 'أَخَذۡنَآ ≠ أَخَذۡنَ',
            tagColor: 'var(--bad)',
            letters: ['نَآ', 'نَ'],
            descriptionFr:
              'Avaler les 2 temps du Madd Naturel change la grammaire et le sujet (ex: « Nous avons pris » devient « Elles ont pris »).',
            examples: ['أَخَذۡنَآ (Nous ✓)', 'أَخَذۡنَ (Elles ❌)'],
          },
          {
            id: 'c4-4',
            shortTitleFr: '4. Lettres de Līn',
            labelFr: '4. Lettres de Līn (وْ et يْ après Fathah)',
            labelAr: 'حَرْفَا اللِّينِ',
            summaryTag: 'ـَوْ et ـَيْ = 0 Madd en liaison',
            visualKeyAr: 'خَوۡفٖ · قُرَيۡشٍ',
            tagColor: 'var(--iqlab)',
            letters: ['يۡ', 'وۡ'],
            descriptionFr:
              'Wāw et Yāʾ avec Soukoûn précédés d\'une Fathah (ـَوْ / ـَيْ). Aucune prolongation en lecture continue (s\'allongent seulement à l\'arrêt).',
            examples: ['قُرَيۡشٍ', 'خَوۡفٖ', 'ٱلۡبَيۡتِ'],
          },
          {
            id: 'c4-5',
            shortTitleFr: '5. Mots Caméléons',
            labelFr: '5. Arrêt sur هُوَ · هِيَ · مَعِيَ',
            labelAr: 'هُوَ · هِيَ · مَعِيَ',
            summaryTag: 'Continu = 1t · Arrêt = Madd 2t',
            visualKeyAr: 'هُوَ ➔ هُو',
            tagColor: 'var(--idgham)',
            letters: ['هُوَ', 'هُو', 'عِىَ', 'عِي'],
            descriptionFr:
              'En liaison, le Wāw et le Yāʾ portent une Fathah (« Hu-wa »). À l\'arrêt, la Fathah tombe et libère un Madd de 2 temps (« Hū »).',
            examples: ['إِلَّا هُوَۚ ➔ إِلَّا هُو', 'مَعِىَ ➔ مَعِي'],
          },
        ],
      };
    }

    if (chapter.number === 5) {
      return {
        rootTitleFr: 'Prolongations II : Madd Secondaire (Farʿī)',
        rootTitleAr: 'المَدُّ الفَرْعِيُّ (بِسَبَبِ الهَمْزِ وَالسُّكُونِ)',
        rootSubtitleFr: 'Prolongations causées par une Hamzah (ء) ou un Soukoûn (ْ / ّ)',
        branches: [
          {
            id: 'c5-1',
            shortTitleFr: '1. Madd Muttasil',
            labelFr: '1. Madd Muttasil (Lié dans 1 mot)',
            labelAr: 'المَدُّ المُتَّصِلُ',
            summaryTag: 'Madd + ء (même mot) = 4–5t',
            visualKeyAr: 'ٱلسَّمَآءَ · جَآءَ',
            tagColor: 'var(--gold)',
            letters: ['مَآءَ', 'جَآءَ', 'سُوٓءَ'],
            descriptionFr:
              'Lettre de Madd suivie d\'une Hamzah dans le MÊME mot : prolongation obligatoire (Wājib) de 4 ou 5 temps.',
            examples: ['ٱلسَّمَآءَ', 'جَآءَ', 'سُوٓءَ'],
          },
          {
            id: 'c5-2',
            shortTitleFr: '2. Madd Munfasil',
            labelFr: '2. Madd Munfasil & Silah Kubrā (2 mots)',
            labelAr: 'المَدُّ المُنْفَصِلُ',
            summaryTag: 'Madd + ء (2 mots) = 4–5t',
            visualKeyAr: 'يَٰٓأَيُّهَا · قُوٓاْ أَن',
            tagColor: 'var(--idgham)',
            letters: ['ٰٓأَ', 'وٓاْ أَن', 'هُۥٓ أَ'],
            descriptionFr:
              'Madd à la fin du 1er mot + Hamzah au début du 2e mot : 4 à 5 temps en liaison (redevient 2 temps si on s\'arrête au 1er mot).',
            examples: ['يَٰٓأَيُّهَا', 'قُوٓاْ أَنفُسَكُمۡ', 'مَالَهُۥٓ أَخۡلَدَهُۥ'],
          },
          {
            id: 'c5-3',
            shortTitleFr: '3. Madd Badal',
            labelFr: '3. Madd Badal (ء avant le Madd)',
            labelAr: 'مَدُّ البَدَلِ',
            summaryTag: 'ء précède le Madd = 2 temps',
            visualKeyAr: 'ءَامَنُواْ · إِيمَٰنٗا',
            tagColor: 'var(--izhar)',
            letters: ['ءَا', 'إِي', 'أُو'],
            descriptionFr:
              'La Hamzah est placée AVANT la lettre de Madd : se prolonge de 2 temps seulement dans Hafs (comme le Madd Naturel).',
            examples: ['ءَامَنُواْ', 'إِيمَٰنٗا', 'أُوتُواْ'],
          },
          {
            id: 'c5-4',
            shortTitleFr: '4. Madd Lāzim',
            labelFr: '4. Madd Lāzim (Soukoûn fixe / Shaddah)',
            labelAr: 'المَدُّ اللَّازِمُ',
            summaryTag: 'Madd + ّ ou ْ fixe = 6t stricts',
            visualKeyAr: 'ٱلضَّآلِّينَ · الٓمٓ',
            tagColor: 'var(--bad)',
            letters: ['ضَّآلِّ', 'ءَآلۡ', 'الٓمٓ'],
            descriptionFr:
              'Lettre de Madd suivie d\'une Shaddah (ّ) ou d\'un Soukoûn originel : prolongation obligatoire de 6 temps stricts.',
            examples: ['ٱلضَّآلِّينَ (6t)', 'ءَآلۡـَٰٔنَ (6t)', 'الٓمٓ (6t)'],
          },
          {
            id: 'c5-5',
            shortTitleFr: '5. ʿĀrid & Līn (Arrêt)',
            labelFr: '5. Madd ʿĀrid li-s-Sukūn & Līn à l\'Arrêt',
            labelAr: 'العَارِضُ لِلسُّكُونِ',
            summaryTag: 'Soukoûn d\'arrêt = 2, 4 ou 6t',
            visualKeyAr: 'ٱلۡعَٰلَمِينْ · قُرَيۡشْ',
            tagColor: 'var(--iqlab)',
            letters: ['ـِينْ', 'يۡشْ', 'يۡتْ'],
            descriptionFr:
              'Quand on s\'arrête sur un mot dont l\'avant-dernière lettre est un Madd ou un Līn : choix entre 2, 4 ou 6 temps.',
            examples: ['ٱلۡعَٰلَمِينْ (2, 4 ou 6t)', 'قُرَيۡشْ (2, 4 ou 6t)', 'ٱلۡبَيۡتْ'],
          },
        ],
      };
    }

    if (chapter.number === 6) {
      return {
        rootTitleFr: 'Les Hamzahs : Al-Qatʿ (ء) vs Al-Wasl (ٱ)',
        rootTitleAr: 'هَمْزَتَا القَطْعِ وَالوَصْلِ',
        rootSubtitleFr: 'Reconnaître la Hamzah qui tombe en liaison et trouver sa voyelle de départ',
        branches: [
          {
            id: 'c6-1',
            shortTitleFr: '1. Hamzat Al-Qatʿ',
            labelFr: '1. Hamzat Al-Qatʿ (ء - Permanente)',
            labelAr: 'هَمْزَةُ القَطْعِ',
            summaryTag: 'Prononcée partout (début & liaison)',
            visualKeyAr: 'أَ · إِ · أُ · ء',
            tagColor: 'var(--gold)',
            letters: ['أ', 'إ', 'ؤ', 'ئ', 'ء'],
            descriptionFr:
              'Porte le signe « ء » et sa voyelle : elle est fixe et se prononce toujours, qu\'on démarre dessus ou qu\'on enchaîne.',
            examples: ['أَصَٰبَتۡهُم', 'إِنَّا', 'أُوْلَٰٓئِكَ'],
          },
          {
            id: 'c6-2',
            shortTitleFr: '2. Hamzat Al-Wasl',
            labelFr: '2. Hamzat Al-Wasl (ٱ - Liaison)',
            labelAr: 'هَمْزَةُ الوَصْلِ',
            summaryTag: 'Lue au départ · Muette en liaison',
            visualKeyAr: 'حَجَّ ٱلۡبَيۡتَ',
            tagColor: 'var(--idgham)',
            letters: ['ٱ'],
            descriptionFr:
              'Marquée par un petit Sād (ٱ). Prononcée uniquement si on commence sa lecture dessus ; totalement muette en cours de phrase.',
            examples: ['حَجَّ ٱلۡبَيۡتَ ➔ Hajja-l-bayta', 'أَوِ ٱعۡتَمَرَ ➔ Awi-ʿtamara'],
          },
          {
            id: 'c6-3',
            shortTitleFr: '3. Dans les Verbes',
            labelFr: '3. Démarrer un Verbe : Règle de la 3e Lettre',
            labelAr: 'فِي الأَفْعَالِ',
            summaryTag: '3e lettre ـُ ➔ OU | Sinon ➔ I',
            visualKeyAr: 'ٱدۡعُ (اُ) · ٱهۡدِنَا (اِ)',
            tagColor: 'var(--izhar)',
            letters: ['ٱ', 'اُ', 'اِ'],
            descriptionFr:
              'Si la 3e lettre du verbe porte une Dammah (ـُ), on attaque en « OU » (اُ). Si elle porte Fathah ou Kasrah, on attaque en « I » (اِ).',
            examples: ['ٱدۡعُ ➔ اُدۡعُ', 'ٱذۡهَبۡ ➔ اِذۡهَبۡ', 'ٱهۡدِنَا ➔ اِهۡدِنَا'],
          },
          {
            id: 'c6-4',
            shortTitleFr: '4. Dans les Noms',
            labelFr: '4. Démarrer un Nom : Article vs Noms isolés',
            labelAr: 'فِي الأَسْمَاءِ',
            summaryTag: 'ٱلـ ➔ « A » | Noms sans ٱلـ ➔ « I »',
            visualKeyAr: 'ٱلۡحَمۡدُ (اَ) · ٱسۡمُ (اِ)',
            tagColor: 'var(--iqlab)',
            letters: ['ٱلـ', 'اَلـ', 'اِبۡ', 'اِسۡ'],
            descriptionFr:
              'L\'article défini « ٱلـ » s\'attaque toujours par « A » (Al-Hamdu). Les noms isolés sans article (Ibn, Ism, Imraʾah...) s\'attaquent par « I ».',
            examples: ['ٱلۡحَمۡدُ ➔ اَلۡحَمۡدُ', 'ٱبۡنُ ➔ اِبۡنُ', 'ٱسۡمُ ➔ اِسۡمُ'],
          },
          {
            id: 'c6-5',
            shortTitleFr: '5. Exceptions (5 Verbes)',
            labelFr: '5. Les 5 Verbes Pièges & Rencontre ٱئـ',
            labelAr: 'الأَفْعَالُ الخَمْسَةُ',
            summaryTag: '5 verbes en « I » · ٱئْتُونِي ➔ إِيتُونِي',
            visualKeyAr: 'ٱمۡشُواْ ➔ اِمۡشُواْ',
            tagColor: 'var(--bad)',
            letters: ['ٱ', 'ئ', 'إِي'],
            descriptionFr:
              'ٱبْنُواْ, ٱمْشُواْ, ٱقْضُواْ, ٱمْنُواْ, ٱئْتُواْ se démarrent en « I » (Kasrah d\'origine au singulier). Et ٱئْتُونِي se lit « Ītūnī » au départ.',
            examples: ['ٱبۡنُواْ ➔ اِبۡنُواْ', 'ٱمۡشُواْ ➔ اِمۡشُواْ', 'ٱئۡتُونِى ➔ إِيتُونِي'],
          },
        ],
      };
    }

    if (chapter.number === 7) {
      return {
        rootTitleFr: 'Les Règles de la Lām Sākinah (لْ)',
        rootTitleAr: 'أَحْكَامُ اللَّامِ السَّاكِنَةِ',
        rootSubtitleFr: 'Savoir quand prononcer la Lām clairement (Izhār) ou la fusionner (Idghām)',
        branches: [
          {
            id: 'c7-1',
            shortTitleFr: '1. Lām Lunaire',
            labelFr: '1. Lām Qamariyyah (Lune - Clarté)',
            labelAr: 'اللَّامُ القَمَرِيَّةُ',
            summaryTag: 'Clarté (Izhār) · 14 lettres',
            visualKeyAr: 'ٱلۡقَمَرِ (لۡ)',
            tagColor: 'var(--izhar)',
            letters: ['ء', 'ب', 'غ', 'ح', 'ج', 'ك', 'و', 'خ', 'ف', 'ع', 'ق', 'ي', 'م', 'هـ'],
            descriptionFr:
              '14 lettres réunies dans « إِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ ». La Lām porte un Soukoûn visible (لۡ) et se prononce clairement.',
            examples: ['ٱلۡقَمَرِ', 'ٱلۡبَيۡتِ', 'ٱلۡحَمۡدُ'],
          },
          {
            id: 'c7-2',
            shortTitleFr: '2. Lām Solaire',
            labelFr: '2. Lām Shamsiyyah (Soleil - Fusion)',
            labelAr: 'اللَّامُ الشَّمْسِيَّةُ',
            summaryTag: 'Fusion (Idghām) · 14 lettres',
            visualKeyAr: 'ٱلشَّمۡسِ (ّ)',
            tagColor: 'var(--idgham)',
            letters: ['ط', 'ث', 'ص', 'ر', 'ت', 'ض', 'ذ', 'ن', 'د', 'س', 'ظ', 'ز', 'ش', 'ل'],
            descriptionFr:
              '14 lettres. La Lām est nue et fusionne totalement dans la lettre suivante qui porte une Shaddah (ّ).',
            examples: ['ٱلشَّمۡسِ ➔ Ash-shams', 'ٱلنَّاسِ ➔ An-nās', 'وَٱلشَّمۡسِ ➔ Wash-shams'],
          },
          {
            id: 'c7-3',
            shortTitleFr: '3. Nom d\'Allah',
            labelFr: '3. Lām du Nom d\'Allah (ٱللَّه)',
            labelAr: 'لَفْظُ الجَلَالَةِ',
            summaryTag: 'ـَ / ـُ = Lourd · ـِ = Fin',
            visualKeyAr: 'قَالَ ٱللَّهُ · بِسۡمِ ٱللَّهِ',
            tagColor: 'var(--gold)',
            letters: ['للَّ', 'ٱللَّهُ', 'ٱللَّهِ'],
            descriptionFr:
              'Emphatique (Tafkhīm) après Fathah, Dammah ou au départ. Fine (Tarqīq) après une Kasrah.',
            examples: ['قَالَ ٱللَّهُ (Lourd)', 'عَبۡدُ ٱللَّهِ (Lourd)', 'بِسۡمِ ٱللَّهِ (Fin)'],
          },
          {
            id: 'c7-4',
            shortTitleFr: '4. Verbe & Particule',
            labelFr: '4. Lām du Verbe & Particule (قُلْ · هَلْ · بَلْ)',
            labelAr: 'لَامُ الفِعْلِ وَالحَرْفِ',
            summaryTag: 'Fusion devant ل/ر · Clarté ailleurs',
            visualKeyAr: 'قُل رَّبِّ · قُلۡ نَعَمۡ',
            tagColor: 'var(--iqlab)',
            letters: ['لۡ', 'لَّ', 'رَّ'],
            descriptionFr:
              'Toujours claire (Izhār), SAUF si elle est suivie d\'un Lām (ل) ou d\'un Rāʾ (ر) où elle fusionne totalement.',
            examples: ['قُل رَّبِّ (Fusion)', 'قُل لَّكُمۡ (Fusion)', 'قُلۡ نَعَمۡ (Clarté)'],
          },
          {
            id: 'c7-5',
            shortTitleFr: '5. Nom & Impératif',
            labelFr: '5. Lām du Nom & de l\'Impératif',
            labelAr: 'لَامُ الاسْمِ وَالأَمْرِ',
            summaryTag: 'Toujours claire (100% Izhār)',
            visualKeyAr: 'أَلۡسِنَتِكُمۡ · وَلۡيُوفُواْ',
            tagColor: 'var(--ikhfa)',
            letters: ['لۡ'],
            descriptionFr:
              'Située au milieu d\'un nom ou dans un impératif (Wal-... / Fal-...), la Lām est toujours prononcée clairement.',
            examples: ['أَلۡسِنَتِكُمۡ', 'وَلۡيُوفُواْ', 'فَلۡيَسۡتَجِيبُواْ'],
          },
        ],
      };
    }

    if (chapter.number === 8) {
      return {
        rootTitleFr: 'Nūn Sākinah (نْ) & Tanwīn (ـً ـٍ ـٌ)',
        rootTitleAr: 'أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ',
        rootSubtitleFr: '4 règles selon la lettre qui suit immédiatement le son « N »',
        branches: [
          {
            id: 'c8-1',
            shortTitleFr: '1. Izhār (Clarté)',
            labelFr: '1. Izhār Halqī (Clarté de Gorge)',
            labelAr: 'إِظْهَارٌ حَلْقِيٌّ',
            summaryTag: '6 lettres de gorge · 0 Ghunnah',
            visualKeyAr: 'ء هـ ع ح غ خ',
            tagColor: 'var(--izhar)',
            letters: ['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'],
            descriptionFr:
              'Devant les 6 lettres de la gorge, le Nūn se prononce nettement sans bourdonnement nasal prolongé.',
            examples: ['مَنۡ ءَامَنَ', 'أَنۡعَمۡتَ', 'عَلِيمٌ حَكِيمٞ'],
          },
          {
            id: 'c8-2',
            shortTitleFr: '2. Idghām (Fusion)',
            labelFr: '2. Idghām (Fusion dans la suivante)',
            labelAr: 'إِدْغَامٌ (يَرْمَلُونَ)',
            summaryTag: '6 lettres : يَرْمَلُونَ (en 2 mots)',
            visualKeyAr: 'ي ر م ل و ن',
            tagColor: 'var(--idgham)',
            letters: ['ي', 'ر', 'م', 'ل', 'و', 'ن'],
            descriptionFr:
              'Entre 2 mots, devant les 6 lettres de « يَرْمَلُونَ », le Nūn s\'efface et fusionne dans la lettre suivante.',
            examples: ['مَن يَقُولُ', 'مِن رَّبِّهِمۡ', 'دُنۡيَا (Exception 1 mot)'],
            children: [
              {
                id: 'c8-2a',
                shortTitleFr: 'Avec Ghunnah (2t)',
                labelFr: 'Idghām avec Ghunnah (2 temps)',
                labelAr: 'بِغُنَّةٍ (يَنْمُو)',
                summaryTag: '4 lettres : ي ن م و',
                visualKeyAr: 'مَن يَقُولُ',
                tagColor: 'var(--idgham)',
                letters: ['ي', 'ن', 'م', 'و'],
                descriptionFr: 'Fusion accompagnée d\'une résonance nasale de 2 temps devant ي ن م و.',
                examples: ['مَن يَقُولُ', 'مِن مَّالٍ'],
              },
              {
                id: 'c8-2b',
                shortTitleFr: 'Sans Ghunnah (0t)',
                labelFr: 'Idghām sans Ghunnah',
                labelAr: 'بِغَيْرِ غُنَّةٍ (ل · ر)',
                summaryTag: '2 lettres : ل et ر',
                visualKeyAr: 'مِن رَّبِّهِمۡ',
                tagColor: 'var(--ink)',
                letters: ['ل', 'ر'],
                descriptionFr: 'Fusion totale et sèche dans le Lām ou le Rāʾ sans aucune nasalité.',
                examples: ['مِن رَّبِّهِمۡ', 'هُدٗى لِّلۡمُتَّقِينَ'],
              },
              {
                id: 'c8-2c',
                shortTitleFr: 'Exception (1 mot)',
                labelFr: 'Exception : Izhār Mutlaq',
                labelAr: 'إِظْهَارٌ مُطْلَقٌ',
                summaryTag: 'Dans 1 seul mot = Clarté',
                visualKeyAr: 'دُنۡيَا · بُنۡيَٰنٌ',
                tagColor: 'var(--gold)',
                letters: ['نۡيَ', 'نۡوَ'],
                descriptionFr:
                  'Dans un même mot, la fusion est interdite (4 mots dans le Coran : Dunyā, Bunyān, Qinwān, Sinwān).',
                examples: ['دُنۡيَا', 'بُنۡيَٰنٌ', 'قِنۡوَانٌ', 'صِنۡوَانٌ'],
              },
            ],
          },
          {
            id: 'c8-3',
            shortTitleFr: '3. Iqlāb (Mīm)',
            labelFr: '3. Iqlāb (Conversion en Mīm)',
            labelAr: 'إِقْلَابٌ',
            summaryTag: 'Devant ب ➔ Devient م (2t)',
            visualKeyAr: 'ب ➔ مۢ',
            tagColor: 'var(--iqlab)',
            letters: ['ب'],
            descriptionFr:
              'Devant la seule lettre Bāʾ (ب), le Nūn se transforme en un Mīm doux avec 2 temps de Ghunnah (repère : petit مـ).',
            examples: ['مِنۢ بَعۡدِ', 'سَمِيعُۢ بَصِيرٌ'],
          },
          {
            id: 'c8-4',
            shortTitleFr: '4. Ikhfāʾ (Caché)',
            labelFr: '4. Ikhfāʾ Haqīqī (Dissimulation)',
            labelAr: 'إِخْفَاءٌ حَقِيقِيٌّ',
            summaryTag: '15 lettres · Ghunnah 2 temps',
            visualKeyAr: 'مِن تَحۡتِهَا',
            tagColor: 'var(--ikhfa)',
            letters: ['ص', 'ذ', 'ث', 'ك', 'ج', 'ش', 'ق', 'س', 'د', 'ط', 'ز', 'ف', 'ت', 'ض', 'ظ'],
            descriptionFr:
              'Devant les 15 autres lettres, la langue ne touche pas le palais et le son est dissimulé avec 2 temps de Ghunnah.',
            examples: ['مِن تَحۡتِهَا', 'مِن قَبۡلِكَ'],
          },
        ],
      };
    }

    if (chapter.number === 9) {
      return {
        rootTitleFr: 'Les Règles de la Mīm Sākinah (مْ)',
        rootTitleAr: 'أَحْكَامُ المِيمِ السَّاكِنَةِ',
        rootSubtitleFr: '3 règles labiales selon la lettre qui suit le Mīm sans voyelle',
        branches: [
          {
            id: 'c9-1',
            shortTitleFr: '1. Ikhfāʾ Shafawī',
            labelFr: '1. Ikhfāʾ Shafawī (Dissimulation)',
            labelAr: 'إِخْفَاءٌ شَفَوِيٌّ',
            summaryTag: 'مْ + ب ➔ Dissimulation (2t)',
            visualKeyAr: 'م + ب',
            tagColor: 'var(--iqlab)',
            letters: ['ب'],
            descriptionFr:
              'Suivi d\'un Bāʾ (ب), le Mīm se dissimule sur les lèvres fermées sans serrer, avec 2 temps de Ghunnah.',
            examples: ['تَرۡمِيهِم بِحِجَارَةٖ', 'إِنَّ رَبَّهُم بِهِم'],
          },
          {
            id: 'c9-2',
            shortTitleFr: '2. Idghām Shafawī',
            labelFr: '2. Idghām Shafawī (Fusion)',
            labelAr: 'إِدْغَامٌ شَفَوِيٌّ',
            summaryTag: 'مْ + م ➔ Fusion مّ (2t)',
            visualKeyAr: 'م + مّ',
            tagColor: 'var(--idgham)',
            letters: ['م'],
            descriptionFr:
              'Suivi d\'un autre Mīm (م), les deux fusionnent en un seul Mīm doublé (مّ) maintenu 2 temps avec Ghunnah.',
            examples: ['فِى قُلُوبِهِم مَّرَضٞ', 'لَهُم مَّشَوۡاْ'],
          },
          {
            id: 'c9-3',
            shortTitleFr: '3. Izhār Shafawī',
            labelFr: '3. Izhār Shafawī (Clarté)',
            labelAr: 'إِظْهَارٌ شَفَوِيٌّ',
            summaryTag: 'مْ + 26 lettres ➔ Clarté (0t)',
            visualKeyAr: 'مۡ (حَذَرَ و / ف)',
            tagColor: 'var(--izhar)',
            letters: ['مۡ', 'و', 'ف'],
            descriptionFr:
              'Devant les 26 autres lettres, prononcer le Mīm nettement sans Ghunnah prolongée (attention surtout devant و et ف !).',
            examples: ['ٱلۡحَمۡدُ لِلَّهِ', 'عَلَيۡهِمۡ وَلَا', 'هُمۡ فِيهَا'],
          },
        ],
      };
    }

    if (chapter.number === 10) {
      return {
        rootTitleFr: 'La Qalqalah (Rebond Acoustique)',
        rootTitleAr: 'أَحْكَامُ القَلْقَلَةِ وَمَرَاتِبُهَا',
        rootSubtitleFr: 'Les 5 lettres de rebond (قُطْبُ جَدٍّ) et leurs 3 degrés d\'intensité',
        branches: [
          {
            id: 'c10-1',
            shortTitleFr: '1. Les 5 Lettres',
            labelFr: '1. Les 5 Lettres (قُطْبُ جَدٍّ)',
            labelAr: 'حُرُوفُ القَلْقَلَةِ',
            summaryTag: 'Uniquement avec Soukoûn (ْ)',
            visualKeyAr: 'ق ط ب ج د',
            tagColor: 'var(--qalqalah)',
            letters: ['ق', 'ط', 'ب', 'ج', 'د'],
            descriptionFr:
              'Réunies dans « قُطْبُ جَدٍّ ». Lorsqu\'elles portent un Soukoûn (ou à l\'arrêt), elles rebondissent sans ajouter de voyelle.',
            examples: ['ٱلۡفَلَقِ', 'أَحَدٌ', 'يَقۡطَعُونَ'],
          },
          {
            id: 'c10-2',
            shortTitleFr: '2. Kubrā (Forte)',
            labelFr: '2. Degré 1 : Kubrā (Majeure)',
            labelAr: 'مَرْتَبَةٌ كُبْرَى',
            summaryTag: 'À l\'arrêt avec Shaddah (ّ)',
            visualKeyAr: 'وَتَبَّ · بِٱلۡحَقِّ',
            tagColor: 'var(--bad)',
            letters: ['بّ', 'قّ'],
            descriptionFr:
              'Le rebond le plus fort : quand on s\'arrête en fin de mot sur une lettre de Qalqalah portant une Shaddah (ّ).',
            examples: ['وَتَبَّ', 'بِٱلۡحَقِّ'],
          },
          {
            id: 'c10-3',
            shortTitleFr: '3. Wustā (Moyenne)',
            labelFr: '3. Degré 2 : Wustā (Moyenne)',
            labelAr: 'مَرْتَبَةٌ وُسْطَى',
            summaryTag: 'À l\'arrêt sans Shaddah',
            visualKeyAr: 'أَحَدٌ ➔ أَحَدْ',
            tagColor: 'var(--gold)',
            letters: ['دْ', 'بْ'],
            descriptionFr:
              'Rebond moyen : quand on s\'arrête en fin de mot sur une lettre de Qalqalah simple (sans Shaddah).',
            examples: ['قُلۡ هُوَ ٱللَّهُ أَحَدٌ', 'مَا كَسَبَ'],
          },
          {
            id: 'c10-4',
            shortTitleFr: '4. Sughrā (Légère)',
            labelFr: '4. Degré 3 : Sughrā (Mineure)',
            labelAr: 'مَرْتَبَةٌ صُغْرَى',
            summaryTag: 'En plein mot (lecture continue)',
            visualKeyAr: 'يَقۡطَعُونَ',
            tagColor: 'var(--izhar)',
            letters: ['قۡ', 'طۡ', 'بۡ'],
            descriptionFr:
              'Rebond léger et rapide : lorsque la lettre de Qalqalah est au milieu d\'un mot ou liée au mot suivant.',
            examples: ['يَقۡطَعُونَ', 'خَلَقۡنَا'],
          },
        ],
      };
    }

    if (chapter.number === 11) {
      return {
        rootTitleFr: 'L\'Assimilation (Rencontre de 2 Consonnes)',
        rootTitleAr: 'إِدْغَامُ المُتَمَاثِلَيْنِ وَالمُتَقَارِبَيْنِ',
        rootSubtitleFr: 'Quand la 1re consonne (sans voyelle) fusionne dans la 2nde',
        branches: [
          {
            id: 'c11-1',
            shortTitleFr: '1. Lettres Jumelles',
            labelFr: '1. Mutamāthilayn (2 Lettres Identiques)',
            labelAr: 'المُتَمَاثِلَانِ',
            summaryTag: '1re nue + même lettre = Fusion',
            visualKeyAr: 'وَقَد دَّخَلُواْ',
            tagColor: 'var(--idgham)',
            letters: ['ف', 'د', 'ب', 'ك', 'هـ'],
            descriptionFr:
              'Deux consonnes identiques qui se suivent (la 1re sans voyelle) fusionnent en une seule consonne doublée (ّ).',
            examples: ['وَقَد دَّخَلُواْ', 'يُدۡرِككُّمُ ٱلۡمَوۡتُ', 'فَلَا يُسۡرِف فِّى'],
          },
          {
            id: 'c11-2',
            shortTitleFr: '2. Exception Madd',
            labelFr: '2. Exception : Lettres de Madd (Zéro Fusion)',
            labelAr: 'اسْتِثْنَاءُ المَدِّ',
            summaryTag: 'ـِي + ي ou ـُو + و = Garder 2t',
            visualKeyAr: 'فِى يُوسُفَ (2t)',
            tagColor: 'var(--gold)',
            letters: ['و', 'ي'],
            descriptionFr:
              'Une lettre de Madd (ـِي ou ـُو) ne fusionne JAMAIS avec un ي ou un و : on maintient les 2 temps de prolongation.',
            examples: ['فِى يُوسُفَ (Fī Yūsuf)', 'ءَامَنُواْ وَعَمِلُواْ'],
          },
          {
            id: 'c11-3',
            shortTitleFr: '3. Fusion Totale',
            labelFr: '3. Idghām Kāmil (Lettres Proches)',
            labelAr: 'الإِدْغَامُ الكَامِلُ',
            summaryTag: '1re nue + 2e avec Shaddah (ّ)',
            visualKeyAr: 'قَد تَّبَيَّنَ · نَخۡلُقكُّم',
            tagColor: 'var(--izhar)',
            letters: ['ت', 'ط', 'ذ', 'ظ', 'ب', 'م', 'ق', 'ك', 'د', 'ل', 'ر'],
            descriptionFr:
              'La 1re lettre s\'efface à 100 % au profit de la 2e qui porte une Shaddah (ex: ד➔تّ, ق➔كّ, ب➔مّ avec Ghunnah).',
            examples: ['ٱرۡكَب مَّعَنَا', 'أَلَمۡ نَخۡلُقكُّم', 'قَد تَّبَيَّنَ'],
          },
          {
            id: 'c11-4',
            shortTitleFr: '4. Fusion Partielle',
            labelFr: '4. Idghām Nāqis (ط dans ت)',
            labelAr: 'الإِدْغَامُ النَّاقِصُ',
            summaryTag: 'ط (lourd) relâché en ت (fin)',
            visualKeyAr: 'بَسَطتَ · أَحَطتُ',
            tagColor: 'var(--qalqalah)',
            letters: ['ط', 'ت'],
            descriptionFr:
              'Le ط sans voyelle devant ت garde son emphase lourde au départ (sans Qalqalah) puis s\'ouvre sur un ت fin.',
            examples: ['بَسَطتَ', 'أَحَطتُ', 'فَرَّطتُمۡ'],
          },
        ],
      };
    }

    if (chapter.number === 12) {
      return {
        rootTitleFr: 'Emphase (Tafkhīm) & Finesse (Tarqīq)',
        rootTitleAr: 'التَّفْخِيمُ وَالتَّرْقِيقُ',
        rootSubtitleFr: 'Distinguer les lettres toujours lourdes, les lettres fines et les 3 hybrides',
        branches: [
          {
            id: 'c12-1',
            shortTitleFr: '1. Toujours Lourdes',
            labelFr: '1. Les 7 Lettres Lourdes (خُصَّ ضَغْطٍ قِظْ)',
            labelAr: 'حُرُوفُ الاسْتِعْلَاءِ',
            summaryTag: '7 lettres toujours emphatiques',
            visualKeyAr: 'خ ص ض غ ط ق ظ',
            tagColor: 'var(--bad)',
            letters: ['خ', 'ص', 'ض', 'غ', 'ط', 'ق', 'ظ'],
            descriptionFr:
              'Ces 7 lettres sont toujours lourdes (du degré 1 avec ـَا au degré 5 avec ـِ). Le fond de la langue s\'élève sans arrondir les lèvres.',
            examples: ['ٱلصَّٰبِرِينَ (Degré 1)', 'خَلَقَ (Degré 2)', 'صِرَٰطَ (Degré 5)'],
          },
          {
            id: 'c12-2',
            shortTitleFr: '2. Alif & Allah',
            labelFr: '2. Hybrides I : L\'Alif & Le Nom d\'Allah',
            labelAr: 'الأَلِفُ وَلَفْظُ الجَلَالَةِ',
            summaryTag: 'Alif imite avant · ٱللَّه : ـَ/ـُ Lourd',
            visualKeyAr: 'خَالِدِينَ · بِسۡمِ ٱللَّهِ',
            tagColor: 'var(--gold)',
            letters: ['ا', 'ل'],
            descriptionFr:
              'L\'Alif copie la lettre qui le précède. Le Lām d\'Allah est lourd après Fathah/Dammah et fin après Kasrah.',
            examples: ['خَالِدِينَ (Lourd)', 'إِيَّاكَ (Fin)', 'شَهِدَ ٱللَّهُ vs بِسۡمِ ٱللَّهِ'],
          },
          {
            id: 'c12-3',
            shortTitleFr: '3. La Lettre Rāʾ (ر)',
            labelFr: '3. Hybrides II : La Rāʾ (ر)',
            labelAr: 'أَحْكَامُ الرَّاءِ',
            summaryTag: 'ـَ / ـُ = Lourde · ـِ / يْ = Fine',
            visualKeyAr: 'رَبَّنَا (Lourd) · فِرۡعَوۡنَ (Fin)',
            tagColor: 'var(--izhar)',
            letters: ['ر'],
            descriptionFr:
              'Lourde avec Fathah ou Dammah. Fine (Tarqīq) lorsqu\'elle porte une Kasrah ou est précédée d\'une Kasrah / d\'un Yāʾ.',
            examples: ['رَبَّنَا (Lourde)', 'فِرۡعَوۡنَ (Fine)', 'خَبِيرٌ (Fine à l\'arrêt)'],
          },
          {
            id: 'c12-4',
            shortTitleFr: '4. Décontamination',
            labelFr: '4. Takhlīs (Séparer Fin & Lourd)',
            labelAr: 'تَخْلِيصُ الحُرُوفِ',
            summaryTag: 'Ne pas alourdir une lettre fine',
            visualKeyAr: 'خَلَقَ (خ ➔ ل ➔ ق)',
            tagColor: 'var(--idgham)',
            letters: ['خ', 'ل', 'ق', 'ص'],
            descriptionFr:
              'Quand une lettre fine est entourée de lettres lourdes (ex: le Lām dans Khalaqa), veillez à la garder 100 % fine.',
            examples: ['خَلَقَ (Lām fin)', 'نَصِيرٌ (Nūn fin)', 'وَٱلۡمُطَلَّقَٰتُ'],
          },
        ],
      };
    }

    return {
      rootTitleFr: chapter.titleFr,
      rootTitleAr: chapter.titleAr,
      rootSubtitleFr: chapter.summaryFr,
      branches: [],
    };
  };

  const { rootTitleFr, rootTitleAr, rootSubtitleFr, branches } = getTreeData();
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [memoMode, setMemoMode] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    setSelectedNode(null);
    setSheetOpen(false);
    setRevealed(new Set());
  }, [chapter.number]);

  const mapTagColorToRule = (tagColor?: string): TajweedRuleType => {
    if (!tagColor) return 'izhar';
    if (tagColor.includes('bad')) return 'error';
    if (tagColor.includes('qalqalah')) return 'qalqalah';
    if (tagColor.includes('idgham')) return 'idgham';
    if (tagColor.includes('iqlab')) return 'iqlab';
    if (tagColor.includes('ikhfa')) return 'ikhfa';
    if (tagColor.includes('gold')) return 'madd-4-5';
    return 'izhar';
  };

  const visualOf = (node: TreeNode) => NODE_VISUALS[node.id] ?? { icon: '✦', hook: node.summaryTag };
  const cleanTitle = (t: string) => t.replace(/^\d+\.\s*/, '');
  const tint = (color: string, pct: number) => `color-mix(in srgb, ${color} ${pct}%, var(--card))`;

  const openNode = (node: TreeNode) => {
    if (memoMode && !revealed.has(node.id)) {
      setRevealed((prev) => new Set(prev).add(node.id));
      return;
    }
    setSelectedNode(node);
    if (!isDesktop) setSheetOpen(true);
  };

  const toggleMemo = (on: boolean) => {
    setMemoMode(on);
    setRevealed(new Set());
  };

  const desktopCols =
    branches.length === 3 ? 'md:grid-cols-3' : branches.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3 lg:grid-cols-5';

  /** Nœuds de règles qui disposent d'un vrai ensemble de lettres de l'alphabet à afficher */
  const isAlphabetRuleNode = (id: string) => {
    return [
      'c7-1', 'c7-2',
      'c8-1', 'c8-2', 'c8-2a', 'c8-2b', 'c8-3', 'c8-4',
      'c9-1', 'c9-2',
      'c10-1',
      'c11-3',
      'c12-1',
    ].includes(id);
  };

  /** Analyseur d'exemples pour séparer le texte coranique arabe de sa note explicative */
  const parseExample = (raw: string) => {
    const match = raw.match(/^(.*?)\s*\((.*?)\)$/);
    if (match) {
      const arabic = match[1].trim();
      const note = match[2].trim();
      const isCorrect = note.includes('✓');
      const isError = note.includes('❌');
      return { arabic, note, isCorrect, isError };
    }
    return { arabic: raw.trim(), note: null, isCorrect: false, isError: false };
  };

  /**
   * Contenu direct et clair de la règle (utilisé sur Mobile dans la modale et sur Desktop dans le panneau)
   * ZÉRO répétition :
   * 1. L'explication claire et percutante (mise en valeur avec la couleur de la règle)
   * 2. Les lettres clés à retenir (uniquement pour les règles basées sur l'alphabet)
   * 3. Les exemples coraniques avec séparation nette entre le texte arabe calligraphié et la note explicative
   * 4. Les sous-cas éventuels
   */
  const renderDetail = (node: TreeNode) => {
    const showAlphabetLetters = isAlphabetRuleNode(node.id) && node.letters && node.letters.length > 0;

    return (
      <div className="space-y-4">
        {/* 1. L'explication claire et directe */}
        <div
          className="rounded-2xl p-4 sm:p-5 border-l-4 leading-relaxed text-[15px] sm:text-base text-ink"
          style={{
            background: tint(node.tagColor, 8),
            borderLeftColor: node.tagColor,
          }}
        >
          <p className="font-semibold text-base sm:text-lg text-ink mb-1">
            {node.summaryTag}
          </p>
          <p className="text-ink/90 text-sm sm:text-[15px] leading-relaxed">
            {node.descriptionFr}
          </p>
        </div>

        {/* 2. Lettres clés à mémoriser (uniquement si vrai alphabet de règle) */}
        {showAlphabetLetters && (
          <div className="rounded-2xl p-3.5 bg-soft/60 border border-line">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                Lettres de la règle ({node.letters!.length})
              </span>
              {node.visualKeyAr && !node.visualKeyAr.includes('≠') && !node.visualKeyAr.includes('➔') && (
                <span className="text-xs text-muted">
                  Formule : <span className="font-ar font-bold text-ink" dir="rtl">{node.visualKeyAr}</span>
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2" dir="rtl">
              {node.letters!.map((l, idx) => (
                <span
                  key={idx}
                  className="min-w-10 h-10 px-2.5 rounded-xl border font-ar text-xl font-bold flex items-center justify-center shadow-2xs"
                  style={{
                    color: node.tagColor,
                    background: tint(node.tagColor, 12),
                    borderColor: tint(node.tagColor, 35),
                  }}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 3. Exemples concrets dans le Coran */}
        {node.examples && node.examples.length > 0 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
              {node.examples.length > 1 ? 'Exemples dans le Coran' : 'Exemple dans le Coran'}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {node.examples.map((ex, idx) => {
                const parsed = parseExample(ex);
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border flex items-center justify-between gap-3 ${
                      parsed.isError
                        ? 'bg-bad-bg/40 border-bad/30'
                        : parsed.isCorrect
                        ? 'bg-good-bg/40 border-good/30'
                        : 'bg-soft/70 border-line'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <TajweedText
                        text={parsed.arabic}
                        highlightLetters={node.letters}
                        rule={parsed.isError ? 'error' : mapTagColorToRule(node.tagColor)}
                        className="text-2xl sm:text-3xl leading-[1.7]"
                      />
                    </div>
                    {parsed.note && (
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                          parsed.isError
                            ? 'bg-bad-bg text-bad border border-bad/30 font-bold'
                            : parsed.isCorrect
                            ? 'bg-good-bg text-good border border-good/30 font-bold'
                            : 'bg-card text-muted border border-line'
                        }`}
                      >
                        {parsed.note}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Sous-cas à distinguer (ex. Idghām du chapitre 8) */}
        {node.children && node.children.length > 0 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
              Les {node.children.length} cas à distinguer
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {node.children.map((sub) => {
                const sv = visualOf(sub);
                return (
                  <div
                    key={sub.id}
                    className="rounded-2xl p-3.5 border flex flex-col justify-between gap-2.5"
                    style={{
                      background: tint(sub.tagColor, 7),
                      borderColor: tint(sub.tagColor, 35),
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{sv.icon}</span>
                        <span className="font-semibold text-sm text-ink leading-tight">
                          {cleanTitle(sub.shortTitleFr)}
                        </span>
                      </div>
                      <p className="text-xs font-semibold mb-1" style={{ color: sub.tagColor }}>
                        {sub.summaryTag}
                      </p>
                      <p className="text-xs text-muted leading-relaxed">
                        {sub.descriptionFr}
                      </p>
                    </div>
                    {sub.examples && sub.examples.length > 0 && (
                      <div className="pt-2 border-t border-line/50 flex flex-wrap gap-1.5" dir="rtl">
                        {sub.examples.map((ex, exIdx) => {
                          const p = parseExample(ex);
                          return (
                            <span
                              key={exIdx}
                              className="px-2 py-0.5 rounded-lg bg-card border border-line font-ar text-base text-ink"
                            >
                              {p.arabic}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  const revealedCount = branches.filter((b) => revealed.has(b.id)).length;

  return (
    <div className="space-y-5">
      <StepHeader
        step={1}
        title="La carte des règles"
        description="Une image = une règle. Retenez le pictogramme et sa phrase-réflexe, puis testez-vous en mode mémo."
      />

      {/* En-tête du chapitre */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="min-w-0">
          <p className="font-ui-ar text-xl sm:text-2xl text-lapis leading-[1.5]" dir="rtl">
            {rootTitleAr}
          </p>
          <p className="font-display text-base sm:text-lg font-semibold text-ink leading-tight">{rootTitleFr}</p>
          <p className="text-xs text-muted mt-0.5">{rootSubtitleFr}</p>
        </div>

        <div className="segmented" role="group" aria-label="Mode d'affichage">
          <button aria-pressed={!memoMode} onClick={() => toggleMemo(false)}>
            👁️ Voir
          </button>
          <button aria-pressed={memoMode} onClick={() => toggleMemo(true)}>
            🧠 Mode mémo
          </button>
        </div>
      </div>

      {memoMode && (
        <div className="flex items-center justify-between gap-3 rounded-2xl bg-gilt-soft px-4 py-2.5 text-sm animate-fade">
          <span className="text-ink">
            Retrouvez chaque réflexe de tête, puis touchez la carte pour vérifier.
            <span className="ml-1 font-bold text-gilt tabular-nums">
              {revealedCount}/{branches.length}
            </span>
          </span>
          <button onClick={() => setRevealed(new Set())} className="text-xs font-semibold text-gilt shrink-0 underline">
            Recommencer
          </button>
        </div>
      )}

      {/* Grille de cartes-réflexes */}
      <div className={`grid grid-cols-2 ${desktopCols} gap-2.5 sm:gap-3`}>
        {branches.map((node, idx) => {
          const v = visualOf(node);
          const hidden = memoMode && !revealed.has(node.id);
          const isSelected = isDesktop && selectedNode?.id === node.id;
          const isLastOdd = branches.length % 2 === 1 && idx === branches.length - 1;

          return (
            <button
              key={node.id}
              onClick={() => openNode(node)}
              className={`relative text-left rounded-[20px] border p-3.5 sm:p-4 flex flex-col gap-1.5 transition-all active:scale-[0.98] animate-enter ${
                isLastOdd ? 'col-span-2 md:col-span-1' : ''
              } ${isSelected ? 'ring-2 shadow-sm' : 'hover:shadow-sm'}`}
              style={{
                animationDelay: `${idx * 50}ms`,
                background: tint(node.tagColor, hidden ? 4 : 9),
                borderColor: tint(node.tagColor, isSelected ? 70 : 28),
                ['--tw-ring-color' as string]: node.tagColor,
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-[34px] sm:text-[40px] leading-none" aria-hidden="true">
                  {v.icon}
                </span>
                <span
                  className="w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center text-white shrink-0"
                  style={{ background: node.tagColor }}
                >
                  {idx + 1}
                </span>
              </div>

              <p className="font-display text-[15px] sm:text-base font-semibold text-ink leading-tight mt-1">
                {cleanTitle(node.shortTitleFr)}
              </p>

              {hidden ? (
                <p className="mt-auto rounded-xl border border-dashed border-line px-2 py-2 text-center text-xs font-semibold text-muted">
                  ? Touchez pour révéler
                </p>
              ) : (
                <>
                  <p className="text-[13px] font-bold leading-snug" style={{ color: node.tagColor }}>
                    {v.hook}
                  </p>
                  <p
                    className="mt-auto pt-1 font-ar text-lg sm:text-xl leading-[1.7] text-ink truncate"
                    dir="rtl"
                  >
                    {node.visualKeyAr}
                  </p>
                </>
              )}

              {node.children && node.children.length > 0 && !hidden && (
                <div className="flex flex-wrap gap-1">
                  {node.children.map((c) => (
                    <span
                      key={c.id}
                      className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-card border border-line text-ink"
                    >
                      {visualOf(c).icon} {c.shortTitleFr}
                    </span>
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>

      <p className="text-xs text-muted text-center md:hidden">Touchez une carte pour voir l'explication et les exemples.</p>

      {/* Détail : panneau sous la grille (desktop) */}
      {isDesktop && (
        selectedNode ? (
          <div
            key={selectedNode.id}
            className="surface p-6 sm:p-7 animate-fade border-t-4"
            style={{ borderTopColor: selectedNode.tagColor }}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-line">
              <div className="flex items-center gap-3">
                <span className="text-3xl leading-none" aria-hidden="true">
                  {visualOf(selectedNode).icon}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-tight text-ink">
                    {cleanTitle(selectedNode.shortTitleFr)}
                  </h3>
                  <p className="text-xs text-muted mt-0.5">{selectedNode.summaryTag}</p>
                </div>
              </div>
              <p
                className="font-ui-ar text-2xl leading-normal font-bold"
                dir="rtl"
                style={{ color: selectedNode.tagColor }}
              >
                {selectedNode.labelAr}
              </p>
            </div>
            {renderDetail(selectedNode)}
          </div>
        ) : (
          <p className="text-sm text-muted text-center py-4">
            Touchez ou cliquez sur une carte pour afficher son explication détaillée.
          </p>
        )
      )}

      {/* Détail : feuille du bas (mobile) */}
      {!isDesktop && selectedNode && (
        <Modal
          isOpen={sheetOpen}
          onClose={() => setSheetOpen(false)}
          title={
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-2xl shrink-0" aria-hidden="true">
                {visualOf(selectedNode).icon}
              </span>
              <span className="font-display text-lg sm:text-xl font-semibold leading-tight text-ink truncate">
                {cleanTitle(selectedNode.shortTitleFr)}
              </span>
            </div>
          }
          subtitle={
            <div className="flex items-center gap-2 mt-1">
              <span
                className="font-ui-ar text-base leading-none font-bold"
                dir="rtl"
                style={{ color: selectedNode.tagColor }}
              >
                {selectedNode.labelAr}
              </span>
              <span className="text-muted text-xs">•</span>
              <span className="text-xs text-muted truncate">
                {selectedNode.summaryTag}
              </span>
            </div>
          }
        >
          {renderDetail(selectedNode)}
        </Modal>
      )}
    </div>
  );
};

/**
 * Pictogramme + phrase-réflexe de chaque case de la carte.
 * Principe mnémotechnique : une image concrète associée à une formule de 2 à 5 mots.
 */
const NODE_VISUALS: Record<string, { icon: string; hook: string }> = {
  // Ch. 1 — Fondements
  'c1-1': { icon: '📜', hook: 'Bien réciter = obligatoire pour tous' },
  'c1-2': { icon: '❌', hook: 'Change le sens → interdit' },
  'c1-3': { icon: '⚠️', hook: 'Défaut de beauté, sens intact' },
  'c1-4': { icon: '✍️', hook: 'La graphie fixée sous ʿUthmān' },
  'c1-5': { icon: '🤲', hook: 'Sincérité + Sunnah' },
  // Ch. 2 — Symboles
  'c2-1': { icon: '🛑', hook: 'مـ = stop obligatoire · لا = ne coupe pas' },
  'c2-2': { icon: '🚦', hook: 'قلى stop · ج au choix · صلى continue' },
  'c2-3': { icon: '☝️', hook: 'Un seul arrêt sur les deux ۛ' },
  'c2-4': { icon: '🤐', hook: 'Silence 2 temps, sans respirer' },
  'c2-5': { icon: '0️⃣', hook: 'Zéro rond muet · zéro ovale lu à l\'arrêt' },
  // Ch. 3 — Arrêt & reprise
  'c3-1': { icon: '🎬', hook: 'Démarrer · pause · reprendre · finir' },
  'c3-2': { icon: '⏹️', hook: 'On s\'arrête toujours sur un soukoûn' },
  'c3-3': { icon: '🔤', hook: '« -an » devient « -ā » (2t)' },
  'c3-4': { icon: '💨', hook: 'ة devient un souffle هْ' },
  'c3-5': { icon: '⏪', hook: 'Reculer de 2–3 mots' },
  // Ch. 4 — Madd naturel
  'c4-1': { icon: '🔑', hook: 'ا و ي → la clé نُوحِيهَا' },
  'c4-2': { icon: '✌️', hook: '2 temps, ni plus ni moins' },
  'c4-3': { icon: '✂️', hook: 'Couper le Madd = changer le sens' },
  'c4-4': { icon: '🍃', hook: 'ـَوْ ـَيْ : pas de Madd en liaison' },
  'c4-5': { icon: '🦎', hook: 'À l\'arrêt, هُوَ devient هُو' },
  // Ch. 5 — Madd secondaire
  'c5-1': { icon: '🧲', hook: 'Madd + ء collés → 4–5t' },
  'c5-2': { icon: '🌉', hook: 'Madd | ء sur 2 mots → 4–5t' },
  'c5-3': { icon: '🔄', hook: 'ء avant le Madd → 2t' },
  'c5-4': { icon: '🔒', hook: 'Shaddah après → 6t verrouillés' },
  'c5-5': { icon: '🎚️', hook: 'Arrêt → 2, 4 ou 6t au choix' },
  // Ch. 6 — Hamzahs
  'c6-1': { icon: '🧱', hook: 'ء solide : toujours prononcée' },
  'c6-2': { icon: '👻', hook: 'ٱ fantôme : muette en liaison' },
  'c6-3': { icon: '3️⃣', hook: '3e lettre ـُ → « Ou », sinon « I »' },
  'c6-4': { icon: '🏷️', hook: 'ٱلـ → « A » · autres noms → « I »' },
  'c6-5': { icon: '🧨', hook: '5 verbes pièges → toujours « I »' },
  // Ch. 7 — Lām sākinah
  'c7-1': { icon: '🌙', hook: 'Lune : on entend la Lām' },
  'c7-2': { icon: '☀️', hook: 'Soleil : la Lām disparaît' },
  'c7-3': { icon: '⚖️', hook: 'Après ـَ ـُ lourd · après ـِ fin' },
  'c7-4': { icon: '🎯', hook: 'Fusion seulement devant ل et ر' },
  'c7-5': { icon: '💡', hook: 'Toujours claire' },
  // Ch. 8 — Nūn sākinah & Tanwīn
  'c8-1': { icon: '🗣️', hook: 'Lettres de gorge → Nūn clair' },
  'c8-2': { icon: '🔗', hook: 'يَرْمَلُونَ → le Nūn fusionne' },
  'c8-2a': { icon: '🔔', hook: 'ي ن م و → fusion + nasale 2t' },
  'c8-2b': { icon: '🔇', hook: 'ل ر → fusion sans nasale' },
  'c8-2c': { icon: '🚫', hook: 'Dans 1 seul mot → pas de fusion' },
  'c8-3': { icon: '🔄', hook: 'ب → le Nūn devient م' },
  'c8-4': { icon: '🌫️', hook: '15 lettres → Nūn caché, nasale 2t' },
  // Ch. 9 — Mīm sākinah
  'c9-1': { icon: '🌫️', hook: 'مْ + ب → caché sur les lèvres' },
  'c9-2': { icon: '🔗', hook: 'مْ + م → un seul مّ nasal' },
  'c9-3': { icon: '💡', hook: 'Tout le reste → Mīm clair' },
  // Ch. 10 — Qalqalah
  'c10-1': { icon: '🏀', hook: 'قطب جد + soukoûn → rebond' },
  'c10-2': { icon: '💥', hook: 'Arrêt + Shaddah → rebond fort' },
  'c10-3': { icon: '🔊', hook: 'Arrêt simple → rebond moyen' },
  'c10-4': { icon: '🔈', hook: 'Milieu du mot → rebond léger' },
  // Ch. 11 — Assimilation
  'c11-1': { icon: '👯', hook: 'Deux lettres jumelles → une seule' },
  'c11-2': { icon: '🛡️', hook: 'Une lettre de Madd ne fusionne jamais' },
  'c11-3': { icon: '🧩', hook: 'Lettres voisines → fusion totale' },
  'c11-4': { icon: '🌓', hook: 'ط garde sa lourdeur devant ت' },
  // Ch. 12 — Tafkhīm & Tarqīq
  'c12-1': { icon: '🏋️', hook: 'خُصَّ ضَغْطٍ قِظْ = toujours lourdes' },
  'c12-2': { icon: '🦜', hook: 'L\'Alif imite la lettre d\'avant' },
  'c12-3': { icon: '🎭', hook: 'ر : ـَ ـُ lourde · ـِ fine' },
  'c12-4': { icon: '🧼', hook: 'Ne pas salir une lettre fine' },
};
