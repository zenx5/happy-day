import Link from "next/link";
import TableCustom from "@/components/TableCustom";

export default function Page() {

    const clients = [
        {
            id:10,
            name: "Dra. Maribel",
            items: 10,
            mount: 350,
            mount_return: 0,
            mount_pending: 100
        },
        {
            id:11,
            name: "Ana Navas",
            items: 5,
            mount: 100,
            mount_return: 0,
            mount_pending: 0
        },
        {
            id:12,
            name: "Joglis",
            items: 8,
            mount: 180,
            mount_return: 0,
            mount_pending: 50
        }
    ]


    const headers = [
        { name:'id', label:'ID' },
        { name:'name', label:'Nombre' },
        { name:'items', label:'Productos Comprados' },
        { name:'mount', label:'Monto Pagado' },
        { name:'mount_return', label:'Monto Reembolsado' },
        { name:'mount_pending', label:'Monto por Cobrar' }
    ]

    return <div>
        <TableCustom items={clients} headers={headers} >
            <div className="flex justify-between items-center p-4 bg-blue-600">
                <input className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-1/2" placeholder="Buscar clientes" />
                <span className="flex flex-row gap-2">
                  <Link href="/admin/clientes/0" className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Nuevo Cliente</Link>
                </span>
            </div>
        </TableCustom>
    </div>
}