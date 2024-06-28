import React, { useState, useEffect } from "react";

const Intro = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 1000); // 1초 후에 로고 표시
    const textTimer = setTimeout(() => setShowText(true), 2000); // 2초 후에 텍스트 표시

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
    };
  }, []);
  return (
    <div className="Intro">
      <div className="IntroWrap">
        <div className={`supotifyLogoBox ${showLogo ? "visible" : ""}`}>
          <img
            src="https://dongsooo.github.io/imgs/img/00_supotifi_logo.png"
            alt="Supotify Logo"
          />
        </div>
        <div className={`supotifyTextBox ${showText ? "visible" : ""}`}>
          <p>Supotify</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
