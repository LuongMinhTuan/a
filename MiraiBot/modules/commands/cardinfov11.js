const { loadImage, createCanvas } = require("canvas");
const request = require('request');
const fs = require("fs"), axios = require("axios");
const Canvas = require("canvas");

async function circle(imagePath) {
  const img = await loadImage(imagePath);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(img.width / 2, img.height / 2, img.width / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(img, 0, 0, img.width, img.height);
  return canvas.toBuffer();
}
module.exports.config = {
  name: "cardinfov11",
  version: "1.0.1",
  hasPermission: 0,
  credits: "DongDev",
  description: "Card info Facebook v11",
  commandCategory: "Thông Tin",
  usages: "cardinfo fb",
  usePrefix: false,
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users, Threads, args }) => {
  try {
    const token = global.config.ACCESSTOKEN;
    let id;

    if (Object.keys(event.mentions).length > 0) {
      id = Object.keys(event.mentions)[0].replace(/\&mibextid=ZbWKwL/g, '');
    } else {
      id = args[0] !== undefined ? (isNaN(args[0]) ? await global.utils.getUID(args[0]) : args[0]) : event.senderID;
      if (event.type === "message_reply") {
        id = event.messageReply.senderID;
      }
    }

    const resp = await axios.get(`https://graph.facebook.com/${id}?fields=id,is_verified,cover,updated_time,work,education,likes,created_time,work,posts,hometown,username,family,timezone,link,name,locale,location,about,website,birthday,gender,relationship_status,significant_other,quotes,first_name,subscribers.limit(0)&access_token=${token}`);
    const name = resp.data.name;
    const uid = resp.data.id;
    const link_profile = resp.data.link;
    const avatar = `https://graph.facebook.com/${id}/picture?width=1500&height=1500&access_token=2712477385668128%7Cb429aeb53369951d411e1cae8e810640`;
    const gender = resp.data.gender === 'male' ? 'Nam' : resp.data.gender === 'female' ? 'Nữ' : 'Không công khai';
    const relationship_status = resp.data.relationship_status || "Không có dữ liệu";
    var birthday = resp.data.birthday || "Không công khai";
    const follower = resp.data.subscribers?.summary?.total_count || "Không công khai";
    const hometown = resp.data.hometown?.name || "Không có dữ liệu";
    const location = resp.data.location?.name || 'Không có dữ liệu';
    const love = resp.data.love?.name || 'Không có dữ liệu';

    const fontsLink = 20;
    const fontsInfo = 28;
    const colorName = "#00FF00";
    let pathImg = __dirname + `/cache/cardinfo.png`;
    let pathAvata = __dirname + `/cache/avtuserrd.png`;
/////////////////////////////////////
let getAvatarOne = (await axios.get(avatar, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/fBgFUr8.png`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));
/*-----------------download----------------------*/        
/*---------------------------------------------*/
let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 100, 97, 255, 255);
/////////////////////////////////////
ctx.font = `${fontsInfo}px Play-Bold`;
      ctx.fillStyle = "#ffff";
      ctx.textAlign = "start";
         var fontSize = 20;
      ctx.fillText(`» Name: ${name}`, 455, 172);
      ctx.fillText(`» Sex: ${gender}`, 455, 208);
      ctx.fillText(`» Follow: ${follower}`, 455, 244);
      ctx.fillText(`» Relationship: ${relationship_status}`, 455, 281);
      ctx.fillText(`» Birthday: ${birthday}`, 455, 320);
      ctx.fillText(`» Location: ${location}`, 455, 357);
      ctx.fillText(`» UID: ${uid}`, 455, 397);
      ctx.font = `${fontsLink}px Play-Bold`;
      ctx.fillStyle = "#ffff";
      ctx.textAlign = "start";
      fontSize = 20;
      ctx.fillText(`» Profile: fb.me/${uid}`, 19, 468);
/////////////////////
  ctx.beginPath();
const imageBuffer = canvas.toBuffer();
fs.writeFileSync(pathImg, imageBuffer);
  //  fs.removeSync(pathAvt1);

////////////////////////////////////
var msg = {body:`
🎨===「 𝗖𝗔𝗥𝗗𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 」===🎨
──────────────────
👤 Tên: ${name}
🎎 Giới tính: ${gender}
🔰 Lượt Theo dõi: ${follower}
💖 Mối quan hệ:  ${relationship_status}
🎂 Sinh nhật: ${birthday}
🌍 Vị trí: ${location}
🔗 UID: ${uid}
🌐 Link Fb: ${link_profile}
──────────────────
👉 Tạo thành công cardinfo cho bạn, bạn có thể thử nhiều mẫu khác.`, attachment: fs.createReadStream(pathImg)}

    api.sendMessage(msg, event.threadID);
  } catch (error) {
    console.error('Lỗi khi tải hình ảnh:', error);
    api.sendMessage(`Đã xảy ra lỗi khi xử lý yêu cầu. Vui lòng thử lại sau.`, event.threadID);
  }
};