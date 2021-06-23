export default interface Produto {
    amount: number,
    factory: {
      id: number,
      name: string,
    },
    id: number,
    name: string,
    price: number
}