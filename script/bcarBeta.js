const BCAR_Version = '0.6.1-beta1';
const BCAR_Settings_Version = 6;

function is_newer(current, candidate) {
	const current_levels = current.split('.'), candidate_levels = candidate.split('.');
	for (let i = 0; i < 3; i++) {
		if (candidate_levels[i] === current_levels[i]) continue;
		return candidate_levels[i] > current_levels[i];
	}
	return false;
}

window.LoadedError = class extends Error {}
if (window.BCAR_VERSION) {
	if (is_newer(window.BCAR_VERSION, BCAR_Version)) {
		beepNewVersion();
		console.log('BCAR+ has been udapted')
	}
	throw new LoadedError('BCAR+ already loaded')
}
// SDK stuff

var bcModSDK=function(){"use strict";const e="1.1.0";function o(e){alert("Mod ERROR:\n"+e);const o=new Error(e);throw console.error(o),o}const t=new TextEncoder;function n(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function r(e){const o=new Set;return e.filter((e=>!o.has(e)&&o.add(e)))}const i=new Map,a=new Set;function d(e){a.has(e)||(a.add(e),console.warn(e))}function s(e){const o=[],t=new Map,n=new Set;for(const r of p.values()){const i=r.patching.get(e.name);if(i){o.push(...i.hooks);for(const[o,a]of i.patches.entries())t.has(o)&&t.get(o)!==a&&d(`ModSDK: Mod '${r.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${o}\nPatch1:\n${t.get(o)||""}\nPatch2:\n${a}`),t.set(o,a),n.add(r.name)}}o.sort(((e,o)=>o.priority-e.priority));const r=function(e,o){if(0===o.size)return e;let t=e.toString().replaceAll("\r\n","\n");for(const[n,r]of o.entries())t.includes(n)||d(`ModSDK: Patching ${e.name}: Patch ${n} not applied`),t=t.replaceAll(n,r);return(0,eval)(`(${t})`)}(e.original,t);let i=function(o){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookChainExit)||void 0===i?void 0:i.call(t,e.name,n),d=r.apply(this,o);return null==a||a(),d};for(let t=o.length-1;t>=0;t--){const n=o[t],r=i;i=function(o){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookEnter)||void 0===i?void 0:i.call(t,e.name,n.mod),d=n.hook.apply(this,[o,e=>{if(1!==arguments.length||!Array.isArray(o))throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof e}`);return r.call(this,e)}]);return null==a||a(),d}}return{hooks:o,patches:t,patchesSources:n,enter:i,final:r}}function c(e,o=!1){let r=i.get(e);if(r)o&&(r.precomputed=s(r));else{let o=window;const a=e.split(".");for(let t=0;t<a.length-1;t++)if(o=o[a[t]],!n(o))throw new Error(`ModSDK: Function ${e} to be patched not found; ${a.slice(0,t+1).join(".")} is not object`);const d=o[a[a.length-1]];if("function"!=typeof d)throw new Error(`ModSDK: Function ${e} to be patched not found`);const c=function(e){let o=-1;for(const n of t.encode(e)){let e=255&(o^n);for(let o=0;o<8;o++)e=1&e?-306674912^e>>>1:e>>>1;o=o>>>8^e}return((-1^o)>>>0).toString(16).padStart(8,"0").toUpperCase()}(d.toString().replaceAll("\r\n","\n")),l={name:e,original:d,originalHash:c};r=Object.assign(Object.assign({},l),{precomputed:s(l),router:()=>{},context:o,contextProperty:a[a.length-1]}),r.router=function(e){return function(...o){return e.precomputed.enter.apply(this,[o])}}(r),i.set(e,r),o[r.contextProperty]=r.router}return r}function l(){const e=new Set;for(const o of p.values())for(const t of o.patching.keys())e.add(t);for(const o of i.keys())e.add(o);for(const o of e)c(o,!0)}function f(){const e=new Map;for(const[o,t]of i)e.set(o,{name:o,original:t.original,originalHash:t.originalHash,sdkEntrypoint:t.router,currentEntrypoint:t.context[t.contextProperty],hookedByMods:r(t.precomputed.hooks.map((e=>e.mod))),patchedByMods:Array.from(t.precomputed.patchesSources)});return e}const p=new Map;function u(e){p.get(e.name)!==e&&o(`Failed to unload mod '${e.name}': Not registered`),p.delete(e.name),e.loaded=!1,l()}function g(e,t,r){"string"==typeof e&&"string"==typeof t&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.\nIt will work for now, but please inform author to update.`),e={name:e,fullName:e,version:t},t={allowReplace:!0===r}),e&&"object"==typeof e||o("Failed to register mod: Expected info object, got "+typeof e),"string"==typeof e.name&&e.name||o("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let i=`'${e.name}'`;"string"==typeof e.fullName&&e.fullName||o(`Failed to register mod ${i}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),i=`'${e.fullName} (${e.name})'`,"string"!=typeof e.version&&o(`Failed to register mod ${i}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),void 0!==e.repository&&"string"!=typeof e.repository&&o(`Failed to register mod ${i}: Expected repository to be undefined or string, got ${typeof e.version}`),null==t&&(t={}),t&&"object"==typeof t||o(`Failed to register mod ${i}: Expected options to be undefined or object, got ${typeof t}`);const a=!0===t.allowReplace,d=p.get(e.name);d&&(d.allowReplace&&a||o(`Refusing to load mod ${i}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`),u(d));const s=e=>{"string"==typeof e&&e||o(`Mod ${i} failed to patch a function: Expected function name string, got ${typeof e}`);let t=g.patching.get(e);return t||(t={hooks:[],patches:new Map},g.patching.set(e,t)),t},f={unload:()=>u(g),hookFunction:(e,t,n)=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);const r=s(e);"number"!=typeof t&&o(`Mod ${i} failed to hook function '${e}': Expected priority number, got ${typeof t}`),"function"!=typeof n&&o(`Mod ${i} failed to hook function '${e}': Expected hook function, got ${typeof n}`);const a={mod:g.name,priority:t,hook:n};return r.hooks.push(a),l(),()=>{const e=r.hooks.indexOf(a);e>=0&&(r.hooks.splice(e,1),l())}},patchFunction:(e,t)=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);const r=s(e);n(t)||o(`Mod ${i} failed to patch function '${e}': Expected patches object, got ${typeof t}`);for(const[n,a]of Object.entries(t))"string"==typeof a?r.patches.set(n,a):null===a?r.patches.delete(n):o(`Mod ${i} failed to patch function '${e}': Invalid format of patch '${n}'`);l()},removePatches:e=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);s(e).patches.clear(),l()},callOriginal:(e,t,n)=>(g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`),"string"==typeof e&&e||o(`Mod ${i} failed to call a function: Expected function name string, got ${typeof e}`),Array.isArray(t)||o(`Mod ${i} failed to call a function: Expected args array, got ${typeof t}`),function(e,o,t=window){return c(e).original.apply(t,o)}(e,t,n)),getOriginalHash:e=>("string"==typeof e&&e||o(`Mod ${i} failed to get hash: Expected function name string, got ${typeof e}`),c(e).originalHash)},g={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:a,api:f,loaded:!0,patching:new Map};return p.set(e.name,g),Object.freeze(f)}function h(){const e=[];for(const o of p.values())e.push({name:o.name,fullName:o.fullName,version:o.version,repository:o.repository});return e}let m;const y=function(){if(void 0===window.bcModSdk)return window.bcModSdk=function(){const o={version:e,apiVersion:1,registerMod:g,getModsInfo:h,getPatchingInfo:f,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return m=o,Object.freeze(o)}();if(n(window.bcModSdk)||o("Failed to init Mod SDK: Name already in use"),1!==window.bcModSdk.apiVersion&&o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==e&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&void 0===window.bcModSdk._shim10register)){const e=window.bcModSdk,o=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(o,t,n)=>o&&"object"==typeof o&&"string"==typeof o.name&&"string"==typeof o.version?e.registerMod(o.name,o.version,"object"==typeof t&&!!t&&!0===t.allowReplace):e.registerMod(o,t,n),_shim10register:!0}));window.bcModSdk=o}return window.bcModSdk}();return"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=y),y}();

// SDK stuff

(async function () {
	const modApi = bcModSDK.registerMod({
	name: 'BCAR+',
	fullName: 'Bondage Club Auto React +',
	version: BCAR_Version,
	// Optional - Link to the source code of the mod
	repository: 'https://github.com/DrBranestawm/BCAR',
		});
  //global variables
    var Dictionary = [];
    const expressions_state = {loaded: false, conflicts: {}}


  //do not touch this
  await waitFor(() => ServerIsConnected && ServerSocket);
  //end of do not touch
  const bcarSettingsKey = () => `bcarSettings.${Player?.AccountName}`;
    const subcommands = ["arousalhelp", "arousaloff", "arousalon", "changelog", "ear1", "ear2", "eardelete", "eardelay", "earhelp", "earoff", "earon", "ear1", "ear2", "earwiggles", "expressionhelp", "expressionon", "expressionoff", "male", "female", "other", "help", "load1", "load2", "load3", "profile1", "profile1delete", "profile2", "profile2delete", "profile3", "profile3delete", "profilehelp", "save1", "save2", "save3", "status", "tail1", "tail2", "tailhelp", "taildelay", "taildelete", "tailoff", "tailon", "tailwags", "wing1", "wing2", "wingdelay", "wingdelete", "wingflaps", "winghelp", "wingoff", "wingon"];
    const w = window;
    const BCAR_CHANGELOG =
          "BCAR+ v" + BCAR_Version + ":\n" +
          "- Orgasms can stop the Player from leaving\n" +
          "- Added some commands\n" +
          "     - /cum\n" +
          "     - /leave\n" +
          "     - /safewordspecific\n" +
          "     - /wardrobe\n" +
          "- Profiles3 does work now\n" +
          "- Code clean up\n" +
          "\n" +
          "BCAR v0.6.0:\n" +
          "- BCAR is now known as BCAR+\n" +
          "- Included BCE Expressions into BCAR+\n" +
          "- Added an auto completion for subcommands\n" +
          "- Settings saves on server now\n" +
          "- Added Commands eardelete/taildelete/wingdelete\n" +
          "- BCAR+ checks automatically for updates and notifies the user.\n" +
          "- Genders can now be changed without relog\n" +
          "- Added a third profile slot\n" +
	  "- Users can now set the number and the speed of ear wiggles, tail wags and wing flaps\n" +
          
  await bcarSettingsLoad();
            if(Player.BCAR != null){
        console.log("BCAR+ is Loaded");
//            BCAR_Greeting();
        }
        window.BCAR_VERSION = BCAR_Version

    function checkUpdates () {
        fetch(`https://drbranestawm.github.io/BCAR/script/bcarBeta.js?ts=${Date.now()}`).then(r => r.text()).then(r => eval(r)).catch(x => x instanceof LoadedError || console.error(x))
    }

    setInterval(checkUpdates, 3600000)

//BCAR+ Expression
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
const BCAR_Expression_Additions = {
    OpenMouthSlow: {
        Type: "OpenMouth",
        Duration: 4000,
        Expression: {
            Mouth: [
                { Expression: "HalfOpen", Duration: 2000 },
                { Expression: "Open", Duration: 2000 },
                { Expression: "Moan", Duration: -1 },
            ],
        },
    },
    Confused: {
        Type: "Confused",
        Duration: 30000,
        Priority: 600,
        Expression: {
            Eyebrows: [{ Expression: "OneRaised", Duration: 30000 }],
        },
    },
    Cackle: {
        Type: "Cackle",
        Duration: 3000,
        Priority: 600,
        Expression: {
            Mouth: [
                { Expression: "TonguePinch", Duration: 400 },
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
    Chuckle: {
        Type: "Chuckle",
        Duration: 4000,
        Priority: 500,
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
        Mod: "BCAR+",
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
        Mod: "BCAR+",
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
        Mod: "BCAR+",
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
        Mod: "BCAR+",
        Event: "Cackle",
        Type: "Emote",
        Matchers: [
            {
                Tester: /^cackles/u,
            },
        ],
    },
    {
        Mod: "BCAR+",
        Event: "Confused",
        Type: "Emote",
        Matchers: [
            {
                Tester:
                /^((is|seems|looks) (confused|curious|suspicious)|raises an eyebrow)/u,
            },
        ],
    },
    {
        Mod: "BCAR+",
        Event: "OpenMouthSlow",
        Type: "Emote",
        Matchers: [
            {
                Tester: /^slowly opens her mouth/u,
            },
        ],
    },
]
//End of BCAR+ Expression

//Functions

    const typeAction = { EarCaress :
                [["Mnyaa~","Nnyaaaaah~","Nnyaaaaah~","Nnyaa~","Nyaa~"], // sounds
                [" purrs softly, twitching %POSSESSIVE% ears.", " twitches %POSSESSIVE% ears, purring loudly as %POSSESSIVE% ears are toyed with.",
                " twitches %POSSESSIVE% ears, purring loudly as %POSSESSIVE% ears are toyed with.", " squirms, twitches %POSSESSIVE% ears and purrs.",
                " wiggles and twitches %POSSESSIVE% ears purring softly."]], // actions // order matters, match sound with action
                EarNibble :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches %POSSESSIVE% ears as it's nibbled.", " wiggles and twitches %POSSESSIVE% ears between the teeth.",
                " moans softly, twitching %POSSESSIVE% ears as it's nibbled."]],
                EarLick :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches %POSSESSIVE% ears as it's licked.", " wiggles and twitches %POSSESSIVE% ears caused by the licking.",
                " moans softly, twitching %POSSESSIVE% ears as it's licked."]],
                EarKiss :
                [["Mnyaa~","Nnyaa~","Nnyaaaaah~"],
                [" moans softly and twitches %POSSESSIVE% ears as it's kissed.", " wiggles and twitches %POSSESSIVE% ears caused by the kissing.",
                " moans softly, twitching %POSSESSIVE% ears as it's kissed."]],
                HeadBrush :
                [["",""],
                [" purrs softly and twitches %POSSESSIVE% ears.", " purrs happily and twitches %POSSESSIVE% ears."]],
                HeadPat :
                [["","","",""],
                [" purrs softly and twitches %POSSESSIVE% ears.", " purrs happily and twitches %POSSESSIVE% ears.",
                 " purrs softly, twitches %POSSESSIVE% ears and nuzzles into the pat."," purrs happily, twitches %POSSESSIVE% ears and nuzzles into the pat."]],
                CaressBack :
                [["",""],
                [" purrs softly and wags %POSSESSIVE% tail.", " purrs softly, arches %POSSESSIVE% back and wags %POSSESSIVE% tail."]],
                MassageBack :
                [[""],
                [" purrs softly and wags %POSSESSIVE% tail."]],
                CaressButt :
                [["Mnyaa~"],
                [" purrs softly, wiggles %POSSESSIVE% butt and wags %POSSESSIVE% tail."]],
                       }

    function substitude_genders(text) {
        let result = text
        result = result.replaceAll("%POSSESSIVE%", Player.BCAR.bcarSettings.genderDefault.capPossessive.toLocaleLowerCase())
        result = result.replaceAll("%CAP_POSSESSIVE%", Player.BCAR.bcarSettings.genderDefault.capPossessive)
        result = result.replaceAll("%PRONOUN%", Player.BCAR.bcarSettings.genderDefault.capPronoun.toLocaleLowerCase())
        result = result.replaceAll("%CAP_PRONOUN%", Player.BCAR.bcarSettings.genderDefault.capPronoun)
        result = result.replaceAll("%INTENSIVE%", Player.BCAR.bcarSettings.genderDefault.capIntensive.toLocaleLowerCase())
        result = result.replaceAll("%CAP_INTENSIVE%", Player.BCAR.bcarSettings.genderDefault.capIntensive)
        result = result.replaceAll("%NAME%", CharacterNickname(Player))
        result = result.replaceAll("%OPP_NAME%")
        // repeat for other vars
        return result
    }
    function ActivityBeeper(type,nya){
        const beep_text = CharacterNickname(Player) + typeAction[type][1][nya]
        ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: substitude_genders(beep_text)}]});
        //        const beep_text = CharacterNickname(Player) + substitude_genders(typeAction[type][1][nya])
        //        ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: beep_text}]});
        const msg = typeAction[type][0][nya]
        if (msg.length > 0) ServerSend("ChatRoomChat",{Type:"Chat",Content:substitude_genders(msg)})
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
            Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 20;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalEarLick(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 7;
            ActivityChatRoomArousalSync(Player);
            Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 20;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalEarKiss(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 7;
            ActivityChatRoomArousalSync(Player);
            Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 20;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalHeadBrush(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 2;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalHeadPat(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 1;
            ActivityChatRoomArousalSync(Player);
            Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 2;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalCaressBack(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 2;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalMassageBack(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 2;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function ArousalCaressButt(){
        if(Player.BCAR.bcarSettings.arousalEnable === true){
            Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 1;
            ActivityChatRoomArousalSync(Player);
            Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 5;
            BCT_API?.ActivityChatRoomBCTArousalSync(Player);
        }
    }

    function Sleep(){
        if(InventoryGet(Player, "Emoticon")?.Property?.Expression !== "Sleep"){  // check if Expression is not sleep
            console.log("Sleep - Check")
            let numberBlinks = 1;
            let delay = 3000;
            for(let i=0; i < numberBlinks; i++)
            {
                setTimeout(function(){CharacterSetFacialExpression(Player, "Eyes", "Horny");},i*delay);
                setTimeout(function(){CharacterSetFacialExpression(Player, "Eyes", "Closed"), CharacterSetFacialExpression(Player, "Emoticon", "Sleep"), CharacterSetActivePose(Player, "Hogtied");;},i*delay+delay/2);
            }
        }
    }

    function Wake(){
        if(InventoryGet(Player, "Emoticon")?.Property?.Expression === "Sleep"){ // check if Expression is sleep
            console.log("Wake - Check")
            let numberBlinks = 1;
            let delay = 3000;
            for(let i=0; i < numberBlinks; i++)
            {
                setTimeout(function(){CharacterSetFacialExpression(Player, "Eyes", "Horny");},i*delay);
                setTimeout(function(){CharacterSetFacialExpression(Player, "Eyes", null), CharacterSetFacialExpression(Player, "Emoticon", null), CharacterSetActivePose(Player, "Kneel");},i*delay+delay/2);
            }
        }
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

    function Landing() {
      if (Player?.BCAR?.bcarSettings?.wingFlappingEnable) {
        const emoticon = InventoryGet(Player, 'Emoticon');
        if (emoticon?.Property) {
          delete emoticon.Property.OverrideHeight;
          CurrentScreen === 'ChatRoom' ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
        }
      }
    }

    function WingsHide(){
        InventoryRemove(Player, "Wings");
        CurrentScreen === 'ChatRoom'
            ? ChatRoomCharacterUpdate(Player)
        : CharacterRefresh(Player);
    }

    function StopLeaving(){
        if(ChatRoomSlowtimer != 0){
            ChatRoomSlowtimer = CurrentTime + 1;
            ChatRoomSlowStop = true;
            ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: CharacterNickname(Player) + " was stopped from leaving by " + Player.BCAR.bcarSettings.genderDefault.capPossessive.toLocaleLowerCase() + " own orgasm." }]})
        }
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
    window.ChatRoomRegisterMessageHandler({ Priority: -200, Description: "BCAR+ Ground flying players with chains", Callback: (data, sender, msg, metadata) => {
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

//      if (Player.BCT.bctSettings.tailWaggingEnable === true){
//          Player.BCT.bctSettings.tailWaggingEnable = false
//      }

    window.ChatRoomRegisterMessageHandler({ Priority: -200, Description: "BCAR+ Emotes", Callback: (data, sender, msg, metadata) => {
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
          let patterns = [/shows.*wings/mi, /spreads.*wings/mi] ; // matches {<any> spreads <any> wings <any>}
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
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                    "You can't fly because the " + NeckRestraints.Asset.Description + " holds you down.</p>", 15000
                )
                ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: CharacterNickname(Player) + " tried to fly while " + Player.BCAR.bcarSettings.genderDefault.capPronoun.toLocaleLowerCase() + " is held down by a " + NeckRestraints.Asset.Description + "." }]});
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
}});

    window.ChatRoomRegisterMessageHandler({ Priority: 600, Description: "BCAR+ Activites", Callback: (data, sender, msg, metadata) => {
        if (data.Type === "Activity" && data.Sender === Player.MemberNumber){
            if ((data.Content.startsWith("Orgasm") || (data.Content.startsWith("Orgasm") === -1))) {
                if (data.Content.indexOf("0") !== -1 || data.Content.indexOf("1") !== -1 || data.Content.indexOf("2") !== -1 || data.Content.indexOf("3") !== -1 || data.Content.indexOf("4") !== -1 || data.Content.indexOf("5") !== -1 || data.Content.indexOf("6") !== -1 || data.Content.indexOf("7") !== -1 || data.Content.indexOf("8") !== -1 || data.Content.indexOf("9") !== -1) {
                    console.log("Player orgasmed")
                    StopLeaving();
                }
            }
        }
    }});

    window.ChatRoomRegisterMessageHandler({ Priority: 600, Description: "BCAR+ Auto Reactions", Callback: (data, sender, msg, metadata) => {
        if (data.Type !== 'Activity') return // isn't an Activity message
        console.log(data);
        if (!Player?.MemberNumber) return // we need Player.MemberNumber
        if (Player.MemberNumber !== data.Dictionary.find(obj => obj.Tag === "TargetCharacter")?.MemberNumber) return // we aren't the target
        let nya
        switch (data.Content) {
            case 'ChatOther-ItemEars-Caress': case 'ChatSelf-ItemEars-Caress':
                if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
                nya = Math.floor(Math.random() * 5);
                console.log(nya);
                ActivityBeeper("EarCaress", nya);
                EarWiggle();
                ArousalEarCaress();
                break;
            case 'ChatOther-ItemEars-Nibble': case 'ChatSelf-ItemEars-Nibble':
                if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
                nya = Math.floor(Math.random() * 3);
                console.log(nya);
                ActivityBeeper("EarNibble", nya);
                EarWiggle();
                ArousalEarNibble();
                break;
            case 'ChatOther-ItemEars-Lick': case 'ChatSelf-ItemEars-Lick':
                if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
                nya = Math.floor(Math.random() * 3);
                console.log(nya);
                ActivityBeeper("EarLick", nya);
                EarWiggle();
                ArousalEarLick();
                break;
            case 'ChatOther-ItemEars-Kiss': case 'ChatSelf-ItemEars-Kiss':
                if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
                nya = Math.floor(Math.random() * 3);
                console.log(nya);
                ActivityBeeper("EarKiss", nya);
                EarWiggle();
                ArousalEarKiss();
                break;
            case 'ChatOther-ItemHead-TakeCare': case 'ChatSelf-ItemHead-TakeCare':
                if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
                nya = Math.floor(Math.random() * 2);
                console.log(nya);
                ActivityBeeper("HeadBrush", nya);
                EarWiggle();
                ArousalHeadBrush();
                break;
            case 'ChatOther-ItemHead-Pet': case 'ChatSelf-ItemHead-Pet':
                if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
                nya = Math.floor(Math.random() * 4);
                console.log(nya);
                ActivityBeeper("HeadPat", nya);
                EarWiggle();
                ArousalHeadPat();
                break;
            case 'ChatOther-ItemTorso-Caress': case 'ChatSelf-ItemTorso-Caress':
                if (!Player.BCAR.bcarSettings.tailWaggingEnable) break;
                nya = Math.floor(Math.random() * 1);
                console.log(nya);
                ActivityBeeper("CaressBack",nya);
                TailWag();
                ArousalCaressBack();
                break;
            case 'ChatOther-ItemTorso-MassageHands': case 'ChatSelf-ItemTorso-MassageHands':
                if (!Player.BCAR.bcarSettings.tailWaggingEnable) break;
                nya = Math.floor(Math.random() * 1);
                console.log(nya);
                ActivityBeeper("MassageBack", nya);
                TailWag();
                ArousalMassageBack();
                break;
            case 'ChatOther-ItemButt-Caress': case 'ChatSelf-ItemButt-Caress':
                if (!Player.BCAR.bcarSettings.tailWaggingEnable) break;
                nya = Math.floor(Math.random() * 1);
                console.log(nya);
                ActivityBeeper("CaressButt", nya);
                TailWag();
                ArousalCaressButt();
                break;
        }
    }});


    function bcarSettingsSave() {
        Player.OnlineSettings.BCAR = Player.BCAR
        window.ServerAccountUpdate.QueueData({OnlineSettings: window.Player.OnlineSettings})
    }

    async function beepNewVersion() {
        await waitFor(() => !!Player?.AccountName);
        await sleep(5000);
        ChatRoomSendLocal(
           "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React + New Version</b>\n" +
           "BCAR+ has been updated, please relog to get the new version.</p>"
       );
		//bcarBeepNotify("BCAR+ updated", "BCAR+ got updated. Type ''/bcar changelog'' to view the changelog.");
	}

    function bcarSettingsRemove() {
    delete Player.OnlineSettings.BCAR
      window.ServerAccountUpdate.QueueData({OnlineSettings: window.Player.OnlineSettings})
    }

    function migrate_gender() {
        const gd = Player.BCAR.bcarSettings.genderDefault
        if (gd.pronoun || gd.intensive || gd.possessive) {
            CommandGenderToggle([gd.gender.toLowerCase()]); // this will set correct values, deletes will delete old values
            delete gd.pronoun; // this deletes Player.BCAR.bcarSettings.genderDefault.pronoun
            delete gd.intensive;
            delete gd.possessive;
    }
  }

    function migrateSettings() {
        const local_settings_json = localStorage.getItem(bcarSettingsKey())
        if (!local_settings_json) return
        localStorage.removeItem(bcarSettingsKey())
        return JSON.parse(local_settings_json)
}

    async function bcarSettingsLoad() {
		await waitFor(() => !!Player?.AccountName);
        const BCAR_DEFAULT_SETTINGS = {
            arousalEnable : true,
            arousalStatus : "Enabled",
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
                 "capIntensive" : "Them", //Capitalized Intensive (Him, Her, Them)
                 "capPossessive" : "Their", //Capitalized Possessive (His, Her, Their)
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
            profile3Saved : false,
            profile3 : {
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
            },
//            bcarLoaded : false,
        }


        // if there are no settings on the server initialize with an empty object
        Player.BCAR = Player.OnlineSettings.BCAR || {bcarSettings: {}}
        //if online settings are not an older version then local ones, use them instead

        const settings = migrateSettings() || Player.OnlineSettings.BCAR?.bcarSettings || {}
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

        settings.version = BCAR_Settings_Version;
        Player.BCAR.bcarSettings = settings;

        migrate_gender();
        delete Player.BCAR.bcarSettings.asleep
        bcarSettingsSave();
    }

//Ear Commands
function CommandEarsChange(argsList)
{
    console.log(argsList)
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
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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
            "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
            "Ear wiggle is now enabled!</p>"
        );
    }
    else if (toggle === "earoff") {
        Player.BCAR.bcarSettings.earWigglingEnable = false;
        Player.BCAR.bcarSettings.earWigglingStatus = "Disabled";
        ChatRoomSendLocal(
            "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
            "Ear wiggle is now disabled!</p>"
        );
    }
    bcarSettingsSave();
}

function CommandEarWiggleCountChange(argsList) {
    let toggle = argsList[0];
    let number = parseInt(argsList.slice(1));

    if (toggle === "earwiggles") {
      if (number > -1 && number < 41 && (number % 2 === 0)) {
        Player.BCAR.bcarSettings.earsDefault.earsCount = number;
        ChatRoomSendLocal(
          "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `Ear wiggle count has been set to ${number}</p>`, 15000
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use an even number between 1 and 40.\n` +
          `Default is 12 wiggles.</p>`, 15000
      );
    }
  }
}

function CommandEarWiggleDelayChange(argsList) {
    let toggle = argsList[0];
    let number = parseInt(argsList.slice(1));

    if (toggle === "eardelay") {
      if (number > 49 && number < 3001) {
        Player.BCAR.bcarSettings.earsDefault.earsDelay = number;
        ChatRoomSendLocal(
          "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `Ear wiggle delay has been set to ${number}ms</p>`, 15000
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use number between 50 and 3000.\n` +
          `Default is 175ms.</p>`, 15000
      );
    }
  }
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
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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

        if (openHelp === "ear" || openHelp === "ears" || openHelp === "earhelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Ear instructions:\n" +
                "First equip the main ears you want to wear in primarily the ''Ears'' slot in your wardrobe. Type ''/bcar ear1'' in the chat to save the main ears. \n" +
                "For your ears to wiggle follow the same steps and equip a different type of ears to use as your secondary. Type ''/bcar ear2'' in the chat to save the secondary ears. \n" +
                " \n" +
                "Commands:\n" +
                "/bcar ear1 - Saves the primary ears.\n" +
                "/bcar ear2 - Saves the secondary ears.\n" +
                "/bcar earon - Enables the ear wiggling on.\n" +
                "/bcar earoff - Disables the ear wiggling off.\n" +
                "/bcar earwiggles - Determines the number of wiggles.\n" +
                "/bcar eardelay - Determines the wiggle speed.\n" +
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
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
            "Secondary tail has been updated!</p>"
        );
    }
    else if (change === "tailget") {
        let tails = InventoryGet(Player,"TailStraps");
        Player.BCAR.bcarSettings.tailsDefault.tails1 = Player?.BCT?.bctSettings?.tailWaggingTailOneName;
        Player.BCAR.bcarSettings.tailsDefault.tailsColor1 = tails?.Color;
        Player.BCAR.bcarSettings.tailsDefault.tails2 = Player?.BCT?.bctSettings?.tailWaggingTailTwoName;
        Player.BCAR.bcarSettings.tailsDefault.tailsColor2 = tails?.Color;
        Player.BCAR.bcarSettings.tailsDefault.tailsDescription2 = tails?.Asset?.Description;
        ChatRoomSendLocal(
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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
                "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Tail wagging is now enabled!</p>"
            );
        }
        else if (toggle === "tailoff") {
            Player.BCAR.bcarSettings.tailWaggingEnable = false;
            Player.BCAR.bcarSettings.tailWaggingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Tail wagging is now disabled!</p>"
            );
        }
        bcarSettingsSave();
    }

function CommandTailWagCountChange(argsList) {
    let toggle = argsList[0];
    let number = parseInt(argsList.slice(1));

    if (toggle === "tailwags") {
      if (number > -1 && number < 41 && (number % 2 === 0)) {
        Player.BCAR.bcarSettings.tailsDefault.tailsCount = number;
        ChatRoomSendLocal(
          "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `Tail wag count has been set to ${number}</p>`, 15000
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use an even number between 1 and 40.\n` +
          `Default is 6 wags.</p>`, 15000
      );
    }
  }
}

function CommandTailWagDelayChange(argsList) {
    let toggle = argsList[0];
    let number = parseInt(argsList.slice(1));

    if (toggle === "taildelay") {
      if (number > 199 && number < 5001) {
        Player.BCAR.bcarSettings.tailsDefault.tailsDelay = number;
        ChatRoomSendLocal(
          "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `Tail wag delay has been set to ${number}ms</p>`, 15000
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use number between 200 and 5000.\n` +
          `Default is 800ms.</p>`, 15000
      );
    }
  }
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
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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

        if (openHelp === "tail" || openHelp === "tails" || openHelp === "tailhelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Tail instructions:\n" +
                "First equip the main tail you want to wear in primarily the ''Tail Strap'' slot in your wardrobe. Type ''/bcar tail1'' in the chat to save the main tail. \n" +
                "For your tail to wag follow the same steps and equip a different type of tail to use as your secondary. Type ''/bcar tail2'' in the chat to save the secondary tail. \n" +
                " \n" +
                "Commands:\n" +
                "/bcar tail1 - Saves the primary tail.\n" +
                "/bcar tail2 - Saves the secondary tail.\n" +
                "/bcar tailon - Enables the tail wagging on.\n" +
                "/bcar tailoff - Disbales the tail wagging off.\n" +
                "/bcar tailwags - Determines the number of wags.\n" +
                "/bcar taildelay - Determines the wagging speed.\n" +
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
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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
                "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Wing flapping is now enabled!</p>"
            );
        }
        else if (toggle === "wingoff") {
            Player.BCAR.bcarSettings.wingFlappingEnable = false;
            Player.BCAR.bcarSettings.wingFlappingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Wing flapping is now disabled!</p>"
            );
        }
        bcarSettingsSave();
    }

function CommandWingFlapCountChange(argsList) {
    let toggle = argsList[0];
    let number = parseInt(argsList.slice(1));

    if (toggle === "wingflaps") {
      if (number > -1 && number < 41 && (number % 2 === 0)) {
        Player.BCAR.bcarSettings.wingsDefault.wingsCount = number;
        ChatRoomSendLocal(
          "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `Wing flap count has been set to ${number}</p>`, 15000
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use an even number between 1 and 40.\n` +
          `Default is 6 flaps.</p>`, 15000
      );
    }
  }
}

function CommandWingFlapDelayChange(argsList) {
    let toggle = argsList[0];
    let number = parseInt(argsList.slice(1));

    if (toggle === "wingdelay") {
      if (number > 199 && number < 5001) {
        Player.BCAR.bcarSettings.wingsDefault.wingsDelay = number;
        ChatRoomSendLocal(
          "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `Ear wiggle delay has been set to ${number}ms</p>`, 15000
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use number between 200 and 5000.\n` +
          `Default is 500ms.</p>`, 15000
      );
    }
  }
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
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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

        if (openHelp === "wing" || openHelp === "wings" || openHelp === "winghelp") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Wing instructions:\n" +
                "First equip the main wings you want to wear in primarily the ''Wings'' slot in your wardrobe. Type ''/bcar wing1'' in the chat to save the main wings. \n" +
                "For your wings to wiggle follow the same steps and equip a different type of wings to use as your secondary. Type ''/bcar wing2'' in the chat to save the secondary wings. \n" +
                "To let your wings flap type an emote anything that includes the words ''flaps'' and ''wings''. \n" +
                " \n" +
                "Commands:\n" +
                "/bcar wing1 - Saves the primary wings.\n" +
                "/bcar wing2 - Saves the secondary wings.\n" +
                "/bcar wingon - Enables the wing flapping on.\n" +
                "/bcar wingoff - Disables the wing flapping off.\n" +
                "/bcar wingflaps - Determines the number of flaps.\n" +
                "/bcar wingdelay - Determines the flapping speed.\n" +
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
function CommandProfile(argsList) {
  const cmd = argsList[0];
  const number = cmd.at(-1)
  const prof_number = `profile${number}`
  const profile = Player?.BCAR?.bcarSettings?.[prof_number] // const profile might be undefined
  switch (cmd) {
    case 'profile1': case 'profile2': case 'profile3':
      ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
        <br>${prof_number} preset:
        <br>Ear Animation: ${profile?.earWigglingStatus}
        <br>Primary Ears: ${AssetGet("Female3DCG","HairAccessory2",profile?.earsDefault?.ears1)?.Description || 'None'}
        <br>Secondary Ears: ${AssetGet("Female3DCG","HairAccessory2",profile?.earsDefault?.ears2)?.Description || 'None'}
        <br>Tail Animation: ${profile?.tailWaggingStatus}
        <br>Primary Tail: ${AssetGet("Female3DCG","TailStraps",profile?.tailsDefault?.tails1)?.Description || 'None'}
        <br>Secondary Tail: ${AssetGet("Female3DCG","TailStraps",profile?.tailsDefault?.tails2)?.Description || 'None'}
        <br>Wing Animation: ${profile?.wingFlappingStatus}
        <br>Primary Wings: ${AssetGet("Female3DCG","Wings",profile?.wingsDefault?.wings1)?.Description || 'None'}
        <br>Secondary Wings: ${AssetGet("Female3DCG","Wings",profile?.wingsDefault?.wings2)?.Description || 'None'}
      </p>`.replaceAll('\n', ''));
      break; // this is important
    case 'save1': case 'save2': case 'save3':
      Player.BCAR.bcarSettings[`${prof_number}Saved`] = true;
      profile.earWigglingEnable = Player.BCAR.bcarSettings.earWigglingEnable;
      profile.earWigglingStatus = Player.BCAR.bcarSettings.earWigglingStatus;

      profile.tailWaggingEnable = Player.BCAR.bcarSettings.tailWaggingEnable;
      profile.tailWaggingStatus = Player.BCAR.bcarSettings.tailWaggingStatus;

      profile.wingFlappingEnable = Player.BCAR.bcarSettings.wingFlappingEnable;
      profile.wingFlappingStatus = Player.BCAR.bcarSettings.wingFlappingStatus;

      for (const item of ['ears', 'tails', 'wings']) {
        profile[`${item}Default`] = Player.BCAR.bcarSettings[`${item}Default`]
      }

      ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b><br>${prof_number} has been saved!</p>`);
      bcarSettingsSave();
      break;
    case 'load1': case 'load2': case 'load3':
      if (!Player.BCAR.bcarSettings[`${prof_number}Saved`]) {
        ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b><br>${prof_number} not found!<br>Please save ${prof_number} first.</p>`); // no need to replace newlines, you don't have those here
        break;
      }
      Player.BCAR.bcarSettings.earWigglingEnable = profile.earWigglingEnable;
      Player.BCAR.bcarSettings.earWigglingStatus = profile.earWigglingStatus;

      Player.BCAR.bcarSettings.tailWaggingEnable = profile.tailWaggingEnable;
      Player.BCAR.bcarSettings.tailWaggingStatus = profile.tailWaggingStatus;

      Player.BCAR.bcarSettings.wingFlappingEnable = profile.wingFlappingEnable;
      Player.BCAR.bcarSettings.wingFlappingStatus = profile.wingFlappingStatus;

      for (const item of ['ears', 'tails', 'wings']) {
        Player.BCAR.bcarSettings[`${item}Default`] = profile[`${item}Default`]
      } // the loop ends here
      if (Player?.BCAR?.bcarSettings?.earsDefault?.ears1) {
        InventoryWear(Player, profile?.earsDefault?.ears1, "HairAccessory2", profile?.earsDefault?.earsColor1);
      } else {
        InventoryRemove(Player,"HairAccessory2");
      }
      if (Player?.BCAR?.bcarSettings?.tailsDefault?.tails1) {
        InventoryWear(Player, profile?.tailsDefault?.tails1, "TailStraps", profile?.tailsDefault?.tailsColor1);
      } else {
        InventoryRemove(Player,"TailStraps");
      }
      if (Player?.BCAR?.bcarSettings?.wingsDefault?.wings1) {
        InventoryWear(Player, profile?.wingsDefault?.wings1, "Wings", profile?.wingsDefault?.wingsColor1);
      } else {
        InventoryRemove(Player,"Wings");
      }
      ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b><br>${prof_number} has been loaded!</p>`); // was in the loop, needs to be out of it / was i the first if loop your  deleted

      bcarSettingsSave();
      break;
  }
}

function CommandDeleteProfile(argsList)
    {
        let loading = argsList[0];
        let loadingto = argsList.slice(1);

        if (loading === "profile1delete") {
            if(Player.BCAR.bcarSettings.profile1Saved){
                Player.BCAR.bcarSettings.profile1.earsDefault = {};
                Player.BCAR.bcarSettings.profile1.earsDescription1 = "None";
                Player.BCAR.bcarSettings.profile1.earsDescription2 = "None";
                Player.BCAR.bcarSettings.profile1.earWigglingEnable = false;
                Player.BCAR.bcarSettings.profile1.earWigglingStatus = "Disabled";

                Player.BCAR.bcarSettings.profile1.tailsDefault = {};
                Player.BCAR.bcarSettings.profile1.tailsDefault.tailsDescription1 = "None";
                Player.BCAR.bcarSettings.profile1.tailsDefault.tailsDescription2 = "None";
                Player.BCAR.bcarSettings.profile1.tailWaggingEnable = false;
                Player.BCAR.bcarSettings.profile1.tailWaggingStatus = "Disabled";

                Player.BCAR.bcarSettings.profile1.wingsDefault = {};
                Player.BCAR.bcarSettings.profile1.wingsDescription1 = "None";
                Player.BCAR.bcarSettings.profile1.wingsDescription2 = "None";
                Player.BCAR.bcarSettings.profile1.wingFlappingEnable = false;
                Player.BCAR.bcarSettings.profile1.wingFlappingStatus = "Disabled";
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                    "Profile1 has been cleared!</p>"
                );
            }
            else {
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                    "Profile1 not found!\n" +
                    "Please save Profile1 first.</p>"
                );
            }
        }
        else if (loading === "profile2delete") {
            if(Player.BCAR.bcarSettings.profile2Saved){
                Player.BCAR.bcarSettings.profile2.earsDefault = {};
                Player.BCAR.bcarSettings.profile2.earsDescription1 = "None";
                Player.BCAR.bcarSettings.profile2.earsDescription2 = "None";
                Player.BCAR.bcarSettings.profile2.earWigglingEnable = false;
                Player.BCAR.bcarSettings.profile2.earWigglingStatus = "Disabled";

                Player.BCAR.bcarSettings.profile2.tailsDefault = {};
                Player.BCAR.bcarSettings.profile2.tailsDefault.tailsDescription1 = "None";
                Player.BCAR.bcarSettings.profile2.tailsDefault.tailsDescription2 = "None";
                Player.BCAR.bcarSettings.profile2.tailWaggingEnable = false;
                Player.BCAR.bcarSettings.profile2.tailWaggingStatus = "Disabled";

                Player.BCAR.bcarSettings.profile2.wingsDefault = {};
                Player.BCAR.bcarSettings.profile2.wingsDescription1 = "None";
                Player.BCAR.bcarSettings.profile2.wingsDescription2 = "None";
                Player.BCAR.bcarSettings.profile2.wingFlappingEnable = false;
                Player.BCAR.bcarSettings.profile2.wingFlappingStatus = "Disabled";
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                    "Profile2 has been cleared!</p>"
                );
            }
            else {
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                    "Profile2 not found!\n" +
                    "Please save Profile2 first.</p>"
                );
            }
        }
        else if (loading === "profile3delete") {
            if(Player.BCAR.bcarSettings.profile3Saved){
                Player.BCAR.bcarSettings.profile3.earsDefault = {};
                Player.BCAR.bcarSettings.profile3.earsDescription1 = "None";
                Player.BCAR.bcarSettings.profile3.earsDescription2 = "None";
                Player.BCAR.bcarSettings.profile3.earWigglingEnable = false;
                Player.BCAR.bcarSettings.profile3.earWigglingStatus = "Disabled";

                Player.BCAR.bcarSettings.profile3.tailsDefault = {};
                Player.BCAR.bcarSettings.profile3.tailsDefault.tailsDescription1 = "None";
                Player.BCAR.bcarSettings.profile3.tailsDefault.tailsDescription2 = "None";
                Player.BCAR.bcarSettings.profile3.tailWaggingEnable = false;
                Player.BCAR.bcarSettings.profile3.tailWaggingStatus = "Disabled";

                Player.BCAR.bcarSettings.profile3.wingsDefault = {};
                Player.BCAR.bcarSettings.profile3.wingsDescription1 = "None";
                Player.BCAR.bcarSettings.profile3.wingsDescription2 = "None";
                Player.BCAR.bcarSettings.profile3.wingFlappingEnable = false;
                Player.BCAR.bcarSettings.profile3.wingFlappingStatus = "Disabled";
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                    "Profile3 has been cleared!</p>"
                );
            }
            else {
                ChatRoomSendLocal(
                    "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                    "Profile3 not found!\n" +
                    "Please save Profile3 first.</p>"
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
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Profiles instructions:\n" +
                "With the Profiles you can save presets for your ears, tail and wings. \n" +
                " \n" +
                "Commands:\n" +
                "/bcar save1 - Saves current setup in Profile1.\n" +
                "/bcar save2 - Saves current setup in Profile2.\n" +
                "/bcar save3 - Saves current setup in Profile3.\n" +
                "/bcar load1 - Loads the setup saved in Profile1.\n" +
                "/bcar load2 - Loads the setup saved in Profile2.\n" +
                "/bcar load3 - Loads the setup saved in Profile3.\n" +
                "/bcar profile1 - Shows which setup is saved in Profile1.\n" +
                "/bcar profile2 - Shows which setup is saved in Profile2.\n" +
                "/bcar profile3 - Shows which setup is saved in Profile3.</p>"
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
                "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Arousal manipulation is now enabled!</p>"
            );
        }
        else if (toggle === "arousaloff") {
            Player.BCAR.bcarSettings.arousalEnable = false;
            Player.BCAR.bcarSettings.arousalStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Arousal instructions:\n" +
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
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React + changelog</b>\n" +
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
                "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "BCE Expressions is now enabled!</p>"
                );
        }
        else if (toggle === "expressionoff") {
            Player.BCAR.bcarSettings.expressionsEnable = false;
            Player.BCAR.bcarSettings.expressionsStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "BCE Expressions will be disabled!</p>"
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
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Expression instructions:\n" +
                "BCAR+ Expressions adds Expressions to BCE Expressions and requires FBC to run.\n" +
                "With the expression commands you can switch the BCAR+ Expressions on and off.\n" +
                "Look at the <a href='https://github.com/DrBranestawm/BCAR/wiki/Expression' target='_blank'>BCAR+ Expression Wiki</a> for full list.\n" +
                " \n" +
                "Commands:\n" +
                "/bcar expressionon - Turns expression on.\n" +
                "/bcar expressionoff - Turns expression off.</p>"
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
            Player.BCAR.bcarSettings.genderDefault.capIntensive = "Him";
            Player.BCAR.bcarSettings.genderDefault.capPossessive = "His";
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "The reactions refer to " + CharacterNickname(Player) + " as ''he'' now!</p>"
            );
        }
        else if (toggle === "female") {
            Player.BCAR.bcarSettings.genderDefault.gender = "Female";
            Player.BCAR.bcarSettings.genderDefault.capPronoun = "She";
            Player.BCAR.bcarSettings.genderDefault.capIntensive = "Her";
            Player.BCAR.bcarSettings.genderDefault.capPossessive = "Her";
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "The reactions refer to " + CharacterNickname(Player) + " as ''she'' now!</p>"
            );
        }
        else if (toggle === "other") {
            Player.BCAR.bcarSettings.genderDefault.gender = "Non-Binary";
            Player.BCAR.bcarSettings.genderDefault.capPronoun = "They";
            Player.BCAR.bcarSettings.genderDefault.capIntensive = "Them";
            Player.BCAR.bcarSettings.genderDefault.capPossessive = "Their";
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "The reactions refer to " + CharacterNickname(Player) + " as ''they'' now!</p>"
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
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Commands overview and info:\n" +
                "/bcar arousalhelp - Opens arousal instructions and commands page.\n" +
                "/bcar expressionhelp - Opens expression instructions and commands page.\n" +
                "/bcar changelog - Shows the BCAR+ changelog.\n" +
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
                "Visit the <a href='https://github.com/DrBranestawm/BCAR/wiki' target='_blank'>BCAR+ Wiki</a> for more info.</p>"
            );
        }
    }

function CommandResetSettings(argsList)
    {
        let remove = argsList[0];
        let removeto = argsList.slice(1);

        if (remove === "reset") {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
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
            const s = Player?.BCAR?.bcarSettings; // I know you showed me often enough now ^^
            ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                               <br>Current status:
                               <br>Ear Animation: ${s?.earWigglingStatus}
                               <br>Primary Ears: ${s?.earsDefault?.earsDescription1}
                               <br>Secondary Ears: ${ Player.BCAR.bcarSettings.earsDefault.earsDescription2}
                               <br>Ear Wiggles: ${Player.BCAR.bcarSettings.earsDefault.earsCount}
                               <br>Ear Wiggle Delay: ${Player.BCAR.bcarSettings.earsDefault.earsDelay}
	                           <br>Tail Animation: ${Player.BCAR.bcarSettings.tailWaggingStatus}
	                           <br>Primary Tail: ${AssetGet("Female3DCG","TailStraps",s?.tailsDefault?.tails1)?.Description || 'None'}
	                           <br>Secondary Tail: ${AssetGet("Female3DCG","TailStraps",s?.tailsDefault?.tails2)?.Description || 'None'}
	                           <br>Tail Wags: ${Player.BCAR.bcarSettings.tailsDefault.tailsCount}
	                           <br>Tail Wag Delay: ${Player.BCAR.bcarSettings.tailsDefault.tailsDelay}
	                           <br>Wing Animation: ${Player.BCAR.bcarSettings.wingFlappingStatus}
	                           <br>Primary Wings: ${Player.BCAR.bcarSettings.wingsDefault.wingsDescription1}
	                           <br>Secondary Wings: ${Player.BCAR.bcarSettings.wingsDefault.wingsDescription2}
	                           <br>Wing Flaps: ${Player.BCAR.bcarSettings.wingsDefault.wingsCount}
	                           <br>Wing Flap Delay: ${Player.BCAR.bcarSettings.wingsDefault.wingsDelay}
	                           <br>Gender: ${Player.BCAR.bcarSettings.genderDefault.gender}
	                           <br>Arousal Manipulation: ${Player.BCAR.bcarSettings.arousalStatus}
	                           <br>BCAR+ Expressions: ${Player.BCAR.bcarSettings.expressionsStatus}
                               </p>`.replaceAll('\n', '')
                             );
        }
    }

    window.prefix = function(words){
        // check border cases size 1 array and empty first word)
        if (!words[0] || words.length ==  1) return words[0] || "";
        let i = 0;
        // while all words have the same character at position i, increment i
        while(words[0][i] && words.every(w => w[i] === words[0][i]))
            i++;

        // prefix is the substring from the beginning to the last successfully checked i
        return words[0].substr(0, i);
    }

    CommandCombine([
        {
            Tag: 'bcar',
            Description: "or /bcar help: To open the commands overview and info.",
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
                        const common_prefix = prefix(matches)
                        if (common_prefix.length > words[0].length) window.ElementValue("InputChat", "/bcar " + common_prefix)
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
                CommandEarWiggleCountChange(args.split(" "));
                CommandEarWiggleDelayChange(args.split(" "));
                CommandEarsDelete(args.split(" "));
                CommandEarHelp(args.split(" "));
                //Tail Commands
                CommandTailChange(args.split(" "));
                CommandTailToggle(args.split(" "));
                CommandTailWagCountChange(args.split(" "));
                CommandTailWagDelayChange(args.split(" "));
                CommandTailDelete(args.split(" "));
                CommandTailHelp(args.split(" "));
                //Wing Commands
                CommandWingChange(args.split(" "));
                CommandWingToggle(args.split(" "));
                CommandWingFlapCountChange(args.split(" "));
                CommandWingFlapDelayChange(args.split(" "));
                CommandWingDelete(args.split(" "));
                CommandWingHelp(args.split(" "));
                //Profile Commands
                CommandProfile(args.split(" "));
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

function CommandCum(argsList)
    {
        let cum = argsList[0];
        let cumto = argsList.slice(1);

        if (!cum) {
            ActivityOrgasmRuined = false;
            ActivityOrgasmStart(Player);
        }
    }
    CommandCombine([
        {
            Tag: 'cum',
            Description: "cum instantly",
            AutoComplete: (words) => {

                 if (words.length < 1) {
                    window.ChatRoomSendLocal("<style type='text/css'> .bcar_hint {display: flex; flex-flow: column wrap; overflow: auto; height: 5em; background: #000452; font-size: 1em; } .bcar_hint div {	margin:0 0.5ex; }</style><div class='bcar_hint'><div><b>" + subcommands.join("</b></div><div><b>") + "</b></div></div>", 20000)
                }
                 if (words.length > 1) { /*No output, because user has entered multiple words, and we can only complete the last one*/ }
                 if (words.length === 1) {
                    window.ElementValue("InputChat", "/cum" + matches[0])

                }

             },
            Action: args => {
                CommandCum(args.split(" "));
            }
        }
    ])

function CommandLeaveChatRoom(argsList)
    {
        let leave = argsList[0];
        let leaveto = argsList.slice(1);

        if (!leave) {
            if (CurrentScreen == "ChatRoom") {
                ElementRemove("FriendList");
                ElementRemove("InputChat");
                ElementRemove("TextAreaChatLog");
                ChatRoomSetLastChatRoom("");
                ServerSend("ChatRoomLeave", "");
                CommonSetScreen("Online", "ChatSearch");
                OnlineGameName = "";};
            if (CurrentScreen == "Cell") {
                PrisonLeaveCell();};
        }
    }
    CommandCombine([
        {
            Tag: 'leave',
            Description: "leave the room",
            AutoComplete: (words) => {

                 if (words.length < 1) {
                    window.ChatRoomSendLocal("<style type='text/css'> .bcar_hint {display: flex; flex-flow: column wrap; overflow: auto; height: 5em; background: #000452; font-size: 1em; } .bcar_hint div {	margin:0 0.5ex; }</style><div class='bcar_hint'><div><b>" + subcommands.join("</b></div><div><b>") + "</b></div></div>", 20000)
                }
                 if (words.length > 1) { /*No output, because user has entered multiple words, and we can only complete the last one*/ }
                 if (words.length === 1) {
                    window.ElementValue("InputChat", "/leave" + matches[0])

                }

             },
            Action: args => {
                CommandLeaveChatRoom(args.split(" "));
            }
        }
    ])

function CommandSafeword(argsList)
    {
        let safewordspecific = argsList[0];
        let safewordspecificto = argsList.slice(1);

        if (!safewordspecific) {
            ChatRoomSendLocal(
	        "<p style='background-color:#000452;color:#EEEEEE'>Bondage Club Auto React +: You have 5 seconds to click  on target, select area. If successful, will be returned. If not, retry.</p>"
	    );
            setTimeout(function() {
                if (CurrentCharacter !== Player) {
                    ServerSend("ChatRoomChat", {
                        Content: "Bondage Club Auto React +: " + Player.Name + " has removed " + InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name).Asset.Name + " on you via console. If this is undesired, blacklist player.",
                        Type: "Whisper",
                        Target: CurrentCharacter.MemberNumber
                    })
                };
                CurrentCharacter.Appearance = CurrentCharacter.Appearance.filter(x => (CurrentCharacter.FocusGroup && CurrentCharacter.FocusGroup.Name) ? x.Asset.Group.Name !=
                CurrentCharacter.FocusGroup.Name : true);
                ChatRoomCharacterUpdate(CurrentCharacter);
                DialogLeave();
            }, 5000);
        }
    }
    CommandCombine([
        {
            Tag: 'safewordspecific',
            Description: "frees you from a specific item",
            AutoComplete: (words) => {

                 if (words.length < 1) {
                    window.ChatRoomSendLocal("<style type='text/css'> .bcar_hint {display: flex; flex-flow: column wrap; overflow: auto; height: 5em; background: #000452; font-size: 1em; } .bcar_hint div {	margin:0 0.5ex; }</style><div class='bcar_hint'><div><b>" + subcommands.join("</b></div><div><b>") + "</b></div></div>", 20000)
                }
                 if (words.length > 1) { /*No output, because user has entered multiple words, and we can only complete the last one*/ }
                 if (words.length === 1) {
                    window.ElementValue("InputChat", "/safewordspecific" + matches[0])

                }

             },
            Action: args => {
                CommandSafeword(args.split(" "));
            }
        }
    ])


function CommandWardrobe(argsList)
    {
        let wardrobe = argsList[0];
        let wardrobeto = argsList.slice(1);

        if (!wardrobe) {
            ChatRoomClickCharacter(Player);
            DialogChangeClothes();
        }
    }
    CommandCombine([
        {
            Tag: 'wardrobe',
            Description: "opens your wardrobe",
            AutoComplete: (words) => {

                 if (words.length < 1) {
                    window.ChatRoomSendLocal("<style type='text/css'> .bcar_hint {display: flex; flex-flow: column wrap; overflow: auto; height: 5em; background: #000452; font-size: 1em; } .bcar_hint div {	margin:0 0.5ex; }</style><div class='bcar_hint'><div><b>" + subcommands.join("</b></div><div><b>") + "</b></div></div>", 20000)
                }
                 if (words.length > 1) { /*No output, because user has entered multiple words, and we can only complete the last one*/ }
                 if (words.length === 1) {
                    window.ElementValue("InputChat", "/wardrobe" + matches[0])

                }

             },
            Action: args => {
                CommandWardrobe(args.split(" "));
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


	await waitFor(() => !!w.Player?.Name && !!w.bce_initializeDefaultExpression && !!w.bce_ActivityTriggers);

    function bcarExpressions(){
        if(Player.BCAR.bcarSettings.expressionsEnable){ // load the expressions and triggers
            if (expressions_state.loaded) return // don't do anything if already loaded
            for (let name of Object.keys(BCAR_Expression_Additions)) { // we need to save the conflicting expressions to a separate place
              if (w.bce_EventExpressions[name]) {
                expressions_state.conflicts[name] = w.bce_EventExpressions[name]
              }
            }
            Object.assign(w.bce_EventExpressions, BCAR_Expression_Additions) // add BCAR+ expressions
            w.bce_ActivityTriggers.push(...TriggerAdditions) // add BCAR+ triggers
            expressions_state.loaded = true
        } else { // unload the expressions and triggers
            if (!expressions_state.loaded) return // don't do anything if not loaded
            w.bce_ActivityTriggers = w.bce_ActivityTriggers.filter(at => at.Mod !== "BCAR+") // delete BCAR+ additions from triggers
            for (let name of Object.keys(w.bce_EventExpressions)) { // delete BCAR+ additions from expressions
                if (BCAR_Expression_Additions[name]) delete w.bce_EventExpressions[name]
            }
            Object.assign(w.bce_EventExpressions, expressions_state.conflicts) // load back saved conflicts
            for (let name of Object.keys(expressions_state.conflicts)) { // clear saved conflicts
                delete expressions_state.conflicts[name]
            }
            expressions_state.loaded = false
        }
    }
    bcarExpressions()
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
