document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector("#d2>button");
    const bks = document.querySelectorAll('.bk');
    const msg = document.querySelector('#sec3>h1');
    let boom = [];
    let isEnd = true;
    let hartCount = 0;
    let boomnumber = 0;
    bt.addEventListener("click", (e) => {
        e.preventDefault();
        if (isEnd) {
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
            isEnd = false;
        }
        console.log(boomnumber+1);
        msg.innerHTML = '폭탄을 피해보세요';
    });

    for (let bk of bks) {
        bk.addEventListener("click", (e) => {
            e.preventDefault();
            if(!isEnd && !isNaN(bk.innerHTML)){
            if (boom[parseInt(bk.innerHTML) - 1] == 1) {
                bk.innerHTML = '<img src="./images/05_hart/boom.png">';
                msg.innerHTML = '실패...';
                isEnd = true;
            } else {
                bk.innerHTML = '<img src="./images/05_hart/hart.png">';
                hartCount++;
                if (hartCount == 8) {
                    bks[boomnumber].innerHTML = '<img src="./images/05_hart/hart.png">';
                    msg.innerHTML = '성공!';
                    isEnd = true;
                }
            }
        }
        })
    }
});

