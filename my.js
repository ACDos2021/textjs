function textGS(){

    const url = "https://script.google.com/macros/s/AKfycbxUMfidmDq50zRYHweiEHNnbEzPg_goPDv-yyO3Hh4gckA2WLbR/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}

document.getElementById("btn").addEventListener("click",textGS);

function addGS(){

    const url = "https://script.google.com/macros/s/AKfycbxUMfidmDq50zRYHweiEHNnbEzPg_goPDv-yyO3Hh4gckA2WLbR/exec"

    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer',
        body: JSON.stringify({name:"Joe"})
    });


}

document.getElementById("btn2").addEventListener("click",addGS);
