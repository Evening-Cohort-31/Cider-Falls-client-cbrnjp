
import { getGuests } from "./database.js"

const guests = getGuests()

export const getGuestCountByArea = (parkAreaId) => {
    return guests.filter(guest => guest.parkAreaId === parkAreaId).length
}

export const currentGuest = () => {
    let guestHTML = "<ul>"
    
    for (const guest of guests) {
        guestHTML += `<li data-parkId='${guest.id}' data-type='guestList'>${guest.name}</li>`
    }
    
    guestHTML += "</ul>"
    return guestHTML
}

