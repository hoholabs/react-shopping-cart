function Item(props) {
    return (
        <div>
            {props.name}:{props.price}{' '}
            <button
                onClick={(event) => {
                    props.add(props.id);
                }}
            >
                +
            </button>
        </div>
    );
}

export default Item;
