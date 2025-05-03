module.exports.config = {
 name: "mont",
 version: "1.0.2",
 hasPermssion: 0,
 credits: "Mirai Team mod by DongDev",
 description: "Kiểm tra số tiền của bản thân hoặc người được tag",
 commandCategory: "Tài Chính",
 usages: "[ Trống|Tag ]",
 cooldowns: 5,
 usePrefix: false
};

module.exports.run = async function({ api, event, args, Currencies, Users }) {
 const { threadID, messageID, senderID, mentions } = event;

 // Lấy số dư hiện tại và số dư trước đó
 const currentBalance = (await Currencies.getData(senderID)).money;
 const previousBalance = (await Currencies.getData(senderID, true)).money;

 if (!args[0]) {
 const moneyFormatted = currentBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
 const name = await Users.getNameUser(event.senderID);

 // Lấy lịch sử giao dịch
 const transactionHistory = await getCurrenciesHistory(senderID);

 // Hiển thị lịch sử giao dịch trong tin nhắn
 api.sendMessage(`[ Ví Tiền Mặt ]\n────────────────────\n👤 Name: ${name}\n🎫 Số tiền: ${moneyFormatted}$\n${transactionHistory}\n────────────────────\n✏️ Dùng work nếu muốn kiếm thêm thu nhập nhé!`, threadID, messageID);

 // So sánh và thông báo nếu có sự thay đổi
 if (currentBalance !== previousBalance) {
 const change = currentBalance - previousBalance;
 const changeFormatted = change.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
 api.sendMessage(`📅 Số dư đã thay đổi: ${changeFormatted}$`, threadID);
 }

 // Cập nhật số dư trước đó
 Currencies.setData(senderID, { money: currentBalance }, true);
 } else {
 // Xử lý các trường hợp khác tương tự
 }
};

// Hàm lấy lịch sử giao dịch từ Currencies
async function getCurrenciesHistory(userId) {
 const data = await Currencies.getData(userId, true);
 if (data && data.history) {
 return data.history.map(entry => `📅 ${new Date(entry.timestamp).toLocaleString()}: ${entry.transactionType === 'add' ? 'Cộng' : 'Trừ'} ${entry.amount}$`).join('\n');
 }
 return '📅 Không có lịch sử giao dịch';
}