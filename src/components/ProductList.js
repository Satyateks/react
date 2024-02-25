import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [product, setProduct] = useState([]);
  const url = "http://localhost:4500/products";

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async () => {
    let result = await fetch(url, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    setProduct(result);
  }

  const deleteProduct = async (id) => {
    console.log(id)
    let result = await fetch(`${url}/${id}`, { method: "Delete" });

    result = await result.json()
    if (result) {
      alert(`Record is Deleted`);
      getProduct();
    }
  }

  const searchProduct = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`${url}/search/${key}`,{
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      result = await result.json()
      if (result) {
        setProduct(result)
      }
    } else { getProduct() }
  }

  return (
    <div className='product-list'>
      <h1>PRODUCT LIST </h1>
      <input className='search-product-box' type='text' placeholder='Search Product' onChange={searchProduct} />
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Update</li>
        <li>Operation</li>
        {/* <li>User ID</li> */}
      </ul>
      {product.length > 0 ?
        product.map((item, index) =>
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price} $</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            {/* <li>{item.userId}</li> */}
            <li><Link to={"/update/" + item._id}>Update</Link></li>
            <li><button onClick={() => deleteProduct(item._id)}> Delete</button></li>
          </ul>
        )
        : <h1>No Result Found</h1>
      }
    </div>
  )
}
