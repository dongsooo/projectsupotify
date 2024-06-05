import "./App.css";
import React, { useState, useEffect } from "react";
import Intro from "./components/Intro";
import MainApp from "./components/MainApp";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    // 일정 시간 후에 인트로 페이지를 숨김
    const timer = setTimeout(() => {
      setTransition(true);
      setTimeout(() => {
        setShowIntro(false);
      }, 500); // 트랜지션 시간과 맞춤
    }, 2000); // 3초 후에 메인 애플리케이션을 보여줌

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <div className="App">
      {showIntro ? (
        <Intro className={transition ? "fade-out" : ""} />
      ) : (
        <MainApp className={transition ? "fade-in" : ""} />
      )}
    </div>
  );
}

export default App;
