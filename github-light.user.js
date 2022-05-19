// ==UserScript==
// @name         Force GitHub Light
// @description  Force GitHub Light
// @namespace    https://dschotman.nl
// @version      0.3
// @author       Daniël Schotman
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// @updateURL      https://github.com/Dediqated/userscripts/raw/master/github-light.meta.js
// @downloadURL    https://github.com/Dediqated/userscripts/raw/master/github-light.user.js
// ==/UserScript==

(function() {
    'use strict';
    let html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-color-mode", "light");
    html.setAttribute("data-dark-theme", "light");
})();
