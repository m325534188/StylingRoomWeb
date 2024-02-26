import { useEffect, useState } from "react"
import Conditions from "./Conditions"

const UpdatedComponent = (OriginComponet) => {

    function NewComponent() {
        // New component abilities
        const [apiRes, setApiRes] = useState()
        const url = "https://api.github.com/users"
        const getApiData = async () => {
            debugger
            try {
                const response = await fetch(url)
                const responseJson = await response.json()
                console.log(responseJson)
                setApiRes(responseJson)
            }
            catch (error) {
                console.log(error)
            }
        }

        useEffect(() => {
            getApiData()
        })
        return <OriginComponet name="Efrat" resApi={apiRes}></OriginComponet>
    }
    return NewComponent
}

export default UpdatedComponent