(function () {
    let oNavUl = document.querySelector('nav');
    let oNavs = document.querySelectorAll('h1,h2,h3');

    let aNavs = [], sNavs = '', aText = '', showText = '',nodeName;

    for (let i = 0, len = oNavs.length; i < len; i++) {

        // 保留字母数字下划线、中文、空格，然后再将空格替换成-
        aText = oNavs[i].textContent.replace(/[^ \w\u4e00-\u9fa5]/g, '').replace(/ /g, '-').toLowerCase();
        showText = htmlencode(oNavs[i].innerText);
        nodeName = oNavs[i].nodeName.toLowerCase();

        aNavs.push('<div class="' + nodeName + '"><a href="#' + aText + '">' + showText + '</a></div>');
    }

    sNavs = aNavs.join('');
    oNavUl.innerHTML = sNavs;

    function htmlencode(s) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(s));
        return div.innerHTML;
    }
})();