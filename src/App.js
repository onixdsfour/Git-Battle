
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Popular from './pages/popular';
import Battle from './pages/battle';
import Layout from './pages/layout';

function App() {
  

  return (
    <div className="App">
     
      <BrowserRouter>        
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="popular" element={<Popular />}/>               
              <Route path="battle" element={<Battle />} />
              <Route path='*' element={<p className='path-error'>Page not found</p>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
