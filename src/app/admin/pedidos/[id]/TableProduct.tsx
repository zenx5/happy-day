import Image from "next/image"

export default function TableProduct({
    products
}:{
    products:Array<TypeProductSelectable>
}) {


    return <table className="w-full">
        <thead>
            <tr>
                <th>Thumbnail</th>
                <th>Name</th>
                <th>Description</th>
                <th>Prices</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            { products?.filter( (product:TypeProductSelectable) => product?.selected ).map( product => <tr key={product.id}>
                <td>
                    <Image src={product?.image.src.length>0 ? product?.image.src : "/prueba.jpg"} alt={product?.image.alt} width={100} height={100} className="w-10 h-10 mx-auto"/>
                </td>
                <td>{product?.name}</td>
                <td width={300}>{product?.description}</td>
                <td className="text-center">
                    <select className="w-20 text-center px-2 py-1">
                        <optgroup label="Cliente">
                            <option>{product?.clientPrice}</option>
                        </optgroup>
                        <optgroup label="Vendedor">
                            <option>{product?.sellerPrice}</option>
                        </optgroup>
                        <optgroup label="Venta">
                            <option>{product?.buyPrice}</option>
                        </optgroup>
                        <optgroup label="Compra">
                            <option>{product?.sellPrice}</option>
                        </optgroup>
                    </select>
                </td>
                <td className="text-center">
                    <button className="bg-black py-1 px-4 rounded-lg text-white">Ver</button>
                </td>
            </tr>)}
        </tbody>
    </table>
}