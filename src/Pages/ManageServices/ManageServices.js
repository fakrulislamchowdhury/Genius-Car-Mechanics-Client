import React from 'react';
import { useEffect, useState } from 'react';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://safe-falls-33970.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = id => {
        const url = `https://safe-falls-33970.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                }
            })
    }
    return (
        <div>
            <h1>ManageServices</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;