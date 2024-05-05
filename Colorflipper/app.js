let btn = document.getElementById("btn");
let show = document.getElementById("show");

btn.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    show.innerText = `Background Color: ${red},${green},${blue}`;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})