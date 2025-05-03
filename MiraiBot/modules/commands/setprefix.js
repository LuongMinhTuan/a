module.exports.config = {
    name: "setprefix",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "Mirai Team",
    description: "Đặt lại prefix của nhóm",
    commandCategory: "Quản Trị Viên",
    usages: "[prefix/reset]",
    cooldowns: 0
};

module.exports.handleReaction = async function({ api, event, Threads, handleReaction }) {
    try {
        if (event.userID != handleReaction.author) return;
        const { threadID, messageID } = event;
        var data = (await Threads.getData(String(threadID))).data || {};
        const prefix = handleReaction.PREFIX;
        data["PREFIX"] = prefix;
        await Threads.setData(threadID, { data });
        await global.data.threadData.set(String(threadID), data);
        api.unsendMessage(handleReaction.messageID);

        api.changeNickname(`『 ${prefix} 』 ⪼ ${global.config.BOTNAME}`, event.threadID, event.senderID);
        return api.sendMessage(`☑️ Đã thay đổi prefix của nhóm thành: ${prefix}`, threadID, messageID);

    } catch (e) {
        return console.log(e);
    }
};

module.exports.run = async ({ api, event, args, Threads }) => {
    if (typeof args[0] === "undefined") return api.sendMessage(`⚠️ Vui lòng nhập prefix mới để thay đổi prefix của nhóm`, event.threadID, event.messageID);
    const prefix = args[0].trim();
    if (!prefix) return api.sendMessage(`⚠️ Vui lòng nhập prefix mới để thay đổi prefix của nhóm`, event.threadID, event.messageID);
    if (prefix === "reset") {
        var data = (await Threads.getData(event.threadID)).data || {};
        data["PREFIX"] = global.config.PREFIX;
        await Threads.setData(event.threadID, { data });
        await global.data.threadData.set(String(event.threadID), data);
        var uid = api.getCurrentUserID();
        api.changeNickname(`『 ${global.config.PREFIX} 』 ⪼ ${global.config.BOTNAME}`, event.threadID, uid);
        return api.sendMessage(`☑️ Đã reset prefix về mặc định: ${global.config.PREFIX}`, event.threadID, event.messageID);
    } else {
        api.sendMessage(`📝 Bạn đang yêu cầu set prefix mới: ${prefix}\n👉 Reaction tin nhắn này để xác nhận`, event.threadID, (error, info) => {
            global.client.handleReaction.push({
                name: "setprefix",
                messageID: info.messageID,
                author: event.senderID,
                PREFIX: prefix
            });
        });
    }
};