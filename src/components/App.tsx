import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllPassages from "../routes/AllPassages";
import PassageTest from "../routes/PassageTest";
import PassageService from "../service/PassageService";
import "./App.css";
import Header from "./Header";
import PassagesForThisWeek from "./PassagesForThisWeek";
import Manage from "../routes/Manage";
import { ChakraProvider } from "@chakra-ui/react";
import { ClassType, Passage } from "../types";

function App() {
  const [passagesForThisWeek, setPassagesForThisWeek] = useState<Passage[]>([]);
  const [classType, setClassType] = useState<ClassType>("sunday");
  const [passages, setPassages] = useState<Passage[]>([]);

  useEffect(() => {
    const classType = localStorage.getItem("classType");
    if (classType) {
      setClassType(classType as ClassType);
    }
  }, []);

  // 전체 구절 찾기
  useEffect(() => {
    PassageService.getPassages()
      .then((res) => {
        setPassages(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 이번주 암송 구절 설정
  useEffect(() => {
    setPassagesForThisWeek(
      PassageService.getPassagesForThisWeek(classType, passages)
    );
  }, [classType, passages]);

  const onClickClassType = (value: ClassType) => {
    setClassType(value);
    localStorage.setItem("classType", value);
  };

  const refetchPassages = (passages: Passage[]) => {
    setPassages(passages);
  };

  return (
    <ChakraProvider>
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
            <Route
              path="/test/:id"
              element={<PassageTest passages={passages} />}
            />
            <Route
              path="/passages"
              element={<AllPassages passages={passages} />}
            />
            <Route
              path="/manage"
              element={
                <Manage passages={passages} refetchPassages={refetchPassages} />
              }
            />
          </Routes>
        </Main>
      </div>
    </ChakraProvider>
  );
}

export default App;

const Main = styled.main`
  padding-top: 74px;
  padding-left: 8px;
  padding-right: 8px;
`;
