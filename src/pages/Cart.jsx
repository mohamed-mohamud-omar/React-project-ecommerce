import { useState } from 'react';
import { useCart } from '../../context/CartContext';

// --- SVG Card Icons ---
const MasterCardIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.245 16.891h-6.49V7.11h6.49v9.782z" fill="#FF5F00" />
    <path d="M9.265 12a6.734 6.734 0 012.622-5.29 6.728 6.728 0 100 10.58A6.734 6.734 0 019.265 12z" fill="#EB001B" />
    <path d="M18.633 12a6.728 6.728 0 01-10.746 5.29 6.728 6.728 0 000-10.58A6.728 6.728 0 0118.633 12z" fill="#F79E1B" />
  </svg>
);

const VisaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.31 8.383h3.059l-1.98 7.234H7.33L9.31 8.383z" fill="#1A1F71" />
    <path d="M19.281 8.383h2.327L18.4 15.617h-2.078a.898.898 0 01-.84-.56l-2.8-6.674h3.058l1.98 5.428 2.062-5.428z" fill="#1A1F71" />
    <path d="M13.765 8.383h3.06l-1.98 7.234h-3.058l1.978-7.234z" fill="#1A1F71" />
    <path d="M5.353 8.383L3.375 15.617H.296L3.1 8.383h2.253z" fill="#1A1F71" />
  </svg>
);

const AmexIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#006FCF" />
    <text x="5" y="16" fill="white" fontSize="8" fontWeight="bold">AMEX</text>
  </svg>
);

const DiscoverIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FF6000" />
    <text x="5" y="16" fill="white" fontSize="8" fontWeight="bold">DISC</text>
  </svg>
);

// --- MAIN COMPONENT ---
const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
    clearCart
  } = useCart();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful payment
    alert('✅ Payment successful! Thank you for your order.');
    clearCart();
    setFormData({
      name: '',
      address: '',
      phone: '',
      cardType: 'mastercard',
      cardNumber: '',
      expiry: '',
      cvv: ''
    });
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
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600">🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is currently empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-xl p-6 transition hover:shadow-xl"
            >
              <div className="flex items-center gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg border"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md transition"
                >
                  −
                </button>
                <span className="text-gray-800 font-medium bg-gray-100 px-3 py-1 rounded-full">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md transition"
                >
                  +
                </button>
              </div>

              <div className="text-right mt-4 sm:mt-0">
                <p className="text-lg font-bold text-indigo-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500 hover:underline mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="border-t pt-6 text-right">
            <h3 className="text-2xl font-bold text-gray-800">
              Total: <span className="text-indigo-600">${cartTotal.toFixed(2)}</span>
            </h3>
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition text-lg"
            >
              Buy All Now
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Complete Your Purchase</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="flex flex-col md:flex-row gap-6">
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
                          <svg className={`h-4 w-4 text-gray-500 transition-transform ${showCardOptions ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                                  setFormData({ ...formData, cardType: option.value });
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
                        <input type="text" name="cardNumber" placeholder='1234 5678 9012 3456' value={formData.cardNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-sm" required />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">EXPIRY DATE</label>
                          <input type="text" name="expiry" placeholder='MM/YY' value={formData.expiry} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-sm" required />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">CVV</label>
                          <input type="text" name="cvv" placeholder='123' value={formData.cvv} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-sm" required />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" name="name" placeholder='Enter your Name' value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 transition mt-6 font-medium text-lg"
                >
                  Confirm Purchase - ${cartTotal.toFixed(2)}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
