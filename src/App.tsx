import React from 'react';
import { Home } from './pages/Home';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { AuthContextProvider } from './context/AuthContext';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/new' element={<NewRoom />} />
          <Route path='/rooms/:id' element={<Room />} />
        </Routes>

      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
