$ErrorActionPreference = 'Stop'
$ruleName = 'English Island Adventure LAN 4173'

$identity = [Security.Principal.WindowsIdentity]::GetCurrent()
$principal = [Security.Principal.WindowsPrincipal]::new($identity)
$isAdministrator = $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdministrator) {
  $arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`""
  Start-Process powershell.exe -Verb RunAs -ArgumentList $arguments
  exit
}

$existing = Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue
if (-not $existing) {
  New-NetFirewallRule `
    -DisplayName $ruleName `
    -Direction Inbound `
    -Action Allow `
    -Protocol TCP `
    -LocalPort 4173 `
    -Profile Private | Out-Null
}

Write-Host 'Huawei Pad LAN access is enabled.' -ForegroundColor Green
Write-Host 'Close this window, then start the game.'
Read-Host 'Press Enter to finish'
