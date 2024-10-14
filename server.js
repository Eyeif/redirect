const express = require('express');
const app = express();
const fs = require('fs');

const urlFile = 'urls.json';

app.get('/', (req, res) => {
fs.readFile(urlFile, 'utf8', (err, data) => {
if (err) {
console.error(err);
res.status(500).send('Error reading URL file');
} else {
const urls = JSON.parse(data);
const randomUrl = urls[Math.floor(Math.random() * urls.length)];
const newUrls = urls.filter(url => url !== randomUrl);
fs.writeFile(urlFile, JSON.stringify(newUrls), err => {
if (err) {
console.error(err);
}
});
res.redirect(randomUrl);
}
});
});

app.listen(3000, () => {
console.log('Server started on port 3000');
});