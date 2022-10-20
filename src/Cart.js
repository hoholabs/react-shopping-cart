import { v4 as uuid } from 'uuid';

function Cart(props) {
    return (
        <div id="cart">
            <button>Cart</button>
            {props.cart.map((item) => {
                return (
                    <li key={uuid()}>
                        {item.name} {item.cartQty} {item.price * item.cartQty}
                    </li>
                );
            })}
            <div data-testid="total">Total :{props.total}</div>
            <button>Check Out</button>
        </div>
    );
}

export default Cart;
