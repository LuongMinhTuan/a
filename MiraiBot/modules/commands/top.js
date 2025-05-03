module.exports.config = {
    name: "top",
    version: "1.1.1",
    credits: "DC-Nam",
    hasPermssion: 0,
    description: "Xem top money, level... ở trong box hoặc sever?",
    usages: "[boxmoney|boxlevel|svmoney|svlevel] + độ dài list(ko có mặc định là 10)",
    commandCategory: "Tài Chính",
    cooldowns: 5
};
module.exports.run = async function({
    api: a,
    event: e,
    args: g,
    Currencies,
    Users
}) {
    const {
        threadID: t,
        messageID: m,
        senderID: s,
        participantIDs: pI
    } = e
    var arr = [],
        newArr = [],
        msg = "",
        type = g[0],
        leng = parseInt(g[1]) - 1
    const allType = ["boxmoney", "boxlevel", "svmoney", "svlevel"]
    if (!allType.includes(type)) return a.sendMessage(`===== [ 𝗠𝗘𝗡𝗨 𝗧𝗢𝗣 ] =====\n━━━━━━━━━━━━━━━━\n👉 𝗡𝗵𝗮̣̂𝗽 𝗧𝗢𝗣 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺\n\n🌸 !𝘁𝗼𝗽 𝗯𝗼𝘅𝗺𝗼𝗻𝗲𝘆: 𝘅𝗲𝗺 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗼́ 𝘀𝗼̂́ 𝗺𝗼𝗻𝗲𝘆 𝗻𝗵𝗶𝗲̂̀𝘂 𝗻𝗵𝗮̂́𝘁 𝗼̛̉ 𝗯𝗼𝘅 \n🌟 !𝘁𝗼𝗽 𝗯𝗼𝘅𝗹𝗲𝘃𝗲𝗹: 𝘅𝗲𝗺 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗼́ 𝗹𝗲𝘃𝗲𝗹 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁 𝗼̛̉ 𝘁𝗼𝗽 𝟭𝟬 \n💓 !𝘁𝗼𝗽 𝘀𝘃𝗺𝗼𝗻𝗲𝘆: 𝘅𝗲𝗺 𝘁𝗼𝗽 𝟭𝟬 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗼́ 𝘀𝗼̂́ 𝗺𝗼𝗻𝗲𝘆 𝗻𝗵𝗶𝗲̂̀𝘂 𝗻𝗵𝗮̂́𝘁 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗯𝗼𝘁 💵\n💗 !𝘁𝗼𝗽 𝘀𝘃𝗹𝗲𝘃𝗲𝗹: 𝘅𝗲𝗺 𝘁𝗼𝗽 𝟭𝟬 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗼́ 𝘀𝗼̂́ 𝗹𝗲𝘃𝗲𝗹 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁 𝗼̛̉ 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗺𝗶𝗿𝗮𝗶 𝗯𝗼𝘁 \n━━━━━━━━━━━━━━━━\n⚠️ 𝗩𝗗: !𝘁𝗼𝗽  𝗯𝗼𝘅𝗺𝗼𝗻𝗲𝘆 `, t, m)
    if (isNaN(leng) && leng) return a.sendMessage(`➝ Đ𝗼̣̂ 𝗱𝗮̀𝗶 𝗹𝗶𝘀𝘁 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝟭 𝗰𝗼𝗻 𝘀𝗼̂́`, t, m)
    switch (type) {
        case "boxmoney": {
            for (const id of pI) {
                let money = (await Currencies.getData(id)).money || 0
                arr.push({
                    id: id,
                    money: money
                })
            }
            arr.sort(S("money"))
            for (const i in arr) {
                newArr.push({
                    stt: i,
                    id: arr[i].id,
                    money: arr[i].money
                })
            }
            msg = `==== [ 𝗧𝗢𝗣 𝟭𝟬 𝗧𝗬̉ 𝗣𝗛𝗨́ ] ====\n━━━━━━━━━━━━━━━━━━\n`.toUpperCase()
            for (const i in newArr) {
                let name = (await Users.getData(newArr[i].id)).name || ""
                msg += `${i < 4 ? ICON(i) : `${i}.`} ${name}\n🎫 ${CC(newArr[i].money)}$\n`
                if (i == leng && i < newArr.length || i == 10) break
            }
            let find = newArr.find(i => i.id == s)
            msg += TX("money", find.stt, find.money)
            cc = `\n⚠️ Nghiêm cấm buôn bán coin phát hiện ban vĩnh viễn, phát hiện báo admin sẽ được thưởng`
            a.sendMessage(msg + cc, t, m)
        }
        break
    case "boxlevel": {
        for (const id of pI) {
            let exp = (await Currencies.getData(id)).exp || 0
            arr.push({
                id: id,
                exp: exp
            })
        }
        arr.sort(S("exp"))
        for (const i in arr) {
            newArr.push({
                stt: i,
                id: arr[i].id,
                exp: arr[i].exp
            })
        }
        msg = `== [ 𝗧𝗢𝗣 𝟭𝟬 𝗟𝗘𝗩𝗘𝗟 𝗡𝗛𝗢́𝗠 ] ==\n━━━━━━━━━━━━━━━━━━\n`.toUpperCase()
        for (const i in newArr) {
            let name = (await Users.getData(newArr[i].id)).name || ""
            msg += `${i < 4 ? ICON(i) : `${i}.`} ${name}\n→ 𝗟𝗘𝗩𝗘𝗟: ${LV(newArr[i].exp)}\n`
            if (i == leng && i < newArr.length || i == 10) break
        }
        let find = newArr.find(i => i.id == s)
        msg += TX("level", find.stt, find.exp)
        a.sendMessage(msg, t, m)
    }
    break
    case "svlevel": {
        let get = await Currencies.getAll(['userID', 'exp'])
        get.sort(S("exp"))
        for (const i in get) {
            arr.push({
                stt: i,
                id: get [i].userID,
                exp: get [i].exp
            })
        }
        msg = `= [ 𝗧𝗢𝗣 𝟭𝟬 𝗟𝗘𝗩𝗘𝗟 𝗦𝗘𝗩𝗘𝗥 ] =\n━━━━━━━━━━━━━━━━━━\n`.toUpperCase()
        for (const i in arr) {
            let name = (await Users.getData(arr[i].id)).name || ""
            msg += `${i < 4 ? ICON(i) : `${i}.`} ${name}\n→ 𝗟𝗘𝗩𝗘𝗟: ${LV(arr[i].exp)}\n`
            if (i == leng && i < arr.length || i == 10) break
        }
        let find = arr.find(i => i.id == s)
        msg += TX("level", find.stt, find.exp)
        a.sendMessage(msg, t, m)
    }
    break
    case "svmoney": {
        let get = await Currencies.getAll(['userID', 'money'])
        get.sort(S("money"))
        for (const i in get) {
            arr.push({
                stt: i,
                id: get [i].userID,
                money: get [i].money
            })
        }
        msg = `==== [ 𝗧𝗢𝗣 𝟭𝟬 𝗧𝗬̉ 𝗣𝗛𝗨́ ] ====\n━━━━━━━━━━━━━━━━━━\n`.toUpperCase()
        for (const i in arr) {
            let name = (await Users.getData(arr[i].id)).name || ""
            msg += `${i < 4 ? ICON(i) : `${i}.`} ${name}\n🎫 ${CC(arr[i].money)}$\n`
            if (i == leng && i < arr.length || i == 10) break
        }
        let find = arr.find(i => i.id == s)
        msg += TX("money", find.stt, find.money)
        hh = `\n⚠️ Nghiêm cấm buôn bán coin phát hiện ban vĩnh viễn, phát hiện báo admin sẽ được thưởng`
        a.sendMessage(msg + hh, t, m)
    }
    break
    }
}

function LV(x) {
    return Math.floor((Math.sqrt(1 + (4 * x) / 3) + 1) / 2)
}

function CC(n) {
    return n.toLocaleString('en-US', {
        minimumFractionDigits: 2
    })
}

function ICON(i) {
    return i == 0 ? "🏆" : i == 1 ? "🥇" : i == 2 ? "🥈" : i == 3 ? "🥉" : ""
}

function S(k) {
    return function(a, b) {
        let i = 0;
        if (a[k] > b[k]) {
            i = 1
        } else if (a[k] < b[k]) {
            i = -1
        }
        return i * -1
    }
}

function TX(tx, i, x) {
  return `━━━━━━━━━━━━━━━━━━\n${i >= 11 ? `→ 𝗕𝗮̣𝗻 đ𝘂̛́𝗻𝗴 𝘁𝗵𝘂̛́: ${i}\n➝ ${tx == "money" ? `𝗠𝗢𝗡𝗘𝗬: ${CC(x)}$` : `𝗟𝗘𝗩𝗘𝗟: ${LV(x)}`}` : i >= 1 && i <= 4 ? "→ 𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 đ𝗮𝗻𝗴 𝗰𝗼́ 𝗺𝗮̣̆𝘁 𝘁𝗿𝗼𝗻𝗴 𝗧𝗢𝗣 " : i == 0 ? "➝ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̣𝗻 đ𝗮𝗻𝗴 𝗹𝗮̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝘂̛́𝗻𝗴 𝗧𝗢𝗣 đ𝗮̂̀𝘂 " : "→ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̣𝗻 đ𝗮𝗻𝗴 𝗰𝗼́ 𝗺𝗮̣̆𝘁 𝘁𝗿𝗼𝗻𝗴 𝗧𝗢𝗣 10"}`
}