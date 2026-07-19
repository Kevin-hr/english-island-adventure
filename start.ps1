$ErrorActionPreference = 'Stop'
$port = 4173
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root
$network = Get-NetIPConfiguration |
  Where-Object { $_.IPv4DefaultGateway -ne $null -and $_.InterfaceAlias -notmatch 'tun|vpn|loopback' } |
  Select-Object -First 1
$lanIp = $network.IPv4Address.IPAddress

Write-Host '英语岛大冒险正在启动…' -ForegroundColor Cyan
Write-Host "电脑地址：http://localhost:$port/?v=12" -ForegroundColor Green
if ($lanIp) {
  Write-Host "华为 Pad 从第 9 关继续：http://${lanIp}:$port/?v=12&resume=9" -ForegroundColor Yellow
  Write-Host '请确保电脑和平板连接同一个家庭路由器。' -ForegroundColor DarkGray
}
Start-Process "http://localhost:$port/?v=12"
python -m http.server $port --bind 0.0.0.0
