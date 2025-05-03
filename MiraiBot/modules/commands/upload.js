const axios = require('axios').default;

module.exports.config = {
 name: 'upload',
 version: '1.3.0',
 hasPermission: 2,
 credits: 'DongDev',
 description: 'Tải lên ảnh, video hoặc nhạc lên filcatbox',
 commandCategory: 'Admin',
 usages: 'reply',
 cooldowns: 5,
};

module.exports.run = async ({ api, event, Currencies, args }) => {
 try {
 const { type, messageReply, threadID, messageID } = event;
 if (type !== 'message_reply' || messageReply.attachments.length === 0)
 return api.sendMessage(
 'Bạn phải reply một video, ảnh hoặc âm thanh nào đó',
 threadID,
 messageID
 );

 const linkUp = args.join(' ') || messageReply.attachments[0]?.url;
 if (!linkUp || linkUp.match(/(http(s?):)([/|.|\w|\s|-])+/g) === null)
 return api.sendMessage(
 'Vui lòng phản hồi hoặc nhập link 1 hình ảnh',
 event.threadID,
 event.messageID
 );

 const userhash = '91f754bb7a38e06337fbe48d5';

 try {
 const res = await axios.post(
 'https://catbox.moe/user/api.php',
 new URLSearchParams({
 reqtype: 'urlupload',
 userhash: userhash,
 url: linkUp,
 }).toString(),
 {
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded',
 'Userhash': userhash,
 },
 }
 );

 api.sendMessage(
 `=== 『 UPFILE SUCCESS 』 ===\n━━━━━━━━━━━━━━━━\n[🐧] ➜ Link file của bạn đây:\n${res.data}`,
 threadID,
 messageID
 );
 } catch (error) {
 api.sendMessage(
 `Lỗi khi thực hiện chức năng: ${error.message}`,
 threadID,
 messageID
 );
 // Xử lý lỗi nếu cần
 }
 } catch (error) {
 api.sendMessage(
 `Lỗi khi thực hiện chức năng: ${error.message}`,
 threadID,
 messageID
 );
 // Xử lý lỗi nếu cần
 }
};