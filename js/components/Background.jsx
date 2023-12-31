import '../css/background.css'
import React, { useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, FirstPersonControls, Shadow, Sparkles, FlyControls, ScrollControls, DeviceOrientationControls } from '@react-three/drei';
import { Stars } from '@react-three/drei';
import { Scroll } from '@react-three/drei';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useScroll } from '@react-three/drei';

function Box() {
  return (
    <mesh>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

function Scene({ children }) {

  return (
    <>
      <ambientLight intensity={0.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={30000} scale={[16, 16, 16]} />
      <ScrollControls pages={3} damping={0.1}>
        <Scroll html>
          <div className="full-width">
          {children}
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default function Background({ children }) {

  const [rotation, setRotation] = useState(16);

  return (

    <>
      {/* Browser View  */}
      <BrowserView>
        <Canvas className="background" id='background' shadows={true} key={Date.now()}>
          <FlyControls dragToLook={false} rollSpeed={0.05} movementSpeed={0} />
          <Scene>
            {children}
          </Scene>
        </Canvas>
      </BrowserView>
      {/* Mobile View  */}
      <MobileView>
        <Canvas className="background" shadows={true} key={Date.now()}>
          <Scene>
            {children}
          </Scene>
        </Canvas>
      </MobileView>
    </>
  );
}
