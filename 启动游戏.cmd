@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 正在启动英语岛大冒险...
echo 游戏地址：http://localhost:4173
start "" "http://localhost:4173"
python -m http.server 4173
