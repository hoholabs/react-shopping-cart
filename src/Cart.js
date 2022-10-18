function Cart(props) {
    return (
        <div id="cart">
            Cart
            {props.cart.map((item) => {
                return (
                    <li key={item.id}>
                        {item.name} qty:{item.qty}
                    </li>
                );
            })}
        </div>
    );
}

export default Cart;
