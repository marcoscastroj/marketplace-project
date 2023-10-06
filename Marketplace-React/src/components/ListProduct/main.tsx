'use client'

import { GetProducts, getProducts } from '@/api/product/getProducts'
import { Product } from '../Product/main'
import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { secret } from '@/api/api'
import { deleteProduct } from '@/api/product/deleteProduct'

export function ListProduct() {
  const [products, setProducts] = useState<GetProducts[]>()

  useEffect(() => {
    const getData = async () => {
      const cookies = parseCookies()
      const response = await getProducts(cookies[secret])
      setProducts(response)
    }

    getData()
  }, [])

  const handleDelete = async (code: string) => {
    await deleteProduct(code, parseCookies()[secret])
    const filterProduct = products?.filter((element) => element.code !== code)
    setProducts(filterProduct)
  }

  const size = products?.length

  if (!size) {
    return (
      <div className="mt-10 text-center">
        <p className="text-gray-500/70">No products registered...</p>
      </div>
    )
  }

  return (
    <div className={`container grid grid-cols-5 gap-5 py-8`}>
      {products?.map((product) => (
        <Product
          key={product._id}
          code={product.code}
          name={product.name}
          price={product.price}
          promotionPrice={product.promotionPrice}
          validity={product.validity}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}
