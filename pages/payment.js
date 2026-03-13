import { useContext, useEffect } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import { useRouter } from "next/router";

export default function Payment() {
  const { cart, address } = useContext(CheckoutContext);
  const router = useRouter();

  useEffect(() => {
    if (!address) {
      router.push("/shipping");
    }
  }, [address, router]);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  const shipping = 50;
  const total = subtotal + shipping;

  const payNow = () => {
    router.push("/success");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 mt-10">

        <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>

        <div className="border-b pb-4">
          <h2 className="font-semibold text-lg mb-2">Shipping Address</h2>
          <p className="text-gray-700">{address?.name}</p>
          <p className="text-gray-600">
            {address?.city}, {address?.state}
          </p>
          <p className="text-gray-600">{address?.phone}</p>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

          {cart.map((item) => (
            <div
              key={item.product_id}
              className="flex justify-between border-b py-2"
            >
              <span>{item.product_name} x {item.quantity}</span>
              <span>₹{item.product_price * item.quantity}</span>
            </div>
          ))}

          <div className="mt-4 space-y-2 border-t pt-4">
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </p>

            <p className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </p>

            <p className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </p>
          </div>
        </div>

        <button
          onClick={payNow}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold py-3 rounded-lg transition"
        >
          Pay Securely
        </button>

      </div>
    </div>
  );
}