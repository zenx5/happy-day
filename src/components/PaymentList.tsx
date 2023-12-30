"use client"
import { useEffect, useState } from "react"

export default function PaymentList({ payments, onAdd }:{ payments:Array<TypePayment>, onAdd:Function }) {
    const [payment, setPayment] = useState<TypePayment>({
        date: "",
        value: 0
    })
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const handlerAddPayment = () => {
        if( onAdd ) onAdd([...payments, payment])
    }

    useEffect(()=>{
        if( totalPage===0 && payments?.length>0 ) setTotalPage( Math.floor( ((payments?.length ?? 0)/3) + ((2/3)%3) ) )
    },[totalPage, payments])

    const filterPayments = (item:TypePayment, index:number) => {
        return Math.floor( ((index+1)/3) + ((2/3)%3) ) === page
    }

    return <label className="p-2 flex flex-col justify-between gap-2 border border-slate-300 rounded-md">
        <span className="font-medium w-full flex flex-row justify-between mb-4 border-b border-black pb-2">
            <span className="w-2/4">Pagos ({payments?.length ?? 0})</span>
            <input type="date" value={payment.date} onChange={event => setPayment({...payment, date:event.target.value})} className="w-1/4"/>
            <span className="w-1/4 flex flex-row">
                <input type="number" value={payment.value} onChange={event => setPayment({...payment, value: parseFloat(event.target.value) })} className="text-right w-3/4"/>
                <button type="button" onClick={handlerAddPayment} className="w-1/4 text-white bg-black flex items-center justify-center rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </span>
        </span>
        {payments?.filter( filterPayments ).map( (payment:TypePayment, index:number) => <span key={index} className="flex justify-between w-full">
            <input type="date" value={payment.date} disabled className="outline-none border-none ring-0"/>
            <span>{payment.value} $</span>
        </span>)}
        <span className="flex justify-between">
            <button className="bg-black text-white rounded disabled:bg-slate-700" onClick={()=>setPage(prev => prev - 1)} disabled={page===1}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            <span>{ page }/{ totalPage }</span>
            <button className="bg-black text-white rounded disabled:bg-slate-700" onClick={()=>setPage(prev => prev + 1)} disabled={page===totalPage}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </span>
    </label>
}