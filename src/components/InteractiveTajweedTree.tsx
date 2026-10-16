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
