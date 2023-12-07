document.getElementById('areaForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);

  const resultArea = document.getElementById('resultArea');
  const area = 0.5 * base * height;

  if (!isNaN(area)) {
    resultArea.textContent = `Luas Segitiga: ${area.toFixed(2)}`;
  } else {
    resultArea.textContent = 'Masukkan angka yang valid.';
  }
});

document.getElementById('perimeterForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const sideA = parseFloat(document.getElementById('sideA').value);
  const sideB = parseFloat(document.getElementById('sideB').value);
  const sideC = parseFloat(document.getElementById('sideC').value);

  const resultPerimeter = document.getElementById('resultPerimeter');
  const perimeter = sideA + sideB + sideC;

  if (!isNaN(perimeter) && sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
    resultPerimeter.textContent = `Keliling Segitiga: ${perimeter.toFixed(2)}`;
  } else {
    resultPerimeter.textContent = 'Sisi yang dimasukkan tidak membentuk segitiga yang valid.';
  }
});
