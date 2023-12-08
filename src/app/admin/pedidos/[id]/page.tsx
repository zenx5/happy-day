import Image from "next/image"
import Link from "next/link"

export default function Page() {
    const products = [
        {
            id:1,
            name: "Producto 1",
            image: "/prueba.jpg",
            description: "Algo para describir el producto, de tal manera que se tenga una guia de cual articulo es",
            prices: [100, 200, 300, 400]
        },
        {
            id:2,
            name: "Producto 2",
            image: "/prueba.jpg",
            description: "Algo para describir el producto, de tal manera que se tenga una guia de cual articulo es",
            prices: [100, 200, 300, 400]
        },
        {
            id:3,
            name: "Producto 3",
            image: "/prueba.jpg",
            description: "Algo para describir el producto, de tal manera que se tenga una guia de cual articulo es",
            prices: [100, 200, 300, 400]
        }
    ]
    const clients = [
        {
            id:10,
            name: "Dra. Maribel",
            items: 10,
            mount: 350
        },
        {
            id:11,
            name: "Ana Navas",
            items: 5,
            mount: 100
        },
        {
            id:12,
            name: "Joglis",
            items: 8,
            mount: 180
        }

    ]







    return <>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-row p-6 pb-4 justify-between ">
                <div className="flex flex-col space-y-1.5 ">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Detalles del Pedido</h3>
                    <p className="text-sm text-muted-foreground">Con esfuerzo para mi Esposa linda.</p>
                </div>
                <div className="flex flex-row gap-2">
                    <label className="bg-black rounded-full flex items-center justify-center w-40 cursor-pointer" >
                        <input type="checkbox" className="peer opacity-0"/>
                        <span className="text-white uppercase">Enviado</span>
                        <div className="absolute hidden peer-checked:block">
                            <ul className="text-black bg-white shadow-black shadow-md border border-slate-500 relative top-[90px] rounded">
                                <li className="cursor-pointer hover:bg-slate-500 hover:text-white px-8 py-1 uppercase">Entregado</li>
                                <li className="cursor-pointer hover:bg-slate-500 hover:text-white px-8 py-1 uppercase">En Camino</li>
                                <li className="cursor-pointer hover:bg-slate-500 hover:text-white px-8 py-1 uppercase">Perdido</li>
                                <li className="cursor-pointer hover:bg-slate-500 hover:text-white px-8 py-1 uppercase">Pagado</li>
                            </ul>
                        </div>
                    </label>
                </div>
            </div>
            <div className="p-6">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                    <div className="grid gap-2">
                        <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor="productImage">Product Image</label>
                        <Image src="/prueba.jpg" alt="Product Image" className="h-[400px] w-[400px] aspect-square object-cover border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800" width={200} height={200} />
                        <div className="flex flex-row gap-2">
                            <Image src="/prueba.jpg" alt="Product Image" className="h-[100px] w-[100px] aspect-square object-cover border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800" width={200} height={200} />
                            <Image src="/prueba.jpg" alt="Product Image" className="h-[100px] w-[100px] aspect-square object-cover border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800" width={200} height={200} />
                            <Image src="/prueba.jpg" alt="Product Image" className="h-[100px] w-[100px] aspect-square object-cover border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800" width={200} height={200} />
                        </div>
                    </div>
                    <div className="grid col-span-2 grid-rows-2">
                        <div className="w-full flex flex-row gap-2 row-span-1">
                            <div className="w-1/2 h-full p-2 flex flex-col gap-1">
                                <h1 className="font-bold text-2xl">Pedido 39239200</h1>
                                <h2 className="font-medium text-lg">Detalles de Facturacion</h2>
                                <div className="flex flex-col gap-2">
                                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                                        <span className="font-medium w-1/3">Total ($)</span>
                                        <input type="text" value="500" disabled className="text-right w-2/3 outline-none border-none ring-0"/>
                                    </label>
                                </div>
                                <h2 className="mt-4 font-medium text-lg">Detalles de Transporte</h2>
                                <div className="flex flex-col gap-2">
                                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-200 rounded-md">
                                        <span className="font-medium w-1/3">Tracker</span>
                                        <input type="text" value="OnTrac" disabled className="text-right w-2/3 outline-none border-none ring-0"/>
                                    </label>
                                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-200 rounded-md">
                                        <span className="font-medium w-1/3">Tracking</span>
                                        <input type="text" value="D1002112323233" disabled className="text-right w-2/3 outline-none border-none ring-0"/>
                                    </label>
                                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                                        <span className="font-medium w-1/3">Zoom Tracking</span>
                                        <input type="text" value="130545484" disabled className="text-right w-2/3 outline-none border-none ring-0"/>
                                    </label>
                                </div>
                            </div>
                            <div className="border-l w-1/2 h-full p-2">
                                <table className="w-full mx-4">
                                    <thead>
                                        <tr>
                                            <th>Cliente</th>
                                            <th>Articulos</th>
                                            <th>Monto en el pedido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { clients.map( client => <tr key={client.id}>
                                            <td>{client.name}</td>
                                            <td className="text-center">{client.items}</td>
                                            <td className="text-center">{client.mount} $</td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="border row-span-1 mt-10">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Thumbnail</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Prices</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { products.map( product => <tr key={product.id}>
                                        <td>
                                            <Image src={product.image} alt="" width={100} height={100} className="w-10 h-10 mx-auto"/>
                                        </td>
                                        <td>{product.name}</td>
                                        <td width={300}>{product.description}</td>
                                        <td className="text-center">
                                            <select className="w-20 text-center px-2 py-1">
                                                <optgroup label="Precio 1">
                                                    <option>{product.prices[0]}</option>
                                                </optgroup>
                                                <optgroup label="Precio 2">
                                                    <option>{product.prices[1]}</option>
                                                </optgroup>
                                                <optgroup label="Precio 3">
                                                    <option>{product.prices[2]}</option>
                                                </optgroup>
                                                <optgroup label="Precio 4">
                                                    <option>{product.prices[3]}</option>
                                                </optgroup>
                                            </select>
                                            
                                        </td>
                                        <td className="text-center">
                                            <button className="bg-black py-1 px-4 rounded-lg text-white">Ver</button>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="flex flex-col gap-2 md:flex-row">
                            <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">Save</button>
                            <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">Cancel</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    
    </>
}