import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { APIS } from '../../../../config'
import './Product.scss'

function Product({ sort }) {
  const [recommendData, setRecommendData] = useState([])

  useEffect(() => {
    fetch(`${APIS.product}/filter?orderBy=${sort}&offset=0&limit=10`)
      .then(response => response.json())
      .then(data => setRecommendData(data.data))
  }, [])

  return (
    <div className="product">
      <div className="productList">
        {recommendData.map(item => {
          return (
            <Link to={`products/${item.productId}`} key={item.id}>
              <div className="productItem">
                <img
                  className="productImg"
                  src={item.main_image_thumbnail}
                  alt={`${item.productName} productImg`}
                />
                <div className="productText">
                  <p className="itemIcon">{item.icon}</p>
                  <p className="itemName">{item.productName}</p>
                  <p className="itemPrice">{item.productPrice}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Product
