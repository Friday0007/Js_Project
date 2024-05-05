let h2 = document.querySelector("h2");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");

decrease.addEventListener("click", () => {
    let store = h2.innerText--;
    h2.value = store;
})

reset.addEventListener("click", () => {
    h2.innerText = 0;
})

increase.addEventListener("click", () => {
    let store = h2.innerText++;
    h2.value = store;
})
