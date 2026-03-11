const TelegramBot = require('node-telegram-bot-api');

// Chat IDs storage (in production, use a database or environment variables)
const chatIds = {
  cto: process.env.CTO_CHAT_ID || null,
  pm: process.env.PM_CHAT_ID || null,
  ux: process.env.UX_CHAT_ID || null,
  frontend: process.env.FRONTEND_CHAT_ID || null,
  backend: process.env.BACKEND_CHAT_ID || null,
  devops: process.env.DEVOPS_CHAT_ID || null,
  qa: process.env.QA_CHAT_ID || null,
  security: process.env.SECURITY_CHAT_ID || null
};

const botTokens = {
  cto: process.env.CTO_BOT_TOKEN,
  pm: process.env.PM_BOT_TOKEN,
  ux: process.env.UX_BOT_TOKEN,
  frontend: process.env.FRONTEND_BOT_TOKEN,
  backend: process.env.BACKEND_BOT_TOKEN,
  devops: process.env.DEVOPS_BOT_TOKEN,
  qa: process.env.QA_BOT_TOKEN,
  security: process.env.SECURITY_BOT_TOKEN
};

/**
 * Send message to specific bot channel
 */
async function sendMessage(channel, message) {
  try {
    const token = botTokens[channel];
    const chatId = chatIds[channel];

    if (!token) {
      throw new Error(`Bot token for ${channel} not found`);
    }

    if (!chatId) {
      throw new Error(`Chat ID for ${channel} not set. Add ${channel.toUpperCase()}_CHAT_ID to environment variables`);
    }

    const bot = new TelegramBot(token);
    await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
    
    return { success: true };
  } catch (error) {
    console.error(`Error sending to ${channel}:`, error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Format messages for all 8 channels
 */
const formatters = {
  cto: (data) => {
    const { project, module, status, decision, architecture, nextTask } = data;
    return `
🎯 *CTO UPDATE*
━━━━━━━━━━━━━━━━━━━━

*Project:* ${project || 'N/A'}
*Module:* ${module || 'N/A'}
*Status:* ${status || 'N/A'}

${decision ? `*Technical Decision:*\n${decision}\n` : ''}
${architecture ? `*Architecture:*\n${architecture}\n` : ''}

*Next Task:* ${nextTask || 'TBD'}

⏰ _${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC_
    `.trim();
  },

  pm: (data) => {
    const { project, module, status, features, milestones, nextTask } = data;
    return `
📋 *PRODUCT MANAGER UPDATE*
━━━━━━━━━━━━━━━━━━━━

*Project:* ${project || 'N/A'}
*Module:* ${module || 'N/A'}
*Status:* ${status || 'N/A'}

${features ? `*Features:*\n${features}\n` : ''}
${milestones ? `*Milestones:*\n${milestones}\n` : ''}

*Next Task:* ${nextTask || 'TBD'}

⏰ _${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC_
    `.trim();
  },

  ux: (data) => {
    const { project, module, status, design, userFlow, nextTask } = data;
    return `
🎨 *UX DESIGNER UPDATE*
━━━━━━━━━━━━━━━━━━━━

*Project:* ${project || 'N/A'}
*Module:* ${module || 'N/A'}
*Status:* ${status || 'N/A'}

${design ? `*Design Work:*\n${design}\n` : ''}
${userFlow ? `*User Flow:*\n${userFlow}\n` : ''}

*Next Task:* ${nextTask || 'TBD'}

⏰ _${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC_
    `.trim();
  },

  frontend: (data) => {
    const { project, module, status, components, implementation, nextTask, deploymentUrl } = data;
    return `
💻 *FRONTEND DEV UPDATE*
━━━━━━━━━━━━━━━━━━━━

*Project:* ${project || 'N/A'}
*Module:* ${module || 'N/A'}
*Status:* ${status || 'N/A'}

${components ? `*Components:*\n${components}\n` : ''}
${implementation ? `*Implementation:*\n${implementation}\n` : ''}

*Next Task:* ${nextTask || 'TBD'}

${deploymentUrl ? `\n🚀 *Deployed:* ${deploymentUrl}` : ''}

⏰ _${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC_
    `.trim();
  },

  backend: (data) => {
    const { project, module, status, apis, database, integration, nextTask } = data;
    return `
⚙️ *BACKEND DEV UPDATE*
━━━━━━━━━━━━━━━━━━━━

*Project:* ${project || 'N/A'}
*Module:* ${module || 'N/A'}
*Status:* ${status || 'N/A'}

${apis ? `*APIs:*\n${apis}\n` : ''}
${database ? `*Database:*\n${database}\n` : ''}
${integration ? `*Integration:*\n${integration}\n` : ''}

*Next Task:* ${nextTask || 'TBD'}

⏰ _${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC_
    `.trim();
  },

  devops: (data) => {
    const { project, module, status, infrastructure, deployment, monitoring, nextTask } = data;
    return `
🚀 *DEVOPS UPDATE*
━━━━━━━━━━━━━━━━━━━━

*Project:* ${project || 'N/A'}
*Module:* ${module || 'N/A'}
*Status:* ${status || 'N/A'}

${infrastructure ? `*Infrastructure:*\n${infrastructure}\n` : ''}
${deployment ? `*Deployment:*\n${deployment}\n` : ''}
${monitoring ? `*Monitoring:*\n${monitoring}\n` : ''}

*Next Task:* ${nextTask || 'TBD'}

⏰ _${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC_
    `.trim();
  },

  qa: (data) => {
    const { project, module, status, testCases, bugs, coverage, nextTask } = data;
    return `
🧪 *QA TESTING UPDATE*
━━━━━━━━━━━━━━━━━━━━

*Project:* ${project || 'N/A'}
*Module:* ${module || 'N/A'}
*Status:* ${status || 'N/A'}

${testCases ? `*Test Cases:*\n${testCases}\n` : ''}
${bugs ? `*Bugs Found:*\n${bugs}\n` : ''}
${coverage ? `*Coverage:*\n${coverage}\n` : ''}

*Next Task:* ${nextTask || 'TBD'}

⏰ _${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC_
    `.trim();
  },

  security: (data) => {
    const { project, module, status, vulnerabilities, authentication, encryption, nextTask } = data;
    return `
🔒 *SECURITY UPDATE*
━━━━━━━━━━━━━━━━━━━━

*Project:* ${project || 'N/A'}
*Module:* ${module || 'N/A'}
*Status:* ${status || 'N/A'}

${vulnerabilities ? `*Vulnerabilities:*\n${vulnerabilities}\n` : ''}
${authentication ? `*Authentication:*\n${authentication}\n` : ''}
${encryption ? `*Encryption:*\n${encryption}\n` : ''}

*Next Task:* ${nextTask || 'TBD'}

⏰ _${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC_
    `.trim();
  }
};

module.exports = { sendMessage, formatters, botTokens, chatIds };
