const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'autosend',
  version: '10.07',
  hasPermssion: 0,
  credits: 'ChatGPT',
  description: 'Tự động gửi file âm thanh theo giờ Việt Nam. Bật/tắt bằng lệnh!',
  commandCategory: 'admin',
  usages: '[on/off]',
  cooldowns: 3
};

// Danh sách lịch gửi: Giờ Việt Nam (Asia/Ho_Chi_Minh)
const audioSchedule = [
  { timer: '6:00:00 AM', file: 'sang.mp3' },
  { timer: '10:00:00 AM', file: 'trua.mp3' },
  { timer: '5:00:00 PM', file: 'chieu.mp3' },
  { timer: '10:00:00 PM', file: 'khuya.mp3' }
];

const audioDir = path.join(__dirname, 'noprefix');
if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

global.autosendEnabled = true;
let lastSentTime = null;

module.exports.onLoad = client => {
  setInterval(() => {
    if (!global.autosendEnabled) return;

    // Lấy giờ hiện tại theo múi giờ Việt Nam
    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour12: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });

    if (currentTime === lastSentTime) return; // Tránh gửi trùng
    lastSentTime = currentTime;

    const match = audioSchedule.find(item => item.timer === currentTime);
    if (!match) return;

    const filePath = path.join(audioDir, match.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`[autosend] Không tìm thấy file: ${match.file}`);
      return;
    }

    const msg = { attachment: fs.createReadStream(filePath) };
    for (const threadID of global.data.allThreadID) {
      global.client.api.sendMessage(msg, threadID);
    }
  }, 1000);
};

module.exports.run = async ({ api, event, args }) => {
  const mode = args[0]?.toLowerCase();
  if (!['on', 'off'].includes(mode)) {
    return api.sendMessage(
      'Dùng lệnh:\n/autosend on - Bật gửi tự động\n/autosend off - Tắt gửi tự động',
      event.threadID,
      event.messageID
    );
  }

  global.autosendEnabled = mode === 'on';
  return api.sendMessage(
    `Đã ${mode === 'on' ? 'bật' : 'tắt'} chế độ gửi tự động.`,
    event.threadID,
    event.messageID
  );
};
