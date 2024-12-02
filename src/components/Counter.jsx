import { useState } from "react";
const Counter = () => {
    const [ count, setCount] = useState(0)
    return(
        <>
            <h1>THIS IS A COUNTER</h1>
            <h2>You clicked the MASTER button {count} times</h2>
            <button onClick={() => setCount(count+1)}>INCREMENT</button>
            <button onClick={() => setCount(count-1)}>DECREMENT</button>
        </>
    )
}

export default Counter;