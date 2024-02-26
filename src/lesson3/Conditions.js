import { useEffect, useState } from "react"

export default function Conditions() {

     useEffect(() => {
        alert("Page loaded 😂")
    })

    const[vari, setVari] = useState(true)
    const func = (data) => {
        debugger
        if (data === null){
            console.log("the data is null")
        }
        else{
            console.log(data)
        }
    }

    return (
        <>
            <h1>div</h1>
            {vari === true? <h2>the var is true</h2> : <h2>the var is false</h2>}

            {/* Example of JS condition */}
            <button onClick={()=> func("value")}>click</button>

            {/* Example in return condition */}
            <button onClick={()=> setVari(vari === true? false : true)}>change var value</button>

        </>
    )
}