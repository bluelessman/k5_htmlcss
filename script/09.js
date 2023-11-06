document.addEventListener("DOMContentLoaded", () => {
    const txt = document.getElementById('txt');
    const Img = document.querySelector('#com');
    const bt = document.querySelector('#bt');
    const n = Math.floor(Math.random() * 100)+1;
    txt.addEventListener('change', (e)=>{
        console.log(txt.getAttribute("number"));
    })
        // bt.addEventListener("click", () => {
        //     const me = parseInt(bt.getAttribute("id").slice(-1));
        //     handleBtClick(comImg,meImg,me,msg);
        // });

})