
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Searchpage from './components/Searchpage';

function App() {
  return (

<>
<Routes>
  <Route path='/'  element={<Homepage/>}/>
  <Route path='/search'  element={<Searchpage/>}/>
</Routes>
</>
  );
}

export default App;
