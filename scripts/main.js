//target DOM
// invoke module functions to piece together html
// inject html into index.html

import { createGuestListHTML } from "./guests.js"
import { createParkAreasHTML } from "./parkAreas.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = 
        `<header>
            <img src= "./styles/ChatGPT Image Aug 19, 2025, 08_33_02 PM.png" alt="" class="logo__image">
            <h1>Cider Falls Park</h1>
        </header>
        <div class = "main-content">
            <div class="left-container">
                <div class="parkAreas--section">
                    ${createParkAreasHTML()}
                </div>
            </div>

            <div class="right-container">
                <div class="guest--list">
                    <h3>Guest List</h3>
                    ${createGuestListHTML()}
                </div>
            </div>
        </div>
        
        <div class ="bottom-content">
            <div class="bottom-column-one">
                <h2>Contact Us!</h2>
            </div>
            <div class="bottom-column-two">
                <h3>Phone</h3>
                <p>908-577-8481<p>
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