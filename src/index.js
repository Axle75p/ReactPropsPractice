import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//import "./contacts";
import contacts from "./contacts";

console.log(contacts[0].name, contacts[0].name);
ReactDOM.render(
  <div>
    <App
      name="Beyonce"
      imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
    <App
      name={contacts[1].name}
      imgURL={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email}
    />
    <App
      name={contacts[2].name}
      imgURL={contacts[0].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}
    />
  </div>,
  document.getElementById("root")
);

//https://c6fkx.csb.app/
//+2. Extract the contact card as a reusable Card component.
//+3. Use props to render the default Beyonce contact card
//+so the Card component can be reused for other contacts.
//+4. Import the contacts.js file to create card components.
