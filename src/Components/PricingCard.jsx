import "./PricingCardStyles.css"

import React from 'react'
import { Link } from 'react-router-dom'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar">$ 100</span>
                <p className="btc"></p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>

        <div className="card-container">
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar">$ 200</span>
                <p className="btc"></p>
                <p>- 2 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>

        <div className="card-container">
            <div className="card">
                <h3>- Business -</h3>
                <span className="bar">$ 300</span>
                <p className="btc"></p>
                <p>- 5 Days -</p>
                <p>- 8 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard