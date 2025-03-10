import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, price, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3 className="px-3">{name}</h3>
            <h5 className="px-3">Price: {price}</h5>
            <p className="px-3 ellipsis">{description}</p>
            <Link className='px-3' to={`/booking/${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;