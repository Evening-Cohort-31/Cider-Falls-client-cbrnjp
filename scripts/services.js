import { getParkAreas, getServices } from "./database.js";

const servicesArray = getServices()


export const createServicesBulletHTML = () => {
    // Build clickable spans for each service. A span is an in-line element. using a block element like <p> or <li> would force new lines
    const serviceNames = servicesArray.map(service => 
        `<span data-type="service" 
                data-id="${service.id}"
                data-parkid="${service.parkAreaId}" 
                class="service-item">
                ${service.name}
                </span>`
    ).join(", ")

    const html = `<article>
                    <p><strong>Park Services:</strong> ${serviceNames}</p>
                  </article>`

    return html
}

document.addEventListener(
    "click",
    (AnotherClickEvent) => {
        const serviceClicked = AnotherClickEvent.target
        if (serviceClicked.dataset.type === "service") {
            const serviceId = parseInt(serviceClicked.dataset.id)
        
        // Find the service
            const services = getServices()
            const service = services.find(s => 
                s.id === serviceId)

        // Get park areas that have this service
        const parkAreas = getParkAreas()
        const matchingAreas = parkAreas
            .filter(area => 
                service.parkAreaId.includes(area.id))
            .map(area => area.name)

        window.alert(`The "${service.name}" service is available in: ${matchingAreas.join(", ")}`)
    }
})