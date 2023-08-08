import Link from "next/link";
import CartIcon from "./icons/CartIcon";

export default function ProductBox({ _id, title, description, price, images }) {
    const url = '/product/' + _id;
    return (
        <div>
            <Link href={url} className="bg-white p-5 h-52 text-center flex items-center justify-center rounded-xl">
                <div>
                    <img className="max-w-full max-h-32" src={images[0]} />
                </div>
            </Link>
            <div className="mt-1">
                <Link href={url} className="text-sm">
                    {title}
                </Link>
                <div className="flex items-center justify-between ">
                    <div className="text-2xl font-[700]">
                        RS{price}
                    </div>
                    <button className="cartBtn">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}