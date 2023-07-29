const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.id === 'clear') {
      display.textContent = '';
    } else if (display.textContent !== '' && item.id === 'equal') {
      display.textContent = eval(display.textContent);
    } else if (display.textContent == '' && item.id === 'equal') {
      display.textContent = 'Enter something!';
      setTimeout(() => {
        display.textContent = '';
      }, 1500);
    } else {
      display.textContent += item.id;
    }
  });
});
