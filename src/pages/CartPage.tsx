import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronRight } from 'lucide-react';

// Sample cart items
const cartItems = [
  {
    id: 1,
    name: 'The Aso Bag',
    price: 349.99,
    quantity: 1,
    image: 'https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    variation: 'Brown'
  },
  {
    id: 2,
    name: 'Adire Clutch',
    price: 229.99,
    quantity: 1,
    image: 'https://images.pexels.com/photos/11568359/pexels-photo-11568359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    variation: 'Indigo'
  }
];

const CartPage: React.FC = () => {
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const total = subtotal + shipping;
  
  return (
    <>
      {/* Page header */}
      <div className="bg-primary-900 py-32 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Your Cart</h1>
          <p className="text-white/80 max-w-xl mx-auto font-serif">
            Review your items before proceeding to checkout.
          </p>
        </div>
      </div>
      
      {/* Cart content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="border border-stone-200">
                {/* Table header */}
                <div className="hidden md:grid grid-cols-12 bg-stone-50 p-4 border-b border-stone-200">
                  <div className="col-span-6">
                    <h2 className="font-medium">Product</h2>
                  </div>
                  <div className="col-span-2 text-center">
                    <h2 className="font-medium">Price</h2>
                  </div>
                  <div className="col-span-2 text-center">
                    <h2 className="font-medium">Quantity</h2>
                  </div>
                  <div className="col-span-2 text-right">
                    <h2 className="font-medium">Total</h2>
                  </div>
                </div>
                
                {/* Cart items */}
                {cartItems.map(item => (
                  <div 
                    key={item.id} 
                    className="grid grid-cols-1 md:grid-cols-12 p-4 border-b border-stone-200 items-center"
                  >
                    {/* Product */}
                    <div className="col-span-6 flex items-center mb-4 md:mb-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-stone-600 text-sm">Variation: {item.variation}</p>
                        <button className="text-stone-500 hover:text-red-600 flex items-center mt-2 text-sm md:hidden">
                          <Trash2 size={14} className="mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="col-span-2 text-center md:text-center">
                      <p className="inline-block md:hidden font-medium mr-2">Price:</p>
                      <p className="text-primary-800 inline-block md:block font-serif">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    
                    {/* Quantity */}
                    <div className="col-span-2 text-center md:text-center mt-2 md:mt-0">
                      <p className="inline-block md:hidden font-medium mr-2">Quantity:</p>
                      <p className="inline-block md:block">{item.quantity}</p>
                    </div>
                    
                    {/* Total */}
                    <div className="col-span-2 text-right flex items-center justify-between md:justify-end mt-2 md:mt-0">
                      <p className="md:hidden font-medium">Total:</p>
                      <div className="flex items-center">
                        <p className="text-primary-800 font-medium font-serif">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button className="ml-4 text-stone-500 hover:text-red-600 hidden md:block">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Continue shopping */}
              <div className="mt-8">
                <Link to="/shop" className="text-primary-800 hover:text-primary-600 flex items-center font-medium">
                  <ChevronRight size={16} className="transform rotate-180 mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-stone-50 border border-stone-200 p-6">
                <h2 className="text-xl font-display mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <p className="text-stone-600">Subtotal</p>
                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-stone-600">Shipping</p>
                    <p className="font-medium">${shipping.toFixed(2)}</p>
                  </div>
                  <div className="border-t border-stone-300 pt-4 flex justify-between">
                    <p className="font-medium">Total</p>
                    <p className="font-display text-xl">${total.toFixed(2)}</p>
                  </div>
                </div>
                
                <button className="btn-primary w-full mb-4">
                  Proceed to Checkout
                </button>
                
                <p className="text-xs text-stone-500 text-center">
                  Taxes calculated at checkout. Shipping calculated based on delivery address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;