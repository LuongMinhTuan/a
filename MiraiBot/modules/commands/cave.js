//---------Danh sách công việc-----------//
let caves = {
    '😆': {
    name: 'Phố Trần Duy Hưng 🎀',
    done: [
            ['{name} vừa nhận {money}$ khi buscu anh tây Over Night'],
        ]
    },
  '😁': {
    name: 'Cầu Thị Nghe 🌉',
    done: [
            ['{name} vừa nhận {money}$ khi doggy cả ngày với cậu học sinh'],
        ]
    },
  '❤️': { 
    name: 'Hồ Hoàn Kiếm 🍄', 
    done: [ 
      ['{name} vừa nhận {money}$ khi 69 tư thế với nyc'],
      ]
  },
  '👍': {
     name: 'Tịnh Thất Bồng Lai 🌴',
     done: [
            ['{name} vừa nhận {money}$ khi chịch nhau với 3 ông già'],
      ],
  },
  '😑': {
     name: 'Phố Tam Trinh 🐥',
     done: [
            ['{name} vừa nhận {money}$ khi sóc lọ cho anh công an'],
      ],
  },
  '😋': {
     name: 'Khách Sạn Y Nu 💈',
     done: [
            ['{name} vừa nhận {money}$ khi quan hệ với thanh niên dính hiv'],
      ],
  },
    // thêm tiếp công việc...
};

module.exports.config = {
    name: 'cave',
    version: '0.0.1',
    hasPermssion: 0,
    credits: 'DongDev mod từ code work của DC-Nam',
    description: 'Làm cave phiên bản pro vip',
    commandCategory: 'Game',
    usages: '[]',
    cooldowns: 3,
    images: [],
};
let _0 = x=>x < 10?'0'+x: x;
let random = (min, max)=>Math.random()*(max-min+1)+min<<0;
module.exports.run = async ({ api, event, Threads }) => {
  const axios = require('axios');
  const url = 'https://i.imgur.com/yPlwlWA.jpeg';
  const img = (await axios.get(url, { responseType: "stream"})).data
  api.sendMessage({body: `==== [ CAVE VIP PRO ] ====\n────────────────────\n\n${Object.entries(caves).map(($, i)=> `[ ${i+1} | ${$[0]} ] ${$[1].name}`).join('\n')}\n\n📌 Hãy reply (phản hồi) or thả cảm xúc STT để chọn khu vực hành nghề`, attachment: (img)}, event.threadID, (err, res) => (res.name = exports.config.name, res.event = event, global.client.handleReaction.push(res), global.client.handleReply.push(res)), event.messageID);
    }
exports.handleReaction = async o => {
    let _ = o.handleReaction;
    let uid = o.event.userID;
    let user = await o.Users.getData(uid);if (!user)return send(`Error`);
    let data = user.data;
    let send = (msg, callback) => o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);
    if  (!data)user.data = {};
    if (uid != _.event.senderID)return;
    if (typeof data.cave != undefined && data.cave>= Date.now())return (x=>send(`⏳ Bạn vừa phịch rồi, để tránh bị nát lồn hãy phịch sau: ${_0(x/1000/60<<0)} phút ${_0(x/1000%60<<0)} giây.`))(data.cave-Date.now());
    let cave = caves[o.event.reaction];
    let msg = {};
    if (!cave)return send(`❎ Khu vực hành nghề không có trong danh sách`);
    data.cave = Date.now()+(1000*60*5);
    o.Users.setData(uid, user);
    let wgm = await new Promise(async resolve => send(`🔄 Đang di chuyển đến khu vực hành nghề...`, (err, res) => resolve(res || {})));
    await new Promise(out=>setTimeout(out, 1000*3.5));
    let done = cave.done[Math.random()*cave.done.length<<0];
    let $ = random(20000, 100000);
    msg = done[0].replace(/{name}/g, user.name).replace(/{money}/g, $);
    send(msg, () => o.api.unsendMessage(wgm.messageID));
    o.Currencies.increaseMoney(uid, $);
};
exports.handleReply = async o => {
    let _ = o.handleReply;
    let uid = o.event.senderID;
    let user = await o.Users.getData(uid);if (!user)return send(`Error`);
    let data = user.data;
    let send = (msg, callback) => o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);
    if  (!data)user.data = {};
    if (uid != _.event.senderID)return;
    if (typeof data.cave != undefined && data.cave>= Date.now())return (x=>send(`⏳ Bạn vừa phịch rồi, để tránh bị nát lồn hãy phịch sau: ${_0(x/1000/60<<0)} phút ${_0(x/1000%60<<0)} giây.`))(data.cave-Date.now());
    let cave = Object.values(cave)[o.event.body-1];
    let msg = {};
    if (!cave)return send(`❎ Khu vực hành nghề không có trong danh sách`);
    data.cave = Date.now()+(1000*60*5);
    o.Users.setData(uid, user);
    let wgm = await new Promise(async resolve => send(`🔄 Đang di chuyển đến khu vực hành nghề...`, (err, res) => resolve(res || {})));
    await new Promise(out => setTimeout(out, 1000*3.5));
    let done = cave.done[Math.random()*cave.done.length<<0];
    let $ = random(20000, 100000);
    msg = done[0].replace(/{name}/g, user.name).replace(/{money}/g, $);
    send(msg, () => o.api.unsendMessage(wgm.messageID));
    o.Currencies.increaseMoney(uid, $);
};