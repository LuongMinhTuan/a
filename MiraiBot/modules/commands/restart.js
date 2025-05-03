module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "Admin",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Đợi em tí :))",event.threadID, () =>process.exit(1))