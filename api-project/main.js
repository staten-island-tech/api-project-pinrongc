import './style.css'

const Gallery = "https://randomfox.ca/floof"

async function getData(url) {
try{
  const response = await fetch(url);
  if(response.status <200 || response.status >299){
    console.log(response.status);
    throw error(response);
  }else {
    const data = await response.json();
    document.getElementById("api-response").insertAdjacentHTML("afterend", `<img src="${data.image}" alt="">`);
    console.log(data)
    
    //.insertAdjacentHTML("beforeend", `${data.setup} ${data.punchline}`);
  }

} catch (error){
    console.log(error);
    console.log("sad");
  } 
}

  getData(Gallery);





