const initialState = {
    items: {},
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_CART': {
            //const allPizzas = [].concat.apply([], items); // хак для объединения в один массив без reduce

            return {
                ...state,
                items: newItems,
            };
        }

        default:
            return state;
    }
}

export default cart;