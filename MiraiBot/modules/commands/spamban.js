module.exports.config = {
	name: "spamban",
	version: "1.0.0",
	hasPermssion: 0, 
	credits: "NTKhang",//Mod by H.Thanh
	description: "Tự động ban người dùng nếu spam bot ( random ảnh )",
	commandCategory: "Hệ Thống",
	usages: "Tự động bị ban",
	cooldowns: 5
};

module.exports.run = ({api, event}) => {
  return api.sendMessage("📝 Bạn sẽ bị ban nếu spam bot nhiều lần", event.threadID, event.messageID);
};
module.exports.handleEvent = async ({ Users, api, event})=> {
	const fs = require("fs-extra");
	const moment = require("moment-timezone"); 
  let { senderID, messageID, threadID } = event;
  const threadInfo = await api.getThreadInfo(event.threadID)
    var threadName = threadInfo.threadName||"Tên không tồn tại";
  var time = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
  const so_lan_spam = 5; // số lần spam, vượt quá sẽ bị ban
  const thoi_gian_spam = 60000; // 60000 millisecond (10 phút)
  const unbanAfter = 6000000; // 600000 millisecond (1 tiếng)
  if (!global.client.autoban) global.client.autoban = {};
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = threadSetting.PREFIX || global.config.PREFIX;
	if (!event.body || event.body.indexOf(prefix) != 0) return; 
	let dataUser = await Users.getData(senderID) || {};
	let data = dataUser.data || {};
	
	if ((global.client.autoban[senderID].timeStart + thoi_gian_spam) <= Date.now()) {
	  global.client.autoban[senderID] = {
	    timeStart: Date.now(),
	    number: 0
	  }
	}
	else {
	  global.client.autoban[senderID].number++;
	  if (global.client.autoban[senderID].number >= so_lan_spam) {
	    const moment = require("moment-timezone");
			if (data && data.banned == true) return;
			data.banned = true;
			data.reason = ` Spam bot ${so_lan_spam} lần/${thoi_gian_spam / (1000 * 60)} phút`;
			data.autoban = {
			  timeStart: Date.now(),
			  unbanAfter
			};
			data.dateAdded = time;
			await Users.setData(senderID, { data });
			global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
			global.client.autoban[senderID] = {
	      timeStart: Date.now(),
	      number: 0
	    };
  	api.sendMessage(`👤 Name: ${dataUser.name}\n🔰 Uid: ${senderID}\n⛔ Bị cấm sử dụng bot ${unbanAfter / (1000 * 60)} phút\n📝 Lý do: spam bot ${so_lan_spam} lần/${thoi_gian_spam / (1000 * 60)} phút\n⚠️ Vui lòng báo cáo lại với Admin\n🔰 Bot sẽ tự động gỡ ban sau ${unbanAfter / (1000 * 60)} phút\n⏰ Time: ${time}\n──────────────────\n✏️ Gửi tin nhắn tới các admin thành công`, threadID, () => {
  		    setTimeout(async function() {
  		      delete data.autoban;
      	    data.banned = false;
      			data.reason = null;
      			data.dateAdded = null;
      			await Users.setData(senderID, { data });
global.data.userBanned.delete(senderID);
  	api.sendMessage(`🔰 Đã auto gỡ ban thành công cho: ${dataUser.name}\n⏰ Bị ban vào lúc: ${time}\n📝 Với lý do: Spam Bot\n──────────────────\n🤬 Bỏ cái tật spam đi nhé, mãi iuuu`, threadID);
 			  }, unbanAfter);
  });
        let allAdmin = '100077366272669';
        for (let idAdmin of allAdmin) {
  		  api.sendMessage(`👤 Name: ${dataUser.name}\n🔰 Uid: ${senderID}\n⛔ Đã spam bot: ${so_lan_spam} lần/${thoi_gian_spam / (1000 * 60)} phút\n🎟️ Tại nhóm: ${threadName}\n✏️ Tid: ${threadID}\n📌 Bot sẽ tự động gỡ ban cho người dùng sau ${unbanAfter / (1000 * 60)} phút\n──────────────────\n⏰ Vào lúc: ${time}` ,idAdmin);
		  };
	  }
	}
};