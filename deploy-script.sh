#!/bin/bash

# TreeTech 8-Channel Bot System - Automated Vercel Deployment Script
# This script automates the environment variable setup

echo "🚀 TreeTech 8-Channel Bot - Automated Deployment"
echo "=================================================="
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found!"
    echo "Installing Vercel CLI..."
    npm install -g vercel
    echo "✅ Vercel CLI installed!"
    echo ""
fi

echo "📝 Before running this script, make sure you have:"
echo "  1. ✅ Logged in to Vercel (run: vercel login)"
echo "  2. ✅ Done initial deployment (run: vercel)"
echo "  3. ✅ Got your Chat ID from @userinfobot"
echo ""

read -p "Have you completed the above steps? (y/n): " ready
if [[ $ready != "y" && $ready != "Y" ]]; then
    echo "⚠️  Please complete the prerequisites first!"
    exit 1
fi

echo ""
echo "📱 Enter your Chat ID (from @userinfobot):"
read -p "Chat ID: " CHAT_ID

if [[ -z "$CHAT_ID" ]]; then
    echo "❌ Chat ID is required!"
    exit 1
fi

echo ""
echo "🔧 Adding environment variables to Vercel..."
echo ""

# Bot Tokens
declare -A BOT_TOKENS=(
    ["CTO_BOT_TOKEN"]="8605682713:AAHRxmgrdDAjnDa4dXLoigZm0TuVE-mAVdc"
    ["PM_BOT_TOKEN"]="8526760550:AAEDsVuLUcGTdFQ0zBwfrIHi1MuqkeM78XM"
    ["UX_BOT_TOKEN"]="8648787545:AAHJYgjLDInbpHVe38SLe_tPz_I0Em0toyw"
    ["FRONTEND_BOT_TOKEN"]="8555478350:AAFXM4h65EMRXbYohf71cDQL6Vhr3GIPOBg"
    ["BACKEND_BOT_TOKEN"]="8733832051:AAGcr7hUPmAT2wnJHH7gBTHiis4R7d24kLk"
    ["DEVOPS_BOT_TOKEN"]="8618617089:AAE9zbGWaw-AhxkzNqxtlfpLwO3-e4Isfvw"
    ["QA_BOT_TOKEN"]="8204240874:AAFtLiBK-8g0Uck0uGf7HANRfyKgKONa9YU"
    ["SECURITY_BOT_TOKEN"]="8724440947:AAF4SXYg6U7LTeeL7BLXIFWiyfjDbaIhZ1E"
)

# Chat IDs (all same)
declare -A CHAT_IDS=(
    ["CTO_CHAT_ID"]="$CHAT_ID"
    ["PM_CHAT_ID"]="$CHAT_ID"
    ["UX_CHAT_ID"]="$CHAT_ID"
    ["FRONTEND_CHAT_ID"]="$CHAT_ID"
    ["BACKEND_CHAT_ID"]="$CHAT_ID"
    ["DEVOPS_CHAT_ID"]="$CHAT_ID"
    ["QA_CHAT_ID"]="$CHAT_ID"
    ["SECURITY_CHAT_ID"]="$CHAT_ID"
)

echo "📤 Adding Bot Tokens (8 tokens)..."
echo ""

for key in "${!BOT_TOKENS[@]}"; do
    echo "Adding $key..."
    echo "${BOT_TOKENS[$key]}" | vercel env add "$key" production preview development
    if [ $? -eq 0 ]; then
        echo "  ✅ $key added"
    else
        echo "  ⚠️  $key might already exist or failed"
    fi
    echo ""
done

echo ""
echo "📤 Adding Chat IDs (8 IDs)..."
echo ""

for key in "${!CHAT_IDS[@]}"; do
    echo "Adding $key..."
    echo "${CHAT_IDS[$key]}" | vercel env add "$key" production preview development
    if [ $? -eq 0 ]; then
        echo "  ✅ $key added"
    else
        echo "  ⚠️  $key might already exist or failed"
    fi
    echo ""
done

echo ""
echo "=================================================="
echo "✅ All environment variables added!"
echo "=================================================="
echo ""
echo "🚀 Next step: Deploy to production"
echo ""
echo "Run this command:"
echo "  vercel --prod"
echo ""
echo "After deployment, test your bot:"
echo "  curl https://YOUR-APP.vercel.app/api"
echo ""
echo "🎉 Happy deploying!"
