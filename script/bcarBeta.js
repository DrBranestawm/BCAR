const BCAR_Version = "0.5.0";
const BCAR_Settings_Version = 3;
//sdk stuff

var bcModSdk=function(){"use strict";const o="1.0.2";function e(o){alert("Mod ERROR:\n"+o);const e=new Error(o);throw console.error(e),e}const t=new TextEncoder;function n(o){return!!o&&"object"==typeof o&&!Array.isArray(o)}function r(o){const e=new Set;return o.filter((o=>!e.has(o)&&e.add(o)))}const a=new Map,i=new Set;function d(o){i.has(o)||(i.add(o),console.warn(o))}function c(o,e){if(0===e.size)return o;let t=o.toString().replaceAll("\r\n","\n");for(const[n,r]of e.entries())t.includes(n)||d(`ModSDK: Patching ${o.name}: Patch ${n} not applied`),t=t.replaceAll(n,r);return(0,eval)(`(${t})`)}function s(o){const e=[],t=new Map,n=new Set;for(const r of u.values()){const a=r.patching.get(o.name);if(a){e.push(...a.hooks);for(const[e,i]of a.patches.entries())t.has(e)&&t.get(e)!==i&&d(`ModSDK: Mod '${r.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${t.get(e)||""}\nPatch2:\n${i}`),t.set(e,i),n.add(r.name)}}return e.sort(((o,e)=>e.priority-o.priority)),{hooks:e,patches:t,patchesSources:n,final:c(o.original,t)}}function l(o,e=!1){let r=a.get(o);if(r)e&&(r.precomputed=s(r));else{let e=window;const i=o.split(".");for(let t=0;t<i.length-1;t++)if(e=e[i[t]],!n(e))throw new Error(`ModSDK: Function ${o} to be patched not found; ${i.slice(0,t+1).join(".")} is not object`);const d=e[i[i.length-1]];if("function"!=typeof d)throw new Error(`ModSDK: Function ${o} to be patched not found`);const c=function(o){let e=-1;for(const n of t.encode(o)){let o=255&(e^n);for(let e=0;e<8;e++)o=1&o?-306674912^o>>>1:o>>>1;e=e>>>8^o}return((-1^e)>>>0).toString(16).padStart(8,"0").toUpperCase()}(d.toString().replaceAll("\r\n","\n")),l={name:o,original:d,originalHash:c};r=Object.assign(Object.assign({},l),{precomputed:s(l)}),a.set(o,r),e[i[i.length-1]]=function(o){return function(...e){const t=o.precomputed,n=t.hooks,r=t.final;let a=0;const i=d=>{var c,s,l,f;if(a<n.length){const e=n[a];a++;const t=null===(s=(c=w.errorReporterHooks).hookEnter)||void 0===s?void 0:s.call(c,o.name,e.mod),r=e.hook(d,i);return null==t||t(),r}{const n=null===(f=(l=w.errorReporterHooks).hookChainExit)||void 0===f?void 0:f.call(l,o.name,t.patchesSources),a=r.apply(this,e);return null==n||n(),a}};return i(e)}}(r)}return r}function f(){const o=new Set;for(const e of u.values())for(const t of e.patching.keys())o.add(t);for(const e of a.keys())o.add(e);for(const e of o)l(e,!0)}function p(){const o=new Map;for(const[e,t]of a)o.set(e,{name:e,originalHash:t.originalHash,hookedByMods:r(t.precomputed.hooks.map((o=>o.mod))),patchedByMods:Array.from(t.precomputed.patchesSources)});return o}const u=new Map;function h(o){u.get(o.name)!==o&&e(`Failed to unload mod '${o.name}': Not registered`),u.delete(o.name),o.loaded=!1}function g(o,t,r){"string"==typeof o&&o||e("Failed to register mod: Expected non-empty name string, got "+typeof o),"string"!=typeof t&&e(`Failed to register mod '${o}': Expected version string, got ${typeof t}`),r=!0===r;const a=u.get(o);a&&(a.allowReplace&&r||e(`Refusing to load mod '${o}': it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`),h(a));const i=t=>{"string"==typeof t&&t||e(`Mod '${o}' failed to patch a function: Expected function name string, got ${typeof t}`);let n=c.patching.get(t);return n||(n={hooks:[],patches:new Map},c.patching.set(t,n)),n},d={unload:()=>h(c),hookFunction:(t,n,r)=>{c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`);const a=i(t);"number"!=typeof n&&e(`Mod '${o}' failed to hook function '${t}': Expected priority number, got ${typeof n}`),"function"!=typeof r&&e(`Mod '${o}' failed to hook function '${t}': Expected hook function, got ${typeof r}`);const d={mod:c.name,priority:n,hook:r};return a.hooks.push(d),f(),()=>{const o=a.hooks.indexOf(d);o>=0&&(a.hooks.splice(o,1),f())}},patchFunction:(t,r)=>{c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`);const a=i(t);n(r)||e(`Mod '${o}' failed to patch function '${t}': Expected patches object, got ${typeof r}`);for(const[n,i]of Object.entries(r))"string"==typeof i?a.patches.set(n,i):null===i?a.patches.delete(n):e(`Mod '${o}' failed to patch function '${t}': Invalid format of patch '${n}'`);f()},removePatches:o=>{c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`);i(o).patches.clear(),f()},callOriginal:(t,n,r)=>(c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`),"string"==typeof t&&t||e(`Mod '${o}' failed to call a function: Expected function name string, got ${typeof t}`),Array.isArray(n)||e(`Mod '${o}' failed to call a function: Expected args array, got ${typeof n}`),function(o,e,t=window){return l(o).original.apply(t,e)}(t,n,r)),getOriginalHash:t=>("string"==typeof t&&t||e(`Mod '${o}' failed to get hash: Expected function name string, got ${typeof t}`),l(t).originalHash)},c={name:o,version:t,allowReplace:r,api:d,loaded:!0,patching:new Map};return u.set(o,c),Object.freeze(d)}function m(){const o=[];for(const e of u.values())o.push({name:e.name,version:e.version});return o}let w;const y=void 0===window.bcModSdk?window.bcModSdk=function(){const e={version:o,apiVersion:1,registerMod:g,getModsInfo:m,getPatchingInfo:p,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return w=e,Object.freeze(e)}():(n(window.bcModSdk)||e("Failed to init Mod SDK: Name already in use"),1!==window.bcModSdk.apiVersion&&e(`Failed to init Mod SDK: Different version already loaded ('1.0.2' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==o&&alert(`Mod SDK warning: Loading different but compatible versions ('1.0.2' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk);return"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=y),y}();

//sdk stuff

(async function () {
  const modApi = bcModSdk.registerMod('BCAR', BCAR_Version);
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
                [" purrs softly, twitching " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears.", " twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears, purring loudly as " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears are toyed with.",
                " twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears, purring loudly as " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears are toyed with.", " squirms, twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears and purrs.",
                " wiggles and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears purring softly."]], // actions // order matters, match sound with action
                EarNibble :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears as it's nibbled.", " wiggles and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears between the teeth.",
                " moans softly, twitching " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears as it's nibbled."]],
                EarLick :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears as it's licked.", " wiggles and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears caused by the licking.",
                " moans softly, twitching " + Player.BCAR.bcarSettings.genderDefault.possessive + "r ears as it's licked."]],
                EarKiss :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears as it's kissed.", " wiggles and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears caused by the kissing.",
                " moans softly, twitching " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears as it's kissed."]],
                HeadBrush :
                [["",""],
                [" purrs softly and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears.", " purrs happily and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears."]],
                HeadPat :
                [["","","",""],
                [" purrs softly and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears.", " purrs happily and twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears.",
                 " purrs softly, twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears and nuzzles into the pat."," purrs happily, twitches " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears and nuzzles into the pat."]],
                CaressBack :
                [["",""],
                [" purrs softly and wags " + Player.BCAR.bcarSettings.genderDefault.possessive + " tail.", " purrs softly, arches " + Player.BCAR.bcarSettings.genderDefault.possessive + " back and wags " + Player.BCAR.bcarSettings.genderDefault.possessive + " tail."]],
                MassageBack :
                [[""],
                [" purrs softly and wags " + Player.BCAR.bcarSettings.genderDefault.possessive + " tail."]],
                CaressButt :
                [["Mnyaa~"],
                [" purrs softly, wiggles " + Player.BCAR.bcarSettings.genderDefault.possessive + " butt and wags " + Player.BCAR.bcarSettings.genderDefault.possessive + " tail."]],
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
         console.log("Flap ");
      if(Player.BCAR.bcarSettings.wingFlappingEnable === true){
        let wingsVariations = [Player.BCAR.bcarSettings.wingsDefault.wings2,Player.BCAR.bcarSettings.wingsDefault.wings1];
        let wingsColor = [Player.BCAR.bcarSettings.wingsDefault.wingsColor2,Player.BCAR.bcarSettings.wingsDefault.wingsColor1];
        let numberFlaps= parseInt(Player.BCAR.bcarSettings.wingsDefault.wingsCount);
        let delay = parseInt(Player.BCAR.bcarSettings.wingsDefault.wingsDelay);
        for(let i=0; i < numberFlaps; i++)
        {
           setTimeout(function() {
              InventoryWear(Player, wingsVariations[i%wingsVariations.length], "Wings", wingsColor[i%wingsColor.length]);
              ChatRoomCharacterItemUpdate(Player, "Wings");
         }, i * delay);
     }
   }
 }
      function Fly(){
         console.log("Fly ");
      if(Player.BCAR.bcarSettings.wingFlappingEnable === true){
       InventoryGet(Player, 'Emoticon').Property.OverrideHeight = { Height: +70 };
   }
 }

      function Landing(){
         console.log("Landing ");
      if(Player.BCAR.bcarSettings.wingFlappingEnable === true){
       delete InventoryGet(Player, 'Emoticon').Property.OverrideHeight;
   }
 }

  // on channel join data Type is Action, Content is ServerEnter and MemberNumber is the joining user
  //do not touch this
  ServerSocket.on("ChatRoomMessage", async (data) => {
    await sleep(10);


      if(data.Type === "Emote" && data.Sender === Player.MemberNumber){
					var flapMessage = data.Content;
					let patterns = [/flaps.*wings/mi, /wings.*flapping/mi, /flapping.*wings/mi, /wings.*flap/mi] ; // matches {<any> flaps <any> wings <any>}
					let result = patterns.find(pattern => pattern.test(flapMessage));
					if(result){
						WingFlap();
					}
				}

      if(data.Type === "Emote" && data.Sender === Player.MemberNumber){
					var flyMessage = data.Content;
					let patterns = [/begins.*fly/mi, /starts.*flying/mi] ; // matches {<any> begins <any> fly <any>}
					let result = patterns.find(pattern => pattern.test(flyMessage));
					if(result){
                        Fly();
						WingFlap();
					}
				}

      if(data.Type === "Emote" && data.Sender === Player.MemberNumber){
					var stopFlyMessage = data.Content;
					let patterns = [/lands.*/mi, /stops.*flying/mi] ; // matches {<any> begins <any> fly <any>}
					let result = patterns.find(pattern => pattern.test(stopFlyMessage));
					if(result){
                        WingFlap();
                        Landing();
					}
				}

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
                  if(Player.BCAR.bcarSettings.earWigglingEnable === true){
                  console.log(nya)
                  ActivityBeeper("EarCaress",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 30;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);
                  }
              }
              else if (data.Content.indexOf("Nibble") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  if(Player.BCAR.bcarSettings.earWigglingEnable === true){
                  console.log(nya)
                  ActivityBeeper("EarNibble",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 100;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 10;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);
                  }
              }
              else if (data.Content.indexOf("Lick") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  if(Player.BCAR.bcarSettings.earWigglingEnable === true){
                  console.log(nya)
                  ActivityBeeper("EarLick",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 100;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 7;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);
                  }
              }
              else if (data.Content.indexOf("Kiss") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  if(Player.BCAR.bcarSettings.earWigglingEnable === true){
                  console.log(nya)
                  ActivityBeeper("EarKiss",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 100;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 7;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);
                  }
            }
        }
        else if ((data.Content.startsWith("ChatOther-ItemHead") || (data.Content.startsWith("ChatSelf-ItemHead") === -1))) {
            if (data.Content.indexOf("TakeCare") !== -1) {
                let nya = Math.floor(Math.random() * 2);
                if(Player.BCAR.bcarSettings.earWigglingEnable === true){
                console.log(nya)
                ActivityBeeper("HeadBrush",nya);

                setTimeout(EarWiggle);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
                ActivityChatRoomArousalSync(Player);
                }
            }
            else if (data.Content.indexOf("Pet") !== -1) {
                let nya = Math.floor(Math.random() * 4);
                if(Player.BCAR.bcarSettings.earWigglingEnable === true){
                console.log(nya)
                ActivityBeeper("HeadPat",nya);

                setTimeout(EarWiggle);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
                ActivityChatRoomArousalSync(Player);
                }
            }
        }
	else if ((data.Content.startsWith("ChatOther-ItemTorso") || (data.Content.startsWith("ChatSelf-ItemTorso") === -1))) {
            if (data.Content.indexOf("Caress") !== -1) {
                let nya = Math.floor(Math.random() * 1);
                if(Player.BCAR.bcarSettings.tailWaggingEnable === true){
                console.log(nya)
                ActivityBeeper("CaressBack",nya);

                setTimeout(TailWag);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
                ActivityChatRoomArousalSync(Player);
                }
            }
            else if (data.Content.indexOf("MassageHands") !== -1) {
                let nya = Math.floor(Math.random() * 1);
                if(Player.BCAR.bcarSettings.tailWaggingEnable === true){
                console.log(nya)
                ActivityBeeper("MassageBack",nya);

                setTimeout(TailWag);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
                ActivityChatRoomArousalSync(Player);
                }
            }
        }
	else if ((data.Content.startsWith("ChatOther-ItemButt") || (data.Content.startsWith("ChatSelf-ItemButt") === -1))) {
            if (data.Content.indexOf("Caress") !== -1) {
                let nya = Math.floor(Math.random() * 1);
                if(Player.BCAR.bcarSettings.tailWaggingEnable === true){
                console.log(nya)
                ActivityBeeper("CaressButt",nya);

                setTimeout(TailWag);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 5;
                ActivityChatRoomArousalSync(Player);
                }
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

    async function beepChangelog() {
		await waitFor(() => !!Player?.AccountName);
		await sleep(5000);
		bctBeepNotify("BCAR updated", "BCAR got updated. Type ''/bcar changelog'' to view the changelog.");
	}

	function bctBeepNotify (title, text){
		modAPI.callOriginal("ServerAccountBeep", [
			{
				MemberNumber: Player.MemberNumber,
				MemberName: "BCAR",
				ChatRoomName: title,
				Private: true,
				Message: text,
				ChatRoomSpace: "",
			},
		]);
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
	    earWigglingEnable : false,
        earWigglingStatus : "Disabled", //Output for the status page
            earsDefault : {
                "ears1" : null, // change based on ear type
                "ears2" : null,
                "earsColor1" : ["#FF0000", "#EEE"], // change color based on your own preference
                "earsColor2" : ["#9A0000", "#505050"],
                "earsCount" : 12, // no. of ear wiggles
                "earsDelay" : 175, // delay in ms
                "earsDescription1" : "None",
                "earsDescription2" : "None", //Output for the status page
            },
             tailWaggingEnable : false,
             tailWaggingStatus : "Disabled", //Output for the status page
             tailsDefault : {
                "tails1" : null, // change based on tail type
                "tails2" : null,
                "tailsColor1" : "#440606", // change color based on your own preference
                "tailsColor2" : "#440606",
                "tailsCount" : 6, // no. of tail wags
                "tailsDelay" : 800, // delay in ms
                "tailsDescription1" : "None", //Output for the status page
                "tailsDescription2" : "None",
            },
             wingFlappingEnable : false,
             wingFlappingStatus : "Disabled", //Output for the status page
             wingsDefault : {
                "wings1" : null, // change based on wing type
                "wings2" : null,
                "wingsColor1" : "Default", // change color based on your own preference
                "wingsColor2" : "Default",
                "wingsCount" : 6, // no. of wing flaps
                "wingsDelay" : 500, // delay in ms
                "wingsDescription1" : "None", //Output for the status page
                "wingsDescription2" : "None",
            },
             genderDefault : {
                 "capPronoun" : "They", //Capitalized Pronoun (He, She, They)
                 "pronoun" : "they", //Pronoun (he, she, they)
                 "intensive" : "them", //Intensive (him, her, them)
                 "possessive" : "their", //Possessive (his, her, their)
                 "gender" : "Non-Binary", //Output for the status page
            },
            profile1Saved : false,
            profile1 : {
                earWigglingEnable : false,
                earWigglingStatus : "Disabled", //Output for the status page
                earsDefault : {
                    "ears1" : null, // change based on ear type
                    "ears2" : null,
                    "earsColor1" : ["#FF0000", "#EEE"], // change color based on your own preference
                    "earsColor2" : ["#9A0000", "#505050"],
                    "earsCount" : 12, // no. of ear wiggles
                    "earsDelay" : 175, // delay in ms
                    "earsDescription1" : "None",
                    "earsDescription2" : "None", //Output for the status page
                },
                tailWaggingEnable : false,
                tailWaggingStatus : "Disabled", //Output for the status page
                tailsDefault : {
                    "tails1" : null, // change based on tail type
                    "tails2" : null,
                    "tailsColor1" : "#440606", // change color based on your own preference
                    "tailsColor2" : "#440606",
                    "tailsCount" : 6, // no. of tail wags
                    "tailsDelay" : 800, // delay in ms
                    "tailsDescription1" : "None", //Output for the status page
                    "tailsDescription2" : "None",
                },
                wingFlappingEnable : false,
                wingFlappingStatus : "Disabled", //Output for the status page
                wingsDefault : {
                    "wings1" : null, // change based on wing type
                    "wings2" : null,
                    "wingsColor1" : "Default", // change color based on your own preference
                    "wingsColor2" : "Default",
                    "wingsCount" : 6, // no. of wing flaps
                    "wingsDelay" : 500, // delay in ms
                    "wingsDescription1" : "None", //Output for the status page
                    "wingsDescription2" : "None",
                },
            },
            profile2Saved : false,
            profile2 : {
                earWigglingEnable : false,
                earWigglingStatus : "Disabled", //Output for the status page
                earsDefault : {
                    "ears1" : null, // change based on ear type
                    "ears2" : null,
                    "earsColor1" : ["#FF0000", "#EEE"], // change color based on your own preference
                    "earsColor2" : ["#9A0000", "#505050"],
                    "earsCount" : 12, // no. of ear wiggles
                    "earsDelay" : 175, // delay in ms
                    "earsDescription1" : "None",
                    "earsDescription2" : "None", //Output for the status page
                },
                tailWaggingEnable : false,
                tailWaggingStatus : "Disabled", //Output for the status page
                tailsDefault : {
                    "tails1" : null, // change based on tail type
                    "tails2" : null,
                    "tailsColor1" : "#440606", // change color based on your own preference
                    "tailsColor2" : "#440606",
                    "tailsCount" : 6, // no. of tail wags
                    "tailsDelay" : 800, // delay in ms
                    "tailsDescription1" : "None", //Output for the status page
                    "tailsDescription2" : "None",
                },
                wingFlappingEnable : false,
                wingFlappingStatus : "Disabled", //Output for the status page
                wingsDefault : {
                    "wings1" : null, // change based on wing type
                    "wings2" : null,
                    "wingsColor1" : "Default", // change color based on your own preference
                    "wingsColor2" : "Default",
                    "wingsCount" : 6, // no. of wing flaps
                    "wingsDelay" : 500, // delay in ms
                    "wingsDescription1" : "None", //Output for the status page
                    "wingsDescription2" : "None",
                },
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

			//if the version of the current settings is newer then the loaded ones, beep that bcar got an update
			if (
				typeof settings.version === "undefined" ||
				settings.version < BCAR_Settings_Version
			) {
				beepChangelog();
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
            if(Player.BCAR.bcarSettings.earWigglingEnable === false){
            let ears = InventoryGet(Player,"HairAccessory2");
            Player.BCAR.bcarSettings.earWigglingEnable = true;
            Player.BCAR.bcarSettings.earWigglingStatus = "Enabled";
            Player.BCAR.bcarSettings.earsDefault.ears1 = ears.Asset.Name;
            Player.BCAR.bcarSettings.earsDefault.earsColor1 = ears.Color;
            Player.BCAR.bcarSettings.earsDefault.earsDescription1 = ears.Asset.Description;
                ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Primary ears have been updated!</p>" +
                    "<div style='background-color:#5FBD7A'>Ear wiggle is now enabled!</div>"
                 );
              }
            else if(Player.BCAR.bcarSettings.earWigglingEnable === true){
            let ears = InventoryGet(Player,"HairAccessory2");
            Player.BCAR.bcarSettings.earsDefault.ears1 = ears.Asset.Name;
            Player.BCAR.bcarSettings.earsDefault.earsColor1 = ears.Color;
            Player.BCAR.bcarSettings.earsDefault.earsDescription1 = ears.Asset.Description;
                ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Primary ears have been updated!</p>"
                 );
              }
        }
        else if (change === "ear2") {
            let ears = InventoryGet(Player,"HairAccessory2");
            Player.BCAR.bcarSettings.earsDefault.ears2 = ears.Asset.Name;
            Player.BCAR.bcarSettings.earsDefault.earsColor2 = ears.Color;
            Player.BCAR.bcarSettings.earsDefault.earsDescription2 = ears.Asset.Description;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Secondary ears have been updated!</p>"
                );
        }
        bcarSettingsSave();

	}

    function CommandEarsToggle(argsList)
	{
		let toggle = argsList[0];
		let toggleto = argsList.slice(1);

        //console.log("toggle = "+ toggle, "toggleto = "+ toggleto);

        if (toggle === "earon") {
            Player.BCAR.bcarSettings.earWigglingEnable = true;
            Player.BCAR.bcarSettings.earWigglingStatus = "Enabled";
            ChatRoomSendLocal(
                "<p style='background-color:#5FBD7A'><b>Bondage Club Auto React</b>\n" +
                    "Ear wiggle is now enabled!</p>"
                );
        }
        else if (toggle === "earoff") {
            Player.BCAR.bcarSettings.earWigglingEnable = false;
            Player.BCAR.bcarSettings.earWigglingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A'><b>Bondage Club Auto React</b>\n" +
                    "Ear wiggle is now disabled!</p>"
                );
        }
        bcarSettingsSave();

	}

    function CommandTailChange(argsList)
	{
		let change = argsList[0];
		let changeto = argsList.slice(1);

        //console.log("change = "+ change, "changeto = "+ changeto);

        if (change === "tail1") {
            if(Player.BCAR.bcarSettings.tailWaggingEnable === false){
            let tails = InventoryGet(Player,"TailStraps");
            Player.BCAR.bcarSettings.tailWaggingEnable = true;
            Player.BCAR.bcarSettings.tailWaggingStatus = "Enabled";
            Player.BCAR.bcarSettings.tailsDefault.tails1 = tails.Asset.Name;
            Player.BCAR.bcarSettings.tailsDefault.tailsColor1 = tails.Color;
            Player.BCAR.bcarSettings.tailsDefault.tailsDescription1 = tails.Asset.Description;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Primary tail has been updated!</p>" +
                    "<div style='background-color:#5FBD7A'>Tail wagging is now enabled!</div>"
                );
            }
        else if(Player.BCAR.bcarSettings.tailWaggingEnable === true){
            let tails = InventoryGet(Player,"TailStraps");
            Player.BCAR.bcarSettings.tailsDefault.tails1 = tails.Asset.Name;
            Player.BCAR.bcarSettings.tailsDefault.tailsColor1 = tails.Color;
            Player.BCAR.bcarSettings.tailsDefault.tailsDescription1 = tails.Asset.Description;
                ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Primary tail has been updated!</p>"
                 );
              }
        }
        else if (change === "tail2") {
            let tails = InventoryGet(Player,"TailStraps");
            Player.BCAR.bcarSettings.tailsDefault.tails2 = tails.Asset.Name;
            Player.BCAR.bcarSettings.tailsDefault.tailsColor2 = tails.Color;
            Player.BCAR.bcarSettings.tailsDefault.tailsDescription2 = tails.Asset.Description;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Secondary tail has been updated!</p>"
                );
        }
        bcarSettingsSave();

	}

    function CommandTailToggle(argsList)
	{
		let toggle = argsList[0];
		let toggleto = argsList.slice(1);

        //console.log("toggle = "+ toggle, "toggleto = "+ toggleto);

        if (toggle === "tailon") {
            Player.BCAR.bcarSettings.tailWaggingEnable = true;
            Player.BCAR.bcarSettings.tailWaggingStatus = "Enabled";
            ChatRoomSendLocal(
                "<p style='background-color:#5FBD7A'><b>Bondage Club Auto React</b>\n" +
                    "Tail wagging is now enabled!</p>"
                );
        }
        else if (toggle === "tailoff") {
            Player.BCAR.bcarSettings.tailWaggingEnable = false;
            Player.BCAR.bcarSettings.tailWaggingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A'><b>Bondage Club Auto React</b>\n" +
                    "Tail wagging is now disabled!</p>"
                );
        }
        bcarSettingsSave();

	}


    function CommandWingChange(argsList)
	{
		let change = argsList[0];
		let changeto = argsList.slice(1);

        //console.log("change = "+ change, "changeto = "+ changeto);

        if (change === "wing1") {
            if(Player.BCAR.bcarSettings.wingFlappingEnable === false){
            let wings = InventoryGet(Player,"Wings");
            Player.BCAR.bcarSettings.wingFlappingEnable = true;
            Player.BCAR.bcarSettings.wingFlappingStatus = "Enabled";
            Player.BCAR.bcarSettings.wingsDefault.wings1 = wings.Asset.Name;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor1 = wings.Color;
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription1 = wings.Asset.Description;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Primary wings has been updated!</p>" +
                    "<div style='background-color:#5FBD7A'>Wing flapping is now enabled!!</div>"
                );
            }
        else if(Player.BCAR.bcarSettings.wingFlappingEnable === true){
            let wings = InventoryGet(Player,"Wings");
            Player.BCAR.bcarSettings.wingsDefault.wings1 = wings.Asset.Name;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor1 = wings.Color;
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription1 = wings.Asset.Description;
                ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Primary wings has been updated!</p>"
                 );
              }
        }
        else if (change === "wing2") {
            let wings = InventoryGet(Player,"Wings");
            Player.BCAR.bcarSettings.wingsDefault.wings2 = wings.Asset.Name;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor2 = wings.Color;
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription2 = wings.Asset.Description;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Secondary wings has been updated!</p>"
                );
        }
        bcarSettingsSave();

	}

    function CommandWingToggle(argsList)
	{
		let toggle = argsList[0];
		let toggleto = argsList.slice(1);

        //console.log("toggle = "+ toggle, "toggleto = "+ toggleto);

        if (toggle === "wingon") {
            Player.BCAR.bcarSettings.wingFlappingEnable = true;
            Player.BCAR.bcarSettings.wingFlappingStatus = "Enabled";
            ChatRoomSendLocal(
                "<p style='background-color:#5FBD7A'><b>Bondage Club Auto React</b>\n" +
                    "Wing flapping is now enabled!</p>"
                );
        }
        else if (toggle === "wingoff") {
            Player.BCAR.bcarSettings.wingFlappingEnable = false;
            Player.BCAR.bcarSettings.wingFlappingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A'><b>Bondage Club Auto React</b>\n" +
                    "Wing flapping is now disabled!</p>"
                );
        }
        bcarSettingsSave();

	}

    function CommandGenderToggle(argsList)
	{
		let toggle = argsList[0];
		let toggleto = argsList.slice(1);

        //console.log("toggle = "+ toggle, "toggleto = "+ toggleto);

        if (toggle === "male") {
            Player.BCAR.bcarSettings.genderDefault.gender = "Male";
            Player.BCAR.bcarSettings.genderDefault.capPronoun = "He";
            Player.BCAR.bcarSettings.genderDefault.pronoun = "he";
            Player.BCAR.bcarSettings.genderDefault.intensive = "him";
            Player.BCAR.bcarSettings.genderDefault.possessive = "his";
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "The reactions refer to " + CharacterNickname(Player) + " as ''he'' now!\n" +
                    "Please relog for the changes to take effect.</p>"
                );
        }
        else if (toggle === "female") {
            Player.BCAR.bcarSettings.genderDefault.gender = "Female";
            Player.BCAR.bcarSettings.genderDefault.capPronoun = "She";
            Player.BCAR.bcarSettings.genderDefault.pronoun = "she";
            Player.BCAR.bcarSettings.genderDefault.intensive = "her";
            Player.BCAR.bcarSettings.genderDefault.possessive = "her";
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "The reactions refer to " + CharacterNickname(Player) + " as ''she'' now!\n" +
                    "Please relog for the changes to take effect.</p>"
                );
        }
        else if (toggle === "other") {
            Player.BCAR.bcarSettings.genderDefault.gender = "Non-Binary";
            Player.BCAR.bcarSettings.genderDefault.capPronoun = "They";
            Player.BCAR.bcarSettings.genderDefault.pronoun = "they";
            Player.BCAR.bcarSettings.genderDefault.intensive = "them";
            Player.BCAR.bcarSettings.genderDefault.possessive = "their";
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "The reactions refer to " + CharacterNickname(Player) + " as ''they'' now!\n" +
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
                    "/bcar changeog - Show recent BCAR changelog\n" +
                    "/bcar help - Opens this help window.\n" +
                    "/bcar status - Opens the status window.\n" +
                    "/bcar earhelp - Opens ear instructions and commands page.\n" +
                    "/bcar tailhelp - Opens tail instructions and commands page.\n" +
                    "/bcar winghelp - Opens wing instructions and commands page.\n" +
                    "/bcar profilehelp - Opens profile instructions and commands page.\n" +
                    "/bcar male - Lets the reactions refer to " + CharacterNickname(Player) + " as ''he''\n" +
                    "/bcar female - Lets the reactions refer to " + CharacterNickname(Player) + " as ''she''\n" +
                    "/bcar other - Lets the reactions refer to " + CharacterNickname(Player) + " as ''they''\n" +
                    "/bcar reset - Resets the ears, tails and wings to the default settings.\n" +
                    "Visit the <a href='https://github.com/DrBranestawm/BCAR' target='_blank'>BCAR</a> github for more info.</p>"
                 );
        }

      }

    function CommandStatus(argsList)
	{
       let openStatus = argsList[0];
       let openStatusto = argsList.slice(1);

        if (openStatus === "status") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Current status:\n" +
                    "Ear Animation: " + Player.BCAR.bcarSettings.earWigglingStatus + "\n" +
                    "Primary Ears: " + Player.BCAR.bcarSettings.earsDefault.earsDescription1 + "\n" +
                    "Secondary Ears: " + Player.BCAR.bcarSettings.earsDefault.earsDescription2 + "\n" +
                    "Tail Animation: " + Player.BCAR.bcarSettings.tailWaggingStatus + "\n" +
                    "Primary Tail: " + Player.BCAR.bcarSettings.tailsDefault.tailsDescription1 + "\n" +
                    "Secondary Tail: " + Player.BCAR.bcarSettings.tailsDefault.tailsDescription2 + "\n" +
                    "Wing Animation: " + Player.BCAR.bcarSettings.wingFlappingStatus + "\n" +
                    "Primary Wings: " + Player.BCAR.bcarSettings.wingsDefault.wingsDescription1 + "\n" +
                    "Secondary Wings: " + Player.BCAR.bcarSettings.wingsDefault.wingsDescription2 + "\n" +
                    "Gender: " + Player.BCAR.bcarSettings.genderDefault.gender + "</p>"
                 );
        }

      }

    function CommandEarHelp(argsList)
	{
       let openHelp = argsList[0];
       let openHelpto = argsList.slice(1);

        if (openHelp === "earhelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Ear instructions:\n" +
                    "First equip the main ears you want to wear in primarily the ''Ears'' slot in your wardrobe. Type ''/bcar ear1'' in the chat to save the main ears. \n" +
		    "For your ears to wiggle follow the same steps and equip a different type of ears to use as your secondary. Type ''/bcar ear2'' in the chat to save the secondary ears. \n" +
                    " \n" +
                    "Commands:\n" +
                    "/bcar ear1 - Saves the primary ears.\n" +
                    "/bcar ear2 - Saves the secondary ears.\n" +
                    "/bcar earon - Enables the ear wiggling on.\n" +
                    "/bcar earoff - Disables the ear wiggling off.</p>"
                 );
        }

      }

    function CommandTailHelp(argsList)
	{
       let openHelp = argsList[0];
       let openHelpto = argsList.slice(1);

        if (openHelp === "tailhelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Tail instructions:\n" +
                    "First equip the main tail you want to wear in primarily the ''Tail Strap'' slot in your wardrobe. Type ''/bcar tail1'' in the chat to save the main tail. \n" +
		     "For your tail to wag follow the same steps and equip a different type of tail to use as your secondary. Type ''/bcar tail2'' in the chat to save the secondary tail. \n" +
                    " \n" +
                    "Commands:\n" +
                    "/bcar tail1 - Saves the primary tail.\n" +
                    "/bcar tail2 - Saves the secondary tail.\n" +
                    "/bcar tailon - Enables the tail wagging on.\n" +
                    "/bcar tailoff - Disbales the tail wagging off.</p>"
                 );
        }

      }

    function CommandWingHelp(argsList)
	{
       let openHelp = argsList[0];
       let openHelpto = argsList.slice(1);

        if (openHelp === "winghelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Wing instructions:\n" +
                    "First equip the main wings you want to wear in primarily the ''Wings'' slot in your wardrobe. Type ''/bcar wing1'' in the chat to save the main wings. \n" +
		    "For your wings to wiggle follow the same steps and equip a different type of wings to use as your secondary. Type ''/bcar wing2'' in the chat to save the secondary wings. \n" +
                    "To let your wings flap type an emote anything that includes the words ''flaps'' and ''wings''. \n" +
                    " \n" +
                    "Commands:\n" +
                    "/bcar wingon - Enables the wing flapping on.\n" +
                    "/bcar wingoff - Disables the wing flapping off.\n" +
                    " \n" +
                    "Examples: \n" +
                    "<i>*flaps her wings \n" +
                    "*is flapping her wings \n" +
                    "*lets her wings flap \n" +
                    "*spreads her wings, flapping with them</i></p>"
                 );
        }

      }

    function CommandProfileHelp(argsList)
	{
       let openHelp = argsList[0];
       let openHelpto = argsList.slice(1);

        if (openHelp === "profilehelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Profiles instructions:\n" +
                    "With the Profiles you can save presets for your ears, tail and wings. \n" +
                    " \n" +
                    "Commands:\n" +
                    "/bcar save1 - Saves current setup in Profile1\n" +
                    "/bcar save2 - Saves current setup in Profile2\n" +
                    "/bcar load1 - Loads the setup saved in Profile1\n" +
                    "/bcar load2 - Loads the setup saved in Profile2\n" +
                    "/bcar profile1 - Shows which setup is saved in Profile1\n" +
                    "/bcar profile2 - Shows which setup is saved in Profile2</p>"
                 );
        }

      }

    function CommandShowProfile(argsList)
	{
       let showProfile = argsList[0];
       let showProfileto = argsList.slice(1);

        if (showProfile === "profile1") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Profile1 preset:\n" +
                    "Ear Animation: " + Player.BCAR.bcarSettings.profile1.earWigglingStatus + "\n" +
                    "Primary Ears: " + Player.BCAR.bcarSettings.profile1.earsDefault.earsDescription1 + "\n" +
                    "Secondary Ears: " + Player.BCAR.bcarSettings.profile1.earsDefault.earsDescription2 + "\n" +
                    "Tail Animation: " + Player.BCAR.bcarSettings.profile1.tailWaggingStatus + "\n" +
                    "Primary Tail: " + Player.BCAR.bcarSettings.profile1.tailsDefault.tailsDescription1 + "\n" +
                    "Secondary Tail: " + Player.BCAR.bcarSettings.profile1.tailsDefault.tailsDescription2 + "\n" +
                    "Wing Animation: " + Player.BCAR.bcarSettings.profile1.wingFlappingStatus + "\n" +
                    "Primary Wings: " + Player.BCAR.bcarSettings.profile1.wingsDefault.wingsDescription1 + "\n" +
                    "Secondary Wings: " + Player.BCAR.bcarSettings.profile1.wingsDefault.wingsDescription2 + "</p>"
                 );
        }
        else if (showProfile === "profile2") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>: Profile2 preset:\n" +
                    "Ear Animation: " + Player.BCAR.bcarSettings.profile2.earWigglingStatus + "\n" +
                    "Primary Ears: " + Player.BCAR.bcarSettings.profile2.earsDefault.earsDescription1 + "\n" +
                    "Secondary Ears: " + Player.BCAR.bcarSettings.profile2.earsDefault.earsDescription2 + "\n" +
                    "Tail Animation: " + Player.BCAR.bcarSettings.profile2.tailWaggingStatus + "\n" +
                    "Primary Tail: " + Player.BCAR.bcarSettings.profile2.tailsDefault.tailsDescription1 + "\n" +
                    "Secondary Tail: " + Player.BCAR.bcarSettings.profile2.tailsDefault.tailsDescription2 + "\n" +
                    "Wing Animation: " + Player.BCAR.bcarSettings.profile2.wingFlappingStatus + "\n" +
                    "Primary Wings: " + Player.BCAR.bcarSettings.profile2.wingsDefault.wingsDescription1 + "\n" +
                    "Secondary Wings: " + Player.BCAR.bcarSettings.profile2.wingsDefault.wingsDescription2 + "</p>"
                 );
        }
      }

    function CommandSaveProfile(argsList)
	{
		let saving = argsList[0];
		let savingto = argsList.slice(1);

        //console.log("change = "+ change, "changeto = "+ changeto);

        if (saving === "save1") {
            Player.BCAR.bcarSettings.profile1Saved = true;
            Player.BCAR.bcarSettings.profile1.earWigglingEnable = Player.BCAR.bcarSettings.earWigglingEnable;
            Player.BCAR.bcarSettings.profile1.earWigglingStatus = Player.BCAR.bcarSettings.earWigglingStatus;
            Player.BCAR.bcarSettings.profile1.earsDefault.ears1 = Player.BCAR.bcarSettings.earsDefault.ears1;
            Player.BCAR.bcarSettings.profile1.earsDefault.ears2 = Player.BCAR.bcarSettings.earsDefault.ears2;
            Player.BCAR.bcarSettings.profile1.earsDefault.earsColor1 = Player.BCAR.bcarSettings.earsDefault.earsColor1;
            Player.BCAR.bcarSettings.profile1.earsDefault.earsColor2 = Player.BCAR.bcarSettings.earsDefault.earsColor2;
            Player.BCAR.bcarSettings.profile1.earsDefault.earsDescription1 = Player.BCAR.bcarSettings.earsDefault.earsDescription1;
            Player.BCAR.bcarSettings.profile1.earsDefault.earsDescription2 = Player.BCAR.bcarSettings.earsDefault.earsDescription2;

            Player.BCAR.bcarSettings.profile1.tailWaggingEnable = Player.BCAR.bcarSettings.tailWaggingEnable;
            Player.BCAR.bcarSettings.profile1.tailWaggingStatus = Player.BCAR.bcarSettings.tailWaggingStatus;
            Player.BCAR.bcarSettings.profile1.tailsDefault.tails1 = Player.BCAR.bcarSettings.tailsDefault.tails1;
            Player.BCAR.bcarSettings.profile1.tailsDefault.tails2 = Player.BCAR.bcarSettings.tailsDefault.tails2;
            Player.BCAR.bcarSettings.profile1.tailsDefault.tailsColor1 = Player.BCAR.bcarSettings.tailsDefault.tailsColor1;
            Player.BCAR.bcarSettings.profile1.tailsDefault.tailsColor2 = Player.BCAR.bcarSettings.tailsDefault.tailsColor2;
            Player.BCAR.bcarSettings.profile1.tailsDefault.tailsDescription1 = Player.BCAR.bcarSettings.tailsDefault.tailsDescription1;
            Player.BCAR.bcarSettings.profile1.tailsDefault.tailsDescription2 = Player.BCAR.bcarSettings.tailsDefault.tailsDescription2;

            Player.BCAR.bcarSettings.profile1.wingFlappingEnable = Player.BCAR.bcarSettings.wingFlappingEnable;
            Player.BCAR.bcarSettings.profile1.wingFlappingStatus = Player.BCAR.bcarSettings.wingFlappingStatus;
            Player.BCAR.bcarSettings.profile1.wingsDefault.wings1 = Player.BCAR.bcarSettings.wingsDefault.wings1;
            Player.BCAR.bcarSettings.profile1.wingsDefault.wings1 = Player.BCAR.bcarSettings.wingsDefault.wings2;
            Player.BCAR.bcarSettings.profile1.wingsDefault.wingsColor1 = Player.BCAR.bcarSettings.wingsDefault.wingsColor1;
            Player.BCAR.bcarSettings.profile1.wingsDefault.wingsColor1 = Player.BCAR.bcarSettings.wingsDefault.wingsColor2;
            Player.BCAR.bcarSettings.profile1.wingsDefault.wingsDescription1 = Player.BCAR.bcarSettings.wingsDefault.wingsDescription1;
            Player.BCAR.bcarSettings.profile1.wingsDefault.wingsDescription2 = Player.BCAR.bcarSettings.wingsDefault.wingsDescription2;
                ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Profile1 has been saved!</p>"
                 );

        }
        else if (saving === "save2") {
            Player.BCAR.bcarSettings.profile2Saved = true;
            Player.BCAR.bcarSettings.profile2.earWigglingEnable = Player.BCAR.bcarSettings.earWigglingEnable;
            Player.BCAR.bcarSettings.profile2.earWigglingStatus = Player.BCAR.bcarSettings.earWigglingStatus;
            Player.BCAR.bcarSettings.profile2.earsDefault.ears1 = Player.BCAR.bcarSettings.earsDefault.ears1;
            Player.BCAR.bcarSettings.profile2.earsDefault.ears2 = Player.BCAR.bcarSettings.earsDefault.ears2;
            Player.BCAR.bcarSettings.profile2.earsDefault.earsColor1 = Player.BCAR.bcarSettings.earsDefault.earsColor1;
            Player.BCAR.bcarSettings.profile2.earsDefault.earsColor2 = Player.BCAR.bcarSettings.earsDefault.earsColor2;
            Player.BCAR.bcarSettings.profile2.earsDefault.earsDescription1 = Player.BCAR.bcarSettings.earsDefault.earsDescription1;
            Player.BCAR.bcarSettings.profile2.earsDefault.earsDescription2 = Player.BCAR.bcarSettings.earsDefault.earsDescription2;

            Player.BCAR.bcarSettings.profile2.tailWaggingEnable = Player.BCAR.bcarSettings.tailWaggingEnable;
            Player.BCAR.bcarSettings.profile2.tailWaggingStatus = Player.BCAR.bcarSettings.tailWaggingStatus;
            Player.BCAR.bcarSettings.profile2.tailsDefault.tails1 = Player.BCAR.bcarSettings.tailsDefault.tails1;
            Player.BCAR.bcarSettings.profile2.tailsDefault.tails2 = Player.BCAR.bcarSettings.tailsDefault.tails2;
            Player.BCAR.bcarSettings.profile2.tailsDefault.tailsColor1 = Player.BCAR.bcarSettings.tailsDefault.tailsColor1;
            Player.BCAR.bcarSettings.profile2.tailsDefault.tailsColor2 = Player.BCAR.bcarSettings.tailsDefault.tailsColor2;
            Player.BCAR.bcarSettings.profile2.tailsDefault.tailsDescription1 = Player.BCAR.bcarSettings.tailsDefault.tailsDescription1;
            Player.BCAR.bcarSettings.profile2.tailsDefault.tailsDescription2 = Player.BCAR.bcarSettings.tailsDefault.tailsDescription2;

            Player.BCAR.bcarSettings.profile2.wingFlappingEnable = Player.BCAR.bcarSettings.wingFlappingEnable;
            Player.BCAR.bcarSettings.profile2.wingFlappingStatus = Player.BCAR.bcarSettings.wingFlappingStatus;
            Player.BCAR.bcarSettings.profile2.wingsDefault.wings1 = Player.BCAR.bcarSettings.wingsDefault.wings1;
            Player.BCAR.bcarSettings.profile2.wingsDefault.wings1 = Player.BCAR.bcarSettings.wingsDefault.wings2;
            Player.BCAR.bcarSettings.profile2.wingsDefault.wingsColor1 = Player.BCAR.bcarSettings.wingsDefault.wingsColor1;
            Player.BCAR.bcarSettings.profile2.wingsDefault.wingsColor1 = Player.BCAR.bcarSettings.wingsDefault.wingsColor2;
            Player.BCAR.bcarSettings.profile2.wingsDefault.wingsDescription1 = Player.BCAR.bcarSettings.wingsDefault.wingsDescription1;
            Player.BCAR.bcarSettings.profile2.wingsDefault.wingsDescription2 = Player.BCAR.bcarSettings.wingsDefault.wingsDescription2;
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Profile2 has been saved!</p>"
                );
        }
        bcarSettingsSave();

	}

    function CommandLoadProfile(argsList)
	{
		let loading = argsList[0];
		let loadingto = argsList.slice(1);

        //console.log("change = "+ change, "changeto = "+ changeto);

        if (loading === "load1") {
            if(Player.BCAR.bcarSettings.profile1Saved === true){
            Player.BCAR.bcarSettings.earWigglingEnable = Player.BCAR.bcarSettings.profile1.earWigglingEnable;
            Player.BCAR.bcarSettings.earWigglingStatus = Player.BCAR.bcarSettings.profile1.earWigglingStatus;
            Player.BCAR.bcarSettings.earsDefault.ears1 = Player.BCAR.bcarSettings.profile1.earsDefault.ears1;
            Player.BCAR.bcarSettings.earsDefault.ears2 = Player.BCAR.bcarSettings.profile1.earsDefault.ears2;
            Player.BCAR.bcarSettings.earsDefault.earsColor1 = Player.BCAR.bcarSettings.profile1.earsDefault.earsColor1;
            Player.BCAR.bcarSettings.earsDefault.earsColor2 = Player.BCAR.bcarSettings.profile1.earsDefault.earsColor2;
            Player.BCAR.bcarSettings.earsDefault.earsDescription1 = Player.BCAR.bcarSettings.profile1.earsDefault.earsDescription1;
            Player.BCAR.bcarSettings.earsDefault.earsDescription2 = Player.BCAR.bcarSettings.profile1.earsDefault.earsDescription2;
                InventoryWear(Player, Player.BCAR.bcarSettings.profile1.earsDefault.ears1, "HairAccessory2", Player.BCAR.bcarSettings.profile1.earsDefault.earsColor1);

            Player.BCAR.bcarSettings.tailWaggingEnable = Player.BCAR.bcarSettings.profile1.tailWaggingEnable;
            Player.BCAR.bcarSettings.tailWaggingStatus = Player.BCAR.bcarSettings.profile1.tailWaggingStatus;
            Player.BCAR.bcarSettings.tailsDefault.tails1 = Player.BCAR.bcarSettings.profile1.tailsDefault.tails1;
            Player.BCAR.bcarSettings.tailsDefault.tails2 = Player.BCAR.bcarSettings.profile1.tailsDefault.tails2;
            Player.BCAR.bcarSettings.tailsDefault.tailsColor1 = Player.BCAR.bcarSettings.profile1.tailsDefault.tailsColor1;
            Player.BCAR.bcarSettings.tailsDefault.tailsColor2 = Player.BCAR.bcarSettings.profile1.tailsDefault.tailsColor2;
            Player.BCAR.bcarSettings.tailsDefault.tailsDescription1 = Player.BCAR.bcarSettings.profile1.tailsDefault.tailsDescription1;
            Player.BCAR.bcarSettings.tailsDefault.tailsDescription2 = Player.BCAR.bcarSettings.profile1.tailsDefault.tailsDescription2;
                InventoryWear(Player, Player.BCAR.bcarSettings.profile1.tailsDefault.tails1, "TailStraps", Player.BCAR.bcarSettings.profile1.tailsDefault.tailsColor1);

            Player.BCAR.bcarSettings.wingFlappingEnable = Player.BCAR.bcarSettings.profile1.wingFlappingEnable;
            Player.BCAR.bcarSettings.wingFlappingStatus = Player.BCAR.bcarSettings.profile1.wingFlappingStatus;
            Player.BCAR.bcarSettings.wingsDefault.wings1 = Player.BCAR.bcarSettings.profile1.wingsDefault.wings1;
            Player.BCAR.bcarSettings.wingsDefault.wings1 = Player.BCAR.bcarSettings.profile1.wingsDefault.wings2;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor1 = Player.BCAR.bcarSettings.profile1.wingsDefault.wingsColor1;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor1 = Player.BCAR.bcarSettings.profile1.wingsDefault.wingsColor2;
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription1 = Player.BCAR.bcarSettings.profile1.wingsDefault.wingsDescription1;
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription2 = Player.BCAR.bcarSettings.profile1.wingsDefault.wingsDescription2;
                InventoryWear(Player, Player.BCAR.bcarSettings.profile1.wingsDefault.wings1, "Wings", Player.BCAR.bcarSettings.profile1.wingsDefault.wingsColor1)
                ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Profile1 has been loaded!</p>"
                 );
            }
            else if(Player.BCAR.bcarSettings.profile1Saved === false){
                ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Profile1 not found!\n" +
                    "Please save Profile1 first.</p>"
                 );
            }

        }
        else if (loading === "load2") {
            if(Player.BCAR.bcarSettings.profile2Saved === true){
            Player.BCAR.bcarSettings.earWigglingEnable = Player.BCAR.bcarSettings.profile2.earWigglingEnable;
            Player.BCAR.bcarSettings.earWigglingStatus = Player.BCAR.bcarSettings.profile2.earWigglingStatus;
            Player.BCAR.bcarSettings.earsDefault.ears1 = Player.BCAR.bcarSettings.profile2.earsDefault.ears1;
            Player.BCAR.bcarSettings.earsDefault.ears2 = Player.BCAR.bcarSettings.profile2.earsDefault.ears2;
            Player.BCAR.bcarSettings.earsDefault.earsColor1 = Player.BCAR.bcarSettings.profile2.earsDefault.earsColor1;
            Player.BCAR.bcarSettings.earsDefault.earsColor2 = Player.BCAR.bcarSettings.profile2.earsDefault.earsColor2;
            Player.BCAR.bcarSettings.earsDefault.earsDescription1 = Player.BCAR.bcarSettings.profile2.earsDefault.earsDescription1;
            Player.BCAR.bcarSettings.earsDefault.earsDescription2 = Player.BCAR.bcarSettings.profile2.earsDefault.earsDescription2;
                InventoryWear(Player, Player.BCAR.bcarSettings.profile2.earsDefault.ears1, "HairAccessory2", Player.BCAR.bcarSettings.profile2.earsDefault.earsColor1);

            Player.BCAR.bcarSettings.tailWaggingEnable = Player.BCAR.bcarSettings.profile2.tailWaggingEnable;
            Player.BCAR.bcarSettings.tailWaggingStatus = Player.BCAR.bcarSettings.profile2.tailWaggingStatus;
            Player.BCAR.bcarSettings.tailsDefault.tails1 = Player.BCAR.bcarSettings.profile2.tailsDefault.tails1;
            Player.BCAR.bcarSettings.tailsDefault.tails2 = Player.BCAR.bcarSettings.profile2.tailsDefault.tails2;
            Player.BCAR.bcarSettings.tailsDefault.tailsColor1 = Player.BCAR.bcarSettings.profile2.tailsDefault.tailsColor1;
            Player.BCAR.bcarSettings.tailsDefault.tailsColor2 = Player.BCAR.bcarSettings.profile2.tailsDefault.tailsColor2;
            Player.BCAR.bcarSettings.tailsDefault.tailsDescription1 = Player.BCAR.bcarSettings.profile2.tailsDefault.tailsDescription1;
            Player.BCAR.bcarSettings.tailsDefault.tailsDescription2 = Player.BCAR.bcarSettings.profile2.tailsDefault.tailsDescription2;
                InventoryWear(Player, Player.BCAR.bcarSettings.profile2.tailsDefault.tails1, "TailStraps", Player.BCAR.bcarSettings.profile2.tailsDefault.tailsColor1);

            Player.BCAR.bcarSettings.wingFlappingEnable = Player.BCAR.bcarSettings.profile2.wingFlappingEnable;
            Player.BCAR.bcarSettings.wingFlappingStatus = Player.BCAR.bcarSettings.profile2.wingFlappingStatus;
            Player.BCAR.bcarSettings.wingsDefault.wings1 = Player.BCAR.bcarSettings.profile2.wingsDefault.wings1;
            Player.BCAR.bcarSettings.wingsDefault.wings1 = Player.BCAR.bcarSettings.profile2.wingsDefault.wings2;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor1 = Player.BCAR.bcarSettings.profile2.wingsDefault.wingsColor1;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor1 = Player.BCAR.bcarSettings.profile2.wingsDefault.wingsColor2;
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription1 = Player.BCAR.bcarSettings.profile2.wingsDefault.wingsDescription1;
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription2 = Player.BCAR.bcarSettings.profile2.wingsDefault.wingsDescription2;
                InventoryWear(Player, Player.BCAR.bcarSettings.profile2.wingsDefault.wings1, "Wings", Player.BCAR.bcarSettings.profile2.wingsDefault.wingsColor1)
                ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Profile2 has been loaded!</p>"
                );
            }
            else if(Player.BCAR.bcarSettings.profile2Saved === false){
                ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Profile2 not found!\n" +
                    "Please save Profile2 first.</p>"
                 );
            }
        }
        bcarSettingsSave();

	}

    function CommandResetSettings(argsList)
	{
       let remove = argsList[0];
       let removeto = argsList.slice(1);

        if (remove === "reset") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React</b>\n" +
                    "Settings have been reseted!</p>"
                );
            bcarSettingsRemove();
            bcarSettingsLoad();
        }

	}

    function CommandChangelog(argsList)
	{
       let changelog = argsList[0];
       let changelogto = argsList.slice(1);

        if (changelog === "changelog") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452'><b>Bondage Club Auto React Changelog</b>: " + BCAR_Version + "\n" +
                    "" + BCAR_Version + ":\n" +
                    "- Added wing flapping via chat\n" +
                    "- Added profile presets\n" +
                    "View <a href='https://github.com/DrBranestawm/BCAR/blob/main/script/changelog.md' target='_blank'>Full Changelog</a> to see all changes</p>"
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
                	CommandProfileHelp(args.split(" "));
                	CommandGenderToggle(args.split(" "));
               		CommandStatus(args.split(" "));
                	CommandShowProfile(args.split(" "));
                	CommandSaveProfile(args.split(" "));
                	CommandLoadProfile(args.split(" "));
                	CommandChangelog(args.split(" "));
                	CommandResetSettings(args.split(" "));

			}
		}

	])

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
