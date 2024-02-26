import FirstComponent from "./FirstComponent";
import './style.css'

export default function SecondComponent(props) {

    return (
        <>
            <h1>Hi {props.name} Your hoby is: {props.hobby}</h1>
            <button>Button from SecondComponent</button>
        </>
    )
}