import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import TimeCart from '../TimeCart/TimeCart';
const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const [cart, setCart] = useState([])
    const [timeCart, setTimeCart] = useState([])



    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])




    const addToCartHandler =(blog)=>{
        // console.log(blog)
        const newCart = [...cart, blog];

        setCart(newCart)
    }

    const readTimeAdd = (time)=>{
        const newTimeCart = [...timeCart, time]

        setTimeCart(newTimeCart)
    }



    return (
        <div className='blogs'>
            <div className="blog-container">
                {
                    blogs.map(blog => <Blog 
                        key={blog.id}
                        blog={blog}
                        addToCartHandler={addToCartHandler}
                        readTimeAdd={readTimeAdd}
                    ></Blog>)
                }
            </div>
            <div className="cart-container">
                <TimeCart timeCart={timeCart}></TimeCart>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Blogs;