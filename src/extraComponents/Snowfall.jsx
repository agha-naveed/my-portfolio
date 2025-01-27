/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const snowflakeStyle = css`
  position: absolute;
  top: -20px;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 100;
  animation: fall 5s linear infinite;

  @keyframes fall {
    0% {
      top: -20px;
      opacity: 0.8;
    }
    100% {
      top: 100vh;
      opacity: 0;
    }
  }
`;

const generateSnowflakes = () => {
  const snowflakes = [];
  const numberOfSnowflakes = 30;

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const randomLeft = Math.random() * 100; // Random position from left
    const randomDelay = Math.random() * 5; // Random delay for animation
    const randomSize = 4 + Math.random() * 5; // Random size for snowflakes

    snowflakes.push(
      <div
        key={i}
        className="snowflake"
        css={[
          snowflakeStyle,
          css`
            left: ${randomLeft}%;
            animation-delay: ${randomDelay}s;
            width: ${randomSize}px;
            height: ${randomSize}px;
          `,
        ]}
      />
    );
  }

  return snowflakes;
};

const Snowfall = () => {
  return (
    <div className='pointer-events-none'
      css={css`
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100vh;
      `}
    >
      {generateSnowflakes()}
    </div>
  );
};

export default Snowfall;