import "./style.css";

//const Gallery = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
//const poke = "https://pokeapi.co/api/v2/pokemon/"

async function getData(url) {
 try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
    /*   console.log(response.status); */
      throw error(response);
    } else {
      const data = await response.json();

DOMselectors.box.insertAdjacentHTML(
  "afterbegin",
` <div class="poke"> 
<h2 class="name">${data.name}</h2>
<img src="${data.sprites.front_default}" class = img>
<h3 class = "list">Abilities</h3>
<ul class = "abilities"></ul>
</div>`
);

data.abilities.forEach((pokemon) => 
document
.querySelector(".abilities").insertAdjacentHTML("afterbegin",
`<li class="list">${pokemon.ability.name}</li>`
)
); 
  }

  } 
  catch (error) {
    console.log(error);
    console.log("sad");
 }
}

 function clear() {
  DOMselectors.name.value = "";
  DOMselectors.box.innerHTML = "";
 } 

const DOMselectors = {
form: document.getElementById("form"),
name: document.getElementById("pokename"),
box: document.getElementById("box"),
click: document.getElementById("submit")
}
console.log(DOMselectors);


DOMselectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  let result = DOMselectors.name.value.toLowerCase();
  const URL = `https://pokeapi.co/api/v2/pokemon/${result}`;
  getData(URL);
  clear();
}); 