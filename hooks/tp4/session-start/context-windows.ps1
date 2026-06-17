Write-Output "Dossier : $(Get-Location)"
Write-Output "Date : $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
Get-ChildItem | Select-Object Name
