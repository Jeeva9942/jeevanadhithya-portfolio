import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// @ts-ignore
import WAVES from 'vanta/dist/vanta.waves.min';
import { useTheme } from 'next-themes';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: resolvedTheme === 'dark' ? 0x0f172a : 0xf1f5f9,
          shininess: resolvedTheme === 'dark' ? 35.0 : 15.0,
          waveHeight: 10.0,
          waveSpeed: 0.8,
          zoom: 1.0
        })
      );
    }
  }, [vantaEffect, resolvedTheme]);

  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        color: resolvedTheme === 'dark' ? 0x0f172a : 0xf1f5f9,
        shininess: resolvedTheme === 'dark' ? 35.0 : 15.0,
      });
    }
  }, [resolvedTheme, vantaEffect]);

  useEffect(() => {
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={myRef} 
      className="absolute inset-0 -z-10 transition-all duration-500"
      style={{ width: '100%', height: '100%', opacity: resolvedTheme === 'dark' ? 0.3 : 0.8 }}
    />
  );
};

export default VantaBackground;
