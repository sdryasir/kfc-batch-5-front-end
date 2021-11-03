import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Slider from '../components/Slider'
import axios from 'axios'


const Home = () => {

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

    return (
        <>
            <Slider />
            <div className="row mt-5">
                {
                    products.map((product) => <Card key={product.id} data={product} />)
                }
            </div>
        </>
    )
}

export default Home
