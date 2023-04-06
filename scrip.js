const images = document.querySelectorAll('.gallery img');

setInterval(() => {
  images.forEach((image, index) => {
    image.style.backgroundColor = index % 2 === 0 ? '#F9AFAF' : '#F9E5AF';
  });
}, 3000);

function getRandomColor() {
  // Generar un color RGB aleatorio
  var r = Math.floor(Math.random() * 101) + 155; // De 155 a 255
  var g = Math.floor(Math.random() * 101) + 155; // De 155 a 255
  var b = Math.floor(Math.random() * 101) + 155; // De 155 a 255

  // Convertir a formato hexadecimal
  var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  return color;
}

function changeBackgroundColor() {
  // Cambiar el color de fondo de la página
  var color = getRandomColor();
  document.body.style.backgroundColor = color;
}

// Cambiar el color de fondo cada 3 segundos
setInterval(changeBackgroundColor, 3000);
