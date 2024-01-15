import Image from "next/image";
import Modal from "@/components/Modal";
import TableCustom from "@/components/TableCustom";
import { useState } from "react";
import { ORDER_STATUS } from "@/tools/constants";

export default function ModalPackage({
    open,
    products,
    onClose,
    onCreate
}:{
    open:boolean,
    products:Array<TypeProductSelectable>,
    onClose:Function,
    onCreate:Function
}) {
    const [pack, setPack] = useState<TypePackage>({
        id: "",
        tracker: "",
        tracking: "",
        zoomTracking: "",
        status:[],
        products: [],
    })
    const [productIds, setProductIds ] = useState<Array<string>>([])

    const handlerSelect = (id:string)  => (event:any) => {
        const value = event.target.checked
        if( value && !productIds.includes( id ) ){
            setProductIds( prev => [...prev, id])
        }
        if( !value && productIds.includes( id ) ) {
            setProductIds( prev => prev.filter( itemId => itemId!==id ) )
        }
    }

    const headers = [
        { name:'id', label:'ID', render: (id:string)=><input type="checkbox" checked={productIds.includes(id)} onChange={handlerSelect(id)} className="cursor-pointer"/> },
        { name:'image', label:'Thumbnail', render:(value:any) => <Image src={value.src.length>0 ? value.src : "/prueba.jpg"} width="64" height="64" alt={value.alt ?? "Item thumbnail"} className="aspect-square rounded-md object-cover"/> },
        { name:'name', label:'Name'},
        { name:'client', label:'Client', render:(client:any) => client.name }
    ]

    const handlerChange = (key:string, value:any) => {
        setPack( prev => ({
            ...prev,
            [key]: value
        }))

    }

    const setStatus = (status:any) => {
        const now = new Date()
        const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
        handlerChange('status', [
            ...pack?.status,
            {
                label:status.label,
                date
            }
        ])
    }

    const handlerCreate = () => {
        if( onCreate ) {
            onCreate({
                ...pack,
                products: productIds
            })
        }
        onClose()
    }

    return <Modal open={open} className="bg-white p-5 w-1/2">
        <div className="rounded-md flex flex-col gap-2">
            <h2>Agregar Paquete</h2>
            <span className="flex flex-row gap-1">
                <label className="p-2 flex flex-row justify-between gap-2 border border-slate-200 rounded-md w-1/2">
                    <span className="font-medium w-1/3">Tracker</span>
                    <input type="text" value={pack.tracker} onChange={event => handlerChange('tracker', event.target.value)} className="text-right w-2/3 outline-none border-none ring-0"/>
                </label>
                <label className="p-2 flex flex-row justify-between gap-2 border border-slate-200 rounded-md w-1/2">
                    <span className="font-medium w-1/3">Tracking</span>
                    <input type="text" value={pack.tracking} onChange={event => handlerChange('tracking', event.target.value)} className="text-right w-2/3 outline-none border-none ring-0"/>
                </label>
            </span>
            <span className="flex flex-row gap-1">
                <label className="p-2 flex flex-row justify-between gap-2 border border-slate-200 rounded-md w-2/3">
                    <span className="font-medium w-1/3">Tracking Zoom</span>
                    <input type="text" value={pack.zoomTracking} onChange={event => handlerChange('zoomTracking', event.target.value)} className="text-right w-2/3 outline-none border-none ring-0"/>
                </label>
                <label className="bg-black rounded-full flex items-center justify-center cursor-pointer w-1/3 z-10" >
                    <input type="checkbox" className="peer opacity-0"/>
                    <span className="text-white uppercase">{ pack?.status?.at( pack?.status.length - 1 )?.label ?? "--" }</span>
                    <div className="absolute hidden peer-checked:block">
                        <ul className="text-black bg-white shadow-black shadow-md border border-slate-500 relative top-[90px] rounded">
                            { ORDER_STATUS.map( status => <li key={status.value} onClick={()=>setStatus(status)} className="cursor-pointer hover:bg-slate-500 hover:text-white px-8 py-1 uppercase">{status.label}</li>)}
                        </ul>
                    </div>
                </label>
            </span>
            <div className="h-80 overflow-y-scroll mt-2">
                <TableCustom headers={headers} items={products ?? []}>{""}</TableCustom>
            </div>
            <span className="w-full flex flex-row gap-5 justify-end">
                <button onClick={()=>onClose()} className="bg-black text-white rounded py-1 px-4">Close</button>
                <button onClick={handlerCreate} className="bg-black text-white rounded py-1 px-4">Crear</button>
            </span>
        </div>
    </Modal>
}