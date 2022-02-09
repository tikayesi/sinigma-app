import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Container} from 'reactstrap';
import './App.css';
import {Login} from './src/components/auth/Login';
import TwoColumnsLayout from './src/layout/TwoColumnsLayout';
import RequireAuth from "./src/navigation/RequireAuth";
import CustomerList from "./src/components/customer/component/CustomerList";
import Product from "./src/components/product/Product";

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
                        <Route path="customers" element={<CustomerList/>} />
                        <Route path="products" element={<Product/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
