// Define the stagger delay
let staggerDelay = 100; // in milliseconds

// CSS rules for each image with matching grid ID
const gridLayout = [
  { selector: '.image:nth-child(1)', gridArea: 'a', delayMultiplier: 1 },
  { selector: '.image:nth-child(2)', gridArea: 'b', delayMultiplier: 2 },
  { selector: '.image:nth-child(3)', gridArea: 'c', delayMultiplier: 3 },
  { selector: '.image:last-child', gridArea: 'd', delayMultiplier: 4 }
];

// Function to dynamically create and add CSS rules
function addCSSRules() {
  let styleSheet = document.styleSheets[0];//apply style to the grid
  //every grid has a css layout style applied
  gridLayout.forEach(layout => {//iterates each gridlayout
    let delay = rule.delayMultiplier * staggerDelay;//the delay is applied from our stagger value
    //our css rule for each layout placeholder in the grid area. animation delay applied to our delay value
    let cssLayout = `
      ${layout.selector} {
        grid-area: ${layout.gridArea};
        animation-delay: calc(${delay}ms);
      }
    `;
    styleSheet.insertRule(cssLayout, styleSheet.cssLayout.length);//apply the css to the stylesheet
  });
}

// Call the function to add CSS rules once the DOM content is loaded
document.addEventListener('DOMContentLoaded', addCSSLayout);