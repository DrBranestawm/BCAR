//sdk stuff

var bcModSdk=function(){"use strict";const o="1.0.2";function e(o){alert("Mod ERROR:\n"+o);const e=new Error(o);throw console.error(e),e}const t=new TextEncoder;function n(o){return!!o&&"object"==typeof o&&!Array.isArray(o)}function r(o){const e=new Set;return o.filter((o=>!e.has(o)&&e.add(o)))}const a=new Map,i=new Set;function d(o){i.has(o)||(i.add(o),console.warn(o))}function c(o,e){if(0===e.size)return o;let t=o.toString().replaceAll("\r\n","\n");for(const[n,r]of e.entries())t.includes(n)||d(`ModSDK: Patching ${o.name}: Patch ${n} not applied`),t=t.replaceAll(n,r);return(0,eval)(`(${t})`)}function s(o){const e=[],t=new Map,n=new Set;for(const r of u.values()){const a=r.patching.get(o.name);if(a){e.push(...a.hooks);for(const[e,i]of a.patches.entries())t.has(e)&&t.get(e)!==i&&d(`ModSDK: Mod '${r.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${t.get(e)||""}\nPatch2:\n${i}`),t.set(e,i),n.add(r.name)}}return e.sort(((o,e)=>e.priority-o.priority)),{hooks:e,patches:t,patchesSources:n,final:c(o.original,t)}}function l(o,e=!1){let r=a.get(o);if(r)e&&(r.precomputed=s(r));else{let e=window;const i=o.split(".");for(let t=0;t<i.length-1;t++)if(e=e[i[t]],!n(e))throw new Error(`ModSDK: Function ${o} to be patched not found; ${i.slice(0,t+1).join(".")} is not object`);const d=e[i[i.length-1]];if("function"!=typeof d)throw new Error(`ModSDK: Function ${o} to be patched not found`);const c=function(o){let e=-1;for(const n of t.encode(o)){let o=255&(e^n);for(let e=0;e<8;e++)o=1&o?-306674912^o>>>1:o>>>1;e=e>>>8^o}return((-1^e)>>>0).toString(16).padStart(8,"0").toUpperCase()}(d.toString().replaceAll("\r\n","\n")),l={name:o,original:d,originalHash:c};r=Object.assign(Object.assign({},l),{precomputed:s(l)}),a.set(o,r),e[i[i.length-1]]=function(o){return function(...e){const t=o.precomputed,n=t.hooks,r=t.final;let a=0;const i=d=>{var c,s,l,f;if(a<n.length){const e=n[a];a++;const t=null===(s=(c=w.errorReporterHooks).hookEnter)||void 0===s?void 0:s.call(c,o.name,e.mod),r=e.hook(d,i);return null==t||t(),r}{const n=null===(f=(l=w.errorReporterHooks).hookChainExit)||void 0===f?void 0:f.call(l,o.name,t.patchesSources),a=r.apply(this,e);return null==n||n(),a}};return i(e)}}(r)}return r}function f(){const o=new Set;for(const e of u.values())for(const t of e.patching.keys())o.add(t);for(const e of a.keys())o.add(e);for(const e of o)l(e,!0)}function p(){const o=new Map;for(const[e,t]of a)o.set(e,{name:e,originalHash:t.originalHash,hookedByMods:r(t.precomputed.hooks.map((o=>o.mod))),patchedByMods:Array.from(t.precomputed.patchesSources)});return o}const u=new Map;function h(o){u.get(o.name)!==o&&e(`Failed to unload mod '${o.name}': Not registered`),u.delete(o.name),o.loaded=!1}function g(o,t,r){"string"==typeof o&&o||e("Failed to register mod: Expected non-empty name string, got "+typeof o),"string"!=typeof t&&e(`Failed to register mod '${o}': Expected version string, got ${typeof t}`),r=!0===r;const a=u.get(o);a&&(a.allowReplace&&r||e(`Refusing to load mod '${o}': it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`),h(a));const i=t=>{"string"==typeof t&&t||e(`Mod '${o}' failed to patch a function: Expected function name string, got ${typeof t}`);let n=c.patching.get(t);return n||(n={hooks:[],patches:new Map},c.patching.set(t,n)),n},d={unload:()=>h(c),hookFunction:(t,n,r)=>{c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`);const a=i(t);"number"!=typeof n&&e(`Mod '${o}' failed to hook function '${t}': Expected priority number, got ${typeof n}`),"function"!=typeof r&&e(`Mod '${o}' failed to hook function '${t}': Expected hook function, got ${typeof r}`);const d={mod:c.name,priority:n,hook:r};return a.hooks.push(d),f(),()=>{const o=a.hooks.indexOf(d);o>=0&&(a.hooks.splice(o,1),f())}},patchFunction:(t,r)=>{c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`);const a=i(t);n(r)||e(`Mod '${o}' failed to patch function '${t}': Expected patches object, got ${typeof r}`);for(const[n,i]of Object.entries(r))"string"==typeof i?a.patches.set(n,i):null===i?a.patches.delete(n):e(`Mod '${o}' failed to patch function '${t}': Invalid format of patch '${n}'`);f()},removePatches:o=>{c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`);i(o).patches.clear(),f()},callOriginal:(t,n,r)=>(c.loaded||e(`Mod '${c.name}' attempted to call SDK function after being unloaded`),"string"==typeof t&&t||e(`Mod '${o}' failed to call a function: Expected function name string, got ${typeof t}`),Array.isArray(n)||e(`Mod '${o}' failed to call a function: Expected args array, got ${typeof n}`),function(o,e,t=window){return l(o).original.apply(t,e)}(t,n,r)),getOriginalHash:t=>("string"==typeof t&&t||e(`Mod '${o}' failed to get hash: Expected function name string, got ${typeof t}`),l(t).originalHash)},c={name:o,version:t,allowReplace:r,api:d,loaded:!0,patching:new Map};return u.set(o,c),Object.freeze(d)}function m(){const o=[];for(const e of u.values())o.push({name:e.name,version:e.version});return o}let w;const y=void 0===window.bcModSdk?window.bcModSdk=function(){const e={version:o,apiVersion:1,registerMod:g,getModsInfo:m,getPatchingInfo:p,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return w=e,Object.freeze(e)}():(n(window.bcModSdk)||e("Failed to init Mod SDK: Name already in use"),1!==window.bcModSdk.apiVersion&&e(`Failed to init Mod SDK: Different version already loaded ('1.0.2' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==o&&alert(`Mod SDK warning: Loading different but compatible versions ('1.0.2' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk);return"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=y),y}();

//sdk stuff

(async function () {
  const modApi = bcModSdk.registerMod('Auto React', '0.2.3');
  //global variables
  crCommands();
    var Dictionary = [];



  //do not touch this
  await waitFor(() => ServerIsConnected && ServerSocket);
  //end of do not touch

  //Functions



  // on channel join data Type is Action, Content is ServerEnter and MemberNumber is the joining user
  //do not touch this
  ServerSocket.on("ChatRoomMessage", async (data) => {
    await sleep(10);

    const typeAction = { EarCaress :
                [["Mnyaa~","Nnyaaaaah~","Nnyaaaaah~","Nnyaa~","Nyaa~"], // sounds
                [" purrs softly, twitching her ears.", " twitches her ears, purring loudly as her ears are toyed with.",
                " twitches her ears, purring loudly as her ears are toyed with.", " squirms, twitches his ears and purrs.",
                " wiggles and twitches her ears purring softly."]], // actions // order matters, match sound with action
                EarNibble :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches her ears as it's nibbled.", " wiggles and twitches her ears between the teeth.",
                " moans softly, twitching her ears as it's nibbled."]],
                EarLick :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches her ears as it's licked.", " wiggles and twitches her ears caused by the licking.",
                " moans softly, twitching her ears as it's licked."]],
                EarKiss :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches her ears as it's kissed.", " wiggles and twitches her ears caused by the kissing.",
                " moans softly, twitching her ears as it's kissed."]],
                HeadBrush :
                [["",""],
                [" purrs softly and twitches her ears.", " purrs happily and twitches her ears."]],
                HeadPat :
                [["","","",""],
                [" purrs softly and twitches her ears.", " purrs happily and twitches her ears.",
		" purrs softly, twitches her ears and nuzzles into the pat."," purrs happily, twitches her ears and nuzzles into the pat."]],
        }

    function ActivityBeeper(type,nya){
        retype = ElementValue("InputChat");
        ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: CharacterNickname(Player) + typeAction[type][1][nya] }]});
        ElementValue("InputChat",typeAction[type][0][nya]);
        ChatRoomSendChat();
        ElementValue("InputChat", retype);
    }

     function EarWiggle(){
        let earsVariations = [earsDefault.ears2,earsDefault.ears1];
        let earsColor = [earsDefault.color2,earsDefault.color1];
        let numberWiggles= parseInt(earsDefault.count);
        let delay = parseInt(earsDefault.delay);
        for(let i=0; i < numberWiggles; i++)
        {
           setTimeout(function() {
              InventoryWear(Player, earsVariations[i%earsVariations.length], "HairAccessory2", earsColor[i%earsColor.length]);
              ChatRoomCharacterItemUpdate(Player, "HairAccessory2");
         }, i * delay);
    }
 }

      var activityDictionary = data.Dictionary

      for(let i = 0; i < activityDictionary.length; i++)
      {
          if(activityDictionary[i].Tag == "nonce")
          {
              activityDictionary.splice(i, 1);
              break;
          }
      }
    if(data.Type === "Activity" && activityDictionary[3].MemberNumber === Player.MemberNumber) {
        if((data.Content.startsWith("ChatOther-ItemEars") || (data.Content.startsWith("ChatSelf-ItemEars") === -1))) {
              if (data.Content.indexOf("Caress") !== -1) {
                  let nya = Math.floor(Math.random() * 5);
                  console.log(nya)
                  ActivityBeeper("EarCaress",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 30;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 5;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);

              }
              else if (data.Content.indexOf("Nibble") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  console.log(nya)
                  ActivityBeeper("EarNibble",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 100;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 20;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);

              }
              else if (data.Content.indexOf("Lick") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  console.log(nya)
                  ActivityBeeper("EarLick",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 100;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 15;
                  ActivityChatRoomBCTArousalSync(Player);
                  ActivityChatRoomArousalSync(Player);

              }
              else if (data.Content.indexOf("Kiss") !== -1) {
                  let nya = Math.floor(Math.random() * 3);
                  console.log(nya)
                  ActivityBeeper("EarKiss",nya);

                  setTimeout(EarWiggle);
                  Player.BCT.splitOrgasmArousal.arousalProgress = 100;
                  Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 15;
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
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 5;
                ActivityChatRoomArousalSync(Player);
            }
            else if (data.Content.indexOf("Pet") !== -1) {
                let nya = Math.floor(Math.random() * 4);
                console.log(nya)
                ActivityBeeper("HeadPat",nya);

                setTimeout(EarWiggle);
                Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 5;
                ActivityChatRoomArousalSync(Player);
            }
        }

    }
    if (data.Content !== "ServerEnter" && data.Type !== "Chat") {
      return;
    }
    //end of do not touch

    return;
  });


  var earsDefault = {
        "ears1" : "KittenEars1", // change based on ear type
        "ears2" : "FoxEars2",
        "color1" : ["#FF0000", "#EEE"], // change color based on your own preference
        "color2" : ["#9A0000", "#505050"],
        "count" : 12, // no. of ear wiggles
        "delay" : 175, // delay in ms
     };



    function CommandEarsChange(argsList)
	{
		let change = argsList[0];
		let changeto = argsList.slice(1);

        //console.log("change = "+ change, "changeto = "+ changeto);

        if (change === "current1") {
            ears = InventoryGet(Player,"HairAccessory2");
            earsDefault.ears1 = ears.Asset.Name;
            earsDefault.color1 = ears.Color;
        }
        else if (change === "current2") {
            ears = InventoryGet(Player,"HairAccessory2");
            earsDefault.ears2 = ears.Asset.Name;
            earsDefault.color2 = ears.Color;
        }
        else{
            earsDefault[change]? earsDefault[change] = changeto : console.log("Invalid Input");
        }

	}

    CommandCombine([
		{
			Tag: 'earschange',
			AutoComplete: args => {

			},
			Action: args => {
				CommandEarsChange(args.split(" "));
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

  //this is the function that will check for your chatroom commands~
  async function crCommands() {
      await waitFor(() => !!ChatRoomSendChat);

  }

})();
