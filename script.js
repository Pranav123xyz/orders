const menu = document.getElementById("menu_burger");
const modal = document.querySelector(".nav_mobile_view");

menu.addEventListener("click", () => {
    const img = menu.querySelector('img');
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
    img.src = (modal.style.display === "block") ? "./Assets/cross.png" : "./Assets/menu-burger.png";
    modal.classList.toggle("visible");
    document.body.classList.toggle("modal-open");
});

const modalList = document.querySelectorAll(".nav_mobile_view li a");

modalList.forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "none";
        const img = menu.querySelector('img');
        img.src = "./Assets/menu-burger.png";
        modal.classList.remove("visible");
        document.body.classList.remove("modal-open");
    });
});
