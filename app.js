console.log("TYPEHACKERWORKING BITTTTCHHH")
var toggled;
var errorSlide;
var bufferValue;
chrome.storage.sync.get(["typer", "errorSlide", "bufferValue", "fucker", "legit"], function (result) {
    toggled = result.typer;
    fucker = result.fucker;
    legit = result.legit;
    errorSlide = result.errorSlide;
    bufferValue = result.bufferValue;
    console.log(errorSlide, bufferValue, fucker, legit)
    var letter = document.getElementById('actualLetter').innerHTML;
    var input = document.getElementById('input_area');
    var errorCount = 0;
    var errorLimit = errorSlide;
    var typeLimit = 0;
    console.log(letter);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }


    function start() {
        console.log("You have a maximum of " + errorLimit + " botmade errors !")
        console.log("You have " + errorCount + " bot made error('s)");
        var fail = getRandomInt(1, 20); console.log(fail);
        if (typeLimit > 5) {
            if (errorCount < errorLimit) {
                if (fail == 5) {
                    input.dispatchEvent(new KeyboardEvent('keypress', { 'key': "´" }));
                    errorCount = errorCount + 1; console.log("Added 1 error");
                }
            }
        }
        typer();
    }

    function typer() {
        var timer = getRandomInt(150, 250)

        var letter = document.getElementById('actualLetter').innerHTML;
        if (letter == "&nbsp;") {
            console.log("---SPACE---")
            input.dispatchEvent(new KeyboardEvent('keypress', { 'key': letter }));
            typeLimit = typeLimit + 1;
        }

        setTimeout(function () {
            console.log(timer)
            var letter = document.getElementById('actualLetter').innerHTML;
            console.log('typing: ' + letter);
            input.dispatchEvent(new KeyboardEvent('keypress', { 'key': letter }));
            start();
        }, timer);
        console.log('---')
    };

    if (toggled) {
        document.dispatchEvent(new KeyboardEvent('keypress', { 'key': "&nbsp;" }))
        start();
    }

    if (fucker) {
        console.log("FUCK Em")

        document.dispatchEvent(new KeyboardEvent('keypress', { 'key': '&nbsp;' }))

        function repeat() { type() }

        function type() {
            setTimeout(function () {
                var input = document.getElementById('input_area');
                var letter = document.getElementById('actualLetter').innerHTML; console.log(letter);
                input.dispatchEvent(new KeyboardEvent('keypress', { 'key': letter }));
                repeat();
            }, 0)
        }

        type();
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
                console.log("wrong!!");
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
                console.log("wrong!!");
                e.cancelable = true;
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
            }

            // german - english layout
            if ((elem.innerHTML.toLowerCase() != "y" && e.code == "KeyZ") || (elem.innerHTML.toLowerCase() != "z" && e.code == "KeyY")) {
                console.log("wrong!!");
                e.cancelable = true;
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
            }

            //shift
            if (e.shiftKey) {
                if (isLetter(elem.innerHTML) && isLowerCase(elem.innerHTML)) {
                    console.log("wrong!!");
                    e.cancelable = true;
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    e.preventDefault();
                } else {
                    if ((elem.innerHTML != "(" && e.code == "Digit8") || (elem.innerHTML != ")" && e.code == "Digit9")) {
                        console.log("wrong!!");
                        e.cancelable = true;
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        e.preventDefault();
                    }
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


})