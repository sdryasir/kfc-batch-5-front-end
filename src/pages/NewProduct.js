import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NewProduct = () => {



    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        stock: '',
        category: ''
    })

    const [categories, setCategories] = useState([])


    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = axios.post('http://localhost:3000/products', product, config)
            console.log(res)
        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        try {
            const categoriesResult = axios.get('http://localhost:3000/categories')
            categoriesResult.then(res => {
                setCategories(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <div>
            <div className="row justify-content-center py-5">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="product-title" className="form-label">Enter Product Title</label>
                            <input type="text" required className="form-control" id="product-title" name="title" onChange={handleChange} placeholder="product title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="product-description" className="form-label">Enter Product Description</label>
                            <input type="text" required className="form-control" id="product-description" name="description" onChange={handleChange} placeholder="product description" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="product-price" className="form-label">Enter Price</label>
                            <input type="text" required className="form-control" id="product-price" name="price" onChange={handleChange} placeholder="product price" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="product-quantity" className="form-label">Enter Stock</label>
                            <input type="text" required className="form-control" id="product-quantity" name="stock" onChange={handleChange} placeholder="product quantity" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="product-quantity" className="form-label">Category</label>
                            <select className="form-control" required onChange={handleChange} name="category" id="category">
                                <option value="">Choose category</option>
                                {
                                    categories.map((category) => <option key={category} value={category}>{category}</option>)
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="btn btn-success w-100" value="Add New Product" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default NewProduct
