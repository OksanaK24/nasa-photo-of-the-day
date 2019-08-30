import React from "react";


function NewEventNASA (props){

    return (
        <div>
            <h3>{props.title}</h3>
            {/* <div className = "content-nasa"> */}
                <img src = {props.url} alt="" width="50%" height = "50%" />
                <p>{props.date}</p>
                <p>{props.explanation}</p>
            {/* </div> */}
        </div>
    )

// return (
//         <div>
//             {props.title}
//             {/* <div className = "content-nasa"> */}
//                 <img src = {props.url} alt="" width="50%" height = "50%" />
//                 {props.date}
//                 {props.explanation}
//             {/* </div> */}
//         </div>
//     )
}

export default NewEventNASA;