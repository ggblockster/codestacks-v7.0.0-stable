const yearTag = document.getElementById("year");
const date = new Date();

let year = date.getFullYear();
yearTag.textContent = year;


const openTable = document.getElementById("openTable");
const table = document.getElementById("table");
const closeTableBtn = document.getElementById("closeBar");


openTable.addEventListener("click", () => {
    table.classList.add("open");
});

closeTableBtn.addEventListener("click", () => {
    table.classList.remove("open");
});

const table2 = document.getElementById("table2");
if (window.innerWidth <= 768) {
    table2.classList.remove("open");
    openTable.classList.add("open");
} else {
    table2.classList.add("open");
    openTable.classList.remove("open");
}


document.querySelectorAll("[data-go]").forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = btn.dataset.go;
    });
});