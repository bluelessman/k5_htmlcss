// function hello(n){
//     alert("Hello!! 버튼"+n);
// }
const hello = (n) => {
    // alert("Hello!! 버튼"+n);
    // document.getElementById('msg').innerHTML = "<h2>Hello!! 버튼"+n+"</h2>";
    // document.querySelector('#msg').innerHTML = "<h2>Hello!! 버튼"+n+"</h2>";
    // if (n < 3) {
    //     document.querySelector('#msg').innerHTML = "<h2>Hello!! 버튼" + n + "</h2>";
    // }
    // else {
    //     document.querySelector('#msg2').innerHTML = "<h2>Hello!! 버튼" + n + "</h2>";

    // }
    let cnt = 0
    n <= 2 ? cnt = 1 : cnt = 2;
    console.log("cnt",cnt);
    document.querySelector(`#msg${cnt}`).innerHTML = "<h2>Hello!! 버튼" + n + "</h2>";
}

document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.createElement("button");
    const bt1Text = document.createTextNode("버튼3을 눌러주세요");
    bt1.appendChild(bt1Text);
    bt1.setAttribute("id", "bt3")
    document.getElementById('btDiv2').append(bt1);
    const bt2 = document.createElement("button");
    const bt2Text = document.createTextNode("버튼4를 눌러주세요");
    bt2.appendChild(bt2Text);
    bt2.setAttribute("id", "bt4")
    document.getElementById('btDiv2').append(bt2);

    document.getElementById('bt3').addEventListener("click", () => { hello(3); })
    document.getElementById('bt4').addEventListener("click", () => { hello(4); })

})

