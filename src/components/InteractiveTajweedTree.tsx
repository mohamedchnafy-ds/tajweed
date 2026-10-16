import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { ChevronDown, ChevronRight, Eye, Layers } from 'lucide-react';
import { StepHeader, Modal } from './ui';
import { TajweedText, TajweedRuleType } from './TajweedHighlighter';

interface InteractiveTajweedTreeProps {
  chapter: Chapter;
}

interface TreeNode {
  id: string;
  labelFr: string;
  labelAr: string;
  tagColor?: string;
  descriptionFr?: string;
  letters?: string[];
  examples?: string[];
  children?: TreeNode[];
}

export const InteractiveTajweedTree: React.FC<InteractiveTajweedTreeProps> = ({ chapter }) => {
  // Build tree based on chapter
  const getTreeData = (): TreeNode => {
    if (chapter.number === 1) {
      return {
        id: 'root-c1',
        labelFr: 'Fondements du Tajwīd & Éradication du Lahn',
        labelAr: 'المَفَاهِيمُ الأَسَاسِيَّةُ وَأَنْوَاعُ اللَّحْنِ',
        descriptionFr: 'Les bases indispensables pour réciter avec clarté, piété et conformité à la Sunnah.',
        children: [
          {
            id: 'node-statut',
            labelFr: '1. Qu\'est-ce que le Tajwīd & Statut Juridique',
            labelAr: 'حُكْمُ التَّجْوِيدِ الشَّرْعِيُّ',
            tagColor: 'var(--idgham)',
            descriptionFr: 'Pratique = Farḍ \'Ayn (obligation individuelle pour chaque croyant afin de ne pas altérer la parole divine). Théorie = Farḍ Kifāyah (spécialistes).',
            examples: ['وَرَتِّلِ ٱلۡقُرۡءَانَ تَرۡتِيلًا', 'يَتۡلُونَهُۥ حَقَّ تِلَاوَتِهِۦٓ'],
          },
          {
            id: 'node-lahn-jali',
            labelFr: '2. Al-Lahn Al-Jalī (Erreur Majeure)',
            labelAr: 'اللَّحْنُ الجَلِيُّ (حَرَامٌ)',
            tagColor: 'var(--bad)',
            letters: ['تَ', 'تُ'],
            descriptionFr: 'Toute erreur qui change le sens ou la grammaire (ex: changer une voyelle). C\'est un péché (Harām) si commis par négligence !',
            examples: ['أَنۡعَمۡتَ (Tu as comblé)', 'أَنۡعَمۡتُ (J\'ai comblé ❌)'],
          },
          {
            id: 'node-lahn-khafi',
            labelFr: '3. Al-Lahn Al-Khafī (Erreur Subtile)',
            labelAr: 'اللَّحْنُ الخَفِيُّ (مَكْرُوهٌ)',
            tagColor: 'var(--gold)',
            letters: ['مَآءَ', 'صَٰ'],
            descriptionFr: 'Défaut de finition ou d\'embellissement sans altérer le sens (ex: prolonger un Madd 2 temps au lieu de 4-5 temps). Déconseillé.',
            examples: ['ٱلسَّمَآءَ (Madd 4-5 temps)', 'بِمَصَٰبِيحَ'],
          },
          {
            id: 'node-rasm',
            labelFr: '4. Rasm \'Uthmānī & Muṣ-ḥaf',
            labelAr: 'الرَّسْمُ العُثْمَانِيُّ وَالمُصْحَفُ',
            tagColor: 'var(--izhar)',
            letters: ['وٰ'],
            descriptionFr: 'L\'orthographe sacrée fixée par les Compagnons (Sahābah). Qur\'ān = Parole révélée | Muṣ-ḥaf = Volume physique relié.',
            examples: ['ٱلصَّلَوٰةَ (écrit avec Wāw)', 'ٱلزَّكَوٰةَ'],
          },
          {
            id: 'node-conditions',
            labelFr: '5. Les 2 Conditions d\'Acceptation',
            labelAr: 'شَرْطَا قَبُولِ التِّلَاوَةِ',
            tagColor: 'var(--iqlab)',
            descriptionFr: '1. L\'Intention pure (Ikhlās) exclusivement pour Allah. 2. La conformité à la Sunnah (Tajwīd et Tartīl mesuré). Mnémo 6236 versets : 6 - 23 ans - 6 !',
            examples: ['قُلۡ إِنَّ صَلَاتِى... لِلَّهِ', '6236 versets (6-23-6)'],
          }
        ]
      };
    }
    if (chapter.number === 2) {
      return {
        id: 'root-c2',
        labelFr: 'Symboles du Mushaf & Rasm Uthmānī',
        labelAr: 'عَلَامَاتُ المُصْحَفِ وَضَبْطِهِ',
        descriptionFr: 'Le guide complet des symboles calligraphiques du Coran : où s\'arrêter sans altérer le sens et quelles lettres prononcer ou taire.',
        children: [
          {
            id: 'node-waqf-lazim',
            labelFr: '1. Waqf Lāzim (مـ) vs Interdiction (لا)',
            labelAr: 'الوَقْفُ اللَّازِمُ (مـ) وَالمَمْنُوعُ (لا)',
            tagColor: 'var(--bad)',
            letters: ['ۘ', 'لا'],
            descriptionFr: 'مـ = Arrêt obligatoire sous peine de grave contresens théologique. لا = Interdiction de couper la lecture car le sens est incomplet.',
            examples: ['فَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ (مـ)', 'فَوَيۡلٞ لِّلۡمُصَلِّينَ (لا)'],
          },
          {
            id: 'node-waqf-other',
            labelFr: '2. Arrêts Optionnels (ج · قلى · صلى)',
            labelAr: 'الوَقْفُ الجَائِزُ وَأَوْلَوِيَّاتُهُ',
            tagColor: 'var(--gold)',
            letters: ['ج', 'قلى', 'صلى'],
            descriptionFr: 'ج = Choix égal. قلى = Arrêt préférable (Al-Waqfu awlā). صلى = Liaison préférable (Al-Waslu awlā).',
            examples: ['ج (تخيير متساوٍ)', 'قلى (الوقف أولى)', 'صلى (الوصل أولى)'],
          },
          {
            id: 'node-mutaaniq',
            labelFr: '3. Arrêt d\'Étreinte (ۛ ... ۛ)',
            labelAr: 'الوَقْفُ المُتَعَانِقُ (المُعَانَقَةُ)',
            tagColor: 'var(--iqlab)',
            letters: ['ۛ'],
            descriptionFr: 'Double triade de points : arrêtez-vous à l\'un OU à l\'autre, mais JAMAIS aux deux à la fois !',
            examples: ['لَا رَيۡبَۛ فِيهِۛ هُدٗى (البقرة 2)'],
          },
          {
            id: 'node-saktah',
            labelFr: '4. La Pause sans Souffle (س)',
            labelAr: 'السَّكْتَةُ اللَّطِيفَةُ (س)',
            tagColor: 'var(--izhar)',
            letters: ['ۜ', 'س'],
            descriptionFr: 'Arrêt bref de 2 temps sans reprendre sa respiration pour éviter une fausse liaison contradictoire.',
            examples: ['عِوَجَاۜ ١ قَيِّمٗا (الكهف 1)', 'مِن مَّرۡقَدِنَاۜۗ (يس 52)'],
          },
          {
            id: 'node-vowels-rasm',
            labelFr: '5. Lettres Vocales & Zéros (ٰ · ۥ · ۦ · ْ · ۠)',
            labelAr: 'ضَبْطُ الحُرُوفِ وَالصِّفْرَانِ',
            tagColor: 'var(--idgham)',
            letters: ['ۥ', '۠', 'ْ'],
            descriptionFr: 'Alif Khanjariyyah (ٰ), petit Wāw (ۥ), petit Yā\' (ۦ) = voyelles obligatoires. Cercle rond (ْ) = lettre muette. Ovale (۠) = les 7 Alifs.',
            examples: ['حَوۡلَهُۥ ذَهَبَ', 'أَنَا۠ خَيۡرٞ', 'يَفۡرَحُواْ'],
          }
        ]
      };
    }
    if (chapter.number === 3) {
      return {
        id: 'root-c3',
        labelFr: 'L\'Art du Waqf & Ibtidā\' (Arrêt, Reprise & Coupure)',
        labelAr: 'عِلْمُ الوَقْفِ وَالابْتِدَاءِ فِي التِّلَاوَةِ',
        descriptionFr: '« Le Tajwīd consiste à parfaire les lettres et à connaître les arrêts » — \'Alī ibn Abī Tālib (qu\'Allah l\'agrée).',
        children: [
          {
            id: 'node-4-actions',
            labelFr: '1. Les 4 Actions Fondamentales du Lecteur',
            labelAr: 'الأَفْعَالُ الأَرْبَعَةُ لِلْقَارِئِ',
            tagColor: 'var(--izhar)',
            descriptionFr: '1. Al-Ibtidā\' (commencer) 2. Al-Waqf (arrêt avec souffle pour continuer) 3. Al-Isti\'nāf (reprise après arrêt) 4. Al-Qat\' (coupure finale).',
            examples: ['الابْتِدَاءُ', 'الوَقْفُ', 'الاسْتِئْنَافُ', 'القَطْعُ'],
          },
          {
            id: 'node-stopping-vowel',
            labelFr: '2. Règle Universelle : Transformation en Soukoûn',
            labelAr: 'تَحْوِيلُ الحَرَكَاتِ إِلَى سُكُونٍ',
            tagColor: 'var(--idgham)',
            letters: ['ـِينْ', 'ـِينُ', 'ـِينِ', 'ـينْ', 'ـينَ', 'رْ', 'نْ', 'رٞ'],
            descriptionFr: 'En arabe, on ne s\'arrête JAMAIS sur une voyelle ! Fathah, Dammah, Kasrah, Tanwīn Damm et Tanwīn Kasr deviennent TOUS un Soukoûn pur.',
            examples: ['ٱلۡعَٰلَمِينَ ➔ ٱلۡعَٰلَمِينْ', 'نَسۡتَعِينُ ➔ نَسۡتَعِينْ', 'خَبِيرٞ ➔ خَبِيرْ'],
          },
          {
            id: 'node-madd-iwad',
            labelFr: '3. Exception 1 : Madd \'Iwad (Tanwīn Fath)',
            labelAr: 'مَدُّ العِوَضِ (التَّنْوِينُ المَفْتُوحُ)',
            tagColor: 'var(--gold)',
            letters: ['ٗا', 'ً', 'ءَا', 'رَا', 'ءٗ'],
            descriptionFr: 'Le Tanwīn Fath (ـً / ـٗا) se transmute TOUJOURS en un Alif de 2 temps à l\'arrêt, même s\'il n\'y a pas d\'Alif dessiné après la Hamzah.',
            examples: ['قَرَارٗا ➔ قَرَارَا (2 temps)', 'بِنَآءٗ ➔ بِنَآءَا (2 temps)', 'مَآءً ➔ مَآءَا'],
          },
          {
            id: 'node-ta-marbutah',
            labelFr: '4. Exception 2 : Tā\' Marbūtah (ة ➔ هـ)',
            labelAr: 'التَّاءُ المَرْبُوطَةُ تَنْقَلِبُ هَاءً سَاكِنَةً',
            tagColor: 'var(--iqlab)',
            letters: ['ةٗ', 'هْ', 'ةَ', 'ةٍ', 'ة'],
            descriptionFr: 'Toute Tā\' Marbūtah (ة / ـة) devient impérativement un Hā\' avec Soukoûn (هْ) à l\'arrêt, MÊME avec un Tanwīn Fath (pas de Madd \'Iwad !).',
            examples: ['وَرَحۡمَةٗ ➔ وَرَحۡمَهْ', 'ٱلصَّلَوٰةَ ➔ ٱلصَّلَاهْ', 'جَنَّةٍ ➔ جَنَّهْ'],
          },
          {
            id: 'node-resuming-safety',
            labelFr: '5. Reprise Sécurisée (Stop & Repeat) & Piège des Citations',
            labelAr: 'الاسْتِئْنَافُ السَّلِيمُ وَحِكَايَةُ أَقْوَالِ الكُفْرِ',
            tagColor: 'var(--bad)',
            letters: ['إِنَّ'],
            descriptionFr: 'Règle « Stop & Repeat » : reculer de 2-3 mots si le souffle a manqué. Piège fatal : Ne jamais reprendre sur une citation blasphématoire isolée !',
            examples: ['قَالُوٓاْ إِنَّ ٱللَّهَ فَقِيرٞ (آل عمران 181)', 'Reculer sur : قَوۡلَ ٱلَّذِينَ قَالُوٓاْ...'],
          }
        ]
      };
    }
    if (chapter.number === 4) {
      return {
        id: 'root-c4',
        labelFr: 'Les Prolongations I (Madd Naturel & Lettres de Līn)',
        labelAr: 'المَدُّ الأَصْلِيُّ (الطَّبِيعِيُّ) وَحُرُوفُ اللِّينِ',
        descriptionFr: '« Le Prophète ﷺ étirait nettement les mots lors de sa récitation » — Hadīth d\'Anas ibn Mālik (Sahīh Al-Bukhārī).',
        children: [
          {
            id: 'node-3-letters',
            labelFr: '1. Les 3 Lettres de Madd & La Clé « Nūhīhā »',
            labelAr: 'حُرُوفُ المَدِّ الثَّلَاثَةُ (نُوحِيهَا)',
            tagColor: 'var(--izhar)',
            letters: ['نُو', 'حِي', 'هَآ', 'ٰ', 'ۥ'],
            descriptionFr: 'Wāw précédé de Dammah (نُو), Yā\' précédé de Kasrah (حِي), Alif précédé de Fathah (هَا). Sans voyelle sur la lettre elle-même !',
            examples: ['نُوحِيهَآ (هود 49)', 'مَٰلِكِ (Alif ٰ)', 'يَلۡوُۥنَ (Wāw ۥ)'],
          },
          {
            id: 'node-madd-tabii',
            labelFr: '2. Le Madd Naturel (2 Temps / Harakāt)',
            labelAr: 'المَدُّ الطَّبِيعِيُّ (حَرَكَتَانِ)',
            tagColor: 'var(--gold)',
            letters: ['قَا', 'قُو', 'قِي', 'ا', 'و', 'ي'],
            descriptionFr: 'La mesure standard : 1 Harakah = durée de « Ba » | 2 Harakāt = durée de « Bā » (Ba + Ba, env. 1 sec). Ni plus, ni moins !',
            examples: ['قَالَ', 'يَقُولُ', 'قِيلَ'],
          },
          {
            id: 'node-lahn-jali-madd',
            labelFr: '3. Le Péril du Lahn Jalī (Raccourcissement)',
            labelAr: 'اللَّحْنُ الجَلِيُّ بِحَذْفِ المَدِّ (حَرَامٌ)',
            tagColor: 'var(--bad)',
            letters: ['نَآ', 'نَ'],
            descriptionFr: 'Tronquer le Madd en voyelle courte altère le sens du Coran ! Ex: « Akhadhnā » (Nous avons pris) ➔ « Akhadhna » (Les femmes ont pris ❌).',
            examples: ['أَخَذۡنَآ (Nous)', 'أَخَذۡنَ (Elles ❌)'],
          },
          {
            id: 'node-leen-letters',
            labelFr: '4. Lettres de Madd vs Lettres de Līn',
            labelAr: 'حَرْفَا اللِّينِ (الوَاوُ وَاليَاءُ المَفْتُوحُ مَا قَبْلَهُمَا)',
            tagColor: 'var(--iqlab)',
            letters: ['يۡ', 'وۡ'],
            descriptionFr: 'Wāw et Yā\' portant un Soukoûn et précédés d\'une FATHAH (ـَ + وْ / يْ). Aucun Madd en lecture continue (Wasl) ! L\'Alif n\'est jamais de Līn.',
            examples: ['قُرَيۡشٍ', 'خَوۡفٖ', 'ٱلۡبَيۡتِ'],
          },
          {
            id: 'node-huwa-hiya',
            labelFr: '5. Les Mots Caméléons : هُوَ, هِيَ, مَعِيَ',
            labelAr: 'الوَقْفُ عَلَى (هُوَ - هِيَ - مَعِيَ)',
            tagColor: 'var(--idgham)',
            letters: ['هُوَ', 'هُو', 'عِىَ', 'عِي'],
            descriptionFr: 'En continu = consonne avec Fathah (« Huwa »). À l\'arrêt d\'urgence = la Fathah devient Soukoûn et libère un Madd de 2 temps (« Hū ») !',
            examples: ['إِلَّا هُوَۚ ➔ إِلَّا هُو', 'مَعِىَ ➔ مَعِي'],
          }
        ]
      };
    }
    if (chapter.number === 5) {
      return {
        id: 'root-c5',
        labelFr: 'Les Prolongations II (Madd Secondaire / Far\'ī)',
        labelAr: 'المَدُّ الفَرْعِيُّ (بِسَبَبِ الهَمْزِ وَالسُّكُونِ)',
        descriptionFr: 'Prolongation au-delà des 2 temps du Madd naturel, causée par la rencontre avec une Hamzah (همزة) ou un Soukoûn (سكون).',
        children: [
          {
            id: 'node-muttasil',
            labelFr: '1. Madd Muttasil (Lié dans le même mot)',
            labelAr: 'المَدُّ الوَاجِبُ المُتَّصِلُ (٤-٥ حَرَكَاتٍ)',
            tagColor: 'var(--gold)',
            letters: ['مَآءَ', 'جَآءَ', 'سُوٓءَ', 'سِيٓئَتۡ', 'ٓ', 'ء'],
            descriptionFr: 'Lettre de Madd + Hamzah dans le MÊME mot. Obligatoire (Wājib) 4 ou 5 temps en Wasl et Waqf (jusqu\'à 6 temps si Hamzah finale à l\'arrêt).',
            examples: ['ٱلسَّمَآءَ', 'جَآءَ', 'سُوٓءَ', 'سِيٓئَتۡ'],
          },
          {
            id: 'node-munfasil-silah',
            labelFr: '2. Madd Munfasil & Silah Kubrā (Entre deux mots)',
            labelAr: 'المَدُّ المُنْفَصِلُ وَالصِّلَةُ الكُبْرَى (٤-٥ حَرَكَاتٍ)',
            tagColor: 'var(--idgham)',
            letters: ['ٰٓأَ', 'وٓاْ أَن', 'هُۥٓ أَ', 'ٓ'],
            descriptionFr: 'Madd en fin de mot + Hamzah au début du mot suivant. Permis (Jā\'iz) 4-5 temps en liaison (Wasl) ; redevient 2 temps si l\'on s\'arrête sur le premier mot !',
            examples: ['يَٰٓأَيُّهَا', 'قُوٓاْ أَنفُسَكُمۡ', 'مَالَهُۥٓ أَخۡلَدَهُۥ'],
          },
          {
            id: 'node-badal',
            labelFr: '3. Madd Badal (Hamzah avant la lettre de Madd)',
            labelAr: 'مَدُّ البَدَلِ (حَرَكَتَانِ فِي رِوَايَةِ حَفْصٍ)',
            tagColor: 'var(--izhar)',
            letters: ['ءَا', 'إِي', 'أُو'],
            descriptionFr: 'La Hamzah précède la lettre de Madd. Vaut 2 temps seulement dans la lecture de Hafs (identique au Madd Naturel). Origine : substitution de deux Hamzahs.',
            examples: ['ءَامَنُواْ (أَأْمَنُوا)', 'إِيمَٰنٗا (إِئْمَانًا)', 'أُوتُواْ (أُؤْتُوا)'],
          },
          {
            id: 'node-lazim',
            labelFr: '4. Madd Lāzim (6 Temps Stricts Incompressibles)',
            labelAr: 'المَدُّ اللَّازِمُ الكَلِمِيُّ وَالحَرْفِيُّ (٦ حَرَكَاتٍ لَازِمَةً)',
            tagColor: 'var(--bad)',
            letters: ['ضَّآلِّ', 'ءَآلۡ', 'الٓمٓ', 'ٓ'],
            descriptionFr: 'Suivi d\'un Soukoûn originel ou d\'une Shaddah. Obligatoire 6 temps stricts ! Muthaqqal (avec Shaddah) vs Mukhaffaf (sans Shaddah) dans les mots et les lettres isolées.',
            examples: ['ٱلضَّآلِّينَ (كَلِمِيٌّ مُثَقَّلٌ)', 'ءَآلۡـَٰٔنَ (كَلِمِيٌّ مُخَفَّفٌ)', 'الٓمٓ (حَرْفِيٌّ)'],
          },
          {
            id: 'node-arid-leen',
            labelFr: '5. Madd \'Ārid li-s-Sukūn & Madd Līn à l\'Arrêt',
            labelAr: 'المَدُّ العَارِضُ لِلسُّكُونِ وَمَدُّ اللِّينِ (٢ - ٤ - ٦ حَرَكَاتٍ)',
            tagColor: 'var(--iqlab)',
            letters: ['ـِينْ', 'يۡشْ', 'يۡتْ'],
            descriptionFr: 'Provoqué par le Soukoûn incident créé par l\'arrêt à la fin d\'un verset. Choix de 2, 4 ou 6 temps avec maintien strict de la cohérence (Mīzān) sur toute la récitation.',
            examples: ['ٱلۡعَٰلَمِينْ (عارض)', 'قُرَيۡشْ (لين)', 'ٱلۡبَيۡتْ (لين)'],
          }
        ]
      };
    }
    if (chapter.number === 6) {
      return {
        id: 'root-c6',
        labelFr: 'Les Hamzahs (Hamzat Al-Wasl & Al-Qat\')',
        labelAr: 'هَمْزَتَا الوَصْلِ وَالقَطْعِ',
        descriptionFr: 'Distinguer la Hamzah permanente (ء) de la Hamzah de liaison (ٱ) et déterminer sa voyelle d\'attaque exacte.',
        children: [
          {
            id: 'node-hamzat-qat',
            labelFr: '1. Hamzat Al-Qat\' (ء - Permanente & Fixe)',
            labelAr: 'هَمْزَةُ القَطْعِ (ثَابِتَةٌ فِي الوَصْلِ وَالوَقْفِ)',
            tagColor: 'var(--gold)',
            letters: ['أ', 'إ', 'ؤ', 'ئ', 'ء'],
            descriptionFr: 'Porte toujours sa propre voyelle (أَ, إِ, أُ, ء). Elle est prononcée obligatoirement en toutes circonstances, au début, milieu ou fin de mot.',
            examples: ['أَصَٰبَتۡهُم', 'إِنَّا', 'أُوْلَٰٓئِكَ', 'سُوٓءَ'],
          },
          {
            id: 'node-hamzat-wasl-drop',
            labelFr: '2. Hamzat Al-Wasl (ٱ - Chute en Liaison)',
            labelAr: 'هَمْزَةُ الوَصْلِ (تَسْقُطُ فِي دَرَجِ الكَلَامِ)',
            tagColor: 'var(--idgham)',
            letters: ['ٱ'],
            descriptionFr: 'Porte le petit Sād (صـ pour Silah). Située uniquement au début du mot. Elle s\'élide et disparaît totalement dès qu\'un mot la précède en lecture continue.',
            examples: ['حَجَّ ٱلۡبَيۡتَ ➔ Hajja-l-bayta', 'أَوِ ٱعۡتَمَرَ ➔ Awi-\'tamara'],
          },
          {
            id: 'node-verbs-rule',
            labelFr: '3. Verbes : Règle de la 3e Lettre',
            labelAr: 'حَرَكَةُ الهَمْزَةِ فِي الأَفْعَالِ (الحَرْفُ الثَّالِثُ)',
            tagColor: 'var(--izhar)',
            letters: ['ٱ', 'اُ', 'اِ'],
            descriptionFr: '3e lettre avec Dammah ➔ Attaque en Dammah (اُ). 3e lettre avec Fathah ou Kasrah ➔ Attaque en Kasrah (اِ). Jamais de Fathah sur un verbe !',
            examples: ['ٱدۡعُ ➔ اُدۡعُ (عُ)', 'ٱذۡهَبۡ ➔ اِذۡهَبۡ (هَ)', 'ٱهۡدِنَا ➔ اِهۡدِنَا (دِ)'],
          },
          {
            id: 'node-nouns-rule',
            labelFr: '4. Noms Définis (ٱلـ) & Indéfinis (ٱسۡم...)',
            labelAr: 'هَمْزَةُ الوَصْلِ فِي الأَسْمَاءِ',
            tagColor: 'var(--iqlab)',
            letters: ['ٱ', 'اَلـ', 'اِبۡ', 'اِسۡ'],
            descriptionFr: 'Article défini ٱلـ = TOUJOURS Fathah (اَلـ). Noms singuliers spécifiques (Ibn, Imra\'ah, Ism, Ithnān) = TOUJOURS Kasrah (اِ).',
            examples: ['ٱلۡحَمۡدُ ➔ اَلۡحَمۡدُ', 'ٱبۡنُ ➔ اِبۡنُ', 'ٱسۡمُ ➔ اِسۡمُ'],
          },
          {
            id: 'node-exceptions-two-hamzahs',
            labelFr: '5. Les 5 Verbes Pièges & Rencontre des 2 Hamzahs',
            labelAr: 'الأَفْعَالُ الخَمْسَةُ وَاجْتِمَاعُ الهَمْزَتَيْنِ',
            tagColor: 'var(--bad)',
            letters: ['ٱ', 'ئ', 'إِي'],
            descriptionFr: '« Ibnū », « Imshū », « Iqdū » s\'attaquent avec KASRAH (Dammah accidentelle) ! Et « ٱئۡتُونِي » devient « ĪTŪNĪ » (إِيتُونِي) à l\'attaque par substitution.',
            examples: ['ٱبۡنُواْ ➔ اِبۡنُواْ', 'ٱمۡشُواْ ➔ اِمۡشُواْ', 'ٱئۡتُونِى ➔ إِيتُونِي (Ītūnī)'],
          }
        ]
      };
    }
    if (chapter.number === 7) {
      return {
        id: 'root-lam',
        labelFr: 'Les Règles de la Lām Sākinah (لْ)',
        labelAr: 'أَحْكَامُ اللَّامِ السَّاكِنَةِ',
        descriptionFr: 'La lettre Lām sans voyelle se divise en 5 catégories coraniques : Lām At-Ta\'rīf (Qamariyyah & Shamsiyyah), Lafz Al-Jalālah, Lām Al-Fi\'l, Lām Al-Harf, et Lām Al-Ism/Al-Amr.',
        children: [
          {
            id: 'node-lam-qamariyyah',
            labelFr: '1. Lām Qamariyyah (Lune - Izhār)',
            labelAr: 'اللَّامُ القَمَرِيَّةُ (إِظْهَارٌ قَمَرِيٌّ)',
            tagColor: 'var(--izhar)',
            letters: ['ء', 'ب', 'غ', 'ح', 'ج', 'ك', 'و', 'خ', 'ف', 'ع', 'ق', 'ي', 'م', 'هـ'],
            descriptionFr: '14 lettres réunies dans « إِبۡغِ حَجَّكَ وَخَفۡ عَقِيمَهُ ». Prononciation claire et distincte de la Lām avec Soukoûn visible (لۡ).',
            examples: ['ٱلۡقَمَرِ (Al-Qamar)', 'ٱلۡبَيۡتِ (Al-Bayt)', 'ٱلۡحَمۡدُ (Al-Hamd)', 'ٱلۡعَٰلَمِينَ'],
          },
          {
            id: 'node-lam-shamsiyyah',
            labelFr: '2. Lām Shamsiyyah (Soleil - Idghām)',
            labelAr: 'اللَّامُ الشَّمْسِيَّةُ (إِدْغَامٌ شَمْسِيٌّ)',
            tagColor: 'var(--idgham)',
            letters: ['ط', 'ث', 'ص', 'ر', 'ت', 'ض', 'ذ', 'ن', 'د', 'س', 'ظ', 'ز', 'ش', 'ل'],
            descriptionFr: '14 lettres. La Lām est nue et fusionne totalement dans la lettre suivante qui porte une Shaddah (ّ). Double effacement en Wasl (وَٱلشَّمۡسِ ➔ Wash-shams) !',
            examples: ['ٱلشَّمۡسِ ➔ Ash-shams', 'ٱلدِّينِ ➔ Ad-dīn', 'ٱلنَّاسِ ➔ An-nās (Ghunnah 2t)', 'وَٱلشَّمۡسِ ➔ Wash-shams'],
          },
          {
            id: 'node-lam-jalalah',
            labelFr: '3. Lām de Lafz Al-Jalālah (ٱللَّه)',
            labelAr: 'لَامُ لَفْظِ الجَلَالَةِ (تَفْخِيمٌ وَتَرْقِيقٌ)',
            tagColor: 'var(--gold)',
            letters: ['للَّ', 'ٱللَّهُ', 'ٱللَّهِ'],
            descriptionFr: 'Emphase puissante (Tafkhīm) après Fathah, Dammah ou à l\'attaque. Finesse (Tarqīq) après Kasrah originale ou accidentelle (Tanwīn en Wasl).',
            examples: ['قَالَ ٱللَّهُ (Tafkhīm)', 'عَبۡدُ ٱللَّهِ (Tafkhīm)', 'بِسۡمِ ٱللَّهِ (Tarqīq)', 'أَحَدٌ ٱللَّهُ ➔ Ahaduni-llāh (Tarqīq)'],
          },
          {
            id: 'node-lam-fil',
            labelFr: '4. Lām du Verbe & de la Particule (Fi\'l & Harf)',
            labelAr: 'لَامُ الفِعْلِ وَالحَرْفِ (قُلۡ، أَنزَلۡنَا، بَلۡ، هَلۡ)',
            tagColor: 'var(--iqlab)',
            letters: ['لۡ', 'لَّ', 'رَّ'],
            descriptionFr: 'Toujours Izhār (clarté), SAUF si suivie d\'un Lām (fusion par similitude) ou d\'un Râ\' (fusion par proximité) où elle s\'assimile totalement.',
            examples: ['قُلۡ نَعَمۡ (Izhār)', 'أَنزَلۡنَٰهُ (Izhār)', 'قُل لَّكُمۡ (Idghām L-L)', 'قُل رَّبِّ (Idghām L-R)'],
          },
          {
            id: 'node-lam-ism-amr',
            labelFr: '5. Lām du Nom & de l\'Impératif (Ism & Amr)',
            labelAr: 'لَامُ الاسْمِ وَلَامُ الأَمْرِ (أَلْسِنَتِكُمْ، وَلْيَكْتُبْ)',
            tagColor: 'var(--teal)',
            letters: ['لۡ'],
            descriptionFr: 'Dans la racine d\'un nom (Alsinatikum) ou préfixée avec Wāw/Fā/Thumma pour l\'ordre (Wal-yaktub) : TOUJOURS Izhār sans aucune exception !',
            examples: ['أَلۡسِنَتِكُمۡ (Izhār)', 'أَلۡوَٰنِكُمۡ (Izhār)', 'وَلۡيُوفُواْ (Izhār)', 'فَلۡيَسۡتَجِيبُواْ (Izhār)'],
          }
        ]
      };
    }
    if (chapter.number === 8) {
      return {
        id: 'root-nun',
        labelFr: 'Nūn Sākinah & Tanwīn (نْ / ـً ـٍ ـٌ)',
        labelAr: 'أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ',
        descriptionFr: 'Le son "N" sans voyelle réagit différemment selon la lettre qui lui succède immédiatement.',
        children: [
          {
            id: 'node-izhar',
            labelFr: '1. Izhār Halqī (Clarté)',
            labelAr: 'إِظْهَارٌ حَلْقِيٌّ',
            tagColor: 'var(--izhar)',
            letters: ['ء', 'هـ', 'ع', 'ح', 'غ', 'خ'],
            descriptionFr: '6 lettres de gorge. Le Nūn est prononcé nettement sans bourdonnement nasal supplémentaire.',
            examples: ['مَنۡ ءَامَنَ', 'أَنۡعَمۡتَ', 'عَلِيمٌ حَكِيمٞ'],
          },
          {
            id: 'node-idgham',
            labelFr: '2. Idghām (Fusion)',
            labelAr: 'إِدْغَامٌ',
            tagColor: 'var(--idgham)',
            descriptionFr: '6 lettres réunies dans (يَرْمَلُونَ). Le Nūn s\'efface et fusionne dans la lettre suivante.',
            children: [
              {
                id: 'node-idg-ghunnah',
                labelFr: 'Avec Ghunnah (2 temps)',
                labelAr: 'بِغُنَّةٍ (يَنْمُو)',
                tagColor: 'var(--idgham)',
                letters: ['ي', 'ن', 'م', 'و'],
                descriptionFr: 'Fusion partielle avec résonance nasale de 2 temps.',
                examples: ['مَن يَقُولُ', 'مِن مَّالٍ'],
              },
              {
                id: 'node-idg-noghunnah',
                labelFr: 'Sans Ghunnah (Fusion pure)',
                labelAr: 'بِغَيْرِ غُنَّةٍ (ل - ر)',
                tagColor: 'var(--ink)',
                letters: ['ل', 'ر'],
                descriptionFr: 'Fusion totale et sèche sans aucune nasalité.',
                examples: ['مِن رَّبِّهِمۡ', 'هُدٗى لِّلۡمُتَّقِينَ'],
              },
              {
                id: 'node-idg-mutlaq',
                labelFr: 'Exception : Izhār Mutlaq',
                labelAr: 'إِظْهَارٌ مُطْلَقٌ',
                tagColor: 'var(--gold)',
                letters: ['نۡيَ', 'نۡوَ'],
                descriptionFr: 'Si Nūn et la lettre sont dans le MÊME mot, l\'Idghām est interdit (4 mots uniques dans le Coran).',
                examples: ['دُنۡيَا', 'بُنۡيَٰنٌ', 'قِنۡوَانٌ', 'صِنۡوَانٌ'],
              }
            ]
          },
          {
            id: 'node-iqlab',
            labelFr: '3. Iqlāb (Conversion)',
            labelAr: 'إِقْلَابٌ',
            tagColor: 'var(--iqlab)',
            letters: ['ب'],
            descriptionFr: 'Lettre unique : Bā\' (ب). Le Nūn devient un son Mīm doux avec 2 temps de Ghunnah.',
            examples: ['مِنۢ بَعۡدِ', 'سَمِيعُۢ بَصِيرٌ'],
          },
          {
            id: 'node-ikhfa',
            labelFr: '4. Ikhfā\' Haqīqī (Dissimulation)',
            labelAr: 'إِخْفَاءٌ حَقِيقِيٌّ',
            tagColor: 'var(--ikhfa)',
            letters: ['ص', 'ذ', 'ث', 'ك', 'ج', 'ش', 'ق', 'س', 'د', 'ط', 'ز', 'ف', 'ت', 'ض', 'ظ'],
            descriptionFr: '15 lettres. La langue ne touche pas le palais, la Ghunnah résonne 2 temps (emphatique devant les 5 lettres lourdes ص ض ط ظ ق).',
            examples: ['مِن تَحۡتِهَا', 'مِن قَبۡلِكَ'],
          }
        ]
      };
    }
    if (chapter.number === 9) {
      return {
        id: 'root-mim',
        labelFr: 'Les Règles de la Mīm Sākinah (مْ)',
        labelAr: 'أَحْكَامُ المِيمِ السَّاكِنَةِ',
        descriptionFr: 'Le Mīm sans voyelle obéit à 3 règles labiales selon la lettre qui lui succède immédiatement.',
        children: [
          {
            id: 'node-mim-ikhfa',
            labelFr: '1. Ikhfā\' Shafawī (Dissimulation)',
            labelAr: 'إِخْفَاءٌ شَفَوِيٌّ (ب)',
            tagColor: 'var(--iqlab)',
            letters: ['ب'],
            descriptionFr: 'Devant la lettre Bā\' (ب) entre 2 mots distincts. Les lèvres se touchent avec délicatesse sans forcer, avec une Ghunnah de 2 temps.',
            examples: ['تَرۡمِيهِم بِحِجَارَةٖ', 'إِنَّ رَبَّهُم بِهِم', 'ءَاتَيۡنَٰكُم بِقُوَّةٖ'],
          },
          {
            id: 'node-mim-idgham',
            labelFr: '2. Idghām Shafawī (Fusion)',
            labelAr: 'إِدْغَامٌ شَفَوِيٌّ (م)',
            tagColor: 'var(--idgham)',
            letters: ['م'],
            descriptionFr: 'Devant un autre Mīm. Fusion totale créant un Mīm Mushaddadah (مّ) avec Ghunnah obligatoire de 2 temps.',
            examples: ['فِى قُلُوبِهِم مَّرَضٞ', 'لَهُم مَّشَوۡاْ', 'كُم مِّنَ ٱلۡأَرۡضِ'],
          },
          {
            id: 'node-mim-izhar',
            labelFr: '3. Izhār Shafawī (Clarté)',
            labelAr: 'إِظْهَارٌ شَفَوِيٌّ (26 lettres)',
            tagColor: 'var(--izhar)',
            letters: ['مۡ'],
            descriptionFr: 'Devant les 26 autres lettres. Le Mīm est émis avec netteté (Soukoûn visible مۡ). Alerte maximale devant Wāw et Fā\' !',
            examples: ['ٱلۡحَمۡدُ لِلَّهِ', 'عَلَيۡهِمۡ غَيۡرِ', 'عَلَيۡهِمۡ وَلَا (Alerte Wāw)', 'هُمۡ فِيهَا (Alerte Fā\')'],
          }
        ]
      };
    } else if (chapter.number === 10) {
      // Qalqalah
      return {
        id: 'root-qalqalah',
        labelFr: 'La Qalqalah (Rebond Acoustique)',
        labelAr: 'أَحْكَامُ القَلْقَلَةِ وَمَرَاتِبُهَا',
        descriptionFr: 'Vibration ou rebond lors de l\'émission d\'une des 5 lettres de "Qutb Jadd" à l\'état de soukoûn.',
        children: [
          {
            id: 'node-qal-letters',
            labelFr: 'Les 5 Lettres (قُطْبُ جَدٍّ)',
            labelAr: 'حُرُوفُ القَلْقَلَةِ',
            tagColor: 'var(--qalqalah)',
            letters: ['ق', 'ط', 'ب', 'ج', 'د'],
            descriptionFr: 'Toutes ont la Shiddah (force) et le Jahr (sonorité). Nécessitent un rebond pour libérer le souffle bloqué.',
            examples: ['ٱلۡفَلَقِ', 'أَحَدٌ', 'يَقۡطَعُونَ'],
          },
          {
            id: 'node-deg-kubra',
            labelFr: 'Degré 1 : Kubrā (Majeure)',
            labelAr: 'مَرْتَبَةٌ كُبْرَى',
            tagColor: 'var(--qalqalah)',
            letters: ['بّ', 'قّ'],
            descriptionFr: 'À l\'arrêt sur une lettre avec Shaddah en fin de mot. Pression maintenue puis explosion vive.',
            examples: ['وَتَبَّ', 'بِٱلۡحَقِّ'],
          },
          {
            id: 'node-deg-wusta',
            labelFr: 'Degré 2 : Wustā (Moyenne)',
            labelAr: 'مَرْتَبَةٌ وُسْطَى',
            tagColor: 'var(--gold)',
            letters: ['د', 'ب'],
            descriptionFr: 'À l\'arrêt sur une lettre simple sans Shaddah en fin de mot.',
            examples: ['قُلۡ هُوَ ٱللَّهُ أَحَدٌ', 'مَا كَسَبَ'],
          },
          {
            id: 'node-deg-sughra',
            labelFr: 'Degré 3 : Sughrā (Mineure)',
            labelAr: 'مَرْتَبَةٌ صُغْرَى',
            tagColor: 'var(--izhar)',
            letters: ['ق'],
            descriptionFr: 'Au milieu d\'un mot ou d\'une phrase en cours de récitation continue.',
            examples: ['يَقۡطَعُونَ', 'خَلَقۡنَا'],
          }
        ]
      };
    } else if (chapter.number === 11) {
      // Chapitre 11 : L'Assimilation (Idghām)
      return {
        id: 'root-c11',
        labelFr: 'L\'Assimilation (Idghām Mutamāthilayn, etc.)',
        labelAr: 'إِدْغَامُ المُتَمَاثِلَيْنِ وَالمُتَقَارِبَيْنِ وَالمُتَجَانِسَيْنِ',
        descriptionFr: 'Règles de fusion entre consonnes identiques, proches ou de même point d\'articulation.',
        children: [
          {
            id: 'node-c11-mutamathilayn',
            labelFr: '1. Mutamāthilayn (Lettres 100% Identiques)',
            labelAr: 'إِدْغَامُ المُتَمَاثِلَيْنِ الصَّغِيرُ',
            tagColor: 'var(--idgham)',
            letters: ['ف', 'د', 'ب', 'ك', 'هـ'],
            descriptionFr: 'La 1ère lettre sans voyelle fond entièrement dans la seconde qui prend une Shaddah.',
            examples: ['فَلَا يُسۡرِف فِّى ٱلۡقَتۡلِ', 'وَقَد دَّخَلُواْ', 'يُدۡرِككُّمُ ٱلۡمَوۡتُ', 'يُكۡرِههُّنَّ'],
          },
          {
            id: 'node-c11-madd-exceptions',
            labelFr: '2. Exception Sacrée : Lettres de Madd (JAMAIS d\'Idghām)',
            labelAr: 'اسْتِثْنَاءُ حُرُوفِ المَدِّ (إِظْهَارٌ وَاجِبٌ)',
            tagColor: 'var(--gold)',
            letters: ['و', 'ي'],
            descriptionFr: 'Le Wāw et le Yā\' de prolongation (Al-Jawf) NE FUSIONNENT JAMAIS avec une consonne de même graphie. Izhār obligatoire avec 2 temps de Madd !',
            examples: ['فِى يُوسُفَ (Fī Yūsuf)', 'ءَامَنُواْ وَعَمِلُواْ (Āmanū wa-\'amilū)'],
          },
          {
            id: 'node-c11-kamil',
            labelFr: '3. Les 8 Cas d\'Assimilation Totale (Kāmil)',
            labelAr: 'الإِدْغَامُ الكَامِلُ لِلْمُتَقَارِبَيْنِ وَالمُتَجَانِسَيْنِ',
            tagColor: 'var(--idgham)',
            letters: ['ت', 'ط', 'ذ', 'ظ', 'ب', 'م', 'ق', 'ك', 'د', 'ل', 'ر', 'ث'],
            descriptionFr: 'Disparition complète de la 1ère lettre au profit de la 2nde avec Shaddah. Cas unique : Bā\' dans Mīm avec 2 temps de Ghunnah !',
            examples: ['ٱرۡكَب مَّعَنَا (Irkam-ma\'anā)', 'أَلَمۡ نَخۡلُقكُّم (Nakhlukkum)', 'قَد تَّبَيَّنَ (Qat-tabayyana)', 'بَل رَّفَعَهُ (Bar-rafa\'ahu)'],
          },
          {
            id: 'node-c11-naqis',
            labelFr: '4. Idghām Nāqis (Assimilation Partielle : ط dans ت)',
            labelAr: 'الإِدْغَامُ النَّاقِصُ (إِدْغَامُ الطَّاءِ فِي التَّاءِ)',
            tagColor: 'var(--qalqalah)',
            letters: ['ط', 'ت'],
            descriptionFr: 'Le Tā\' conserve sa lourdeur (Tafkhīm/Itbāq) SANS Qalqalah avant que la langue ne relâche le son fin du Tā\'.',
            examples: ['بَسَطتَ (Basatta)', 'أَحَطتُ (Ahattu)', 'فَرَّطتُمۡ (Farrattum)'],
          }
        ]
      };
    }

    if (chapter.number === 12) {
      return {
        id: 'root-c12',
        labelFr: 'Emphase & Amincissement (Tafkhīm & Tarqīq)',
        labelAr: 'التَّفْخِيمُ وَالتَّرْقِيقُ',
        descriptionFr: 'La science du calibre des lettres : résonance caverneuse des lourdes, clarté cristalline des légères, et les subtilités des 3 lettres hybrides.',
        children: [
          {
            id: 'node-c12-heavy-letters',
            labelFr: '1. Les 7 Lettres d\'Emphase Permanente (خُصَّ ضَغۡطٍ قِظۡ)',
            labelAr: 'حُرُوفُ الِاسْتِعْلَاءِ السَّبْعَةُ (دَائِمًا مُفَخَّمَة)',
            tagColor: 'var(--bad)',
            letters: ['خ', 'ص', 'ض', 'غ', 'ط', 'ق', 'ظ'],
            descriptionFr: 'Toujours emphatiques en toute circonstance. 5 degrés selon la voyelle : 1. Fathah + Alif > 2. Fathah > 3. Dammah > 4. Soukoûn > 5. Kasrah. Les 4 lettres d\'Itbāq (ص, ض, ط, ظ) sont les plus puissantes.',
            examples: ['ٱلصَّٰبِرِينَ (Degré 1)', 'خَلَقَ (Degré 2)', 'يَقُولُ (Degré 3)', 'يَخۡشَىٰ (Degré 4)', 'صِرَٰطَ (Degré 5)', 'طِينٖ (Itbāq)'],
          },
          {
            id: 'node-c12-hybrid-alif-lam',
            labelFr: '2. Les Lettres Hybrides I : L\'Alif Caméléon & Le Nom d\'Allah',
            labelAr: 'الأَلِفُ التَّابِعَةُ وَلَامُ لَفْظِ الجَلَالَةِ',
            tagColor: 'var(--gold)',
            letters: ['ا', 'ل'],
            descriptionFr: 'L\'Alif est le miroir de son prédécesseur (lourd après خُصَّ ضَغۡطٍ قِظۡ, mince après les autres). La Lām est toujours mince sauf dans « Allāh / Allāhumma » précédé d\'une Fathah ou d\'une Dammah.',
            examples: ['خَالِدِينَ (Alif lourd)', 'إِيَّاكَ (Alif léger)', 'شَهِدَ ٱللَّهُ (Lām lourd)', 'بِسۡمِ ٱللَّهِ (Lām léger)'],
          },
          {
            id: 'node-c12-hybrid-raa',
            labelFr: '3. Les Lettres Hybrides II : La Râ\' (ر) & Ses 4 Cas de Tarqīq',
            labelAr: 'أَحْكَامُ الرَّاءِ (4 حَالَاتٍ لِلتَّرْقِيقِ)',
            tagColor: 'var(--izhar)',
            letters: ['ر'],
            descriptionFr: 'Lourde par défaut ! Amincie (Tarqīq) uniquement dans 4 cas : 1. Avec Kasrah (رِزۡقٗا). 2. Soukoûn après Kasrah originelle sans lettre lourde (فِرۡعَوۡنَ). 3. Waqf après Soukoûn précédé de Kasrah (حِجۡرٍ). 4. Waqf après Yā\' (خَبِيرٌ, خَيۡرٌ).',
            examples: ['فِرۡعَوۡنَ (Tarqīq)', 'خَبِيرٌ (Waqf Tarqīq)', 'قِرۡطَاسٖ (Exception Tafkhīm !)', 'رَبَّنَا (Tafkhīm standard)'],
          },
          {
            id: 'node-c12-takhlees',
            labelFr: '4. Takhlees Al-Hurūf (Décontamination des Lettres)',
            labelAr: 'تَخْلِيصُ الحُرُوفِ (عَدَمُ سِرَايَةِ التَّفْخِيمِ)',
            tagColor: 'var(--idgham)',
            letters: ['خ', 'ق', 'ط', 'ص'],
            descriptionFr: 'L\'art d\'articuler une lettre fine coincée à côté ou entre deux lettres lourdes sans la contaminer. Éviter d\'épaissir le Lām dans « Khalaqa » ou le Nūn dans « Nasīr ».',
            examples: ['خَلَقَ (Khā lourd -> Lām fin -> Qāf lourd)', 'وَٱلۡمُطَلَّقَٰتُ', 'نَصِيرٌ (Nūn fin pur)', 'يَهۡبِطُ'],
          }
        ]
      };
    }

    return {
      id: `root-fallback-${chapter.number}`,
      labelFr: chapter.titleFr,
      labelAr: chapter.titleAr,
      descriptionFr: chapter.summaryFr,
      children: [],
    };
  };

  const tree = getTreeData();
  const [openNodes, setOpenNodes] = useState<Record<string, boolean>>({
    [tree.id]: true,
    'node-izhar': true,
    'node-idgham': true,
    'node-iqlab': true,
    'node-ikhfa': true,
    'node-qal-letters': true,
    'node-deg-kubra': true,
    'node-c11-mutamathilayn': true,
    'node-c11-madd-exceptions': true,
    'node-c11-kamil': true,
    'node-c11-naqis': true,
    'node-c12-heavy-letters': true,
    'node-c12-hybrid-alif-lam': true,
    'node-c12-hybrid-raa': true,
    'node-c12-takhlees': true,
  });

  const [selectedNode, setSelectedNode] = useState<TreeNode>(tree);
  const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);

  const mapTagColorToRule = (tagColor?: string): TajweedRuleType => {
    if (!tagColor) return 'izhar';
    if (tagColor.includes('bad')) return 'error';
    if (tagColor.includes('good')) return 'correct';
    if (tagColor.includes('qalqalah')) return 'qalqalah';
    if (tagColor.includes('idgham')) return 'idgham';
    if (tagColor.includes('iqlab')) return 'iqlab';
    if (tagColor.includes('ikhfa')) return 'ikhfa';
    if (tagColor.includes('madd-6') || tagColor.includes('lazim')) return 'madd-6';
    if (tagColor.includes('madd') || tagColor.includes('gold')) return 'madd-4-5';
    if (tagColor.includes('tafkhim')) return 'tafkhim';
    if (tagColor.includes('silent')) return 'silent';
    return 'izhar';
  };

  const toggleNode = (id: string, node: TreeNode) => {
    setOpenNodes(prev => ({ ...prev, [id]: !prev[id] }));
    setSelectedNode(node);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsMobileDetailOpen(true);
    }
  };

  const expandAll = () => {
    const all: Record<string, boolean> = { [tree.id]: true };
    const traverse = (n: TreeNode) => {
      all[n.id] = true;
      if (n.children) n.children.forEach(traverse);
    };
    traverse(tree);
    setOpenNodes(all);
  };

  const collapseAll = () => {
    setOpenNodes({ [tree.id]: true });
    setSelectedNode(tree);
  };

  // Rendu du détail partagé entre desktop (aside) et mobile (Bottom Sheet modal)
  const renderDetailBody = (node: TreeNode) => {
    const ruleType = mapTagColorToRule(node.tagColor);

    return (
      <div className="space-y-6">
        <div>
          <p className="font-ui-ar text-[32px] leading-[1.6] text-ink" dir="rtl">
            {node.labelAr}
          </p>
          <h3 className="font-display text-xl leading-snug text-ink mt-2">{node.labelFr}</h3>

          {node.descriptionFr && (
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{node.descriptionFr}</p>
          )}
        </div>

        {node.letters && node.letters.length > 0 && (
          <div>
            <p className="label mb-2.5">Lettres concernées</p>
            <div className="flex flex-wrap gap-2" dir="rtl">
              {node.letters.map((lettre, idx) => (
                <span
                  key={idx}
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-ar text-2xl font-bold shadow-xs border transition-transform hover:scale-105"
                  style={{
                    color: node.tagColor || 'var(--ink)',
                    background: 'var(--soft)',
                    borderColor: 'var(--line)',
                  }}
                >
                  {lettre}
                </span>
              ))}
            </div>
          </div>
        )}

        {node.examples && node.examples.length > 0 && (
          <div>
            <p className="label mb-2.5">Exemples dans le Coran & Tajwīd</p>
            <ul className="divide-y divide-line border-y border-line">
              {node.examples.map((ex, idx) => {
                // Sépare le texte arabe et la note explicative entre parenthèses
                const match = ex.match(/^([^()]+)(?:\s*\(([^)]+)\))?$/);
                const mainText = (match ? match[1] : ex).trim();
                const noteFr = match && match[2] ? match[2].trim() : null;

                const isErrorExample = noteFr && (noteFr.includes('❌') || noteFr.toLowerCase().includes('erreur') || noteFr.toLowerCase().includes('harām'));
                const itemRuleType = isErrorExample ? 'error' : ruleType;

                const hasArrow = mainText.includes('➔');
                let leftPart = mainText;
                let rightPart: string | null = null;
                let rightIsArabic = false;

                if (hasArrow) {
                  const arrowSplit = mainText.split(/\s*➔\s*/);
                  leftPart = arrowSplit[0].trim();
                  rightPart = arrowSplit[1]?.trim() || null;
                  rightIsArabic = rightPart ? /[\u0600-\u06FF]/.test(rightPart) : false;
                }

                return (
                  <li key={idx} className="py-3.5 flex flex-col gap-1.5">
                    <div className="text-right">
                      {hasArrow && rightPart ? (
                        rightIsArabic ? (
                          <div className="flex items-center justify-end gap-2 flex-wrap" dir="rtl">
                            <TajweedText
                              text={leftPart}
                              highlightLetters={node.letters}
                              rule={itemRuleType}
                              className="text-2xl sm:text-3xl leading-[1.8]"
                            />
                            <span className="text-muted/60 text-lg select-none px-1">➔</span>
                            <TajweedText
                              text={rightPart}
                              highlightLetters={node.letters}
                              rule={itemRuleType}
                              className="text-2xl sm:text-3xl leading-[1.8]"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-end gap-3 flex-wrap">
                            <TajweedText
                              text={leftPart}
                              highlightLetters={node.letters}
                              rule={itemRuleType}
                              className="text-2xl sm:text-3xl leading-[1.8]"
                            />
                            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-soft text-muted border border-line">
                              ➔ {rightPart}
                            </span>
                          </div>
                        )
                      ) : (
                        <TajweedText
                          text={mainText}
                          highlightLetters={node.letters}
                          rule={itemRuleType}
                          className="text-2xl sm:text-3xl leading-[1.8]"
                        />
                      )}
                    </div>
                    {noteFr && (
                      <div className="flex justify-start">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${
                          isErrorExample
                            ? 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300 border-red-200 dark:border-red-900'
                            : 'bg-soft text-muted border-line'
                        }`}>
                          {noteFr}
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  };

  // Render node recursively
  const renderTreeNode = (node: TreeNode, depth: number = 0) => {
    const hasKids = node.children && node.children.length > 0;
    const isOpen = !!openNodes[node.id];
    const isSelected = selectedNode.id === node.id;
    const color = node.tagColor || 'var(--lapis)';

    return (
      <li key={node.id} className="select-none">
        <button
          onClick={() => toggleNode(node.id, node)}
          aria-expanded={hasKids ? isOpen : undefined}
          className={`w-full flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-2xl px-3.5 py-2.5 text-left transition-colors ${
            isSelected ? 'bg-soft ring-1 ring-lapis/20' : 'hover:bg-soft/70'
          }`}
        >
          <span className="flex items-center gap-3 flex-1 min-w-[11rem]">
            <span className="w-1 self-stretch min-h-[28px] rounded-full shrink-0" style={{ background: color }} />
            {hasKids && (
              <span className="text-muted shrink-0">
                {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </span>
            )}
            <span className={`text-[15px] leading-snug ${depth === 0 ? 'font-semibold' : ''} ${isSelected ? 'text-ink font-semibold' : 'text-ink'}`}>
              {node.labelFr}
            </span>
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <span className={`font-ui-ar leading-[1.8] ${depth === 0 ? 'text-2xl' : 'text-xl'} text-ink`} dir="rtl">
              {node.labelAr}
            </span>
            <span className="lg:hidden text-xs text-muted/70 pl-1" title="Voir l'explication">
              <Eye className="w-3.5 h-3.5" />
            </span>
          </div>
        </button>

        {hasKids && isOpen && (
          <ul className="ml-5 pl-3 border-l border-line mt-1 space-y-1 animate-fade">
            {node.children!.map(kid => renderTreeNode(kid, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      <StepHeader
        step={1}
        title="La carte des règles"
        description="Toutes les règles du chapitre et leurs ramifications. Touchez une branche pour afficher ses explications, lettres et exemples."
        aside={
          <div className="segmented">
            <button aria-pressed={false} onClick={expandAll}>Tout déplier</button>
            <button aria-pressed={false} onClick={collapseAll}>Replier</button>
          </div>
        }
      />

      <div className="grid lg:grid-cols-[minmax(0,1fr)_400px] gap-6 items-start">
        <ul className="surface p-3 sm:p-4 space-y-1">
          {renderTreeNode(tree, 0)}
        </ul>

        {/* Panneau de détail latéral sur Desktop (>= lg) */}
        {selectedNode && (
          <aside key={selectedNode.id} className="hidden lg:block surface p-6 lg:sticky lg:top-36 animate-fade">
            {renderDetailBody(selectedNode)}
          </aside>
        )}
      </div>

      {/* Volet interactif Bottom Sheet sur Mobile (< lg) */}
      <Modal
        isOpen={isMobileDetailOpen}
        onClose={() => setIsMobileDetailOpen(false)}
        title={selectedNode?.labelFr || 'Détail de la règle'}
        subtitle="Explications, lettres et exemples coraniques"
      >
        {selectedNode && renderDetailBody(selectedNode)}
      </Modal>
    </>
  );
};

