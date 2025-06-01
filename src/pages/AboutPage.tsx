import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/5704187/pexels-photo-5704187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Artisan workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-950/70" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-6xl font-display mb-6">Our Story</h1>
            <p className="text-xl font-serif max-w-2xl mx-auto text-white/80">
              Celebrating the intersection of heritage craftsmanship and contemporary design.
            </p>
          </div>
        </div>
      </section>
      
      {/* Founder's Message */}
      <section className="py-24 bg-stone-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Parallax translateY={[10, -10]}>
              <img 
                src="https://images.pexels.com/photos/7147842/pexels-photo-7147842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Founder"
                className="w-full h-auto"
              />
            </Parallax>
            
            <div>
              <h2 className="text-3xl font-display mb-6">A Message from Our Founder</h2>
              <div className="space-y-4 font-serif text-stone-700">
                <p>
                  "When I founded Juwura in 2018, I was driven by a desire to preserve the artistic heritage 
                  of my ancestors while creating products that would resonate with modern sensibilities.
                </p>
                <p>
                  Growing up surrounded by craftspeople, I witnessed firsthand the dedication and skill that 
                  goes into creating objects of lasting beauty. I also saw traditional crafts slowly disappearing 
                  as mass production became the norm.
                </p>
                <p>
                  Juwura was born from my commitment to celebrating these time-honored techniques and 
                  the artisans who practice them. Every piece in our collection tells a story – of cultural 
                  heritage, of skilled hands, and of our ongoing journey to blend tradition with innovation.
                </p>
                <p>
                  We invite you to become part of this story."
                </p>
              </div>
              <p className="mt-6 font-display text-lg">
                Amara Okafor, Founder
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Our Values</h2>
            <p className="text-white/80 max-w-2xl mx-auto font-serif">
              These principles guide everything we do, from design to production to how we engage with our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Craftsmanship",
                description: "We honor traditional techniques and the skilled hands that practice them, ensuring every piece meets our exacting standards.",
                icon: "🔨"
              },
              {
                title: "Sustainability",
                description: "We're committed to ethical sourcing, reducing waste, and creating products that are designed to last for generations.",
                icon: "🌱"
              },
              {
                title: "Cultural Heritage",
                description: "We draw inspiration from rich cultural traditions, celebrating and preserving heritage through contemporary design.",
                icon: "🏛️"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-800/50 p-8 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-display mb-4">{value.title}</h3>
                <p className="text-white/80 font-serif">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Artisans */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Meet Our Artisans</h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-serif">
              The skilled hands and creative minds behind every Juwura piece.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ade Ogunlesi",
                role: "Master Leatherworker",
                image: "https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "With over 20 years of experience, Ade brings traditional leatherworking techniques to each Juwura bag."
              },
              {
                name: "Folami Akintola",
                role: "Textile Specialist",
                image: "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Folami specializes in Adire dyeing techniques, creating unique patterns for our textile products."
              },
              {
                name: "Chidi Nwachukwu",
                role: "Jewelry Designer",
                image: "https://images.pexels.com/photos/7147956/pexels-photo-7147956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Chidi combines traditional metalworking with contemporary design to create our statement jewelry pieces."
              }
            ].map((artisan, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="overflow-hidden mb-4">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name}
                    className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-display mb-1">{artisan.name}</h3>
                <p className="text-primary-600 font-serif mb-3">{artisan.role}</p>
                <p className="text-stone-600">{artisan.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;