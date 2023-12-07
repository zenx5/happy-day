import Image from "next/image"
import Link from "next/link"

export default function Page() {


    return <>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-row p-6 pb-4 justify-between ">
                <div className="flex flex-col space-y-1.5 ">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Edit Product</h3>
                    <p className="text-sm text-muted-foreground">Make changes to your product here. Click Save when youre done.</p>
                </div>
                <div className="flex flex-row gap-2">
                    <Link href="/admin/envios/1/detalles" className="w-20 bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-2 py-1">
                      Guardar
                    </Link>
                    <Link href="/admin/envios/1/detalles" className="w-20 bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-2 py-1">
                      Ver
                    </Link>
                </div>
            </div>
            <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <form className="grid gap-4">
                        <div className="grid gap-2">
                            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor="productName">Product Name</label>
                            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="productName" placeholder="Product Name"/>
                        </div>
                        <div className="grid gap-2">
                            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor="productPrice">Product Price</label>
                            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="productPrice" placeholder="Product Price"/>
                        </div>
                        <div className="grid gap-2">
                            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor="productQuantity">Product Quantity</label>
                            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="productQuantity" placeholder="Product Quantity"/>
                        </div>
                        <div className="grid gap-2">
                            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor="productDescription">Product Description</label>
                            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="productDescription" placeholder="Product Description"/>
                        </div>
                        <div className="flex flex-col gap-2 md:flex-row">
                            <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">Save</button>
                            <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">Cancel</button>
                        </div>
                    </form>
                    <div className="grid gap-2">
                        <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor="productImage">Product Image</label>
                        <Image src="/prueba.jpg" alt="Product Image" className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800" width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    
    </>
}