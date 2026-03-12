# TreeTech 8-Channel Bot - Windows PowerShell Deployment Script
# ============================================================

Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "TreeTech 8-Channel Bot System - Vercel Deployment" -ForegroundColor Cyan
Write-Host "============================================`n" -ForegroundColor Cyan

# Step 1: Prerequisites Check
Write-Host "[STEP 1/4] Checking prerequisites..." -ForegroundColor Yellow

# Check if vercel is installed
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Error: Vercel CLI not found!" -ForegroundColor Red
    Write-Host "   Please run: npm install -g vercel" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Vercel CLI found" -ForegroundColor Green

# Step 2: Get Telegram Chat ID
Write-Host "`n[STEP 2/4] Getting Telegram Chat ID..." -ForegroundColor Yellow
Write-Host "`nTo get your Telegram Chat ID:" -ForegroundColor Cyan
Write-Host "1. Open Telegram and search for: @userinfobot" -ForegroundColor White
Write-Host "2. Send /start to the bot" -ForegroundColor White
Write-Host "3. Copy the 'Id' number (e.g., 123456789)`n" -ForegroundColor White

$CHAT_ID = Read-Host "Enter your Telegram Chat ID"

if ([string]::IsNullOrWhiteSpace($CHAT_ID)) {
    Write-Host "❌ Error: Chat ID is required!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Chat ID received: $CHAT_ID" -ForegroundColor Green

# Step 3: Bot Tokens Configuration
Write-Host "`n[STEP 3/4] Configuring bot tokens..." -ForegroundColor Yellow

$BOT_TOKENS = @{
    "CTO_BOT_TOKEN"      = "8605682713:AAHRxmgrdDAjnDa4dXLoigZm0TuVE-mAVdc"
    "PM_BOT_TOKEN"       = "8526760550:AAEDsVuLUcGTdFQ0zBwfrIHi1MuqkeM78XM"
    "UX_BOT_TOKEN"       = "8648787545:AAHJYgjLDInbpHVe38SLe_tPz_I0Em0toyw"
    "FRONTEND_BOT_TOKEN" = "8555478350:AAFXM4h65EMRXbYohf71cDQL6Vhr3GIPOBg"
    "BACKEND_BOT_TOKEN"  = "8733832051:AAGcr7hUPmAT2wnJHH7gBTHiis4R7d24kLk"
    "DEVOPS_BOT_TOKEN"   = "8618617089:AAE9zbGWaw-AhxkzNqxtlfpLwO3-e4Isfvw"
    "QA_BOT_TOKEN"       = "8204240874:AAFtLiBK-8g0Uck0uGf7HANRfyKgKONa9YU"
    "SECURITY_BOT_TOKEN" = "8724440947:AAF4SXYg6U7LTeeL7BLXIFWiyfjDbaIhZ1E"
}

$CHAT_IDS = @{
    "CTO_CHAT_ID"      = $CHAT_ID
    "PM_CHAT_ID"       = $CHAT_ID
    "UX_CHAT_ID"       = $CHAT_ID
    "FRONTEND_CHAT_ID" = $CHAT_ID
    "BACKEND_CHAT_ID"  = $CHAT_ID
    "DEVOPS_CHAT_ID"   = $CHAT_ID
    "QA_CHAT_ID"       = $CHAT_ID
    "SECURITY_CHAT_ID" = $CHAT_ID
}

# Step 4: Add Environment Variables to Vercel
Write-Host "`n[STEP 4/4] Adding environment variables to Vercel..." -ForegroundColor Yellow
Write-Host "This will add 16 environment variables (8 bot tokens + 8 chat IDs)`n" -ForegroundColor White

$total = $BOT_TOKENS.Count + $CHAT_IDS.Count
$current = 0

# Add Bot Tokens
foreach ($key in $BOT_TOKENS.Keys) {
    $current++
    Write-Host "[$current/$total] Adding $key..." -ForegroundColor Cyan
    
    # Create temporary file with token value
    $tempFile = New-TemporaryFile
    $BOT_TOKENS[$key] | Out-File -FilePath $tempFile.FullName -NoNewline -Encoding ASCII
    
    # Add to Vercel (all environments)
    $result = Get-Content $tempFile.FullName | vercel env add $key production preview development 2>&1
    
    Remove-Item $tempFile.FullName
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✅ $key added successfully" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  $key may already exist or failed to add" -ForegroundColor Yellow
    }
}

# Add Chat IDs
foreach ($key in $CHAT_IDS.Keys) {
    $current++
    Write-Host "[$current/$total] Adding $key..." -ForegroundColor Cyan
    
    # Create temporary file with chat ID value
    $tempFile = New-TemporaryFile
    $CHAT_IDS[$key] | Out-File -FilePath $tempFile.FullName -NoNewline -Encoding ASCII
    
    # Add to Vercel (all environments)
    $result = Get-Content $tempFile.FullName | vercel env add $key production preview development 2>&1
    
    Remove-Item $tempFile.FullName
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✅ $key added successfully" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  $key may already exist or failed to add" -ForegroundColor Yellow
    }
}

# Final Summary
Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "✅ DEPLOYMENT CONFIGURATION COMPLETED!" -ForegroundColor Green
Write-Host "============================================`n" -ForegroundColor Cyan

Write-Host "Summary:" -ForegroundColor Yellow
Write-Host "  • Bot Tokens Added: 8" -ForegroundColor White
Write-Host "  • Chat IDs Added: 8" -ForegroundColor White
Write-Host "  • Environments: Production, Preview, Development`n" -ForegroundColor White

Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "  1. Deploy to production:" -ForegroundColor White
Write-Host "     vercel --prod`n" -ForegroundColor Cyan
Write-Host "  2. Test your deployment:" -ForegroundColor White
Write-Host "     curl https://YOUR-APP.vercel.app/api`n" -ForegroundColor Cyan
Write-Host "  3. Send test notification:" -ForegroundColor White
Write-Host '     curl -X POST https://YOUR-APP.vercel.app/api/project-start \' -ForegroundColor Cyan
Write-Host '          -H "Content-Type: application/json" \' -ForegroundColor Cyan
Write-Host '          -d ''{"projectName":"Test Project"}''' -ForegroundColor Cyan

Write-Host "`n🎉 Ready to deploy! Run: vercel --prod" -ForegroundColor Green
Write-Host "`n============================================`n" -ForegroundColor Cyan
