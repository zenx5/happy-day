import TableCustom from "@/components/TableCustom";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    const PENDING = 1
    const SHIPPED = 2
    const CANCELLED = 3

    const items = [
        {
          id:'ORD001',
          date: '23 Dec 2023',
          status: 1
        },
        {
          id:'ORD002',
          date: '29 Dec 2023',
          status: 2
        },
        {
          id:'ORD003',
          date: '30 Dec 2023',
          status: 3
        }
    ]

    const headers = [
        { name:'image', label:'Thumbnail', render:(value:string) => <Image src="/prueba.jpg" width="64" height="64" alt="Item thumbnail" className="aspect-square rounded-md object-cover"/> },
        { name:'id', label:'Order ID'},
        { name:'date', label:'Departure Date'},
        { name:'status', label:'Estatus', render: (status:number) => <>
                { status===PENDING && <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                    Pending
                  </div>}
                  { status===SHIPPED && <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground hover:bg-primary/80 bg-green-500">
                    Shipped
                  </div>}
                  { status===CANCELLED && <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground hover:bg-primary/80 bg-red-500">
                    Cancelled
                  </div>}
        </>},
    ]

    return <div>

        <TableCustom items={items} headers={headers}>
            <div className="flex justify-between items-center p-4 bg-blue-600">
                <input className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-1/2" placeholder="Search orders" aria-label="Search orders"/>
                <Link href="#" className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Nuevo Envio</Link>
            </div>
        </TableCustom>
    </div>
}