const https = require('https');

const bots = {
  'CTO': '8605682713:AAHRxmgrdDAjnDa4dXLoigZm0TuVE-mAVdc',
  'PM': '8526760550:AAEDsVuLUcGTdFQ0zBwfrIHi1MuqkeM78XM',
  'UX': '8648787545:AAHJYgjLDInbpHVe38SLe_tPz_I0Em0toyw',
  'Frontend': '8555478350:AAFXM4h65EMRXbYohf71cDQL6Vhr3GIPOBg',
  'Backend': '8733832051:AAGcr7hUPmAT2wnJHH7gBTHiis4R7d24kLk',
  'DevOps': '8618617089:AAE9zbGWaw-AhxkzNqxtlfpLwO3-e4Isfvw',
  'QA': '8204240874:AAFtLiBK-8g0Uck0uGf7HANRfyKgKONa9YU',
  'Security': '8724440947:AAF4SXYg6U7LTeeL7BLXIFWiyfjDbaIhZ1E'
};

async function getBotInfo(token) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.telegram.org/bot${token}/getMe`, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.result);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function verifyAllBots() {
  console.log('🔍 Verifying all 8 TreeTech bots...\\n');
  
  for (const [name, token] of Object.entries(bots)) {
    try {
      const info = await getBotInfo(token);
      console.log(`✅ ${name} Bot`);
      console.log(`   Username: @${info.username}`);
      console.log(`   Name: ${info.first_name}`);
      console.log(`   Link: https://t.me/${info.username}\\n`);
    } catch (error) {
      console.log(`❌ ${name} Bot: ${error.message}\\n`);
    }
  }
}

verifyAllBots();
