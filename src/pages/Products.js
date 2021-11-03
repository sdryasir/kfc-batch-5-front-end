import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Card from '../components/Card';
import axios from 'axios'

const Products = () => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        try {
            setLoading(true)
            const productsResult = axios.get('http://localhost:3000/products')
            productsResult.then(res => {
                setLoading(false)
                setProducts(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const { category } = useParams();

    const prods = products.filter(product => product.category === category)

    return (
        <div>
            <h2 style={{ textAlign: 'center', textTransform: 'uppercase', marginTop: '24px', marginBottom: '24px' }}>{category.replace("-", " ")}</h2>

            <div className="row">
                {
                    prods.map(p => <Card data={p} />)
                }
            </div>

        </div>
    )
}

export default Products
