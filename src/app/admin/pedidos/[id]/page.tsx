"use client"
import ProductModel from "@/tools/models/ProductModel"
import { useEffect, useState } from "react"
import OrderModel from "@/tools/models/OrderModel"
import ModalProductSelection from "./ModalProductSelection"
import OrderDetails from "./OrderDetails"
import ClientList from "./ClientList"
import TableProduct from "../../../components/TableProduct"
import Pagination from "@/components/Pagination"
import { ORDER_STATUS } from "@/tools/constants"
import ModalPackage from "./ModalPackage"

export default function Page({ params }:{ params:{ id:string } }) {
    const { id } = params
    const [load, setLoad] = useState(false)
    const [order, setOrder] = useState<TypeOrder>()
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [page, setPage] = useState(1)
    const [products, setProducts] = useState<Array<TypeProductSelectable>>([])


    useEffect(()=>{
        if( id ) OrderModel.onSnap( (data:any) => setOrder(data), id)
    },[id])

    useEffect(()=>{
        if( !order ) return
        ProductModel.onSnap( (data:any) => {
            setProducts( (prev:Array<any>) => {
                return data.map( (item:any) => {
                    const productIds = order.products.map( product => product.id )
                    const index = prev.findIndex( prevItem => prevItem.id===item.id )
                    return {
                        ...item,
                        selected: productIds.includes(item?.id) || ( index!==-1 ? prev[index]?.selected : false )
                    }
                })
            } )
        },null )
    },[order])

    useEffect(()=>{
        (async()=>{
            if( typeof window !== 'undefined' && products.length>0 ) {
                if( id==="0" && !load ){
                    const productIds = JSON.parse( window.sessionStorage.getItem('selected-product') as string )
                    if( productIds.length>0 ) {
                        const temp:Array<any> = []
                        for( const product of products ) {
                            temp.push({
                                ...product,
                                selected: productIds.includes(product.id) ? true : !!product?.selected
                            })
                        }
                        setProducts(temp)
                    }
                    setLoad(true)
                }
            }
        })()
    },[products, id, load])

    const handleCheckItem = (id:string) => {
        const newProducts = products.map( item => item.id===id ? {...item, selected:!item.selected}: item)
        setProducts( prev => newProducts )
        handlerChangeOrder('products', newProducts.filter( product => product.selected).map( product => product as TypeProduct) )
    }

    const handlerChangeOrder = (key:string, value:any) => {
        OrderModel.put(id, {
            ...order,
            [key]:value
        })
    }

    const filterPagination = (item:any, index:number) => {
        return Math.floor( ((index+1)/3) + ((2/3)%3) ) === page
    }

    // const setStatus = (status:any) => {
    //     const now = new Date()
    //     const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
    //     handlerChangeOrder('status', [
    //         ...order?.status as TypeStatus[],
    //         {
    //             label:status.label,
    //             date
    //         }
    //     ])
    // }

    const handlerCreatePackage = (pack:TypePackage) => {
        handlerChangeOrder('packages',[
            ...order?.packages as TypePackage[],
            pack
        ])
    }

    return <>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-row p-6 pb-4 justify-between ">
                <div className="flex flex-col space-y-1.5 ">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Detalles del Pedido</h3>
                    <p className="text-sm text-muted-foreground">Con esfuerzo para mi Esposa linda.</p>
                </div>
                {/* <div className="flex flex-row gap-2">
                    <label className="bg-black rounded-full flex items-center justify-center w-40 cursor-pointer" >
                        <input type="checkbox" className="peer opacity-0"/>
                        <span className="text-white uppercase">{ order?.status?.at( order?.status.length - 1 )?.label }</span>
                        <div className="absolute hidden peer-checked:block">
                            <ul className="text-black bg-white shadow-black shadow-md border border-slate-500 relative top-[90px] rounded">
                                { ORDER_STATUS.map( status => <li key={status.value} onClick={()=>setStatus(status)} className="cursor-pointer hover:bg-slate-500 hover:text-white px-8 py-1 uppercase">{status.label}</li>)}
                            </ul>
                        </div>
                    </label>
                </div> */}
            </div>
            <div className="p-6">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                    <div className="grid col-span-3 grid-rows-2">
                        <div className="w-full flex flex-row gap-2 row-span-1">
                            <OrderDetails order={order as TypeOrder} onChange={handlerChangeOrder} />
                            <ClientList products={products} />
                        </div>
                        <div className="border row-span-1 mt-10 flex flex-col justify-between">
                            <TableProduct products={products.filter(product => product.selected).filter(filterPagination)} />
                            <div className="flex flex-row justify-between items-center">
                                <span className="w-1/2 px-5 py-1">
                                    <Pagination items={products.filter(product => product.selected)} max={3} onPageChange={(pag:number) => setPage(pag)} page={page}/>
                                </span>
                                <span className="py-1">
                                    <button type="button" onClick={()=>setOpen(true)} className="bg-black text-white py-1 px-4 rounded">Agregar Producto</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalProductSelection open={open} products={products} onClose={()=>setOpen(false)} onChangeSelect={(id:string)=>handleCheckItem(id)} />
        <ModalPackage
            open={open2}
            onClose={()=>setOpen2(false)}
            products={order?.products as TypeProductSelectable[] ?? []}
            onCreate={handlerCreatePackage}
        />
    </>
}