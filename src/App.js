import React from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
