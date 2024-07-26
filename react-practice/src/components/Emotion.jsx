/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
export const Emotion = () => {
  const containerStyled = css`
  background-color: yellow;
  `;
  return (
    <div css={containerStyled}>
      <p>emotion</p>
      <button>button</button>
    </div>
  );
};