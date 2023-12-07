import Image from "next/image";
import TableCustom from "@/components/TableCustom";
import Link from "next/link";


export default function Page() {
    const items = [
        {
          id:'PROD001',
          image: "",
          name: "Producto 1",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ab vitae culpa, illum ut corrupti at, ad sit voluptate enim facilis unde? Corporis accusamus officiis rem tempora corrupti eaque quod?",
          price: 100,
          date: '23 Dec 2023'
        },
        {
          id:'PROD002',
          image: "",
          name: "Producto 2",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ab vitae culpa, illum ut corrupti at, ad sit voluptate enim facilis unde? Corporis accusamus officiis rem tempora corrupti eaque quod?",
          price: 100,
          date: '29 Dec 2023'
        },
        {
          id:'PROD003',
          image: "",
          name: "Producto 3",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ab vitae culpa, illum ut corrupti at, ad sit voluptate enim facilis unde? Corporis accusamus officiis rem tempora corrupti eaque quod?",
          price: 100,
          date: '30 Dec 2023'
        }
    ]

    const headers = [
        { name:'image', label:'Thumbnail', render:(value:string) => <Image src="/prueba.jpg" width="64" height="64" alt="Item thumbnail" className="aspect-square rounded-md object-cover"/> },
        { name:'name', label:'Name'},
        { name:'description', label:'Description', className:"w-[400px]" },
        { name:'price', label:'Price'},
    ]

    return <div>
        <TableCustom items={items} headers={headers}>
            <div className="flex justify-between items-center p-4 bg-blue-600">
                <input className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-1/2" placeholder="Buscar productos" />
                <Link href="/admin/productos/0/form" className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Nuevo Producto</Link>
            </div>
        </TableCustom>
    </div>
}