import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductsImages";
import CartIcon from "@/components/icons/CartIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";

export default function ProductPage({ product }) {
    const { addProduct } = useContext(CartContext);
    return (
        <>
            <Header />
            <div className="max-w-[800px] my-0 mx-auto py-0 px-5">
                <div class="grid grid-cols-[0.8fr,1.2fr] gap-10 mt-10">
                    <div className=" p-8 bg-white rounded-xl">
                        <ProductImages images={product.images} />
                    </div>
                    <div>
                        <h2 className="text-4xl mt-7 mb-5 mx-0 font-normal">{product.title}</h2>
                        <p>
                            {product.description}
                        </p>
                        <div className="flex gap-5 items-center mt-3">
                            <div className="text-2xl">PKR {product.price}</div>
                            <div>
                                <button
                                    onClick={() => addProduct(product._id)}
                                    className="primaryBtn">
                                    <CartIcon />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps(context) {
    await mongooseConnect();
    const { id } = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}