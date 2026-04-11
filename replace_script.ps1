$basePath = "c:\Users\admin\OneDrive\Desktop\Vignan_new\Satyam_website"
$htmlFiles = @(
    "about.html", "academics.html", "admissions.html", "blog-listing.html",
    "careers.html", "contacts.html", "faqs.html", "index.html",
    "main-blog.html", "mandatory-disclosure.html", "privacy.html",
    "reviews.html", "single-post.html", "single-post2.html",
    "single-post3.html", "team.html"
)

$totalChanges = 0
$summary = @()

foreach ($file in $htmlFiles) {
    $filePath = Join-Path $basePath $file
    if (!(Test-Path $filePath)) { Write-Host "SKIP (not found): $file"; continue }

    $lines = [System.IO.File]::ReadAllLines($filePath)
    $changed = $false
    $fileChanges = 0

    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]

        # Check if line contains any target words (case-insensitive)
        if ($line -notmatch '(?i)(satyam|ballari|bellary)') { continue }

        $skip = $false

        # Skip lines where Satyam is in an img/link/iframe src attribute pointing to images or external URLs
        if ($line -match 'src="[^"]*[Ss]atyam' -and $line -notmatch 'mailto:') {
            if ($line -match '<img\s' -or $line -match '<link\s' -or $line -match '<iframe\s') {
                $skip = $true
            }
        }

        # Skip lines where Satyam is in href="images/..."
        if ($line -match 'href="images/[^"]*[Ss]atyam') {
            $skip = $true
        }

        # Skip lines where Satyam/Ballari/Bellary is ONLY in external HTTPS URL href (not mailto)
        if (!$skip -and $line -match 'href="https://[^"]*(?:[Ss]atyam|[Bb]allari|[Bb]ellary)' -and $line -notmatch 'mailto:') {
            # Strip HTML tags to get text content
            $textContent = $line -replace '<[^>]*>', ''
            if ($textContent -notmatch '(?i)(satyam|ballari|bellary)') {
                $skip = $true
            }
        }

        if ($skip) { continue }

        # Perform case-sensitive replacements
        $newLine = $line
        $newLine = $newLine -creplace 'Satyam', 'Vignaan'
        $newLine = $newLine -creplace 'satyam', 'vignaan'
        $newLine = $newLine -creplace 'Ballari', 'Hospet'
        $newLine = $newLine -creplace 'ballari', 'hospet'
        $newLine = $newLine -creplace 'Bellary', 'Hospet'
        $newLine = $newLine -creplace 'bellary', 'hospet'

        if ($newLine -ne $line) {
            $lines[$i] = $newLine
            $changed = $true
            $fileChanges++
        }
    }

    if ($changed) {
        [System.IO.File]::WriteAllLines($filePath, $lines)
        Write-Host "MODIFIED: $file ($fileChanges lines changed)"
        $summary += "${file}: ${fileChanges} lines"
        $totalChanges += $fileChanges
    } else {
        Write-Host "NO CHANGES: $file"
    }
}

Write-Host ""
Write-Host "=== SUMMARY ==="
Write-Host "Total lines changed: $totalChanges"
foreach ($s in $summary) { Write-Host "  $s" }
