// Asegurar que las funciones globales estén disponibles para los botones onclick
window.goToScreen = function (screenId) {
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === screenId);
  });
};

window.togglePickup = function (cardId, btn) {
  const card = document.getElementById(cardId);
  if (!card) return;
  const isPicked = card.classList.toggle('picked');
  btn.classList.toggle('done', isPicked);
  btn.textContent = isPicked ? '✓ Recogido' : 'Recogido';
};

window.recordAudio = function () {
  const micBtn = document.getElementById('micBtn');
  const micStatus = document.getElementById('micStatus');
  const transcriptText = document.getElementById('transcriptText');
  if (!micBtn) return;

  micBtn.classList.add('recording');
  micStatus.textContent = 'Grabando audio (4s)...';

  setTimeout(() => {
    micBtn.classList.remove('recording');
    micStatus.textContent = '✓ Audio listo (4.0s)';
    transcriptText.innerHTML = '<strong>"Audio registrado: Firulais y Rocky hicieron del dos y tomaron agua."</strong>';
  }, 1200);
};

window.simulatePhoto = function (btn) {
  btn.textContent = '✓ Foto adjuntada al reporte';
  btn.style.backgroundColor = '#E7EFE9';
};

window.sendWhatsApp = function () {
  const waBtn = document.getElementById('waBtn');
  if (!waBtn) return;
  waBtn.textContent = '✓ Reporte enviado por WhatsApp';
  waBtn.style.backgroundColor = '#1E3624';
};

window.sendNequiReminder = function () {
  const nequiBtn = document.getElementById('nequiBtn');
  if (!nequiBtn) return;
  nequiBtn.textContent = 'Recordatorio enviado ✓';
  nequiBtn.style.backgroundColor = '#2D4F36';
};

// Inicializar eventos cuando cargue el documento
document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Pestañas superiores (1. Ruta, 2. En Parque, 3. Reporte, 4. Cobros)
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.goToScreen(btn.dataset.screen);
    });
  });

  // Formulario de contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const feedback = document.getElementById('formFeedback');
      if (feedback) {
        feedback.textContent = `¡Gracias, ${nombre}! Te enviamos el enlace de HuellaRuta a tu WhatsApp.`;
      }
      this.reset();
    });
  }
});
