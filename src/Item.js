function Item(props) {
    return (
        <div>
            {props.name}:{props.price}
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
        </div>
    );
}

export default Item;
