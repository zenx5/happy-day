"use client"

import { useEffect, useState } from "react"

export default function FormSelect({
    label,
    labelNew,
    items,
    currentValue,
    onChange,
    onCreate
}:{
    label:string,
    labelNew:string,
    items:Array<TypeSingleOption>,
    currentValue:string|number,
    onChange:Function,
    onCreate:Function
}) {
    const [value, setValue] = useState(currentValue ?? 0)
    const [newValue, setNewValue] = useState("")

    useEffect(()=>{
        if( value!==0 ){
            setNewValue("")
        }
    },[value])

    useEffect(()=>{
        setValue(currentValue)
    },[currentValue])

    const handlerCreate = () => {
        if( onCreate ) onCreate( newValue )
        setNewValue("")
    }

    const handlerChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setValue( e.target.value )
        if(onChange) onChange( e.target.value )
    }

    return <div className="border border-slate-300 rounded-md">
        <label className="p-2 flex flex-row justify-between gap-2">
            <span className="font-medium w-1/3">{ label }</span>
            <select
                className="bg-white w-2/3 text-right pr-5"
                onChange={handlerChange}
                value={value}
            >
                <option value={0}>{ labelNew }</option>
                { items.map( item => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
        </label>
        {value==0 && <span className="p-2 flex flex-row justify-between gap-2">
            <input type="text" className="bg-white w-3/4 pl-5" placeholder="Nuevo elemento" value={newValue} onChange={(event:any) => setNewValue(event.target.value)}/>
            <button className="w-1/4 bg-black text-white py-1" onClick={handlerCreate}>Agregar</button>
        </span>}
    </div>
}