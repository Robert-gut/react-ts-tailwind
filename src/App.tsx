import { Product } from './components/Product';
import { useProducts } from './hooks/products';


function App() {
  const { loding, error, products } = useProducts()
  return (
    <div className='container mx-auto mx-w-2xl pt-5'>
      {loding && <p className='text-center'>loding...</p>}
      {error && <p className='text-center text-red-600'>{error}</p>}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
