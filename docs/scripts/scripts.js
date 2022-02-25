let h2Elements = document.querySelectorAll("h2")
let sidebarItems = document.querySelector(".side-nav-container")

// Get list of all header elements

function addSidebarContent () {
    console.log("running")
    console.log(h2Elements)
    console.log(sidebarItems)
    h2Elements.forEach( element => {
        // Create the li and a elements that we'll be adding
        let li = document.createElement("li");
        let a = document.createElement("a");

        element.setAttribute("id", element.textContent) // Set the heading element's id == its textContent

        a.setAttribute("href", "#" + element.textContent) // Set the anchor location equal to the heading's id (just its name)
        a.textContent = element.textContent // Set anchor textContent to be the heading text 

        sidebarItems.appendChild(li).appendChild(a) // Add the li to the sidebar, and then put the anchor in that li
    });

    return
}

// Iterate through list of header elements
    // Add list of header elements to sidebar
    // Add anchor link


addSidebarContent()