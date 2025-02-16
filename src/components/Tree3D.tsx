
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
    width: 30px;
    height: 35px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg) scale(0.8);
    animation: buildingAnimate 5s linear infinite;
  }

  @keyframes buildingAnimate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg) scale(0.8);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg) scale(0.8);
    }
  }

  .building div {
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .building div.roof {
    top: -35px;
    height: 20px;
  }

  .building div.roof span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #8d4242, #a34d4d);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(15px);
  }

  .building div.floor {
    transform: translateY(calc(15px * var(--x)));
  }

  .building div.floor span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #e8e8e8, #ffffff);
    border: 1px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(15px);
  }

  .building div.floor span::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 8px;
    background: #4a4a4a;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .building div.base span {
    position: absolute;
    bottom: -30px;
    left: calc(50% - 8px);
    width: 16px;
    height: 35px;
    background: linear-gradient(90deg, #c7c7c7, #e0e0e0);
    border: 1px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(8px);
  }

  .shadow {
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(0, 0, 0, 0.3);
    filter: blur(5px);
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-5px);
  }
`;

export default Tree3D;
