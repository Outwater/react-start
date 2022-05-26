import React from "react";
import "./App.css";
import EmotionBox from "./components/EmotionBox";
import EmotionStyledBox from "./components/EmotionStyledBox";

const App = () => (
  <>
    <h3>by Emotion </h3>
    <EmotionBox />
    <h3>by Emotion_Styled_Box </h3>
    <EmotionStyledBox> </EmotionStyledBox>
  </>
);

export default App;
