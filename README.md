# TreeTech 8-Channel Bot System - Complete Vercel Deployment

Multi-channel Telegram bot system with 8 specialized engineering channels.

## 🤖 8 Bot Channels

1. **🎯 CTO Bot** - System architecture & technical decisions
2. **📋 PM Bot** - Project planning & milestones  
3. **🎨 UX Bot** - UI/UX design & user experience
4. **💻 Frontend Bot** - Frontend development progress
5. **⚙️ Backend Bot** - Backend API & database work
6. **🚀 DevOps Bot** - Infrastructure & deployment
7. **🧪 QA Bot** - Testing & quality assurance
8. **🔒 Security Bot** - Security & vulnerability management

## 🚀 Quick Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables (see below)

# Production deploy
vercel --prod
```

## 🔧 Environment Variables

### Bot Tokens (8 tokens):

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

### Chat IDs (8 IDs - use same ID for all if you're the only user):

Get your Chat ID from @userinfobot, then:

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

## 📡 API Endpoints

### Health Check
```
GET https://your-app.vercel.app/api
```

### Send Channel Update
```bash
curl -X POST https://your-app.vercel.app/api/update \
  -H "Content-Type: application/json" \
  -d '{
    "channel": "backend",
    "data": {
      "project": "My Project",
      "module": "User API",
      "status": "Completed",
      "apis": "GET /users, POST /users",
      "database": "PostgreSQL",
      "nextTask": "Add pagination"
    }
  }'
```

### Project Start Notification
```bash
curl -X POST https://your-app.vercel.app/api/project-start \
  -H "Content-Type: application/json" \
  -d '{"projectName": "New Project"}'
```

### Deployment Notification
```bash
curl -X POST https://your-app.vercel.app/api/deployment \
  -H "Content-Type: application/json" \
  -d '{
    "project": "My App",
    "url": "https://myapp.com"
  }'
```

## 🤖 Bot Usernames

- @TreeTech_CTO_bot
- @TreeTech_Product_Manager_bot
- @TreeTech_UX_bot
- @TreeTech_FrontendDev_bot
- @TreeTech_BackDev_bot
- @TreeTech_Devops_bot
- @TreeTech_QA_Testing_bot
- @TreeTech_Security_bot

## 💰 Cost

**100% FREE on Vercel!** ✅

## 📝 License

MIT
