"use client"
import Image from "next/image";
import TableCustom from "@/components/TableCustom";
import CheckBox from "@/components/CheckBox";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import ProductModel from "@/tools/models/ProductModel";


export default function Page() {
    const [items, setItems] = useState([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [selected, setSelected] = useState<Array<string>>([])

    useEffect(()=>{
      ProductModel.onSnap( (data:any) => setItems(data),null)
    },[])

    useEffect(()=>{
      if( typeof window !== 'undefined' ) window.sessionStorage.setItem('selected-product', JSON.stringify(selected) )
    },[selected])

    const filterSearch = useCallback( (item:TypeProduct) => {
      return  item.name.includes(search) ||
              item.description.includes(search) ||
              item.image.alt.includes(search)
    },[search])

    useEffect(()=>{
      setTotalPage( Math.floor( ((items.filter(filterSearch).length)/5) + ((4/5)%5) ) )
    },[items, filterSearch])

    const handleCheckItem = (id:string) => {
      const index = selected.indexOf(id)
      if( index===-1 ) setSelected(prev => [...prev, id])
      else setSelected( prev => prev.filter( item => item!==id ) )
    }

    const headers = [
        { name:'id', label:'ID', render: (id:string) => <CheckBox value onChange={()=>handleCheckItem(id)}/> },
        { name:'image', label:'Thumbnail', render:(value:any) => <Image src={value.src.length>0 ? value.src : "/prueba.jpg"} width="64" height="64" alt={value.alt ?? "Item thumbnail"} className="aspect-square rounded-md object-cover"/> },
        { name:'name', label:'Name'},
        { name:'description', label:'Description', className:"w-[400px]" },
        { name:'clientPrice', label:'Client Price'},
        { name:'sellerPrice', label:'Price'},
        { name:'id', label:'Actions', render: (id:string) => <Link href={`/admin/productos/${id}/form`} className="w-20 bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-2 py-1">Edit</Link>}
    ]

    const filterPagination = (item:any, index:number) => {
      return Math.floor( ((index+1)/5) + ((4/5)%5) ) === page
    }

    return <div>
        <TableCustom
          items={items.filter(filterSearch).filter(filterPagination)}
          headers={headers}
        >
            <div className="flex justify-between items-center p-4 bg-blue-600">
                <input type="text" onChange={event => setSearch(event.target.value)} value={search} className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-1/2" placeholder="Buscar productos" />
                <span className="flex flex-row gap-2">
                  <Link href="/admin/pedidos/0" className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Crear Pedido</Link>
                  <Link href="/admin/productos/0/form" className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Nuevo Producto</Link>
                </span>
            </div>
        </TableCustom>
        <div className="flex flex-row justify-between items-center">
          <button onClick={()=>setPage(page - 1)} disabled={page===1} className="disabled:bg-gray-600 bg-black text-white py-2 px-5 rounded">Atras</button>
          <span>{page}/{ totalPage }</span>
          <button onClick={()=>setPage(page + 1)} disabled={page===totalPage} className="disabled:bg-gray-600 bg-black text-white py-2 px-5 rounded">Adelante</button>
        </div>
    </div>
}