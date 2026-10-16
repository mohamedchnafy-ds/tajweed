import React, { useState } from 'react';
import { Chapter } from '../types/tajweed';
import { ChevronDown, ChevronRight, Sparkles, Layers, BookOpen } from 'lucide-react';

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

    return (
      <div key={node.id} className="relative my-2 select-none">
        <div
          onClick={() => toggleNode(node.id, node)}
          className={`mm-node ${isSelected ? 'active ring-2 ring-amber-500/40' : ''}`}
          style={{
            marginLeft: `${depth * 18}px`,
            borderLeft: node.tagColor ? `4px solid ${node.tagColor}` : undefined
          }}
        >
          <div className="flex items-center gap-2.5">
            {hasKids ? (
              <span className="text-muted w-4 h-4 flex items-center justify-center">
                {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </span>
            ) : (
              <span className="w-2 h-2 rounded-full" style={{ background: node.tagColor || 'var(--ink)' }} />
            )}
            <span className="font-medium text-xs sm:text-sm text-ink">{node.labelFr}</span>
          </div>

          <span className="font-ar font-bold text-base sm:text-lg text-ink" dir="rtl">
            {node.labelAr}
          </span>
        </div>

        {/* Children branches */}
        {hasKids && isOpen && (
          <div className="pl-4 border-l-2 border-line/60 ml-3 space-y-1 animate-enter">
            {node.children!.map(kid => renderTreeNode(kid, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="animate-enter space-y-6">
      
      {/* Header kicker */}
      <div>
        <p className="text-[11px] uppercase tracking-wider font-bold text-muted mb-1 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-gold" />
          <span>Étape 1 · La Carte Mentale Active</span>
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-normal text-ink mb-2">
          {tree.labelFr}
        </h1>
        <p className="text-xs sm:text-sm text-muted">
          Touchez n'importe quelle branche pour explorer ses ramifications et faire apparaître son explication détaillée ci-dessous.
        </p>
      </div>

      {/* Control Toolbar */}
      <div className="flex items-center justify-between gap-2 pt-2 border-t border-line/70">
        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="px-3 py-1.5 rounded-full border border-line bg-card text-xs font-medium text-muted hover:text-ink hover:border-ink transition-colors"
          >
            Tout déplier
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-full border border-line bg-card text-xs font-medium text-muted hover:text-ink hover:border-ink transition-colors"
          >
            Tout replier
          </button>
        </div>
        <span className="text-[11px] text-muted hidden sm:inline">
          {chapter.number === 8 ? '4 Règles fondamentales' : '3 Degrés de force'}
        </span>
      </div>

      {/* Interactive Tree Canvas */}
      <div className="p-4 sm:p-6 rounded-2xl bg-card border border-line shadow-xs overflow-x-auto">
        {renderTreeNode(tree, 0)}
      </div>

      {/* Detail Panel Below Tree */}
      {selectedNode && (
        <div className="p-5 rounded-2xl bg-soft border border-line animate-pop">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-line">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Focus sélectionné</span>
              <h3 className="font-display text-lg font-bold text-ink">{selectedNode.labelFr}</h3>
            </div>
            <span className="font-ar font-bold text-2xl text-ink" dir="rtl">
              {selectedNode.labelAr}
            </span>
          </div>

          {selectedNode.descriptionFr && (
            <p className="text-xs sm:text-sm text-ink mb-4 leading-relaxed">
              {selectedNode.descriptionFr}
            </p>
          )}

          {/* Letter Chips if present */}
          {selectedNode.letters && selectedNode.letters.length > 0 && (
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase text-muted block mb-2">Lettres concernées :</span>
              <div className="flex flex-wrap gap-2">
                {selectedNode.letters.map((lettre, idx) => (
                  <span
                    key={idx}
                    className="chip px-3 py-1 rounded-xl bg-card border border-line text-ink font-ar text-xl shadow-xs"
                  >
                    {lettre}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quranic Examples */}
          {selectedNode.examples && selectedNode.examples.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase text-muted block mb-2">Exemples Coraniques :</span>
              <div className="flex flex-wrap gap-2">
                {selectedNode.examples.map((ex, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-card border border-line font-ar text-xl text-ink shadow-xs"
                    dir="rtl"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
