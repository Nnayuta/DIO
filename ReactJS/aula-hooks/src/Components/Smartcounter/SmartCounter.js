import { useState } from 'react'

function SmartCounter() {

    //Retorna um vetor
    //1. variavel stateful
    //2. função amarrada a essa variavel que atualiza o valor
    const [quantity, upQuantity] = useState(0)

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;