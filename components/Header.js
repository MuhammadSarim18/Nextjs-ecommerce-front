import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black">
            <div className="max-w-[800px] my-0 mx-auto py-0 px-5">
                <div className="flex justify-between py-5 px-0">
                    <Link className="text-white " href={'/'}>Ecommerce</Link>
                    <nav className="flex gap-4">
                        <Link className="text-yellow-50/60" href={'/'}>Home</Link>
                        <Link className="text-yellow-50/60" href={'/products'}>All products</Link>
                        <Link className="text-yellow-50/60" href={'/categories'}>Categories</Link>
                        <Link className="text-yellow-50/60" href={'/account'}>Account</Link>
                        <Link className="text-yellow-50/60" href={'/cart'}>Cart (0)</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}