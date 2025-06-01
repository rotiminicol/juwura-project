import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

// Ken Burns animation keyframes
const kenBurnsVariants = {
  initial: { scale: 1.1, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 1.5 } },
  exit: { scale: 0.95, opacity: 0, transition: { duration: 1 } },
};

const images = [
  '/wed7.png',
  '/wed8.png',
  '/wed9.png',
  '/wed3.png',
  '/wed2.png'
];

// Parallax mesh component
function ParallaxMesh({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      // Map mouse position to mesh rotation
      meshRef.current.rotation.y = Math.PI / 4 + mouse.x * 0.2;
      meshRef.current.rotation.x = mouse.y * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 0.1]}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial 
        color="#ffffff"
        transparent
        opacity={0.13}
        roughness={0.25}
        metalness={0.85}
      />
    </mesh>
  );
}

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-advance images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax handler
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({ x, y });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden select-none"
      onMouseMove={handleMouseMove}
    >
      {/* Image Gallery with Ken Burns */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Juwura Fashion"
            variants={kenBurnsVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full object-cover will-change-transform"
            draggable={false}
          />
        </AnimatePresence>
        {/* Animated gradient overlay */}
        <motion.div
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none"
        />
      </div>

      {/* 3D Overlay Effect with Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.7} />
          <ParallaxMesh mouse={mouse} />
          <Environment preset="sunset" />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="max-w-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-4 drop-shadow-lg"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
          >
            Modern Adire
            <br />
            Timeless Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-8 font-serif"
          >
            Contemporary interpretations of traditional Adire textiles, 
            handcrafted for the modern wardrobe.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="btn-primary bg-gradient-to-r from-primary-600 to-primary-400 shadow-lg hover:from-primary-700 hover:to-primary-500 transition-all duration-300"
            >
              Shop Collection
            </Link>
            <Link
              to="/about"
              className="btn-secondary text-white border-white hover:bg-white hover:text-primary-900 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 rounded-full relative transition-all outline-none focus:ring-2 focus:ring-white/80 ${
              currentImage === index ? 'bg-white w-7 shadow-lg' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.3 }}
            animate={currentImage === index ? { scale: 1.4 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {currentImage === index && (
              <motion.span
                layoutId="active-dot"
                className="absolute inset-0 rounded-full bg-white/80 blur-sm"
                style={{ zIndex: -1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Hero;