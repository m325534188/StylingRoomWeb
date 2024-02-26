import { useEffect, useState } from "react"

export default function Effects() {
    const[vari, setVari] = useState(true)
    const[name, setName] = useState("Efart")
    const[number, setNumber] = useState(67)

     useEffect(() => {

        alert("Page loaded 😂")
    }, [vari, name])

   
    return (
        <>
            <h1>div</h1>
            {name}
            {number}
            {vari === true? <h2>the var is true</h2> : <h2>the var is false</h2>}

            {/* Example in return condition */}
            <button onClick={()=> setVari(vari === true? false : true)}>change var value</button>
            <button onClick={()=> setName("new name")}>change name</button>
            <button onClick={()=> setNumber(9)}>change number</button>

        </>
    )
}