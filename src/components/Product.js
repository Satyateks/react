import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')
    const navigate = useNavigate();

    const collectData = async () => {
        console.warn(name, price, category,company,)
      let userId= JSON.parse(localStorage.getItem("user"))._id
        let result = await fetch('http://localhost:4500/products', {
            method: 'post', headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ name, price, category,company,userId })
        })

        result = await result.json()
        console.log(result)
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/')
    }
  return (
    <div className='register'>
         <h1>ADD YOUR PRODUCT </h1>
        <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" />
        <input className="inputbox" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter your Price" />
        <input className="inputbox" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter your Category" />
        <input className="inputbox" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter your Company" />
        <button className="appButton" onClick={collectData}> Add Product </button>
    
    </div>
    
  )
}

export default Product