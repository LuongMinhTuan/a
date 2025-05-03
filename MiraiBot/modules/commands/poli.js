module.exports.config = {
 name: "poli",
 version: "1.0.",
 hasPermssion: 0,
 credits: "jameslim",
 description: "generate image from polination",
 commandCategory: "Công Cụ",
 usages: "query",
 cooldowns: 2,
};
module.exports.run = async ({api, event, args, Users }) => {
let timeStart = Date.now();
const axios = require('axios');
const fs = require('fs-extra');
const name = await Users.getNameUser(event.senderID)
const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - DD/MM/YYYY");
 let { threadID, messageID } = event;
 let query = args.join(" ");
 if (!query) return api.sendMessage("put text/query", threadID, messageID);
let path = __dirname + `/cache/poli.png`;
 const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
 responseType: "arraybuffer",
 })).data;
 fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
 api.sendMessage({
 body: `Ảnh ${query} được Al vẽ cho ${name}\n⏰ Time: ${timeNow}\n⏳ Thời gian xử lý: ${Math.floor((Date.now() - timeStart)/1000)} giây\n📌 Hình ảnh sẽ bị xóa sau 1 giờ!`,
 attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};