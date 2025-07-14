<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>XV Años Karina - Pool Party</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Tipografías -->
  <link href="https://fonts.googleapis.com/css2?family=Cookie&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
  <style>
    body {
      font-family: 'Merriweather', serif;
      transition: opacity 1s ease-in-out;
      background: url('imagen de fondo.jpg') no-repeat center center fixed;
      background-size: cover;
    }
    .title-font {
      font-family: 'Cookie', cursive;
    }
    .fade-in {
      opacity: 0;
    }
    .fade-in.loaded {
      opacity: 1;
    }
  </style>
</head>
<body class="flex flex-col items-center justify-center min-h-screen p-6 fade-in">

  <!-- Contenedor principal -->
  <div class="bg-white/80 shadow-2xl rounded-3xl p-10 max-w-lg text-center backdrop-blur-md space-y-6">

    <!-- Foto -->
    <img
      src="karina-xv.jpg"
      alt="Foto de Karina para su XV años"
      class="w-44 h-44 object-cover rounded-full mx-auto shadow-lg border-4 border-teal-400"
    />

    <!-- Títulos -->
    <div class="space-y-2">
      <h1 class="text-6xl text-teal-600 title-font">Pool Party</h1>
      <h2 class="text-4xl text-pink-500 title-font">XV Años Karina</h2>
    </div>

    <!-- Botón para reproducir música -->
    <div>
      <button
        id="playMusic"
        class="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition animate-pulse"
      >
        🎵 Dale play a "Confess to You"
      </button>
    </div>

    <!-- Contador regresivo justo después de la canción -->
    <div>
      <p class="text-xl mb-2 font-medium">Faltan:</p>
      <div id="countdown" class="text-2xl text-teal-700 font-bold"></div>
    </div>

    <!-- Datos del evento -->
    <div class="space-y-2 text-lg">
      <p>📅 <span class="font-semibold">Fecha:</span> 16 de Agosto, 2025</p>
      <p>⏰ <span class="font-semibold">Hora:</span> 14:00 hrs</p>
      <p>
        📍 <span class="font-semibold">Ubicación:</span><br />
        Calle Felipe Ángeles, entre calle Reforma Agraria y calle 17-A,<br />
        Col. Miguel de la Madrid – “Salón Los Ángeles”
      </p>
    </div>

    <!-- Botón ubicación debajo de la dirección -->
    <a
      href="https://maps.app.goo.gl/f18mLYfNgJq2sJeZ8"
      target="_blank"
      class="inline-block bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition"
    >
      📍 Ver ubicación en Google Maps
    </a>

    <!-- Invitación final -->
    <p class="text-gray-700 text-base">¡No olvides tu traje de baño y muchas ganas de celebrar! 🏊‍♀️🎉</p>

    <!-- Botón RSVP por WhatsApp al final -->
    <a
      href="https://wa.me/5219381596052?text=¡Hola%20Karina!%20Confirmo%20mi%20asistencia%20a%20tu%20Pool%20Party%20de%20XV%20años"
      target="_blank"
      class="inline-block bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition"
    >
      ✅ Confirmar Asistencia por WhatsApp
    </a>

  </div>

  <!-- Audio oculto -->
  <audio id="audioPlayer" preload="auto">
    <source src="confess-to-you.mp3" type="audio/mpeg" />
    Tu navegador no soporta la reproducción de audio.
  </audio>

  <script>
    // Animación fade-in
    window.onload = () => {
      document.body.classList.add('loaded');
    };

    // Contador regresivo
    const countdown = document.getElementById('countdown');
    const eventDate = new Date('August 16, 2025 14:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = `${days} días ${hours}h ${minutes}m ${seconds}s`;

      if (distance < 0) {
        clearInterval(timer);
        countdown.innerHTML = '¡Ya es el gran día!';
      }
    }, 1000);

    // Botón para reproducir música
    document.getElementById('playMusic').addEventListener('click', () => {
      const audio = document.getElementById('audioPlayer');
      audio.play();
    });
  </script>
</body>
</html>

