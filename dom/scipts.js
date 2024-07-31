document.addEventListener('DOMContentLoaded', (event) => {
        updateTotal();
});

function updateTotal() {
        const cartItems = document.querySelectorAll('.cart-item');
            let total = 0;

                cartItems.forEach(item => {
                            const price = item.querySelector('.item-price').getAttribute('data-price');
                                    const quantity = item.querySelector('.quantity').ariaValueMax;
                                            total += price * quantity;
                });

                    document.getElementById('total-price').innerText = `${total}€`;
                    }

                    function removeItem(button) {
                            const cartItem = button.parentElement;
                                cartItem.remove();
                                    updateTotal();
                    }

                    function toggleLike(button) {
                            button.classList.toggle('liked');
                    }
                    
                    
