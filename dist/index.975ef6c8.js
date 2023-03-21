// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _artists = require("./sections/artists");
var _artistsDefault = parcelHelpers.interopDefault(_artists);
var _songs = require("./sections/songs");
// On les importe au moins une fois dans l'index, pour être sûr que les eventlisteners seront appelés
var _searchInput = require("./sections/search_input");
// S'occuper de "toggler" les liens dans la navigation
// Désactiver le lien actif et activer le nouveau en bleu, selon l'url passée en paramètre de la fonction
const toggleNav = (hash)=>{
    // On va chercher le lien actuellement affiché (n'importe quel lien dans "nav" qui a une classe active) et en enlève
    // la classe active
    // NB: Noter le ? après le querySelector. Cela veut dire "si on a trouvé quelque chose, on fait la suite, autrement rien"
    document.querySelector(`nav a.active`)?.classList.remove("active");
    // On va chercher le lien avec pour url le href passé en argument et y ajouter la classe active pour le rendre bleu
    // Exemple: <a href="#player">...</a>
    // NB: Noter le ? après le querySelector. Cela veut dire "si on a trouvé quelque chose, on fait la suite, autrement rien"
    document.querySelector(`nav a[href="${hash}"]`)?.classList.add("active");
};
// S'occuper de "toggler" les sections dans le body, en cachant la section actuellement affichée, puis en ajoutant
// la classe active à la nouvelle pour l'afficher
const toggleSection = (hash)=>{
    // Comme pour le menu, on enlève la classe active à la section en cours
    document.querySelector(`section.active`)?.classList.remove("active");
    // et on essaie de trouver la section correspondante et l'afficher, en y ajoutant la classe active
    document.querySelector(`${hash}-section`)?.classList.add("active");
};
const displaySection = (hash)=>{
    if (hash == "") hash = "#home";
    const hashSplit = hash.split("-");
    // On appelle la fonction toggleNav qui va s'occuper de "toggler" les liens dans la navigation. On se sert toujours
    // de la première partie de l'url (comme ça, si #artists-12 --> #artists est sélectionné)
    toggleNav(hashSplit[0]);
    // On appelle la fonction toggleSection qui va s'occuper de "toggler" les sections dans le body. Par défaut, la première
    // partie de l'url correspond à une section dans le HTML, par exemple -> #home --> #home-section. Dans certains cas,
    // on va appeler cette fonction manuellement avec une valeur spécifique, pour afficher la section list, car l'url
    // ne correspond pas
    toggleSection(hashSplit[0]);
    switch(hashSplit[0]){
        case "#artists":
            // S'il y a un paramètre derrière...? Ex: -> #artists-12 -> hashSplit[1] vaudra 12
            if (hashSplit[1]) {
                // Cela nous permet d'afficher la section générique "list"
                toggleSection("#list");
                // On affiche la liste des chansons pour un artiste donné (d'après son ID reçu en paramètre)
                (0, _songs.renderSongsForArtistSection)(hashSplit[1]);
            } else // On affiche la liste des artistes
            (0, _artistsDefault.default)();
            break;
        case "#search":
            // Cela nous permet d'afficher la section générique "list"
            toggleSection("#list");
            // On affiche la liste des chansons pour le terme de recherche reçu en paramètre
            (0, _songs.renderSongsForSearchSection)(hashSplit[1]);
            break;
        case "#favorites":
            // Cela nous permet d'afficher la section générique "list"
            toggleSection("#list");
            // On affiche la liste des chansons présentent dans les favoris
            (0, _songs.renderFavoritesSongsSection)();
            break;
    }
};
// Ici, on écoute la mise à jour des favoris dans le storage. Lorsque la liste à changé et que l'on est dans la section
// favoris, on remet à jour la liste pour enlever les éléments déselectionnés
window.addEventListener("favorites_updated", ()=>{
    if (window.location.hash == "#favorites") (0, _songs.renderFavoritesSongsSection)();
});
// On link la fonction "displaySection" à l'événement hashchange pour être averti d'un changement de hash dans l'url
window.addEventListener("hashchange", ()=>displaySection(window.location.hash));
// Affichage au chargement pour traiter l'url en cours (exemple: on ouvre un lien dans un nouvel onglet)
displaySection(window.location.hash);

},{"./sections/artists":"7tyNw","./sections/songs":"10tUP","./sections/search_input":"j62E0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7tyNw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _api = require("../api");
// On obtient l'élément DOM qui nous servira de template pour un élément de la liste d'artistes
const artistListItemTemplate = document.querySelector("#artist-list-item-template");
// Element DOM de la liste à manipuler
const artistList = document.querySelector(".artist-list");
// Génère le HTML nécessaire pour afficher la liste des artistes
const renderArtists = async ()=>{
    // On vide la liste de ses anciennes informations, pour en ajouter de nouvelles à jour
    artistList.replaceChildren();
    // On récupère les artistes depuis l'API
    const artists = await (0, _api.getArtists)();
    // On itère sur chacun des artistes récupérés depuis l'API
    artists.forEach((artist)=>{
        // Créer une copie du template et de son contenu pour avoir un nouvelle élément vierge
        // que l'on stock dans la variable newArtistItem
        const newArtistItem = artistListItemTemplate.content.cloneNode(true);
        // On modifie l'url du lien qui se trouve à l'intérieur, pour avoir une URL du style #artists-12
        newArtistItem.querySelector("a").href = "#artists-" + artist.id;
        // On rempli le titre de l'artiste dans ce nouvel élément, en sélectionnant l'élément
        // artist-list-item-title à l'intérieur (!dans newArtistItem! Pas dans document)
        newArtistItem.querySelector(".artist-list-item-title").innerHTML = artist.name;
        // On modifie le src de l'image qui se trouve à l'intérieur, pour afficher la cover de l'artiste
        newArtistItem.querySelector("img").src = artist.image_url;
        // On l'ajoute à la liste d'artistes
        artistList.append(newArtistItem);
    });
};
exports.default = renderArtists;

},{"../api":"8Zgej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Zgej":[function(require,module,exports) {
// URL de base du serveur
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getArtists", ()=>getArtists);
parcelHelpers.export(exports, "getSongsForArtist", ()=>getSongsForArtist);
parcelHelpers.export(exports, "searchSongs", ()=>searchSongs);
const BASE_URL = "https://webmob-ui-22-spotlified.herokuapp.com";
// Fonction loadJson utilisée à l'interne. Elle s'occupe de charger l'url passée en paramètre et convertir
// son résultat en json
async function loadJson(url) {
    const response = await fetch(url);
    const parsedJson = await response.json();
    return parsedJson;
}
// Retourne une liste d'artistes
async function getArtists() {
    return await loadJson(`${BASE_URL}/api/artists`);
}
// Retourne la liste des chansons d'un ariste
async function getSongsForArtist(id) {
    return await loadJson(`${BASE_URL}/api/artists/${id}/songs`);
}
// Retourne un résultat de recherche
async function searchSongs(query) {
    return await loadJson(`${BASE_URL}/api/songs/search/${encodeURIComponent(query)}`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"10tUP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSongsForArtistSection", ()=>renderSongsForArtistSection);
parcelHelpers.export(exports, "renderSongsForSearchSection", ()=>renderSongsForSearchSection);
parcelHelpers.export(exports, "renderFavoritesSongsSection", ()=>renderFavoritesSongsSection);
var _api = require("../api");
var _player = require("./player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _favorites = require("../favorites");
// On obtient l'élément DOM qui nous servira de template pour un élément de la list
const songListItemTemplate = document.querySelector("#list-item-template");
// Element DOM de la liste à manipuler
const songList = document.querySelector(".list");
const songSectionTitle = document.querySelector("#list-section h4");
// Cette fonction s'occupe de modifier l'icone à l'intérieur de l'élément passé en paramètre,
// selon si la chanson en deuxième paramètre est présente ou non
const toggleFavoriteIcon = (favoriteIcon, song)=>{
    if ((0, _favorites.isInFavorite)(song)) favoriteIcon.innerText = "playlist_remove" // ou favorite pour le coeur plein
    ;
    else favoriteIcon.innerText = "playlist_add" // ou favorite_border pour le coeur vide
    ;
};
// Génère le HTML nécessaire pour afficher une liste de chansons, basé sur le tableau passé en paramètre
const renderSongs = (songs)=>{
    // On vide la liste de ses anciennes informations, pour en ajouter de nouvelles à jour
    songList.replaceChildren();
    // On itère sur chacune des chansons récupérées depuis l'API pour cet artiste
    songs.forEach((song)=>{
        // Créer une copie du template et de son contenu pour avoir un nouvelle élément vierge
        // que l'on stock dans la variable newSongItem
        const newSongItem = songListItemTemplate.content.cloneNode(true);
        // On rempli le titre de la chanson dans ce nouvel élément, en sélectionnant l'élément
        // list-item-title à l'intérieur (!dans newSongItem! Pas dans document)
        newSongItem.querySelector(".list-item-title").innerHTML = song.title;
        // Au clique sur le bouton play, on transmet la chanson et le tableau duquel elle provient au player. Cela permet de
        // lire la chanson et passer le contexte actuel au player (le tableau) pour faire précédent/suivant
        newSongItem.querySelector(".play-button").addEventListener("click", ()=>{
            (0, _playerDefault.default)(song, songs);
            window.location.hash = "#player";
        });
        // On récupère l'icone des favoris pour le modifier
        const favoriteIcon = newSongItem.querySelector(".favorite-button .material-icons");
        // Au clique sur le bouton favori, on toggle la chanson dans le storage et on ajuste son icone en fonction
        newSongItem.querySelector(".favorite-button").addEventListener("click", ()=>{
            (0, _favorites.toggleFavorite)(song);
            toggleFavoriteIcon(favoriteIcon, song) // on passe le target du click, à savoir l'icône
            ;
        });
        // A l'insertion, on met à jour l'icone, si la chanson est présente dans les favoris, afin d'avoir un icône
        // correspondant à l'état de base
        toggleFavoriteIcon(favoriteIcon, song);
        // On l'ajoute à la liste de chansons
        songList.append(newSongItem);
    });
};
// Génère le HTML nécessaire pour afficher la liste de chanson d'un artiste, basé sur son id
const renderSongsForArtistSection = async (artistId)=>{
    // On récupère les songs d'un artiste depuis l'API, en se servant de son Id passé en paramètre
    const songs = await (0, _api.getSongsForArtist)(artistId);
    // Set le nom de l'artiste
    songSectionTitle.textContent = `Artistes > ${songs[0].artist.name}`;
    // Affiche les chansons
    renderSongs(songs);
};
// Génère le HTML nécessaire pour afficher la liste de chanson d'un artiste, basé sur son id
const renderSongsForSearchSection = async (query)=>{
    // On récupère les songs correspondant à la recherche depuis l'API, en se servant de la query passée en paramètre
    const songs = await (0, _api.searchSongs)(query);
    // Set le titre de la section
    songSectionTitle.textContent = `Résultats pour "${decodeURIComponent(query)}"`;
    // Affiche les chansons
    renderSongs(songs);
};
// Charge la section des chansons selon le tableau de favoris
const renderFavoritesSongsSection = ()=>{
    // On récupère les songs présentent dans les favoris
    const songs = (0, _favorites.getFavorites)();
    // Set le titre de la section
    songSectionTitle.innerText = "Favoris";
    // Affiche les chansons
    renderSongs(songs);
};

},{"../api":"8Zgej","./player":"m0Ody","../favorites":"1pLZR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"m0Ody":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatTimestamp = require("../lib/formatTimestamp");
var _formatTimestampDefault = parcelHelpers.interopDefault(_formatTimestamp);
////////// Constantes des différents tags HTML
// Tag audio
const audioPlayer = document.querySelector("#audio-player");
// Song infos
const playerThumbnail = document.querySelector("#player-thumbnail-image");
const playerSongTitle = document.querySelector("#player-infos-song-title");
const playerArtistName = document.querySelector("#player-infos-artist-name");
// Controls
const playerPrev = document.querySelector("#player-control-previous");
const playerPlay = document.querySelector("#player-control-play");
const playerPlayIcon = document.querySelector("#player-control-play .material-icons");
const playerNext = document.querySelector("#player-control-next");
// Progress
const playerTimeCurrent = document.querySelector("#player-time-current");
const playerTimeDuration = document.querySelector("#player-time-duration");
const playerProgress = document.querySelector("#player-progress-bar");
// Logo
const logo = document.querySelector("#logo");
////////// Logique
// songs contiendra la liste des chansons en cours de lecture, afin de pouvoir se déplacer entre les chansons
let songList = [];
// La chanson en cours de lecture
let currentSong = null;
// Lire une chanson sur laquelle on clique
const playSong = (song, songs)=>{
    // On enregistre la chanson en cours de lecture
    currentSong = song;
    // si un tableau est transmis, on le met à jour. Cela nous permet d'utiliser juste playSong(song) à l'interne,
    // sans devoir le repasser à chaque fois (depuis previous/next, par exemple)
    if (songs) songList = songs;
    // On donne l'url au player et démarre la lecture
    audioPlayer.src = song.audio_url;
    audioPlayer.play();
    // Remplacement des différentes informations au sein des tags
    playerSongTitle.innerHTML = song.title;
    playerArtistName.innerHTML = song.artist.name;
    playerThumbnail.src = song.artist.image_url;
};
// Lis la chanson suivante, d'après la chanson en cours
const playNextSong = ()=>{
    const index = songList.indexOf(currentSong);
    const newIndex = index + 1;
    // On s'assure qu'on n'arrive jamais en dehors du tableau et on reboucle sur le début
    if (newIndex < songList.length) playSong(songList[newIndex]);
    else playSong(songList[0]);
};
// Lis la chanson précédente, d'après la chanson en cours
const playPreviousSong = ()=>{
    const index = songList.indexOf(currentSong);
    const newIndex = index - 1;
    // On s'assure qu'on n'arrive jamais en dehors du tableau et on reboucle sur la fin
    if (newIndex >= 0) playSong(songList[newIndex]);
    else playSong(songList[songList.length - 1]);
};
// Met à jour l'icone du bouton play/pause dans le player + anime l'icone de l'app
const updateIcon = ()=>{
    if (audioPlayer.paused) {
        playerPlayIcon.innerHTML = "play_arrow";
        // On arrête d'animer le logo de l'application lorsqu'aucune chanson ne se lit, pour moins de fancyness
        logo.classList.remove("animated");
    } else {
        playerPlayIcon.innerHTML = "pause";
        // On anime le logo de l'application lorsqu'une chanson se lit, pour plus de fancyness
        logo.classList.add("animated");
    }
};
// On écoute le clique sur le bouton play et on transmets l'instruction au player
playerPlay.addEventListener("click", ()=>{
    if (audioPlayer.paused) audioPlayer.play();
    else audioPlayer.pause();
});
// Bouton précédent
playerPrev.addEventListener("click", playPreviousSong);
// Bouton suivant
playerNext.addEventListener("click", playNextSong);
// Lorsque l'on click sur la barre de progression, on change sa valeur et elle émet donc un événement "change" pour
// avertir de son changement. Comme on a défini la valeur max comme étant la durée totale de la chanson, toute valeur
// transmise est forcément incluse dans cet interval. On peut alors la passer au player sans problème
playerProgress.addEventListener("change", (event)=>{
    audioPlayer.currentTime = event.currentTarget.value;
});
// Lorsque nous faison ".src = " sur le player, celui-ci va télécharger la chanson en arrière plan et calculer
// sa longueur. Lorsque c'est fait, il émet un event "durationchange" pour nous informer qu'il connait maintenant
// sa durée (en secondes!) et que l'on peut se servir de cette information
audioPlayer.addEventListener("durationchange", ()=>{
    // On défini la valeur maximum du slider de la chanson comme étant sa durée en secondes
    playerProgress.max = audioPlayer.duration;
    // On affiche la durée totale, grâce à la fonction de formattage du temps
    playerTimeDuration.innerText = (0, _formatTimestampDefault.default)(audioPlayer.duration);
});
// Lorsque la chanson est en cours de lecture, l'événement "timeupdate" sera envoyé plusieurs fois par seconde
// pour avertir de l'avancée dans la lecture. C'est cet événement qui nous permet de bouger la barre de progression
// au fur et à mesure que la chanson se lit.
audioPlayer.addEventListener("timeupdate", ()=>{
    // On récupère la valeur "currentTime" qui est la position dans la chanson au sein du player et on la transmets
    // à la progress bar comme étant sa valeur. La progress bar a comme valeur minimum 0 et comme valeur max la durée
    // totale de la chanson. En lui passant le currrentTime, il sera forcément entre le min et le max et le browser
    // pourra afficher la petite boule au bon endroit
    playerProgress.value = audioPlayer.currentTime;
    // On affiche la position de lecture, grâce à la fonction de formattage du temps
    playerTimeCurrent.innerText = (0, _formatTimestampDefault.default)(audioPlayer.currentTime);
});
// Lorsque le player se met en lecture, il émet un évent "play" pour annoncer le début de lecture. Dans ce cas,
// on change l'icône du bouton play à pause
//
// Pourquoi faire ça ici et non dans le "click" sur le bouton ? :) Que se passe-t-il si vous utilisez le bouton
// "play/pause" natif qui se trouve sur votre clavier ? Cela va mettre en pause la chanson, mais l'événement "click"
// du bouton play/pause ne sera pas émis, donc icône pas mis à jour, car vous avez utilisez votre clavier et
// non le bouton.
// En revanche, lorsque votre OS reçoit le click sur le clavier, il trouve l'application qui émet du son (en l'occ.
// notre browser) et lui demande d'arrêter. Le browser va chercher quel élément audio lis actuellement de la musique
// et va faire un "audioPlayer.pause()". Les évenements play/pause seront donc transmis et c'est pour cela qu'il est
// mieux de gérer le changement d'icône ici
audioPlayer.addEventListener("play", updateIcon);
// Lorsque le player pause la lecture, il émet un évent "pause" pour annoncer le pause de lecture. Dans ce cas,
// on change l'icône du bouton pause à play
// voir commentaire précédent
audioPlayer.addEventListener("pause", updateIcon);
exports.default = playSong;

},{"../lib/formatTimestamp":"9L9AK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9L9AK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function formatTimestamp(timestamp) {
    timestamp = parseInt(timestamp, 10);
    let hours = Math.floor(timestamp / 3600);
    let minutes = Math.floor((timestamp - hours * 3600) / 60);
    let seconds = timestamp - hours * 3600 - minutes * 60;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}
exports.default = formatTimestamp;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1pLZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleFavorite", ()=>toggleFavorite);
parcelHelpers.export(exports, "isInFavorite", ()=>isInFavorite);
parcelHelpers.export(exports, "getFavorites", ()=>getFavorites);
var _jsonStorage = require("./lib/JsonStorage");
var _jsonStorageDefault = parcelHelpers.interopDefault(_jsonStorage);
// Création d'un storage exprès pour les favoris
// L'idée est d'utiliser l'id de la chanson en tant que clé de stockage. Comme elle est unique dans toute l'app,
// pas de problème d'écrasement et cela permet de checker très facilement si une chanson est contenue ou non dans
// le storage. Exemple: favoritesStorage.getItem(song.id)
const favoritesStorage = new (0, _jsonStorageDefault.default)({
    name: "favorites",
    eventName: "favorites_updated"
});
// Cette fonction toggle une chanson au sein de la liste des favoris
const toggleFavorite = (song)=>{
    if (isInFavorite(song)) favoritesStorage.removeItem(song.id);
    else favoritesStorage.setItem(song.id, song);
};
// Vérifie si une chanson est dans les favoris (retourne l'entry si oui, undefined si non)
const isInFavorite = (song)=>{
    return favoritesStorage.getItem(song.id);
};
// Retourne la liste des favoris sous forme de tableau avec seulement la valeur (voir slides pour explication)
const getFavorites = ()=>{
    return favoritesStorage.toArray().map((e)=>e[1]);
};

},{"./lib/JsonStorage":"kUsD4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUsD4":[function(require,module,exports) {
/** 
 * Class representing a LocalStorage handler, with JSON and storage's name management 
 *
 * Licence: GNU General Public License v3.0  
 * Author: Nicolas Chabloz  
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = class {
    /**
   * Create a JsonStorage.
   * 
   * @param {Object} [options={}] - Options
   * @param {string} [options.name="default"] - The name of the storage.
   * @param {boolean} [options.listen=true] - Listen to storage events for data update
   * @param {boolean} [options.trigger=true] - Trigger an event on "window" when data is set, changed or deleted in the storage
   * @param {boolean} [options.eventName="jsonstorage"] - The event's name to trigger 
   */ constructor(options = {}){
        this.options = {
            name: options.name || "default",
            listen: options.listen || true,
            trigger: options.trigger || true,
            eventName: options.eventName || "jsonstorage"
        };
        this._reloadKeys();
        // reload keys data when storage change from another tab
        if (this.options.listen) window.addEventListener("storage", (evt)=>{
            if (!evt.key.startsWith(`${this.options.name}_`)) return;
            this._reloadKeys();
            if (this.options.trigger) window.dispatchEvent(new Event(this.options.eventName));
        });
    }
    /**
   * Private method
   */ _reloadKeys() {
        this.storageKeys = Object.keys(localStorage).filter((key)=>key.startsWith(`${this.options.name}_`)).reduce((map, key)=>map.set(key.substring(`${this.options.name}_`.length), 1), new Map());
    }
    /**
   * Returns a new Iterator object that contains an array of [key, value] for each element in the storage
   */ [Symbol.iterator]() {
        return this.entries();
    }
    /**
   * Returns a new Iterator object that contains the keys for each element in the storage.
   */ keys() {
        return this.storageKeys.keys();
    }
    /**
   * Returns the name of the nth key in the storage
   * 
   * @param {integer} ind Indice
   */ key(ind) {
        let keys = [
            ...this.keys()
        ];
        if (ind < 0 || ind >= keys.length) return null;
        return keys[ind];
    }
    /**
   * Returns a new Iterator object that contains the values for each element in the storage.
   */ *values() {
        for (let k of this.keys())yield this.getItem(k);
    }
    /**
   * Returns a new Iterator object that contains an array of [key, value] for each element in the storage.
   */ *entries() {
        for (let k of this.keys())yield [
            k,
            this.getItem(k)
        ];
    }
    /**
   * Calls callback once for each key-value pair present in the storage. The callback is called with the value and the key as parameters.
   * 
   * @param {function} callback 
   */ forEach(callback) {
        for (let entrie of this)callback(entrie[1], entrie[0]);
    }
    /**
   * Return an array of [key, value] for each element in the storage.
   */ toArray() {
        return [
            ...this.entries()
        ];
    }
    /**
   * Return an object with a propertie key: value for each element in the storage.
   */ toObject() {
        let obj = {};
        for (let ent of this)obj[ent[0]] = ent[1];
        return obj;
    }
    /**
   * Return a JSON string representing an object with a propertie key: value for each element in the storage.
   */ toJSON() {
        return JSON.stringify(this.toObject());
    }
    /**
   * Return the numbers of elements in the storage
   */ get length() {
        return this.storageKeys.size;
    }
    /**
   * Return the numbers of elements in the storage (alias for this.length)
   */ get size() {
        return this.length;
    }
    /**
   * Add the key and the key's value to the storage, or update that key's value if it already exists
   * 
   * @param {string} key the name of the key you want to create/update.
   * @param {*} val the value you want to give the key you are creating/updating.
   */ setItem(key, val) {
        localStorage.setItem(`${this.options.name}_${key}`, JSON.stringify(val));
        this.storageKeys.set(key.toString(), 1);
        if (this.options.trigger) window.dispatchEvent(new Event(this.options.eventName));
    }
    /**
   * Private method
   */ _genKey() {
        return "uid_" + Math.random().toString(36).substring(2, 10);
    }
    /**
   * Add the value with a random unique key to the storage.
   * Return the key.
   * 
   * @param {*} val the value you want to give the key you are creating/updating.
   */ addItem(val) {
        let key = this._genKey();
        while(this.storageKeys.has(key.toString()))key = this._genKey();
        this.setItem(key, val);
        return key;
    }
    /**
   * Return the value of the key in the storage. If the key does not exist, null is returned.
   * 
   * @param {string} key the name of the key you want to retrieve the value of.
   */ getItem(key) {
        let val = localStorage.getItem(`${this.options.name}_${key}`);
        if (val == null) return null;
        return JSON.parse(val);
    }
    /**
   * Remove the key from the storage if it exists. If there is no item associated with the given key, this method will do nothing.
   * 
   * @param {string} the name of the key you want to remove. 
   */ removeItem(key) {
        localStorage.removeItem(`${this.options.name}_${key}`);
        this.storageKeys.delete(key.toString());
        if (this.options.trigger) window.dispatchEvent(new Event(this.options.eventName));
    }
    /**
   * Clears all keys in the storage
   */ clear() {
        for (let key of this.keys())localStorage.removeItem(`${this.options.name}_${key}`);
        this.storageKeys.clear();
        if (this.options.trigger) window.dispatchEvent(new Event(this.options.eventName));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j62E0":[function(require,module,exports) {
// Il n'y a en fait pas de section recherche à proprement parler. Ce fichier sert juste à ajouter des listeners sur
// le champ de recherche, premièrement pour l'afficher/le cacher, puis pour rediriger vers l'url de recherche, avec
// la query. C'est le display section qui va gérer la logique du listing
// Tags pour la recherche
const searchTrigger = document.querySelector("#search-trigger");
const searchInput = document.querySelector("#search-input");
// Quand on click sur la loupe, on affiche le champ de recherche et on focus l'input
searchTrigger.addEventListener("click", ()=>{
    searchInput.classList.add("active");
    searchInput.focus();
});
// Lorsque l'utilisateur sort du champ de recherche, on le cache et on le vide
searchInput.addEventListener("blur", ()=>{
    searchInput.classList.remove("active");
    searchInput.value = "";
});
// Lorsque l'utilisateur entre quelque chose dans le champ, on redirige vers l'url #search-:query, où query est
// la valeur du camp encodée. On encode la chaine de recherche pour éviter les caractères spéciaux
// (typiquement, un '-' qui embêterait notre fonction displaySection)
searchInput.addEventListener("change", ()=>{
    window.location.hash = `#search-${encodeURIComponent(searchInput.value)}`;
});

},{}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequire12af")

//# sourceMappingURL=index.975ef6c8.js.map
