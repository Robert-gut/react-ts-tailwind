import React, { useEffect, useState } from 'react';
import { Product } from './components/Product';
import axios from 'axios';
import { IProduct } from './models';

function App() {
  const [products, setProduct] = useState<IProduct[]>([])

  async function fetchProducts() {
    const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
    setProduct(res.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='container mx-auto mx-w-2xl pt-5'>
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
