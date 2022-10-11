// ==UserScript==
// @name AutoReact Loader
// @namespace https://www.bondageprojects.com/
// @version 1.0.0
// @description Auto React
// @author DrBranestawm
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @icon
// @grant none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';
    var script = document.createElement("script");
    script.src = "https://drbranestawm.github.io/autoReact/script/autoReact.js";
    document.head.appendChild(script);
})();
