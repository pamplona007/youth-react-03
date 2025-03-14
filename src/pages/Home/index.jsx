import { useEffect, useState } from 'react'
import './App.css'
import Button from '../../components/Button'
import ProductCard from '../../components/Product'

const colors = [
  '#82563e',
  '#06140f',
  '#ff00ff',
  '#00ffff',
  '#00ff00',
  '#ffff00',
];

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const responseJson = await response.json();

    setProducts(responseJson);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div>
      <header>
        <span>Renovate your interior</span>
        <Button>Go to catalog</Button>
      </header>
      <main>
        <div className='products-title'>
          <span>Popular products</span>
          <Button variant='link'>
            View all
          </Button>
        </div>

        <div className="products-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              images={product.images}
              colors={colors.slice(0, product.images.length)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
