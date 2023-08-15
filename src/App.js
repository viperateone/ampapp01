// src/App.js

import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
    <head>
	src="<script type="text/javascript" src="https://83de05343b4f.edge.sdk.awswaf.com/83de05343b4f/8fe518bd50be/challenge.js" defer></script>"
	</head>
      const wafIntegration = window.AwsWafIntegration;
      let res = await wafIntegration.fetch("https://dfez0bzneh5yw.cloudfront.net/acfp", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
     let resJson = await res.json();
//	const resJson = await AwsWafIntegration.getToken()
//	    .catch(e => { // error handling? 
//	    })
//	    .then( //token => {
		    //return loginToMyPage()}
//	    )
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

  return (
    <div className="App">
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

    </div>
  );
}

export default App;
