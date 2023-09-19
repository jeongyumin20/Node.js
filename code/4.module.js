const counter = require('./4.counter.js'); // 레퍼런스 가능해짐

counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount());
