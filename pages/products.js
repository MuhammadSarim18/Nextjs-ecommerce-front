import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function ProductsPage({ products }) {
    return (
        <>
            <Header />
            <div className="max-w-[800px] my-0 mx-auto py-0 px-5">
                <h1 className="text-2xl">All Products</h1>
                <ProductsGrid products={products} />
            </div>
        </>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, { sort: { '_id': -1 } });
    console.log({ products });
    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    }
}