// ==UserScript==
// @name         LeadPerfection Themeing Fixes
// @namespace    http://leadperfection.com/
// @version      0.21
// @description  Making LP great again!
// @author       You
// @match        https://j2a4a.leadperfection.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leadperfection.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    // fixes global notes issues test push
    GM_addStyle('.colalignl:not(.editing){ white-space: pre-wrap !important; }');
})();
