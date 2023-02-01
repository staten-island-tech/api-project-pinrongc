import "./style.css"

const Gallery = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

async function getData(url) {
  try {
    const response = await fetch(url);

    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
/* 
DOMselectors.box.insertAdjacentHTML{
  "afterbegin",
  `<div class="poke"> 
<h2 class="name">${data.name}</h2>
</div>`
}
 */
/* data.abilities.forEach(() => 
document.querySelector(".abilities").insertAdjacentHTML("afterbegin",`<li class="list-item">${.abilities.name}</li>`
)); */
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

const DOMselectors = {
  pokemon: document.getElementById("pokemon"),
  display: document.getElementById("display"),
  form: document.getElementById("form"),
};



document.getElementById("search").onkeyup = function searchFunction(){
  const input = document.getElementById("search").value.toUpperCase();
  const pokemon = document.querySelectorAll(".pokemon");
  const pokemonContent = document.getElementsByTagName("h2");

  for (let i = 0; i <pokemonContent.length; i++) {
    let pokeName = pokemon[i].getElementsByTagName(`h2`)[0];
    if (pokeName){
      let text = pokeName.textContent; 
     
      if (text.toUpperCase().indexOf(input)> -1) {
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

