import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, Minus, Plus, ShoppingBag, Star } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Placeholder product data matching the one from ShopPage
const products = [
  {
    id: 1,
    name: 'The Aso Bag',
    price: 349.99,
    category: 'bags',
    image: 'https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Handcrafted from the finest leather, the Aso Bag combines traditional design elements with modern functionality. Perfect for everyday use or special occasions.',
    details: [
      'Genuine full-grain leather',
      'Hand-stitched details',
      'Interior zipper pocket',
      'Adjustable shoulder strap',
      'Magnetic closure'
    ],
    variations: ['Brown', 'Black', 'Tan'],
    rating: 4.8,
    reviewCount: 24
  },
  {
    id: 2,
    name: 'Adire Clutch',
    price: 229.99,
    category: 'bags',
    image: 'https://images.pexels.com/photos/11568359/pexels-photo-11568359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'The Adire Clutch features traditional hand-dyed textile paired with premium leather. Each piece has a unique pattern, making it truly one-of-a-kind.',
    details: [
      'Hand-dyed Adire fabric',
      'Leather trim and interior',
      'Card slots and zip pocket',
      'Detachable wrist strap',
      'Gold-tone hardware'
    ],
    variations: ['Indigo', 'Earth', 'Sunset'],
    rating: 4.7,
    reviewCount: 18
  },
  // Other products can be added here to match the ShopPage
];

// Simple 3D model for product visualization
const ProductModel = () => {
  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[1.5, 1, 0.5]} />
      <meshStandardMaterial color="#c2824f" />
    </mesh>
  );
};

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '1');
  
  // Find the product based on the ID
  const product = products.find(p => p.id === productId) || products[0];
  
  const [quantity, setQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState(product.variations[0]);
  const [showModel, setShowModel] = useState(false);
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-stone-100 py-4">
        <div className="container-custom">
          <div className="flex items-center text-sm text-stone-600">
            <a href="/" className="hover:text-primary-800">Home</a>
            <ChevronRight size={14} className="mx-2" />
            <a href="/shop" className="hover:text-primary-800">Shop</a>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-stone-900">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail */}
      <div className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image and 3D Model */}
            <div className="relative">
              {!showModel ? (
                <>
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto"
                  />
                  <button 
                    onClick={() => setShowModel(true)}
                    className="absolute bottom-4 right-4 bg-white py-2 px-4 shadow-md text-sm font-medium"
                  >
                    View in 3D
                  </button>
                </>
              ) : (
                <div className="relative h-[500px] bg-stone-100">
                  <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <ProductModel />
                    <OrbitControls enableZoom={true} />
                  </Canvas>
                  <button 
                    onClick={() => setShowModel(false)}
                    className="absolute top-4 right-4 bg-white py-2 px-4 shadow-md text-sm font-medium"
                  >
                    View Photo
                  </button>
                </div>
              )}
            </div>
            
            {/* Product Information */}
            <div>
              <h1 className="text-3xl font-display mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={16}
                      fill={i < Math.floor(product.rating) ? "#c2824f" : "none"}
                      stroke={i < Math.floor(product.rating) ? "#c2824f" : "#c2824f"}
                      className="mr-1"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-stone-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              {/* Price */}
              <p className="text-2xl font-serif text-primary-800 mb-6">
                ${product.price.toFixed(2)}
              </p>
              
              {/* Description */}
              <p className="mb-8 font-serif text-stone-700">
                {product.description}
              </p>
              
              {/* Variations */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Color:</h3>
                <div className="flex space-x-3">
                  {product.variations.map(variation => (
                    <button
                      key={variation}
                      onClick={() => setSelectedVariation(variation)}
                      className={`px-4 py-2 border ${
                        selectedVariation === variation 
                          ? 'border-primary-800 bg-primary-50' 
                          : 'border-stone-300 hover:border-stone-400'
                      }`}
                    >
                      {variation}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Quantity:</h3>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-stone-300"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="w-16 h-10 flex items-center justify-center border-t border-b border-stone-300">
                    {quantity}
                  </div>
                  <button 
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-stone-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Add to Cart */}
              <button className="btn-primary w-full flex items-center justify-center mb-6">
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </button>
              
              {/* Product Details */}
              <div className="border-t border-stone-200 pt-8 mt-8">
                <h3 className="font-medium text-lg mb-4">Product Details</h3>
                <ul className="list-disc pl-5 space-y-2 font-serif text-stone-700">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;