import './App.css';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';
import Landing from './components/Landing';

function App() {
  return (
    <Container maxWidth='sm'>
      <Route exact path='/' component={Landing} />
      <Route path='/RegisterForm'>
        <RegisterForm />
      </Route>
      <Route path='/Login'>
        <Login />
      </Route>
    </Container>
  );
}

export default App;
