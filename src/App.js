import { BrowserRouter, BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import { Login } from './src/components/auth/Login';
import TwoColumnsLayout from './src/layout/TwoColumnsLayout';

function App() {
  const routeGuard = (Component) => {
    console.log(sessionStorage.getItem('token'));
    if (sessionStorage.getItem('token')) {
        return <Component/>
    } else {
        return <Navigate to="/"></Navigate>
    }
};
  return (
    <Container fluid>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home/*" element={routeGuard(TwoColumnsLayout)} />
        </Routes>
          {/* <TwoColumnsLayout /> */}
        </BrowserRouter>
      </Container>
  );
}

export default App;
