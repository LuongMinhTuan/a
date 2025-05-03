const fs = require("fs");
const moment = require("moment-timezone");
const path = require("path");

const KEY = ["ngủ", "nnmd", "ngủ nha", "ngụ", "ngủ đây"];
let filePath;

module.exports.config = {
  name: "ngungon",
  version: "1.0.1",
  hasPermission: 0,
  credits: "Đã chỉnh sửa bởi ChatGPT",
  description: "Gửi lời chúc ngủ ngon bằng file âm thanh",
  commandCategory: "Hệ Thống",
  usages: "[text]",
  cooldowns: 0,
  images: [],
};

module.exports.onLoad = () => {
  filePath = path.join(__dirname, "data", "ngu.json");
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "{}");
  }
};

module.exports.handleEvent = async function ({ event, api, Users }) {
  const { threadID, messageID, body } = event;

  let savedData = {};
  try {
    savedData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (err) {
    fs.writeFileSync(filePath, "{}");
    savedData = {};
  }

  const isNgungonEnabled = savedData[threadID]?.ngungon !== false;

  if (body && KEY.includes(body.toLowerCase()) && isNgungonEnabled) {
    let hours = parseInt(moment.tz('Asia/Ho_Chi_Minh').format('HHmm'));

    // Chọn session theo giờ
    let session = (hours > 0 && hours <= 400) ? "sang_tinh_mo" :
                  (hours > 400 && hours <= 700) ? "sang_som" :
                  (hours > 700 && hours <= 1000) ? "sang" :
                  (hours > 1000 && hours <= 1200) ? "trua" :
                  (hours > 1200 && hours <= 1700) ? "chieu" :
                  (hours > 1700 && hours <= 1800) ? "chieu_ta" :
                  (hours > 1800 && hours <= 2100) ? "toi" :
                  (hours > 2100 && hours <= 2400) ? "toi_muon" :
                  "mac_dinh";

    // Đường dẫn file âm thanh
    let audioPath = path.join(__dirname, "noprefix", `ngungon.mp3`);

    if (!fs.existsSync(audioPath)) {
      api.sendMessage("⚠️ Không tìm thấy file âm thanh phù hợp!", threadID, messageID);
      return;
    }

    api.sendMessage({
      attachment: fs.createReadStream(audioPath)
    }, threadID, messageID);
  }
};

module.exports.run = async ({ event, api }) => {
  const { threadID, messageID } = event;

  let savedData = {};
  try {
    savedData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (err) {
    savedData = {};
  }

  if (!savedData[threadID]) savedData[threadID] = {};

  if (savedData[threadID].ngungon === false) {
    savedData[threadID].ngungon = true;
    api.sendMessage(`☑️ Bật ngủ thành công!`, threadID, messageID);
  } else {
    savedData[threadID].ngungon = false;
    api.sendMessage(`☑️ Tắt ngủ thành công!`, threadID, messageID);
  }

  fs.writeFileSync(filePath, JSON.stringify(savedData, null, 2));
};
