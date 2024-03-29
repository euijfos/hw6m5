import React, {useEffect} from 'react';
import Navbar from "../header/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../store/products/actions/productGetActions";
import {actionBusket} from "../../store/products/busketReducer/actionBusket";

const Product = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.productReducer.data)
    useEffect(() => {
        dispatch(fetchData())
    },[])

    const addBuskets = (product) => {
        dispatch(actionBusket(product))
    }
    return (
        <div>
            <Navbar/>
            <div style={{display:'flex', flexWrap:'wrap', gap:'30px'}}>
                {
                    product?.map((item) =>(
                        <div style={{border:'3px solid black',display:'flex', gap:'10px', height: '60px'}} key={item._id}>
                            <h1>{item.name}</h1>
                            <button onClick={() => addBuskets(item)} style={{height:'30px'}}>Купить</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;