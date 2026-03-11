# 🤖 TreeTech 8-Channel Telegram Bot System

Complete engineering team notification system with 8 specialized bot channels for project management and updates.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Rakib-Hasan031/treetech-8channel-bot)

---

## 🎯 Overview

TreeTech 8-Channel Bot System provides automated notifications across 8 specialized engineering channels:

| Channel | Bot | Purpose |
|---------|-----|---------|
| 🎯 CTO | @TreeTech_CTO_bot | System architecture & technical decisions |
| 📋 PM | @TreeTech_Product_Manager_bot | Project planning & milestones |
| 🎨 UX | @TreeTech_UX_bot | UI/UX design & user experience |
| 💻 Frontend | @TreeTech_FrontendDev_bot | Frontend development progress |
| ⚙️ Backend | @TreeTech_BackDev_bot | Backend API & database work |
| 🚀 DevOps | @TreeTech_Devops_bot | Infrastructure & deployment |
| 🧪 QA | @TreeTech_QA_Testing_bot | Testing & quality assurance |
| 🔒 Security | @TreeTech_Security_bot | Security & vulnerability management |

---

## ✨ Features

- ✅ **8 Specialized Channels** - Complete engineering team coverage
- ✅ **Serverless Architecture** - Runs on Vercel (100% FREE)
- ✅ **REST API** - Easy integration with any system
- ✅ **Channel-Specific Formatting** - Tailored messages for each role
- ✅ **Automated Updates** - Cron-job integration for periodic notifications
- ✅ **100% Free** - No hosting costs

---

## 🚀 Quick Deploy

### Method 1: One-Click Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Rakib-Hasan031/treetech-8channel-bot)

After deployment, add environment variables in Vercel dashboard (see Configuration section).

---

### Method 2: Manual Deployment

#### Prerequisites

- Node.js 18+
- Vercel CLI: `npm install -g vercel`
- Git

#### Steps

```bash
# 1. Clone repository
git clone https://github.com/Rakib-Hasan031/treetech-8channel-bot.git
cd treetech-8channel-bot

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel

# 4. Use automated script to add environment variables
bash deploy-script.sh

# 5. Production deploy
vercel --prod
```

---

## 🔧 Configuration

### Required Environment Variables

#### Bot Tokens (8 required)

```
CTO_BOT_TOKEN=8605682713:AAHRxmgrdDAjnDa4dXLoigZm0TuVE-mAVdc
PM_BOT_TOKEN=8526760550:AAEDsVuLUcGTdFQ0zBwfrIHi1MuqkeM78XM
UX_BOT_TOKEN=8648787545:AAHJYgjLDInbpHVe38SLe_tPz_I0Em0toyw
FRONTEND_BOT_TOKEN=8555478350:AAFXM4h65EMRXbYohf71cDQL6Vhr3GIPOBg
BACKEND_BOT_TOKEN=8733832051:AAGcr7hUPmAT2wnJHH7gBTHiis4R7d24kLk
DEVOPS_BOT_TOKEN=8618617089:AAE9zbGWaw-AhxkzNqxtlfpLwO3-e4Isfvw
QA_BOT_TOKEN=8204240874:AAFtLiBK-8g0Uck0uGf7HANRfyKgKONa9YU
SECURITY_BOT_TOKEN=8724440947:AAF4SXYg6U7LTeeL7BLXIFWiyfjDbaIhZ1E
```

#### Chat IDs (8 required)

Get your Telegram Chat ID from [@userinfobot](https://t.me/userinfobot), then add:

```
CTO_CHAT_ID=your_chat_id
PM_CHAT_ID=your_chat_id
UX_CHAT_ID=your_chat_id
FRONTEND_CHAT_ID=your_chat_id
BACKEND_CHAT_ID=your_chat_id
DEVOPS_CHAT_ID=your_chat_id
QA_CHAT_ID=your_chat_id
SECURITY_CHAT_ID=your_chat_id
```

**Note:** Use the same Chat ID for all channels if you're the only recipient.

---

## 📡 API Usage

### Health Check

```bash
GET https://your-app.vercel.app/api
```

**Response:**
```json
{
  "service": "TreeTech 8-Channel Telegram Bot System",
  "status": "active",
  "channels": 8,
  "bots": {
    "cto": "✅ Token Set",
    "pm": "✅ Token Set",
    ...
  }
}
```

---

### Send Channel Update

```bash
POST https://your-app.vercel.app/api/update

Content-Type: application/json

{
  "channel": "backend",
  "data": {
    "project": "My Project",
    "module": "User API",
    "status": "Completed",
    "apis": "GET /users, POST /users",
    "database": "PostgreSQL",
    "nextTask": "Add pagination"
  }
}
```

**Valid channels:** `cto`, `pm`, `ux`, `frontend`, `backend`, `devops`, `qa`, `security`

---

### Project Start Notification

```bash
POST https://your-app.vercel.app/api/project-start

Content-Type: application/json

{
  "projectName": "New Feature Launch"
}
```

Sends notification to all 8 channels.

---

### Deployment Success Notification

```bash
POST https://your-app.vercel.app/api/deployment

Content-Type: application/json

{
  "project": "My App",
  "url": "https://myapp.com"
}
```

Sends deployment success message to all 8 channels.

---

## 🤖 Automated Updates

For periodic automated updates, use [cron-job.org](https://cron-job.org) (free):

1. Create account at cron-job.org
2. Add cronjobs for each channel (every 30 minutes)
3. Set URL: `https://your-app.vercel.app/api/update`
4. Method: POST
5. Body: Channel-specific update data

**Example cron schedule:** `*/30 * * * *` (every 30 minutes)

---

## 🧪 Testing

After deployment:

```bash
# Test health
curl https://your-app.vercel.app/api

# Test project notification (sends to all 8 bots)
curl -X POST https://your-app.vercel.app/api/project-start \
  -H "Content-Type: application/json" \
  -d '{"projectName":"Test Project"}'

# Test specific channel
curl -X POST https://your-app.vercel.app/api/update \
  -H "Content-Type: application/json" \
  -d '{
    "channel": "devops",
    "data": {
      "project": "Test",
      "module": "CI/CD",
      "status": "Completed"
    }
  }'
```

Check your Telegram - you should receive messages from the bots!

---

## 📁 Project Structure

```
treetech-8channel-bot/
├── api/
│   ├── _lib/
│   │   └── botHelper.js      # Bot management & message formatting
│   ├── index.js              # Health check endpoint
│   ├── update.js             # Channel update endpoint
│   ├── deployment.js         # Deployment notification endpoint
│   └── project-start.js      # Project start notification endpoint
├── deploy-script.sh          # Automated deployment script
├── verify-bots.js            # Bot verification utility
├── package.json
├── vercel.json
├── .gitignore
└── README.md
```

---

## 💰 Cost

**100% FREE!**

- ✅ Vercel Hobby Plan: Free
- ✅ Serverless Functions: Free
- ✅ Telegram Bots: Free
- ✅ Cron-job.org: Free

---

## 🛠️ Development

### Local Development

```bash
# Install dependencies
npm install

# Run locally (requires Vercel CLI)
vercel dev
```

### Verify Bots

```bash
node verify-bots.js
```

Shows all 8 bot usernames and verification status.

---

## 📖 Documentation

- [Complete Deployment Guide](./DEPLOYMENT_GUIDE.md) *(coming soon)*
- [API Reference](./API.md) *(coming soon)*
- [Cron Job Setup Guide](./CRON_SETUP.md) *(coming soon)*

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - feel free to use this project!

---

## 🆘 Support

- **Issues:** [GitHub Issues](https://github.com/Rakib-Hasan031/treetech-8channel-bot/issues)
- **Telegram:** Contact bot owners for support

---

## 🌟 Star this repository

If you find this useful, please ⭐ star this repository!

---

## 📞 Bot Links

- 🎯 CTO: https://t.me/TreeTech_CTO_bot
- 📋 PM: https://t.me/TreeTech_Product_Manager_bot
- 🎨 UX: https://t.me/TreeTech_UX_bot
- 💻 Frontend: https://t.me/TreeTech_FrontendDev_bot
- ⚙️ Backend: https://t.me/TreeTech_BackDev_bot
- 🚀 DevOps: https://t.me/TreeTech_Devops_bot
- 🧪 QA: https://t.me/TreeTech_QA_Testing_bot
- 🔒 Security: https://t.me/TreeTech_Security_bot

---

**Built with ❤️ for efficient team communication**
