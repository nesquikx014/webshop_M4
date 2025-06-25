document.addEventListener('DOMContentLoaded', () => {
  const winkelwagen = JSON.parse(localStorage.getItem('winkelwagen')) || [];
  const main = document.querySelector('main');

  if (winkelwagen.length === 0) {
    main.innerHTML = "<p>Je winkelmand is leeg.</p>";
    return;
  }

  winkelwagen.forEach(product => {
    const item = document.createElement('div');
    item.className = 'winkelmand-item';
    item.innerHTML = `
      <img src="${product.afbeelding}" alt="${product.naam}" style="width:100px;">
      <h3>${product.naam}</h3>
      <p>Prijs: €${product.prijs}</p>
    `;
    main.appendChild(item);
  });

  document.getElementById("cartcount").textContent = winkelwagen.length;
});
