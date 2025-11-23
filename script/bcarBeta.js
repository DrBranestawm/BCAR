const BCAR_Version = '0.7.10';
const BCAR_Version_FIX = '';

const ICONS = Object.freeze({
  TAIL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAADblJREFUeJzt3XmsHWUZx/HvKb3dN5ZuLFYoIEvLXkoFZBcBgYSCFIQESwgYQlQWjUZIIID6hzQQUJawhUU0gIIhGEAbaKEgWwtCW8sidJVCSxdKe7tc/3ju9V5uzz0zZ87MeWbe+X2SJ/c2t+ec573zPndm3nnnHRARERERERERERERERERERERERERyVDFOwFpqgqwAzAKGNkldgAGA4O6RUuX6N0eFWAL0Nb+dQuwGWgFNnb7ugFY3+1rR7R2+X4jsKn9a8f3W6rk3xvo2yU+AJ5qzyUTvbN6Y3E1ANgfGA/s3i36O+aVllbgeuBZMiwOCUMFGAf8ELgbmIP9BW4LNJ4HvpHKb06CNRw4B7gXWIx/p21GrAYuBnql8PuTAA0FpgLT6TwHKEs8C3yt8V+hhKYXcArwR+BL/Dtqs2MdcCmOg0kaxcqnvsD5wFXAns65dLUeWFMlVnf5fj3RHb8P8CNspKwnc7DDyLkZtCM2jWLlyxDgEuDHwOgmfu4W4CPgY2BJlVgMLMX+ojdqOPAXahfH74HLsWITYRvgImA52R+yvAk8DFwDnIUNBffLvokA7I1du+gpvy+xPafI/x0OvEH6xbAZO0y5Ezu53xcrRC9HAyvpOd8lwASv5CR/tgceJL2C2ATMAH4JHEXtQ5hmm4Jd3Osp97eAnd2yk9w5ElhI40WxELgLmAwMa2oL4ruM2m2YQX5zlybbBrgaO/xJWhRLgWnAoeR7FLKCnefUastzwECvBCVfdsQu8iUpii+Ae4Dj8D2PiKsC3EDtNk0njHlhkoJjSDZC9SFwBbBt81NuyLXUbter2OxhEc7ApnTXUxgvA6dTjL1Fd1dQu23vAyPcspNcmUp95xuvAyeT73OLWs6jdvtWYddCRLiS+IXxH2wkqqiFAXAEtYdy24BT3bKT3KgAvyJeYbRiJ7MDXDJNz87AJ9Ru641u2Umu/JR4xTEbu7pddC3AS9Ru6yw070+wuU1xiuO32IzdEFxP9BD1WLfsJDcmET3V+0vgbK8EMzCR6EGIX7hlJ7kxlujrHCuwDhWKPsC71G7zAsLZU0pCg4B51O4on2GrjITkZ0QfSp7klp3kxh3U7iQbgG+6ZZeN0cBaarf7abfsJDdOIfqv6CNu2WXnTqLbfbRXcpIPw4FlxBu1ehTYxSfN1O1O9Lpbr1Psi57SoArwOPGKoyPWYRfLin7vw91Et/X7btlJLkyhvuLoGisp7hpPo4ieTrIMu3goJdUfW/0jaYHc1/SM0/Nzott3q1t2kgtxOklPsZTi3dvRoQLMRyfnUsNIbJG0pAVS5KvoBxDdvk8o5j0skpLbSV4cz1DskZ2riW7jXW7Zibu9SL7YwkaKf6PQDKLbeY5bduLuLpLvPW5xyDdN/YgevWoDxnglKL5GUf995R2xCnvEWZFNIrqdiyn2IWRVehhJPJdis1eT+A3waYq5eIgz0fJFrFCkZAZis3GT7D2WEcbCaDcT3dYg7/vQHiTaBcB2CV/7a+yOuqKLc0fg/MyzkNypAG+TbO+xlHBWDpxDdHvHu2UnbuJcHOsproz5GRXspqsR2FX2PO7V48xaDuWPgdRhGsmKYwU9L605EDit/b1nsvUzM+7LpCWNiRriXeSXmnhpAf5LsgK5odt7VYBjsZun1kW89qoM25REC9Htfc0tO3ET527BarEBu24Cdrh0FrYGVtzXn5x5y+ozmOic/+aWnbj5A8kK5P721x9Lsker7ZZ5y+ozlOicH3TLTlz0Ifms3cnAnxO+diM9r0A4JN0mxhZnDzLNKTdxcjzJOvgmbHG4JK9tA96rkksFOBe7Gr9j2g2t4mxs5m7HIwr6Ep33tU3IS3LkFpJ38kbi793yGAg80OXn52XQ1q663i25ATtcnED0Ig1BXkWX6irYk508CuS+LnmMxlYH6frze6vkOjqdZgPx7vmoFlekmIPk3Hh8iqONzkcE7IE9M6T7zz+ic8Zsf6ygZqbU7j1Jfnh4WUo55I6WpN+a5zDrMmAf7FBrVJWffw1bl2o18ASda/1+HSuopHpjxdYv4es3NvDZuZbHaQ3ejnX87O2xp79WK44OU7Gp5V0Xwj6lwc+9DrvnQ6SmPtjsW69DrC0JX/dwA20+PYW8gz3E0h7kqybg+zi0pHfkjUv4uv2BhxK+tqtgF4pTgXyV5+FVI8ZSf3GNwVZgT+OGrmDPZVUgX3WMdwIJDaDn2cPV7AQ8R3pDxElvR849FUinPhT7RDXuVJSdgX9go2FpCeG24qpUIJ32I/kwZx7EWdFwN+AF7JpHmurZexWKCqTTYd4JNGh9xM8PxB7XvGsGnz0og/fMBRVIp6IXyKoaPzsVWxlxZEafrQIpgSKff6yg+h6kgt2h+ATZnicMzfC9JQdG4HdxMI34Z5U2DQb+1KTPfz3er7l4gh2/rtME7wQaNLfbvw/EiiPNkapakq4blns6xDIHeyfQoNntX3sBPwFepnnFAQEXiPYgpugF8gY20/ce4DiHzx+CTTcJblav9iCmyAXShuX/L3yKo8P2jp+dmeCWq09gJHYfhjRmP2yZ1qBoD1LsvUeeDPdOIAsqEBvxkcapQAKlAknHiOj/UjwqEBVIWlQgARpK/pb6LCoVSIDiPHtP4lGBBOgA7wQCktVMYVdlLxCdf6RHBRKgg7wTCEjRnwVfVZmvpPcD1hLvVlWJpy/2uLZglHkPMg4VR9qCm49V5gLR4VX6gruargKRNGkPEhBNUkzfMO8E0lbWAumLLhJmYVvvBNJW1gLZn4AXXHakPUggDvVOIFDagwRCBZKN4NboLWuBFH2Zn7zyfLZKJspYINsBe3knEaj+3gmkrYwFcrh3AgHTHiQAR3onELC+3gmkTQUiaWrzTiBtZSuQAcAh3klIcZStQCai5VazpD1IwRX1IZ1FoQIpuO94JxC41d4JpK1MBTIcnX9kbaV3AmkrU4GcQLlvMW4GFUiB6fAqeyqQguoFnOidRAmoQArqAAJd+S9nlnonkLayFIj2Hs3R/WGihVeWAtH5R/bWAku8k0hbGQpkGJrB2wzz0IXCQjoRLRDXDPO8E8hCGQrkVO8ESkIFUkB9gO96J1ESL3snkIXQC+QY7ClSkq1NwCzvJLIQeoFM9k6gJF4F1nknkYWQC6QFFUizvOCdQFZCLpDjsRVMJHsqkAI61zuBktgIzPROIiuhFsgQdHjVLM8Q4I1SHUItkDMJcBGznHrMO4EshXoD0UvAJO8kSmAT9nTbFd6JZCXEPch4VBzNMp2AiwPCLJCLvRMokUe9E8haaIdYw4BFBLgMfw59AewErPJOJEuh7UGmouJolocIvDggrD1IC7AAGOOdSEkcCMz2TiJrIe1BpqDiaJaXKEFxhKQX8A52R5si+zgv3maRvJiCf6cpSywiwOeAhKw3MB//jlOWuDTeZpG8uBD/TlOWWAT0i7dZJA8GYYuVeXecsoT2HgVzHf6dpiyhvUfBjAXW499xyhKXxNsskgcV4Gn8O01Z4k20tlihnI1/pylTHBFvs0gejACW499pyhIPxNsskgcVbIq1d6cpS6wBRsfaMpILuubR3Lg83maRPNgbW5zMu9OUJV5AJ+aFMRhNRmxmrAF2jbVlxF0FWznDu9OUKS6MtWUkF67Bv8OUKf5KWDfSBe18/DtMmWIJMCrWlhF3xwOt+HeaskQrcFisLSPuDsdWzfDuNGWKi2JtGXF3MLZahneHKVPcHmvLiLtDgc/x7zBlihexR9VJzp2JDquaHfOA4XE2jvgZANyKf2cpW3wM7BJj+4iTCvaI5g/w7yxli+XAXtGbSDxUgKOxuT7eHaWMsQY4JGojSfO1AN/Dnqft3UnKGquBb0VtKGmuMdjiCovx7yBljuXYELrkQD9stcNngC34d46yx0J0zpELewA3AZ/h3ykUFlrxPgcmAk+gvUXeYgb2DEFxsifwJP4dQbF13IaukLvpBVyJFm7LY2zAnrQlTlrQyiJ5jUXY4a44uhH/jqDYOu4Htq2x3aQJhqAJhXmLZcBptTaaJFfvMwqPwiYXSj48AuyLDZRIBuotkL0zyULq9RZwAnAOds1JMlJvgeyQSRYS1xLgB8BBwHPOuZRCb+8EJJbPsRkKN2HngNIk9RbIikyykJ4sAG7GRqjWOudSSvUWyMJMspDupgPTgKew6TvipN4CeSeTLATgFewC7GPAh865SLt6l5hsAVYCAzPIpWzWYUXxJPA4do+45Ey9e5CN2K2yJ2WQS+jmA69id1S+AszBfp+SY0lGsZ5EBVLLZmw5ndnAG+3xJrYYnhRMklW8R2C3z2qIGD4C3sXOzd5uj7nYLGcJQNJl7h8DzkgzkRxbjw23/hs7TJqPFcU8NPQavKQFciR2LhKKVmx9rvewYngPK4gF2NC2hlpLKmmBVIDnsUIpilXA++3RUQwd/16EikCqaORJQhOxEZk8WootyjwLGzl6F5sF0OaZlJTPHfjfD9GGnRjfiT2Rajf0CDHJiSHYcXozi2ET8Bo2FWMyWrVDMpTGX9pxwExgaArvVc0q7FBuVvvnvIJGj6RgJtF5jN9IrMfOGW4DLgD2of57VkRSk+ax+ljgd8C3Y/zfjdhFtrnYRbZ3sCvP89H0C8mRLE5md8KW1x+JnaO0YnuGT7EFBhZjw6qbM/hsEREREREREREREREREREREREREcmZ/wGUevBaCP967AAAAABJRU5ErkJggg=="
});

function is_newer(current, candidate) {
  const current_levels = current.split('.'), candidate_levels = candidate.split('.');
  for (let i = 0; i < 3; i++) {
    if (candidate_levels[i] === current_levels[i]) continue;
    return candidate_levels[i] > current_levels[i];
  }
  return false;
}

window.LoadedError = class extends Error { }
if (window.BCAR_VERSION) {
  if (is_newer(window.BCAR_VERSION, BCAR_Version)) {
    beepNewVersion();
    console.log('BCAR+ has been udapted')
  }
  throw new LoadedError('BCAR+ already loaded')
}
// SDK stuff

var bcModSDK = function () { "use strict"; const o = "1.2.0"; function e(o) { alert("Mod ERROR:\n" + o); const e = new Error(o); throw console.error(e), e } const t = new TextEncoder; function n(o) { return !!o && "object" == typeof o && !Array.isArray(o) } function r(o) { const e = new Set; return o.filter((o => !e.has(o) && e.add(o))) } const i = new Map, a = new Set; function c(o) { a.has(o) || (a.add(o), console.warn(o)) } function s(o) { const e = [], t = new Map, n = new Set; for (const r of f.values()) { const i = r.patching.get(o.name); if (i) { e.push(...i.hooks); for (const [e, a] of i.patches.entries()) t.has(e) && t.get(e) !== a && c(`ModSDK: Mod '${r.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${t.get(e) || ""}\nPatch2:\n${a}`), t.set(e, a), n.add(r.name) } } e.sort(((o, e) => e.priority - o.priority)); const r = function (o, e) { if (0 === e.size) return o; let t = o.toString().replaceAll("\r\n", "\n"); for (const [n, r] of e.entries()) t.includes(n) || c(`ModSDK: Patching ${o.name}: Patch ${n} not applied`), t = t.replaceAll(n, r); return (0, eval)(`(${t})`) }(o.original, t); let i = function (e) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookChainExit) || void 0 === i ? void 0 : i.call(t, o.name, n), c = r.apply(this, e); return null == a || a(), c }; for (let t = e.length - 1; t >= 0; t--) { const n = e[t], r = i; i = function (e) { var t, i; const a = null === (i = (t = m.errorReporterHooks).hookEnter) || void 0 === i ? void 0 : i.call(t, o.name, n.mod), c = n.hook.apply(this, [e, o => { if (1 !== arguments.length || !Array.isArray(e)) throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof o}`); return r.call(this, o) }]); return null == a || a(), c } } return { hooks: e, patches: t, patchesSources: n, enter: i, final: r } } function l(o, e = !1) { let r = i.get(o); if (r) e && (r.precomputed = s(r)); else { let e = window; const a = o.split("."); for (let t = 0; t < a.length - 1; t++)if (e = e[a[t]], !n(e)) throw new Error(`ModSDK: Function ${o} to be patched not found; ${a.slice(0, t + 1).join(".")} is not object`); const c = e[a[a.length - 1]]; if ("function" != typeof c) throw new Error(`ModSDK: Function ${o} to be patched not found`); const l = function (o) { let e = -1; for (const n of t.encode(o)) { let o = 255 & (e ^ n); for (let e = 0; e < 8; e++)o = 1 & o ? -306674912 ^ o >>> 1 : o >>> 1; e = e >>> 8 ^ o } return ((-1 ^ e) >>> 0).toString(16).padStart(8, "0").toUpperCase() }(c.toString().replaceAll("\r\n", "\n")), d = { name: o, original: c, originalHash: l }; r = Object.assign(Object.assign({}, d), { precomputed: s(d), router: () => { }, context: e, contextProperty: a[a.length - 1] }), r.router = function (o) { return function (...e) { return o.precomputed.enter.apply(this, [e]) } }(r), i.set(o, r), e[r.contextProperty] = r.router } return r } function d() { for (const o of i.values()) o.precomputed = s(o) } function p() { const o = new Map; for (const [e, t] of i) o.set(e, { name: e, original: t.original, originalHash: t.originalHash, sdkEntrypoint: t.router, currentEntrypoint: t.context[t.contextProperty], hookedByMods: r(t.precomputed.hooks.map((o => o.mod))), patchedByMods: Array.from(t.precomputed.patchesSources) }); return o } const f = new Map; function u(o) { f.get(o.name) !== o && e(`Failed to unload mod '${o.name}': Not registered`), f.delete(o.name), o.loaded = !1, d() } function g(o, t) { o && "object" == typeof o || e("Failed to register mod: Expected info object, got " + typeof o), "string" == typeof o.name && o.name || e("Failed to register mod: Expected name to be non-empty string, got " + typeof o.name); let r = `'${o.name}'`; "string" == typeof o.fullName && o.fullName || e(`Failed to register mod ${r}: Expected fullName to be non-empty string, got ${typeof o.fullName}`), r = `'${o.fullName} (${o.name})'`, "string" != typeof o.version && e(`Failed to register mod ${r}: Expected version to be string, got ${typeof o.version}`), o.repository || (o.repository = void 0), void 0 !== o.repository && "string" != typeof o.repository && e(`Failed to register mod ${r}: Expected repository to be undefined or string, got ${typeof o.version}`), null == t && (t = {}), t && "object" == typeof t || e(`Failed to register mod ${r}: Expected options to be undefined or object, got ${typeof t}`); const i = !0 === t.allowReplace, a = f.get(o.name); a && (a.allowReplace && i || e(`Refusing to load mod ${r}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`), u(a)); const c = o => { let e = g.patching.get(o.name); return e || (e = { hooks: [], patches: new Map }, g.patching.set(o.name, e)), e }, s = (o, t) => (...n) => { var i, a; const c = null === (a = (i = m.errorReporterHooks).apiEndpointEnter) || void 0 === a ? void 0 : a.call(i, o, g.name); g.loaded || e(`Mod ${r} attempted to call SDK function after being unloaded`); const s = t(...n); return null == c || c(), s }, p = { unload: s("unload", (() => u(g))), hookFunction: s("hookFunction", ((o, t, n) => { "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`); const i = l(o), a = c(i); "number" != typeof t && e(`Mod ${r} failed to hook function '${o}': Expected priority number, got ${typeof t}`), "function" != typeof n && e(`Mod ${r} failed to hook function '${o}': Expected hook function, got ${typeof n}`); const s = { mod: g.name, priority: t, hook: n }; return a.hooks.push(s), d(), () => { const o = a.hooks.indexOf(s); o >= 0 && (a.hooks.splice(o, 1), d()) } })), patchFunction: s("patchFunction", ((o, t) => { "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`); const i = l(o), a = c(i); n(t) || e(`Mod ${r} failed to patch function '${o}': Expected patches object, got ${typeof t}`); for (const [n, i] of Object.entries(t)) "string" == typeof i ? a.patches.set(n, i) : null === i ? a.patches.delete(n) : e(`Mod ${r} failed to patch function '${o}': Invalid format of patch '${n}'`); d() })), removePatches: s("removePatches", (o => { "string" == typeof o && o || e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`); const t = l(o); c(t).patches.clear(), d() })), callOriginal: s("callOriginal", ((o, t, n) => { "string" == typeof o && o || e(`Mod ${r} failed to call a function: Expected function name string, got ${typeof o}`); const i = l(o); return Array.isArray(t) || e(`Mod ${r} failed to call a function: Expected args array, got ${typeof t}`), i.original.apply(null != n ? n : globalThis, t) })), getOriginalHash: s("getOriginalHash", (o => { "string" == typeof o && o || e(`Mod ${r} failed to get hash: Expected function name string, got ${typeof o}`); return l(o).originalHash })) }, g = { name: o.name, fullName: o.fullName, version: o.version, repository: o.repository, allowReplace: i, api: p, loaded: !0, patching: new Map }; return f.set(o.name, g), Object.freeze(p) } function h() { const o = []; for (const e of f.values()) o.push({ name: e.name, fullName: e.fullName, version: e.version, repository: e.repository }); return o } let m; const y = void 0 === window.bcModSdk ? window.bcModSdk = function () { const e = { version: o, apiVersion: 1, registerMod: g, getModsInfo: h, getPatchingInfo: p, errorReporterHooks: Object.seal({ apiEndpointEnter: null, hookEnter: null, hookChainExit: null }) }; return m = e, Object.freeze(e) }() : (n(window.bcModSdk) || e("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && e(`Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== o && alert(`Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk); return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = y), y }();

// SDK stuff

(async function () {
  const modApi = bcModSDK.registerMod({
    name: 'BCAR+',
    fullName: 'Bondage Club Auto React +',
    version: BCAR_Version + BCAR_Version_FIX,
    // Optional - Link to the source code of the mod
    repository: 'https://github.com/DrBranestawm/BCAR',
  });
  //global variables
  var Dictionary = [];
  const expressions_state = { loaded: false, conflicts: {} }


  //do not touch this
  await waitFor(() => ServerIsConnected && ServerSocket);
  //end of do not touch
  const bcarSettingsKey = () => `bcarSettings.${Player?.AccountName}`;
  const subcommands = ["animationbuttons", "animal", "animalhelp", "arousal", "arousalhelp", "changelog", "cat", "delete1", "delete2", "delete3", "dog", "ear1", "ear2", "eardelete", "eardelay", "earhelp", "earwiggle", "earwigglecount", "emotehelp", "emoteear", "emotetail", "expressionhelp", "expression", "fox", "female", "fly", "help", "human", "land", "load1", "load2", "load3", "lowerleft", "lowerright", "male", "misc", "mouse", "other", "profile1", "profile2", "profile3", "profilehelp", "reset", "save1", "save2", "save3", "settings", "status", "tail1", "tail2", "tailhelp", "taildelay", "taildelete", "tailwag", "tailwagcount", "timerhelp", "timer", "upperleft", "versions", "wing1", "wing2", "wingdelay", "wingdelete", "wingflapcount", "winghelp", "wingflap"];
  const w = window;
  const BCAR_CHANGELOG =
    "BCAR+ v" + BCAR_Version + BCAR_Version_FIX +
    "<br>- Adapted tail wagging and ear wiggling to use Property by <a href='https://github.com/dDeepLb' target='_blank'>@dDeepLb</a>" +
    "<br>- Improved safewordspecific command by <a href='https://github.com/dDeepLb' target='_blank'>@dDeepLb</a>" +
    "<br>- Settings migrated to extension settings by <a href='https://github.com/dDeepLb' target='_blank'>@dDeepLb</a>" +
    "<br>" +
    "<br>BCAR+ v0.7.9" +
    "<br>- Fix flying not being visible to others by <a href='https://github.com/elliethepink' target='_blank'>@elliethepink</a>" +
    "<br>- Fix BCAR+ UI wasn't able to access" +
    "<br>- Moved BCAR+ UI to the Extensions tab"


  function copy_object(o) {
    return JSON.parse(JSON.stringify(o));
  }

  await bcarSettingsLoad();

  if (Player.BCAR != undefined) {
    console.log("BCAR+ loaded");
    //            BCAR_Greeting();
  }
  window.BCAR_VERSION = BCAR_Version

  BCARChatRoomMenuDraw();
  BCARChatRoomClick();

  /**
    function BCARTriggerEarWiggleAction() {
        let focusGroup = Player.FocusGroup;
        Player.FocusGroup = {Name:"ItemEars"};
        ActivityRun(
            Player,
            Player,
            ActivityGetGroupOrMirror(Player.AssetFamily, "ItemEars"),
            ActivityAllowedForGroup(Player, "ItemEars").find(function(obj){
                return obj.Activity.Name == "Wiggle";
            })
        );
        Player.FocusGroup = focusGroup;
    }
    */

  const getWingVerb = () => ["FairyWings", "BeeWings", "PixieWings"].includes(InventoryGet(Player, "Wings")?.Asset?.Name) ? "flutters" : "flaps";

  function BCARChatRoomClick() {
    modApi.hookFunction('ChatRoomClick', 4, (args, next) => {
      if (Player.BCAR.bcarSettings.earWigglingEnable) {
        if (Player.BCAR.bcarSettings.animationButtonsEnable) {
          if (((Player.BCAR.bcarSettings.animationButtonsPosition === "upperleft")
            && ((MouseX >= 0) && (MouseX < 45) && (MouseY >= 135) && (MouseY < 180)))
            || ((Player.BCAR.bcarSettings.animationButtonsPosition === "lowerleft")
              && ((MouseX >= 0) && (MouseX < 45) && (MouseY >= 860) && (MouseY < 905)))
            || ((Player.BCAR.bcarSettings.animationButtonsPosition === "lowerright")
              && ((MouseX >= 955) && (MouseX < 1005) && (MouseY >= 860) && (MouseY < 905)))) {
            ServerSend("ChatRoomChat", {
              Content: "Beep",
              Type: "Action",
              Target: null,
              Dictionary: [
                { Tag: "Beep", Text: "msg" },
                { Tag: "Biep", Text: "msg" },
                { Tag: "Sonner", Text: "msg" },
                { Tag: "msg", Text: CharacterNickname(Player) + " wiggles " + Player.BCAR.bcarSettings.genderDefault.capPossessive.toLocaleLowerCase() + " ears." }
              ]
            });
            EarWiggle();
            return;
            /**
            {
                BCARTriggerEarWiggleAction()
                EarWiggle();
                return;
            }
              */
          }
        }
      }
      if (Player.BCAR.bcarSettings.tailWaggingEnable) {
        if (Player.BCAR.bcarSettings.animationButtonsEnable) {
          if (((Player.BCAR.bcarSettings.animationButtonsPosition === "upperleft")
            && ((MouseX >= 0) && (MouseX < 45) && (MouseY >= 180) && (MouseY < 225)))
            || ((Player.BCAR.bcarSettings.animationButtonsPosition === "lowerleft")
              && ((MouseX >= 0) && (MouseX < 45) && (MouseY >= 905) && (MouseY < 950)))
            || ((Player.BCAR.bcarSettings.animationButtonsPosition === "lowerright")
              && ((MouseX >= 955) && (MouseX < 1005) && (MouseY >= 905) && (MouseY < 950)))) {
            ServerSend("ChatRoomChat", {
              Content: "Beep",
              Type: "Action",
              Target: null,
              Dictionary: [
                { Tag: "Beep", Text: "msg" },
                { Tag: "Biep", Text: "msg" },
                { Tag: "Sonner", Text: "msg" },
                { Tag: "msg", Text: CharacterNickname(Player) + " wags " + Player.BCAR.bcarSettings.genderDefault.capPossessive.toLocaleLowerCase() + " tail." }
              ]
            });
            TailWag();
            return;
          }
        }
      }
      if (Player.BCAR.bcarSettings.wingFlappingEnable) {
        if (Player.BCAR.bcarSettings.animationButtonsEnable) {
          if (((Player.BCAR.bcarSettings.animationButtonsPosition === "upperleft")
            && ((MouseX >= 0) && (MouseX < 45) && (MouseY >= 225) && (MouseY < 270)))
            || ((Player.BCAR.bcarSettings.animationButtonsPosition === "lowerleft")
              && ((MouseX >= 0) && (MouseX < 45) && (MouseY >= 950) && (MouseY < 995)))
            || ((Player.BCAR.bcarSettings.animationButtonsPosition === "lowerright")
              && ((MouseX >= 955) && (MouseX < 1005) && (MouseY >= 950) && (MouseY < 995)))) {
            ServerSend("ChatRoomChat", {
              Content: "Beep",
              Type: "Action",
              Target: null,
              Dictionary: [
                { Tag: "Beep", Text: "msg" },
                { Tag: "Biep", Text: "msg" },
                { Tag: "Sonner", Text: "msg" },
                { Tag: "msg", Text: CharacterNickname(Player) + " " + getWingVerb() + " " + Player.BCAR.bcarSettings.genderDefault.capPossessive.toLocaleLowerCase() + " wings." }
              ]
            });
            WingFlap();
            return;
          }
        }
      }
      next(args);
    });
  }

  async function BCARChatRoomMenuDraw() {
    modApi.hookFunction('ChatRoomMenuDraw', 4, (args, next) => {
      if (Player.BCAR.bcarSettings.animationButtonsEnable) {
        if (Player.BCAR.bcarSettings.animationButtonsPosition === "upperleft") {
          if (Player.BCAR.bcarSettings.earWigglingEnable) {
            DrawButton(0, 135, 45, 45, "EAR", "White", "", "Wiggle Ears");
          }
          if (Player.BCAR.bcarSettings.tailWaggingEnable) {
            DrawButton(0, 180, 45, 45, "TAIL", "White", "", "Wag Tail");
          }
          if (Player.BCAR.bcarSettings.wingFlappingEnable) {
            DrawButton(0, 225, 45, 45, "WINGS", "White", "", "Flap Wings");
          }
        }
        if (Player.BCAR.bcarSettings.animationButtonsPosition === "lowerleft") {
          if (Player.BCAR.bcarSettings.earWigglingEnable) {
            DrawButton(0, 860, 45, 45, "EAR", "White", "", "Wiggle Ears");
          }
          if (Player.BCAR.bcarSettings.tailWaggingEnable) {
            DrawButton(0, 905, 45, 45, "TAIL", "White", "", "Wag Tail");
          }
          if (Player.BCAR.bcarSettings.wingFlappingEnable) {
            DrawButton(0, 950, 45, 45, "WINGS", "White", "", "Flap Wings");
          }
        }
        if (Player.BCAR.bcarSettings.animationButtonsPosition === "lowerright") {
          if (Player.BCAR.bcarSettings.earWigglingEnable) {
            DrawButton(955, 860, 45, 45, "EAR", "White", "", "Wiggle Ears");
          }
          if (Player.BCAR.bcarSettings.tailWaggingEnable) {
            DrawButton(955, 905, 45, 45, "TAIL", "White", "", "Wag Tail");
          }
          if (Player.BCAR.bcarSettings.wingFlappingEnable) {
            DrawButton(955, 950, 45, 45, "WINGS", "White", "", "Flap Wings");
          }
        }
      }
      next(args)
    })
  };

  function checkUpdates() {
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
        Blush: [{ ExpressionModifier: 1, Duration: 5000 }],
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
    Hug: {
      Type: "Hug",
      Duration: 10000,
      Priority: 150,
      Expression: {
        Mouth: [{ Expression: "Happy", Duration: 10000 }],
        Eyes: [{ Expression: "ShylyHappy", Duration: 10000 }],
        Eyes2: [{ Expression: "ShylyHappy", Duration: 10000 }],
        Eyebrows: [{ Expression: "Raised", Duration: 10000 }],
      },
    },
    Nuzzle: {
      Type: "Nuzzle",
      Duration: 10000,
      Priority: 150,
      Expression: {
        Mouth: [{ Expression: "Happy", Duration: 10000 }],
        Eyes: [{ Expression: "ShylyHappy", Duration: 10000 }],
        Eyes2: [{ Expression: "ShylyHappy", Duration: 10000 }],
        Eyebrows: [{ Expression: "Raised", Duration: 10000 }],
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
    {
      Mod: "BCAR+",
      Event: "Hug",
      Type: "Activity",
      Matchers: [
        {
          Tester: /^ChatOther-.*-LSCG_Hug$/u,
        },
        {
          Tester: /^ChatSelf-.*-LSCG_Hug$/u,
        },
      ],
    },
    {
      Mod: "BCAR+",
      Event: "Nuzzle",
      Type: "Activity",
      Matchers: [
        {
          Tester: /^ChatOther-.*-LSCG_Nuzzle$/u,
        },

      ],
    },


  ]
  //End of BCAR+ Expression

  //Functions

  const typeAction = {
    cat: {
      EarCaress: [
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes and purrs as %OPP_NAME% pets %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% twitches %POSSESSIVE% ears, enjoying the sensation." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, savoring the ear scratch." },
        { sound: "", action: "%NAME%'s ear flicks with delight at %OPP_NAME%'s caresses." },
        { sound: "", action: "%NAME% nuzzles into %OPP_NAME%'s hand, savoring the ear rub." },
        { sound: "", action: "%NAME% lets out a contented sigh as %OPP_NAME% pets %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s hand, enjoying the ear scratch." },
        { sound: "", action: "%NAME% makes soft noises of enjoyment as %OPP_NAME% rubs %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% visibly relaxes under %OPP_NAME%'s touch on %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% nuzzles into %OPP_NAME%'s hand, relishing the gentle touch on %POSSESSIVE% ear." },
        { sound: "", action: "%OPP_NAME%'s soothing touch causes %NAME% to relax and wiggle %POSSESSIVE% ear in contentment." },
        { sound: "", action: "%NAME% presses %POSSESSIVE% ear into %OPP_NAME%'s hand, soaking in the affection." },
      ],
      EarNibble: [
        { sound: "", action: "%OPP_NAME%'s soft nibbles send shivers down %NAME%'s spine, making %POSSESSIVE% ear twitch." },
        { sound: "", action: "%NAME%'s ear twitches with pleasure as %OPP_NAME% nibbles it." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, savoring the ear nibble." },
        { sound: "", action: "%NAME%'s ear twitches with joy as %OPP_NAME% nibbles %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% nuzzles closer to %OPP_NAME%, enjoying the ear nibble." },
        { sound: "", action: "%NAME% lets out a contented purr as %OPP_NAME% nibbles %POSSESSIVE% ear." },
        { sound: "", action: "With a flick of %POSSESSIVE% ear, %NAME% expresses %POSSESSIVE% enjoyment of %OPP_NAME%'s attention." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, purring as %OPP_NAME% teases %POSSESSIVE% ear." },
      ],
      EarLick: [
        { sound: "", action: "A soft meow escapes %NAME% as %OPP_NAME% licks %POSSESSIVE% ear" },
        { sound: "", action: "%NAME% twitches %POSSESSIVE% ear with pleasure as %OPP_NAME% licks it." },
        { sound: "", action: "%NAME% nuzzles closer to %OPP_NAME%, savoring the ear lick." },
        { sound: "", action: "%NAME%'s ear twitches with delight as %OPP_NAME% licks %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s ear flickers with enjoyment as %OPP_NAME% licks it." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, contentedly purring as %OPP_NAME% licks %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% leans into the attention, %POSSESSIVE% ears are twitching as %OPP_NAME% licks it." },
      ],
      EarKiss: [
        { sound: "", action: "%NAME% nuzzles %OPP_NAME%'s cheek, seeming to enjoy the ear kiss." },
        { sound: "", action: "%NAME%'s ears twitch in delight as %OPP_NAME% kisses %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, relishing in the affection from %OPP_NAME%'s ear kiss." },
        { sound: "", action: "%NAME% meows contentedly, clearly enjoying the ear kiss from %OPP_NAME%." },
        { sound: "", action: "%NAME% leans into the ear kiss from %OPP_NAME%, basking in the love and attention." },
        { sound: "", action: "%NAME% lets out a soft purr as %OPP_NAME% gives %POSSESSIVE% a kiss on the ear." },
        { sound: "", action: "%OPP_NAME%'s kiss on the ear brings a happy grin to %NAME%'s face." },
        { sound: "", action: "%NAME% can't help but purr as %OPP_NAME% plants a kiss on %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s affection, a contented grin on %POSSESSIVE% face." },
        { sound: "", action: "%OPP_NAME%'s kiss makes %NAME% feel safe, %POSSESSIVE% ears folding backwards in trust." },
      ],
      HeadBrush: [
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, thoroughly enjoying the brush from %OPP_NAME%." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, enjoying the feeling of %OPP_NAME% brushing %POSSESSIVE% hair." },
        { sound: "", action: "%NAME% relaxes into %OPP_NAME%'s touch as %OPP_NAME% brushes %POSSESSIVE% hair." },
        { sound: "", action: "%NAME% purrs contently as %OPP_NAME% strokes %POSSESSIVE% hair." },
        { sound: "", action: "%NAME%'s ears perk up as %OPP_NAME% brushes %POSSESSIVE% hair." },
        { sound: "", action: "%NAME% twitches %POSSESSIVE% ears in delight as %OPP_NAME% smooths out tangles in %POSSESSIVE% hair." },
        { sound: "", action: "%NAME%'s body sways with the rhythm of %OPP_NAME%'s brush strokes." },
        { sound: "", action: "%NAME%'s body relaxes as %OPP_NAME% brushes away all of %POSSESSIVE% worries." },
        { sound: "", action: "%NAME% hums with contentment while %OPP_NAME% brushes %POSSESSIVE% hair." },
        { sound: "", action: "%NAME% nuzzles %OPP_NAME% affectionately as %POSSESSIVE% hair is brushed." },
      ],
      HeadPat: [
        { sound: "", action: "%NAME% is purring contently as %OPP_NAME% gently pets %POSSESSIVE% head." },
        { sound: "", action: "%NAME% is closing %POSSESSIVE% eyes and nuzzling into %OPP_NAME%'s hand as %OPP_NAME% pets %POSSESSIVE% head." },
        { sound: "", action: "%NAME%'s ears are twitching with pleasure as %OPP_NAME% pets %POSSESSIVE% head." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s hand, enjoying the gentle petting on %POSSESSIVE% head." },
        { sound: "", action: "%NAME% is relaxing completely as %OPP_NAME% runs %POSSESSIVE% hand over %POSSESSIVE% head." },
        { sound: "", action: "With eyes closed, %NAME% purrs as %OPP_NAME% pets %POSSESSIVE% head, %POSSESSIVE% ears twitching with each stroke." },
        { sound: "", action: "%NAME%'s ears flop adorably as %OPP_NAME% pets %INTENSIVE%." },
      ],
      CaressBack: [
        { sound: "", action: "%NAME%'s tail twitches happily as %OPP_NAME% strokes %POSSESSIVE% fur." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes in contentment, enjoying the sensation of %OPP_NAME%'s gentle touch." },
        { sound: "", action: "%NAME% is purring with delight as %OPP_NAME% runs a hand down %POSSESSIVE% back." },
        { sound: "", action: "%NAME%'s tail curves into a satisfied arch as %OPP_NAME% pets %POSSESSIVE% back." },
        { sound: "", action: "%NAME% rumbles contentedly as %OPP_NAME% strokes %POSSESSIVE% back, tail twitching in pleasure." },
        { sound: "", action: "%NAME%'s tail curls around %OPP_NAME%'s hand, a sign of enjoyment as %NAME% relaxes." },
      ],
      MassageBack: [
        { sound: "", action: "%NAME%'s tail sways as %OPP_NAME% pampers %POSSESSIVE% with a back massage." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes and purrs as %OPP_NAME% gently rubs %POSSESSIVE% back." },
        { sound: "", action: "%NAME%'s tail twitches with pleasure as %OPP_NAME% massages %POSSESSIVE% back." },
        { sound: "", action: "%NAME% stretches and relaxes under %OPP_NAME%'s skilled touch." },
        { sound: "", action: "%NAME%'s purrs become louder as %OPP_NAME% massages %POSSESSIVE% back." },
        { sound: "", action: "%NAME%'s tail twitches back and forth with delight as %OPP_NAME% massages %POSSESSIVE% back." },
      ],
      CaressButt: [
        { sound: "", action: "%NAME%'s tail twirls with happiness as %OPP_NAME% caresses %POSSESSIVE% butt." },
        { sound: "", action: "%NAME%'s purrs become louder as %OPP_NAME% massages %POSSESSIVE% butt." },
        { sound: "", action: "%NAME% purrs and the tips of %POSSESSIVE% tail twitches in pleasure as %OPP_NAME% strokes %POSSESSIVE% butt." },
        { sound: "", action: "%NAME%'s tail twirls and %POSSESSIVE% eyes soften as %OPP_NAME% rubs %POSSESSIVE% butt." },
        { sound: "", action: "%NAME%'s tail wags eagerly as %OPP_NAME% runs some fingers along %POSSESSIVE% butt." },
        { sound: "", action: "%OPP_NAME%'s soft touch makes %NAME% purr with joy and wag %POSSESSIVE% tail." },
        { sound: "", action: "A deep purr rumbles from %NAME% as %OPP_NAME% strokes %POSSESSIVE% butt." },
      ],
    },
    dog: {
      EarCaress: [
        { sound: "", action: "%NAME%'s eyes close as %OPP_NAME% rubs %POSSESSIVE% ear gently." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s hand, enjoying the ear scratch." },
        { sound: "", action: "%NAME%'s ear perks up as %OPP_NAME% strokes it softly." },
        { sound: "", action: "%NAME% sighs contentedly as %OPP_NAME% massages %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s ear flops happily under %OPP_NAME%'s touch." },
        { sound: "", action: "%NAME%'s ear vibrates with pleasure as %OPP_NAME% rubs it." },
        { sound: "", action: "%NAME% lets out a soft growl, enjoying %OPP_NAME%'s ear rub." },
      ],
      EarNibble: [
        { sound: "", action: "%NAME%'s ear quivers with delight as %OPP_NAME% nibbles it." },
        { sound: "", action: "%NAME% lets out a happy sigh as %OPP_NAME% gently nips %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s ear perks up, eager for more from %OPP_NAME%'s nibbling." },
        { sound: "", action: "%NAME%'s ear twitches as %OPP_NAME% gently nibbles it." },
        { sound: "", action: "%NAME%'s body relaxes as %OPP_NAME% continues to nibble %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% lets out a contented sigh as %OPP_NAME% nibbles %POSSESSIVE% ear." },
      ],
      EarLick: [
        { sound: "", action: "%NAME% grins, reveling in the attention from %OPP_NAME% licking %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s ear wiggles, %POSSESSIVE% tail thumping, as %OPP_NAME% licks." },
        { sound: "", action: "%NAME% eagerly leans into %OPP_NAME%'s ear licking, enjoying the sensation." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes and relaxes as %OPP_NAME% licks %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s whole body shivers with happiness as %OPP_NAME% licks %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s ear twitches with delight as %OPP_NAME% licks it." },
      ],
      EarKiss: [
        { sound: "", action: "%OPP_NAME%'s kiss on the ear brings a happy grin to %NAME%'s face." },
        { sound: "", action: "%NAME% lets out a content sigh as %OPP_NAME% kisses %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s ear twitches in delight as %OPP_NAME% gives it a kiss." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes and relaxes as %OPP_NAME% kisses %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s ear flops affectionately as %OPP_NAME% plants a kiss." },
        { sound: "", action: "%NAME% gives a contented sigh as %OPP_NAME% kisses %POSSESSIVE% ear." },
      ],
      HeadBrush: [
        { sound: "", action: "%NAME%'s muscles relax as %OPP_NAME% expertly brushes %POSSESSIVE% hair." },
        { sound: "", action: "%NAME%'s breathing slows down, relishing the brush from %OPP_NAME%." },
        { sound: "", action: "%NAME%'s eyes sparkle as %OPP_NAME% brushes away any tangles in %POSSESSIVE% hair." },
        { sound: "", action: "%NAME%'s body sways with the rhythm of %OPP_NAME%'s brush strokes." },
        { sound: "", action: "%NAME% nuzzles against %OPP_NAME% while %OPP_NAME% brushes %POSSESSIVE% hair." },
        { sound: "", action: "%NAME%'s body relaxes as %OPP_NAME% brushes away all of %POSSESSIVE% worries." },
        { sound: "", action: "%NAME% hums with contentment while %OPP_NAME% brushes %POSSESSIVE% hair." },
      ],
      HeadPat: [
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes in bliss as %OPP_NAME% strokes %POSSESSIVE% head." },
        { sound: "", action: "%NAME% leans into the petting, %POSSESSIVE% ears flicking contentedly." },
        { sound: "", action: "A soft sigh escapes %NAME% as %OPP_NAME% gently pets %POSSESSIVE% head." },
        { sound: "", action: "%NAME% nuzzles into %OPP_NAME%'s hand, %POSSESSIVE% ears twitching with pleasure." },
        { sound: "", action: "%NAME% gives a content sigh, settling into the comfort of %OPP_NAME%'s touch." },
        { sound: "", action: "%NAME% leans into the petting, making %POSSESSIVE% body completely relaxed." },
      ],
      CaressBack: [
        { sound: "", action: "%NAME%'s tail wags as %OPP_NAME% strokes %POSSESSIVE% back." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, tail wagging happily." },
        { sound: "", action: "%NAME%'s tail wags happily as %OPP_NAME% scratches %POSSESSIVE% back." },
        { sound: "", action: "%NAME%'s eyes close in contentment as %OPP_NAME% rubs %POSSESSIVE% back." },
        { sound: "", action: "%NAME%'s eyes close in bliss as %OPP_NAME% pampers %POSSESSIVE% back." },
        { sound: "", action: "%NAME%'s tail wags back and forth as %OPP_NAME% rubs %POSSESSIVE% back." },
      ],
      MassageBack: [
        { sound: "", action: "%NAME%'s tail wags contentedly as %OPP_NAME% massages %POSSESSIVE% back." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, enjoying the sensation of the massage." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, tail swaying back and forth." },
        { sound: "", action: "%NAME% lets out a soft sigh, tail lazily wagging as %OPP_NAME% massages." },
        { sound: "", action: "%NAME% is savoring every moment, wagging %POSSESSIVE% tail joyfully." },
        { sound: "", action: "%NAME% is completely relaxed and wags %POSSESSIVE% tail contentedly." },
      ],
      CaressButt: [
        { sound: "", action: "%OPP_NAME%'s touch sends shivers down %NAME%'s back, causing %POSSESSIVE% tail to quiver." },
        { sound: "", action: "%NAME%'s tail twitches with pleasure as %OPP_NAME% rubs %POSSESSIVE% butt." },
        { sound: "", action: "%NAME% is in pure heaven, tail wagging at full speed." },
        { sound: "", action: "%NAME%'s tail wags eagerly as %OPP_NAME% runs some fingers along %POSSESSIVE% butt." },
        { sound: "", action: "Ears perked up, %NAME% revels in the attention on %POSSESSIVE% butt." },
        { sound: "", action: "%NAME%'s tail curls happily as %OPP_NAME% pets %POSSESSIVE% butt." },
      ],
    },
    fox: {
      EarCaress: [
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes and leans into %OPP_NAME%'s touch." },
        { sound: "", action: "%NAME% emits a contented sigh as %OPP_NAME% rubs %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% tilts %POSSESSIVE% head to enjoy %OPP_NAME%'s touch more." },
        { sound: "", action: "%NAME%'s ear twitches with each gentle stroke from %OPP_NAME%" },
        { sound: "", action: "%NAME% makes soft noises of enjoyment as %OPP_NAME% rubs %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% visibly relaxes under %OPP_NAME%'s touch on %POSSESSIVE% ear." },
      ],
      EarNibble: [
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, relishing in the sensation of %OPP_NAME% nibbling %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s ear flickers as %OPP_NAME% tenderly nibbles on it." },
        { sound: "", action: "%OPP_NAME%'s gentle nibbling causes %NAME% to give a contented sigh." },
        { sound: "", action: "%NAME%'s ear quivers in pleasure as %OPP_NAME% gives it a soft nibble." },
        { sound: "", action: "%OPP_NAME%'s nibbling on %NAME%'s ear elicits a low, satisfied rumble from the fox." },
        { sound: "", action: "%NAME%'s ear twitches with excitement as %OPP_NAME% playfully nibbles on it." },
      ],
      EarLick: [
        { sound: "", action: "%NAME% shivers with pleasure as %OPP_NAME% licks %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% wiggles %POSSESSIVE% ear, soaking up the attention from %OPP_NAME%'s lick." },
        { sound: "", action: "%NAME% lets out a happy yip as %OPP_NAME% licks %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% relaxes, enjoying the sensation of %OPP_NAME% licking %POSSESSIVE% ear." },
        { sound: "", action: "%OPP_NAME%'s lick sends shivers down %NAME%'s spine, causing %POSSESSIVE% ears to twitch." },
        { sound: "", action: "%NAME%'s eyes close in contentment as %OPP_NAME% gently licks %POSSESSIVE% ears." },
      ],
      EarKiss: [
        { sound: "", action: "%NAME% is enjoying the kiss on %POSSESSIVE% ear, %POSSESSIVE% ear twitching with pleasure." },
        { sound: "", action: "%NAME% leans into the kiss, %POSSESSIVE% ear flicking with delight." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, relishing the feel of %OPP_NAME%'s kiss on %POSSESSIVE% ear." },
        { sound: "", action: "A shiver runs down %NAME%'s back as %OPP_NAME%'s kiss reaches %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% tilts %POSSESSIVE% head, %POSSESSIVE% ear twitching in response to the soft kiss from %OPP_NAME%." },
        { sound: "", action: "%NAME% nuzzles into %OPP_NAME%, %POSSESSIVE% ear quivering with contentment." },
      ],
      HeadBrush: [
        { sound: "", action: "%NAME% relaxes into %OPP_NAME%'s touch, %POSSESSIVE% ears drooping contentedly." },
        { sound: "", action: "%NAME% lets out a happy sigh as %OPP_NAME% brushes %POSSESSIVE% hair." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, thoroughly enjoying the brush from %OPP_NAME%." },
        { sound: "", action: "%NAME%'s ears flicker as %OPP_NAME% smooths down %POSSESSIVE% hair." },
        { sound: "", action: "%NAME%'s hair ruffles in the breeze as %OPP_NAME% brushes it." },
        { sound: "", action: "%NAME% nuzzles %OPP_NAME% affectionately as %POSSESSIVE% hair is brushed." },
        { sound: "", action: "%NAME% lets out a happy yip as %OPP_NAME% brushes %POSSESSIVE% hair." },
      ],
      HeadPat: [
        { sound: "", action: "%NAME% lets out a happy little chirp at the attention from %OPP_NAME%." },
        { sound: "", action: "%NAME%'s ears twitch as %OPP_NAME% gently rubs %POSSESSIVE% head." },
        { sound: "", action: "%NAME% gives a soft sigh, enjoying %OPP_NAME%'s affectionate touch." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s hand, closing %POSSESSIVE% eyes contentedly." },
        { sound: "", action: "%NAME%'s ears perk up happily at the touch from %OPP_NAME%." },
        { sound: "", action: "%NAME%'s ears flop adorably as %OPP_NAME% pets %INTENSIVE%." },
      ],
      CaressBack: [
        { sound: "", action: `%NAME%'s tail twirls and %POSSESSIVE% eyes soften as %OPP_NAME% rubs %POSSESSIVE% back.` },
        { sound: "", action: `%NAME% tilts %POSSESSIVE% head back and wags %POSSESSIVE% tail happily as %OPP_NAME% scratches %POSSESSIVE% back.` },
        { sound: "", action: `%NAME%'s eyes close in bliss as %OPP_NAME% scratches %POSSESSIVE% spine.` },
        { sound: "", action: `%NAME% let's out a content sigh as %OPP_NAME% gently rubs %POSSESSIVE% back.` },
        { sound: "", action: `%NAME%'s tail wags eagerly as %OPP_NAME% runs some fingers along %POSSESSIVE% back.` },
        { sound: "", action: `%NAME%'s tail twitches with joy as %OPP_NAME% pats %POSSESSIVE% back.` },
      ],
      MassageBack: [
        { sound: "", action: "%NAME% lets out a happy sigh and %POSSESSIVE% tail flickers with joy as %OPP_NAME% massages %POSSESSIVE% back." },
        { sound: "", action: "%NAME%'s tail wags happily as %OPP_NAME% massages %POSSESSIVE% back." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes in bliss as %OPP_NAME% rubs %POSSESSIVE% back." },
        { sound: "", action: "%NAME%'s tail twitches with pleasure as %OPP_NAME% massages %POSSESSIVE% back." },
        { sound: "", action: "%OPP_NAME%'s skilled hands have %NAME%'s tail wagging in pure joy" },
        { sound: "", action: "%NAME%'s tail twitches back and forth with delight as %OPP_NAME% massages %POSSESSIVE% back." },
      ],
      CaressButt: [
        { sound: "", action: "%NAME%'s tail twirls with happiness as %OPP_NAME% caresses %POSSESSIVE% butt." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, tail thumping with pleasure as %OPP_NAME% rubs %POSSESSIVE% butt." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes and wags %POSSESSIVE% tail with delight as %OPP_NAME% caresses %POSSESSIVE% butt." },
        { sound: "", action: "%NAME%'s tail wags eagerly as %OPP_NAME% runs some fingers along %POSSESSIVE% butt." },
        { sound: "", action: "%NAME%'s tail twitches in pleasure as %OPP_NAME% rubs %POSSESSIVE% butt." },
        { sound: "", action: "%NAME% relaxes and leans into %OPP_NAME%'s touch, tail wagging with joy." },
      ],
    },
    mouse: {
      EarCaress: [
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, savoring the caress of %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes in bliss as %OPP_NAME% strokes %POSSESSIVE% ear." },
        { sound: "", action: "%OPP_NAME%'s gentle touch sends shivers down %NAME%'s spine and wiggles %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% cuddles closer to %OPP_NAME%, basking in the attention to %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% twitches %POSSESSIVE% ear in delight as %OPP_NAME% rubs it tenderly." },
        { sound: "", action: "%NAME% nuzzles into %OPP_NAME%'s hand, relishing the gentle touch on %POSSESSIVE% ear." },
      ],
      EarNibble: [
        { sound: "", action: "%OPP_NAME%'s gentle nibbling causes %NAME%'s ear to quiver with pleasure." },
        { sound: "", action: "%NAME% lets out a contented sigh as %OPP_NAME% nibbles %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes and relishes in the sensation of %OPP_NAME% nibbling %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% shivers with pleasure as %OPP_NAME% tenderly nibbles %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s ear twitches with excitement as %OPP_NAME% playfully nibbles on it." },
        { sound: "", action: "With a flick of %POSSESSIVE% ear, %NAME% expresses %POSSESSIVE% enjoyment of %OPP_NAME%'s attention." },
      ],
      EarLick: [
        { sound: "", action: "%NAME%'s ears twitch with delight as %OPP_NAME% licks %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% lets out a contented sigh as %OPP_NAME% tenderly licks %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% shivers with pleasure as %OPP_NAME% delicately licks %POSSESSIVE% ear." },
        { sound: "", action: "%NAME%'s ear perks up, eager for more affection as %OPP_NAME% licks it." },
        { sound: "", action: "%OPP_NAME%'s lick sends shivers down %NAME%'s spine, causing %POSSESSIVE% ears to quiver." },
        { sound: "", action: "%NAME% relaxes, enjoying the sensation of %OPP_NAME% licking %POSSESSIVE% ear." },
      ],
      EarKiss: [
        { sound: "", action: "%NAME%'s eyes close in bliss as %OPP_NAME% kisses %POSSESSIVE% ear." },
        { sound: "", action: "%OPP_NAME%'s kiss sends shivers down %NAME%'s back, %POSSESSIVE% ears perking up." },
        { sound: "", action: "%NAME% can't help but squeak as %OPP_NAME% plants a kiss on %POSSESSIVE% ear." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s affection, a contented grin on %POSSESSIVE% face." },
        { sound: "", action: "%OPP_NAME%'s kiss makes %NAME% feel safe, %POSSESSIVE% ears folding backwards in trust." },
        { sound: "", action: "%NAME% lets out a contented sigh as %OPP_NAME% kisses %POSSESSIVE% ear." },
      ],
      HeadBrush: [
        { sound: "", action: "%NAME%'s ears perk up as %OPP_NAME% brushes %POSSESSIVE% hair." },
        { sound: "", action: "%NAME% relaxes into %OPP_NAME%'s touch, enjoying the brush." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, savoring the sensation of the brush." },
        { sound: "", action: "%NAME%'s ears flop over in happiness as %OPP_NAME% attends to %POSSESSIVE% hair." },
        { sound: "", action: "%NAME%'s eyes half-close in contentment as %OPP_NAME% brushes %POSSESSIVE% hair." },
        { sound: "", action: "%NAME%'s ears twitch with delight at the sensation of the brush." },
      ],
      HeadPat: [
        { sound: "", action: "%NAME% nuzzles into %OPP_NAME%'s hand, seeking more pets on %POSSESSIVE% head." },
        { sound: "", action: "%NAME% relaxes completely, basking in the attention from %OPP_NAME%." },
        { sound: "", action: "%NAME%'s ears perk up at the touch of %OPP_NAME%'s hand on %POSSESSIVE% head." },
        { sound: "", action: "%NAME%'s ears twitch with delight as %OPP_NAME% pets %POSSESSIVE% head." },
        { sound: "", action: "%NAME% gives a happy squeak as %OPP_NAME% pets %POSSESSIVE% head." },
        { sound: "", action: "%OPP_NAME%'s gentle touch makes %NAME%'s eyes close in pleasure." },
      ],
      CaressBack: [
        { sound: "", action: "%NAME% savors the feeling of %OPP_NAME%'s touch, %POSSESSIVE% tail lazily swishing back and forth." },
        { sound: "", action: "%NAME% shivers with delight as %OPP_NAME% runs some fingers along %POSSESSIVE% back, %POSSESSIVE% tail wags excitedly." },
        { sound: "", action: "%NAME% relaxes into %OPP_NAME%'s embrace, %POSSESSIVE% tail swaying softly." },
        { sound: "", action: "%NAME%'s tail whips back and forth in delight as %OPP_NAME% strokes %POSSESSIVE% back." },
        { sound: "", action: "%NAME% squeaks with happiness as %OPP_NAME% pets %POSSESSIVE% back, %POSSESSIVE% tail curling into a contented loop." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, %POSSESSIVE% tail giving tiny little flickers of pleasure." },
      ],
      MassageBack: [
        { sound: "", action: "%NAME%'s tail wags happily as %OPP_NAME% massages %POSSESSIVE% back." },
        { sound: "", action: "%OPP_NAME%'s fingers work magic on %NAME%'s back, eliciting happy squeaks." },
        { sound: "", action: "%NAME% can barely contain %POSSESSIVE% excitement as %OPP_NAME% massages %POSSESSIVE% back." },
        { sound: "", action: "%NAME%'s tail wags in delight as %OPP_NAME% gently massages %POSSESSIVE% back." },
        { sound: "", action: "%OPP_NAME%'s touch sends shivers down %NAME%'s spine, causing %POSSESSIVE% tail to quiver with pleasure." },
        { sound: "", action: "%OPP_NAME%'s massage has %NAME% squeaking with happiness, tail twirling with joy." },
      ],
      CaressButt: [
        { sound: "", action: "%NAME%'s tail twitches with pleasure as %OPP_NAME% caresses %POSSESSIVE% butt." },
        { sound: "", action: "%NAME%'s eyes close in bliss as %OPP_NAME% rubs %POSSESSIVE% butt." },
        { sound: "", action: "%NAME% leans into %OPP_NAME%'s touch, tail thumping with happiness." },
        { sound: "", action: "%NAME% closes %POSSESSIVE% eyes, letting out a contented squeak, as %OPP_NAME% caresses %POSSESSIVE% butt." },
        { sound: "", action: "With a soft squeak, %NAME% leans into %OPP_NAME%'s touch, tail twitching and eyes half-closed in bliss." },
        { sound: "", action: "%NAME% lets out a contented squeak, %POSSESSIVE% tail twirling around in delight." },
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
    //console.log(index);
    ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{ Tag: "Beep", Text: replace_template(actions[index].action, source_name) }] });
    if (actions[index].sound.length) ServerSend("ChatRoomChat", { Type: "Chat", Content: actions[index].sound })
  }


  function ArousalEarCaress() {
    if (Player.BCAR.bcarSettings.arousalEnable === true) {
      Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 2;
      ActivityChatRoomArousalSync(Player);
      if (Player?.BCT?.splitOrgasmArousal === undefined) {
      }
      else {
        Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 15;
        BCT_API?.ActivityChatRoomBCTArousalSync(Player);
      }
    }
  }

  function ArousalEarNibble() {
    if (Player.BCAR.bcarSettings.arousalEnable === true) {
      Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 10;
      ActivityChatRoomArousalSync(Player);
      if (Player?.BCT?.splitOrgasmArousal === undefined) {
      }
      else {
        Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 20;
        BCT_API?.ActivityChatRoomBCTArousalSync(Player);
      }
    }
  }

  function ArousalEarLick() {
    if (Player.BCAR.bcarSettings.arousalEnable === true) {
      Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 7;
      ActivityChatRoomArousalSync(Player);
      if (Player?.BCT?.splitOrgasmArousal === undefined) {
      }
      else {
        Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 20;
        BCT_API?.ActivityChatRoomBCTArousalSync(Player);
      }
    }
  }

  function ArousalEarKiss() {
    if (Player.BCAR.bcarSettings.arousalEnable === true) {
      Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 7;
      ActivityChatRoomArousalSync(Player);
      if (Player?.BCT?.splitOrgasmArousal === undefined) {
      }
      else {
        Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 20;
        BCT_API?.ActivityChatRoomBCTArousalSync(Player);
      }
    }
  }

  function ArousalHeadBrush() {
    if (Player.BCAR.bcarSettings.arousalEnable === true) {
      if (Player?.BCT?.splitOrgasmArousal === undefined) {
      }
      else {
        Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 2;
        BCT_API?.ActivityChatRoomBCTArousalSync(Player);
      }
    }
  }

  function ArousalHeadPat() {
    if (Player.BCAR.bcarSettings.arousalEnable === true) {
      Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 1;
      ActivityChatRoomArousalSync(Player);
      if (Player?.BCT?.splitOrgasmArousal === undefined) {
      }
      else {
        Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 2;
        BCT_API?.ActivityChatRoomBCTArousalSync(Player);
      }
    }
  }

  function ArousalCaressBack() {
    if (Player.BCAR.bcarSettings.arousalEnable === true) {
      if (Player?.BCT?.splitOrgasmArousal === undefined) {
      }
      else {
        Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 2;
        BCT_API?.ActivityChatRoomBCTArousalSync(Player);
      }
    }
  }

  function ArousalMassageBack() {
    if (Player.BCAR.bcarSettings.arousalEnable === true) {
      if (Player?.BCT?.splitOrgasmArousal === undefined) {
      }
      else {
        Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 2;
        BCT_API?.ActivityChatRoomBCTArousalSync(Player);
      }
    }
  }

  function ArousalCaressButt() {
    if (Player.BCAR.bcarSettings.arousalEnable === true) {
      Player.ArousalSettings.ProgressTimer = Player.ArousalSettings.Progress + 1;
      ActivityChatRoomArousalSync(Player);
      if (Player?.BCT?.splitOrgasmArousal === undefined) {
      }
      else {
        Player.BCT.splitOrgasmArousal.ProgressTimer = Player.BCT.splitOrgasmArousal.arousalProgress + 5;
        BCT_API?.ActivityChatRoomBCTArousalSync(Player);
      }
    }
  }

  function Sleep() {
    if (InventoryGet(Player, "Emoticon")?.Property?.Expression !== "Sleep") {  // check if Expression is not sleep
      //console.log("Sleep - Check")
      let numberBlinks = 1;
      let delay = 3000;
      for (let i = 0; i < numberBlinks; i++) {
        setTimeout(function () { CharacterSetFacialExpression(Player, "Eyes", "Horny"); }, i * delay);
        setTimeout(function () { CharacterSetFacialExpression(Player, "Eyes", "Closed"), CharacterSetFacialExpression(Player, "Emoticon", "Sleep"); }, i * delay + delay / 2);
      }
    }
  }

  function Wake() {
    if (InventoryGet(Player, "Emoticon")?.Property?.Expression === "Sleep") { // check if Expression is sleep
      //console.log("Wake - Check")
      let numberBlinks = 5;
      let delay = 3000;
      for (let i = 0; i < numberBlinks; i++) {
        setTimeout(function () { CharacterSetFacialExpression(Player, "Eyes", "Horny"); }, i * delay);
        setTimeout(function () { CharacterSetFacialExpression(Player, "Eyes", null), CharacterSetFacialExpression(Player, "Emoticon", null), CharacterSetActivePose(Player, "Kneel"); }, i * delay + delay / 2);
      }
    }
  }


  function EarWiggle() {
    if (Player.BCAR.bcarSettings.earWigglingEnable === true) {
      let earsVariations = [Player.BCAR.bcarSettings.earsDefault.ears2, Player.BCAR.bcarSettings.earsDefault.ears1];
      let earsColor = [Player.BCAR.bcarSettings.earsDefault.earsColor2, Player.BCAR.bcarSettings.earsDefault.earsColor1];
      let earsProperties = [Player.BCAR.bcarSettings.earsDefault.earsProperties2, Player.BCAR.bcarSettings.earsDefault.earsProperties1];
      let numberWiggles = parseInt(Player.BCAR.bcarSettings.earsDefault.earsCount);
      let delay = parseInt(Player.BCAR.bcarSettings.earsDefault.earsDelay);
      for (let i = 0; i < numberWiggles; i++) {
        setTimeout(function () {
          const ears = InventoryWear(Player, earsVariations[i % earsVariations.length], "HairAccessory2", earsColor[i % earsColor.length], undefined, undefined, undefined, false);
          if (ears) ears.Property = earsProperties[i % earsProperties.length];
          CharacterRefresh(Player, false);
          ChatRoomCharacterItemUpdate(Player, "HairAccessory2");
        }, i * delay);
      }
    }
  }

  function TailWag() {
    if (Player.BCAR.bcarSettings.tailWaggingEnable === true) {
      let tailsVariations = [Player.BCAR.bcarSettings.tailsDefault.tails2, Player.BCAR.bcarSettings.tailsDefault.tails1];
      let tailsColor = [Player.BCAR.bcarSettings.tailsDefault.tailsColor2, Player.BCAR.bcarSettings.tailsDefault.tailsColor1];
      let tailsProperties = [Player.BCAR.bcarSettings.tailsDefault.tailsProperty2, Player.BCAR.bcarSettings.tailsDefault.tailsProperty1];
      let numberWags = parseInt(Player.BCAR.bcarSettings.tailsDefault.tailsCount);
      let delay = parseInt(Player.BCAR.bcarSettings.tailsDefault.tailsDelay);
      for (let i = 0; i < numberWags; i++) {
        setTimeout(function () {
          const tail = InventoryWear(Player, tailsVariations[i % tailsVariations.length], "TailStraps", tailsColor[i % tailsColor.length], undefined, undefined, undefined, false);
          if (tail) tail.Property = tailsProperties[i % tailsProperties.length]
          CharacterRefresh(Player, false);
          ChatRoomCharacterItemUpdate(Player, "TailStraps");
        }, i * delay);
      }
    }
  }

  function WingFlap() {
    if (Player.BCAR.bcarSettings.wingFlappingEnable === true) {
      let wingsVariations = [Player.BCAR.bcarSettings.wingsDefault.wings2, Player.BCAR.bcarSettings.wingsDefault.wings1];
      let wingsColor = [Player.BCAR.bcarSettings.wingsDefault.wingsColor2, Player.BCAR.bcarSettings.wingsDefault.wingsColor1];
      let wingsState = [Player.BCAR.bcarSettings.wingsDefault.wingsState2, Player.BCAR.bcarSettings.wingsDefault.wingsState1];
      let numberFlaps = parseInt(Player.BCAR.bcarSettings.wingsDefault.wingsCount);
      let delay = parseInt(Player.BCAR.bcarSettings.wingsDefault.wingsDelay);
      for (let i = 0; i < numberFlaps; i++) {
        setTimeout(function () { // this starts the scope
          const item = InventoryWear(Player, wingsVariations[i % wingsVariations.length], "Wings", wingsColor[i % wingsColor.length], undefined, undefined, undefined, false);
          const state = wingsState[i % wingsState.length];
          if (state && item) {
            item.Property ||= {};
            item.Property.TypeRecord ||= {};
            item.Property.TypeRecord.typed = state;
          }
          CharacterRefresh(Player, false);
          ChatRoomCharacterItemUpdate(Player, "Wings");
        }, // this ends the scope; item and state disappear
          i * delay);
      }
    }
  }


  function WingsSpread() {
    if (Player.BCAR.bcarSettings.wingFlappingEnable === true) {
      InventoryWear(Player, Player.BCAR.bcarSettings.wingsDefault.wings1, "Wings", Player.BCAR.bcarSettings.wingsDefault.wingsColor1);
      ChatRoomCharacterItemUpdate(Player, "Wings");
    }
  }

  function TryFly() {
    if (!InventoryGet(Player, "Wings")) {
      ChatRoomSendLocal(
        `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>You need wings to fly!</p>`.replaceAll('\n', ''), wt.info
      );
      ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{ Tag: "Beep", Text: `${CharacterNickname(Player)} tried to fly without wings.` }] });
      return false;
    }

    if (Player.BCAR.bcarSettings.wingFlappingEnable !== true) {
      ChatRoomSendLocal(
        `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Wing flaping must be enabled to fly.
                </p>`.replaceAll('\n', ''), wt.info
      );
      return false;
    }

    // Many items don't tether/chain/etc but ought to prevent flying
    const otherPreventingItemNames = ["CeilingShackles", "FloorShackles", "SuspensionCuffs", "CeilingRope", "CeilingChain", "BallChain"];
    const preventingItem = Player.Appearance.find(i => (
      ["Tethered", "Chained", "Mounted", "Enclose", "IsLeashed", "IsChained"].some(e => InventoryItemHasEffect(i, e))
      || otherPreventingItemNames.includes(i.Asset.Name)
    ));
    if (preventingItem) {
      ChatRoomSendLocal(
        `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
              <br>You can't fly because the ${preventingItem.Asset.Description} holds you down.
              </p>`.replaceAll('\n', ''), wt.info
      )
      ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{ Tag: "Beep", Text: `${CharacterNickname(Player)} tried to fly while ${Player.BCAR.bcarSettings.genderDefault.capPronoun.toLocaleLowerCase()} is held down by a ${preventingItem.Asset.Description}.` }] });
      return false;
    } else {
      Fly();
      WingFlap();
      return true;
    }
  }

  function Fly() {
    if (Player.BCAR.bcarSettings.wingFlappingEnable === true) {
      CharacterSetActivePose(Player, "LegsClosed");
      const emoticon = InventoryGet(Player, 'Emoticon');
      if (emoticon.Property === undefined) emoticon.Property = {};
      emoticon.Property.OverrideHeight = { Height: +70 };
      CurrentScreen === "ChatRoom"
        ? ChatRoomCharacterUpdate(Player)
        : CharacterRefresh(Player);
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

  function WingsHide() {
    InventoryRemove(Player, "Wings");
    CurrentScreen === 'ChatRoom'
      ? ChatRoomCharacterUpdate(Player)
      : CharacterRefresh(Player);
  }

  function StopLeaving(reason) {
    if (ChatRoomSlowtimer != 0) {
      ChatRoomMessageProcessHidden({ Content: "SlowStop" }, Player);
      const pronoun = Player.BCAR.bcarSettings.genderDefault.capPossessive.toLocaleLowerCase();
      ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{ Tag: "Beep", Text: `${CharacterNickname(Player)} was stopped from leaving by ${pronoun} ${reason}.` }] });
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
  window.ChatRoomRegisterMessageHandler({
    Priority: -200, Description: "BCAR+ Ground flying players with chains", Callback: (data, sender, msg, metadata) => {
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
      ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{ Tag: "Beep", Text: `${CharacterNickname(Player)} was dragged to the ground by a ${Asset.find(a => a.Name === asset_name).Description}.` }] })
    }
  })


  // on channel join data Type is Action, Content is ServerEnter and MemberNumber is the joining user
  //do not touch this


  window.ChatRoomRegisterMessageHandler({
    Priority: -200, Description: "BCAR+ Emotes", Callback: (data, sender, msg, metadata) => {
      if (data.Type === "Emote" && data.Sender === Player.MemberNumber) {
        var sleepMessage = data.Content;
        let patterns = [/falls.*asleep/mi, /sleeps/mi]; // matches {<any> falls <any> asleep <any>}
        let result = patterns.find(pattern => pattern.test(sleepMessage));
        if (result) {
          Sleep();
        }
      }

      if (data.Type === "Emote" && data.Sender === Player.MemberNumber) {
        var wakeMessage = data.Content;
        let patterns = [/wakes.*up/mi,]; // matches {<any> falls <any> asleep <any>}
        let result = patterns.find(pattern => pattern.test(wakeMessage));
        if (result) {
          Wake();
        }
      }

      if (data.Type === "Emote" && data.Sender === Player.MemberNumber && Player.BCAR.bcarSettings.tailEmoteEnable) {
        var wagMessage = data.Content;
        let patterns = [/wags.*tail/mi, /tail.*wagging/mi, /wagging.*tail/mi]; // matches {<any> wags <any> tail <any>}
        let result = patterns.find(pattern => pattern.test(wagMessage));
        if (result) {
          if (Player.BCT?.bctSettings?.tailWaggingEnable && Player.BCAR.bcarSettings.tailEmoteEnable) {
            ChatRoomSendLocal(
              `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Please disable tail wagging in either BCT or BCAR.
                    <br>Having them both can cause undesireable and wonky results.
                    </p>`.replaceAll('\n', ''), wt.info
            )
          }
          TailWag();
        }
      }

      if (data.Type === "Emote" && data.Sender === Player.MemberNumber && Player.BCAR.bcarSettings.earEmoteEnable) {
        var wiggleMessage = data.Content;
        let patterns = [/wiggles.*ears/mi, /ears.*wiggling/mi, /wiggling.*ears/mi]; // matches {<any> wags <any> tail <any>}
        let result = patterns.find(pattern => pattern.test(wiggleMessage));
        if (result) {
          EarWiggle();
        }
      }

      if (data.Type === "Emote" && data.Sender === Player.MemberNumber) {
        var wingsSpreadMessage = data.Content;
        let patterns = [/shows.*wings/mi, /spreads.*wings/mi]; // matches {<any> spreads <any> wings <any>}
        let result = patterns.find(pattern => pattern.test(wingsSpreadMessage));
        if (result) {
          WingsSpread();
        }
      }

      if (data.Type === "Emote" && data.Sender === Player.MemberNumber) {
        var flapMessage = data.Content;
        let patterns = [/(flaps|flutters).*wings/mi, /wings.*(flapping|fluttering)/mi, /(flapping|fluttering).*wings/mi, /wings.*(flap|flutter)/mi]; // matches {<any> flaps/flutter <any> wings <any>}
        let result = patterns.find(pattern => pattern.test(flapMessage));
        if (result) {
          WingFlap();
        }
      }

      if (data.Type === "Emote" && data.Sender === Player.MemberNumber) {
        var flyMessage = data.Content;
        let patterns = [/begins.*fly/mi, /starts.*flying/mi]; // matches {<any> begins <any> fly <any>}
        let result = patterns.find(pattern => pattern.test(flyMessage));

        if (result) {
          TryFly();
        }
      }


      if (data.Type === "Emote" && data.Sender === Player.MemberNumber) {
        var stopFlyMessage = data.Content;
        let patterns = [/(?<!Wheel of Fortune )lands/mi, /stops.*flying/mi]; // matches {<any> stops <any> fly <any>}
        let result = patterns.find(pattern => pattern.test(stopFlyMessage));
        if (result) {
          WingFlap();
          Landing();
        }
      }

      if (data.Type === "Emote" && data.Sender === Player.MemberNumber) {
        var wingsHideMessage = data.Content;
        let patterns = [/hides.*wings/mi, /folds.*wings/mi, /retracts.*wings/mi]; // matches {<any> flaps <any> wings <any>}
        let result = patterns.find(pattern => pattern.test(wingsHideMessage));
        if (result) {
          Landing();
          WingsHide();
        }
      }
    }
  });

  window.ChatRoomRegisterMessageHandler({
    Priority: 600, Description: "BCAR+ Activites", Callback: (data, sender, msg, metadata) => {
      const match = /^(\D+)(\d+)$/.exec(data.Content);
      if (sender.MemberNumber === Player.MemberNumber) switch (match?.[1]) {
        case "Orgasm": StopLeaving("own orgasm"); break;
        case "OrgasmFailSurrender": StopLeaving("ruined orgasm"); break;
        default: // nothing to do here, but linters often insist every switch() has a default case
      }
    }
  });

  window.ChatRoomRegisterMessageHandler({
    Priority: 600, Description: "BCAR+ Auto Reactions", Callback: (data, sender, msg, metadata) => {
      if (data.Type !== 'Activity') return // isn't an Activity message
      //console.log(data);
      if (!Player?.MemberNumber) return // we need Player.MemberNumber
      let target_number = data.Dictionary.find(obj => obj.TargetCharacter)?.TargetCharacter;
      target_number ||= data.Dictionary.find(obj => obj.Tag === "TargetCharacter")?.MemberNumber;
      //if (Player.MemberNumber !== data.Dictionary.find(obj => obj.Tag === "TargetCharacter")?.MemberNumber) return // we aren't the target
      //console.log({target_number});
      if (target_number !== Player.MemberNumber) return; // we aren't the target
      //const source_number = data.Dictionary.find(obj => obj.Tag === "SourceCharacter")?.MemberNumber;
      let source_number = data.Dictionary.find(obj => obj.SourceCharacter)?.SourceCharacter;
      source_number ||= data.Dictionary.find(obj => obj.Tag === "SourceCharacter")?.MemberNumber;
      //console.log({source_number});
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
    }
  });

  function bcarSettingsSave() {
    Player.ExtensionSettings.BCAR = Player.BCAR;
    ServerPlayerExtensionSettingsSync("BCAR");
  }

  async function beepNewVersion() {
    await waitFor(() => !!Player?.AccountName);
    await sleep(5000);
    ChatRoomSendLocal(
      `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React + New Version</b>
           <br>BCAR+ has been updated, please relog to get the new version.
           </p>`.replaceAll('\n', ''), wt.info
    );
    //bcarBeepNotify("BCAR+ updated", "BCAR+ got updated. Type ''/bcar changelog'' to view the changelog.");
  }

  async function bcarSettingsRemove() {
    if (delete window.Player.ExtensionSettings.BCAR.bcarSettings) {
      ServerPlayerExtensionSettingsSync("BCAR");
      //console.log("BCAR settings reset");
      await sleep(5000);
      //console.log("Assuming the settings are saved by now");
      await bcarSettingsLoad();
      //console.log("BCAR settings defaults applied");
    } else {
      //console.log("BCAR not found");
    }
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
    const online_settings = Player.OnlineSettings.BCAR?.bcarSettings;
    if (online_settings) {
      delete Player.OnlineSettings.BCAR;
      window.ServerAccountUpdate.QueueData({ OnlineSettings: window.Player.OnlineSettings });
      return online_settings;
    }
    const local_settings_json = localStorage.getItem(bcarSettingsKey())
    if (local_settings_json) {
      localStorage.removeItem(bcarSettingsKey())
      return JSON.parse(local_settings_json)
    }
  }

  BCARChatRoomMenuDraw()


  async function bcarSettingsLoad() {
    await waitFor(() => !!Player?.AccountName);
    const BCAR_DEFAULT_SETTINGS = {
      animal: "human",
      animationButtonsEnable: false,
      animationButtonsPosition: "upperleft",
      arousalEnable: false,
      arousalStatus: "Disabled",
      expressionsEnable: false,
      expressionsStatus: "Disabled",
      earEmoteEnable: true,
      earEmoteStatus: "Enabled",
      earWigglingEnable: false,
      earWigglingStatus: "Disabled", //Output for the status page
      earsDefault: {
        "ears1": undefined, // change based on ear type
        "ears2": undefined,
        "earsColor1": ["#FF0000", "#EEE"], // change color based on your own preference
        "earsColor2": ["#9A0000", "#505050"],
        "earsCount": 12, // no. of ear wiggles
        "earsDelay": 175, // delay in ms
        "earsDescription1": "None",
        "earsDescription2": "None", //Output for the status page
        "earsProperty1": {},
        "earsProperty2": {},
      },
      tailEmoteEnable: true,
      tailEmoteStatus: "Enabled",
      tailWaggingEnable: false,
      tailWaggingStatus: "Disabled", //Output for the status page
      tailsDefault: {
        "tails1": undefined, // change based on tail type
        "tails2": undefined,
        "tailsColor1": "#440606", // change color based on your own preference
        "tailsColor2": "#440606",
        "tailsCount": 6, // no. of tail wags
        "tailsDelay": 800, // delay in ms
        "tailsDescription1": "None", //Output for the status page
        "tailsDescription2": "None",
        "tailsProperty1": {},
        "tailsProperty2": {},
      },
      wingFlappingEnable: false,
      wingFlappingStatus: "Disabled", //Output for the status page
      wingsDefault: {
        "wings1": undefined, // change based on wing type
        "wings2": undefined,
        "wingsColor1": "Default", // change color based on your own preference
        "wingsColor2": "Default",
        "wingsCount": 6, // no. of wing flaps
        "wingsDelay": 500, // delay in ms
        "wingsState1": "Default", // change state of wings
        "wingsState2": "Default",
        "wingsDescription1": "None", //Output for the status page
        "wingsDescription2": "None",
      },
      genderDefault: {
        "capPronoun": "They", //Capitalized Pronoun (He, She, They)
        "capIntensive": "Them", //Capitalized Intensive (Him, Her, Them)
        "capPossessive": "Their", //Capitalized Possessive (His, Her, Their)
        "gender": "Non-Binary", //Output for the status page
      },
      profile1Saved: false,
      profile1: {
        earWigglingEnable: false,
        earWigglingStatus: "Disabled", //Output for the status page
        earsDefault: {
          "ears1": undefined, // change based on ear type
          "ears2": undefined,
          "earsColor1": ["#FF0000", "#EEE"], // change color based on your own preference
          "earsColor2": ["#9A0000", "#505050"],
          "earsCount": 12, // no. of ear wiggles
          "earsDelay": 175, // delay in ms
          "earsDescription1": "None",
          "earsDescription2": "None", //Output for the status page
          "earsProperty1": {},
          "earsProperty2": {},
        },
        tailWaggingEnable: false,
        tailWaggingStatus: "Disabled", //Output for the status page
        tailsDefault: {
          "tails1": undefined, // change based on tail type
          "tails2": undefined,
          "tailsColor1": "#440606", // change color based on your own preference
          "tailsColor2": "#440606",
          "tailsCount": 6, // no. of tail wags
          "tailsDelay": 800, // delay in ms
          "tailsDescription1": "None", //Output for the status page
          "tailsDescription2": "None",
          "tailsProperty1": {},
          "tailsProperty2": {},
        },
        wingFlappingEnable: false,
        wingFlappingStatus: "Disabled", //Output for the status page
        wingsDefault: {
          "wings1": undefined, // change based on wing type
          "wings2": undefined,
          "wingsColor1": "Default", // change color based on your own preference
          "wingsColor2": "Default",
          "wingsCount": 6, // no. of wing flaps
          "wingsDelay": 500, // delay in ms
          "wingsState1": "Default", // change state of wings
          "wingsState2": "Default",
          "wingsDescription1": "None", //Output for the status page
          "wingsDescription2": "None",
        },
      },
      profile2Saved: false,
      profile2: {
        earWigglingEnable: false,
        earWigglingStatus: "Disabled", //Output for the status page
        earsDefault: {
          "ears1": undefined, // change based on ear type
          "ears2": undefined,
          "earsColor1": ["#FF0000", "#EEE"], // change color based on your own preference
          "earsColor2": ["#9A0000", "#505050"],
          "earsCount": 12, // no. of ear wiggles
          "earsDelay": 175, // delay in ms
          "earsDescription1": "None",
          "earsDescription2": "None", //Output for the status page
          "earsProperty1": {},
          "earsProperty2": {},
        },
        tailWaggingEnable: false,
        tailWaggingStatus: "Disabled", //Output for the status page
        tailsDefault: {
          "tails1": undefined, // change based on tail type
          "tails2": undefined,
          "tailsColor1": "#440606", // change color based on your own preference
          "tailsColor2": "#440606",
          "tailsCount": 6, // no. of tail wags
          "tailsDelay": 800, // delay in ms
          "tailsDescription1": "None", //Output for the status page
          "tailsDescription2": "None",
          "tailsProperty1": {},
          "tailsProperty2": {},
        },
        wingFlappingEnable: false,
        wingFlappingStatus: "Disabled", //Output for the status page
        wingsDefault: {
          "wings1": undefined, // change based on wing type
          "wings2": undefined,
          "wingsColor1": "Default", // change color based on your own preference
          "wingsColor2": "Default",
          "wingsCount": 6, // no. of wing flaps
          "wingsDelay": 500, // delay in ms
          "wingsState1": "Default", // change state of wings
          "wingsState2": "Default",
          "wingsDescription1": "None", //Output for the status page
          "wingsDescription2": "None",
        },
      },
      profile3Saved: false,
      profile3: {
        earWigglingEnable: false,
        earWigglingStatus: "Disabled", //Output for the status page
        earsDefault: {
          "ears1": undefined, // change based on ear type
          "ears2": undefined,
          "earsColor1": ["#FF0000", "#EEE"], // change color based on your own preference
          "earsColor2": ["#9A0000", "#505050"],
          "earsCount": 12, // no. of ear wiggles
          "earsDelay": 175, // delay in ms
          "earsDescription1": "None",
          "earsDescription2": "None", //Output for the status page
          "earsProperty1": {},
          "earsProperty2": {},
        },
        tailWaggingEnable: false,
        tailWaggingStatus: "Disabled", //Output for the status page
        tailsDefault: {
          "tails1": undefined, // change based on tail type
          "tails2": undefined,
          "tailsColor1": "#440606", // change color based on your own preference
          "tailsColor2": "#440606",
          "tailsCount": 6, // no. of tail wags
          "tailsDelay": 800, // delay in ms
          "tailsDescription1": "None", //Output for the status page
          "tailsDescription2": "None",
          "tailsProperty1": {},
          "tailsProperty2": {},
        },
        wingFlappingEnable: false,
        wingFlappingStatus: "Disabled", //Output for the status page
        wingsDefault: {
          "wings1": undefined, // change based on wing type
          "wings2": undefined,
          "wingsColor1": "Default", // change color based on your own preference
          "wingsColor2": "Default",
          "wingsCount": 6, // no. of wing flaps
          "wingsDelay": 500, // delay in ms
          "wingsState1": "Default", // change state of wings
          "wingsState2": "Default",
          "wingsDescription1": "None", //Output for the status page
          "wingsDescription2": "None",
        },
      },
      windowTimer: {
        changelog: 20000,
        commands: 20000,
        ghelp: 70000,
        help: 30000,
        info: 15000,
        timerEnable: true,
      },
      //            bcarLoaded : false,
    }


    // if there are no settings on the server initialize with an empty object
    Player.BCAR = Player.ExtensionSettings.BCAR || { bcarSettings: {} }
    //if online settings are not an older version then local ones, use them instead

    const settings = migrateSettings() || Player.ExtensionSettings.BCAR?.bcarSettings || {}
    //        if(!settings) settings = {};

    // Reorganize old settings into the new structure
    for (const setting in settings) {
      if (settings[setting].value) settings[setting] = settings[setting].value;
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

    //settings.version = BCAR_Settings_Version;
    Player.BCAR.bcarSettings = settings;

    migrate_gender();
    delete Player.BCAR.bcarSettings.asleep
    bcarSettingsSave();
  }

  BCARChatRoomMenuDraw();
  BCARChatRoomClick();

  const wt = Player.BCAR.bcarSettings.windowTimer

  const confirmationState = {
    timeout: 60000, // milliseconds
    timer: null,
    targets: ['ears', 'tails', 'wings', 'profile1', 'profile2', 'profile3', 'clearsettings'],
    reset() {
      for (const name of this.targets) {
        this[name] = false;
      }
      if (this.timer) { // the timer is null at the beginning, but it may be set later by add() function. if it is set, we delete it and clear the variable
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    rollback() {
      this.reset();
      ChatRoomSendLocal(
        `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
        <br>Deletion operation aborted: no confirmation received.
        </p>`.replaceAll('\n', ''), wt.info
      );
    },
    add(part) { // confirmationState.add('ears') will set this.ears = true and set up a timer to reset and print a message -- Why does this print a message?
      this[part] = true;
      this.timer = setTimeout(
        () => this.rollback(), // this is almost equivalent to "function() {this.rollback()}" Ahh okay, got it
        this.timeout
      );
    },
    add_no_timer(part) { // confirmationState.add_no_timer('ears') will set this.ears = true
      this[part] = true;
    },
  }
  confirmationState.reset();

  //Ear Commands
  function CommandEarsChange(argsList) {
    const cmd = argsList[0];
    const ears = InventoryGet(Player, "HairAccessory2");
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'ear1':
        Player.BCAR.bcarSettings.earsDefault.ears1 = ears?.Asset?.Name; // what happens if ears is undefined?
        Player.BCAR.bcarSettings.earsDefault.earsColor1 = ears?.Color; // what happens if ears is undefined?
        Player.BCAR.bcarSettings.earsDefault.earsDescription1 = ears?.Asset?.Description || "None";
        Player.BCAR.bcarSettings.earsDefault.earsProperty1 = ears?.Property;
        let updated_text = ``
        if (!Player.BCAR.bcarSettings.earWigglingEnable) {
          Player.BCAR.bcarSettings.earWigglingEnable = true;
          Player.BCAR.bcarSettings.earWigglingStatus = "Enabled";
          updated_text = `<div style='background-color:#5FBD7A'>Ear wiggle is now enabled!</div>`
        }
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Primary ears have been updated!</p>`.replaceAll('\n', '') +
          updated_text, wt.info
        );
        break;
      case 'ear2':
        s.earsDefault.ears2 = ears?.Asset?.Name;
        s.earsDefault.earsColor2 = ears?.Color;
        s.earsDefault.earsDescription2 = ears?.Asset?.Description || "None";
        Player.BCAR.bcarSettings.earsDefault.earsProperty2 = ears?.Property;
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Secondary ears have been updated!</p>`.replaceAll('\n', ''), wt.info
        );
    }
    bcarSettingsSave();
  }

  function CommandEarsToggle(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'earwiggle':
        if (!s.earWigglingEnable) {
          Player.BCAR.bcarSettings.earWigglingEnable = true;
          Player.BCAR.bcarSettings.earWigglingStatus = "Enabled";
          ChatRoomSendLocal(
            `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Ear wiggle is now enabled!</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        }
        else if (s.earWigglingEnable) {
          Player.BCAR.bcarSettings.earWigglingEnable = false;
          Player.BCAR.bcarSettings.earWigglingStatus = "Disabled";
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Ear wiggle is now disabled!</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        }
    }
  }

  function CommandEarWiggleCountChange(argsList) {
    const cmd = argsList[0];
    const number = parseInt(argsList.slice(1));
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'earwigglecount':
        if (number > -1 && number < 41 && (number % 2 === 0)) {
          s.earsDefault.earsCount = number;
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Ear wiggle count has been set to ${number}</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        } else {
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>${number} is invalid. Please use an even number between 1 and 40.
                    <br>Default is 12 wiggles.</p>`.replaceAll('\n', ''), wt.info
          );
        }
    }
  }

  function CommandEarWiggleDelayChange(argsList) {
    const cmd = argsList[0];
    const number = parseInt(argsList.slice(1));
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'eardelay':
        if (number > 49 && number < 3001) {
          s.earsDefault.earsDelay = number;
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Ear wiggle delay has been set to ${number}ms</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        } else {
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>${number} is invalid. Please use number between 50 and 3000.
                    <br>Default is 175ms.</p>`.replaceAll('\n', ''), wt.info
          );
        }
    }
  }

  function CommandEarsDelete(argsList) {
    const cmd = argsList[0];
    switch (cmd) {
      case 'eardelete':
        confirmationState.add('ears');
        ChatRoomSendLocal(
          `<p style='background-color:#606000;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Are you sure you want to delete the Ears?
                    <br>Type <b>/bcar yes</b> to confirm or <b>/bcar no</b> to abort.
                    </p>`.replaceAll('\n', ''), wt.info
        );
    }
  }

  function CommandEarHelp(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'ear': case 'ears': case 'earhelp':
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
            <br>Ear instructions:
            <br>First equip the main ears you want to wear primarily in the "Ears" slot in your wardrobe. Type "/bcar ear1" in the chat to save the main ears.
            <br>For your ears to wiggle follow the same steps and equip a different type of ears to use as your secondary. Type "/bcar ear2" in the chat to save the secondary ears.
            <br>
            <br>Commands:
            <br>/bcar ear1 - Saves the primary ears.
            <br>/bcar ear2 - Saves the secondary ears.
            <br>/bcar earwiggle - Toggles the ear wiggling on/off.
            <br>/bcar earwigglecount - Determines the number of wiggles.
            <br>/bcar eardelay - Determines the wiggle speed.
            <br>/bcar eardelete - Removes the ears.</p>`.replaceAll('\n', ''), wt.help
        );
    }

  }
  //End of Ear Commands

  //Tail Commands
  function CommandTailChange(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    const tails = InventoryGet(Player, "TailStraps");
    switch (cmd) {
      case 'tail1':
        s.tailsDefault.tails1 = tails?.Asset?.Name;
        s.tailsDefault.tailsColor1 = tails?.Color;
        s.tailsDefault.tailsDescription1 = tails?.Asset?.Description || "None";
        s.tailsDefault.tailsProperty1 = tails?.Property;
        let updated_text = ``
        if (!s.tailWaggingEnable) {
          s.tailWaggingEnable = true;
          s.tailWaggingStatus = "Enabled";
          updated_text = `<div style='background-color:#5FBD7A'>Tail wagging is now enabled!</div>`
        }
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Primary tail has been updated!</p>`.replaceAll('\n', '') +
          updated_text, wt.info
        );
        break;
      case 'tail2':
        s.tailsDefault.tails2 = tails?.Asset?.Name;
        s.tailsDefault.tailsColor2 = tails?.Color;
        s.tailsDefault.tailsDescription2 = tails?.Asset?.Description;
        s.tailsDefault.tailsProperty2 = tails?.Property;
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Secondary tail has been updated!</p>`.replaceAll('\n', ''), wt.info
        );
    }
    bcarSettingsSave();
  }

  function CommandTailToggle(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'tailwag':
        if (!s.tailWaggingEnable) {
          s.tailWaggingEnable = true;
          s.tailWaggingStatus = "Enabled";
          ChatRoomSendLocal(
            `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Tail wagging is now enabled!</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        }
        else if (s.tailWaggingEnable) {
          s.tailWaggingEnable = false;
          s.tailWaggingStatus = "Disabled";
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Tail wagging is now disabled!</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        }
    }
  }

  function CommandTailWagCountChange(argsList) {
    const cmd = argsList[0];
    const number = parseInt(argsList.slice(1));
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'tailwagcount':
        if (number > -1 && number < 41 && (number % 2 === 0)) {
          s.tailsDefault.tailsCount = number;
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Tail wag count has been set to ${number}</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        } else {
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>${number} is invalid. Please use an even number between 1 and 40.
                <br>Default is 6 wags.</p>`.replaceAll('\n', ''), wt.info
          );
        }
    }
  }

  function CommandTailWagDelayChange(argsList) {
    const cmd = argsList[0];
    const number = parseInt(argsList.slice(1));
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'taildelay':
        if (number > 199 && number < 5001) {
          s.tailsDefault.tailsDelay = number;
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Tail wag delay has been set to ${number}ms</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        } else {
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>${number} is invalid. Please use number between 200 and 5000.
                    <br>Default is 800ms.</p>`.replaceAll('\n', ''), wt.info
          );
        }
    }
  }

  function CommandTailDelete(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'taildelete':
        confirmationState.add('tails');
        ChatRoomSendLocal(
          `<p style='background-color:#606000;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Are you sure you want to delete the Tail?
                <br>Type <b>/bcar yes</b> to confirm or <b>/bcar no</b> to abort.
                </p>`.replaceAll('\n', ''), wt.info
        );
    }
  }

  function CommandTailHelp(argsList) {
    const cmd = argsList[0];
    switch (cmd) {
      case 'tail': case 'tails': case 'tailhelp':
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\
            <br>Tail instructions:
            <br>First equip the main tail you want to wear primarily in the "Tail Strap" slot in your wardrobe. Type "/bcar tail1" in the chat to save the main tail.
            <br>For your tail to wag follow the same steps and equip a different type of tail to use as your secondary. Type "/bcar tail2" in the chat to save the secondary tail.
            <br>
            <br>Commands:
            <br>/bcar tail1 - Saves the primary tail.
            <br>/bcar tail2 - Saves the secondary tail.
            <br>/bcar tailwag - Toggles the tail wagging on/off.
            <br>/bcar tailwagcount - Determines the number of wags.
            <br>/bcar taildelay - Determines the wagging speed.
            <br>/bcar taildelete - Removes the tail.</p>`.replaceAll('\n', ''), wt.help
        );
    }

  }
  //End of Tail Commands

  //Wing Commands
  function CommandWingChange(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    const wings = InventoryGet(Player, "Wings");
    switch (cmd) {
      case 'wing1':
        s.wingsDefault.wings1 = wings?.Asset?.Name;
        s.wingsDefault.wingsColor1 = wings?.Color;
        s.wingsDefault.wingsDescription1 = wings?.Asset?.Description || "None";
        s.wingsDefault.wingsState1 = wings?.Property?.TypeRecord?.typed;
        let updated_text = ``
        if (!s.wingFlappingEnable) {
          s.wingFlappingEnable = true;
          s.wingFlappingStatus = "Enabled";
          updated_text = `<div style='background-color:#5FBD7A'>Wing flapping is now enabled!!</div>`
        }
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
            <br>Primary wings has been updated!</p>`.replaceAll('\n', '') +
          updated_text, wt.info
        );
        break;
      case 'wing2':
        s.wingsDefault.wings2 = wings?.Asset?.Name;
        s.wingsDefault.wingsColor2 = wings?.Color;
        s.wingsDefault.wingsDescription2 = wings?.Asset?.Description;
        s.wingsDefault.wingsState2 = wings?.Property?.TypeRecord?.typed;
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
            <br>Secondary wings has been updated!</p>`.replaceAll('\n', ''), wt.info
        );
    }
    bcarSettingsSave();
  }

  function CommandWingToggle(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'wingflap':
        if (!s.wingFlappingEnable) {
          s.wingFlappingEnable = true;
          s.wingFlappingStatus = "Enabled";
          ChatRoomSendLocal(
            `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Wing flapping is now enabled!</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        }
        else if (s.wingFlappingEnable) {
          s.wingFlappingEnable = false;
          s.wingFlappingStatus = "Disabled";
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Wing flapping is now disabled!</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        }
    }
  }

  function CommandWingFlapCountChange(argsList) {
    const cmd = argsList[0];
    const number = parseInt(argsList.slice(1));
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'wingflapcount':
        if (number > -1 && number < 41 && (number % 2 === 0)) {
          s.wingsDefault.wingsCount = number;
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Wing flap count has been set to ${number}</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        }
        else {
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>${number} is invalid. Please use an even number between 1 and 40.
                    <br>Default is 6 flaps.</p>`.replaceAll('\n', ''), wt.info
          );
        }
    }
  }

  function CommandWingFlapDelayChange(argsList) {
    const cmd = argsList[0];
    const number = parseInt(argsList.slice(1));
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'wingdelay':
        if (number > 199 && number < 5001) {
          s.wingsDefault.wingsDelay = number;
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Ear wiggle delay has been set to ${number}ms</p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        }
        else {
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>${number} is invalid. Please use number between 200 and 5000.
                    <br>Default is 500ms.</p>`.replaceAll('\n', ''), wt.info
          );
        }
    }
  }

  function CommandWingDelete(argsList) {
    const cmd = argsList[0];
    switch (cmd) {
      case 'wingdelete':
        confirmationState.add('wings');
        ChatRoomSendLocal(
          `<p style='background-color:#606000;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Are you sure you want to delete the Wings?
                    <br>Type <b>/bcar yes</b> to confirm or <b>/bcar no</b> to abort.
                    </p>`.replaceAll('\n', ''), wt.info
        );
    }
  }

  function CommandFly(argsList) {
    const cmd = argsList[0];
    switch (cmd) {
      case 'fly':
        if (TryFly()) {
          ServerSend("ChatRoomChat", {
            Content: "Beep",
            Type: "Action",
            Target: null,
            Dictionary: [
              { Tag: "Beep", Text: "msg" },
              { Tag: "Biep", Text: "msg" },
              { Tag: "Sonner", Text: "msg" },
              { Tag: "msg", Text: `${CharacterNickname(Player)} starts flying.` }
            ]
          });
        }
        break;
      case 'land':
        ServerSend("ChatRoomChat", {
          Content: "Beep",
          Type: "Action",
          Target: null,
          Dictionary: [
            { Tag: "Beep", Text: "msg" },
            { Tag: "Biep", Text: "msg" },
            { Tag: "Sonner", Text: "msg" },
            { Tag: "msg", Text: `${CharacterNickname(Player)} lands back on the ground.` }
          ]
        });
        Landing();
        break;
    }
  }

  function CommandWingHelp(argsList) {
    const cmd = argsList[0];
    switch (cmd) {
      case 'wing': case 'wings': case 'winghelp':
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Wing instructions:
                <br>First equip the main wings you want to wear primarily in the "Wings" slot in your wardrobe. Type "/bcar wing1" in the chat to save the main wings.
                <br>For your wings to wiggle follow the same steps and equip a different type of wings to use as your secondary. Type "/bcar wing2" in the chat to save the secondary wings.
                <br>To let your wings flap type an emote anything that includes the words "flaps" or "flutters" and the word "wings".
                <br>
                <br>Commands:
                <br>/bcar wing1 - Saves the primary wings.
                <br>/bcar wing2 - Saves the secondary wings.
                <br>/bcar wingflap - Toggles the wing flapping on/off.
                <br>/bcar wingflapcount - Determines the number of flaps.
                <br>/bcar wingdelay - Determines the flapping speed.
                <br>/bcar wingdelete - Removes the wings.
                <br>/bcar fly - Starts flying
                <br>/bcar land - Stops flying
                <br>
                <br>Examples:
                <br><i>*flaps her wings
                <br>*flutters her wings
                <br>*is flapping her wings
                <br>*lets her wings flap
                <br>*spreads her wings, flapping with them</i>
                </p>`.replaceAll('\n', ''), wt.help
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
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                 <br><span style="text-transform:capitalize">${prof_number}</span> preset:
                 <br>Ear Animation: ${profile?.earWigglingStatus}
                 <br>Primary Ears: ${AssetGet("Female3DCG", "HairAccessory2", profile?.earsDefault?.ears1)?.Description || 'None'}
                 <br>Secondary Ears: ${AssetGet("Female3DCG", "HairAccessory2", profile?.earsDefault?.ears2)?.Description || 'None'}
                 <br>Tail Animation: ${profile?.tailWaggingStatus}
                 <br>Primary Tail: ${AssetGet("Female3DCG", "TailStraps", profile?.tailsDefault?.tails1)?.Description || 'None'}
                 <br>Secondary Tail: ${AssetGet("Female3DCG", "TailStraps", profile?.tailsDefault?.tails2)?.Description || 'None'}
                 <br>Wing Animation: ${profile?.wingFlappingStatus}
                 <br>Primary Wings: ${AssetGet("Female3DCG", "Wings", profile?.wingsDefault?.wings1)?.Description || 'None'}
                 <br>Secondary Wings: ${AssetGet("Female3DCG", "Wings", profile?.wingsDefault?.wings2)?.Description || 'None'}
                 </p>`.replaceAll('\n', ''), wt.info
        );
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

        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br><span style="text-transform:capitalize">${prof_number}</span> has been saved!</p>`.replaceAll('\n', ''), wt.info
        );
        bcarSettingsSave();
        break;
      case 'load1': case 'load2': case 'load3':
        if (!Player.BCAR.bcarSettings[`${prof_number}Saved`]) {
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br><span style="text-transform:capitalize">${prof_number}</span> not found!
                    <br>Please save <span style="text-transform:capitalize">${prof_number}</span> first.</p>`.replaceAll('\n', ''), wt.info
          );
          break;
        }
        Player.BCAR.bcarSettings.earWigglingEnable = profile.earWigglingEnable;
        Player.BCAR.bcarSettings.earWigglingStatus = profile.earWigglingStatus;

        Player.BCAR.bcarSettings.tailWaggingEnable = profile.tailWaggingEnable;
        Player.BCAR.bcarSettings.tailWaggingStatus = profile.tailWaggingStatus;

        Player.BCAR.bcarSettings.wingFlappingEnable = profile.wingFlappingEnable;
        Player.BCAR.bcarSettings.wingFlappingStatus = profile.wingFlappingStatus;

        for (const item of ['ears', 'tails', 'wings']) {
          Player.BCAR.bcarSettings[`${item}Default`] = copy_object(profile[`${item}Default`]);
        } // the loop ends here
        if (Player?.BCAR?.bcarSettings?.earsDefault?.ears1) {
          const ears = InventoryWear(Player, profile?.earsDefault?.ears1, "HairAccessory2", profile?.earsDefault?.earsColor1);
          ears.Property = profile?.earsDefault?.earsProperty1;
        } else {
          InventoryRemove(Player, "HairAccessory2");
        }
        if (Player?.BCAR?.bcarSettings?.tailsDefault?.tails1) {
          const tail = InventoryWear(Player, profile?.tailsDefault?.tails1, "TailStraps", profile?.tailsDefault?.tailsColor1);
          tail.Property = profile?.tailsDefault?.tailsProperty1;
        } else {
          InventoryRemove(Player, "TailStraps");
        }
        if (Player?.BCAR?.bcarSettings?.wingsDefault?.wings1) {
          InventoryWear(Player, profile?.wingsDefault?.wings1, "Wings", profile?.wingsDefault?.wingsColor1);
        } else {
          InventoryRemove(Player, "Wings");
        }
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br><span style="text-transform:capitalize">${prof_number}</span> was loaded!</p>`.replaceAll('\n', ''), wt.info);

        bcarSettingsSave();
        break;
      case 'delete1': case 'delete2': case 'delete3':
        if (!Player.BCAR.bcarSettings[`${prof_number}Saved`]) {
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br><span style="text-transform:capitalize">${prof_number}</span> not found!
                    <br>Please save <span style="text-transform:capitalize">${prof_number}</span> first.</p>`.replaceAll('\n', ''), wt.info
          );
          return;
        }
        confirmationState.add(`${prof_number}`);
        ChatRoomSendLocal(
          `<p style='background-color:#606000;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Are you sure you want to delete <span style="text-transform:capitalize">${prof_number}</span>?
                <br>Type <b>/bcar yes</b> to confirm or <b>/bcar no</b> to abort.
                </p>`.replaceAll('\n', ''), wt.info
        );
        break;
      case 'profile': case 'profilehelp':
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
  function CommandAnimationButtons(argsList, showMessage = true) {
    const cmd = argsList[0].toLocaleLowerCase();;
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'animationbuttons':
        if (!s.animationButtonsEnable) {
          s.animationButtonsEnable = true
          ChatRoomSendLocal(
            `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Animation Buttons are now enabled!
                    </p>`.replaceAll('\n', ''), wt.info
          );
          BCARChatRoomMenuDraw();
          BCARChatRoomClick();
          bcarSettingsSave();
        }
        else if (s.animationButtonsEnable) {
          s.animationButtonsEnable = false
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Animation Buttons are now disabled!
                    </p>`.replaceAll('\n', ''), wt.info
          );
          BCARChatRoomMenuDraw();
          BCARChatRoomClick();
          bcarSettingsSave();
        }
        break;
      case 'upperleft': case 'lowerleft': case 'lowerright':
        Player.BCAR.bcarSettings.animationButtonsPosition = cmd
        if (showMessage) {
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Animation Buttons moved to ${cmd}!
                    </p>`.replaceAll('\n', ''), wt.info
          );
        }
        BCARChatRoomMenuDraw();
        BCARChatRoomClick();
        bcarSettingsSave();
    }
  }

  function CommandAnimals(argsList, showMessage = true) {
    const cmd = argsList[0].toLocaleLowerCase();
    switch (cmd) {
      case 'cat': case 'dog': case 'fox': case 'human': case 'mouse':
        Player.BCAR.bcarSettings.animal = cmd
        if (showMessage) {
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br><span style="text-transform:capitalize">${cmd}</span> reactions are selected!
                    </p>`.replaceAll('\n', ''), wt.info
          );
        }
        bcarSettingsSave();
        break;
      case 'animal': case 'animalhelp':
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
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

  function CommandArousal(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'arousal':
        if (!s.arousalEnable) {
          s.arousalEnable = true;
          s.arousalStatus = "Enabled";
          ChatRoomSendLocal(
            `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Arousal manipulation is now enabled!
                    </p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        }
        else if (s.arousalEnable) {
          s.arousalEnable = false;
          s.arousalStatus = "Disabled";
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Arousal manipulation is now disabled!
                    </p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
        }
        break;
      case 'arousalhelp':
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Arousal instructions:
                <br>With the arousal command you can switch the manipulation on and off.
                <br>The manipulation takes effect on headpets, hair brushing, almost every ear action, back and butt caress.
                <br>
                <br>Commands:
                <br>/bcar arousal - Toggles arousal manipulation on/off.
                </p>`.replaceAll('\n', ''), wt.help
        );
    }
  }


  function CommandChangelog(argsList) {
    const cmd = argsList[0];
    switch (cmd) {
      case 'changelog':
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React + changelog</b>
                <br>${BCAR_CHANGELOG}
                <br>View the full changelog <a href='https://github.com/DrBranestawm/BCAR/blob/main/script/changelog.md' target='_blank'>here</a>`.replaceAll('\n', ''), wt.changelog
        );
    }
  }

  function CommandConfirmAbort(arglist) {
    const cmd = arglist[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'no':
        // maybe say something to the user, like "okay, not deleting anything"
        confirmationState.reset();
        break;
      case 'yes':
        if (confirmationState.ears) {
          s.earsDefault = {};
          s.earsDefault.earsDescription1 = "None";
          s.earsDefault.earsDescription2 = "None";
          s.earWigglingEnable = false;
          s.earWigglingStatus = "Disabled";
          s.earsDefault.earsCount = 12;
          s.earsDefault.earsDelay = 175;
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                        <br>Ears has been removed and ear wiggle is now disabled!
                        </p>`.replaceAll('\n', ''), wt.info
          );
          InventoryRemove(Player, "HairAccessory2")
        }
        if (confirmationState.tails) {
          s.tailsDefault = {};
          s.tailsDefault.tailsDescription1 = "None";
          s.tailsDefault.tailsDescription2 = "None";
          s.tailWaggingEnable = false;
          s.tailWaggingStatus = "Disabled";
          s.tailsDefault.tailsCount = 6;
          s.tailsDefault.tailsDelay = 800;
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                        <br>Tail has been removed and tail wagging is now disabled!
                        </p>`.replaceAll('\n', ''), wt.info
          );
          InventoryRemove(Player, "TailStraps")
        }
        if (confirmationState.wings) {
          s.wingsDefault = {};
          s.wingsDefault.wingsDescription1 = "None";
          s.wingsDefault.wingsDescription2 = "None";
          s.wingFlappingEnable = false;
          s.wingFlappingStatus = "Disabled";
          s.wingsDefault.wingsCount = 6;
          s.wingsDefault.wingsDelay = 500;
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                        <br>Wings has been removed and wing flapping is now disabled!
                        </p>`.replaceAll('\n', ''), wt.info
          );
          InventoryRemove(Player, "Wings")
        }
        if (confirmationState.profile1) {
          s.profile1.earsDefault = { earsDescription1: "None", earsDescription2: "None" };
          s.profile1.earWigglingEnable = false;
          s.profile1.earWigglingStatus = "Disabled";

          s.profile1.tailsDefault = { tailsDescription1: "None", tailsDescription2: "None" };
          s.profile1.tailWaggingEnable = false;
          s.profile1.tailWaggingStatus = "Disabled";

          s.profile1.wingsDefault = { wingsDescription1: "None", wingsDescription2: "None" };
          s.profile1.wingFlappingEnable = false;
          s.profile1.wingFlappingStatus = "Disabled";
          // this can be made even shorter like this:
          // ['ear', 'tail', 'wing'].forEach(pref => {
          //   profile[`${pref}sDefault`] = {[`${pref}sDescription1`]: "None", [`${pref}sDescription2`]: "None"};
          //   profile[`${pref}FlappingEnable`] = false;
          //   profile[`${pref}FlappingStatus`]= "Disabled";
          // })
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                        <br>Profile1 was cleared!
                        </p>`.replaceAll('\n', ''), wt.info
          );
          Player.BCAR.bcarSettings.profile1Saved = false
        }
        if (confirmationState.profile2) {
          s.profile2.earsDefault = { earsDescription1: "None", earsDescription2: "None" };
          s.profile2.earWigglingEnable = false;
          s.profile2.earWigglingStatus = "Disabled";

          s.profile2.tailsDefault = { tailsDescription1: "None", tailsDescription2: "None" };
          s.profile2.tailWaggingEnable = false;
          s.profile2.tailWaggingStatus = "Disabled";

          s.profile2.wingsDefault = { wingsDescription1: "None", wingsDescription2: "None" };
          s.profile2.wingFlappingEnable = false;
          s.profile2.wingFlappingStatus = "Disabled";
          // this can be made even shorter like this:
          // ['ear', 'tail', 'wing'].forEach(pref => {
          //   profile[`${pref}sDefault`] = {[`${pref}sDescription1`]: "None", [`${pref}sDescription2`]: "None"};
          //   profile[`${pref}FlappingEnable`] = false;
          //   profile[`${pref}FlappingStatus`]= "Disabled";
          // })
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                        <br>Profile2 was cleared!
                        </p>`.replaceAll('\n', ''), wt.info
          );
          Player.BCAR.bcarSettings.profile2Saved = false
        }
        if (confirmationState.profile3) {
          s.profile3.earsDefault = { earsDescription1: "None", earsDescription2: "None" };
          s.profile3.earWigglingEnable = false;
          s.profile3.earWigglingStatus = "Disabled";

          s.profile3.tailsDefault = { tailsDescription1: "None", tailsDescription2: "None" };
          s.profile3.tailWaggingEnable = false;
          s.profile3.tailWaggingStatus = "Disabled";

          s.profile3.wingsDefault = { wingsDescription1: "None", wingsDescription2: "None" };
          s.profile3.wingFlappingEnable = false;
          s.profile3.wingFlappingStatus = "Disabled";
          // this can be made even shorter like this:
          // ['ear', 'tail', 'wing'].forEach(pref => {
          //   profile[`${pref}sDefault`] = {[`${pref}sDescription1`]: "None", [`${pref}sDescription2`]: "None"};
          //   profile[`${pref}FlappingEnable`] = false;
          //   profile[`${pref}FlappingStatus`]= "Disabled";
          // })
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                        <br>ile3 was cleared!
                        </p>`.replaceAll('\n', ''), wt.info
          );
          Player.BCAR.bcarSettings.profile3Saved = false
        }
        if (confirmationState.clearsettings) {
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                        <br>Settings have been reseted!
                        </p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsRemove();
          bcarSettingsLoad();
        }
        confirmationState.reset();
        bcarSettingsSave();
    }
  }


  function CommandEmotes(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'emote': case 'emotes': case 'emotehelp':
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Emotes:
                <br>In order to use the emote, a primary ear/tail and a secondary ear/tail must have been set, as with automatic reactions.
                <br>Type /bcar earhelp or /bcar tailhelp to see the instructions.
                <br>
                <br>/bcar emoteear - Toggles ear wiggle emote on/off.
                <br>/bcar emotetail - Toggles tail wag emote on/off.
                <br>
                <br>Examples:
                <br><i>*wiggle her ears
                <br>*wags her tail</i>
                </p>`.replaceAll('\n', ''), wt.help
        );
        break;
      case 'emoteear':
        if (!s.earEmoteEnable) {
          s.earEmoteEnable = true;
          s.earEmoteStatus = "Enabled";
          ChatRoomSendLocal(
            `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Ear wiggle emote is now enabled!
                    </p>`.replaceAll('\n', ''), wt.info
          );
        }
        else if (s.earEmoteEnable) {
          s.earEmoteEnable = false;
          s.earEmoteStatus = "Disabled";
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>"Ear wiggle emote is now disabled!
                    </p>`.replaceAll('\n', ''), wt.info
          );
        }
        break;
      case 'emotetail':
        if (!s.tailEmoteEnable) {
          s.tailEmoteEnable = true;
          s.tailEmoteStatus = "Enabled";
          ChatRoomSendLocal(
            `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Tail wagging emote is now enabled!
                    </p>`.replaceAll('\n', ''), wt.info
          );
        }
        else if (s.tailEmoteEnable) {
          s.tailEmoteEnable = false;
          s.tailEmoteStatus = "Disabled";
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>Tail wagging emote is now disabled!
                    </p>`.replaceAll('\n', ''), wt.info
          );
        }
    }
  }

  function CommandExpression(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'expression': case 'expressions':
        if (!s.expressionsEnable) {
          /*            if (FBC_VERSION = {}) {
                           ChatRoomSendLocal(
                               "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                               "FBC is not loaded yet.\n" +
                               "Please load FBC to use BCAR Expressions.</p>", wt.info
                          );
                      }
                      else { */
          s.expressionsEnable = true;
          s.expressionsStatus = "Enabled";
          ChatRoomSendLocal(
            `<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>BCAR Expressions are now enabled!
                </p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
          bcarExpressions();
        }
        //    }
        else if (s.expressionsEnable) {
          /*            if (FBC_VERSION = {}) {
                           ChatRoomSendLocal(
                               "<p style='background-color:#5FBD7A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>\n" +
                               "FBC is not loaded yet.\n" +
                               "Please load FBC to use BCAR Expressions.</p>", wt.info
                          );
                      }
                      else { */
          s.expressionsEnable = false;
          s.expressionsStatus = "Disabled";
          ChatRoomSendLocal(
            `<p style='background-color:#630A0A;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>BCAR Expressions are now disabled!
                    </p>`.replaceAll('\n', ''), wt.info
          );
          bcarSettingsSave();
          bcarExpressions();
        }
        break;
      case 'expressionhelp':
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Expression instructions:
                <br>BCAR+ Expressions adds Expressions to BCE Expressions and requires FBC to run.
                <br>With the expression commands you can switch the BCAR+ Expressions on and off.
                <br>Look at the <a href='https://github.com/DrBranestawm/BCAR/wiki/Expression' target='_blank'>BCAR+ Expression Wiki</a> for full list.
                <br>
                <br>Commands:
                <br>/bcar expression - Toggles expression on/off.
                <br>/bcar expressions - Toggles expression on/off.
                </p>`.replaceAll('\n', ''), wt.help
        );
      //        }

    }
  }

  function CommandGenderToggle(argsList, showMessage = true) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'male':
        s.genderDefault.gender = "Male";
        s.genderDefault.capPronoun = "He";
        s.genderDefault.capIntensive = "Him";
        s.genderDefault.capPossessive = "His";
        if (showMessage) {
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>The reactions refer to ${CharacterNickname(Player)} as "he" now!
                    </p>`.replaceAll('\n', ''), wt.info
          );
        }
        break;
      case 'female':
        s.genderDefault.gender = "Female";
        s.genderDefault.capPronoun = "She";
        s.genderDefault.capIntensive = "Her";
        s.genderDefault.capPossessive = "Her";
        if (showMessage) {
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>The reactions refer to ${CharacterNickname(Player)} as "she" now!
                    </p>`.replaceAll('\n', ''), wt.info
          );
        }
        break;
      case 'other':
        s.genderDefault.gender = "Non-Binary";
        s.genderDefault.capPronoun = "They";
        s.genderDefault.capIntensive = "Them";
        s.genderDefault.capPossessive = "Their";
        if (showMessage) {
          ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                    <br>The reactions refer to ${CharacterNickname(Player)} as "they" now!
                    </p>`.replaceAll('\n', ''), wt.info
          );
        }
    }
    /*let toggle = argsList[0];

    if (toggle === "male") {
        Player.BCAR.bcarSettings.genderDefault.gender = "Male";
        Player.BCAR.bcarSettings.genderDefault.capPronoun = "He";
        Player.BCAR.bcarSettings.genderDefault.capIntensive = "Him";
        Player.BCAR.bcarSettings.genderDefault.capPossessive = "His";
        if (showMessage){
            ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
            <br>The reactions refer to ${CharacterNickname(Player)} as "he" now!
            </p>`.replaceAll('\n', ''), wt.info
            );
        }
    }
    else if (toggle === "female") {
        Player.BCAR.bcarSettings.genderDefault.gender = "Female";
        Player.BCAR.bcarSettings.genderDefault.capPronoun = "She";
        Player.BCAR.bcarSettings.genderDefault.capIntensive = "Her";
        Player.BCAR.bcarSettings.genderDefault.capPossessive = "Her";
        if (showMessage){
            ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
            <br>The reactions refer to ${CharacterNickname(Player)} as "she" now!
            </p>`.replaceAll('\n', ''), wt.info
            );
        }
    }
    else if (toggle === "other") {
        Player.BCAR.bcarSettings.genderDefault.gender = "Non-Binary";
        Player.BCAR.bcarSettings.genderDefault.capPronoun = "They";
        Player.BCAR.bcarSettings.genderDefault.capIntensive = "Them";
        Player.BCAR.bcarSettings.genderDefault.capPossessive = "Their";
        if (showMessage){
            ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
            <br>The reactions refer to ${CharacterNickname(Player)} as "they" now!
            </p>`.replaceAll('\n', ''), wt.info
            );
        }
    } */
    bcarSettingsSave();
  }

  function CommandOpenHelp(argsList) {
    const cmd = argsList[0];
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

  function CommandMisc(argsList) {
    const cmd = argsList[0];
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

  function CommandResetSettings(argsList) {
    const cmd = argsList[0];
    switch (cmd) {
      case 'reset':
        confirmationState.add('clearsettings');
        ChatRoomSendLocal(
          `<p style='background-color:#606000;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>Are you sure you want to reset all BCAR+ data to default?
                <br>Type <b>/bcar yes</b> to confirm or <b>/bcar no</b> to abort.
                </p>`.replaceAll('\n', ''), wt.info
        );
    }
  }

  function CommandStatus(argsList) {
    const cmd = argsList[0];
    const s = Player?.BCAR?.bcarSettings;
    switch (cmd) {
      case 'status':
        ChatRoomSendLocal(`<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                               <br>Current status:
                               <br>Ear Animation: ${s?.earWigglingStatus}
                               <br>Primary Ears: ${s?.earsDefault?.earsDescription1}
                               <br>Secondary Ears: ${s?.earsDefault?.earsDescription2}
                               <br>Ear Wiggles: ${s?.earsDefault?.earsCount}
                               <br>Ear Wiggle Delay: ${s?.earsDefault?.earsDelay}
                               <br>Tail Animation: ${s?.tailWaggingStatus}
                               <br>Primary Tail: ${AssetGet("Female3DCG", "TailStraps", s?.tailsDefault?.tails1)?.Description || 'None'}
                               <br>Secondary Tail: ${AssetGet("Female3DCG", "TailStraps", s?.tailsDefault?.tails2)?.Description || 'None'}
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

  function CommandWindowTimerSet(argsList) {
    const cmd = argsList[0];
    switch (cmd) {
      case 'timer':
        if (!wt.timerEnable) {
          wt.timerEnable = true;
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
        }
        else if (wt.timerEnable) {
          wt.timerEnable = false;
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
        }
        break;
      case 'timerhelp':
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                <br>The window timer causes windows to disappear after a specific duration.
                <br>You can toggle if the windows wether disappear or not.
                <br>
                <br>Commands:
                <br>/bcar timer - Toggles the timer on/off.
                </p>`.replaceAll('\n', ''), wt.help
        );
    }
  }

  function CommandVersions(argsList) {
    const cmd = argsList[0];
    switch (cmd) {
      case 'version': case 'versions':
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE;'><b>Bondage Club Auto React +</b>
                               <br>BCAR+ v${BCAR_Version}
                               </p>`.replaceAll('\n', ''), wt.info
        );
    }
  }

  window.prefix = function (words) {
    // check border cases size 1 array and empty first word)
    if (!words[0] || words.length == 1) return words[0] || "";
    let i = 0;
    // while all words have the same character at position i, increment i
    while (words[0][i] && words.every(w => w[i] === words[0][i]))
      i++;

    // prefix is the substring from the beginning to the last successfully checked i
    return words[0].substr(0, i);
  }

  CommandCombine([
    {
      Tag: 'bcar',
      Description: '<b>or /bcar help</b>: To open the commands overview and info.',
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

          if (matches.length < 1) {/*No output, because no match*/ }

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
        CommandFly(args.split(" "));
        CommandWingHelp(args.split(" "));
        //Profile Commands
        CommandProfile(args.split(" "));
        //Misc Commands
        CommandAnimationButtons(args.split(" "));
        CommandAnimals(args.split(" "));
        CommandArousal(args.split(" "));
        CommandChangelog(args.split(" "));
        CommandConfirmAbort(args.split(" "));
        CommandEmotes(args.split(" "));
        CommandExpression(args.split(" "));
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
      Description: ": Cum instantly.",

      Action: () => {
        ActivityOrgasmRuined = false;
        ActivityOrgasmStart(Player);
      }
    }])

  CommandCombine([
    {
      Tag: 'leave',
      Description: ": Leave the room instantly.",

      Action: args => {
        if (CurrentScreen == "ChatRoom") {
          ChatRoomClearAllElements();
          ChatRoomSetLastChatRoom("");
          ServerSend("ChatRoomLeave", "");
          CommonSetScreen("Online", "ChatSearch");
          OnlineGameName = "";
        };
        if (CurrentScreen == "Cell") {
          PrisonLeaveCell();
        };
      }
    }])

  CommandCombine([
    {
      Tag: 'safewordspecific',
      Description: ": Frees you from a specific item.",

      Action: args => {
        ChatRoomSendLocal(
          `<p style='background-color:#000452;color:#EEEEEE'>Bondage Club Auto React +:
                <br>You have 5 seconds to click  on target, select area. If successful, will be returned. If not, retry.</p>`.replaceAll('\n', ''), wt.info
        );
        setTimeout(function () {
          if (!CurrentCharacter) return ChatRoomSendLocal(
            `<p style='background-color:#000452;color:#EEEEEE'>Bondage Club Auto React +:
                  <br>No character selected. Try again.</p>`.replaceAll('\n', ''), wt.info
          );
          if (!CurrentCharacter.FocusGroup) {
            DialogLeave();
            return ChatRoomSendLocal(
              `<p style='background-color:#000452;color:#EEEEEE'>Bondage Club Auto React +:
                    <br>Focus group not found. Try again.</p>`.replaceAll('\n', ''), wt.info
            );
          }
          if (!InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name)) {
            DialogLeave();
            return ChatRoomSendLocal(
              `<p style='background-color:#000452;color:#EEEEEE'>Bondage Club Auto React +:
                    <br>Item not found. Try again.</p>`.replaceAll('\n', ''), wt.info
            );
          }

          if (CurrentCharacter !== Player) {
            ServerSend("ChatRoomChat", {
              Content: "Bondage Club Auto React +: " + Player.Name + " has removed " + InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name).Asset.Name + " on you via console. If this is undesired, blacklist player.",
              Type: "Whisper",
              Target: CurrentCharacter.MemberNumber
            })
          };

          InventoryRemove(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
          ChatRoomCharacterUpdate(CurrentCharacter);
          DialogLeave();
        }, 5000);
      }
    }])

  CommandCombine([
    {
      Tag: 'wardrobe',
      Description: ": opens your wardrobe.",

      Action: args => {
        ChatRoomAppearanceLoadCharacter(Player);
      }
    }])

  // ****************************   PREFERENCES   *********************************

  // PreferenceSubscreenList.splice(15, 0, "BCARSettings");
  modApi.hookFunction("TextGet", 2, (args, next) => {
    if (args[0] == "HomepageBCARSettings") return "BCAR+ Settings";
    return next(args);
  });
  modApi.hookFunction("DrawButton", 2, (args, next) => {
    if (args[6] == "Icons/BCARSettings.png") args[6] = "Icons/Magic.png";
    return next(args);
  });

  /*
  function LoadPreferencesSubscreen(screenName) {
      PreferenceSubscreen = "BCAR" + screenName;
      PreferenceSettings = screenName;
      if (typeof window["PreferenceSubscreen" + PreferenceSubscreen + "Load"] === "function")
          CommonDynamicFunction("PreferenceSubscreen" + PreferenceSubscreen + "Load()");
  }
  */

  function PrefCall(screen, func) {
    const name = `PreferenceSubscreenBCAR${screen}${func}`
    if (typeof w[name] === 'function') {
      CommonDynamicFunction(`${name}()`)
      return true
    }
    return false
  }

  let PreferenceSettings = 'Settings'

  function LoadPreferencesSubscreen(screenName) {
    PreferenceSettings = screenName;
    PrefCall(screenName, 'Load')
  }

  function getYPos(ix) {
    return 200 + (100 * ix);
  }

  function getYPosC(ix) {
    return 250 + (40 * ix);
  }

  // MAIN MENU
  const settings = {
    gender: {
      options: [
        "male",
        "female",
        "other",
      ],
      labels: [
        "Male",
        "Female",
        "Non-Binary",
      ],
      selected: 0,
      x: 950,
      y: getYPos(0),
      w: 400,
      h: 85,
    },
    animal: {
      options: [
        "cat",
        "dog",
        "fox",
        "human",
        "mouse",
      ],
      labels: [
        "Cat",
        "Dog",
        "Fox",
        "Human",
        "Mouse",
      ],
      selected: 0,
      x: 950,
      y: getYPos(1),
      w: 400,
      h: 85,
    },
    animationButtonsPosition: {
      options: [
        "upperleft",
        "lowerleft",
        "lowerright",
      ],
      labels: [
        "Upper Left",
        "Lower Left",
        "Lower Right",
      ],
      selected: 0,
      x: 950,
      y: getYPos(2),
      w: 400,
      h: 85,
    },

    init: function (name, value) {
      let setting = this[name];
      setting.selected = setting.options.indexOf(value);
      if (setting.selected < 0) setting.selected = setting.labels.indexOf(value);
      if (setting.selected < 0) setting.selected = 0;
    },
    value: function (name) {
      let setting = this[name];
      return setting.options[setting.selected];
    },
    label: function (name) {
      let setting = this[name];
      return setting.labels[setting.selected];
    },
    index_next: function (name) {
      let setting = this[name];
      let index = setting.selected;
      index += 1;
      if (index >= setting.options.length) index = 0;
      return index;
    },
    index_prev: function (name) {
      let setting = this[name];
      let index = setting.selected;
      index -= 1;
      if (index < 0) index = setting.options.length - 1;
      return index;
    },
    select_next: function (name) {
      this[name].selected = this.index_next(name);
    },
    select_prev: function (name) {
      this[name].selected = this.index_prev(name);
    },
    peek_prev_label: function (name) {
      return this[name].labels[this.index_prev(name)];
    },
    peek_next_label: function (name) {
      return this[name].labels[this.index_next(name)];
    },
    draw: function (name) {
      let setting = this[name];
      const save_align = MainCanvas.textAlign;
      MainCanvas.textAlign = "center";
      DrawBackNextButton(setting.x, setting.y, setting.w, setting.h, this.label(name), "White", "",
        () => this.peek_prev_label(name),
        () => this.peek_next_label(name),
      );
      MainCanvas.textAlign = save_align;
    },
    click: function (name) {
      let setting = this[name];
      if (MouseIn(setting.x, setting.y, setting.w, setting.h)) {
        if (MouseIn(setting.x, setting.y, (setting.w / 2), setting.h)) {
          this.select_prev(name);
        } else {
          this.select_next(name);
        }
        return true; // there was a click on this button
      }
      return false; // there were no clicks on this button
    },
  };

  w.PreferenceSubscreenBCARSettingsLoad = function () {
    PreferenceSettings = 'Settings'
    console.log("BCAR+ Settings load");
    settings.init("gender", Player.BCAR?.bcarSettings?.genderDefault?.gender);
    settings.init("animal", Player.BCAR?.bcarSettings?.animal);
    settings.init("animationButtonsPosition", Player.BCAR?.bcarSettings?.animationButtonsPosition);

  };

  // Create Text
  const versionTextLines = {
    lines: [
      `BCAR+ ${BCAR_Version}`,
    ],
  }

  w.PreferenceSubscreenBCARSettingsRun = function () {
    const prev = MainCanvas.textAlign;

    // How to use
    DrawText(`Current Version`, 1735, getYPosC(11), "Black");
    for (let i in versionTextLines.lines) {
      DrawText(versionTextLines.lines[i], 1735, getYPosC(i + 12), "Black");
    };
    MainCanvas.textAlign = "left";

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
    DrawButton(1540, 770, 400, 85, "", "White", "", "Open BCAR+ Changelog on GitHub.");
    DrawImageResize("Icons/Changelog.png", 1550, 780, 60, 60);
    DrawTextFit(
      "Open Changelog",
      1635,
      810,
      380,
      "Black"
    );
    DrawButton(1540, 870, 400, 85, "", "White", "", "Open BCAR+ Wiki on GitHub.");
    DrawImageResize("Icons/Introduction.png", 1550, 880, 60, 60);
    DrawTextFit(
      "Open Wiki",
      1650,
      910,
      308,
      "Black"
    );
    DrawButton(500, getYPos(0), 400, 85, "", "White");
    DrawTextFit(
      "List of all commands",
      510,
      getYPos(0) + 42,
      380,
      "Black"
    );
    DrawButton(500, getYPos(1), 400, 85, "", "White"/*, "Assets/Female3DCG/HairAccessory1/Preview/KittenEars1.png"*/);
    //DrawImageResize("Assets/Female3DCG/HairAccessory1/Preview/KittenEars1.png", 800, 290, 100, 100);
    DrawTextFit(
      "Ears",
      510,
      getYPos(1) + 42,
      380,
      "Black"
    );
    DrawButton(500, getYPos(2), 400, 85, "", "White");
    //DrawImageResize("Assets/Female3DCG/TailStraps/Preview/TailStrap.png", 800, 400, 80, 80);
    DrawTextFit(
      "Tails",
      510,
      getYPos(2) + 42,
      380,
      "Black"
    );
    DrawButton(500, getYPos(3), 400, 85, "", "White");
    //DrawImageResize("Assets/Female3DCG/Wings/AngelWings.png", 800, 490, 100, 100);
    DrawTextFit(
      "Wings",
      510,
      getYPos(3) + 42,
      380,
      "Black"
    );
    DrawButton(500, getYPos(4), 400, 85, "", "White");
    DrawTextFit(
      "Miscellaneous",
      510,
      getYPos(4) + 42,
      380,
      "Black"
    );
    DrawButton(500, getYPos(5), 400, 85, "", "White");
    DrawTextFit(
      "Profiles",
      510,
      getYPos(5) + 42,
      380,
      "Black"
    );
    DrawButton(500, getYPos(6), 400, 85, "", "White");
    DrawTextFit(
      "Reactions",
      510,
      getYPos(6) + 42,
      380,
      "Black"
    );
    settings.draw("gender");
    settings.draw("animal");
    settings.draw("animationButtonsPosition");

    MainCanvas.textAlign = prev;
  };
  w.PreferenceSubscreenBCARSettingsExit = function () {
    PreferenceSubscreen = "Extensions";
    PreferenceSettings = "Settings";
    PreferenceSubscreenExtensionsClear()
  };
  w.PreferenceSubscreenBCARSettingsClick = function () {
    if (MouseIn(1815, 75, 90, 90))
      PreferenceSubscreenBCARSettingsExit();
    if (MouseIn(1540, 770, 400, 85))
      window.open('https://github.com/DrBranestawm/BCAR/blob/main/script/changelog.md', '_blank');
    if (MouseIn(1540, 870, 400, 85))
      window.open('https://github.com/DrBranestawm/BCAR/wiki', '_blank');

    if (MouseIn(500, getYPos(0), 400, 85)) LoadPreferencesSubscreen("Commands");
    if (MouseIn(500, getYPos(1), 400, 85)) LoadPreferencesSubscreen("Ears");
    if (MouseIn(500, getYPos(2), 400, 85)) LoadPreferencesSubscreen("Tail");
    if (MouseIn(500, getYPos(3), 400, 85)) LoadPreferencesSubscreen("Wings");
    if (MouseIn(500, getYPos(4), 400, 85)) LoadPreferencesSubscreen("Misc");
    if (MouseIn(500, getYPos(5), 400, 85)) LoadPreferencesSubscreen("Profiles");
    if (MouseIn(500, getYPos(6), 400, 85)) LoadPreferencesSubscreen("Reactions");
    if (settings.click("gender")) {
      let showMessage = true
      const argsListGender = [settings.value("gender")];
      CommandGenderToggle(argsListGender, false);
    };
    if (settings.click("animal")) {
      let showMessage = false
      const argsListAnimals = [settings.value("animal")];
      CommandAnimals(argsListAnimals, false);
    };
    if (settings.click("animationButtonsPosition")) {
      let showMessage = false
      const argsListAnimationButtons = [settings.value("animationButtonsPosition")];
      CommandAnimationButtons(argsListAnimationButtons, false);
    };

    return;
  };

  PreferenceRegisterExtensionSetting({
    Identifier: 'BCAR',
    ButtonText: 'BCAR Settings',
    Image: 'Icons/Magic.png',
    load: () => PrefCall(PreferenceSettings, 'Load'),
    run: () => PrefCall(PreferenceSettings, 'Run'),
    exit: () => PrefCall(PreferenceSettings, 'Exit'),
    click: () => PrefCall(PreferenceSettings, 'Click'),
  });

  // Common Preference Behavior
  function baseLoad() { }
  function baseRun(title) {
    DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");
    const saved_align = MainCanvas.textAlign;
    const text = title || `${PreferenceSubscreen} Settings`
    MainCanvas.textAlign = "left";
    DrawText(`- ${text} -`, 500, 125, "Black", "Gray");
    MainCanvas.textAlign = saved_align;
    DrawCharacter(Player, 50, 50, 0.9);
  }
  function baseExit() { PreferenceSettings = "Settings"; bcarSettingsSave(); }
  function baseClick() {
    if (MouseIn(1815, 75, 90, 90)) {
      PrefCall(PreferenceSettings, 'Exit') || baseExit()
    }
  }

  // Define Save Validators
  const BCAR_save_validators = {
    earsCount: function (value) {
      if (!value) return false;
      const number = Number.parseInt(value);
      if (isNaN(number)) return false;
      if (!is_even(number)) return false;
      if (number < -1) return false;
      if (number > 41) return false;
      Player.BCAR.bcarSettings.earsDefault.earsCount = number;
      return true;
    },
    earsDelay: function (value) {
      if (!value) return false;
      const number = Number.parseInt(value);
      if (isNaN(number)) return false;
      if (number < 49) return false;
      if (number > 3001) return false;
      Player.BCAR.bcarSettings.earsDefault.earsDelay = number;
      return true;
    },
    tailsCount: function (value) {
      if (!value) return false;
      const number = Number.parseInt(value);
      if (isNaN(number)) return false;
      if (!is_even(number)) return false;
      if (number < -1) return false;
      if (number > 41) return false;
      Player.BCAR.bcarSettings.tailsDefault.tailsCount = number;
      return true;
    },
    tailsDelay: function (value) {
      if (!value) return false;
      const number = Number.parseInt(value);
      if (isNaN(number)) return false;
      if (number < 199) return false;
      if (number > 5001) return false;
      Player.BCAR.bcarSettings.tailsDefault.tailsDelay = number;
      return true;
    },
    wingsCount: function (value) {
      if (!value) return false;
      const number = Number.parseInt(value);
      if (isNaN(number)) return false;
      if (!is_even(number)) return false;
      if (number < -1) return false;
      if (number > 41) return false;
      Player.BCAR.bcarSettings.wingsDefault.wingsCount = number;
      return true;
    },
    wingsDelay: function (value) {
      if (!value) return false;
      const number = Number.parseInt(value);
      if (isNaN(number)) return false;
      if (number < 199) return false;
      if (number > 5001) return false;
      Player.BCAR.bcarSettings.wingsDefault.wingsDelay = number;
      return true;
    },
  }

  // COMMANDS MENU
  w.PreferenceSubscreenBCARCommandsLoad = function () {
    baseLoad();
  }
  const command_pages = {
    pages: [
      { // 0
        title: 'General Commands',
        lines: [
          '/bcar animalhelp - Opens animal instructions and commands page.',
          '/bcar arousalhelp - Opens arousal instructions and commands page.',
          '/bcar changelog - Shows the BCAR changelog.',
          '/bcar help - Opens the help window.',
          '/bcar status - Opens the status window.',
          '/bcar misc - Opens misc instructions and commands page.',
          '/bcar profilehelp - Opens profile instructions and commands page.',
          '/bcar male - Lets the reactions refer to the Player as "he".',
          '/bcar female - Lets the reactions refer to the Player as "she".',
          '/bcar other - Lets the reactions refer to the Player as "they".',
          '/bcar timerhelp - Opens timer instructions and commands page.',
          '/bcar reset - Resets the ears, tails and wings to the default settings.',
          '/bcar versions - Shows you the version of BCAR+ you are using.',
        ],
      },
      { // 1
        title: 'Animals Commands',
        lines: [
          '/bcar cat - Changes the reactions and sounds to cat realted ones.',
          '/bcar dog - Changes the reactions and sounds to dog realted ones.',
          '/bcar fox - Changes the reactions and sounds to fox realted ones.',
          '/bcar human - Literally disables the reactions and sounds.',
          '/bcar mouse - Changes the reactions and sounds to mouse realted ones.',
        ],
      },
      { // 2
        title: 'Ear Commands',
        lines: [
          '/bcar ear1 - Saves the primary ears.',
          '/bcar ear2 - Saves the secondary ears.',
          '/bcar earwiggle - Toggles the ear wiggling on/off.',
          '/bcar earwigglecount - Determines the number of wiggles.',
          '/bcar eardelay - Determines the wiggle speed.',
          '/bcar eardelete - Removes the ears.',
          '/bcar earhelp - Opens ear instructions and commands page.',
        ],
      },
      { // 3
        title: 'Emote Commands',
        lines: [
          '/bcar emoteear - Toggles ear wiggle emote on/off.',
          '/bcar emotetail - Toggles tail wag emote on/off.',
          '/bcar emotehelp - Opens emote instructions and commands page.',
        ],
      },
      { // 4
        title: 'Expression Commands',
        lines: [
          '/bcar expression - Toggles expression on/off.',
          '/bcar expressions - Toggles expression on/off.',
          '/bcar expressionhelp - Opens expression instructions and commands page.',
        ],
      },
      { // 5
        title: 'Gender Commands',
        lines: [
          '/bcar male - Lets the reactions refer to the Player as "he".',
          '/bcar female - Lets the reactions refer to the Player as "she".',
          '/bcar other - Lets the reactions refer to the Player as "they".',
        ],
      },
      { // 6
        title: 'Misc Commands',
        lines: [
          '/cum - Lets the player cum instantly.',
          '/leave - Lets the player leave the room immediately.',
          '/safewordspecific - Lets the player remove a certain restraint.',
          '/wardrobe - Opens the wardrobe of the player.',
        ],
      },
      { // 7
        title: 'Profile Commands',
        lines: [
          '/bcar save1 - Saves current setup in Profile1.',
          '/bcar save2 - Saves current setup in Profile2.',
          '/bcar save3 - Saves current setup in Profile3.',
          '/bcar load1 - Loads the setup saved in Profile1.',
          '/bcar load2 - Loads the setup saved in Profile2.',
          '/bcar load3 - Loads the setup saved in Profile3.',
          '/bcar profile1 - Shows which setup is saved in Profile1.',
          '/bcar profile2 - Shows which setup is saved in Profile2.',
          '/bcar profile3 - Shows which setup is saved in Profile3.',
        ],
      },
      { // 8
        title: 'Tail Commands',
        lines: [
          '/bcar tail1 - Saves the primary tail.',
          '/bcar tail2 - Saves the secondary tail.',
          '/bcar tailwag - Toggles the tail wagging on/off.',
          '/bcar tailwagcount - Determines the number of wags.',
          '/bcar taildelay - Determines the wag speed.',
          '/bcar taildelete - Removes the tail.',
          '/bcar tailhelp - Opens tail instructions and commands page.',
        ],
      },
      { // 9
        title: 'Timer Commands',
        lines: [
          '/bcar timer - Toggles the timer on/off.',
        ],
      },
      { // 10
        title: 'Wing Commands',
        lines: [
          '/bcar wing1 - Saves the primary wings.',
          '/bcar wing2 - Saves the secondary wings.',
          '/bcar wingflap - Toggles the wing flapping on/off.',
          '/bcar wingflapcount - Determines the number of flaps.',
          '/bcar wingdelay - Determines the flap speed.',
          '/bcar wingdelete - Removes the wings.',
          '/bcar winghelp - Opens wing instructions and commands page.',
          '/bcar fly - Starts flying.',
          '/bcar land - Stops flying.',
        ],
      },
    ],
    max: function () { return this.pages.length - 1 },
    current: 0,
    next: function () {
      this.current += 1;
      if (this.current > this.max()) this.current = 0;
    },
    get_current_page: function () {
      return this.pages[this.current]
    },
    counter: function () { // Actually, let's count from 1 here
      let current = this.current + 1
      let prefix = ''
      if (current < 10) {
        prefix = '0'
      }
      return prefix + `${current}/${this.pages.length}`
    },
  }

  function is_even(number) {
    if (number % 2 === 0) { // if integral division by 2 leaves 0 in the remainder
      return true
    }
    return false
  }

  w.PreferenceSubscreenBCARCommandsRun = function () {
    MainCanvas.textAlign = "left";
    baseRun("BCAR+ Commands");
    const page = command_pages.get_current_page();
    if (!page) {
      console.warn(`Empty command page ${command_pages.current}`);
      return;
    }
    DrawText(page.title, 500, 200, "Black", "Gray");
    for (let i in page.lines) {
      let colour = "Gray" // 0 is even, even lines are black, odd lines are gray
      if (is_even(i)) colour = "Black"
      DrawText(page.lines[i], 500, getYPosC(i), colour, "Gray");
    }
    DrawText(command_pages.counter(),
      1725,
      230,
      "Black",
      "Gray"
    );
    DrawButton(1815, 180, 90, 90, "", "White", "Icons/Next.png");
    MainCanvas.textAlign = "center";
  }
  w.PreferenceSubscreenBCARCommandsExit = function () {
    baseExit();
  }

  w.PreferenceSubscreenBCARCommandsClick = function () {
    baseClick();

    if (MouseIn(1815, 180, 90, 90))
      command_pages.next();

    if (MouseIn(500, getYPosC(3), 800, 64) && (command_pages.current === 0))
      //                          ^^^
      // this is where the click box ends, it's 500 + 300 = 800 (my guess)
      window.open('https://github.com/DrBranestawm/BCAR/blob/main/script/changelog.md', '_blank');
  }

  // HIDE INPUT STATES IN WARDROBE
  const InputStates = {
    hidden: false,
    inputs: {
      bcar_ears_wiggleCount: null,
      bcar_ears_wiggleSpeed: null,
      bcar_tail_wagCount: null,
      bcar_tail_wagSpeed: null,
      bcar_wing_flapCount: null,
      bcar_wing_flapSpeed: null,
    },
  }
  function InputsHide() {
    if (InputStates.hidden) return;
    for (const id of Object.keys(InputStates.inputs)) {
      const element = document.getElementById(id);
      if (element) {
        InputStates.inputs[id] = element.style.display;
        element.style.display = 'none';
      }
    }
    InputStates.hidden = true;
  }
  function InputsReveal() {
    if (!InputStates.hidden) return;
    for (const id of Object.keys(InputStates.inputs)) {
      const element = document.getElementById(id);
      if (element && InputStates.inputs[id]) element.style.display = InputStates.inputs[id];
    }
    InputStates.hidden = false;
  }


  // EAR MENU
  let BCAREarsLoaded = false;
  w.PreferenceSubscreenBCAREarsLoad = function () {
    baseLoad();

    // Create Element Inputs
    let element = null
    let callback = null
    ElementCreateInput("bcar_ears_wiggleCount", "number", "" + (Player.BCAR.bcarSettings.earsDefault.earsCount ?? 5), "2");
    callback = function (event) {
      const element = event.target;
      // element.checkValidity(); // for future use
      const new_value = ElementValue(element.id);
      const is_valid = BCAR_save_validators.earsCount(new_value);
      if (is_valid) {
        element.style.color = "#00FF00";
        element.is_valid = true
        //                PreferenceMessage = `Saved count: ${new_value}`;
      } else {
        element.style.color = "#FF0000";
        element.is_valid = false
        PreferenceMessage = "Invalid number of wiggles";
      }
    };
    element = document.getElementById("bcar_ears_wiggleCount");
    element.onchange = callback;
    element.is_valid = true;
    ElementCreateInput("bcar_ears_wiggleSpeed", "number", "" + (Player.BCAR.bcarSettings.earsDefault.earsDelay ?? 200), "4");
    callback = function (event) {
      const element = event.target;
      // element.checkValidity(); // for future use
      const new_value = ElementValue(element.id);
      const is_valid = BCAR_save_validators.earsDelay(new_value);
      if (is_valid) {
        element.style.color = "#00FF00";
        element.is_valid = true
        //              PreferenceMessage = `Saved delay: ${new_value} ms`;
      } else {
        element.style.color = "#FF0000";
        element.is_valid = false
        PreferenceMessage = "Invalid number of delay";
      }
    };
    element = document.getElementById("bcar_ears_wiggleSpeed");
    element.onchange = callback;
    element.is_valid = true;
    ElementPosition("bcar_ears_wiggleCount", 500 + 350 + 150, getYPos(3), 300);
    ElementPosition("bcar_ears_wiggleSpeed", 500 + 350 + 150, getYPos(4), 300);
    BCAREarsLoaded = true;

  }

  // Create Text
  const earHelpTextLines = {
    lines: [
      `First equip the main ears you want`,
      `to wear primarily in the "Ears" slot`,
      `in your wardrobe. Use Update Ear 1`,
      `to save the main ears.`,
      `For your ears to wiggle follow the same`,
      `steps and equip a different type of `,
      `"Ears" to use as your secondary.`,
      `Use Update Ear 2 to save`,
      `the secondary ears.`,
      ``,
      `The default of Wiggle Count is 12. `,
      `You can set it to an even number `,
      `between 0 and 40. `,
      `The default of Wiggle Delay is 175. `,
      `You can set it to a number `,
      `between 50 and 3000. `,
    ],
  }

  w.PreferenceSubscreenBCAREarsRun = function () {
    if (!BCAREarsLoaded) PreferenceSubscreenBCAREarsLoad();
    MainCanvas.textAlign = "left";
    baseRun("BCAR+ Ears");

    // How to use
    DrawText("How To Use", 1380, getYPosC(-3), "Black", "Gray");
    for (let i in earHelpTextLines.lines) {
      DrawText(earHelpTextLines.lines[i], 1200, getYPosC(i - 1), "Black", "Gray");
    };

    // Update Ear 1             [BUTTON]
    DrawText("Update Ear 1:", 500, getYPos(0), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(0) - 32, 200, 64, "Update", "White", undefined, "Update Ear 1 to Current", true);
    MainCanvas.textAlign = "left";

    // Update Ear 2             [BUTTON]
    DrawText("Update Ear 2:", 500, getYPos(1), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(1) - 32, 200, 64, "Update", "White", undefined, "Update Ear 2 to Current", true);
    MainCanvas.textAlign = "left";

    // Enable Ear Wiggle        [CHECKBOX]
    DrawText("Enable Ear Wiggle:", 500, getYPos(2), "Black", "Gray");
    DrawCheckbox(500 + 350, getYPos(2) - 32, 64, 64, "", Player.BCAR.bcarSettings.earWigglingEnable);

    // Ear Wiggle Count         [NUMBER INPUT]
    DrawText("Wiggle Count:", 500, getYPos(3), "Black", "Gray");
    //ElementPosition("bcar_ears_wiggleCount", 500 + 350 + 150, getYPos(3), 300);

    // Ear Wiggle Speed         [NUMBER INPUT]
    DrawText("Wiggle Delay (ms):", 500, getYPos(4), "Black", "Gray");
    //ElementPosition("bcar_ears_wiggleSpeed", 500 + 350 + 150, getYPos(4), 300);

    // Clear Ears               [BUTTON]
    DrawText("Clear Ears:", 500, getYPos(5), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(5) - 32, 200, 64, "Clear", "IndianRed", undefined, "Clear Ears", true);
    MainCanvas.textAlign = "left";

    // Test Ear Wiggle           [BUTTON]
    DrawText("Wiggle Ears:", 500, getYPos(6), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(6) - 32, 200, 64, "Test", "White", undefined, "Test Ear Wiggles", true);

    // Open Wardrobe
    DrawButton(1815, 750, 90, 90, "", "Gray", "Icons/Wardrobe.png", "Open Wardrobe", true)

    if (PreferenceMessage != "")
      DrawText(PreferenceMessage, 1000, 125, "Red", "Black");

    //InputsReveal();
  }
  w.PreferenceSubscreenBCAREarsExit = function () {
    //console.log('exit');
    // Save and element inputs
    ElementRemove("bcar_ears_wiggleCount");
    ElementRemove("bcar_ears_wiggleSpeed");
    BCAREarsLoaded = false;

    PreferenceMessage = "";

    baseExit();
  }

  w.PreferenceSubscreenBCAREarsClick = function () {
    baseClick();
    //CommandEarsChange(['ear1'])
    // Update Ear 1             [BUTTON]
    if (MouseIn(500 + 350, getYPos(0) - 32, 200, 64))
      if (!InventoryGet(Player, "HairAccessory2")) {
        PreferenceMessage = "No Ears Equipped";
      }
      else {
        PreferenceMessage = "Main Ears updated";
        CommandEarsChange(['ear1']);
      }

    // Update Ear 2             [BUTTON]
    if (MouseIn(500 + 350, getYPos(1) - 32, 200, 64))
      if (!InventoryGet(Player, "HairAccessory2")) {
        PreferenceMessage = "No Ears Equipped";
      }
      else {
        PreferenceMessage = "Secondary Ears updated";
        CommandEarsChange(['ear2']);
      }

    // Enable Ear Wiggle        [CHECKBOX]
    if (MouseIn(500 + 350, getYPos(2) - 32, 64, 64))
      Player.BCAR.bcarSettings.earWigglingEnable = !Player.BCAR.bcarSettings.earWigglingEnable;

    // Ear Wiggle Count         [NUMBER INPUT]
    // Ear Wiggle Speed         [NUMBER INPUT]

    // Clear Ears               [BUTTON]
    /*      if (MouseIn(500 + 350, getYPos(5) - 32, 200, 64)) {
                CommandEarsDelete(['eardelete']);
                PreferenceMessage = "Ears has been removed";
            }
    */
    if (MouseIn(500 + 350, getYPos(5) - 32, 200, 64)) {
      CurrentDeleteOption = "Ears";
      CurrentPreferenceSubscreen = "Ears";
      ElementRemove("bcar_ears_wiggleCount");
      ElementRemove("bcar_ears_wiggleSpeed");
      confirmationState.add_no_timer('ears');
      LoadPreferencesSubscreen("ConfirmAbort");
    }
    // Test Ear Wiggle          [BUTTON]
    if (MouseIn(500 + 350, getYPos(6) - 32, 200, 64)) {
      if (document.getElementById("bcar_ears_wiggleCount").is_valid && document.getElementById("bcar_ears_wiggleSpeed").is_valid) {
        EarWiggle();
        PreferenceMessage = "";
      }
      else {
        PreferenceMessage = "Set valid numbers";
      }
    }
    // Open Ear Wardrobe
    /*if (MouseIn(1815, 750, 90, 90)){
        // InputsHide();
        PreferenceExit();
        PreferenceSubscreen = "BCAREars"; // keep the settings subpage
        ChatRoomAppearanceLoadCharacter(Player);
        Player.FocusGroup = AssetGroup.find(g => g.Name === 'HairAccessory2');
        DialogInventoryBuild(Player, true, false);
        AppearancePreviewBuild(Player, true);
        CharacterAppearanceCloth = InventoryGet(Player, Player.FocusGroup.Name);
        CharacterAppearanceMode = "Cloth";
    }*/
  }

  // TAIL MENU
  let BCARTailLoaded = false
  w.PreferenceSubscreenBCARTailLoad = function () {
    baseLoad();

    // Create Element Inputs
    let element = null
    let callback = null
    ElementCreateInput("bcar_tail_wagCount", "number", "" + (Player.BCAR.bcarSettings.tailsDefault.tailsCount ?? 5), "2");
    callback = function (event) {
      const element = event.target;
      // element.checkValidity(); // for future use
      const new_value = ElementValue(element.id);
      const is_valid = BCAR_save_validators.tailsCount(new_value);
      if (is_valid) {
        element.style.color = "#00FF00";
        element.is_valid = true;
        //                PreferenceMessage = `Saved count: ${new_value}`;
      } else {
        element.style.color = "#FF0000";
        element.is_valid = false;
        PreferenceMessage = "Invalid number of wags";
      }
    };
    element = document.getElementById("bcar_tail_wagCount");
    element.onchange = callback;
    element.is_valid = true;
    ElementCreateInput("bcar_tail_wagSpeed", "number", "" + (Player.BCAR.bcarSettings.tailsDefault.tailsDelay ?? 200), "4");
    callback = function (event) {
      const element = event.target;
      // element.checkValidity(); // for future use
      const new_value = ElementValue(element.id);
      const is_valid = BCAR_save_validators.tailsDelay(new_value);
      if (is_valid) {
        element.style.color = "#00FF00";
        element.is_valid = true;
        //                PreferenceMessage = `Saved delay: ${new_value} ms`;
      } else {
        element.style.color = "#FF0000";
        element.is_valid = false;
        PreferenceMessage = "Invalid number of delay";
      }
    };
    element = document.getElementById("bcar_tail_wagSpeed");
    element.onchange = callback;
    element.is_valid = true;
    ElementPosition("bcar_tail_wagCount", 500 + 350 + 150, getYPos(3), 300);
    ElementPosition("bcar_tail_wagSpeed", 500 + 350 + 150, getYPos(4), 300);
    BCARTailLoaded = true;
  }

  // Create Text
  const tailHelpTextLines = {
    lines: [
      `First equip the main tail you want`,
      `to wear primarily in the "TailStraps"`,
      `slot in your wardrobe. Use Update Tail 1`,
      `to save the main tail.`,
      `For your tail to wag follow the same`,
      `steps and equip a different type of `,
      `"Tail" to use as your secondary.`,
      `Use Update Tail 2 to save`,
      `the secondary tail.`,
      ``,
      `The default of Wag Count is 6. `,
      `You can set it to an even number `,
      `between 0 and 40. `,
      `The default of Wag Delay is 800. `,
      `You can set it to a number `,
      `between 200 and 5000. `,
    ],
  }

  w.PreferenceSubscreenBCARTailRun = function () {
    if (!BCARTailLoaded) PreferenceSubscreenBCARTailLoad();
    MainCanvas.textAlign = "left";
    baseRun("BCAR+ Tail");

    // How to use
    DrawText("How To Use", 1380, getYPosC(-3), "Black", "Gray");
    for (let i in tailHelpTextLines.lines) {
      DrawText(tailHelpTextLines.lines[i], 1200, getYPosC(i - 1), "Black", "Gray");
    };

    // Update Tail 1             [BUTTON]
    DrawText("Update Tail 1:", 500, getYPos(0), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(0) - 32, 200, 64, "Update", "White", undefined, "Update Tail 1 to Current", true);
    MainCanvas.textAlign = "left";

    // Update Tail 2             [BUTTON]
    DrawText("Update Tail 2:", 500, getYPos(1), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(1) - 32, 200, 64, "Update", "White", undefined, "Update Tail 2 to Current", true);
    MainCanvas.textAlign = "left";

    // Enable Tail Wag        [CHECKBOX]
    DrawText("Enable Tail Wag:", 500, getYPos(2), "Black", "Gray");
    DrawCheckbox(500 + 350, getYPos(2) - 32, 64, 64, "", Player.BCAR.bcarSettings.tailWaggingEnable);

    // Tail Wag Count         [NUMBER INPUT]
    DrawText("Wag Count:", 500, getYPos(3), "Black", "Gray");
    //ElementPosition("bcar_tail_wagCount", 500 + 350 + 150, getYPos(3), 300);

    // Tail Wag Speed         [NUMBER INPUT]
    DrawText("Wag Delay (ms):", 500, getYPos(4), "Black", "Gray");
    //ElementPosition("bcar_tail_wagSpeed", 500 + 350 + 150, getYPos(4), 300);

    // Clear Tail             [BUTTON]
    DrawText("Clear Tail:", 500, getYPos(5), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(5) - 32, 200, 64, "Clear", "IndianRed", undefined, "Clear Tail", true);
    MainCanvas.textAlign = "left";

    // Test Tail Wag            [BUTTON]
    DrawText("Wag Tail:", 500, getYPos(6), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(6) - 32, 200, 64, "Test", "White", undefined, "Test Tail Wags", true);

    // Open Wardrobe
    DrawButton(1815, 750, 90, 90, "", "Gray", "Icons/Wardrobe.png")

    if (PreferenceMessage != "")
      DrawText(PreferenceMessage, 1000, 125, "Red", "Black");

    //InputsReveal();
  }
  w.PreferenceSubscreenBCARTailExit = function () {
    // Save and element inputs
    ElementRemove("bcar_tail_wagCount");
    ElementRemove("bcar_tail_wagSpeed");
    BCARTailLoaded = false;

    PreferenceMessage = "";

    baseExit();
  }
  w.PreferenceSubscreenBCARTailClick = function () {
    baseClick();
    //CommandTailChange(['tail1'])
    // Update Tail 1          [BUTTON]
    if (MouseIn(500 + 350, getYPos(0) - 32, 200, 64))
      if (!InventoryGet(Player, "TailStraps")) {
        PreferenceMessage = "No Tail Equipped";
      }
      else {
        PreferenceMessage = "Main Tail updated";
        CommandTailChange(['tail1']);
      }

    // Update Tail 2          [BUTTON]
    if (MouseIn(500 + 350, getYPos(1) - 32, 200, 64))
      if (!InventoryGet(Player, "TailStraps")) {
        PreferenceMessage = "No Tail Equipped";
      }
      else {
        PreferenceMessage = "Secondary Tail updated";
        CommandTailChange(['tail2']);
      }


    // Enable Tail Wag     [CHECKBOX]
    if (MouseIn(500 + 350, getYPos(2) - 32, 64, 64))
      Player.BCAR.bcarSettings.tailWaggingEnable = !Player.BCAR.bcarSettings.tailWaggingEnable;

    // Tail Wag Count         [NUMBER INPUT]
    // Tail Wag Speed         [NUMBER INPUT]

    // Clear Tail             [BUTTON]
    if (MouseIn(500 + 350, getYPos(5) - 32, 200, 64)) {
      CurrentDeleteOption = "Tails";
      CurrentPreferenceSubscreen = "Tail";
      ElementRemove("bcar_tail_wagCount");
      ElementRemove("bcar_tail_wagSpeed");
      confirmationState.add_no_timer('tails');
      LoadPreferencesSubscreen("ConfirmAbort");
    }

    // Test Tail Wag          [BUTTON]
    if (MouseIn(500 + 350, getYPos(6) - 32, 200, 64)) {
      if (document.getElementById("bcar_tail_wagCount").is_valid && document.getElementById("bcar_tail_wagSpeed").is_valid) {
        TailWag();
        PreferenceMessage = "";
      }
      else {
        PreferenceMessage = "Set valid numbers";
      }
    }
    // Open Tail Wardrobe
    /*if (MouseIn(1815, 750, 90, 90)){
        //InputsHide();
        PreferenceExit();
        PreferenceSubscreen = "BCARTail"; // keep the settings subpage
        ChatRoomAppearanceLoadCharacter(Player);
        Player.FocusGroup = AssetGroup.find(g => g.Name === 'TailStraps');
        DialogInventoryBuild(Player, true, false);
        AppearancePreviewBuild(Player, true);
        CharacterAppearanceCloth = InventoryGet(Player, Player.FocusGroup.Name);
        CharacterAppearanceMode = "Cloth";
        ChatRoomClearAllElements();
    }*/
  }

  // WINGS MENU
  let BCARWingsLoaded = false;
  w.PreferenceSubscreenBCARWingsLoad = function () {
    baseLoad();

    // Create Element Inputs
    let element = null
    let callback = null
    ElementCreateInput("bcar_wing_flapCount", "number", "" + (Player.BCAR.bcarSettings.wingsDefault.wingsCount ?? 5), "2");
    callback = function (event) {
      const element = event.target;
      // element.checkValidity(); // for future use
      const new_value = ElementValue(element.id);
      const is_valid = BCAR_save_validators.wingsCount(new_value);
      if (is_valid) {
        element.style.color = "#00FF00";
        element.is_valid = true;
        //                PreferenceMessage = `Saved count: ${new_value}`;
      } else {
        element.style.color = "#FF0000";
        element.is_valid = false;
        PreferenceMessage = "Invalid number of flaps";
      }
    };
    element = document.getElementById("bcar_wing_flapCount");
    element.onchange = callback;
    element.is_valid = true;
    ElementCreateInput("bcar_wing_flapSpeed", "number", "" + (Player.BCAR.bcarSettings.wingsDefault.wingsDelay ?? 200), "4");
    callback = function (event) {
      const element = event.target;
      // element.checkValidity(); // for future use
      const new_value = ElementValue(element.id);
      const is_valid = BCAR_save_validators.wingsDelay(new_value);
      if (is_valid) {
        element.style.color = "#00FF00";
        element.is_valid = true;
        //                PreferenceMessage = `Saved delay: ${new_value} ms`;
      } else {
        element.style.color = "#FF0000";
        element.is_valid = false;
        PreferenceMessage = "Invalid number of delay";
      }
    };
    element = document.getElementById("bcar_wing_flapSpeed");
    element.onchange = callback;
    element.is_valid = true;
    ElementPosition("bcar_wing_flapCount", 500 + 350 + 150, getYPos(3), 300);
    ElementPosition("bcar_wing_flapSpeed", 500 + 350 + 150, getYPos(4), 300);
    BCARWingsLoaded = true;
  }

  // Create Text
  const wingHelpTextLines = {
    lines: [
      `First equip the main wings you want`,
      `to wear primarily in the "Wings" slot`,
      `in your wardrobe. Use Update Wing 1`,
      `to save the main wings.`,
      `For your wings to flap follow the same`,
      `steps and equip a different type of `,
      `"Wings" to use as your secondary.`,
      `Use Update Wing 2 to save`,
      `the secondary wings.`,
      ``,
      `The default of Flap Count is 6. `,
      `You can set it to an even number `,
      `between 0 and 40. `,
      `The default of Flap Delay is 500. `,
      `You can set it to a number `,
      `between 200 and 5000. `,
    ],
  }

  w.PreferenceSubscreenBCARWingsRun = function () {
    if (!BCARWingsLoaded) PreferenceSubscreenBCARWingsLoad();
    MainCanvas.textAlign = "left";
    baseRun("BCAR+ Wings");

    // How to use
    DrawText("How To Use", 1380, getYPosC(-3), "Black", "Gray");
    for (let i in wingHelpTextLines.lines) {
      DrawText(wingHelpTextLines.lines[i], 1200, getYPosC(i - 1), "Black", "Gray");
    };

    // Update Wing 1             [BUTTON]
    DrawText("Update Wing 1:", 500, getYPos(0), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(0) - 32, 200, 64, "Update", "White", undefined, "Update Wing 1 to Current", true);
    MainCanvas.textAlign = "left";

    // Update Wing 2             [BUTTON]
    DrawText("Update Wing 2:", 500, getYPos(1), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(1) - 32, 200, 64, "Update", "White", undefined, "Update Wing 2 to Current", true);
    MainCanvas.textAlign = "left";

    // Enable Wing Flap        [CHECKBOX]
    DrawText("Enable Wing Flap:", 500, getYPos(2), "Black", "Gray");
    DrawCheckbox(500 + 350, getYPos(2) - 32, 64, 64, "", Player.BCAR.bcarSettings.wingFlappingEnable);

    // Wing Flap Count         [NUMBER INPUT]
    DrawText("Flap Count:", 500, getYPos(3), "Black", "Gray");
    //ElementPosition("bcar_wing_flapCount", 500 + 350 + 150, getYPos(3), 300);

    // Wing Flap Speed         [NUMBER INPUT]
    DrawText("Flap Delay (ms):", 500, getYPos(4), "Black", "Gray");
    //ElementPosition("bcar_wing_flapSpeed", 500 + 350 + 150, getYPos(4), 300);

    // Clear Wing             [BUTTON]
    DrawText("Clear Wing:", 500, getYPos(5), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(5) - 32, 200, 64, "Clear", "IndianRed", undefined, "Clear Wing", true);
    MainCanvas.textAlign = "left";

    // Test Wing Flap            [BUTTON]
    DrawText("Flap Wing:", 500, getYPos(6), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 350, getYPos(6) - 32, 200, 64, "Test", "White", undefined, "Test Wing Flaps", true);

    // Open Wardrobe
    DrawButton(1815, 750, 90, 90, "", "Gray", "Icons/Wardrobe.png")

    if (PreferenceMessage != "")
      DrawText(PreferenceMessage, 1000, 125, "Red", "Black");

    //InputsReveal();
  }

  w.PreferenceSubscreenBCARWingsExit = function () {
    // Save and element inputs
    ElementRemove("bcar_wing_flapCount");
    ElementRemove("bcar_wing_flapSpeed");
    BCARWingsLoaded = false;

    PreferenceMessage = "";

    baseExit();
  }
  w.PreferenceSubscreenBCARWingsClick = function () {
    baseClick();
    //CommandWingChange(['wing1'])
    // Update Wing 1          [BUTTON]
    if (MouseIn(500 + 350, getYPos(0) - 32, 200, 64))
      if (!InventoryGet(Player, "Wings")) {
        PreferenceMessage = "No Wing Equipped";
      }
      else {
        PreferenceMessage = "Main Wing updated";
        CommandWingChange(['wing1']);
      }

    // Update Wing 2          [BUTTON]
    if (MouseIn(500 + 350, getYPos(1) - 32, 200, 64))
      if (!InventoryGet(Player, "Wings")) {
        PreferenceMessage = "No Wing Equipped";
      }
      else {
        PreferenceMessage = "Secondary Wing updated";
        CommandWingChange(['wing2']);
      }


    // Enable Wing Flapping     [CHECKBOX]
    if (MouseIn(500 + 350, getYPos(2) - 32, 64, 64))
      Player.BCAR.bcarSettings.wingFlappingEnable = !Player.BCAR.bcarSettings.wingFlappingEnable;

    // Wing Flap Count         [NUMBER INPUT]
    // Wing Flap Speed         [NUMBER INPUT]

    // Clear Wing             [BUTTON]
    if (MouseIn(500 + 350, getYPos(5) - 32, 200, 64)) {
      CurrentDeleteOption = "Wings";
      CurrentPreferenceSubscreen = "Wings";
      ElementRemove("bcar_wing_flapCount");
      ElementRemove("bcar_wing_flapSpeed");
      confirmationState.add_no_timer('wings');
      LoadPreferencesSubscreen("ConfirmAbort");
    }

    // Test Wing Flap          [BUTTON]
    if (MouseIn(500 + 350, getYPos(6) - 32, 200, 64)) {
      if (document.getElementById("bcar_wing_flapCount").is_valid && document.getElementById("bcar_wing_flapSpeed").is_valid) {
        WingFlap();
        PreferenceMessage = "";
      }
      else {
        PreferenceMessage = "Set valid numbers";
      }
    }
    // Open Wing Wardrobe
    /*if (MouseIn(1815, 750, 90, 90)){
        // InputsHide();
        PreferenceExit();
        PreferenceSubscreen = "BCARWings"; // keep the settings subpage
        ChatRoomAppearanceLoadCharacter(Player);
        Player.FocusGroup = AssetGroup.find(g => g.Name === 'Wings');
        DialogInventoryBuild(Player, true, false);
        AppearancePreviewBuild(Player, true);
        CharacterAppearanceCloth = InventoryGet(Player, Player.FocusGroup.Name);
        CharacterAppearanceMode = "Cloth";

    }*/
  }

  // MISCELLANEOUS MENU
  w.PreferenceSubscreenBCARMiscLoad = function () { baseLoad(); }

  w.PreferenceSubscreenBCARMiscRun = function () {
    MainCanvas.textAlign = "left";
    baseRun("BCAR+ Miscellaneous");

    // Enable Animation Buttons        [CHECKBOX]
    DrawText("Enable Animation Buttons:", 500, getYPos(0), "Black", "Gray");
    DrawCheckbox(500 + 550, getYPos(0) - 32, 64, 64, "", Player.BCAR.bcarSettings.animationButtonsEnable);

    // Enable Arousal Manipulation        [CHECKBOX]
    DrawText("Enable Arousal Manipulation:", 500, getYPos(1), "Black", "Gray");
    DrawCheckbox(500 + 550, getYPos(1) - 32, 64, 64, "", Player.BCAR.bcarSettings.arousalEnable);

    // Enable BCAR+ Expressions         [CHECKBOX]
    DrawText("Enable BCAR+ Expressions:", 500, getYPos(2), "Black", "Gray");
    DrawCheckbox(500 + 550, getYPos(2) - 32, 64, 64, "", Player.BCAR.bcarSettings.expressionsEnable);

    // Enable Ear Emote         [CHECKBOX]
    DrawText("Enable Ear Emote:", 500, getYPos(3), "Black", "Gray");
    DrawCheckbox(500 + 550, getYPos(3) - 32, 64, 64, "", Player.BCAR.bcarSettings.earEmoteEnable);

    // Enable Tail Emote         [CHECKBOX]
    DrawText("Enable Tail Emote:", 500, getYPos(4), "Black", "Gray");
    DrawCheckbox(500 + 550, getYPos(4) - 32, 64, 64, "", Player.BCAR.bcarSettings.tailEmoteEnable);

    // Reset BCAR+ to default         [BUTTON]
    MainCanvas.textAlign = "center";
    DrawButton(1500, getYPos(7) - 50, 400, 85, "Reset BCAR+", "IndianRed", undefined, "Resets every setting to default.", true);

    if (PreferenceMessage != "")
      DrawText(PreferenceMessage, 1000, getYPos(7), "Red", "Black");

  }
  w.PreferenceSubscreenBCARMiscExit = function () {

    PreferenceMessage = "";

    baseExit();
  }

  w.PreferenceSubscreenBCARMiscClick = function () {
    baseClick();
    // Enable Animation Buttons     [CHECKBOX]
    if (MouseIn(500 + 550, getYPos(0) - 32, 64, 64))
      Player.BCAR.bcarSettings.animationButtonsEnable = !Player.BCAR.bcarSettings.animationButtonsEnable;

    // Enable Arousal Manipulation     [CHECKBOX]
    if (MouseIn(500 + 550, getYPos(1) - 32, 64, 64))
      Player.BCAR.bcarSettings.arousalEnable = !Player.BCAR.bcarSettings.arousalEnable;

    // Enable BCAR+ Expressions      [CHECKBOX]
    if (MouseIn(500 + 550, getYPos(2) - 32, 64, 64)) {
      Player.BCAR.bcarSettings.expressionsEnable = !Player.BCAR.bcarSettings.expressionsEnable;
      bcarExpressions();
    }

    // Enable Ear Emote      [CHECKBOX]
    if (MouseIn(500 + 550, getYPos(3) - 32, 64, 64))
      Player.BCAR.bcarSettings.earEmoteEnable = !Player.BCAR.bcarSettings.earEmoteEnable;

    // Enable Tail Emote      [CHECKBOX]
    if (MouseIn(500 + 550, getYPos(4) - 32, 64, 64))
      Player.BCAR.bcarSettings.tailEmoteEnable = !Player.BCAR.bcarSettings.tailEmoteEnable;

    // Reset BCAR+ to default         [BUTTON]
    if (MouseIn(1500, getYPos(7) - 50, 400, 85)) {
      CurrentDeleteOption = "BCAR+";
      CurrentPreferenceSubscreen = "Misc";
      confirmationState.add('clearsettings');
      LoadPreferencesSubscreen("ConfirmAbort");
    }
  }

  // PROFILES MENU
  w.PreferenceSubscreenBCARProfilesLoad = function () { baseLoad(); }
  w.PreferenceSubscreenBCARProfilesRun = function () {
    baseRun("BCAR+ Profiles");

    // Save Profile 1             [BUTTON]
    DrawText("Profile 1:", 570, getYPos(0), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 250, getYPos(0) - 32, 200, 64, "Save", "White", undefined, "Save Profile 1", true);

    // Load Profile 1             [BUTTON]
    DrawButton(500 + 500, getYPos(0) - 32, 200, 64, "Load", "White", undefined, "Load Profile 1", true);

    // Delete Profile 1           [BUTTON]
    DrawButton(500 + 750, getYPos(0) - 32, 200, 64, "Delete", "IndianRed", undefined, "Delete Profile 1", true);
    MainCanvas.textAlign = "left";

    // Save Profile 2             [BUTTON]
    DrawText("Profile 2:", 500, getYPos(1), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 250, getYPos(1) - 32, 200, 64, "Save", "White", undefined, "Save Profile 2", true);

    // Load Profile 2             [BUTTON]
    DrawButton(500 + 500, getYPos(1) - 32, 200, 64, "Load", "White", undefined, "Load Profile 2", true);

    // Delete Profile 2           [BUTTON]
    DrawButton(500 + 750, getYPos(1) - 32, 200, 64, "Delete", "IndianRed", undefined, "Delete Profile 2", true);
    MainCanvas.textAlign = "left";

    // Save Profile 3             [BUTTON]
    DrawText("Profile 3:", 500, getYPos(2), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 250, getYPos(2) - 32, 200, 64, "Save", "White", undefined, "Save Profile 3", true);

    // Load Profile 3             [BUTTON]
    DrawButton(500 + 500, getYPos(2) - 32, 200, 64, "Load", "White", undefined, "Load Profile 3", true);

    // Delete Profile 3           [BUTTON]
    DrawButton(500 + 750, getYPos(2) - 32, 200, 64, "Delete", "IndianRed", undefined, "Delete Profile 3", true);

    if (PreferenceMessage != "")
      DrawText(PreferenceMessage, 1000, 125, "Red", "Black");

  }
  w.PreferenceSubscreenBCARProfilesExit = function () {

    PreferenceMessage = "";

    baseExit();
  }
  w.PreferenceSubscreenBCARProfilesClick = function () {
    baseClick();

    // Save Profile 1             [BUTTON]
    if (MouseIn(500 + 250, getYPos(0) - 32, 200, 64)) {
      Player.BCAR.bcarSettings.profile1Saved = true;
      Player.BCAR.bcarSettings.profile1.earWigglingEnable = Player.BCAR.bcarSettings.earWigglingEnable;
      Player.BCAR.bcarSettings.profile1.earWigglingStatus = Player.BCAR.bcarSettings.earWigglingStatus;
      Player.BCAR.bcarSettings.profile1.earsDefault = Player.BCAR.bcarSettings.earsDefault;

      Player.BCAR.bcarSettings.profile1.tailWaggingEnable = Player.BCAR.bcarSettings.tailWaggingEnable;
      Player.BCAR.bcarSettings.profile1.tailWaggingStatus = Player.BCAR.bcarSettings.tailWaggingStatus;
      Player.BCAR.bcarSettings.profile1.tailsDefault = Player.BCAR.bcarSettings.tailsDefault;

      Player.BCAR.bcarSettings.profile1.wingFlappingEnable = Player.BCAR.bcarSettings.wingFlappingEnable;
      Player.BCAR.bcarSettings.profile1.wingFlappingStatus = Player.BCAR.bcarSettings.wingFlappingStatus;
      Player.BCAR.bcarSettings.profile1.wingsDefault = Player.BCAR.bcarSettings.wingsDefault;
      PreferenceMessage = "Profile 1 was saved.";
      bcarSettingsSave();
    }

    // Load Profile 1             [BUTTON]
    if (MouseIn(500 + 550, getYPos(0) - 32, 200, 64))
      if (!Player.BCAR.bcarSettings.profile1Saved) {
        PreferenceMessage = "Profile 1 not found.";
      }
      else {
        if (Player?.BCAR?.bcarSettings?.earsDefault?.ears1) {
          InventoryWear(Player, Player?.BCAR?.bcarSettings?.profile1?.earsDefault?.ears1, "HairAccessory2", Player?.BCAR?.bcarSettings?.profile1?.earsDefault?.earsColor1);
        } else {
          InventoryRemove(Player, "HairAccessory2");
        }
        if (Player?.BCAR?.bcarSettings?.tailsDefault?.tails1) {
          InventoryWear(Player, Player?.BCAR?.bcarSettings?.profile1?.tailsDefault?.tails1, "TailStraps", Player?.BCAR?.bcarSettings?.profile1?.tailsDefault?.tailsColor1);
        } else {
          InventoryRemove(Player, "TailStraps");
        }
        if (Player?.BCAR?.bcarSettings?.wingsDefault?.wings1) {
          InventoryWear(Player, Player?.BCAR?.bcarSettings?.profile1?.wingsDefault?.wings1, "Wings", Player?.BCAR?.bcarSettings?.profile1?.wingsDefault?.wingsColor1);
        } else {
          InventoryRemove(Player, "Wings");
        }
        PreferenceMessage = "Profile 1 was loaded.";
        bcarSettingsSave();
      }

    // Delete Profile 1           [BUTTON]
    if (MouseIn(500 + 750, getYPos(0) - 32, 200, 64))
      if (!Player.BCAR.bcarSettings.profile1Saved) {
        PreferenceMessage = "Profile 1 not found.";
      }
      else {
        if (Player.BCAR.bcarSettings.profile1Saved) {
          Player.BCAR.bcarSettings.profile1.earsDefault = { earsDescription1: "None", earsDescription2: "None" };
          Player.BCAR.bcarSettings.profile1.earWigglingEnable = false;
          Player.BCAR.bcarSettings.profile1.earWigglingStatus = "Disabled";

          Player.BCAR.bcarSettings.profile1.tailsDefault = { tailsDescription1: "None", tailsDescription2: "None" };
          Player.BCAR.bcarSettings.profile1.tailWaggingEnable = false;
          Player.BCAR.bcarSettings.profile1.tailWaggingStatus = "Disabled";

          Player.BCAR.bcarSettings.profile1.wingsDefault = { wingsDescription1: "None", wingsDescription2: "None" };
          Player.BCAR.bcarSettings.profile1.wingFlappingEnable = false;
          Player.BCAR.bcarSettings.profile1.wingFlappingStatus = "Disabled";
          Player.BCAR.bcarSettings.profile1Saved = false;
          PreferenceMessage = "Profile 1 was deleted.";
          bcarSettingsSave();
        }
      }

    // Save Profile 2             [BUTTON]
    if (MouseIn(500 + 250, getYPos(1) - 32, 200, 64)) {
      Player.BCAR.bcarSettings.profile2Saved = true;
      Player.BCAR.bcarSettings.profile2.earWigglingEnable = Player.BCAR.bcarSettings.earWigglingEnable;
      Player.BCAR.bcarSettings.profile2.earWigglingStatus = Player.BCAR.bcarSettings.earWigglingStatus;
      Player.BCAR.bcarSettings.profile2.earsDefault = Player.BCAR.bcarSettings.earsDefault;

      Player.BCAR.bcarSettings.profile2.tailWaggingEnable = Player.BCAR.bcarSettings.tailWaggingEnable;
      Player.BCAR.bcarSettings.profile2.tailWaggingStatus = Player.BCAR.bcarSettings.tailWaggingStatus;
      Player.BCAR.bcarSettings.profile2.tailsDefault = Player.BCAR.bcarSettings.tailsDefault;

      Player.BCAR.bcarSettings.profile2.wingFlappingEnable = Player.BCAR.bcarSettings.wingFlappingEnable;
      Player.BCAR.bcarSettings.profile2.wingFlappingStatus = Player.BCAR.bcarSettings.wingFlappingStatus;
      Player.BCAR.bcarSettings.profile2.wingsDefault = Player.BCAR.bcarSettings.wingsDefault;
      PreferenceMessage = "Profile 2 was saved.";
      bcarSettingsSave();
    }

    // Load Profile 2             [BUTTON]
    if (MouseIn(500 + 550, getYPos(1) - 32, 200, 64))
      if (!Player.BCAR.bcarSettings.profile2Saved) {
        PreferenceMessage = "Profile 2 not found.";
      }
      else {
        if (Player?.BCAR?.bcarSettings?.earsDefault?.ears1) {
          InventoryWear(Player, Player?.BCAR?.bcarSettings?.profile2?.earsDefault?.ears1, "HairAccessory2", Player?.BCAR?.bcarSettings?.profile2?.earsDefault?.earsColor1);
        } else {
          InventoryRemove(Player, "HairAccessory2");
        }
        if (Player?.BCAR?.bcarSettings?.tailsDefault?.tails1) {
          InventoryWear(Player, Player?.BCAR?.bcarSettings?.profile2?.tailsDefault?.tails1, "TailStraps", Player?.BCAR?.bcarSettings?.profile2?.tailsDefault?.tailsColor1);
        } else {
          InventoryRemove(Player, "TailStraps");
        }
        if (Player?.BCAR?.bcarSettings?.wingsDefault?.wings1) {
          InventoryWear(Player, Player?.BCAR?.bcarSettings?.profile2?.wingsDefault?.wings1, "Wings", Player?.BCAR?.bcarSettings?.profile2?.wingsDefault?.wingsColor1);
        } else {
          InventoryRemove(Player, "Wings");
        }
        PreferenceMessage = "Profile 2 was loaded.";
        bcarSettingsSave();
      }

    // Delete Profile 2           [BUTTON]
    if (MouseIn(500 + 750, getYPos(1) - 32, 200, 64))
      if (!Player.BCAR.bcarSettings.profile2Saved) {
        PreferenceMessage = "Profile 2 not found.";
      }
      else {
        if (Player.BCAR.bcarSettings.profile2Saved) {
          Player.BCAR.bcarSettings.profile2.earsDefault = { earsDescription1: "None", earsDescription2: "None" };
          Player.BCAR.bcarSettings.profile2.earWigglingEnable = false;
          Player.BCAR.bcarSettings.profile2.earWigglingStatus = "Disabled";

          Player.BCAR.bcarSettings.profile2.tailsDefault = { tailsDescription1: "None", tailsDescription2: "None" };
          Player.BCAR.bcarSettings.profile2.tailWaggingEnable = false;
          Player.BCAR.bcarSettings.profile2.tailWaggingStatus = "Disabled";

          Player.BCAR.bcarSettings.profile2.wingsDefault = { wingsDescription1: "None", wingsDescription2: "None" };
          Player.BCAR.bcarSettings.profile2.wingFlappingEnable = false;
          Player.BCAR.bcarSettings.profile2.wingFlappingStatus = "Disabled";
          Player.BCAR.bcarSettings.profile2Saved = false;
          PreferenceMessage = "Profile 2 was deleted.";
          bcarSettingsSave();
        }
      }

    // Save Profile 3             [BUTTON]
    if (MouseIn(500 + 250, getYPos(2) - 32, 200, 64)) {
      Player.BCAR.bcarSettings.profile3Saved = true;
      Player.BCAR.bcarSettings.profile3.earWigglingEnable = Player.BCAR.bcarSettings.earWigglingEnable;
      Player.BCAR.bcarSettings.profile3.earWigglingStatus = Player.BCAR.bcarSettings.earWigglingStatus;
      Player.BCAR.bcarSettings.profile3.earsDefault = Player.BCAR.bcarSettings.earsDefault;

      Player.BCAR.bcarSettings.profile3.tailWaggingEnable = Player.BCAR.bcarSettings.tailWaggingEnable;
      Player.BCAR.bcarSettings.profile3.tailWaggingStatus = Player.BCAR.bcarSettings.tailWaggingStatus;
      Player.BCAR.bcarSettings.profile3.tailsDefault = Player.BCAR.bcarSettings.tailsDefault;

      Player.BCAR.bcarSettings.profile3.wingFlappingEnable = Player.BCAR.bcarSettings.wingFlappingEnable;
      Player.BCAR.bcarSettings.profile3.wingFlappingStatus = Player.BCAR.bcarSettings.wingFlappingStatus;
      Player.BCAR.bcarSettings.profile3.wingsDefault = Player.BCAR.bcarSettings.wingsDefault;
      PreferenceMessage = "Profile 3 was saved.";
      bcarSettingsSave();
    }

    // Load Profile 3             [BUTTON]
    if (MouseIn(500 + 550, getYPos(2) - 32, 200, 64))
      if (!Player.BCAR.bcarSettings.profile2Saved) {
        PreferenceMessage = "Profile 3 not found.";
      }
      else {
        if (Player?.BCAR?.bcarSettings?.earsDefault?.ears1) {
          InventoryWear(Player, Player?.BCAR?.bcarSettings?.profile3?.earsDefault?.ears1, "HairAccessory2", Player?.BCAR?.bcarSettings?.profile3?.earsDefault?.earsColor1);
        } else {
          InventoryRemove(Player, "HairAccessory2");
        }
        if (Player?.BCAR?.bcarSettings?.tailsDefault?.tails1) {
          InventoryWear(Player, Player?.BCAR?.bcarSettings?.profile3?.tailsDefault?.tails1, "TailStraps", Player?.BCAR?.bcarSettings?.profile3?.tailsDefault?.tailsColor1);
        } else {
          InventoryRemove(Player, "TailStraps");
        }
        if (Player?.BCAR?.bcarSettings?.wingsDefault?.wings1) {
          InventoryWear(Player, Player?.BCAR?.bcarSettings?.profile3?.wingsDefault?.wings1, "Wings", Player?.BCAR?.bcarSettings?.profile3?.wingsDefault?.wingsColor1);
        } else {
          InventoryRemove(Player, "Wings");
        }
        PreferenceMessage = "Profile 3 was loaded.";
        bcarSettingsSave();
      }

    // Delete Profile 3           [BUTTON]
    if (MouseIn(500 + 750, getYPos(2) - 32, 200, 64))
      if (!Player.BCAR.bcarSettings.profile3Saved) {
        PreferenceMessage = "Profile 3 not found.";
      }
      else {
        if (Player.BCAR.bcarSettings.profile3Saved) {
          Player.BCAR.bcarSettings.profile3.earsDefault = { earsDescription1: "None", earsDescription2: "None" };
          Player.BCAR.bcarSettings.profile3.earWigglingEnable = false;
          Player.BCAR.bcarSettings.profile3.earWigglingStatus = "Disabled";

          Player.BCAR.bcarSettings.profile3.tailsDefault = { tailsDescription1: "None", tailsDescription2: "None" };
          Player.BCAR.bcarSettings.profile3.tailWaggingEnable = false;
          Player.BCAR.bcarSettings.profile3.tailWaggingStatus = "Disabled";

          Player.BCAR.bcarSettings.profile3.wingsDefault = { wingsDescription1: "None", wingsDescription2: "None" };
          Player.BCAR.bcarSettings.profile3.wingFlappingEnable = false;
          Player.BCAR.bcarSettings.profile3.wingFlappingStatus = "Disabled";
          Player.BCAR.bcarSettings.profile3Saved = false;
          PreferenceMessage = "Profile 3 was deleted.";
          bcarSettingsSave();
        }
      }
  }

  w.PreferenceSubscreenBCARConfirmAbortLoad = function () { baseLoad(); }
  w.PreferenceSubscreenBCARConfirmAbortRun = function () {

    const saved_align = MainCanvas.textAlign;
    const text = `Delete ${CurrentDeleteOption}`
    MainCanvas.textAlign = "left";
    DrawText(`- ${text} -`, 850, 125, "Black", "Gray");
    MainCanvas.textAlign = saved_align;
    DrawCharacter(Player, 50, 50, 0.9);

    // Confirm Button             [BUTTON]
    DrawText("Are you sure?", 975, getYPos(2), "Black", "Gray");
    MainCanvas.textAlign = "center";
    DrawButton(500 + 250, getYPos(3) - 32, 200, 64, "Confirm", "White");

    // Cancel Button             [BUTTON]
    DrawButton(500 + 500, getYPos(3) - 32, 200, 64, "Cancel", "White");

  }
  w.PreferenceSubscreenBCARConfirmAbortExit = function () { baseExit(); }
  w.PreferenceSubscreenBCARConfirmAbortClick = function () {
    baseClick();

    if (MouseIn(500 + 250, getYPos(3) - 32, 200, 64)) {
      const s = Player?.BCAR?.bcarSettings;
      if (confirmationState.ears) {
        s.earsDefault = {};
        s.earsDefault.earsDescription1 = "None";
        s.earsDefault.earsDescription2 = "None";
        s.earWigglingEnable = false;
        s.earWigglingStatus = "Disabled";
        s.earsDefault.earsCount = 12;
        s.earsDefault.earsDelay = 175;
        InventoryRemove(Player, "HairAccessory2")
        PreferenceMessage = "Ears has been removed";
      }
      if (confirmationState.tails) {
        s.tailsDefault = {};
        s.tailsDefault.tailsDescription1 = "None";
        s.tailsDefault.tailsDescription2 = "None";
        s.tailWaggingEnable = false;
        s.tailWaggingStatus = "Disabled";
        s.tailsDefault.tailsCount = 6;
        s.tailsDefault.tailsDelay = 800;
        InventoryRemove(Player, "TailStraps")
        PreferenceMessage = "Tails has been removed";
      }
      if (confirmationState.wings) {
        s.wingsDefault = {};
        s.wingsDefault.wingsDescription1 = "None";
        s.wingsDefault.wingsDescription2 = "None";
        s.wingFlappingEnable = false;
        s.wingFlappingStatus = "Disabled";
        s.wingsDefault.wingsCount = 6;
        s.wingsDefault.wingsDelay = 500;
        InventoryRemove(Player, "Wings")
        PreferenceMessage = "Wings has been removed";
      }
      if (confirmationState.profile1) {
        s.profile1.earsDefault = { earsDescription1: "None", earsDescription2: "None" };
        s.profile1.earWigglingEnable = false;
        s.profile1.earWigglingStatus = "Disabled";

        s.profile1.tailsDefault = { tailsDescription1: "None", tailsDescription2: "None" };
        s.profile1.tailWaggingEnable = false;
        s.profile1.tailWaggingStatus = "Disabled";

        s.profile1.wingsDefault = { wingsDescription1: "None", wingsDescription2: "None" };
        s.profile1.wingFlappingEnable = false;
        s.profile1.wingFlappingStatus = "Disabled";
        // this can be made even shorter like this:
        // ['ear', 'tail', 'wing'].forEach(pref => {
        //   profile[`${pref}sDefault`] = {[`${pref}sDescription1`]: "None", [`${pref}sDescription2`]: "None"};
        //   profile[`${pref}FlappingEnable`] = false;
        //   profile[`${pref}FlappingStatus`]= "Disabled";
        // })
        Player.BCAR.bcarSettings.profile1Saved = false
        PreferenceMessage = "Profile 1 has been deleted";
      }
      if (confirmationState.profile2) {
        s.profile2.earsDefault = { earsDescription1: "None", earsDescription2: "None" };
        s.profile2.earWigglingEnable = false;
        s.profile2.earWigglingStatus = "Disabled";

        s.profile2.tailsDefault = { tailsDescription1: "None", tailsDescription2: "None" };
        s.profile2.tailWaggingEnable = false;
        s.profile2.tailWaggingStatus = "Disabled";

        s.profile2.wingsDefault = { wingsDescription1: "None", wingsDescription2: "None" };
        s.profile2.wingFlappingEnable = false;
        s.profile2.wingFlappingStatus = "Disabled";
        // this can be made even shorter like this:
        // ['ear', 'tail', 'wing'].forEach(pref => {
        //   profile[`${pref}sDefault`] = {[`${pref}sDescription1`]: "None", [`${pref}sDescription2`]: "None"};
        //   profile[`${pref}FlappingEnable`] = false;
        //   profile[`${pref}FlappingStatus`]= "Disabled";
        // })
        Player.BCAR.bcarSettings.profile2Saved = false
        PreferenceMessage = "Profile 2 has been deleted";
      }
      if (confirmationState.profile3) {
        s.profile3.earsDefault = { earsDescription1: "None", earsDescription2: "None" };
        s.profile3.earWigglingEnable = false;
        s.profile3.earWigglingStatus = "Disabled";

        s.profile3.tailsDefault = { tailsDescription1: "None", tailsDescription2: "None" };
        s.profile3.tailWaggingEnable = false;
        s.profile3.tailWaggingStatus = "Disabled";

        s.profile3.wingsDefault = { wingsDescription1: "None", wingsDescription2: "None" };
        s.profile3.wingFlappingEnable = false;
        s.profile3.wingFlappingStatus = "Disabled";
        // this can be made even shorter like this:
        // ['ear', 'tail', 'wing'].forEach(pref => {
        //   profile[`${pref}sDefault`] = {[`${pref}sDescription1`]: "None", [`${pref}sDescription2`]: "None"};
        //   profile[`${pref}FlappingEnable`] = false;
        //   profile[`${pref}FlappingStatus`]= "Disabled";
        // })
        Player.BCAR.bcarSettings.profile3Saved = false
        PreferenceMessage = "Profile 3 has been deleted";
      }
      if (confirmationState.clearsettings) {
        bcarSettingsRemove();
        bcarSettingsLoad();
        PreferenceMessage = "BCAR+ has been reseted";
      }
      //console.log("Confirm");
      confirmationState.reset();
      bcarSettingsSave();
      LoadPreferencesSubscreen(CurrentPreferenceSubscreen);
    }

    if (MouseIn(500 + 550, getYPos(3) - 32, 200, 64)) {
      //console.log("Abort");
      confirmationState.reset();
      LoadPreferencesSubscreen(CurrentPreferenceSubscreen);
    }
  }

  w.PreferenceSubscreenBCARReactionsLoad = function () { baseLoad(); }

  w.PreferenceSubscreenBCARReactionsRun = function () {
    MainCanvas.textAlign = "left";
    baseRun("BCAR+ Reactions");
  }
  w.PreferenceSubscreenBCARReactionsExit = function () { baseExit(); }
  w.PreferenceSubscreenBCARReactionsClick = function () {
    baseClick();
  }
  /// CUSTOM ACTIVITIES

  CustomPrerequisiteFuncs = new Map();
  CustomImages = new Map();

  const AnimationsMap = { // this one is new
    BCAR_TailWag: TailWag,
  }

  // -- Intercept ServerSend for "BCAR_"... activities and manually hack in the substitutions
  modApi.hookFunction("ServerSend", 5, (args, next) => {
    if (args[0] == "ChatRoomChat" && args[1]?.Type == "Activity") {
      let data = args[1];
      let actName = data.Dictionary[3]?.ActivityName ?? "";
      if (actName.indexOf("BCAR_") == 0) {
        // Intercept custom activity send and just do a custom action instead..
        let { metadata, substitutions } = ChatRoomMessageRunExtractors(data, Player)
        let msg = ActivityDictionaryText(data.Content);
        msg = CommonStringSubstitute(msg, substitutions ?? [])
        data.Dictionary.push({
          Tag: "MISSING ACTIVITY DESCRIPTION FOR KEYWORD " + data.Content,
          Text: msg
        });
        AnimationsMap[actName]?.() // and this line is new, nothing else changed
      }
    }

    return next(args);
  });

  // -- Support for non-standard prerequisite functions
  modApi.hookFunction("ActivityCheckPrerequisite", 5, (args, next) => {
    var prereqName = args[0];
    if (CustomPrerequisiteFuncs.has(prereqName)) {
      var acting = args[1];
      var acted = args[2];
      var targetGrp = args[3];
      var customPrereqFunc = CustomPrerequisiteFuncs.get(prereqName);
      if (!customPrereqFunc)
        return next(args);
      else {
        return customPrereqFunc(acting, acted, targetGrp);
      }
    }
    else
      return next(args);
  });

  // -- Support for repointing or adding custom image thumbnails to activities
  if (GameVersion === "R110") {
    modApi.hookFunction("DrawImageResize", 1, (args, next) => {
      var path = args[0];
      if (!!path && (typeof path === 'string') && path.indexOf("BCAR_") > -1) {
        var activityName = path.substring(path.indexOf("BCAR_"));
        activityName = activityName.substring(0, activityName.indexOf(".png"))
        if (CustomImages.has(activityName))
          args[0] = CustomImages.get(activityName);
      }
      return next(args);
    });
  } else { // R111
    modApi.hookFunction("ElementButton.CreateForActivity", 0, (args, next) => {
      /** @type {ItemActivity} */
      const activity = args[1];
      if (activity.Activity.Name.includes("BCAR")) {
        args[4] ??= {}; // null | { image?: string }
        args[4].image = CustomImages.get(activity.Activity.Name);
      }
      return next(args);
    });
  }

  // -- Tail Wag
  var wagActivity = {
    Name: "BCAR_TailWag",
    Target: [],
    TargetSelf: ["ItemButt"],
    MaxProgress: 50,
    MaxProgressSelf: 50,
    Prerequisite: ["HasTail"]
  };

  CustomPrerequisiteFuncs.set("HasTail", (acting, acted, group) => !!InventoryGet(acted, "TailStraps"));
  CustomImages.set(wagActivity.Name, ICONS.TAIL);

  ActivityDictionary?.push(["ActivityBCAR_TailWag", "Wag Tail"]);
  ActivityDictionary?.push(["Label-ChatOther-ItemButt-BCAR_TailWag", "Wag Tail"]);
  ActivityDictionary?.push(["ChatOther-ItemButt-BCAR_TailWag", "SourceCharacter wags PronounPossessive tail."]);
  ActivityDictionary?.push(["Label-ChatSelf-ItemButt-BCAR_TailWag", "Wag Tail"]);
  ActivityDictionary?.push(["ChatSelf-ItemButt-BCAR_TailWag", "SourceCharacter wags PronounPossessive tail."]);

  ActivityFemale3DCG.push(wagActivity);
  ActivityFemale3DCGOrdering.push(wagActivity.Name);

  // END CUSTOM ACTIVITIES


  //FBC Expressions
  if (typeof ChatRoomCharacter === "undefined") {
    console.warn(
      "Bondage Club not detected. Skipping BCE customizer initialization."
    );
    return;
  };
  // ======= FBC INTEGRATION ============
  // this should be at the bottom of BCAR
  // no code should go under this line
  // unless it requires FBC to be loaded
  //
  await waitFor(() => !!w.Player?.Name && !!w.bce_initializeDefaultExpression && !!w.bce_ActivityTriggers);

  function bcarExpressions() {
    if (Player.BCAR.bcarSettings.expressionsEnable) { // load the expressions and triggers
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
