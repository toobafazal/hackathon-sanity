import React from 'react'
import FetchData from '../../../../sanity/FetchData'
import ProductDetails from '../../../../components/productDetails'

export async function generateStaticParams() {
  const data = await FetchData()
  return data.map((item: any) => ({
    products: item.slug.current,
  }))
}


const page = async ({ params }: { params: any }) => {
  const data = await FetchData();
  const filterData = data.find((item: any) =>
    item.slug.current == params.products
  )
  return <ProductDetails filteredData={filterData} />;

}

export default page