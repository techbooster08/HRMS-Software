"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  width: 100vw;
  background: #fff; // you can change background if needed

  .boxes {
    --size: 32px;
    --duration: 800ms;
    height: calc(var(--size) * 2);
    width: calc(var(--size) * 3);
    position: relative;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
  }

  .boxes .box {
    width: var(--size);
    height: var(--size);
    top: 0;
    left: 0;
    position: absolute;
    transform-style: preserve-3d;
  }

  .boxes .box:nth-child(1) {
    transform: translate(100%, 0);
    animation: box1 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(2) {
    transform: translate(0, 100%);
    animation: box2 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(3) {
    transform: translate(100%, 100%);
    animation: box3 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(4) {
    transform: translate(200%, 0);
    animation: box4 var(--duration) linear infinite;
  }

  .boxes .box > div {
    --background: #5c8df6;
    --translateZ: calc(var(--size) / 2);
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    transform: rotateY(var(--rotateY, 0)) rotateX(var(--rotateX, 0)) translateZ(var(--translateZ));
  }

  .boxes .box > div:nth-child(1) { top: 0; left: 0; }
  .boxes .box > div:nth-child(2) { background: #145af2; right: 0; --rotateY: 90deg; }
  .boxes .box > div:nth-child(3) { background: #447cf5; --rotateX: -90deg; }
  .boxes .box > div:nth-child(4) { background: #dbe3f4; top: 0; left: 0; --translateZ: calc(var(--size) * -3); }

  @keyframes box1 {
    0%, 50% { transform: translate(100%, 0); }
    100% { transform: translate(200%, 0); }
  }

  @keyframes box2 {
    0% { transform: translate(0, 100%); }
    50% { transform: translate(0, 0); }
    100% { transform: translate(100%, 0); }
  }

  @keyframes box3 {
    0%, 50% { transform: translate(100%, 100%); }
    100% { transform: translate(0, 100%); }
  }

  @keyframes box4 {
    0% { transform: translate(200%, 0); }
    50% { transform: translate(200%, 100%); }
    100% { transform: translate(100%, 100%); }
  }
`;

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 sec
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <StyledWrapper>
        <div className="boxes">
          <div className="box"><div /><div /><div /><div /></div>
          <div className="box"><div /><div /><div /><div /></div>
          <div className="box"><div /><div /><div /><div /></div>
          <div className="box"><div /><div /><div /><div /></div>
        </div>
      </StyledWrapper>
    );
  }

  return <>{children}</>;
}
