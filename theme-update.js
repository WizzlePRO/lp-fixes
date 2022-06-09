// ==UserScript==
// @name         LeadPerfection Theming Fixes
// @namespace    http://leadperfection.com/
// @version      0.25
// @description  Making LP great again!
// @author       You
// @match        https://j2a4a.leadperfection.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leadperfection.com
// @updateURL    https://raw.githubusercontent.com/WizzlePRO/lp-fixes/main/theme-update.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    // fixes global notes issues test push #3
    GM_addStyle('.colalignl:not(.editing){ white-space: pre-wrap !important; }');
    // more column wide in notes on global notes window
    GM_addStyle('.colalignl:not(.editing):not(.viewall):not(.editActive){max-width:500px !important;}');
    // more panel height in table panel site wide
    GM_addStyle('.table-scrollable{max-height:1200px !important;}');
})();
