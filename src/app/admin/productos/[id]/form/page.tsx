import Image from "next/image";
import FormAttributes from "@/components/FormAttributes";
import ClientSelect from "@/app/components/ui/ClientSelect";

export default function Page(){

    return <div className="rounded-lg border bg-card text-card-foreground shadow-sm grid grid-rows-5 grid-cols-2 h-full w-full">
        <div className="col-span-2 row-span-3">
            <form className="grid grid-cols-2 p-2 gap-2">
                <div className="flex flex-col gap-2 border-r pr-2">
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Nombre del Articulo</span>
                        <input type="text" value="Algun nombre" className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                    <label className="p-2 flex flex-col justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Descripcion</span>
                        <textarea className=""></textarea>
                    </label>
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Precio 1</span>
                        <input type="number" value={0} className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Precio 2</span>
                        <input type="number" value={0} className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Precio 3</span>
                        <input type="number" value={0} className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Precio 4</span>
                        <input type="number" value={0} className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                </div>
                <div className="flex flex-col gap-2 border-r pr-2">
                    <ClientSelect />
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Cantidad</span>
                        <input type="number" value={1} className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Fecha de Recepcion</span>
                        <input type="date" className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                    <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                        <span className="font-medium w-1/3">Fecha de Pago </span>
                        <input type="date" className="text-right w-2/3 outline-none border-none ring-0"/>
                    </label>
                    <div className="flex flex-row gap-2 justify-end h-full items-end">
                        <button className="border border-black text-black py-1 px-5 rounded">Limpiar</button>
                        <button className="bg-black text-white py-1 px-5 rounded">Agregar</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="col-span-1 row-span-2 p-2">
            <FormAttributes />
        </div>
        <div className="col-span-1 row-span-2 p-2">
            <h2 className="font-semibold text-xl mb-2">Image de Referencia</h2>
            <span className="w-full flex justify-center">
                <Image src="/prueba.jpg" alt="" width={250} height={250} className="rounded-md"/>
            </span>
        </div>
    </div>
}