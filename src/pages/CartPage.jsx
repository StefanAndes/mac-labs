import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart
  } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="text-center">
          <FiShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Cart Items ({cartItems.length})</h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="divide-y">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-32 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.category}</p>
                            {item.selectedSize && (
                              <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                            )}
                            {item.selectedColor && (
                              <p className="text-sm text-gray-500">Color: {item.selectedColor}</p>
                            )}
                          </div>
                          <p className="font-semibold">${item.price}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100"
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 min-w-[50px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100"
                            >
                              <FiPlus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {shipping > 0 && (
                <div className="bg-yellow-50 p-3 rounded-lg mb-4 text-sm">
                  <p className="text-yellow-800">
                    Add ${(50 - subtotal).toFixed(2)} more to get free shipping!
                  </p>
                </div>
              )}

              <button
                onClick={() => navigate('/checkout')}
                className="w-full btn-primary mb-3"
              >
                Proceed to Checkout
              </button>
              
              <Link
                to="/products"
                className="block w-full text-center btn-secondary"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Secure Checkout</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ SSL encrypted payment</p>
                  <p>✓ 30-day return policy</p>
                  <p>✓ Secure personal data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 