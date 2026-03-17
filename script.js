// Shopping Cart Functionality

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    clearCart() {
        this.items = [];
    }

    displayCart() {
        this.items.forEach(item => {
            console.log(`Item: ${item.name}, Price: $${item.price}`);
        });
        console.log(`Total: $${this.getTotal()}`);
    }
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem({ name: 'Apple', price: 0.99 });
cart.addItem({ name: 'Banana', price: 0.59 });
cart.displayCart();

// Remove an item
cart.removeItem('Apple');
cart.displayCart();

// Clear cart
cart.clearCart();
cart.displayCart();
