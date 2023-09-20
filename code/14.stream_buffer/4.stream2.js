const fs = require('fs');
const writeStream = fs.createWriteStream('./file4.txt', {});
writeStream.write('hello~~\n');
writeStream.write('hello~~\n');

writeStream.end();
