import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.component';
import Home from './page/homePage/home.page';
import Ruta from './components/ruta/ruta.component';
import {Switch, Route} from 'react-router-dom'
import Footer from './components/footer/footer.component';
import About from './page/about/about.component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/sobre' component={About}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
