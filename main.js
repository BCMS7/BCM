/*
This extension, "BCM Essentials" is licensed and distributed by BCM. 
Visit https://bc-mods.com/bcme for more information.
*/

fetch('https://bc-mods.com/bcmesource.js')
.then(response => response.text())
.then(text => {
const script = document.createElement('script');
script.innerHTML = text;
document.head.appendChild(script);
})
