import { useSelector } from "react-redux"

export default function UserDetails2(){
    
    const user = useSelector((state) => state.users)

    return (
        <>
            <h1>Redux</h1>
            <h2>{user.city}</h2>
        </>
    )
}