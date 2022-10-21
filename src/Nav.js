import { Link } from 'react-router-dom';
import Cart from './Cart';

function Nav(props) {
    return (
        <nav>
            <Link to="/">Home</Link>

            <Link to="/shop">Shop</Link>

            <Cart
                cart={props.cart}
                total={props.total}
                checkOut={props.checkOut}
            />
        </nav>
    );
}

export default Nav;
