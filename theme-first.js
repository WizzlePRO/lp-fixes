// ==UserScript==
// @name         LeadPerfection Theming Fixes
// @namespace    http://leadperfection.com/
// @version      0.1
// @description  Making LP Better
// @author       You
// @match        https://j2a4a.leadperfection.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leadperfection.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('.colalignl:not(.editing){ white-space: pre-wrap !important; }');
})();
