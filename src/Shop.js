import React, { useState } from 'react';
import Nav from './Nav';
import Cart from './Cart';
import Item from './Item';
import { v4 as uuid } from 'uuid';

const items = [
    { name: 'thing', price: 2.0, id: uuid() },
    { name: 'thingy', price: 3.5, id: uuid() },
    { name: 'thingus', price: 4.75, id: uuid() }
];

function Shop() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (id) => {
        const item = items.find((shopItem) => shopItem.id === id);

        if (cart.find((cartCheck) => cartCheck.id === id)) {
            // item is already in cart
            const index = cart.findIndex((cartItem) => cartItem.id === id);
            const newCart = [...cart];
            const item = newCart[index];

            item.qty += 1;
            setCart(newCart);
            setTotal(total + item.price);
            console.log(total);
        } else {
            // add item to cart
            item.qty = 1;
            setCart([...cart, item]);
            setTotal(total + item.price);
            console.log(total);
        }
    };

    return (
        <div className="Shop">
            <Nav />
            <div id="shop-page">
                {items.map((item) => {
                    return <Item {...item} key={item.id} add={addToCart} />;
                })}
                <Cart cart={cart} total={total} />
            </div>
            {console.log(cart)}
        </div>
    );
}

export default Shop;
