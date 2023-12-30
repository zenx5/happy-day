export default function Modal({
    children,
    open
}:{
    children:any,
    open:boolean
}) {

    return open && <div className="w-screen h-screen bg-black absolute top-0 left-0 bg-opacity-40 flex flex-col items-center justify-center">
        <div className="bg-white p-5 w-3/4">
            { children }
        </div>
    </div>
}