const handleSelChange = (s1, s2, u1, u2) => {
    u1.value = s1.value;
    if (s1.value === '℃') {
        s2.value = "℉";
        u2.innerHTML = '℉';

    } else {
        s2.value = "℃";
        u2.innerHTML = '℃';
    }
}

const temperatureChange = (t) => {
    if (t === null) {
    } else if (sel1.value === '℃') {
        txt2.value = t * 9 / 5 + 32;
    } else {
        txt2.value = ((t - 32) * 5 / 9).toFixed(4);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");
    const unit1 = document.querySelector("#unit1");
    const unit2 = document.querySelector("#unit2");
    let temperature = null;
    sel1.addEventListener("change", (e) => {
        unit1.innerHTML = e.target.value;
        handleSelChange(sel1, sel2, unit1, unit2);
        temperatureChange(temperature);
    });
    sel2.addEventListener("change", (e) => {
        unit2.innerHTML = e.target.value
        handleSelChange(sel2, sel1, unit2, unit1);
        temperatureChange(temperature);
    });

    txt1.addEventListener("change", (e) => {
        temperature = parseInt(e.target.value);
        temperatureChange(temperature);
    });
});