import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';


function App() {
  const { loding, error, products } = useProducts()
  return (
    <div className='container mx-auto mx-w-2xl pt-5'>
      {loding && <Loader/>}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
