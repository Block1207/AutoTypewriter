let toggled;
let errorSlide;
let bufferValue;
let outputSwitch;
let fucker;
let legit;
let x;
let adBlock;
let wordCount;
let rInt;
let letter;
let url;
chrome.storage.sync.get(["typer", "errorSlide", "bufferValue", "fucker", "legit", "outputSwitch"], function (result) {
    toggled = result.typer;
    fucker = result.fucker;
    legit = result.legit;
    errorSlide = result.errorSlide;
    bufferValue = result.bufferValue;
    outputSwitch = result.outputSwitch;
    url = location.href;
    adBlock = true;
    wordCount = 0;
    rInt = 0;
    if(outputSwitch){console.log(errorSlide, bufferValue, fucker, legit);};
    try {
        letter = document.getElementById('actualLetter').innerHTML;
    } catch {
        letter = null;
    }
    let input = document.getElementById('input_area');
    let errorCount = 0;
    let errorLimit = errorSlide;
    let typeLimit = 0;
    if(outputSwitch) {console.log("[" + letter + "]");}

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }


    function start() {
        if(outputSwitch) {console.log("You have " + errorCount + "out of " + errorLimit+ " bot made error('s)");}
        let fail = getRandomInt(1, 20); if(outputSwitch){console.log(fail);};
        if (typeLimit > 5) {
            if (errorCount < errorLimit) {
                if (fail == 5) {
                    input.dispatchEvent(new KeyboardEvent('keypress', { 'key': "´" }));
                    errorCount = errorCount + 1; if(outputSwitch){console.log("Added 1 error");};
                }
            }
        }
        typer();
    }

    function typer() {
        if(outputSwitch){console.log("WordCount === " + wordCount);};
        let x = 1000 - bufferValue * 10; if(outputSwitch){console.log("BUFFER BUFFER BUFFER || " + x);};
        if (wordCount % 2) {
            let rInt = getRandomInt(0, 4);
            if (rInt % 2) {
                x = x / 2;
                if(outputSwitch){console.log("SKIP SKIP SKIP !!!");};
            }
        };
        let max = x;
        let min = max - 150;
        let timer = getRandomInt(min, max)

        letter = document.getElementById('actualLetter').innerHTML;
        if (letter == "&nbsp;") {
            if (outputSwitch){console.log("---SPACE---");};
            input.dispatchEvent(new KeyboardEvent('keypress', { 'key': letter }));
            typeLimit = typeLimit + 1;
            wordCount = wordCount + 1;
        }

        setTimeout(function () {
            if(outputSwitch){console.log(timer);};
            letter = document.getElementById('actualLetter').innerHTML;
            if(outputSwitch){console.log('typing: ' + letter);};
            input.dispatchEvent(new KeyboardEvent('keypress', { 'key': letter }));
            start();
        }, timer);
        if(outputSwitch){console.log('---');};
    };

    if (toggled) {
        if(!url.endsWith("runLevel")) {
            if (outputSwitch){console.log("Waiting for timer, to go to the next level");};
            setTimeout(function ()
                if (outputSwitch) {console.log("And go !!!");};
                location.href = "/index.php?r=typewriter/runLevel";
            }, getRandomInt(2,15) * 10)
        }
        if(typer != null) {
            document.dispatchEvent(new KeyboardEvent('keypress', { 'key': "&nbsp;" }))
            start()
        }
    }

    if (fucker) {

        document.dispatchEvent(new KeyboardEvent('keypress', { 'key': '&nbsp;' }))

        function repeat() { type() }

        function type() {
            setTimeout(function () {
                let input = document.getElementById('input_area');
                letter = document.getElementById('actualLetter').innerHTML;
                if(outputSwitch) {console.log(letter);}
                input.dispatchEvent(new KeyboardEvent('keypress', { 'key': letter }));
                repeat();
            }, 5)
        }

        type();
    }
    while(fucker) {
        //setTimeout(function () {
        //       if (outputSwitch) {console.log("FUCK EM !!!");};
        //},150)
    }

    if (legit) {
        let elem = document.getElementById("actualLetter")
        let inputArea = document.getElementById('input_area');
        inputArea.addEventListener("keydown", (e) => {
            elem = document.getElementById("actualLetter")
            //console.log(e.code, elem.textContent)
            if (
                (elem.innerHTML != "&nbsp;" && e.code == "Space")
                || (elem.innerHTML.toLowerCase() != "ö" && e.code == "Semicolon")
                || (elem.innerHTML.toLowerCase() != "ä" && e.code == "Quote")
                || (elem.innerHTML.toLowerCase() != "ü" && e.code == "BracketLeft")
                || (elem.innerHTML != "-" && elem.innerHTML != "ß" && e.code == "Minus")
                || (elem.innerHTML != "+" && e.code == "Plus")
                || (elem.innerHTML != "." && e.code == "Period")
                || (elem.innerHTML != "," && e.code == "Comma")
                || (elem.innerHTML != "1" && e.code == "Digit1" && !e.shiftKey)
                || (elem.innerHTML != "2" && e.code == "Digit2" && !e.shiftKey)
                || (elem.innerHTML != "3" && e.code == "Digit3" && !e.shiftKey)
                || (elem.innerHTML != "4" && e.code == "Digit4" && !e.shiftKey)
                || (elem.innerHTML != "5" && e.code == "Digit5" && !e.shiftKey)
                || (elem.innerHTML != "6" && e.code == "Digit6" && !e.shiftKey)
                || (elem.innerHTML != "7" && e.code == "Digit7" && !e.shiftKey)
                || (elem.innerHTML != "8" && e.code == "Digit8" && !e.shiftKey)
                || (elem.innerHTML != "9" && e.code == "Digit9" && !e.shiftKey)
                || (elem.innerHTML != "0" && e.code == "Digit0" && !e.shiftKey)
            ) {
                if (outputSwitch){console.log("wrong!!");};
                e.cancelable = true;
                e.stopImmediatePropagation()
                e.stopPropagation()
                return e.preventDefault();
            }
            if (e.code != "Key" + elem.innerHTML.toUpperCase()
                && e.code != "KeyY"
                && e.code != "KeyZ"
                && e.code != "ControlLeft"
                && e.code != "ControlRight"
                && e.code != "MetaLeft"
                && e.code != "MetaRight"
                && e.code != "AltLeft"
                && e.code != "AltRight"
                && e.code != "ControlLeft"
                && e.code != "Escape"
                && e.code != "Semicolon"
                && e.code != "Quote"
                && e.code != "BracketLeft"
                && e.code != "Space"
                && e.code != "Minus"
                && e.code != "Plus"
                && e.code != "Period"
                && e.code != "Comma"
                && e.code != "Digit1"
                && e.code != "Digit2"
                && e.code != "Digit3"
                && e.code != "Digit4"
                && e.code != "Digit5"
                && e.code != "Digit6"
                && e.code != "Digit7"
                && e.code != "Digit8"
                && e.code != "Digit9"
                && e.code != "Digit0"
            ) {
                if(outputSwitch){console.log("wrong!!");}
                e.cancelable = true;
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
            }

            // german - english layout
            if ((elem.innerHTML.toLowerCase() != "y" && e.code == "KeyZ") || (elem.innerHTML.toLowerCase() != "z" && e.code == "KeyY")) {
                if(outputSwitch){console.log("wrong!!");};
                e.cancelable = true;
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
            }

            //shift
            if (e.shiftKey) {
                if (isLetter(elem.innerHTML) && isLowerCase(elem.innerHTML)) {
                    if(outputSwitch){console.log("wrong!!");}
                    e.cancelable = true;
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    e.preventDefault();
                } else {
                    if ((elem.innerHTML != "(" && e.code == "Digit8") || (elem.innerHTML != ")" && e.code == "Digit9")) {
                        if(outputSwitch){console.log("wrong!!");}
                        e.cancelable = true;
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    if(elem.innerHTML == "&nbsp;") {
                        if(outputSwitch){console.log("wrong!!");}
                        e.cancelable = true;
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    if(!isLowerCase(elem.innerHTML) && (
                        e.code == "Digit1"
                        || e.code == "Digit2"
                        || e.code == "Digit3"
                        || e.code == "Digit4"
                        || e.code == "Digit5"
                        || e.code == "Digit6"
                        || e.code == "Digit7"
                        || e.code == "Digit8"
                        || e.code == "Digit9"
                        || e.code == "Digit0"
                    )
                    ){
                        if(outputSwitch){console.log("wrong!!");}
                        e.cancelable = true;
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }
            }

            if(!e.shiftKey) {
                if(isLetter(elem.innerHTML) && !isLowerCase(elem.innerHTML)) {
                    if(outputSwitch){console.log("wrong!!");}
                    e.cancelable = true;
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        })

        function isLetter(str) {
            return str.length === 1 && str.match(/[a-z]/i);
        }

        function isLowerCase(str) {
            return str.toLowerCase() == str;
        }
    }

    // if (adBlock) {
    //     function block () {
    //         try {
    //             let gAd1 = document.getElementById("headerAd");
    //             gAd1.style.display = "none";
    //             //TODO checken wie man die Werbung auf dem "Start-Menu" wegbekommt
    //             /*
    //             let gAd2 = document.getElementById("mys-wrapper");
    //             gAd2.style.display = "none";
    //              */
    //         } catch (e) {
    //             if (outputSwitch){console.log(e);};
    //             block();
    //         }
    //     }
    //     block();
    // }


})