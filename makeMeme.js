const options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'А ты точно..', callback_data: '0' }, { text: 'Чёрная рамка', callback_data: '1' }],
      [{ text: 'А ты точно..', callback_data: '2' }, { text: 'Чёрная рамка', callback_data: '3' }],
    ]
  })
}
const makeMeme = async (bot, msg) => {
  return bot.sendMessage(msg.chat.id, `Выбери заготовку для мема: `, options)
}

module.exports = makeMeme