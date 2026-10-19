@echo off
title Simulateur Mobile Tajwid
echo ========================================================
echo    Lancement du Simulateur Mobile Tajwid (Temps Reel)
echo ========================================================
echo.
echo Ouverture automatique du simulateur dans votre navigateur...
start http://localhost:5173/simulator.html
echo.
npm run dev
