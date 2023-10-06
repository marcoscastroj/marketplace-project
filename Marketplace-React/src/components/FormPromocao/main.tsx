'use client'

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import Input from '../Input/main'
import Button from '../Button/main'

import { GetProducts, getProducts } from '@/api/product/getProducts'
import { parseCookies } from 'nookies'

import { toast } from 'react-toastify'
import { setPromotion } from '@/api/product/setPromocao'
import { secret } from '@/api/api'

interface FormPromocaoProps {
  products: GetProducts[] | []
}

export default function FormPromocao({ products }: FormPromocaoProps) {
  const [produtos, setProdutos] = useState<GetProducts[]>(products)
  const [codigo, setCodigo] = useState(products[0]?.code)
  const [precoPromocao, setPrecoPromocao] = useState('')

  useEffect(() => {
    const getData = async () => {
      const cookies = parseCookies()
      const response = (await getProducts(cookies[secret])) || []
      setProdutos(response)
    }

    getData()
  }, [])

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    if (!Number(precoPromocao)) {
      return toast.error('Digite um preço válido')
    }
    const cookies = parseCookies()
    await setPromotion(codigo, Number(precoPromocao), cookies[secret])
    toast.success('Promoção criada com sucesso!')
    setCodigo('')
    setPrecoPromocao('')
  }

  const handleCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCodigo(event.target.value)
  }

  return (
    <div className="container mt-24 flex w-[600px] flex-col gap-1">
      <span className="my-3 text-center text-xl font-bold">
        Registrar promoção
      </span>
      <form onSubmit={handleForm} className="flex flex-col gap-4 pb-3">
        <label>
          <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-blue-500 after:content-['*']">
            Produtos
          </span>
          <select
            value={codigo}
            required
            onChange={handleCategory}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-sm"
            placeholder="Select category"
            disabled={!produtos?.length}
          >
            {produtos?.map((produto) => {
              return (
                <option key={produto.code} value={produto.code}>
                  {produto.name}
                </option>
              )
            })}
          </select>
        </label>
        <Input
          value={precoPromocao}
          after={true}
          type="number"
          required
          placeholder="Enter the description"
          onChange={(e) => setPrecoPromocao(e.target.value)}
        >
          Oferta
        </Input>
        <Button type="submit">Register</Button>
      </form>
    </div>
  )
}
