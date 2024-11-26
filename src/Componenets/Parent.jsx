
import React from "react";
import Child from "./Child";

function Parent() {

    let name = "arslan";
    let age = 21;
    let wieght = "50kg"

    let price = [10,30,40,50,60,70]

    let obj = {
        name : ":kaif ",
        age : 18 ,
        study : "B.Pharma"
    }

    
    return(
        <div>
            <label htmlFor="arslan">Name </label>
        <input type="text" placeholder="Enter your name"/>
       <Child naam = {name} umar = {age} bhaar = {wieght} dat = {obj} price = {price}/>
        </div>
    )
}

export default Parent;