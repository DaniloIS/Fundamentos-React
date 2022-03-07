import React, { useState } from 'react';

import './Input.css'

export default function Input(props) {

    const [value, setValue] = useState('Valor');

    function setInputValue(e) {
        setValue(e.target.value);
    }

    return (
        <div className="Input">
            <h2>{ value }</h2>
            <div className={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={value} onChange={setInputValue} />
                <input value={value} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )
}