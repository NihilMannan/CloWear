import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

const productData = {
  "noir-polka-top": {
    title: "Noir Polka Dot Top",
    description: "An ultra-soft, organic cotton knit top with contrast polka detail and relaxed fit.",
    price: "₹1,499",
    material: "100% Organic Cotton",
    features: ["Breathable", "Slim Fit", "Machine Washable"],
    image: "/products/noir-polka.jpg",
  },
  "eco-luxe-crop": {
    title: "Eco Luxe Crop",
    description: "Crafted from silky smooth Tencel and spandex for that luxe, stretchy feel.",
    price: "₹1,899",
    material: "Tencel™ Modal + Spandex",
    features: ["Soft Feel", "Stretch Fit", "Eco-Friendly"],
    image: "/products/luxe-crop.jpg",
  },
  "flexactive-leggings": {
    title: "FlexActive Leggings",
    description: "Premium leggings made from recycled nylon and Tencel for active days.",
    price: "₹2,299",
    material: "Recycled Nylon + Tencel + Spandex",
    features: ["Moisture-Wicking", "Side Pocket", "High Waist"],
    image: "/products/flex-leggings.jpg",
  },
};

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;
  const product = productData[slug as keyof typeof productData];
  const [cart, setCart] = useState<string[]>([]);

  if (!product) return <p className="text-white p-6">Loading...</p>;

  function handleAddToCart() {
    setCart([...cart, product.title]);
    alert(`${product.title} added to cart!`);
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-gray-300">{product.description}</p>
          <p className="text-white text-2xl font-semibold">{product.price}</p>
          <p className="text-sm text-gray-400">Material: {product.material}</p>

          <ul className="list-disc list-inside text-gray-400">
            {product.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>

          <button className="mt-4 bg-white text-black px-4 py-2" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-10">
        <h2 className="text-3xl font-bold mb-2">CloWear: Wear It, Feel Sexy, Change the World</h2>
        <p className="text-gray-300 max-w-3xl">
          CloWear isn’t just fashion—it’s an attitude. It’s about owning your confidence, feeling unstoppable, and wearing clothes that move with you. Designed for real life, CloWear blends effortless style with unmatched comfort, so you don’t just look good—you feel good.
        </p>
        <p className="text-gray-400 mt-2">
          Our designs are made to fit, flatter, and empower. Whether you’re dressing up or keeping it casual, CloWear makes sure you always look on point. And the best part? Every piece is crafted responsibly—so while you’re turning heads, you’re also making a smarter choice for the planet.
        </p>
        <p className="text-white mt-2 font-semibold">
          This isn’t just fashion. It’s a movement. CloWear is for those who refuse to compromise—on style, on confidence, on impact.
        </p>
        <p className="mt-2 italic text-gray-300">Join us. Wear it, feel sexy, and change the world.</p>
      </div>
    </div>
  );
}