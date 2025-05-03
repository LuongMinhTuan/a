const axios = require("axios");
const fs = require("fs-extra");

const API = "https://all-in-one-api-by-faheem.replit.app/api/ephoto/tatto?text=";

module.exports.config = {
 name: "tatto",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Faheem",
 description: "Tạo logo tattoo",
 commandCategory: "Công Cụ",
 usages: "rainbow (logo)",
 cooldowns: 10
};

module.exports.run = async function ({ api, event, args }) {
 try {
 let tukhoa = args.join(" ");
 if (event.type === "message_reply" && event.messageReply.attachments[0].url) {
 tukhoa = event.messageReply.attachments[0].url;
 }

 const pathsave = __dirname + "/cache/banner.png";

 api.sendMessage("🌸 Vui lòng đợi vài giây 🌸", event.threadID, event.messageID);

 const { data } = await axios.get(`${API}${encodeURI(tukhoa)}`, { responseType: "arraybuffer" });

 fs.writeFileSync(pathsave, Buffer.from(data));
 
 api.sendMessage({ body: "🌸 LOGO CỦA BẠN 🌸", attachment: fs.createReadStream(pathsave) }, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);
 } catch (error) {
 let errorMessage = "Đã xảy ra lỗi";
 if (error.response) {
 const err = JSON.parse(error.response.data.toString());
 errorMessage = `Lỗi ${err.error}: ${err.message}`;
 } else {
 errorMessage = `Lỗi không mong muốn: ${error.message}`;
 }

 api.sendMessage(errorMessage, event.threadID, event.messageID);
 }
};