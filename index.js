const dbd = require("dbd.js")
const config = require("./config.json")
const bot = new dbd.Bot({
sharding: false,
shardAmount: 2,
token: config.token,
prefix: ['$getServerVar[prefix]', '!']
})
 
bot.onMessage(
print("Бот онлайн! ")

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
code: command.code
}) // Variables
bot.variables({
    prefix: "!"
}) // Status
bot.status({
  text: "to $serverCount servers 🎶",
  type: "LISTENING",
  time: 12
})
} 
}