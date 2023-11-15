document.addEventListener("DOMContentLoaded", ()=>{
    const bt11 = document.querySelectorAll(".bt11");
    const bt12 = document.querySelectorAll(".bt12");
    const bt13 = document.querySelectorAll(".bt13");
    const bt14 = document.querySelector(".bt14");
    // let arr = new Array();
    let arr = [];
    //오브젝트 사용
    const emoji = {'사과':'🍎','바나나' : '🍌','오렌지' :  '🍊','수박' : '🍉','당근':'🥕','오이':'🥒',아보카도:'🥑',브로콜리:'🥦'};
    for(let bt of bt11){
        bt.addEventListener("click",(e)=>{
            e.preventDefault();

            //switch문 사용
            // switch(bt.innerHTML){
            //     //이모지 검색 : window+.(win10)
            //     case '사과' : emoji = '🍎'; break;
            //     case '바나나' : emoji = '🍌'; break;
            //     case '오렌지' : emoji = '🍊'; break;
            //     case '수박' : emoji = '🍉'; break;
            // }
            // arr.push(emoji);

            arr.push(emoji[bt.innerHTML]);
            console.log(arr);
            txt1.value = arr.join(' ');
            
        });
    }

    for(let bt of bt12){
        bt.addEventListener("click",(e)=>{
            e.preventDefault();

            //filter 함수 사용
            // arr = arr.filter((value)=>{
            //     let key = bt.innerHTML.slice(0,-2);
            //     return item != emoji[key];
            // });

            //filter 함수 축약(body에 return 부분만 있으면 가능)
            arr = arr.filter(value=>value!=emoji[bt.innerHTML.slice(0,-2)]);
            txt1.value = arr.join(' ');
        });
    }
    for(let bt of bt13){
        bt.addEventListener("click",(e)=>{
            e.preventDefault();
            
            const key = bt.innerHTML.split('→');
            // arr = arr.map((value)=>{
            //     if(value==emoji[translate[0]]){
            //         value = emoji[translate[1]];
            //         console.log(value);
            //     }
            //     return value;
            // })

            //map 축약 - if문을 리턴에 쓸 수 없기 때문에 삼항연산자를 애용
            arr = arr.map(value=>value==emoji[key[0]]?emoji[key[1]]:value);
            txt1.value = arr.join(' ');
        });
    }
    bt14.addEventListener("click",()=>{
        arr = [];
    });

    
});
