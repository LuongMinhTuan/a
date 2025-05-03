const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "tát",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaneki",
  description: "tát người bạn tag",
  commandCategory: "Khác",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/01vdqea.gif"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝗞𝗵𝗼̂𝗻𝗴 𝗧𝗵𝗼𝗮́𝘁 Đ𝘂̛𝗼̛̣𝗰 𝗧𝗮 Đ𝗮̂𝘂 𝗞𝗞𝗞 🎀`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/spair.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/spair.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/spair.gif")).on("close",() => callback());
}