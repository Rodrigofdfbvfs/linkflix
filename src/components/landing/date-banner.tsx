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
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: 'Arial',
                backgroundColor: '#E50914',
                padding: '4px',
                textAlign: 'center',
            }}
        >
            Desconto só HOJE nessa página {date}
        </div>
    );
}
