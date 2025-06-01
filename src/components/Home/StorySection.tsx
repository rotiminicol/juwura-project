import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { motion, useScroll, useTransform } from 'framer-motion';

const StorySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  return (
    <section ref={sectionRef} className="py-24 overflow-hidden relative bg-primary-50">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Parallax translateY={[20, -20]} className="relative">
            <img 
              src="https://images.pexels.com/photos/4617267/pexels-photo-4617267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Artisan crafting"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-lg max-w-xs">
              <p className="font-serif italic text-primary-800">
                "Every piece tells a story of heritage, craftsmanship, and dedication to excellence."
              </p>
            </div>
          </Parallax>
          
          <motion.div
            style={{ opacity, scale }}
            className="lg:pl-12"
          >
            <h2 className="text-3xl md:text-4xl font-display mb-6">Our Story</h2>
            <div className="space-y-4 font-serif text-stone-700">
              <p>
                Founded in 2018, Juwura was born from a passion to preserve traditional
                craftsmanship while creating contemporary luxury goods that stand the test of time.
              </p>
              <p>
                Our artisans draw inspiration from rich cultural heritage, transforming the finest
                materials into exquisite pieces that blend ancestral techniques with modern aesthetics.
              </p>
              <p>
                Each Juwura creation is a testament to the hands that craft it – skilled artisans
                whose expertise has been passed down through generations, ensuring that every
                stitch, cut, and finish meets our exceptional standards.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;