var jpeg = require('jpeg-js');
var fs = require('fs');
var bmp = require('bmp-js');

//var jpegData = fs.readFileSync('insta_nic.jpg');
/*
var base64img = ''
var ReadableData = require('stream').Readable
const imageBufferData = Buffer.from(base64img, 'base64');
var rawimageData = jpeg.decode(imageBufferData);
console.log(rawimageData.data);

fs.writeFile('new.raw', rawimageData.data, function(err){
    if (err === null) { 
        console.log('success'); 
    } else { 
        console.log('fail'); 
    }

})
*/
//var f = fs.createWriteStream('new.raw');
//f.write(rawimageData);
//f.end();


var base64img = ''

const imageBufferData = Buffer.from(base64img, 'base64');
console.log('imageBufferData');
console.log(imageBufferData);
var f = fs.createWriteStream('name.jpg');
f.write(imageBufferData);
f.end();

const buf1 = Buffer.from(imageBufferData);
console.log('buf1');
console.log(buf1);
console.log(buf1.length);
var rawimage = jpeg.decode(buf1);
console.log('rawimage');
console.log(rawimage);
var f = fs.createWriteStream('new.raw');
f.write(rawimage.data);
f.end();

const test = {width: 400, height: 200, data: rawimage.data};
var bmp1 = bmp.encode(rawimage);
console.log('bmp1');
console.log(bmp1);
var f = fs.createWriteStream('new.bmp');
f.write(bmp1.data);
f.end();

var rawImage = ''
const rawimageBufferData = Buffer.from(base64img, 'base64');
console.log('rawimagebufferdata');
console.log(rawimageBufferData);
const buf2 = Buffer.from(rawimageBufferData);
const buf2data = {width : 505, height : 129, data : buf2};
console.log('buf2');
console.log(buf2data);
var bmp2 = bmp.encode(buf2data);
var f = fs.createWriteStream('new2.bmp');
f.write(bmp2.data);
f.end();


/* 
fs.open('name.jpg', 'r', function(status, fd) {
    if (status) {
        console.log(status.message);
        return;
    }
    var buffer = Buffer.alloc(100);
    fs.read(fd, buffer, 0, 100, 0, function(err, num) {
        console.log(buffer);
        
    });
});
*/
//var rawImageData = jpeg.decode(jpegData);
//console.log(rawImageData.data);d

/* 
function base64ToHex(str) {
          const raw = window.atob(str);
          console.log(raw);
        
          return raw;
        }
        
        console.log(base64ToHex(imgData));
*/

/*
        const imageBufferData = Buffer.from(base64img, 'base64');
        const buf1 = Buffer.from(imageBufferData);
        var rawimage = jpeg.decode(buf1);
        var bmp1 = bmp.encode(rawimage);
        console.log(bmp1);
*/