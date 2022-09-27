// RANDOM COLOR CHANGER:

const button = document.querySelector("#button");

button.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue"
    const r = Math.floor(Math.random() * 255); //randomized color of red
    const g = Math.floor(Math.random() * 255); //randomized color of green
    const b = Math.floor(Math.random() * 255); //randomized color of blue
})



// 1. Create a button in the HTML markup!
// 2. Find the button in Js using document.queryselector 
// 3. Add an addEventlistner with one click to a one color
// 4. Randomize color using RGB code. RGB color code (0-255, 0-255, 0-255) 
