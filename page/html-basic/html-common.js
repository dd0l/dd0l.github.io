const body = document.querySelector('body')
// 공통 lnb 추가
let lnb = document.createElement('nav');
lnb.setAttribute('id','lnb');
let navHtml =`
        <h2>HTML</h2>
        <ul class="lnb-list">
            <li><a href="whats-up-html.html">HTML 이란?</a></li>
            <li><a href="vscode-install.html">Visual Studio 설치방법</a></li>
            <li><a href="vscode-extends.html">Visual Studio 확장프로그램 추천</a></li>
            <li><a href="tag-type.html">Tag - 종류</a></li>
            <li><a href="#">Tag - 블록, 인라인</a></li>
        </ul>
    `;

body.prepend(lnb);
lnb.innerHTML = navHtml;

// 공통 header 추가
let header = document.createElement('header');
header.setAttribute('id','gnb');
let headerHtml =`
        <a href="https://dd0l.github.io" class="logo">인찌의 <br>Hello Wolrd!</a>
        <ul class="gnb-list">
            <li><a href="#" class="on">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
        </ul>
        <!-- serch 추가예정 -->
    `;
    body.prepend(header);
    header.innerHTML = headerHtml;

// 동일한 href에 클래스 on 추가
let url = window.location.pathname
let aHref = document.querySelectorAll('.lnb-list a')
aHref.forEach(a => {
    a.classList.remove('on')
    if(url == `/page/html-basic/${a.getAttribute('href')}`){
        a.classList.add('on')
    }

});