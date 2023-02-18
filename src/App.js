import './App.css';
import Header from './components/Header';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
import Main from './components/Main';




function App() {
  return (
<Container className='body'>
  <Header />
  <Main />
  <Footer />
</Container>
  );
}

export default App;
