import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {Container} from 'reactstrap';
import './App.css';
import {Login} from './src/components/auth/Login';
import TwoColumnsLayout from './src/layout/TwoColumnsLayout';
import RequireAuth from "./src/navigation/RequireAuth";
import CustomerList from "./src/components/customer/component/CustomerList";
import ProductList from "./src/components/product/component/ProductList";
import ProductForm from "./src/components/product/component/ProductForm";

function App() {
    return (
        <Container fluid>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login/>}/>
                    <Route
                        path="/protected/*"
                        element={
                            <RequireAuth redirectTo="/">
                                <TwoColumnsLayout/>
                            </RequireAuth>
                        }
                    >
                        <Route path="customers" element={<CustomerList/>}/>
                        <Route path="products" element={<Outlet/>}>
                            <Route index element={<ProductList/>}/>
                            <Route path="form" element={<ProductForm/>}/>
                            <Route path="form/:id" element={<ProductForm/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
