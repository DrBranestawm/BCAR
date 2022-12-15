const BCAR_Version = "0.5.5"
const BCAR_Settings_Version = 6;
window.LoadedError = class extends Error {}
if (window.BCAR_VERSION) {
    if (window.BCAR_VERSION < BCAR_Version) {
        console.log("BCAR has been udapted") // I mean do your thing here
    }
    throw new LoadedError("BCAR already loaded")
}
//sdk stuff

var bcModSDK=function(){"use strict";const e="1.1.0";function o(e){alert("Mod ERROR:\n"+e);const o=new Error(e);throw console.error(o),o}const t=new TextEncoder;function n(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function r(e){const o=new Set;return e.filter((e=>!o.has(e)&&o.add(e)))}const i=new Map,a=new Set;function d(e){a.has(e)||(a.add(e),console.warn(e))}function s(e){const o=[],t=new Map,n=new Set;for(const r of p.values()){const i=r.patching.get(e.name);if(i){o.push(...i.hooks);for(const[o,a]of i.patches.entries())t.has(o)&&t.get(o)!==a&&d(`ModSDK: Mod '${r.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${o}\nPatch1:\n${t.get(o)||""}\nPatch2:\n${a}`),t.set(o,a),n.add(r.name)}}o.sort(((e,o)=>o.priority-e.priority));const r=function(e,o){if(0===o.size)return e;let t=e.toString().replaceAll("\r\n","\n");for(const[n,r]of o.entries())t.includes(n)||d(`ModSDK: Patching ${e.name}: Patch ${n} not applied`),t=t.replaceAll(n,r);return(0,eval)(`(${t})`)}(e.original,t);let i=function(o){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookChainExit)||void 0===i?void 0:i.call(t,e.name,n),d=r.apply(this,o);return null==a||a(),d};for(let t=o.length-1;t>=0;t--){const n=o[t],r=i;i=function(o){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookEnter)||void 0===i?void 0:i.call(t,e.name,n.mod),d=n.hook.apply(this,[o,e=>{if(1!==arguments.length||!Array.isArray(o))throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof e}`);return r.call(this,e)}]);return null==a||a(),d}}return{hooks:o,patches:t,patchesSources:n,enter:i,final:r}}function c(e,o=!1){let r=i.get(e);if(r)o&&(r.precomputed=s(r));else{let o=window;const a=e.split(".");for(let t=0;t<a.length-1;t++)if(o=o[a[t]],!n(o))throw new Error(`ModSDK: Function ${e} to be patched not found; ${a.slice(0,t+1).join(".")} is not object`);const d=o[a[a.length-1]];if("function"!=typeof d)throw new Error(`ModSDK: Function ${e} to be patched not found`);const c=function(e){let o=-1;for(const n of t.encode(e)){let e=255&(o^n);for(let o=0;o<8;o++)e=1&e?-306674912^e>>>1:e>>>1;o=o>>>8^e}return((-1^o)>>>0).toString(16).padStart(8,"0").toUpperCase()}(d.toString().replaceAll("\r\n","\n")),l={name:e,original:d,originalHash:c};r=Object.assign(Object.assign({},l),{precomputed:s(l),router:()=>{},context:o,contextProperty:a[a.length-1]}),r.router=function(e){return function(...o){return e.precomputed.enter.apply(this,[o])}}(r),i.set(e,r),o[r.contextProperty]=r.router}return r}function l(){const e=new Set;for(const o of p.values())for(const t of o.patching.keys())e.add(t);for(const o of i.keys())e.add(o);for(const o of e)c(o,!0)}function f(){const e=new Map;for(const[o,t]of i)e.set(o,{name:o,original:t.original,originalHash:t.originalHash,sdkEntrypoint:t.router,currentEntrypoint:t.context[t.contextProperty],hookedByMods:r(t.precomputed.hooks.map((e=>e.mod))),patchedByMods:Array.from(t.precomputed.patchesSources)});return e}const p=new Map;function u(e){p.get(e.name)!==e&&o(`Failed to unload mod '${e.name}': Not registered`),p.delete(e.name),e.loaded=!1,l()}function g(e,t,r){"string"==typeof e&&"string"==typeof t&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.\nIt will work for now, but please inform author to update.`),e={name:e,fullName:e,version:t},t={allowReplace:!0===r}),e&&"object"==typeof e||o("Failed to register mod: Expected info object, got "+typeof e),"string"==typeof e.name&&e.name||o("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let i=`'${e.name}'`;"string"==typeof e.fullName&&e.fullName||o(`Failed to register mod ${i}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),i=`'${e.fullName} (${e.name})'`,"string"!=typeof e.version&&o(`Failed to register mod ${i}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),void 0!==e.repository&&"string"!=typeof e.repository&&o(`Failed to register mod ${i}: Expected repository to be undefined or string, got ${typeof e.version}`),null==t&&(t={}),t&&"object"==typeof t||o(`Failed to register mod ${i}: Expected options to be undefined or object, got ${typeof t}`);const a=!0===t.allowReplace,d=p.get(e.name);d&&(d.allowReplace&&a||o(`Refusing to load mod ${i}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`),u(d));const s=e=>{"string"==typeof e&&e||o(`Mod ${i} failed to patch a function: Expected function name string, got ${typeof e}`);let t=g.patching.get(e);return t||(t={hooks:[],patches:new Map},g.patching.set(e,t)),t},f={unload:()=>u(g),hookFunction:(e,t,n)=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);const r=s(e);"number"!=typeof t&&o(`Mod ${i} failed to hook function '${e}': Expected priority number, got ${typeof t}`),"function"!=typeof n&&o(`Mod ${i} failed to hook function '${e}': Expected hook function, got ${typeof n}`);const a={mod:g.name,priority:t,hook:n};return r.hooks.push(a),l(),()=>{const e=r.hooks.indexOf(a);e>=0&&(r.hooks.splice(e,1),l())}},patchFunction:(e,t)=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);const r=s(e);n(t)||o(`Mod ${i} failed to patch function '${e}': Expected patches object, got ${typeof t}`);for(const[n,a]of Object.entries(t))"string"==typeof a?r.patches.set(n,a):null===a?r.patches.delete(n):o(`Mod ${i} failed to patch function '${e}': Invalid format of patch '${n}'`);l()},removePatches:e=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);s(e).patches.clear(),l()},callOriginal:(e,t,n)=>(g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`),"string"==typeof e&&e||o(`Mod ${i} failed to call a function: Expected function name string, got ${typeof e}`),Array.isArray(t)||o(`Mod ${i} failed to call a function: Expected args array, got ${typeof t}`),function(e,o,t=window){return c(e).original.apply(t,o)}(e,t,n)),getOriginalHash:e=>("string"==typeof e&&e||o(`Mod ${i} failed to get hash: Expected function name string, got ${typeof e}`),c(e).originalHash)},g={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:a,api:f,loaded:!0,patching:new Map};return p.set(e.name,g),Object.freeze(f)}function h(){const e=[];for(const o of p.values())e.push({name:o.name,fullName:o.fullName,version:o.version,repository:o.repository});return e}let m;const y=function(){if(void 0===window.bcModSdk)return window.bcModSdk=function(){const o={version:e,apiVersion:1,registerMod:g,getModsInfo:h,getPatchingInfo:f,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return m=o,Object.freeze(o)}();if(n(window.bcModSdk)||o("Failed to init Mod SDK: Name already in use"),1!==window.bcModSdk.apiVersion&&o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==e&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&void 0===window.bcModSdk._shim10register)){const e=window.bcModSdk,o=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(o,t,n)=>o&&"object"==typeof o&&"string"==typeof o.name&&"string"==typeof o.version?e.registerMod(o.name,o.version,"object"==typeof t&&!!t&&!0===t.allowReplace):e.registerMod(o,t,n),_shim10register:!0}));window.bcModSdk=o}return window.bcModSdk}();return"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=y),y}();

//sdk stuff

(async function () {
	const modApi = bcModSDK.registerMod({
	name: 'BCAR+',
	fullName: 'Bondage Club Auto React + BCE Expressions',
	version: BCAR_Version,
	// Optional - Link to the source code of the mod
	repository: 'https://github.com/DrBranestawm/BCAR',
		});
  //global variables
    var Dictionary = [];



  //do not touch this
  await waitFor(() => ServerIsConnected && ServerSocket);
  //end of do not touch
  const bcarSettingsKey = () => `bcarSettings.${Player?.AccountName}`;
    const subcommands = ["arousalhelp", "arousaloff", "arousalon", "changelog", "earhelp", "earoff", "earon", "ear1", "ear2", "eardelete", "expressionhelp", "expressionon", "expressionoff", "male", "female", "other", "help", "load1", "load2", "profile1", "profile2", "profilehelp", "save1", "save2", "status", "tailhelp", "tailoff", "tailon", "tail1", "tail2", "taildelete", "winghelp", "wingoff", "wingon", "wing1", "wing2", "wingdelete"];
    const w = window;
    const BCAR_CHANGELOG =
          "BCAR v" + BCAR_Version + ":\n" +
          "- Included BCE Expressions into BCAR\n" +
          "- Added an autocompletion for subcommands\n" +
          "- Neck Restraints blocking fyling now\n" +
          "- Automatic messages bypass whispers now\n" +
          "- Using BCT API to sync the BCT arousal bar with the room\n" +
          "- Settings now save on server\n" +
          "- Code clean up\n" +
          "- Added the possiblitly to change back to no ears/tail/wings\n" +
          "- Added Commands eardelete/taildelete/wingdelete" +
          "\n" +
          "BCAR v0.5.2:\n" +
          "- RegisterMod hotfix\n" +
          "\n" +
          "BCAR v0.5.1:\n" +
          "- Updated to bcModSDK 1.1\n" +
          "- Added wing spreding and retracting via chat\n" +
          "- Added on/off switch for arousal manipulating\n" +
          "\n" +
          "BCAR v0.5.0:\n" +
          "- Added wing flapping via chat\n" +
          "- Added profile presets\n" +
          "View <a href='https://github.com/DrBranestawm/BCAR/blob/main/script/changelog.md' target='_blank'>Full Changelog</a> to see all changes.</p>"

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
                " moans softly, twitching " + Player.BCAR.bcarSettings.genderDefault.possessive + " ears as it's licked."]],
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
        ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: CharacterNickname(Player) + typeAction[type][1][nya] }]});
        const msg = typeAction[type][0][nya]
        if (msg.length > 0) ServerSend("ChatRoomChat",{Type:"Chat",Content:msg})
    }

     function EarWiggle(){
      if(Player.BCAR.bcarSettings.earWigglingEnable === true){
          let earsVariations = [Player.BCAR.bcarSettings.earsDefault.ears2,Player.BCAR.bcarSettings.earsDefault.ears1];
          let earsColor = [Player.BCAR.bcarSettings.earsDefault.earsColor2,Player.BCAR.bcarSettings.earsDefault.earsColor1];
          let numberWiggles = parseInt(Player.BCAR.bcarSettings.earsDefault.earsCount);
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

     function ArousalEarCaress(){
         if(Player.BCAR.bcarSettings.arousalEnable === true){
             Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
             ActivityChatRoomArousalSync(Player);
             Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 15;
             BCT_API?.ActivityChatRoomBCTArousalSync(Player);
         }
     }

     function ArousalEarNibble(){
         if(Player.BCAR.bcarSettings.arousalEnable === true){
             Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 10;
             ActivityChatRoomArousalSync(Player);
             Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 50;
             BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
     }

    function ArousalEarLick(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 7;
            ActivityChatRoomArousalSync(Player);
            Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 50;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalEarKiss(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 7;
            ActivityChatRoomArousalSync(Player);
            Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 50;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalHeadBrush(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalHeadPat(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalCaressBack(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalMassageBack(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalCaressButt(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 5;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function Sleep(){
        if(Player.BCAR.bcarSettings.asleep === false){
            console.log("Sleep - Check")
            Player.BCAR.bcarSettings.asleep = true;
            let numberBlinks = 1;
            let delay = 3000;
            for(let i=0; i < numberBlinks; i++)
            {
                setTimeout(function(){CharacterSetFacialExpression(Player, "Eyes", "Horny");},i*delay);
                setTimeout(function(){CharacterSetFacialExpression(Player, "Eyes", "Closed"), CharacterSetFacialExpression(Player, "Emoticon", "Sleep");},i*delay+delay/2);
            }
        }
    }

    function Wake(){
        if(Player.BCAR.bcarSettings.asleep === true){
            console.log("Wake - Check")
            Player.BCAR.bcarSettings.asleep = false;
            let numberBlinks = 1;
            let delay = 3000;
            for(let i=0; i < numberBlinks; i++)
            {
                setTimeout(function(){CharacterSetFacialExpression(Player, "Eyes", "Horny");},i*delay);
                setTimeout(function(){CharacterSetFacialExpression(Player, "Eyes", null), CharacterSetFacialExpression(Player, "Emoticon", null);},i*delay+delay/2);
            }
        }
    }

     function TailWag(){
      if(Player.BCAR.bcarSettings.tailWaggingEnable === true){
        let tailsVariations = [Player.BCAR.bcarSettings.tailsDefault.tails2,Player.BCAR.bcarSettings.tailsDefault.tails1];
        let tailsColor = [Player.BCAR.bcarSettings.tailsDefault.tailsColor2,Player.BCAR.bcarSettings.tailsDefault.tailsColor1];
        let numberWags = parseInt(Player.BCAR.bcarSettings.tailsDefault.tailsCount);
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
      if(Player.BCAR.bcarSettings.wingFlappingEnable === true){
        let wingsVariations = [Player.BCAR.bcarSettings.wingsDefault.wings2,Player.BCAR.bcarSettings.wingsDefault.wings1];
        let wingsColor = [Player.BCAR.bcarSettings.wingsDefault.wingsColor2,Player.BCAR.bcarSettings.wingsDefault.wingsColor1];
        let numberFlaps = parseInt(Player.BCAR.bcarSettings.wingsDefault.wingsCount);
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

      function WingsSpread(){
      if(Player.BCAR.bcarSettings.wingFlappingEnable === true){
        InventoryWear(Player, Player.BCAR.bcarSettings.wingsDefault.wings1, "Wings", Player.BCAR.bcarSettings.wingsDefault.wingsColor1);
        ChatRoomCharacterItemUpdate(Player, "Wings");
   }
 }

      function Fly(){
      if(Player.BCAR.bcarSettings.wingFlappingEnable === true){
        CharacterSetActivePose(Player, "LegsClosed");
        InventoryGet(Player, 'Emoticon').Property.OverrideHeight = { Height: +70 };
   }
 }

      function Landing(){
      if(Player.BCAR.bcarSettings.wingFlappingEnable === true){
        delete InventoryGet(Player, 'Emoticon').Property.OverrideHeight;
        CurrentScreen === 'ChatRoom'
        ? ChatRoomCharacterUpdate(Player)
        : CharacterRefresh(Player);
   }
 }

    function WingsHide(){
        InventoryRemove(Player, "Wings");
                CurrentScreen === 'ChatRoom'
        ? ChatRoomCharacterUpdate(Player)
        : CharacterRefresh(Player);
    }
/*
    //greeting message.
    BCAR_Greeting = function(data) {
        Player.RestrictionSettings.BypassNPCPunishments = true;
        ChatRoomSendLocal(
            "<img src='https://user-images.githubusercontent.com/115511728/199107170-b32c4f2b-9319-422a-8488-51d22fe98704.png' style='width:300px;height:100px;align:center;'>\n" +
            "Type /bcar or /bcar help to open the help. Type /bcar nohelp to never show this message again."
        );
        ServerSocket.off('ChatRoomMessage', BCAR_Greeting)
    }

    setTimeout(function() {
        ServerSocket.on('ChatRoomMessage', BCAR_Greeting);
    }, 5000);
*/

    const restraints = ["CollarChainLong", "CollarRopeLong", "CollarChainMedium", "CollarRopeMedium", "CollarChainShort", "CollarRopeShort", "Post", "PetPost"]
    window.ChatRoomRegisterMessageHandler({ Priority: -200, Description: "BCAR Ground flying players with chains", Callback: (data, sender, msg, metadata) => {
        if ("ActionUse" != msg) return // this is not our message
        let asset_name, dest
        for (let item of data.Dictionary) {
            if ('NextAsset' === item.Tag) asset_name = item.AssetName
            if ('DestinationCharacter' === item.Tag) dest = item.MemberNumber
        }
        if (!restraints.includes(asset_name)) return // this is not our asset
        if (dest !== Player.MemberNumber) return // we are not the receiver
        if (!InventoryGet(Player, 'Emoticon')?.Property?.OverrideHeight) return // we are not flying
        delete InventoryGet(Player, 'Emoticon')?.Property?.OverrideHeight
        ChatRoomCharacterUpdate(Player)
        ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: `${CharacterNickname(Player)} was dragged to the ground by a ${Asset.find(a => a.Name === asset_name).Description}.` }]})
    }})


  // on channel join data Type is Action, Content is ServerEnter and MemberNumber is the joining user
  //do not touch this
  ServerSocket.on("ChatRoomMessage", async (data) => {
    await sleep(10);

//    window.ChatRoomRegisterMessageHandler({ Priority: -220, Description: "Lilly",
//    Callback: (data, sender, msg, metadata) => {
//    console.log({data, sender, msg, metadata})
//  }
//})

//      if (Player.BCT.bctSettings.tailWaggingEnable === true){
//          Player.BCT.bctSettings.tailWaggingEnable = false
//      }

      if(data.Type === "Emote" && data.Sender === Player.MemberNumber){
          var sleepMessage = data.Content;
          let patterns = [/falls.*asleep/mi, /sleeps/mi] ; // matches {<any> falls <any> asleep <any>}
          let result = patterns.find(pattern => pattern.test(sleepMessage));
          if(result){
              Sleep();
          }
      }

      if(data.Type === "Emote" && data.Sender === Player.MemberNumber){
          var wakeMessage = data.Content;
          let patterns = [/wakes.*up/mi] ; // matches {<any> falls <any> asleep <any>}
          let result = patterns.find(pattern => pattern.test(wakeMessage));
          if(result){
              Wake();
          }
      }

//      if(data.Type === "Emote" && data.Sender === Player.MemberNumber){
//          var wagMessage = data.Content;
//          let patterns = [/wags.*tail/mi, /tail.*wagging/mi, /wagging.*tail/mi] ; // matches {<any> wags <any> tail <any>}
//          let result = patterns.find(pattern => pattern.test(wagMessage));
//          if(result){
//              TailWag();
//          }
//      }

      if(data.Type === "Emote" && data.Sender === Player.MemberNumber){
          var wingsSpreadMessage = data.Content;
          let patterns = [/shows.*wings/mi, /spread.*wings/mi] ; // matches {<any> flaps <any> wings <any>}
          let result = patterns.find(pattern => pattern.test(wingsSpreadMessage));
          if(result){
              WingsSpread();
          }
      }

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
          let NeckRestraints = InventoryGet(Player, "ItemNeckRestraints");
          if(result){
          	if (InventoryGet(Player, "ItemNeckRestraints")){
              		console.log("IF")
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                    "You can't fly because the " + NeckRestraints.Asset.Description + " holds you down.</p>"
                )
                ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: CharacterNickname(Player) + " tried to fly while " + Player.BCAR.bcarSettings.genderDefault.pronoun + " is held down by a " + NeckRestraints.Asset.Description + "." }]});
            }
              else {
                  console.log("ELSE")
                  Fly();
                  WingFlap();
              }
          }
      }


      if(data.Type === "Emote" && data.Sender === Player.MemberNumber){
          var stopFlyMessage = data.Content;
          let patterns = [/lands.*/mi, /stops.*flying/mi] ; // matches {<any> stops <any> fly <any>}
          let result = patterns.find(pattern => pattern.test(stopFlyMessage));
          if(result){
              WingFlap();
              Landing();
          }
      }

      if(data.Type === "Emote" && data.Sender === Player.MemberNumber){
          var wingsHideMessage = data.Content;
          let patterns = [/hides.*wings/mi, /folds.*wings/mi, /retracts.*wings/mi] ; // matches {<any> flaps <any> wings <any>}
          let result = patterns.find(pattern => pattern.test(wingsHideMessage));
          if(result){
              Landing();
              WingsHide();
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
                  ArousalEarCaress();
                  }
              }
            else if (data.Content.indexOf("Nibble") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  if(Player.BCAR.bcarSettings.earWigglingEnable === true){
                  console.log(nya)
                  ActivityBeeper("EarNibble",nya);

                  setTimeout(EarWiggle);
                  ArousalEarNibble();
                  }
              }
              else if (data.Content.indexOf("Lick") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  if(Player.BCAR.bcarSettings.earWigglingEnable === true){
                  console.log(nya)
                  ActivityBeeper("EarLick",nya);

                  setTimeout(EarWiggle);
                  ArousalEarLick();
                  }
              }
              else if (data.Content.indexOf("Kiss") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  if(Player.BCAR.bcarSettings.earWigglingEnable === true){
                  console.log(nya)
                  ActivityBeeper("EarKiss",nya);

                  setTimeout(EarWiggle);
                  ArousalEarKiss();
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
                ArousalHeadBrush();
                }
            }
            else if (data.Content.indexOf("Pet") !== -1) {
                let nya = Math.floor(Math.random() * 4);
                if(Player.BCAR.bcarSettings.earWigglingEnable === true){
                console.log(nya)
                ActivityBeeper("HeadPat",nya);

                setTimeout(EarWiggle);
                ArousalHeadPat();
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
                ArousalCaressBack();
                }
            }
            else if (data.Content.indexOf("MassageHands") !== -1) {
                let nya = Math.floor(Math.random() * 1);
                if(Player.BCAR.bcarSettings.tailWaggingEnable === true){
                console.log(nya)
                ActivityBeeper("MassageBack",nya);

                setTimeout(TailWag);
                ArousalMassageBack();
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
                ArousalCaressButt();
                }
            }
	}

        else if ((data.Content.startsWith("ChatSelf-ItemNeckRestraints") === -1)) {
            if (data.Content.indexOf("Caress") !== -1) {
                let nya = Math.floor(Math.random() * 1);
                if(Player.BCAR.bcarSettings.tailWaggingEnable === true){
                console.log(nya)

                Landing();
                }
            }
	}


    }

}


    return;
  });


    function bcarSettingsSave() {
    localStorage.setItem(bcarSettingsKey(),JSON.stringify(Player.BCAR.bcarSettings));

    Player.OnlineSettings.BCAR = Player.BCAR
      window.ServerAccountUpdate.QueueData({OnlineSettings: window.Player.OnlineSettings})
    }

    async function beepChangelog() {
		await waitFor(() => !!Player?.AccountName);
		await sleep(5000);
		bcarBeepNotify("BCAR updated", "BCAR got updated. Type ''/bcar changelog'' to view the changelog.");
	}

	function bcarBeepNotify (title, text){
		modAPI.callOriginal("ServerAccountBeep", [
			{
				MemberNumber: Player.MemberNumber,
				MemberName: "BCAR+",
				ChatRoomName: title,
				Private: true,
				Message: text,
				ChatRoomSpace: "",
			},
		]);
	}

    function bcarSettingsRemove() {
    delete Player.OnlineSettings.BCAR
      window.ServerAccountUpdate.QueueData({OnlineSettings: window.Player.OnlineSettings})
    }

    async function bcarSettingsLoad() {
		await waitFor(() => !!Player?.AccountName);
        const BCAR_DEFAULT_SETTINGS = {
            arousalEnable : true,
            arousalStatus : "Enabled",
            asleep: false,
            expressionsEnable :false,
            expressionsStatus : "Disabled",
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
//            bcarLoaded : false,
        }

        // if there are no settings on the server initialize with an empty object
        Player.BCAR = Player.OnlineSettings.BCAR || {bcarSettings: {}}
        //if online settings are not an older version then local ones, use them instead

        const settings = Player.OnlineSettings.BCAR?.bcarSettings || {}
        //        if(!settings) settings = {};

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

        bcarSettingsSave();

        if(Player.BCAR != null){
        console.log("BCAR is Loaded");
//            BCAR_Greeting();
        }
        window.BCAR_VERSION = BCAR_Version
    }


//Ear Commands
function CommandEarsChange(argsList)
{
    let change = argsList[0];
    let changeto = argsList.slice(1);

    if (change === "ear1") {
        let ears = InventoryGet(Player,"HairAccessory2"); // you do this in both branches
        Player.BCAR.bcarSettings.earsDefault.ears1 = ears?.Asset?.Name; // what happens if ears is undefined?
        Player.BCAR.bcarSettings.earsDefault.earsColor1 = ears?.Color; // what happens if ears is undefined?
        Player.BCAR.bcarSettings.earsDefault.earsDescription1 = ears?.Asset?.Description || "None";
        let updated_text = ""
        if (!Player.BCAR.bcarSettings.earWigglingEnable) {
            Player.BCAR.bcarSettings.earWigglingEnable = true;
            Player.BCAR.bcarSettings.earWigglingStatus = "Enabled";
            updated_text = "<div style='background-color:#5FBD7A'>Ear wiggle is now enabled!</div>"
        }
        ChatRoomSendLocal(
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
            "Primary ears have been updated!</p>" +
            updated_text
        );
    }
    else if (change === "ear2") {
        let ears = InventoryGet(Player,"HairAccessory2");
        Player.BCAR.bcarSettings.earsDefault.ears2 = ears?.Asset?.Name;
        Player.BCAR.bcarSettings.earsDefault.earsColor2 = ears?.Color;
        Player.BCAR.bcarSettings.earsDefault.earsDescription2 = ears?.Asset?.Description || "None";
        ChatRoomSendLocal(
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
            "Secondary ears have been updated!</p>"
        );
    }
    bcarSettingsSave();
}

function CommandEarsToggle(argsList)
{
    let toggle = argsList[0];
    let toggleto = argsList.slice(1);

    if (toggle === "earon") {
        Player.BCAR.bcarSettings.earWigglingEnable = true;
        Player.BCAR.bcarSettings.earWigglingStatus = "Enabled";
        ChatRoomSendLocal(
            "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
            "Ear wiggle is now enabled!</p>"
        );
    }
    else if (toggle === "earoff") {
        Player.BCAR.bcarSettings.earWigglingEnable = false;
        Player.BCAR.bcarSettings.earWigglingStatus = "Disabled";
        ChatRoomSendLocal(
            "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
            "Ear wiggle is now disabled!</p>"
        );
    }
    bcarSettingsSave();
}

function CommandEarsDelete(argsList)
    {
        let toggle = argsList[0];
        let toggleto = argsList.slice(1);

        if (toggle === "eardelete") {
            Player.BCAR.bcarSettings.earsDefault = {};
            Player.BCAR.bcarSettings.earsDefault.earsDescription1 = "None";
            Player.BCAR.bcarSettings.earsDefault.earsDescription2 = "None";
            Player.BCAR.bcarSettings.earWigglingEnable = false;
            Player.BCAR.bcarSettings.earWigglingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Ears has been removed and ear wiggle is now disabled!</p>"
            );
            InventoryRemove(Player, "HairAccessory2")
        }
        bcarSettingsSave();
    }

function CommandEarHelp(argsList)
    {
        let openHelp = argsList[0];
        let openHelpto = argsList.slice(1);

        if (openHelp === "ear" || openHelp === "earhelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>: Ear instructions:\n" +
                "First equip the main ears you want to wear in primarily the ''Ears'' slot in your wardrobe. Type ''/bcar ear1'' in the chat to save the main ears. \n" +
                "For your ears to wiggle follow the same steps and equip a different type of ears to use as your secondary. Type ''/bcar ear2'' in the chat to save the secondary ears. \n" +
                " \n" +
                "Commands:\n" +
                "/bcar ear1 - Saves the primary ears.\n" +
                "/bcar ear2 - Saves the secondary ears.\n" +
                "/bcar earon - Enables the ear wiggling on.\n" +
                "/bcar earoff - Disables the ear wiggling off.\n" +
                "/bcar eardelete - Removes the ears.</p>"
            );
        }

    }
//End of Ear Commands

//Tail Commands
function CommandTailChange(argsList)
    {
    let change = argsList[0];
    let changeto = argsList.slice(1);

    if (change === "tail1") {
        let tails = InventoryGet(Player,"TailStraps");
        Player.BCAR.bcarSettings.tailsDefault.tails1 = tails?.Asset?.Name;
        Player.BCAR.bcarSettings.tailsDefault.tailsColor1 = tails?.Color;
        Player.BCAR.bcarSettings.tailsDefault.tailsDescription1 = tails?.Asset?.Description|| "None";
        let updated_text = ""
        if(!Player.BCAR.bcarSettings.tailWaggingEnable) {
            Player.BCAR.bcarSettings.tailWaggingEnable = true;
            Player.BCAR.bcarSettings.tailWaggingStatus = "Enabled";
            updated_text = "<div style='background-color:#5FBD7A'>Tail wagging is now enabled!</div>"
        }
        ChatRoomSendLocal(
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
            "Primary tail has been updated!</p>" +
            updated_text
        );
    }
    else if (change === "tail2") {
        let tails = InventoryGet(Player,"TailStraps");
        Player.BCAR.bcarSettings.tailsDefault.tails2 = tails?.Asset?.Name;
        Player.BCAR.bcarSettings.tailsDefault.tailsColor2 = tails?.Color;
        Player.BCAR.bcarSettings.tailsDefault.tailsDescription2 = tails?.Asset?.Description;
        ChatRoomSendLocal(
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
            "Secondary tail has been updated!</p>"
        );
    }
    bcarSettingsSave();
}

function CommandTailToggle(argsList)
    {
        let toggle = argsList[0];
        let toggleto = argsList.slice(1);

        if (toggle === "tailon") {
            Player.BCAR.bcarSettings.tailWaggingEnable = true;
            Player.BCAR.bcarSettings.tailWaggingStatus = "Enabled";
            ChatRoomSendLocal(
                "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Tail wagging is now enabled!</p>"
            );
        }
        else if (toggle === "tailoff") {
            Player.BCAR.bcarSettings.tailWaggingEnable = false;
            Player.BCAR.bcarSettings.tailWaggingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Tail wagging is now disabled!</p>"
            );
        }
        bcarSettingsSave();
    }

function CommandTailDelete(argsList)
    {
        let toggle = argsList[0];
        let toggleto = argsList.slice(1);

        if (toggle === "taildelete") {
            Player.BCAR.bcarSettings.tailsDefault = {};
            Player.BCAR.bcarSettings.tailsDefault.tailsDescription1 = "None";
            Player.BCAR.bcarSettings.tailsDefault.tailsDescription2 = "None";
            Player.BCAR.bcarSettings.tailWaggingEnable = false;
            Player.BCAR.bcarSettings.tailWaggingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Tail has been removed and tail wagging is now disabled!</p>"
            );
            InventoryRemove(Player, "TailStraps")
        }
        bcarSettingsSave();
    }

function CommandTailHelp(argsList)
    {
        let openHelp = argsList[0];
        let openHelpto = argsList.slice(1);

        if (openHelp === "tail" || openHelp === "tailhelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>: Tail instructions:\n" +
                "First equip the main tail you want to wear in primarily the ''Tail Strap'' slot in your wardrobe. Type ''/bcar tail1'' in the chat to save the main tail. \n" +
                "For your tail to wag follow the same steps and equip a different type of tail to use as your secondary. Type ''/bcar tail2'' in the chat to save the secondary tail. \n" +
                " \n" +
                "Commands:\n" +
                "/bcar tail1 - Saves the primary tail.\n" +
                "/bcar tail2 - Saves the secondary tail.\n" +
                "/bcar tailon - Enables the tail wagging on.\n" +
                "/bcar tailoff - Disbales the tail wagging off.\n" +
                "/bcar taildelete - Removes the tail.</p>"
            );
        }

    }
//End of Tail Commands

//Wing Commands
function CommandWingChange(argsList)
    {
        let change = argsList[0];
        let changeto = argsList.slice(1);

        if (change === "wing1") {
            let wings = InventoryGet(Player,"Wings");
            Player.BCAR.bcarSettings.wingsDefault.wings1 = wings?.Asset?.Name;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor1 = wings?.Color;
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription1 = wings?.Asset?.Description || "None";
            let updated_text = ""
            if(!Player.BCAR.bcarSettings.wingFlappingEnable) {
                Player.BCAR.bcarSettings.wingFlappingEnable = true;
                Player.BCAR.bcarSettings.wingFlappingStatus = "Enabled";
                updated_text = "<div style='background-color:#5FBD7A'>Wing flapping is now enabled!!</div>"
            }
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Primary wings has been updated!</p>" +
                updated_text
            );
        }
        else if (change === "wing2") {
            let wings = InventoryGet(Player,"Wings");
            Player.BCAR.bcarSettings.wingsDefault.wings2 = wings?.Asset?.Name;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor2 = wings?.Color;
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription2 = wings?.Asset?.Description;
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Secondary wings has been updated!</p>"
            );
        }
        bcarSettingsSave();
    }

function CommandWingToggle(argsList)
    {
        let toggle = argsList[0];
        let toggleto = argsList.slice(1);

        if (toggle === "wingon") {
            Player.BCAR.bcarSettings.wingFlappingEnable = true;
            Player.BCAR.bcarSettings.wingFlappingStatus = "Enabled";
            ChatRoomSendLocal(
                "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Wing flapping is now enabled!</p>"
            );
        }
        else if (toggle === "wingoff") {
            Player.BCAR.bcarSettings.wingFlappingEnable = false;
            Player.BCAR.bcarSettings.wingFlappingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Wing flapping is now disabled!</p>"
            );
        }
        bcarSettingsSave();
    }

function CommandWingDelete(argsList)
    {
        let toggle = argsList[0];
        let toggleto = argsList.slice(1);

        if (toggle === "wingdelete") {
            Player.BCAR.bcarSettings.wingsDefault = {};
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription1 = "None";
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription2 = "None";
            Player.BCAR.bcarSettings.wingFlappingEnable = false;
            Player.BCAR.bcarSettings.wingFlappingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Wings has been removed and wing flapping is now disabled!</p>"
            );
            InventoryRemove(Player, "Wings")
        }
        bcarSettingsSave();
    }

function CommandWingHelp(argsList)
    {
        let openHelp = argsList[0];
        let openHelpto = argsList.slice(1);

        if (openHelp === "wing" || openHelp === "winghelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>: Wing instructions:\n" +
                "First equip the main wings you want to wear in primarily the ''Wings'' slot in your wardrobe. Type ''/bcar wing1'' in the chat to save the main wings. \n" +
                "For your wings to wiggle follow the same steps and equip a different type of wings to use as your secondary. Type ''/bcar wing2'' in the chat to save the secondary wings. \n" +
                "To let your wings flap type an emote anything that includes the words ''flaps'' and ''wings''. \n" +
                " \n" +
                "Commands:\n" +
                "/bcar wing1 - Saves the primary wings.\n" +
                "/bcar wing2 - Saves the secondary wings.\n" +
                "/bcar wingon - Enables the wing flapping on.\n" +
                "/bcar wingoff - Disables the wing flapping off.\n" +
                "/bcar wingdelete - Removes the wings\n" +
                " \n" +
                "Examples: \n" +
                "<i>*flaps her wings \n" +
                "*is flapping her wings \n" +
                "*lets her wings flap \n" +
                "*spreads her wings, flapping with them</i></p>"
            );
        }

    }
//End of Wing Commands

//Profile Commands
function CommandShowProfile(argsList)
    {
        let showProfile = argsList[0];
        let showProfileto = argsList.slice(1);

        if (showProfile === "profile1") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>: Profile1 preset:\n" +
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
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>: Profile2 preset:\n" +
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

        if (saving === "save1") {
            Player.BCAR.bcarSettings.profile1Saved = true;
            Player.BCAR.bcarSettings.profile1.earWigglingEnable = Player.BCAR.bcarSettings.earWigglingEnable;
            Player.BCAR.bcarSettings.profile1.earWigglingStatus = Player.BCAR.bcarSettings.earWigglingStatus;
            Player.BCAR.bcarSettings.profile1.earsDefault = Player.BCAR.bcarSettings.earsDefault

            Player.BCAR.bcarSettings.profile1.tailWaggingEnable = Player.BCAR.bcarSettings.tailWaggingEnable;
            Player.BCAR.bcarSettings.profile1.tailWaggingStatus = Player.BCAR.bcarSettings.tailWaggingStatus;
            Player.BCAR.bcarSettings.profile1.tailsDefault = Player.BCAR.bcarSettings.tailsDefault

            Player.BCAR.bcarSettings.profile1.wingFlappingEnable = Player.BCAR.bcarSettings.wingFlappingEnable;
            Player.BCAR.bcarSettings.profile1.wingFlappingStatus = Player.BCAR.bcarSettings.wingFlappingStatus;
            Player.BCAR.bcarSettings.profile1.wingsDefault = Player.BCAR.bcarSettings.wingsDefault
            ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                    "Profile1 has been saved!</p>"
                );
        }
        else if (saving === "save2") {
            Player.BCAR.bcarSettings.profile2Saved = true;
            Player.BCAR.bcarSettings.profile2.earWigglingEnable = Player.BCAR.bcarSettings.earWigglingEnable;
            Player.BCAR.bcarSettings.profile2.earWigglingStatus = Player.BCAR.bcarSettings.earWigglingStatus;
            Player.BCAR.bcarSettings.profile2.earsDefault = Player.BCAR.bcarSettings.earsDefault

            Player.BCAR.bcarSettings.profile2.tailWaggingEnable = Player.BCAR.bcarSettings.tailWaggingEnable;
            Player.BCAR.bcarSettings.profile2.tailWaggingStatus = Player.BCAR.bcarSettings.tailWaggingStatus;
            Player.BCAR.bcarSettings.profile2.tailsDefault = Player.BCAR.bcarSettings.tailsDefault

            Player.BCAR.bcarSettings.profile2.wingFlappingEnable = Player.BCAR.bcarSettings.wingFlappingEnable;
            Player.BCAR.bcarSettings.profile2.wingFlappingStatus = Player.BCAR.bcarSettings.wingFlappingStatus;
            Player.BCAR.bcarSettings.profile2.wingsDefault = Player.BCAR.bcarSettings.wingsDefault
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Profile2 has been saved!</p>"
            );
        }
        bcarSettingsSave();
    }

function CommandLoadProfile(argsList)
    {
        let loading = argsList[0];
        let loadingto = argsList.slice(1);

        if (loading === "load1") {
            if(Player.BCAR.bcarSettings.profile1Saved){
                Player.BCAR.bcarSettings.earWigglingEnable = Player.BCAR.bcarSettings.profile1.earWigglingEnable;
                Player.BCAR.bcarSettings.earWigglingStatus = Player.BCAR.bcarSettings.profile1.earWigglingStatus;
                Player.BCAR.bcarSettings.earsDefault = Player.BCAR.bcarSettings.profile1.earsDefault;
                if(!Player.BCAR.bcarSettings.earsDefault.ears1){
                    InventoryRemove(Player,"HairAccessory2");
                }
                else {
                    InventoryWear(Player, Player.BCAR.bcarSettings.profile1.earsDefault.ears1, "HairAccessory2", Player.BCAR.bcarSettings.profile1.earsDefault.earsColor1);
                }
                Player.BCAR.bcarSettings.tailWaggingEnable = Player.BCAR.bcarSettings.profile1.tailWaggingEnable;
                Player.BCAR.bcarSettings.tailWaggingStatus = Player.BCAR.bcarSettings.profile1.tailWaggingStatus;
                Player.BCAR.bcarSettings.tailsDefault = Player.BCAR.bcarSettings.profile1.tailsDefault;
                if(!Player.BCAR.bcarSettings.tailsDefault.tails1){
                    InventoryRemove(Player,"TailStraps");
                }
                else {
                    InventoryWear(Player, Player.BCAR.bcarSettings.profile1.tailsDefault.tails1, "TailStraps", Player.BCAR.bcarSettings.profile1.tailsDefault.tailsColor1);
                }
                Player.BCAR.bcarSettings.wingFlappingEnable = Player.BCAR.bcarSettings.profile1.wingFlappingEnable;
                Player.BCAR.bcarSettings.wingFlappingStatus = Player.BCAR.bcarSettings.profile1.wingFlappingStatus;
                Player.BCAR.bcarSettings.wingsDefault = Player.BCAR.bcarSettings.profile1.wingsDefault
                if(!Player.BCAR.bcarSettings.tailsDefault.tails1){
                    InventoryRemove(Player,"TailStraps");
                }
                else {
                InventoryWear(Player, Player.BCAR.bcarSettings.profile1.wingsDefault.wings1, "Wings", Player.BCAR.bcarSettings.profile1.wingsDefault.wingsColor1)
                }
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                    "Profile1 has been loaded!</p>"
                );
            }
            else {
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                    "Profile1 not found!\n" +
                    "Please save Profile1 first.</p>"
                );
            }
        }
        else if (loading === "load2") {
            if(Player.BCAR.bcarSettings.profile2Saved){
                Player.BCAR.bcarSettings.earWigglingEnable = Player.BCAR.bcarSettings.profile2.earWigglingEnable;
                Player.BCAR.bcarSettings.earWigglingStatus = Player.BCAR.bcarSettings.profile2.earWigglingStatus;
                Player.BCAR.bcarSettings.earsDefault = Player.BCAR.bcarSettings.profile2.earsDefault
                if(!Player.BCAR.bcarSettings.earsDefault.ears1){
                    InventoryRemove(Player,"HairAccessory2");
                }
                else {
                    InventoryWear(Player, Player.BCAR.bcarSettings.profile2.earsDefault.ears1, "HairAccessory2", Player.BCAR.bcarSettings.profile2.earsDefault.earsColor1);
                }
                Player.BCAR.bcarSettings.tailWaggingEnable = Player.BCAR.bcarSettings.profile2.tailWaggingEnable;
                Player.BCAR.bcarSettings.tailWaggingStatus = Player.BCAR.bcarSettings.profile2.tailWaggingStatus;
                Player.BCAR.bcarSettings.tailsDefault = Player.BCAR.bcarSettings.profile2.tailsDefault
                if(!Player.BCAR.bcarSettings.tailsDefault.tails1){
                    InventoryRemove(Player,"TailStraps");
                }
                else {
                    InventoryWear(Player, Player.BCAR.bcarSettings.profile2.tailsDefault.tails1, "TailStraps", Player.BCAR.bcarSettings.profile2.tailsDefault.tailsColor1);
                }
                Player.BCAR.bcarSettings.wingFlappingEnable = Player.BCAR.bcarSettings.profile2.wingFlappingEnable;
                Player.BCAR.bcarSettings.wingFlappingStatus = Player.BCAR.bcarSettings.profile2.wingFlappingStatus;
                Player.BCAR.bcarSettings.wingsDefault = Player.BCAR.bcarSettings.profile2.wingsDefault
                if(!Player.BCAR.bcarSettings.tailsDefault.tails1){
                    InventoryRemove(Player,"TailStraps");
                }
                else {
                InventoryWear(Player, Player.BCAR.bcarSettings.profile2.wingsDefault.wings1, "Wings", Player.BCAR.bcarSettings.profile2.wingsDefault.wingsColor1)
                }
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                    "Profile2 has been loaded!</p>"
                );
            }
            else {
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                    "Profile2 not found!\n" +
                    "Please save Profile2 first.</p>"
                );
            }
        }
        bcarSettingsSave();
    }

function CommandProfileHelp(argsList)
    {
        let openHelp = argsList[0];
        let openHelpto = argsList.slice(1);

        if (openHelp === "profile" || openHelp === "profilehelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>: Profiles instructions:\n" +
                "With the Profiles you can save presets for your ears, tail and wings. \n" +
                " \n" +
                "Commands:\n" +
                "/bcar save1 - Saves current setup in Profile1.\n" +
                "/bcar save2 - Saves current setup in Profile2.\n" +
                "/bcar load1 - Loads the setup saved in Profile1.\n" +
                "/bcar load2 - Loads the setup saved in Profile2.\n" +
                "/bcar profile1 - Shows which setup is saved in Profile1.\n" +
                "/bcar profile2 - Shows which setup is saved in Profile2.</p>"
            );
        }
    }
//End of Profile Commands

//Misc Commands
function CommandArousalToggle(argsList)
    {
        let toggle = argsList[0];
        let toggleto = argsList.slice(1);

        if (toggle === "arousalon") {
            Player.BCAR.bcarSettings.arousalEnable = true;
            Player.BCAR.bcarSettings.arousalStatus = "Enabled";
            ChatRoomSendLocal(
                "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Arousal manipulation is now enabled!</p>"
            );
        }
        else if (toggle === "arousaloff") {
            Player.BCAR.bcarSettings.arousalEnable = false;
            Player.BCAR.bcarSettings.arousalStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Arousal manipulation is now disabled!</p>"
            );
        }
        bcarSettingsSave();
    }

function CommandArousalHelp(argsList)
    {
        let openHelp = argsList[0];
        let openHelpto = argsList.slice(1);

        if (openHelp === "arousal" || openHelp === "arousalhelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>: Arousal instructions:\n" +
                "With the arousal commands you can switch the manipulation on and off.\n" +
                "The manipulation takes effect on headpets, hair brushing, almost every ear action, back and butt caress.\n" +
                " \n" +
                "Commands:\n" +
                "/bcar arousalon - Turns arousal manipulation on.\n" +
                "/bcar arousaloff - Turns arousal manipulation off.</p>"
            );
        }
    }

function CommandChangelog(argsList)
    {
        let changelog = argsList[0];
        let changelogto = argsList.slice(1);

        if (changelog === "changelog") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React Changelog</b>: BCAR " + BCAR_Version + "\n" +
                BCAR_CHANGELOG
            );
        }
	}

function CommandExpressionToggle(argsList)
    {
        let toggle = argsList[0];
        let toggleto = argsList.slice(1);

        if (toggle === "expressionon") {
            Player.BCAR.bcarSettings.expressionsEnable = true;
            Player.BCAR.bcarSettings.expressionsStatus = "Enabled";
            ChatRoomSendLocal(
                "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "BCE Expressions is now enabled!</p>"
                );
        }
        else if (toggle === "expressionoff") {
            Player.BCAR.bcarSettings.expressionsEnable = false;
            Player.BCAR.bcarSettings.expressionsStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "BCE Expressions will be disabled!\n" +
                "Please relog for the changes to take effect.</p>"
            );
        }
        bcarSettingsSave();
        bcarExpressions();
    }

function CommandExpressionHelp(argsList)
    {
        let openHelp = argsList[0];
        let openHelpto = argsList.slice(1);

        if (openHelp === "expression" || openHelp === "expressionhelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>: Expression instructions:\n" +
                "BCAR Expressions is a modified version of BCE Expressions and requires FBC to run.\n" +
                "With the expression commands you can switch the usage for Expressions on and off.\n" +
                "The expression takes effect on headpets, ear caress and cuddling.\n" +
                "Look at the <a href='https://github.com/DrBranestawm/BCAR/wiki/Expression' target='_blank'>BCAR Expression Wiki</a> for full list.\n" +
                " \n" +
                "Commands:\n" +
                "/bcar expressionon - Turns expression on.\n" +
                "/bcar expressionoff - Turns expression off. (Only takes effect after relogging)</p>"
            );
        }
    }

function CommandGenderToggle(argsList)
    {
        let toggle = argsList[0];
        let toggleto = argsList.slice(1);

        if (toggle === "male") {
            Player.BCAR.bcarSettings.genderDefault.gender = "Male";
            Player.BCAR.bcarSettings.genderDefault.capPronoun = "He";
            Player.BCAR.bcarSettings.genderDefault.pronoun = "he";
            Player.BCAR.bcarSettings.genderDefault.intensive = "him";
            Player.BCAR.bcarSettings.genderDefault.possessive = "his";
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
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
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
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
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "The reactions refer to " + CharacterNickname(Player) + " as ''they'' now!\n" +
                "Please relog for the changes to take effect.</p>"
            );
        }
        bcarSettingsSave();
    }

function CommandOpenHelp(argsList)
    {
        let openHelp = argsList[0];
        let openHelpto = argsList.slice(1);

        if (!openHelp || openHelp === "help") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>: Commands overview and info:\n" +
                "/bcar arousalhelp - Opens arousal instructions and commands page.\n" +
                "/bcar expressionhelp - Opens expression instructions and commands page.\n" +
                "/bcar changelog - Shows the BCAR changelog.\n" +
                "/bcar help - Opens this help window.\n" +
                "/bcar status - Opens the status window.\n" +
                "/bcar earhelp - Opens ear instructions and commands page.\n" +
                "/bcar tailhelp - Opens tail instructions and commands page.\n" +
                "/bcar winghelp - Opens wing instructions and commands page.\n" +
                "/bcar profilehelp - Opens profile instructions and commands page.\n" +
                "/bcar male - Lets the reactions refer to " + CharacterNickname(Player) + " as ''he''.\n" +
                "/bcar female - Lets the reactions refer to " + CharacterNickname(Player) + " as ''she''.\n" +
                "/bcar other - Lets the reactions refer to " + CharacterNickname(Player) + " as ''they''.\n" +
                "/bcar reset - Resets the ears, tails and wings to the default settings.\n" +
                "Visit the <a href='https://github.com/DrBranestawm/BCAR/wiki' target='_blank'>BCAR Wiki</a> for more info.</p>"
            );
        }
    }

function CommandResetSettings(argsList)
    {
        let remove = argsList[0];
        let removeto = argsList.slice(1);

        if (remove === "reset") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React</b>\n" +
                "Settings have been reseted!</p>"
            );
            bcarSettingsRemove();
            bcarSettingsLoad();
        }
    }

function CommandStatus(argsList)
    {
        let openStatus = argsList[0];
        let openStatusto = argsList.slice(1);

        if (openStatus === "status") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React:</b> Current status:\n" +
                "Ear Animation: " + Player.BCAR.bcarSettings.earWigglingStatus + "\n" +
                "Primary Ears: " + Player.BCAR.bcarSettings.earsDefault.earsDescription1 + "\n" +
                "Secondary Ears: " + Player.BCAR.bcarSettings.earsDefault.earsDescription2 + "\n" +
                "Tail Animation: " + Player.BCAR.bcarSettings.tailWaggingStatus + "\n" +
                "Primary Tail: " + Player.BCAR.bcarSettings.tailsDefault.tailsDescription1 + "\n" +
                "Secondary Tail: " + Player.BCAR.bcarSettings.tailsDefault.tailsDescription2 + "\n" +
                "Wing Animation: " + Player.BCAR.bcarSettings.wingFlappingStatus + "\n" +
                "Primary Wings: " + Player.BCAR.bcarSettings.wingsDefault.wingsDescription1 + "\n" +
                "Secondary Wings: " + Player.BCAR.bcarSettings.wingsDefault.wingsDescription2 + "\n" +
                "Gender: " + Player.BCAR.bcarSettings.genderDefault.gender + "\n" +
                "Arousal Manipulation: " + Player.BCAR.bcarSettings.arousalStatus + "\n" +
                "BCAR Expressions: " + Player.BCAR.bcarSettings.expressionsStatus + "</p>"
            );
        }
    }

    CommandCombine([
        {
            Tag: 'bcar',
            Description: "help : To open the commands overview and info.",
            AutoComplete: (words) => {

                if (words.length < 1) {
                    window.ChatRoomSendLocal("<style type='text/css'> .bcar_hint {display: flex; flex-flow: column wrap; overflow: auto; height: 5em; background: #000452; font-size: 1em; } .bcar_hint div {	margin:0 0.5ex; }</style><div class='bcar_hint'><div><b>" + subcommands.join("</b></div><div><b>") + "</b></div></div>", 20000)
                }
                if (words.length > 1) { /*No output, because user has entered multiple words, and we can only complete the last one*/ }
                if (words.length === 1) {
                    const matches = []
                    for (let sub of subcommands) {
                        if (sub.startsWith(words[0])) matches.push(sub)
                    }

                    if (matches.length > 1) {
                        window.ChatRoomSendLocal("<style type='text/css'> .bcar_hint {display: flex; flex-flow: column wrap; overflow: auto; height: 5em; background: #000452; font-size: 1em; } .bcar_hint div {	margin:0 0.5ex; }</style><div class='bcar_hint'><div><b>" + matches.join("</b></div><div><b>") + "</b></div></div>", 20000)
                    }

                    if (matches.length < 1) {/*No output, because no match*/}

                    if (matches.length === 1) {
                        window.ElementValue("InputChat", "/bcar " + matches[0])
                    }
                }


            },
            Action: args => {
                //Ear Commands
                CommandEarsChange(args.split(" "));
                CommandEarsToggle(args.split(" "));
                CommandEarsDelete(args.split(" "));
                CommandEarHelp(args.split(" "));
                //Tail Commands
                CommandTailChange(args.split(" "));
                CommandTailToggle(args.split(" "));
                CommandTailDelete(args.split(" "));
                CommandTailHelp(args.split(" "));
                //Wing Commands
                CommandWingChange(args.split(" "));
                CommandWingToggle(args.split(" "));
                CommandWingDelete(args.split(" "));
                CommandWingHelp(args.split(" "));
                //Profile Commands
                CommandShowProfile(args.split(" "));
                CommandSaveProfile(args.split(" "));
                CommandLoadProfile(args.split(" "));
                CommandProfileHelp(args.split(" "));
                //Misc Commands
                CommandArousalToggle(args.split(" "));
                CommandArousalHelp(args.split(" "));
                CommandChangelog(args.split(" "));
                CommandExpressionToggle(args.split(" "));
                CommandExpressionHelp(args.split(" "));
                CommandGenderToggle(args.split(" "));
                CommandOpenHelp(args.split(" "));
                CommandResetSettings(args.split(" "));
                CommandStatus(args.split(" "));
            }
        }

    ])

    //BCE Expressions


	if (typeof ChatRoomCharacter === "undefined") {
		console.warn(
			"Bondage Club not detected. Skipping BCE customizer initialization."
		);
		return;
	}

	await waitFor(() => !!w.Player?.Name && !!w.bce_initializeDefaultExpression);

	// NOTICE: You may delete blocks that you do not wish to customize in order to use the default ones.

	/**
	 * These are the various expressions that BCE can trigger. Most of these are mapped to chat messages using bce_ChatTriggers below.
	 * Special events that are not triggered from chat:
	 * - PostOrgasm: this is triggered when the player begins recovering from orgasm.
	 *
	 * Data model:
	 * - Type: name for the event, should match the key in the object
	 * - Duration: how long the expression lasts, in milliseconds, or -1 for indefinite
	 * - Priority: how important the expression is, higher is more important. Expressions with the same or lower priority are cut short when another expression is triggered.
	 * - Expression: a map of face component (Blush, Eyes, Eyes2, Mouth, Fluids, Eyebrows) to the expression timeline.
	 * - Poses: the pose timeline.
	 *
	 * The expression timeline is a list of expressions, which are objects with the following properties:
	 * - Expression: the expression type, e.g. "DroolSides". Refer to the expressions cheatsheet at https://gitlab.com/Sidiousious/bce/-/blob/main/README.md
	 * - Duration: how long the expression lasts, in milliseconds, or -1 for indefinite
	 * - Priority: how important the expression is, higher is more important. Expressions with the same or lower priority are cut short when another expression is triggered.
	 * - ExpressionModifier: a number from -4 to +4 that modifies the intensity of the expression. This is only valid for Blush. Use only Expression or ExpressionModifier, not both.
	 * - Skip: if true, the expression will be skipped for the duration.
	 *
	 * The pose timeline is a list of poses, which are objects with the following properties:
	 * - Pose: the complete pose array, refer to https://github.com/Ben987/Bondage-College/blob/2cc8eabd51c075cb1e88c5ab36317bfc51709470/BondageClub/Assets/Female3DCG/Female3DCG.js#L5711 for a complete list. Max one per category.
	 * - Duration: how long the pose lasts, in milliseconds, or -1 for indefinite
	 * - Priority: how important the pose is, higher is more important. Poses with the same or lower priority are cut short when another pose is triggered.
	 */
function bcarExpressions(){
        if(Player.BCAR.bcarSettings.expressionsEnable === true){

    w.bce_EventExpressions = {
		PostOrgasm: {
			Type: "PostOrgasm",
			Duration: 20000,
			Priority: 10000,
			Expression: {
				Blush: [
					{ Expression: "Extreme", Duration: 5000 },
					{ ExpressionModifier: -1, Duration: 5000 },
					{ ExpressionModifier: -1, Duration: 5000, Priority: 1000 },
					{ ExpressionModifier: -1, Duration: 5000, Priority: 200 },
				],
				Eyes: [
					{ Expression: "Closed", Duration: 8500 },
					{ Expression: "HeartPink", Duration: 7500 },
					{ Expression: "Sad", Duration: 4000, Priority: 200 },
				],
				Eyes2: [
					{ Expression: "Closed", Duration: 8000 },
					{ Expression: "HeartPink", Duration: 8000 },
					{ Expression: "Sad", Duration: 4000, Priority: 200 },
				],
				Mouth: [
					{ Expression: "Ahegao", Duration: 5000 },
					{ Expression: "Moan", Duration: 5000 },
					{ Expression: "HalfOpen", Duration: 10000, Priority: 200 },
				],
				Fluids: [
					{ Expression: "DroolMessy", Duration: 5000 },
					{ Expression: "DroolSides", Duration: 9000, Priority: 400 },
					{ Expression: "DroolLow", Duration: 6000, Priority: 200 },
				],
				Eyebrows: [
					{ Expression: "Soft", Duration: 10000 },
					{ Expression: "Lowered", Duration: 5000, Priority: 200 },
					{ Expression: null, Duration: 5000, Priority: 1 },
				],
			},
		},
		Pout: {
			Type: "Pout",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: "Pout", Duration: -1 }],
				Eyes: [{ Expression: "Dazed", Duration: -1 }],
				Eyes2: [{ Expression: "Dazed", Duration: -1 }],
				Eyebrows: [{ Expression: "Harsh", Duration: -1 }],
			},
		},
		ResetBrows: {
			Type: "ResetBrows",
			Duration: -1,
			Expression: {
				Eyebrows: [{ Expression: null, Duration: -1 }],
			},
		},
		RaiseBrows: {
			Type: "RaiseBrows",
			Duration: -1,
			Expression: {
				Eyebrows: [{ Expression: "Raised", Duration: -1 }],
			},
		},
		Confused: {
			Type: "Confused",
			Duration: -1,
			Expression: {
				Eyebrows: [{ Expression: "OneRaised", Duration: 90000 }],
			},
		},
		Smirk: {
			Type: "Smirk",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: "Smirk", Duration: -1 }],
			},
		},
		Wink: {
			Type: "Wink",
			Duration: 1500,
			Expression: {
				Eyes: [{ Expression: "Closed", Duration: 1500 }],
			},
		},
		Laugh: {
			Type: "Laugh",
			Duration: 8000,
			Expression: {
				Mouth: [
					{ Expression: "Laughing", Duration: 1000 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 1000 },
					{ Expression: "Happy", Duration: 200 },
					{ Expression: "Laughing", Duration: 800 },
					{ Expression: "Grin", Duration: 400 },
					{ Expression: "Laughing", Duration: 800 },
					{ Expression: "Happy", Duration: 400 },
					{ Expression: "Laughing", Duration: 600 },
					{ Expression: "Grin", Duration: 600 },
					{ Expression: "Laughing", Duration: 600 },
					{ Expression: "Happy", Duration: 600 },
					{ Expression: "Laughing", Duration: 200 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 200 },
					{ Expression: "Happy", Duration: 200 },
				],
			},
		},
        Cackle: {
            Type: "Cackle",
			Duration: 6000,
			Expression: {
				Mouth: [
					{ Expression: "TonguePinch", Duration: 200 },
					{ Expression: "Laughing", Duration: 800 },
					{ Expression: "Moan", Duration: 200 },
					{ Expression: "Laughing", Duration: 700 },
					{ Expression: "Devious", Duration: 200 },
					{ Expression: "Laughing", Duration: 200 },
					{ Expression: "Moan", Duration: 400 },
					{ Expression: "TonguePinch", Duration: 200 },
				],
			},
		},
		Giggle: {
			Type: "Giggle",
			Duration: 4000,
			Expression: {
				Mouth: [
					{ Expression: "Laughing", Duration: 800 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 700 },
					{ Expression: "Happy", Duration: 200 },
					{ Expression: "Laughing", Duration: 600 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 500 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 400 },
					{ Expression: "Happy", Duration: 200 },
				],
			},
		},
		Chuckle: {
			Type: "Chuckle",
			Duration: 4000,
			Expression: {
				Mouth: [
					{ Expression: "Laughing", Duration: 800 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 700 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 600 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 500 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 400 },
					{ Expression: "Grin", Duration: 200 },
				],
			},
		},
		Smile: {
			Type: "Smile",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: "Grin", Duration: -1 }],
			},
		},
		Blink: {
			Type: "Blink",
			Duration: 200,
			Expression: {
				Eyes: [{ Expression: "Closed", Duration: 200 }],
				Eyes2: [{ Expression: "Closed", Duration: 200 }],
			},
		},
		Grin: {
			Type: "Grin",
			Duration: -1,
			Expression: {
				Eyes: [{ Expression: "Horny", Duration: -1 }],
				Eyes2: [{ Expression: "Horny", Duration: -1 }],
				Mouth: [{ Expression: "Grin", Duration: -1 }],
			},
		},
		Cuddle: {
			Type: "Cuddle",
			Duration: 10000,
			Priority: 150,
			Expression: {
				Mouth: [{ Expression: "Happy", Duration: 10000 }],
				Eyes: [{ Expression: "ShylyHappy", Duration: 10000 }],
				Eyes2: [{ Expression: "ShylyHappy", Duration: 10000 }],
				Eyebrows: [{ Expression: "Raised", Duration: 10000 }],
			},
		},
		Blush: {
			Type: "Blush",
			Duration: 5000,
			Expression: {
				Blush: [{ ExpressionModifier: 2, Duration: 5000 }],
			},
		},
		Choke: {
			Type: "Choke",
			Duration: 4000,
			Priority: 150,
			Expression: {
				Blush: [{ ExpressionModifier: 3, Duration: 4000 }],
				Eyes: [
					{ Expression: "VeryLewd", Duration: 3000 },
					{ Expression: "Sad", Duration: 1000 },
				],
				Eyes2: [
					{ Expression: "VeryLewd", Duration: 3000 },
					{ Expression: "Sad", Duration: 1000 },
				],
				Eyebrows: [{ Expression: "Harsh", Duration: 4000 }],
			},
		},
		Stimulated: {
			Type: "Stimulated",
			Duration: 5000,
			Priority: 400,
			Expression: {
				Blush: [{ ExpressionModifier: 2, Duration: 5000 }],
				Eyes: [
					{ Expression: "VeryLewd", Duration: 4000 },
					{ Expression: "Sad", Duration: 1000 },
				],
				Eyes2: [
					{ Expression: "VeryLewd", Duration: 4000 },
					{ Expression: "Sad", Duration: 1000 },
				],
				Eyebrows: [{ Expression: "Soft", Duration: 5000 }],
			},
		},
		StimulatedLong: {
			Type: "StimulatedLong",
			Duration: 20000,
			Priority: 400,
			Expression: {
				Blush: [{ ExpressionModifier: 1, Duration: 20000 }],
			},
		},
		Shock: {
			Type: "Shock",
			Duration: 15000,
			Priority: 1000,
			Expression: {
				Blush: [{ ExpressionModifier: 5, Duration: 15000 }],
				Eyes: [
					{ Expression: "Dizzy", Duration: 1000 },
					{ Expression: "Scared", Duration: 8000 },
					{ Expression: "Surprised", Duration: 7000 },
				],
				Eyes2: [
					{ Expression: "Dizzy", Duration: 1000 },
					{ Expression: "Scared", Duration: 8000 },
					{ Expression: "Surprised", Duration: 7000 },
				],
				Eyebrows: [{ Expression: "Soft", Duration: 15000 }],
				Mouth: [{ Expression: "Pained", Duration: 15000 }],
			},
		},
		Hit: {
			Type: "Hit",
			Duration: 7000,
			Priority: 500,
			Expression: {
				Blush: [{ Expression: "VeryHigh", Duration: 7000 }],
				Eyes: [
					{ Expression: "Daydream", Duration: 1000 },
					{ Expression: "Closed", Duration: 3000 },
					{ Expression: "Daydream", Duration: 3000 },
				],
				Eyes2: [
					{ Expression: "Daydream", Duration: 1000 },
					{ Expression: "Closed", Duration: 3000 },
					{ Expression: "Daydream", Duration: 3000 },
				],
				Eyebrows: [{ Expression: "Soft", Duration: 7000 }],
			},
		},
		Spank: {
			Type: "Spank",
			Duration: 3000,
			Priority: 300,
			Expression: {
				Eyes: [{ Expression: "Lewd", Duration: 3000 }],
				Eyes2: [{ Expression: "Lewd", Duration: 3000 }],
				Eyebrows: [{ Expression: "Soft", Duration: 3000 }],
			},
		},
		Kiss: {
			Type: "Kiss",
			Duration: 2000,
			Priority: 200,
			Expression: {
				Mouth: [{ Expression: "HalfOpen", Duration: 2000 }],
			},
		},
		KissOnLips: {
			Type: "KissOnLips",
			Duration: 2000,
			Priority: 200,
			Expression: {
				Eyes: [{ Expression: "Closed", Duration: 2000 }],
				Eyes2: [{ Expression: "Closed", Duration: 2000 }],
				Mouth: [{ Expression: "HalfOpen", Duration: 2000 }],
				Blush: [
					{ Skip: true, Duration: 1000 },
					{ ExpressionModifier: 1, Duration: 1000 },
				],
			},
		},
		LongKiss: {
			Type: "LongKiss",
			Duration: 4000,
			Priority: 200,
			Expression: {
				Eyes: [{ Expression: "Closed", Duration: 4000 }],
				Eyes2: [{ Expression: "Closed", Duration: 4000 }],
				Mouth: [{ Expression: "Open", Duration: 4000 }],
				Blush: [
					{ Skip: true, Duration: 1000 },
					{ ExpressionModifier: 1, Duration: 1000 },
					{ ExpressionModifier: 1, Duration: 2000 },
				],
			},
		},
		Disoriented: {
			Type: "Disoriented",
			Duration: 8000,
			Priority: 250,
			Expression: {
				Eyes: [{ Expression: "Dizzy", Duration: 8000 }],
				Eyes2: [{ Expression: "Dizzy", Duration: 8000 }],
				Eyebrows: [{ Expression: "Raised", Duration: 8000 }],
				Blush: [{ ExpressionModifier: 2, Duration: 8000 }],
			},
		},
		Angry: {
			Type: "Angry",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: "Angry", Duration: -1 }],
				Eyes: [{ Expression: "Angry", Duration: -1 }],
				Eyes2: [{ Expression: "Angry", Duration: -1 }],
				Eyebrows: [{ Expression: "Angry", Duration: -1 }],
			},
		},
		Sad: {
			Type: "Sad",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: "Frown", Duration: -1 }],
				Eyes: [{ Expression: "Shy", Duration: -1 }],
				Eyes2: [{ Expression: "Shy", Duration: -1 }],
				Eyebrows: [{ Expression: "Soft", Duration: -1 }],
			},
		},
		Worried: {
			Type: "Worried",
			Duration: -1,
			Expression: {
				Eyes: [{ Expression: "Surprised", Duration: -1 }],
				Eyes2: [{ Expression: "Surprised", Duration: -1 }],
				Eyebrows: [{ Expression: "Soft", Duration: -1 }],
			},
		},
		Distressed: {
			Type: "Distressed",
			Duration: -1,
			Expression: {
				Eyes: [{ Expression: "Scared", Duration: -1 }],
				Eyes2: [{ Expression: "Scared", Duration: -1 }],
				Eyebrows: [{ Expression: "Soft", Duration: -1 }],
				Mouth: [{ Expression: "Angry", Duration: -1 }],
			},
		},
		Reset: {
			Type: "Reset",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: null, Duration: -1 }],
				Eyes: [{ Expression: null, Duration: -1 }],
				Eyes2: [{ Expression: null, Duration: -1 }],
				Eyebrows: [{ Expression: null, Duration: -1 }],
				Blush: [{ Expression: null, Duration: -1 }],
				Fluids: [{ Expression: null, Duration: -1 }],
			},
		},
		Cry: {
			Type: "Cry",
			Duration: -1,
			Expression: {
				Drool: [{ Expression: "TearsMedium", Duration: -1 }],
			},
		},
		DroolReset: {
			Type: "DroolReset",
			Duration: -1,
			Expression: {
				Fluids: [{ Expression: null, Duration: -1 }],
			},
		},
		DroolSides: {
			Type: "DroolSides",
			Duration: -1,
			Expression: {
				Fluids: [{ Expression: "DroolSides", Duration: -1 }],
			},
		},
		BareTeeth: {
			Type: "BareTeeth",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: "Angry", Duration: -1 }],
			},
		},
		Happy: {
			Type: "Happy",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: "Happy", Duration: -1 }],
			},
		},
		Frown: {
			Type: "Frown",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: "Frown", Duration: -1 }],
			},
		},
		Glare: {
			Type: "Glare",
			Duration: -1,
			Expression: {
				Eyes: [{ Expression: "Angry", Duration: -1 }],
				Eyes2: [{ Expression: "Angry", Duration: -1 }],
				Eyebrows: [{ Expression: "Harsh", Duration: -1 }],
			},
		},
		NarrowEyes: {
			Type: "NarrowEyes",
			Duration: -1,
			Expression: {
				Eyes: [{ Expression: "Horny", Duration: -1 }],
				Eyes2: [{ Expression: "Horny", Duration: -1 }],
			},
		},
		OpenEyes: {
			Type: "OpenEyes",
			Duration: -1,
			Expression: {
				Eyes: [{ Expression: null, Duration: -1 }],
				Eyes2: [{ Expression: null, Duration: -1 }],
			},
		},
		CloseEyes: {
			Type: "CloseEyes",
			Duration: -1,
			Expression: {
				Eyes: [{ Expression: "Closed", Duration: -1 }],
				Eyes2: [{ Expression: "Closed", Duration: -1 }],
			},
		},
		CloseMouth: {
			Type: "CloseMouth",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: null, Duration: -1 }],
			},
		},
		OpenMouth: {
			Type: "OpenMouth",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: "Moan", Duration: -1 }],
			},
		},
        OpenMouthSlow: {
            Type: "OpenMouthSlow",
			Duration: 9000,
            Priority: 200,
			Expression: {
				Mouth: [{ Expression: "HalfOpen", Duration: 3000 },
                       { Expression: "Open", Duration: 3000 },
                       { Expression: "Moan", Duration: 3000}],
            },
		},
		LipBite: {
			Type: "LipBite",
			Duration: -1,
			Expression: {
				Mouth: [{ Expression: "LipBite", Duration: -1 }],
			},
		},
		Lick: {
			Type: "Lick",
			Duration: 4000,
			Priority: 200,
			Expression: {
				Mouth: [{ Expression: "Ahegao", Duration: 700 },
                        { Expression: "Happy", Duration: 300 },
                        { Expression: "Ahegao", Duration: 700 },
                        { Expression: "Happy", Duration: 300 },
                        { Expression: "Ahegao", Duration: 700 },
                        { Expression: "Happy", Duration: 300 },
                        { Expression: "Ahegao", Duration: 700 },
                        { Expression: "Happy", Duration: 300 },
                       ],
				Blush: [{ ExpressionModifier: 1, Duration: 4000 }],
			},
		},
		GagInflate: {
			Type: "GagInflate",
			Duration: 4000,
			Priority: 400,
			Expression: {
				Eyes: [{ Expression: "Lewd", Duration: 4000 }],
				Eyes2: [{ Expression: "Lewd", Duration: 4000 }],
				Blush: [
					{ ExpressionModifier: 2, Duration: 2000 },
					{ ExpressionModifier: -1, Duration: 2000 },
				],
			},
		},
		Iced: {
			Type: "Iced",
			Duration: 4000,
			Priority: 500,
			Expression: {
				Eyes: [
					{ Expression: "Surprised", Duration: 3000 },
					{ Expression: null, Duration: 1000 },
				],
				Eyes2: [
					{ Expression: "Surprised", Duration: 3000 },
					{ Expression: null, Duration: 1000 },
				],
				Mouth: [{ Expression: "Angry", Duration: 4000 }],
			},
		},
		AllFours: {
			Type: "AllFours",
			Duration: -1,
			Poses: [{ Pose: ["AllFours"], Duration: -1 }],
		},
		SpreadKnees: {
			Type: "SpreadKnees",
			Duration: -1,
			Poses: [{ Pose: ["KneelingSpread"], Duration: -1 }],
		},
		Hogtied: {
			Type: "Hogtied",
			Duration: -1,
			Poses: [{ Pose: ["Hogtied"], Duration: -1 }],
		},
		Handstand: {
			Type: "Handstand",
			Duration: -1,
			Poses: [{ Pose: ["Suspension", "OverTheHead"], Duration: -1 }],
		},
		Stretch: {
			Type: "Stretch",
			Priority: 100,
			Duration: 6000,
			Poses: [
				{ Pose: ["OverTheHead"], Duration: 1000 },
				{ Pose: ["Yoked"], Duration: 1000 },
				{ Pose: ["BaseUpper"], Duration: 1000 },
				{ Pose: ["Spread"], Duration: 1000 },
				{ Pose: ["LegsClosed"], Duration: 1000 },
				{ Pose: ["BaseLower"], Duration: 1000 },
			],
		},
		SpreadLegs: {
			Type: "SpreadLegs",
			Duration: -1,
			Poses: [{ Pose: ["Spread"], Duration: -1 }],
		},
		JumpingJacks: {
			Type: "JumpingJacks",
			Priority: 100,
			Duration: 8000,
			Poses: [
				{ Pose: ["OverTheHead", "Spread"], Duration: 1000 },
				{ Pose: ["BaseUpper", "LegsClosed"], Duration: 1000 },
				{ Pose: ["OverTheHead", "Spread"], Duration: 1000 },
				{ Pose: ["BaseUpper", "LegsClosed"], Duration: 1000 },
				{ Pose: ["OverTheHead", "Spread"], Duration: 1000 },
				{ Pose: ["BaseUpper", "LegsClosed"], Duration: 1000 },
				{ Pose: ["OverTheHead", "Spread"], Duration: 1000 },
				{ Pose: ["BaseUpper", "LegsClosed"], Duration: 1000 },
			],
		},
        GetHeadPet: {
			Type: "GetHeadPet",
			Duration: 5000,
			Priority: 250,
			Expression: {
                Eyes: [{ Expression: "ShylyHappy", Duration: 5000 }],
                Eyes2: [{ Expression: "ShylyHappy", Duration: 5000 }],
                Eyebrows: [{ Expression: "Raised", Duration: 5000 }],
                Blush: [{ ExpressionModifier: 1, Duration: 5000}],
                Mouth: [{ Expression: "Happy", Duration: 5000 }],
			},
		},
        PetOthers: {
			Type: "PetOthers",
			Duration: 5000,
			Priority: 250,
			Expression: {
                Eyes: [{ Expression: "Horny", Duration: 5000 }],
                Eyes2: [{ Expression: "Horny", Duration: 5000 }],
                Eyebrows: [{ Expression: "Raised", Duration: 5000 }],
                Mouth: [{ Expression: "Happy", Duration: 5000 }],
			},
		},
        EarsCaress: {
			Type: "EarsCaress",
			Duration: 3000,
			Priority: 250,
			Expression: {
				Eyes: [{ Expression: "Lewd", Duration: 3000 }],
				Eyes2: [{ Expression: "Lewd", Duration: 3000 }],
				Eyebrows: [{ Expression: "Harsh", Duration: 3000 }],
				Blush: [{ ExpressionModifier: 1, Duration: 3000 }],
                Mouth: [{ Expression: "Happy", Duration: 3000 }],
			},
		},
    };
        }
    if(Player.BCAR.bcarSettings.expressionsEnable === false){

    w.bce_EventExpressions = {
        Confused: {
			Type: "Confused",
			Duration: -1,
			Expression: {
				Eyebrows: [{ Expression: "OneRaised", Duration: 90000 }],
			},
		},
        Cackle: {
            Type: "Cackle",
			Duration: 6000,
			Expression: null,
        },
        Chuckle: {
			Type: "Chuckle",
			Duration: 4000,
			Expression: {
				Mouth: [
					{ Expression: "Laughing", Duration: 800 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 700 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 600 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 500 },
					{ Expression: "Grin", Duration: 200 },
					{ Expression: "Laughing", Duration: 400 },
					{ Expression: "Grin", Duration: 200 },
				],
			},
		},
        OpenMouthSlow: {
            Type: "OpenMouthSlow",
			Duration: 9000,
            Priority: 200,
			Expression: null,
		},
        GetHeadPet: {
			Type: "GetHeadPet",
			Duration: 5000,
			Priority: 250,
			Expression: null,
		},
        PetOthers: {
			Type: "PetOthers",
			Duration: 5000,
			Priority: 250,
			Expression: null,
		},
        EarsCaress: {
			Type: "EarsCaress",
			Duration: 3000,
			Priority: 250,
			Expression: null,
		},
    };
        }
	/**
	 * This list maps incoming messages to expressions.
	 *
	 * - Event: The event to trigger.
	 * - Type: The type of the message (Activity, Action, Emote, etc.)
	 * - Matchers: a list of matchers, one of which must match for the expression to be triggered.
	 *
	 * In matchers:
	 * - Tester: a regular expression that must match the Content of the message. For Emote this is the message sent by the user. For Activity/Action this is the label used by the game (e.g. "ChatOther-ItemArms-Pinch" or "ActionActivityShockItem")
	 * - Criteria: a list of additional criteria that must be met for the expression to be triggered.
	 *
	 * In criteria:
	 * - TargetIsPlayer: if present and true, the expression will only be triggered if the target is the player.
	 * - SenderIsPlayer: if present and true, the expression will only be triggered if the sender is the player.
	 */

	   const TriggerAdditions = [
           {
               Event: "EarsCaress",
               Type: "Activity",
               Matchers: [
                   {
                       Tester: /^ChatOther-ItemEars-Caress$/u,
                       Criteria: {
                           TargetIsPlayer: true,
                       },
                   }
               ],
           },
           {
               Event: "PetOthers",
               Type: "Activity",
               Matchers: [
                   {
                       Tester: /^ChatSelf-ItemHead-Pet$/u,
                   },

                   {
                       Tester: /^ChatOther-ItemHead-Pet$/u,
                       Criteria: {
                           SenderIsPlayer: true,
                       },
                   },
               ],
           },
           {
               Event: "GetHeadPet",
               Type: "Activity",
               Matchers: [
                   {
                       Tester: /^ChatOther-ItemHead-Pet$/u,
                       Criteria: {
                           TargetIsPlayer: true,
                       },
                   },
               ],
           },
           {
               Event: "Stretch",
               Type: "Emote",
               Matchers: [
                   {
                       Tester: /^stretches($| her)/u,
                   },
               ],
           },
           {
               Event: "Cackle",
               Type: "Emote",
               Matchers: [
                   {
                       Tester: /^cackles/u,
                   },
               ],
           },
           {
               Event: "Cuddle",
               Type: "Emote",
               Matchers: [
                   {
                       Tester: /^cuddles/u,
                   },
               ],
           },
           {
               Event: "OpenMouthSlow",
               Type: "Emote",
               Matchers: [
                   {
                       Tester: /^slowly opens her mouth/u,
                   },
               ],
           },
       ]
       w.bce_ActivityTriggers.push(...TriggerAdditions)

}
//end of BCE Expressions

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

//console.log("End of script")

})();
