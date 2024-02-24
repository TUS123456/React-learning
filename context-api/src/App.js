import './App.css';
import Product  from '../src/Component/Product';
import { useContext } from 'react';
import { UserContext } from './Context/Context';
import Cart from './Component/Cart';

function App() {
  const userstate=useContext(UserContext);
  console.log(userstate);
  return (
    <div className="App">
     <Product name='I phone Pro Max' price={10963551} />
     <Product name='Televison' price={1054420} />
     <Product name='Washing Machine' price={1006572} />
     <Product name='Grinder' price={100268} />
     
     <Cart/>
     </div>


  );
}

export default App;
