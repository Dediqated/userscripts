// ==UserScript==
// @name       auto click Avans
// @namespace  nl.dschotman.userscript.autoclick
// @version    1.0
// @description  SOMETHINGUSEFUL
// @match      https://engine.surfconext.nl/authentication/idp/single-sign-on?*
// @include    https://engine.surfconext.nl/authentication/idp/single-sign-on?*
// @require    https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @copyright  2015+, Daniël Schotman
// ==/UserScript==
$(document).ready(function() {
    $("h3:contains('Avans')").trigger('click');
});
