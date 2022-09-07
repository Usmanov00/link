import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./Homepage";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes className="container">
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;