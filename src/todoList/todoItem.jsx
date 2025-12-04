import './todoItem.css';
import { useState } from 'react';

export default function TodoItem({ title, data, ora, priority }){
    return (
        <li className='todoItem'>
            <label className="checkboxWrapper">
                <input type="checkbox" />
                <span className="customCheck"></span>
            </label>
            <p>{title}</p>
            <p>{data}</p>
            <p>{ora}</p>
            <p>{priority}</p>
            <div className='tools'>
                <button>🗑️</button>
                <button>✏️</button>
            </div>
        </li>
    )
}