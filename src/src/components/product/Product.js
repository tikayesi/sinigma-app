import { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import ProductForm from "./component/ProductForm";
import ProductList from "./component/ProductList";

class Product extends Component{
    render(){
        return(
            <Routes>
             <Route path="/" element={<ProductList/>} />
            <Route path="/form" element={<ProductForm/>} />
            <Route path="/form/:id" element={<ProductForm/>} />
          </Routes>
        )
    }
}

export default Product;