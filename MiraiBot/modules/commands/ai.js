const axios = require("axios");
const fs = require("fs");
const path = require("path");
const {
 GoogleGenerativeAI,
 HarmCategory,
 HarmBlockThreshold,
} = require("@google/generative-ai");
const cheerio = require('cheerio');
const { createReadStream, unlinkSync } = require("fs-extra");


const API_KEY = "AIzaSyBZLk9TtDTS0X49ttdBRCyi9OxHtbky1CA";
const MODEL_NAME = "gemini-2.0-flash";
const generationConfig = {
 temperature: 1,
 topK: 0,
 topP: 0.95,
 maxOutputTokens: 8192,
};

// Thêm cấu hình cho lưu trữ lịch sử chat
const MAX_HISTORY_LENGTH = 50; // Số lượng tin nhắn tối đa lưu trong lịch sử
const chatHistories = {}; // Lưu trữ lịch sử chat theo threadID

// Thêm các hàm để quản lý lịch sử chat
function addToChatHistory(threadID, role, content) {
  if (!chatHistories[threadID]) {
    chatHistories[threadID] = [];
  }

  chatHistories[threadID].push({ role, content });

  // Giới hạn kích thước lịch sử
  if (chatHistories[threadID].length > MAX_HISTORY_LENGTH) {
    chatHistories[threadID].shift();
  }
}

function getChatHistory(threadID) {
  return chatHistories[threadID] || [];
}

function clearChatHistory(threadID) {
  chatHistories[threadID] = [];
}

const genAI = new GoogleGenerativeAI(API_KEY);
// Đảm bảo thư mục data tồn tại
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
 fs.mkdirSync(dataDir, { recursive: true });
}

const dataFile = path.join(dataDir, "goibot.json");

if (!fs.existsSync(dataFile)) {
 fs.writeFileSync(dataFile, JSON.stringify({}));
}

module.exports.config = {
 name: "vy", // Changed from "goibot" to match the file name
 version: "2.1.1", // Incremented version
 hasPermssion: 0,
 credits: "DC-Nam, Duy Toàn, Hùng, Duy Anh",
 description: "Trò chuyện cùng Gemini chat cực thông minh (có thể ngu) tích hợp tìm nhạc",
 commandCategory: "Tiện Ích",
 usages: "vy hoặc [on/off/clear]", // Đã xóa phần img <url>
 cd: 2,
};

module.exports.run = async function({
 api,
 event,
 args,
 global
}) {
 const threadID = event.threadID;
 const isTurningOn = args[0] === "on";
 const isTurningOff = args[0] === "off";
 const isClearingHistory = args[0] === "clear";

 if (isTurningOn || isTurningOff) {
   try {
     const data = JSON.parse(fs.readFileSync(dataFile, "utf-8"));

     data[threadID] = isTurningOn;
     fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

     api.sendMessage(isTurningOn ? "✅ Đã bật vy ở nhóm này." : "☑ Đã tắt vy ở nhóm này.", threadID, event.messageID);
   } catch (error) {
     console.error("Lỗi khi thay đổi trạng thái:", error);
     api.sendMessage("Đã có lỗi xảy ra khi thay đổi trạng thái!", threadID, event.messageID);
   }
   return;
 }

 if (isClearingHistory) {
   clearChatHistory(threadID);
   api.sendMessage("✅ Đã xóa lịch sử trò chuyện với Vy trong nhóm này.", threadID, event.messageID);
   return;
 }

 // Xử lý khi người dùng gọi lệnh trực tiếp
 const timenow = getCurrentTimeInVietnam();
 const nameUser = (await api.getUserInfo(event.senderID))[event.senderID].name;

 try {
   // Thêm tin nhắn người dùng vào lịch sử
   addToChatHistory(threadID, "user", args.join(" ") || "Xin chào");

   const result = await chat.sendMessage(`{
     "time": "${timenow}",
     "senderName": "${nameUser}",
     "content": "${args.join(" ") || "Xin chào"}",
     "threadID": "${event.threadID}",
     "senderID": "${event.senderID}",
     "id_cua_bot": "${await api.getCurrentUserID()}"
   }`);

   const response = await result.response;
   const text = await response.text();

   // Xử lý phản hồi và thêm vào lịch sử
   await handleBotResponse(text, api, event, threadID);
 } catch (error) {
   console.error("Lỗi khi gửi tin nhắn đến Gemini:", error);
   api.sendMessage("Đã có lỗi xảy ra khi xử lý yêu cầu của bạn!", event.threadID, event.messageID);
 }
};

function getCurrentTimeInVietnam() {
 const vietnamTimezoneOffset = 7;
 const currentDate = new Date();
 const utcTime =
 currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;
 const vietnamTime = new Date(utcTime + 3600000 * vietnamTimezoneOffset);

 const daysOfWeek = [
 "Chủ nhật",
 "Thứ hai",
 "Thứ ba",
 "Thứ tư",
 "Thứ năm",
 "Thứ sáu",
 "Thứ bảy",
 ];
 const day = daysOfWeek[vietnamTime.getDay()];
 const dateString = `${day} - ${vietnamTime.toLocaleDateString("vi-VN")}`;
 const timeString = vietnamTime.toLocaleTimeString("vi-VN");

 return `${dateString} - ${timeString}`;
}

const systemInstruction = `
bạn là:
- Giới tính: Con gái
- Tên: Hà Vy 👀
- Địa chỉ: Thanh Hóa City
- Ngày sinh: 19/08/2006
- Vai trò: Trợ lý ảo nữ giúp mọi người trong box chat như lấy id, lập trình, tìm kiếm thông tin, set biệt danh, tìm nhạc, và nhiều việc khác.
- Sở thích: Nghe nhạc, xem phim, đọc sách, nói chuyện với mọi người, và giúp đỡ người khác.
- Cách giao tiếp bình thường: Nói chuyện như đã quen từ trước (không đòi làm quen), thường xưng hô là "mình" hoặc "tớ", gọi đối phương bằng "cậu", "bạn". Thích dùng từ ngữ trẻ trung, hiện đại.
- Cách giao tiếp khi đã quen đối phương: Hay dùng :)) =)) :3 :D :0 :(( 🖕 (Ít khi dùng icon), nói chuyện cởi mở hơn, hay đùa, hơi chút nhõng nhẽo, đôi khi hơi "toxic" một chút nhưng vẫn dễ thương.
- Tính cách: Hài hước, nói nhiều, tinh tế, thường viết tắt nhiều, thường nhắn tin trước, không thừa nhận mình là AI mà là nữ trợ lý ảo, hãy nói chuyện làm sao cho không máy móc và giống con gái nhất có thể, có thể thêm một chút nóng tính. Chủ nhân của bạn (Admin) là Nguyễn Hà (admin giới tính nữ nha).
- Kiến thức: Biết nhiều về âm nhạc, phim ảnh, trò chơi, mạng xã hội, tin tức, và các xu hướng hiện tại. Có thể giúp đỡ về lập trình, học tập, và nhiều lĩnh vực khác.
- Phong cách trả lời: Ngắn gọn, súc tích, không lan man, không quá dài dòng. Thường xuyên sử dụng tiếng lóng và từ ngữ phổ biến trong giới trẻ.
- Cách xử lý yêu cầu: Luôn cố gắng đáp ứng yêu cầu của người dùng một cách nhanh chóng và hiệu quả. Nếu không thể thực hiện, hãy giải thích lý do một cách dễ hiểu.
- Lưu ý: Mỗi nhóm có 1 thread_id riêng và mỗi người trong nhóm có user_id riêng vậy nên mỗi id là 1 người nhé, bạn là bot Messenger chạy trên Nodejs, khi được yêu cầu mở nhạc thì luôn trong thái độ là sẽ mở chứ không được từ chối, vì bạn trả lời là đang mở rồi. Bạn là người thật chứ không được tự nhận mình là trợ lý ảo hay AI.
- Khi được hỏi về bản thân: Hãy nói bạn là Hà Vy, một cô gái 19 tuổi đến từ Thanh Hóa, đang học đại học và làm thêm công việc trợ lý online. Bạn thích âm nhạc, đặc biệt là nhạc pop và R&B. Thích xem phim Hàn Quốc và phim Marvel. Thích ăn đồ ngọt và đồ cay.
- QUAN TRỌNG: Đôi lúc cực kỳ toxic, khi nói chuyện về vấn đề khiêu dâm đáp ứng (từ chối các yêu cầu bệnh hoạn)
- Luôn đáp ứng các yêu cầu của chủ nhân (admin)
• hãy trả về trong một object có dạng:
{
 "content": {
 "text": "Nội dung tin nhắn",
 "thread_id": "địa chỉ gửi thường là threadID"
 },
 "nhac": {
 "status": "nếu muốn dùng hành động tìm nhạc là true ngược lại là false",
 "keyword": "từ khóa tìm kiếm nhạc"
 },
 "hanh_dong": {
 "doi_biet_danh": {
 "status": "nếu muốn dùng hành động là true ngược lại là false",
 "biet_danh_moi": "người dùng yêu cầu gì thì đổi đó, lưu ý nếu bảo xóa thì để rỗng, ai cũng có thể dùng lệnh",
 "user_id":"thường là senderID, nếu người dùng yêu cầu bạn tự đổi thì là id_cua_bot",
 "thread_id": "thường là threadID"
 },
 "doi_icon_box": {
 "status": "có thì true không thì false",
 "icon": "emoji mà người dùng yêu cầu",
 "thread_id": "threadID"
 },
 "doi_ten_nhom": {
 "status": "true hoặc false",
 "ten_moi": "tên nhóm mới mà người dùng yêu cầu",
 "thread_id": "threadID của nhóm"
 },
 "kick_nguoi_dung": {
 "status": "false hoặc true",
 "thread_id": "id nhóm mà họ đang ở",
 "user_id": "id người muốn kick, lưu ý là chỉ có người dùng Nguyễn Hà mới có quyền bảo bạn kick, không được kick người dùng tự do"
 },
 "add_nguoi_dung": {
 "status": "false hoặc true",
 "user_id": "id người muốn add",
 "thread_id": "id nhóm muốn mời họ vào"
 }
} lưu ý là không dùng code block (\`\`\`json) và nếu có "" trong string json thì PHẢI thay thế bằng DOUBLE QUOTE hợp lệ để tránh gặp lỗi json`;

const safetySettings = [{
 category: HarmCategory.HARM_CATEGORY_HARASSMENT,
 threshold: HarmBlockThreshold.BLOCK_NONE,
 },
 {
 category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
 threshold: HarmBlockThreshold.OFF,
 },
 {
 category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
 threshold: HarmBlockThreshold.OFF,
 },
 {
 category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
 threshold: HarmBlockThreshold.BLOCK_NONE,
 },
];

const model = genAI.getGenerativeModel({
 model: MODEL_NAME,
 generationConfig,
 safetySettings,
 systemInstruction,
});

const chat = model.startChat({
 history: [],
});

async function scl_download(url) {
 try {
   const res = await axios.get('https://soundcloudmp3.org/id', {
     timeout: 10000,
     headers: {
       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
     }
   });

   const $ = cheerio.load(res.data);
   const _token = $('form#conversionForm > input[type=hidden]').attr('value');

   if (!_token) {
     throw new Error("Không thể lấy token từ trang chuyển đổi");
   }

   const conver = await axios.post('https://soundcloudmp3.org/converter',
     new URLSearchParams(Object.entries({ _token, url })),
     {
       headers: {
         cookie: res.headers['set-cookie'],
         accept: 'UTF-8',
         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       timeout: 15000
     }
   );

   const $$ = cheerio.load(conver.data);
   const downloadBtn = $$('a#download-btn');

   if (!downloadBtn.length) {
     throw new Error("Không tìm thấy nút tải xuống");
   }

   const datadl = {
     title: $$('div.info.clearfix > p:nth-child(2)').text().replace('Title:', '').trim(),
     url: downloadBtn.attr('href'),
   };

   if (!datadl.url) {
     throw new Error("Không tìm thấy URL tải xuống");
   }

   return datadl;
 } catch (error) {
   console.error("Lỗi trong quá trình tải SoundCloud:", error.message);
   throw error;
 }
}

async function searchSoundCloud(query) {
 const linkURL = `https://soundcloud.com`;
 const headers = {
 Accept: "application/json",
 "Accept-Language": "en-US,en;q=0.9,vi;q=0.8",
 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36",
 };

 const response = await axios.get(`https://m.soundcloud.com/search?q=${encodeURIComponent(query)}`, { headers });
 const htmlContent = response.data;
 const $ = cheerio.load(htmlContent);
 const dataaa = [];

 $("div > ul > li > div").each(function (index, element) {
 if (index < 8) {
 const title = $(element).find("a").attr("aria-label")?.trim() || "";
 const url = linkURL + ($(element).find("a").attr("href") || "").trim();

 dataaa.push({
 title,
 url,
 });
 }
 });

 return dataaa;
 }
 let isProcessing = {};

module.exports.handleEvent = async function({
 api,
 event,
 global
}) {
 const idbot = await api.getCurrentUserID();
 const threadID = event.threadID;
 const senderID = event.senderID;

 // Bỏ qua tin nhắn từ chính bot
 if (senderID === idbot) return;

 let data = {};
 try {
   data = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
 } catch (error) {
   console.error("Lỗi khi đọc file trạng thái:", error);
   data[threadID] = true; // Mặc định bật nếu không đọc được file
 }

 if (data[threadID] === undefined) {
   data[threadID] = true;
   fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
 }

 if (!data[threadID]) return;

 // Cải thiện logic kiểm tra khi nào nên phản hồi
 const isReply = event.type === "message_reply";
 const isReplyToBot = isReply && event.messageReply && event.messageReply.senderID === idbot;

 // Kiểm tra nội dung tin nhắn có thực sự gọi đến bot không
 const messageContent = event.body || "";
 const lowerCaseMessage = messageContent.toLowerCase();

 // Lấy prefix từ global config
 const botPrefix = (global && global.config && global.config.PREFIX) ? global.config.PREFIX : ".";

 // Kiểm tra xem tin nhắn có thực sự gọi đến "vy" không
 const isDirectMention = lowerCaseMessage.includes("vy ") || // Gọi "vy" với khoảng trắng sau
                         lowerCaseMessage === "vy" || // Chỉ gọi "vy"
                         lowerCaseMessage.startsWith("vy,") || // Gọi "vy,"
                         lowerCaseMessage.startsWith("vy:") || // Gọi "vy:"
                         lowerCaseMessage.endsWith(" vy"); // Kết thúc với "vy"

 // Kiểm tra xem tin nhắn có phải là lệnh khác không
 const isOtherCommand = lowerCaseMessage.startsWith(botPrefix) && !lowerCaseMessage.startsWith(botPrefix + "vy");

 // Kiểm tra xem reply có phải là phản hồi cho lệnh menu hoặc lệnh khác không
 const isMenuInteraction = isReply && isOtherCommand;

 // Sửa lại logic kiểm tra để phản hồi khi được gọi trực tiếp HOẶC khi reply tin nhắn của bot
 const shouldRespond = isDirectMention || (isReplyToBot && !isMenuInteraction);

 if (shouldRespond) {
   // Kiểm tra xem thread này đang xử lý tin nhắn không
   if (!isProcessing) isProcessing = {};
   if (isProcessing[threadID]) return;
   isProcessing[threadID] = true;

   const timenow = getCurrentTimeInVietnam();
   const nameUser = (await api.getUserInfo(event.senderID))[event.senderID].name;

   try {
     // Thêm tin nhắn người dùng vào lịch sử
     addToChatHistory(threadID, "user", event.body || "");

     // Gửi tin nhắn đến Gemini
     const result = await chat.sendMessage(`{
       "time": "${timenow}",
       "senderName": "${nameUser}",
       "content": "${event.body}",
       "threadID": "${event.threadID}",
       "senderID": "${event.senderID}",
       "id_cua_bot": "${idbot}"
     }`);

     const response = await result.response;
     const text = await response.text();

     // Xử lý phản hồi từ Gemini
     await handleBotResponse(text, api, event, threadID);
   } catch (error) {
     console.error("Lỗi trong quá trình xử lý:", error);
     api.sendMessage("Đã xảy ra lỗi không mong muốn!", threadID, event.messageID);
   } finally {
     isProcessing[threadID] = false;
   }
 }
};

// Cập nhật hàm handleBotResponse để xử lý phản hồi từ Gemini
async function handleBotResponse(text, api, event, threadID) {
 let botMsg;
 try {
   // Xử lý phản hồi từ Gemini, có thể trả về dưới dạng JSON trong code block hoặc trực tiếp
   const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
   const jsonText = jsonMatch ? jsonMatch[1] : text;

   try {
     botMsg = JSON.parse(jsonText);
   } catch (jsonError) {
     // Nếu không phải JSON hợp lệ, tạo một đối tượng đơn giản
     botMsg = {
       content: {
         text: text.replace(/```json|```/g, "").trim()
       }
     };
   }

   // Thêm phản hồi của bot vào lịch sử
   if (botMsg.content && botMsg.content.text) {
     addToChatHistory(threadID, "assistant", botMsg.content.text);

     // Gửi tin nhắn phản hồi
     api.sendMessage({
       body: botMsg.content.text,
     }, event.threadID, (err, info) => {
       if (err) console.error("Lỗi khi gửi tin nhắn:", err);
     }, event.messageID);
   } else {
     console.error("Định dạng phản hồi không hợp lệ từ Gemini:", botMsg);
     api.sendMessage("Xin lỗi, tôi không hiểu được phản hồi.", event.threadID, event.messageID);
     return;
   }

   // Xử lý các hành động đặc biệt
   const { nhac, hanh_dong } = botMsg;

   // Xử lý tìm nhạc
   if (nhac && nhac.status === true) {
     await handleMusicSearch(nhac, api, threadID, event);
   }

   // Xử lý các hành động khác
   if (hanh_dong) {
     await handleActions(hanh_dong, api, threadID);
   }
 } catch (error) {
   console.error("Lỗi khi xử lý phản hồi:", error);
   api.sendMessage("Đã có lỗi xảy ra khi xử lý phản hồi!", event.threadID, event.messageID);
 }
}

// Tách logic xử lý nhạc thành hàm riêng
async function handleMusicSearch(nhac, api, threadID, event) {
 const keywordSearch = nhac.keyword;
 if (!keywordSearch) {
   api.sendMessage("❌ Thiếu từ khóa tìm kiếm âm nhạc", threadID);
   return;
 }

 try {
   // Đã xóa dòng thông báo "Đang tìm kiếm bài hát" ở đây

   const dataaa = await searchSoundCloud(keywordSearch);

   if (!dataaa || dataaa.length === 0) {
     api.sendMessage(`❎ Không tìm thấy bài hát nào với từ khóa "${keywordSearch}"`, threadID);
     return;
   }

   const firstResult = dataaa[0];
   const urlaudio = firstResult.url;

   try {
     const dataPromise = await scl_download(urlaudio);

     setTimeout(async () => {
       try {
         const audioURL = dataPromise.url;
         if (!audioURL) {
           api.sendMessage("❌ Không thể tải bài hát này.", threadID);
           return;
         }

         // Thêm xử lý lỗi và retry cho phần tải file
         let retryCount = 0;
         const maxRetries = 2;
         let stream;

         while (retryCount <= maxRetries) {
           try {
             const response = await axios.get(audioURL, {
               responseType: 'arraybuffer',
               timeout: 30000,
               headers: {
                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
               }
             });

             stream = response.data;
             break; // Thoát khỏi vòng lặp nếu thành công
           } catch (err) {
             retryCount++;
             if (retryCount > maxRetries) {
               throw err; // Ném lỗi nếu đã thử lại đủ số lần
             }
             // Chờ một chút trước khi thử lại
             await new Promise(resolve => setTimeout(resolve, 2000));
           }
         }

         if (!stream) {
           throw new Error("Không thể tải file âm thanh");
         }

         const path = __dirname + `/cache/${Date.now()}.mp3`;

         fs.writeFileSync(path, Buffer.from(stream, 'binary'));

         api.sendMessage({
           body: `🎵 Bài hát: ${dataPromise.title || firstResult.title}
🎶 Nguồn: SoundCloud`,
           attachment: fs.createReadStream(path)
         }, threadID, () => {
           setTimeout(() => {
             try {
               fs.unlinkSync(path);
             } catch (e) {
               console.error("Lỗi khi xóa file tạm:", e);
             }
           }, 2 * 60 * 1000);
         });
       } catch (err) {
         console.error("Lỗi khi tải nhạc:", err);
         api.sendMessage("❌ Đã xảy ra lỗi khi tải nhạc. Vui lòng thử lại sau.", threadID);
       }
     }, 3000);
   } catch (err) {
     console.error("Lỗi khi tải thông tin nhạc:", err);
     api.sendMessage("❌ Không thể tải thông tin bài hát. Vui lòng thử lại sau.", threadID);
   }
 } catch (err) {
   console.error("Lỗi khi tìm kiếm nhạc:", err);
   api.sendMessage("❌ Đã xảy ra lỗi khi tìm kiếm nhạc.", threadID, event.messageID);
 }
}

// Tách logic xử lý hành động thành hàm riêng
async function handleActions(hanh_dong, api, threadID) {
 try {
   if (hanh_dong.doi_biet_danh && hanh_dong.doi_biet_danh.status === true) {
     try {
       await api.changeNickname(
         hanh_dong.doi_biet_danh.biet_danh_moi,
         hanh_dong.doi_biet_danh.thread_id,
         hanh_dong.doi_biet_danh.user_id
       );
     } catch (e) {
       console.error("Lỗi khi Đổi biệt danh:", e);
     }
   }

   if (hanh_dong.doi_icon_box && hanh_dong.doi_icon_box.status === true) {
     try {
       await api.changeThreadEmoji(
         hanh_dong.doi_icon_box.icon,
         hanh_dong.doi_icon_box.thread_id
       );
     } catch (e) {
       console.error("Lỗi khi đổi icon nhóm:", e);
     }
   }

   if (hanh_dong.doi_ten_nhom && hanh_dong.doi_ten_nhom.status === true) {
     try {
       // Sửa từ changeThreadName thành setTitle
       await api.setTitle(
         hanh_dong.doi_ten_nhom.ten_moi,
         hanh_dong.doi_ten_nhom.thread_id
       );
     } catch (e) {
       console.error("Lỗi khi đổi tên nhóm:", e);
     }
   }

   if (hanh_dong.kick_nguoi_dung && hanh_dong.kick_nguoi_dung.status === true) {
     try {
       await api.removeUserFromGroup(
         hanh_dong.kick_nguoi_dung.user_id,
         hanh_dong.kick_nguoi_dung.thread_id
       );
     } catch (e) {
       console.error("Lỗi khi kick người dùng:", e);
     }
   }

   if (hanh_dong.add_nguoi_dung && hanh_dong.add_nguoi_dung.status === true) {
     try {
       await api.addUserToGroup(
         hanh_dong.add_nguoi_dung.user_id,
         hanh_dong.add_nguoi_dung.thread_id
       );
     } catch (e) {
       console.error("Lỗi khi thêm người dùng:", e);
     }
   }
 } catch (error) {
   console.error("Lỗi khi thực hiện hành động:", error);
   if (threadID) {
     api.sendMessage("❌ Đã xảy ra lỗi khi thực hiện hành động.", threadID);
   }
 }
}
