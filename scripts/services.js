import { getServices } from "./database.js";

const servicesArray = getServices()


export const createServicesBulletHTML = () => {
    const serviceNames = servicesArray.map(service => service.name).join(", ")

    const html = `<article>
                    <p><strong>Park Services:</strong> ${serviceNames}</p>
                  </article>`

    return html
}

