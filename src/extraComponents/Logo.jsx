/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const logoStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const shineTextStyles = css`
  color: var(--text-col);
  background: linear-gradient(to right, #4d4d4dc2 0, rgba(255, 255, 255, 0.514) 10%, #4d4d4dad 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 2.5s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 27px;
  text-decoration: none;
  white-space: nowrap;
`;

const imgStyles = css`
  width: 70px;
  display: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const shineAnimation = css`
  @keyframes shine {
    0% {
      background-position: -30px;
    }
    50% {
      background-position: 80px;
    }
    100% {
      background-position: 150px;
    }
  }
`;

const LogoComponent = () => (
  <div className="logo" css={logoStyles}>
    <h2 className="btn-shine" css={[shineTextStyles, shineAnimation]}>
      <a href="#" className='font-poppins-medium'>Agha Naveed</a>
    </h2>
    <img decoding="async" loading="lazy" src="img/my-logo.webp" alt="Agha Naveed logo" css={imgStyles} />
  </div>
);

export default LogoComponent;