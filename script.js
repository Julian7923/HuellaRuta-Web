// Menú móvil responsive
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Navegación entre pantallas del simulador HuellaRuta
function goToScreen(screenId) {
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === screenId);
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    goToScreen(btn.dataset.screen);
  });
});

// Pantalla 1: Marcar perro como recogido
function togglePickup(cardId, btn) {
  const card = document.getElementById(cardId);
  const isPicked = card.classList.toggle('picked');
  btn.classList.toggle('done', isPicked);
  btn.textContent = isPicked ? '✓ Recogido' : 'Recogido';
}

// Pantalla 2: Simulación de audio de 4 segundos
function recordAudio() {
  const micBtn = document.getElementById('micBtn');
  const micStatus = document.getElementById('micStatus');
  const transcriptText = document.getElementById('transcriptText');

  micBtn.classList.add('recording');
  micStatus.textContent = 'Grabando audio (4s)...';

  setTimeout(() => {
    micBtn.classList.remove('recording');
    micStatus.textContent = '✓ Audio listo (4.0s)';
    transcriptText.innerHTML = '<strong>"Audio registrado: Firulais y Rocky hicieron del dos y tomaron agua."</strong>';
  }, 1200);
}

// Pantalla 2: Simulación de subir foto
function simulatePhoto(btn) {
  btn.textContent = '✓ Foto adjuntada al reporte';
  btn.style.backgroundColor = '#E7EFE9';
}

// Pantalla 3: Confirmación de envío por WhatsApp
function sendWhatsApp() {
  const waBtn = document.getElementById('waBtn');
  waBtn.textContent = '✓ Reporte enviado por WhatsApp';
  waBtn.style.backgroundColor = '#1E3624';
}

// Pantalla 4: Recordatorio de cobro por Nequi
function sendNequiReminder() {
  const nequiBtn = document.getElementById('nequiBtn');
  nequiBtn.textContent = 'Recordatorio enviado ✓';
  nequiBtn.style.backgroundColor = '#2D4F36';
}

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const feedback = document.getElementById('formFeedback');
  feedback.textContent = `¡Gracias, ${nombre}! Te enviamos el enlace de HuellaRuta a tu WhatsApp.`;
  this.reset();
});
