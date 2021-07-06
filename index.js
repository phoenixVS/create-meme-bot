const TelegramApi = require('node-telegram-bot-api')
const makeMeme = require('./makeMeme')
const token = '1862670190:AAGkklgQOVq2555Lz4FOvk6hs1e17AxJ0co'

const bot = new TelegramApi(token, { polling: true})

const start = () => {
  bot.setMyCommands([
    {command: '/make', description: 'create a meme' }
  ])
  bot.on('message', async (msg) => {
    const name = msg.from.first_name
    const text = msg.text
    const chatId = msg.chat.id
    try {
      if (text === '/start') {
        await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/8a1/9aa/8a19aab4-98c0-37cb-a3d4-491cb94d7e12/3.webp')
        await bot.sendMessage(chatId, `Привет ${name}, Ты зашел куда нужно;)\n`)
        return makeMeme(bot, msg)
      }
      if (text === '/make') {
        return makeMeme(bot, msg)
      }

      if (text.includes('хуй')) {
        return bot.sendMessage(chatId, 'Я б тебя послал, но у меня этот проект open-source на гитхабе...')
      }
      if (text === 'да' || text === 'Да' ) {
        return bot.sendMessage(chatId, 'Пизда')
      }
      return bot.sendMessage(chatId, 'Это было неуместно.. может лучше попробуем поделать мемы?)')
    } catch (e) {
      console.log(`Error `, e);
      return bot.sendMessage(chatId, 'Сервер упал ><.')
    }
  })

  bot.on('callback_query', (msg) => {
    const meme_id = msg.data
    const chatId = msg.chat.id
  })
}

start()