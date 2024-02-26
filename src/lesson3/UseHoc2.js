import HierOrderComponent from "./HierOrderComponent"
function UseHoc2(props) {
    return (
        <>
            {props.name}
            <h1>Use HOC example</h1>

            <table className="table table-striped">
                {props.resApi? props.resApi.map((item, index) => (
                    <>
                    <tr>
                        <td><h3>response login is: {item.login}</h3></td>
                        <td><h3>response id is: {item.id}</h3></td>
                    </tr> 
                    </>
                )): <div>users is null</div>}
                
            </table>
        </>
    )
}
export default HierOrderComponent(UseHoc2)