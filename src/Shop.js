import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Cart from './Cart';
import Item from './Item';
import { v4 as uuid } from 'uuid';

const items = [
    { name: 'thing', price: '2', id: uuid() },
    { name: 'thingy', price: '3', id: uuid() },
    { name: 'thingus', price: '4', id: uuid() }
];

function Shop() {
    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
        console.log(id);
        const item = items.find((item) => item.id === id);
        setCart([...cart, item]);
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
