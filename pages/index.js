export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/cart");
  const data = await res.json();

  return {
    props: { data }
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Cart</h1>
      {data.cartItems.map((item) => (
        <div key={item.product_id}>
          <p>{item.product_name}</p>
          <p>{item.product_price}</p>
        </div>
      ))}
    </div>
  );
}