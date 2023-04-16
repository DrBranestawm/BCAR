// ==UserScript==
// @name BCAR Beta Loader
// @namespace https://www.bondageprojects.com/
// @version 0.6.3
// @description BCAR Bondacge Club Auto React
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
    script.setAttribute("crossorigin", "anonymous");
    script.src = "https://drbranestawm.github.io/BCAR/script/bcarBeta.js";
    document.head.appendChild(script);
})();
