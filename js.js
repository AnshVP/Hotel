
function itemover(text, dash) {
    text.style.fontSize = "20px";
    dash.style.visibility = "visible";
    dash.style.width = "100%";
}
function itemout(text, dash) {
    text.style.fontSize = "large";
    dash.style.visibility = "hidden";
    dash.style.width = "0%";
}

function showDesc(desc) {
    desc.style.opacity = "85%";
    desc.style.animationName = "show-desc";
    desc.style.animationDuration = "2s";
    desc.style.animationFillMode = "forwards";
    desc.style.textAlign = "center";
    desc.style.display = "block";
    desc.style.backgroundColor = "rgb(31, 68, 189)";
    desc.style.backgroundColor = "black";
    desc.style.color = "aliceblue"
    desc.style.fontFamily = "'Ubuntu Mono', monospace";

}
function hideDesc(desc) {
    desc.style.display = "none";
}
