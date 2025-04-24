'use strict';

console.log('js is running');

const kittenList = document.querySelector(".js-list");

const kittenBlue = `<li class="card">
<article>
  <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
      Porte elegante, su patrón de color tan característico y sus ojos
      de un azul intenso, pero su historia se remonta a Asía al menos
      hace 500 años, donde tuvo su origen muy posiblemente.
  </p>
</article>
</li>`;

const kittenFiona = `<li class="card">
  <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
  <h3 class="card_title">Fiona</h3>
  <h4 class="card_race">Sphynx</h4>
  <p class="card_description">
      Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
      hasta con pinta de alienígena han llegado a definir a esta raza
      gatuna que se caracteriza por la «ausencia» de pelo.
  </p>
</li>`;

const kittenCielo = `<li class="card">
  <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
  <h3 class="card_title">Cielo</h3>
  <h4 class="card_race">Maine Coon</h4>
  <p class="card_description">
      Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
      bella mirada se ha convertido en una de sus señas de identidad.
      Sus ojos son grandes y las orejas resultan largas y en punta.
  </p>
</li>`;

kittenList.innerHTML = kittenBlue + kittenFiona + kittenCielo;

const addPlus = document.querySelector('.fa-plus-circle');

addPlus.classList.add('js-btn-add');

const kittenPlus = document.querySelector('.js-btn-add');

const formKitten = document.querySelector('.new-form');

kittenPlus.addEventListener("click", () => {
  formKitten.classList.toggle('collapsed');
});

const cancelButton = document.querySelector('.button-cancel');

const formKittenAdd = document.querySelector('.form-kitten-add');

cancelButton.addEventListener("click", () => {
  formKitten.classList.add('collapsed');
  formKittenAdd.reset(); //resetea el formulario
});

const inputSearchDesc = document.querySelector('js_in_search_desc');

const buttonSearch = document.querySelector('js_button-search');

buttonSearch.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descrSearchText = inputSearchDesc.value;
});

const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."

const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."

const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."

if (kittenDesc1.includes(descrSearchText)) {
  kittenBlue.innerHTML = kittenBlue.innerHTML;
};
