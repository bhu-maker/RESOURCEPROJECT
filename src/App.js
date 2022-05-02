 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
 import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { Navigation } from './navigation';
import {Home} from './home'
import {Newform} from  './new'
import { Edit } from './edit';
import {Read} from './read';
import {Short} from './short'
import { Delete } from './delete';

 const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" exact element={<Home/>}>
      </Route>
      <Route path="/new" exact element={<Newform/>}></Route>
      <Route path="/update/:pk" exact element={<Edit/>}></Route>
      <Route path="/read/:pk" exact element={<Read/>}></Route>
      <Route path="/short" exact element={<Short/>}></Route>
      <Route path="/del/:pk" exact element={<Delete/>}></Route>
    
      </Routes>
    </BrowserRouter>
    </>
  )
    
}


export default App;
