const getTotalProductos = function () {
  fetch("https://dummyjson.com/carts/user/5")
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        var $contadorCarritodo = document.querySelector('.main-nav__cart-count');
        $contadorCarritodo.textContent = json.carts[0].totalProducts;
    })
    .catch((razon) => {
        console.log(razon)
    })
};

export default getTotalProductos;