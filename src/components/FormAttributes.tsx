"use client"
import { useState } from "react"

export default function FormAttributes(){
    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    const [attributes, setAttributes] = useState<Array<any>>([])

    const handlerAdd = () => {
        setAttributes( prev => ([...prev, {
            name,
            value
        }]) )
        setValue("")
        setName("")
    }


    return <>
        <div className="flex flex-row mb-2">
            <span className="flex flex-col gap-1 w-2/3">
                <input type="text" value={name} onChange={ event => setName(event.target.value) } placeholder="Nombre del atributo" className="border border-slate-500 rounded p-2"/>
                <input type="text" value={value} onChange={ event => setValue(event.target.value) } placeholder="Valor del atributo" className="border border-slate-500 rounded p-2"/>
            </span>
            <span className="w-1/3 justify-center items-center flex">
                <button onClick={handlerAdd} className="bg-black text-white px-5 py-2 rounded-lg">Agregar</button>
            </span>
        </div>
        <div className="w-full flex flex-row gap-2 flex-wrap">
            {attributes.map( item=> <span key={item} className="flex justify-between w-fit px-2 gap-2 shadow-md border rounded-full items-center py-1">
                <span className="font-semibold">{item.name}</span>
                <span className="">{item.value}</span>
                <span className="opacity-50 bg-slate-300 w-5 h-5 rounded-full flex items-center justify-center">x</span>
            </span>)}
        </div>
    </>
}