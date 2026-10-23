/** La règle d'or de chaque chapitre, affichée sur la carte des règles et dans la synthèse. */
export const getGoldenRule = (num: number): string => {
  if (num === 1) {
    return "Le Tajwīd pratique est une obligation personnelle (Farḍ 'Ayn) pour préserver le sens : éliminez impérativement tout Lahn Jalī (erreur de voyelle ou de consonne altérant le texte) par respect et piété pour la parole d'Allah.";
  }
  if (num === 2) {
    return "Les symboles du Mushaf sont les gardiens du sens : observez scrupuleusement le Waqf Lāzim (مـ) pour ne pas attribuer de faux propos, ne coupez jamais sur un (لا), et dans la triade (ۛ...ۛ), arrêtez-vous à l'un mais jamais aux deux à la fois !";
  }
  if (num === 3) {
    return "L'arrêt en arabe se fait toujours sur un Soukoûn pur : transmutez le Tanwīn Fath en Alif de 2 temps (Madd 'Iwad), faites muter la Tā' Marbūtah en Hā' Sākinah, et en cas de panne de souffle, appliquez le « Stop & Repeat » en reculant de 2 à 3 mots pour ne jamais isoler une citation sacrilège.";
  }
  if (num === 4) {
    return "Le Madd est la seule règle explicitement mentionnée dans le Sahīh Al-Bukhārī : donnez toujours exactement 2 temps (Harakāt) au Madd Naturel (Nūhīhā) pour ne pas commettre de Lahn Jalī sacrilège, et ne prolongez jamais les lettres de Līn (ـَ + وْ / يْ) en lecture continue !";
  }
  if (num === 5) {
    return "Le Madd Far'ī obéit à deux causes : la Hamzah (Muttasil obligatoire 4-5 temps dans le même mot, Munfasil 4-5 temps entre mots) et le Soukoûn (Lāzim obligatoire 6 temps stricts incompressibles, 'Ārid flexible 2, 4 ou 6 temps à l'arrêt). Gardez toujours la cohérence de vos 6 temps sur le Madd Lāzim et l'équilibre parfait de la Balance (Al-Mīzān) !";
  }
  if (num === 6) {
    return "Ne confondez jamais Hamzat Al-Qat' (ء - toujours fixe) et Hamzat Al-Wasl (ٱ - élidée en continu). À l'attaque, appliquez rigoureusement la règle de la 3e lettre sur les verbes (Dammah ➔ اُ, Fathah/Kasrah ➔ اِ), commencez l'article ٱلـ par une Fathah (اَلـ), et n'attaquez JAMAIS les 5 verbes d'exception (ٱبۡنُواْ, ٱمۡشُواْ) par une Dammah !";
  }
  if (num === 7) {
    return "Observez la lettre qui suit la Lām : les 14 lettres de « إِبۡغِ حَجَّكَ وَخَفۡ عَقِيمَهُ » gardent la Lām claire avec son Soukoûn (لۡ), tandis que les 14 lettres solaires l'effacent complètement au profit d'une Shaddah (ّ). En Wasl sur « Wash-Shams », effacez Hamzat Wasl ET la Lām Shamsiyyah simultanément ! Et donnez au Nom d'Allah son Tafkhīm lourd après Fathah/Dammah et son Tarqīq doux après toute Kasrah.";
  }
  if (num === 8) {
    return "Regardez toujours la lettre qui suit le Nūn sans voyelle : Gorge = Clarté (Izhār), Yarmalūn = Fusion (Idghām), Bā' = Mīm (Iqlāb), et le reste = Dissimulation avec 2 temps de Ghunnah (Ikhfā').";
  }
  if (num === 9) {
    return "Devant le Bā' (ب) : dissimulez avec 2 temps de Ghunnah (Ikhfā' Shafawī) sans laisser de fente artificielle (Furjah). Devant le Mīm (م) : fusionnez en un Mīm doublé avec 2 temps de Ghunnah (Idghām Shafawī). Devant les 26 autres lettres : observez une clarté limpide (Izhār Shafawī), et redoublez d'une vigilance absolue devant Wāw (و) et Fā' (ف) pour ne jamais escamoter le Mīm !";
  }
  if (num === 10) {
    return "Dès qu'une des 5 lettres de Qutb Jadd (قُطْبُ جَدٍّ) porte un soukoûn (originel ou par arrêt), libérez le souffle par un rebond acoustique net sans jamais bouger la mâchoire ni ajouter de voyelle parasite. Distinguez bien la Majeure (Kubrā avec Shaddah), la Moyenne (Wustā à l'arrêt) et la Mineure (Sughrā en cours de mot) !";
  }
  if (num === 11) {
    return "L'Izhār est la norme sacrée : ne fusionnez deux consonnes que si la première porte un soukoûn ! Bannissez impérativement l'assimilation des lettres de Madd (فِى يُوسُفَ, ءَامَنُواْ وَعَمِلُواْ), respectez les 8 fusions totales historiques (Irkam-ma'anā, Nakhlukkum), et dans l'Idghām Nāqis (بَسَطتَ), conservez la lourdeur du Tā' sans qalqalah avant de libérer le Tā' !";
  }
  if (num === 12) {
    return "L'emphase (Tafkhīm) naît au fond de la gorge par élévation de la racine de la langue (Isti'lā') et JAMAIS par arrondissement des lèvres sans Dammah ! Retenez les 7 lettres permanentes (خُصَّ ضَغۡطٍ قِظۡ) et leurs 5 degrés, souvenez-vous que l'Alif est un miroir aveugle, que la Lām d'Allah s'alourdit après Fathah/Dammah, que la Râ' est lourde par défaut avec 4 cas de finesse (Tarqīq), et maîtrisez l'art du Takhlees Al-Hurūf pour qu'aucune consonne lourde n'écrase sa voisine !";
  }
  if (num === 13) {
    return "La langue arabe rejette la rencontre de deux soukoûns (Iltiqā' As-Sākinayn) : à l'arrêt dans un même mot elle est tolérée, mais en lecture continue entre deux mots, brisez l'obstacle en raccourcissant la voyelle longue (Madd) ou par l'adjonction d'une Kasrah réparatrice (Nūn Qutnī sur Tanwīn) !";
  }
  if (num === 14) {
    return "Les lettres isolées (Al-Hurūf Al-Muqatta'ah) en tête de sourates sont les joyaux phonétiques du Coran : l'Alif ne s'allonge pas (0 temps), les 5 lettres de « حَيٌّ طَهُرَ » durent 2 temps stricts, et les 8 lettres de « نَقَصَ عَسَلُكُمْ » exigent 6 temps pleins incompressibles avec respect des fusions et nasales internes !";
  }
  if (num === 15) {
    return "Distinguez rigoureusement les lettres jumelles et la graphie du Mushaf : la Tā' fermée (ة) mute en Hā' (هْ) à l'arrêt mais la Tā' ouverte (ت) reste un Tā', et ne confondez jamais l'Alif Maqsūrah (ىٰ) prolongé sur 2 temps avec un Yā' (ي) portant ses deux points !";
  }
  if (num === 16) {
    return "Les particularités de la lecture de Hafs 'an 'Āsim sont le sceau d'une transmission orale authentique : appliquez l'Imālah unique sur « Majrēhā », la Tashīl douce sur « A-a'jamiyyun », l'Ishmām silencieux des lèvres sur « Lā Ta'mannā » et les 4 silences sacrés (Saktāt) de 2 temps sans respirer !";
  }
  return 'Respectez rigoureusement les règles de Tajwīd pour préserver la récitation exacte du Noble Coran.';
};
