import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Cart from './components/Redux/Reducers/component/Cart';

function App() {
  const items=useSelector(state=>state.itemReducer.items)
  return (
    <div className="App">
    <h3>Items in my cart:{items.length}</h3>
    <Cart/>
    </div>
  );
}

export default App;
