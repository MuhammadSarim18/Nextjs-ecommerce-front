import Image from "next/image"
import { useState } from "react"

export default function ProductImages({ images }) {
    const [activeImage, setActiveImage] = useState(images?.[0])
    return (
        <>
            <div className="text-center">
                <Image className="max-w-full mx-auto my-0 max-h-52" src={activeImage} />
            </div>
            <div className="flex gap-3 flex-grow-0 mt-3 ">
                {images.map(image => (
                    <div
                    className={`border-2 h-12 cursor-pointer rounded-md ${image === activeImage ? 'border' : 'border-transparent'}`}
                        onClick={() => setActiveImage(image)}>
                        <Image
                            className="max-w-full max-h-full p-1"
                            src={image} />
                    </div>
                ))}
            </div>
        </>
    )
}