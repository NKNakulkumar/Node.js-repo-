const path = require('path');
// path.win32.basename('C:\\temp\\myfile.html');
// // Returns: 'myfile.html'
// const a1=path.dirname('/tmp/myfile.html');
// console.log(a1);
const a2=path.extname(__dirname)
console.log(a2);

// Returns: 'myfile.html'