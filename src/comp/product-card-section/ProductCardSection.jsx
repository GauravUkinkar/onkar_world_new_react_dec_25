import React from 'react'
import "./ProductCardSection.scss"
import ProductCard from '../productcard/ProductCard';

const ProductCardSection = ({type, title}) => {
  return (
    <>
      {type && (
        <div className="product-section-parent parent">
          <div className="product-section-title title2">
            {title}
            {/* Sugar <span>Products</span> <div className="underline"></div> */}
          </div>
          <div className="product-section-container container">
            {type &&
              type.map((data, index) => {
                return (
                  <ProductCard
                    key={index}
                    title={data.title}
                    image={data.image}
                    description={data.description}
                  />
                );
              })}
          </div>
        </div>
      )}
    </>
  )
}

export default ProductCardSection
