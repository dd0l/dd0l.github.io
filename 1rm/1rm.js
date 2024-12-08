const coefficient = {
    squat : [0, 1, 1.0475, 1.13, 1.1575, 1.2, 1.242, 1.284, 1.326, 1.368, 1.41],
    benchpress: [0, 1, 1.035, 1.08, 1.115, 1.15, 1.18, 1.22, 1.255, 1.29, 1.325],
    deadlift: [0, 1, 1.065, 1.13, 1.147, 1.164, 1.181, 1.198, 1.22, 1.232, 1.24]
}
result.addEventListener("click",function(e){

    const resWrap = document.querySelector('#resWrap')
    const resWrapTbody = document.querySelector('#resWrap tbody')
    
    if(sport.value == "" || sport.value == null) {
        alert("종목을 선택하세요.");
        return;
    }
    if(count.value == "" || count.value== null) {
        alert("횟수를 선택하세요.");
        return;
    }
    if(weight.value == "" || weight.value== null) {
        alert("무게를 입력하세요.");
        return;
    }
    if(weight.value < 0){
        alert("무게는 0보다 작을 수 없습니다.")
    }
    resWrap.classList.add('on');
    resWrapTbody.innerHTML = resStr();
    
})
function resStr()
{
    let table="";
    var list = calculate(sport.value,count.value ,weight.value );
    for(let i=1; i < 11; i++){
        console.log(i);
        table += resultTable(i,list[i]);
    }
    return table;
}

function resultTable(num,res){
    return `<tr><td>${num}RM</td> <td>${res}</td></tr>`;
}

function calculate(sportName, cnt, weights){
    var rm1 = weights*((coefficient[sportName])[cnt]);
    var data = [];
    for(let i=1; i < 11 ; i++){
        data[i] = (rm1/coefficient[sportName][i]).toFixed(2);
    }
    return data;
    
}
