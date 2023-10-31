import Link from "next/link";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";

export default function Featured({ product }) {
    const { addProduct } = useContext(CartContext);
    function addFeaturedToCart() {
        addProduct(product._id)
        console.log("added");
    }
    return (
        <div className="bg-[#222] text-white px-0 py-12">
            <div className="max-w-[800px] my-0 mx-auto py-0 px-5">
                <div className="grid grid-cols-1 grid-9 gap-10 md:grid-cols-11">
                    <div className="flex items-center col-span-6 order-2 md:order-none">
                        <div>
                            <h1 className="mb-3 font-normal text-2xl md:text-5xl">{product.title}</h1>
                            <p className="text-gray-400 text-sm">{product.description}
                            </p>
                            <div className="flex gap-2 mt-6">
                                <Link href={'/products/' + product._id} className="secBtn">
                                    Read more
                                </Link>
                                <button className="primaryBtn"
                                    onClick={addFeaturedToCart}
                                >
                                    <CartIcon />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center col-span-5">
                        <Image alt="A meaningful description" className="max-w-full max-h-52 block my-0 mx-auto md:max-w-full" src="https://f005.backblazeb2.com/file/sarim-next-ecommerce/1698777272099.jpg" />
                    </div>
                </div>

            </div>
        </div>
    )
}