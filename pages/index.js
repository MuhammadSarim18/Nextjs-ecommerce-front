import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ product }) {
  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  )
}


export async function getServerSideProps() {
  const featuredProductId = '64b7c1f0420b5820aa49b9e0';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId)
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}