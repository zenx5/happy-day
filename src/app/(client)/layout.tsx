import Link from "next/link"

export default function Layout({ children }:{ children:any }) {

    return <div>
        <nav className="bg-black text-white py-5 px-20">
            <ul className="flex flex-row gap-5 font-bold">
                <li className="hover:text-blue-400"><Link href="/">Productos</Link></li>
                <li className="hover:text-blue-400"><Link href="/about">Mi cuent</Link></li>
                <li className="hover:text-blue-400"><Link href="/products">Products</Link></li>
            </ul>
        </nav>
        <div>{children}</div>
    </div>
}