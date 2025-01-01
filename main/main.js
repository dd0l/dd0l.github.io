
const typingArea = document.querySelector('.typing');
const typingList = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'];
let typingBefore;
let currentIndex = 0;

function typingEffect (){ 
    const currentText = typingList[currentIndex];
    
    typingArea.textContent = currentText;
    typingBefore = document.createElement('span');
    typingBefore.classList.add('typingResult');
    typingArea.appendChild(typingBefore);
    typingBefore.style.animation = `typing 2s steps(${currentText.length}) infinite`;

    // 다음 텍스트로 전환
    currentIndex = (currentIndex + 1) % typingList.length; // 1++되다가 length만큼 다 돌아가면, 다시 처음부터 반복
}
// 주기적으로 텍스트 업데이트
setInterval(typingEffect, 2000);
typingEffect();
