window.onload = function() {
  let winkelwagen = JSON.parse(localStorage.getItem('winkelwagen')) || [];
  const main = document.querySelector('main');

  function toonWinkelwagen() {
    if (winkelwagen.length === 0) {
      main.innerHTML = `<div class="lekker_stylen_winkellijst"><p class="leeg"><span>Je winkelmand is leeg. </span></p></div>`;
      updateTeller();
      return;
    }

    main.innerHTML = '';
    winkelwagen.forEach((product, index) => {
main.innerHTML += `
    <div>
      <img src="${product.afbeelding}" alt="${product.naam}">
      <h3>${product.naam}</h3>
      <p>Prijs: €${product.prijs.toFixed(2)}</p>
      <button class="verwijder-button" onclick="verwijder(${index})">Verwijder</button>
    </div><hr>
`;

    });
    updateTeller();
  }
  

  window.verwijder = function(i) {
    winkelwagen.splice(i, 1);
    localStorage.setItem('winkelwagen', JSON.stringify(winkelwagen));
    toonWinkelwagen();
  }

  function updateTeller() {
    const teller = document.getElementById('cartcount');
    if (teller) teller.textContent = winkelwagen.length;
  }

  toonWinkelwagen();
};
