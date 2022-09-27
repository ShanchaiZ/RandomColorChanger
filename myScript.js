// RANDOM COLOR CHANGER:
const button = document.querySelector("#button");
const h2 = document.querySelector("h2");

//Button Function:
button.addEventListener("click", function () {
    const newColor = makeRandomColor (); // callback function

    document.body.style.backgroundColor = newColor; //and then will be displayed as the body 
    h2.innerText = newColor; //Overwrites the h2 text with the random generated values of rgb
})


//Standalone Function: Generates the randomized values of r, g, and b:
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255); //randomized color value of red
    const g = Math.floor(Math.random() * 255); //randomized color value of green
    const b = Math.floor(Math.random() * 255); //randomized color value of blue
    return `rgb(${r}, ${g}, ${b})`; // new color will the concatination of r,g,b
}




//Pseudocode:
// 1. Create a button in the HTML markup!
// 2. Find the button in Js using document.queryselector
// 3. Add an addEventlistner with one click to a one color
// 4. Randomize color using RGB code. RGB color code (0-255, 0-255, 0-255) using Math.floor(Math.random() * 255 different shades)
// 5. Place the r,g,b variables in a string template
// 6. then display the newcolor as the body of the document
//-----------------------------------------------------------------
// Displaying the random numbers of RGB in the H2:
//  7. Overwrite the placeholder text in h2 with h2.innertext and make it equal to the new color values generated!
// 8. Refractor the code where the randomized values will be in its own function under a new variable and it will be the addEventlisteners buttons callback function