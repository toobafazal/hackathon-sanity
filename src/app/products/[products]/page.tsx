import React from 'react'
import FetchData from '../../../../sanity/FetchData'

export async function generateStaticParams () {
    const data = await FetchData()
    return data.map ((item:any) => ({
    products: item.slug.current,
    }))
}


const page = async ({params}:{params:any}) => {
  const data = await FetchData();
  const filterData = data.find((item:any)=>
    item.slug.current == params.products
  )
  return (
    <>
    <h1>Title: {filterData.title}</h1>
    <h1>Description: {filterData.description}</h1>
    <h1>Category: {filterData.category}</h1>
    <h1>Price: {filterData.price}</h1>
    </>
  )
}

export default page