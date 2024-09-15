import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

                const ProductDetails = () => {
                const[product,setProducts]= useState("")
                const {id}=useParams()
                useEffect(()=>{
                        fetch('https://dummyjson.com/products/'+id)
                        .then(response=>response.json())
                        .then(data=>{

                        setProducts(data)})
                },[]
                    )

                    
                        const markedPrice=product.price
                        const discount_percent=product.discountPercentage
                        const discount=(markedPrice*discount_percent)/100
                        const sellingprice=(markedPrice-discount).toFixed(2)

                 


  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={product.thumbnail} alt={product.title}/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">price: </span>
                        <span className="text-gray-600 dark:text-gray-300">{sellingprice}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                
                 <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {product.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

  )
    
    
}

export default ProductDetails