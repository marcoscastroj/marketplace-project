import { Trash } from 'lucide-react'
import Image from 'next/image'

interface ProductProps {
  code: string
  name: string
  price: number
  promotionPrice: number
  validity: string
  handleDelete: (code: string) => Promise<void>
}

export function Product(data: ProductProps) {
  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-md border px-4 py-4">
      <div className="flex justify-end">
        <button
          onClick={() => data.handleDelete(data.code)}
          className="hover:text-gray-400"
        >
          <Trash className="sh-5 w-5" />
        </button>
      </div>
      <div
        className={`flex items-center justify-center ${
          !data.promotionPrice && 'mb-4'
        }`}
      >
        <Image
          src={
            'https://cdn.sistemawbuy.com.br/arquivos/3f8c9e2faf1aeede00141b38f14c9d79/produtos/MUA8WAE5/photoroom-20230720_201241-64bafc72dd300.jpg'
          }
          alt="image"
          width={200}
          height={200}
          className="rounded-md bg-cover bg-center"
        />
      </div>
      <div className="mt-1 flex flex-col gap-2">
        <span className="text-xl">{data.name}</span>
        <div className='flex justify-between items-center'>
          {!data.promotionPrice ? (
            <span className="text-xl text-green-800 ">
              $ {data.price.toFixed(2)}
            </span>
          ) : (
            <div className="flex flex-col">
              <span className="text-gray-500/70 line-through">
                $ {data.price.toFixed(2)}
              </span>
              <span className="from-neutral-300 text-xl text-green-800">
                $: {data.promotionPrice.toFixed(2)}
              </span>
            </div>
          )}

          <span className="text-gray-500/70 text-xs">
            Validity: {new Date(data.validity).toLocaleDateString('pt-BR')}
          </span>
        </div>
      </div>
    </div>
  )
}
