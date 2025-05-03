module.exports.config = {
 name: "antijoin",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 1,
 description: "Cấm thành viên mới vào nhóm",
 usages: "",
 commandCategory: "Quản Trị Viên",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('[ 𝐀𝐍𝐓𝐈 𝐉𝐎𝐈𝐍 ] » 𝗖𝗮̂̀𝗻 𝗾𝘂𝘆𝗲̂̀𝗻 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝗲̂𝗺 𝘃𝗮̀ 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data.newMember == "undefined" || data.newMember == false) data.newMember = true;
    else data.newMember = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`[ 𝐀𝐍𝐓𝐈 𝐉𝐎𝐈𝐍 ] » 𝗧𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 ${(data.newMember == true) ? "𝗯𝗮̣̂𝘁" : "𝘁𝗮̆́𝘁"} 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗮𝗻𝘁𝗶 𝗷𝗼𝗶𝗻 ✅`, event.threadID, event.messageID);
                                                         }