$dir = "C:\Users\admin\OneDrive\Desktop\Vignan_new\Satyam_website"

# Read index.html footer block (from <footer to </footer> + END comment)
$indexContent = [System.IO.File]::ReadAllText("$dir\index.html")

if ($indexContent -match '(?s)(<footer id="footer-3".*?</footer>\s*\r?\n\s*<!-- END FOOTER-3 -->)') {
    $footerBlock = $Matches[1]
    Write-Output "Footer extracted ($($footerBlock.Length) chars)"
} else {
    Write-Output "ERROR: Could not find footer in index.html"
    exit 1
}

# Files that were skipped
$skippedFiles = @("contacts.html", "mandatory-disclosure.html", "privacy.html")

foreach ($fname in $skippedFiles) {
    $fpath = "$dir\$fname"
    if (-not (Test-Path $fpath)) {
        Write-Output "SKIP (not found): $fname"
        continue
    }
    $content = [System.IO.File]::ReadAllText($fpath)
    
    # Match from <footer id="footer-3" to </footer> (no END comment needed)
    if ($content -match '(?s)(<footer id="footer-3".*?</footer>)') {
        $newContent = $content -replace '(?s)<footer id="footer-3".*?</footer>', ($footerBlock -replace '\$', '$$$$')
        [System.IO.File]::WriteAllText($fpath, $newContent)
        Write-Output "Updated: $fname"
    } else {
        Write-Output "SKIPPED (no footer found): $fname"
    }
}
Write-Output "Done!"
