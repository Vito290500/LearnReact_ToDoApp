import './TodoForm.css';
import { useState } from 'react';

export default function TodoForm({ onSave, onClose }){

    const [title, setTitle] = useState('');
    const [data, setData] = useState('');
    const [ora, setOra] = useState('');
    const [priority, setPriority] = useState('');

    const handleSave = () =>{
        onSave({title, data, ora, priority});

        setTitle('');
        setData('');
        setOra('');
        setPriority('');
    }

    function hadleClose(){
        
    }

    return (
        <div className="TodoFormModal">
            <div className='TodoFormModal_Header'>
                <h3>Inserisci Todo</h3>
                <button onClick={onClose}>X</button>
            </div>
            <div className='InputContainer'>
                <input 
                    type="text"
                    placeholder="Inserisci nome attività"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Inserisci data"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Inserisci ora"
                    value={ora}
                    onChange={(e) => setOra(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Inserisci priorità" 
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                />
            </div>
            <button onClick={handleSave}>Salva todo</button>
        </div>
    )
}