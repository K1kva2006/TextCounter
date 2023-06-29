const div = document.getElementById("div");
const text = document.getElementById("text");
const button = document.getElementById("button");

const sum = document.createElement("p");
div.appendChild(sum);
sum.textContent = "0";
sum.classList.add("sum");

button.onclick = () => {
    sum.textContent = text.value.length;
    text.value.length <= 50 
        ? (sum.style.color = "darkblue")
        : (sum.style.color = "darkred");
};
