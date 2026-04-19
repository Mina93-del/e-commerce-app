fetch('product.json')
    .then(res => res.json())
    .then(data => {
        updateCartUI();
    });

function updateCartUI() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const table = document.querySelector("tbody");
    const sub = document.querySelector(".subtotal");
    table.innerHTML = "";
    let sum = 0;

    if (cart.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center; padding:15px;">
                    No items in cart
                </td>
            </tr>
        `;
        sub.innerHTML = "";
        return;
    }

    cart.forEach((item, index) => {
        sum += item.price * item.quantity;

        table.innerHTML += `
            <tr>
                <td>
                    <a class="remove-product" data-index="${index}">
                        <i class="far fa-times-circle"></i>
                    </a>
                </td>

                <td><img src="${item.img}" width="50"></td>

                <td>${item.name}</td>

                <td>$${item.price}</td>

                <td>
                    <input type="number"
                        class="inc-dec"
                        data-index="${index}"
                        value="${item.quantity}"
                        min="1">
                </td>

                <td>$${item.price * item.quantity}</td>
            </tr>
        `;
    });

    sub.innerHTML = `
        <h3>Cart Totals</h3>
        <table>
            <tr>
                <td>Subtotal</td>
                <td>$${sum}</td>
            </tr>
            <tr>
                <td>Shipping</td>
                <td>Free</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>$${sum}</strong></td>
            </tr>
        </table>
        <button class="normal">Proceed to Checkout</button>
    `;

    attachEvents();
}

function attachEvents() {
    document.querySelectorAll(".inc-dec").forEach(input => {
        input.addEventListener("input", (e) => {
            const index = e.target.dataset.index;
            const value = Number(e.target.value);
            updateQuantity(index, value);
        });
    });

    document.querySelectorAll(".remove-product").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            removeItem(index);
        });
    });
}


function updateQuantity(index, value) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (value < 1) value = 1;
    cart[index].quantity = value;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}


function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}