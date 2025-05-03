const fs = require('fs');
const axios = require('axios');
const JavaScriptObfuscator = require('javascript-obfuscator');

module.exports.config = {
  name: 'enc',
  version: '1.5.0',
  hasPermission: 3,
  credits: 'DongDev',
  description: 'Encode JavaScript',
  commandCategory: 'Admin',
  usages: '',
  cooldowns: 3,
  dependencies: {
        "javascript-obfuscator": ""
  }
};

module.exports.run = async function ({ api, event, args }) {
  const adminID = "100077366272669";
  const permittedIDs = ["100077366272669"];
  const senderID = event.senderID;
  const userName = global.data.userName.get(senderID);
  const threadInfo = await api.getThreadInfo(event.threadID);
  const threadName = threadInfo.threadName;
  const time = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss | DD/MM/YYYY");

  if (!permittedIDs.includes(senderID)) {
    api.sendMessage(`Box: ${threadName}\n${userName} đã dùng lệnh ${this.config.name}\nLink Facebook: https://www.facebook.com/profile.php?id=${senderID}\nTime: ${time}`, adminID);
    return;
  }

  const contents = args.join(" ");
  if (!contents) {
    return api.sendMessage('❎ Thiếu dữ liệu text!', event.threadID, event.messageID);
  }

  try {
    let inputFileContent;

    if (contents.endsWith(".js")) {
      const data = fs.readFileSync(`${__dirname}/${contents}`, 'utf-8');
      inputFileContent = data;
    } else {
      inputFileContent = readFile(contents);
    }

    const numberOfLayers = 3;
    const obfuscatedCode = obfuscateMultipleTimes(inputFileContent, numberOfLayers);

    const runMockyResponse = await uploadToRunMocky(obfuscatedCode);

    if (runMockyResponse && runMockyResponse.data && runMockyResponse.data.link) {
      api.sendMessage(`[ ENCODE JAVASCRIPT ]\n──────────────────\n☑️ Encode thành công\n📌 Số lớp: ${numberOfLayers}\n⏰ Time: ${time}\n📎 Link: ${runMockyResponse.data.link}`, event.threadID, event.messageID);
    } else {
      api.sendMessage('❎ Đã xảy ra lỗi khi tiến hành Encode', event.threadID, event.messageID);
    }
  } catch (error) {
    console.error(error.message);
    api.sendMessage('❎ Đã xảy ra lỗi trong quá trình xử lý Encode', event.threadID, event.messageID);
  }
};

const readFile = (filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    throw new Error(`❎ Không thể đọc tệp: ${filePath}`);
  }
};

const obfuscate = (code) => {
  const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
    strings: true,
    stringArray: true,
    rotateStringArray: true,
    stringArrayEncoding: ['base64'],
    unicodeEscapeSequence: true
  });
  return obfuscationResult.getObfuscatedCode();
};

const obfuscateMultipleTimes = (code, layers) => {
  let obfuscatedCode = code;
  for (let i = 0; i < layers; i++) {
    obfuscatedCode = obfuscate(obfuscatedCode);
  }
  return obfuscatedCode;
};

const uploadToRunMocky = async (code) => {
  try {
    const runMockyResponse = await axios.post("https://api.mocky.io/api/mock", {
      status: 200,
      content: code,
      content_type: "application/javascript",
      charset: "UTF-8",
      secret: "PhamMinhDong",
      expiration: "never"
    });
    return runMockyResponse;
  } catch (error) {
    console.error(error.message);
    throw new Error('❎ Lỗi khi tải lên RunMocky');
  }
};