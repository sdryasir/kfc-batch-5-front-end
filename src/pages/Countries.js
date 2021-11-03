import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = () => {

    const [countries, setCountries] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try {
            setLoading(true)
            const countriesResult = axios.get('https://restcountries.com/v3.1/all')
            countriesResult.then(res => {
                setLoading(false)
                setCountries(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div>
            <h1>Countries</h1>

            <div className="row">

                {
                    loading ? <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                        countries.map((country) => <div key={country.name.official} className="col-md-3 mt-3">
                            <div className="card">
                                <img style={{ width: '100%', height: '100px' }} src={country.flags.svg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{country.name.official}</h5>
                                    <p className="card-text">{country.region}</p>
                                    <a href="#" className="btn btn-primary">Country Detail</a>
                                </div>
                            </div>
                        </div>)
                }

            </div>

        </div>
    )
}

export default Countries
