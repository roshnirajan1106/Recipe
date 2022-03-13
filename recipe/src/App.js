import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar />
    <ThemeSelector />
      <switch>
        <Route  exact path="/">
          <Home />
        </Route>
        <Route path ="/create">
          <Create />
        </Route>
        <Route path ="/search">
          <Search />
        </Route>
        <Route path ="/recipe/:id">
          <Recipe />
        </Route>
      </switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
