Add-Type -AssemblyName System.Drawing

$srcLogoPath = "C:\Users\matheus\.gemini\antigravity\brain\9b29f5f7-fa40-4dda-88b1-37b587cf3c36\.user_uploaded\media_1793285740462_dec8e6b1.png"
$srcPhotoPath = "C:\Users\matheus\.gemini\antigravity\brain\9b29f5f7-fa40-4dda-88b1-37b587cf3c36\.user_uploaded\media_1793285750912_6e83acb4.jpg"

$publicDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Katia Silaine Santos — Advocacia\public"
$appDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Katia Silaine Santos — Advocacia\app"

if (!(Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

# 1. Copy full logo to public/logo.png
[System.IO.File]::Copy($srcLogoPath, "$publicDir\logo.png", $true)
Write-Host "Created public/logo.png"

# 2. Extract KS Symbol from logo (Bounding box: X=312 to 710, Y=10 to 380)
$srcBmp = New-Object System.Drawing.Bitmap($srcLogoPath)

# Symbol rectangle with a slight padding
$symRect = [System.Drawing.Rectangle]::FromLTRB(300, 8, 724, 385)
$symBmp = New-Object System.Drawing.Bitmap(512, 512, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gSym = [System.Drawing.Graphics]::FromImage($symBmp)
$gSym.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gSym.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gSym.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gSym.Clear([System.Drawing.Color]::Transparent)

# Fit symbol inside 512x512 with 32px padding
$destW = 448
$destH = [int]($symRect.Height * ($destW / $symRect.Width))
if ($destH -gt 448) {
    $destH = 448
    $destW = [int]($symRect.Width * ($destH / $symRect.Height))
}
$destX = [int]((512 - $destW) / 2)
$destY = [int]((512 - $destH) / 2)
$destRect = New-Object System.Drawing.Rectangle($destX, $destY, $destW, $destH)

$gSym.DrawImage($srcBmp, $destRect, $symRect, [System.Drawing.GraphicsUnit]::Pixel)
$gSym.Dispose()

$symBmp.Save("$publicDir\logo-symbol.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Created public/logo-symbol.png"

# 3. Create Favicon / App Icons with KS Monogram on Deep Obsidian Rounded Badge
function CreateIcon([int]$size, [string]$outPath, [bool]$darkBg = $true) {
    $iconBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($iconBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    if ($darkBg) {
        # Deep Obsidian Luxury Background with subtle gold border
        $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 11, 15, 20))
        $g.FillEllipse($bgBrush, 0, 0, $size, $size)
        $bgBrush.Dispose()

        $goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(200, 212, 163, 89), [Math]::Max(1.0, $size / 32.0))
        $g.DrawEllipse($goldPen, 1, 1, $size - 2, $size - 2)
        $goldPen.Dispose()
    }

    $pad = [int]($size * 0.14)
    $innerSize = $size - ($pad * 2)
    $innerRect = New-Object System.Drawing.Rectangle($pad, $pad, $innerSize, $innerSize)
    $g.DrawImage($symBmp, $innerRect, 0, 0, 512, 512, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $iconBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $iconBmp.Dispose()
    Write-Host "Created $outPath ($size x $size)"
}

CreateIcon 512 "$publicDir\icon-512x512.png" $true
CreateIcon 192 "$publicDir\icon.png" $true
CreateIcon 180 "$publicDir\apple-icon.png" $true
CreateIcon 32  "$publicDir\favicon-32x32.png" $true
CreateIcon 16  "$publicDir\favicon-16x16.png" $true

# Also copy to app/ for Next.js internal icon handlers
CreateIcon 192 "$appDir\icon.png" $true
CreateIcon 180 "$appDir\apple-icon.png" $true

# Create .ico file using 32x32 bitmap
$icoBmp = New-Object System.Drawing.Bitmap("$publicDir\favicon-32x32.png")
$icoHicon = $icoBmp.GetHicon()
$iconObj = [System.Drawing.Icon]::FromHandle($icoHicon)
$fsPublic = [System.IO.File]::OpenWrite("$publicDir\favicon.ico")
$iconObj.Save($fsPublic)
$fsPublic.Close()

$fsApp = [System.IO.File]::OpenWrite("$appDir\favicon.ico")
$iconObj.Save($fsApp)
$fsApp.Close()

$iconObj.Dispose()
$icoBmp.Dispose()
Write-Host "Created favicon.ico in public/ and app/"

# 4. Copy Photo of Dra. Katia Silaine Santos
[System.IO.File]::Copy($srcPhotoPath, "$publicDir\katia-silaine-santos.jpg", $true)
[System.IO.File]::Copy($srcPhotoPath, "$publicDir\hero-advogada.jpg", $true)
[System.IO.File]::Copy($srcPhotoPath, "$publicDir\sobre-advogada.jpg", $true)
Write-Host "Created photo files in public/"

$symBmp.Dispose()
$srcBmp.Dispose()
