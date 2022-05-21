import React, { Fragment } from "react";

const store = ['a', 'b', 'c']

function Column({ type }) {
    return (
        <tr>
            <td>{console.log}</td>
        </tr>
    )
}

function App() {
    const renderColumns = (element, key) => (
        <Fragment key={`column-${key}`}>
            <Column type={element} />
        </Fragment>
    )

    return (
        <table>
            {store.map(renderColumns)}
        </table>
    )
}

export default App