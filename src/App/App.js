import './App.css';
import React from 'react';
import Room from '../components/Room/Room'
import Home from '../components/Home/Home'
import Layout from '../Layout/Layout';

import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route  path="/room"  element={<Room />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
