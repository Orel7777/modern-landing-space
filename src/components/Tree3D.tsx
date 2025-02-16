
import { styled } from "styled-components";

const Tree3D = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="building">
          {/* גג */}
          <div className="roof">
            {[0, 1, 2, 3].map(i => (
              <span key={i} style={{
                "--i": i
              } as any} />
            ))}
          </div>
          {/* קומות */}
          {[0, 1].map(x => (
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
          {/* בסיס */}
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
    width: 20px;
    height: 25px;
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
    top: -15px;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .building div.roof {
    top: -25px;
    height: 15px;
  }

  .building div.roof span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #555555, #666666);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(10px);
  }

  .building div.floor {
    transform: translateY(calc(10px * var(--x)));
  }

  .building div.floor span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #c8c8c9, #d4d4d4);
    border: 1px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(10px);
  }

  .building div.floor span::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 6px;
    background: #333333;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .building div.base span {
    position: absolute;
    bottom: -20px;
    left: calc(50% - 5px);
    width: 10px;
    height: 25px;
    background: linear-gradient(90deg, #555555, #666666);
    border: 1px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(5px);
  }

  .shadow {
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.2);
    filter: blur(3px);
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-3px);
  }
`;

export default Tree3D;
