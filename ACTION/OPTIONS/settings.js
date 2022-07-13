global.nomerOwner = "6281316701742"
global.nomerOwner2 = "6281316701742"
global.nomerOwner3 = "+62 813-1670-1742"
global.ownerName = "SatganzDevs"
global.botName = "SatganzDevs "
global.sessionName ="session" 
global.runWith = "Heroku"
global.language = "id"
global.setmenu ="document"
global.docType = "docx"
global.Qoted = "mek"
global.baileysMd = true
global.multi = true
global.nopref = false
global.allpref = false
global.prefa = "."
global.fake = botName
global.publik = true
global.Console = false
global.apigc = "https://chat.whatsapp.com/K3r52vd93ZPFoxmrMxLhO8"
global.apiwa = "𝑯𝒚%20𝑲𝒂𝒌,%20𝑺𝒚𝒂%20𝑴𝒂𝒖%20𝑵𝒈𝒐𝒎𝒐𝒏𝒈%20𝑲𝒂𝒍𝒐%20𝑺𝒂𝒚𝒂%20𝑳𝒂𝒈𝒊%20𝑮𝒂𝒚"
global.copyright = "© SatganzDevs" 
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="SatganzDevs"
global.packName = "SatganzDevs"
global.authorName = "Crew"
global.setwelcome = "type1"
global.replyType = "web"
global.autoblockcmd = false
global.autoReport = false
global.autoLevel = false
global.autoSticker = false
global.autovn = false
global.chatBot = false
global.autorespon = false
global.gamewaktu = 60
global.waktu = 60000,
global.monayawal = 1000,
global.limitAwal = 15,
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}





const fs = require("fs");
const { color } = require("../STORAGE/ACC/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






