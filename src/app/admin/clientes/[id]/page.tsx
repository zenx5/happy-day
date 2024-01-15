"use client"
import Link from "next/link"
import PaymentList from "@/components/PaymentList"
import ClientModel from "@/tools/models/ClientModel"
import { useState, useEffect } from "react"
import TableProduct from "@/app/components/TableProduct"
import ProductModel from "@/tools/models/ProductModel"
import { PATH } from "@/tools/constants"
import { useRouter } from "next/navigation"

export default function Page({ params }:{ params:{ id: string } }) {
    const { id } = params
    const [client, setClient] = useState<TypeClient>({
        id: "0",
        name: "",
        phone: "",
        email: "",
        payments: []
    })
    const [products, setProducts] = useState<Array<TypeProduct>>([])

    const router = useRouter()

    useEffect(()=>{
        if( id!=="0" ) {
            ClientModel.onSnap( (data:any) => {
                setClient(prev => ({
                    ...prev,
                    ...data
                }))
            },id)
        }
    },[id])

    useEffect(()=>{
        (async ()=>{
            const data = await ProductModel.get()
            const aux = (data as Array<TypeProduct>).filter( product => product.client.id===id ).map( product => ({...product, selected:true}))
            setProducts( prev => aux )
        })()
    },[id])

    const handlerChangeClient = (key:string, value:any) => {
        if( id!=="0" ) {
            ClientModel.put(id, {
                ...client,
                [key]: value
            })
        } else {
            setClient({
                ...client,
                [key]: value
            })
        }
    }

    const handlerAddPayment = (payments:Array<TypePayment>) => {
        if(id!=="0") {
            ClientModel.put(id, {
                ...client,
                payments:payments
            })
        } else {
            setClient({
                ...client,
                payments:payments
            })
        }
    }

    const handlerCreateClient = async () => {
        if( client?.name.length>0 ) {
            const { id } = await ClientModel.post(client) as any
            router.push(PATH.ADMIN.CLIENT(id))

        }
    }

    return client && <div className="rounded-lg border bg-card text-card-foreground shadow-sm grid grid-rows-5 grid-cols-2 h-full w-full">
        <div className="col-span-2 row-span-3">
            <span className="flex flex-row justify-between items-center py-2 px-4">
                <h1 className="text-xl font-bold">Clientes</h1>
                <Link className="bg-black text-white py-1 px-4 rounded" href={PATH.ADMIN.CLIENTS} >Atras</Link>
            </span>
            <form className="grid grid-cols-2 p-2 gap-2 mb-5">
                <div className="flex flex-col gap-2 border-r pr-2 col-span-1">
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Nombre</span>
                        <input type="text" value={client?.name} onChange={event => handlerChangeClient('name', event.target.value)} className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Telefono</span>
                        <input type="text" value={client?.phone} onChange={event => handlerChangeClient('phone', event.target.value)} className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Email</span>
                        <input type="email" value={client?.email} onChange={event => handlerChangeClient('email', event.target.value)} className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                </div>
                <div className="flex flex-col gap-2 border-r pr-2">
                    <PaymentList payments={client.payments ?? []} onAdd={handlerAddPayment}/>
                </div>
            </form>
            { id==="0" && <div className="flex flex-row items-center justify-end px-4">
                <button onClick={handlerCreateClient} className="py-1 px-4 rounded bg-black text-white">Guardar</button>
            </div>}
            {(products && products.length>0) && <TableProduct products={products as Array<TypeProductSelectable>} />}
        </div>
    </div>
}