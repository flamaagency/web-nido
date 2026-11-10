$ErrorActionPreference = "Stop"
$tempDir = Join-Path $env:TEMP ("gh-pages-" + [System.Guid]::NewGuid().ToString().Substring(0,8))
Write-Host "Cloning gh-pages to $tempDir..."
git clone --branch gh-pages --single-branch https://github.com/flamaagency/web-nido.git $tempDir

Get-ChildItem -Path $tempDir -Exclude ".git" | Remove-Item -Recurse -Force
Copy-Item -Path "dist\*" -Destination $tempDir -Recurse -Force

Push-Location $tempDir
git add -A
$status = git status --porcelain
if ($status) {
    git commit -m "deploy: update gh-pages with latest design adjustments and renders"
    git push origin gh-pages
    Write-Host "gh-pages deployed successfully!"
} else {
    Write-Host "No changes to deploy to gh-pages."
}
Pop-Location
Remove-Item -Path $tempDir -Recurse -Force
