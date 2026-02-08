const btn = document.getElementById("btn");
const colorBox = document.getElementById("colorBox");

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color = color+letters[Math.floor(Math.random()*16)];
    }
    return color;
}
btn.addEventListener("click", function(){
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorBox.textContent = randomColor;
});