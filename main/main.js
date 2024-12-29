
const typingArea = document.querySelector('.typing');
const typingList = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'];
let typingBefore;
let currentIndex = 0;


function typingEffect (){
    const currentText = typingList[currentIndex];
    typingArea.textContent = currentText;

    // before은 js에서 선택안됨.
    // style태그가 계속추가됨...... 개선필요
    typingBefore = document.createElement('style')
    typingBefore.innerHTML = `
    @keyframes typing{
        50% {left:100%}
        100% {left:0%;}
    }
    .main_m_txt .typing::before {content:''; position:absolute; top:0; left:0; margin-left:10px; width:100%; height:100%; border-left:2px solid #fff000; background:#03233e; animation:typing 2s steps(${currentText.length}) infinite;}`
    document.head.appendChild(typingBefore);
    

    // 다음 텍스트로 전환
    currentIndex = (currentIndex + 1) % typingList.length; // 1++되다가 length만큼 다 돌아가면, 다시 처음부터 반복
    // console.log(1%5)  // 1
    // console.log(2%5)  // 2
    // console.log(3%5)  // 3
    // console.log(4%5)  // 4
    // console.log(5%5)  // 5
    if(document.head.tagName == 'style'){
        console.log('hi')
    }


}
// 주기적으로 텍스트 업데이트
setInterval(typingEffect, 2000);
typingEffect();
