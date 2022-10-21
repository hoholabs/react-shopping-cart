import React, { useState } from 'react';
import Nav from './Nav';
import Item from './Item';
import { v4 as uuid } from 'uuid';

const items = [
    { name: 'thing', price: 2.0, shelfQty: 1, cartQty: 0, id: uuid() },
    { name: 'thingy', price: 3.5, shelfQty: 1, cartQty: 0, id: uuid() },
    { name: 'thingamajig', price: 1.25, shelfQty: 1, cartQty: 0, id: uuid() },
    { name: 'thingus', price: 4.75, shelfQty: 1, cartQty: 0, id: uuid() }
];

function Shop() {
    const [shelf, setShelf] = useState(items);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    // const addToCartOld = (event, id) => {
    //     event.preventDefault();
    //     const cartItem = items.find((shopItem) => shopItem.id === id);

    //     const data = new FormData(event.target);
    //     const inputQty = parseInt(data.get('qty'));

    //     if (cart.find((cartCheck) => cartCheck.id === id)) {
    //         // item is already in cart
    //         const index = cart.findIndex((cartItem) => cartItem.id === id);
    //         const newCart = [...cart];
    //         const cartItem = newCart[index];
    //         cartItem.qty += inputQty;
    //         setCart(newCart);
    //         setTotal(total + cartItem.price * inputQty);
    //     } else {
    //         // add item to cart
    //         cartItem.qty = inputQty;
    //         setCart([...cart, cartItem]);
    //         setTotal(total + cartItem.price * inputQty);
    //     }
    // };

    const addToCart = (event, id) => {
        event.preventDefault();

        const shelfItem = items.find((item) => item.id === id);

        const data = new FormData(event.target);
        const inputQty = parseInt(data.get('qty'));

        if (cart.find((cartCheck) => cartCheck.id === id)) {
            // item is already in cart
            //update cart quntity

            const index = cart.findIndex((cartItem) => cartItem.id === id);
            const newCart = [...cart];
            const cartItem = newCart[index];
            cartItem.cartQty += inputQty;
            setCart(newCart);
            setTotal(total + cartItem.price * inputQty);
        } else {
            //item is not already in cart
            // add item to cart

            shelfItem.cartQty = inputQty;
            setCart([...cart, shelfItem]);
            setTotal(total + shelfItem.price * inputQty);
        }

        const shelfReset = [...shelf];
        shelfReset.forEach((item) => {
            item.shelfQty = 1;
        });
        setShelf(shelfReset);
    };

    const changeQty = (event, id) => {
        const index = shelf.findIndex((shelfItem) => shelfItem.id === id);
        const newShelf = [...shelf];
        newShelf[index].shelfQty = event.target.value;
        setShelf(newShelf);
    };

    const checkOut = () => {
        alert('Check out does not function');
    };

    return (
        <div className="Shop">
            <Nav cart={cart} total={total} checkOut={checkOut} />
            <div id="shop-page">
                {items.map((item) => {
                    return (
                        <Item
                            {...item}
                            key={item.id}
                            add={addToCart}
                            changeQty={changeQty}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Shop;
