import './style.css'

const Gallery = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=PROJECT"

async function getData(url) {
try{
  const response = await fetch(url);
  if(response.status <200 || response.status >299){
    console.log(response.status);
    throw error(response);
  }else {
    const data = await response.json();
    document.getElementById("api-response").insertAdjacentHTML("afterend", `<img src="${data}" alt="">`);
    console.log(data);
  }

} catch (error){
    console.log(error);
    console.log("sad");
  } 
}

  getData(Gallery);





