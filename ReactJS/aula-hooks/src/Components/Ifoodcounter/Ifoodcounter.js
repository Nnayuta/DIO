import React, { useState, useEffect } from 'react';
import './Ifoodcounter.css'

const Ifoodcounter = () => {

    const [value, setValue] = useState(1)
    const [buttonSyle, setButtonStyle] = useState("counter-button-minus-active")
    const [moeda, setMoeda] = useState("R$ 0,00")

    useEffect(() => {
        setMoeda(`R$ ${(value * 0.5).toFixed(2)}`)
    }, [value])

    function down() {

        if (value <= 1) {
            setButtonStyle("counter-button-minus-desactive")
        }

        if (value > 0) {
            setValue(value - 1)
        }
    }

    function up() {
        setValue(value + 1)
        setButtonStyle("counter-button-minus-active")
    }

    return (
        <div className='countex-wrapper'>
            <button
                className={buttonSyle}
                onClick={down}
            >-</button>
            <p>
                {value}
            </p>
            <button
                className='counter-button-plus-active'
                onClick={up}
            >+</button>

            <button id='moeda'>{moeda}</button>
        </div>
    );
}

export default Ifoodcounter;
