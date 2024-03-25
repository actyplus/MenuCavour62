fetch('https://script.google.com/macros/s/AKfycbzcm8PDEpDGWT0oBNDHZLAnB7AIH3iLyua0M0PHW-inkPmoUMwY5-nzgqmpLZjtIQ_Fmg/exec')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Qui puoi manipolare il DOM per inserire i dati nel tuo HTML
  })
  .catch(error => console.error('Error:', error));

