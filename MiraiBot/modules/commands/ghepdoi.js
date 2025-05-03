module.exports.config = {
  name: "ghepdoi",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "M-Drasew", 
  description: "ghép đôi có chọn giới tính",
  commandCategory: "Tình Yêu",
  usages: "gái",
  usages: "", 
  cooldowns: 22,
  images: [],
};
module.exports.run = async ({ api, event, handleReply, Users, Currencies }) => {
    const { threadID, messageID, senderID } = event;
    let $ = 50;
    let money = (await Currencies.getData(event.senderID)).money;
  const picture = (await axios.get(`https://i.imgur.com/O98ueJl.jpeg`, { responseType: "stream"})).data
if(money < $) api.sendMessage(`→ Mỗi lần ghép bạn phải có 50 đô 💞\n→ Kiếm đủ đi rồi ghepdoi nha 💍\n──────────────────\n→ Số tiền bạn còn trong tài khoản: ${money} 💵 `,threadID,messageID)
  else {
Currencies.decreaseMoney(event.senderID, $);
	return api.sendMessage({body: `[ TINDER INQUIRY ]\n──────────────────\n→ Chuẩn bị ghepdoi/maimoi 💍\n→ Bạn hãy Reply tin nhắn này của bot vào chọn giới tính người mà bạn muốn ghép ( Nam hoặc Nữ )\n→ Lưu ý mỗi lần ghepdoi bạn sẽ bị bot trừ 50 money/đô trong tài khoản 🌸\n────────────────────n→ Số tiền hiện tại bạn đang có trong tài khoản: ${money} 💵`, attachment: (picture)}, event.threadID, (error, info) => {         global.client.handleReply.push({
            type: "ghep",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
     })
   }
}
module.exports.handleReply = async ({ api, event, handleReply, Users, Currencies }) => {
var token = `6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const tile = (Math.random() * 50)+50;
const { threadID, messageID, senderID } = event;
const random = ["Chúc 2 bạn trăm năm hạnh phúc", "Chúc 2 bạn hạnh fuck", "Chúc 2 bạn hạnh phúc.!"];
    switch(handleReply.type) {
        case "ghep": {
          switch(event.body) {
          case "Nam": {
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`[ TINDER SEARCH ]\n────────────────────\n→ Bot đang tìm kiếm/mai mối người dùng nam phù hợp với bạn🧒...\n→ Loading, chờ xíu nha...!\n────────────────────`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let male of all) {
                if (male.gender == "MALE") {
                 if ( male != event.senderID) data.push(male.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          const url = api.getCurrentUserID(member);
          let Avatar_boy = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_boy, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);

            let gifLove = (await axios.get( `https://i.ibb.co/wC2JJBb/trai-tim-lap-lanh.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") ); 
          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
            var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
            imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var msg = {body: `[ TINDER LOVE ]\n────────────────────\n→ Tìm kiếm/mai mối thành công 💍\n→ Tỉ lệ hợp nhau của hai bạn là: ${tile.toFixed(2)}%\n💞 Chúc hai bạn trăm năm hạnh phúc\n`+n+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
          case "Nữ": {
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`[ TINDER SEARCH ]\n────────────────────\n→ Bot đang tìm kiếm/mai mối người dùng nữ phù hợp với bạn👧...\n→ Loading, chờ xíu nha...!\n────────────────────`,event.threadID);
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let female of all) {
                if (female.gender == "FEMALE") {
                 if ( female != event.senderID) data.push(female.id)   
                }
            }
          let member = data[Math.floor(Math.random() * data.length)]
          let n = (await Users.getData(member)).name
          let Avatar_girl = (await axios.get(`https://graph.facebook.com/${member}/picture?height=1500&width=1500&access_token=`+token, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/cache/avt1.png`, Buffer.from(Avatar_girl, "utf-8") );
          let name = await Users.getNameUser(handleReply.author);
let gifLove = (await axios.get( `https://i.imgur.com/C5cnuvK.png`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );


          let Avatar_author = (await axios.get( `https://graph.facebook.com/${handleReply.author}/picture?width=512&height=512&access_token=`+token, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar_author, "utf-8") );
           var arraytag = [];
                arraytag.push({id: handleReply.author, tag: name});
                arraytag.push({id: member, tag: n});
           var imglove = []; 
              imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));

              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
           var msg = {body: `[ TINDER LOVE ]\n────────────────────\n→ Tìm kiếm/mai mối thành công 💍\n→ Tỉ lệ hợp nhau của hai bạn là: ${tile.toFixed(2)}%\n💞 Chúc hai bạn trăm năm hạnh phúc\n`+n+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID);
          } break;
        }
      }
   }
}