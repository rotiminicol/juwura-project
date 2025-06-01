import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real application, you would submit to a backend here
    }
  };
  
  return (
    <section className="py-24 bg-primary-900 text-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">Join Our Community</h2>
          <p className="text-white/80 mb-8 font-serif">
            Subscribe to receive exclusive offers, early access to new collections,
            and stories from our artisans around the world.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-white/10 border border-white/20 text-white placeholder-white/50 py-3 px-4 flex-grow focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button 
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 flex items-center justify-center transition-colors"
              >
                Subscribe <Send size={16} className="ml-2" />
              </button>
            </form>
          ) : (
            <div className="bg-white/10 border border-white/20 py-4 px-6 max-w-lg mx-auto">
              <p className="text-white font-medium">
                Thank you for subscribing! We've sent a confirmation to your email.
              </p>
            </div>
          )}
          
          <p className="text-white/60 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Juwura.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;