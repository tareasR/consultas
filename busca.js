const boton = document.getElementById("boton").addEventListener("click", valida)
const url = 'https://script.google.com/macros/s/AKfycbz_h_cBGTg89kFOCINuXYgqeg0PNLTP9WpBYWVMiQGrCN8J4IgrG2jR_0Lfc9J47APsgA/exec'

function valida() {
    let u = document.getElementById("usuario").value
    let g = document.getElementById("grupo").value
    console.log(url+ `?sheet=${g}&query=${u}`)
    fetch(
        url + `?sheet=${g}&query=${u}`
    )
        .then(r => r.json())
        .then(data => {
            console.log(data);
        });
}
