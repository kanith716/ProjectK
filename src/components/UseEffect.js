import React, { useState, useEffect } from 'react'

function HookEffect() {
    // const [ count, setCount] = useSate(1);
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("useEffect called" + count);
        
        return (
            console.log("Use return funtion in useeffect")
        )
    })
    return (
        <div>
            <h2>Hii {count}</h2>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default HookEffect;
