const initialState ={
    basket:[]
}

const busketReducer =(state=initialState, action) => {
    switch (action.type){

        case 'ADD_BUSKETS': {
            const newBasket = [...state.basket , action.payload]
            return {
                ...state, basket: newBasket
            }

        }
        default:
            return state
    }
}
export default busketReducer