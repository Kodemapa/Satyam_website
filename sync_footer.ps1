$dir = "C:\Users\admin\OneDrive\Desktop\Vignan_new\Satyam_website"

# Read index.html footer block
$indexContent = [System.IO.File]::ReadAllText("$dir\index.html")

# Extract footer: from <footer id="footer-3" to <!-- END FOOTER-3 --> (inclusive)
if ($indexContent -match '(?s)(<footer id="footer-3".*?<!-- END FOOTER-3 -->)') {
    $footerBlock = $Matches[1]
    Write-Output "Footer extracted ($($footerBlock.Length) chars)"
} else {
    Write-Output "ERROR: Could not find footer in index.html"
    exit 1
}

# List of other HTML files to update
$files = Get-ChildItem -Path $dir -Filter "*.html" -File | Where-Object { $_.Name -ne "index.html" }

foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName)
    
    if ($content -match '(?s)<footer id="footer-3".*?<!-- END FOOTER-3 -->') {
        $newContent = $content -replace '(?s)<footer id="footer-3".*?<!-- END FOOTER-3 -->', $footerBlock
        [System.IO.File]::WriteAllText($f.FullName, $newContent)
        Write-Output "Updated: $($f.Name)"
    } else {
        Write-Output "SKIPPED (no footer-3 found): $($f.Name)"
    }
}
Write-Output "Done!"
