import { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import CustomerList from "../components/customer/component/CustomerList";
import Home from "../components/Home";
import Product from "../components/product/Product";

class Routers extends Component{
    
    render(){
        return(
            <Routes>
             <Route exact path="/" element={<Home/>} />
            <Route path="/customers" element={<CustomerList/>} />
            <Route path="/products/*" element={<Product/>}/>           
          </Routes>
        )
    }
}

export default Routers;