import React from 'react';

export default function Cart() {

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div className="p-4 px-3 md:px-10 lg:px-20 mx-auto my-8 lg:mt-16" data-aos="zoom-in-up" data-aos-duration="2000">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-6 bg-gray-200 rounded-t-lg">
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold">Booking Cart</h1>
          <span className="text-gray-600 lg:text-xl font-semibold">({cartItems.length} items)</span>
        </div>

        {cartItems.map((item, index) => (
          <div key={index} className="py-5 pl-4 md:py-6 lg:py-8  md:pl-6 lg:pl-8 md:pr-4">
            <div className="flex items-center mb-4">
              <img className="h-20 w-20 lg:h-32 lg:w-32 object-contain rounded-lg mr-4 lg:mr-6" src={item.image} alt={item.title} />
              <div className="flex-1">
                <h2 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2">{item.title}</h2>
                <h3 className="lg:text-xl text-gray-900 mb-1 lg:mb-2">{item.category}</h3>
                <span className="text-gray-600 text-lg lg:text-xl lg:mb-2 font-semibold">{item.price}</span>
              </div>
              <button
                className="text-gray-600 hover:text-red-500 text-xl lg:text-3xl font-bold p-2 mr-1 rounded-lg"
                onClick={() => handleRemoveFromCart(index)}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
          </div>
        ))}

        <div className="px-4 md:px-6 py-6 md:py-8 bg-gray-200 rounded-b-lg">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg md:text-xl xl:text-2xl">Total:</span>
            <span className="font-bold text-lg md:text-xl xl:text-2xl lg:pr-5">${calculateTotal(cartItems)}</span>
          </div>
          <button className="block w-full mt-4 bg-[#00A4EF] hover:bg-[#0989c9] md:text-lg lg:text-xl text-white font-bold py-2.5 lg:py-3.5 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
};


const handleRemoveFromCart = (index) => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  window.location.reload();
};
