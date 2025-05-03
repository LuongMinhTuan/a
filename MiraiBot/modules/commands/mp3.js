module.exports.config = {
 name: "mp3",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "DongDev",
 description: "Nghe Nhạc",
 commandCategory: "Công Cụ",
 usages: "upt",
 cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, Users, Threads }) => {
 const axios = require('axios');
 const moment = require("moment-timezone");
 const timeStart = Date.now();
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - D/MM/YYYY");
 var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
 if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
 if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
 if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
 if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
 if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
 if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
 if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
 const res = await axios.get(`${urlAPI}/text/thinh?apikey=${apiKey}`);
var thinh = res.data.data;
 // if (!event.body) return;
 var { threadID, messageID } = event;
 if (event.body.indexOf("mp3")==0 ||
event.body.indexOf("Mp3")==0 || event.body.indexOf("nhac")==0 || event.body.indexOf("nhạc")==0) {
 const time = process.uptime(),
	 	hours = Math.floor(time / (60 * 60)),
		 minutes = Math.floor((time % (60 * 60)) / 60),
		 seconds = Math.floor(time % 60);
 api.sendMessage(`🎶▭▭▭ [ 𝗔𝗨𝗧𝗢 𝗠𝗨𝗦𝗜𝗖 ] ▭▭▭🎶\n━━━━━━━━━━━━━━━━━━━\n[🍒] → 𝗖𝗵𝘂́𝗰 𝗰𝗮̣̂𝘂 𝗻𝗴𝗵𝗲 𝗻𝗵𝗮̣𝗰 𝘃𝘂𝗶 𝘃𝗲̉\n[💬] → 𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n[⏳] →⁠ 𝗕𝗼𝘁 𝗢𝗻𝗹𝗶𝗻𝗲: ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲\n[⚜️] →⁠ 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝐠𝐢𝐚̂𝐲\n[⏰] →⁠ 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio} ${thu}\n[🕊️] → 𝗨𝗽𝗱𝗮𝘁𝗲 𝗯𝘆: 𝗣𝗵𝗮̣𝗺 𝗠𝗶𝗻𝗵 Đ𝗼̂̀𝗻𝗴`,event.threadID, event.messageID);
 }
};

module.exports.run = async ({ api, event, Users, Threads }) => {
 const axios = require('axios');
 const moment = require("moment-timezone");
 const timeStart = Date.now();
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - D/MM/YYYY");
 var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
 if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
 if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
 if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
 if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
 if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
 if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
 if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
 const res = await axios.get(`${urlAPI}/text/thinh?apikey=${apiKey}`);
var thinh = res.data.data;
 // if (!event.body) return;
 var { threadID, messageID } = event;
 const time = process.uptime(),
	 	hours = Math.floor(time / (60 * 60)),
		 minutes = Math.floor((time % (60 * 60)) / 60),
		 seconds = Math.floor(time % 60);
 api.sendMessage({body:`🎶▭▭▭ [ 𝗔𝗨𝗧𝗢 𝗠𝗨𝗦𝗜𝗖 ] ▭▭▭🎶\n━━━━━━━━━━━━━━━━━━━\n[🍒] → 𝗖𝗵𝘂́𝗰 𝗰𝗮̣̂𝘂 𝗻𝗴𝗵𝗲 𝗻𝗵𝗮̣𝗰 𝘃𝘂𝗶 𝘃𝗲̉\n[💬] → 𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n[⏳] →⁠ 𝗕𝗼𝘁 𝗢𝗻𝗹𝗶𝗻𝗲: ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲\n[⚜️] →⁠ 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝐠𝐢𝐚̂𝐲\n[⏰] →⁠ 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio} ${thu}\n[🕊️] → 𝗨𝗽𝗱𝗮𝘁𝗲 𝗯𝘆: 𝗣𝗵𝗮̣𝗺 𝗠𝗶𝗻𝗵 Đ𝗼̂̀𝗻𝗴`, attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"](`${urlAPI}/images/mp3?apikey=${apiKey}`)).data.data,
			method: "GET",
			responseType: "stream"
		})).data}, event.threadID, event.messageID);
};