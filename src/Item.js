function Item(props) {
    return (
        <li className="item">
            <p>{props.name}</p>
            <p>${props.price}</p>
            <form
                onSubmit={(event) => {
                    props.add(event, props.id);
                }}
            >
                <input
                    type="text"
                    name="qty"
                    value={props.qty}
                    onChange={(event) => {
                        props.changeQty(event, props.id);
                    }}
                ></input>
                <button type="button">+</button>
                <button type="button">-</button>
                <button type="submit">Add To Cart</button>
            </form>
        </li>
    );
}

export default Item;
