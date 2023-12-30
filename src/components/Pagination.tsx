"use client"
import { useEffect, useState } from "react"

export default function Pagination({
    page,
    items,
    max,
    onPageChange
}:{
    page:number,
    items:Array<any>,
    max:number,
    onPageChange:Function
}) {
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const diff = (max - 1)/max
        setTotal(
            Math.floor(
                (items.length/max) + (diff%max)
            )
        )
    },[items.length, max])


    return <span className="flex flex-row justify-between items-center gap-2 w-full">
        <button onClick={()=>onPageChange(page - 1)} disabled={page===1} className="disabled:bg-slate-700 bg-black text-white py-1 px-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <span>{page}/{total}</span>
        <button onClick={()=>onPageChange(page + 1)} disabled={page===total} className="disabled:bg-slate-700 bg-black text-white py-1 px-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    </span>
}