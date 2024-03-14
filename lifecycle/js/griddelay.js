// Define the stagger delay
let staggerDelay = 100; // in milliseconds

// Define the CSS rules for each image
const gridLayout = [
  { selector: '.image:nth-child(1)', gridArea: 'a', delayMultiplier: 1 },
  { selector: '.image:nth-child(2)', gridArea: 'b', delayMultiplier: 2 },
  { selector: '.image:nth-child(3)', gridArea: 'c', delayMultiplier: 3 },
  { selector: '.image:last-child', gridArea: 'd', delayMultiplier: 4 }
];

// Function to dynamically create and add CSS rules
function addCSSRules() {
  let styleSheet = document.styleSheets[0];
  gridLayout.forEach(layout => {
    let delay = rule.delayMultiplier * staggerDelay;
    let cssLayout = `
      ${layout.selector} {
        grid-area: ${layout.gridArea};
        animation-delay: calc(${delay}ms);
      }
    `;
    styleSheet.insertRule(cssLayout, styleSheet.cssLayout.length);
  });
}

// Call the function to add CSS rules once the DOM content is loaded
document.addEventListener('DOMContentLoaded', addCSSLayout);