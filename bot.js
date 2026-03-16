const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')

function createBot(){

const bot = mineflayer.createBot({
  host: 'FaaTheDawg.aternos.me',
  port: 37919,
  username: 'GigaNiga',
  version: '1.12.1'
})

bot.loadPlugin(pathfinder)

bot.on('spawn', () => {

console.log("Bot joined")

const mcData = require('minecraft-data')(bot.version)
const defaultMove = new Movements(bot, mcData)

bot.pathfinder.setMovements(defaultMove)

startRandomChat()
startMining()

})

bot.on('end', ()=>{
console.log("Reconnecting...")
setTimeout(createBot,5000)
})

bot.on('error', console.log)

function startRandomChat(){

const messages = [
"hello everyone",
"mining time",
"any diamonds today?",
"this server is cool",
"just chilling"
]

function sendMessage(){

const msg = messages[Math.floor(Math.random()*messages.length)]
bot.chat(msg)

// random delay 1–3 minutes
const delay = 60000 + Math.random()*120000

setTimeout(sendMessage, delay)

}

sendMessage()

}

function startMining(){

setInterval(()=>{

const block = bot.findBlock({
matching: block => block.name.includes('stone'),
maxDistance: 6
})

if(!block) return

bot.dig(block)

},10000)

}

}

createBot()
