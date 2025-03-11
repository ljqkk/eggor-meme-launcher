import MysKeyTranslate from './one-click-baidu-click.js';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import figlet from 'figlet';
import ora from 'ora';
const translate = new MysKeyTranslate({
  appid: '20240725002108019', // 你的appid  去百度开发者平台查看 http://api.fanyi.baidu.com/doc/21
  secret: 'ONVYTI12LNXIMQ92n9rW', // 你的密钥
  showProgress: false,
});

// 读取 JSON 文件
async function readJsonFile() {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, '../src/config/zh.json');
    const jsonData = await fs.readJson(filePath);
    return jsonData;
  } catch (err) {
    console.error('read JSON failed:', err);
    return null;
  }
}

// 写入 JSON 文件
async function writeJsonFile(data) {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, '../src/config/en.json');
    await fs.writeJson(filePath, data, { spaces: 2 });
  } catch (err) {
    console.error('write JSON failed:', err);
  }
}

// 主函数
async function main() {
  const spinner = ora('正在读取配置文件...').start();
  try {
    const data = await readJsonFile();
    if (!data) {
      spinner.fail('读取配置文件失败');
      return;
    }

    spinner.text = '正在翻译中...';
    const res = await translate(data);

    spinner.text = '正在写入翻译结果...';
    await writeJsonFile(res);

    spinner.succeed('翻译完成！');

    figlet('SUCCESS', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
    });
  } catch (error) {
    spinner.fail('翻译过程出错：' + error.message);
  }
}
main();

// translate([
//   {
//     name: '小明',
//     info: { father: '小明爸爸', mather: '小明妈妈' },
//   },
//   {
//     name: '小红',
//     info: { father: '小红爸爸', mather: '小红妈妈' },
//   },
// ]).then((res) => {
//   console.log('res', res);
// });
