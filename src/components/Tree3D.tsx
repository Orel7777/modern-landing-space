
import { styled } from "styled-components";

const Tree3D = () => {
  return (
    <StyledWrapper>
      <div className="container">
        {/* טרקטור */}
        <div className="tractor">
          {/* גוף הטרקטור */}
          <div className="body">
            <div className="cabin">
              <div className="window" />
            </div>
            <div className="hood" />
            <div className="engine" />
          </div>
          {/* גלגלים */}
          <div className="wheels">
            {[0, 1].map(i => (
              <div key={i} className="wheel big" style={{ "--i": i } as any} />
            ))}
            {[0, 1].map(i => (
              <div key={i} className="wheel small" style={{ "--i": i } as any} />
            ))}
          </div>
        </div>

        {/* כובע בנייה */}
        <div className="helmet">
          {/* חלק עליון */}
          <div className="top">
            {[0, 1, 2, 3].map(i => (
              <span key={i} style={{ "--i": i } as any} />
            ))}
          </div>
          {/* שוליים */}
          <div className="brim">
            {[0, 1, 2, 3].map(i => (
              <span key={i} style={{ "--i": i } as any} />
            ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
    padding: 0 50px;
  }

  /* טרקטור */
  .tractor {
    position: relative;
    width: 60px;
    height: 40px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg) scale(0.6);
    animation: tractorAnimate 5s linear infinite;
  }

  @keyframes tractorAnimate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg) scale(0.6);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg) scale(0.6);
    }
  }

  .body {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .cabin {
    position: absolute;
    width: 40%;
    height: 60%;
    right: 5%;
    top: 10%;
    background: #333333;
    transform-style: preserve-3d;
  }

  .window {
    position: absolute;
    width: 60%;
    height: 40%;
    top: 20%;
    left: 20%;
    background: #8E9196;
    border: 2px solid #222222;
  }

  .hood {
    position: absolute;
    width: 45%;
    height: 40%;
    left: 5%;
    top: 20%;
    background: #F97316;
    transform-style: preserve-3d;
  }

  .engine {
    position: absolute;
    width: 20%;
    height: 30%;
    left: 15%;
    bottom: 0;
    background: #555555;
  }

  .wheels {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .wheel {
    position: absolute;
    border-radius: 50%;
    background: #222222;
    border: 2px solid #000000;
  }

  .wheel.big {
    width: 30%;
    height: 45%;
    bottom: -5%;
    left: calc(10% + (50% * var(--i)));
  }

  .wheel.small {
    width: 20%;
    height: 30%;
    bottom: -2%;
    left: calc(5% + (70% * var(--i)));
  }

  /* כובע בנייה */
  .helmet {
    position: relative;
    width: 50px;
    height: 35px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg) scale(0.6);
    animation: helmetAnimate 5s linear infinite;
  }

  @keyframes helmetAnimate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg) scale(0.6);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg) scale(0.6);
    }
  }

  .top {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .top span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #FFD700;
    clip-path: polygon(20% 100%, 50% 0, 80% 100%);
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(25px);
  }

  .brim {
    position: absolute;
    width: 120%;
    height: 20%;
    bottom: 0;
    left: -10%;
    transform-style: preserve-3d;
  }

  .brim span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #FFD700;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(30px);
  }
`;

export default Tree3D;
