import { useState } from 'react';
import { IProduct } from './../models';

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)
    let btnClass: string
    details ? btnClass = 'py-2 px-4 border rounded-lg bg-blue-400' : btnClass = 'py-2 px-4 border rounded-lg bg-yellow-400'
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} alt={product.title} className='w-1/6' />
            <p>{product.title}</p>
            <p className='font-bold'>{product.price} $</p>
            <button className={btnClass} onClick={() => setDetails(prev => !prev)}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rete<span className='font-bold'> {product.rating.rate}</span></p>
            </div>}
        </div>
    )
}