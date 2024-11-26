
import React from "react";

function Child(props) {

    console.log("data-----------------", props);
    
    return(
        <div>

            <label htmlFor="">Enter age </label>
            <input type="text" placeholder="enter your age " />

            <h1>
                {props.naam}

                {props.dat.name}

            </h1>

                {/* {props.rate.length} */}
                {
                    props.price.map((maal)=>(       
                      <h2>{maal}</h2>  
                    ))
                }

           

        </div>
    )
    
}

export default Child;