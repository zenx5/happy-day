"use client"

import { useState } from "react"

export default function CheckBox({ value=false, onChange }:{ value:boolean, onChange:Function}) {
    const [check, setCheck] = useState(value)

    const handlerChange = (event:any) => {
      setCheck(event.target.checked)
      if( onChange ) onChange( event.target.checked )
    }

    return <label className="cursor-pointer">
      <input type="checkbox" className="peer sr-only" checked={check} onChange={handlerChange}/>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 peer-checked:block hidden text-blue-800">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 peer-checked:hidden block text-slate-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </label>
  }