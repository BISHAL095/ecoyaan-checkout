import { useState, useContext } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import { useRouter } from "next/router";

export default function Shipping() {
  const { setAddress } = useContext(CheckoutContext);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pin: "",
    city: "",
    state: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("@")) return alert("Invalid email");
    if (form.phone.length !== 10) return alert("Phone must be 10 digits");

    setAddress(form);
    router.push("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Shipping Details
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            name="pin"
            placeholder="PIN Code"
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            name="state"
            placeholder="State"
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="col-span-1 md:col-span-2">
            <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition shadow">
              Continue to Payment
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}