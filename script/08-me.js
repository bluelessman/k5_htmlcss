document.addEventListener("DOMContentLoaded", () => {
    //1.버튼요소와 이미지 요소 가져오기
    const bt = document.querySelector('#msg1>button');
    const picture1 = document.querySelector('#dice1');
    const picture2 = document.querySelector('#dice2');
    //2.버튼 클릭 이벤트 처리
    bt.addEventListener("click", () => {
        //3.랜덤수 생성
        let n1 = Math.random() * 6;
        let n2 = Math.random() * 6;
        n1 = Math.floor(n1) + 1
        n2 = Math.floor(n2) + 1
        //4.랜덤수에 맞는 이미지 출력
        picture1.setAttribute("src",`./images/dice/${n1}.png`)
        picture2.setAttribute("src",`./images/dice/${n2}.png`)
        n1 < n2 ? document.querySelector(`#msg2`).innerHTML = "<h2>승리!</h2>" :document.querySelector(`#msg2`).innerHTML = "<h2>패배!</h2>";

    });


});