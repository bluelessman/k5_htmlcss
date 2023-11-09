// const divShow = (d1,d2,isRandom) =>{
//     if(isRandom==0){
//         d1.style.display = "none";
//         d2.style.display = "flex";
//     }else if(isRandom==1){
//         d1.style.display = "flex";
//         d2.style.display = "none";
//     }else{
//         d1.style.display = "none";
//         d2.style.display = "none";
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    const txt = document.getElementById('txt');
    const Img = document.querySelector('#com');
    const bt1 = document.querySelector('#bt1');
    const bt2 = document.querySelector('#bt2');
    const bt3 = document.querySelector('#bt3');
    const btDiv1 = document.getElementById("btDiv1");
    const btDiv2 = document.getElementById("btDiv2");
    const msg = document.querySelector('#sec3>h1');
    bt3.style.display = "none";
    let com = 0;
    let m = 0;
    let count = 0;
    // let isRandom = 1;
    // divShow(btDiv1,btDiv2,isRandom);
    btDiv1.style.display = "flex";
    btDiv2.style.display = "none";

    bt1.addEventListener("click", (e)=>{
        e.preventDefault();
        com = Math.floor(Math.random() * 100)+1;
        console.log(com);
        btDiv1.style.display = "none";
        btDiv2.style.display = "flex";
        msg.innerHTML = "값을 맞춰보세요";
    })

    bt2.addEventListener("click",(e)=>{
        e.preventDefault();
        count++;
        if(m>com){
            Img.setAttribute("src",`./images/04_updown/down.png`);
            msg.innerHTML = "값이 너무 큽니다.";
        }else if(m<com){
            Img.setAttribute("src",`./images/04_updown/up.png`);
            msg.innerHTML = "값이 너무 작습니다.";
        }else{
            if(count<10){
                Img.setAttribute("src",`./images/04_updown/good.png`);
                msg.innerHTML = `대단합니다! 시도 횟수 : ${count}`;
            }else{
                Img.setAttribute("src",`./images/04_updown/ok.png`);
                msg.innerHTML = `정답입니다. 시도 횟수 : ${count}`;
            }

            btDiv1.style.display = "none";
            btDiv2.style.display = "none";
            bt3.style.display = "flex";
        }
    })

    bt3.addEventListener("click", (e)=>{
        e.preventDefault();
        Img.setAttribute("src",`./images/04_updown/what.png`);
        // isRandom = 1;
        count = 0;
        // divShow(btDiv1,btDiv2,isRandom);
        btDiv1.style.display = "flex";
        btDiv2.style.display = "none";
        bt3.style.display = "none";
        msg.innerHTML = "랜덤수를 선택하세요.";
        txt.value = "none";
    })

    txt.addEventListener('change', (e)=>{
        m = parseInt(e.target.value);
    })

        // bt.addEventListener("click", () => {
        //     const me = parseInt(bt.getAttribute("id").slice(-1));
        //     handleBtClick(comImg,meImg,me,msg);
        // });

})