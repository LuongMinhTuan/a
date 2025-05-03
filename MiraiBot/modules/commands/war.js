let stopWar = false; 
module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Niio-team",
    description: "War nát boxchat",
    commandCategory: "Quản Trị Viên",
    usages: "war/war stop",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    if (args[0] === 'stop') {
        stopWar = true;
        return api.sendMessage("Done", event.threadID);
    }

    var mention = Object.keys(event.mentions)[0];
    let name = event.mentions[mention];
    var arraytag = [];
    arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID);}
    var sendMessages = [
"đụ lồn sánh cặc",
"rén à",
"ẳng lên",
"sao im thế",
"không lại à😂",
"nhóc ác",
"mõm à",
"sủa đi",
"không lại à",
"sao câm vậy",
"đéo nói được gì à😂",
"non vc",
"nghĩ bằng tao không",
"spam với ai?",
"mày tuổi lồn",
"spam tiếp tao xem",
"sao non thế",
"nhục vc",
"ẳng to lên nào",
"sao ngậm cứt r",
"sủa đi con",
"sủa đéo lại à",
"con vô danh",
"sao mày gà thế",
"spam lại tao không?",
"non vc bọn nhóc",
"mày tuổi lồnn",
"sánh thế đéo nào bằng anh",
"ngu",
"đéo ăn lại à",
"sao không sủa đi em",
"em non vcl",
"gà vãi",
"em ăn c không",
"sao em nói chuyện ngu vậy",
"nhìn mặt đần thế",
"như nghiện",
"em bú đá lâu chưa",
"spam tiếp đi",
"sao câm rồi",
"spam lại anh không",
"dậy mà sủa đi nè",
"trốn rồi à",
"sao em nhập ngôn lâu v",
"nhìn em đần vãi",
"dậy mà đọ mõm nè",
"thích spam lắm mà",
"sao giờ câm thế",
"mẹ mày béo",
"bố mày gay",
"ông nội mày loạn luân với mẹ mày",
"bà ngoại mày loạn luân với bố mày",
"đẻ ra thứ ngu học",
"mồm còn hôi sữa",
"nói chuyện như thiểu năng",
"lại còn bị đần nữa",
"spam còn non lắm",
"em tuổi l",
"spam tiếp đê",
"sao chậm thế",
"sao câm thế",
"bí ngôn à",
"chắc bí ngôn nên đéo nói được rồi😂",
"ẳng ai thế em",
"sủa ngu zị",
"em nói chuyện đần vc",
"mẹ con ngu",
"rén rồi à",
"không dám ngóc dậy nữa à",
"em còn non lắm😂",
"về học lại mẫu giáo đi nhé",
"sống chật đất",
"súc vật chuyển sinh",
"sao mày spam chậm như rùa vậy",
"spam gì mà có mỗi tí tẹo thế kia",
"anh cân all nhé😂",
    ];

    var index = 0;

    var sendNextMessage = function() {
        if (stopWar) return;
        a(sendMessages[index]);
        index++;
        if (index >= sendMessages.length) {
            index = 0;
        }
        setTimeout(sendNextMessage, 2000);
    }

    sendNextMessage();
}