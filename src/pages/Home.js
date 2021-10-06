import React from 'react'
import Card from '../components/Card'
import Slider from '../components/Slider'

import { products } from '../data/products'

const Home = () => {
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
