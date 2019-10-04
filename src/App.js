import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { HashRouter } from 'react-router-dom'

import router from './routes'

function App() {
  return (
    <HashRouter>
    <div className="App">
      
          {router}
       
    </div>
    </HashRouter>
  );
}

export default App;
