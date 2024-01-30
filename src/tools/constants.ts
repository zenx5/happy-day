export const ORDER_STATUS = [
    { value:0, label: "Entregado" },
    { value:1, label: "En Camino" },
    { value:2, label: "Perdido" },
    { value:3, label: "Pagado" }
]

export const PATH = {
    ADMIN: {
        CLIENTS: '/admin/clientes',
        CLIENT: (id:string) => `/admin/clientes/${id}`
    }
}