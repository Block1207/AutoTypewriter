window.onload = () => {
    var fuck = false;
    let onSwitch = document.getElementById('onSwitch')
    onSwitch.addEventListener("change", (e) => {
        browser.storage.sync.set({
            typer: e.target.checked
        })
        browser.tabs.query({ active: true, currentWindow: true , url: "*://*.typewriter.at/*"}, function (tabs) {
            browser.tabs.reload(tabs[0].id);
        });
    })
    browser.storage.sync.get(["typer"], function (result) {
        onSwitch.checked = result.typer;
    })

    let errorSlider = document.getElementById("errorRange");
    let errorValue = document.getElementById("errorValue");

    browser.storage.sync.get(["errorSlide"], function (result) {
        errorSlider.value = result.errorSlide;
        errorValue.innerHTML = "Maximal Errors : " + result.errorSlide;
    })
    errorSlider.addEventListener("change", (e) => {
        errorValue.innerHTML = "Maximal Errors : " + errorSlider.value;
        browser.storage.sync.set({
            errorSlide: e.target.value
        });
        browser.tabs.query({ active: true, currentWindow: true , url: "*://*.typewriter.at/*"}, function (tabs) {
            browser.tabs.reload(tabs[0].id);
        });
    })

    var bufferSlider = document.getElementById('bufferRange');
    document.getElementById('bufferValue').innerHTML = "Coming Soon ! I Speed ";
    bufferSlider.addEventListener("change", (e) => {
        browser.storage.sync.set({
            bufferValue: e.target.value
        });
        browser.tabs.query({ active: true, currentWindow: true , url: "*://*.typewriter.at/*"}, function (tabs) {
            browser.tabs.reload(tabs[0].id);
        });
    })
    browser.storage.sync.get(["bufferValue"], function (result) {
        bufferSlider.value = result.bufferValue;
    })

    let legitMode = document.getElementById('legitSwitch')
    legitMode.addEventListener("change", (e) => {
        browser.storage.sync.set({
            legit: e.target.checked
        })
        browser.tabs.query({ active: true, currentWindow: true , url: "*://*.typewriter.at/*"}, function (tabs) {
            browser.tabs.reload(tabs[0].id);
        });
    })
    browser.storage.sync.get(["legit"], function (result) {
        legitMode.checked = result.legit;
    })

    let fuckEm = document.getElementById('fuckEm')
    fuckEm.addEventListener("change", (e) => {
        browser.storage.sync.set({
            fucker: e.target.checked
        })
        browser.tabs.query({ active: true, currentWindow: true , url: "*://*.typewriter.at/*"}, function (tabs) {
            browser.tabs.reload(tabs[0].id);
        });
    })
    browser.storage.sync.get(["fucker"], function (result) {
        fuckEm.checked = result.fucker;
    })

}