import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";

export default function ProductBox({ _id, title, description, price, images }) {
    const { addProduct } = useContext(CartContext);
    const url = '/product/' + _id;
    return (
        <div>
            <Link href={url} className="bg-white p-5 h-52 text-center flex items-center justify-center rounded-xl">
                <div>
                    <Image alt="A meaningful description" className="max-w-full max-h-32" src={images[0]} />
                </div>
            </Link>
            <div className="mt-1">
                <Link href={url} className="text-sm">
                    {title}
                </Link>
                <div className="block items-center justify-between mt-1 md:flex md:gap-1">
                    <div className="text-xl text-right md:text-right md:font-[700]">
                        RS{price}
                    </div>
                    <button className="cartBtn"
                        onClick={() => addProduct(_id)}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}