import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Product.css';

const Product = (props) => {
    return (
        <div className="part-1 col-3">
            <img src={props.img} alt="" />
             <div className="card-body">
                <div className="mt-5 mb-3">
                    <h5 className="title"> {props.name} </h5>
                </div>
                <div className="mb-5">
                    <p className="price">Price: ${props.price}</p>
                </div>
                <div className="text-center mb-2">
                    <button onClick={()=>props.handle(props)} className="btn-1">
                        ADD TO CART 
                        <span className='space'><FaShoppingCart/></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;