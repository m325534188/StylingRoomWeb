import SecondComponent from "./SecondComponent";
import './style.css'
import pic from '../images/rabbit.jpg'
import { useState } from "react";

export default function FirstComponent() {
    var var1 = "value"
    var num = 2

    const styleCss = {
        color: "pink",
        backgroundColor: "white"
    }
    return (
        <>
            <p>{var1} num is: {num}</p>
            <h1 className="title">Component title</h1>
            <h2>I use React Hooks</h2>
            <SecondComponent hobby="to work 😂" name="Efrat"></SecondComponent>
            <img style={{ height: "100px", width: "80px" }} src={pic}></img>
        </>
    )
}