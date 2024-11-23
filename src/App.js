import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/add" element={<ItemForm />} />
        <Route path="/edit/:id" element={<ItemForm />} />
      </Routes>
    </Router>
  );
};

export default App;
