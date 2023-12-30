"use client"
import { useEffect, useState } from "react";
import FormSelect from "../FormSelect";
import ClientModel from "@/tools/models/ClientModel";

export default function ClientSelect({
    defaultValue
}:{
    defaultValue:string
}) {
    const [value, setValue] = useState(defaultValue ?? "")
    const [items, setItems] = useState<Array<TypeSingleOption>>([])

    useEffect(()=>{
        setValue(defaultValue)
    },[defaultValue])

    useEffect(()=>{
        ClientModel.onSnap( (data:any) => {
            setItems( data.map( (item:TypeClient) => ({label:item.name, value:item.id})) )
        },null)
    },[])

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

    const handlerChange = (newValue:string) => {
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