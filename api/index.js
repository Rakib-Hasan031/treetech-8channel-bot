module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { botTokens, chatIds } = require('./_lib/botHelper');

  const status = {
    service: 'TreeTech 8-Channel Telegram Bot System (Vercel)',
    status: 'active',
    version: '2.0.0',
    channels: 8,
    timestamp: new Date().toISOString(),
    bots: {
      cto: botTokens.cto ? '✅ Token Set' : '❌ Token Missing',
      pm: botTokens.pm ? '✅ Token Set' : '❌ Token Missing',
      ux: botTokens.ux ? '✅ Token Set' : '❌ Token Missing',
      frontend: botTokens.frontend ? '✅ Token Set' : '❌ Token Missing',
      backend: botTokens.backend ? '✅ Token Set' : '❌ Token Missing',
      devops: botTokens.devops ? '✅ Token Set' : '❌ Token Missing',
      qa: botTokens.qa ? '✅ Token Set' : '❌ Token Missing',
      security: botTokens.security ? '✅ Token Set' : '❌ Token Missing'
    },
    chatIds: {
      cto: chatIds.cto ? '✅ Configured' : '⚠️ Not Set',
      pm: chatIds.pm ? '✅ Configured' : '⚠️ Not Set',
      ux: chatIds.ux ? '✅ Configured' : '⚠️ Not Set',
      frontend: chatIds.frontend ? '✅ Configured' : '⚠️ Not Set',
      backend: chatIds.backend ? '✅ Configured' : '⚠️ Not Set',
      devops: chatIds.devops ? '✅ Configured' : '⚠️ Not Set',
      qa: chatIds.qa ? '✅ Configured' : '⚠️ Not Set',
      security: chatIds.security ? '✅ Configured' : '⚠️ Not Set'
    },
    note: 'Add CHAT_ID environment variables after getting them from /start command or @userinfobot'
  };

  res.status(200).json(status);
};
