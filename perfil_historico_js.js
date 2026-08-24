const params = new URLSearchParams(window.location.search);

const nombre = params.get("user");
const partidos = parseInt(params.get("pj")) || 0;
const goles = parseInt(params.get("g")) || 0;
const asistencias = parseInt(params.get("a")) || 0;
const mvp = parseInt(params.get("mvp")) || 0;
const titulo = params.get("t");

const posicion = params.get("pos") || "No especificada";
const nacionalidad = params.get("nac") || "No especificada";
const edad = params.get("edad") || "N/A";

if (nombre) {
    document.title = `Ficha de ${nombre} - Duraman FC`;
    document.getElementById("perf-nombre").innerText = nombre;
    document.getElementById("perf-titulo").innerText = (titulo && titulo !== "-") ? titulo : "Miembro de Duraman FC";
    
    document.getElementById("perf-posicion").innerText = posicion;
    document.getElementById("perf-nacionalidad").innerText = nacionalidad;
    document.getElementById("perf-edad").innerText = `${edad} años`;

    document.getElementById("perf-partidos").innerText = partidos;
    document.getElementById("perf-goles").innerText = goles;
    document.getElementById("perf-asistencias").innerText = asistencias;
    document.getElementById("perf-mvp").innerText = mvp;

    const gp = partidos > 0 ? (goles / partidos).toFixed(2) : "0.00";
    const ap = partidos > 0 ? (asistencias / partidos).toFixed(2) : "0.00";
    const gMasa = goles + asistencias;
    const puntos = (goles * 3) + (asistencias * 2);

    document.getElementById("perf-gp").innerText = gp;
    document.getElementById("perf-ap").innerText = ap;
    document.getElementById("perf-gmasa").innerText = gMasa;
    document.getElementById("perf-puntos").innerText = `${puntos} Pts`;
} else {
    document.getElementById("perf-nombre").innerText = "Jugador no encontrado";
}