const mineflayer = require('mineflayer')

function createBot(){

const bot = mineflayer.createBot({
  host: 'FaaTheDawg.aternos.me',
  port: 37919,
  username: 'GigaNiga',
  version: '1.12.1'
})

bot.on('spawn', () => {

console.log("Bot joined")

// random chat messages
const messages = [
"hello",
"anyone mining?",
"nice server",
"what are you guys doing?",
"just chilling"
]

// chat every 3 minutes ONLY if players are present
function randomChat(){

const players = Object.keys(bot.players).filter(p => p !== bot.username)

if(players.length > 0){

const msg = messages[Math.floor(Math.random()*messages.length)]
bot.chat(msg)

}

setTimeout(randomChat,180000) // 3 minutes
}

randomChat()


// random walking
function randomWalk(){

const actions = ['forward','back','left','right']
const action = actions[Math.floor(Math.random()*actions.length)]

bot.setControlState(action,true)

setTimeout(()=>{
bot.setControlState(action,false)
},1000 + Math.random()*2000)

setTimeout(randomWalk,10000 + Math.random()*20000)

}

randomWalk()


// random jumping
setInterval(()=>{
bot.setControlState('jump',true)

setTimeout(()=>{
bot.setControlState('jump',false)
},400)

},20000 + Math.random()*30000)


// random looking around
function randomLook(){

const yaw = Math.random()*Math.PI*2
const pitch = (Math.random()-0.5)*Math.PI

bot.look(yaw,pitch,true)

setTimeout(randomLook,8000 + Math.random()*15000)

}

randomLook()

})


// reconnect automatically
bot.on('end',()=>{
console.log("Reconnecting...")
setTimeout(createBot,5000)
})

bot.on('error',(err)=>{
console.log(err)
})

}

createBot()
