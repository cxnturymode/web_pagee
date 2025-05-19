document.addEventListener("DOMContentLoaded", function () {
    let currentNode = document.body; // Починаємо з <body>

    function navigateDOM(node) {
        let message = `Ви перебуваєте в елементі: ${node.nodeName}.`;
        let options = "";

        if (node.firstElementChild) {
            options += "\n1 - Перейти до першого дочірнього вузла.";
        }
        if (node.nextElementSibling) {
            options += "\n2 - Перейти до наступного сусіднього вузла.";
        }
        if (node.previousElementSibling) {
            options += "\n3 - Перейти до попереднього сусіднього вузла.";
        }
        if (node.parentElement) {
            options += "\n4 - Повернутися до батьківського вузла.";
        }
        options += "\n5 - Вийти з навігації.";

        let choice = prompt(message + options);

        if (choice === "1" && node.firstElementChild) {
            navigateDOM(node.firstElementChild);
        } else if (choice === "2" && node.nextElementSibling) {
            navigateDOM(node.nextElementSibling);
        } else if (choice === "3" && node.previousElementSibling) {
            navigateDOM(node.previousElementSibling);
        } else if (choice === "4" && node.parentElement) {
            navigateDOM(node.parentElement);
        } else if (choice === "5") {
            alert("Навігацію завершено.");
        } else {
            alert("Невірний вибір. Спробуйте ще раз.");
            navigateDOM(node);
        }
    }

    navigateDOM(currentNode);
});



  document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-cont");
  nav.classList.add("hidden");
});

function toggleNav() {
  const nav = document.querySelector(".nav-cont");
  nav.classList.toggle("hidden");
}