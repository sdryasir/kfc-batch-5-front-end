import React, { useState } from 'react'
import p1 from '../assets/p1.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Card = (props) => {

    const handleDelete = (id) => {
        try {
            const res = axios.delete(`http://localhost:3000/products/${id}`)
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={p1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.description}</p>
                    <a href="#" className="btn btn-danger">PKR. {props.data.price}</a>
                    <Link to={`/products/${props.data.id}`} className="btn btn-primary ms-2">Add to Bucket</Link>
                    <Link to={`/edit/${props.data.id}`} className="btn btn-warning ms-2"><i className="bi bi-pencil-square"></i></Link>
                    <button onClick={() => handleDelete(props.data.id)} className="btn btn-info ms-2"><i className="bi bi-trash"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Card
