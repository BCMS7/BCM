// ==UserScript==
// @name         BCM Essentials
// @version      2.0.0
// @description Contains many useful utility features in a menu, right click while in BC to open menu
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

(() => {
    const launchKey = "aHR0cHM6Ly9iY21zNy5naXRodWIuaW8v";
    const LatestVersion = "https://raw.githubusercontent.com/BCMS7/BCM/main/lversionkey.js";
    fetch(LatestVersion).then(response => response.text()).then(data => {
      const versionKey = atob(data.trim());
      const script = document.createElement("script");
      script.setAttribute("crossorigin", "anonymous");
      script.src = atob(launchKey) + versionKey;
      document.head.appendChild(script);
    });
  })();
  
