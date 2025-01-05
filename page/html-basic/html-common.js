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
const body = document.querySelector('body')
    body.prepend(header);
    header.innerHTML = headerHtml;



// 공통 lnb 추가
let lnb = document.createElement('nav');
lnb.setAttribute('id','lnb');
let navHtml =`
        <h2>HTML</h2>
        <ul class="lnb-list">
            <li><a href="#">HTML 소개</a></li>
            <li><a href="#">HTML 기초(1)</a></li>
        </ul>
    `;

body.prepend(lnb);
lnb.innerHTML = navHtml;