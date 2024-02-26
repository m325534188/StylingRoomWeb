import { useSelector } from "react-redux"

export default function UserDetails() {

    const user = useSelector((item) => item.users)
    const products = useSelector((state) => state.products)
    return (
        <>
            <h1>Redux</h1>
            <h2>{user.name}</h2>
            <h3>{user.city}</h3>
            <h1>{products.name}</h1>
        </>
    )
}