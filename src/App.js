
import './App.css';
import { HashRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Popular from './pages/popular';
import Battle from './pages/battle';
import Layout from './pages/layout';
import Results from './conmponents/results'; 

function App() {
  

  return (
    <div className="App">
    
      <HashRouter basename='/'>        
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="popular" element={<Popular />}/>               
              <Route path="battle" element={<Battle />} />
              <Route path="battle/results" element={<Results />} />
              <Route path='*' element={<p className='path-error'>Page not found</p>}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
