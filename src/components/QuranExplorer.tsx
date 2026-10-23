import React, { useState, useEffect } from 'react';
import { Chapter } from '../types/tajweed';
import { Mic, Play, Pause, Square, RotateCcw } from 'lucide-react';
import { StepHeader } from './ui';
import { TajweedText, TajweedRuleType } from './TajweedHighlighter';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useVoiceRecorder } from '../hooks/useVoiceRecorder';

interface QuranExplorerProps {
  chapter: Chapter;
}

export const QuranExplorer: React.FC<QuranExplorerProps> = ({ chapter }) => {
  // Verses for Chapter 1 (Basic Concepts & Lahn)
  const chapter1Verses = [
    {
      ref: '1:7',
      surahFr: 'Al-Fātihah',
      words: [
        { text: 'صِرَٰطَ', rule: 'Emphase (Sād & Tā\')', ruleClass: 'chip-gold', why: 'Lettres d\'Isti\'lā\' : ne confondez pas avec Sīn ou Tā\' (Lahn Jalī).' },
        { text: 'ٱلَّذِينَ', rule: 'Liaison & Dhāl doux', ruleClass: 'chip-gold', why: 'Hamzat Wasl effacée, bout de la langue entre les dents pour le Dhāl.' },
        { text: 'أَنۡعَمۡتَ', rule: 'Cœur du Lahn Jalī', ruleClass: 'chip-qalqalah', why: 'Fathah sacrée sur le Tā\' (Tu as comblé). Ne dites JAMAIS An\'amtu (J\'ai comblé) !', target: true },
        { text: 'عَلَيۡهِمۡ', rule: 'Mīm Sākinah Izhār', ruleClass: 'chip-izhar', why: 'Mīm sans prolongation excessive, suivi du Ghayn.' },
        { text: 'غَيۡرِ', rule: 'Ghayn & Râ\' Tarqīq', ruleClass: 'chip-gold', why: 'Ghayn de la gorge, Râ\' amincie par la Kasrah.' },
        { text: 'ٱلۡمَغۡضُوبِ', rule: 'Dād & Istitālah', ruleClass: 'chip-gold', why: 'Prolongation latérale de la langue pour le Dād.' },
        { text: 'عَلَيۡهِمۡ', rule: 'Izhār Shafawī', ruleClass: 'chip-izhar', why: 'Mīm Sākinah suivi du Wāw : clarté nette sans pause.' },
        { text: 'وَلَا', rule: 'Madd naturel', ruleClass: 'chip-gold', why: 'Prolongation normale de 2 temps.' },
        { text: 'ٱلضَّآلِّينَ', rule: 'Madd Lāzim (6 temps)', ruleClass: 'chip-idgham', why: 'Madd Lāzim Muthaqqal : 6 temps obligatoires avec Shaddah. Raccourcir est un Lahn Khafī.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3',
    },
    {
      ref: '2:43',
      surahFr: 'Al-Baqarah',
      words: [
        { text: 'وَأَقِيمُواْ', rule: 'Alif muet final', ruleClass: 'chip-gold', why: 'Le rond au-dessus du dernier Alif signale qu\'il est muet (Rasm \'Uthmānī).' },
        { text: 'ٱلصَّلَوٰةَ', rule: 'Rasm \'Uthmānī (Wāw)', ruleClass: 'chip-qalqalah', why: 'Écrit avec Wāw mais lu As-Salāh grâce à l\'Alif vertical (Alif Khanjariyyah).', target: true },
        { text: 'وَءَاتُواْ', rule: 'Madd Badal & Alif muet', ruleClass: 'chip-gold', why: '2 temps de Madd pour la Hamzah allongée.' },
        { text: 'ٱلزَّكَوٰةَ', rule: 'Rasm \'Uthmānī (Wāw)', ruleClass: 'chip-qalqalah', why: 'Deuxième exemple classique de Wāw calligraphique portant l\'Alif suscrit.', target: true },
        { text: 'وَٱرۡكَعُواْ', rule: 'Hamzat Wasl & Râ\' lourd', ruleClass: 'chip-gold', why: 'La Hamzah de début disparaît en liaison, le Râ\' est emphatique.' },
        { text: 'مَعَ', rule: 'Lettre \'Ayn', ruleClass: 'chip-gold', why: 'Articulation profonde au milieu de la gorge.' },
        { text: 'ٱلرَّٰكِعِينَ', rule: 'Arrêt avec Madd \'Ārid', ruleClass: 'chip-izhar', why: 'Arrêt permis sur 2, 4 ou 6 temps de prolongation.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/002043.mp3',
    }
  ];

  // Verses for Chapter 2 (Quranic Symbols)
  const chapter2Verses = [
    {
      ref: '2:2',
      surahFr: 'Al-Baqarah',
      words: [
        { text: 'ذَٰلِكَ', rule: 'Alif Khanjariyyah (ٰ)', ruleClass: 'chip-gold', why: 'Le petit Alif vertical au-dessus du Dhāl est une voyelle longue obligatoire (2 temps). Ne jamais l\'omettre !', target: true },
        { text: 'ٱلۡكِتَٰبُ', rule: 'Hamzat Wasl & Alif Khanjariyyah', ruleClass: 'chip-gold', why: 'La Hamzah s\'efface en liaison, et le Tā\' porte un Alif miniature obligatoire.' },
        { text: 'لَا', rule: 'Madd Naturel', ruleClass: 'chip-gold', why: 'Prolongation normale de 2 temps.' },
        { text: 'رَيۡبَۛ', rule: 'Triade 1 (Waqf Muta\'āniq)', ruleClass: 'chip-iqlab', why: 'Premier arrêt de la triade (ۛ) : si vous vous arrêtez ici, vous devez obligatoirement lier « Fīh » !', target: true },
        { text: 'فِيهِۛ', rule: 'Triade 2 (Waqf Muta\'āniq)', ruleClass: 'chip-iqlab', why: 'Deuxième arrêt de la triade (ۛ) : arrêt permis seulement si vous n\'avez pas coupé sur « Rayb ».', target: true },
        { text: 'هُدٗى', rule: 'Tanwīn + Lām', ruleClass: 'chip-idgham', why: 'Tanwīn suivi de Lām : Idghām sans Ghunnah.' },
        { text: 'لِّلۡمُتَّقِينَ', rule: 'Arrêt avec Madd \'Ārid', ruleClass: 'chip-izhar', why: 'Prolongation permise à l\'arrêt (2, 4 ou 6 temps).' },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/002002.mp3',
    },
    {
      ref: '18:1-2',
      surahFr: 'Al-Kahf',
      words: [
        { text: 'وَلَمۡ', rule: 'Soukoûn Coranique (ﹾ)', ruleClass: 'chip-izhar', why: 'La tête de Khā\' sur le Mīm ordonne une clarté absolue (Izhār Shafawī).' },
        { text: 'يَجۡعَل', rule: 'Qalqalah Sughrā', ruleClass: 'chip-qalqalah', why: 'Rebond net sur le Jīm au milieu du verbe.' },
        { text: 'لَّهُۥ', rule: 'Petit Wāw de Silah (ۥ)', ruleClass: 'chip-idgham', why: 'Le petit Wāw se prononce comme une voyelle longue de 2 temps en liaison continue.', target: true },
        { text: 'عِوَجَاۜ', rule: 'Saktah Latīfah (س)', ruleClass: 'chip-qalqalah', why: 'Pause obligatoire de 2 temps sans respirer pour séparer la déviance de la droiture !', target: true },
        { text: '١', rule: 'Fin de verset', ruleClass: 'chip-gold', why: 'Numéro de verset séparateur.' },
        { text: 'قَيِّمٗا', rule: 'Reprise post-Saktah', ruleClass: 'chip-idgham', why: 'Reprise sans avoir pris de souffle d\'air.' },
        { text: 'لِّيُنذِرَ', rule: 'Idghām & Ikhfā\'', ruleClass: 'chip-ikhfa', why: 'Idghām sans Ghunnah puis Ikhfā\' sur le Nūn devant Dhāl.' },
        { text: 'بَأۡسٗا', rule: 'Hamzah Sākinah', ruleClass: 'chip-gold', why: 'Blocage net des cordes vocales.' },
        { text: 'شَدِيدٗا', rule: 'Arrêt avec Madd \'Iwad', ruleClass: 'chip-izhar', why: 'Le Tanwīn se transforme en Alif de 2 temps à l\'arrêt.' },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/018001.mp3',
    }
  ];

  // Verses for Chapter 3 (Waqf & Ibtidā')
  const chapter3Verses = [
    {
      ref: '3:181',
      surahFr: 'Āl \'Imrān',
      words: [
        { text: 'لَّقَدۡ', rule: 'Qalqalah Sughrā', ruleClass: 'chip-qalqalah', why: 'Rebond léger sur le Dāl au milieu de la phrase.' },
        { text: 'سَمِعَ', rule: 'Voyelles courtes', ruleClass: 'chip-gold', why: 'Articulation claire des voyelles sans allongement.' },
        { text: 'ٱللَّهُ', rule: 'Nom Divin (Tafkhīm)', ruleClass: 'chip-gold', why: 'Lourd car précédé d\'une Fathah.' },
        { text: 'قَوۡلَ', rule: 'Wāw Sākinah', ruleClass: 'chip-gold', why: 'Son fluide "qawla".' },
        { text: 'ٱلَّذِينَ', rule: 'Hamzat Wasl', ruleClass: 'chip-gold', why: 'S\'efface en liaison.' },
        { text: 'قَالُوٓاْ', rule: 'Arrêt & Citation', ruleClass: 'chip-bad', why: 'Si vous vous arrêtez ici, vous DEVEZ reculer ! Reprendre après sans ce verbe crée un Waqf Qabīh gravissime.', target: true },
        { text: 'إِنَّ', rule: 'Ghunnah 2 temps & Piège', ruleClass: 'chip-idgham', why: 'Nūn Mushaddadah avec Ghunnah. INTERDICTION ABSOLUE de débuter ici sans le verbe Qālū !', target: true },
        { text: 'ٱللَّهَ', rule: 'Nom Divin', ruleClass: 'chip-gold', why: 'Nom d\'Allah précédé de Fathah.' },
        { text: 'فَقِيرٞ', rule: 'Arrêt avec Soukoûn pur', ruleClass: 'chip-izhar', why: 'Tanwīn Damm devient Soukoûn pur "Faqīr" avec Râ\' amincie. Aucun Madd \'Iwad !', target: true },
        { text: 'وَنَحۡنُ', rule: 'Hā\' de Hams', ruleClass: 'chip-gold', why: 'Écoulement doux du souffle.' },
        { text: 'أَغۡنِيَآءُ', rule: 'Madd Muttasil & Arrêt', ruleClass: 'chip-gold', why: 'Prolongation obligatoire de 4-5 temps. À l\'arrêt, la Hamzah prend un Soukoûn pur.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/003181.mp3',
    },
    {
      ref: '40:64',
      surahFr: 'Ghāfir',
      words: [
        { text: 'ٱللَّهُ', rule: 'Nom Divin', ruleClass: 'chip-gold', why: 'Début avec Hamzat Wasl en "A" lourd.' },
        { text: 'ٱلَّذِى', rule: 'Pronom relatif', ruleClass: 'chip-gold', why: 'Madd naturel 2 temps sur le Yā\'.' },
        { text: 'جَعَلَ', rule: 'Voyelles ouvertes', ruleClass: 'chip-gold', why: 'Trois Fathahs légères.' },
        { text: 'لَكُمُ', rule: 'Dammah sur Mīm', ruleClass: 'chip-gold', why: 'Dammah pour éviter la rencontre de deux Soukoûns.' },
        { text: 'ٱلۡأَرۡضَ', rule: 'Lām & Râ\' Tafkhīm', ruleClass: 'chip-gold', why: 'Râ\' lourd précédé d\'une Fathah.' },
        { text: 'قَرَارٗا', rule: 'Madd \'Iwad (2 temps)', ruleClass: 'chip-gold', why: 'À l\'arrêt : Tanwīn Fath devient un Alif de 2 temps « Qarārā ». En liaison : Idghām avec Wāw.', target: true },
        { text: 'وَٱلسَّمَآءَ', rule: 'Madd Wājib Muttasil', ruleClass: 'chip-gold', why: '4 ou 5 temps obligatoires pour la Hamzah dans le même mot.' },
        { text: 'بِنَآءٗ', rule: 'Madd \'Iwad sans Alif écrit', ruleClass: 'chip-izhar', why: 'Bien qu\'aucun Alif ne soit tracé après la Hamzah, l\'arrêt exige 2 temps : « Binā\'ā » !', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/040064.mp3',
    }
  ];

  // Verses for Chapter 4 (Madd I - Natural Madd & Leen)
  const chapter4Verses = [
    {
      ref: '11:49',
      surahFr: 'Hūd',
      words: [
        { text: 'تِلۡكَ', rule: 'Lām Sākinah', ruleClass: 'chip-gold', why: 'Lām Sākinah claire (Izhār).' },
        { text: 'مِنۡ', rule: 'Nūn Sākinah Izhār', ruleClass: 'chip-izhar', why: 'Suivi de la Hamzah (lettre de gorge) : Izhār Halqī limpide.' },
        { text: 'أَنۢبَآءِ', rule: 'Iqlāb & Madd Wājib', ruleClass: 'chip-iqlab', why: 'Nūn suivi de Bā\' (Iqlāb en Mīm) + Madd Muttasil 4-5 temps.' },
        { text: 'ٱلۡغَيۡبِ', rule: 'Lettre de Līn', ruleClass: 'chip-izhar', why: 'Yā\' Sākin précédé d\'une Fathah : lettre de Līn sans aucun Madd en continu !' },
        { text: 'نُوحِيهَآ', rule: 'La Clé Sacrée des 3 Madds', ruleClass: 'chip-idgham', why: 'Contient Wāw précédé de Dammah (نُو), Yā\' précédé de Kasrah (حِي) et Alif précédé de Fathah (هَا) !', target: true },
        { text: 'إِلَيۡكَ', rule: 'Lettre de Līn finale', ruleClass: 'chip-gold', why: 'Yā\' Sākin précédé de Fathah : glissement souple sans allongement en continu.' },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/011049.mp3',
    },
    {
      ref: '106:1-2',
      surahFr: 'Quraysh',
      words: [
        { text: 'لِإِيلَٰفِ', rule: 'Madd Badal & Alif Khanjariyyah', ruleClass: 'chip-gold', why: 'Yā\' de 2 temps après Hamzah + Alif miniature de 2 temps sur Lām.' },
        { text: 'قُرَيۡشٍ', rule: 'Lettre de Līn Yā\'', ruleClass: 'chip-iqlab', why: 'Yā\' précédé d\'une Fathah : AUCUN Madd en continu. Devient Madd Līn (2, 4 ou 6 temps) à l\'arrêt !', target: true },
        { text: '١', rule: 'Fin de verset', ruleClass: 'chip-gold', why: 'Arrêt permis.' },
        { text: 'إِۦلَٰفِهِمۡ', rule: 'Petit Yā\' (ۦ) & Alif (ٰ)', ruleClass: 'chip-gold', why: 'Deux symboles miniatures de Rasm \'Uthmānī qui reçoivent chacun 2 temps de Madd.', target: true },
        { text: 'رِحۡلَةَ', rule: 'Hā\' de Hams', ruleClass: 'chip-gold', why: 'Souffle continu.' },
        { text: 'ٱلشِّتَآءِ', rule: 'Madd Wājib Muttasil', ruleClass: 'chip-gold', why: '4 ou 5 temps obligatoires pour la Hamzah.' },
        { text: 'وَٱلصَّيۡفِ', rule: 'Lettre de Līn Yā\'', ruleClass: 'chip-iqlab', why: 'Yā\' Sākin précédé d\'une Fathah : souplesse sans allongement en liaison continue.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/106001.mp3',
    }
  ];

  // Verses for Chapter 5 (Madd II - Secondary Madd / Far'ī)
  const chapter5Verses = [
    {
      ref: '1:7',
      surahFr: 'Al-Fātihah',
      words: [
        { text: 'صِرَٰطَ', rule: 'Alif Khanjariyyah (2 temps)', ruleClass: 'chip-gold', why: 'Prolongation naturelle stricte de 2 temps sur l\'Alif miniature.' },
        { text: 'ٱلَّذِينَ', rule: 'Dhāl doux', ruleClass: 'chip-gold', why: 'Bout de la langue effleurant les incisives supérieures.' },
        { text: 'أَنۡعَمۡتَ', rule: 'Fathah sacrée', ruleClass: 'chip-gold', why: 'Fathah sur le Tā\' (Tu as comblé).' },
        { text: 'عَلَيۡهِمۡ', rule: 'Izhār Shafawī', ruleClass: 'chip-izhar', why: 'Mīm Sākinah claire sans allongement.' },
        { text: 'غَيۡرِ', rule: 'Lettre de gorge', ruleClass: 'chip-gold', why: 'Ghayn clair et Râ\' amincie par la Kasrah.' },
        { text: 'ٱلۡمَغۡضُوبِ', rule: 'Dād emphatique', ruleClass: 'chip-gold', why: 'Istitālah latérale sur le Dād.' },
        { text: 'عَلَيۡهِمۡ', rule: 'Izhār Shafawī', ruleClass: 'chip-izhar', why: 'Mīm net devant la lettre Wāw.' },
        { text: 'وَلَا', rule: 'Madd Naturel', ruleClass: 'chip-gold', why: '2 temps de prolongation simples.' },
        { text: 'ٱلضَّآلِّينَ', rule: 'Madd Lāzim Kalimī (6 temps)', ruleClass: 'chip-bad', why: 'Madd Lāzim Muthaqqal : 6 temps incompressibles avec pression (Nabrah) sur le double Lām !', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3',
    },
    {
      ref: '2:5',
      surahFr: 'Al-Baqarah',
      words: [
        { text: 'أُوْلَٰٓئِكَ', rule: 'Madd Wājib Muttasil', ruleClass: 'chip-gold', why: 'Alif Khanjariyyah et Hamzah dans le même mot : 4 à 5 temps obligatoires.', target: true },
        { text: 'عَلَىٰ', rule: 'Madd Naturel 2 temps', ruleClass: 'chip-gold', why: 'Alif Maqsūrah valant 2 temps de Madd.' },
        { text: 'هُدٗى', rule: 'Tanwīn + Mīm', ruleClass: 'chip-idgham', why: 'Tanwīn Fath qui fusionne avec Ghunnah de 2 temps dans le Mīm suivant.' },
        { text: 'مِّن', rule: 'Nūn Sākinah + Râ\'', ruleClass: 'chip-idgham', why: 'Idghām sans Ghunnah : fusion sèche dans le Râ\'.' },
        { text: 'رَّبِّهِمۡۖ', rule: 'Waqf Jā\'iz (صلے)', ruleClass: 'chip-izhar', why: 'Liaison préférable mais arrêt permis.' },
        { text: 'وَأُوْلَٰٓئِكَ', rule: 'Madd Wājib Muttasil', ruleClass: 'chip-gold', why: 'Deuxième occurrence : 4 à 5 temps obligatoires.', target: true },
        { text: 'هُمُ', rule: 'Évitement de deux Soukoûns', ruleClass: 'chip-gold', why: 'Dammah sur Mīm pour éviter l\'Iltiqā\' As-Sākinayn.' },
        { text: 'ٱلۡمُفۡلِحُونَ', rule: 'Madd \'Ārid li-s-Sukūn', ruleClass: 'chip-izhar', why: 'Arrêt sur la fin du verset : 2, 4 ou 6 temps au choix du lecteur !', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/002005.mp3',
    }
  ];

  // Verses for Chapter 6 (Hamzah - Wasl & Qat')
  const chapter6Verses = [
    {
      ref: '1:6',
      surahFr: 'Al-Fātihah',
      words: [
        { text: 'ٱهۡدِنَا', rule: '3e lettre Kasrah (Ihdinā)', ruleClass: 'chip-gold', why: '3e lettre (Dāl) avec Kasrah : Hamzat Al-Wasl s\'attaque impérativement avec Kasrah (« Ihdinā ») !', target: true },
        { text: 'ٱلصِّرَٰطَ', rule: 'Article défini (Chute en Wasl)', ruleClass: 'chip-izhar', why: 'En Wasl : « Ihdina-s-Sirāt » (Hamzat Wasl s\'élide). À l\'attaque : Fathah (« As-Sirāt »).', target: true },
        { text: 'ٱلۡمُسۡتَقِيمَ', rule: 'Article défini & Madd \'Ārid', ruleClass: 'chip-izhar', why: 'En Wasl : « Sirāta-l-Mustaqīm » (Hamzat Wasl s\'efface complètement).', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/001006.mp3',
    },
    {
      ref: '46:4',
      surahFr: 'Al-Ahqāf',
      words: [
        { text: 'أَمۡ', rule: 'Hamzat Al-Qat\'', ruleClass: 'chip-gold', why: 'Hamzat Qat\' originelle toujours prononcée avec netteté.' },
        { text: 'لَهُمۡ', rule: 'Mīm Sākinah', ruleClass: 'chip-gold', why: 'Izhār Shafawī.' },
        { text: 'شِرۡكٞ', rule: 'Râ\' Tarqīq', ruleClass: 'chip-gold', why: 'Râ\' amincie par la Kasrah du Shīn.' },
        { text: 'فِى', rule: 'Madd naturel', ruleClass: 'chip-gold', why: 'Voyelle longue s\'effaçant devant le Soukoûn.' },
        { text: 'ٱلسَّمَٰوَٰتِۖ', rule: 'Hamzat Wasl & Waqf Jā\'iz', ruleClass: 'chip-izhar', why: 'Hamzat Wasl effacée. Arrêt permis sur ce mot.' },
        { text: 'ٱئۡتُونِى', rule: 'Rencontre de 2 Hamzahs', ruleClass: 'chip-bad', why: 'En Wasl : « samāwāti\'-tūnī ». À l\'attaque : transmutation en Madd Badal ➔ « ĪTŪNĪ » (إِيتُونِي) !', target: true },
        { text: 'بِكِتَٰبٖ', rule: 'Alif miniature', ruleClass: 'chip-gold', why: 'Madd Naturel de 2 temps.' },
        { text: 'مِّن', rule: 'Idghām bi-Ghunnah', ruleClass: 'chip-idgham', why: 'Tanwīn suivi de Mīm : fusion avec 2 temps de nasalité.' },
        { text: 'قَبۡلِ', rule: 'Ikhfā\' & Qalqalah', ruleClass: 'chip-qalqalah', why: 'Ikhfā\' sur Nūn puis rebond franc sur le Bā\'.' },
        { text: 'هَٰذَآ', rule: 'Madd Munfasil', ruleClass: 'chip-gold', why: 'Prolongation de 4 ou 5 temps.' },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/046004.mp3',
    }
  ];

  // Verses for Chapter 7 (Lam Sakinah)
  const chapter7Verses = [
    {
      ref: '91:1-2',
      surahFr: 'Ash-Shams',
      words: [
        { text: 'وَٱلشَّمۡسِ', rule: 'Double Effacement en Wasl', ruleClass: 'chip-idgham', why: 'Hamzat Wasl et Lām Shamsiyyah disparaissent toutes les deux : on récite directement « Wash-shams » !', target: true },
        { text: 'وَضُحَىٰهَا', rule: 'Madd Naturel', ruleClass: 'chip-gold', why: 'Prolongation de 2 temps sur le Hā\' et l\'Alif.' },
        { text: 'وَٱلۡقَمَرِ', rule: 'Lām Qamariyyah (Izhār)', ruleClass: 'chip-izhar', why: 'La Lām porte un Soukoûn visible et se prononce clairement avec Tawassut : « Wal-qamar ».', target: true },
        { text: 'إِذَا', rule: 'Dhāl doux & Madd', ruleClass: 'chip-gold', why: 'Sortir la pointe de la langue sur le Dhāl.' },
        { text: 'تَلَىٰهَا', rule: 'Madd Naturel', ruleClass: 'chip-gold', why: 'Prolongation naturelle de 2 temps.' },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/091001.mp3',
    },
    {
      ref: '112:1-2',
      surahFr: 'Al-Ikhlās',
      words: [
        { text: 'قُلۡ', rule: 'Lām Al-Fi\'l (Izhār)', ruleClass: 'chip-izhar', why: 'Lām du verbe impératif : prononcez avec Tawassut sans faire de Qalqalah (« Qula » ❌).', target: true },
        { text: 'هُوَ', rule: 'Pronom Huwa', ruleClass: 'chip-gold', why: 'Prononciation standard.' },
        { text: 'ٱللَّهُ', rule: 'Lafz Al-Jalālah Tafkhīm', ruleClass: 'chip-gold', why: 'Précédé de la Fathah du Wāw : Lām lourd et majestueux (« Huwa-llāh »).', target: true },
        { text: 'أَحَدٌ', rule: 'Tanwīn à la césure', ruleClass: 'chip-gold', why: 'À l\'arrêt : « Ahad » (Qalqalah Wustā). En liaison : Tanwīn prend Kasrah accidentelle.' },
        { text: 'ٱللَّهُ', rule: 'Lafz Al-Jalālah Tarqīq (Wasl)', ruleClass: 'chip-izhar', why: 'En liaison continue : « Ahaduni-llāh », la Kasrah accidentelle amincit le Nom d\'Allah !', target: true },
        { text: 'ٱلصَّمَدُ', rule: 'Lām Shamsiyyah & Qalqalah', ruleClass: 'chip-idgham', why: 'Lām absorbée dans le Sād avec Shaddah (« As-Samad ») + Qalqalah sur le Dāl à l\'arrêt.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/112001.mp3',
    }
  ];

  // Verses for Chapter 8 (Nun Sakinah)
  const nunVerses = [
    {
      ref: '99:7',
      surahFr: 'Az-Zalzalah',
      words: [
        { text: 'فَمَن', rule: 'Idghām bi-Ghunnah', ruleClass: 'chip-idgham', why: 'Nūn Sākinah suivi du Yā\' (ينمو) : fusionne avec résonance de 2 temps.', target: true },
        { text: 'يَعۡمَلۡ', rule: 'Suite de l\'Idghām', ruleClass: 'chip-idgham', why: 'Le Yā\' est prononcé avec la Ghunnah issue du Nūn précédent.', target: true },
        { text: 'مِثۡقَالَ', rule: 'Lettre normale', ruleClass: 'chip-gold', why: 'Prononciation standard.' },
        { text: 'ذَرَّةٍ', rule: 'Ikhfā\' Haqīqī', ruleClass: 'chip-ikhfa', why: 'Tanwīn suivi du Khā\' ? Non, le mot suivant commence par Khā\' donc c\'est un Izhār !', target: true },
        { text: 'خَيۡرٗا', rule: 'Izhār Halqī', ruleClass: 'chip-izhar', why: 'Tanwīn de « dharratin » suivi du Khā\' (خ) lettre de gorge : prononciation limpide sans pause.', target: true },
        { text: 'يَرَهُۥ', rule: 'Idghām bi-Ghunnah', ruleClass: 'chip-idgham', why: 'Tanwīn de « khayran » suivi du Yā\' : fusion avec Ghunnah de 2 temps.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/099007.mp3',
    },
    {
      ref: '105:4',
      surahFr: 'Al-Fīl',
      words: [
        { text: 'تَرۡمِيهِم', rule: 'Râ\' Tafkhīm & Mīm', ruleClass: 'chip-gold', why: 'Mīm Sākinah suivi de Bā\' (Ikhfā\' Shafawī).' },
        { text: 'بِحِجَارَةٖ', rule: 'Tanwīn + Mīm', ruleClass: 'chip-idgham', why: 'Tanwīn suivi de Mīm : Idghām bi-ghunnah de 2 temps.', target: true },
        { text: 'مِّن', rule: 'Nūn Sākinah + Sīn', ruleClass: 'chip-ikhfa', why: 'Nūn Sākinah suivi du Sīn (س) : Ikhfā\' avec Ghunnah fine de 2 temps.', target: true },
        { text: 'سِجِّيلٖ', rule: 'Arrêt avec Madd \'Ārid', ruleClass: 'chip-izhar', why: 'Prolongation permise à l\'arrêt (2, 4 ou 6 temps).' },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/105004.mp3',
    }
  ];

  // Verses for Chapter 10 (Qalqalah)
  const qalqalahVerses = [
    {
      ref: '113:1-2',
      surahFr: 'Al-Falaq',
      words: [
        { text: 'قُلۡ', rule: 'Lām Sākinah', ruleClass: 'chip-gold', why: 'Lām du verbe, prononciation claire.' },
        { text: 'أَعُوذُ', rule: 'Dhāl doux', ruleClass: 'chip-gold', why: 'Sortir la pointe de la langue.' },
        { text: 'بِرَبِّ', rule: 'Râ\' lourd', ruleClass: 'chip-gold', why: 'Râ\' avec Fathah.' },
        { text: 'ٱلۡفَلَقِ', rule: 'Qalqalah Wustā (Moyenne)', ruleClass: 'chip-qalqalah', why: 'Arrêt sur la lettre Qāf sans Shaddah : rebond franc et sonore !', target: true },
        { text: 'مِن', rule: 'Nūn Sākinah', ruleClass: 'chip-ikhfa', why: 'Nūn suivi du Shīn : Ikhfā\' Haqīqī.' },
        { text: 'شَرِّ', rule: 'Râ\' amincie', ruleClass: 'chip-gold', why: 'Râ\' avec Kasrah.' },
        { text: 'مَا', rule: 'Madd naturel', ruleClass: 'chip-gold', why: '2 temps de prolongation.' },
        { text: 'خَلَقَ', rule: 'Qalqalah Wustā (Moyenne)', ruleClass: 'chip-qalqalah', why: 'Arrêt sur la lettre Qāf : rebond obligatoire.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/113001.mp3',
    },
    {
      ref: '111:1',
      surahFr: 'Al-Masad',
      words: [
        { text: 'تَبَّتۡ', rule: 'Tā\' de Hams (Pas de rebond)', ruleClass: 'chip-izhar', why: 'Souffle sans rebond.' },
        { text: 'يَدَآ', rule: 'Madd Munfasil', ruleClass: 'chip-gold', why: 'Prolongation de 4 ou 5 temps.' },
        { text: 'أَبِى', rule: 'Bā\' léger', ruleClass: 'chip-gold', why: 'Prononciation fluide.' },
        { text: 'لَهَبٖ', rule: 'Tanwīn + Wāw', ruleClass: 'chip-idgham', why: 'Idghām avec Ghunnah.' },
        { text: 'وَتَبَّ', rule: 'Qalqalah Kubrā (Majeure)', ruleClass: 'chip-qalqalah', why: 'Arrêt sur Bā\' AVEC SHADDAH : le rebond le plus puissant du Tajwīd !', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/111001.mp3',
    }
  ];

  // Verses for Chapter 9 (Mim Sakinah)
  const chapter9Verses = [
    {
      ref: '105:4-5',
      surahFr: 'Al-Fīl',
      words: [
        { text: 'تَرۡمِيهِم', rule: 'Ikhfā\' Shafawī (Devant Bā\')', ruleClass: 'chip-idgham', why: 'Mīm sans voyelle suivi du Bā\' : dissimulation avec 2 temps de Ghunnah sur les lèvres !', target: true },
        { text: 'بِحِجَارَةٖ', rule: 'Suite d\'Ikhfā\' & Tanwīn', ruleClass: 'chip-idgham', why: 'Ouverture sur le Bā\' puis Idghām avec Mīm.' },
        { text: 'مِّن', rule: 'Nūn Sākinah + Sīn', ruleClass: 'chip-ikhfa', why: 'Ikhfā\' Haqīqī.' },
        { text: 'سِجِّيلٖ', rule: 'Arrêt avec Madd \'Ārid', ruleClass: 'chip-izhar', why: '2, 4 ou 6 temps.' },
        { text: 'فَجَعَلَهُمۡ', rule: 'Izhār Shafawī (Devant Kāf)', ruleClass: 'chip-izhar', why: 'Mīm suivi du Kāf : clarté nette sans pause ni prolongation.', target: true },
        { text: 'كَعَصۡفٖ', rule: 'Tanwīn + Mīm', ruleClass: 'chip-idgham', why: 'Idghām avec Ghunnah.' },
        { text: 'مَّأۡكُولِۭ', rule: 'Mīm Mushaddadah & Arrêt', ruleClass: 'chip-izhar', why: 'Ghunnah 2 temps sur Mīm puis arrêt sur Lām.' },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/105004.mp3',
    },
    {
      ref: '1:7',
      surahFr: 'Al-Fātihah',
      words: [
        { text: 'صِرَٰطَ', rule: 'Sād emphatique', ruleClass: 'chip-gold', why: 'Isti\'lā\' et Itbāq.' },
        { text: 'ٱلَّذِينَ', rule: 'Hamzat Wasl effacée', ruleClass: 'chip-gold', why: 'Liaison continue.' },
        { text: 'أَنۡعَمۡتَ', rule: 'Izhār Halqī (Nūn + \'Ayn)', ruleClass: 'chip-izhar', why: 'Nūn prononcé clairement.' },
        { text: 'عَلَيۡهِمۡ', rule: 'Izhār Shafawī (Devant Ghayn)', ruleClass: 'chip-izhar', why: 'Mīm suivi du Ghayn : clarté sans pause.', target: true },
        { text: 'غَيۡرِ', rule: 'Ghayn de gorge', ruleClass: 'chip-gold', why: 'Ghayn profond.' },
        { text: 'ٱلۡمَغۡضُوبِ', rule: 'Dād avec Istitālah', ruleClass: 'chip-gold', why: 'Bord de la langue.' },
        { text: 'عَلَيۡهِمۡ', rule: '⚠️ Ashadd Izhār (Alerte Wāw)', ruleClass: 'chip-qalqalah', why: 'Mīm suivi du Wāw : alerte maximale d\'Ibn Al-Jazarī pour ne pas dissimuler le Mīm !', target: true },
        { text: 'وَلَا', rule: 'Wāw après Mīm', ruleClass: 'chip-gold', why: 'Ouverture nette des lèvres.' },
        { text: 'ٱلضَّآلِّينَ', rule: 'Madd Lāzim (6 temps)', ruleClass: 'chip-idgham', why: '6 temps stricts incompressibles.' },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/001007.mp3',
    }
  ];

  // Verses for Chapter 11 (Assimilation / Idghām)
  const chapter11Verses = [
    {
      ref: '11:42',
      surahFr: 'Hūd',
      words: [
        { text: 'وَهِيَ', rule: 'Voyelles courtes', ruleClass: 'chip-gold', why: 'Prononciation standard sans étirement.' },
        { text: 'تَجۡرِي', rule: 'Qalqalah Sughrā', ruleClass: 'chip-qalqalah', why: 'Rebond vif sur le Jīm au milieu du verbe.' },
        { text: 'بِهِمۡ', rule: 'Mīm Sākinah', ruleClass: 'chip-izhar', why: 'Izhār Shafawī.' },
        { text: 'فِي', rule: 'Madd Naturel', ruleClass: 'chip-gold', why: '2 temps de prolongation.' },
        { text: 'مَوۡجٖ', rule: 'Lettre de Līn', ruleClass: 'chip-gold', why: 'Wāw de Līn sans prolongation en continu.' },
        { text: 'كَٱلۡجِبَالِ', rule: 'Lām Qamariyyah', ruleClass: 'chip-izhar', why: 'Lām claire avec Soukoûn.' },
        { text: 'وَنَادَىٰ', rule: 'Madd Naturel', ruleClass: 'chip-gold', why: '2 temps.' },
        { text: 'نُوحٌ', rule: 'Tanwīn + Hamzat Wasl', ruleClass: 'chip-gold', why: 'Enchaînement sur le nom Ibnahū.' },
        { text: 'ٱبۡنَهُۥ', rule: 'Qalqalah & Silah', ruleClass: 'chip-qalqalah', why: 'Rebond sur le Bā\'.' },
        { text: 'وَكَانَ', rule: 'Madd Naturel', ruleClass: 'chip-gold', why: '2 temps.' },
        { text: 'فِي', rule: 'Madd Naturel', ruleClass: 'chip-gold', why: '2 temps.' },
        { text: 'مَعۡزِلٖ', rule: 'Tanwīn césure', ruleClass: 'chip-gold', why: 'Arrêt permis.' },
        { text: 'يَٰبُنَيَّ', rule: 'Appel affectueux', ruleClass: 'chip-gold', why: 'Yā\' avec Shaddah.' },
        { text: 'ٱرۡكَب مَّعَنَا', rule: '🌟 Idghām Kāmil (ب dans م)', ruleClass: 'chip-idgham', why: 'Le Bā\' nu fusionne entièrement dans le Mīm avec 2 temps de Ghunnah : « Irkam-ma\'anā » ! À l\'arrêt sur Irkab : Qalqalah « Irkab ! ».', target: true },
        { text: 'وَلَا', rule: 'Madd Naturel', ruleClass: 'chip-gold', why: '2 temps.' },
        { text: 'تَكُن', rule: 'Nūn Sākinah + Mīm', ruleClass: 'chip-idgham', why: 'Idghām bi-Ghunnah.' },
        { text: 'مَّعَ', rule: 'Mīm vocalisé', ruleClass: 'chip-gold', why: 'Prononciation standard.' },
        { text: 'ٱلۡكَٰفِرِينَ', rule: 'Madd \'Ārid à l\'arrêt', ruleClass: 'chip-izhar', why: '2, 4 ou 6 temps de prolongation.' },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/011042.mp3',
    },
    {
      ref: '5:28',
      surahFr: 'Al-Mā\'idah',
      words: [
        { text: 'لَئِنۢ', rule: 'Iqlāb (Nūn + Bā\')', ruleClass: 'chip-iqlab', why: 'Le Nūn se transforme en Mīm avec 2 temps de Ghunnah.' },
        { text: 'بَسَطتَ', rule: '🌟 Idghām Nāqis (ط dans ت)', ruleClass: 'chip-qalqalah', why: 'Le Tā\' lourd conserve son emphase et son Itbāq sans Qalqalah, puis la langue libère le Tā\' fin : « Basat-ta » !', target: true },
        { text: 'إِلَيَّ', rule: 'Yā\' Mushaddadah', ruleClass: 'chip-gold', why: 'Appui ferme sur le Yā\'.' },
        { text: 'يَدَكَ', rule: 'Voyelles courtes', ruleClass: 'chip-gold', why: 'Prononciation fluide.' },
        { text: 'لِتَقۡتُلَنِي', rule: 'Qalqalah Sughrā', ruleClass: 'chip-qalqalah', why: 'Rebond vif sur le Qāf sans voyelle.' },
        { text: 'مَآ', rule: 'Madd Munfasil', ruleClass: 'chip-gold', why: 'Prolongation de 4 ou 5 temps.' },
        { text: 'أَنَا۠', rule: 'Alif muet en continu', ruleClass: 'chip-gold', why: 'L\'un des 7 Alifs : muet en liaison rapide (« Anā bi-bāsitin »).' },
        { text: 'بِبَاسِطٖ', rule: 'Tanwīn + Yā\'', ruleClass: 'chip-idgham', why: 'Idghām bi-Ghunnah.' },
        { text: 'يَدِيَ', rule: 'Voyelles brèves', ruleClass: 'chip-gold', why: 'Yadiya.' },
        { text: 'إِلَيۡكَ', rule: 'Lettre de Līn', ruleClass: 'chip-gold', why: 'Yā\' de Līn.' },
        { text: 'لِأَقۡتُلَكَ', rule: 'Qalqalah Sughrā & Arrêt', ruleClass: 'chip-qalqalah', why: 'Rebond sur le Qāf et arrêt sur le Kāf avec Hams.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/005028.mp3',
    }
  ];

  // Verses for Chapter 12 (Tafkhīm & Tarqīq)
  const chapter12Verses = [
    {
      ref: '95:4',
      surahFr: 'At-Tīn',
      words: [
        { text: 'لَقَدۡ', rule: 'Qalqalah Sughrā', ruleClass: 'chip-qalqalah', why: 'Rebond vif et net sur le Dāl soukouné.' },
        { text: 'خَلَقۡنَا', rule: '🌟 Takhlees Al-Hurūf Magistral', ruleClass: 'chip-bad', why: 'Khā lourd (Isti\'lā\') ➔ Abaissement immédiat pour Lām fin ! ➔ Remontée pour Qāf lourd avec Qalqalah. Ne dites JAMAIS « Kha-LÂ-qnā » !', target: true },
        { text: 'ٱلۡإِنسَٰنَ', rule: 'Ikhfā\' Tarqīq', ruleClass: 'chip-ikhfa', why: 'Ghunnah mince et claire devant le Sīn.' },
        { text: 'فِىٓ', rule: 'Madd Munfasil (4-5 temps)', ruleClass: 'chip-gold', why: 'Prolongation séparée devant la Hamzah.' },
        { text: 'أَحۡسَنِ', rule: 'Hā\' avec Hams (Souffle)', ruleClass: 'chip-gold', why: 'Écoulement doux du souffle.' },
        { text: 'تَقۡوِيمٖ', rule: 'Tā\' fin ➔ Qāf lourd + Madd \'Ārid', ruleClass: 'chip-izhar', why: 'Ne contaminez pas le Tā\' fin avec la lourdeur du Qāf suivant. À l\'arrêt, Madd \'Ārid de 2, 4 ou 6 temps.', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/095004.mp3',
    },
    {
      ref: '89:5',
      surahFr: 'Al-Fajr',
      words: [
        { text: 'هَلۡ', rule: 'Lām de la particule', ruleClass: 'chip-izhar', why: 'Izhār net et sans rebond de la Lām Sākinah.' },
        { text: 'فِى', rule: 'Madd Naturel', ruleClass: 'chip-gold', why: '2 temps de Madd standard.' },
        { text: 'ذَٰلِكَ', rule: 'Alif Khanjariyyah', ruleClass: 'chip-gold', why: 'Alif vertical miniature de 2 temps.' },
        { text: 'قَسَمٞ', rule: 'Qāf lourd (Degré 2)', ruleClass: 'chip-bad', why: 'Qāf d\'Isti\'lā\' avec Fathah sans Alif.', target: true },
        { text: 'لِّذِى', rule: 'Idghām sans Ghunnah', ruleClass: 'chip-idgham', why: 'Le Tanwīn fond entièrement dans le Lām.' },
        { text: 'حِجۡرٍ', rule: '🌟 Tarqīq Cas 3 à l\'Arrêt', ruleClass: 'chip-izhar', why: 'À l\'arrêt sur « Hijr », la Râ\' prend un soukoûn précédé du Jīm soukouné (Qalqalah), lui-même précédé de la Kasrah du Hā\' : la Râ\' est obligatoirement mince (Tarqīq) !', target: true },
      ],
      audioUrl: 'https://everyayah.com/data/Husary_128kbps/089005.mp3',
    }
  ];

  const versesList =
    chapter.number === 1
      ? chapter1Verses
      : chapter.number === 2
      ? chapter2Verses
      : chapter.number === 3
      ? chapter3Verses
      : chapter.number === 4
      ? chapter4Verses
      : chapter.number === 5
      ? chapter5Verses
      : chapter.number === 6
      ? chapter6Verses
      : chapter.number === 7
      ? chapter7Verses
      : chapter.number === 8
      ? nunVerses
      : chapter.number === 9
      ? chapter9Verses
      : chapter.number === 10
      ? qalqalahVerses
      : chapter.number === 11
      ? chapter11Verses
      : chapter12Verses;
  const [activeVerseIndex, setActiveVerseIndex] = useState(0);
  const [selectedWordIndex, setSelectedWordIndex] = useState<number>(0);

  // Reset indices on chapter change
  useEffect(() => {
    setActiveVerseIndex(0);
    setSelectedWordIndex(0);
  }, [chapter.number]);

  const currentVerse = versesList[activeVerseIndex] || versesList[0];
  const selectedWord = currentVerse.words[selectedWordIndex] || currentVerse.words[0];

  // Audio & Mic hooks
  const { isPlaying, isLoading, playbackRate, togglePlay, toggleSpeed } =
    useAudioPlayer(currentVerse.audioUrl);

  const {
    isRecording,
    recordedUrl,
    isPlayingRecording,
    startRecording,
    stopRecording,
    playRecordedAudio,
    clearRecording,
  } = useVoiceRecorder();

  const ruleColor: Record<string, string> = {
    'chip-izhar': 'var(--izhar)',
    'chip-idgham': 'var(--idgham)',
    'chip-iqlab': 'var(--iqlab)',
    'chip-ikhfa': 'var(--ikhfa)',
    'chip-qalqalah': 'var(--qalqalah)',
    'chip-gold': 'var(--ink)',
  };

  return (
    <>
      <StepHeader
        title="Le verset, mot par mot"
        description="Écoutez la récitation, puis touchez chaque mot coloré pour comprendre la règle qui s'y applique."
        aside={
          <div className="segmented">
            {versesList.map((v, i) => (
              <button
                key={v.ref}
                onClick={() => {
                  setActiveVerseIndex(i);
                  setSelectedWordIndex(0);
                }}
                aria-pressed={activeVerseIndex === i}
              >
                {v.ref}
              </button>
            ))}
          </div>
        }
      />

      <div className="surface overflow-hidden">
        {/* Barre de lecture */}
        <div className="px-6 py-4 bg-soft border-b border-line flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className="btn btn-primary"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Écouter le Cheikh'}
            </button>
            <button
              onClick={toggleSpeed}
              className="btn btn-secondary text-xs"
              title="Vitesse de lecture"
            >
              {playbackRate}x
            </button>
          </div>

          <span className="ref-tag">
            {currentVerse.surahFr} ({currentVerse.ref}) · Cheikh Al-Husary
          </span>
        </div>

        {/* Verset mot à mot */}
        <div className="p-8 sm:p-12 text-center bg-card">
          <p className="label mb-6">Touchez un mot pour analyser sa règle</p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" dir="rtl">
            {currentVerse.words.map((w, idx) => {
              const isSelected = selectedWordIndex === idx;
              const hasColor = w.target;

              const handleSelectWord = () => {
                setSelectedWordIndex(idx);
                if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                  setTimeout(() => {
                    const el = document.getElementById('quran-word-card');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                  }, 60);
                }
              };

              return (
                <button
                  key={idx}
                  onClick={handleSelectWord}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl transition-all select-none ${
                    isSelected
                      ? 'bg-lapis text-lapis-ink shadow-md scale-105'
                      : hasColor
                      ? `${w.ruleClass} hover:opacity-90`
                      : 'bg-soft text-ink hover:bg-line'
                  }`}
                >
                  <span className="font-ar text-3xl sm:text-4xl leading-[1.7] block">
                    {w.text}
                  </span>
                  {hasColor && (
                    <span className="w-1.5 h-1.5 rounded-full mx-auto mt-1 block opacity-75" style={{ background: ruleColor[w.ruleClass] || 'currentColor' }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Fiche d'analyse du mot */}
        {selectedWord && (
          <div
            id="quran-word-card"
            className="p-6 sm:p-8 border-t border-line bg-soft animate-fade scroll-mt-28 scroll-mb-28"
            style={{ boxShadow: `inset 4px 0 0 ${ruleColor[selectedWord.ruleClass] || 'var(--ink)'}` }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className={`chip ${selectedWord.ruleClass}`}>
                {selectedWord.rule}
              </span>
              <TajweedText
                text={selectedWord.text}
                rule={
                  selectedWord.ruleClass.includes('izhar')
                    ? 'izhar'
                    : selectedWord.ruleClass.includes('idgham')
                    ? 'idgham'
                    : selectedWord.ruleClass.includes('iqlab')
                    ? 'iqlab'
                    : selectedWord.ruleClass.includes('ikhfa')
                    ? 'ikhfa'
                    : selectedWord.ruleClass.includes('qalqalah')
                    ? 'qalqalah'
                    : selectedWord.ruleClass.includes('bad')
                    ? 'error'
                    : 'gold'
                }
                className="text-3xl text-ink"
              />
            </div>
            <p className="text-[15px] sm:text-base leading-relaxed text-ink max-w-2xl">
              {selectedWord.why}
            </p>
          </div>
        )}

        {/* Miroir vocal */}
        <div className="p-6 sm:p-8 border-t border-line bg-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="label mb-1">Miroir vocal</p>
              <h2 className="font-display text-lg text-ink">
                Enregistrez-vous et comparez votre voix à celle du Cheikh
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {!isRecording ? (
                <button onClick={startRecording} className="btn btn-secondary">
                  <Mic className="w-4 h-4 text-bad" />
                  S'enregistrer
                </button>
              ) : (
                <button onClick={stopRecording} className="btn btn-primary bg-bad">
                  <Square className="w-4 h-4" />
                  Arrêter
                </button>
              )}

              {recordedUrl && !isRecording && (
                <>
                  <button onClick={playRecordedAudio} className="btn btn-secondary">
                    {isPlayingRecording ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    Mon enregistrement
                  </button>
                  <button onClick={clearRecording} className="btn btn-ghost btn-icon" title="Effacer">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
