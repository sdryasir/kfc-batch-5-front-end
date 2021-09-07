import React from 'react'
import Card from '../components/Card'

import { products } from '../data/products'

const Home = () => {
    return (
        <div className="row mt-5">
            {
                products.map((product) => <Card data={product} />)
            }
        </div>
    )
}

export default Home
