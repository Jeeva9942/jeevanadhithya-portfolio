/* @lovable-ignore */
import React, { useRef, useMemo, Suspense, Component, ErrorInfo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei';

// Error Boundary for the 3D Scene
class ThreeErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Three.js Error caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const AnimatedSphere = ({ theme }: { theme: string }) => {
  const meshRef = useRef(null);
  
  const colors = useMemo(() => ({
    dark: { color: "#4f46e5", emissive: "#4338ca" },
    light: { color: "#60a5fa", emissive: "#93c5fd" }
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      // @ts-ignore
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return React.createElement(Float, { speed: 1.5, rotationIntensity: 0.5, floatIntensity: 0.5 },
    React.createElement(Sphere, { ref: meshRef, args: [1, 100, 100], scale: 2.2, position: [-1, 0, 0] },
      React.createElement(MeshDistortMaterial, {
        color: theme === 'dark' ? colors.dark.color : colors.light.color,
        emissive: theme === 'dark' ? colors.dark.emissive : colors.light.emissive,
        emissiveIntensity: 0.4,
        distort: 0.3,
        speed: 2,
        roughness: 0,
        metalness: 1
      })
    )
  );
};

const ThreeSphere = ({ theme }: { theme: string }) => {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden h-screen w-full">
      <ThreeErrorBoundary>
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <AnimatedSphere theme={theme} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
};

export default ThreeSphere;
