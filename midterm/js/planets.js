
            

    function loadPlanets(planets){
   const target = document.querySelector("#fetch-planets-json");
   planets.forEach(planet => {
       target.innerHTML += `${planet.name} (${planet.constellation} ${planet.rightAscension} ${planet.declination} 
       ${planet.altitude} ${planet.azimuth} ${planet.aboveHorizon} ${planet.magnitude} ${planet.nakedEyeObject})<br>`;
    });
}

    function cardPlanets(planets){
   const target = document.querySelector("#fetch-planets-json");
   planets.forEach((planet, i) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", i);
        card.classList.add("planet-body");
        card.innerHTML = `
        <img src="./images/Sun.png" alt="Sun">
        <p class="card-title">${planet.name}</p>`
   }}
        




(async ()  => {
   try{
   const response = await fetch("data/planets.json");

   if(!response.ok){
      throw new Error ("fetch failed.");
   }
   
   const planets = await response.json();


   console.log("Using async-await function", planets)
   loadPlanets(planets)
   }
   catch (error){
      console.error("Unexpected error." , error);
   }

})();




