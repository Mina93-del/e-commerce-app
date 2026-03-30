const menu = document.getElementById("menu");
const nav = document.getElementById("navbar");

if(menu){
menu.addEventListener('click' , ()=> {
    nav.classList.toggle('active');
})
}
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menu.contains(e.target)) {
        nav.classList.remove("active");
    }
});