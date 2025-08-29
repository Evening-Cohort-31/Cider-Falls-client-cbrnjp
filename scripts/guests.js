// Pulls in a function called getGuests from database.js
import { getGuests } from "./database.js"

// Runs the getGuests function and Stores the returned array of guest objects in the variable guests
const guests = getGuests()

// Defines and exports a function named Guests, which When called will go through the array (getGuests) and add each guest object found in the array in an unordered list
export const currentGuest = () => {
    let guestHTML = "<ul>"

    for (const guest of guests) {
        guestHTML += `<li data-parkId=‘${guest.id}' data-type=‘guestList’>${guest.name}</li>`
    }

    guestHTML += "</ul>"
    return guestHTML

}


// will need following on main.js:  import { Guests } from "./guests.js"