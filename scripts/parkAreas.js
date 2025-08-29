import {getParkAreas} from './database.js'

const parkAreas = getParkAreas();

export const park = () => {
    let parkHTML = `<ul>`

    for (const area of parkAreas){
            parkHTML += `<li data-parkId='${area.id}' data-type='parkArea'> ${area.name} </li>`    
    };

    parkHTML += "</ul>"

    return parkHTML
};