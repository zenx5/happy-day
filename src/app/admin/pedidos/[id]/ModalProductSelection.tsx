import Image from "next/image"
import CheckBox from "@/components/CheckBox"
import Modal from "@/app/components/Modal"
import TableCustom from "@/components/TableCustom"

export default function ModalProductSelection({
    products,
    open,
    onClose,
    onChangeSelect
}:{
    products:Array<TypeProductSelectable>,
    open:boolean,
    onClose: Function,
    onChangeSelect: Function
}) {


    const renderCheckBox = (id:string, onSelect:Function) => {
        const productTarget = products.find( product => {
            return product.id===id
        })
        return <CheckBox value={productTarget?.selected as boolean} onChange={()=>onSelect(id)} />
    }

    const headers = [
        { name:'id', label:'ID', render: (id:string)=>renderCheckBox(id, onChangeSelect) },
        { name:'image', label:'Thumbnail', render:(value:any) => <Image src={value.src.length>0 ? value.src : "/prueba.jpg"} width="64" height="64" alt={value.alt ?? "Item thumbnail"} className="aspect-square rounded-md object-cover"/> },
        { name:'name', label:'Name'},
        { name:'client', label:'Client', render:(client:any) => client.name },
        { name:'clientPrice', label:'Client Price' },
        { name:'sellerPrice', label:'Seller Price' }
    ]

    return <Modal open={open}>
        <TableCustom
            headers={headers}
            items={products}
        >
            <div className="flex flex-row justify-between items-center py-5 px-2">
                <span></span>
                <span>
                    <button onClick={()=>onClose()} className="py-1 px-5 bg-black text-white">Volver</button>
                </span>
            </div>

        </TableCustom>
    </Modal>
}