import "../styles/globals.css";
import { CheckoutProvider } from "../context/CheckoutContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <CheckoutProvider>
      <Component {...pageProps} />
    </CheckoutProvider>
  );
}