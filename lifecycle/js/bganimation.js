const bgAnimation = document.getElementById("bgAnimation");

const numColorBoxes = 400;
//creating a loop that will cycle through the number of boxes in our animation
for(let i = 0; i < numColorBoxes; i++) {
    const colorBox = document.createElement('div'); //creating a div for our boxes
    colorBox.classList.add('colorBox'); //apply the boxes collected in the loop
    bgAnimation.append(colorBox); //add the background animation inside the loop of boxes
}