import {useState,useEffect} from 'react'
import Product from './Product.jsx';

const ProductPage = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        console.log("Use Effect called")
        fetch('https://dummyjson.com/products')
        .then(response=>response.json())
        .then(responseJson=>{
            console.log(responseJson)
            setProducts(responseJson.products)
        })
    },[] )
  return (
   <>
    <p className='text-3xl text-center font-bold text-red-500 m-3'>This is product page</p>
    <div className='grid grid-cols-1  hover:blue-shadow-lg md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product)=>{
                return (<Product  product = {product}/>)
        })}
    
        
     
      
    </div>
    </>
  )
}

export default ProductPage
