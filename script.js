fetch('urls.json')
  .then(response => response.json())
  .then(data => {
    const urls = data.map(url => ({ url, timeout: 2000 }));
    const loader = document.getElementById('loader');
    let index = 0;

function redirect() {
if (index < urls.length) {
const url = urls[index].url;
const timeout = urls[index].timeout;
index++;

window.location.href = url;

setTimeout(() => {
loader.style.display = 'block';
redirect();
}, timeout);
} else {
loader.style.display = 'none';
window.location.href = '(link unavailable)';
}
}

document.addEventListener('DOMContentLoaded', () => {
loader.style.display = 'block';
redirect();
});
});