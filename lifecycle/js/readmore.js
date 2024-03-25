function readMore() {
    let showText = document.getElementById("showText");
    let buttonText = document.getElementById("button");

    if (showText.style.display === "none") {
        showText.style.display = "inline";
        buttonText.innerText = "Read Less";
    } 
    else {
        showText.style.display = "none";
        buttonText.innerText = "Read More";
    }
}