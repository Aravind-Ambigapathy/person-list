import React from "react";

function Card(props) {
  return (
    <> 
      {/* <div style={{flexDirection:"row" , backgroundColor:"red",display:"flex",paddingLeft:"100px"}} > */}
      <div
        onClick={() => {
          props.onpress({
            name: props.name,
            age: props.age,
            img: props.img,
          });
        }}
        style={{
          marginLeft:'100px',
          marginTop:"5px",
          marginBottom: "45px",
          width: "200px",
        }}
      >
        {/* <img
          src={props.img}
          height="100px"
          width="200px"
          alt="pic"
          className="card_img"
        /> */}
        <div style={{marginTop:'50px'}} >
          <p style={{marginBottom:'-120px' }}>
           {props.ind+1} . Name : {props.name}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
