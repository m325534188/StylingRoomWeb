import { useEffect, useState } from "react"

export default function ApiExample(){
    const [apiRes, setApiRes] = useState()
    const url = "https://api.github.com/users"
    const  getApiData = async () =>{
        debugger
        try{
            const response = await fetch(url)
            const responseJson =await response.json()
            console.log(responseJson)
            setApiRes(responseJson)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        getApiData()
    })
    return(
        <>
        <h1>Api Example</h1>

        <table className="table table-striped">
                {apiRes? apiRes.map((item, index) => (
                    <>
                    <tr>
                        <td><h3>response login is: {item.login}</h3></td>
                        <td><h3>response id is: {item.id}</h3></td>
                    </tr> 
                    </>
                )): <div>Products is null</div>}
                
            </table>
        </>
    )
}