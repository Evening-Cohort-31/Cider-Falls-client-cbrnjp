//create function to assemble park area cards
// event listener for clicking on park Title (the req says only the title!)

import { getParkAreas } from "./database.js";


const parkAreasArray = getParkAreas()

export const createParkAreasHTML = () => {
    return parkAreasArray.map(park =>
        `<div class ="park--card">
            <h3>${park.name}</h3>
            <img src= "${park.image}" alt="${park.name} image" class="park__image">
                <div class= "services--button"
                    data-services= "${park.services}"
                    data-type="services-button">
                    <h3>View Services</h3>
            </div>
        </div>`)
    .join('')
}



//this works because in main.css i added .services--button h3 { pointer-events: none; } which tells h3 to get out of the way of the click event
document.addEventListener(
    "click",
    (ClickEvent) => {
        const cardClicked = ClickEvent.target
        if (cardClicked.dataset.type === "services-button"){
            window.alert(`The services offered here are ${cardClicked.dataset.services}`)
        }
    }
) 



//alernate way to do it (makes sure that entire green button can be clicked, and the h3 doesnt get in the way)
// document.addEventListener(
//     "click",
//     (ClickEvent) => {
//         const cardClicked = ClickEvent.target
//         const button = ClickEvent.target.closest(".services--button");
//         if (button){
//             window.alert(`The services offered here are ${button.dataset.services}`)
//         }
//     }
// )

