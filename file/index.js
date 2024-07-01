const {read} = require('fs');

// const data = fs.readFileSync('file.txt', 'utf8');

// console.log("" + data);

// fs.writeFileSync('file.txt', 'Hello World', 'utf8', (err) => {
//     console.log('file modified');
// })

//appendfilesync
//fs.appendFileSync('file.txt', "Class is going on")

// fs.mkdir('dir1', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('dir formed');
// })

// fs.renameSync('file.txt', 'new-file.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('file renamed');
// })

// fs.rmdir('dir1', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('dir removed');
// })

// const p = '/Users/shreyasgarg/file/new-file.txt'

// const path = require("path"); 
// const dirname = path.dirname(p); 
// const extension = path.extname(p);
// console.log(dirname);
// console.log(extension);


// //get path of the folder 

// const q = '/Users/shreyasgarg/file/dir1'
// const folder = path.dirname(q);
// console.log(folder);

// //get path of the file 

// const r = '/Users/shreyasgarg/file/dir1/file.txt'
// const file = path.dirname(r);
// console.log(file);

// //copy the file from a source to destination dr1

// fs.copyFileSync('file.txt', 'dir1/file.txt');



const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();

});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});

