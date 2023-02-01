
const Gallery = " https://pokeapi.co/api/v2/pokemon/"

async function getData(url) {
try{
  const response = await fetch(url);

  if(response.status <200 || response.status >299){
    console.log(response.status);
    throw error(response);
  }else {
    const data = await response.json();
    const pokemonArray = data.results;

    console.log(pokemonArray);

    function displayPokemon(){
      pokemonArray.forEach((pokemon) => {
        DOMselectors.display.insertAdjacentHTML("afterbegin", <div id= "pokemon"> <h2> ${pokemon.name} </h2></div>);
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


document.getElementById("SearchBar").onkeyup = function searchFunction(){
  const input = document.getElementById("SearchBar").value.toUpperCase();
  const pokemon = 
  document.querySelectorAll(".pokemon");
  const pokemonContent = document.getElementsByTagName("h2");
}  



const DOMselectors = {
  pokemon: document.getElementById("pokemon"),
  display: document.getElementById("display"),
  form: document.getElementById("form")
}; 


DOMselectors.form.addEventListener("submit", function(event){
  event.preventDefault();
});

console.log(DOMselectors)


//DOMselectors.pokemon.addEventListener("click", getData(Gallery))




