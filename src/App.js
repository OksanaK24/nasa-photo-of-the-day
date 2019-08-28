import React, {useState, useEffect} from "react";
// import axios from "axios"; 
import "./App.css";
import NewEventNASA from "./NasaCard";
import ApiNasa from "./NasaApi";
// import Example from "./DatePicker";

function App() {

  const [data, updateData] = useState({});

useEffect(() => {
    ApiNasa(updateData);
    },[])

  return (

    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

      <NewEventNASA 
        title={data.title}
        url={data.url}
        explanation ={data.explanation}
      />
    </div>
  );
}

export default App;
 