
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Show from './components/Show';
import Details from './components/Details';
import Update from './components/Update';
import Pokemon from './components/Pokemon';
function App() {
  return (
    <>
      <>
        <Routes>
          <Route path='' element={<Main />}></Route>
          <Route path='/Show' element={<Show />} ></Route>
          <Route path='/Update' element={<Update />} ></Route>
          <Route path='/Detail' element={<Details />}></Route>
          <Route path='/Pokemon' element={<Pokemon />}></Route>
        </Routes>

      </>
    </>

  );
}

export default App;
