import React, {useEffect} from 'react';
import Navbar from "../header/Navbar";
import {useDispatch, useSelector} from "react-redux";

const Basket = () => {
    const basket = useSelector((state) => state.basketReducer.basket)
    return (
        <div>
            <Navbar/>
            {
                <div style={{display:'flex', flexWrap:'wrap', gap:'30px'}}>
                    {
                        basket?.map((item) =>(
                            <div style={{border:'3px solid black',display:'flex', gap:'10px', height: '60px'}} key={item._id}>
                                <h1>{item.name}</h1>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default Basket;