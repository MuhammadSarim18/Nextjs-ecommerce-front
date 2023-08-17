import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";

export default function Header() {
    const { cartProducts } = useContext(CartContext);
    const [mobileNavActive, setMobileNavActive] = useState(false);
    return (
        <header>
            <div className="max-w-[800px] my-0 mx-auto py-0 px-5">
                <div className="flex justify-between py-5 px-0">
                    <Link className="text-white relative z-[3]" href={'/'}>Ecommerce</Link>
                    <nav mobileNavActive={mobileNavActive} className= {(mobileNavActive ? 'block': 'hidden') + " block gap-4 fixed top-0 bottom-0 left-0 right-0 px-5 py-20 bg-[#222] md:flex md:static md:p-0"}>
                        <Link className="py-3 block text-yellow-50/60 md:p-0" href={'/'}>Home</Link>
                        <Link className="py-3 block text-yellow-50/60 md:p-0" href={'/products'}>All products</Link>
                        <Link className="py-3 block text-yellow-50/60 md:p-0" href={'/categories'}>Categories</Link>
                        <Link className="py-3 block text-yellow-50/60 md:p-0" href={'/account'}>Account</Link>
                        <Link className="py-3 block text-yellow-50/60 md:p-0" href={'/cart'}>Cart ({cartProducts.length})</Link>
                    </nav>
                    <button onClick={() => setMobileNavActive(prev => !prev)} className="bg-transparent w-8 h-8 border-0 text-white cursor-pointer relative z-[3] md:hidden">
                        <BarsIcon />
                    </button>
                </div>
            </div>
        </header>
    )
}