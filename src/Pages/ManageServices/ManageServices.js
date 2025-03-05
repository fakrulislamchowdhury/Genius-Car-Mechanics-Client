import React from 'react';
import { useEffect, useState } from 'react';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`/services.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = id => {
        const url = `/services.json/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted');
                    const remaining = services.filter(service => service.id !== id);
                    setServices(remaining)
                }
            })
    }
    return (
        <div>
            <h1>ManageServices</h1>
            {
                services.map(service => <div key={service.id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service.id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;