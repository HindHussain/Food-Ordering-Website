const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const item = this.getAttribute("data-item");
        alert(item + " added to cart!");
    });
});