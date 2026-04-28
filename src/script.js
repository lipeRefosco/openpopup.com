const params = new URLSearchParams(window.location.search);

const CONSTS = {
    uri: "uri",
    width: "width",
    height: "height",
}


const DEFAULTS = {
    width: "1200",
    height: "800",
}


/*
* Get all params form URI
*/ 
function getParams(params) {
    const uri = params.get(CONSTS.uri);

    const settings = {
        width: params.get(CONSTS.width) ?? DEFAULTS.width,
        height: params.get(CONSTS.height) ?? DEFAULTS.height
    }

    return {uri, settings};
}


/*
* Add information on page
*/ 
function addInPage(uri, settings) { 
    $uri = document.getElementById("uri")
    $width = document.getElementById("width")
    $height = document.getElementById("height")

    $uri.value = uri
    $width.value = settings.width
    $height.value = settings.height
}

/*
* Transform settings to string to open the new popup
*/ 
function settingsToString(objSettings) {
    return `width=${objSettings.width},height=${objSettings.height}`;
}

// Get Params from URI
const {uri, settings} = getParams(params);
const settingsAsString = settingsToString(settings);

// Render the the page
addInPage(uri, settings);

if(!params.get("open")) {
} else {
    // open the popup
    window.open(
        `https://${uri}`,
        'popupWindow',
        settingsAsString
    );
}