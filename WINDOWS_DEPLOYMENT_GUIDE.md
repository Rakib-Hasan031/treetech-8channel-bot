# TreeTech 8-Channel Bot - Windows PowerShell Deployment Guide
# ==============================================================

## 🚀 Quick Start (Windows PowerShell - 100% Native)

### Prerequisites
- ✅ Vercel CLI installed (`npm install -g vercel`)
- ✅ Logged into Vercel (`vercel login`)
- ✅ Telegram Chat ID ready

---

## 📋 Step-by-Step Deployment

### 1. Open PowerShell in Project Directory
```powershell
cd C:\Users\hasan\OneDrive\Desktop\treetech-8channel-bot
```

### 2. Run the PowerShell Deployment Script
```powershell
.\deploy-windows.ps1
```

**What this script does:**
- ✅ Checks if Vercel CLI is installed
- ✅ Asks for your Telegram Chat ID
- ✅ Automatically adds 8 bot tokens
- ✅ Automatically adds 8 chat IDs
- ✅ Configures all environments (Production, Preview, Development)

### 3. If You Get "Execution Policy" Error

If you see:
```
deploy-windows.ps1 cannot be loaded because running scripts is disabled on this system
```

**Solution:**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\deploy-windows.ps1
```

### 4. Deploy to Production
```powershell
vercel --prod
```

**Expected Output:**
```
🔍 Inspect: https://vercel.com/your-team/treetech-bot-system/...
✅ Production: https://treetech-bot-system-abc123.vercel.app [5s]
```

### 5. Test Your Deployment

**Test Health Check:**
```powershell
curl https://YOUR-APP.vercel.app/api
```

**Test Project Start Notification:**
```powershell
curl -X POST https://YOUR-APP.vercel.app/api/project-start `
     -H "Content-Type: application/json" `
     -d '{"projectName":"My First Project"}'
```

**Test CTO Update:**
```powershell
curl -X POST https://YOUR-APP.vercel.app/api/update `
     -H "Content-Type: application/json" `
     -d '{
       "channel": "cto",
       "project": "Test Project",
       "module": "System Architecture",
       "status": "Completed",
       "decision": "Using microservices architecture",
       "architecture": "Node.js + Express + PostgreSQL",
       "nextTask": "Deploy to production"
     }'
```

---

## 🤖 Active Bots

After deployment, your 8 bots will automatically send updates:

| Role | Bot Username | Link |
|------|-------------|------|
| 🎯 CTO | @TreeTech_CTO_bot | https://t.me/TreeTech_CTO_bot |
| 📊 Product Manager | @TreeTech_Product_Manager_bot | https://t.me/TreeTech_Product_Manager_bot |
| 🎨 UX Designer | @TreeTech_UX_bot | https://t.me/TreeTech_UX_bot |
| ⚛️ Frontend Dev | @TreeTech_FrontendDev_bot | https://t.me/TreeTech_FrontendDev_bot |
| 🔧 Backend Dev | @TreeTech_BackDev_bot | https://t.me/TreeTech_BackDev_bot |
| 🚀 DevOps | @TreeTech_Devops_bot | https://t.me/TreeTech_Devops_bot |
| 🧪 QA Testing | @TreeTech_QA_Testing_bot | https://t.me/TreeTech_QA_Testing_bot |
| 🔐 Security | @TreeTech_Security_bot | https://t.me/TreeTech_Security_bot |

---

## ⏰ Automated Updates (Optional - 100% Free)

To receive updates every 30 minutes, use **cron-job.org**:

### Setup Steps:

1. Go to https://cron-job.org (free, no credit card)
2. Create account & verify email
3. Create 8 cron jobs (one for each channel):

**Example Cron Job for CTO Bot:**
- **Title:** TreeTech CTO Bot - 30min Update
- **URL:** `https://YOUR-APP.vercel.app/api/update`
- **Schedule:** Every 30 minutes
- **Method:** POST
- **Request Body:**
```json
{
  "channel": "cto",
  "project": "TreeTech Platform",
  "module": "System Architecture",
  "status": "On Process",
  "decision": "Automated update",
  "architecture": "Monitoring system health",
  "nextTask": "Continue monitoring"
}
```
- **Headers:**
  - `Content-Type: application/json`

Repeat for all 8 channels (pm, ux, frontend, backend, devops, qa, security).

**Stagger the schedules** to avoid spamming:
- CTO: :00, :30
- PM: :02, :32
- UX: :04, :34
- Frontend: :06, :36
- Backend: :08, :38
- DevOps: :10, :40
- QA: :12, :42
- Security: :14, :44

---

## 📊 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api` | GET | Health check |
| `/api/update` | POST | Send update to specific channel |
| `/api/deployment` | POST | Send deployment notification |
| `/api/project-start` | POST | Send project start notification |

---

## 🛠️ Troubleshooting

### Issue 1: Script Execution Policy Error
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### Issue 2: Vercel CLI Not Found
```powershell
npm install -g vercel
# Close and reopen PowerShell
```

### Issue 3: Environment Variables Not Working
Check Vercel Dashboard:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Verify all 16 variables are present

### Issue 4: Bot Not Responding
1. Send `/start` to each bot on Telegram
2. Get your Chat ID from @userinfobot
3. Verify Chat ID matches what you entered in script

---

## 💰 Cost Breakdown

| Service | Plan | Cost |
|---------|------|------|
| Vercel | Hobby (Free) | ৳0 |
| Telegram Bots | Free | ৳0 |
| cron-job.org | Free | ৳0 |
| GitHub | Public Repo | ৳0 |
| **TOTAL** | | **৳0 (100% FREE)** |

---

## 🎯 Next Steps

1. ✅ Run `.\deploy-windows.ps1`
2. ✅ Run `vercel --prod`
3. ✅ Test endpoints
4. ✅ Setup cron-job.org (optional)
5. ✅ Monitor bot updates on Telegram

---

## 🆘 Need Help?

If you encounter any issues:
1. Share the exact error message
2. Share the PowerShell output
3. Share your Vercel deployment URL

**Estimated Total Time:** 7-10 minutes

---

**Last Updated:** March 11, 2026  
**Version:** 2.0.0 (Windows PowerShell Edition)
