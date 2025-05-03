const fs = require('fs');
const path = require('path');

const statusDir = path.join(__dirname, 'data');
const statusFile = path.join(statusDir, 'rankup.json');

// Đảm bảo thư mục tồn tại
if (!fs.existsSync(statusDir)) {
  fs.mkdirSync(statusDir, { recursive: true });
}

module.exports.config = {
  name: "rankup",
  version: "1.9.1",
  hasPermssion: 1,
  credits: "⚡️ - sửa bởi GPT",
  description: "Đếm kinh nghiệm, thông báo cấp độ, bật/tắt tính năng và tặng thưởng",
  commandCategory: "Hệ Thống",
  cooldowns: 1
};

function getStatus() {
  try {
    if (!fs.existsSync(statusFile)) {
      const defaultStatus = { rankupEnabled: true };
      fs.writeFileSync(statusFile, JSON.stringify(defaultStatus, null, 2));
      return defaultStatus;
    }
    const rawData = fs.readFileSync(statusFile);
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error reading rankup status:", error);
    fs.writeFileSync(statusFile, JSON.stringify({ rankupEnabled: true }, null, 2));
    return { rankupEnabled: true };
  }
}

function setStatus(status) {
  try {
    fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
  } catch (error) {
    console.error("Error writing rankup status:", error);
  }
}

function calculateLevel(exp) {
  return Math.floor(Math.sqrt(exp));
}

const levelRanges = [
  { maxExp: 10, rank: "Phàm Nhân", icon: "👣" },
  { maxExp: 100, rank: "Luyện Khí", icon: "🔥" },
  { maxExp: 200, rank: "Trúc Cơ", icon: "🌱" },
  { maxExp: 400, rank: "Kim Đan", icon: "💊" },
  { maxExp: 800, rank: "Nguyên Anh", icon: "🧘" },
  { maxExp: 1200, rank: "Xuất Khiếu", icon: "🌌" },
  { maxExp: 1800, rank: "Luyện Hư", icon: "⚡️" },
  { maxExp: 2500, rank: "Hợp Thể", icon: "🌀" },
  { maxExp: 3200, rank: "Hóa Thần", icon: "☄️" },
  { maxExp: 4000, rank: "Độ Kiếp", icon: "⛈️" },
  { maxExp: 4800, rank: "Chân Tiên", icon: "👼" },
  { maxExp: 5800, rank: "Đại Thừa", icon: "🛕" },
  { maxExp: 7000, rank: "Kim Tiên", icon: "👑" },
  { maxExp: Infinity, rank: "Tiên Đế", icon: "✨" }
];

function getRankInfo(exp) {
  for (let i = 0; i < levelRanges.length; i++) {
    if (exp <= levelRanges[i].maxExp) {
      const prevExp = i === 0 ? 0 : levelRanges[i - 1].maxExp + 1;
      const nextExp = levelRanges[i].maxExp;
      const progress = ((exp - prevExp) / (nextExp - prevExp)) * 100;
      return {
        rank: levelRanges[i].rank,
        icon: levelRanges[i].icon,
        progress: Math.round(progress),
      };
    }
  }
}

module.exports.handleEvent = async function({ api, event, Currencies, Users }) {
  const { rankupEnabled } = getStatus();
  if (!rankupEnabled) return;

  const { threadID, senderID } = event;
  let userData = await Currencies.getData(senderID);
  let exp = userData.exp || 0;
  const oldLevel = calculateLevel(exp);

  exp += 1;
  const newLevel = calculateLevel(exp);

  userData.exp = exp;
  await Currencies.setData(senderID, userData);

  if (isNaN(exp) || newLevel <= oldLevel || newLevel === 1) return;

  // Tặng thưởng khi thăng cấp
  const reward = newLevel * 100;
  await Currencies.increaseMoney(senderID, reward);

  const userInfo = await Users.getData(senderID);
  const name = userInfo.name || "Người dùng";
  const { rank, icon, progress } = getRankInfo(exp);

  const msg =
    `⚔️ [Thăng Cấp Tu Luyện] ⚔️\n` +
    `👤 Người tu luyện: ${name}\n` +
    `📈 Tu vi hiện tại: ${icon} ${rank} (Cấp ${newLevel})\n` +
    `💰 Phần thưởng: +${reward}$\n` +
    `🔮 Tiến độ tới cấp tiếp theo: ${progress}%`;

  api.sendMessage(msg, threadID, (err, info) => {
    if (err) return;
    setTimeout(() => {
      api.unsendMessage(info.messageID);
    }, 25000);
  });
};

module.exports.run = async function({ api, event, args, Currencies, Users }) {
  const { threadID, messageID, senderID } = event;

  if (!args[0]) {
    return api.sendMessage(
      "Vui lòng dùng đúng cú pháp:\n- `rankup on` để bật\n- `rankup off` để tắt\n- `rankup me` để xem cấp độ của bạn.\n- `rankup @tag` để xem cấp độ người khác.",
      threadID,
      messageID
    );
  }

  const input = args[0].toLowerCase();

  if (input === "on") {
    const current = getStatus();
    if (current.rankupEnabled)
      return api.sendMessage("✅ Tính năng rankup đã được bật trước đó.", threadID, messageID);
    setStatus({ rankupEnabled: true });
    return api.sendMessage("✅ Đã bật tính năng tăng tu vi luyện khí.", threadID, messageID);
  }

  if (input === "off") {
    const current = getStatus();
    if (!current.rankupEnabled)
      return api.sendMessage("⛔ Tính năng rankup đã được tắt trước đó.", threadID, messageID);
    setStatus({ rankupEnabled: false });
    return api.sendMessage("⛔ Đã tắt tính năng tăng tu vi luyện khí.", threadID, messageID);
  }

  // Xem cấp của người khác nếu có tag
  if (event.mentions && Object.keys(event.mentions).length > 0) {
    const targetID = Object.keys(event.mentions)[0];
    const targetName = event.mentions[targetID].replace(/@/g, '');
    const userData = await Currencies.getData(targetID);
    const exp = userData.exp || 0;
    const { rank, icon, progress } = getRankInfo(exp);
    const level = calculateLevel(exp);

    return api.sendMessage(
      `⚔️ [Thông Tin Tu Luyện] ⚔️\n` +
      `👤 Người tu luyện: ${targetName}\n` +
      `📊 Kinh nghiệm: ${exp}\n` +
      `📈 Tu vi hiện tại: ${icon} ${rank} (Cấp ${level})\n` +
      `🔮 Tiến độ tới cấp tiếp theo: ${progress}%`,
      threadID,
      messageID
    );
  }

  // Xem cấp của bản thân
  if (input === "me" || input === "check") {
    const userData = await Currencies.getData(senderID);
    const exp = userData.exp || 0;
    const { rank, icon, progress } = getRankInfo(exp);
    const userInfo = await Users.getData(senderID);
    const name = userInfo.name || "Người dùng";
    const level = calculateLevel(exp);

    return api.sendMessage(
      `⚔️ [Thông Tin Tu Luyện] ⚔️\n` +
      `👤 Người tu luyện: ${name}\n` +
      `📊 Kinh nghiệm: ${exp}\n` +
      `📈 Tu vi hiện tại: ${icon} ${rank} (Cấp ${level})\n` +
      `🔮 Tiến độ tới cấp tiếp theo: ${progress}%`,
      threadID,
      messageID
    );
  }

  return api.sendMessage("Tùy chọn không hợp lệ. Dùng `rankup on`, `off`, `me` hoặc `@tag`.", threadID, messageID);
};
