// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и
// символ который надо удалить из этого сообщения

function removeString(message, symbol) {
  let result = '';
  for (let ch = 0; ch < message.length; ch += 1) {
    if (message[ch] !== symbol) {
      result += message[ch];
    }
  }
  return result;
}

const result = removeString('Большое и интересное сообщение', 'о'); // Бльше и интересне сбщение
console.log(result);
