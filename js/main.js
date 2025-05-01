'use strict';

console.log('js is running');

const kittenList = document.querySelector(".js-list");
const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenRace1 = "Siamés";

const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."
/* const kittenBlue = `<li class="card">
<article>
  <img class="card_img" src=${kittenImage1} alt="siames-cat" /> 
  <h3 class="card_title">${kittenName1} </h3>
  <h4 class="card_race">${kittenRace1} </h4>
  <p class="card_description">
    ${kittenDesc1}
  </p>
</article>
</li>`; */

console.log(kittenImage1)

const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenRace2 = "Sphynx";
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."

/*const kittenFiona = `<li class="card">
  <img class="card_img" src= ${kittenImage2} alt="sphynx-cat" />
  <h3 class="card_title">${kittenName2}</h3>
  <h4 class="card_race">${kittenRace2}</h4>
  <p class="card_description">
      ${kittenDesc2}
  </p>
</li>`;*/

const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenRace3 = "Maine Coon";

const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

/*const kittenCielo = `<li class="card">
  <img class="card_img" src= ${kittenImage3} alt="maine-coon-cat" />
  <h3 class="card_title">${kittenName3}</h3>
  <h4 class="card_race">${kittenRace3}</h4>
  <p class="card_description">
      ${kittenDesc3}
  </p>
</li>`; */

function renderKitten(url , name, race, desc) { 
  kittenList.innerHTML += 
  `<li class="card">
  <img class="card_img" src= ${url} />
  <h3 class="card_title">${name}</h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">
      ${desc}
  </p>
</li>`
}

renderKitten (kittenImage1,kittenName1,kittenRace1,kittenDesc1)
renderKitten (kittenImage2,kittenName2,kittenRace2,kittenDesc2)
renderKitten (kittenImage3,kittenName3,kittenRace3,kittenDesc3)


console.log (renderKitten);

//kittenList.innerHTML = kittenBlue + kittenFiona + kittenCielo;

const addPlus = document.querySelector('.fa-plus-circle');

addPlus.classList.add('js-btn-add');

const kittenPlus = document.querySelector('.js-btn-add');

const formKitten = document.querySelector('.new-form');

const cancelButton = document.querySelector('.button-cancel');

const formKittenAdd = document.querySelector('.form-kitten-add');

cancelButton.addEventListener("click", () => {
  formKitten.classList.add('collapsed');
  formKittenAdd.reset(); //resetea el formulario
});

const inputSearchDesc = document.querySelector('.js_in_search_desc');

const buttonSearch = document.querySelector('.js_button-search');


buttonSearch.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descrSearchText = inputSearchDesc.value;
  console.log(descrSearchText)
  kittenList.innerHTML = '';
  if (kittenDesc1.includes(descrSearchText)) {
  kittenList.innerHTML += kittenBlue }

  if (kittenDesc2.includes(descrSearchText)) {
    kittenList.innerHTML += kittenFiona }

  if (kittenDesc3.includes(descrSearchText)) {
    kittenList.innerHTML += kittenCielo }

});



function showNewCatForm(){
  formKitten.classList.remove('collapsed');

} 
function hideNewCatForm(){
  formKitten.classList.add('collapsed');
}


function handleClickNewCatForm(event) {
  if (formKitten.classList.contains("collapsed")) {
  return showNewCatForm();

  } else {
    return hideNewCatForm();
  }
}

kittenPlus.addEventListener("click", handleClickNewCatForm );