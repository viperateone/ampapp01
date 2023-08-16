// src/App.js

import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

//const [name2, setName2] = useState("");
//const [email2, setEmail2] = useState("");
//const [mobileNumber2, setMobileNumber2] = useState("");
//const [message2, setMessage2] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const wafIntegration = window.AwsWafIntegration;
      //let res = await wafIntegration.fetch("https://dfez0bzneh5yw.cloudfront.net/acfp", {
	let res = await wafIntegration.fetch("https://dg27nvcm66px4.cloudfront.net/acfp/index.html", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
     let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


 /* let handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://dfez0bzneh5yw.cloudfront.net/acfp", {
        method: "POST",
        body: JSON.stringify({
          name: name2,
          email: email2,
          mobileNumber: mobileNumber2,
        }),
      });
     let resJson = await res.json();
      if (res.status === 200) {
        setName2("");
        setEmail2("");
        setMessage2("User created successfully");
      } else {
        setMessage2("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
*/

  return (
    <div className="App">
	 <h1 class="heads"> User Registration </h1>  
      <form id="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
	  {/* 	<form id="login-form" onSubmit={handleSubmit2}>
        <input
          type="text"
          value={name2}
          placeholder="Name"
          onChange={(e) => setName2(e.target.value)}
        />
        <input
          type="text"
          value={email2}
          placeholder="Email"
          onChange={(e) => setEmail2(e.target.value)}
        />
        <input
          type="text"
          value={mobileNumber2}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber2(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form> */}
    </div>
  );
}

export default App;
