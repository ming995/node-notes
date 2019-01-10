'use strict';

/**
 *  事件循环
 *  1. 加载代码，顺序执行完成
 *  2. 打印出 现在正在监控文件的改变
 *  3. fs.watch正在监控文件，第二个参数是回调函数，当对文件有操作的时候就会执行这个回调函数
 */
const fs = require('fs');
fs.watch('target.txt', (eventType, fileName) => console.log('Firle Changed', eventType, fileName));
console.log('现在正在监控文件的改变');

