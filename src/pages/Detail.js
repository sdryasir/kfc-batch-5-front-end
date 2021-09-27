import React, { useState } from 'react'
import p1 from '../assets/p1.png'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';
import Overlay from '../components/Overlay';
import { useSelector, useDispatch } from 'react-redux';


const Detail = () => {

    const { prod } = useParams();

    const product = products.find(item => item.slug === prod)

    const [quantity, setQuantity] = useState(1)

    const counter = useSelector(state => state.counter)

    const dispatch = useDispatch()

    const [overlay, setOverlay] = useState(false)

    const increaseQty = () => {
        if (quantity >= product.stock) return
        setQuantity(quantity + 1)
    }

    const decreaseQty = () => {
        if (quantity <= 1) return
        setQuantity(quantity - 1)
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img src={p1} alt="" />
                </div>
                <div className="col-md-6">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <h3>PKR. {product.price}</h3>
                    <p>Available Qty: {product.stock}</p>
                    <button type="button" className="btn btn-danger" onClick={decreaseQty}>-</button>
                    <button type="button" className="btn btn-danger-outline">{quantity}</button>
                    <button type="button" className="btn btn-danger" onClick={increaseQty}>+</button>
                    <button type="button" className="btn btn-danger ms-4" onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>ADD NUMBER</button>

                    <p>{counter}</p>
                </div>
            </div>
            {overlay ? <div className="overlay" onClick={() => setOverlay(false)}>
                <div className="overlay-sidebar">

                </div>
            </div> : ''}
        </div>
    )
}

export default Detail

//reducer
//store
//dispatching action
//state
