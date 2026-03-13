import { useContext, useEffect } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import Link from "next/link";

export default function Cart({ data }) {
  const { setCart } = useContext(CheckoutContext);

  useEffect(() => {
    setCart(data.cartItems);
  }, []);

  const subtotal = data.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  const total = subtotal + data.shipping_fee;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Cart Items */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">

          {data.cartItems.map((item) => (
            <div
              key={item.product_id}
              className="flex items-center gap-6 border-b py-4"
            >
              <img
                src={item.image}
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
              <span>₹{data.shipping_fee}</span>
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cart`);
  const data = await res.json();

  return {
    props: { data },
  };
}