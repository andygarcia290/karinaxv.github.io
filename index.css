<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pool Party XV Años Karina</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Tipografías -->
  <link href="https://fonts.googleapis.com/css2?family=Cookie&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Merriweather', serif;
      transition: opacity 1s ease-in-out;
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
<body class="bg-gradient-to-b from-cyan-200 to-blue-200 flex flex-col items-center justify-center min-h-screen p-4 fade-in">

  <!-- Contenedor principal -->
  <div class="bg-white bg-opacity-80 shadow-xl rounded-2xl p-8 max-w-md text-center backdrop-blur-md">
    <!-- Foto -->
    <img src="Imagen de WhatsApp 2025-07-05 a las 21.35.29_4591632f.jpg" alt="Foto de Karina para su XV años" class="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-md border-4 border-teal-400">

    <h1 class="text-5xl text-teal-600 mb-2 title-font">Pool Party</h1>
    <h2 class="text-4xl text-pink-500 mb-4 title-font">XV Años Karina</h2>

    <p class="text-lg mb-2">📅 Fecha: 16 de Agosto, 2025</p>
    <p class="text-lg mb-2">⏰ Hora: 14:00 hrs</p>
    <p class="text-lg mb-4">📍 Calle: Felipe Ángeles, entre calle Reforma Agraria y calle 17-A, Col. Miguel de la Madrid<br>“Salón Los Ángeles”</p>

    <!-- Botón ubicación -->
    <a href="https://maps.app.goo.gl/f18mLYfNgJq2sJeZ8"
       target="_blank"
       class="inline-block bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition mb-4">
      Ver ubicación en Google Maps
    </a>

    <!-- Contador regresivo -->
    <div class="mb-6">
      <p class="text-xl mb-2">Faltan:</p>
      <div id="countdown" class="text-2xl text-teal-700 font-bold"></div>
    </div>

    <!-- Botón RSVP por WhatsApp -->
    <a href="https://wa.me/5219381596052?text=¡Hola%20Karina!%20Confirmo%20mi%20asistencia%20a%20tu%20Pool%20Party%20de%20XV%20años"
      target="_blank"
      class="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition inline-block mb-6">
      Confirmar Asistencia por WhatsApp
    </a>

    <!-- Audio solo con controles -->
    <audio controls autoplay loop class="w-full rounded-lg shadow mb-6">
      <source src="dynamite-bts.mp3" type="audio/mpeg" />
      Tu navegador no soporta la reproducción de audio.
    </audio>

    <p class="mt-2 text-sm text-gray-700">¡Trae tu traje de baño y muchas ganas de celebrar! 🏊‍♀️🎉</p>
  </div>

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
        countdown.innerHTML = "¡Ya es el gran día!";
      }
    }, 1000);
  </script>

</body>
</html>

