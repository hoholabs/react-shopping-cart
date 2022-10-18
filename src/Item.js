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
                <input name="qty" defaultValue="1"></input>
                <button>+</button>
                <button>-</button>
                <button
                    type="submit"
                    // onClick={(event) => {
                    //     props.add(props.id, event);
                    // }}
                >
                    Add To Cart
                </button>
            </form>
        </li>
    );
}

export default Item;
