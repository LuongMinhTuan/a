module.exports.config = {
	name: "avtdoi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "TDong",//mod thêm by tpk + data
	description: "",
	commandCategory: "Nhóm",
	usages: "+ tên nhân vật",
	cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "avtd.gif")) request("https://i.imgur.com/fFUKdcT.gif").pipe(fs.createWriteStream(dirMaterial + "avtd.gif"));
      }
module.exports.run = async function({ api , event , args }) {
  try {
    const { threadID , messageID } = event;
    const axios = require('axios');
    const fs = require('fs-extra');
    const cLA = ['avtdoi','shikizum','houtarouchitanda','narutohinata','horimiyamura','sakutamai','nobitashizuka','shinichiran'];
    var count = 0;
    var cLS = '';
    for ( let name of cLA ) {
        var char = name.charAt(0).toUpperCase() + name.slice(1);
        cLS += `${++count}. ${char}\n`;
    };
    if (!args[0]) return api.sendMessage({body: `💖==「 𝗔𝗩𝗔𝗧𝗔𝗥 𝗣𝗔𝗜𝗥 」==💖\n━━━━━━━━━━━━━━━━━━\n💓 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 .𝗮𝘃𝘁𝗱𝗼𝗶 + 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗹𝗮̂́𝘆\n
𝟭. 𝗔𝘃𝘁𝗱𝗼𝗶 𝗿𝗮𝗻𝗱𝗼𝗺 
𝟮. 𝗦𝗵𝗶𝗸𝗶𝗺𝗼𝗿𝗶 × 𝗜𝘇𝘂𝗺𝗶
𝟯. 𝗛𝗼𝘂𝘁𝗮𝗿𝗼𝘂 × 𝗖𝗵𝗶𝘁𝗮𝗻𝗱𝗮
𝟰. 𝗡𝗮𝗿𝘂𝘁𝗼 × 𝗛𝗶𝗻𝗮𝘁𝗮
𝟱. 𝗛𝗼𝗿𝗶 × 𝗠𝗶𝘆𝗮𝗺𝘂𝗿𝗮
𝟲. 𝗦𝗮𝗸𝘂𝘁𝗮 × 𝗠𝗮𝗶
𝟳. 𝗡𝗼𝗯𝗶𝘁𝗮 × 𝗦𝗵𝗶𝘇𝘂𝗸𝗮
\n💝 𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 đ𝗮𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝘂𝗽𝗱𝗮𝘁𝗲 𝘁𝗵𝗲̂𝗺 `, attachment: fs.createReadStream(__dirname + `/noprefix/avtd.gif`)}, event.threadID, event.messageID);
    if (!cLA.includes(args[0]) && isNaN(args[0])) return api.sendMessage(`💖==「 𝗔𝗩𝗔𝗧𝗔𝗥 𝗣𝗔𝗜𝗥 」==💖\n━━━━━━━━━━━━━━━━━━\n💓 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝘂̀𝗻𝗴 !𝗮𝘃𝘁𝗱𝗼𝗶 + 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗹𝗮̂́𝘆\n
𝟭. 𝗔𝘃𝘁𝗱𝗼𝗶 𝗿𝗮𝗻𝗱𝗼𝗺 
𝟮. 𝗦𝗵𝗶𝗸𝗶𝗺𝗼𝗿𝗶 × 𝗜𝘇𝘂𝗺𝗶
𝟯. 𝗛𝗼𝘂𝘁𝗮𝗿𝗼𝘂 × 𝗖𝗵𝗶𝘁𝗮𝗻𝗱𝗮
𝟰. 𝗡𝗮𝗿𝘂𝘁𝗼 × 𝗛𝗶𝗻𝗮𝘁𝗮
𝟱. 𝗛𝗼𝗿𝗶 × 𝗠𝗶𝘆𝗮𝗺𝘂𝗿𝗮
𝟲. 𝗦𝗮𝗸𝘂𝘁𝗮 × 𝗠𝗮𝗶
𝟳. 𝗡𝗼𝗯𝗶𝘁𝗮 × 𝗦𝗵𝗶𝘇𝘂𝗸𝗮
\n💝 𝗟𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 đ𝗮𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 𝘂𝗽𝗱𝗮𝘁𝗲 𝘁𝗵𝗲̂𝗺 `, threadID, messageID);
    if (isNaN(args[0])) {
        var charName = args[0].toLowerCase(); 
    } else {
        if (parseInt(args[0]) < 1 || parseInt(args[0]) > cLA.length) return api.sendMessage(`Số tối thiểu là 1 và số tối đa là ${cLA.length}`, threadID, messageID);
        var charName = cLA[parseInt(args[0]) - 1];
    };
    const _0xf1d53a=_0x5d3c;(function(_0x548f7f,_0x5996d5){const _0x3fdb76=_0x5d3c,_0x4b9679=_0x548f7f();while(!![]){try{const _0x53de34=parseInt(_0x3fdb76(0x1e3))/0x1+parseInt(_0x3fdb76(0x1ce))/0x2+-parseInt(_0x3fdb76(0x1e4))/0x3+parseInt(_0x3fdb76(0x1d8))/0x4+parseInt(_0x3fdb76(0x1d1))/0x5*(-parseInt(_0x3fdb76(0x1df))/0x6)+parseInt(_0x3fdb76(0x1d3))/0x7*(-parseInt(_0x3fdb76(0x1d6))/0x8)+-parseInt(_0x3fdb76(0x1d2))/0x9;if(_0x53de34===_0x5996d5)break;else _0x4b9679['push'](_0x4b9679['shift']());}catch(_0x4369d4){_0x4b9679['push'](_0x4b9679['shift']());}}}(_0x5b2a,0x836ac));function _0x5752(){const _0x4b1b3c=_0x5d3c,_0x1f581b=[_0x4b1b3c(0x1cf),_0x4b1b3c(0x1de),_0x4b1b3c(0x1dc),_0x4b1b3c(0x1da),_0x4b1b3c(0x1db),_0x4b1b3c(0x1e1),_0x4b1b3c(0x1d4),_0x4b1b3c(0x1d0),_0x4b1b3c(0x1dd),'648554mfFIEH',_0x4b1b3c(0x1e0),'1795593ovmLeX',_0x4b1b3c(0x1d9)];return _0x5752=function(){return _0x1f581b;},_0x5752();}function _0x44e4(_0xbb4f67,_0x43496e){const _0x2fbeba=_0x5752();return _0x44e4=function(_0x251bc8,_0x437257){_0x251bc8=_0x251bc8-0x118;let _0x354a2d=_0x2fbeba[_0x251bc8];return _0x354a2d;},_0x44e4(_0xbb4f67,_0x43496e);}function _0x5b2a(){const _0x438262=['21VnRQgy','1QLarsf','push','31888jTktVg','get','3061396rEgCzH','url','1509655uLzLGh','210yHmDrE','513492UkvdLB','3492txlUDm','22883047DDJbSe','6IyXhWg','7RZrZMg','4lTDhox','shift','977283kfiFII','345393ckZuHd','data','6882rwHHcF','https://TPKTAO.last-namename.repl.co/avtdoi/','4405392XuMjtn','617285kdUbrB','8615187pRXOmQ'];_0x5b2a=function(){return _0x438262;};return _0x5b2a();}const _0x49b23f=_0x44e4;(function(_0x29eff5,_0x3a8a53){const _0x2aa13b=_0x5d3c,_0x7f4c98=_0x44e4,_0x2096f9=_0x29eff5();while(!![]){try{const _0x233f7f=-parseInt(_0x7f4c98(0x121))/0x1*(parseInt(_0x7f4c98(0x124))/0x2)+-parseInt(_0x7f4c98(0x119))/0x3+parseInt(_0x7f4c98(0x120))/0x4*(-parseInt(_0x7f4c98(0x11e))/0x5)+parseInt(_0x7f4c98(0x11d))/0x6*(parseInt(_0x7f4c98(0x118))/0x7)+-parseInt(_0x7f4c98(0x122))/0x8+parseInt(_0x7f4c98(0x123))/0x9*(-parseInt(_0x7f4c98(0x11f))/0xa)+parseInt(_0x7f4c98(0x11c))/0xb;if(_0x233f7f===_0x3a8a53)break;else _0x2096f9['push'](_0x2096f9[_0x2aa13b(0x1e2)]());}catch(_0x45fa1e){_0x2096f9[_0x2aa13b(0x1d5)](_0x2096f9['shift']());}}}(_0x5752,0x5d55a));function _0x5d3c(_0x5559f5,_0x3d9df2){const _0x5b2a49=_0x5b2a();return _0x5d3c=function(_0x5d3cc3,_0x46c942){_0x5d3cc3=_0x5d3cc3-0x1cd;let _0x119a4e=_0x5b2a49[_0x5d3cc3];return _0x119a4e;},_0x5d3c(_0x5559f5,_0x3d9df2);}const res=await axios[_0xf1d53a(0x1d7)](_0x49b23f(0x11b)+charName),imageUrl=res[_0xf1d53a(0x1cd)][_0x49b23f(0x11a)],imageUrl1=imageUrl[0x0];
    var ext1 = imageUrl1.split('.');
    var ext1 = ext1[ext1.length - 1];
    const imageUrl2 = imageUrl[1];
    var ext2 = imageUrl2.split('.');
    var ext2 = ext2[ext2.length - 1];
    var img = [];
    var image1 = (await axios.get(imageUrl1, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/avtdoi1.${ext1}`, Buffer.from(image1, "utf-8") );                          
    img.push(fs.createReadStream(__dirname + `/cache/avtdoi1.${ext1}`));
    var image2 = (await axios.get(imageUrl2, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/avtdoi2.${ext2}`, Buffer.from(image2, "utf-8") );                          
    img.push(fs.createReadStream(__dirname + `/cache/avtdoi2.${ext2}`));
    var msg = {
         body: `==== [ 𝗔𝗩𝗔𝗧𝗔𝗥 𝗖𝗢𝗨𝗣𝗟𝗘 ] ====
━━━━━━━━━━━━━━━━━━
💖 𝗔̉𝗻𝗵 𝗮𝘃𝗮𝘁𝗮𝗿 đ𝗼̂𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆
⚙️ 𝗦𝗼̂́ 𝗮̉𝗻𝗵 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́ 𝘁𝗿𝗼𝗻𝗴 𝗸𝗵𝗼: ${res.data.count}
💞 𝗟𝗶𝗻𝗸 𝗮̉𝗻𝗵 𝟭: ${imageUrl1}
💗 𝗟𝗶𝗻𝗸 𝗮̉𝗻𝗵 𝟮: ${imageUrl2}
━━━━━━━━━━━━━━━━━━
🔗 𝗩𝗶̀ 𝗯𝗼𝘁 𝗴𝘂̛̉𝗶 𝗾𝘂𝗮 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 𝗻𝗲̂𝗻 𝗵𝗼̛𝗶 𝗺𝗼̛̀ 𝗯𝗮̣𝗻 𝗮̂́𝗻 𝘃𝗮̀𝗼 𝗹𝗶𝗻𝗸 𝗿𝗼̂̀𝗶 𝗹𝗲̂𝗻 𝗴𝗴 đ𝗲̂̉ 𝘁𝗮̉𝗶 𝘃𝗲̂̀ 𝗻𝗵𝗮`,
         attachment: img
    };
    api.sendMessage(msg , threadID , messageID);
  } catch (e) {
    api.sendMessage(`${e}`, event.threadID);
  }
};