import React, { useState } from "react";
import axios from "axios";

const AuthApp = () => {
  const [email, setEmail] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const [virtualId, setVirtualId] = useState(null);
  const [apiKey, setApiKey] = useState(null);
  const [models, setModels] = useState([]);

  const login = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        email,
        jwt_token: jwtToken,
      });
      setVirtualId(response.data.virtual_id);
      setApiKey(response.data.api_key);
      setModels(response.data.models);
      alert("Login successful!");
    } catch (error) {
      alert(error.response?.data?.detail || "Login failed!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Fractal SSO Login</h1>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="JWT Token from SSO"
        value={jwtToken}
        onChange={(e) => setJwtToken(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>

      {virtualId && (
        <div>
          <h3>Virtual ID: {virtualId}</h3>
          <h3>API Key: {apiKey}</h3>
          <h3>Models: {models.join(", ")}</h3>
        </div>
      )}
    </div>
  );
};

export default AuthApp;
