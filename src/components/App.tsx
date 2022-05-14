import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Passages, { Passage } from "../data";
import PassageService from "../service/PassageService";
import "./App.css";
import Header from "./Header";
import PassagesForThisWeek from "./PassagesForThisWeek";

const passageService = new PassageService(Passages);

function App() {
  const [passagesForThisWeek, setPassagesForThisWeek] = useState<Passage[]>([]);

  useEffect(() => {
    setPassagesForThisWeek(passageService.getPassagesForThisWeek());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          index
          element={<PassagesForThisWeek passages={passagesForThisWeek} />}
        />
      </Routes>
    </div>
  );
}

export default App;
