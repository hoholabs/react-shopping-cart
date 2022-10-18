import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Cart from './Cart';
import Item from './Item';
import { v4 as uuid } from 'uuid';

const items = [
    { name: 'thing', price: '2.00', id: uuid() },
    { name: 'thingy', price: '3.50', id: uuid() },
    { name: 'thingus', price: '4.75', id: uuid() }
];

function Shop() {
    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
        console.log(id);
        const item = items.find((shopItem) => shopItem.id === id);

        if (cart.find((cartCheck) => cartCheck.id === id)) {
            // item is already in cart
            const index = cart.findIndex((cartItem) => cartItem.id === id);
            const newCart = cart;

            // START
            // HERE
            // IDK IT DONT WORK

            newCart[index].qty += 1;
            setCart(newCart);
        } else {
            item.qty = 1;
            setCart([...cart, item]);
        }
    };

    return (
        <div className="Shop">
            <Nav />
            <Cart cart={cart} />
            {items.map((item) => {
                return <Item {...item} key={item.id} add={addToCart} />;
            })}
        </div>
    );
}

export default Shop;
