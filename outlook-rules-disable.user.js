// ==UserScript==
// @name         Outlook.com disable all rules at once
// @namespace    nl.dschotman.userscript.outlook-rules-disable
// @version      0.1
// @description  Disable all rules outlook.com
// @author       Daniël Schotman
// @copyright    2020+, Daniël Schotman
// @match        https://outlook.live.com/mail/0/options/mail/rules
// @include      https://outlook.live.com/mail/0/options/mail/rules
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.slim.min.js
// @updateURL      https://github.com/Dediqated/userscripts/raw/master/outlook-rules-disable.meta.js
// @downloadURL    https://github.com/Dediqated/userscripts/raw/master/outlook-rules-disable.user.js
// ==/UserScript==

$(document).ready(function() {
    alert('asfghasfh');
    $('button.ms-Button.root-126').parent().append('<button type=button class="ms-Button ms-Button--action ms-Button--command" id="toggle-rules-button"><span>Disable</span> all rules</button>');
});
