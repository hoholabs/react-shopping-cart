function Item(props) {
    return (
        <li className="item">
            <form
                onSubmit={(event) => {
                    props.add(event, props.id);
                }}
            >
                <h2 className="item-name">{props.name}</h2>
                <p className="item-price">
                    {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(props.price)}
                </p>

                <input
                    type="text"
                    name="qty"
                    value={props.shelfQty}
                    onChange={(event) => {
                        props.changeQty(event, props.id);
                    }}
                ></input>
                <button
                    className="inc-btn"
                    type="button"
                    onClick={() => {
                        props.incdec(props.id, 1);
                    }}
                >
                    +
                </button>
                <button
                    className="dec-btn"
                    type="button"
                    onClick={() => {
                        props.incdec(props.id, -1);
                    }}
                >
                    -
                </button>
                <button className="add-btn" type="submit">
                    Add To Cart
                </button>
            </form>
        </li>
    );
}

export default Item;
