const Btn = document.getElementById("btn");
const h1 = document.getElementById("text");
const color = ["red", "black", "blue", "green","red", "black", "blue", "green"]; // Removed extra spaces

let i = 0;

function HandlClik() {
    document.body.style.backgroundColor = color[i];

    if (color[i] === "black") { // Change text color when background is black
        h1.style.color = "white";
        
    } else {
        h1.style.color = "black"; // Reset text color for other backgrounds
    }

    i = (i + 1) % color.length; // Increment index after setting colors
}

Btn.addEventListener("click", HandlClik);
