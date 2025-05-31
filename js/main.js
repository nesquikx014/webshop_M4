function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
let aantalProducten = 0;

function voegToeAanWinkelwagen() {
  aantalProducten += 1;
  document.getElementById("cartcount").textContent = aantalProducten;
}

const productContainer = document.getElementById('products');
const productTemplate = document.getElementById('product-template');

const products_array = [
  ["Deze piano wordt gekenmerkt door een warme en heldere klank.",4.299, "fotos/foto1.png", "De Buffetpiano", false],
  ["De C2X heeft een rijke en heldere klank en produceert een mooie diepe toon.", 10.999, "fotos/foto2.png", "De Vleugelpiano", true],
  ["De slanke pianoklavieren van Casio zijn erg handig voor wie klein woont.",419.99, "fotos/foto3.png", "Elektronische piano", true],
  
];

products_array.forEach((product, index) => {
  
  const [naam, prijs, afbeelding, beschrijving, beschikbaar] = product;



  const clone = productTemplate.cloneNode(true);
  clone.style.display = 'block';
  clone.setAttribute('id', 'product' + index);
  const suffix = index + 1;


  clone.classList.add(`product_${suffix}`);
  clone.querySelector('.product__img').classList.add(`product__img${suffix}`);
  clone.querySelector('.b1').classList.add(`b${suffix}`);
  clone.querySelector('.product___button').classList.add(`product___button${suffix}`);

  clone.querySelector('.product__img').src = afbeelding;
  clone.querySelector('.product__img').alt =  naam;
  clone.querySelector('.product__title').textContent =  naam;
  clone.querySelector('.b1').textContent = beschrijving;

  if (!beschikbaar) {
    clone.querySelector('.product___button').style.display = 'none';
  }

  clone.querySelector('.product___button').addEventListener('click', voegToeAanWinkelwagen);

  productContainer.appendChild(clone);
});
var input = document.getElementById("myInput");
var text = document.getElementById("text");
input.addEventListener("keyup", function(event) {

if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});
