import { getParkAreas } from "./database.js"

//build array of services to display
const parkArray = getParkAreas()
const serviceArrayBuilder = () => {
    const serviceArray = []
    let id = 1
    for (const park of parkArray) {
        const newServiceObject = {
            serviceId: id,
            name: park.services}
        
        
        serviceArray.push(newServiceObject)
        id++
    }
    return serviceArray
}

const serviceArray = serviceArrayBuilder()
export const createServiceListHMTL = () => {
    return serviceArray.map(service =>
        `<ul>
            <li data-id="${service.id}">
            ${service.name}
            </li>
        </ul>`    
    )
    .join("")
}