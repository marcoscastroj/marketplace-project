import { getProducts } from '@/api/product/getProducts'
import FormPromocao from '@/components/FormPromocao/main'
import HeaderHome from '@/components/HeaderHome/main'
import React from 'react'

import { cookies } from 'next/headers'
import { secret } from '@/api/api'

export default async function Promocao() {
  const token = cookies().get(secret)?.value as string
  const response = (await getProducts(token)) || []
  return (
    <div>
      <HeaderHome />
      <FormPromocao products={response} />
    </div>
  )
}
