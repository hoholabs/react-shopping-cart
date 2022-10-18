import { v4 as uuid } from 'uuid';

function Cart(props) {
    return (
        <div id="cart">
            Cart
            {props.cart.map((item) => {
                return (
                    <li key={uuid()}>
                        {item.name} qty:{item.qty}
                    </li>
                );
            })}
        </div>
    );
}

export default Cart;
