import React from "react";
import { css } from "@emotion/react";

const style = css`
  color: blue;
  background-color: red;
  width: 150px;
  height: 150px;
`;

const EmotionBox = () => {
  return (
    <div css={style}>
      <AnotherComponent />
    </div>
  );
};

const anotherStyle = css({
  textDecoration: "underline",
});

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
);

export default EmotionBox;
