function Item(props) {
    return (
        <li className="item">
            <p>{props.name}</p>
            <p>
                {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'USD'
                }).format(props.price)}
            </p>
            <form
                onSubmit={(event) => {
                    props.add(event, props.id);
                }}
            >
                <input
                    type="text"
                    name="qty"
                    value={props.shelfQty}
                    onChange={(event) => {
                        props.changeQty(event, props.id);
                    }}
                ></input>
                <button className="incdec-btn" type="button">
                    +
                </button>
                <button className="incdec-btn" type="button">
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
