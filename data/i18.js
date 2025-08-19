 {
  es: {
    scenetitle: "Escena ",
    writeWordle: "Escribe...",
    infoTitle: "Cómo jugar",
    infoIntro: (max) => `Adivina la palabra en <b>${max}</b> intentos.`,
    infoOk: "¡Entendido!",
    infoNoAttempts: "Aún no has hecho ningún intento.",
    attemptLabel: (i, max, guess) =>
      `Intento ${i}/${max}${guess ? `: ${guess.toUpperCase()}` : ""}`,
    tooShort: (n) => `Has escrito ${n} letras. Faltan letras.`,
    tooLong: (n) => `Has escrito ${n} letras. Sobran letras.`,
    outOfAttempts: "Se acabaron los intentos.",
    correct: "✅ ¡Correcto!",
    skip: "❤️ Saltar",
    next: "⏭ Siguiente",
    restart: "¿Seguro que quieres reiniciar este puzzle?",
    loseAllLives: "Has perdido todas tus vidas. Fin del juego. 💀",
    restartBtn: "Reiniciar",
    introBtn: "Intro",
    hideBtn: "Ocultar",
    continue: "Continuar",
    firePolish: "🔥 ¡Pulido de fuego completado!",
    polish: "✨ ¡Pulido completado!",
    showBtn: "Mostrar",
    write: "Escribe...",
    colorCorrect: "Verde: letra correcta en la posición correcta.",
    colorMisplaced: "Azul: letra está en la palabra pero en otra posición.",
    colorWrong: "Gris: letra no está en la palabra.",
    enter: "Enviar",
    menu: "Menú",
    attempts: "Intentos",
    correctWord: "Palabra correcta:",
    progress: "Progreso",
    incorrect: "❌ Incorrecto.",
    modal5: {
      summary: "RESUMEN",
      puzzle: "PUZZLE",
      youCreated: "HAS CREADO",
      wiki: "Wiki",
      video: "Vídeo",
      completed: "COMPLETADO",
      notCompleted: "INCOMPLETO",
      noEmojiData: "No hay datos de emojis",
      global: "GLOBAL",
      globalSubtitle: "Respuestas correctas por escena",
      loadingStats: "Cargando estadísticas...",
      errorLoadingStats: "Error al cargar estadísticas",
      rateTitle: "VALORA ESTE PUZZLE",
      rateSubtitle: "Cuéntanos qué te gustó y comparte sugerencias",
      commentPlaceholder: "Deja un comentario (opcional)",
      submitRating: "Enviar reseña",
      ratingSent: "Reseña enviada",
      submit: "Enviar",
      share: "Compartir",
      difficultyLabel: "Dificultad:",
      // Orden: "-", Easy, Medium, Hard
      difficultyOptions: ["-", "Fácil", "Media", "Difícil"]
    },
    settings: {
      language: "Idioma",
      save: "Guardar progreso",
      download: "Descargar",
      upload: "Subir"
    },
    onboarding: {
      next: "⏭ Siguiente",
      steps: [
        {
          title: "Craftdoku<br>Creación o Extinción",
          emoji: "🏹",
          text: "Despiertas en un mundo sin memoria, sin herramientas, sin lenguaje. Nada está hecho.<br><br><strong>Tu objetivo:</strong> reconstruir la civilización desde cero, paso a paso."
        },
        {
          title: "Una aventura gráfica prehistórica",
          emoji: "🗺️",
          text: "Cada día enfrentarás un nuevo desafío.<br><br>¿Cómo fabricar fuego, espejos, telas...?<br>La historia avanza solo si tomas las decisiones correctas."
        },
        {
          title: "Toma decisiones, pero con cuidado...",
          emoji: "❤️❤️❤️",
          text: "Cada escena es un momento clave.<br><br>Lee con atención, elige bien.<br>Si fallas tres veces, perderás ese día y tendrás que empezar de nuevo."
        },
        {
          title: "Construye tu legado",
          emoji: "🏛️",
          text: "Con cada acierto, dejas una huella en la historia.<br><br>¿Serás capaz de llevar a la humanidad del sílex a las estrellas?"
        }
      ]
    }
  },
  en: {
    writeWordle: "Type...",
    scenetitle: "Scene ",
    infoTitle: "How to play",
    infoIntro: (max) => `Guess the word in <b>${max}</b> attempts.`,
    infoOk: "Got it!",
    infoNoAttempts: "You haven't made any attempts yet.",
    attemptLabel: (i, max, guess) =>
      `Attempt ${i}/${max}${guess ? `: ${guess.toUpperCase()}` : ""}`,
    tooShort: (n) => `You typed ${n} letters. Missing letters.`,
    tooLong: (n) => `You typed ${n} letters. Too many letters.`,
    outOfAttempts: "No attempts left.",
    correct: "✅ Correct!",
    skip: "❤️ Skip",
    next: "Next",
    restart: "Are you sure you want to restart this puzzle?",
    loseAllLives: "You've lost all your lives. Game over. 💀",
    restartBtn: "Restart",
    introBtn: "Intro",
    incorrect: "❌ Wrong.",
    hideBtn: "Hide",
    showBtn: "Show",
    colorCorrect: "Green: correct letter in the correct position.",
    colorMisplaced: "Blue: letter is in the word but in another position.",
    colorWrong: "Gray: letter is not in the word.",
    continue: "Continue",
    progress: "Progress",
    write: "Type...",
    firePolish: "🔥 Fire polishing completed!",
    polish: "✨ Polishing completed!",
    enter: "Enter",
    menu: "Menu",
    attempts: "Attempts",
    correctWord: "Correct word:",
    settings: {
      language: "Language",
      save: "Save Progress",
      download: "Download",
      upload: "Upload"
    },
    modal5: {
      summary: "SUMMARY",
      puzzle: "PUZZLE",
      youCreated: "YOU CREATED",
      wiki: "Wiki",
      video: "Video",
      completed: "COMPLETED",
      notCompleted: "NOT COMPLETED",
      noEmojiData: "No Emoji Data Available",
      global: "GLOBAL",
      globalSubtitle: "Correct answers by scene",
      loadingStats: "Loading stats...",
      errorLoadingStats: "Error loading stats",
      rateTitle: "RATE THIS PUZZLE",
      rateSubtitle: "Tell us what you liked and share your suggestions!",
      commentPlaceholder: "Leave a comment (optional)",
      submitRating: "Submit Rating",
      ratingSent: "Rating sent",
      submit: "Submit",
      share: "Share",
      difficultyLabel: "Difficulty:",
      // Order: "-", Easy, Medium, Hard
      difficultyOptions: ["-", "Easy", "Medium", "Hard"]
    },
    onboarding: {
      next: "⏭️ Next",
      steps: [
        {
          title: "Craftdoku<br>Creation or Extinction",
          emoji: "🏹",
          text: "You wake up in a world with no memory, no tools, no language. Nothing is made.<br><br><strong>Your goal:</strong> rebuild civilization from scratch, step by step."
        },
        {
          title: "A prehistoric graphic adventure",
          emoji: "🗺️",
          text: "Each day you'll face a new challenge.<br><br>How to make fire, mirrors, textiles...?<br>The story only advances if you make the right choices."
        },
        {
          title: "Choose wisely...",
          emoji: "❤️❤️❤️",
          text: "Every scene is a key moment.<br><br>Read carefully, choose well.<br>If you fail three times, you’ll lose the day and must start over."
        },
        {
          title: "Build your legacy",
          emoji: "🏛️",
          text: "With each success, you leave your mark on history.<br><br>Can you lead humanity from flint to the stars?"
        }
      ]
    }
  }
};
