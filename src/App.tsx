import React, { useEffect, useState } from 'react';
import { Product } from './components/Product';
import axios from 'axios';
import { IProduct } from './models';

function App() {
  const [products, setProduct] = useState<IProduct[]>([])
  const [loding, setLoding] = useState(false)

  async function fetchProducts() {
    setLoding(true)
    const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
    setProduct(res.data)
    setLoding(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='container mx-auto mx-w-2xl pt-5'>
      {loding && <p className='text-center'>loding...</p>}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
