import React from 'react'
import "../style/cards.css"

function Cards({item}) {
    
  return (
    <>
    <div>
    <div className="card md:mt-14 md:mb-2  mt-14 mb-2 mx-auto">
  <div className="main-content">
    <div className="header">
  <span >{item.title}</span>

</div>
<p className="heading text-white">{item.name}</p>
<div className="categories">
    <span>Buy Now</span>
  <span>$10.99</span>
    <span>{item.category}</span>
</div>
  </div>
<div className="footer">
  by Baba Ranchordas
</div>
</div>
    </div>

    </>
  )
}

export default Cards