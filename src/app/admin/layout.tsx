import Link from "next/link";

export default function LayoutAdmin({ children }:{ children:any }){


    return <div className="h-screen w-screen">
        <nav className="absolute top-0 w-full h-20 bg-black">
        </nav>
        <div className="flex flex-row h-full pt-20">
            <div className="w-2/12 bg-slate-500">
                <ul className="divide-y border-b">
                    <li><Link href="/admin/productos" className="block w-full py-1 hover:bg-slate-400 cursor-pointer px-5 text-white">Productos</Link></li>
                    <li><Link href="/admin/envios" className="block w-full py-1 hover:bg-slate-400 cursor-pointer px-5 text-white">Envios</Link></li>
                </ul>
            </div>
            <div className="w-10/12 p-20">{children}</div>
        </div>
    </div>
}