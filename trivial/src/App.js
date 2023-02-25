import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import Header from './react/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/question/:order' element={<Question/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
