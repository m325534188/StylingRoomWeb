import { useState } from "react"

function StatesComponent() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    const func = () => {
        debugger
        var num =1
        setName("new name")
        alert("H1 :)")
        console.log("=> is lambda")
        return num
    }

    return (
        <>
            <h2>name is: {name}</h2>
            <h2>password is: {password}</h2>
            <input placeholder="Insert Name" onChange={(event)=>setName(event.target.value)}></input>
            <br></br>
            <input placeholder="Insert Password" onChange={(event)=>setPassword(event.target.value)}></input>
            <button onClick={(e) => func()}>Login</button>
        </>
    )
}
export default StatesComponent