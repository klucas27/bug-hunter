import { useState } from "react";
import { Header } from "./components/Header";
import { LeftBar } from "./components/LeftBar";

import './style/global.css';

export function App() {
  const [isLeftBarVisible, setIsLeftBarVisible] = useState(true);

  const toggleLeftBar = () => {
    setIsLeftBarVisible(!isLeftBarVisible);
  };

  return (
    <div>
      <Header toggleLeftBar={toggleLeftBar} />
      {isLeftBarVisible && <LeftBar />}
    </div>
  );
}
