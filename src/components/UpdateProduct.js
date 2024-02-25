import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateProduct() {
    const { id } = useParams();
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')
    const navigate = useNavigate();
    let url = `http://localhost:4500/products/${id}`
    
    useEffect(() => {
        getProductDetail();
    },[id])

    const getProductDetail = async () => {
        let result = await fetch(url);
        result = await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }


    const updateProduct = async () => {
        console.warn(name, price, category, company,)
        let result = await fetch(url, {
            method: "Put", headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ name, price, category, company, })
        });
        result = await result.json()
        console.log(result)
        navigate('/')
    }
    return (
        <div className='register'>
            <h1>UPDATE YOUR PRODUCT </h1>
            <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" />
            <input className="inputbox" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter your Price" />
            <input className="inputbox" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter your Category" />
            <input className="inputbox" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter your Company" />
            <button className="appButton" onClick={updateProduct}> Add Product </button>
        </div>
    )
}


