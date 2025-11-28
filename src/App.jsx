import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <ProductCard  name="Laptop" price="100,000.00" image="https://picsum.photos/id/9/200/300"/>

      <ProductCard  name="Phone" price="90,000.00" image="https://picsum.photos/id/3/200/300"/>

      <ProductCard  name="Watch" price="7000.00" image="https://picsum.photos/id/1/200/300"/>
     
    </>
  )
}

export default App
