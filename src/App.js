import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Body from './components/Body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Container fluid className='home'>
        <Header />
        <Route path='/About' component={About}/>
        <Route path='/Resume' component={Resume}/>
        <Route path='/Projects' component={Projects}/>
        <Route path='/Contact' component={Contact}/>
        <Route exact path='/' component={Body}/>

      </Container>
    </Router>
  );
}

export default App;
