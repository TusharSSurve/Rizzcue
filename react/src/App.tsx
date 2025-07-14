import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import html2canvas from "html2canvas";
import { useState } from "react";
import type { ColorTheme } from "./lib/types";
import { colorThemes, getRandomNumber } from "./lib/constants";
import "./index.css";


export default function App() {
  const [theme, setTheme] = useState<ColorTheme>(colorThemes[0]);

  const handleCardClick = () => {
    const prevCardColor = theme.background;
    let n = getRandomNumber(0, colorThemes.length - 1);
    let newColorArr = colorThemes[n];

    if (prevCardColor === newColorArr.background) {
      newColorArr = colorThemes[(n + 1) % colorThemes.length];
    }

    setTheme(newColorArr);
  };

  const handleSave = async () => {
    const canvas = await html2canvas(document.querySelector(".scrollable-wrapper") as HTMLElement);
    const a = document.createElement('a');
    a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    a.download = 'PickMeUp.jpg';
    a.click();
  };

  const handleShare = async () => {
    const canvas = await html2canvas(document.querySelector(".scrollable-wrapper") as HTMLElement);
    canvas.toBlob(blob => {
      if (!blob) return;
      const file = new File([blob], 'PickMeUp.png', { type: blob.type });
      navigator.share?.({ files: [file] });
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout theme={theme} onSave={handleSave} onShare={handleShare}/>}>
          <Route index element={<Home theme={theme} handleCardClick={handleCardClick}/>} />
        </Route>
      </Routes>
    </Router>
  )
}