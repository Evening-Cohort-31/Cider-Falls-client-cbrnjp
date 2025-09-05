import { getParkAreas, getServices } from './database.js'

const parkAreas = getParkAreas();
const services = getServices();

export const park = () => {
    let parkHTML = `<ul>`

    for (const area of parkAreas){
            parkHTML += `<li data-parkId='${area.id}' data-type='parkArea'> ${area.name} </li>`    
    };

    parkHTML += "</ul>"

    return parkHTML
};

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        // Check if a service list item was clicked
        if (itemClicked.dataset.type === "service") {
            const serviceId = parseInt(itemClicked.dataset.id);

            let clickedService;
            for (const service of services) {
                if (service.id === serviceId) {
                    clickedService = service;
                    break;
                }
            }

            const matchingAreas = [];
            for (const area of parkAreas) {
                if (area.serviceIds.includes(serviceId)) {
                    matchingAreas.push(area.name);
                }
            }

            const alertMessage = `${clickedService.name} is available in the following areas:\n\n- ${matchingAreas.join("\n- ")}`;

            window.alert(alertMessage);
        }
    }
)