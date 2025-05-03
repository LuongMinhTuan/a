
module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "R",
  description: "Thông báo Bot hoặc người dùng vào nhóm có random gif/ảnh/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};
  const fs = require("fs");
  const axios = require('axios');
  const request = require('request');
  const moment = require("moment-timezone");
module.exports.run = async function ({ api, event, Users, Threads, handleReply }) {
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY | HH:mm:ss");
  const timeStart = Date.now();
  const t = process.uptime(); 
  var h = Math.floor(t / (60 * 60));
  var p = Math.floor((t % (60 * 60)) / 60);
  var s = Math.floor(t % 60);
   var fullYear = global.client.getTime("fullYear");
   var getHours = await global.client.getTime("hours");
   var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "buổi sáng sớm" : getHours < 12 ? "buổi trưa" : getHours < 17 ? "buổi chiều" : getHours < 23 ? "buổi tối" : "đêm khuya"}`
    const { threadID } = event;
    let threadInfo = await api.getThreadInfo(event.threadID);
    var memLength = threadInfo.participantIDs.length;
    let threadMem = threadInfo.participantIDs.length;
    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    };
    var nam = gendernam.length;
    var nu = gendernu.length;
    let qtv = threadInfo.adminIDs.length;
    let icon = threadInfo.emoji;
    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    var listad_msg = '';
    var adminIDs = threadInfo.adminIDs;
  for (let get of adminIDs) {
    const infoUsers = await Users.getInfo(get.id);
    listad_msg += `• ${infoUsers.name},\n`
}
  const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
   const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["join"] == "undefined", thread["join"] == false) return;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`『 ${prefix} 』 ⪼ ${(!global.config.BOTNAME) ? "𝙱𝙾𝚃 𝙳𝚘𝚗𝚐𝙳𝚎𝚟👾" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());

    api.sendMessage("🔄 Đang kết nối vui lòng chờ...", threadID, async (err, info) => {
  if (!err) {
    await new Promise(resolve => setTimeout(resolve, 9 * 1000));
    await api.unsendMessage(info.messageID);
  }
});
setTimeout(() => {
  api.sendMessage("✅ Kết nối tới nhóm thành công", threadID, async (err, info) => {
  if (!err) {
    await new Promise(resolve => setTimeout(resolve, 30 * 1000));
    await api.unsendMessage(info.messageID);
  }
});
}, 10 * 1000);

setTimeout(async () => {
  const message = `𝐋𝐨𝐚𝐝 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐓𝐨à𝐧 𝐁𝐨̣̂ 𝐃𝐚𝐭𝐚 𝐂𝐡𝐨 𝐍𝐡𝐨́𝐦\n\n𝐓𝐞̂𝐧 𝐧𝐡𝐨́𝐦: ${threadName},\n𝐔𝐈𝐃 𝐧𝐡𝐨́𝐦: ${id},\n𝐄𝐦𝐨𝐣𝐢 𝐧𝐡𝐨́𝐦: ${icon || '👍'},\n𝐓𝐨̂̉𝐧𝐠 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧: ${threadMem},\n𝐓𝐨̂̉𝐧𝐠 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐧𝐚𝐦: ${nam},\n𝐓𝐨̂̉𝐧𝐠 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐧𝐮̛̃: ${nu},\n𝐓𝐨̂̉𝐧𝐠 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧: ${qtv},\n𝐃𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐧𝐡𝐨́𝐦:\n${listad_msg}\n────────────────────\n⏰ 𝐁𝐚̂y 𝐠𝐢𝐨̛̀ 𝐥𝐚̀: ${timeNow}\n⚠️ 𝐓𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐬𝐞̃ 𝐭𝐮̛̣ đ𝐨̣̂ng 𝐠𝐨̛̃ 𝐬𝐚𝐮 𝟔𝟎 𝐠𝐢𝐚̂𝐲`;

  const sendmsg = await api.sendMessage(message, threadID);

  setTimeout(async () => {
    await api.unsendMessage(sendmsg.messageID);
  }, 60 * 1000);
}, 12 * 1000);
  
} else {
    try {
      // Lấy thông tin nhóm, bao gồm tên nhóm, danh sách thành viên và ảnh nhóm (imageSrc)
      let { threadName, participantIDs, imageSrc } = await api.getThreadInfo(threadID);
          const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY | HH:mm:ss");
	const threadData = global.data.threadData.get(parseInt(threadID)) || {};

      let mentions = [],
          nameArray = [],
          memLength = [],
          i = 0;

      // Duyệt qua các thành viên mới được thêm vào
      for (let participant of event.logMessageData.addedParticipants) {
        const userName = participant.fullName;
        const userId = participant.userFbId;
        nameArray.push(userName);
        mentions.push({ tag: userName, id: userId });
        memLength.push(participantIDs.length - i++);
      }
      memLength.sort((a, b) => a - b);

      // Xây dựng tin nhắn chào mừng
      let msg = (typeof threadData.customJoin === "undefined")
        ? "-⪼ Xin chào {name}\n-⪼ Chào mừng đến với {threadName}\n-⪼ {type} là thành viên thứ {soThanhVien} của nhóm\n-⪼ Được thêm bởi {author}\n-⪼ Time: {time}"
        : threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author);
      msg = msg
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'các bạn' : 'bạn')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
		.replace(/\{author}/g, nameAuthor)
        .replace(/\{threadName}/g, threadName)
	    .replace(/\{time}/g, time);

      // Nếu có ảnh nhóm, tải về và gửi kèm theo tin nhắn
      if (imageSrc) {
        try {
          let response = await axios.get(imageSrc, { responseType: "stream" });
          return api.sendMessage({ body: msg, attachment: response.data, mentions }, threadID);
        } catch (err) {
          console.error("Lỗi khi tải ảnh nhóm:", err);
          return api.sendMessage({ body: msg, mentions }, threadID);
        }
      }
      else {
        return api.sendMessage({ body: msg, mentions }, threadID);
      }
    }
    catch (e) {
      console.error(e);
    }
  }
}
