import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

export function useProducts() {
    const [products, setProduct] = useState<IProduct[]>([])
    const [loding, setLoding] = useState(false)
    const [error, setError] = useState('')

    async function fetchProducts() {
        try {
            setError('')
            setLoding(true)
            const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            setProduct(res.data)
            setLoding(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoding(false)
            setError(error.message)

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return { products, error, loding }

}