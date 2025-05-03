 var request = require("request");const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
    module.exports.config = {
        name: "baucua",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "Horizon Lucius Synthesis I",
        description: "Game bầu cua có đặt cược",
        commandCategory: "Game",
        usages: "<[𝗴𝗮̀/𝘁𝗼̂𝗺/𝗯𝗮̂̀𝘂/𝗰𝘂𝗮/𝗰𝗮́/𝗻𝗮𝗶] 𝗵𝗼𝗮̣̆𝗰[🐓/🦞/🍐/🦀/🐬/🦌]> <𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 (𝗹𝘂̛𝘂 𝘆́ 𝗽𝗵𝗮̉𝗶 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬$)>",
        cooldowns: 2
    };

    module.exports.onLoad = async function () {
        if (!existsSync(__dirname + '/cache/ga.jpg')) {
            request('https://i.imgur.com/Vz17qhg.jpg').pipe(createWriteStream(__dirname + '/cache/ga.jpg'));
        }
        if (!existsSync(__dirname + '/cache/tom.jpg')) {
            request('https://i.imgur.com/Ep0MukF.jpg').pipe(createWriteStream(__dirname + '/cache/tom.jpg'));
        }
        if (!existsSync(__dirname + '/cache/bau.jpg')) {
            request('https://i.imgur.com/Qp3StfB.jpg').pipe(createWriteStream(__dirname + '/cache/bau.jpg'));
        }
        if (!existsSync(__dirname + '/cache/cua.jpg')) {
            request('https://i.imgur.com/J5MPPMW.jpg').pipe(createWriteStream(__dirname + '/cache/cua.jpg'));
        }
        if (!existsSync(__dirname + '/cache/ca.jpg')) {
            request('https://i.imgur.com/JNQr0qI.jpg').pipe(createWriteStream(__dirname + '/cache/ca.jpg'));
        }
        if (!existsSync(__dirname + '/cache/nai.jpg')) {
            request('https://i.imgur.com/UYhUZf8.jpg').pipe(createWriteStream(__dirname + '/cache/nai.jpg'));
        }
        if (!existsSync(__dirname + '/cache/baucua.gif')) {
            request('https://i.imgur.com/dlrQjRL.gif').pipe(createWriteStream(__dirname + '/cache/baucua.gif'));
        }
    };

    async function get(one,two,three) {
        var x1;
            switch (one) {
                case "ga": x1 = "🐓";
                    break;
                case "tom": x1 = '🦞';
                    break;
                case "bau": x1 = '🍐';
                    break;
                case "cua": x1 = '🦀';
                    break;
                case "ca": x1 = '🐬';
                    break;
                case "nai":x1 = '🦌';
            }
        var x2;
            switch (two) {
                case "ga": x2 = "🐓";
                    break;
                case "tom": x2 = '🦞';
                    break;
                case "bau": x2 = '🍐';
                    break;
                case "cua": x2 = '🦀';
                    break;
                case "ca": x2 = '🐬';
                    break;
                case "nai": x2 = '🦌';
            }
        var x3;
            switch (three) {
                case "ga": x3 = "🐓";
                    break;
                case "tom": x3 = '🦞';
                    break;
                case "bau": x3 = '🍐';
                    break;
                case "cua": x3 = '🦀';
                    break;
                case "ca": x3 = '🐬';
                    break;
                case "nai":x3 = '🦌';
            }
        var all = [x1, x2, x3];
    return full = all;
    }
var full = [];
    module.exports.run = async function({ api, event, args, Currencies }) { var out = (msg) => api.sendMessage(msg,event.threadID, event.messageID);
        const slotItems = ["ga", "tom", "bau", "cua", "ca", "nai"];
   const moneyUser = (await Currencies.getData(event.senderID)).money;
                                            
                var moneyBet = parseInt(args[1]);
                    if (!args[0] || !isNaN(args[0])) return api.sendMessage({body: "🦀==== [ 𝗕𝗔̂̀𝗨 𝗖𝗨𝗔 ] ====🦀\n━━━━━━━━━━━━━━━━━━\n🦞𝗛𝘂̛𝗼̛́𝗻𝗴 𝗗𝗮̂̃𝗻 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴🦞\n\n𝟭. 𝗕𝗮𝘂𝗰𝘂𝗮 + 𝗰𝗮́ , 𝘁𝗼̂𝗺 , 𝗰𝘂𝗮 , 𝗴𝗮̀ , 𝗻𝗮𝗶 , 𝗯𝗮̂̀𝘂 + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬 (𝘃𝗱: ?𝗯𝗮𝘂𝗰𝘂𝗮 𝗴𝗮̀ 𝟮𝟬𝟬)\n\n⚠️𝗟𝘂̛𝘂 𝘆́ 𝗻𝗲̂́𝘂 𝗯𝗮̣𝗻 𝘀𝗽𝗮𝗺 𝗯𝗮𝘂𝗰𝘂𝗮 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗯𝗮𝗻 𝗯𝗮̣𝗻!!!",attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://Api-By-Nhhoang.vnhoang06.repl.co/baucua')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
                    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[𝗗𝗮𝘄𝗻🐧] → 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 đ𝗮̣̆𝘁 𝗰𝘂̛𝗼̛̣𝗰 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 đ𝗲̂̉ 𝘁𝗿𝗼̂́𝗻𝗴 𝗵𝗼𝗮̣̆𝗰 𝗹𝗮̀ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝐚̂𝗺", event.threadID, event.messageID);
                if (moneyBet > moneyUser) return api.sendMessage("[𝗗𝗮𝘄𝗻🐧] → 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 đ𝗮̣̆𝘁 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝘀𝗼̂́ 𝗱𝘂̛ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻!", event.threadID, event.messageID);
            if (moneyBet < 100) return api.sendMessage("[𝗗𝗮𝘄𝗻🐧] → 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 đ𝗮̣̆𝘁 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̛𝗼̛́𝗶 𝟭𝟬𝟬 đ𝗼̂!", event.threadID, event.messageID);
        var number = [], win = false;
    for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
        var itemm;
            var icon;
                switch (args[0]) {
                    case "bầu":
                        case "Bầu": itemm = "bau";
                                icon = '🍐';
                            break;
                    case "cua": 
                        case "Cua": itemm = "cua";
                                icon = '🦀';
                            break;
                    case "cá":
                        case "Cá": itemm = "ca";
                                icon = '🐟';
                            break;
                    case "nai":
                        case "Nai": itemm = "nai";
                                icon = '🦌';
                            break;
                    case "gà": 
                        case "Gà": itemm = "ga";
                                icon = '🐓';
                            break;
                    case "tôm":
                        case "Tôm": itemm = "tom";
                                icon = '🦞';
                            break;
                                default: return api.sendMessage("[𝗗𝗮𝘄𝗻🐧] → 𝗛𝗮̃𝘆 𝗕𝗮̂́𝗺 : /𝗯𝗮𝘂𝗰𝘂𝗮 [𝗯𝗮̂̀𝘂/𝗰𝘂𝗮/𝗰𝗮́/𝗻𝗮𝗶/𝗴𝗮̀/𝘁𝗼̂𝗺] [𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻]",event.threadID, event.messageID);
                }      
                await get(number[0],number[1],number[2]);
            api.sendMessage({body:"=== 『 𝗕𝗮̂̀𝘂 𝗖𝘂𝗮 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗖𝗮̂́𝘁 𝗧𝗮𝘆 𝗖𝗮́𝗶 𝗗𝗼̛̉ 𝗡𝗲̀... 𝗖𝗮̂́𝘁 𝗧𝗮𝘆 🎇\n→ 𝗖𝗵𝘂́𝗰 𝗕𝗮̣𝗻 𝗠𝗮𝘆 𝗠𝗮̆́𝗻 𝗡𝗵𝗼́...🎆",attachment: createReadStream(__dirname + "/cache/baucua.gif")},event.threadID,async (error,info) => {
                await new Promise(resolve => setTimeout(resolve, 5 * 1000));
                    api.unsendMessage(info.messageID);
                          await new Promise(resolve => setTimeout(resolve, 100));
    var array = [number[0],number[1],number[2]];
        var listimg = [];
           for (let string of array) {
               listimg.push(createReadStream(__dirname + `/cache/${string}.jpg`));
           }
        if (array.includes(itemm)) {
            var i = 0;
                if (array[0] == itemm) i+=1;
                    if (array[1] == itemm) i+=1;
                if (array[2] == itemm) i+=1;
            if (i == 1) {
                var mon = parseInt(args[1]) + 300;  
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s1")
                        return api.sendMessage({body:`=== 『 𝗬𝗢𝗨 𝗪𝗜𝗡 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗟𝗮̆́𝗰 𝗧𝗿𝘂́𝗻𝗴: ${full.join(" | ")}\n→ 𝗕𝗮̣𝗻 Đ𝗮̃ 𝗧𝗵𝗮̆́𝗻𝗴 𝗩𝗮̀ 𝗡𝗵𝗮̣̂𝗻 Đ𝘂̛𝗼̛̣𝗰 𝗦𝗼̂́ 𝗧𝗶𝗲̂̀𝗻 ${mon}$ 💸\n→ 𝗕𝗼𝘁 𝗟𝗮̆́𝗰 𝗥𝗮 𝗠𝗼̣̂𝘁 𝗖𝗼𝗻 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 2) {
                var mon = parseInt(args[1]) * 2; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s2")
                        return api.sendMessage({body:`=== 『 𝗬𝗢𝗨 𝗪𝗜𝗡 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗟𝗮̆́𝗰 𝗧𝗿𝘂́𝗻𝗴: ${full.join(" | ")}\n→ 𝗕𝗮̣𝗻 𝗩𝘂̛̀𝗮 𝗧𝗵𝗮̆̀𝗻𝗴 𝗟𝗼̛́𝗻 𝗩𝗮̀ 𝗡𝗵𝗮̣̂𝗻 Đ𝘂̛𝗼̛̣𝗰 𝗦𝗼̂́ 𝗧𝗶𝗲̂̀𝗻 ${mon}$ 💸\n→ 𝗕𝗼𝘁 𝗟𝗮̆́𝗰 𝗥𝗮 𝗛𝗮𝗶 𝗖𝗼𝗻 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 3) {
                var mon = parseInt(args[1]) * 3; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log('s3')
                        return api.sendMessage({body:`=== 『 𝗬𝗢𝗨 𝗪𝗜𝗡 』 ====\n━━━━━━━━━━━━━━━━━━\n\n➢ 𝗟𝗮̆́𝗰 𝗧𝗿𝘂́𝗻𝗴: ${full.join(" | ")}\n→ 𝗕𝗮̣𝗻 𝗩𝘂̛̀𝗮 𝗧𝗵𝗮̆̀𝗻𝗴 𝗟𝗼̛́𝗻 𝗩𝗮̀ 𝗡𝗵𝗮̣̂𝗻 Đ𝘂̛𝗼̛̣𝗰 𝗦𝗼̂́ 𝗧𝗶𝗲̂̀𝗻 ${mon}$ 💸\n→ 𝗕𝗼𝘁 𝗟𝗮̆́𝗰 𝗥𝗮 𝗕𝗮 𝗖𝗼𝗻 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else return api.sendMessage("𝗗𝗮𝘄𝗻🐧] → 𝗟𝗼̂̃𝗶 𝗿𝗼̂̀𝗶 𝗰𝗵𝗼̛̀ 𝗯𝗼𝘁 𝘁𝗶́ 𝗻𝗵𝗲́",event.threadID,event.messageID);
        } else  {
            await Currencies.decreaseMoney(event.senderID, parseInt(args[1])); console.log('s4')
            return api.sendMessage({body:`=== 『 𝗬𝗢𝗨 𝗟𝗢𝗦𝗘 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗟𝗮̆́𝗰 𝗧𝗿𝘂́𝗻𝗴: ${full.join(" | ")}\n→ 𝗕𝗮̣𝗻 𝗧𝗵𝘂𝗮 𝗥𝗼̂̀𝗶 𝗩𝗮̀ 𝗕𝗶̣ 𝗧𝗿𝘂̛̀ ${args[1]}$ 💸\n→ 𝗩𝗮̀ 𝗕𝗼𝘁 𝗛𝗼̂𝗻𝗴 𝗟𝗮̆́𝗰 𝗥𝗮 𝗖𝗼𝗻 ${icon}`,attachment: listimg},event.threadID, event.messageID);
        }
            } ,event.messageID);
    };