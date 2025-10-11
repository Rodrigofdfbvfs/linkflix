"use client";

import { useState, useEffect } from 'react';

export default function DateBanner() {
    const [date, setDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        setDate(`${day}/${month}/${year}`);
    }, []);

    if (!date) {
        return null;
    }

    return (
        <div
            style={{
                color: '#fff',
                fontWeight: 'bold',
                fontFamily: 'Arial',
                backgroundColor: '#201119',
                padding: '4px',
                textAlign: 'center',
            }}
        >
            <span style={{ color: '#FFFF00' }}>Desconto só </span>
            <span style={{ color: '#FFFF00' }}>HOJE </span>
            <span style={{ color: '#FFF' }}>nessa página </span>
            <span style={{ color: '#FFFF00' }}>{date}</span>
        </div>
    );
}