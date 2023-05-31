import React, { useContext } from 'react'
import { conuterContext } from '../ConfigContext/CounterContext'

function Counter() {

    const { count, setCount } = useContext(conuterContext)
    return (
        <button onClick={() => setCount(count + 1)}>Counter</button>
    )
}

export default Counter