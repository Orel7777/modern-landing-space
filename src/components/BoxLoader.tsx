
import { styled } from "styled-components";

const BoxLoader = () => {
  return (
    <StyledWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" height={80} width={80}>
        <g style={{order: -1}}>
          <polygon transform="rotate(45 40 40)" strokeWidth={1} stroke="#d3a410" fill="none" points="28,28 59,20 52,52 20,60" id="bounce" />
          <polygon transform="rotate(45 40 40)" strokeWidth={1} stroke="#d3a410" fill="none" points="28,28 59,20 52,52 20,60" id="bounce2" />
          <polygon transform="rotate(45 40 40)" strokeWidth={2} stroke="#000" fill="#414750" points="28,28 60,20 52,52 20,60" />
          <polygon strokeWidth={2} stroke="#000" fill="url(#gradiente)" points="40,28 60,40 40,52 20,40" />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
              <stop style={{stopColor: '#1e2026', stopOpacity: 1}} offset="20%" />
              <stop style={{stopColor: '#414750', stopOpacity: 1}} offset="60%" />
            </linearGradient>
          </defs>
          <polygon transform="translate(8, 12.4)" strokeWidth={2} stroke="#000" fill="#b7870f" points="32,20 32,30 32,39.6 16,30" />
          <polygon transform="translate(8, 12.4)" strokeWidth={2} stroke="#000" fill="url(#gradiente2)" points="16,-16 32,-16 32,39.6 16,30" />
          <defs>
            <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
              <stop style={{stopColor: '#d3a51000', stopOpacity: 1}} offset="20%" />
              <stop style={{stopColor: '#d3a51054', stopOpacity: 1}} offset="100%" id="animatedStop" />
            </linearGradient>
          </defs>
          <polygon transform="rotate(180 40 40) translate(8, 8)" strokeWidth={2} stroke="#000" fill="#d3a410" points="32,20 32,30 32,39.6 16,30" />
          <polygon transform="rotate(0 40 40) translate(24, 8)" strokeWidth={2} stroke="#000" fill="url(#gradiente3)" points="16,-16 32,-16 32,34 16,44.08" />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
              <stop style={{stopColor: '#d3a51000', stopOpacity: 1}} offset="20%" />
              <stop style={{stopColor: '#d3a51054', stopOpacity: 1}} offset="100%" id="animatedStop" />
            </linearGradient>
          </defs>
          <polygon transform="rotate(45 40 40) translate(32, 38)" strokeWidth={2} stroke="#000" fill="#ffe4a1" points="2,0 2,2 0,2 0,0" id="particles" />
          <polygon transform="rotate(45 40 40) translate(32, 22)" strokeWidth={2} stroke="#000" fill="#ccb069" points="2.4,0 2.4,2.4 0,2.4 0,0" id="particles" />
          <polygon transform="rotate(45 40 40) translate(28, 32)" strokeWidth={2} stroke="#000" fill="#fff" points="0.8,0 0.8,0.8 0,0.8 0,0" id="particles" />
          <polygon strokeWidth={2} stroke="#000" fill="#292d34" points="11.8,39.92 40,56.8 40,68.8 11.8,52" />
          <polygon transform="translate(20, 36.8)" strokeWidth={2} stroke="#000" fill="#1f2127" points="20,20 48.2,3.2 48.2,14 20,32" />
        </g>
      </svg>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;

  @keyframes bounce {
    0%, 100% { translate: 0px 14.4px; }
    50% { translate: 0px 18.4px; }
  }
  @keyframes bounce2 {
    0%, 100% { translate: 0px 18.4px; }
    50% { translate: 0px 22.4px; }
  }
  @keyframes umbral {
    0% { stop-color: #d3a5102e; }
    50% { stop-color: rgba(211, 165, 16, 0.519); }
    100% { stop-color: #d3a5102e; }
  }
  @keyframes partciles {
    0%, 100% { translate: 0px 6.4px; }
    50% { translate: 0px 2.4px; }
  }
  #particles {
    animation: partciles 4s ease-in-out infinite;
  }
  #animatedStop {
    animation: umbral 4s infinite;
  }
  #bounce {
    animation: bounce 4s ease-in-out infinite;
    translate: 0px 14.4px;
  }
  #bounce2 {
    animation: bounce2 4s ease-in-out infinite;
    translate: 0px 18.4px;
    animation-delay: 0.5s;
  }
`;

export default BoxLoader;
