import React from 'react';

const ReviewItem = (props) => {
    //console.log(props);
    const {name, quantity, key, price} = props.product;
    document.title = "Order Review";

    const reviewItemStyle = {
        borderBottom:'1px solid gray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p><br/>
            <p><small>${price}</small></p>
            <button 
             className="main-button"
             onClick={() =>props.removeProduct(key)}
             >Remove</button>
        </div>
    );
};

export default ReviewItem;