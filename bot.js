const mineflayer = require('mineflayer')

function createBot() {

const bot = mineflayer.createBot({
  host: 'FaaTheDawg.aternos.me',
  port: 37919,
  username: 'Technoblade',
  version: '1.12.1'
})

bot.on('spawn', () => {
console.log("Bot joined")

setInterval(()=>{
bot.chat("hello")
},180000)

})

bot.on('end',()=>{
setTimeout(createBot,5000)
})

}

createBot()