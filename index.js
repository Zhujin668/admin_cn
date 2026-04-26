const loaded = $('#handyUiLoaded')
if (!(loaded && loaded.length > 0)) {
    let path, hostname = location.hostname
    if (hostname.includes('127.0.0.1') || hostname.includes('localhost')) {
        console.log('go local')
        path = `./resources/handy-ui`
    } else {
        path = `https://admin-cn.pages.dev`
    }
    //const path = location.hash.includes(`env=dev`) ? `./resources/handy-ui` : `https://admin-cn.pages.dev`
    $('head')
        .append(`<link type="text/css" rel="stylesheet" href="${path}/css/iconfont.css" id="handyUiLoaded">`)
        .append(`<link type="text/css" rel="stylesheet" href="${path}/css/handy-ui.css">`)
    $.getScript(`${path}/scripts/common.js`)
}

