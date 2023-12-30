export default function ClientList({
    products
}:{
    products:Array<TypeProductSelectable>
}){

    const reduceByClients = (clients:Array<any>, product:any) => {
        const index = clients.findIndex( (client:any) => client.id===product.client.id )
        if( index===-1 ) {
            clients.push({
                ...product.client,
                items: product.quantity,
                mount: product.quantity * product.sellPrice
            })
        } else {
            clients[index] = {
                ...clients[index],
                items: clients[index].items + product.quantity,
                mount: clients[index].mount + product.quantity * product.sellPrice
            }
        }
        return clients
    }

    return <div className="border-l w-1/2 h-full p-2">
        <table className="w-full mx-4">
            <thead>
                <tr>
                    <th>Cliente</th>
                    <th>Articulos</th>
                    <th>Monto en el pedido</th>
                </tr>
            </thead>
            <tbody>
                { products?.filter((product:TypeProductSelectable) => product?.selected ).reduce( reduceByClients, [] )
                    .map( (client:any) => <tr key={client.id}>
                        <td>{client.name.length>0 ? client.name : '-----'}</td>
                        <td className="text-center">{client.items}</td>
                        <td className="text-center">{client.mount} $</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}