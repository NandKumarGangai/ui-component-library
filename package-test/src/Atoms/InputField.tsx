import React from 'react';
import './style.css';

const InputField = ({ type = 'text'}) => {
    return (
        <div>
            <input type={type} />
        </div>
    )
}

export default InputField;
