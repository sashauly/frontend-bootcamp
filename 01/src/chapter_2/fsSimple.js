import { promises, readFile, writeFile } from 'fs';

// eslint-disable-next-line max-len
// Вам нужно прочитать данные из файла file1.txt, после прочтения полученные данные надо записать в файл file2.txt
// Реализовать это надо 3 разными способами, для каждого способа своя функция:
// eslint-disable-next-line max-len
// - readAndWriteCallbackHell() - в данной функции вы должны использовать только передачу коллбека в ассинхронную функцию.
// - readAndWritePromises() - в данной функции вы должны использовать промисы и then.
// - readAndWriteAsyncAwait() - в данной функции можно использовать async await.

const readAndWriteCallbackHell = () => {
  readFile('./files/fsSimple/file1.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    writeFile('./files/fsSimple/file2.txt', data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('CallBack Hell SUCCESS!');
    });
  });
};

const readAndWritePromises = () => {
  promises
    .readFile('./files/fsSimple/file1.txt', 'utf-8')
    .then((data) => promises.writeFile('./files/fsSimple/file2.txt', data))
    .then(() => console.log('.then Promises SUCCESS!'))
    .catch((err) => console.error(err));
};

const readAndWriteAsyncAwait = async () => {
  try {
    const data = await promises.readFile('./files/fsSimple/file1.txt', 'utf-8');
    await promises.writeFile('./files/fsSimple/file2.txt', data);
    console.log('async await SUCCESS!');
  } catch (err) {
    console.error(err);
  }
};

export default {
  readAndWriteAsyncAwait,
  readAndWritePromises,
  readAndWriteCallbackHell,
};
readAndWriteAsyncAwait();
readAndWritePromises();
readAndWriteCallbackHell();
