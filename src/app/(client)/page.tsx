"use client"
import ProductModel from '@/tools/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState<Array<TypeProduct>>([])

  useEffect(()=>{
    ProductModel.onSnap( (data:any) => {
      console.log('data',data)
      setProducts(data)
    },null)
  },[])

  return <div className="bg-slate-400 h-screen">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl font-bold mb-10">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Link key={product.id} href={"product.href"} className="group shadow-md bg-white rounded-lg">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-b border-slate-300">
              <Image
                width={200}
                height={200}
                src={product.image.src}
                alt={product.image.alt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex flex-row justify-between items-center my-2">
                <h3 className="mx-2 mt-1 text-lg text-gray-800">{product.name}</h3>
                <p className="mx-2 mt-1 text-lg font-medium text-gray-500">Aprox. {product.price}</p>
              </span>
              <button className="bg-black text-white px-5 py-2 rounded-b-lg w-full">Agregar</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
}
