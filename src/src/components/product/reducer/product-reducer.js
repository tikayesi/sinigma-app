import { EDIT_BUTTON, FETCH_COMPLETE, SET_LOADING } from "./Action";

const initialState = {
    isLoading : true,
    products : []
}

function productReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case EDIT_BUTTON:
            const product = state.products.find((product) => product.id === payload);
        return {...state, form: {...product}};
        case SET_LOADING:
            return {...state, isLoading: true};
        case FETCH_COMPLETE:
            console.log("payload");
            console.log(payload.data);
            return {...state, products: [payload.data]};
        default:
            return {...state}
    }
}

export default productReducer;