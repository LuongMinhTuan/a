module.exports.config = {
  name: "luatbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Duy (B.A.D)",
  description: "Luật Bot",
  commandCategory: "Nhóm",
  usages: "luatbot",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/fu3R9EK.jpg",
"https://i.imgur.com/wMHsY2q.jpg",
"https://i.imgur.com/r476PEs.jpg",
  ];
  var callback = () => api.sendMessage({body:`⚔𝙇𝙐𝘼̣̂�? 𝘽𝙊𝙏⚔\n�? 𝙑𝙪𝙞 𝙡𝙤̀𝙣𝙜 𝙘𝙝𝙖̂́𝙥 𝙝𝙖̀𝙣𝙝 𝙡𝙪𝙖̣̂𝙩 𝙘𝙪̉𝙖 𝙗𝙤𝙩\n�? 𝙆𝙝𝙤̂𝙣𝙜 𝙙𝙪̀𝙣𝙜 𝙗𝙤𝙩 𝙫𝙖̀𝙤 𝙫𝙞𝙚̣̂𝙘 𝙭𝙚𝙢 𝙝𝙚𝙣𝙩𝙖𝙞 𝙦𝙪𝙖́ 𝙣𝙝𝙞𝙚̂̀𝙪 :𝙫\n�? 𝙉𝙚̂́𝙪 𝙗𝙞̣ 𝙗𝙖𝙣 𝙙𝙤 𝙨𝙥𝙖𝙢 𝙩𝙝𝙞̀ 𝙞𝙗 𝙖𝙙𝙢𝙞𝙣 𝙜𝙤̛̃ 𝙗𝙖𝙣\n�? 𝙉𝙚̂́𝙪 𝙗𝙞̣ 𝙗𝙖𝙣 𝙙𝙤 𝙘𝙝𝙪̛̉𝙞 𝙗𝙤𝙩 𝙩𝙝𝙞̀ 𝙣𝙝𝙖̆́𝙣 𝙩𝙞𝙣 𝙖𝙙𝙢𝙞𝙣 𝙭𝙞𝙣 𝙡𝙤̂̃𝙞 𝙢𝙤̛́𝙞 đ𝙪̛𝙤̛̣𝙘 𝙜𝙤̛̃\n�? 𝙆𝙝𝙤̂𝙣𝙜 𝙘𝙝𝙪̛̉𝙞 𝙗𝙤𝙩 𝙙𝙪̛𝙤̛́𝙞 𝙢𝙤̣𝙞 𝙝𝙞̀𝙣𝙝 𝙩𝙝𝙪̛́𝙘 𝙝𝙤𝙖̣̆𝙘 𝙘𝙪̛́ 𝙘𝙝𝙪̛̉𝙞 𝙣𝙚̂́𝙪 𝙞́ 𝙩𝙝𝙪̛́𝙘 𝙗𝙖̣𝙣 𝙣𝙝𝙪̛ 𝙘𝙤𝙣 𝙘𝙖̣̆𝙘\n�? 𝙇𝙞𝙣𝙠 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝘼𝙙𝙢𝙞𝙣\n hhttps://www.facebook.com/trieutaitan`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };

