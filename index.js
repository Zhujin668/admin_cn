const loaded = $('#handyUiLoaded')
if (!(loaded && loaded.length > 0)) {
    $('head')
        .append('<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Zhujin668/admin_cn@main/css/iconfont.css" id="handyUiLoaded">')
        .append('<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Zhujin668/admin_cn@main/css/handy-ui.css">')
    $.getScript('https://cdn.jsdelivr.net/gh/Zhujin668/admin_cn@main/scripts/common.js')
}

console.log(`another test`)