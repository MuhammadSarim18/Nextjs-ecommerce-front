import ProductBox from "./ProductBox";

export default function NewProducts({ products }) {
    return (
        <div className="center">
            {products?.length > 0 && products.map(product => (
                <ProductBox {...product} />
            ))}
        </div>
    )
}