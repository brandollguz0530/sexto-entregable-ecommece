import React, { useEffect, useState } from 'react'
import { axiosEcommerce } from '../../utils/configAxios'
import SimilarProducs from './SimilarProducs'

const ProductDetail = ({productId}) => {
    const [productsData, setProductsData] = useState()


    useEffect( () => {
        axiosEcommerce
          .get(`products/${productId}`)
          .then((res) => setProductsData(res.data))
          .catch((err) => console.log(err))
    }, [productId])

  return (
    <>
    <section className='grid gap-6 sm:grid-cols-2 sm:p-8 sm:items-center mx-w-[1000px] mx-auto'>
      <section>
        <div className='h-[300px] p-4'>
          <img className='h-full w-full object-contain' src={productsData?.images[0].url} alt="" />
        </div>
      </section>

    <section>
    <h4 className='text-gray-400 font-bold text-xl mt-6'>{productsData?.brand}</h4>
      <h3 className=' font-bold text-xl ml-3'>{productsData?.title}</h3>

      <section className='grid grid-cols-2 mt-6'>
        <article>
          <h4 className='text-gray-400'>price</h4>
          <span className=' font-bold text-xl ml-3'>$ {productsData?.price}</span>
        </article>

        <article>
          <h4 className='text-gray-400'>Quantity</h4>
          <div className=' flex items-center'>
            <button className='border-[1px] p-2 px-4 transition duration-300 transform hover:scale-110 focus:scale-110 hover:bg-orange-600 hover:text-white'>-</button>
            <span className='border-[1px] p-2 px-4 border-x-0'>1</span>
            <button className='border-[1px] p-2 px-4 transition duration-300 transform hover:scale-110 focus:scale-110 hover:bg-orange-600 hover:text-white'>+</button>
          </div>

        </article>
      </section>

      <button className='w-full bg-orange-600 py-2  text-white hover:bg-orange-400 transition duration-300 transform hover:scale-90 rouded-sm mt-6'>
        Add to cart <i className='bx bx-cart'></i>
      </button>

      <p className='text-sm my-6'>
        {productsData?.description}
      </p>
    </section>
    </section>
    <SimilarProducs productId={productsData?.id} 
                    categoryId={productsData?.categoryId}/>
    </>
  )
}

export default ProductDetail