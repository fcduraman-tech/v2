const jugadores_2025 = [
    { nombre: "Aslan", partidos: 65, goles: 99, asistencias: 42, mvp: "N/A" },
    { nombre: "Dawins", partidos: 65, goles: 69, asistencias: 52, mvp: "N/A" },
    { nombre: "Wenderly", partidos: 51, goles: 89, asistencias: 26, mvp: "N/A" },
    { nombre: "Eliant", partidos: 30, goles: 18, asistencias: 28, mvp: "N/A" },
    { nombre: "Sebastián", partidos: 58, goles: 37, asistencias: 19, mvp: "N/A" },
    { nombre: "Geraldo", partidos: 20, goles: 4, asistencias: 10, mvp: "N/A" },
    { nombre: "Erick", partidos: 3, goles: 2, asistencias: 0, mvp: "N/A" },
    { nombre: "Joelfry", partidos: 24, goles: 6, asistencias: 9, mvp: "N/A" },
    { nombre: "Jacob", partidos: 4, goles: 2, asistencias: 2, mvp: "N/A" },
    { nombre: "Adonys", partidos: 12, goles: 9, asistencias: 0, mvp: "N/A" },
    { nombre: "Argenis", partidos: 4, goles: 2, asistencias: 4, mvp: "N/A" },
    { nombre: "Josue", partidos: 26, goles: 51, asistencias: 13, mvp: "N/A" },
    { nombre: "Christian", partidos: 34, goles: 1, asistencias: 31, mvp: "N/A" },
    { nombre: "Oscar", partidos: 19, goles: 2, asistencias: 4, mvp: "N/A" },
    { nombre: "Leo", partidos: 34, goles: 1, asistencias: 14, mvp: "N/A" },
    { nombre: "Obed", partidos: 5, goles: 0, asistencias: 5, mvp: "N/A" },
    { nombre: "Miguel", partidos: 43, goles: 19, asistencias: 3, mvp: "N/A" }
];


let maxGoles = 0;
let maxAsistencias = 0;
let maxGMasA = 0;
let maxMvp = 0;

jugadores_2025.forEach(j => {
    j.gp = j.partidos > 0 ? (j.goles / j.partidos).toFixed(2) : "0.00";
    j.ap = j.partidos > 0 ? (j.asistencias / j.partidos).toFixed(2) : "0.00";
    j.gMasA = j.goles + j.asistencias;
    j.puntaje = (j.goles * 3) + (j.asistencias * 2);

    if (j.goles > maxGoles) maxGoles = j.goles;
    if (j.asistencias > maxAsistencias) maxAsistencias = j.asistencias;
    if (j.gMasA > maxGMasA) maxGMasA = j.gMasA;
    if (j.mvp > maxMvp) maxMvp = j.mvp;
});

jugadores_2025.forEach(j => {
    let titulosArray = [];
    
    if (j.goles === maxGoles && maxGoles > 0) titulosArray.push("⚽");
    if (j.asistencias === maxAsistencias && maxAsistencias > 0) titulosArray.push("🦵");
    if (j.gMasA === maxGMasA && maxGMasA > 0) titulosArray.push("⚔️");
    if (j.mvp === maxMvp && maxMvp > 0) titulosArray.push("⭐");

    j.titulo = titulosArray.join(" ");
});

jugadores_2025.sort((a, b) => b.puntaje - a.puntaje);

const cuerpoTabla = document.getElementById("cuerpo_tabla");

jugadores_2025.forEach((j, index) => {
    const fila = document.createElement("tr");
    let claseFila = "";
    if (index === 0) claseFila = "primer_lugar";
    
    fila.innerHTML = `
        <td class="${claseFila}"><strong>${index + 1}</strong></td>
        <td><strong>${j.nombre}</strong></td>
        <td>${j.partidos}</td>
        <td>${j.goles}</td>
        <td>${j.asistencias}</td>
        <td class="calculado">${j.gp}</td>
        <td class="calculado">${j.ap}</td>
        <td class="calculado gol_mas_asistencia">${j.gMasA}</td>
        <td class="destacado">${j.puntaje}</td>
        <td class="emojis" title="Logros de Temporada">${j.titulo || "-"}</td>
        <td>${j.mvp}</td>
    `;
    cuerpoTabla.appendChild(fila);
});