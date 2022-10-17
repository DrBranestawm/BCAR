// ==UserScript==
// @name AutoReact Loader
// @namespace https://www.bondageprojects.com/
// @version 0.2.0
// @description Auto React
// @author DrBranestawm
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @run-at document-end
// @grant none
// ==/UserScript==

(function() {
    'use strict';
    var script = document.createElement("script");
    script.src = "https://drbranestawm.github.io/autoReact/script/autoReact.js";
    document.head.appendChild(script);
})();
