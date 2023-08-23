import React from 'react'
import FetchData from '../../../sanity/FetchData'

const Product = async () => {
  const data = await FetchData()
  console.log(data,"dataaa")
  return (
    <div>index</div>
  )
}

export default Product