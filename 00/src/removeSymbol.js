// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и
// символ который надо удалить из этого сообщения

function removeSymbol(message, symbol) {
  let result = '';
  for (let ch = 0; ch < message.length; ch += 1) {
    if (message[ch] !== symbol) {
      result += message[ch];
    }
  }
  return result;
}

module.exports = removeSymbol;
