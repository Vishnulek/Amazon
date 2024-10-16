import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
  const [productData, changeProductData] = useState(
    [

      {
        "name": "Cricket Set", "imageURL": "https://m.media-amazon.com/images/I/71Spdnhr8GL._SL1500_.jpg", "price": "3999", "buyNow":"Buy now"
      },
      {
        "name": "Women's Dress", "imageURL": "https://m.media-amazon.com/images/I/61YXrR5xtBL._AC_UL480_FMwebp_QL65_.jpg", "price": "599", "buyNow":"Buy now"
      },
      {
        "name": "Women's sari", "imageURL": "https://m.media-amazon.com/images/I/511AeDH3HgL._AC_UL480_FMwebp_QL65_.jpg", "price": "7599", "buyNow":"Buy now"
      },
      {
        "name": "Women's kurta set", "imageURL": "https://m.media-amazon.com/images/I/51SChtLfb-L._AC_UL480_FMwebp_QL65_.jpg", "price": "1299", "buyNow":"Buy now"
      },
      {
        "name": "Baggy Jeans", "imageURL": "https://m.media-amazon.com/images/I/51TWNOZyJ2L._AC_UL480_FMwebp_QL65_.jpg", "price": "1350", "buyNow":"Buy now"
      },
      {
        "name": "One plus", "imageURL": "https://m.media-amazon.com/images/I/31hcJbP0BuL._SX300_SY300_QL70_FMwebp_.jpg", "price": "19998", "buyNow":"Buy now"
      },
      {
        "name": "Philips Mixer grinder", "imageURL": "https://m.media-amazon.com/images/I/71mL2bdyRdL._SX679_.jpg", "price": "2899", "buyNow":"Buy now"
      },
      {
        "name": "Induction Aluminium Pressure Cooker", "imageURL": "https://m.media-amazon.com/images/I/51xCU5ylKAL._SX679_.jpg", "price": "5999", "buyNow":"Buy now"
      },
      {
        "name": "Non Stick Cookware Set, 5 Pcs of Royal Blue coloured plates", "imageURL": "https://m.media-amazon.com/images/I/31whoRkjLWL._SY300_SX300_QL70_FMwebp_.jpg", "price": "935", "buyNow":"Buy now"
      }

    ]
  )
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">

              {productData.map(
                (value, index) => {
                  return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

<div class="card">
  <img src={value.imageURL} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.name}</h5>
    <p class="card-text">{value.price}</p>
    <a href="#" class="btn btn-primary">{value.buyNow}</a>
  </div>
</div>



                  </div>

                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
