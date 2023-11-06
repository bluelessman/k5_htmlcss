const handleBtClick = (comImg,meImg,me,msg) => {
    const com = Math.floor(Math.random() * 6)+1;
    comImg.setAttribute("src",`./images/dice/${com}.png`);
    meImg.setAttribute("src",`./images/dice/${me}.png`);
    if(me>com){
        msg.innerHTML = "승리!";
    }else if(me<com){
        msg.innerHTML = "패배...";
    }else{
        msg.innerHTML = "비겼습니다.";
    }

}


document.addEventListener("DOMContentLoaded", () => {
    const comImg = document.querySelector('#com');
    const meImg = document.querySelector('#me');
    const bts = document.querySelectorAll('#btDiv>button');
    const msg = document.querySelector('#sec3>h1');
    // console.log(comImg);
    // console.log(meImg);
    // console.log(bts);
    // console.log(msg);
    // msg.innerHTML = "<p>안녕하세요.</p>";
    // const bt1 = document.querySelector("#bt1");
    // const bt2 = document.querySelector("#bt2");
    // bt1.addEventListener("click",()=>{
    //     console.log(bt1.getAttribute("id"));
    // })
    // bt2.addEventListener("click",()=>{
    //     msg.innerHTML = bt2.getAttribute("id");
    // })

    //전통적인 for문
    // for(let i=0;i<bts.length;i++){
    //     console.log(bts[i]);
    // }

    //for in 문 : object
    // for(let i in bts){
    //     console.log(bts[i]);
    // }

    //foreach
    // bts.forEach(item=>console.log(item));
    // bts.forEach((item)=>{console.log(item)});
    // bts.forEach((item,idx)=>{
    //     console.log(item,idx);
    // })

    //for of
    // for(let item of bts){
    //     console.log(item);
    // }
    for (let bt of bts) {
        bt.addEventListener("click", () => {
            const me = parseInt(bt.getAttribute("id").slice(-1));
            handleBtClick(comImg,meImg,me,msg);
        });

    }
})
