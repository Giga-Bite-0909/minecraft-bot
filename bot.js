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

// random chat
const messages = [
"hello",
"anyone here?",
"nice server",
"just chilling",
"what's up"
]

setInterval(()=>{
const msg = messages[Math.floor(Math.random()*messages.length)]
bot.chat(msg)
},180000)


// random movement
setInterval(()=>{

const actions = ['forward','back','left','right']
const action = actions[Math.floor(Math.random()*actions.length)]

bot.setControlState(action,true)

setTimeout(()=>{
bot.setControlState(action,false)
},2000)

},15000)


// random jumping
setInterval(()=>{
bot.setControlState('jump',true)

setTimeout(()=>{
bot.setControlState('jump',false)
},500)

},20000)


// random looking
setInterval(()=>{
const yaw = Math.random() * Math.PI * 2
const pitch = (Math.random() - 0.5) * Math.PI
bot.look(yaw,pitch)
},10000)

})


bot.on('end',()=>{
console.log("Reconnecting...")
setTimeout(createBot,5000)
})

bot.on('error',(err)=>{
console.log(err)
})

}

createBot()
