const axios = require("axios");

module.exports.config = {
  name: "like",
  version: "1.0.3",
  hasPermission: 0,
  credits: "DongDev",
  description: "buff like Facebook max speed",
  commandCategory: "Công Cụ",
  cooldowns: 5,
  images: [],
};

module.exports.run = async ({ event, api }) => {
  const tokens = [
    "EAAD6V7os0gcBO118rXX4bR8MEidZB4j6MAd63EC7gZCElCZBuqZBtKkZC3VAVJyLOjFZCdBi1i2KoaSDZAhnvyqSCYxFveTW3DeX7UsD6613H6OhlY0TZC5TVBrk0OL6TUJibhnfmQQZBP8oRXiELlVmWwEHk40wZAjzcJSUVJWszW09mIX1YJDBoaVON6xhGMJoToqgZDZD",
    "EAAD6V7os0gcBO118rXX4bR8MEidZB4j6MAd63EC7gZCElCZBuqZBtKkZC3VAVJyLOjFZCdBi1i2KoaSDZAhnvyqSCYxFveTW3DeX7UsD6613H6OhlY0TZC5TVBrk0OL6TUJibhnfmQQZBP8oRXiELlVmWwEHk40wZAjzcJSUVJWszW09mIX1YJDBoaVON6xhGMJoToqgZDZD"
  ];

  api.sendMessage(
    `[ LIKE FOLLOW FACEBOOK ]\n────────────────────\n\n1. Khởi động tool - reply kèm id muốn buff\n2. Thoát tool\n────────────────────\n🔐 Số token hiện có: ${tokens.length}\n📌 Reply (phản hồi) STT để lựa chọn chế độ`,
    event.threadID,
    (error, info) => {
      global.client.handleReply.push({
        type: "choose",
        name: module.exports.config.name,
        author: event.senderID,
        messageID: info.messageID,
        tokens,
      });
    }
  );
};

module.exports.handleReply = async function ({
  args,
  event,
  Users,
  api,
  handleReply,
  Currencies,
  __GLOBAL,
}) {
  const tokens = handleReply.tokens || [];

  switch (handleReply.type) {
    case "choose": {
      const choose = parseInt(event.body);

      if (isNaN(choose) || choose < 1 || choose > 2) {
        return api.sendMessage(
          "⚠️ Vui lòng nhập một con số hợp lệ (1 hoặc 2)",
          event.threadID
        );
      }

      switch (choose) {
        case 1: {
          const id = '444250201188189';
          api.sendMessage(
            `🔄 Tiến hành khởi chạy buff like!`,
            event.threadID,
            async (err, info) => {
              if (err) {
                console.error("Error sending message:", err);
                return;
              }

              setTimeout(async () => {
                await api.unsendMessage(info.messageID);
              }, 100000);

              api.unsendMessage(handleReply.messageID);

              let successCount = 0;
              let errorCount = 0;
              let currentIndex = 0;

              const makeRequest = async () => {
                if (currentIndex < tokens.length) {
                  const accessToken = tokens[currentIndex];

                  if (!accessToken) {
                    api.sendMessage("Token truy cập không hợp lệ");
                    currentIndex++;
                    makeRequest();
                    return;
                  }

                  const headers = {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36",
                    "Accept-Language": "vi-VN, en-US;q=0.9",
                  };

  try {
     const response = await axios.post(`https://graph.facebook.com/${id}/likes`,
                      null,
                      {
                        params: {
                          access_token: accessToken,
                        },
                        headers,
                     });
       if (response.data.error) {
                      errorCount++;
                    } else {
                      successCount++;
                    }
                  } catch (error) {
                    errorCount++;
                  }
                  tokens.splice(currentIndex, 1);

                  currentIndex++;
                  setTimeout(makeRequest, 30000);
                } else {
                  const resultMessage = `🎉 Kết quả buff like Facebook:\n👍 Thành công: ${successCount} like\n🚫 Thất bại: ${errorCount} like`;
                  api.sendMessage(resultMessage, event.threadID);
                }
              };

              makeRequest();
            }
          );
          break;
        }
        case 2: {
          api.unsendMessage(handleReply.messageID);
          break;
        }
      }
      break;
    }
  }
};