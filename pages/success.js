import Link from "next/link";

export default function Success() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-md w-full">

        {/* Success Icon */}
        <div className="text-green-600 text-6xl mb-4">
          ✓
        </div>

        <h1 className="text-3xl font-bold text-gray-800">
          Order Successful!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for your purchase.
        </p>

        <p className="mt-2 text-gray-500 text-sm">
          Your order has been placed successfully.
        </p>

        {/* Action button */}
        <Link href="/">
          <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
            Continue Shopping
          </button>
        </Link>

      </div>

    </div>
  );
}