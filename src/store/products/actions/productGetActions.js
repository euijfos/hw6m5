import dataJson from '../../../data/product.json'
export const fetchData =() => {
    return async (dispatch) => {
        dispatch({type:'FETCH_DATA', payload:dataJson})
    }
}