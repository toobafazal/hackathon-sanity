import React from 'react'
import FetchData from '../../../sanity/FetchData'
import { urlForImage } from '../../../sanity/lib/image'

const Product = async () => {
  const data = await FetchData()
  console.log(data[0].image, "dataaa")
  return (
    <>
        <div>All Products</div>
      <div className='flex gap-5'>
        {data.map((product: any) =>
          <>
          <div>
            <img src={urlForImage(product.image).url()} alt={product.title} width={400} height={400} />
            <h1>{product.title}</h1>
            <h1>{product.description}</h1>
            <h1>{product.category}</h1>
            <h1>{product.price}</h1>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Product