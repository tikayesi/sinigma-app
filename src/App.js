import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import TwoColumnsLayout from './src/layout/TwoColumnsLayout';

function App() {
  return (
    <Container fluid>
        <Router>
          <TwoColumnsLayout />
        </Router>
      </Container>
  );
}

export default App;
