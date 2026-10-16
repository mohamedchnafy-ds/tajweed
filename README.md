# Tajwīd Mastery — التَّجْوِيدُ الْمُيَسَّرُ

Application web progressive (PWA) moderne, épurée et interactive pour l'apprentissage et le perfectionnement des règles du **Tajwīd** du Saint Coran selon la lecture de **Hafs 'an 'Āsim** (voie *Ash-Shātibiyyah*).

Basée sur le célèbre manuel d'excellence :
> **"Learners' Handbook of Tajweed"** (Drs. Islām Fekry — Arabic101)

---

## ✨ Points Forts & Fonctionnalités

### 1. Parcours Interactif Vivant en 6 Étapes
Chaque chapitre s'explore à travers 6 modules immersifs :
- **1. La Carte Mentale Active** : Arbre conceptuel interactif dont les branches se déploient au toucher pour explorer la structure des règles et des lettres.
- **2. Le Professeur Animé** : Simulations visuelles et animations pédagogiques en direct (ondes de *Ghunnah* 2 temps, fusion magnétique de l'*Idghām*, schéma de la langue suspendue pour l'*Ikhfā'*, et rebond acoustique de la *Qalqalah*).
- **3. Le Laboratoire Interactif** : Clavier complet des 28 lettres arabes pour tester n'importe quelle lettre en direct et observer son comportement phonétique.
- **4. Le Coran Mot par Mot** : Découverte tactile des versets mot par mot, avec écoute de référence (*Cheikh Mahmoud Khalil Al-Hussary*) et **Miroir Vocal au microphone** pour s'enregistrer et se corriger en direct.
- **5. Exercices & Quiz Multi-Formats** : QCM, repérage au clic sur les mots du verset, détection d'erreurs de récitation (*Lahn*) et célébration à 100%.
- **6. Fiche Synthèse** : Tableau récapitulatif & "La Règle d'Or en une phrase".

### 2. Le Cahier d'Erreurs Intelligent (Objectif 0 Faute)
- Enregistrement automatique de chaque hésitation ou erreur de quiz dans un cahier de révision persistant.
- Rappel des pièges fréquents (*Lahn Khafī* et *Lahn Jalī*).
- Entraînement ciblé jusqu'à éradication totale des erreurs.

### 3. Typographie d'Excellence & Esthétique Chaleureuse
- Polices arabes soignées (**Amiri**, **Scheherazade New**, **Noto Naskh Arabic**) pour un affichage irréprochable des voyelles coraniques (*Harakāt*), signes de *Waqf* et diacritiques.
- Titres élégants en **Young Serif** et lecture fluide en **Atkinson Hyperlegible**.
- Thème papier chaleureux (`#f2f4ef`) et mode sombre haute lisibilité.

### 4. 100% Local-First & PWA
- Fonctionnement complet hors-ligne grâce au Service Worker.
- Toutes les données et enregistrements restent sur votre appareil (aucune inscription, respect total de la vie privée).
- Module d'export et d'import de progression en JSON.

---

## 🛠️ Stack Technique

- **Framework** : React 19 + TypeScript + Vite 6
- **Style** : Tailwind CSS avec design tokens harmonieux
- **Audio & Vocal** : HTML5 Audio API + MediaRecorder API (enregistrement micro local)
- **PWA** : `vite-plugin-pwa` + Service Worker Workbox
- **Icônes** : Lucide React

---

## 🚀 Installation & Lancement Local

```bash
# Cloner le dépôt
git clone https://github.com/mohamedchnafy-ds/tajweed.git
cd tajweed

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Compiler pour la production (PWA)
npm run build
npm run preview
```

---

## 📖 Riwāyah Ciblée
Lecture de **Hafs 'an 'Āsim** (حفص عن عاصم) selon la voie de la **Shātibiyyah** (طريق الشاطبية).
