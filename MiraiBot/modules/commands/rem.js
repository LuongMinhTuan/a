const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: "rem",
  version: "1.3.0",
  hasPermssion: 0,
  credits: "Kadeer - mod by RST - static version",
  description: "Gửi ảnh Rem ngẫu nhiên",
  commandCategory: "Game",
  usages: "rem",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID } = event;

  const quotes = [
    "Rem luôn ở bên anh...",
    "Chủ nhân gọi Rem đó ạ?",
    "Rem đã dọn dẹp xong rồi ạ!",
    "Rem yêu chủ nhân nhất!",
    "Có Rem ở đây, đừng lo!"
  ];

  const images = [
   ""
    // Thêm link ảnh Rem ở đây
  ];

  if (images.length === 0)
    return api.sendMessage("Danh sách ảnh Rem đang trống!", threadID, messageID);

  const imageUrl = images[Math.floor(Math.random() * images.length)];
  const extMatch = imageUrl.match(/\.(jpg|jpeg|png|gif|webp)$/i);
  const ext = extMatch ? extMatch[1] : 'jpg';
  const filePath = path.join(__dirname, `/cache/rem.${ext}`);

  try {
    const response = await axios.get(imageUrl, { responseType: 'stream' });
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    writer.on('finish', () => {
      api.sendMessage({
        body: `${quotes[Math.floor(Math.random() * quotes.length)]}\n🌸 Số ảnh hiện có: ${images.length}`,
        attachment: fs.createReadStream(filePath)
      }, threadID, () => fs.unlinkSync(filePath), messageID);
    });

    writer.on('error', () => {
      api.sendMessage("Không thể tải ảnh Rem.", threadID, messageID);
    });

  } catch (err) {
    console.error("Lỗi tải ảnh Rem:", err);
    api.sendMessage("Không thể tải ảnh từ link đã chọn.", threadID, messageID);
  }
};
