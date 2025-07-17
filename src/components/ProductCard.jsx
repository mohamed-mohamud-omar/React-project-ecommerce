import { useState } from 'react';
import { useCart } from '../../context/CartContext'; // ✅ Add this


// Import SVG icons directly (these would be in your assets folder)
const MasterCardIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.245 16.891h-6.49V7.11h6.49v9.782z" fill="#FF5F00"/>
    <path d="M9.265 12a6.734 6.734 0 012.622-5.29 6.728 6.728 0 100 10.58A6.734 6.734 0 019.265 12z" fill="#EB001B"/>
    <path d="M18.633 12a6.728 6.728 0 01-10.746 5.29 6.728 6.728 0 000-10.58A6.728 6.728 0 0118.633 12z" fill="#F79E1B"/>
  </svg>
);

const VisaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.31 8.383h3.059l-1.98 7.234H7.33L9.31 8.383z" fill="#1A1F71"/>
    <path d="M19.281 8.383h2.327L18.4 15.617h-2.078a.898.898 0 01-.84-.56l-2.8-6.674h3.058l1.98 5.428 2.062-5.428z" fill="#1A1F71"/>
    <path d="M13.765 8.383h3.06l-1.98 7.234h-3.058l1.978-7.234z" fill="#1A1F71"/>
    <path d="M5.353 8.383L3.375 15.617H.296L3.1 8.383h2.253z" fill="#1A1F71"/>
  </svg>
);

const AmexIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0V0z" fill="#006FCF"/>
    <path d="M4.5 9.75h2.25V14H4.5V9.75zM22.5 9h-3v5.25h3V9z" fill="#fff"/>
    <path d="M20.25 9h-1.5v5.25h1.5V9zM18 9h-1.5v5.25H18V9z" fill="#fff"/>
    <path d="M16.5 9H15v5.25h1.5V9zM13.5 9H12v5.25h1.5V9z" fill="#fff"/>
    <path d="M11.25 9H9.75v5.25h1.5V9zM8.25 9H6.75v5.25h1.5V9z" fill="#fff"/>
    <path d="M1.5 9h3v5.25h-3V9z" fill="#fff"/>
    <path d="M12 11.625h1.5v1.125H12v-1.125z" fill="#006FCF"/>
    <path d="M9.75 11.625h1.5v1.125h-1.5v-1.125z" fill="#006FCF"/>
    <path d="M7.5 11.625H9v1.125H7.5v-1.125z" fill="#006FCF"/>
    <path d="M5.25 11.625h1.5v1.125h-1.5v-1.125z" fill="#006FCF"/>
    <path d="M3 11.625h1.5v1.125H3v-1.125z" fill="#006FCF"/>
    <path d="M15 11.625h1.5v1.125H15v-1.125z" fill="#006FCF"/>
    <path d="M16.5 11.625H18v1.125h-1.5v-1.125z" fill="#006FCF"/>
    <path d="M18.75 11.625h1.5v1.125h-1.5v-1.125z" fill="#006FCF"/>
    <path d="M21 11.625h1.5v1.125H21v-1.125z" fill="#006FCF"/>
  </svg>
);

const DiscoverIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0a12 12 0 100 24 12 12 0 000-24z" fill="#FF6000"/>
    <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" fill="#fff"/>
    <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" fill="#FF6000"/>
    <path d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill="#fff"/>
    <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="#FF6000"/>
    <path d="M12 9a3 3 0 100 6 3 3 0 000-6z" fill="#fff"/>
    <path d="M12 10a2 2 0 100 4 2 2 0 000-4z" fill="#FF6000"/>
  </svg>
);

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [showCardOptions, setShowCardOptions] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    cardType: 'mastercard',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
    const { addToCart } = useCart();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Purchase confirmed! Thank you for your order.');
    setShowModal(false);
  };

  const cardOptions = [
    { value: 'mastercard', label: 'MasterCard', icon: <MasterCardIcon /> },
    { value: 'visa', label: 'Visa', icon: <VisaIcon /> },
    { value: 'amex', label: 'American Express', icon: <AmexIcon /> },
    { value: 'discover', label: 'Discover', icon: <DiscoverIcon /> }
  ];

  const selectedCard = cardOptions.find(card => card.value === formData.cardType);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-3">${product.price.toFixed(2)}</p>
        <div className="flex justify-between items-center gap-2">
    <button
  onClick={() => addToCart(product)} // <-- this adds the product to cart
  className="flex items-center justify-center gap-1 bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition-all duration-200 text-sm flex-1"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
  <span>Add to Cart</span>
</button>


          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-1 bg-emerald-600 text-white px-3 py-2 rounded-md hover:bg-emerald-700 transition-all duration-200 text-sm flex-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Buy Now</span>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Complete Your Purchase</h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center mb-6 border-b pb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-20 h-20 object-contain mr-4"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-lg">${product.price.toFixed(2)}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left Column - Payment Information */}
                  <div className="md:w-1/2">
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Payment Method</h3>
                      
                      <div className="relative mb-4">
                        <label className="block text-xs font-medium text-gray-500 mb-1">CARD TYPE</label>
                        <div 
                          className="w-full px-3 py-2 border rounded-md bg-white text-sm flex items-center justify-between cursor-pointer"
                          onClick={() => setShowCardOptions(!showCardOptions)}
                        >
                          <div className="flex items-center">
                            <span className="mr-2">{selectedCard.icon}</span>
                            <span>{selectedCard.label}</span>
                          </div>
                          <svg 
                            className={`h-4 w-4 text-gray-500 transition-transform ${showCardOptions ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        
                        {showCardOptions && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                            {cardOptions.map(option => (
                              <div
                                key={option.value}
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                onClick={() => {
                                  setFormData({...formData, cardType: option.value});
                                  setShowCardOptions(false);
                                }}
                              >
                                <span className="mr-2">{option.icon}</span>
                                <span>{option.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="block text-xs font-medium text-gray-500 mb-1">CARD NUMBER</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">EXPIRY DATE</label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="w-full px-3 py-2 border rounded-md text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="123"
                            className="w-full px-3 py-2 border rounded-md text-sm"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Personal Information */}
                  <div className="md:w-1/2">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 transition mt-6 font-medium text-lg"
                >
                  Confirm Purchase - ${product.price.toFixed(2)}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;