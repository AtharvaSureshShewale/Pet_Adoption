import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PetList from "./components/PetList";
import PetProfile from "./components/PetProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/pet/:id" element={<PetProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
