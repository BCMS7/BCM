// ==UserScript==
// @name         BCM Essentials
// @version      2.0.0
// @description BCM is a powerful right click quick-menu extension for BC that adds a range of useful utility and customisation features to to BC. With a simple right-click while in BC, you can easily access the BCM menu and take advantage of its many features.
// @author       BCM  | ΩmеgаX#3723
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @downloadURL  https://github.com/BCMS7/BCM/raw/main/BCME.user.js
// @grant        none
// ==/UserScript==

/*
This extension, "BCM Essentials" is licensed and distributed by BCM. 
Visit https://bcm.site.live/bcme/ for more information.
*/

fetch('https://bcms7.github.io/BCM/main.js')
.then(response => response.text())
.then(text => {
const script = document.createElement('script');
script.innerHTML = text;
document.head.appendChild(script);
})
