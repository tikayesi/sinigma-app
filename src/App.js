import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Container} from 'reactstrap';
import './App.css';
import {Login} from './src/components/auth/Login';
import TwoColumnsLayout from './src/layout/TwoColumnsLayout';
import RequireAuth from "./src/navigation/RequireAuth";

function App() {
    return (
        <Container fluid>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route
                        path="/protected/*"
                        element={
                            <RequireAuth redirectTo="/">
                                <TwoColumnsLayout/>
                            </RequireAuth>
                        }
                    >
                    </Route>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
