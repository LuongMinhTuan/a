/*
@credit ⚡️D-Jukie
@vui lòng không chỉnh sửa credit
*/
const fs = require("fs");
module.exports.config = {
    name: "boctham",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡D-Jukie", //Sang Nguyễn edit mod, Code working của diện,suhao chỉnh chữ thoai ko có rì đâu
    description: "💴𝐁𝐨̂́𝐜 𝐓𝐡𝐚̆𝐦 𝐯𝐨̛́𝐢 𝐜����́c 𝐠𝐨́𝐢 𝟏𝟎𝐤 𝟐𝟎𝐤 𝟓𝟎𝐤 𝟏𝟎𝟎𝐤 𝟐𝟎𝟎𝐤 𝟓𝟎𝟎𝐤💎",
    commandCategory: "Game",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 0 
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "baolixi1.png")) request("https://i.imgur.com/luFyD1C.jpg").pipe(fs.createWriteStream(dirMaterial + "baolixi1.png"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("🎋𝐋𝐮̛𝐨̛̣𝐭 𝐛𝐨̂́𝐜 𝐭𝐡𝐚̆𝐦 𝐜𝐮̉𝐚 𝐚𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 đ𝐨́ 𝐛𝐨̂́𝐜 𝐧𝐡𝐚́, 𝐛𝐚̣𝐧 𝐤𝐨 𝐧𝐞̂𝐧 𝐭𝐫��𝐧𝐡 𝐥𝐮̛𝐨̛̣𝐭 𝐜𝐮̉𝐚 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜", e.threadID, e.messageID)

var a = Math.floor(Math.random() * 1000) + 80; 
var b = Math.floor(Math.random() * 100) + 80; 
var c = Math.floor(Math.random() * 100) + 80; 
var x = Math.floor(Math.random() * 100) + 80; 
var y = Math.floor(Math.random() * 100) + 80; 
var f = Math.floor(Math.random() * 100) + 50;
  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("February 1, 2022 00:00:00") - Date.parse(new Date()),
            m = Math.floor( (t/1000/60) % 60 ),
            h = Math.floor( (t/(1000*60*60)) % 24 ),
            d = Math.floor( t/(1000*60*60*24) ); 
           
            switch(e.body) {
                case "1": msg = `💷𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐠𝐨́𝐢 𝟏𝟎𝐤 𝐛𝐚̣𝐧 𝐦𝐮𝐚 đ𝐚̃ 𝐦𝐨̛̉ 𝐫𝐚 𝐝𝐜  ${a}𝐊 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢 𝐚𝐧 𝐤𝐡𝐚𝐧𝐠 , 𝐯𝐚̣𝐧 𝐬𝐮̛̣ 𝐧𝐡𝐮̛ 𝐲́ 𝐧𝐞̀ <𝟑🎐\n🎀𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d} 𝐧��𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭🎋` ;
                await Currencies.increaseMoney(e.senderID, parseInt(a)); 
                break; 
                case "2": msg = `💷𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐠𝐨́𝐢 𝟐𝟎𝐤 𝐛𝐚̣𝐧 𝐦𝐮𝐚 đ𝐚̃ 𝐦𝐨̛̉ 𝐫𝐚 𝐝𝐜  ${a}𝐊 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢 𝐚𝐧 𝐤𝐡𝐚𝐧𝐠 , 𝐯𝐚̣𝐧 𝐬𝐮̛̣ 𝐧𝐡𝐮̛ 𝐲́ 𝐧𝐞̀ <𝟑🎐\n🎀𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d} 𝐧𝐠𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(x));  
                await Currencies.increaseMoney(e.senderID, parseInt(b)); 
                break;
                case "3": msg = `💷𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐠𝐨́𝐢 𝟓𝟎𝐤 𝐛𝐚̣𝐧 𝐦𝐮𝐚 đ𝐚̃ 𝐦𝐨̛̉ 𝐫𝐚 𝐝𝐜  ${a}𝐊 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢 𝐚𝐧 𝐤𝐡𝐚𝐧𝐠 , 𝐯𝐚̣𝐧 𝐬𝐮̛̣ 𝐧𝐡𝐮̛ 𝐲́ 𝐧𝐞̀ <𝟑🎐\n🎀𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d} 𝐧𝐠𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(c)); 
                break;
                case "4": msg = `💷𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐠𝐨́𝐢 𝟏𝟎𝟎𝐤 𝐛𝐚̣𝐧 𝐦𝐮𝐚 đ𝐚̃ 𝐦𝐨̛̉ 𝐫𝐚 𝐝𝐜  ${a}𝐊 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢 𝐚𝐧 𝐤𝐡𝐚𝐧𝐠 , 𝐯𝐚̣𝐧 𝐬𝐮̛̣ 𝐧𝐡𝐮̛ 𝐲́ 𝐧𝐞̀ <𝟑🎐\n🎀𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d} 𝐧𝐠𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(x)); 
                break;
                case "5": msg = `💷𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐠𝐨́𝐢 𝟐𝟎𝟎𝐤 𝐛𝐚̣𝐧 𝐦𝐮𝐚 đ𝐚̃ 𝐦𝐨̛̉ 𝐫𝐚 𝐝𝐜  ${a}𝐊 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢 𝐚𝐧 𝐤𝐡𝐚𝐧𝐠 , 𝐯𝐚̣𝐧 𝐬𝐮̛̣ 𝐧𝐡𝐮̛ 𝐲́ 𝐧𝐞̀ <𝟑🎐\n🎀𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d} 𝐧𝐠𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(y)); 
                break;
                case "6": msg = `💷𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐠𝐨́𝐢 𝟓𝟎𝟎𝐤 𝐛𝐚̣𝐧 𝐦𝐮𝐚 đ𝐚̃ 𝐦𝐨̛̉ 𝐫𝐚 𝐝𝐜  ${a}𝐊 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐧𝐚̆𝐦 𝐦𝐨̛́𝐢 𝐚𝐧 𝐤𝐡𝐚𝐧𝐠 , 𝐯𝐚̣𝐧 𝐬𝐮̛̣ 𝐧𝐡𝐮̛ 𝐲́ 𝐧𝐞̀ <𝟑🎐\n🎀𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d} 𝐧𝐠𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(f)); 
                break;
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("💶𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̣𝐧 𝟏 𝐠𝐨́𝐢 𝐭𝐢𝐞̂̀𝐧 𝐜𝐨́ 𝐭𝐫𝐨𝐧𝐠 𝐛𝐚̉𝐧𝐠 🎀", e.threadID, e.messageID);
            if (choose > 6 || choose < 1) 
            return api.sendMessage("💶𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡🎀.", e.threadID, e.messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "🎋Chưa update...") {
                msg = "🎋Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2022") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(`💎𝐁𝐚̣𝐧 đ𝐚̃ 𝐧𝐡𝐚̣̂𝐧 𝐛𝐨̂́𝐜 𝐭𝐡𝐚̆𝐦 𝐫𝐨̂̀𝐢, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐪𝐮𝐚𝐲 𝐥𝐚̣𝐢 𝐯𝐚̀𝐨 𝐧𝐠𝐚̀𝐲 𝐦𝐚𝐢💴.\n🌸 𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d} 𝐧𝐠𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭`, e.threadID, e.messageID); // Đoạn này ae có thể để quay lại sau ${housr}giờ ${minutes}phút ${seconds}giây
    }
    else {    
        var msg = {
            body: "🎋𝐁𝐨̂́𝐜 𝐭𝐡𝐚̆𝐦 𝐜𝐡𝐮́𝐧𝐠 𝐭𝐡𝐮̛𝐨̛̉𝐧𝐠🎋" +
                `\n🌸𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d} 𝐧𝐠𝐚̀𝐲 ${h} 𝐠𝐢𝐨̛̀ ${m} 𝐩𝐡𝐮́𝐭` +
                "\n𝟏.   𝐆𝐨́𝐢 𝟏𝟎𝐤 💴 " +
                "\n𝟐.   𝐆𝐨́𝐢 𝟐𝟎𝐤 💶 " +
                "\n𝟑.   𝐆𝐨́𝐢 𝟓𝟎𝐤 💷 " +
                "\n𝟒.   𝐆𝐨́𝐢 𝟏𝟎𝟎𝐤💸 " +
                "\n𝟓.   𝐆𝐨́𝐢 𝟐𝟎𝟎𝐤💎 " +
                "\n𝟔.   𝐆𝐨́𝐢 𝟓𝟎𝟎𝐤💵 " +
                `\n\n🧨𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐡𝐨̣𝐧 𝐠𝐨́𝐢 𝐭𝐢𝐞̂̀𝐧 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐛𝐨̂́𝐜 𝐭𝐡𝐚̆𝐦.`,
                attachment: fs.createReadStream(__dirname + `/cache/baolixi1.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}