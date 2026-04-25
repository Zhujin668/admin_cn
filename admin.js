const loaded = $('#handyUiLoaded')
if (!(loaded && loaded.length > 0)) {
    $('head')
        .append('<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Zhujin668/admin_cn@main/css/iconfont.css" id="handyUiLoaded">')
        .append('<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Zhujin668/admin_cn@main/css/handy-ui.css">')
        .append('<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Zhujin668/admin_cn@main/css/portal.css">')

    $.getScript('https://cdn.jsdelivr.net/gh/Zhujin668/admin_cn@main/scripts/common.js', () => {
        $.getScript('https://cdn.jsdelivr.net/gh/Zhujin668/admin_cn@main/scripts/portal.js')
    })
}

