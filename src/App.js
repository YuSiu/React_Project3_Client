import React from "react";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import DataFetching from "./pages/DataFetching";

function App() {
  return (
    <div className="App">
      {<DataFetching/> }
      {/* {<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Article" element={<Article />} />
        </Routes>
      </BrowserRouter> } */}
    </div>
  );
}

export default App;
