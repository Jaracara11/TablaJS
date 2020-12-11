let promotores = [{
        'nombre': 'CINDY MARIA CURY TERRERO',
        'registro': '​SIVPFI-036'
    },
    {
        'nombre': '​EMMANUEL RAFAEL MARTÍNEZ SANTO',
        'registro': '​SIVPFI-037'
    },
    {
        'nombre': '​FERNANDO ARTURO RAMÍREZ BÁEZ',
        'registro': '​SIVPFI-040'
    },
    {
        'nombre': '​JEAN PAÚL SURIEL TAVAREZ',
        'registro': '​SIVPFI-017'
    },
    {
        'nombre': '​LISA Y. CANDELARIO DE RODRÍGUEZ',
        'registro': '​​SIVPFI-043'
    },
    {
        'nombre': '​LUIS JOSÉ RIVERA PÉREZ',
        'registro': '​SIVPFI-039'
    },
    {
        'nombre': 'NATHALIE CRISTINA PAULINO',
        'registro': '​​SIVPFI-004'
    },
    {
        'nombre': '​VANESSA CHANLATTE SABALA',
        'registro': 'SIVPFI-005'
    },
    {
        'nombre': '​​YIBET CAPELLAN HERNÁNDEZ',
        'registro': '​SIVPFI-006'
    }
]

function CrearTabla(data) {
    let table = document.getElementById('tablestyle')
    let row

    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            row = `<tr>
            <th class="row2">${data[i].nombre}</th>
            <td class="row2">${data[i].registro}</td>
        </tr> `
            table.innerHTML += row
        } else {
            row = `<tr>
            <th class="row1">${data[i].nombre}</th>
            <td class="row1">${data[i].registro}</td>
        </tr> `

            table.innerHTML += row
        }
    }
}

CrearTabla(promotores)