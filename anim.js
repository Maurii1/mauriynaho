// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No me imagine que funcionaba así", time: 0.5 },
  { text: "No buscaba amor y un día te encontré", time: 1.5 },
  { text: "Estaba vivo pero con vos comenecé a vivir", time: 5 },
  { text: "Fuiste una bendición", time: 6 },
  { text: "Me queda agradecer", time: 7 },
  { text: "Sos ese cuento", time: 9 },
  { text: "del que no quiero saber final", time: 10 },
  { text: "Ese cometa que", time: 11 },
  { text: "tuve suerte presenciar", time: 11.5 },
  { text: "❤❤❤ TE OFREZCO AMOR REAL DE UN CORAZÓN SINCERO ❤❤❤", time: 40 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);