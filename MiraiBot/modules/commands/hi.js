const fs = require("fs");
const moment = require("moment-timezone");
const path = require("path");

const KEY = [
 "hello", "hi", "hai", "chào", "chao", "hí", "híí", "hì", "hìì", "lô", "hii", "helo", "hê nhô"
];

let filePath;

module.exports.config = {
 name: "hi",
 version: "1.0.0",
 hasPermission: 0,
 credits: "",
 description: "Gửi lời chào bằng file âm thanh",
 commandCategory: "Hệ Thống",
 usages: "[text]",
 cooldowns: 0,
 images: [],
};

module.exports.onLoad = () => {
 filePath = path.join(__dirname, "data", "hi.json");
 if (!fs.existsSync(filePath)) {
 fs.writeFileSync(filePath, "{}");
 }
};

module.exports.handleEvent = async function({ event, api, Users }) {
 let { threadID, messageID } = event;

 const jsonData = fs.readFileSync(filePath, "utf-8");
 const savedData = JSON.parse(jsonData);

 if (typeof savedData[threadID]?.hi === "undefined" || savedData[threadID].hi === true) {
 if (event.body && KEY.includes(event.body.toLowerCase())) {
 let hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');

 let session = (hours > 0 && hours <= 400 ? "sang_tinh_mo" :
 hours > 400 && hours <= 700 ? "sang_som" :
 hours > 700 && hours <= 1000 ? "sang" :
 hours > 1000 && hours <= 1200 ? "trua" :
 hours > 1200 && hours <= 1700 ? "chieu" :
 hours > 1700 && hours <= 1800 ? "chieu_ta" :
 hours > 1800 && hours <= 2100 ? "toi" :
 hours > 2100 && hours <= 2400 ? "toi_muon" :
 "loi");

 let audioPath = path.join(__dirname, "noprefix", `hi.mp3`);

 if (!fs.existsSync(audioPath)) {
 api.sendMessage("⚠️ Không tìm thấy file âm thanh phù hợp!", threadID, messageID);
 return;
 }

 api.sendMessage({ attachment: fs.createReadStream(audioPath) }, threadID, messageID);
 savedData[threadID] = { hi: true };
 fs.writeFileSync(filePath, JSON.stringify(savedData));
 }
 }
};

module.exports.run = async ({ event, api }) => {
 let { threadID, messageID } = event;

 const jsonData = fs.readFileSync(filePath, "utf-8");
 const savedData = JSON.parse(jsonData);

 if (typeof savedData[threadID]?.hi === "undefined" || savedData[threadID].hi === true) {
 savedData[threadID] = { hi: false };
 fs.writeFileSync(filePath, JSON.stringify(savedData));

 api.sendMessage(`☑️ Tắt hi thành công!`, threadID, messageID);
 } else {
 savedData[threadID] = { hi: true };
 fs.writeFileSync(filePath, JSON.stringify(savedData));

 api.sendMessage(`☑️ Bật hi thành công!`, threadID, messageID);
 }
};
