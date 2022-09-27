// RANDOM COLOR CHANGER:

const button = document.querySelector("#button");
button.addEventListener("click", function () {
    const r = Math.floor(Math.random() * 255); //randomized color value of red
    const g = Math.floor(Math.random() * 255); //randomized color value of green
    const b = Math.floor(Math.random() * 255); //randomized color value of blue
    const newColor = `rgb(${r}, ${g}, ${b})`; // new color will the concatination of r,g,b
    document.body.style.backgroundColor = newColor; //and then will be displayed as the body 
})



//Pseudocode:
// 1. Create a button in the HTML markup!
// 2. Find the button in Js using document.queryselector
// 3. Add an addEventlistner with one click to a one color
// 4. Randomize color using RGB code. RGB color code (0-255, 0-255, 0-255) using Math.floor(Math.random() * 255 different shades)
// 5. Place the r,g,b variables in a string template
// 6. then display the newcolor as the body of the document 
