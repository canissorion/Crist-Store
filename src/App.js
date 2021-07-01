import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar.jsx';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import  ItemDetailContainer  from './Components/ItemDetails/ItemDetailContainer'


function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greetings="Daniel Campuzano" />
      <ItemDetailContainer />
    </div>

  );
}

export default App;

