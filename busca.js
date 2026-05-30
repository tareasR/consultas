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
            console.log(data)
            pintarDatos(data)
        })
}

function pintarDatos (params) {
    const encabezado = `
        <thead class="table-dark"> 
        <tr>
            <th>Usuario</th>
            <th>Contribuciones</th>
            <th>Mensajes</th>
        </tr>
        </thead>
        `
    let mensajes = ""
    params.mensajes.forEach(m => {
        mensajes += `<span class="badge bg-primary">${m}</span>`
    });
    let cuerpo = `
        <tbody>
        <tr>
            <td>${params.query}</td>
            <td class="fw-bold">${params.coincidencias}</td>
            <td>
            <div class="d-flex flex-wrap gap-1">
                ${mensajes}
            </div>
            </td>
        </tr>
        </tbody>
    `
    document.getElementById("tabla").innerHTML = encabezado+cuerpo
}