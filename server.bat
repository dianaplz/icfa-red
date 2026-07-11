@echo off
title ICFA RED — Servidor Local
echo.
echo  ==========================================
echo   ICFA RED - Servidor Local
echo   http://localhost:8000
echo   Ctrl+C para detener
echo  ==========================================
echo.

where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo  ERROR: Python no esta instalado.
    echo  Descargalo en https://www.python.org/downloads/
    echo  O usa la extension Live Server en VS Code.
    pause
    exit /b
)

start "" http://localhost:8000
python -m http.server 8000
pause
