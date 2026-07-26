const jugadores_2024 = [
    { nombre: "Aslan", partidos: 65, goles: 78, asistencias: 51, mvp: "N/A" },
    { nombre: "Dawins", partidos:65, goles: 92, asistencias: 33, mvp: "N/A" },
    { nombre: "Wenderly", partidos: 40, goles: 51, asistencias: 12, mvp: "N/A" },
    { nombre: "Eliant", partidos: 30, goles: 32, asistencias: 18, mvp: "N/A" },
    { nombre: "Sebastián", partidos: 58, goles: 37, asistencias: 18, mvp: "N/A" },
    { nombre: "Gari", partidos: 30, goles: 7, asistencias: 14, mvp: "N/A" },
    { nombre: "Christian", partidos: 34, goles: 11, asistencias: 37, mvp: "N/A" },
    { nombre: "Leo", partidos: 34, goles: 5, asistencias: 7, mvp: "N/A" },
    { nombre: "Josue", partidos: 15, goles: 20, asistencias: 14, mvp: "N/A" },
    { nombre: "Keurys", partidos: 28, goles: 13, asistencias: 8, mvp: "N/A" },
    { nombre: "Alberto", partidos: 34, goles: 10, asistencias: 5, mvp: "N/A" },
    { nombre: "Miguel", partidos: 43, goles: 9, asistencias: 8, mvp: "N/A" }
];


let maxGoles = 0;
let maxAsistencias = 0;
let maxGMasA = 0;
let maxMvp = 0;

jugadores_2024.forEach(j => {
    j.gp = j.partidos > 0 ? (j.goles / j.partidos).toFixed(2) : "0.00";
    j.ap = j.partidos > 0 ? (j.asistencias / j.partidos).toFixed(2) : "0.00";
    j.gMasA = j.goles + j.asistencias;
    j.puntaje = (j.goles * 3) + (j.asistencias * 2);

    if (j.goles > maxGoles) maxGoles = j.goles;
    if (j.asistencias > maxAsistencias) maxAsistencias = j.asistencias;
    if (j.gMasA > maxGMasA) maxGMasA = j.gMasA;
    if (j.mvp > maxMvp) maxMvp = j.mvp;
});

jugadores_2024.forEach(j => {
    let titulosArray = [];
    
    if (j.goles === maxGoles && maxGoles > 0) titulosArray.push("⚽");
    if (j.asistencias === maxAsistencias && maxAsistencias > 0) titulosArray.push("🦵");
    if (j.gMasA === maxGMasA && maxGMasA > 0) titulosArray.push("⚔️");
    if (j.mvp === maxMvp && maxMvp > 0) titulosArray.push("⭐");

    j.titulo = titulosArray.join(" ");
});

jugadores_2024.sort((a, b) => b.puntaje - a.puntaje);

const cuerpoTabla = document.getElementById("cuerpo_tabla");

jugadores_2024.forEach((j, index) => {
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