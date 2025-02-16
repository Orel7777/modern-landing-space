
import { styled } from "styled-components";

const Tree3D = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="tree">
          {[0, 1, 2, 3].map(x => (
            <div key={x} className="branch" style={{
              "--x": x
            } as any}>
              {[0, 1, 2, 3].map(i => (
                <span key={i} style={{
                  "--i": i
                } as any} />
              ))}
            </div>
          ))}
          <div className="stem">
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

  .tree {
    position: relative;
    width: 25px;
    height: 25px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg) scale(0.6);
    animation: treeAnimate 5s linear infinite;
  }

  @keyframes treeAnimate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg) scale(0.6);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg) scale(0.6);
    }
  }

  .tree div {
    position: absolute;
    top: -25px;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateY(calc(12.5px * var(--x))) translateZ(0px);
  }

  .tree div.branch span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #69c069, #77dd77);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border-bottom: 3px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) rotateX(30deg) translateZ(14.25px);
  }

  .tree div.stem span {
    position: absolute;
    top: 55px;
    left: calc(50% - 4px);
    width: 8px;
    height: 50%;
    background: linear-gradient(90deg, #bb4622, #df7214);
    border-bottom: 3px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(4px);
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    filter: blur(10px);
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-32.5px);
  }
`;

export default Tree3D;
