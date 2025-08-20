//create html to build list of guests in a container

import { getGuests } from "./database.js";


const guestsArray = getGuests()

export const createGuestListHTML = () => {
    return guestsArray.map (guest =>
            `<ul>
                <li data-id="${guest.id}">
                    ${guest.name}
                </li>
            </ul>`
    )
    .join('')
}