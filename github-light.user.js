// ==UserScript==
// @name         Force GitHub Light
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Daniël Schotman
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-color-mode", "light");
    html.setAttribute("data-dark-theme", "light");
})();
