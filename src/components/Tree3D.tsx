
import { styled } from "styled-components";

const Tree3D = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="building">
          {[0, 1, 2].map(x => (
            <div key={x} className="floor" style={{
              "--x": x
            } as any}>
              {[0, 1, 2, 3].map(i => (
                <span key={i} style={{
                  "--i": i
                } as any} />
              ))}
            </div>
          ))}
          <div className="base">
            {[0, 1, 2, 3].map(i => (
              <span key={i} style={{
                "--i": i
              } as any} />
            ))}
          </div>
          <span className="shadow" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30px;
  }

  .building {
    position: relative;
    width: 25px;
    height: 40px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg) scale(0.6);
    animation: buildingAnimate 5s linear infinite;
  }

  @keyframes buildingAnimate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg) scale(0.6);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg) scale(0.6);
    }
  }

  .building div {
    position: absolute;
    top: -25px;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateY(calc(12.5px * var(--x))) translateZ(0px);
  }

  .building div.floor span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #9ba1a6, #aaadb0);
    clip-path: polygon(0 20%, 100% 20%, 100% 100%, 0 100%);
    border-bottom: 2px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) rotateX(0deg) translateZ(14.25px);
  }

  .building div.base span {
    position: absolute;
    bottom: -40px;
    left: calc(50% - 7px);
    width: 14px;
    height: 40px;
    background: linear-gradient(90deg, #8E9196, #1A1F2C);
    border-bottom: 2px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(7px);
  }

  .shadow {
    position: absolute;
    bottom: -40px;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(0, 0, 0, 0.4);
    filter: blur(5px);
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-5px);
  }
`;

export default Tree3D;
