function calculateWeight() {
    const earthWeight = parseFloat(document.getElementById('earthWeight').value);
  
    if (isNaN(earthWeight)) {
      alert('Por favor, ingresa un peso válido.');
      return;
    }
  
    const conversionFactors = {
      Luna: 0.165,
      Marte: 0.377,
      Júpiter: 2.527,
      Saturno: 1.065,
      Urano: 0.886,
      Neptuno: 1.14
    };
  
    let resultHtml = '<h2>Peso en Otros Planetas:</h2>';
  
    for (const planet in conversionFactors) {
      const weightOnPlanet = (earthWeight * conversionFactors[planet]).toFixed(2);
      resultHtml += `<p>En ${planet}, pesarías ${weightOnPlanet} kg.</p>`;
    }
  
    document.getElementById('result').innerHTML = resultHtml;
  }
  