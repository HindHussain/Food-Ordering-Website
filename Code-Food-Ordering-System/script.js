const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const item = this.getAttribute("data-item");
        alert(item + " added to cart!");
    });
});


function toggleMenu() {
    const menu = document.getElementById("navMenu");

    if (!menu) {
        console.error("navMenu not found in this page");
        return;
    }

    menu.classList.toggle("show");
}
