import React from 'react';
import './Cart.css'




const Cart = ({cart}) => {
    console.log(cart)

    let title = '';
    for(const blog of cart){
        // console.log(blog.title)
        title = blog.title
    }
    // console.log(title)


    return (
        <div className='cart'>
            <h2>Bookmarked Blogs: {cart.length} </h2>


            <div className="cart-item">
                <h5>{title}</h5>
            </div>

        </div>
    );
};

export default Cart;