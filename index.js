// 1. Remove the <main> element with id 'main'
const main = document.getElementById("main");
main.remove();

// 2. Create a new <h1> element and store it in a variable named 'newHeader'
const newHeader = document.createElement("h1");

// 3. Set the id of the new <h1> element to 'victory'
newHeader.id = "victory";

// 4. Set the text content of the new <h1> element
newHeader.textContent = "Brandon Canonizado is the champion";

// 5. Append the new <h1> element to the body
document.body.appendChild(newHeader);

// Additional Steps (if needed based on previous discussion)

// 6. Create DOM Elements Programmatically
const element = document.createElement("div");
console.log(element); // Check the console to see the created element

// 7. Add Elements to the DOM
document.body.append(element);

// 8. Create and Append an Unordered List
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

// 9. Add Elements to the DOM via innerHTML
const existingMain = document.getElementById("main");
existingMain.innerHTML = `
  <h1>Poodles!</h1>
  <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
  <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>
`;

// 10. Change Properties on DOM Nodes
const elementToChange = document.getElementById("main");
elementToChange.style.height = "300px";
elementToChange.style.backgroundColor = "#27647B";
elementToChange.textContent = "You've changed what's on the screen!";
elementToChange.style.fontSize = "24px";
elementToChange.style.marginLeft = "30px";
elementToChange.style.lineHeight = 2;
elementToChange.className = "pet-listing dog";
elementToChange.classList.remove("dog");
elementToChange.classList.add("cat", "sale");

// 11. Remove Elements from the DOM
const ulToRemove = document.getElementsByTagName("ul")[0];
const secondChild = ulToRemove.querySelector("li:nth-child(2)");
ulToRemove.removeChild(secondChild);

// To remove the entire ul
ulToRemove.remove();

// 12. Final Task
const p = document.createElement("p");
p.textContent = "Brandon Canonizado is the champion";
document.body.append(p);
