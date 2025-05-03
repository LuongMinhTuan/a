module.exports.config = {
 name: 'π',
 version: '1.0.1',
 hasPermission: 2,
 credits: 'DongDev',
 description: 'sai lệnh && info hệ thống bot',
 commandCategory: 'Admin',
 usages: '[]',
 cooldowns: 5,
 usePrefix: false,
 images: [],
};

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const moment = require('moment-timezone');
const os = require('os');

function getDependencyCount() {
 try {
 const packageJsonString = fs.readFileSync('package.json', 'utf8');
 const packageJson = JSON.parse(packageJsonString);
 const depCount = Object.keys(packageJson.dependencies || {}).length;
 const devDepCount = Object.keys(packageJson.devDependencies || {}).length;
 return { depCount, devDepCount };
 } catch (error) {
 console.error('Không thể đọc file package.json:', error);
 return { depCount: -1, devDepCount: -1 };
 }
}

function getStatusByPing(ping) {
 if (ping < 200) {
 return 'tốt';
 } else if (ping < 800) {
 return 'bình thường';
 } else {
 return 'xấu';
 }
}

module.exports.run = async function ({ api, event, Threads, Users }) {
 const { threadID: tid, messageID: mid } = event;

 let totalSizeInBytes = 0;
 function calculateSize(filePath) {
 const stats = fs.statSync(filePath);
 totalSizeInBytes += stats.size;
 }

 function processFiles(dir) {
 const files = fs.readdirSync(dir);
 files.forEach(file => {
 const filePath = path.join(dir, file);
 if (fs.statSync(filePath).isDirectory()) {
 processFiles(filePath);
 } else {
 calculateSize(filePath);
 }
 });
 }
 processFiles('./');
 const totalSizeInMegabytes = totalSizeInBytes / (1024 * 1024);
 const percentageOfTotal = (totalSizeInMegabytes / 1024) * 100;

 const holidayDate = '10/02/2024';
 const timezone = 'Asia/Ho_Chi_Minh';
 const currentDate = moment().tz(timezone);
 const holiday = moment.tz(holidayDate, 'DD/MM/YYYY', timezone);
 const duration = moment.duration(holiday.diff(currentDate));
 const daysRemaining = Math.floor(duration.asDays());
 const hoursRemaining = duration.hours();
 const minutesRemaining = duration.minutes();
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");

 const { depCount, devDepCount } = await getDependencyCount();

 const botStatus = getStatusByPing(Date.now() - event.timestamp);

 const uptime = process.uptime() + global.config.UPTIME;
 const uptimeHours = Math.floor(uptime / (60 * 60));
 const uptimeMinutes = Math.floor((uptime % (60 * 60)) / 60);
 const uptimeSeconds = Math.floor(uptime % 60);
 const uptimeString = `${uptimeHours.toString().padStart(2, '0')}:${uptimeMinutes.toString().padStart(2, '0')}:${uptimeSeconds.toString().padStart(2, '0')}`;

 let name = await Users.getNameUser(event.senderID);

 api.sendMessage(`==== [ ${global.config.BOTNAME} ] ====\n──────────────────\n[⏳] →⁠ Bot đã online: ${uptimeString}\n[📌] →⁠ Dấu lệnh hệ thống: ${global.config.PREFIX}\n[📝] →⁠ Tổng số package sống: ${depCount}\n[📜] →⁠ Tống số package chết: ${devDepCount}\n[👥] →⁠ Tổng người dùng: ${global.data.allUserID.length}\n[🏘️] →⁠ Tổng nhóm: ${global.data.allThreadID.length}\n[🔎] →⁠ Tình trạng bot: ${botStatus}\n[⚙️] →⁠ Ping: ${Date.now() - event.timestamp}ms\n[🗂️] →⁠ Dung lượng file: ${totalSizeInMegabytes.toFixed(2)}/1024 MB (${percentageOfTotal.toFixed(2)}%)\n[🎇] →⁠ Còn ${daysRemaining} ngày ${hoursRemaining} giờ ${minutesRemaining} phút là đến Tết Nguyên Đán 2024 🎉\n[👤] →⁠ Yêu cầu bởi: ${name}\n──────────────────\n[⏰] →⁠ Time: ${gio}`, tid, mid);
};