/* ccreate the read more and read less button to interact with */
function readMore() {
    let showText = document.getElementById("showText");
    let buttonText = document.getElementById("button");
    //switch to read less display once texts are shown
    if (showText.style.display === "none") {
        showText.style.display = "inline";
        buttonText.innerText = "Read Less";
    } 
    else {
        showText.style.display = "none";
        buttonText.innerText = "Read More";
    }
}

/* read the id of the text buttons */
function readMore(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}