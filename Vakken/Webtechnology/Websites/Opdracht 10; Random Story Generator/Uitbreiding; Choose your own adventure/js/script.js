document.addEventListener("DOMContentLoaded", () => {
    // Haal alle elementen op
    const intro = document.getElementById("intro");
    const scene1 = document.getElementById("scene1");
    const scene2A = document.getElementById("scene2A");
    const scene2B = document.getElementById("scene2B");
  
    // Einde-scènes
    const endA1 = document.getElementById("endA1");
    const endA2 = document.getElementById("endA2");
    const endB1 = document.getElementById("endB1");
    const endB2 = document.getElementById("endB2");
  
    // Knoppen
    const startBtn = document.getElementById("startBtn");
    const choice1A = document.getElementById("choice1A");
    const choice1B = document.getElementById("choice1B");
  
    const choice2A1 = document.getElementById("choice2A1");
    const choice2A2 = document.getElementById("choice2A2");
  
    const choice2B1 = document.getElementById("choice2B1");
    const choice2B2 = document.getElementById("choice2B2");
  
    // Restart knoppen
    const restartA1 = document.getElementById("restartA1");
    const restartA2 = document.getElementById("restartA2");
    const restartB1 = document.getElementById("restartB1");
    const restartB2 = document.getElementById("restartB2");
  
    // Functie om alle scenes te verbergen
    function hideAllScenes() {
      intro.classList.add("hidden");
      scene1.classList.add("hidden");
      scene2A.classList.add("hidden");
      scene2B.classList.add("hidden");
      endA1.classList.add("hidden");
      endA2.classList.add("hidden");
      endB1.classList.add("hidden");
      endB2.classList.add("hidden");
    }
  
    // Start
    startBtn.addEventListener("click", () => {
      hideAllScenes();
      scene1.classList.remove("hidden");
    });
  
    // Scene 1 keuzes
    choice1A.addEventListener("click", () => {
      hideAllScenes();
      scene2A.classList.remove("hidden");
    });
  
    choice1B.addEventListener("click", () => {
      hideAllScenes();
      scene2B.classList.remove("hidden");
    });
  
    // Scene 2A keuzes
    choice2A1.addEventListener("click", () => {
      hideAllScenes();
      endA1.classList.remove("hidden");
    });
  
    choice2A2.addEventListener("click", () => {
      hideAllScenes();
      endA2.classList.remove("hidden");
    });
  
    // Scene 2B keuzes
    choice2B1.addEventListener("click", () => {
      hideAllScenes();
      endB1.classList.remove("hidden");
    });
  
    choice2B2.addEventListener("click", () => {
      hideAllScenes();
      endB2.classList.remove("hidden");
    });
  
    // Opnieuw beginnen
    restartA1.addEventListener("click", () => {
      hideAllScenes();
      intro.classList.remove("hidden");
    });
  
    restartA2.addEventListener("click", () => {
      hideAllScenes();
      intro.classList.remove("hidden");
    });
  
    restartB1.addEventListener("click", () => {
      hideAllScenes();
      intro.classList.remove("hidden");
    });
  
    restartB2.addEventListener("click", () => {
      hideAllScenes();
      intro.classList.remove("hidden");
    });
  });
  