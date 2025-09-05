// Add this to guests.js
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

// Update parkAreas.js - add data attributes to titles
export const park = () => {
    let parkHTML = ""
    
    for (const area of parkAreas) {
        parkHTML += `
            <div class="park-area">
                <h3 data-area-id="${area.id}" class="area-title">
                    ${area.name}
                </h3>
                <img src="${area.image}" alt="${area.name}">
            </div>
        `
    }
    
    return parkHTML
}
