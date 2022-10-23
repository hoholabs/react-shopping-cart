import { v4 as uuid } from 'uuid';

function Cart(props) {
    return (
        <div id="cart">
            <button id="cart-button">Cart</button>
            {props.cart.map((item) => {
                return (
                    <ul className="cart-item" key={uuid()}>
                        <li>{item.name} </li>
                        <li>x {item.cartQty}</li>
                        <li>
                            {' '}
                            {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(item.price * item.cartQty)}
                        </li>
                    </ul>
                );
            })}
            <ul id="total" className="cart-item" data-testid="total">
                <li>Total : </li>
                <li></li>
                <li>
                    {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(props.total)}
                </li>
            </ul>
            <button id="checkout-button" onClick={props.checkOut}>
                Check Out
            </button>
        </div>
    );
}

export default Cart;
