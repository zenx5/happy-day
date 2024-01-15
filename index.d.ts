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
    name: string,
    phone: string,
    email: string,
    payments: Array<TypePayment>
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

interface TypeCoupon {
    code: sring,
    value: number
}

interface TypeProductSelectable extends TypeProduct {
    selected:boolean
}

interface TypePackage {
    id: string,
    tracker: string,
    tracking: string,
    zoomTracking: string,
    products:Array<string>,
    status: Array<TypeStatus>
}

interface TypeOrder {
    id: string,
    code: string,
    coupon: TypeCoupon,
    date: string,
    deliveryPrice: number,
    packages:Array<TypePackage>,
    total: number,
    subtotal: number,
    products: Array<TypeProduct>
}