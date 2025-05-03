const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');

async function getThreadList(api) {
  return await api.getThreadList(50, null, ["INBOX"]);
}

function LV(x) {
  return Math.floor((Math.sqrt(1 + (4 * x) / 3) + 1) / 2);
}

function CC(n) {
  return n.toLocaleString('en-US', {
    minimumFractionDigits: 0
  });
}

function S(k) {
  return function (a, b) {
    return b[k] - a[k];
  };
}

function TX(i) {
  return `Nhóm ${i >= 1 && i <= 10 ? `đứng top: ${i} server` : "hiện nằm trong top server"}`;
}

module.exports.config = {
  name: 'boxinfo',
  version: '1.0.0',
  credits: 'DongDev',
  hasPermission: 0,
  description: 'Info Group',
  commandCategory: 'Thông Tin',
  usage: 'info box',
  cooldowns: 5
};

module.exports.run = async ({ api, event, sender }) => {
  try {
    const threadInfo = await api.getThreadInfo(event.threadID);
    const data = await getThreadList(api);
    const topGroups = data
      .filter(thread => thread.isGroup && typeof thread.messageCount === 'number')
      .map(thread => ({
        threadName: thread.name || "Không tên",
        threadID: thread.threadID,
        messageCount: thread.messageCount || 0,
      })).sort((a, b) => b.messageCount - a.messageCount);

    const seenThreadIDs = new Set();
    const uniqueTopGroups = [];
    
    topGroups.forEach(group => {
      if (!seenThreadIDs.has(group.threadID)) {
        seenThreadIDs.add(group.threadID);
        uniqueTopGroups.push(group);
      }
    });

    const userRank = uniqueTopGroups.findIndex(group => group.threadID === threadInfo.threadID) + 1;
    const isInTop10 = userRank > 0 && userRank <= 10;

    let threadMem = threadInfo.participantIDs.length;
    let gendernam = [];
    let gendernu = [];
    let nope = [];

    for (let z in threadInfo.userInfo) {
      let gioitinhone = threadInfo.userInfo[z].gender;
      if (gioitinhone === "MALE") {
        gendernam.push(z + gioitinhone);
      } else if (gioitinhone === "FEMALE") {
        gendernu.push(gioitinhone);
      } else {
        nope.push(threadInfo.userInfo[z].name);
      }
    }

    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    let icon = threadInfo.emoji;
    let color = threadInfo.color;
    let nam = gendernam.length;
    let nu = gendernu.length;
    let qtv = threadInfo.adminIDs.length;

    const pathData = JSON.parse(await fs.promises.readFile(__dirname + '/data/thuebot.json'));
    const matchingEntry = pathData.find(entry => entry.t_id === event.threadID);
    let thuebot;
    if (matchingEntry) {
      const currentDate = moment();
      const hethan = moment(matchingEntry.time_end, 'DD/MM/YYYY');
      const daysRemaining = hethan.diff(currentDate, 'days');
      thuebot = daysRemaining <= 0
        ? "Đã hết thời hạn thuê ⚠️"
        : `Bot vẫn còn hạn thuê đến ${hethan.format('DD/MM/YYYY')} (còn lại ${daysRemaining} ngày)`;
    } else {
      thuebot = "Nhóm chưa thuê bot ❎";
    }

    api.sendMessage(`====== 𝙸𝙽𝙵𝙾𝙼𝙰𝚃𝙸𝙾𝙽 ======\n────────────────────\n➞ Tên nhóm: ${threadName || 'Không tồn tại'}\n➞ ID: ${id}\n➞ Biểu tượng: ${icon ? icon : '👍'}\n➞ Dấu lệnh hệ thống: ${global.config.PREFIX}\n➞ Mã giao diện: ${color || 'Mặc định'}\n➞ Tổng: ${threadMem} thành viên\n➞ Nam: ${nam} thành viên\n➞ Nữ: ${nu} thành viên\n➞ Quản trị viên: ${qtv}\n────────────────────\n➞ Tình trạng thuê bot: ${thuebot}\n➞ ${TX(isInTop10 ? userRank : null)} với ${CC(threadInfo.messageCount)} tin nhắn\n────────────────────\nThả icon "👍" vào tin nhắn bot nếu muốn xem sơ đồ tương tác giữa các nhóm!`, event.threadID, (err, info) => {
      global.client.handleReaction.push({
        name: this.config.name, 
        messageID: info.messageID,
        author: event.senderID,
      });
    }, event.messageID);
  } catch (error) {
    console.error(error);
  }
};

module.exports.handleReaction = async ({ event, api, handleReaction }) => {
  try {
    const axios = require("axios");
    const { createReadStream, unlinkSync, writeFileSync } = require("fs-extra");
    const { threadID, messageID, userID } = event;

    if (event.userID != handleReaction.author) return;
    if (event.reaction != "👍") return; 

    const data = await api.getThreadInfo(event.threadID);
    const KMath = (data) => data.reduce((a, b) => a + b, 0);
    const inbox = await api.getThreadList(100, null, ['INBOX']);
    
    let xx = [...inbox].filter(group => group.isSubscribed && group.isGroup);
    let kho = [], search = [], count = [];

    for (let n of xx) {
      let threadInfo = n.name;
      let threadye = n.messageCount;
      kho.push({"name": threadInfo, "exp": (typeof threadye === "undefined") ? 0 : threadye});
    }

    kho.sort((a, b) => b.exp - a.exp);

    for (let num = 0; num < 7; num++) {
      search.push("'" + kho[num].name + "'");
      count.push(kho[num].exp);
    }

    const path = __dirname + `/cache/chart.png`;
    const full = KMath(count);
    const url = `https://quickchart.io/chart?c={type:'doughnut',data:{labels:[${encodeURIComponent(search)}],datasets:[{label:'${encodeURIComponent('Tương Tác')}',data:[${encodeURIComponent(count)}]}]},options:{plugins:{doughnutlabel:{labels:[{text:'${full}',font:{size:26}},{text:'${encodeURIComponent('Tổng')}'}]}}}}`;
    api.unsendMessage(handleReaction.messageID);

    const { data: stream } = await axios.get(url, { method: 'GET', responseType: 'arraybuffer' });
    writeFileSync(path, Buffer.from(stream, 'utf-8'));

    api.sendMessage({ body: '', attachment: createReadStream(path) }, event.threadID, event.messageID);
    } catch (error) {
  }
};
