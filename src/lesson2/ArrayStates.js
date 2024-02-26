import { useState } from "react"

export default function ArrayStates() {
    const [numbers, setNumbers] = useState([1, 45, 3, 45, 5, 6, 7, 8])
    const [products, setProducts] = useState([
        {
            name: "milk",
            price: 5.5
        },
        {
            name: "candy",
            price: 5.5
        }
    ])

    const [pName, setPName] = useState()

    const updateProduct = (productName, index) => {
        const newProducts = [...products]
        newProducts[index].name = productName
        setProducts(newProducts)
    }

    const addProduct = (newProducrtObject) => {
        const newProducts = [...products, newProducrtObject]
        setProducts(newProducts)
    }

    const removeProduct = (index) => {
        setProducts(currentProducts => currentProducts.filter((item, i)=> i !== index));
    }

    return (
        <>
            {/* <h1>{numbers[7]}</h1>
            <h2>{products[0].name}</h2>
            <h2>{products[1].price}</h2> */}

            <table className="table table-dark">
                {products? products.map((item, index) => (
                    <>
                    <tr>
                        <td><h3>product name is: {item.name}</h3></td>
                        <input placeholder="Update product name" onChange={(e)=>updateProduct(e.target.value, index)}></input>
                        <td><h3>product price is: {item.price}</h3></td>
                    </tr> 
                    </>
                )): <div>Products is null</div>}
                
            </table>

            <input placeholder="new product value" onChange={(e) => setPName(e.target.value)}></input>
            <button className="btn btn-info" onClick={()=>addProduct({name: pName, price: 8})}>Add Product</button>
            <button className="btn btn-danger" onClick={()=>removeProduct(1)}>Remove Product</button>
        </>
    )
}