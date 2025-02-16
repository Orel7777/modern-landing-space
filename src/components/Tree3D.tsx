import { styled } from "styled-components";

const Tree3D = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="house">
          {/* גג */}
          <div className="roof">
            {/* חלק אחורי של הגג */}
            <div className="roof-back">
              {[0, 1].map(i => (
                <span key={i} style={{
                  "--i": i
                } as any} />
              ))}
            </div>
            {/* חלק קדמי של הגג */}
            <div className="roof-front">
              {[0, 1].map(i => (
                <span key={i} style={{
                  "--i": i
                } as any} />
              ))}
            </div>
            {/* צדדי הגג */}
            <div className="roof-sides">
              {[0, 1].map(i => (
                <span key={i} style={{
                  "--i": i
                } as any} />
              ))}
            </div>
          </div>
          {/* קירות */}
          <div className="walls">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="wall" style={{
                "--i": i
              } as any}>
                {/* חלון */}
                <div className="window">
                  <span className="frame" />
                  <span className="shutter left" />
                  <span className="shutter right" />
                </div>
              </div>
            ))}
          </div>
          {/* מרפסת */}
          <div className="porch">
            {[0, 1, 2, 3].map(i => (
              <span key={i} style={{
                "--i": i
              } as any} />
            ))}
            {/* עמודים */}
            <div className="pillars">
              {[0, 1].map(i => (
                <span key={i} className="pillar" style={{
                  "--i": i
                } as any} />
              ))}
            </div>
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

  .house {
    position: relative;
    width: 30px;
    height: 25px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg) scale(0.6);
    animation: houseAnimate 5s linear infinite;
  }

  @keyframes houseAnimate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg) scale(0.6);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg) scale(0.6);
    }
  }

  .roof {
    position: absolute;
    top: -15px;
    left: 0;
    width: 100%;
    height: 15px;
    transform-style: preserve-3d;
  }

  .roof-back {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .roof-back span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #8b7355, #a0522d);
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
    transform-origin: bottom;
    transform: rotateY(calc(180deg * var(--i))) translateZ(15px);
  }

  .roof-front {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .roof-front span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #8b7355, #a0522d);
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
    transform-origin: bottom;
    transform: rotateY(calc(180deg * var(--i))) translateZ(-15px);
  }

  .roof-sides {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .roof-sides span {
    position: absolute;
    width: 30px;
    height: 100%;
    background: linear-gradient(90deg, #8b7355, #a0522d);
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
    transform-origin: bottom;
    transform: rotateY(calc(90deg + (180deg * var(--i)))) translateZ(0) translateX(-15px);
  }

  .walls {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .wall {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #deb887, #d2b48c);
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(15px);
  }

  .window {
    position: absolute;
    width: 40%;
    height: 40%;
    top: 20%;
    left: 30%;
    transform-style: preserve-3d;
  }

  .frame {
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    border: 1px solid #333;
  }

  .shutter {
    position: absolute;
    width: 30%;
    height: 100%;
    background: #333;
  }

  .shutter.left {
    left: -35%;
  }

  .shutter.right {
    right: -35%;
  }

  .porch {
    position: absolute;
    width: 60%;
    height: 30%;
    bottom: -5px;
    left: 20%;
    transform-style: preserve-3d;
  }

  .porch span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(9px);
  }

  .pillars {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .pillar {
    position: absolute;
    width: 10%;
    height: 100%;
    background: white;
    left: calc(30% + (40% * var(--i)));
    transform-origin: bottom;
    transform: translateZ(9px);
  }

  .shadow {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background: rgba(0, 0, 0, 0.2);
    filter: blur(2px);
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-2px);
  }
`;

export default Tree3D;
