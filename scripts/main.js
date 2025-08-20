//target DOM
// invoke module functions to piece together html
// inject html into index.html

import { createParkAreasHTML } from "./parkAreas"

const maincontainer = document.querySelector("#container")

const applicationHTML = 
`<h1>Cider Falls Park</h1>
<div class="parkAreas--section">
    ${createParkAreasHTML}
</div>`

mainContainer.innerHTML = applicationHTML