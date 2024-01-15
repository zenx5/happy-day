export default function Modal({
    children,
    open,
    className = "bg-white p-5 w-3/4"
}:{
    children:any,
    open:boolean,
    className:string|undefined
}) {

    return open && <div className="w-screen h-screen bg-black absolute top-0 left-0 bg-opacity-40 flex flex-col items-center justify-center">
        <div className={className}>
            { children }
        </div>
    </div>
}