 const jugadores_historia = [
{ nombre: "Aslan", partidos: 189, goles: 242, asistencias: 125, mvp: 16, posicion: "DC/EI/MCO", nacionalidad: "Venezolano 🇻🇪", edad: 19 },
  { nombre: "Dawins", partidos: 183, goles: 206, asistencias: 122, mvp: 16, posicion: "ED/MCO/MC", nacionalidad: "Dominicano 🇩🇴", edad: 18 },
  { nombre: "Wenderly", partidos: 137, goles: 186, asistencias: 57, mvp: 6, posicion: "DC/EI/ED", nacionalidad: "Haitiano 🇭🇹", edad: 19 },
  { nombre: "Sebastián", partidos: 174, goles: 106, asistencias: 51, mvp: 17, posicion: "DFC/DC", nacionalidad: "Venezolano 🇻🇪", edad: 21 },
  { nombre: "Eliant", partidos: 100, goles: 81, asistencias: 67, mvp: 4, posicion: "ED/EI", nacionalidad: "Dominicano 🇩🇴", edad: 21 },
  { nombre: "Josue", partidos: 41, goles: 71, asistencias: 27, mvp: 0, posicion: "DC", nacionalidad: "Venezolano 🇻🇪", edad: 19 },
  { nombre: "Christian", partidos: 79, goles: 12, asistencias: 76, mvp: 1, posicion: "MC/DFC", nacionalidad: "Dominicano 🇩🇴", edad: 19 },
  { nombre: "Daniel", partidos: 42, goles: 20, asistencias: 20, mvp: 7, posicion: "DFC/MCD/MC", nacionalidad: "Dominicano 🇩🇴", edad: 17 },
  { nombre: "Miguel", partidos: 86, goles: 28, asistencias: 11, mvp: 0, posicion: "LD/MC/MCO", nacionalidad: "Dominicano 🇩🇴", edad: 19 },
  { nombre: "Jeremy", partidos: 46, goles: 25, asistencias: 14, mvp: 3, posicion: "EI/ED", nacionalidad: "Dominicano 🇩🇴", edad: 17 },
  { nombre: "Joelfry", partidos: 70, goles: 29, asistencias: 21, mvp: 7, posicion: "MCD/MC", nacionalidad: "Dominicano 🇩🇴", edad: 19 },
  { nombre: "Gari", partidos: 45, goles: 11, asistencias: 24, mvp: 3, posicion: "DFC/MC", nacionalidad: "Dominicano 🇩🇴", edad: 19 },
  { nombre: "Adonys", partidos: 48, goles: 20, asistencias: 7, mvp: 4, posicion: "PO/DFC/DC", nacionalidad: "Dominicano 🇩🇴", edad: 20 },
  { nombre: "Leo", partidos: 107, goles: 9, asistencias: 22, mvp: 4, posicion: "DFC/MCD/PO", nacionalidad: "Dominicano 🇩🇴", edad: 20 },
  { nombre: "Nicolás", partidos: 55, goles: 13, asistencias: 18, mvp: 5, posicion: "DFC/MC/LD", nacionalidad: "Dominicano 🇩🇴", edad: 14 },
  { nombre: "Keurys", partidos: 28, goles: 13, asistencias: 8, mvp: 0, posicion: "EI", nacionalidad: "Dominicano 🇩🇴", edad: 16 },
  { nombre: "Geraldo", partidos: 68, goles: 6, asistencias: 19, mvp: 5, posicion: "DFC", nacionalidad: "Dominicano 🇩🇴", edad: 18 },
  { nombre: "Dylan", partidos: 17, goles: 8, asistencias: 8, mvp: 1, posicion: "MCO/ED", nacionalidad: "Dominicano 🇩🇴", edad: 14 },
  { nombre: "Alberto", partidos: 34, goles: 10, asistencias: 5, mvp: 0, posicion: "DFC/PO", nacionalidad: "Dominicano 🇩🇴", edad: 19 },
  { nombre: "Welfry", partidos: 13, goles: 9, asistencias: 2, mvp: 1, posicion: "MCO", nacionalidad: "Dominicano 🇩🇴", edad: 16 },
  { nombre: "Oscar", partidos: 51, goles: 7, asistencias: 5, mvp: 8, posicion: "DFC/MC/PO", nacionalidad: "Dominicano 🇩🇴", edad: 20 },
  { nombre: "Obed", partidos: 16, goles: 2, asistencias: 7, mvp: 3, posicion: "PO/MC", nacionalidad: "Dominicano 🇩🇴", edad: 18 },
  { nombre: "Argenis", partidos: 4, goles: 2, asistencias: 4, mvp: 0, posicion: "MC", nacionalidad: "Dominicano 🇩🇴", edad: 20 },
  { nombre: "Jacob", partidos: 4, goles: 2, asistencias: 2, mvp: 0, posicion: "DC", nacionalidad: "Dominicano 🇩🇴", edad: 13 },
  { nombre: "Erick", partidos: 5, goles: 2, asistencias: 0, mvp: 0, posicion: "DFC", nacionalidad: "Dominicano 🇩🇴", edad: 18 },
  { nombre: "Lecnar", partidos: 42, goles: 0, asistencias: 0, mvp: 2, posicion: "DFC/PO", nacionalidad: "Dominicano 🇩🇴", edad: 17 },
  { nombre: "Abiel", partidos: 2, goles: 0, asistencias: 0, mvp: 1, posicion: "DFC/PO", nacionalidad: "Dominicano 🇩🇴", edad: 14 },
  { nombre: "Niño", partidos: 2, goles: 0, asistencias: 0, mvp: 1, posicion: "N/A", nacionalidad: "Dominicano 🇩🇴", edad: "N/A" }
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
