import { Component } from "react";
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Login } from "../components/auth/Login";
import CustomerList from "../components/customer/component/CustomerList";
import Home from "../components/Home";
import Product from "../components/product/Product";

class Routers extends Component{

    // routeGuard = (Componen) => {
    //     if (sessionStorage.getItem('token')) {
    //         console.log("token");
    //         return <Componen/>
    //     } else {
    //         console.log("no token");
    //         return <Navigate to="/"></Navigate>
    //     }
    // };
    render(){
        return(
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/customers" element={<CustomerList/>} />
            <Route path="/products" element={<Product/>}/>
          </Routes>
        )
    }
}

export default Routers;
