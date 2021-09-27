import React from 'react'
import p1 from '../assets/p1.png'
import { Link } from 'react-router-dom'

const Card = (props) => {

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={p1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.description}</p>
                    <a href="#" className="btn btn-danger">PKR. {props.data.price}</a>
                    <Link to={`/product/${props.data.slug}`} className="btn btn-primary">Add to Bucket</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
