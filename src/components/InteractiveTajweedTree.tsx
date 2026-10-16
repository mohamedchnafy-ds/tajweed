import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { StepHeader } from './ui';

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
            descriptionFr: 'Toute erreur qui change le sens ou la grammaire (ex: changer une voyelle). C\'est un péché (Harām) si commis par négligence !',
            examples: ['أَنۡعَمۡتَ (Tu as comblé)', 'أَنۡعَمۡتُ (J\'ai comblé ❌)'],
          },
          {
            id: 'node-lahn-khafi',
            labelFr: '3. Al-Lahn Al-Khafī (Erreur Subtile)',
            labelAr: 'اللَّحْنُ الخَفِيُّ (مَكْرُوهٌ)',
            tagColor: 'var(--gold)',
            descriptionFr: 'Défaut de finition ou d\'embellissement sans altérer le sens (ex: prolonger un Madd 2 temps au lieu de 4-5 temps). Déconseillé.',
            examples: ['ٱلسَّمَآءَ (Madd 4-5 temps)', 'بِمَصَٰبِيحَ'],
          },
          {
            id: 'node-rasm',
            labelFr: '4. Rasm \'Uthmānī & Muṣ-ḥaf',
            labelAr: 'الرَّسْمُ العُثْمَانِيُّ وَالمُصْحَفُ',
            tagColor: 'var(--izhar)',
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
            descriptionFr: 'مـ = Arrêt obligatoire sous peine de grave contresens théologique. لا = Interdiction de couper la lecture car le sens est incomplet.',
            examples: ['فَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ (مـ)', 'فَوَيۡلٞ لِّلۡمُصَلِّينَ (لا)'],
          },
          {
            id: 'node-waqf-other',
            labelFr: '2. Arrêts Optionnels (ج · قلى · صلى)',
            labelAr: 'الوَقْفُ الجَائِزُ وَأَوْلَوِيَّاتُهُ',
            tagColor: 'var(--gold)',
            descriptionFr: 'ج = Choix égal. قلى = Arrêt préférable (Al-Waqfu awlā). صلى = Liaison préférable (Al-Waslu awlā).',
            examples: ['ج (تخيير متساوٍ)', 'قلى (الوقف أولى)', 'صلى (الوصل أولى)'],
          },
          {
            id: 'node-mutaaniq',
            labelFr: '3. Arrêt d\'Étreinte (ۛ ... ۛ)',
            labelAr: 'الوَقْفُ المُتَعَانِقُ (المُعَانَقَةُ)',
            tagColor: 'var(--iqlab)',
            descriptionFr: 'Double triade de points : arrêtez-vous à l\'un OU à l\'autre, mais JAMAIS aux deux à la fois !',
            examples: ['لَا رَيۡبَۛ فِيهِۛ هُدٗى (البقرة 2)'],
          },
          {
            id: 'node-saktah',
            labelFr: '4. La Pause sans Souffle (س)',
            labelAr: 'السَّكْتَةُ اللَّطِيفَةُ (س)',
            tagColor: 'var(--izhar)',
            descriptionFr: 'Arrêt bref de 2 temps sans reprendre sa respiration pour éviter une fausse liaison contradictoire.',
            examples: ['عِوَجَاۜ ١ قَيِّمٗا (الكهف 1)', 'مِن مَّرۡقَدِنَاۜۗ (يس 52)'],
          },
          {
            id: 'node-vowels-rasm',
            labelFr: '5. Lettres Vocales & Zéros (ٰ · ۥ · ۦ · ْ · ۠)',
            labelAr: 'ضَبْطُ الحُرُوفِ وَالصِّفْرَانِ',
            tagColor: 'var(--idgham)',
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
            descriptionFr: 'En arabe, on ne s\'arrête JAMAIS sur une voyelle ! Fathah, Dammah, Kasrah, Tanwīn Damm et Tanwīn Kasr deviennent TOUS un Soukoûn pur.',
            examples: ['ٱلۡعَٰلَمِينَ ➔ ٱلۡعَٰلَمِينْ', 'نَسۡتَعِينُ ➔ نَسۡتَعِينْ', 'خَبِيرٞ ➔ خَبِيرْ'],
          },
          {
            id: 'node-madd-iwad',
            labelFr: '3. Exception 1 : Madd \'Iwad (Tanwīn Fath)',
            labelAr: 'مَدُّ العِوَضِ (التَّنْوِينُ المَفْتُوحُ)',
            tagColor: 'var(--gold)',
            descriptionFr: 'Le Tanwīn Fath (ـً / ـٗا) se transmute TOUJOURS en un Alif de 2 temps à l\'arrêt, même s\'il n\'y a pas d\'Alif dessiné après la Hamzah.',
            examples: ['قَرَارٗا ➔ قَرَارَا (2 temps)', 'بِنَآءٗ ➔ بِنَآءَا (2 temps)', 'مَآءً ➔ مَآءَا'],
          },
          {
            id: 'node-ta-marbutah',
            labelFr: '4. Exception 2 : Tā\' Marbūtah (ة ➔ هـ)',
            labelAr: 'التَّاءُ المَرْبُوطَةُ تَنْقَلِبُ هَاءً سَاكِنَةً',
            tagColor: 'var(--iqlab)',
            descriptionFr: 'Toute Tā\' Marbūtah (ة / ـة) devient impérativement un Hā\' avec Soukoûn (هْ) à l\'arrêt, MÊME avec un Tanwīn Fath (pas de Madd \'Iwad !).',
            examples: ['وَرَحۡمَةٗ ➔ وَرَحۡمَهْ', 'ٱلصَّلَوٰةَ ➔ ٱلصَّلَاهْ', 'جَنَّةٍ ➔ جَنَّهْ'],
          },
          {
            id: 'node-resuming-safety',
            labelFr: '5. Reprise Sécurisée (Stop & Repeat) & Piège des Citations',
            labelAr: 'الاسْتِئْنَافُ السَّلِيمُ وَحِكَايَةُ أَقْوَالِ الكُفْرِ',
            tagColor: 'var(--bad)',
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
            descriptionFr: 'Wāw précédé de Dammah (نُو), Yā\' précédé de Kasrah (حِي), Alif précédé de Fathah (هَا). Sans voyelle sur la lettre elle-même !',
            examples: ['نُوحِيهَآ (هود 49)', 'مَٰلِكِ (Alif ٰ)', 'يَلۡوُۥنَ (Wāw ۥ)'],
          },
          {
            id: 'node-madd-tabii',
            labelFr: '2. Le Madd Naturel (2 Temps / Harakāt)',
            labelAr: 'المَدُّ الطَّبِيعِيُّ (حَرَكَتَانِ)',
            tagColor: 'var(--gold)',
            descriptionFr: 'La mesure standard : 1 Harakah = durée de « Ba » | 2 Harakāt = durée de « Bā » (Ba + Ba, env. 1 sec). Ni plus, ni moins !',
            examples: ['قَالَ', 'يَقُولُ', 'قِيلَ'],
          },
          {
            id: 'node-lahn-jali-madd',
            labelFr: '3. Le Péril du Lahn Jalī (Raccourcissement)',
            labelAr: 'اللَّحْنُ الجَلِيُّ بِحَذْفِ المَدِّ (حَرَامٌ)',
            tagColor: 'var(--bad)',
            descriptionFr: 'Tronquer le Madd en voyelle courte altère le sens du Coran ! Ex: « Akhadhnā » (Nous avons pris) ➔ « Akhadhna » (Les femmes ont pris ❌).',
            examples: ['أَخَذۡنَآ (Nous)', 'أَخَذۡنَ (Elles ❌)'],
          },
          {
            id: 'node-leen-letters',
            labelFr: '4. Lettres de Madd vs Lettres de Līn',
            labelAr: 'حَرْفَا اللِّينِ (الوَاوُ وَاليَاءُ المَفْتُوحُ مَا قَبْلَهُمَا)',
            tagColor: 'var(--iqlab)',
            descriptionFr: 'Wāw et Yā\' portant un Soukoûn et précédés d\'une FATHAH (ـَ + وْ / يْ). Aucun Madd en lecture continue (Wasl) ! L\'Alif n\'est jamais de Līn.',
            examples: ['قُرَيۡشٍ', 'خَوۡفٖ', 'ٱلۡبَيۡتِ'],
          },
          {
            id: 'node-huwa-hiya',
            labelFr: '5. Les Mots Caméléons : هُوَ, هِيَ, مَعِيَ',
            labelAr: 'الوَقْفُ عَلَى (هُوَ - هِيَ - مَعِيَ)',
            tagColor: 'var(--idgham)',
            descriptionFr: 'En continu = consonne avec Fathah (« Huwa »). À l\'arrêt d\'urgence = la Fathah devient Soukoûn et libère un Madd de 2 temps (« Hū ») !',
            examples: ['إِلَّا هُوَۚ ➔ إِلَّا هُو', 'مَعِىَ ➔ مَعِي'],
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
    } else {
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
            descriptionFr: 'À l\'arrêt sur une lettre avec Shaddah en fin de mot. Pression maintenue puis explosion vive.',
            examples: ['وَتَبَّ', 'بِٱلۡحَقِّ'],
          },
          {
            id: 'node-deg-wusta',
            labelFr: 'Degré 2 : Wustā (Moyenne)',
            labelAr: 'مَرْتَبَةٌ وُسْطَى',
            tagColor: 'var(--gold)',
            descriptionFr: 'À l\'arrêt sur une lettre simple sans Shaddah en fin de mot.',
            examples: ['قُلۡ هُوَ ٱللَّهُ أَحَدٌ', 'مَا كَسَبَ'],
          },
          {
            id: 'node-deg-sughra',
            labelFr: 'Degré 3 : Sughrā (Mineure)',
            labelAr: 'مَرْتَبَةٌ صُغْرَى',
            tagColor: 'var(--izhar)',
            descriptionFr: 'Au milieu d\'un mot ou d\'une phrase en cours de récitation continue.',
            examples: ['يَقۡطَعُونَ', 'خَلَقۡنَا'],
          }
        ]
      };
    }
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
  });

  const [selectedNode, setSelectedNode] = useState<TreeNode>(tree);

  const toggleNode = (id: string, node: TreeNode) => {
    setOpenNodes(prev => ({ ...prev, [id]: !prev[id] }));
    setSelectedNode(node);
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
            isSelected ? 'bg-soft' : 'hover:bg-soft/70'
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
          <span className={`font-ui-ar leading-[1.8] ml-auto ${depth === 0 ? 'text-2xl' : 'text-xl'} text-ink`} dir="rtl">
            {node.labelAr}
          </span>
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
        description="Toutes les règles du chapitre et leurs ramifications. Choisissez une branche pour voir ses lettres et ses exemples."
        aside={
          <div className="segmented">
            <button aria-pressed={false} onClick={expandAll}>Tout déplier</button>
            <button aria-pressed={false} onClick={collapseAll}>Replier</button>
          </div>
        }
      />

      <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-6 items-start">
        <ul className="surface p-3 sm:p-4 space-y-1">
          {renderTreeNode(tree, 0)}
        </ul>

        {selectedNode && (
          <aside key={selectedNode.id} className="surface p-6 lg:sticky lg:top-36 animate-fade">
            <p className="font-ui-ar text-[30px] leading-[1.6] text-ink" dir="rtl">
              {selectedNode.labelAr}
            </p>
            <h3 className="font-display text-xl leading-snug text-ink mt-2">{selectedNode.labelFr}</h3>

            {selectedNode.descriptionFr && (
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{selectedNode.descriptionFr}</p>
            )}

            {selectedNode.letters && selectedNode.letters.length > 0 && (
              <div className="mt-6">
                <p className="label mb-2.5">Lettres concernées</p>
                <div className="flex flex-wrap gap-2" dir="rtl">
                  {selectedNode.letters.map((lettre, idx) => (
                    <span
                      key={idx}
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-ar text-2xl"
                      style={{
                        color: selectedNode.tagColor || 'var(--ink)',
                        background: 'var(--soft)',
                      }}
                    >
                      {lettre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedNode.examples && selectedNode.examples.length > 0 && (
              <div className="mt-6">
                <p className="label mb-2.5">Exemples dans le Coran</p>
                <ul className="divide-y divide-line border-y border-line">
                  {selectedNode.examples.map((ex, idx) => (
                    <li key={idx} className="py-2 font-ar text-2xl leading-[1.8] text-ink text-right" dir="rtl">
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        )}
      </div>
    </>
  );
};
