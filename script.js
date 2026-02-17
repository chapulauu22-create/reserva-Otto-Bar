function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const personas = document.getElementById("personas").value;
  const horario = document.getElementById("horario").value;
  const obs = document.getElementById("obs").value;

  if (!nombre || !fecha || !personas || !horario) {
    alert("Completá todos los campos obligatorios");
    return;
  }

  const mensaje =
    `Hola! Quiero hacer una reserva:%0A` +
    `Nombre: ${nombre}%0A` +
    `Fecha: ${fecha}%0A` +
    `Personas: ${personas}%0A` +
    `Horario: ${horario}%0A` +
    `Observaciones: ${obs}`;

  const telefono = "54911XXXXXXXX"; // ← ACÁ VA EL NÚMERO DEL BAR
  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  window.open(url, "_blank");
}

