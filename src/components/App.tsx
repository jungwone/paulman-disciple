import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Passages, { Passage } from "../data";
import AllPassages from "../routes/AllPassages";
import PassageTest from "../routes/PassageTest";
import PassageService from "../service/PassageService";
import "./App.css";
import Header from "./Header";
import PassagesForThisWeek from "./PassagesForThisWeek";

const passageService = new PassageService(Passages);

function App() {
  const [passagesForThisWeek, setPassagesForThisWeek] = useState<Passage[]>([]);
  const [allPassages, setAllPassages] = useState<Passage[]>([]);

  useEffect(() => {
    setPassagesForThisWeek(passageService.getPassagesForThisWeek());
    setAllPassages(passageService.getAllPassages());
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route
            index
            element={<PassagesForThisWeek passages={passagesForThisWeek} />}
          />
          <Route path="/test/:id" element={<PassageTest />} />
          <Route
            path="/passages"
            element={<AllPassages passages={allPassages} />}
          />
        </Routes>
      </Main>
    </div>
  );
}

export default App;

const Main = styled.main`
  padding-top: 74px;
`;
