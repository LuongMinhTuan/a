const fs = require('fs');
const path = require('path');
const { simi } = require('./../../includes/controllers/sim.js');

module.exports.config = {
    name: 'sim',
    version: '1.1.3',
    hasPermssion: 1,
    credits: 'no',
    description: 'Trò truyện cùng simi chat, có thể bật/tắt',
    commandCategory: 'Hệ Thống',
    usages: '[on/off]',
    cooldowns: 2,
};

const dataFilePath = path.resolve(__dirname, 'data/bot.json');

function loadData() {
    if (!fs.existsSync(dataFilePath)) return {};
    try {
        return JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    } catch (e) {
        console.error('Lỗi khi tải dữ liệu:', e);
        return {};
    }
}

function saveData(data) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
        console.error('Lỗi khi lưu dữ liệu:', e);
    }
}

module.exports.run = async function({ api, event, args }) {
    const threadID = event.threadID;
    const data = loadData();

    if (args[0] === 'on') {
        data[threadID] = true;
        saveData(data);
        return api.sendMessage('Đã bật chức năng trò chuyện cùng bot trong nhóm này!', threadID);
    } else if (args[0] === 'off') {
        data[threadID] = false;
        saveData(data);
        return api.sendMessage('Đã tắt chức năng trò chuyện cùng bot trong nhóm này!', threadID);
    } else {
        return api.sendMessage('Vui lòng sử dụng: [on/off] để bật hoặc tắt tính năng.', threadID);
    }
};

module.exports.handleEvent = async function({ api, event }) {
    const threadID = event.threadID;
    const message = event.body?.toLowerCase();

    const data = loadData();
    if (!data[threadID]) return;

    const keywords = ['Mirai', 'Bot', 'bot đâu', 'bot off', 'bot ơi', 'bot xịn', 
        'kêu mọi người lên tương tác đi bot', 'chào bot', 'hello bot', 'Mirai', 'mirai', 'bye bot'];
    const responses = [
        'kêu em có gì hok 💓', 'ơi em nghe nè', 'có gì hog em nè',
        'em nè', 'kêu em có gì không', '💞 em nghe', 'em đây'
    ];

    if (!message || !keywords.includes(message)) return;

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    api.sendMessage(
        { body: randomResponse },
        threadID,
        (err, data) => {
            if (err) return console.error(err);
            global.client.handleReply.push({ name: this.config.name, messageID: data.messageID });
        },
        event.messageID
    );
};

module.exports.handleReply = async function({ handleReply: $, api, event }) {
    const threadID = event.threadID;
    const data = loadData();

    if (!data[threadID]) return;

    try {
        const response = await simi('ask', event.body);
        if (response.error || !response.answer) {
            return api.sendMessage('Bot gặp sự cố khi trả lời. Vui lòng thử lại sau!', threadID, event.messageID);
        }
        api.sendMessage(
            { body: response.answer },
            threadID,
            (err, data) => {
                if (err) return console.error(err);
                global.client.handleReply.push({ name: this.config.name, messageID: data.messageID });
            },
            event.messageID
        );
    } catch (error) {
        console.error(error);
        api.sendMessage('Có lỗi xảy ra trong quá trình xử lý.', threadID, event.messageID);
    }
};