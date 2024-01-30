"use client"
import Link from "next/link";
import TableCustom from "@/components/TableCustom";
import { useEffect, useState } from "react";
import ClientModel from "@/tools/models/ClientModel";
import ProductModel from "@/tools/models/ProductModel";

export default function Page() {
    const [search, setSearch] = useState("")
    const [clients, setClients] = useState<Array<TypeClient>>([])
    const [products, setProducts] = useState<Array<TypeProduct>>([])

    useEffect(()=>{
        ClientModel.onSnap( (data:Array<TypeClient>) => setClients(data), null )
    },[])

    useEffect(()=>{
        ProductModel.onSnap( (data:Array<TypeProduct>) => setProducts(data), null )
    },[])

    const getItems =  (id:string) => products.filter( product => product.client.id===id ).length

    // const getPayment = (id) =>

    const handlerDeleteClient = async (id:string) => {
        await ClientModel.delete(id)
    }


    const headers = [
        { name:'id', label:'ID' },
        { name:'name', label:'Nombre' },
        { name:'phone', label:'Telefono' },
        { name:'id', label:'Productos Comprados', render: (id:string) => getItems(id) },
        // { name:'mount', label:'Monto Pagado' },
        // { name:'mount_return', label:'Monto Reembolsado' },
        // { name:'mount_pending', label:'Monto por Cobrar' },
        { name:'id', label:'Accion', render: (id:string) => <span className="flex flex-row gap-2 justify-center">
                <Link href={`/admin/clientes/${id}`} className="bg-black text-white px-5 py-1 rounded" >Ir</Link>
                <button onClick={()=>handlerDeleteClient(id)} className="bg-black text-white px-5 py-1 rounded">Borrar</button>
            </span>
        },
    ]

    const filterClients = (client:TypeClient) => {
        return  client?.name?.toLowerCase().includes( search.toLowerCase() ) ||
                client?.phone?.toLowerCase().includes( search.toLowerCase() ) ||
                client?.email?.toLowerCase().includes( search.toLowerCase() )
    }

    return <div>
        <TableCustom items={clients.filter( filterClients )} headers={headers} >
            <div className="flex justify-between items-center p-4 bg-blue-600">
                <input value={search} onChange={ event => setSearch(event.target.value) } className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-1/2" placeholder="Buscar clientes" />
                <span className="flex flex-row gap-2">
                  <Link href="/admin/clientes/0" className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Nuevo Cliente</Link>
                </span>
            </div>
        </TableCustom>
    </div>
}