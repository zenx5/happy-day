"use client"
import Image from "next/image";
import TableCustom from "@/components/TableCustom";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductModel from "@/tools/models/ProductModel";


export default function Page() {
    const [items, setItems] = useState([])

    useEffect(()=>{
      ProductModel.onSnap( (data:any) => {
        console.log('data',data)
        setItems(data)
      },null)
    },[])

    const headers = [
        { name:'id', label:'ID', render: (id:string) => <CheckBox /> },
        { name:'image', label:'Thumbnail', render:(value:any) => <Image src={value.src ?? "/prueba.jpg"} width="64" height="64" alt={value.alt ?? "Item thumbnail"} className="aspect-square rounded-md object-cover"/> },
        { name:'name', label:'Name'},
        { name:'description', label:'Description', className:"w-[400px]" },
        { name:'price', label:'Price'},
    ]

    return <div>
        <TableCustom items={items} headers={headers}>
            <div className="flex justify-between items-center p-4 bg-blue-600">
                <input className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-1/2" placeholder="Buscar productos" />
                <span className="flex flex-row gap-2">
                  <Link href="/admin/pedidos/0" className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Crear Pedido</Link>
                  <Link href="/admin/productos/0/form" className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Nuevo Producto</Link>
                </span>
            </div>
        </TableCustom>
    </div>
}

function CheckBox() {

  return <label className="cursor-pointer">
    <input type="checkbox" className="peer sr-only"/>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 peer-checked:block hidden text-blue-800">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 peer-checked:hidden block text-slate-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </label>
}