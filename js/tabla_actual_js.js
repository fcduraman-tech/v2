const jugadores_actual = [
            { nombre: "Aslan", partidos: 63, goles: 71, asistencias: 34, mvp: 18 },
            { nombre: "Dawins", partidos: 56, goles: 45, asistencias: 38, mvp: 16 },
            { nombre: "Wenderly", partidos: 50, goles: 53, asistencias: 19, mvp: 7 },
            { nombre: "Eliant", partidos: 41, goles: 32, asistencias: 22, mvp: 5 },
            { nombre: "Sebastián", partidos: 53, goles: 35, asistencias: 16, mvp: 18 },
            { nombre: "Jeremy", partidos: 46, goles: 25, asistencias: 14, mvp: 3 },
            { nombre: "Daniel", partidos: 44, goles: 20, asistencias: 20, mvp: 7 },
            { nombre: "Joelfry", partidos: 50, goles: 25, asistencias: 14, mvp: 7 },
            { nombre: "Nicolás", partidos: 59 goles: 13, asistencias: 19, mvp: 5 },
            { nombre: "Adonys", partidos: 39, goles: 16, asistencias: 7, mvp: 7 },
            { nombre: "Dylan", partidos: 18, goles: 8, asistencias: 8, mvp: 1 },
            { nombre: "Gari", partidos: 15, goles: 4, asistencias: 10, mvp: 3 },
            { nombre: "Welfry", partidos: 13, goles: 9, asistencias: 2, mvp: 1 },
            { nombre: "Geraldo", partidos: 52, goles: 2, asistencias: 10, mvp: 6 },
            { nombre: "Christian", partidos: 13, goles: 0, asistencias: 9, mvp: 1 },
            { nombre: "Oscar", partidos: 34, goles: 5, asistencias: 1, mvp: 8 },
            { nombre: "Leo", partidos: 42, goles: 3, asistencias: 2, mvp: 4 },
            { nombre: "Obed", partidos: 11, goles: 2, asistencias: 2, mvp: 3 },
            { nombre: "Lecnar", partidos: 42, goles: 0, asistencias: 0, mvp: 2 },
            { nombre: "Abiel", partidos: 4, goles: 0, asistencias: 1, mvp: 2 },
            { nombre: "Erick", partidos: 2, goles: 0, asistencias: 0, mvp: 0 },
            { nombre: "Niño", partidos: 2, goles: 0, asistencias: 0, mvp: 1 },
            { nombre: "Jacob", partidos: 2, goles: 1, asistencias: 0, mvp: 0 },
            { nombre: "Josue", partidos: 1, goles: 0, asistencias: 0, mvp: 0 }
];


let maxGoles = 0;
let maxAsistencias = 0;
let maxGMasA = 0;
let maxMvp = 0;

jugadores_actual.forEach(j => {
    j.gp = j.partidos > 0 ? (j.goles / j.partidos).toFixed(2) : "0.00";
    j.ap = j.partidos > 0 ? (j.asistencias / j.partidos).toFixed(2) : "0.00";
    j.gMasA = j.goles + j.asistencias;
    j.puntaje = (j.goles * 3) + (j.asistencias * 2);

    if (j.goles > maxGoles) maxGoles = j.goles;
    if (j.asistencias > maxAsistencias) maxAsistencias = j.asistencias;
    if (j.gMasA > maxGMasA) maxGMasA = j.gMasA;
    if (j.mvp > maxMvp) maxMvp = j.mvp;
});

jugadores_actual.forEach(j => {
    let titulosArray = [];
    
    if (j.goles === maxGoles && maxGoles > 0) titulosArray.push("⚽");
    if (j.asistencias === maxAsistencias && maxAsistencias > 0) titulosArray.push("🦵");
    if (j.gMasA === maxGMasA && maxGMasA > 0) titulosArray.push("⚔️");
    if (j.mvp === maxMvp && maxMvp > 0) titulosArray.push("⭐");

    j.titulo = titulosArray.join(" ");
});

jugadores_actual.sort((a, b) => b.puntaje - a.puntaje);

const cuerpoTabla = document.getElementById("cuerpo_tabla");

jugadores_actual.forEach((j, index) => {
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