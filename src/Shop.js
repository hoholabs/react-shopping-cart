import React, { useState } from 'react';
import Nav from './Nav';
import Cart from './Cart';
import Item from './Item';
import { v4 as uuid } from 'uuid';

const items = [
    { name: 'thing', price: 2.0, qty: 1, id: uuid() },
    { name: 'thingy', price: 3.5, qty: 1, id: uuid() },
    { name: 'thingus', price: 4.75, qty: 1, id: uuid() }
];

function Shop() {
    const [shelf, setShelf] = useState(items);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (event, id) => {
        event.preventDefault();
        const cartItem = items.find((shopItem) => shopItem.id === id);

        const data = new FormData(event.target);
        const inputQty = parseInt(data.get('qty'));

        if (cart.find((cartCheck) => cartCheck.id === id)) {
            // item is already in cart
            const index = cart.findIndex((cartItem) => cartItem.id === id);
            const newCart = [...cart];
            const cartItem = newCart[index];
            cartItem.qty += inputQty;
            setCart(newCart);
            setTotal(total + cartItem.price * inputQty);
        } else {
            // add item to cart
            cartItem.qty = inputQty;
            setCart([...cart, cartItem]);
            setTotal(total + cartItem.price * inputQty);
        }
    };

    const addToCart2 = (event, id) => {
        event.preventDefault();
        console.log(event);
        const shelfItem = items.find((item) => item.id === id);

        const data = new FormData(event.target);
        const inputQty = parseInt(data.get('qty'));

        if (cart.find((cartCheck) => cartCheck.id === id)) {
            // item is already in cart
            //update cart quntity
            console.log('item already in cart');
            const index = cart.findIndex((cartItem) => cartItem.id === id);
            const newCart = [...cart];
            const cartItem = newCart[index];
            cartItem.qty += inputQty;
            setCart(newCart);
            setTotal(total + cartItem.price * inputQty);
        } else {
            //item is not already in cart
            // add item to cart
            console.log('item not in cart');
            console.log(shelfItem);
            shelfItem.qty = inputQty;
            setCart([...cart, shelfItem]);
            setTotal(total + shelfItem.price * inputQty);
        }
    };

    const changeQty = (event, id) => {
        console.log(event.target.value);
        const index = shelf.findIndex((shelfItem) => shelfItem.id === id);
        const newShelf = [...shelf];
        newShelf[index].qty = event.target.value;
        setShelf(newShelf);
        console.log(shelf[index]);
    };

    return (
        <div className="Shop">
            <Nav />
            <div id="shop-page">
                {items.map((item) => {
                    return (
                        <Item
                            {...item}
                            key={item.id}
                            add={addToCart2}
                            changeQty={changeQty}
                        />
                    );
                })}
                <Cart cart={cart} total={total} />
            </div>
        </div>
    );
}

export default Shop;
