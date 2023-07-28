import { readdir, stat } from 'fs/promises';
import path from 'path';
import cliProgress from 'cli-progress';
// Тебе предстоит написать progressbar, применимый не к статически заданному времени,
// eslint-disable-next-line max-len
// а к размеру "загружаемых" файлов. На основании полученых размеров файлов, реализуй свой progressbar.

// Твой прогрессбар будет заполняться до общего размера всех имеющихся файлов в папке.
// Если у тебя есть файл, размером 5Кб при общем размере всех файлов - 10 Кб,
// eslint-disable-next-line max-len
// то твоя полоса загрузки после обработки такого файла должна заполниться на 50% (100% * (5Кб / 10Кб)).

// Сделай полосу загрузки(progressbar) в Консоли Терминала. Не в браузере!
// Она должна увеличиваться с каждым новым загруженным файлом

const progressbar = async () => {
  const folderPath = './files/fsHard';

  let totalSize = 0;
  const arrayOfFiles = [];
  const files = await readdir(folderPath);

  await Promise.all(
    files.map(async (file) => {
      const stats = await stat(path.join(folderPath, '/', file));
      arrayOfFiles.push(stats.size);
      totalSize += stats.size;
    }),
  );

  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic,
  );

  progressBar.start(totalSize, 0);
  let currentSize = 0;
  for (const fileSize of arrayOfFiles) {
    currentSize += fileSize;
    progressBar.update(currentSize);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  progressBar.stop();
};

await progressbar();

export default progressbar;
