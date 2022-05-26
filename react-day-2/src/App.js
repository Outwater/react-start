import React, { useState } from "react";
import "./App.css";
import EmotionBox from "./components/EmotionBox";
import EmotionStyledBox from "./components/EmotionStyledBox";
import UseMemoCompoent from "./components/UseMemoComponent";

const App = () => {
  const [label, setLabel] = useState("Result");

  return (
    <>
      <button onClick={() => setLabel(label + ":")}> rerender btn</button>
      <UseMemoCompoent label={label} n={1000000000}></UseMemoCompoent>
      <hr></hr>
      <h3>by Emotion </h3>
      <EmotionBox />
      <h3>by Emotion_Styled_Box </h3>
      <EmotionStyledBox />
    </>
  );
};

export default App;
