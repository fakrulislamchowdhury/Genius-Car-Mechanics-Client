import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`/services.json/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    return (
        <div>
            <h2>Details of {service.name}</h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;