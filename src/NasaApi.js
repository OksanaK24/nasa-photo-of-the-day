import axios from "axios";
import React, {useState} from "react";


// const [date, updateDate] = useState();
// const [month, updateMonth] = useState(1);
// const [day, updateDay] = useState(1);

function ApiNasa (setter) {
    axios
      .get ("https://api.nasa.gov/planetary/apod?api_key=yngUKg5XGQ4Cc7Q1KLB9oLLGWldk0exMPbfhgKRA")
      
      .then(res => {
        console.log(res.data);
        setter(res.data);
        })
      .catch( error => {
        console.log("Sorry, not today =( ")
    })
}

export default ApiNasa;