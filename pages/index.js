import { useContext, useEffect } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import Link from "next/link";

export default function Cart({ cart }) {
  const { setCart } = useContext(CheckoutContext);

  // Store cart items in global context for later checkout steps
  useEffect(() => {
    if (cart?.cartItems) {
      setCart(cart.cartItems);
    }
  }, [cart, setCart]);

  // Prevent crash if cart data is not yet available
  if (!cart || !cart.cartItems) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading cart...</p>
      </div>
    );
  }

  // Calculate subtotal from cart items
  const subtotal = cart.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  const total = subtotal + cart.shipping_fee;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Cart Items */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">

          {cart.cartItems.map((item) => (
            <div
              key={item.product_id}
              className="flex items-center gap-6 border-b py-4"
            >
              <img
                src={item.image}
                alt={item.product_name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <p className="font-semibold text-lg">
                  {item.product_name}
                </p>

                <p className="text-gray-500">
                  ₹{item.product_price}
                </p>

                <p className="text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>

              <div className="font-semibold">
                ₹{item.product_price * item.quantity}
              </div>
            </div>
          ))}

        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">

          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>₹{cart.shipping_fee}</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

          </div>

          <Link href="/shipping">
            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
              Proceed to Checkout
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export async function getServerSideProps() {
  const cart = {
    cartItems: [
      {
        product_id: 101,
        product_name: "Bamboo Toothbrush (Pack of 4)",
        product_price: 299,
        quantity: 2,
        image: "https://via.placeholder.com/150"
      },
      {
        product_id: 102,
        product_name: "Reusable Cotton Produce Bags",
        product_price: 450,
        quantity: 1,
        image: "https://via.placeholder.com/150"
      }
    ],
    shipping_fee: 50,
    discount_applied: 0
  };

  return {
    props: { cart }
  };
}