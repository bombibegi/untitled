
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import './App.css';

const App = () => {

return (
<Routes>
<Route path="/" element={<HomePage />} />
</Routes>
)
}

export default App;