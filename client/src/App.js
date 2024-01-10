import React from 'react';
import Initialpage from './components/initialpage/Initialpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
 return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Initialpage/>}/>
      </Routes>
    </Router>
 );
}

export default App;