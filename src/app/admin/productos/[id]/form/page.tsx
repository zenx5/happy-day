"use client"
import Image from "next/image";
import FormAttributes from "@/components/FormAttributes";
import ClientSelect from "@/app/components/ui/ClientSelect";
import ProductModel from "@/tools/models/ProductModel";
import { useEffect, useState } from "react";
import PaymentList from "@/components/PaymentList";
import { useRouter } from "next/navigation";

const baseProduct:any = {
    name: "",
    description: "",
    client: {
        id:"",
        name: ""
    },
    payments:[],
    attributes:[],
    date:"",
    quantity: 0,
    clientPrice: 0,
    sellerPrice: 0,
    buyPrice: 0,
    sellPrice: 0,
    image: {
        src: "",
        alt: ""
    }
}

export default function Page({ params }:{ params:{ id: string } }){
    const { id } = params
    const [product, setProduct] = useState<TypeProduct>(baseProduct)
    const router = useRouter()

    useEffect(()=>{
        if( id!=="0" ) {
            ProductModel.onSnap( (data:any) => {
                setProduct(data)
            },id)
        }
    },[id])

    const handlerChangeProduct = (key:string, value:any) => {
        if( id!=="0" ) {
            ProductModel.put(id, {
                ...product,
                [key]: value
            })
        } else {
            setProduct({
                ...product,
                [key]: value
            })
        }
    }

    const handlerChangeAttrs = (attributes:Array<TypeAttribute>) => {
        if( id!=="0" ) {
            ProductModel.put(id, {
                ...product,
                attributes
            })
        } else {
            setProduct({
                ...product,
                attributes
            })
        }
    }

    const handlerAddPayment = (payments:Array<TypePayment>) => {
        if(id!=="0") {
            ProductModel.put(id, {
                ...product,
                payments:payments
            })
        } else {
            setProduct({
                ...product,
                payments:payments
            })
        }
    }

    const handlerClean = () => {
        setProduct(baseProduct)
    }

    const handlerCreate = async () => {
        const mark = Date.now()
        const data = await ProductModel.post({
            ...product,
            mark
        })
        console.log( data )
        const response = await ProductModel.search('mark', mark )
        if( response.length>0 ) {
            await ProductModel.put(response[0]?.id, {...product, mark:undefined})
            router.push(`/admin/productos/${response[0]?.id}/form`)
        }

    }

    return <div className="rounded-lg border bg-card text-card-foreground shadow-sm grid grid-rows-5 grid-cols-2 h-full w-full">
        <div className="col-span-2 row-span-3">
            <form className="grid grid-cols-2 p-2 gap-2">
                <div className="flex flex-col gap-2 border-r pr-2">
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Nombre del Articulo</span>
                        <input type="text" value={product?.name} onChange={event => handlerChangeProduct('name', event.target.value)} className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                    <label className="p-2 flex flex-col justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Descripcion</span>
                        <textarea className="" value={product?.description} onChange={event => handlerChangeProduct('description', event.target.value)}></textarea>
                    </label>
                    <Prices
                        clientPrice={product?.clientPrice}
                        sellerPrice={product?.sellerPrice}
                        buyPrice={product?.buyPrice}
                        sellPrice={product?.sellPrice}
                        onChange={handlerChangeProduct}
                    />
                </div>
                <div className="flex flex-col gap-2 border-r pr-2">
                    <ClientSelect defaultValue={product?.client?.id ?? ""} />
                    <Quantity value={product?.quantity} onChange={handlerChangeProduct} />
                    <DateIn value={product?.date} onChange={handlerChangeProduct} />
                    {/* <PaymentList payments={product?.payments ?? []} onAdd={handlerAddPayment}/> */}
                    { id==="0" && <div className="flex flex-row gap-2 justify-end h-full items-end">
                        <button type="button" onClick={handlerClean} className="border border-black text-black py-1 px-5 rounded">Limpiar</button>
                        <button type="button" onClick={handlerCreate} className="bg-black text-white py-1 px-5 rounded">Guardar</button>
                    </div>}
                </div>
            </form>
        </div>
        <div className="col-span-1 row-span-2 p-2">
            <FormAttributes values={product?.attributes} onChange={handlerChangeAttrs}/>
        </div>
        <div className="col-span-1 row-span-2 p-2">
            <h2 className="font-semibold text-xl mb-2">Image de Referencia</h2>
            <span className="w-full flex justify-center">
                <Image src="/prueba.jpg" alt="" width={250} height={250} className="rounded-md"/>
            </span>
        </div>
    </div>
}


function Quantity({value = 0, onChange}:{ value:number|undefined, onChange:Function }) {

    const handlerChange = (event:any) => {
        if( onChange ) onChange('quantity', parseInt(event.target.value) )
    }

    return <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
        <span className="font-medium w-1/3">Cantidad</span>
        <input type="number" value={value} onChange={handlerChange} className="text-right w-2/3 outline-none border-none ring-0"/>
    </label>
}

function DateIn({value, onChange}:{value:string|undefined, onChange:Function}){

    const handlerChange = (event:any) => {
        if(onChange) onChange('date', event.target.value )
    }

    return <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
        <span className="font-medium w-1/3">Fecha de Solicitud</span>
        <input type="date" value={value} onChange={handlerChange} className="text-right w-2/3 outline-none border-none ring-0"/>
    </label>
}

function Prices({
    clientPrice,
    sellerPrice,
    buyPrice,
    sellPrice,
    onChange
}:{
    clientPrice:number|undefined,
    sellerPrice:number|undefined,
    buyPrice:number|undefined,
    sellPrice:number|undefined,
    onChange:Function
}){
    const handlerChange = (key:string, event:any) => {
        if(onChange) onChange(key, parseFloat(event.target.value))
    }

    return <>
        <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
            <span className="font-medium w-1/3">Precio Cliente</span>
            <input type="number" value={clientPrice} onChange={event => handlerChange('clientPrice', event) } className="text-right w-2/3 outline-none border-none ring-0"/>
        </label>
        <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
            <span className="font-medium w-1/3">Precio Vendedor</span>
            <input type="number" value={sellerPrice} onChange={event => handlerChange('sellerPrice', event) } className="text-right w-2/3 outline-none border-none ring-0"/>
        </label>
        <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
            <span className="font-medium w-1/3">Precio de Compra</span>
            <input type="number" value={buyPrice} onChange={event => handlerChange('buyPrice', event) } className="text-right w-2/3 outline-none border-none ring-0"/>
        </label>
        <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
            <span className="font-medium w-1/3">Precio de Venta</span>
            <input type="number" value={sellPrice} onChange={event => handlerChange('sellPrice', event) } className="text-right w-2/3 outline-none border-none ring-0"/>
        </label>
    </>
}