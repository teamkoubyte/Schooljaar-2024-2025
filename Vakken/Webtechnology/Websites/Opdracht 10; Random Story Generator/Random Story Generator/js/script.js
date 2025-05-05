document.addEventListener("DOMContentLoaded", function () {
    let startKnop = document.getElementById("toonVerhaal");
    let nieuwVerhaalKnop = document.getElementById("nieuwVerhaal");
    let terugKnop = document.getElementById("terugNaarGenerator");
  
    startKnop.addEventListener("click", function (event) {
      event.preventDefault();
  
      let naam = document.getElementById("naamTextfield").value || "Held";
      let vijand = document.querySelector('input[name="enemy"]:checked').value;
  
      let geselecteerdeWapens = [];
      let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      checkboxes.forEach(checkbox => geselecteerdeWapens.push(checkbox.value));
      let wapens = geselecteerdeWapens.length > 0 ? geselecteerdeWapens.join(", ") : "geen wapens";
  
      let weerOpties = ["zonnige", "regenachtige", "mistige", "hete", "koude", "donkere"];
      let weer = weerOpties[Math.floor(Math.random() * weerOpties.length)];
      let dagen = Math.floor(Math.random() * 10) + 1;
  
      let verhalen = [
        `Op een <span class="highlight">${weer}</span> ochtend begon <span class="highlight naam">${naam}</span> aan een gevaarlijke reis. Zijn doel? De gevreesde <span class="highlight vijand">${vijand}</span> verslaan, die chaos zaaide in het koninkrijk. Gewapend met <span class="highlight wapens">${wapens}</span> trok hij ten strijde. Na ${dagen} dagen reizen kwam <span class="highlight naam">${naam}</span> aan bij het donkere kasteel...`,
        
        `<span class="highlight naam">${naam}</span> werd op een <span class="highlight">${weer}</span> dag wakker met een missie: de meedogenloze <span class="highlight vijand">${vijand}</span> stoppen. Bewapend met <span class="highlight wapens">${wapens}</span>, doorkruiste hij bossen en bergen. Na ${dagen} dagen vond hij de verborgen schuilplaats van de vijand en bereidde zich voor op de ultieme strijd.`,
        
        `De wereld was in gevaar. Op een <span class="highlight">${weer}</span> dag verliet <span class="highlight naam">${naam}</span> zijn dorp met slechts <span class="highlight wapens">${wapens}</span>. De dreiging? <span class="highlight vijand">${vijand}</span>. Na een lange reis van ${dagen} dagen stond <span class="highlight naam">${naam}</span> eindelijk oog in oog met zijn aartsvijand...`
      ];
  
      let randomVerhaal = verhalen[Math.floor(Math.random() * verhalen.length)];
  
      document.getElementById("verhaalTekst").innerHTML = randomVerhaal;
      document.getElementById("formulier").classList.add("verborgen");
      document.getElementById("verhaal").classList.remove("verborgen");
    });
  
    nieuwVerhaalKnop.addEventListener("click", function () {
      document.getElementById("toonVerhaal").click();
    });
  
    terugKnop.addEventListener("click", function () {
      document.getElementById("formulier").classList.remove("verborgen");
      document.getElementById("verhaal").classList.add("verborgen");
    });
  });
  