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
    const { projectName } = req.body;

    if (!projectName) {
      return res.status(400).json({
        success: false,
        error: 'Missing projectName'
      });
    }

    const messages = {
      cto: `🎯 *NEW PROJECT STARTED*\n\n*Project:* ${projectName}\n*Status:* Architecture planning initiated\n\n_System design phase beginning._`,
      pm: `📋 *NEW PROJECT STARTED*\n\n*Project:* ${projectName}\n*Status:* Requirements gathering\n\n_Project planning initiated._`,
      ux: `🎨 *NEW PROJECT STARTED*\n\n*Project:* ${projectName}\n*Status:* Design research started\n\n_UI/UX discovery phase._`,
      frontend: `💻 *NEW PROJECT STARTED*\n\n*Project:* ${projectName}\n*Status:* Frontend setup\n\n_Preparing development environment._`,
      backend: `⚙️ *NEW PROJECT STARTED*\n\n*Project:* ${projectName}\n*Status:* Backend setup\n\n_Setting up server architecture._`,
      devops: `🚀 *NEW PROJECT STARTED*\n\n*Project:* ${projectName}\n*Status:* Infrastructure planning\n\n_Preparing deployment pipeline._`,
      qa: `🧪 *NEW PROJECT STARTED*\n\n*Project:* ${projectName}\n*Status:* Test planning\n\n_Creating test strategy._`,
      security: `🔒 *NEW PROJECT STARTED*\n\n*Project:* ${projectName}\n*Status:* Security assessment\n\n_Planning security measures._`
    };

    const results = {};
    for (const [channel, message] of Object.entries(messages)) {
      const result = await sendMessage(channel, message);
      results[channel] = result.success;
    }

    res.status(200).json({
      success: true,
      results,
      message: 'Project start notification sent to all channels'
    });

  } catch (error) {
    console.error('Error in project-start endpoint:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
