import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useState } from 'react';
const app = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Data from Backend</h1>
            <p>{data.message || "No data available"}</p>
        </div>
    );
};

export default app;
