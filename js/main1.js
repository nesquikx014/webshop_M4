let aantalProducten = 0;

function voegToeAanWinkelwagen(naam, prijs, afbeelding) {
  let winkelwagen = JSON.parse(localStorage.getItem('winkelwagen')) || [];

  winkelwagen.push({ naam, prijs, afbeelding });

  
  localStorage.setItem('winkelwagen', JSON.stringify(winkelwagen));

  document.getElementById("cartcount").textContent = winkelwagen.length;
}


const productContainer = document.getElementById('products');
const productTemplate = document.getElementById('product-template');

const products_array = [
  ["Deze piano wordt gekenmerkt door een warme en heldere klank.", 15.999, "fotos/foto1.png", "Doutreligne Master D132 AdSilent 2 PE Black polished", false],
  ["Een stille piano biedt je een echte akoestische piano-ervaring, waarbij een hoofdtelefoonfunctie je in staat stelt om in stilte te blijven oefenen, zonder anderen te storen.", 1033.991, "fotos/foto2.png", "Yamaha C2X SH3 PE Black polished", true],
  ["Het bekroonde PX-S ontwerp wordt naar een volgend niveau getild met deze prachtige concertpiano; de Privia PX-S1100. ", 1449.99, "fotos/foto3.png", "Casio Privia PX-S1100 BK digitale piano ", true],
  [" Bij Wittmayer werkten in de topjaren 50 arbeidskrachten die samen jaarlijks ca. 400 instrumenten vervaardigden. Hoewel van ‘seriebouw’ werd gesproken, betrof het bouwen van de instrumenten voornamelijk handwerk.", 4662.099, "fotos/foto4.png", "Bösendorfer: Kurt Wittmayer klavecimbel", true],
  ["De Kawai GL-10 is gewoon de beste 5 babyvleugel ter wereld van vandaag. Met de meest complete set muziekverbeterende functies die ooit op een piano van deze grootte zijn aangeboden, heeft de GL-10 alles wat een pianist nodig heeft om te slagen - een uitstekende toon, een uitzonderlijke touch en een reeks exclusieve ontwerpelementen die de komende jaren zijn uitstekende prestaties zullen ondersteunen.", 10999, "fotos/foto6.png", "Kawai GL10 153cm Grand Piano", true],
  ["Aangezien dit product van Yamaha komt mag je wederom uitzien naar de klank van hun peperdure concertvleugels. Qua bediening een eenvoudige no-frills digitale piano", 2833.31, "fotos/foto7.png", "Yamaha P-145B ", false],
  ["De Steinway-chamier, de S-155, maakt indruk met zijn onmiskenbare speelstijl en is uitgerust met alle attributen die elke vleugel van Steinway & Sons onderscheiden: volume, toonkleur, de beste materialen en perfect vakmanschap. ", 1622.99, "fotos/foto8.png", "Steinway S-155", true],
  ["De 130 is al negentig jaar onze meest succesvolle rechtschapen. Zowel in muziekacademies als universiteiten vervangt het de vleugel. Het is mechanisch superieur aan in massa geproduceerde studiovleugels en heeft een duidelijk voller geluid.", 2334.559, "fotos/foto9.png", " Steingraeber 130 T: A Professional Piano for the Pros", true],
  [" Het rijke geluid boeit de luisteraar meteen in een nadrukkelijke demonstratie van tonale elegantie. Deze top-of-the-line upright piano is gemaakt in Duitsland en biedt zacht vloeiende lijnen en verfijnde details.", 6664.95, "fotos/foto10.png", " C. Bechstein Residence R 6 Elegance", true],
  [" De Steinway Crown Jewels zijn exclusieve, individueel vervaardigde grand en rechtopstaande piano's met bijzonder fijne fine-arters en prachtige diamanten in het toetsenborddeksel. ", 5421.19, "fotos/foto11.png", " Steinway Crown Jewels", true],
  [" De Steinway D-274 is sinds 1884 onveranderd in de architectuur. Lang Lang, Daniel Barenboim en Christoph Eschenbach zijn slechts drie van de meer dan 2.500 Steinway-artiesten over de hele wereld die de Steinway Model D hun eerste keuze noemen. (De C-227 biedt een kleinere concertvleugelversie.)", 1343.100, "fotos/foto12.png", " Steinway D-274", true],
  ["Naast de D-274 biedt Steinway & Sons een concertvleugel die, met zijn lengte van 227 cm, ideaal is voor kleinere concertzalen en podia en amateurmuzikanten die de schoonheid en kracht van een concertvleugel thuis willen.", 41900.99, "fotos/foto13.png", "Steinway C-227", true],
  ["De Casio Celviano AP-300 digitale piano is sterk gelijkend op de AP-S200, maar is wat groter. Niet heel veel groter, het blijft een slanke piano zoals de S200 dat ook is.", 4019.99, "fotos/foto14.png", "Casio Celviano AP-300 BN digitale piano palissander", true],
  ["De Yamaha U1 TA3 combineert de geweldige akoestische prestaties van de Yamaha U1 met de rijke opties van Yamaha TransAcoustic 3. De Yamaha U1 is met uitstekende muzikale prestaties een blijvende favoriet onder veeleisende pianisten, waaraan veel andere rechtopstaande piano's worden gemeten. ", 2108.195, "fotos/foto15.png", "Yamaha U1 C-Graded – Akoestische piano", true],
  ["Yamaha staat wereldwijd bekend om zijn betrouwbare kwaliteit en compromisloze vakmanschap. Met zijn prachtige heldere toon, volle baskant en sprankelende diskant biedt de Yamaha C3 een uitzonderlijke speelervaring die elke noot tot leven brengt met een ongekend niveau van diepte en emotie.", 1411.190, "fotos/foto16.png", " Yamaha C3 – Akoestische vleugel", true],
  ["De Kawai GL-10 E/P is de nieuwste instapper van het beroemde Japanse concern. ", 4219.89, "fotos/foto17.png", " Kawai GL 10 E/P Grand Piano ", true],
  [" Het rijke geluid boeit de luisteraar meteen in een nadrukkelijke demonstratie van tonale elegantie. Deze top-of-the-line upright piano is gemaakt in Duitsland en biedt zacht vloeiende lijnen en verfijnde details.", 6009.99, "fotos/foto18.png", "Kawai CA-58B Digitale piano Black", true],
  ["De Concertvleugel E is gebaseerd op zijn voorganger, het model uit 1895. Veel pianisten prijzen het als een van de meest onderscheidende en uitstekende instrumenten op de markt.", 1519.99, "fotos/foto19.png", "Steingraeber: The Concert Grand Piano E", false],
  ["Qua design kunnen we de wortels terugvoeren naar 1905. We denken niet aan onze kleinste vleugel als een 'baby grand', simpelweg omdat het veel 'Best in its Class'-awards heeft ontvangen die het geluid prijzen als veel groter dan het instrument eruit ziet.", 2074.411, "fotos/foto20.png", "Steingraeber A-170: The Salon Grand Piano", true],
  ["Bechstein C-234 semi-concertvleugel: indrukwekkende kracht, gekleurd en transparant geluid, prachtige touch. Met de hand gemaakt in Duitsland! ", 1261.419, "fotos/foto21.png", "C. Bechstein C-234 semi-concert grand piano", true],
  ["De middelgrote C. Bechstein A-192 salonvleugel is ideaal voor afwerkingen in nobele fineer of martelrie die het een lust voor het oog maken. Aarzel niet om uw dealer om fineermonsters en speciale afwerkingen te vragen.",3111.949, "fotos/foto22.png", "C. Bechstein A-192", true],

  
];


products_array.forEach((product, index) => {
  const [beschrijving, prijs, afbeelding, naam, beschikbaar] = product;

  const clone = productTemplate.cloneNode(true);
  clone.style.display = 'block';
  clone.setAttribute('id', 'product' + index);

  clone.querySelector('.product__img').src = afbeelding;
  clone.querySelector('.product__img').alt = naam;
  clone.querySelector('.product__title').textContent = naam;
  clone.querySelector('.product__price').textContent = "€ " + prijs;
const maxLength = 100; 

const shortTextElem = clone.querySelector('.short-text');
const dotsElem = clone.querySelector('.dots');
const moreTextElem = clone.querySelector('.more-text');
const readMoreBtn = clone.querySelector('.read-more-btn');

if (beschrijving.length > maxLength) {
  shortTextElem.textContent = beschrijving.substring(0, maxLength);
  moreTextElem.textContent = beschrijving.substring(maxLength);
  dotsElem.style.display = "inline";
  readMoreBtn.style.display = "inline";
} else {
  shortTextElem.textContent = beschrijving;
  dotsElem.style.display = "none";
  moreTextElem.style.display = "none";
  readMoreBtn.style.display = "none";
}

readMoreBtn.addEventListener('click', () => {
  if (moreTextElem.style.display === "none") {
    moreTextElem.style.display = "inline";
    dotsElem.style.display = "none";
    readMoreBtn.textContent = "Lees minder..";
  } else {
    moreTextElem.style.display = "none";
    dotsElem.style.display = "inline";
    readMoreBtn.textContent = "Lees meer..";
  }
});




 if (!beschikbaar) {
  const knop = clone.querySelector('.product___button');
  knop.textContent = 'Uitverkocht';
  knop.disabled = true;
  knop.classList.add('uitverkocht');
}

clone.querySelector('.product___button').addEventListener('click', () => {
  voegToeAanWinkelwagen(naam, prijs, afbeelding);
});

  

  productContainer.appendChild(clone);
});
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  const input = document.getElementById("myInput");
  const filter = input.value.toLowerCase();
  const productContainer = document.getElementById("products");
  const products = productContainer.getElementsByClassName("product");
  
  for (let i = 0; i < products.length; i++) {
    const title = products[i].querySelector(".product__title").textContent.toLowerCase();
    const description = products[i].querySelector(".product__description").textContent.toLowerCase();

    if (title.includes(filter) || description.includes(filter)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}
