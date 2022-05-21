import React, { Component } from 'react';
import Counter from './Counter';

const Buttons = ({ increment, decrement, count }) => (
    <div>
        <div>Valor atual: {count}</div>
        <div>
            <button onClick={increment}>Adicionar 1</button>
        </div>
        <div>
            <button onClick={decrement}>Remover 1</button>
        </div>
    </div>
)

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Counter render={
                    ({ increment, decrement, count }) => (
                        <Buttons
                            increment={increment}
                            decrement={decrement}
                            count={count}
                        />
                    )
                } />
            </div>
        );
    }
}

export default App;
