// ==UserScript==
// @name BCAR Beta
// @namespace https://www.bondageprojects.com/
// @version 0.4.2
// @description Bondage Club Auto React
// @author DrBranestawm
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @run-at document-end
// ==/UserScript==



const BCAR_Settings_Version = 2;
//sdk stuff

var bcModSdk=function(){"use strict";const o="1.0.2";function e(o){alert("Mod ERROR:\n"+o);const e=new Error(o);throw console.error(e),e}const t=new TextEncoder;function n(o){return!!o&&"object"==typeof o&&!Array.isArray(o)}function r(o){const e=new Set;return o.filter((o=>!e.has(o)&&e.add(o)))}const a=new Map,i=new Set;function d(o){i.has(o)||(i.add(o),console.warn(o))}function c(o,e){if(0===e.size)return o;let t=o.toString().replaceAll("\r\n","\n");for(const[n,r]of e.entries())t.includes(n)||d(`ModSDK: Patching ${o.name}: Patch ${n} not applied`),t=t.replaceAll(n,r);return(0,eval)(`(${t})`)}function s(o){const e=[],t=new Map,n=new Set;for(const r of u.values()){const a=r.patching.get(o.name);if(a){e.push(...a.hooks);for(const[e,i]of a.patches.entries())t.has(e)&&t.get(e)!==i&&d(`ModSDK: Mod '${r.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${t.get(e)||""}\nPatch2:\n${i}`),t.set(e,i),n.add(r.name)}}return e.sort(((o,e)=>e.priority-o.priority)),{hooks:e,patches:t,patchesSources:n,final:c(o.original,t)}}function l(o,e=!1){let r=a.get(o);if(r)e&&(r.precomputed=s(r));else{let e=window;const i=o.split(".");for(let t=0;t<i.length-1;t++)if(e=e[i[t]],!n(e))throw new Error(`ModSDK: Function ${o} to be patched not found; ${i.slice(0,t+1).join(".")} is not object`);const d=e[i[i.length-1]];if("function"!=typeof d)throw new Error(`ModSDK: Function ${o} to be patched not found`);const c=function(o){let e=-1;for(const n of t.encode(o)){let o=255&(e^n);for(let e=0;e<8;e++)o=1&o?-306674912^o>>>1:o>>>1;e=e>>>8^o}return((-1^e)>>>0).toString(16).padStart(8,"0").toUpperCase()}(d.toString().replaceAll("\r\n","\n")),l={name:o,original:d,originalHash:c};r=Object.assign(Object.assign({},l),{precomputed:s(l)}),a.set(o,r),e[i[i.length-1]]=function(o){return function(...e){const t=o.precomputed,n=t.hooks,r=t.final;let a=0;const i=d=>{var c,s,l,f;if(a<n.length){const e=n[a];a++;const t=null===(s=(c=w.errorReporterHooks).hookEnter)||void 0===s?void 0:s.call(c,o.name,e.mod),r=e.hook(d,i);return null==t||t(),r}{const n=null===(f=(l=w.errorReporterHooks).hookChainExit)||void 0===f?void 0:f.call(l,o.name,t.patchesSources),a=r.apply(this,e);return null==n||n(),a}};return i(e)}}(r)}return r}function f(){const o=new Set;for(const e of u.values())for(const t of e.patching.keys())o.add(t);for(const e of a.keys())o.add(e);for(const e of o)l(e,!0)}function p(){const o=new Map;for(const[e,t]of a)o.set(e,{name:e,originalHash:t.originalHash,hookedByMods:r(t.precomputed.hooks.map((o=>o.mod))),patchedByMods:Array.from(t.precomputed.patchesSources)});return o}const u=new Map;function h(o){u.get(o.name)!==o&&e(`Failed to unload mod '${o.name}': Not registered`),u.delete(o.name),o.loaded=!1}function g(o,t,r){"string"==typeof o&&o||e("Failed to register mod: Expected non-empty name string, got "+typeof o),"string"!=typeof t&&e(`Failed to register mod '${o}': Expected version string, got ${typeof t}`),r=!0===r;const a=u.get(o);a&&(a.allowReplace&&r||e(`Refusing to load mod '${o}': it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`),h(a));const i=t=>{"string"==typeof t&&t||e(`Mod '${o}' failed to patch a function: Expected function name string, got ${typeof t}`);let n=c.patching.get(t);return n||(n={hooks:[],patches:new Map},c.patching.set(t,n)),n},d={unload:()=>h(c),hookFunction:(t,n,r)=>{c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`);const a=i(t);"number"!=typeof n&&e(`Mod '${o}' failed to hook function '${t}': Expected priority number, got ${typeof n}`),"function"!=typeof r&&e(`Mod '${o}' failed to hook function '${t}': Expected hook function, got ${typeof r}`);const d={mod:c.name,priority:n,hook:r};return a.hooks.push(d),f(),()=>{const o=a.hooks.indexOf(d);o>=0&&(a.hooks.splice(o,1),f())}},patchFunction:(t,r)=>{c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`);const a=i(t);n(r)||e(`Mod '${o}' failed to patch function '${t}': Expected patches object, got ${typeof r}`);for(const[n,i]of Object.entries(r))"string"==typeof i?a.patches.set(n,i):null===i?a.patches.delete(n):e(`Mod '${o}' failed to patch function '${t}': Invalid format of patch '${n}'`);f()},removePatches:o=>{c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`);i(o).patches.clear(),f()},callOriginal:(t,n,r)=>(c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`),"string"==typeof t&&t||e(`Mod '${o}' failed to call a function: Expected function name string, got ${typeof t}`),Array.isArray(n)||e(`Mod '${o}' failed to call a function: Expected args array, got ${typeof n}`),function(o,e,t=window){return l(o).original.apply(t,e)}(t,n,r)),getOriginalHash:t=>("string"==typeof t&&t||e(`Mod '${o}' failed to get hash: Expected function name string, got ${typeof t}`),l(t).originalHash)},c={name:o,version:t,allowReplace:r,api:d,loaded:!0,patching:new Map};return u.set(o,c),Object.freeze(d)}function m(){const o=[];for(const e of u.values())o.push({name:e.name,version:e.version});return o}let w;const y=void 0===window.bcModSdk?window.bcModSdk=function(){const e={version:o,apiVersion:1,registerMod:g,getModsInfo:m,getPatchingInfo:p,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return w=e,Object.freeze(e)}():(n(window.bcModSdk)||e("Failed to init Mod SDK: Name already in use"),1!==window.bcModSdk.apiVersion&&e(`Failed to init Mod SDK: Different version already loaded ('1.0.2' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==o&&alert(`Mod SDK warning: Loading different but compatible versions ('1.0.2' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk);return"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=y),y}();

//sdk stuff

(async function () {
  const modApi = bcModSdk.registerMod('BCAR', '0.4.2-beta');
  //global variables
    var Dictionary = [];



  //do not touch this
  await waitFor(() => ServerIsConnected && ServerSocket);
  //end of do not touch
  const bcarSettingsKey = () => `bcarSettings.${Player?.AccountName}`;
  await bcarSettingsLoad();

  //Functions

    const typeAction = { EarCaress :
                [["Mnyaa~","Nnyaaaaah~","Nnyaaaaah~","Nnyaa~","Nyaa~"], // sounds
                [" purrs softly, twitching " + Player.BCAR.bcarSettings.genderDefault.gender + " ears.", " twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears, purring loudly as " + Player.BCAR.bcarSettings.genderDefault.gender + " ears are toyed with.",
                " twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears, purring loudly as " + Player.BCAR.bcarSettings.genderDefault.gender + " ears are toyed with.", " squirms, twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears and purrs.",
                " wiggles and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears purring softly."]], // actions // order matters, match sound with action
                EarNibble :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears as it's nibbled.", " wiggles and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears between the teeth.",
                " moans softly, twitching " + Player.BCAR.bcarSettings.genderDefault.gender + " ears as it's nibbled."]],
                EarLick :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears as it's licked.", " wiggles and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears caused by the licking.",
                " moans softly, twitching " + Player.BCAR.bcarSettings.genderDefault.gender + "r ears as it's licked."]],
                EarKiss :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears as it's kissed.", " wiggles and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears caused by the kissing.",
                " moans softly, twitching " + Player.BCAR.bcarSettings.genderDefault.gender + " ears as it's kissed."]],
                HeadBrush :
                [["",""],
                [" purrs softly and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears.", " purrs happily and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears."]],
                HeadPat :
                [["","","",""],
                [" purrs softly and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears.", " purrs happily and twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears.",
                 " purrs softly, twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears and nuzzles into the pat."," purrs happily, twitches " + Player.BCAR.bcarSettings.genderDefault.gender + " ears and nuzzles into the pat."]],
                CaressBack :
                [["",""],
                [" purrs softly and wags " + Player.BCAR.bcarSettings.genderDefault.gender + " tail.", " purrs softly, arches " + Player.BCAR.bcarSettings.genderDefault.gender + " back and wags " + Player.BCAR.bcarSettings.genderDefault.gender + " tail."]],
                MassageBack :
                [[""],
                [" purrs softly and wags " + Player.BCAR.bcarSettings.genderDefault.gender + " tail."]],
                CaressButt :
                [["Mnyaa~"],
                [" purrs softly, wiggles " + Player.BCAR.bcarSettings.genderDefault.gender + " butt and wags " + Player.BCAR.bcarSettings.genderDefault.gender + " tail."]],
        }

    function ActivityBeeper(type,nya){
        retype = ElementValue("InputChat");
        ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: CharacterNickname(Player) + typeAction[type][1][nya] }]});
        ElementValue("InputChat",typeAction[type][0][nya]);
        ChatRoomSendChat();
        ElementValue("InputChat", retype);
    }

     function EarWiggle(){
      if(Player.BCAR.bcarSettings.earWigglingEnable === true){
        let earsVariations = [Player.BCAR.bcarSettings.earsDefault.ears2,Player.BCAR.bcarSettings.earsDefault.ears1];
        let earsColor = [Player.BCAR.bcarSettings.earsDefault.earsColor2,Player.BCAR.bcarSettings.earsDefault.earsColor1];
        let numberWiggles= parseInt(Player.BCAR.bcarSettings.earsDefault.earsCount);
        let delay = parseInt(Player.BCAR.bcarSettings.earsDefault.earsDelay);
        for(let i=0; i < numberWiggles; i++)
        {
           setTimeout(function() {
              InventoryWear(Player, earsVariations[i%earsVariations.length], "HairAccessory2", earsColor[i%earsColor.length]);
              ChatRoomCharacterItemUpdate(Player, "HairAccessory2");
         }, i * delay);
     }
   }
 }

     function TailWag(){
      if(Player.BCAR.bcarSettings.tailWaggingEnable === true){
        let tailsVariations = [Player.BCAR.bcarSettings.tailsDefault.tails2,Player.BCAR.bcarSettings.tailsDefault.tails1];
        let tailsColor = [Player.BCAR.bcarSettings.tailsDefault.tailsColor2,Player.BCAR.bcarSettings.tailsDefault.tailsColor1];
        let numberWags= parseInt(Player.BCAR.bcarSettings.tailsDefault.tailsCount);
        let delay = parseInt(Player.BCAR.bcarSettings.tailsDefault.tailsDelay);
        for(let i=0; i < numberWags; i++)
        {
           setTimeout(function() {
              InventoryWear(Player, tailsVariations[i%tailsVariations.length], "TailStraps", tailsColor[i%tailsColor.length]);
              ChatRoomCharacterItemUpdate(Player, "TailStraps");
         }, i * delay);
     }
   }
 }

     function WingFlap(){
      if(Player.BCAR.bcarSettings.wingFlappingEnabled === true){
        let wingsVariations = [Player.BCAR.bcarSettings.wingsDefault.tails2,Player.BCAR.bcarSettings.wingsDefault.tails1];
        let wingsColor = [Player.BCAR.bcarSettings.wingsDefault.tailsColor2,Player.BCAR.bcarSettings.wingsDefault.tailsColor1];
        let numberFlaps= parseInt(Player.BCAR.bcarSettings.wingsDefault.tailsCount);
        let delay = parseInt(Player.BCAR.bcarSettings.wingsDefault.tailsDelay);
        for(let i=0; i < numberFlaps; i++)
        {
           setTimeout(function() {
              InventoryWear(Player, wingsVariations[i%wingsVariations.length], "Wings", wingsColor[i%wingsColor.length]);
              ChatRoomCharacterItemUpdate(Player, "Wings");
         }, i * delay);
     }
   }
 }

  // on channel join data Type is Action, Content is ServerEnter and MemberNumber is the joining user
  //do not touch this
  ServerSocket.on("ChatRoomMessage", async (data) => {
    await sleep(10);


      if (data.Type === "Activity"){
      var activityDictionary = data.Dictionary

      for(let i = 0; i < activityDictionary.length; i++)
      {
          if(activityDictionary[i].Tag == "fbc_nonce")
          {
              activityDictionary.splice(i, 1);
              break;
          }
      }
    if(activityDictionary[3].MemberNumber === Player.MemberNumber) {
        if((data.Content.startsWith("ChatOther-ItemEars") || (data.Content.startsWith("ChatSelf-ItemEars") === -1))) {
              if (data.Content.indexOf("Caress") !== -1) {
                  let nya = Math.floor(Math.random() * 5);
                  console.log(nya)
                  ActivityBeeper("EarCaress",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 30;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);

              }
              else if (data.Content.indexOf("Nibble") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  console.log(nya)
                  ActivityBeeper("EarNibble",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 100;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 10;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);

              }
              else if (data.Content.indexOf("Lick") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  console.log(nya)
                  ActivityBeeper("EarLick",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 100;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 7;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);

              }
              else if (data.Content.indexOf("Kiss") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  console.log(nya)
                  ActivityBeeper("EarKiss",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 100;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 7;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);
            }
        }
        else if ((data.Content.startsWith("ChatOther-ItemHead") || (data.Content.startsWith("ChatSelf-ItemHead") === -1))) {
            if (data.Content.indexOf("TakeCare") !== -1) {
                let nya = Math.floor(Math.random() * 2);
                console.log(nya)
                ActivityBeeper("HeadBrush",nya);

                setTimeout(EarWiggle);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
                ActivityChatRoomArousalSync(Player);
            }
            else if (data.Content.indexOf("Pet") !== -1) {
                let nya = Math.floor(Math.random() * 4);
                console.log(nya)
                ActivityBeeper("HeadPat",nya);

                setTimeout(EarWiggle);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
                ActivityChatRoomArousalSync(Player);
            }
        }
	else if ((data.Content.startsWith("ChatOther-ItemTorso") || (data.Content.startsWith("ChatSelf-ItemTorso") === -1))) {
            if (data.Content.indexOf("Caress") !== -1) {
                let nya = Math.floor(Math.random() * 1);
                console.log(nya)
                ActivityBeeper("CaressBack",nya);

                setTimeout(TailWag);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
                ActivityChatRoomArousalSync(Player);
            }
            else if (data.Content.indexOf("MassageHands") !== -1) {
                let nya = Math.floor(Math.random() * 1);
                console.log(nya)
                ActivityBeeper("MassageBack",nya);

                setTimeout(TailWag);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
                ActivityChatRoomArousalSync(Player);
            }
        }
	else if ((data.Content.startsWith("ChatOther-ItemButt") || (data.Content.startsWith("ChatSelf-ItemButt") === -1))) {
            if (data.Content.indexOf("Caress") !== -1) {
                let nya = Math.floor(Math.random() * 1);
                console.log(nya)
                ActivityBeeper("CaressButt",nya);

                setTimeout(TailWag);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 5;
                ActivityChatRoomArousalSync(Player);
            }
	}


    }
}

    return;
  });


    function bcarSettingsSave() {
    localStorage.setItem(bcarSettingsKey(),JSON.stringify(Player.BCAR.bcarSettings));

    Player.OnlineSettings.BCAR = LZString.compressToBase64(JSON.stringify(Player.BCAR.bcarSettngs));
    ServerAccountUpdate.QueueData({
        OnlineSettings: Player.OnlineSettings,
        });
    }

    function bcarSettingsRemove() {
    localStorage.removeItem(bcarSettingsKey(),JSON.stringify(Player.BCAR.bcarSettings));

    Player.OnlineSettings.BCAR = LZString.compressToBase64(JSON.stringify(Player.BCAR.bcarSettngs));
    ServerAccountUpdate.QueueData({
        OnlineSettings: Player.OnlineSettings,
        });
    }

    async function bcarSettingsLoad() {
		await waitFor(() => !!Player?.AccountName);
        const BCAR_DEFAULT_SETTINGS = {
	    earWigglingEnable : true,
            earsDefault : {
                "ears1" : "KittenEars1", // change based on ear type
                "ears2" : "FoxEars2",
                "earsColor1" : ["#FF0000", "#EEE"], // change color based on your own preference
                "earsColor2" : ["#9A0000", "#505050"],
                "earsCount" : 12, // no. of ear wiggles
                "earsDelay" : 175, // delay in ms
            },
             tailWaggingEnable : true,
             tailsDefault : {
                "tails1" : "KittenTailStrap1", // change based on tail type
                "tails2" : "MouseTailStrap1",
                "tailsColor1" : "#440606", // change color based on your own preference
                "tailsColor2" : "#440606",
                "tailsCount" : 6, // no. of tail wags
                "tailsDelay" : 800, // delay in ms
            },
             wingFlappingEnable : false,
             wingsDefault : {
                "wings1" : "AngelWings", // change based on wing type
                "wings2" : "AngelFeather",
                "wingsColor1" : "Default", // change color based on your own preference
                "wingsColor2" : "Default",
                "wingsCount" : 6, // no. of wing flaps
                "wingsDelay" : 500, // delay in ms
            },
             genderDefault : {
                 "gender" : "other",
            },
        }
        Player.BCAR = {};
        Player.BCAR.bcarSettings = {};

        if (!Object.keys(Player.BCAR.bcarSettings).length > 0){
			let settings = JSON.parse(localStorage.getItem(bcarSettingsKey()));
			const bcarOnlineSettings = JSON.parse(
				LZString.decompressFromBase64(Player.OnlineSettings.BCAR) || null
			);
			//if online settings are not an older version then local ones, use them instead
			if (
				bcarOnlineSettings?.version >= settings?.version ||
				(typeof settings?.version === "undefined" &&
					typeof bcarOnlineSettings?.version !== "undefined")
			) {
				settings = bcarOnlineSettings;
			}
			if(!settings) settings = {};

			// Reorganize old settings into the new structure
			for (const setting in settings){
				if(settings[setting].value) settings[setting] = settings[setting].value;
			}

			//fill up missing settings with the default ones
			for (const setting in BCAR_DEFAULT_SETTINGS) {
				if (!Object.prototype.hasOwnProperty.call(BCAR_DEFAULT_SETTINGS, setting)) {
					continue;
				}
				if (!(setting in settings)) {
					settings[setting] = BCAR_DEFAULT_SETTINGS[setting];
				}
			}

			settings.version = BCAR_Settings_Version;
			Player.BCAR.bcarSettings = settings;
        }
            bcarSettingsSave();

    }


    function CommandEarsChange(argsList)
	{
		let change = argsList[0];
		let changeto = argsList.slice(1);

        //console.log("change = "+ change, "changeto = "+ changeto);

        if (change === "ear1") {
            let ears = InventoryGet(Player,"HairAccessory2");
            Player.BCAR.bcarSettings.earsDefault.ears1 = ears.Asset.Name;
            Player.BCAR.bcarSettings.earsDefault.earsColor1 = ears.Color;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Primary ears have been updated!</p>"
                 );
        }
        else if (change === "ear2") {
            let ears = InventoryGet(Player,"HairAccessory2");
            Player.BCAR.bcarSettings.earsDefault.ears2 = ears.Asset.Name;
            Player.BCAR.bcarSettings.earsDefault.earsColor2 = ears.Color;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Secondary ears have been updated!</p>"
                );
        }
        else{
            Player.BCAR.bcarSettings.earsDefault[change]? Player.BCAR.bcarSettings.earsDefault[change] = changeto : console.log("Invalid Input");
        }
        bcarSettingsSave();

	}

    function CommandEarsToggle(argsList)
	{
		let toggle = argsList[0];
		let toggleto = argsList.slice(1);

        //console.log("toggle = "+ toggle, "toggleto = "+ toggleto);

        if (toggle === "earon") {
            let ears = InventoryGet(Player,"HairAccessory2");
            Player.BCAR.bcarSettings.earWigglingEnable = true;
            ChatRoomSendLocal(
                "<p style='background-color:#5FBD7A'><b>Bondage Club Auto React</b>\n" +
                    "Ear wiggle is now enabled!</p>"
                );
        }
        else if (toggle === "earoff") {
            let ears = InventoryGet(Player,"HairAccessory2");
            Player.BCAR.bcarSettings.earWigglingEnable = false;
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A'><b>Bondage Club Auto React</b>\n" +
                    "Ear wiggle is now disabled!</p>"
                );
        }
        else{
            Player.BCAR.bcarSettings.earWigglingEnable[toggle]? Player.BCAR.bcarSettings.earWigglingEnable[toggle] = toggleto : console.log("Invalid Input");
        }
        bcarSettingsSave();

	}

    function CommandTailChange(argsList)
	{
		let change = argsList[0];
		let changeto = argsList.slice(1);

        //console.log("change = "+ change, "changeto = "+ changeto);

        if (change === "tail1") {
            let tails = InventoryGet(Player,"TailStraps");
            Player.BCAR.bcarSettings.tailsDefault.tails1 = tails.Asset.Name;
            Player.BCAR.bcarSettings.tailsDefault.tailsColor1 = tails.Color;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Primary tail has been updated!</p>"
                );
        }
        else if (change === "tail2") {
            let tails = InventoryGet(Player,"TailStraps");
            Player.BCAR.bcarSettings.tailsDefault.tails2 = tails.Asset.Name;
            Player.BCAR.bcarSettings.tailsDefault.tailsColor2 = tails.Color;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Secondary tail has been updated!</p>"
                );
        }
        else{
            Player.BCAR.bcarSettings.tailsDefault[change]? Player.BCAR.bcarSettings.tailsDefault[change] = changeto : console.log("Invalid Input");
        }
        bcarSettingsSave();

	}

    function CommandTailToggle(argsList)
	{
		let toggle = argsList[0];
		let toggleto = argsList.slice(1);

        //console.log("toggle = "+ toggle, "toggleto = "+ toggleto);

        if (toggle === "tailon") {
            let tails = InventoryGet(Player,"TailStraps");
            Player.BCAR.bcarSettings.tailWaggingEnable = true;
            ChatRoomSendLocal(
                "<p style='background-color:#5FBD7A'><b>Bondage Club Auto React</b>\n" +
                    "Tail wagging is now enabled!</p>"
                );
        }
        else if (toggle === "tailoff") {
            let tails = InventoryGet(Player,"TailStraps");
            Player.BCAR.bcarSettings.tailWaggingEnable = false;
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A'><b>Bondage Club Auto React</b>\n" +
                    "Tail wagging is now disabled!</p>"
                );
        }
        else{
            Player.BCAR.bcarSettings.tailWaggingEnable[toggle]? Player.BCAR.bcarSettings.tailWaggingEnable[toggle] = toggleto : console.log("Invalid Input");
        }
        bcarSettingsSave();

	}


    function CommandWingChange(argsList)
	{
		let change = argsList[0];
		let changeto = argsList.slice(1);

        //console.log("change = "+ change, "changeto = "+ changeto);

        if (change === "wing1") {
            let wings = InventoryGet(Player,"Wings");
            Player.BCAR.bcarSettings.wingsDefault.wings1 = wings.Asset.Name;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor1 = wings.Color;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Primary wings has been updated!</p>"
                );
        }
        else if (change === "wing2") {
            let wings = InventoryGet(Player,"Wings");
            Player.BCAR.bcarSettings.wingsDefault.wings2 = wings.Asset.Name;
            Player.BCAR.bcarSettings.wingDefault.wingsColor2 = wings.Color;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Secondary wings has been updated!</p>"
                );
        }
        else{
            Player.BCAR.bcarSettings.wingsDefault[change]? Player.BCAR.bcarSettings.wingsDefault[change] = changeto : console.log("Invalid Input");
        }
        bcarSettingsSave();

	}

    function CommandWingToggle(argsList)
	{
		let toggle = argsList[0];
		let toggleto = argsList.slice(1);

        //console.log("toggle = "+ toggle, "toggleto = "+ toggleto);

        if (toggle === "tailon") {
            let wings = InventoryGet(Player,"Wings");
            Player.BCAR.bcarSettings.wingFlappingEnable = true;
            ChatRoomSendLocal(
                "<p style='background-color:#5FBD7A'><b>Bondage Club Auto React</b>\n" +
                    "Wing flapping is now enabled!</p>"
                );
        }
        else if (toggle === "tailoff") {
            let wings = InventoryGet(Player,"Wings");
            Player.BCAR.bcarSettings.wingFlappingEnable = false;
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A'><b>Bondage Club Auto React</b>\n" +
                    "Wing flapping is now disabled!</p>"
                );
        }
        else{
            Player.BCAR.bcarSettings.wingFlappingEnable[toggle]? Player.BCAR.bcarSettings.wingFlappingEnable[toggle] = toggleto : console.log("Invalid Input");
        }
        bcarSettingsSave();

	}

    function CommandGenderToggle(argsList)
	{
		let toggle = argsList[0];
		let toggleto = argsList.slice(1);

        //console.log("toggle = "+ toggle, "toggleto = "+ toggleto);

        if (toggle === "male") {
            let wings = InventoryGet(Player,"");
            Player.BCAR.bcarSettings.genderDefault.gender = "his";
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "The reactions refer to " + CharacterNickname(Player) + " as ''he'' now!\n" +
                    "Please relog for the changes to take effect.</p>"
                );
        }
        else if (toggle === "female") {
            let wings = InventoryGet(Player,"");
            Player.BCAR.bcarSettings.genderDefault.gender = "her";
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "The reactions refer to " + CharacterNickname(Player) + " as ''she'' now!\n" +
                    "Please relog for the changes to take effect.</p>"
                );
        }
        else if (toggle === "other") {
            let wings = InventoryGet(Player,"");
            Player.BCAR.bcarSettings.genderDefault.gender = "their";
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "The reactions refer to " + CharacterNickname(Player) + " as ''them'' now!\n" +
                    "Please relog for the changes to take effect.</p>"
                );
        }
        else{
            Player.BCAR.bcarSettings.genderDefault[toggle]? Player.BCAR.bcarSettings.genderDefault[toggle] = toggleto : console.log("Invalid Input");
        }
        bcarSettingsSave();

	}

    function CommandOpenHelp(argsList)
	{
       let openHelp = argsList[0];
       let openHelpto = argsList.slice(1);

        if (openHelp === "help") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Commands overview and info:\n" +
                    "/bcar help - To open this help window.\n" +
                    "/bcar earhelp - To open ear equip instructions.\n" +
                    "/bcar ear1 - To save the primary ears.\n" +
                    "/bcar ear2 - To save the secondary ears.\n" +
                    "/bcar earon - To turn the ear wiggling on.\n" +
                    "/bcar earoff - To turn the ear wiggling off.\n" +
                    "/bcar tailhelp - To open tail equip instructions.\n" +
                    "/bcar tail1 - To save the primary tail.\n" +
                    "/bcar tail2 - To save the secondary tail.\n" +
                    "/bcar tailon - To turn the tail wagging on.\n" +
		    "/bcar tailoff - To turn the tail wagging off.\n" +
		    "/bcarreset - To reset the set ears and tails to the default settings.\n" +
                    "Visit the <a href='https://github.com/DrBranestawm/BCAR' target='_blank'>BCAR</a> github for more info.</p>"
                 );
        }

      }

    function CommandEarHelp(argsList)
	{
       let openHelp = argsList[0];
       let openHelpto = argsList.slice(1);

        if (openHelp === "earhelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Ear equip instructions:\n" +
                    "First equip the main ears you want to wear in primarily the ''Ears'' slot in your wardrobe. Type ''/bcar ear1'' in the chat to save the main ears. \n" +
		    "For your ears to wiggle follow the same steps and equip a different type of ears to use as your secondary. Type ''/bcar ear2'' in the chat to save the secondary ears.</p>"
                 );
        }

      }

    function CommandTailHelp(argsList)
	{
       let openHelp = argsList[0];
       let openHelpto = argsList.slice(1);

        if (openHelp === "tailhelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Tail equip instructions:\n" +
                    "First equip the main tail you want to wear in primarily the ''Tail Strap'' slot in your wardrobe. Type ''/bcar tail1'' in the chat to save the main tail. \n" +
		    "For your tail to wag follow the same steps and equip a different type of tail to use as your secondary. Type ''/bcar tail2'' in the chat to save the secondary tail.</p>"
                 );
        }

      }

    function CommandWingHelp(argsList)
	{
       let openHelp = argsList[0];
       let openHelpto = argsList.slice(1);

        if (openHelp === "winghelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Wing equip instructions:\n" +
                    "First equip the main wings you want to wear in primarily the ''Wings'' slot in your wardrobe. Type ''/bcar wing1'' in the chat to save the main wings. \n" +
		    "For your wings to wiggle follow the same steps and equip a different type of wings to use as your secondary. Type ''/bcar wing2'' in the chat to save the secondary wings.</p>"
                 );
        }

      }


    CommandCombine([
		{
			Tag: 'bcar',
            Description: "help : To open the commands overview and info.",
			AutoComplete: args => {

			},
			Action: args => {
                CommandEarsChange(args.split(" "));
                CommandTailChange(args.split(" "));
                CommandWingChange(args.split(" "));
                CommandEarsToggle(args.split(" "));
                CommandTailToggle(args.split(" "));
                CommandWingToggle(args.split(" "));
                CommandOpenHelp(args.split(" "));
                CommandEarHelp(args.split(" "));
                CommandTailHelp(args.split(" "));
                CommandWingHelp(args.split(" "));
                CommandGenderToggle(args.split(" "));
			}
		}

	])


  function CommandResetSettings(argsList)
	{
       let remove = argsList[0];
       let removeto = argsList.slice(1);

        if (remove === "reset") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Settings have been reseted!</p>"
                );
        }
        bcarSettingsRemove();
        bcarSettingsLoad();
	}

    CommandCombine([
		{
			Tag: 'bcarreset',
            Description: ": Resets the settings to default",
			AutoComplete: args => {

			},
			Action: args => {
                CommandResetSettings(args.split(" "));
			}
		}

	])

      //Wing Flapping
      function wingFlapping(){

		registerSocketListener("ChatRoomMessage", (data) => {
			getEmote(data);
		});

		function getEmote(data) {
				if(data.Type === "Emote" && data.Sender === Player.MemberNumber){
					var message = data.Content;
					let patterns = [/flaps.*wings/mi, /wings.*flapping/mi, /flapping.*wings/mi] ; // matches {<any> flaps <any> wings <any>}
					let result = patterns.find(pattern => pattern.test(message));
					if(result){
						setTimeout(wingFlap);
					}
				}
			}
		}

  //do not touch this
  async function waitFor(func, cancelFunc = () => false) {
    while (!func()) {
      if (cancelFunc()) return false;
      await sleep(10);
    }
    return true;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  //end of do not touch this

})();
