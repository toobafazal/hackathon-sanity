import React from 'react'
import FetchData from '../../../sanity/FetchData'
import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link'

const Product = async () => {
  const data = await FetchData()
  return (
    <>
        <div>All Products</div>
        <div className='flex gap-5 border-2'>
        {data.map((product: any, index:number) =>
       <Link href={`/products/${product.slug.current}`} key={index} className='flex gap-5'>
          
          <div>
            <img src={urlForImage(product.image).url()} alt={product.title} width={400} height={400} />
            <h1>{product.title}</h1>
            <h1>{product.description}</h1>
            <h1>{product.category}</h1>
            <h1>{product.price}</h1>
            </div>
          
       </Link>
        )}
        </div>
    </>
  )
}

export default Product