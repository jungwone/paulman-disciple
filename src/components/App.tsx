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

export type ClassType = "sunday" | "tuesday";

function App() {
  const [passagesForThisWeek, setPassagesForThisWeek] = useState<Passage[]>([]);
  const [allPassages, setAllPassages] = useState<Passage[]>([]);
  const [classType, setClassType] = useState<ClassType>("sunday");

  useEffect(() => {
    const classType = localStorage.getItem("classType");
    if (classType) {
      setClassType(classType as ClassType);
    }
  }, []);

  useEffect(() => {
    setPassagesForThisWeek(passageService.getPassagesForThisWeek(classType));
    setAllPassages(passageService.getAllPassages());
  }, [classType]);

  const onClickClassType = (value: ClassType) => {
    setClassType(value);
    localStorage.setItem("classType", value);
  };

  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route
            index
            element={
              <PassagesForThisWeek
                passages={passagesForThisWeek}
                classType={classType}
                onClickClassType={onClickClassType}
              />
            }
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
