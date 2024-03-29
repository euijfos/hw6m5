import React from 'react';
import Product from "../products/Product";
import Basket from "../basket/Basket";
import {Route, Routes} from "react-router-dom-v5-compat";

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Product/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/product' element={<Product/>}/>
        </Routes>
    );
};

export default Pages