interface TypeSingleOption {
    label: string,
    value: string|number
}

interface TypeImage {
    src: string,
    alt: string
}

interface TypeProduct {
    id: string,
    name: string,
    description: string,
    price: number,
    image: TypeImage
}