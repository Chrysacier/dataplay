"use strict";
const json = fetch('assets/js/data.json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    planetdata = data
    getdata();
});


let buttons = document.querySelectorAll(".btn");
let planet_infos = document.querySelector(".planet__infos");

buttons.forEach(button => {
    let btn_data = button.getAttribute("data-type");
    //let clicked_planet = button.getAttribute('data-planet');
    let clicked_planet = "Earth"

    let planet_filter = planetdata.filter((planets) =>{
        return planets.Name.toLowerCase().includes(clicked_planet)
    })
    planet_filter.forEach(planets => {
        planet_infos.innerHTML = `C'est un super test ${planets.}`
    });
});