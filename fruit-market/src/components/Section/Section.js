import React, { useState } from 'react';
import Product from '../Product/Product';
import Selected from '../Selected/Selected';
import banana from './banana.jpg';
import cherry from './cherry.jpg';
import dargon from './dragon.jpg';
import dragonRed from './dragonred.jpg';
import mango from './mango.jpg';
import orange from './orange.jpg';
import './Section.css';
import strawberry from './strawberry.jpg';
import watermelon_yellow from './watermelon-yellow.jpg';
import Watermelon from './Watermelon.jpg';

const fruits = [
    {
        key: 12,
        name: "Dragon",
        price: "39",
        img: `${dargon}`
    },

    {
        key: 13,
        name: "Water Melon",
        price: "43",
        img: `${Watermelon}`
    },

    {
        key: 14,
        name: "Water Melon Yellow",
        price: "50",
        img: `${watermelon_yellow}`
    },

    {
        key: 15,
        name: "Strawberry",
        price: "87",
        img: `${strawberry}`
    },

    {
        key: 25,
        name: "Orange",
        price: "11",
        img: `${orange}`
    },

    {
        key: 43,
        name: "Mango",
        price: "21",
        img: `${mango}`
    },

    {
        key: 33,
        name: "Banana",
        price: "21",
        img: `${banana}`
    },


    {
        key: 399,
        name: "Cherry",
        price: "21",
        img: `${cherry}`
    },

    {
        key: 200,
        name: "Dragon Red",
        price: "81",
        img: `${dragonRed}`
    }
];
 
const Section = () => {
    const [cart, setCart] = useState([]);

    const handleCart = (data) =>{
        const newCart = [...cart, data];
        setCart(newCart);
    }

    const reset = () =>{
        const newArr = [];
        setCart(newArr);
    }

    const chooseOne = () =>{
        const reset = [];
        setCart(reset);
        let n = Math.floor(Math.random()*cart.length)+1;
        let choose = cart[n-1];
        const newCart = [choose];
        setCart(reset);
        setCart(newCart);
        console.log(choose);
    }

    return (
        <div className="mt-5">
            <div className="main-section">
                <div className="pruduct d-flex align-items-center justify-content-center row">
                    {
                        fruits.map(product => <Product
                            key = {product.key}
                            name = {product.name}
                            price = {product.price}
                            img = {product.img}
                            handle = {handleCart}
                        > </Product>)
                    }
                </div>

                <div className="part-2 mt-2">
                    <div>
                        <h1 className="mb-5"> Selected Fruits: </h1>
                        <div>
                            {
                                cart.map(data=><Selected
                                    data = {data}
                                ></Selected>)
                            }
                        </div>
                        <button onClick={chooseOne} className="btn-2 mb-4 mt-4">CHOOSE 1 FOR ME</button>
                        <button onClick={reset} className="btn-2">RESET</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;