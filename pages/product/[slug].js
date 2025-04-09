import { useRouter } from 'next/router';

const productData = {
  "noir-polka-top": {
    title: "Noir Polka Dot Top",
    description: "An ultra-soft, organic cotton knit top with contrast polka detail.",
    price: "₹1,499",
    material: "100% Organic Cotton",
    features: ["Breathable", "Slim Fit", "Machine Washable"]
  }
};

export default function ProductPage() {
  const { query } = useRouter();
  const product = productData[query.slug];

  if (!product) return <p style={{ color: 'white', padding: '2rem' }}>Loading...</p>;

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem' }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Material:</strong> {product.material}</p>
      <ul>
        {product.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  );
}
