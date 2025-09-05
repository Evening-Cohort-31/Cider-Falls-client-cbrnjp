import { park } from "./parkAreas.js"
import { currentGuest, getGuestCountByArea } from "./guests.js"
import { getServices } from "./database.js"

const mainContainer = document.querySelector("#container")
const services = getServices()

const createServicesHTML = () => {
    let servicesHTML = "<ul>"
    for (const service of services) {
        servicesHTML += `<li data-id="${service.id}" data-type="service">${service.name}</li>`
    }
    servicesHTML += "</ul>"
    return servicesHTML
}

const applicationHTML = `
        <header>
            <h1>Cider Falls Park</h1>
        </header>
        <div class = "top-section">
            <h2>Park Services</h2>
            <div class = "services-list">
                ${createServicesHTML()}
            </div>
        </div>

        <div class = "main-content">
            <div class="left-container">
                <h2>Park Areas</h2>
                <div class="parkAreas--section">
                    ${park()}
                </div>
            </div>

            <div class="right-container">
                <div class="guest--list">
                    <h3>Current Guests</h3>
                    ${currentGuest()}
                </div>
            </div>
        </div>
        
        <div class ="bottom-content">
            <div class="bottom-column-one">
                <h2>Contact Us!</h2>
            </div>
            <div class="bottom-column-two">
                <h3>Phone</h3>
                <p>908-577-8481</p>
            </div>
            <div class="bottom-column-three">
                <h3>Email</h3>
                <p>ciderfallspark@tnparks.gov</p>
            </div>
            <div class="bottom-column-four">
                <h3>Address</h3>
                <p>1000 Cider Lane
                    Nashville, TN
                    37206
                </p>
            </div>
        </div>`



mainContainer.innerHTML = applicationHTML

mainContainer.addEventListener("click", (event) => {
    if (event.target.dataset.type === 'parkArea') {
        const areaId = parseInt(event.target.dataset.parkid)
        const guestCount = getGuestCountByArea(areaId)
        
        console.log("Clicked area ID:", areaId)
        console.log("Guest count:", guestCount)
        
        alert(`Current guests: ${guestCount}`)
    }
})

