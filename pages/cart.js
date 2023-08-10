import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function CartPage() {
    const { cartProducts, clearCart, addProduct, removeProduct } = useContext(CartContext);
    const [isSuccess, setIsSuccess] = useState(false);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts })
                .then(responce => {
                    setProducts(responce.data)
                })
        } else {
            setProducts([]);
        }
    }, [cartProducts]);
    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }
        if (window.location.href.includes('success')) {
            setIsSuccess(true);
            clearCart();
        }
    }, [])
    function moreOfThisProduct(id) {
        addProduct(id);
    }
    function lessOfThisProduct(id) {
        removeProduct(id)
    }
    async function goToPayment() {
        const responce = await axios.post('/api/checkout', {
            name, email, city, postalCode, streetAddress, country, cartProducts,
            cartProducts,
        });
        if (responce.data.url) {
            window.location = responce.data.url
        }
    }
    let total = 0;
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price
    }
    // const isCartSuccess = typeof window !== 'undefined' && window.location.href.includes('success');
    if (isSuccess) {
        return (
            <>
                <Header />
                <div className="max-w-[800px] my-0 mx-auto py-0 px-5">
                    <div className="grid grid-cols-10 gap-10 mt-10">
                        <div className="col-span-6 p-8 bg-white rounded-xl">
                            <h2 className="text-4xl mt-7 mb-5 mx-0 font-normal">Thanks for your order!</h2>
                            <p>We will contact you when it is ready.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Header />
            <div className="max-w-[800px] my-0 mx-auto py-0 px-5">
                <div className="grid grid-cols-10 gap-10 mt-10">
                    <div className="col-span-6 p-8 bg-white rounded-xl">
                        <h2 className="text-4xl mt-7 mb-5 mx-0 font-normal">Cart</h2>
                        {!cartProducts?.length && (
                            <div>Your cart is empty</div>
                        )}
                        {products?.length > 0 && (
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr>
                                            <td className="py-3 px-0">
                                                <div className="max-w-[100px] max-h-[100px] p-3 border rounded-xl flex items-center justify-center">
                                                    <img className="max-w-[80px] max-h-[80px]" src={product.images[0]} />
                                                </div>
                                                {product.title}
                                            </td>
                                            <td>
                                                <button className="addsubBtn"
                                                    onClick={() => lessOfThisProduct(product._id)}
                                                >-</button>
                                                <span className="px-1 py-0">
                                                    {cartProducts.filter(id => id === product._id).length}
                                                </span>
                                                <button className="addsubBtn"
                                                    onClick={() => moreOfThisProduct(product._id)}
                                                >+</button>
                                            </td>
                                            <td>
                                                RS:{cartProducts.filter(id => id === product._id).length * product.price}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>RS:{total}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}



                    </div>
                    {!!cartProducts?.length && (
                        <div className="col-span-4 p-8 bg-white rounded-xl">
                            <h2 className="text-4xl mt-7 mb-5 mx-0 font-normal block">Order Information</h2>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                name="name"
                                onChange={ev => setName(ev.target.value)} />
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                name="email"
                                onChange={ev => setEmail(ev.target.value)} />
                            <div className="flex gap-1">
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    name="city"
                                    onChange={ev => setCity(ev.target.value)} />
                                <input
                                    type="text"
                                    placeholder="Postal Code"
                                    value={postalCode}
                                    name="postalCode"
                                    onChange={ev => setPostalCode(ev.target.value)} />
                            </div>
                            <input
                                type="text"
                                placeholder="Street Address"
                                value={streetAddress}
                                name="streetAddress"
                                onChange={ev => setStreetAddress(ev.target.value)} />
                            <input
                                type="text"
                                placeholder="Country"
                                value={country}
                                name="country"
                                onChange={ev => setCountry(ev.target.value)} />
                            <button className="orderBtn"
                                onClick={goToPayment}>
                                Continue to payment
                            </button>
                        </div>
                    )}


                </div>
            </div>

        </>
    )
}