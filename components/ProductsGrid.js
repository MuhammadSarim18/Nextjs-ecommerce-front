import ProductBox from "./ProductBox"
export default function ProductsGrid({ products }) {
    return (
        <div className="grid gap-5 grid-cols-3 my-0 mt-auto py-8 px-5">
            {products?.length > 0 && products.map(product => (
                <ProductBox key={product._id} {...product} />
            ))}
        </div>
    )
}