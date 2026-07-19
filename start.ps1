$ErrorActionPreference = 'Stop'
$port = 4173
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

Write-Host '英语岛大冒险正在启动…' -ForegroundColor Cyan
Write-Host "浏览器地址：http://localhost:$port" -ForegroundColor Green
Start-Process "http://localhost:$port"
python -m http.server $port
