import React, { useState } from "react";

function Display(props) {
  // const [displays,setdisplays] = useState([{name:"sachin",age:22}]);
  const { displays } = props;
  return (
    <div style={{backgroundColor:"white",height:"630px",marginTop:"90px", marginRight:"300px"}}>

<h1> Details</h1>

              <img height="200px" width="200px" src={displays.img} /> 

      

        <h3 style={{width:"100%"}}>
        name : {displays.name}

        </h3>
        <h3 style={{marginLeft:"40px",width:"150px"}}>
        age : {displays.age}

        </h3>
    </div>
  );
}

export default Display;
