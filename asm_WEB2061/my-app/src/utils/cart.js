let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

export const addToCart = (newBook, _function) => {
    const exsitBook = cart.find((item) => item.id == newBook.id);
    if (!exsitBook) {
        cart.push(newBook);
    } else {
        exsitBook.quantity += newBook.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    _function();
};

export const increaseQty = (id, next) => {
    cart.find(item => item.id == id).quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
};
export const decreaseQty = (id, next) => {
    const currentBooks = cart.find((item) => item.id == id);
    currentBooks.quantity--;

    if (currentBooks.quantity < 1) {
        const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
        if (confirm) {
            cart = cart.filter((item) => item.id !== id);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const removeItemInCart = (id, next) => {
    // console.log(id);
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
    if (confirm) {
        cart = cart.filter(item => item.id !== Number(id))
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}