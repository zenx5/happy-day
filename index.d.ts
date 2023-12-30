interface TypeSingleOption {
    label: string,
    value: string|number
}

interface TypeImage {
    src: string,
    alt: string
}

interface TypeStatus {
    label: string,
    date: string
}

interface TypePayment {
    date:string,
    value:number
}

interface TypeAttribute {
    name: string,
    value: string
}

interface TypeClient {
    id: string,
    name: string
}

interface TypeProduct {
    id: string,
    name: string,
    description: string,
    client: {
        id:string,
        name: string
    },
    payments:Array<TypePayment>,
    attributes:Array<TypeAttribute>,
    date:string,
    quantity: number,
    clientPrice: number,
    sellerPrice: number,
    buyPrice: number,
    sellPrice: number,
    image: TypeImage
}

interface TypeProductSelectable extends TypeProduct {
    selected:boolean
}

interface TypeOrder {
    id: string,
    code: string,
    coupon: {
        code: sring,
        value: number
    },
    date: string,
    deliveryPrice: number,
    status: Array<TypeStatus>,
    tracker: string,
    tracking: string,
    zoomTracking: string,
    total: number,
    subtotal: number,
    products: Array<TypeProduct>
}