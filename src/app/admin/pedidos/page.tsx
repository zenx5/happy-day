"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import TableCustom from "@/components/TableCustom";
import OrderModel from "@/tools/models/OrderModel";

export default function Page() {
    const [orders, setOrders] = useState<Array<TypeOrder>>([])
    useEffect(()=>{
      OrderModel.onSnap( (data:Array<TypeOrder>) => setOrders(data), null )
    },[])

    const headers = [
        { name:'id', label:'Order ID'},
        { name:'date', label:'Departure Date'},
        { name:'products', label:'Items', render: (products:Array<TypeProduct>) => products.reduce( (acc, product)=> acc + product.quantity, 0) },
        { name:'products', label:'Mount', render: (products:Array<TypeProduct>) => products.reduce( (acc, product)=> acc + product.sellPrice * product.quantity, 0) },
        { name:'status', label:'Estatus', render: (status:Array<TypeStatus>) => status[ status.length - 1 ]?.label },
        { name:'id', label:'Action', render: (id:string) => <Link href={`/admin/pedidos/${id}`} className="bg-black text-white py-1 px-4 rounded" >Ir</Link>}
    ]

    return <div>
        <TableCustom items={orders} headers={headers}>
            <div className="flex justify-between items-center p-4 bg-blue-600">
                <input className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-1/2" placeholder="Search orders" aria-label="Search orders"/>
                {/* <Link href="#" className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Nuevo Pedido</Link> */}
            </div>
        </TableCustom>
    </div>
}