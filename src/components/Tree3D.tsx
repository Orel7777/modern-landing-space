
import { styled } from "styled-components";

const Tree3D = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="building">
          {/* קומות */}
          {[0, 1, 2, 3].map(x => (
            <div key={x} className="floor" style={{
              "--x": x
            } as any}>
              {[0, 1, 2, 3].map(i => (
                <span key={i} style={{
                  "--i": i
                } as any} />
              ))}
              {/* מרפסת */}
              <div className="balcony">
                {[0, 1, 2, 3].map(i => (
                  <span key={i} style={{
                    "--i": i
                  } as any} />
                ))}
              </div>
              {/* חיפוי עץ */}
              <div className="wood-panel">
                {[0, 1, 2, 3].map(i => (
                  <span key={i} style={{
                    "--i": i
                  } as any} />
                ))}
              </div>
            </div>
          ))}
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
    height: 60px;
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

  .building div.floor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateY(calc(-15px * var(--x)));
  }

  .building div.floor span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f5f5f5, #ffffff);
    border: 1px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(12.5px);
  }

  .building div.floor .balcony {
    position: absolute;
    width: 100%;
    height: 30%;
    bottom: 0;
    transform-style: preserve-3d;
  }

  .building div.floor .balcony span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(169, 169, 169, 0.3);
    border: 2px solid #a9a9a9;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(15px);
  }

  .building div.floor .wood-panel {
    position: absolute;
    width: 30%;
    height: 100%;
    right: 0;
    transform-style: preserve-3d;
  }

  .building div.floor .wood-panel span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #deb887, #d2691e);
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(4px);
  }

  .shadow {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(0, 0, 0, 0.2);
    filter: blur(3px);
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-5px);
  }
`;

export default Tree3D;
