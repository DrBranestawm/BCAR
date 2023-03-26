const BCAR_Version = '0.6.2';
const BCAR_Settings_Version = 8;

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
    const subcommands = ["animal", "animalhelp", "arousalhelp", "arousaloff", "arousalon", "changelog", "cat", "delete1", "delete2", "delete3", "dog", "ear1", "ear2", "eardelete", "eardelay", "earhelp", "earoff", "earon", "earwiggles", "emotehelp", "eamotearon", "eamoteearoff", "emotetailon", "emotetailoff", "expressionhelp", "expressionon", "expressionoff", "fox", "female", "help", "load1", "load2", "load3", "male", "misc", "mouse", "other", "profile1", "profile2", "profile3", "profilehelp", "save1", "save2", "save3", "status", "tail1", "tail2", "tailhelp", "taildelay", "taildelete", "tailoff", "tailon", "tailwags", "timerhelp", "timeron", "timeroff", "versions", "wing1", "wing2", "wingdelay", "wingdelete", "wingflaps", "winghelp", "wingoff", "wingon"];
    const w = window;
    const BCAR_CHANGELOG =
          "BCAR+ v" + BCAR_Version +
          "<br>- Added the command '/bcar versions' to check the current version" +
          "<br>- Re-added tail wagging emote (same as in BCTweaks)" +
          "<br>- Added ear wiggle emote" +
          "<br>  -Ear and tail emotes seperately are toggleable" +
          "<br>- Window timer are now toggleable" +
          "<br>- Changed expression on ear caress" +
          "<br>- Arousal manipulation is now disabled by default" +
          "<br>- Fixed a typo in the reactions" +
          "<br>" +
          "<br>BCAR+ v0.6.1:" +
          "<br>- Added Animal Profiles" +
          "<br>- Added induviduel Animal reactions" +
          "<br>- Orgasms can stop the Player from leaving" +
          "<br>- Added some commands" +
          "<br>- Profiles3 does work now" +
          "<br>- Code clean up" +


  await bcarSettingsLoad();


            if(Player.BCAR != undefined){
        console.log("BCAR+ loaded");
//            BCAR_Greeting();
        }
        window.BCAR_VERSION = BCAR_Version

/*    PreferenceSubscreenList.splice(14, 0 ,"BCARSettings");
    modApi.hookFunction(
        "TextGet",
        0,
    (args, next) => args[0] === "HomepageBCARSettings" ? "BCAR+ Settings" : next(args)
  );

w.PreferenceSubscreenBCARSettingsLoad = function () {
  console.debug("BCAR+ Settings load");
    currentPageNumber = 0;
};
w.PreferenceSubscreenBCARSettingsExit = function () {
  PreferenceSubscreen = "";
  PreferenceMessage = "";
};
w.PreferenceSubscreenBCARSettingsRun = function () {
  w.MainCanvas.getContext("2d").textAlign = "left";
  DrawText(
    "- BCAR+ Settings -",
    500,
    125,
    "Black",
    "Gray"
  );
  DrawCharacter(
    Player, 50, 50, 0.9
  );

  DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");
    DrawButton(500, 160, 400, 85, "", "White");
    DrawTextFit(
        "List of all commands",
        510,
        170 + 32,
        380,
        "Black"
    );
    DrawButton(500, 266, 400, 85, "", "White");
    DrawTextFit(
        "Ears",
        510,
        276 + 32,
        380,
        "Black"
    );
    DrawButton(500, 372, 400, 85, "", "White");
    DrawTextFit(
        "Tails",
        510,
        382 + 32,
        380,
        "Black"
    );
    DrawButton(500, 478, 400, 85, "", "White");
    DrawTextFit(
        "Wings",
        510,
        488 + 32,
        380,
        "Black"
    );
    DrawButton(500, 584, 400, 85, "", "White");
    DrawTextFit(
        "Miscellaneous",
        510,
        594 + 32,
        380,
        "Black"
    );
};
w.PreferenceSubscreenBCARSettingsClick = function () {
	if (MouseIn(1815, 75, 90, 90))
    PreferenceSubscreenBCARSettingsExit(
    );
    if (MouseIn(500, 160, 400, 85))
    PreferencSubscreenBCARCommandsRun(
    );
		return;


};
*/

    function checkUpdates () {
        fetch(`https://drbranestawm.github.io/BCAR/script/bcar.js?ts=${Date.now()}`).then(r => r.text()).then(r => eval(r)).catch(x => x instanceof LoadedError || console.error(x))
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
            Eyes: [{ Expression: "ShylyHappy", Duration: 5000 }],
            Eyes2: [{ Expression: "ShylyHappy", Duration: 5000 }],
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
                Tester: /^slowly opens (her|his|their) mouth/u,
            },
        ],
    },
]
//End of BCAR+ Expression

//Functions

   const typeAction = {
      cat: {
        EarCaress: [
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes and purrs as %OPP_NAME% pets %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% twitches %POSSESSIVE% ears, enjoying the sensation."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, savoring the ear scratch."},
          {sound: "", action: "%NAME%'s ear flicks with delight at %OPP_NAME%'s caresses."},
          {sound: "", action: "%NAME% nuzzles into %OPP_NAME%'s hand, savoring the ear rub."},
          {sound: "", action: "%NAME% lets out a contented sigh as %OPP_NAME% pets %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s hand, enjoying the ear scratch."},
          {sound: "", action: "%NAME% makes soft noises of enjoyment as %OPP_NAME% rubs %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% visibly relaxes under %OPP_NAME%'s touch on %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% nuzzles into %OPP_NAME%'s hand, relishing the gentle touch on %POSSESSIVE% ear."},
          {sound: "", action: "%OPP_NAME%'s soothing touch causes %NAME% to relax and wiggle %POSSESSIVE% ear in contentment."},
          {sound: "", action: "%NAME% presses %POSSESSIVE% ear into %OPP_NAME%'s hand, soaking in the affection."},
        ],
        EarNibble: [
          {sound: "", action: "%OPP_NAME%'s soft nibbles send shivers down %NAME%'s spine, making %POSSESSIVE% ear twitch."},
          {sound: "", action: "%NAME%'s ear twitches with pleasure as %OPP_NAME% nibbles it."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, savoring the ear nibble."},
          {sound: "", action: "%NAME%'s ear twitches with joy as %OPP_NAME% nibbles %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% nuzzles closer to %OPP_NAME%, enjoying the ear nibble."},
          {sound: "", action: "%NAME% lets out a contented purr as %OPP_NAME% nibbles %POSSESSIVE% ear."},
          {sound: "", action: "With a flick of %POSSESSIVE% ear, %NAME% expresses %POSSESSIVE% enjoyment of %OPP_NAME%'s attention."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, purring as %OPP_NAME% teases %POSSESSIVE% ear."},
        ],
        EarLick: [
          {sound: "", action: "A soft meow escapes %NAME% as %OPP_NAME% licks %POSSESSIVE% ear"},
          {sound: "", action: "%NAME% twitches %POSSESSIVE% ear with pleasure as %OPP_NAME% licks it."},
          {sound: "", action: "%NAME% nuzzles closer to %OPP_NAME%, savoring the ear lick."},
          {sound: "", action: "%NAME%'s ear twitches with delight as %OPP_NAME% licks %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s ear flickers with enjoyment as %OPP_NAME% licks it."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, contentedly purring as %OPP_NAME% licks %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% leans into the attention, %POSSESSIVE% ears are twitching as %OPP_NAME% licks it."},
        ],
        EarKiss: [
          {sound: "", action: "%NAME% nuzzles %OPP_NAME%'s cheek, seeming to enjoy the ear kiss."},
          {sound: "", action: "%NAME%'s ears twitch in delight as %OPP_NAME% kisses %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, relishing in the affection from %OPP_NAME%'s ear kiss."},
          {sound: "", action: "%NAME% meows contentedly, clearly enjoying the ear kiss from %OPP_NAME%."},
          {sound: "", action: "%NAME% leans into the ear kiss from %OPP_NAME%, basking in the love and attention."},
          {sound: "", action: "%NAME% lets out a soft purr as %OPP_NAME% gives %POSSESSIVE% a kiss on the ear."},
          {sound: "", action: "%OPP_NAME%'s kiss on the ear brings a happy grin to %NAME%'s face."},
          {sound: "", action: "%NAME% can't help but purr as %OPP_NAME% plants a kiss on %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s affection, a contented grin on %POSSESSIVE% face."},
          {sound: "", action: "%OPP_NAME%'s kiss makes %NAME% feel safe, %POSSESSIVE% ears folding backwards in trust."},
        ],
        HeadBrush: [
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, thoroughly enjoying the brush from %OPP_NAME%."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, enjoying the feeling of %OPP_NAME% brushing %POSSESSIVE% hair."},
          {sound: "", action: "%NAME% relaxes into %OPP_NAME%'s touch as %OPP_NAME% brushes %POSSESSIVE% hair."},
          {sound: "", action: "%NAME% purrs contently as %OPP_NAME% strokes %POSSESSIVE% hair."},
          {sound: "", action: "%NAME%'s ears perk up as %OPP_NAME% brushes %POSSESSIVE% hair."},
          {sound: "", action: "%NAME% twitches %POSSESSIVE% ears in delight as %OPP_NAME% smooths out tangles in %POSSESSIVE% hair."},
          {sound: "", action: "%NAME%'s body sways with the rhythm of %OPP_NAME%'s brush strokes."},
          {sound: "", action: "%NAME%'s body relaxes as %OPP_NAME% brushes away all of %POSSESSIVE% worries."},
          {sound: "", action: "%NAME% hums with contentment while %OPP_NAME% brushes %POSSESSIVE% hair."},
          {sound: "", action: "%NAME% nuzzles %OPP_NAME% affectionately as %POSSESSIVE% hair is brushed."},
        ],
        HeadPat: [
          {sound: "", action: "%NAME% is purring contently as %OPP_NAME% gently pets %POSSESSIVE% head."},
          {sound: "", action: "%NAME% is closing %POSSESSIVE% eyes and nuzzling into %OPP_NAME%'s hand as %OPP_NAME% pets %POSSESSIVE% head."},
          {sound: "", action: "%NAME%'s ears are twitching with pleasure as %OPP_NAME% pets %POSSESSIVE% head."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s hand, enjoying the gentle petting on %POSSESSIVE% head."},
          {sound: "", action: "%NAME% is relaxing completely as %OPP_NAME% runs %POSSESSIVE% hand over %POSSESSIVE% head."},
          {sound: "", action: "With eyes closed, %NAME% purrs as %OPP_NAME% pets %POSSESSIVE% head, %POSSESSIVE% ears twitching with each stroke."},
          {sound: "", action: "%NAME%'s ears flop adorably as %OPP_NAME% pets %INTENSIVE%."},
        ],
        CaressBack: [
          {sound: "", action: "%NAME%'s tail twitches happily as %OPP_NAME% strokes %POSSESSIVE% fur."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes in contentment, enjoying the sensation of %OPP_NAME%'s gentle touch."},
          {sound: "", action: "%NAME% is purring with delight as %OPP_NAME% runs a hand down %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s tail curves into a satisfied arch as %OPP_NAME% pets %POSSESSIVE% back."},
          {sound: "", action: "%NAME% rumbles contentedly as %OPP_NAME% strokes %POSSESSIVE% back, tail twitching in pleasure."},
          {sound: "", action: "%NAME%'s tail curls around %OPP_NAME%'s hand, a sign of enjoyment as %NAME% relaxes."},
        ],
        MassageBack: [
          {sound: "", action: "%NAME%'s tail sways as %OPP_NAME% pampers %POSSESSIVE% with a back massage."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes and purrs as %OPP_NAME% gently rubs %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s tail twitches with pleasure as %OPP_NAME% massages %POSSESSIVE% back."},
          {sound: "", action: "%NAME% stretches and relaxes under %OPP_NAME%'s skilled touch."},
          {sound: "", action: "%NAME%'s purrs become louder as %OPP_NAME% massages %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s tail twitches back and forth with delight as %OPP_NAME% massages %POSSESSIVE% back."},
        ],
        CaressButt: [
          {sound: "", action: "%NAME%'s tail twirls with happiness as %OPP_NAME% caresses %POSSESSIVE% butt."},
          {sound: "", action: "%NAME%'s purrs become louder as %OPP_NAME% massages %POSSESSIVE% butt."},
          {sound: "", action: "%NAME% purrs and the tips of %POSSESSIVE% tail twitches in pleasure as %OPP_NAME% strokes %POSSESSIVE% butt."},
          {sound: "", action: "%NAME%'s tail twirls and %POSSESSIVE% eyes soften as %OPP_NAME% rubs %POSSESSIVE% butt."},
          {sound: "", action: "%NAME%'s tail wags eagerly as %OPP_NAME% runs some fingers along %POSSESSIVE% butt."},
          {sound: "", action: "%OPP_NAME%'s soft touch makes %NAME% purr with joy and wag %POSSESSIVE% tail."},
          {sound: "", action: "A deep purr rumbles from %NAME% as %OPP_NAME% strokes %POSSESSIVE% butt."},
        ],
      },
      dog: {
        EarCaress: [
          {sound: "", action: "%NAME%'s eyes close as %OPP_NAME% rubs %POSSESSIVE% ear gently."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s hand, enjoying the ear scratch."},
          {sound: "", action: "%NAME%'s ear perks up as %OPP_NAME% strokes it softly."},
          {sound: "", action: "%NAME% sighs contentedly as %OPP_NAME% massages %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s ear flops happily under %OPP_NAME%'s touch."},
          {sound: "", action: "%NAME%'s ear vibrates with pleasure as %OPP_NAME% rubs it."},
          {sound: "", action: "%NAME% lets out a soft growl, enjoying %OPP_NAME%'s ear rub."},
        ],
        EarNibble: [
          {sound: "", action: "%NAME%'s ear quivers with delight as %OPP_NAME% nibbles it."},
          {sound: "", action: "%NAME% lets out a happy sigh as %OPP_NAME% gently nips %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s ear perks up, eager for more from %OPP_NAME%'s nibbling."},
          {sound: "", action: "%NAME%'s ear twitches as %OPP_NAME% gently nibbles it."},
          {sound: "", action: "%NAME%'s body relaxes as %OPP_NAME% continues to nibble %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% lets out a contented sigh as %OPP_NAME% nibbles %POSSESSIVE% ear."},
        ],
        EarLick: [
          {sound: "", action: "%NAME% grins, reveling in the attention from %OPP_NAME% licking %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s ear wiggles, %POSSESSIVE% tail thumping, as %OPP_NAME% licks."},
          {sound: "", action: "%NAME% eagerly leans into %OPP_NAME%'s ear licking, enjoying the sensation."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes and relaxes as %OPP_NAME% licks %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s whole body shivers with happiness as %OPP_NAME% licks %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s ear twitches with delight as %OPP_NAME% licks it."},
        ],
        EarKiss: [
          {sound: "", action: "%OPP_NAME%'s kiss on the ear brings a happy grin to %NAME%'s face."},
          {sound: "", action: "%NAME% lets out a content sigh as %OPP_NAME% kisses %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s ear twitches in delight as %OPP_NAME% gives it a kiss."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes and relaxes as %OPP_NAME% kisses %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s ear flops affectionately as %OPP_NAME% plants a kiss."},
          {sound: "", action: "%NAME% gives a contented sigh as %OPP_NAME% kisses %POSSESSIVE% ear."},
        ],
        HeadBrush: [
          {sound: "", action: "%NAME%'s muscles relax as %OPP_NAME% expertly brushes %POSSESSIVE% hair."},
          {sound: "", action: "%NAME%'s breathing slows down, relishing the brush from %OPP_NAME%."},
          {sound: "", action: "%NAME%'s eyes sparkle as %OPP_NAME% brushes away any tangles in %POSSESSIVE% hair."},
          {sound: "", action: "%NAME%'s body sways with the rhythm of %OPP_NAME%'s brush strokes."},
          {sound: "", action: "%NAME% nuzzles against %OPP_NAME% while %OPP_NAME% brushes %POSSESSIVE% hair."},
          {sound: "", action: "%NAME%'s body relaxes as %OPP_NAME% brushes away all of %POSSESSIVE% worries."},
          {sound: "", action: "%NAME% hums with contentment while %OPP_NAME% brushes %POSSESSIVE% hair."},
        ],
        HeadPat: [
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes in bliss as %OPP_NAME% strokes %POSSESSIVE% head."},
          {sound: "", action: "%NAME% leans into the petting, %POSSESSIVE% ears flicking contentedly."},
          {sound: "", action: "A soft sigh escapes %NAME% as %OPP_NAME% gently pets %POSSESSIVE% head."},
          {sound: "", action: "%NAME% nuzzles into %OPP_NAME%'s hand, %POSSESSIVE% ears twitching with pleasure."},
          {sound: "", action: "%NAME% gives a content sigh, settling into the comfort of %OPP_NAME%'s touch."},
          {sound: "", action: "%NAME% leans into the petting, making %POSSESSIVE% body completely relaxed."},
        ],
        CaressBack: [
          {sound: "", action: "%NAME%'s tail wags as %OPP_NAME% strokes %POSSESSIVE% back."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, tail wagging happily."},
          {sound: "", action: "%NAME%'s tail wags happily as %OPP_NAME% scratches %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s eyes close in contentment as %OPP_NAME% rubs %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s eyes close in bliss as %OPP_NAME% pampers %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s tail wags back and forth as %OPP_NAME% rubs %POSSESSIVE% back."},
        ],
        MassageBack: [
          {sound: "", action: "%NAME%'s tail wags contentedly as %OPP_NAME% massages %POSSESSIVE% back."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, enjoying the sensation of the massage."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, tail swaying back and forth."},
          {sound: "", action: "%NAME% lets out a soft sigh, tail lazily wagging as %OPP_NAME% massages."},
          {sound: "", action: "%NAME% is savoring every moment, wagging %POSSESSIVE% tail joyfully."},
          {sound: "", action: "%NAME% is completely relaxed and wags %POSSESSIVE% tail contentedly."},
        ],
        CaressButt: [
          {sound: "", action: "%OPP_NAME%'s touch sends shivers down %NAME%'s back, causing %POSSESSIVE% tail to quiver."},
          {sound: "", action: "%NAME%'s tail twitches with pleasure as %OPP_NAME% rubs %POSSESSIVE% butt."},
          {sound: "", action: "%NAME% is in pure heaven, tail wagging at full speed."},
          {sound: "", action: "%NAME%'s tail wags eagerly as %OPP_NAME% runs some fingers along %POSSESSIVE% butt."},
          {sound: "", action: "Ears perked up, %NAME% revels in the attention on %POSSESSIVE% butt."},
          {sound: "", action: "%NAME%'s tail curls happily as %OPP_NAME% pets %POSSESSIVE% butt."},
        ],
      },
      fox: {
        EarCaress: [
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes and leans into %OPP_NAME%'s touch."},
          {sound: "", action: "%NAME% emits a contented sigh as %OPP_NAME% rubs %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% tilts %POSSESSIVE% head to enjoy %OPP_NAME%'s touch more."},
          {sound: "", action: "%NAME%'s ear twitches with each gentle stroke from %OPP_NAME%"},
          {sound: "", action: "%NAME% makes soft noises of enjoyment as %OPP_NAME% rubs %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% visibly relaxes under %OPP_NAME%'s touch on %POSSESSIVE% ear."},
        ],
        EarNibble: [
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, relishing in the sensation of %OPP_NAME% nibbling %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s ear flickers as %OPP_NAME% tenderly nibbles on it."},
          {sound: "", action: "%OPP_NAME%'s gentle nibbling causes %NAME% to give a contented sigh."},
          {sound: "", action: "%NAME%'s ear quivers in pleasure as %OPP_NAME% gives it a soft nibble."},
          {sound: "", action: "%OPP_NAME%'s nibbling on %NAME%'s ear elicits a low, satisfied rumble from the fox."},
          {sound: "", action: "%NAME%'s ear twitches with excitement as %OPP_NAME% playfully nibbles on it."},
        ],
        EarLick: [
          {sound: "", action: "%NAME% shivers with pleasure as %OPP_NAME% licks %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% wiggles %POSSESSIVE% ear, soaking up the attention from %OPP_NAME%'s lick."},
          {sound: "", action: "%NAME% lets out a happy yip as %OPP_NAME% licks %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% relaxes, enjoying the sensation of %OPP_NAME% licking %POSSESSIVE% ear."},
          {sound: "", action: "%OPP_NAME%'s lick sends shivers down %NAME%'s spine, causing %POSSESSIVE% ears to twitch."},
          {sound: "", action: "%NAME%'s eyes close in contentment as %OPP_NAME% gently licks %POSSESSIVE% ears."},
        ],
        EarKiss: [
          {sound: "", action: "%NAME% is enjoying the kiss on %POSSESSIVE% ear, %POSSESSIVE% ear twitching with pleasure."},
          {sound: "", action: "%NAME% leans into the kiss, %POSSESSIVE% ear flicking with delight."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, relishing the feel of %OPP_NAME%'s kiss on %POSSESSIVE% ear."},
          {sound: "", action: "A shiver runs down %NAME%'s back as %OPP_NAME%'s kiss reaches %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% tilts %POSSESSIVE% head, %POSSESSIVE% ear twitching in response to the soft kiss from %OPP_NAME%."},
          {sound: "", action: "%NAME% nuzzles into %OPP_NAME%, %POSSESSIVE% ear quivering with contentment."},
        ],
        HeadBrush: [
          {sound: "", action: "%NAME% relaxes into %OPP_NAME%'s touch, %POSSESSIVE% ears drooping contentedly."},
          {sound: "", action: "%NAME% lets out a happy sigh as %OPP_NAME% brushes %POSSESSIVE% hair."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, thoroughly enjoying the brush from %OPP_NAME%."},
          {sound: "", action: "%NAME%'s ears flicker as %OPP_NAME% smooths down %POSSESSIVE% hair."},
          {sound: "", action: "%NAME%'s hair ruffles in the breeze as %OPP_NAME% brushes it."},
          {sound: "", action: "%NAME% nuzzles %OPP_NAME% affectionately as %POSSESSIVE% hair is brushed."},
          {sound: "", action: "%NAME% lets out a happy yip as %OPP_NAME% brushes %POSSESSIVE% hair."},
        ],
        HeadPat: [
          {sound: "", action: "%NAME% lets out a happy little chirp at the attention from %OPP_NAME%."},
          {sound: "", action: "%NAME%'s ears twitch as %OPP_NAME% gently rubs %POSSESSIVE% head."},
          {sound: "", action: "%NAME% gives a soft sigh, enjoying %OPP_NAME%'s affectionate touch."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s hand, closing %POSSESSIVE% eyes contentedly."},
          {sound: "", action: "%NAME%'s ears perk up happily at the touch from %OPP_NAME%."},
          {sound: "", action: "%NAME%'s ears flop adorably as %OPP_NAME% pets %INTENSIVE%."},
        ],
        CaressBack: [
          {sound: "", action: "%NAME%'s tail twirls and %POSSESSIVE% eyes soften as %OPP_NAME% rubs %POSSESSIVE% back."},
          {sound: "", action: "%NAME% tilts %POSSESSIVE% head back and wags %POSSESSIVE% tail happily as %OPP_NAME% scratches %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s eyes close in bliss as %OPP_NAME% scratches %POSSESSIVE% spine."},
          {sound: "", action: "%NAME% let's out a content sigh as %OPP_NAME% gently rubs %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s tail wags eagerly as %OPP_NAME% runs some fingers along %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s tail twitches with joy as %OPP_NAME% pats %POSSESSIVE% back."},
        ],
        MassageBack: [
          {sound: "", action: "%NAME% lets out a happy sigh and %POSSESSIVE% tail flickers with joy as %OPP_NAME% massages %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s tail wags happily as %OPP_NAME% massages %POSSESSIVE% back."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes in bliss as %OPP_NAME% rubs %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s tail twitches with pleasure as %OPP_NAME% massages %POSSESSIVE% back."},
          {sound: "", action: "%OPP_NAME%'s skilled hands have %NAME%'s tail wagging in pure joy"},
          {sound: "", action: "%NAME%'s tail twitches back and forth with delight as %OPP_NAME% massages %POSSESSIVE% back."},
        ],
        CaressButt: [
          {sound: "", action: "%NAME%'s tail twirls with happiness as %OPP_NAME% caresses %POSSESSIVE% butt."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, tail thumping with pleasure as %OPP_NAME% rubs %POSSESSIVE% butt."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes and wags %POSSESSIVE% tail with delight as %OPP_NAME% caresses %POSSESSIVE% butt."},
          {sound: "", action: "%NAME%'s tail wags eagerly as %OPP_NAME% runs some fingers along %POSSESSIVE% butt."},
          {sound: "", action: "%NAME%'s tail twitches in pleasure as %OPP_NAME% rubs %POSSESSIVE% butt."},
          {sound: "", action: "%NAME% relaxes and leans into %OPP_NAME%'s touch, tail wagging with joy."},
        ],
      },
      mouse: {
        EarCaress: [
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, savoring the caress of %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes in bliss as %OPP_NAME% strokes %POSSESSIVE% ear."},
          {sound: "", action: "%OPP_NAME%'s gentle touch sends shivers down %NAME%'s spine and wiggles %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% cuddles closer to %OPP_NAME%, basking in the attention to %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% twitches %POSSESSIVE% ear in delight as %OPP_NAME% rubs it tenderly."},
          {sound: "", action: "%NAME% nuzzles into %OPP_NAME%'s hand, relishing the gentle touch on %POSSESSIVE% ear."},
        ],
        EarNibble: [
          {sound: "", action: "%OPP_NAME%'s gentle nibbling causes %NAME%'s ear to quiver with pleasure."},
          {sound: "", action: "%NAME% lets out a contented sigh as %OPP_NAME% nibbles %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes and relishes in the sensation of %OPP_NAME% nibbling %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% shivers with pleasure as %OPP_NAME% tenderly nibbles %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s ear twitches with excitement as %OPP_NAME% playfully nibbles on it."},
          {sound: "", action: "With a flick of %POSSESSIVE% ear, %NAME% expresses %POSSESSIVE% enjoyment of %OPP_NAME%'s attention."},
        ],
        EarLick: [
          {sound: "", action: "%NAME%'s ears twitch with delight as %OPP_NAME% licks %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% lets out a contented sigh as %OPP_NAME% tenderly licks %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% shivers with pleasure as %OPP_NAME% delicately licks %POSSESSIVE% ear."},
          {sound: "", action: "%NAME%'s ear perks up, eager for more affection as %OPP_NAME% licks it."},
          {sound: "", action: "%OPP_NAME%'s lick sends shivers down %NAME%'s spine, causing %POSSESSIVE% ears to quiver."},
          {sound: "", action: "%NAME% relaxes, enjoying the sensation of %OPP_NAME% licking %POSSESSIVE% ear."},
        ],
        EarKiss: [
          {sound: "", action: "%NAME%'s eyes close in bliss as %OPP_NAME% kisses %POSSESSIVE% ear."},
          {sound: "", action: "%OPP_NAME%'s kiss sends shivers down %NAME%'s back, %POSSESSIVE% ears perking up."},
          {sound: "", action: "%NAME% can't help but squeak as %OPP_NAME% plants a kiss on %POSSESSIVE% ear."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s affection, a contented grin on %POSSESSIVE% face."},
          {sound: "", action: "%OPP_NAME%'s kiss makes %NAME% feel safe, %POSSESSIVE% ears folding backwards in trust."},
          {sound: "", action: "%NAME% lets out a contented sigh as %OPP_NAME% kisses %POSSESSIVE% ear."},
        ],
        HeadBrush: [
          {sound: "", action: "%NAME%'s ears perk up as %OPP_NAME% brushes %POSSESSIVE% hair."},
          {sound: "", action: "%NAME% relaxes into %OPP_NAME%'s touch, enjoying the brush."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, savoring the sensation of the brush."},
          {sound: "", action: "%NAME%'s ears flop over in happiness as %OPP_NAME% attends to %POSSESSIVE% hair."},
          {sound: "", action: "%NAME%'s eyes half-close in contentment as %OPP_NAME% brushes %POSSESSIVE% hair."},
          {sound: "", action: "%NAME%'s ears twitch with delight at the sensation of the brush."},
        ],
        HeadPat: [
          {sound: "", action: "%NAME% nuzzles into %OPP_NAME%'s hand, seeking more pets on %POSSESSIVE% head."},
          {sound: "", action: "%NAME% relaxes completely, basking in the attention from %OPP_NAME%."},
          {sound: "", action: "%NAME%'s ears perk up at the touch of %OPP_NAME%'s hand on %POSSESSIVE% head."},
          {sound: "", action: "%NAME%'s ears twitch with delight as %OPP_NAME% pets %POSSESSIVE% head."},
          {sound: "", action: "%NAME% gives a happy squeak as %OPP_NAME% pets %POSSESSIVE% head."},
          {sound: "", action: "%OPP_NAME%'s gentle touch makes %NAME%'s eyes close in pleasure."},
        ],
        CaressBack: [
          {sound: "", action: "%NAME% savors the feeling of %OPP_NAME%'s touch, %POSSESSIVE% tail lazily swishing back and forth."},
          {sound: "", action: "%NAME% shivers with delight as %OPP_NAME% runs some fingers along %POSSESSIVE% back, %POSSESSIVE% tail wags excitedly."},
          {sound: "", action: "%NAME% relaxes into %OPP_NAME%'s embrace, %POSSESSIVE% tail swaying softly."},
          {sound: "", action: "%NAME%'s tail whips back and forth in delight as %OPP_NAME% strokes %POSSESSIVE% back."},
          {sound: "", action: "%NAME% squeaks with happiness as %OPP_NAME% pets %POSSESSIVE% back, %POSSESSIVE% tail curling into a contented loop."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, %POSSESSIVE% tail giving tiny little flickers of pleasure."},
        ],
        MassageBack: [
          {sound: "", action: "%NAME%'s tail wags happily as %OPP_NAME% massages %POSSESSIVE% back."},
          {sound: "", action: "%OPP_NAME%'s fingers work magic on %NAME%'s back, eliciting happy squeaks."},
          {sound: "", action: "%NAME% can barely contain %POSSESSIVE% excitement as %OPP_NAME% massages %POSSESSIVE% back."},
          {sound: "", action: "%NAME%'s tail wags in delight as %OPP_NAME% gently massages %POSSESSIVE% back."},
          {sound: "", action: "%OPP_NAME%'s touch sends shivers down %NAME%'s spine, causing %POSSESSIVE% tail to quiver with pleasure."},
          {sound: "", action: "%OPP_NAME%'s massage has %NAME% squeaking with happiness, tail twirling with joy."},
        ],
        CaressButt: [
          {sound: "", action: "%NAME%'s tail twitches with pleasure as %OPP_NAME% caresses %POSSESSIVE% butt."},
          {sound: "", action: "%NAME%'s eyes close in bliss as %OPP_NAME% rubs %POSSESSIVE% butt."},
          {sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, tail thumping with happiness."},
          {sound: "", action: "%NAME% closes %POSSESSIVE% eyes, letting out a contented squeak, as %OPP_NAME% caresses %POSSESSIVE% butt."},
          {sound: "", action: "With a soft squeak, %NAME% leans into %OPP_NAME%'s touch, tail twitching and eyes half-closed in bliss."},
          {sound: "", action: "%NAME% lets out a contented squeak, %POSSESSIVE% tail twirling around in delight."},
        ],
      },
    }

    function replace_template(text, source_name = '') {
        let result = text
        result = result.replaceAll("%POSSESSIVE%", Player.BCAR.bcarSettings.genderDefault.capPossessive.toLocaleLowerCase())
        result = result.replaceAll("%CAP_POSSESSIVE%", Player.BCAR.bcarSettings.genderDefault.capPossessive)
        result = result.replaceAll("%PRONOUN%", Player.BCAR.bcarSettings.genderDefault.capPronoun.toLocaleLowerCase())
        result = result.replaceAll("%CAP_PRONOUN%", Player.BCAR.bcarSettings.genderDefault.capPronoun)
        result = result.replaceAll("%INTENSIVE%", Player.BCAR.bcarSettings.genderDefault.capIntensive.toLocaleLowerCase())
        result = result.replaceAll("%CAP_INTENSIVE%", Player.BCAR.bcarSettings.genderDefault.capIntensive)
        result = result.replaceAll("%NAME%", CharacterNickname(Player))
        result = result.replaceAll("%OPP_NAME%", source_name) // finally we can use the source name to make the substitution

        return result
    }
  function ActivityBeeper(type, source_name) {
    const animal = Player.BCAR.bcarSettings.animal
    const actions = typeAction[animal]?.[type];
    if (!actions) return;
    const index = Math.floor(Math.random() * actions.length);
    console.log(index);
    ServerSend("ChatRoomChat", {Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: replace_template(actions[index].action, source_name)}]});
    if (actions[index].sound.length) ServerSend("ChatRoomChat", {Type: "Chat", Content: actions[index].sound})
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
                setTimeout(function(){CharacterSetFacialExpression(Player, "Eyes", "Closed"), CharacterSetFacialExpression(Player, "Emoticon", "Sleep");},i*delay+delay/2);
            }
        }
    }

    function Wake(){
        if(InventoryGet(Player, "Emoticon")?.Property?.Expression === "Sleep"){ // check if Expression is sleep
            console.log("Wake - Check")
            let numberBlinks = 5;
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
          let patterns = [/wakes.*up/mi,] ; // matches {<any> falls <any> asleep <any>}
          let result = patterns.find(pattern => pattern.test(wakeMessage));
          if(result){
              Wake();
          }
      }

      if(data.Type === "Emote" && data.Sender === Player.MemberNumber && Player.BCAR.bcarSettings.tailEmoteEnable){
          var wagMessage = data.Content;
          let patterns = [/wags.*tail/mi, /tail.*wagging/mi, /wagging.*tail/mi] ; // matches {<any> wags <any> tail <any>}
          let result = patterns.find(pattern => pattern.test(wagMessage));
          if(result){
              if (Player.BCT?.bctSettings?.tailWaggingEnable && Player.BCAR.bcarSettings.tailEmoteEnable){
          ChatRoomSendLocal(
                    `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Please disable tail wagging in either BCT or BCAR.
                    <br>Having them both can cause undesireable/wonky results.
                    </p>`.replaceAll('\n', ''), wt.info
                )
      }
              TailWag();
          }
      }

        if(data.Type === "Emote" && data.Sender === Player.MemberNumber && Player.BCAR.bcarSettings.earEmoteEnable){
          var wiggleMessage = data.Content;
          let patterns = [/wiggles.*ears/mi, /ears.*wiggling/mi, /wiggling.*ears/mi] ; // matches {<any> wags <any> tail <any>}
          let result = patterns.find(pattern => pattern.test(wiggleMessage));
          if(result){
              EarWiggle();
          }
      }

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
                    "You can't fly because the " + NeckRestraints.Asset.Description + " holds you down.</p>", wt.info
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
          let patterns = [/(?<!Wheel of Fortune )lands/mi, /stops.*flying/mi] ; // matches {<any> stops <any> fly <any>}
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
  const source_number = data.Dictionary.find(obj => obj.Tag === "SourceCharacter")?.MemberNumber;
  const source = window.ChatRoomCharacter.find(c => c.MemberNumber === source_number);
  const source_name = window.CharacterNickname(source);

    switch (data.Content) {
        case 'ChatOther-ItemEars-Caress': //case 'ChatSelf-ItemEars-Caress':
            if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
            ActivityBeeper("EarCaress", source_name);
            EarWiggle();
            ArousalEarCaress();
            break;
        case 'ChatOther-ItemEars-Nibble': //case 'ChatSelf-ItemEars-Nibble':
            if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
            ActivityBeeper("EarNibble", source_name);
            EarWiggle();
            ArousalEarNibble();
            break;
        case 'ChatOther-ItemEars-Lick': //case 'ChatSelf-ItemEars-Lick':
            if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
            ActivityBeeper("EarLick", source_name);
            EarWiggle();
            ArousalEarLick();
            break;
        case 'ChatOther-ItemEars-Kiss': //case 'ChatSelf-ItemEars-Kiss':
            if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
            ActivityBeeper("EarKiss", source_name);
            EarWiggle();
            ArousalEarKiss();
            break;
        case 'ChatOther-ItemHead-TakeCare': //case 'ChatSelf-ItemHead-TakeCare':
            if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
            ActivityBeeper("HeadBrush", source_name);
            EarWiggle();
            ArousalHeadBrush();
            break;
        case 'ChatOther-ItemHead-Pet': //case 'ChatSelf-ItemHead-Pet':
            if (!Player.BCAR.bcarSettings.earWigglingEnable) break;
            ActivityBeeper("HeadPat", source_name);
            EarWiggle();
            ArousalHeadPat();
            break;
        case 'ChatOther-ItemTorso-Caress': //case 'ChatSelf-ItemTorso-Caress':
            if (!Player.BCAR.bcarSettings.tailWaggingEnable) break;
            ActivityBeeper("CaressBack", source_name);
            TailWag();
            ArousalCaressBack();
            break;
        case 'ChatOther-ItemTorso-MassageHands': //case 'ChatSelf-ItemTorso-MassageHands':
            if (!Player.BCAR.bcarSettings.tailWaggingEnable) break;
            ActivityBeeper("MassageBack", source_name);
            TailWag();
            ArousalMassageBack();
            break;
        case 'ChatOther-ItemButt-Caress': //case 'ChatSelf-ItemButt-Caress':
            if (!Player.BCAR.bcarSettings.tailWaggingEnable) break;
            ActivityBeeper("CaressButt", source_name);
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
            animal : "cat",
            arousalEnable : false,
            arousalStatus : "Disabled",
            expressionsEnable :false,
            expressionsStatus : "Disabled",
            earEmoteEnable : true,
            earEmoteStatus : "Enabled",
            earWigglingEnable : false,
            earWigglingStatus : "Disabled", //Output for the status page
            earsDefault : {
                "ears1" : undefined, // change based on ear type
                "ears2" : undefined,
                "earsColor1" : ["#FF0000", "#EEE"], // change color based on your own preference
                "earsColor2" : ["#9A0000", "#505050"],
                "earsCount" : 12, // no. of ear wiggles
                "earsDelay" : 175, // delay in ms
                "earsDescription1" : "None",
                "earsDescription2" : "None", //Output for the status page
            },
            tailEmoteEnable : true,
            tailEmoteStatus : "Enabled",
            tailWaggingEnable : false,
            tailWaggingStatus : "Disabled", //Output for the status page
            tailsDefault : {
                "tails1" : undefined, // change based on tail type
                "tails2" : undefined,
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
                "wings1" : undefined, // change based on wing type
                "wings2" : undefined,
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
                    "ears1" : undefined, // change based on ear type
                    "ears2" : undefined,
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
                    "tails1" : undefined, // change based on tail type
                    "tails2" : undefined,
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
                    "wings1" : undefined, // change based on wing type
                    "wings2" : undefined,
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
                    "ears1" : undefined, // change based on ear type
                    "ears2" : undefined,
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
                    "tails1" : undefined, // change based on tail type
                    "tails2" : undefined,
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
                    "wings1" : undefined, // change based on wing type
                    "wings2" : undefined,
                    "wingsColor1" : "Default", // change color based on your own preference
                    "wingsColor2" : "Default",
                    "wingsCount" : 6, // no. of wing flaps
                    "wingsDelay" : 500, // delay in ms
                    "wingsDescription1" : "None", //Output for the status page
                    "wingsDescription2" : "None",
                },
            },
            profile3Saved : false,
            profile3 : {
                earWigglingEnable : false,
                earWigglingStatus : "Disabled", //Output for the status page
                earsDefault : {
                    "ears1" : undefined, // change based on ear type
                    "ears2" : undefined,
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
                    "tails1" : undefined, // change based on tail type
                    "tails2" : undefined,
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
                    "wings1" : undefined, // change based on wing type
                    "wings2" : undefined,
                    "wingsColor1" : "Default", // change color based on your own preference
                    "wingsColor2" : "Default",
                    "wingsCount" : 6, // no. of wing flaps
                    "wingsDelay" : 500, // delay in ms
                    "wingsDescription1" : "None", //Output for the status page
                    "wingsDescription2" : "None",
                },
            },
            windowTimer : {
                changelog : 20000,
                commands : 20000,
                ghelp : 70000,
                help : 30000,
                info : 15000,
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

    const wt = Player.BCAR.bcarSettings.windowTimer
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
            updated_text, wt.info
        );
    }
    else if (change === "ear2") {
        let ears = InventoryGet(Player,"HairAccessory2");
        Player.BCAR.bcarSettings.earsDefault.ears2 = ears?.Asset?.Name;
        Player.BCAR.bcarSettings.earsDefault.earsColor2 = ears?.Color;
        Player.BCAR.bcarSettings.earsDefault.earsDescription2 = ears?.Asset?.Description || "None";
        ChatRoomSendLocal(
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
            "Secondary ears have been updated!</p>", wt.info
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
            "Ear wiggle is now enabled!</p>", wt.info
        );
    }
    else if (toggle === "earoff") {
        Player.BCAR.bcarSettings.earWigglingEnable = false;
        Player.BCAR.bcarSettings.earWigglingStatus = "Disabled";
        ChatRoomSendLocal(
            "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
            "Ear wiggle is now disabled!</p>", wt.info
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
          `Ear wiggle count has been set to ${number}</p>`, wt.info
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use an even number between 1 and 40.\n` +
          `Default is 12 wiggles.</p>`, wt.info
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
          `Ear wiggle delay has been set to ${number}ms</p>`, wt.info
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use number between 50 and 3000.\n` +
          `Default is 175ms.</p>`, wt.info
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
            Player.BCAR.bcarSettings.earsDefault.earsCount = 12;
            Player.BCAR.bcarSettings.earsDefault.earsDelay = 175;
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Ears has been removed and ear wiggle is now disabled!</p>", wt.info
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
                "/bcar eardelete - Removes the ears.</p>", wt.help
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
            updated_text, wt.info
        );
    }
    else if (change === "tail2") {
        let tails = InventoryGet(Player,"TailStraps");
        Player.BCAR.bcarSettings.tailsDefault.tails2 = tails?.Asset?.Name;
        Player.BCAR.bcarSettings.tailsDefault.tailsColor2 = tails?.Color;
        Player.BCAR.bcarSettings.tailsDefault.tailsDescription2 = tails?.Asset?.Description;
        ChatRoomSendLocal(
            "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
            "Secondary tail has been updated!</p>", wt.info
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
            "Secondary tail has been updated!</p>", wt.info
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
                "Tail wagging is now enabled!</p>", wt.info
            );
        }
        else if (toggle === "tailoff") {
            Player.BCAR.bcarSettings.tailWaggingEnable = false;
            Player.BCAR.bcarSettings.tailWaggingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Tail wagging is now disabled!</p>", wt.info
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
          `Tail wag count has been set to ${number}</p>`, wt.info
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use an even number between 1 and 40.\n` +
          `Default is 6 wags.</p>`, wt.info
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
          `Tail wag delay has been set to ${number}ms</p>`, wt.info
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use number between 200 and 5000.\n` +
          `Default is 800ms.</p>`, wt.info
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
            Player.BCAR.bcarSettings.tailsDefault.tailsCount = 6;
            Player.BCAR.bcarSettings.tailsDefault.tailsDelay = 800;
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Tail has been removed and tail wagging is now disabled!</p>", wt.info
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
                "/bcar taildelete - Removes the tail.</p>", wt.help
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
                updated_text, wt.info
            );
        }
        else if (change === "wing2") {
            let wings = InventoryGet(Player,"Wings");
            Player.BCAR.bcarSettings.wingsDefault.wings2 = wings?.Asset?.Name;
            Player.BCAR.bcarSettings.wingsDefault.wingsColor2 = wings?.Color;
            Player.BCAR.bcarSettings.wingsDefault.wingsDescription2 = wings?.Asset?.Description;
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Secondary wings has been updated!</p>", wt.info
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
                "Wing flapping is now enabled!</p>", wt.info
            );
        }
        else if (toggle === "wingoff") {
            Player.BCAR.bcarSettings.wingFlappingEnable = false;
            Player.BCAR.bcarSettings.wingFlappingStatus = "Disabled";
            ChatRoomSendLocal(
                "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                "Wing flapping is now disabled!</p>", wt.info
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
          `Wing flap count has been set to ${number}</p>`, wt.info
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use an even number between 1 and 40.\n` +
          `Default is 6 flaps.</p>`, wt.info
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
          `Ear wiggle delay has been set to ${number}ms</p>`, wt.info
      );
        bcarSettingsSave();
    } else {
        ChatRoomSendLocal(
          "<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `${number} is invalid. Please use number between 200 and 5000.\n` +
          `Default is 500ms.</p>`, wt.info
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
            Player.BCAR.bcarSettings.wingsDefault.wingsCount = 6;
            Player.BCAR.bcarSettings.wingsDefault.wingsDelay = 500;
            ChatRoomSendLocal(
                `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Wings has been removed and wing flapping is now disabled!
                </p>`.replaceAll('\n', ''), wt.info
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
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Wing instructions:
                <br>First equip the main wings you want to wear in primarily the ''Wings'' slot in your wardrobe. Type ''/bcar wing1'' in the chat to save the main wings.
                <br>For your wings to wiggle follow the same steps and equip a different type of wings to use as your secondary. Type ''/bcar wing2'' in the chat to save the secondary wings.
                <br>To let your wings flap type an emote anything that includes the words ''flaps'' and ''wings''.
                <br>
                <br>Commands:
                <br>/bcar wing1 - Saves the primary wings.
                <br>/bcar wing2 - Saves the secondary wings.
                <br>/bcar wingon - Enables the wing flapping on.
                <br>/bcar wingoff - Disables the wing flapping off.
                <br>/bcar wingflaps - Determines the number of flaps.
                <br>/bcar wingdelay - Determines the flapping speed.
                <br>/bcar wingdelete - Removes the wings.
                <br>
                <br>Examples:
                <br><i>*flaps her wings
                <br>*is flapping her wings
                <br>*lets her wings flap
                <br>*spreads her wings, flapping with them</i></p>`.replaceAll('\n', ''), wt.help
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
        <br><span style="text-transform:capitalize">${prof_number}</span> preset:
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

      ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b><br><span style="text-transform:capitalize">${prof_number}</span> has been saved!</p>`, wt.info);
      bcarSettingsSave();
      break;
    case 'load1': case 'load2': case 'load3':
      if (!Player.BCAR.bcarSettings[`${prof_number}Saved`]) {
        ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b><br><span style="text-transform:capitalize">${prof_number}</span> not found!<br>Please save <span style="text-transform:capitalize">${prof_number}</span> first.</p>`, wt.info);
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
      ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b><br><span style="text-transform:capitalize">${prof_number}</span> has been loaded!</p>`, wt.info);

      bcarSettingsSave();
      break;
    case 'delete1': case 'delete2': case 'delete3':
      if (!Player.BCAR.bcarSettings[`${prof_number}Saved`]) {
        ChatRoomSendLocal(
          "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `Profile${number} has been cleared!</p>`, wt.info
        );
        return;
      }
      profile.earsDefault = {earsDescription1: "None", earsDescription2: "None"};
      profile.earWigglingEnable = false;
      profile.earWigglingStatus = "Disabled";

      profile.tailsDefault = {tailsDescription1: "None", tailsDescription2: "None"};
      profile.tailWaggingEnable = false;
      profile.tailWaggingStatus = "Disabled";

      profile.wingsDefault = {wingsDescription1: "None", wingsDescription2: "None"};
      profile.wingFlappingEnable = false;
      profile.wingFlappingStatus = "Disabled";
  		// this can be made even shorter like this:
  		// ['ear', 'tail', 'wing'].forEach(pref => {
      //   profile[`${pref}sDefault`] = {[`${pref}sDescription1`]: "None", [`${pref}sDescription2`]: "None"};
      //   profile[`${pref}FlappingEnable`] = false;
      //   profile[`${pref}FlappingStatus`]= "Disabled";
			// })
      ChatRoomSendLocal(
          "<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
          `Profile${number} has been cleared!</p>`, wt.info
      );
		  Player.BCAR.bcarSettings[`${prof_number}Saved`] = false
      bcarSettingsSave();
      break;
      case 'profile' : case 'profilehelp' :
      ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
          <br>"Profiles instructions:
          <br>"With the Profiles you can save presets for your ears, tail and wings.
          <br>
          <br>Commands:
          <br>/bcar save1 - Saves current setup in Profile1.
          <br>/bcar save2 - Saves current setup in Profile2.
          <br>/bcar save3 - Saves current setup in Profile3.
          <br>/bcar load1 - Loads the setup saved in Profile1.
          <br>/bcar load2 - Loads the setup saved in Profile2.
          <br>/bcar load3 - Loads the setup saved in Profile3.
          <br>/bcar profile1 - Shows which setup is saved in Profile1.
          <br>/bcar profile2 - Shows which setup is saved in Profile2.
          <br>/bcar profile3 - Shows which setup is saved in Profile3.
          </p>`.replaceAll('\n', ''), wt.help
                       );
  }
}
//End of Profile Commands

//Misc Commands
function CommandAnimals(argsList) {
  const cmd = argsList[0].toLocaleLowerCase();
  switch (cmd) {
    case 'cat': case 'dog': case 'fox': case 'mouse':
      Player.BCAR.bcarSettings.animal = cmd
      ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b><br><span style="text-transform:capitalize">${cmd}</span> reactions are selected!</p>`);
      bcarSettingsSave();
  break;
      case 'animal': case 'animalhelp' :
      ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
      <br>It doesn't matter if you are a cat, a dog, a fox or a mouse. With the animal commands you can change your reactions and sounds according to the animal you are.
      <br>(Animal sounds are disbaled until for this update.)
      <br>
      <br>/bcar animalhelp - Opens this help menu.
      <br>/bcar cat - Changes the reactions and sounds to cat realted ones.
      <br>/bcar dog - Changes the reactions and sounds to dog realted ones.
      <br>/bcar fox - Changes the reactions and sounds to fox realted ones.
      <br>/bcar mouse - Changes the reactions and sounds to mouse realted ones.
      </p>`.replaceAll('\n', ''), wt.help
      );
      bcarSettingsSave();
  }
}

function CommandArousalToggle(argsList)
    {
        let toggle = argsList[0];
        let toggleto = argsList.slice(1);

        if (toggle === "arousalon") {
            Player.BCAR.bcarSettings.arousalEnable = true;
            Player.BCAR.bcarSettings.arousalStatus = "Enabled";
            ChatRoomSendLocal(
                `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Arousal manipulation is now enabled!
                </p>`.replaceAll('\n', ''), wt.info
            );
        }
        else if (toggle === "arousaloff") {
            Player.BCAR.bcarSettings.arousalEnable = false;
            Player.BCAR.bcarSettings.arousalStatus = "Disabled";
            ChatRoomSendLocal(
                `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Arousal manipulation is now disabled!
                </p>`.replaceAll('\n', ''), wt.info
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
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Arousal instructions:
                <br>With the arousal commands you can switch the manipulation on and off.
                <br>The manipulation takes effect on headpets, hair brushing, almost every ear action, back and butt caress.
                <br>
                <br>Commands:
                <br>/bcar arousalon - Turns arousal manipulation on.
                <br>/bcar arousaloff - Turns arousal manipulation off.
                </p>`.replaceAll('\n', ''), wt.help
            );
        }
    }

function CommandChangelog(argsList)
    {
        let changelog = argsList[0];
        let changelogto = argsList.slice(1);

        if (changelog === "changelog") {
            ChatRoomSendLocal(
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React + changelog</b>
                <br>${BCAR_CHANGELOG}
                <br>View the full changelog <a href='https://github.com/DrBranestawm/BCAR/blob/main/script/changelog.md' target='_blank'>here</a>`.replaceAll('\n', ''), wt.changelog
            );
        }
	}

function CommandExpressionToggle(argsList)
    {
        let toggle = argsList[0];
        let toggleto = argsList.slice(1);

        if (toggle === "expressionon") {
/*            if (FBC_VERSION = {}) {
                 ChatRoomSendLocal(
                     "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                     "FBC is not loaded yet.\n" +
                     "Please load FBC to use BCAR Expressions.</p>", wt.info
                );
            }
            else { */
            Player.BCAR.bcarSettings.expressionsEnable = true;
            Player.BCAR.bcarSettings.expressionsStatus = "Enabled";
            ChatRoomSendLocal(
                `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>BCAR Expressions are now enabled!
                </p>`.replaceAll('\n', ''), wt.info
                );
        }
//    }
        else if (toggle === "expressionoff") {
/*            if (FBC_VERSION = {}) {
                 ChatRoomSendLocal(
                     "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                     "FBC is not loaded yet.\n" +
                     "Please load FBC to use BCAR Expressions.</p>", wt.info
                );
            }
            else { */
            Player.BCAR.bcarSettings.expressionsEnable = false;
            Player.BCAR.bcarSettings.expressionsStatus = "Disabled";
            ChatRoomSendLocal(
                `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>BCAR Expressions are now disabled!
                </p>`.replaceAll('\n', ''), wt.info
            );
            }
//        }
        bcarSettingsSave();
        bcarExpressions();
    }

function CommandEmotes(argsList)
    {
        const cmd = argsList[0].toLocaleLowerCase();
        const s = Player?.BCAR?.bcarSettings;
  switch (cmd) {
      case 'emote': case 'emotes': case 'emotehelp':
            ChatRoomSendLocal(
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Emotes:
                <br>In order to use the emote, a primary ear/tail and a secondary ear/tail must have been set, as with automatic reactions.
                <br>Type /bcar earhelp or /bcar tailhelp to see the instructions.
                <br>
                <br>/bcar emoteearon - Turns ear wiggle emote on.
                <br>/bcar emoteearoff - Turns ear wiggle emote off.
                <br>/bcar emotetailon - Turns tail wag emote on.
                <br>/bcar emotetailoff - Turns tail wag emote off.
                <br>
                <br>Examples:
                <br><i>*wiggle her ears
                <br>*wags her tail</i>
                </p>`.replaceAll('\n', ''), wt.help
            );
      break;
      case 'emoteearon':
          s.earEmoteEnable = true;
          s.earEmoteStatus = "Enabled";
            ChatRoomSendLocal(
                `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Ear wiggle emote is now enabled!
                </p>`.replaceAll('\n', ''), wt.info
            );
      break;
      case 'emoteearoff':
          s.earEmoteEnable = false;
          s.earEmoteStatus = "Disabled";
            ChatRoomSendLocal(
                `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>"Ear wiggle emote is now disabled!
                </p>`.replaceAll('\n', ''), wt.info
            );
      break;
      case 'emotetailon':
          s.tailEmoteEnable = true;
          s.tailEmoteStatus = "Enabled";
            ChatRoomSendLocal(
                `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Tail wagging emote is now Enabled!
                </p>`.replaceAll('\n', ''), wt.info
            );
      break;
      case 'emotetailoff':
          s.tailEmoteEnable = false;
          s.tailEmoteStatus = "Disabled";
            ChatRoomSendLocal(
                `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Tail wagging emote is now disabled!
                </p>`.replaceAll('\n', ''), wt.info
            );
        }
    }

function CommandExpressionHelp(argsList)
    {
        let openHelp = argsList[0];
        let openHelpto = argsList.slice(1);

        if (openHelp === "expression" || openHelp === "expressionhelp") {
            ChatRoomSendLocal(
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Expression instructions:
                <br>BCAR+ Expressions adds Expressions to BCE Expressions and requires FBC to run.
                <br>With the expression commands you can switch the BCAR+ Expressions on and off.
                <br>Look at the <a href='https://github.com/DrBranestawm/BCAR/wiki/Expression' target='_blank'>BCAR+ Expression Wiki</a> for full list.
                <br>
                <br>Commands:
                <br>/bcar expressionon - Turns expression on.
                <br>/bcar expressionoff - Turns expression off.
                </p>`.replaceAll('\n', ''), wt.help
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
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>The reactions refer to " + CharacterNickname(Player) + " as ''he'' now!
                </p>`.replaceAll('\n', ''), wt.info
            );
        }
        else if (toggle === "female") {
            Player.BCAR.bcarSettings.genderDefault.gender = "Female";
            Player.BCAR.bcarSettings.genderDefault.capPronoun = "She";
            Player.BCAR.bcarSettings.genderDefault.capIntensive = "Her";
            Player.BCAR.bcarSettings.genderDefault.capPossessive = "Her";
            ChatRoomSendLocal(
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>The reactions refer to " + CharacterNickname(Player) + " as ''she'' now!
                </p>`.replaceAll('\n', ''), wt.info
            );
        }
        else if (toggle === "other") {
            Player.BCAR.bcarSettings.genderDefault.gender = "Non-Binary";
            Player.BCAR.bcarSettings.genderDefault.capPronoun = "They";
            Player.BCAR.bcarSettings.genderDefault.capIntensive = "Them";
            Player.BCAR.bcarSettings.genderDefault.capPossessive = "Their";
            ChatRoomSendLocal(
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>The reactions refer to " + CharacterNickname(Player) + " as ''they'' now!
                </p>`.replaceAll('\n', ''), wt.info
            );
        }
        bcarSettingsSave();
    }

function CommandOpenHelp(argsList)
    {
        const cmd = argsList[0].toLocaleLowerCase();
  switch (cmd) {
    case 'help': case '':
            ChatRoomSendLocal(
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Commands overview and info:
                <br>/bcar animalhelp - Opens animal instructions and commands page.
                <br>/bcar arousalhelp - Opens arousal instructions and commands page.
                <br>/bcar emotehelp - Opens emote instructions and commands page.
                <br>/bcar expressionhelp - Opens expression instructions and commands page.
                <br>/bcar changelog - Shows the BCAR+ changelog.
                <br>/bcar help - Opens this help window.
                <br>/bcar status - Opens the status window.
                <br>/bcar earhelp - Opens ear instructions and commands page.
                <br>/bcar tailhelp - Opens tail instructions and commands page.
                <br>/bcar winghelp - Opens wing instructions and commands page.
                <br>/bcar misc - Opens the misc instructions and commands page.
                <br>/bcar profilehelp - Opens profile instructions and commands page.
                <br>/bcar male - Lets the reactions refer to ${CharacterNickname(Player)} as "he".
                <br>/bcar female - Lets the reactions refer to ${CharacterNickname(Player)} as "she".
                <br>/bcar other - Lets the reactions refer to ${CharacterNickname(Player)} as "they".
                <br>/bcar reset - Resets the ears, tails and wings to the default settings.
                <br>/bcar timerhelp - Opens timer instructions and commands page.
                <br>/bcar versions - Shows you the version of BCAR+ you are using.
                <br>Visit the <a href='https://github.com/DrBranestawm/BCAR/wiki' target='_blank'>BCAR+ Wiki</a> for more info.
                </p>`.replaceAll('\n', ''), wt.ghelp
            );
        }
    }

function CommandMisc(argsList)
    {
    const cmd = argsList[0].toLocaleLowerCase();
  switch (cmd) {
    case 'misc':
            ChatRoomSendLocal(
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Commands overview and info:
                <br><b>!ATTENTION!</b> These commands can be considered as cheat.
                <br>These commands ignoring any restrictions of the game and should only used for RP or insurance to get away from trap rooms or trolls.
                <br>
                <br>/cum - Lets the player cum instantly.
                <br>/leave - Lets the player leave the room immediately.
                <br>/safewordspecific - Lets the player remove a certain restraint.
                <br>/wardrobe - Opens the wardrobe of the player.
                </p>`.replaceAll('\n', ''), wt.help
            );
        }
    }

function CommandResetSettings(argsList)
    {
        let remove = argsList[0];
        let removeto = argsList.slice(1);

        if (remove === "reset") {
            ChatRoomSendLocal(
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Settings have been reseted!
                </p>`.replaceAll('\n', ''), wt.info
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
            const s = Player?.BCAR?.bcarSettings;
            ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                               <br>Current status:
                               <br>Ear Animation: ${s?.earWigglingStatus}
                               <br>Primary Ears: ${s?.earsDefault?.earsDescription1}
                               <br>Secondary Ears: ${s?.earsDefault?.earsDescription2}
                               <br>Ear Wiggles: ${s?.earsDefault?.earsCount}
                               <br>Ear Wiggle Delay: ${s?.earsDefault?.earsDelay}
                               <br>Tail Animation: ${s?.tailWaggingStatus}
                               <br>Primary Tail: ${AssetGet("Female3DCG","TailStraps",s?.tailsDefault?.tails1)?.Description || 'None'}
                               <br>Secondary Tail: ${AssetGet("Female3DCG","TailStraps",s?.tailsDefault?.tails2)?.Description || 'None'}
                               <br>Tail Wags: ${s?.tailsDefault?.tailsCount}
                               <br>Tail Wag Delay: ${s?.tailsDefault?.tailsDelay}
                               <br>Wing Animation: ${s?.wingFlappingStatus}
                               <br>Primary Wings: ${s?.wingsDefault?.wingsDescription1}
                               <br>Secondary Wings: ${s?.wingsDefault?.wingsDescription2}
                               <br>Wing Flaps: ${s?.wingsDefault?.wingsCount}
                               <br>Wing Flap Delay: ${s?.wingsDefault?.wingsDelay}
                               <br>Gender: ${s?.genderDefault?.gender}
                               <br>Arousal Manipulation: ${s?.arousalStatus}
                               <br>BCAR+ Expressions: ${s?.expressionsStatus}
                               <br>Animal: <span style="text-transform:capitalize">${s?.animal}</span>
                               </p>`.replaceAll('\n', ''), wt.help
                             );
        }
    }

function CommandWindowTimerSet(argsList)
    {
        const cmd = argsList[0].toLocaleLowerCase();
  switch (cmd) {
      case 'timeron':
          wt.changelog = 20000;
          wt.commands = 20000;
          wt.ghelp = 70000;
          wt.help = 30000;
          wt.info = 15000;
            ChatRoomSendLocal(
                `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Window timer emote is now enabled!
                </p>`.replaceAll('\n', ''), wt.info
            );
      break;
      case 'timeroff':
          wt.changelog = 0;
          wt.commands = 0;
          wt.ghelp = 0;
          wt.help = 0;
          wt.info = 0;
            ChatRoomSendLocal(
                `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Window timer are now disabled!
                </p>`.replaceAll('\n', ''), wt.info
            );
      break;
      case 'timer': case 'timerhelp':
          ChatRoomSendLocal(
                `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>The window timer causes windows to disappear after a specific duration.
                <br>You can toggle if the windows wether disappear or not.
                <br>
                <br>Commands:
                <br>/bcar timeron - Turns the timer on.
                <br>/bcar timeroff - Turns the timer off.
                </p>`.replaceAll('\n', ''), wt.help
            );
        }
    }

function CommandVersions(argsList)
    {
        let remove = argsList[0];
        let removeto = argsList.slice(1);

        if (remove === "versions") {
            ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                               <br>BCAR+ v${BCAR_Version}
                               </p>`.replaceAll('\n', ''), wt.info
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
                    window.ChatRoomSendLocal("<style type='text/css'> .bcar_hint {display: flex; flex-flow: column wrap; overflow: auto; height: 5em; background: #000452; font-size: 1em; } .bcar_hint div {	margin:0 0.5ex; }</style><div class='bcar_hint'><div><b>" + subcommands.join("</b></div><div><b>") + "</b></div></div>", wt.commands)
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
                        window.ChatRoomSendLocal("<style type='text/css'> .bcar_hint {display: flex; flex-flow: column wrap; overflow: auto; height: 5em; background: #000452; font-size: 1em; } .bcar_hint div {	margin:0 0.5ex; }</style><div class='bcar_hint'><div><b>" + matches.join("</b></div><div><b>") + "</b></div></div>", wt.commands)
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
                //Misc Commands
                CommandAnimals(args.split(" "));
                CommandArousalToggle(args.split(" "));
                CommandArousalHelp(args.split(" "));
                CommandChangelog(args.split(" "));
                CommandEmotes(args.split(" "));
                CommandExpressionToggle(args.split(" "));
                CommandExpressionHelp(args.split(" "));
                CommandGenderToggle(args.split(" "));
                CommandMisc(args.split(" "));
                CommandOpenHelp(args.split(" "));
                CommandResetSettings(args.split(" "));
                CommandStatus(args.split(" "));
                CommandWindowTimerSet(args.split(" "));
                CommandVersions(args.split(" "));
            }
        }

    ])

CommandCombine([
    {
        Tag: 'cum',
        Description: ": cum instantly",

        Action: () => {
            ActivityOrgasmRuined = false;
            ActivityOrgasmStart(Player);
        }
    }])

CommandCombine([
    {
        Tag: 'leave',
        Description: ": leave the room",

        Action: args => {
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
    }])

CommandCombine([
    {
        Tag: 'safewordspecific',
        Description: ": frees you from a specific item",

        Action: args => {
            ChatRoomSendLocal(
                "<p style='background-color:#000452;color:#EEEEEE'>Bondage Club Auto React +: You have 5 seconds to click  on target, select area. If successful, will be returned. If not, retry.</p>", wt.info
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
    }])

CommandCombine([
    {
        Tag: 'wardrobe',
        Description: ": opens your wardrobe",

        Action: args => {
            ChatRoomClickCharacter(Player);
            DialogChangeClothes();
        }
    }])

//BCE Expressions
	if (typeof ChatRoomCharacter === "undefined") {
		console.warn(
			"Bondage Club not detected. Skipping BCE customizer initialization."
		);
		return;
	}

// Create settings page



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
