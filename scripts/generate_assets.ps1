Add-Type -AssemblyName System.Drawing

$srcPhotoPath = "C:\Users\matheus\.gemini\antigravity\brain\dbf180a2-b953-4c04-bf63-2ec3c4c6421e\.user_uploaded\media_1793291132172_9bd7c92a.jpg"
$srcLogoPath = "C:\Users\matheus\.gemini\antigravity\brain\dbf180a2-b953-4c04-bf63-2ec3c4c6421e\.user_uploaded\media_1793291141997_809db9fa.jpg"

$publicDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Alexandre Abreu Lúcio — Advocacia\public"
$appDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Alexandre Abreu Lúcio — Advocacia\app"

if (!(Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

Write-Host "Processing assets from source files..."

# 1. Generate transparent circular logo badge
$logoBmp = [System.Drawing.Bitmap]::FromFile($srcLogoPath)
$logoW = $logoBmp.Width
$logoH = $logoBmp.Height

# The circular seal bounding box was measured: X=[16, 1004], Y=[8, 980]
# Center is approx (510, 494), radius approx 488
$centerX = 510
$centerY = 494
$radius = 488

# Create high-res 1024x1024 transparent bitmap for the full logo seal
[int]$sealSize = 1024
$sealBmp = New-Object System.Drawing.Bitmap($sealSize, $sealSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gSeal = [System.Drawing.Graphics]::FromImage($sealBmp)
$gSeal.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gSeal.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gSeal.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gSeal.Clear([System.Drawing.Color]::Transparent)

# Draw circular clipped image
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(8, 8, [int]($sealSize - 16), [int]($sealSize - 16))
$gSeal.SetClip($path)

# Draw the source logo fitted inside the circle
$destRect = New-Object System.Drawing.Rectangle(8, 8, [int]($sealSize - 16), [int]($sealSize - 16))
$srcX = [int]($centerX - $radius)
$srcY = [int]($centerY - $radius)
$srcD = [int]($radius * 2)
$srcRect = New-Object System.Drawing.Rectangle($srcX, $srcY, $srcD, $srcD)
$gSeal.DrawImage($logoBmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$gSeal.ResetClip()

# Draw subtle outer bevel antialiased ring for perfection
$ringPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 237, 227, 207), 3.0)
$gSeal.DrawEllipse($ringPen, 9, 9, [int]($sealSize - 18), [int]($sealSize - 18))
$ringPen.Dispose()
$path.Dispose()
$gSeal.Dispose()

$sealBmp.Save("$publicDir\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Created $publicDir\logo.png (1024x1024 transparent seal)"

# 2. Extract AL Monogram Symbol into 512x512 badge
$symBmp = New-Object System.Drawing.Bitmap(512, 512, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gSym = [System.Drawing.Graphics]::FromImage($symBmp)
$gSym.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gSym.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gSym.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gSym.Clear([System.Drawing.Color]::Transparent)
$gSym.DrawImage($sealBmp, 0, 0, 512, 512)
$gSym.Dispose()

$symBmp.Save("$publicDir\logo-symbol.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Created $publicDir\logo-symbol.png (512x512)"

# 3. Create Multi-Resolution Favicons & App Icons
function CreateIcon([int]$size, [string]$outPath) {
    $iconBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($iconBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    
    # Draw dark background badge with subtle champagne trim for maximum contrast in any browser tab
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 10, 13, 18))
    $g.FillEllipse($bgBrush, 0, 0, $size, $size)
    $bgBrush.Dispose()

    $penWidth = [Math]::Max(1.0, [double]$size / 30.0)
    $goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(240, 203, 185, 152), $penWidth)
    $g.DrawEllipse($goldPen, 1, 1, [int]($size - 2), [int]($size - 2))
    $goldPen.Dispose()

    # Draw seal inside with small padding
    $pad = [int]($size * 0.04)
    $innerSize = [int]($size - ($pad * 2))
    $destInner = New-Object System.Drawing.Rectangle($pad, $pad, $innerSize, $innerSize)
    $g.DrawImage($sealBmp, $destInner, 0, 0, 1024, 1024, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $iconBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $iconBmp.Dispose()
    Write-Host "Created $outPath ($size x $size)"
}

CreateIcon 512 "$publicDir\icon-512x512.png"
CreateIcon 192 "$publicDir\icon.png"
CreateIcon 180 "$publicDir\apple-icon.png"
CreateIcon 32  "$publicDir\favicon-32x32.png"
CreateIcon 16  "$publicDir\favicon-16x16.png"

# Also copy to app/
CreateIcon 192 "$appDir\icon.png"
CreateIcon 180 "$appDir\apple-icon.png"

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

# 4. Copy Photo of Dr. Alexandre Abreu Lúcio
[System.IO.File]::Copy($srcPhotoPath, "$publicDir\hero-advogado.jpg", $true)
[System.IO.File]::Copy($srcPhotoPath, "$publicDir\sobre-advogado.jpg", $true)
[System.IO.File]::Copy($srcPhotoPath, "$publicDir\dr-alexandre-abreu-lucio.jpg", $true)
Write-Host "Created photo files in public/: hero-advogado.jpg, sobre-advogado.jpg, dr-alexandre-abreu-lucio.jpg"

$symBmp.Dispose()
$sealBmp.Dispose()
$logoBmp.Dispose()
Write-Host "Asset generation finished successfully!"
