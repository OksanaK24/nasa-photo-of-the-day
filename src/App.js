import React, {useState, useEffect} from "react";
// import axios from "axios"; 
import "./App.css";
import NewEventNASA from "./NasaCard";
import ApiNasa from "./NasaApi";
import DateExample from "./DatePicker";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import styled from "styled-components";


const ImgPart = styled.p`
  width: 100%;
  height: 100%; 
  margin: auto;
  // &:hover {
  //   transform: scale(3);
  // }
`

const TogButton = styled(Button)`
  background: MidnightBlue !important; 
`
const NewCard = styled(Card)`
  width: 800px;
  margin: auto;
`

function App() {

  const [data, updateData] = useState({});
  // const [newdate, updateNewDate] = useState(DateExample);

// useEffect((newdate) => {
//     ApiNasa(updateData, updateNewDate);
//     },[newdate])

useEffect(() => {
  ApiNasa(updateData);
  },[])

  return (

    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <p>
        Check it out 🚀!
      </p>
      <DateExample/>
      <br/>
      <br/>
      <div>
      <h3><NewEventNASA title={data.title} /></h3>
     
      <ImgPart>
        <NewEventNASA url={data.url}/>
      </ImgPart>
      <TogButton id="toggler" style={{ marginBottom: '1rem' }}>
        Let's see what it is! 
      </TogButton>
      <UncontrolledCollapse toggler="#toggler">
        <NewCard>
          <CardBody>
            <p><NewEventNASA explanation ={data.explanation}/> </p>
          </CardBody>
        </NewCard>
      </UncontrolledCollapse>
    </div>
      
      

      {/* <NewEventNASA
        title={data.title}
        url={data.url}
        explanation ={data.explanation}
      /> */}
      

        
    </div>
  );
}

export default App;
 