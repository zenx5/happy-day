"use client"
import { useEffect, useState } from "react";
import FormSelect from "../FormSelect";

export default function ClientSelect() {
    const [value, setValue] = useState<number|string>(0)
    const [items, setItems] = useState<Array<TypeSingleOption>>([
        { label:"Ana", value: 1 },
        { label:"Maria", value: 2 },
        { label:"Petra", value: 3 },
        { label:"Maura", value: 4 }
    ])

    /*
    useEffect(()=>{
        (async()=>{
            if( items.length===0 ) {
                const response = await fetch(`api-get-clients`)
                const data = await response.json()
                setItems( data )
            }
        })()
    },[items])*/

    const handlerChange = (newValue:string|number) => {
        setValue( newValue )
    }

    const handlerCreate = async (label:string) => {
        // const response = await fetch(`api-create-client`)
        // const data = await response.json()
        // if( !data.error ) {
        //     setItems( [...items, { label, value: items.length }] )
        // }
    }


    return <FormSelect
        label="Clientes"
        labelNew="Nuevo Cliente"
        items={items}
        currentValue={value}
        onChange={handlerChange}
        onCreate={handlerCreate} />
}