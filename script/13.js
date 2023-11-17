
let n = 0;
document.addEventListener("DOMContentLoaded",()=>{
    // const sps = document.querySelectorAll(".sp");
    const sp0 = document.querySelector("#sp0");
    const sp1 = document.querySelector("#sp1");
    const sp2 = document.querySelector("#sp2");
    sp0.innerHTML=n;
    sp1.addEventListener("click", ()=>{
        console.log(sp1.innerHTML);
        n = n+1;
        sp0.innerHTML=n;
    });
    sp2.addEventListener("click", ()=>{
        console.log(sp2.innerHTML);
        n = n-1;
        sp0.innerHTML=n;
    });
});