
import { styled } from "styled-components";

const Tree3D = () => {
  return <StyledWrapper>
      <div className="container">
        <div className="tree">
          {[0, 1, 2, 3].map(x => <div key={x} className="branch" style={{
          "--x": x
        } as any}>
              {[0, 1, 2, 3].map(i => <span key={i} style={{
            "--i": i
          } as any} />)}
            </div>)}
          <div className="stem">
            {[0, 1, 2, 3].map(i => <span key={i} style={{
            "--i": i
          } as any} />)}
          </div>
          <span className="shadow" />
        </div>
      </div>
    </StyledWrapper>;
};

const StyledWrapper = styled.div`
  .container {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tree {
    position: relative;
    width: 30px;
    height: 30px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg);
    animation: treeAnimate 5s linear infinite;
  }

  @keyframes treeAnimate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg);
    }
  }

  .tree div {
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateY(calc(15px * var(--x))) translateZ(0px);
  }

  .tree div.branch span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #90EE90, #98FB98);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border-bottom: 3px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) rotateX(30deg) translateZ(17px);
  }

  .tree div.stem span {
    position: absolute;
    top: 70px;
    left: calc(50% - 4.5px);
    width: 9px;
    height: 50%;
    background: linear-gradient(90deg, #bb4622, #df7214);
    border-bottom: 3px solid #00000019;
    transform-origin: bottom;
    transform: rotateY(calc(90deg * var(--i))) translateZ(4.5px);
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    filter: blur(20px);
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-40px);
  }
`;

export default Tree3D;
