// Créez une classe **Client** qui peut **ajouter des articles** à un panier d'achat. Créez également une classe **Article** avec des propriétés telles que le **nom**, le **prix**, et la **quantité en stock**. Permettez au client de **passer une commande** et de **mettre à jour le stock d'articles**.

import Client from "./Client.js";
import Article from "./Article.js"

const produits = [
    new Article("t-shirt", 20.49, 100),
    new Article("sweatshirt", 50.89, 50),
    new Article("pull", 45.99, 150),
    new Article("shaussetes", 15.99, 250),
];

const unClient = new Client("DUPONT", "John");
let produitSelectionne = null;

document.addEventListener("DOMContentLoaded", () => {
    const productCartTBody = document.querySelector("tbody#product-cart");
    productCartTBody.innerHTML = "";

    produits.forEach((p) => {
        const newTRElement = 
        `<tr data-prod-id="${p.id}">
            <td>${p.id}</td>
            <td>${p.nom}</td>
            <td>${p.prix.toFixed(2)}€</td>
            <td>${p.stock}</td>
            <td>
            <button class="prod-sub" id="prod-${p.id}-sub">-</button>
            <span id="prod-${p.id}-qty">0</span>
            <button class="prod-add" id="prod-${p.id}-add">+</button>
            </td>
        </tr>`;

        productCartTBody.innerHTML += newTRElement;
    });

    document.querySelectorAll("button.prod-sub").forEach((button) => {
        button.addEventListener("click", (e) => {
            // (e) never used ??
            const prodId = button.parentElement.parentElement.dataset.prodId;

            const produitCherche = produits.find((p) => p.id === +prodId);
            if (produitCherche) {
                unClient.removeProduct(produitCherche);
                button.parentElement.querySelector("span").textContent =
                    unClient.cart.find((p) => p.product === produitCherche).quantity;
            }
        });
    });

    document.querySelectorAll("button.prod-add").forEach((button) => {
        button.addEventListener("click", (e) => {
            const prodId = button.parentElement.parentElement.dataset.prodId;

            const produitCherche = produits.find((p) => p.id === +prodId);
            if (produitCherche) {
                unClient.addProduct(produitCherche);
                button.parentElement.querySelector("span").textContent =
                    unClient.cart.find((p) => p.product === produitCherche).quantity;
            }
        });
    });
});
