import Link from "next/link";
import CartIcon from "./icons/CartIcon";

export default function Featured({ product }) {
    return (
        <div className="bg-black text-white px-0 py-12">
            <div className="max-w-[800px] my-0 mx-auto py-0 px-5">
                <div className="grid grid-cols-11 grid-9 gap-10">
                    <div className="flex items-center col-span-6">
                        <div>
                            <h1 className="mb-3 font-normal text-5xl">{product.title}</h1>
                            <p className="text-gray-400 text-sm">{product.description}
                            </p>
                            <div className="flex gap-2 mt-6">
                                <Link href={'/products/' + product._id} className="secBtn">
                                    Read more
                                </Link>
                                <button className="primaryBtn">
                                    <CartIcon />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center col-span-5">
                        <img src="https://f005.backblazeb2.com/file/sarim-next-ecommerce/1690395920743.png" />
                    </div>
                </div>

            </div>
        </div>
    )
}