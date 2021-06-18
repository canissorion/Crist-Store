import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemList/ItemList'

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListContainer />
    </div>
  );
}

export default App;
