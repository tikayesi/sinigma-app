import { Component } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { createStore } from "redux";
import ProductForm from "./component/ProductForm";
import ProductList from "./component/ProductList";
import productReducer from "./reducer/product-reducer";

const productStore = createStore(productReducer);
class Product extends Component{
    render(){
        return(
            <Provider store={productStore}>
            <Routes>
             <Route path="/" element={<ProductList/>} />
            <Route path="/form" element={<ProductForm/>} />
            <Route path="/form/:id" element={<ProductForm/>} />
          </Routes>
          </Provider>
        )
    }
}

export default Product;