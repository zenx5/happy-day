export default function OrderDetails({
    order,
    onChange
}:{
    order:TypeOrder,
    onChange:Function
}) {

    return order && <div className="w-1/2 h-full p-2 flex flex-col gap-1">
        <h1 className="font-bold text-2xl">Pedido {order?.code}</h1>
        <h2 className="font-medium text-lg">Detalles de Facturacion</h2>
        <div className="flex flex-col gap-2">
            <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                <span className="font-medium w-1/3">Total ($)</span>
                <input type="number" onChange={event=>onChange('total', parseFloat(event.target.value))} value={order?.total} className="text-right w-2/3 outline-none border-none ring-0"/>
            </label>
        </div>
        <h2 className="mt-4 font-medium text-lg">Detalles de Transporte</h2>
        <div className="flex flex-col gap-2">
            <label className="p-2 flex flex-row justify-between gap-2 border border-slate-200 rounded-md">
                <span className="font-medium w-1/3">Tracker</span>
                <input type="text" onChange={event=>onChange('tracker', event.target.value)} value={order?.tracker} className="text-right w-2/3 outline-none border-none ring-0"/>
            </label>
            <label className="p-2 flex flex-row justify-between gap-2 border border-slate-200 rounded-md">
                <span className="font-medium w-1/3">Tracking</span>
                <input type="text" onChange={event=>onChange('tracking', event.target.value)} value={order?.tracking} className="text-right w-2/3 outline-none border-none ring-0"/>
            </label>
            <label className="p-2 flex flex-row justify-between gap-2 border border-slate-300 rounded-md">
                <span className="font-medium w-1/3">Zoom Tracking</span>
                <input type="text" onChange={event=>onChange('zoomTracking', event.target.value)} value={order?.zoomTracking} className="text-right w-2/3 outline-none border-none ring-0"/>
            </label>
        </div>
    </div>
}