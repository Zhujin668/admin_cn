const loaded = $('#handyUiLoaded')
if (!(loaded && loaded.length > 0)) {
    $('head')
        .append('<link type="text/css" rel="stylesheet" href="./css/iconfont.css" id="handyUiLoaded">')
        .append('<link type="text/css" rel="stylesheet" href="./css/handy-ui.css">')
    $.getScript('./scripts/common.js')
}

