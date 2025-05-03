const fs = require('fs');
const moment = require('moment-timezone');
module.exports.config = {
 name: "tagadmin",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "DongDev",
 description: "Tag!!",
 commandCategory: "Admin",
 usages: "[msg]",
 images: [],
 cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads, args }) {
 const { threadID, messageID, body } = event;
 switch (handleReply.type) {
 case "tagadmin": {
 let name = await Users.getNameUser(handleReply.author);
 api.sendMessage(`[ ADMIN FEEDBACK ]\n──────────────────\n|› 👤 Admin: ${name || "Người dùng facebook"}\n|› 🌐 Link Fb: https://www.facebook.com/profile.php?id=${event.senderID}\n|› 💬 Nội dung: ${body}\n|› ⏰ Time: ${moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY-HH:mm:ss")}\n──────────────────\n📌 Reply (phản hồi) tin nhắn gửi về admin`, handleReply.threadID, (err, info) => {
 if (err) console.log(err)
 else {
 global.client.handleReply.push({
 name: this.config.name,
 type: "reply",
 messageID: info.messageID,
 messID: messageID,
 threadID
 });
 }
 }, handleReply.messID);
 break;
 }
 case "reply": {
 let name = await Users.getNameUser(event.senderID);
 api.sendMessage(`[ USER FEEDBACK ]\n──────────────────\n|› 👤 Name: ${name || "Người dùng facebook"}\n|› 👨‍👩‍👧‍👦 Nhóm: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n|› 💬 Nội dung: ${body}\n⏰ Time: ${moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY -HH:mm:ss")}\n──────────────────\n📌 Reply (phản hồi) lại tin nhắn người tag`, handleReply.threadID, (err, info) => {
 if (err) console.log(err)
 else {
 global.client.handleReply.push({
 name: this.config.name,
 type: "tagadmin",
 messageID: info.messageID,
 messID: messageID,
 threadID
 });
 }
 }, handleReply.messID);
 break;
 }
 }
};

module.exports.handleEvent = async ({ api, event, Users, Threads, args }) => {
 const { threadID, messageID, body, mentions, senderID } = event;
 let path = __dirname + "/data/tagadmin.json";
 if (!fs.existsSync(path)) fs.writeFileSync(path, "{}");
 let data = JSON.parse(fs.readFileSync(path));
 if (!data[threadID]) data[threadID] = true;
 if (!mentions || !data[threadID]) return;
 let mentionsKey = Object.keys(mentions);
 let allAdmin = global.config.ADMINBOT + global.config.NDH;
 for (let each of mentionsKey) {
 if (each == api.getCurrentUserID()) continue;
 if (allAdmin.includes(each)) {
 let userName = await Users.getNameUser(senderID);
 let threadName = (await Threads.getInfo(threadID)).threadName;
 api.sendMessage(`[ TAG ADMIN ]\n──────────────────\n|› 👤 Người tag: ${userName}\n|› 👨‍👩‍👧‍👦 Tại nhóm: ${threadName || "Unknow"}\n|› 💬 Nội dung: ${body}\n|› ⏰ Time: ${moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY -HH:mm:ss")}\n──────────────────\n📌 Reply (phản hồi) lại tin nhắn người tag`, each, (err, info) => {
 if (err) console.log(err)
 else {
 global.client.handleReply.push({
 name: this.config.name,
 type: "tagadmin",
 messageID: info.messageID,
 messID: messageID,
 author: each,
 threadID
 });
 }
 });
 }
 }
 fs.writeFileSync(path, JSON.stringify(data, null, 4));
};

module.exports.run = async ({ api, event, args }) => {
 const { threadID } = event;
 let path = __dirname + "/data/tagadmin.json";
 if (!fs.existsSync(path)) fs.writeFileSync(path, "{}");
 let data = JSON.parse(fs.readFileSync(path));
 if (!data[threadID]) data[threadID] = true;
 if (args[0] == "off") data[threadID] = false;
 else if (args[0] == "on") data[threadID] = true;
 else return api.sendMessage(`⚠️ Vui lòng chọn on hoặc off`,event.threadID, event.messageID);
 fs.writeFileSync(path, JSON.stringify(data, null, 4));
 return api.sendMessage(`☑️ Tag Admin đã được ${data[threadID] ? "bật" : "tắt"}`, event.threadID, event.messageID);
};