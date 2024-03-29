const defultState = {
    data: []
}

const productReducer =(state=defultState, action) => {
    switch (action.type){
        case "FETCH_DATA":
            return {
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}
export default productReducer