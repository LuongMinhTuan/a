module.exports.config = {
    name: "setqtv",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "ErikaOwO",
    description: "con cac",
    commandCategory: "Quản Trị Viên",
    usages: "[test]",
    cooldowns: 5
};
module.exports.run = async function ({ event, api, Currencies, args ,Users, Threads }) {
  //if(!args[0]) return api.sendMessage('co cai db', event.threadID)
  let dataThread = (await Threads.getData(event.threadID)).threadInfo;
  if (args.length == 0) return api.sendMessage(`===== [ 𝗦𝗘𝗧𝗤𝗧𝗩 ] =====\n──────────────────\n/setqtv add @tag hoặc reply → thêm thành viên làm quản trị viên nhóm\n/setqtv remove @tag hoặc reply → xóa quản trị viên của người khác`, event.threadID, event.messageID);
  if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID()) && !dataThread.adminIDs.some(item => item.id == event.senderID)) return api.sendMessage('Mày đéo có quyền đâu cút đi 😏', event.threadID, event.messageID);
  if (args[0] == 'add') {
    if (event.type == "message_reply") {
      var uid1 = event.senderID
      var uid = event.messageReply.senderID
      api.sendMessage('Thả cảm xúc "❤" tin nhắn này để xác nhận',  event.threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name, 
      type: 'add' ,
      messageID: info.messageID,
      author: uid1,
      userID: uid
    })
        event.messageID
})
    } else if(args.join().indexOf('@') !== -1){
      var uid = Object.keys(event.mentions)[0]
      var uid1 = event.senderID
      api.sendMessage('Thả cảm xúc "❤" tin nhắn này để xác nhận',  event.threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name,
      type: 'add' ,
      messageID: info.messageID,
      author: uid1,
      userID: uid
    })
        event.messageID
})
    } else {
      var uid1 = event.senderID
      api.sendMessage('Thả cảm xúc "❤" tin nhắn này để xác nhận',  event.threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name,
      type: 'add' ,
      messageID: info.messageID,
      author: uid1,
      userID: uid1
    })
        event.messageID
})
    }
  }
    if (args[0] == 'remove') {
    if (event.type == "message_reply") {
      var uid1 = event.senderID
      var uid = event.messageReply.senderID
      api.sendMessage('Thả cảm xúc "❤" tin nhắn này để xác nhận',  event.threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name, 
      type: 'remove' ,
      messageID: info.messageID,
      author: uid1,
      userID: uid
    })
        event.messageID
})
    } else if(args.join().indexOf('@') !== -1){
      var uid = Object.keys(event.mentions)[0]
      var uid1 = event.senderID
      api.sendMessage('Thả cảm xúc "❤" tin nhắn này để xác nhận',  event.threadID, (error, info) => {
  global.client.handleReaction.push({
      name: this.config.name,
      type: 'remove' ,
      messageID: info.messageID,
      author: uid1,
      userID: uid
    })
        event.messageID
})
    }
  }
}
module.exports.handleReaction = async function({ event, api, handleReaction, Currencies,Users}){
  console.log(handleReaction)
  if (event.userID != handleReaction.author) return;
  if (event.reaction != "❤") return;
  if(handleReaction.type == 'add'){
    var name =  (await Users.getData(handleReaction.userID)).name
          api.changeAdminStatus(event.threadID, handleReaction.userID, true, editAdminsCallback)
          function editAdminsCallback(err) {
            if (err) return api.sendMessage("📌 Bot không đủ quyền hạn để thêm quản trị viên!", event.threadID, event.messageID);
            return api.sendMessage(`Đã thêm ${name} làm quản trị viên nhóm`, event.threadID, event.messageID);
          }
  }
  if(handleReaction.type == 'remove'){
        var name =  (await Users.getData(handleReaction.userID)).name
          api.changeAdminStatus(event.threadID, handleReaction.userID, false, editAdminsCallback)
          function editAdminsCallback(err) {
            if (err) return api.sendMessage("📌 Bot không đủ quyền hạn để gỡ quản trị viên!", event.threadID, event.messageID);
            return api.sendMessage(`Đã gỡ quản trị viên của ${name} thành công.`, event.threadID, event.messageID);
          }
  }
  }