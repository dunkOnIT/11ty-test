let h2Elements = document.querySelectorAll("h2")
let sidebarItems = document.querySelector(".side-nav-container")

// Get list of all header elements

function addLiChildren (parent, elements) {
    /* Takes a parent element and a list of elements, and adds each of those child elements as a list item to the parent element
    Also creates an anchor tag linking from the newly-added li element, to the item in elements on which it was based 
    */
   console.log(parent)
   console.log(elements)

    elements.forEach( element => {
        // Create the li and a elements that we'll be adding
        let li = document.createElement("li");
        let a = document.createElement("a");

        element.setAttribute("id", element.textContent) // Set the heading element's id == its textContent

        a.setAttribute("href", "#" + element.textContent) // Set the anchor location equal to the heading's id (just its name)
        a.textContent = element.textContent // Set anchor textContent to be the heading text 

        parent.appendChild(li).appendChild(a) // Add the li to the sidebar, and then put the anchor in that li
    });

    return
}

// Iterate through list of header elements
    // Add list of header elements to sidebar
    // Add anchor link


addLiChildren(sidebarItems, h2Elements)