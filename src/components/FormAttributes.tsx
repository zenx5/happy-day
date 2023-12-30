"use client"
import { useEffect, useState } from "react"

export default function FormAttributes({
    values,
    onChange
}:{
    values:Array<TypeAttribute>|undefined,
    onChange: Function
}){
    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    const [attributes, setAttributes] = useState<Array<any>>([])

    useEffect(()=>{
        if( values && values?.length>0 ) setAttributes(values)
    }, [values])

    const handlerAdd = () => {
        if( onChange ) onChange([
            ...attributes,
            {
                name,
                value
            }
        ])
        setAttributes( prev => ([...prev, {
            name,
            value
        }]) )
        setValue("")
        setName("")
    }

    const handlerRemoveItem = (index:Number) => {
        if( onChange ) onChange(attributes.filter( (item, itemIndex) => index!==itemIndex ))
        setAttributes( prev => prev.filter( (item, itemIndex) => index!==itemIndex ) )
    }


    return <>
        <div className="flex flex-row mb-2">
            <span className="flex flex-col gap-1 w-2/3">
                <input type="text" value={name} onChange={ event => setName(event.target.value) } placeholder="Nombre del atributo" className="border border-slate-500 rounded p-2"/>
                <input type="text" value={value} onChange={ event => setValue(event.target.value) } placeholder="Valor del atributo" className="border border-slate-500 rounded p-2"/>
            </span>
            <span className="w-1/3 justify-center items-center flex">
                <button onClick={handlerAdd} disabled={name.trim().length===0 || value.trim().length===0} className="bg-black text-white px-5 py-2 rounded-lg disabled:bg-gray-600">Agregar</button>
            </span>
        </div>
        <div className="w-full flex flex-row gap-2 flex-wrap">
            {attributes.map( (item, index)=> <span key={index} className="flex justify-between w-fit px-2 gap-2 shadow-md border rounded-full items-center py-1">
                <span className="font-semibold">{item.name}</span>
                <span className="">{item.value}</span>
                <button onClick={()=>handlerRemoveItem(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-50 bg-slate-300 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

            </span>)}
        </div>
    </>
}