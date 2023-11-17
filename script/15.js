document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector("#d2>button");
    const bks = document.querySelectorAll('.bk');
    const msg = document.querySelector('#sec3>h1');
    let boom = [];
    let isEnd = 0;
    let hartCount = 0;
    let boomnumber = 0;
    bt.addEventListener("click", (e) => {
        e.preventDefault();
        if (isEnd == 0) {
            boom.length = 0;
            hartCount = 0;
            boomnumber = Math.floor(Math.random() * 9)
            for (let i = 0; i < 9; i++) {
                if (i == boomnumber) {
                    boom.push(1);
                } else {
                    boom.push(0);
                }
                bks[i].innerHTML = i + 1;
            }
            isEnd = 1;
        }
        console.log(boomnumber+1);
        msg.innerHTML = '폭탄을 피해보세요';
    });

    for (let bk of bks) {
        bk.addEventListener("click", (e) => {
            e.preventDefault();
            if(isEnd==1){
            if (boom[parseInt(bk.innerHTML) - 1] == 1) {
                bk.innerHTML = '<img src="./images/05_hart/boom.png">';
                msg.innerHTML = '실패!';
                isEnd = 0;
            } else {
                bk.innerHTML = '<img src="./images/05_hart/hart.png">';
                hartCount++;
                if (hartCount == 8) {
                    bks[boomnumber].innerHTML = '<img src="./images/05_hart/hart.png">';
                    msg.innerHTML = '성공!';
                    isEnd = 0;
                }
            }
        }
        })
    }
});