import { v4 as uuid } from 'uuid';

function Cart(props) {
    return (
        <div id="cart">
            <button>Cart</button>
            {props.cart.map((item) => {
                return (
                    <li key={uuid()}>
                        {item.name} {item.qty} {item.price * item.qty}
                    </li>
                );
            })}
            Total :{props.total}
            <button>Check Out</button>
        </div>
    );
}

export default Cart;
