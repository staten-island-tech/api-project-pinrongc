/* 
const Gallery = " https://pokeapi.co/api/v2/pokemon/";

async function getData(url) {
try{
  const response = await fetch(url);

  if(response.status <200 || response.status >299)
  
  {
    console.log(response.status);
    throw error(response);
  }else {
    const data = await response.json();
    const pokemonArray = data.results;

    console.log(pokemonArray);

    function displayPokemon(){
      pokemonArray.forEach((pokemon) => {
        DOMselectors.display.insertAdjacentHTML("afterbegin", <div class= "pokemon"> <h2> ${pokemon.name} </h2></div>);
      });
    }

    displayPokemon();
  }
} 

catch(error){
    console.log(error);
    console.log("sad");
  } 
}
  getData(Gallery);

  const DOMselectors = {
    pokemon: document.getElementById("pokemon"),
    display: document.getElementById("display"),
    form: document.getElementById("form")
  };   */

/* 
document.getElementById("SearchBar").onkeyup = function searchFunction(){
  const input = document.getElementById("SearchBar").value.toUpperCase();
  const pokemon = 
  document.querySelectorAll(".pokemon");
  const pokemonContent = document.getElementsByTagName("h2");
}  

for (let i = 0; i < pokemonContent.length; i++) {
  let pokeName = 
  pokemon[i].getElementsByTagName(h2)[0];
  if (pokeName) {
    let textValue = pokeName.textContent
    pokeName.innerHTML;
    if (textValue.toUpperCase().indexOf(input)> -1){
      pokemon[i].style.display ="";
    } 
    else{
      pokemon [i].style.display = "none";
    }
  }
}; */

// DOMselectors.form.addEventListener("submit", function(event){
//   event.preventDefault();
// });

// console.log(DOMselectors)


//DOMselectors.pokemon.addEventListener("click", getData(Gallery))

import "./style.css"

const Gallery = "https://pokeapi.co/api/v2/pokemon/";

const DOMselectors = {
  pokemon: document.getElementById("pokemon"),
  display: document.getElementById("display"),
  form: document.getElementById("form"),
};

async function getData(url) {
  try {
    const response = await fetch(url);

    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      const pokemonArray = data.results;
      console.log(pokemonArray);
      function displayPokemon() {
        pokemonArray.forEach((pokemon) => {
          DOMselectors.display.insertAdjacentHTML(
            "afterbegin",
            `<div class="pokemon"> 
            <h2> ${pokemon.name} </h2> 
            </div>`
          );
        });
      }
      displayPokemon();
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
  }
}

getData(Gallery);

document.getElementById("search").onkeyup = function searchFunction(){
  const input = document.getElementById("search").value.toUpperCase();
  const pokemon = document.querySelectorAll(".pokemon");
  const pokemonContent = document.getElementsByTagName("h2");

  for (let i = 0; i <pokemonContent.length; i++) {
    let pokeName = pokemon[i].getElementsByTagName(`h2`)[0];
    if (pokeName){
      let textValue = pokeName.textContent; 
     
      if (textValue.toUpperCase().indexOf(input)> -1) {
        pokemon[i].style.display = "";
      } else {
        pokemon[i].style.display = "none";
      }
    }
  }
};

DOMselectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
});
console.log(DOMselectors);

