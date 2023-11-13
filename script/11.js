// let s = 'Hello Javascript!!';
// let n = 2234;
// let result = '';
// console.log('문자열 = ',s);
// console.log('문자열길이 = ',s.length);
// console.log('첫번째문자 = ',s[0]);
// console.log('5문자 추출 = ',s.substring(0,5));

// for(let c of s){
//     if(c === c.toLowerCase()){
//         result += c.toUpperCase();
//     }else{
//         result += c.toLowerCase();
//     }
// }
// console.log("대소문자 변환 = ",result);

// console.log('숫자확인 = ',isNaN(s));
// console.log('숫자확인 = ',isNaN(n));
// console.log("대문자 변환 = ",s.toUpperCase());
// console.log("소문자 변환 = ",s.toLowerCase());
// console.log('마지막문자 추출 = ',s.slice(-1));

document.addEventListener("DOMContentLoaded", ()=>{
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");
    let str = "";

    txt1.addEventListener("change",(e)=>{
        str = e.target.value;
    })
    bt1.addEventListener("click",(e)=>{
        e.preventDefault();
        isF = true;
        for(let i=0 ;i<=parseInt(str.length/2);i++){
            if(str[i]!=str[str.length-1-i]){
                txt2.value = 'false';
                isF = false;
                break
            }
        }
        if(isF){
            txt2.value = 'true';
        }
    })
    bt2.addEventListener("click",(e)=>{
        e.preventDefault();
        result = 0;
        for(let s of str){
            if(!isNaN(s)){
                result += parseInt(s);
            }
        }
        txt2.value = result;
    })
})