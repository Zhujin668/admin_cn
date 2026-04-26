const loaded = $('#handyUiLoaded')
if (!(loaded && loaded.length > 0)) {
    const path = location.search.includes(`env=dev`) ? `./resources/handy-ui` : `https://admin-cn.pages.dev`
    $('head')
        .append(`<link type="text/css" rel="stylesheet" href="${path}/css/iconfont.css" id="handyUiLoaded">`)
        .append(`<link type="text/css" rel="stylesheet" href="${path}/css/handy-ui.css">`)
        .append(`<link type="text/css" rel="stylesheet" href="${path}/css/portal.css">`)

    $.getScript(`${path}/scripts/common.js`, () => {
        $.getScript(`${path}/scripts/portal.js`)
    })
}

