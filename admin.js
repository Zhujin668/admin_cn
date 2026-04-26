const loaded = $('#handyUiLoaded')
if (!(loaded && loaded.length > 0)) {
    $('head')
        .append('<link type="text/css" rel="stylesheet" href="https://admin-cn.pages.dev/css/iconfont.css" id="handyUiLoaded">')
        .append('<link type="text/css" rel="stylesheet" href="https://admin-cn.pages.dev/css/handy-ui.css">')
        .append('<link type="text/css" rel="stylesheet" href="https://admin-cn.pages.dev/css/portal.css">')

    $.getScript('https://admin-cn.pages.dev/scripts/common.js', () => {
        $.getScript('https://admin-cn.pages.dev/scripts/portal.js')
    })
}

