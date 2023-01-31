import '../style.css'

const Gallery = "https://randomfox.ca"

async function getData(url) {
try{
  const response = await fetch(url);
  if(response.status <200 || response.status >299){
    console.log(response.status);
    throw error(response);
  }else {
    const data = await response.json();
    document.getElementById("api-response").textContent = data.name;
    console.log(data)
  }

} catch (error){
    console.log(error);
    console.log("sad");
  } 
}

  getData(Gallery);

//const DOMselectors = {
  //fox: document.getElementById("fox"),
  //remove: document.getElementById("removebtn")
//}
//console.log(DOMselectors)


//DOMselectors.fox.addEventListener ("click", function (){
//getData(Gallery);
//})  


DOMselectors.form.addEventListener("submit", function(event){
  event.preventDefault();



/* function remove (){
  let removebtn = document.querySelectorAll(`removebtn`);
  removebtn.forEach((btn) =>{
 btn.addEventListener("click", function(element){
let card = element.target.parentElement;
card.remove();
  }


  */
/*     document.getElementById(`image`).remove()
  })
}

remove(); */




/*  const refreshButton = document.querySelector(".refresh-button");

 const refreshPage = () => {
   location.reload();
 }
 
 refreshButton.addEventListener("click", refreshPage) */