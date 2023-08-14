import ProductsGrid from "./ProductsGrid";

export default function NewProducts({ products }) {
    return (
        <div className="max-w-[800px] my-0 mx-auto py-0 px-5">
            <h2 className="text-4xl mt-7 mb-5 mx-0 font-normal">New Arrivals</h2>
            <div className="grid gap-5 grid-cols-3 my-0 mt-auto py-8 px-5">
                <ProductsGrid products={products} />
            </div>
        </div>
    )
}