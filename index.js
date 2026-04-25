const loaded = $('#handyUiLoaded')
if (!(loaded && loaded.length > 0)) {
    $('head')
        .append('<link type="text/css" rel="stylesheet" href="resources/handy-ui/css/iconfont.css" id="handyUiLoaded">')
        .append('<link type="text/css" rel="stylesheet" href="resources/handy-ui/css/handy-ui.css">')

    $.getScript('./resources/handy-ui/scripts/common.js')
}

