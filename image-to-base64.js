'use strict';
const fs = require('fs');
const image = fs.readFileSync('./bg.jpg','base64');
console.log(image);
