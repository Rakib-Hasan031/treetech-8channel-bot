const { sendMessage } = require('./_lib/botHelper');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { project, url } = req.body;

    if (!project || !url) {
      return res.status(400).json({
        success: false,
        error: 'Missing project or url'
      });
    }

    const messages = {
      cto: `🎯 *DEPLOYMENT SUCCESS*\n\n*Project:* ${project}\n*Status:* ✅ Deployed\n*URL:* ${url}\n\n_Infrastructure is stable and running._`,
      pm: `📋 *DEPLOYMENT SUCCESS*\n\n*Project:* ${project}\n*Status:* ✅ Live\n*URL:* ${url}\n\n_Ready for user testing._`,
      ux: `🎨 *DEPLOYMENT SUCCESS*\n\n*Project:* ${project}\n*Status:* ✅ Live\n*URL:* ${url}\n\n_Design is now viewable in production._`,
      frontend: `💻 *DEPLOYMENT SUCCESS*\n\n*Project:* ${project}\n*Status:* ✅ Deployed\n*Preview:* ${url}\n\n_Frontend build completed successfully._`,
      backend: `⚙️ *DEPLOYMENT SUCCESS*\n\n*Project:* ${project}\n*Status:* ✅ Deployed\n*URL:* ${url}\n\n_Backend services are live._`,
      devops: `🚀 *DEPLOYMENT SUCCESS*\n\n*Project:* ${project}\n*Status:* ✅ Deployed on Vercel\n*URL:* ${url}\n\n_Deployment pipeline executed successfully._`,
      qa: `🧪 *DEPLOYMENT SUCCESS*\n\n*Project:* ${project}\n*Status:* ✅ Ready for Testing\n*URL:* ${url}\n\n_Production environment available for QA._`,
      security: `🔒 *DEPLOYMENT SUCCESS*\n\n*Project:* ${project}\n*Status:* ✅ Deployed\n*URL:* ${url}\n\n_Security checks passed._`
    };

    const results = {};
    for (const [channel, message] of Object.entries(messages)) {
      const result = await sendMessage(channel, message);
      results[channel] = result.success;
    }

    res.status(200).json({
      success: true,
      results,
      message: 'Deployment notification sent to all channels'
    });

  } catch (error) {
    console.error('Error in deployment endpoint:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
