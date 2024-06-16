import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return(
        <div className= 'descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>A platform that makes it easier to purchase and sell goods and services online is known as an e-commerce website. It functions as an online marketplace where companies and people may display their goods, communicate with clients, and carry out transactions without having to be physically present. Because of their ease of use, accessibility, and worldwide reach, e-commerce websites have become incredibly popular.</p>
                <p>E-commerce websites often include goods and services with comprehensive details, photos, costs, and any accessible options (such as colors and sizes). Typically, every product gets an own page with pertinent details.</p>
            </div>
        </div>
    )
}

export default DescriptionBox