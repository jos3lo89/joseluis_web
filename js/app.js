let btn_abrir = document.getElementById("btn_abrir");
let nav_bar = document.querySelector(".header .nav_bar");

btn_abrir.addEventListener("click", () => {
    nav_bar.classList.toggle("activo");
})

// window.addEventListener("click", (event) => {
//     if (event.target == nav_bar) {
//         nav_bar.classList.toggle("activo");
//     }
// });

// document.addEventListener("click", (event) => {
//     if (event.target.closest(".header .nav_bar")) {
//         return 0;
//     }
//     nav_bar.classList.toggle("activo");
// })