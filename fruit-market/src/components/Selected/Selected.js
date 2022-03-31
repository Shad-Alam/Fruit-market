import React from 'react';
import './Selected.css';

const Selected = (props) => {
    console.log(props.data.name);
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <img className="img-1" src={props.data.img} alt="" />
            <h1 className='header'>{props.data.name}</h1>
        </div>
    );
};

export default Selected;