function Cart(props) {
    return (
        <div id="cart">
            Cart
            {props.cart.map((item) => {
                return <li key={item.id}>{item.name}</li>;
            })}
        </div>
    );
}

export default Cart;
