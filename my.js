function textGS(){

    const url = "https://script.google.com/macros/s/AKfycbxUMfidmDq50zRYHweiEHNnbEzPg_goPDv-yyO3Hh4gckA2WLbR/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}

document.getElementById("btn").addEventListener("click",textGS);