const jsonData = {
    "periodo": "PRIMER SEMESTRE 2020", "nombre_facultad": "INGENIERIA",
    "nombre_programa": "DOCTORADO EN INGENIERIA Y CIENCIA DE LOS MATERIALES", "jornada": "Diurna",
    "modalidad": "Presencial", "terminados_academicamente": "4"
};

// Llenar los datos de la tabla con la información del JSON
document.getElementById('periodo').innerText = jsonData.periodo;
document.getElementById('nombre_facultad').innerText = jsonData.nombre_facultad;
document.getElementById('nombre_programa').innerText = jsonData.nombre_programa;
document.getElementById('jornada').innerText = jsonData.jornada;
document.getElementById('modalidad').innerText = jsonData.modalidad;

fetch('https://www.datos.gov.co/resource/tqxy-kzb5.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('data').textContent = JSON.stringify(data, null, 2);
    })