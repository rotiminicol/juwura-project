import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to a backend here
    setIsSubmitted(true);
  };
  
  return (
    <>
      {/* Page header */}
      <div className="bg-primary-900 py-32 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Contact Us</h1>
          <p className="text-white/80 max-w-xl mx-auto font-serif">
            We'd love to hear from you. Reach out with any questions, feedback, or inquiries.
          </p>
        </div>
      </div>
      
      {/* Contact content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact information */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <h2 className="text-2xl font-display mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-stone-600">
                      123 Artisan Way<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="mr-4 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-stone-600">
                      +234 123 456 7890
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="mr-4 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-stone-600">
                      hello@juwura.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="mr-4 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-stone-600">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 bg-stone-100 h-[300px] flex items-center justify-center">
                <p className="text-stone-500">Map integration would be here</p>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <h2 className="text-2xl font-display mb-6">Send a Message</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-stone-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-stone-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-stone-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="custom">Custom Order</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full border border-stone-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6">
                  <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                  <p>
                    Your message has been received. We'll get back to you as soon as possible,
                    usually within 24-48 business hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-stone-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display mb-4">Frequently Asked Questions</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How long does shipping take?",
                  answer: "Domestic orders typically arrive within 3-5 business days. International shipping takes 7-14 business days, depending on the destination country."
                },
                {
                  question: "What is your return policy?",
                  answer: "We accept returns within 30 days of delivery. Items must be unused, unworn, and in their original packaging with all tags attached."
                },
                {
                  question: "Do you offer custom orders?",
                  answer: "Yes, we offer custom designs for select products. Please contact us with your requirements, and we'll work with you to create a piece that meets your specific needs."
                },
                {
                  question: "How do I care for my Juwura products?",
                  answer: "Each Juwura piece comes with specific care instructions. Generally, we recommend storing items in their dust bags when not in use and avoiding exposure to excessive moisture, heat, or direct sunlight."
                }
              ].map((faq, index) => (
                <details 
                  key={index}
                  className="border border-stone-200 group"
                >
                  <summary className="flex justify-between items-center p-4 cursor-pointer bg-white">
                    <span className="font-medium">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-4 border-t border-stone-200 font-serif text-stone-700">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;