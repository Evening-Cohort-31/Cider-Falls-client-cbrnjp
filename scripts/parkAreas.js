//create function to assemble park area cards
// event listener for clicking on park Title (the req says only the title!)

import { getParkAreas } from "./database.js";


const parkAreasArray = getParkAreas

export const createParkAreasHTML = () => {
    parkAreasArray.map(park =>
        `<div class ="park--card">
            <h3>${park.name}</h3>
            <img src= "${park.image}" alt="${park.name} image" class="park__image"></img>
                <div class= "services--button"
                    data-services= "${park.services}"
                    data-type="services-button">
                    <h3>View Services</h3>
            </div>
        </div>`)
    .join('')
}