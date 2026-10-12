@echo off
chcp 65001 >nul
set PYTHONIOENCODING=utf-8
title NetraShiksha AI Launcher
echo ========================================================
echo    NetraShiksha AI (NetraShiksha AI) Local Launcher
echo ========================================================
echo.

cd /d %~dp0

if not exist venv (
    echo [*] Creating Python virtual environment...
    python -m venv venv
    if errorlevel 1 (
        echo [!] Failed to create virtual environment. Please ensure Python 3.10+ is installed.
        pause
        exit /b 1
    )
)

echo [*] Activating virtual environment...
call venv\Scripts\activate.bat

echo [*] Installing / verifying dependencies...
pip install -r requirements.txt

echo.
echo [*] Starting NetraShiksha AI Server...
echo [*] Visit http://127.0.0.1:8001 in your browser
echo.
python run.py

pause
