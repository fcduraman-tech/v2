 const jugadores_historia = [
    { nombre: "Aslan", partidos: 185, goles: 235, asistencias: 122, mvp: 14 },

    { nombre: "Dawins", partidos: 179, goles: 200, asistencias: 117, mvp: 16 },

    { nombre: "Wenderly", partidos: 135, goles: 182, asistencias: 56, mvp: 6 },

    { nombre: "Sebastián", partidos: 170, goles: 104, asistencias: 48, mvp: 15 },

    { nombre: "Eliant", partidos: 98, goles: 81, asistencias: 63, mvp: 4 },

    { nombre: "Josue", partidos: 41, goles: 71, asistencias: 27, mvp: 0 },

    { nombre: "Christian", partidos: 79, goles: 12, asistencias: 76, mvp: 1 },

    { nombre: "Daniel", partidos: 40, goles: 17, asistencias: 18, mvp: 6 },

    { nombre: "Miguel", partidos: 86, goles: 28, asistencias: 11, mvp: 0 },

    { nombre: "Jeremy", partidos: 46, goles: 25, asistencias: 14, mvp: 3 },

    { nombre: "Joelfry", partidos: 66, goles: 24, asistencias: 19, mvp: 7 },

    { nombre: "Gari", partidos: 45, goles: 11, asistencias: 24, mvp: 3 },

    { nombre: "Adonys", partidos: 36, goles: 20, asistencias: 6, mvp: 3 },

    { nombre: "Leo", partidos: 105, goles: 9, asistencias: 22, mvp: 3 },

    { nombre: "Nicolás", partidos: 51, goles: 11, asistencias: 15, mvp: 5 },

    { nombre: "Keurys", partidos: 28, goles: 13, asistencias: 8, mvp: 0 },
    
    { nombre: "Geraldo", partidos: 66, goles: 6, asistencias: 18, mvp: 5 },

    { nombre: "Dylan", partidos: 17, goles: 8, asistencias: 8, mvp: 14 },

    { nombre: "Alberto", partidos: 34, goles: 10, asistencias: 5, mvp: 0 },

    { nombre: "Welfry", partidos: 13, goles: 9, asistencias: 2, mvp: 1 },

    { nombre: "Oscar", partidos: 49, goles: 6, asistencias: 5, mvp: 7 },

    { nombre: "Obed", partidos: 16, goles: 2, asistencias: 7, mvp: 3 },

    { nombre: "Argenis", partidos: 4, goles: 2, asistencias: 4, mvp: 0 },

    { nombre: "Jacob", partidos: 4, goles: 2, asistencias: 2, mvp: 0 },

    { nombre: "Erick", partidos: 3, goles: 2, asistencias: 0, mvp: 0 },
    
    { nombre: "Lecnar", partidos: 42, goles: 0, asistencias: 0, mvp: 2 }
];


let maxGoles = 0;
let maxAsistencias = 0;
let maxGMasA = 0;
let maxMvp = 0;

jugadores_historia.forEach(j => {
    j.gp = j.partidos > 0 ? (j.goles / j.partidos).toFixed(2) : "0.00";
    j.ap = j.partidos > 0 ? (j.asistencias / j.partidos).toFixed(2) : "0.00";
    j.gMasA = j.goles + j.asistencias;
    j.puntaje = (j.goles * 3) + (j.asistencias * 2);

    if (j.goles > maxGoles) maxGoles = j.goles;
    if (j.asistencias > maxAsistencias) maxAsistencias = j.asistencias;
    if (j.gMasA > maxGMasA) maxGMasA = j.gMasA;
    if (j.mvp > maxMvp) maxMvp = j.mvp;
});

jugadores_historia.forEach(j => {
    let titulosArray = [];
    
    if (j.goles === maxGoles && maxGoles > 0) titulosArray.push("⚽");
    if (j.asistencias === maxAsistencias && maxAsistencias > 0) titulosArray.push("🦵");
    if (j.gMasA === maxGMasA && maxGMasA > 0) titulosArray.push("⚔️");
    if (j.mvp === maxMvp && maxMvp > 0) titulosArray.push("⭐");

    j.titulo = titulosArray.join(" ");
});

jugadores_historia.sort((a, b) => b.puntaje - a.puntaje);

const cuerpoTabla = document.getElementById("cuerpo_tabla");

jugadores_historia.forEach((j, index) => {
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
