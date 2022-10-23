window.onload = () => {
    var fuck = false;
    let onSwitch = document.getElementById('onSwitch')
    onSwitch.addEventListener("change", (e) => {
        chrome.storage.sync.set({
            typer: e.target.checked
        })
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
    })
    chrome.storage.sync.get(["typer"], function (result) {
        onSwitch.checked = result.typer;
    })

    let errorSlider = document.getElementById("errorRange");
    let errorValue = document.getElementById("errorValue");

    chrome.storage.sync.get(["errorSlide"], function (result) {
        errorSlider.value = result.errorSlide;
        errorValue.innerHTML = "Maximal Errors : " + result.errorSlide;
    })
    errorSlider.addEventListener("change", (e) => {
        errorValue.innerHTML = "Maximal Errors : " + errorSlider.value;
        chrome.storage.sync.set({
            errorSlide: e.target.value
        });
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
    })

    //buffer slider
    var bufferSlider = document.getElementById('bufferRange');
    var buferValue = document.getElementById("bufferValue");
    buferValue.innerHTML = "Speed: ";
    bufferSlider.addEventListener("change", (e) => {
        bufferValue.innerHTML = "Speed: " + e.target.value;
        chrome.storage.sync.set({
            bufferValue: e.target.value
        });
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
    })
    chrome.storage.sync.get(["bufferValue"], function (result) {
        bufferSlider.value = result.bufferValue;
        bufferValue.innerHTML = "Speed: " + result.bufferValue;
    })

    let legitMode = document.getElementById('legitSwitch')
    legitMode.addEventListener("change", (e) => {
        chrome.storage.sync.set({
            legit: e.target.checked
        })
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
    })
    chrome.storage.sync.get(["legit"], function (result) {
        legitMode.checked = result.legit;
    })

    let outputSwitch = document.getElementById('outputSwitch')
    outputSwitch.addEventListener("change", (e) => {
        chrome.storage.sync.set({
            outputSwitch: e.target.checked
        })
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
    })
    chrome.storage.sync.get(["outputSwitch"], function (result) {
        outputSwitch.checked = result.outputSwitch;
    })


    let fuckEm = document.getElementById('fuckEm')
    fuckEm.addEventListener("change", (e) => {
        chrome.storage.sync.set({
            fucker: e.target.checked
        })
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
    })
    chrome.storage.sync.get(["fucker"], function (result) {
        fuckEm.checked = result.fucker;
    })

    var styleBtn = document.getElementById("styleMenuBtn");
    var main = document.getElementById("popUp");
    //var styleMenu = document.getElementById("#ID_FROM_MENU_PAGE");
    styleBtn.addEventListener("click", (e) => {
       main.style.display = "none";
       //styleMenu.style.display = "#BLOCK_OR_SOME_SHIT_LIKE_THAT";
    } );

}