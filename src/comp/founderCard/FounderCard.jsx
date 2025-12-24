import React from 'react'
import "./FounderCard.scss"

const FounderCard = (props) => {
  return (
    <>
      <div className="founders-card">
        <div
          className="card-img bg-cover"
          style={{ background: `url(${props.background})` }} 
        ></div>
       
        <div className="card-bottom">
        <div className="bottom-overlay"></div>
          <div className="card-overlay"></div>

          <div className="card-content">
            <h3 className="card-headding">{props.founderName}</h3>
            <h4 className="founder-designation" >{props.designation}</h4>
            <p className="card-p">{props.founderText}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FounderCard
