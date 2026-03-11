const { sendMessage, formatters } = require('./_lib/botHelper');

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
    const { channel, data } = req.body;

    if (!channel || !data) {
      return res.status(400).json({
        success: false,
        error: 'Missing channel or data'
      });
    }

    const validChannels = ['cto', 'pm', 'ux', 'frontend', 'backend', 'devops', 'qa', 'security'];
    
    if (!validChannels.includes(channel)) {
      return res.status(400).json({
        success: false,
        error: `Invalid channel. Use: ${validChannels.join(', ')}`
      });
    }

    const formatter = formatters[channel];
    if (!formatter) {
      return res.status(400).json({
        success: false,
        error: 'Formatter not found for channel'
      });
    }

    const message = formatter(data);
    const result = await sendMessage(channel, message);

    res.status(200).json({
      success: result.success,
      channel,
      message: result.success ? 'Update sent successfully' : result.error
    });

  } catch (error) {
    console.error('Error in update endpoint:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
