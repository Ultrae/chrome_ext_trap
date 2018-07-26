/**
 * store the new color
 * @param test
 */
function changeColor(test) {
    newColor = test;
    lastColor = document.body.style.backgroundColor;
    chrome.storage.local.set({
        colors: {newColor, lastColor}
    }, function () {
        chrome.tabs.executeScript({
            file: "page.js"
        });
    });
}

/**
 * Store mode on/off
 * @param mode
 * @param txt
 */
function modeSpecial(mode) {
    let txt = document.getElementById("special").value;
    chrome.storage.local.set({
        params: {mode, txt}
    }, function () {
        chrome.tabs.executeScript({
            file: "page.js"
        });
    });
}


/**
 * Event handlers
 */
document.getElementById('blue').addEventListener('click', function () {
    changeColor('blue')
});
document.getElementById('red').addEventListener('click', function () {
    changeColor('red')
});
document.getElementById('pink').addEventListener('click', function () {
    changeColor('pink')
});
document.getElementById('white').addEventListener('click', function () {
    changeColor('white')
});
document.getElementById('black').addEventListener('click', function () {
    changeColor('black')
});
document.getElementById('origin').addEventListener('click', function () {
    changeColor('origin')
});
document.getElementById('special_on').addEventListener('click', function () {
    modeSpecial('special')
});
document.getElementById('special_off').addEventListener('click', function () {
    modeSpecial('none')
});