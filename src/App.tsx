import React, { useEffect, useState } from 'react';
import { Product } from './components/Product';
import axios, { AxiosError } from 'axios';
import { IProduct } from './models';

function App() {
  const [products, setProduct] = useState<IProduct[]>([])
  const [loding, setLoding] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoding(true)
      const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
      setProduct(res.data)
      setLoding(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoding(false)
      setError(error.message)

    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='container mx-auto mx-w-2xl pt-5'>
      {loding && <p className='text-center'>loding...</p>}
      {error && <p className='text-center text-red-600'>{error}</p>}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
