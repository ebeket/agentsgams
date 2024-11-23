'use strict'; let hasInitialised = false; let runtime = null; function HandleInitRuntimeMessage(e) { const data = e.data; if (data && data["type"] === "init-runtime") { InitRuntime(data); self.removeEventListener("message", HandleInitRuntimeMessage) } } self.addEventListener("message", HandleInitRuntimeMessage); self.c3_import = url => import(url); function IsAbsoluteURL(url) { return /^(?:[a-z\-]+:)?\/\//.test(url) || url.substr(0, 5) === "data:" || url.substr(0, 5) === "blob:" } function IsRelativeURL(url) { return !IsAbsoluteURL(url) }
async function LoadScripts(scriptsArr) {
    if (scriptsArr.length === 1) { const url = scriptsArr[0]; await import(((IsRelativeURL(url) ? "./" : "") + url)) } else {
        const scriptStr = scriptsArr.map(url => `import "${IsRelativeURL(url) ? "./" : ""}${url}";`).join("\n"); const blobUrl = URL.createObjectURL(new Blob([scriptStr], { type: "application/javascript" })); try { await import(blobUrl) } catch (err) {
            console.warn("[Construct] Unable to import script from blob: URL. Falling back to loading scripts sequentially, which could significantly increase loading time. Make sure blob: URLs are allowed for best performance.",
                err); for (const url of scriptsArr) await import(((IsRelativeURL(url) ? "./" : "") + url))
        }
    }
}
async function InitRuntime(data) {
    if (hasInitialised) throw new Error("already initialised"); hasInitialised = true; const messagePort = data["messagePort"]; const exportType = data["exportType"]; self.devicePixelRatio = data["devicePixelRatio"]; const runOnStartupFunctions = []; self.runOnStartup = function runOnStartup(f) { if (typeof f !== "function") throw new Error("runOnStartup called without a function"); runOnStartupFunctions.push(f) }; const runtimeScriptList = data["runtimeScriptList"].map(url => (new URL(url, location.href)).toString());
    try { await LoadScripts([...runtimeScriptList]) } catch (err) { console.error("[C3 runtime] Failed to load all engine scripts in worker: ", err); return } const projectMainScriptPath = data["projectMainScriptPath"]; const scriptsInEventsPath = data["scriptsInEventsPath"]; const projectMainScriptPathLoadURL = (new URL(projectMainScriptPath, location.href)).toString(); const scriptsInEventsPathLoadURL = (new URL(scriptsInEventsPath, location.href)).toString(); if (projectMainScriptPath) try {
        await LoadScripts([projectMainScriptPathLoadURL]);
        if (exportType === "preview" && !globalThis.C3_ProjectMainScriptOK) throw new Error("main script did not run to completion");
    } catch (err) {
        console.error("Error loading project main script: ", err); const msg = `Failed to load the project main script (${projectMainScriptPath}). Check all your JavaScript code has valid syntax, all imports are written correctly, and that an exception was not thrown running the script. Press F12 and check the console for error details.`; messagePort.postMessage({
            "type": "alert-error",
            "message": msg
        })
    } if (scriptsInEventsPath) try { await LoadScripts([scriptsInEventsPathLoadURL]); if (exportType === "preview" && !globalThis.C3.ScriptsInEvents) throw new Error("scripts in events did not run to completion"); } catch (err) {
        console.error("Error loading scripts in events: ", err); const msg = `Failed to load scripts in events. Check all your JavaScript code has valid syntax, all imports are written correctly, and that an exception was not thrown running the 'Imports for events' script. Press F12 and check the console for error details.`;
        messagePort.postMessage({ "type": "alert-error", "message": msg })
    } data["runOnStartupFunctions"] = runOnStartupFunctions; messagePort.postMessage({ "type": "creating-runtime" }); runtime = self["C3_CreateRuntime"](data); await self["C3_InitRuntime"](runtime, data)
};