import React, { useState } from 'react';

import './Mega.css'

export default function Mega(props) {

    const [ qtde, setQtde ] = useState(props.qtde || 6);
    const startNumber = randomNumbers(qtde);
    const [numbers, setNumbers] = useState(startNumber);

    function randomNumberNotInclude(min, max, array) {
        const random = parseInt(Math.random() * (max - min) + min);
        return array.includes(random) ? randomNumberNotInclude(min, max, array) : random;
    }

    function randomNumbers(qtde) {
        const numbers = Array(qtde).fill(0).reduce((nums) => {
            const newNumber = randomNumberNotInclude(1, 60, nums);
            return [ ...nums, newNumber];
        }, [])
        .sort((n1, n2) => n1 - n2);

        return numbers;
    }

    return (
        <div className="Mega">
            <h2>Megasena</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Qtde de Números</label>
                <input
                    min="6"
                    max="15"
                    type="number" 
                    value={qtde} 
                        onChange={(e) => {
                            setQtde(+e.target.value)
                            setNumbers(randomNumbers(+e.target.value))
                        }}
                />
            </div>
            <button onClick={_ => setNumbers(randomNumbers(qtde))}>Gerar Números</button>
        </div>
    );


    /*
    let array = []

    for(let i = 1; i <= props.num; i++) {
        let num = parseInt(Math.random() * (50 - 1) + 1);
        
        array.push(num)

    }
    
    const span = array.map(num => {
        return <span>{num}, </span>
    })

    */
}