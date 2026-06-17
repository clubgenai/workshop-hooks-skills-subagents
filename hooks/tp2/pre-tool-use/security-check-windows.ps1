$cmd = ([Console]::In.ReadToEnd() | ConvertFrom-Json).tool_input.command
if (-not $cmd) { exit 0 }

foreach ($p in @("rm -rf /", "DROP TABLE", "chmod 777")) {
  if ($cmd -like "*$p*") {
    [Console]::Error.WriteLine("🚫 Bloqué : '$p'")
    exit 2
  }
}
exit 0
