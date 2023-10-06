'use client'

import React, { FormEvent, useState } from 'react'
import Input from '@/components/Input/main'
import Button from '@/components/Button/main'

import { toast } from 'react-toastify'
import { createProduct } from '@/api/product/createProduct'

import { parseCookies } from 'nookies'
import { secret } from '@/api/api'

export function FormProduct() {
  const [name, setName] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [validity, setValidity] = useState<string>('')

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()

    if (!Number(price)) {
      return toast.error('Enter the price of the valid product')
    }

    const data = {
      name,
      type,
      code,
      price: Number(price),
      validity,
    }

    const response = await createProduct(data, parseCookies()[secret])


    if (response?.status === 201) {
      toast.success('Product created successfully')
      setName('')
      setType('')
      setCode('')
      setValidity('')
      setPrice('')
    }
  }

  return (
    <div className="container flex w-[600px] flex-col gap-4">
      <span className="my-3 text-center text-xl font-bold">
        Register product
      </span>
      <form onSubmit={handleForm} className="gap-4 pb-3">
        <div className="flex flex-col gap-3">
          <Input
            value={name}
            after={true}
            type="text"
            required
            placeholder="Type product name"
            onChange={(e) => setName(e.target.value)}
          >
            Name
          </Input>
          <Input
            value={type}
            after={true}
            type="text"
            required
            placeholder="Enter the product type"
            onChange={(e) => setType(e.target.value)}
          >
            Product type
          </Input>
          <Input
            value={code}
            after={true}
            type="text"
            required
            placeholder="Enter your code"
            minLength={10}
            onChange={(e) => setCode(e.target.value)}
          >
              Code
          </Input>
          <Input
            value={price}
            after={true}
            type="text"
            required
            placeholder="Enter the price of the product"
            onChange={(e) => setPrice(e.target.value)}
          >
            Price
          </Input>
          <Input
            value={validity}
            after={true}
            type="date"
            required
            placeholder="Enter the validity"
            onChange={(e) => setValidity(e.target.value)}
          >
            Validity
          </Input>

          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  )
}
