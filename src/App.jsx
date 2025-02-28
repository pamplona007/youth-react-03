import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Product from './components/Product'

function App() {
  const [products, setProducts] = useState([])

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
          <Product 
            image={'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            title={'Poltrona confortável'}
            price={500}
            colors={[
              '#82563e',
              '#06140f'
            ]}
          />
          <Product 
            image={'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            title={'Poltrona confortável'}
            price={500}
            colors={[
              '#82563e',
              '#06140f'
            ]}
          />
        </div>
      </main>
    </div>
  )
}

export default App
