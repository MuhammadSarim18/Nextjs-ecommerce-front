import ProductsGrid from "./ProductsGrid";

export default function NewProducts({ products }) {
    return (
        <div className="max-w-[800px] my-0 mx-auto py-0 px-5">
            <h2 className="text-4xl mt-7 mb-5 mx-0 font-normal">New Arrivals</h2>
            <ProductsGrid products={products} />
        </div>
    )
}