function Item(props) {
    return (
        <li className="item">
            <p>{props.name}</p>
            <p>${props.price}</p>
            <input></input>
            <button>+</button>
            <button>-</button>
            <button
                onClick={(event) => {
                    props.add(props.id);
                }}
            >
                Add To Cart
            </button>
        </li>
    );
}

export default Item;
