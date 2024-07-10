// Obtener la fecha objetivo (por ejemplo, el 26 de julio de 2024 a las 00:00)
const fechaObjetivo = new Date('2024-07-26T00:00:00');

// Función para actualizar el contador
function actualizarContador() {
  const fechaActual = new Date();
  const diferencia = fechaObjetivo.getTime() - fechaActual.getTime();

  // Calcular días, horas, minutos y segundos restantes
  const segundosRestantes = Math.floor(diferencia / 1000);
  const minutosRestantes = Math.floor(segundosRestantes / 60);
  const horasRestantes = Math.floor(minutosRestantes / 60);
  const diasRestantes = Math.floor(horasRestantes / 24);

  // Actualizar los valores en el HTML
  document.querySelector('.dias').textContent = formatearValor(diasRestantes);
  document.querySelector('.horas').textContent = formatearValor(horasRestantes % 24);
  document.querySelector('.minutos').textContent = formatearValor(minutosRestantes % 60);
  document.querySelector('.segundos').textContent = formatearValor(segundosRestantes % 60);
}

// Función para formatear los valores con ceros a la izquierda
function formatearValor(valor) {
  return valor.toString().padStart(2, '0');
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);