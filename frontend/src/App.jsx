import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { LeftBar } from "./components/LeftBar";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { AprendizadoIA } from "./pages/AprendizadoIA";
import { Conceitos } from "./pages/Conceitos";
import { Feedbacks } from "./pages/Feedbacks";

import './style/global.css';

export function App() {
  const [isLeftBarVisible, setIsLeftBarVisible] = useState(true);

  const toggleLeftBar = () => {
    setIsLeftBarVisible(!isLeftBarVisible);
  };

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {isLeftBarVisible && <LeftBar />}
        <div style={{ flex: 1 }}>
          <Header toggleLeftBar={toggleLeftBar} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/aprendizado-ia" element={<AprendizadoIA />} />
              <Route path="/conceitos" element={<Conceitos />} />
              <Route path="/feedbacks" element={<Feedbacks />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
