const getBoxoffice = (dt,tbDiv,tp) => {
    let apikey = "f5eef3421c602c6cb7ea224104795888";
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt+tp}`;
    let boxList;
    let txt = "<table><tr><th>순위</th><th>영화명</th><th>개봉일</th><th>매출액</th><th>관객수</th></tr>"
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            boxList = data.boxOfficeResult.dailyBoxOfficeList;
            // for (let i = 0; i < 10; i++) {
            //     console.log(boxList[i].movieNm);
            //     txt = txt + `<div class="mdiv" id="md${i}"><label for="m${i}">${i + 1}위</label><span class="movie" id="m${i}">${boxList[i].movieNm}</span></div>`;

            // }
            // document.querySelector("#sec3").innerHTML = txt;

            // for (let movie of boxList) {
            //    txt += `<tr><td>${movie.rank}</td><td>${movie.movieNm}</td><td>${movie.openDt}</td><td>${movie.salesAmt}</td><td>${movie.audiCnt}</td></tr>`;
            // } 

            // boxList.map(movie=>{
            //     // console.log(movie.rank,movie.movieNm,movie.openDt,movie.salesAmt,movie.audiCnt)
            //     let sale = parseInt(movie.salesAmt).toLocaleString("ko-KR");
            //     let audi = parseInt(movie.audiCnt).toLocaleString("ko-KR");
            //     txt = txt + `<tr>`;
            //     txt = txt + `<td class="sp1">${movie.rank}</td>`;
            //     txt = txt + `<td class="sp2">${movie.movieNm}</td>`;
            //     txt = txt + `<td class="sp1">${movie.openDt}</td>`;
            //     txt = txt + `<td class="sp3">${sale}</td>`;
            //     txt = txt + `<td class="sp3">${audi}</td>`;
            //     txt = txt + `</tr>`;
            // });
            // tbDiv.innerHTML = txt + "</table>";

            tbDiv.innerHTML = txt + boxList.map(movie=>`<tr><td class="sp1">${movie.rank}</td>
            <td class="sp2">${movie.movieNm}</td>
            <td class="sp1">${movie.openDt}</td>
            <td class="sp3">${parseInt(movie.salesAmt).toLocaleString("ko-KR")}</td>
            <td class="sp3">${movie.rankInten}</td>
            </tr>`).join("")+"</table>";
        });
}


document.addEventListener("DOMContentLoaded", () => {
    // const txt = document.querySelector("#dt");
    const tbDiv = document.querySelector("#tbDiv");
    const bt = document.querySelector("#bt");
    let dt ="";
    bt.addEventListener("click",(e)=>{
        e.preventDefault();
        dt = inform.dt.value.replaceAll("-", "");
        let tp = inform.gubun.value;
        if(dt==""){
            alert("날짜를 선택해주세요");
            return;
        }
        getBoxoffice(dt,tbDiv,tp);
    })

})