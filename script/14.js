document.addEventListener("DOMContentLoaded",()=>{
    const bt = document.querySelector("#d2>button");
    const d1 = document.querySelector("#d1");

    bt.addEventListener("click",(e)=>{
        e.preventDefault();
        let arr = [];
        while(arr.length<7){
            let n = Math.floor(Math.random()*45) + 1;
            if(!arr.includes(n)) arr.push(n);
        }
        let tags;
        tags = arr.map((item,idx) => idx=='6' 
        ? `<span class='sp' id='spp'>+</span><span class='sp' id='sp${Math.floor(parseInt(item)/10)}'>${item}</span>`
        :`<span class='sp' id='sp${Math.floor(parseInt(item)/10)}'>${item}</span>`);
        d1.innerHTML = tags.join('');
    });
});